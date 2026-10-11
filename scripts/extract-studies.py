#!/usr/bin/env python3
"""Pull case-study copy from nehang-portfolio into studies.js for nehangOS."""
from __future__ import annotations

import json
import re
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path("/Users/nehangpatel/Downloads/Portfolio Site")
SRC = ROOT / "nehang-portfolio" / "projects"
OUT = ROOT / "nehang-portfolio-os" / "assets" / "js" / "studies.js"

MAP = {
    "nexusiq": "nexusiq-ai.html",
    "moodboard": "moodboard-ai.html",
    "dirscope": "dirscope.html",
    "fintrackr": "fintrackr.html",
    "scrape": "scraping-pipeline.html",
    "mtsui": "meditechsafe-ui.html",
    "coursearc": "coursearc.html",
    "pulse": "pulseboard.html",
    "revstream": "revstream-ai.html",
}

SKIP_SECTIONS = set()


class TextBits(HTMLParser):
    def __init__(self):
        super().__init__()
        self.parts: list[str] = []
        self._skip = 0

    def handle_starttag(self, tag, attrs):
        if tag in ("script", "style"):
            self._skip += 1
        if tag == "br":
            self.parts.append(" ")

    def handle_endtag(self, tag):
        if tag in ("script", "style") and self._skip:
            self._skip -= 1

    def handle_data(self, data):
        if self._skip:
            return
        self.parts.append(data)

    def text(self) -> str:
        return re.sub(r"\s+", " ", "".join(self.parts)).strip()


def txt(html: str) -> str:
    if not html:
        return ""
    p = TextBits()
    p.feed(html)
    return p.text()


def all_blocks(html: str, pattern: str) -> list[str]:
    return re.findall(pattern, html, flags=re.S | re.I)


def first(html: str, pattern: str) -> str:
    m = re.search(pattern, html, flags=re.S | re.I)
    return m.group(1).strip() if m else ""


def inner(html: str, cls: str) -> str:
    return first(html, rf'<[^>]+class="[^"]*{re.escape(cls)}[^"]*"[^>]*>(.*?)</(?:p|div|h[1-6]|span|strong|em)>')


def parse_study(pid: str, html: str) -> dict:
    hero = first(html, r'<header class="cs-hero">(.*?)</header>')
    content = first(html, r'<div class="cs-content">(.*)<div class="cs-footer-nav')
    if not content:
        content = first(html, r'<div class="cs-content">(.*?)</div>\s*</div>\s*</main>')

    meta = [
        {"label": txt(lab), "val": txt(val)}
        for lab, val in re.findall(
            r'<p class="cs-meta-label">(.*?)</p>\s*<p class="cs-meta-val">(.*?)</p>',
            hero,
            flags=re.S,
        )
    ]
    metrics = [
        {"n": txt(n), "l": txt(l)}
        for n, l in re.findall(
            r'<div class="cs-metric-n">(.*?)</div>\s*<div class="cs-metric-l">(.*?)</div>',
            content,
            flags=re.S,
        )
    ]

    sections = []
    for m in re.finditer(
        r'<section class="cs-section[^"]*" id="([^"]+)">(.*?)</section>',
        content,
        flags=re.S,
    ):
        sid, body = m.group(1), m.group(2)
        if sid in SKIP_SECTIONS:
            continue
        label = txt(first(body, r'<p class="cs-section-label">(.*?)</p>'))
        title = txt(first(body, r'<h2 class="cs-section-title">(.*?)</h2>'))
        sbody = first(body, r'<div class="cs-section-body">(.*)$') or body
        sections.append({"id": sid, "label": label, "title": title, **parse_body(sbody)})

    imgs = []
    for src, alt, cap in re.findall(
        r'<img src="([^"]+)"[^>]*alt="([^"]*)"[^>]*>\s*<figcaption[^>]*>(.*?)</figcaption>',
        html,
        flags=re.S,
    ):
        if "placeholder" in src.lower():
            continue
        if src.startswith("../assets/"):
            src_path = ROOT / "nehang-portfolio" / src.replace("../", "")
            dest_rel = "assets/projects/" + pid + "-" + Path(src).name
            dest = ROOT / "nehang-portfolio-os" / dest_rel
            dest.parent.mkdir(parents=True, exist_ok=True)
            if src_path.exists():
                dest.write_bytes(src_path.read_bytes())
                src = dest_rel
            else:
                continue
        imgs.append({"src": src, "alt": txt(alt), "cap": txt(cap)})

    return {
        "id": pid,
        "eyebrow": txt(first(hero, r'<p class="cs-eyebrow[^"]*">(.*?)</p>')),
        "lead": txt(first(hero, r'<p class="cs-lead r">(.*?)</p>')),
        "leadSub": txt(first(hero, r'<p class="cs-lead-sub r">(.*?)</p>')),
        "meta": meta,
        "metrics": metrics,
        "images": imgs,
        "sections": sections,
    }


def paras(html: str) -> list[str]:
    out = []
    for chunk in re.findall(r"<p(?![^>]*class=)[^>]*>(.*?)</p>", html, flags=re.S) + re.findall(
        r'<p class="(?!cs-)[^"]*">(.*?)</p>', html, flags=re.S
    ):
        t = txt(chunk)
        if t:
            out.append(t)
    # also catch bare <p> in section bodies
    for chunk in re.findall(r"<p>(.*?)</p>", html, flags=re.S):
        t = txt(chunk)
        if t and t not in out:
            out.append(t)
    return out


def parse_body(html: str) -> dict:
    data: dict = {}
    glance = [
        {"label": txt(a), "val": txt(b)}
        for a, b in re.findall(
            r'<p class="cs-glance-label">(.*?)</p>\s*<p class="cs-glance-val">(.*?)</p>',
            html,
            flags=re.S,
        )
    ]
    if glance:
        data["glance"] = glance

    quote = txt(first(html, r'<blockquote class="cs-quote[^"]*">(.*?)</blockquote>'))
    if quote:
        data["quote"] = quote

    goals = [txt(x) for x in re.findall(r"<li>(.*?)</li>", first(html, r"<ul>(.*?)</ul>") or "", flags=re.S)]
    goals = [g for g in goals if g]
    if goals and not re.search(r"cs-features|cs-problems|cs-steps", html):
        data["list"] = goals

    flow = [txt(x) for x in re.findall(r"<span(?![^>]*cs-arrow)[^>]*>(.*?)</span>", first(html, r'<div class="cs-flow">(.*?)</div>') or "", flags=re.S)]
    flow = [f for f in flow if f and f != "→"]
    items = [
        {"title": txt(a), "desc": txt(b)}
        for a, b in re.findall(
            r'<div class="cs-arch-item"><strong>(.*?)</strong>(.*?)</div>',
            html,
            flags=re.S,
        )
    ]
    if flow or items:
        data["arch"] = {"flow": flow, "items": items}

    features = [
        {"title": txt(a), "desc": txt(b)}
        for a, b in re.findall(
            r'<p class="cs-feature-title">(.*?)</p>\s*<p class="cs-feature-desc">(.*?)</p>',
            html,
            flags=re.S,
        )
    ]
    if features:
        data["features"] = features

    dives = []
    for title, rest in re.findall(r"<h4>(.*?)</h4>\s*<p>(.*?)</p>", html, flags=re.S):
        dives.append({"title": txt(title), "body": txt(rest)})
    if dives and "cs-problem" not in html:
        data["dives"] = dives

    timeline = [
        {"phase": txt(a), "title": txt(b), "desc": txt(c)}
        for a, b, c in re.findall(
            r'<p class="cs-tl-phase">(.*?)</p>\s*<p class="cs-tl-title">(.*?)</p>\s*<p class="cs-tl-desc">(.*?)</p>',
            html,
            flags=re.S,
        )
    ]
    if timeline:
        data["timeline"] = timeline

    problems = []
    for block in re.findall(r'<div class="cs-problem[^"]*">(.*?)</div>', html, flags=re.S):
        title = txt(first(block, r"<h4>(.*?)</h4>"))
        ps = [txt(x) for x in re.findall(r"<p(?![^>]*cs-solution)[^>]*>(.*?)</p>", block, flags=re.S)]
        sol = txt(first(block, r'<p class="cs-solution[^"]*">(.*?)</p>'))
        problems.append({"title": title, "problem": ps[0] if ps else "", "solution": sol.replace("Solution →", "").strip()})
    if problems:
        data["problems"] = problems

    lessons = [
        {"n": txt(a), "text": txt(b)}
        for a, b in re.findall(
            r'<span class="cs-lesson-n">(.*?)</span>\s*<span>(.*?)</span>',
            html,
            flags=re.S,
        )
    ]
    if lessons:
        data["lessons"] = lessons

    steps = []
    for n, body in re.findall(
        r'<span class="cs-step-n">(.*?)</span>\s*<p>(.*?)</p>',
        html,
        flags=re.S,
    ):
        steps.append({"n": txt(n), "text": txt(body)})
    if steps:
        data["steps"] = steps

    stack = [
        {"tech": txt(a), "why": txt(b)}
        for a, b in re.findall(
            r'<span class="cs-rat-tech">(.*?)</span>\s*<span class="cs-rat-why">(.*?)</span>',
            html,
            flags=re.S,
        )
    ]
    if stack:
        data["stack"] = stack

    tags = [txt(x) for x in re.findall(r'<span class="cs-tag">(.*?)</span>', html, flags=re.S)]
    if tags:
        data["tags"] = tags

    # leftover intro paragraphs (not already classified)
    intro = []
    for chunk in re.findall(r"<p>(.*?)</p>", html, flags=re.S):
        t = txt(chunk)
        if not t:
            continue
        if t in (data.get("quote") or ""):
            continue
        if any(t == d["body"] for d in data.get("dives", [])):
            continue
        if any(t == p["problem"] for p in data.get("problems", [])):
            continue
        intro.append(t)
    if intro and not glance:
        data["paras"] = intro[:4] if len(intro) > 6 else intro

    if glance:
        data["paras"] = []

    return data


def main():
    studies = {}
    for pid, fname in MAP.items():
        html = (SRC / fname).read_text()
        studies[pid] = parse_study(pid, html)
        print(pid, "sections", len(studies[pid]["sections"]), "lead", bool(studies[pid]["lead"]))
    OUT.write_text("window.STUDIES = " + json.dumps(studies, ensure_ascii=False, indent=2) + ";\n")
    print("wrote", OUT, "bytes", OUT.stat().st_size)


if __name__ == "__main__":
    main()
