window.STUDIES = {
  "nexusiq": {
    "id": "nexusiq",
    "eyebrow": "Web · Enterprise AI · Completed MVP",
    "lead": "An enterprise decision-intelligence platform for due diligence: upload a data room, retrieve with hybrid search, run five specialist agents in parallel, and leave with cited decisions — not a black-box summary.",
    "leadSub": "NexusIQ is a completed, demoable MVP. Organizations, workspaces, and projects sit on Auth.js + RBAC. Documents flow through OCR, chunking, and embeddings into Financial, Legal, Compliance, Risk, and Fraud agents. Consensus, contradictions, missing-evidence checklists, a risk simulator, action-plan kanban, and multi-format report export close the analyst loop — on Vercel + Supabase with local Ollama inference at zero paid AI API cost.",
    "meta": [
      {
        "label": "Role",
        "val": "Sole designer & developer"
      },
      {
        "label": "Timeline",
        "val": "2026"
      },
      {
        "label": "Context",
        "val": "Personal · Enterprise AI · Due diligence"
      },
      {
        "label": "Status",
        "val": "Completed MVP · Live demo"
      }
    ],
    "metrics": [
      {
        "n": "5",
        "l": "Specialist agents"
      },
      {
        "n": "1",
        "l": "Explainable consensus"
      },
      {
        "n": "$0",
        "l": "Paid AI APIs"
      },
      {
        "n": "390+",
        "l": "Automated tests"
      }
    ],
    "images": [
      {
        "src": "assets/projects/nexusiq-architecture.png",
        "alt": "Decision pipeline: Data Room Upload → Retrieve & Index (semantic + keyword) → Multi-Agent Analysis (Financial, Legal, Compliance, Risk, Fraud → Consensus) → Cited Decisions. Backed by PostgreSQL, document storage, and local Ollama inference.",
        "cap": "Decision pipeline: Data Room Upload → Retrieve & Index (semantic + keyword) → Multi-Agent Analysis (Financial, Legal, Compliance, Risk, Fraud → Consensus) → Cited Decisions. Backed by PostgreSQL, document storage, and local Ollama inference."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "label": "Overview",
        "title": "At a glance",
        "glance": [
          {
            "label": "Product type",
            "val": "Web · Enterprise SaaS · Multi-agent diligence"
          },
          {
            "label": "My contribution",
            "val": "Product design, RAG + multi-agent architecture, data room, RBAC, risk surfaces, report export, Admin ops, Vercel/Supabase deploy"
          },
          {
            "label": "Users",
            "val": "Deal analysts, reviewers, and org owners running M&A and investment diligence"
          },
          {
            "label": "Stack",
            "val": "Next.js 15, React 19, Prisma, PostgreSQL + pgvector, Supabase, Auth.js, Ollama"
          }
        ],
        "paras": []
      },
      {
        "id": "visual-proof",
        "label": "Visual proof",
        "title": "Interface & artifacts",
        "paras": [
          "Product architecture and decision flow — how documents become cited, explainable recommendations."
        ]
      },
      {
        "id": "context",
        "label": "Context",
        "title": "Background & origin",
        "quote": "Retrieve before reason. Cite every claim. Show every disagreement. Never ship a black-box recommendation into a deal room.",
        "paras": [
          "Traditional diligence is slow and fragmented. Analysts download folders of PDFs, chase numbers across spreadsheets, and reconcile conflicting statements by hand before a partner will trust a board memo. Generative AI promised speed — then delivered uncited paragraphs nobody can defend in a deal room.",
          "NexusIQ is built for that reality. The product assumes documents are messy, agents will disagree, and every recommendation must point back to a page and clause. The experience target is deliberate: Palantir-depth analysis, Bloomberg-level clarity, Deloitte-grade diligence discipline, and Stripe-level product polish — without paying per-token API fees."
        ]
      },
      {
        "id": "challenge",
        "label": "Problem",
        "title": "The challenge",
        "paras": [
          "Diligence is not a chat problem. A usable system has to ingest entire data rooms, index them for both keyword and semantic recall, run domain specialists that can disagree in public, and still produce artifacts a partner can open in a meeting — PDF, spreadsheet, or slide deck.",
          "Trust collapses if the model invents conflicts or hides uncertainty. Engineering had to make citations first-class, keep inference optional for cloud demos (Ollama is local or linked), and ensure report assembly never depends on a live LLM call at download time."
        ]
      },
      {
        "id": "goals",
        "label": "Strategy",
        "title": "Goals & constraints",
        "list": [
          "Make onboarding feel like a real SaaS product: register → organization → workspace → project, with role-based access from Owner to Viewer",
          "Treat the data room as the source of truth — folders, versions, previews, classification, retention, and share links",
          "Index documents for hybrid retrieval so agents and chat answer from evidence, not vibes",
          "Run Financial, Legal, Compliance, Risk, and Fraud agents in parallel and synthesize an explainable consensus",
          "Surface cross-document contradictions and missing evidence against deal-type checklists",
          "Let analysts stress-test assumptions in a risk simulator and turn findings into an action-plan kanban",
          "Export Executive, Board, Investment Memo, Audit, and Risk Register packs locally as Markdown, PDF, XLSX, PPTX, or ZIP",
          "Ship History, Settings, and owner Admin so the product feels operable — not a prototype dashboard"
        ]
      },
      {
        "id": "architecture",
        "label": "System",
        "title": "Architecture overview",
        "arch": {
          "flow": [
            "Upload",
            "Retrieve & Index",
            "Multi-Agent Analysis",
            "Consensus",
            "Cited Decisions",
            "Reports"
          ],
          "items": [
            {
              "title": "Data room",
              "desc": "Secure upload from folders and drives; version history, preview, tags, trash, and read-only share links"
            },
            {
              "title": "Retrieve & index",
              "desc": "OCR → chunk → embed → NER; hybrid semantic + keyword search with saved queries"
            },
            {
              "title": "Specialist agents",
              "desc": "Financial, Legal, Compliance, Risk, and Fraud — parallel analysis with structured findings"
            },
            {
              "title": "Consensus engine",
              "desc": "Traceable agreement and disagreement; per-agent rationale kept visible"
            },
            {
              "title": "Decision surfaces",
              "desc": "Contradictions, missing-info checklist, risk heatmap, what-if simulator, action kanban"
            },
            {
              "title": "Cited exports",
              "desc": "Board and audit packs assembled from stored intelligence — never regenerated blindly at download"
            },
            {
              "title": "Platform shell",
              "desc": "Auth, orgs, workspaces, projects, notifications, dual-theme UI, command palette, Admin health"
            }
          ]
        },
        "paras": [
          "NexusIQ is a modular monolith: Next.js App Router for the product UI and API routes, Prisma over PostgreSQL 16 with pgvector for embeddings, and Supabase for production database pooling and file storage. Feature folders own their domain end-to-end — data room, intelligence, contradictions, reports — instead of a sprawling shared services layer.",
          "The decision pipeline mirrors the product story. Documents land in the data room, get indexed for hybrid retrieval, then feed specialist agents that converge on consensus with citations. PostgreSQL holds metadata and vectors; the filesystem (or Supabase Storage) holds originals; Ollama supplies local LLM and embedding inference when available. Chat, agents, contradiction scans, and simulations need a reachable Ollama endpoint. Missing-info checklists, risk rollups, action plans, History, Settings, and report export keep working from stored artifacts when inference is offline — so the Vercel demo stays useful without a public LLM."
        ]
      },
      {
        "id": "built",
        "label": "Delivery",
        "title": "What I built",
        "features": [
          {
            "title": "Organization & access model",
            "desc": "Three-step onboarding into org → workspace → project. Owner, Admin, Analyst, Reviewer, and Viewer roles gate every API. Invites, in-app notifications, and deferred account deletion match real SaaS expectations."
          },
          {
            "title": "Production data room",
            "desc": "Folder trees with drag-drop and bulk upload, version compare, PDF/Office/image preview, classification tags, retention/trash, audit CSV export, and deep links into specific documents."
          },
          {
            "title": "Document intelligence pipeline",
            "desc": "Classify → OCR → chunk → embed → named-entity extraction. Hybrid search blends keyword and semantic retrieval; chat streams answers with confidence and inline citations."
          },
          {
            "title": "Multi-agent analysis",
            "desc": "Financial, Legal, Compliance, Risk, and Fraud specialists run in parallel. An Executive package and consensus view show where agents agree, where they diverge, and which documents support each claim."
          },
          {
            "title": "Contradiction detection",
            "desc": "Citation-validated cross-document fact conflicts with side-by-side evidence, severity and status badges, resolution notes, and promote-to-finding for the risk register."
          },
          {
            "title": "Missing information & risk overview",
            "desc": "Deal-type checklists compared against the data room (expected folders and evidence gaps). Enterprise risk score, severity heatmap, and rollups of open findings plus contradictions."
          },
          {
            "title": "Risk simulator & action plan",
            "desc": "What-if scenarios (revenue, churn, lawsuit, price, custom) measured against Financial and Risk baselines with score deltas and run history. Kanban action plans with assignees, priorities, and suggest-from-intelligence without requiring a live model."
          },
          {
            "title": "Board-ready reporting",
            "desc": "Executive, Board, Investment Memo, Audit, Risk Register, and Action Plan outputs. Local generators for Markdown, PDF, XLSX, PPTX, and ZIP — plus share links and compare views."
          },
          {
            "title": "Timeline, graph & audit",
            "desc": "AI and manual timeline events, relationship force graph, org/project History with filters and project score compare."
          },
          {
            "title": "Settings & Admin",
            "desc": "Profile, security, notification prefs, Ollama model settings, dark/light appearance, keyboard shortcuts. Owner Admin covers DB/Ollama/storage health, usage charts, failed-doc retry, and FTS/embeddings reindex."
          }
        ],
        "paras": [
          "I designed and built the full product loop as a solo engineer — from auth and org tenancy through multi-agent intelligence, diligence tooling, and operator Admin."
        ]
      },
      {
        "id": "deep-dives",
        "label": "Technical",
        "title": "Deep dives",
        "dives": [
          {
            "title": "Cited consensus instead of averaged scores",
            "body": "Each specialist returns structured findings tied to retrieved chunks. Consensus does not collapse five opinions into one mystery number — it stores per-agent rationale and resolution notes so a reviewer can see disagreement as signal. That design choice is the product: diligence without explainability is just faster guessing."
          },
          {
            "title": "Hybrid retrieval before any generation",
            "body": "Agents and chat are forced through keyword + semantic retrieval over chunked embeddings. Contradiction scans validate that alleged conflicts still map to real citations. If the evidence is missing, the system surfaces a gap instead of inventing a bridge between two PDFs."
          },
          {
            "title": "Inference-optional cloud demo",
            "body": "Vercel hosts the app; Supabase hosts data and files; Ollama stays local or optionally linked over HTTPS. Surfaces that only need stored intelligence — checklists, risk rollups, action plans, History, report assembly — work without a live model. Agent paths fail clearly when Ollama is unreachable rather than silently fabricating answers."
          },
          {
            "title": "Export that never calls the LLM",
            "body": "PDF, spreadsheet, and slide generators assemble from persisted intelligence artifacts. That keeps board packs reproducible, offline-friendly, and free of surprise token costs at the moment a partner asks for the deck."
          }
        ]
      },
      {
        "id": "timeline",
        "label": "Process",
        "title": "Timeline & phases",
        "timeline": [
          {
            "phase": "Foundation",
            "title": "Auth, organizations, workspaces, projects, RBAC, notifications",
            "desc": "SaaS shell reviewers can register into and invite teammates"
          },
          {
            "phase": "Ingest & retrieve",
            "title": "Data room, document pipeline, hybrid search, cited chat",
            "desc": "Evidence layer before any agent reasoning"
          },
          {
            "phase": "Intelligence core",
            "title": "Specialist agents, consensus, timeline, relationship graph, reports",
            "desc": "Parallel analysis with exportable Executive and Board packs"
          },
          {
            "phase": "Diligence loop",
            "title": "Contradictions, missing info, risks, simulator, action plan",
            "desc": "From findings to decisions and follow-ups"
          },
          {
            "phase": "Operate & ship",
            "title": "History, Settings, Admin, tests, Vercel + Supabase deploy",
            "desc": "Completed MVP with live public demo"
          }
        ]
      },
      {
        "id": "results",
        "label": "Impact",
        "title": "Results & outcomes",
        "list": [
          "End-to-end diligence workflow live on Vercel with dual-theme premium UI",
          "Five specialist agents plus explainable consensus grounded in document citations",
          "Contradiction scan, missing-evidence checklist, risk simulator, and action-plan kanban",
          "Local multi-format report export with zero paid AI API spend",
          "390+ Vitest tests and Playwright coverage across auth through Admin"
        ],
        "tags": [
          "Next.js",
          "React 19",
          "TypeScript",
          "Prisma",
          "PostgreSQL",
          "pgvector",
          "Ollama",
          "Multi-Agent",
          "RAG",
          "Supabase",
          "Vercel"
        ],
        "paras": [
          "NexusIQ is a completed enterprise diligence MVP — register, ingest a data room, run analysis, and walk out with cited artifacts."
        ]
      },
      {
        "id": "problems",
        "label": "Engineering",
        "title": "Hard problems",
        "problems": [
          {
            "title": "Trust in AI for regulated workflows",
            "problem": "A single opaque score or chat paragraph cannot survive partner or auditor scrutiny.",
            "solution": "Per-agent opinions, citation-first UI, and visible disagreements in consensus — never a black box."
          },
          {
            "title": "Hallucinated contradictions",
            "problem": "Naive LLM comparison invents conflicts between documents that do not actually disagree.",
            "solution": "Citation-validated scans with side-by-side evidence; promote only grounded conflicts into findings."
          },
          {
            "title": "Demo without paid inference",
            "problem": "Cloud hosts cannot run Ollama natively, but portfolio reviewers still need a working product.",
            "solution": "Split online vs offline surfaces; optional OLLAMA_BASE_URL; clear empty states when agents are unavailable."
          },
          {
            "title": "Report generation tied to the model",
            "problem": "Regenerating memos at download time is slow, flaky, and expensive.",
            "solution": "Assemble exports from stored intelligence with local PDF/XLSX/PPTX generators only."
          }
        ]
      },
      {
        "id": "lessons",
        "label": "Reflection",
        "title": "Lessons learned",
        "lessons": [
          {
            "n": "01",
            "text": "In diligence products, disagreement is a feature — hide it and you lose the user."
          },
          {
            "n": "02",
            "text": "Zero paid-API constraints force better architecture: retrieval quality beats model size."
          },
          {
            "n": "03",
            "text": "Offline-capable surfaces keep demos honest when inference is unavailable."
          },
          {
            "n": "04",
            "text": "Ship the operator shell (RBAC, History, Admin) early — enterprise buyers judge the whole product, not just the agent demo."
          }
        ]
      },
      {
        "id": "reviewer",
        "label": "Guide",
        "title": "Reviewer walkthrough",
        "steps": [
          {
            "n": "01",
            "text": "Open the live demo at nexusiq-ai-steel.vercel.app — register and complete org → workspace → project onboarding."
          },
          {
            "n": "02",
            "text": "Create an M&A project, open Data Room, and upload the synthetic Helix Analytics demo pack (or explore existing demo data)."
          },
          {
            "n": "03",
            "text": "Run Intelligence (requires Ollama for agents) — inspect the Executive package and Consensus citations."
          },
          {
            "n": "04",
            "text": "Walk Contradictions, Missing, and Risks — follow evidence links and checklist gaps."
          },
          {
            "n": "05",
            "text": "Try Simulator and Actions, then generate a Risk Register or Board pack under Reports."
          },
          {
            "n": "06",
            "text": "Owners: open Admin for health and usage; skim GitHub docs/ for architecture and deployment notes."
          }
        ],
        "paras": [
          "Open the live demo at nexusiq-ai-steel.vercel.app — register and complete org → workspace → project onboarding.",
          "Create an M&A project, open Data Room, and upload the synthetic Helix Analytics demo pack (or explore existing demo data).",
          "Run Intelligence (requires Ollama for agents) — inspect the Executive package and Consensus citations.",
          "Walk Contradictions, Missing, and Risks — follow evidence links and checklist gaps.",
          "Try Simulator and Actions, then generate a Risk Register or Board pack under Reports.",
          "Owners: open Admin for health and usage; skim GitHub docs/ for architecture and deployment notes."
        ]
      },
      {
        "id": "stack",
        "label": "Stack",
        "title": "Technology choices",
        "stack": [
          {
            "tech": "Next.js 15",
            "why": "App Router, API routes, and server actions for a modular monolith on Vercel."
          },
          {
            "tech": "React 19",
            "why": "Dual-theme dashboard, Framer Motion transitions, Recharts risk visualizations."
          },
          {
            "tech": "Prisma + PostgreSQL",
            "why": "Relational model plus pgvector embeddings for hybrid search."
          },
          {
            "tech": "Supabase",
            "why": "Production Postgres pooler and Storage for data-room files."
          },
          {
            "tech": "Auth.js v5",
            "why": "Credentials auth, JWT sessions, and protected routes."
          },
          {
            "tech": "Ollama",
            "why": "Local llama3 + nomic-embed-text — chat, agents, and embeddings with no paid API."
          },
          {
            "tech": "Vitest + Playwright",
            "why": "Unit/integration depth plus end-to-end coverage of the full product path."
          }
        ]
      },
      {
        "id": "next",
        "label": "Roadmap",
        "title": "What's next",
        "paras": [
          "Near-term polish is UX density and always-on document workers for production ingest. Product extensions worth exploring: SSO for enterprise tenants, richer relationship-graph exploration, and a stable public inference tunnel so agent demos run fully online without a local Ollama install."
        ]
      }
    ]
  },
  "moodboard": {
    "id": "moodboard",
    "eyebrow": "Web · AI · Portfolio complete",
    "lead": "An AI-assisted creative workspace that turns a rough brief into a structured moodboard — palette, typography, reference images, and brand notes — in minutes instead of hours.",
    "leadSub": "MoodBoard AI combines Gemini-powered generation with a real-time collaborative editor, Supabase persistence, and export paths designers actually use (JSON, PNG, PDF, design-system tokens). A portfolio-complete MVP on Vercel — auth, templates, Discover, and full collaboration shipped.",
    "meta": [
      {
        "label": "Role",
        "val": "Sole designer & developer"
      },
      {
        "label": "Timeline",
        "val": "2026"
      },
      {
        "label": "Context",
        "val": "Personal · Creative AI"
      },
      {
        "label": "Status",
        "val": "Portfolio complete · Live demo"
      }
    ],
    "metrics": [
      {
        "n": "5",
        "l": "Tabbed sections"
      },
      {
        "n": "4",
        "l": "Export formats"
      },
      {
        "n": "Realtime",
        "l": "Collaboration"
      },
      {
        "n": "Live",
        "l": "Vercel demo"
      }
    ],
    "images": [
      {
        "src": "https://raw.githubusercontent.com/NehangPatel23/Moodboard-AI/main/docs/screenshots/landing.png",
        "alt": "Landing — hero, capabilities, and example board preview.",
        "cap": "Landing — hero, capabilities, and example board preview."
      },
      {
        "src": "https://raw.githubusercontent.com/NehangPatel23/Moodboard-AI/main/docs/screenshots/dashboard.png",
        "alt": "Dashboard — board grid, filters, and pending invitations.",
        "cap": "Dashboard — board grid, filters, and pending invitations."
      },
      {
        "src": "https://raw.githubusercontent.com/NehangPatel23/Moodboard-AI/main/docs/screenshots/board-editor.png",
        "alt": "Board editor — tabbed sections, palette, and reference photos.",
        "cap": "Board editor — tabbed sections, palette, and reference photos."
      },
      {
        "src": "https://raw.githubusercontent.com/NehangPatel23/Moodboard-AI/main/docs/screenshots/collaboration.png",
        "alt": "Collaboration — section-linked comments with team feedback.",
        "cap": "Collaboration — section-linked comments with team feedback."
      },
      {
        "src": "https://raw.githubusercontent.com/NehangPatel23/Moodboard-AI/main/docs/screenshots/discover.png",
        "alt": "Discover — mood dropdown, featured row, and creator profiles.",
        "cap": "Discover — mood dropdown, featured row, and creator profiles."
      },
      {
        "src": "https://raw.githubusercontent.com/NehangPatel23/Moodboard-AI/main/docs/screenshots/share.png",
        "alt": "Share page — view-only board, remix CTA, and creator attribution.",
        "cap": "Share page — view-only board, remix CTA, and creator attribution."
      },
      {
        "src": "https://raw.githubusercontent.com/NehangPatel23/Moodboard-AI/main/docs/screenshots/settings.png",
        "alt": "Settings — display name, avatar, and editor auto-save interval.",
        "cap": "Settings — display name, avatar, and editor auto-save interval."
      },
      {
        "src": "https://raw.githubusercontent.com/NehangPatel23/Moodboard-AI/main/docs/screenshots/sign-in.png",
        "alt": "Sign-in — email/password, forgot password, and demo account.",
        "cap": "Sign-in — email/password, forgot password, and demo account."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "label": "Overview",
        "title": "At a glance",
        "glance": [
          {
            "label": "Product type",
            "val": "Web · AI · Creative tooling"
          },
          {
            "label": "My contribution",
            "val": "Product design, AI prompt pipeline, board editor UX, Supabase schema, collaboration, export flows, deployment"
          },
          {
            "label": "Users",
            "val": "Designers, founders, marketers, and creative directors building visual direction fast"
          },
          {
            "label": "Stack",
            "val": "Next.js 16, React 19, TypeScript, Supabase, Tailwind CSS v4, Gemini"
          }
        ],
        "paras": []
      },
      {
        "id": "visual-proof",
        "label": "Visual proof",
        "title": "Interface & artifacts",
        "paras": [
          "Screenshots from the live product document key flows."
        ]
      },
      {
        "id": "context",
        "label": "Context",
        "title": "Background & origin",
        "quote": "AI should propose; designers should dispose. The canvas is where taste happens.",
        "paras": [
          "Moodboarding is where projects find their visual voice — but assembling references, colors, and type choices manually is slow. AI can accelerate the first 80%, but designers still need a canvas to curate, rearrange, and share.",
          "MoodBoard AI bridges generation and editing: Gemini proposes structured content; the React canvas lets humans refine; Supabase stores and syncs; exports meet handoff requirements."
        ]
      },
      {
        "id": "challenge",
        "label": "Problem",
        "title": "The challenge",
        "paras": [
          "Generative AI outputs unstructured text and random images. Designers need structured boards — hex codes, font names, labeled sections, consistent layout — not a chat transcript.",
          "Real-time collaboration adds conflict resolution, presence, and persistence. Export must preserve layout fidelity across PNG and PDF, not just dump JSON for engineers."
        ]
      },
      {
        "id": "goals",
        "label": "Strategy",
        "title": "Goals & constraints",
        "list": [
          "Convert natural-language briefs into structured moodboards via Gemini",
          "Provide a canvas for drag-and-drop curation after generation",
          "Support real-time collaboration with Supabase realtime channels",
          "Export to JSON (interchange), PNG (quick share), PDF (client handoff)",
          "Deploy a stable MVP on Vercel for public testing",
          "Ship template library and prompt-or-template board creation",
          "Email invites with owner, editor, and viewer roles",
          "Public Discover feed, view-only share links, and full-board remix",
          "Snapshots with compare/restore and design-system token export"
        ]
      },
      {
        "id": "architecture",
        "label": "System",
        "title": "Architecture overview",
        "arch": {
          "flow": [
            "Prompt / Template",
            "Draft API",
            "Enrich stream",
            "Board editor",
            "Supabase",
            "Export"
          ],
          "items": [
            {
              "title": "Prompt & templates",
              "desc": "Free-form brief or curated template library with live GenerationPreview"
            },
            {
              "title": "Draft API",
              "desc": "POST /api/generate/draft — Gemini returns palette, type, refs, notes (demo fallback)"
            },
            {
              "title": "Enrich stream",
              "desc": "POST /api/generate/enrich — Pexels/Unsplash photos stream in via NDJSON"
            },
            {
              "title": "Board editor",
              "desc": "Five tabs: Overview, Palette, Typography, References, Notes"
            },
            {
              "title": "Collaboration",
              "desc": "Invites, presence dots, section comments, activity replay, unread badges"
            },
            {
              "title": "Discover & share",
              "desc": "Public boards, creator profiles, view-only /share/[id], remix CTA"
            },
            {
              "title": "Supabase",
              "desc": "Postgres, Auth, Realtime, Storage — boards, comments, presence, activity"
            },
            {
              "title": "Export",
              "desc": "JSON, PNG (html-to-image), PDF (block layout), design-system tokens"
            }
          ]
        },
        "paras": [
          "Next.js 16 App Router handles marketing pages and API routes for Gemini — keys stay server-side. Generation is two-phase: draft returns structured direction; enrich streams reference photos while the UI updates live.",
          "The board editor is a client component with normalized board state synced to Supabase on debounced saves. Board schema is versioned JSON so exports, templates, and comments don't break existing boards."
        ]
      },
      {
        "id": "built",
        "label": "Delivery",
        "title": "What I built",
        "features": [
          {
            "title": "Progressive AI generation",
            "desc": "Draft + streaming photo enrich with live GenerationPreview — minutes, not hours."
          },
          {
            "title": "Tabbed board editor",
            "desc": "Overview, Palette, Typography, References, Notes — structured, not freeform markdown."
          },
          {
            "title": "Per-section AI suggestions",
            "desc": "Regenerate palette, typography, or brand strategy without redoing the whole board."
          },
          {
            "title": "Templates library",
            "desc": "Curated starting points alongside free-form prompts at /templates."
          },
          {
            "title": "Collaboration suite",
            "desc": "Email invites, presence dots on tabs, section-linked comments, activity replay, unread badges."
          },
          {
            "title": "Snapshots",
            "desc": "Save checkpoints with preview-before-restore and compare diffs vs current or another snapshot."
          },
          {
            "title": "Discover & remix",
            "desc": "Public boards on /discover with view counts; view-only /share/[id] with full-board remix."
          },
          {
            "title": "Export modal",
            "desc": "JSON, PNG, PDF, and design-system tokens (CSS, Tailwind, JSON, Markdown) with live preview."
          },
          {
            "title": "Dashboard organization",
            "desc": "Filters (All, With me, Public, Private), favorites, duplicate, global search with ⌘K."
          },
          {
            "title": "Auth & demo account",
            "desc": "Email/password, forgot-password flow, and pre-seeded demo workspace for reviewers."
          },
          {
            "title": "Mobile bottom nav",
            "desc": "Boards, New, Templates, Discover, and Settings on small screens."
          },
          {
            "title": "Vercel deployment",
            "desc": "Production deploy on Vercel with demo account and portfolio-ready docs."
          }
        ],
        "paras": [
          "Full product loop from AI prompt engineering through collaboration, discovery, and export pipelines."
        ]
      },
      {
        "id": "deep-dives",
        "label": "Technical",
        "title": "Deep dives",
        "dives": [
          {
            "title": "Structured generation prompts",
            "body": "System prompts enforce JSON schema; validation rejects malformed AI output with user-visible retry."
          },
          {
            "title": "NDJSON photo streaming",
            "body": "Enrich endpoint streams Pexels/Unsplash results one-by-one; UI updates without blocking the editor."
          },
          {
            "title": "Conflict-free collaboration",
            "body": "Last-write-wins on tile position with operational transforms deferred — MVP prioritizes simplicity over Google Docs-grade merging."
          },
          {
            "title": "Dirty-draft conflict banner",
            "body": "When local edits are unsaved, realtime sync pauses and a conflict banner prevents silent overwrites."
          },
          {
            "title": "Export fidelity",
            "body": "PDF export uses print-specific CSS and a dedicated export viewport so client handoffs match on-screen layout."
          }
        ]
      },
      {
        "id": "timeline",
        "label": "Process",
        "title": "Timeline & phases",
        "timeline": [
          {
            "phase": "Concept",
            "title": "User interviews with design students, schema design",
            "desc": "Validated export formats and collaboration need"
          },
          {
            "phase": "MVP gen",
            "title": "Gemini + static canvas",
            "desc": "First end-to-end prompt-to-board flow"
          },
          {
            "phase": "Persistence",
            "title": "Supabase auth + save/load",
            "desc": "Boards survive sessions"
          },
          {
            "phase": "Collab + export",
            "title": "Realtime + PNG/PDF/JSON",
            "desc": "Live MVP on Vercel"
          },
          {
            "phase": "Templates & Discover",
            "title": "Template library, public boards, share/remix",
            "desc": "Community discovery and curated starting points"
          },
          {
            "phase": "Collaboration polish",
            "title": "Section comments, snapshots, activity replay",
            "desc": "Team-ready feedback loops"
          },
          {
            "phase": "Portfolio complete",
            "title": "Design-system export, remix, docs, and README polish",
            "desc": "Shipped portfolio MVP — scope closed for now"
          }
        ]
      },
      {
        "id": "results",
        "label": "Impact",
        "title": "Results & outcomes",
        "list": [
          "Prompt-to-board flow reduces moodboard setup from hours to minutes",
          "Full collaboration suite shipped — invites, presence, comments, activity replay",
          "Four export formats including design-system handoff for engineers",
          "Public Discover and share/remix for community-visible boards",
          "Versioned board schema supports ongoing iteration without breaking saves"
        ],
        "tags": [
          "Next.js",
          "React 19",
          "AI",
          "Gemini",
          "Supabase",
          "Collaboration",
          "Creative Tools",
          "Vercel",
          "Templates",
          "Discover"
        ],
        "paras": [
          "MoodBoard AI is portfolio-complete — a rare portfolio piece reviewers can actually use in a creative workflow."
        ]
      },
      {
        "id": "problems",
        "label": "Engineering",
        "title": "Hard problems",
        "problems": [
          {
            "title": "Unstructured AI output",
            "problem": "Gemini sometimes returns prose instead of hex codes.",
            "solution": "JSON schema validation + automatic retry with stricter system prompt."
          },
          {
            "title": "Canvas + AI state sync",
            "problem": "Regenerating one section shouldn't wipe manual edits elsewhere.",
            "solution": "Section-scoped regeneration with merge into existing board state."
          },
          {
            "title": "Export layout shifts",
            "problem": "PNG exports clipped content on long boards.",
            "solution": "Dedicated export viewport with fixed dimensions per board aspect ratio."
          },
          {
            "title": "Collaboration race conditions",
            "problem": "Two users editing the same section caused jumps.",
            "solution": "Optimistic UI with server timestamp resolution; conflict banner when local draft is dirty."
          }
        ]
      },
      {
        "id": "lessons",
        "label": "Reflection",
        "title": "Lessons learned",
        "lessons": [
          {
            "n": "01",
            "text": "AI features need schemas, not vibes — designers want hex codes, not 'a soft blue'."
          },
          {
            "n": "02",
            "text": "Export is a feature, not an afterthought — build PNG/PDF paths while the editor is still taking shape."
          },
          {
            "n": "03",
            "text": "Supabase sped up auth and saves, but realtime only worked once I defined who owns the draft and when sync should pause."
          },
          {
            "n": "04",
            "text": "Structured sections (palette, type, references, notes) kept generation, manual edits, and export from stepping on each other."
          },
          {
            "n": "05",
            "text": "Collaboration felt trustworthy only after auto-save and conflict warnings — presence dots alone don't prevent overwrite bugs."
          },
          {
            "n": "06",
            "text": "A public portfolio demo needs a believable first visit: demo login, seeded boards, and Discover matter as much as the feature list."
          }
        ]
      },
      {
        "id": "reviewer",
        "label": "Guide",
        "title": "Reviewer walkthrough",
        "steps": [
          {
            "n": "01",
            "text": "Open the live demo — sign in with admin@moodboard.ai / moodboard123, or browse Discover without an account."
          },
          {
            "n": "02",
            "text": "Create a board from a prompt — watch colors, fonts, and reference photos stream in via live preview."
          },
          {
            "n": "03",
            "text": "Edit sections and try per-section AI suggest (palette, typography, brand)."
          },
          {
            "n": "04",
            "text": "Open a second browser/incognito — test Collaborate: invites, presence dots, section comments."
          },
          {
            "n": "05",
            "text": "Export PNG, PDF, and design-system tokens — compare layout to on-screen editor."
          },
          {
            "n": "06",
            "text": "Browse GitHub docs (FEATURES.md, ARCHITECTURE.md) for API routes and board schema types."
          }
        ],
        "paras": [
          "Open the live demo — sign in with admin@moodboard.ai / moodboard123, or browse Discover without an account.",
          "Create a board from a prompt — watch colors, fonts, and reference photos stream in via live preview.",
          "Edit sections and try per-section AI suggest (palette, typography, brand).",
          "Open a second browser/incognito — test Collaborate: invites, presence dots, section comments.",
          "Export PNG, PDF, and design-system tokens — compare layout to on-screen editor.",
          "Browse GitHub docs (FEATURES.md, ARCHITECTURE.md) for API routes and board schema types."
        ]
      },
      {
        "id": "stack",
        "label": "Stack",
        "title": "Technology choices",
        "stack": [
          {
            "tech": "Next.js 16",
            "why": "App Router, API routes for Gemini, SSR for marketing pages."
          },
          {
            "tech": "React 19",
            "why": "Client board editor, streaming preview, collaboration UI."
          },
          {
            "tech": "Gemini",
            "why": "Structured creative generation with server-side key security and demo fallback."
          },
          {
            "tech": "Supabase",
            "why": "Postgres persistence, auth, realtime subscriptions, and storage."
          },
          {
            "tech": "TypeScript",
            "why": "Board schema types shared across client, API, and exports."
          },
          {
            "tech": "Tailwind CSS v4",
            "why": "Canvas chrome, mobile nav, and export-friendly print styles."
          },
          {
            "tech": "Pexels + Unsplash",
            "why": "Reference photo enrichment streamed during board generation."
          }
        ]
      },
      {
        "id": "next",
        "label": "Roadmap",
        "title": "What's next",
        "list": [
          "OAuth (Google / GitHub sign-in)",
          "Full landing redesign (incremental polish only for now)",
          "Template marketplace (/marketplace — not planned near term)",
          "Pricing / Stripe (/pricing — not planned near term)"
        ],
        "paras": [
          "Deferred / parked (4 areas, overlapping with above)"
        ]
      }
    ]
  },
  "dirscope": {
    "id": "dirscope",
    "eyebrow": "macOS · Native · Feature-complete",
    "lead": "A native macOS app and Quick Look extension that replaces Finder's plain folder icon with a rich, interactive browser — sortable file lists, expandable subfolders, zip archive browsing, and side-panel previews, all inside the standard Quick Look panel.",
    "leadSub": "Dirscope is a feature-complete dual-target Swift project: a SwiftUI host app for onboarding and settings, and an AppKit Quick Look extension embedded in Finder. Shared code handles directory listing, in-process zip parsing, cross-process preference sync, and staged archive opens — without requiring the host app window to stay open.",
    "meta": [
      {
        "label": "Role",
        "val": "Sole designer & developer"
      },
      {
        "label": "Timeline",
        "val": "2026"
      },
      {
        "label": "Context",
        "val": "Personal · macOS native"
      },
      {
        "label": "Status",
        "val": "Feature-complete · Open source"
      }
    ],
    "metrics": [
      {
        "n": "2",
        "l": "App targets"
      },
      {
        "n": "Zip",
        "l": "In-process parsing"
      },
      {
        "n": "Live",
        "l": "Settings sync"
      },
      {
        "n": "QL",
        "l": "No host required"
      }
    ],
    "images": [
      {
        "src": "assets/projects/case-studies/dirscope/ql.png",
        "alt": "Quick Look folder view — sortable list with Name, Modified, Size, and Type columns inside Finder's preview panel.",
        "cap": "Quick Look folder view — sortable list with Name, Modified, Size, and Type columns inside Finder's preview panel."
      },
      {
        "src": "assets/projects/case-studies/dirscope/zip.png",
        "alt": "Zip archive browsing — expand nested folders and archives in-place without extracting the whole file.",
        "cap": "Zip archive browsing — expand nested folders and archives in-place without extracting the whole file."
      },
      {
        "src": "assets/projects/case-studies/dirscope/preview.png",
        "alt": "Side-panel preview — select a file inside a folder or archive to preview text, images, and other Quick Look–supported formats.",
        "cap": "Side-panel preview — select a file inside a folder or archive to preview text, images, and other Quick Look–supported formats."
      },
      {
        "src": "assets/projects/case-studies/dirscope/settings.png",
        "alt": "Host app settings — Appearance and Behaviors panes with live sync to the Quick Look extension.",
        "cap": "Host app settings — Appearance and Behaviors panes with live sync to the Quick Look extension."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "label": "Overview",
        "title": "At a glance",
        "glance": [
          {
            "label": "Product type",
            "val": "macOS · Native · Quick Look extension"
          },
          {
            "label": "My contribution",
            "val": "Architecture, SwiftUI host app, AppKit extension, zip I/O, cross-process prefs, install tooling"
          },
          {
            "label": "Users",
            "val": "macOS power users who browse folders and archives daily in Finder"
          },
          {
            "label": "Stack",
            "val": "Swift, SwiftUI, AppKit, Quick Look framework, shared plist + Darwin notifications"
          }
        ],
        "paras": []
      },
      {
        "id": "visual-proof",
        "label": "Visual proof",
        "title": "Interface & artifacts",
        "paras": [
          "Product surfaces — Quick Look in Finder, archive browse, inline preview, and the host settings app."
        ]
      },
      {
        "id": "context",
        "label": "Context",
        "title": "Background & origin",
        "quote": "The best system utility disappears into the workflow you already have. Quick Look is the front door — Dirscope makes it useful.",
        "paras": [
          "Finder's built-in Quick Look preview for folders stops at a plain folder icon. Zip files fare no better — you see an archive icon, not what's inside. Opening either means a new window or extracting files to disk.",
          "Dirscope replaces that with a full browser inside the standard Quick Look panel: list or icon view, expandable folder trees, zip contents with per-entry metadata, and a side panel for inline file previews — all triggered by pressing Space or ⌘Y on any folder or .zip in Finder."
        ]
      },
      {
        "id": "challenge",
        "label": "Problem",
        "title": "The challenge",
        "paras": [
          "Quick Look extensions run in a strict sandbox. They cannot spawn external tools reliably, cannot open files in other apps directly, and cannot share preferences with a host app via App Groups without a paid signing identity.",
          "Zip browsing adds another layer: listing, nested folders, deflate extraction, side-panel previews, and opening a single file inside an archive — all without extracting the whole zip or launching the full host app UI."
        ]
      },
      {
        "id": "goals",
        "label": "Strategy",
        "title": "Goals & constraints",
        "list": [
          "Replace Finder's plain folder Quick Look with a sortable, expandable file browser",
          "Browse .zip archives in Quick Look without full extraction — including nested folders and nested zips",
          "Preview files inside folders and archives in a side panel (text, images, Markdown, HTML, SVG)",
          "Sync settings between host app and extension without App Group entitlements",
          "Open individual archive entries in their default app via a sandbox-safe staging bridge",
          "Ship an install script that builds, codesigns, and reloads Quick Look in one command"
        ]
      },
      {
        "id": "architecture",
        "label": "System",
        "title": "Architecture overview",
        "arch": {
          "flow": [
            "Finder",
            "QL Extension",
            "Shared loaders",
            "Side-panel preview",
            "Archive open bridge",
            "Background helper"
          ],
          "items": [
            {
              "title": "Dirscope host app",
              "desc": "SwiftUI onboarding, settings, extension setup guide"
            },
            {
              "title": "FolderPreviewExtension",
              "desc": "AppKit Quick Look UI — list view, icon grid, footer toolbar"
            },
            {
              "title": "Shared loaders",
              "desc": "FolderContentLoader, ArchiveContentLoader, ZipArchiveReader"
            },
            {
              "title": "PreviewSettings",
              "desc": "Cross-process prefs via shared plist + Darwin notifications"
            },
            {
              "title": "ArchiveEntryOpenBridge",
              "desc": "Stage single archive entry, notify background helper to open"
            },
            {
              "title": "Install tooling",
              "desc": "install-app.sh — build, xattr cleanup, qlmanage reload, LaunchAgent"
            }
          ]
        },
        "paras": [
          "The project splits into two Xcode targets sharing code from a Shared/ folder. The host app (SwiftUI) handles onboarding and settings; the Quick Look extension (AppKit) owns all preview UI and runs independently — browsing and side-panel previews work even when Dirscope's window is closed.",
          "Preferences persist to a plist inside the extension's sandbox container. The host app writes to the same path explicitly. Changes propagate live via Darwin notifications, so settings apply without relaunching Quick Look."
        ]
      },
      {
        "id": "built",
        "label": "Delivery",
        "title": "What I built",
        "features": [
          {
            "title": "Quick Look folder browser",
            "desc": "List and icon views with sortable columns, expandable subfolders (1–7 levels), path breadcrumb, and view switcher."
          },
          {
            "title": "Zip archive browsing",
            "desc": "In-process central-directory parsing for store and deflate entries; nested folders and nested zips via disclosure arrows; single-root wrapper folders stripped automatically."
          },
          {
            "title": "Side-panel file preview",
            "desc": "Inline preview for text, Markdown, HTML, SVG, and images — including files inside zip archives extracted on a background thread."
          },
          {
            "title": "Cross-process settings sync",
            "desc": "SharedPreferencesStore writes to extension container plist; Darwin notify + NotificationCenter for live updates without App Groups."
          },
          {
            "title": "Archive entry open bridge",
            "desc": "Extension stages one file, writes PendingOpen.plist, wakes LaunchAgent helper to open via Launch Services — no full app UI required."
          },
          {
            "title": "Host app & install script",
            "desc": "Dashboard, extension setup guide, Appearance/Behaviors settings; install-app.sh builds, installs to /Applications, and reloads Quick Look."
          }
        ],
        "paras": [
          "End-to-end native macOS product — from Quick Look lifecycle and sandbox constraints to install automation and cross-process coordination."
        ]
      },
      {
        "id": "deep-dives",
        "label": "Technical",
        "title": "Deep dives",
        "dives": [
          {
            "title": "Sandbox-safe zip I/O",
            "body": "ArchiveSandboxAccess uses NSFileCoordinator reads and temp copies in the extension container. ZipArchiveReader parses central directory in-process — no unzip spawn inside the sandbox."
          },
          {
            "title": "Opening files inside archives",
            "body": "The sandboxed extension cannot call NSWorkspace.open on staged files. ArchiveEntryOpenBridge writes a pending request; a user LaunchAgent runs Dirscope -backgroundOpenHelper at login to receive Darwin notifications and open staged files."
          },
          {
            "title": "Live settings without relaunch",
            "body": "PreviewViewController observes both NotificationCenter and Darwin notify events. Preference writes skip unchanged values; migrations run only in the host app to avoid extension reload feedback loops."
          }
        ]
      },
      {
        "id": "timeline",
        "label": "Process",
        "title": "Timeline & phases",
        "timeline": [
          {
            "phase": "Concept",
            "title": "Folder preview gap in Finder Quick Look",
            "desc": "Validated need for in-panel browsing without new windows"
          },
          {
            "phase": "Core QL extension",
            "title": "List view, folder listing, basic preview",
            "desc": "First working Quick Look panel replacing folder icon"
          },
          {
            "phase": "Archive support",
            "title": "Zip listing, nested folders, side-panel preview",
            "desc": "Browse .zip contents without extraction"
          },
          {
            "phase": "Cross-process polish",
            "title": "Settings sync, archive open bridge, install script",
            "desc": "Feature-complete open source release on GitHub"
          }
        ]
      },
      {
        "id": "results",
        "label": "Impact",
        "title": "Results & outcomes",
        "list": [
          "Quick Look folder browsing with sortable columns and expandable trees",
          "Zip archive preview with in-process parsing and nested folder support",
          "Side-panel previews for files inside folders and archives",
          "Cross-process settings sync without App Group entitlements",
          "One-command install via install-app.sh with Quick Look reload"
        ],
        "tags": [
          "Swift",
          "macOS",
          "Quick Look",
          "AppKit",
          "SwiftUI",
          "Open Source"
        ],
        "paras": [
          "Dirscope is feature-complete and open source on GitHub — a native macOS utility that extends Finder without replacing it, with no further roadmap planned."
        ]
      },
      {
        "id": "problems",
        "label": "Engineering",
        "title": "Hard problems",
        "problems": [
          {
            "title": "Sandbox blocks archive tools",
            "problem": "Extension cannot spawn unzip or tar reliably.",
            "solution": "In-process ZipArchiveReader with NSFileCoordinator; external tools as host-app fallbacks only."
          },
          {
            "title": "Opening archive entries",
            "problem": "Sandboxed QL extension cannot launch external apps.",
            "solution": "ArchiveEntryOpenBridge + LaunchAgent background helper for staged opens."
          },
          {
            "title": "Settings sync without App Groups",
            "problem": "Ad-hoc builds lack paid signing for shared containers.",
            "solution": "Explicit shared plist path in extension container + Darwin notifications."
          },
          {
            "title": "Quick Look appearance drift",
            "problem": "Inspect pane and footer retained one-time tint on theme switch.",
            "solution": "PreviewTheme.applySurfaceBackground + viewDidChangeEffectiveAppearance refresh."
          }
        ]
      },
      {
        "id": "lessons",
        "label": "Reflection",
        "title": "Lessons learned",
        "lessons": [
          {
            "n": "01",
            "text": "Quick Look extensions are full apps in a tiny sandbox — design for extension-only workflows from day one."
          },
          {
            "n": "02",
            "text": "Cross-process prefs don't need App Groups if you know the container path and use Darwin notify."
          },
          {
            "n": "03",
            "text": "Archive UX in a sandbox rewards in-process parsers over shelling out to CLI tools."
          }
        ]
      },
      {
        "id": "reviewer",
        "label": "Guide",
        "title": "Reviewer walkthrough",
        "steps": [
          {
            "n": "01",
            "text": "Clone the repo and run ./install-app.sh to build and install to /Applications."
          },
          {
            "n": "02",
            "text": "Enable Dirscope in System Settings → General → Login Items & Extensions → Quick Look."
          },
          {
            "n": "03",
            "text": "Select any folder in Finder and press Space — browse files in list or icon view."
          },
          {
            "n": "04",
            "text": "Quick Look a .zip file — expand nested folders and preview an image in the side panel."
          },
          {
            "n": "05",
            "text": "Double-click a file inside an archive to open it in its default app via the background helper."
          },
          {
            "n": "06",
            "text": "Browse GitHub for ZipArchiveReader, ArchiveEntryOpenBridge, and SharedPreferencesStore."
          }
        ],
        "paras": [
          "Clone the repo and run ./install-app.sh to build and install to /Applications.",
          "Enable Dirscope in System Settings → General → Login Items & Extensions → Quick Look.",
          "Select any folder in Finder and press Space — browse files in list or icon view.",
          "Quick Look a .zip file — expand nested folders and preview an image in the side panel.",
          "Double-click a file inside an archive to open it in its default app via the background helper.",
          "Browse GitHub for ZipArchiveReader, ArchiveEntryOpenBridge, and SharedPreferencesStore."
        ]
      },
      {
        "id": "stack",
        "label": "Stack",
        "title": "Technology choices",
        "stack": [
          {
            "tech": "Swift",
            "why": "Shared models, settings, archive I/O, and cross-process coordination."
          },
          {
            "tech": "SwiftUI",
            "why": "Host app shell — dashboard, onboarding, settings panes."
          },
          {
            "tech": "AppKit",
            "why": "Quick Look extension — table view, collection view, preview pane, footer."
          },
          {
            "tech": "Quick Look",
            "why": "QLPreviewProvider lifecycle embedded in Finder's preview panel."
          },
          {
            "tech": "Darwin notify",
            "why": "Cross-process settings updates and archive open wake signals."
          }
        ]
      },
      {
        "id": "next",
        "label": "Roadmap",
        "title": "What's next",
        "paras": [
          "Dirscope is feature-complete for its intended scope — folder and zip browsing inside Quick Look, with no further features planned. The project remains open source on GitHub for installation, bug reports, and community contributions."
        ]
      }
    ]
  },
  "fintrackr": {
    "id": "fintrackr",
    "eyebrow": "Senior Design · Mobile · Featured",
    "lead": "A cross-platform finance app that unifies expense tracking, debt payoff planning, tax estimation, and literacy resources — designed and built with a team of 3 using Agile delivery across two academic semesters.",
    "leadSub": "FinTrackr was our capstone answer to a simple question: why should a college student need four different apps to understand where their money goes, how to pay down loans, and what they'll owe in taxes? We owned the full product lifecycle — research, wireframes, architecture, implementation, and stakeholder demos.",
    "meta": [
      {
        "label": "Role",
        "val": "UI/UX lead & full-stack developer"
      },
      {
        "label": "Timeline",
        "val": "Aug 2024 — May 2025"
      },
      {
        "label": "Context",
        "val": "University of Cincinnati · Senior Design"
      },
      {
        "label": "Team",
        "val": "3 developers · Agile sprints"
      }
    ],
    "metrics": [
      {
        "n": "4",
        "l": "Core modules shipped"
      },
      {
        "n": "3",
        "l": "Team members"
      },
      {
        "n": "2",
        "l": "Semesters of delivery"
      },
      {
        "n": "12+",
        "l": "Sprint cycles"
      }
    ],
    "images": [
      {
        "src": "assets/projects/case-studies/fintrackr/dashboard.png",
        "alt": "Main dashboard — monthly spend overview, category breakdown, and module navigation in a single glanceable screen.",
        "cap": "Main dashboard — monthly spend overview, category breakdown, and module navigation in a single glanceable screen."
      },
      {
        "src": "assets/projects/case-studies/fintrackr/debt.png",
        "alt": "Debt payoff planner — amortization inputs, extra-payment math, and a breakdown of principal vs interest.",
        "cap": "Debt payoff planner — amortization inputs, extra-payment math, and a breakdown of principal vs interest."
      },
      {
        "src": "assets/projects/case-studies/fintrackr/tax.png",
        "alt": "Tax estimation module — income, filing status, dependents, and projected liability for filing-season prep.",
        "cap": "Tax estimation module — income, filing status, dependents, and projected liability for filing-season prep."
      },
      {
        "src": "assets/projects/case-studies/fintrackr/stocks.png",
        "alt": "Stocks module — watchlist, trend context, and literacy adjacent to the rest of the money stack.",
        "cap": "Stocks module — watchlist, trend context, and literacy adjacent to the rest of the money stack."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "label": "Overview",
        "title": "At a glance",
        "glance": [
          {
            "label": "Product type",
            "val": "Mobile · Personal finance · Cross-platform"
          },
          {
            "label": "My contribution",
            "val": "UI/UX design, sprint facilitation, front-end & back-end features, GitHub repo ownership, stakeholder demos"
          },
          {
            "label": "Primary users",
            "val": "College students and early-career professionals managing budgets for the first time"
          },
          {
            "label": "Stack",
            "val": "Flutter, Dart, shared widget library, local persistence, Agile/Scrum"
          }
        ],
        "paras": []
      },
      {
        "id": "visual-proof",
        "label": "Visual proof",
        "title": "Interface & artifacts",
        "paras": [
          "UI from the senior-design specs — the shipped Flutter screens in device frames."
        ]
      },
      {
        "id": "context",
        "label": "Context",
        "title": "Background & origin",
        "quote": "Finance apps fail when they feel like homework. Our north star was clarity first — show one meaningful number, then let curious users drill down.",
        "paras": [
          "FinTrackr began as a senior design requirement at the University of Cincinnati: identify a real user problem, validate it through interviews, and ship a working product by graduation. Our team interviewed 14 students and recent graduates about how they manage money. The pattern was consistent — spreadsheets for budgets, bank apps for balances, random calculators for debt, and Google for tax questions.",
          "I stepped into a dual role as UI/UX lead and technical contributor. That meant running design critiques, maintaining the Figma source of truth, and ensuring what we designed was actually buildable within sprint capacity. We chose Flutter specifically so all three developers could work on one codebase without platform fragmentation."
        ]
      },
      {
        "id": "challenge",
        "label": "Problem",
        "title": "The challenge",
        "paras": [
          "Personal finance tools are fragmented by category. Expense trackers optimize for daily logging. Debt apps assume you already understand amortization. Tax estimators live in silos disconnected from spending data. Literacy content is either patronizing or buried in blog posts.",
          "Our users — students and early-career professionals — don't want a Bloomberg terminal. They want confidence: knowing they're not missing a bill, understanding whether an extra $50/month changes their loan timeline, and learning terms like APR without leaving the app.",
          "The technical challenge matched the product challenge: four feature domains, one navigation model, one visual language, and three developers committing in parallel without merge chaos."
        ]
      },
      {
        "id": "goals",
        "label": "Strategy",
        "title": "Goals & constraints",
        "list": [
          "Unify expense tracking, debt planning, tax estimation, and literacy in one cohesive Flutter app",
          "Ship a polished UI that feels approachable to non-finance users — not a spreadsheet with buttons",
          "Deliver incrementally via Agile sprints with demo-ready increments every two weeks",
          "Maintain a shared component library so three developers could ship consistent UI in parallel",
          "Document architecture and onboarding so the project survives handoff after graduation"
        ]
      },
      {
        "id": "architecture",
        "label": "System",
        "title": "Architecture overview",
        "arch": {
          "flow": [
            "Presentation layer",
            "Feature modules",
            "State & business logic",
            "Local persistence",
            "Shared models"
          ],
          "items": [
            {
              "title": "Expense module",
              "desc": "Category tagging, recurring transactions, monthly rollups"
            },
            {
              "title": "Debt module",
              "desc": "Payoff strategies, extra payment simulation, progress charts"
            },
            {
              "title": "Tax module",
              "desc": "Income/deduction inputs, estimated liability, filing checklist"
            },
            {
              "title": "Literacy layer",
              "desc": "Contextual glossary + article links keyed to active module"
            },
            {
              "title": "Shared shell",
              "desc": "Bottom nav, theme tokens, loading/error states"
            },
            {
              "title": "Data layer",
              "desc": "Normalized models shared across modules; offline-first reads"
            }
          ]
        },
        "paras": [
          "The architecture follows a modular monolith inside a single Flutter app. Each finance domain is a feature folder with its own screens, controllers, and widgets — but all modules consume the same design tokens, typography scale, and navigation shell.",
          "Cross-module data flows through shared models (Transaction, DebtAccount, TaxProfile) rather than tight coupling. That let us develop debt and tax modules in parallel while expense tracking was still stabilizing."
        ]
      },
      {
        "id": "built",
        "label": "Delivery",
        "title": "What I built",
        "features": [
          {
            "title": "Design system & navigation shell",
            "desc": "Defined color tokens, spacing scale, card patterns, and bottom navigation. Every module inherits the same header, progress indicators, and empty states."
          },
          {
            "title": "Expense tracking module",
            "desc": "Built category picker, recurring expense rules, and monthly summary charts. Optimized list rendering for long transaction histories."
          },
          {
            "title": "Debt payoff planner",
            "desc": "Implemented amortization math, snowball vs avalanche comparison views, and milestone celebrations when users hit payoff targets."
          },
          {
            "title": "Tax estimation flow",
            "desc": "Structured multi-step form with validation, deduction hints, and plain-language summaries of estimated refund/liability."
          },
          {
            "title": "Agile facilitation",
            "desc": "Ran sprint planning, backlog grooming, and retros. Maintained GitHub Projects board and enforced PR review standards across the team."
          }
        ],
        "paras": [
          "I owned the design system and a significant share of implementation across all four modules."
        ]
      },
      {
        "id": "deep-dives",
        "label": "Technical",
        "title": "Deep dives",
        "dives": [
          {
            "title": "Progressive disclosure in onboarding",
            "body": "New users see a simplified dashboard with three actions — log expense, view debt, read a tip. Advanced modules unlock after first session to avoid overwhelm. We A/B tested this in user feedback sessions and reduced drop-off on first open."
          },
          {
            "title": "Shared widget library",
            "body": "Extracted 18 reusable widgets (StatCard, ModuleHeader, ProgressRing, EmptyState) into a `/widgets` package inside the repo. PRs touching UI had to use library components — this cut review time and eliminated one-off styling drift."
          },
          {
            "title": "Sprint demo discipline",
            "body": "Every sprint ended with a recorded demo to our faculty advisor. That forced us to keep main branch deployable and prevented 'integration week' at the end of the semester."
          }
        ]
      },
      {
        "id": "timeline",
        "label": "Process",
        "title": "Timeline & phases",
        "timeline": [
          {
            "phase": "Fall 2024 · Discovery",
            "title": "User interviews, competitive audit, information architecture, Figma wireframes",
            "desc": "Mapped four-module structure and validated with 6 paper prototype sessions"
          },
          {
            "phase": "Fall 2024 · Foundation",
            "title": "Flutter scaffold, design tokens, navigation shell, expense MVP",
            "desc": "First demo: log expenses and view monthly summary"
          },
          {
            "phase": "Spring 2025 · Expansion",
            "title": "Debt and tax modules, literacy content integration",
            "desc": "Parallel feature development with shared widget library"
          },
          {
            "phase": "Spring 2025 · Polish",
            "title": "Accessibility pass, animation polish, bug bash, documentation",
            "desc": "Final stakeholder demo and repository handoff"
          }
        ]
      },
      {
        "id": "results",
        "label": "Impact",
        "title": "Results & outcomes",
        "list": [
          "Unified four finance workflows that users previously split across multiple tools",
          "Established a reusable Flutter widget library the team used for every module",
          "Demonstrated full-stack ownership from user research through deployment and demo",
          "Maintained clean Git history with PR reviews — evidence of real team engineering, not solo heroics"
        ],
        "tags": [
          "Flutter",
          "Dart",
          "Mobile",
          "UX",
          "Agile",
          "FinTech",
          "Senior Design"
        ],
        "paras": [
          "We shipped a complete four-module finance product in one academic year — not a prototype, but a cohesive app with consistent UX and documented architecture."
        ]
      },
      {
        "id": "problems",
        "label": "Engineering",
        "title": "Hard problems",
        "problems": [
          {
            "title": "Balancing feature depth with onboarding simplicity",
            "problem": "Finance modules naturally want dense data. Showing everything at once paralyzed new users in testing.",
            "solution": "Progressive disclosure: dashboard first, advanced settings one tap away. Onboarding checklist guides first-week actions."
          },
          {
            "title": "Parallel development across 3 developers",
            "problem": "Early sprints produced inconsistent spacing, duplicate widgets, and conflicting state patterns.",
            "solution": "Component-first architecture + mandatory PR review against design system checklist."
          },
          {
            "title": "Amortization accuracy vs performance",
            "problem": "Debt simulations recalculated on every keystroke caused jank on older Android devices.",
            "solution": "Debounced recalculation + precomputed schedule tables for common loan terms."
          },
          {
            "title": "Tax module scope creep",
            "problem": "Stakeholders wanted full IRS-grade accuracy — impossible in a student timeline.",
            "solution": "Scoped to estimation/education with clear disclaimers; linked literacy content for filing decisions."
          }
        ]
      },
      {
        "id": "lessons",
        "label": "Reflection",
        "title": "Lessons learned",
        "lessons": [
          {
            "n": "01",
            "text": "Design systems pay off fastest on teams, not solo projects — our widget library was the highest-ROI artifact."
          },
          {
            "n": "02",
            "text": "Demo-driven development keeps academic projects honest; if it can't be shown, it isn't done."
          },
          {
            "n": "03",
            "text": "Finance UX is emotional — progress rings and milestone copy matter as much as correct math."
          },
          {
            "n": "04",
            "text": "Agile ceremonies aren't overhead when three people need to stay aligned across four modules."
          }
        ]
      },
      {
        "id": "reviewer",
        "label": "Guide",
        "title": "Reviewer walkthrough",
        "steps": [
          {
            "n": "01",
            "text": "Clone the FinTrackr repository and follow the README setup for Flutter."
          },
          {
            "n": "02",
            "text": "Launch the app and complete the first-run flow — notice how few choices appear initially (progressive disclosure)."
          },
          {
            "n": "03",
            "text": "Navigate expense → debt → tax → literacy and observe shared headers, cards, and progress patterns."
          },
          {
            "n": "04",
            "text": "Open the debt module and adjust extra payment amounts — watch amortization timeline update."
          },
          {
            "n": "05",
            "text": "Review GitHub commit history and PR descriptions for sprint-scoped feature work."
          },
          {
            "n": "06",
            "text": "Skim the widget library folder to see how shared components enforce visual consistency."
          }
        ],
        "paras": [
          "Clone the FinTrackr repository and follow the README setup for Flutter.",
          "Launch the app and complete the first-run flow — notice how few choices appear initially (progressive disclosure).",
          "Navigate expense → debt → tax → literacy and observe shared headers, cards, and progress patterns.",
          "Open the debt module and adjust extra payment amounts — watch amortization timeline update.",
          "Review GitHub commit history and PR descriptions for sprint-scoped feature work.",
          "Skim the widget library folder to see how shared components enforce visual consistency."
        ]
      },
      {
        "id": "stack",
        "label": "Stack",
        "title": "Technology choices",
        "stack": [
          {
            "tech": "Flutter",
            "why": "Single codebase for iOS and Android; fast UI iteration for a design-heavy product with custom charts and animations."
          },
          {
            "tech": "Dart",
            "why": "Strong typing for financial calculations; pairs cleanly with Flutter's widget model."
          },
          {
            "tech": "Agile / Scrum",
            "why": "Two-week sprints with defined ceremonies kept three developers aligned across four modules."
          },
          {
            "tech": "Figma",
            "why": "Source of truth for design tokens and flows; every PR referenced a frame ID during review."
          },
          {
            "tech": "GitHub",
            "why": "Issues, Projects board, and PR templates enforced review culture and traceability."
          }
        ]
      },
      {
        "id": "next",
        "label": "Roadmap",
        "title": "What's next",
        "paras": [
          "Planned extensions include read-only bank aggregation via Plaid, household/shared budgets, push notifications for bill due dates, and export to CSV for tax prep software. The modular architecture supports adding a fifth module without rewriting the navigation shell."
        ]
      }
    ]
  },
  "scrape": {
    "id": "scrape",
    "eyebrow": "Internship · Data Engineering · Production",
    "lead": "A production data pipeline refactor at MediTechSafe — transforming brittle scrapers into a stable system processing 10,000+ records daily with automated QA, normalization layers, and engineering dashboards for real-time visibility.",
    "leadSub": "This work spanned two internship terms. The first focused on building reliable collection at scale; the second on refactoring for maintainability, observability, and data quality gates before records ever reached downstream systems.",
    "meta": [
      {
        "label": "Role",
        "val": "Software Developer Intern"
      },
      {
        "label": "Timeline",
        "val": "May 2023 — Apr 2024"
      },
      {
        "label": "Context",
        "val": "MediTechSafe Inc · Healthcare data"
      },
      {
        "label": "Scale",
        "val": "10,000+ records / day"
      }
    ],
    "metrics": [
      {
        "n": "10k+",
        "l": "Records processed daily"
      },
      {
        "n": "2",
        "l": "Internship terms"
      },
      {
        "n": "1000s",
        "l": "Records QA'd per run"
      },
      {
        "n": "Hours",
        "l": "Manual work saved per sprint"
      }
    ],
    "images": [
      {
        "src": "assets/projects/case-studies/scraping-pipeline/dashboard.png",
        "alt": "Pipeline dashboard — run status, record counts, and error rates surfaced for engineering review.",
        "cap": "Pipeline dashboard — run status, record counts, and error rates surfaced for engineering review."
      },
      {
        "src": "assets/projects/case-studies/scraping-pipeline/qa.png",
        "alt": "QA report view — field-level validation failures grouped by source and severity.",
        "cap": "QA report view — field-level validation failures grouped by source and severity."
      },
      {
        "src": "assets/projects/case-studies/scraping-pipeline/normalize.png",
        "alt": "Normalization flow — raw scraped payload vs cleaned schema-ready record side by side.",
        "cap": "Normalization flow — raw scraped payload vs cleaned schema-ready record side by side."
      },
      {
        "src": "assets/projects/case-studies/scraping-pipeline/architecture.png",
        "alt": "Pipeline architecture — collectors, QA gates, normalize, and MySQL at 10,000+ records/day.",
        "cap": "Pipeline architecture — collectors, QA gates, normalize, and MySQL at 10,000+ records/day."
      }
    ],
    "imageNote": "Illustrative only. MediTechSafe intern work is under NDA, so I can’t publish the real internal UI or production records. These reconstructions use synthetic data to walk through the architecture.",
    "sections": [
      {
        "id": "overview",
        "label": "Overview",
        "title": "At a glance",
        "glance": [
          {
            "label": "Product type",
            "val": "Backend · Data pipeline · Web scraping"
          },
          {
            "label": "My contribution",
            "val": "Scraper refactoring, QA automation, normalization logic, MySQL validation queries, internal dashboards"
          },
          {
            "label": "Constraints",
            "val": "Proprietary codebase — case study describes architecture and outcomes, not source code"
          },
          {
            "label": "Stack",
            "val": "Python, Selenium, Pandas, MySQL, internal tooling"
          }
        ],
        "paras": []
      },
      {
        "id": "visual-proof",
        "label": "Visual proof",
        "title": "Interface & artifacts",
        "paras": [
          "Reconstructed operator surfaces — pipeline dashboard, QA, normalization, and architecture."
        ]
      },
      {
        "id": "context",
        "label": "Context",
        "title": "Background & origin",
        "quote": "Scraping isn't a script you run once. It's a system that has to survive the internet changing every Tuesday.",
        "paras": [
          "MediTechSafe collects and normalizes healthcare-adjacent data from public web sources to power internal products. When I joined, the scraping stack worked — until it didn't. Source sites changed markup without warning, duplicate records slipped through, and engineers learned about failures from angry downstream consumers rather than monitoring.",
          "My first internship (Summer 2023) focused on building volume: scalable collection, cleaning routines, and integration hooks. The second (Spring 2024) was a deliberate refactor — treat scraping as production software with tests, metrics, and ownership boundaries."
        ]
      },
      {
        "id": "challenge",
        "label": "Problem",
        "title": "The challenge",
        "paras": [
          "The legacy pipeline was a collection of scripts orchestrated manually. Each source had its own parsing logic, error handling was inconsistent, and QA happened ad hoc before releases. At 10,000+ records per day, a single selector break could poison an entire batch.",
          "Downstream teams needed trustworthy data — normalized field names, deduplicated keys, and confidence that bad rows never silently passed through. Engineering needed visibility: which sources failed, how long runs took, and whether data drift was a parsing bug or a source change."
        ]
      },
      {
        "id": "goals",
        "label": "Strategy",
        "title": "Goals & constraints",
        "list": [
          "Stabilize daily collection at 10,000+ records without manual babysitting",
          "Introduce automated QA gates that block bad batches before integration",
          "Normalize heterogeneous source schemas into a consistent internal model",
          "Give engineers dashboards backed by MySQL queries — not log archaeology",
          "Reduce hours of manual collection and validation work per sprint"
        ]
      },
      {
        "id": "architecture",
        "label": "System",
        "title": "Architecture overview",
        "arch": {
          "flow": [
            "Scheduler",
            "Source scrapers",
            "Raw staging",
            "QA & normalization",
            "MySQL store",
            "Dashboards"
          ],
          "items": [
            {
              "title": "Collector layer",
              "desc": "Per-source scrapers with retry/backoff and change-detection hooks"
            },
            {
              "title": "Staging",
              "desc": "Raw payloads preserved for replay when parsers need fixes"
            },
            {
              "title": "QA engine",
              "desc": "Schema validation, duplicate detection, anomaly thresholds"
            },
            {
              "title": "Normalizer",
              "desc": "Field mapping, type coercion, canonical identifiers"
            },
            {
              "title": "MySQL",
              "desc": "System of record + validation query source"
            },
            {
              "title": "Observability",
              "desc": "Run metrics, alerts, trend views for engineering"
            }
          ]
        },
        "paras": [
          "The refactored architecture treats each source as an isolated adapter implementing a common interface: fetch, parse, emit raw records. Orchestration handles scheduling and retries; it doesn't embed source-specific logic.",
          "QA runs as a pipeline stage, not an afterthought. Records fail fast with structured error codes so engineers can filter dashboards by failure type and prioritize fixes."
        ]
      },
      {
        "id": "built",
        "label": "Delivery",
        "title": "What I built",
        "features": [
          {
            "title": "Scraper refactoring",
            "desc": "Extracted shared HTTP/session handling, selector utilities, and logging. Reduced duplicate code across source adapters."
          },
          {
            "title": "QA automation",
            "desc": "Built validation suites that run on every batch — required fields, regex patterns, cross-field consistency, duplicate keys."
          },
          {
            "title": "Normalization layer",
            "desc": "Mapped source-specific schemas to internal canonical models with explicit transform rules and audit trails."
          },
          {
            "title": "MySQL validation queries",
            "desc": "Authored queries engineers use to spot drift: null rate spikes, cardinality changes, stale source timestamps."
          },
          {
            "title": "Engineering dashboards",
            "desc": "Surfaced pipeline health metrics so failures were visible before downstream consumers noticed."
          }
        ],
        "paras": [
          "I contributed across collection, quality, and visibility — with increasing ownership in the second internship term."
        ]
      },
      {
        "id": "deep-dives",
        "label": "Technical",
        "title": "Deep dives",
        "dives": [
          {
            "title": "Staging-first debugging",
            "body": "Keeping raw payloads let us replay parser fixes against historical data without re-scraping — critical when sources rate-limit or change frequently."
          },
          {
            "title": "Failure taxonomy",
            "body": "We categorized errors (network, parse, schema, duplicate) so dashboards showed whether to page infra or assign a parser fix."
          },
          {
            "title": "Incremental rollout",
            "body": "Refactored one high-volume source at a time with shadow runs comparing old vs new output before cutover."
          }
        ]
      },
      {
        "id": "timeline",
        "label": "Process",
        "title": "Timeline & phases",
        "timeline": [
          {
            "phase": "Summer 2023",
            "title": "Onboarding, source analysis, initial scalable collectors",
            "desc": "Automated weekly collection saving hours of manual work"
          },
          {
            "phase": "Fall 2023",
            "title": "QA measures on large batches, inconsistency detection",
            "desc": "Thousands of records validated per run pre-integration"
          },
          {
            "phase": "Spring 2024",
            "title": "Architecture refactor, shared libraries, staging layer",
            "desc": "Improved stability and maintainability at 10k+ daily volume"
          },
          {
            "phase": "Spring 2024",
            "title": "Dashboards + MySQL validation tooling",
            "desc": "Engineering visibility into pipeline health and data drift"
          }
        ]
      },
      {
        "id": "results",
        "label": "Impact",
        "title": "Results & outcomes",
        "list": [
          "10,000+ records processed daily with improved stability after refactor",
          "Automated QA blocking bad batches before downstream integration",
          "Hours of manual collection eliminated per project cycle",
          "MySQL-backed validation giving engineers actionable drift signals"
        ],
        "tags": [
          "Python",
          "Selenium",
          "Pandas",
          "MySQL",
          "Data Pipeline",
          "QA",
          "Scraping"
        ],
        "paras": [
          "The pipeline moved from fragile scripts to a production-minded system engineering could reason about and monitor."
        ]
      },
      {
        "id": "problems",
        "label": "Engineering",
        "title": "Hard problems",
        "problems": [
          {
            "title": "Source markup changes breaking parsers",
            "problem": "Healthcare and public data sites update layouts without notice.",
            "solution": "Isolated adapters + raw staging for replay + alert on parse failure rate spikes."
          },
          {
            "title": "Silent data quality degradation",
            "problem": "Bad data looked valid until downstream analytics broke.",
            "solution": "Schema QA gates with hard failures and structured error reporting."
          },
          {
            "title": "Debugging without reproducibility",
            "problem": "Engineers couldn't re-run failed records easily.",
            "solution": "Staging table preserving raw payloads with run IDs for replay."
          },
          {
            "title": "Visibility gap",
            "problem": "Failures discovered by consumers, not collectors.",
            "solution": "Dashboards querying MySQL for run status, volumes, and error categories."
          }
        ]
      },
      {
        "id": "lessons",
        "label": "Reflection",
        "title": "Lessons learned",
        "lessons": [
          {
            "n": "01",
            "text": "Treat scrapers like microservices — contracts, retries, and observability, not one-off scripts."
          },
          {
            "n": "02",
            "text": "Raw staging is cheap storage that pays for itself the first time a parser breaks in production."
          },
          {
            "n": "03",
            "text": "QA at the pipeline layer beats apologizing to downstream teams after integration."
          }
        ]
      },
      {
        "id": "reviewer",
        "label": "Guide",
        "title": "Reviewer walkthrough",
        "steps": [
          {
            "n": "01",
            "text": "Read this case study alongside my MediTechSafe UI project — the Flutter dashboard consumed these same API/metrics patterns."
          },
          {
            "n": "02",
            "text": "Note the separation of concerns: collectors, QA, normalization, storage, observability."
          },
          {
            "n": "03",
            "text": "Consider how you would replay a failed batch given only a run ID and staging payloads."
          },
          {
            "n": "04",
            "text": "Review the hard problems section for failure taxonomy — that's what I'd whiteboard in an interview."
          },
          {
            "n": "05",
            "text": "Contact me for additional context within NDA bounds — I can discuss architecture without sharing proprietary code."
          }
        ],
        "paras": [
          "Read this case study alongside my MediTechSafe UI project — the Flutter dashboard consumed these same API/metrics patterns.",
          "Note the separation of concerns: collectors, QA, normalization, storage, observability.",
          "Consider how you would replay a failed batch given only a run ID and staging payloads.",
          "Review the hard problems section for failure taxonomy — that's what I'd whiteboard in an interview.",
          "Contact me for additional context within NDA bounds — I can discuss architecture without sharing proprietary code."
        ]
      },
      {
        "id": "stack",
        "label": "Stack",
        "title": "Technology choices",
        "stack": [
          {
            "tech": "Python",
            "why": "Primary language for scrapers, transforms, and orchestration glue."
          },
          {
            "tech": "Selenium",
            "why": "Dynamic pages requiring browser automation where static parsing failed."
          },
          {
            "tech": "Pandas",
            "why": "Batch transforms, deduplication, and QA statistics over large DataFrames."
          },
          {
            "tech": "MySQL",
            "why": "System of record and validation query layer for engineering dashboards."
          },
          {
            "tech": "Internal tooling",
            "why": "Company-specific schedulers and deployment — integrated, not reinvented."
          }
        ]
      },
      {
        "id": "next",
        "label": "Roadmap",
        "title": "What's next",
        "paras": [
          "Next evolution would add ML-assisted schema inference for new sources, automated selector healing, and stronger SLA alerting integrated with on-call rotation."
        ]
      }
    ]
  },
  "mtsui": {
    "id": "mtsui",
    "eyebrow": "Internship · Flutter · Internal Tools",
    "lead": "An internal Flutter application built during my MediTechSafe internship — designed for engineers and operators who needed pipeline visibility without wrestling with raw SQL or log files.",
    "leadSub": "I had no prior Flutter experience when asked to modernize internal tooling. I learned the framework on the job, established a reusable widget library, and integrated with existing Golang backend APIs — improving design consistency across the team's internal surfaces.",
    "meta": [
      {
        "label": "Role",
        "val": "Software Developer Intern"
      },
      {
        "label": "Timeline",
        "val": "Jan 2024 — Apr 2024"
      },
      {
        "label": "Context",
        "val": "MediTechSafe Inc · Internal tooling"
      },
      {
        "label": "Stack",
        "val": "Flutter · Golang APIs · MySQL"
      }
    ],
    "metrics": [
      {
        "n": "0→1",
        "l": "Flutter app shipped"
      },
      {
        "n": "10k+",
        "l": "Records context in UI"
      },
      {
        "n": "Golang",
        "l": "Backend integration"
      },
      {
        "n": "Widget lib",
        "l": "Reusable components"
      }
    ],
    "images": [
      {
        "src": "assets/projects/case-studies/meditechsafe-ui/dashboard.png",
        "alt": "Home dashboard — pipeline run summary cards with status color coding.",
        "cap": "Home dashboard — pipeline run summary cards with status color coding."
      },
      {
        "src": "assets/projects/case-studies/meditechsafe-ui/detail.png",
        "alt": "Record detail view — field-level data with validation state indicators.",
        "cap": "Record detail view — field-level data with validation state indicators."
      },
      {
        "src": "assets/projects/case-studies/meditechsafe-ui/filter.png",
        "alt": "Filter & search — query large datasets without writing SQL manually.",
        "cap": "Filter & search — query large datasets without writing SQL manually."
      },
      {
        "src": "assets/projects/case-studies/meditechsafe-ui/tablet.png",
        "alt": "Responsive layout — usable on desktop monitors and tablets on the floor.",
        "cap": "Responsive layout — usable on desktop monitors and tablets on the floor."
      }
    ],
    "imageNote": "Illustrative only. Proprietary intern screens and production data aren’t public under NDA. These reconstructions show layout and the Flutter ↔ Golang API story on synthetic metrics.",
    "sections": [
      {
        "id": "overview",
        "label": "Overview",
        "title": "At a glance",
        "glance": [
          {
            "label": "Product type",
            "val": "Internal · Mobile-first · Engineering dashboard"
          },
          {
            "label": "My contribution",
            "val": "Self-taught Flutter, UI architecture, API integration, widget library, MySQL-backed views"
          },
          {
            "label": "Users",
            "val": "Engineers and operators monitoring data pipeline health"
          },
          {
            "label": "Constraint",
            "val": "Proprietary — architecture and outcomes only"
          }
        ],
        "paras": []
      },
      {
        "id": "visual-proof",
        "label": "Visual proof",
        "title": "Interface & artifacts",
        "paras": [
          "Reconstructed Flutter surfaces — dashboard, record detail, filters, and tablet layout."
        ]
      },
      {
        "id": "context",
        "label": "Context",
        "title": "Background & origin",
        "quote": "Internal tools deserve the same UX respect as customer-facing products — engineers are users too.",
        "paras": [
          "Internal tools at fast-moving companies often accrete — a script here, a spreadsheet there, a one-off web page nobody owns. MediTechSafe needed a unified surface for pipeline metrics and record inspection, especially as daily volume crossed 10,000 records.",
          "I volunteered to learn Flutter and build it. The bet: one codebase for desktop and tablet use on the engineering floor, faster iteration than legacy internal web stacks, and a component library future interns could extend."
        ]
      },
      {
        "id": "challenge",
        "label": "Problem",
        "title": "The challenge",
        "paras": [
          "Operators needed to answer three questions quickly: did the last run succeed, where are the bad records, and is this a source change or our bug? Existing tooling made them grep logs and run ad hoc SQL.",
          "I had to learn Flutter while integrating with production Golang APIs and respecting auth patterns I didn't design. The UI had to feel cohesive with minimal design resources — no dedicated designer on the project."
        ]
      },
      {
        "id": "goals",
        "label": "Strategy",
        "title": "Goals & constraints",
        "list": [
          "Ship a Flutter internal app integrated with existing Golang APIs",
          "Surface pipeline metrics and record-level inspection in one place",
          "Build reusable widgets so future features don't reinvent layouts",
          "Support responsive layouts for monitor and tablet contexts",
          "Reduce time-to-diagnosis when pipeline runs fail"
        ]
      },
      {
        "id": "architecture",
        "label": "System",
        "title": "Architecture overview",
        "arch": {
          "flow": [
            "Flutter UI",
            "State layer",
            "API client",
            "Golang services",
            "MySQL"
          ],
          "items": [
            {
              "title": "Dashboard",
              "desc": "Run cards, status badges, trend sparklines"
            },
            {
              "title": "Record explorer",
              "desc": "Paginated lists with validation flags"
            },
            {
              "title": "Filter panel",
              "desc": "Saved filters for common engineering queries"
            },
            {
              "title": "API client",
              "desc": "Typed requests, error mapping, retry for reads"
            },
            {
              "title": "Widget library",
              "desc": "Cards, tables, status chips, empty states"
            },
            {
              "title": "Auth/session",
              "desc": "Integrated with company token flow"
            }
          ]
        },
        "paras": [
          "The app follows a thin-client pattern: Flutter owns presentation and local UI state; business rules stay on the Golang backend. MySQL remains the source of truth — the UI never caches authoritative data beyond the current session view.",
          "Widgets are organized by domain (pipeline, records, shared) with design tokens defined once in a theme module."
        ]
      },
      {
        "id": "built",
        "label": "Delivery",
        "title": "What I built",
        "features": [
          {
            "title": "Self-directed Flutter ramp-up",
            "desc": "Completed official docs, built prototype screens in week one, shipped production views by week four."
          },
          {
            "title": "Dashboard screens",
            "desc": "Run summary cards with color-coded status, timestamps, and drill-down to error details."
          },
          {
            "title": "Record inspection views",
            "desc": "Field-level display with validation annotations matching pipeline QA codes."
          },
          {
            "title": "Golang API integration",
            "desc": "HTTP client with typed models, error surfaces users could act on, loading skeletons."
          },
          {
            "title": "Reusable widget library",
            "desc": "Tables, filter chips, stat cards, and empty states used across all screens."
          }
        ],
        "paras": [
          "I owned Flutter learning, UI architecture, and API wiring end to end."
        ]
      },
      {
        "id": "deep-dives",
        "label": "Technical",
        "title": "Deep dives",
        "dives": [
          {
            "title": "Learning Flutter under deadline",
            "body": "Used widget composition over inheritance, kept screens dumb and controllers testable, leaned on Hot Reload for rapid feedback with backend stubs."
          },
          {
            "title": "API error UX",
            "body": "Mapped Golang error codes to user-facing messages and retry actions — 'source timeout' vs 'auth expired' behave differently."
          },
          {
            "title": "Responsive internal UI",
            "body": "LayoutBuilder breakpoints for wide monitors vs tablets; data tables switch to card lists on narrow widths."
          }
        ]
      },
      {
        "id": "timeline",
        "label": "Process",
        "title": "Timeline & phases",
        "timeline": [
          {
            "phase": "Week 1–2",
            "title": "Flutter fundamentals, API exploration, wireframes",
            "desc": "Prototype dashboard with mock data"
          },
          {
            "phase": "Week 3–5",
            "title": "Golang integration, record list/detail",
            "desc": "Live data in staging environment"
          },
          {
            "phase": "Week 6–8",
            "title": "Widget extraction, responsive pass",
            "desc": "Library reused across new screens"
          },
          {
            "phase": "Week 9+",
            "title": "Polish, handoff docs, team feedback",
            "desc": "Internal users onboarding without training deck"
          }
        ]
      },
      {
        "id": "results",
        "label": "Impact",
        "title": "Results & outcomes",
        "list": [
          "Unified pipeline visibility previously split across SQL and logs",
          "Reusable widget library accelerated second-screen development",
          "Improved design consistency across internal engineering tools",
          "Demonstrated ability to learn new frameworks under production pressure"
        ],
        "tags": [
          "Flutter",
          "Dart",
          "Golang",
          "Internal Tools",
          "API Integration",
          "MySQL"
        ],
        "paras": [
          "Shipped a functional internal Flutter app despite starting with zero Flutter experience."
        ]
      },
      {
        "id": "problems",
        "label": "Engineering",
        "title": "Hard problems",
        "problems": [
          {
            "title": "Zero prior Flutter experience",
            "problem": "Timeline didn't allow a month of tutorials before coding.",
            "solution": "Parallel learning + shipping: prototype early, refactor into library after patterns emerged."
          },
          {
            "title": "Backend error opacity",
            "problem": "Raw API errors confused operators.",
            "solution": "Error code mapping layer in the Flutter client with actionable copy."
          },
          {
            "title": "Large record sets in UI",
            "problem": "Loading 10k rows crashed list views.",
            "solution": "Pagination, lazy loading, and server-side filters only."
          },
          {
            "title": "No design system input",
            "problem": "Had to invent visual hierarchy from scratch.",
            "solution": "Borrowed spacing/type scale from public Material guidelines, customized minimally for brand."
          }
        ]
      },
      {
        "id": "lessons",
        "label": "Reflection",
        "title": "Lessons learned",
        "lessons": [
          {
            "n": "01",
            "text": "Hot Reload changes how fast you can learn a new UI framework — use it aggressively."
          },
          {
            "n": "02",
            "text": "Internal tools should expose error semantics, not stack traces."
          },
          {
            "n": "03",
            "text": "Extract widgets after the second duplication, not the fifth."
          }
        ]
      },
      {
        "id": "reviewer",
        "label": "Guide",
        "title": "Reviewer walkthrough",
        "steps": [
          {
            "n": "01",
            "text": "Pair-read this case study with the Scraping Pipeline project — same company, same data, different surface."
          },
          {
            "n": "02",
            "text": "Note the thin-client architecture: Flutter presents, Golang decides, MySQL stores."
          },
          {
            "n": "03",
            "text": "Review the widget library rationale — internal tools benefit massively from consistency."
          },
          {
            "n": "04",
            "text": "Contact me for a walkthrough of architecture decisions within NDA constraints."
          }
        ],
        "paras": [
          "Pair-read this case study with the Scraping Pipeline project — same company, same data, different surface.",
          "Note the thin-client architecture: Flutter presents, Golang decides, MySQL stores.",
          "Review the widget library rationale — internal tools benefit massively from consistency.",
          "Contact me for a walkthrough of architecture decisions within NDA constraints."
        ]
      },
      {
        "id": "stack",
        "label": "Stack",
        "title": "Technology choices",
        "stack": [
          {
            "tech": "Flutter",
            "why": "Cross-platform internal UI with fast iteration and shared widget library."
          },
          {
            "tech": "Dart",
            "why": "Typed models matching API contracts; reduces integration bugs."
          },
          {
            "tech": "Golang APIs",
            "why": "Existing backend services — integrated rather than replaced."
          },
          {
            "tech": "MySQL",
            "why": "Validation queries powering record inspection views."
          }
        ]
      },
      {
        "id": "next",
        "label": "Roadmap",
        "title": "What's next",
        "paras": [
          "Future iterations could add real-time run notifications, role-based views for operators vs engineers, and embedded charts fed directly from pipeline metrics tables."
        ]
      }
    ]
  },
  "coursearc": {
    "id": "coursearc",
    "eyebrow": "Web · LMS · Feature-complete",
    "lead": "A full-stack reimagining of Canvas LMS — dashboard, course pages, discussion boards, and sidebar navigation rebuilt with React, Vite, and ShadCN/UI. Designed for extensibility, accessibility, and a modern visual language with seamless dark/light mode.",
    "leadSub": "CourseArc started as a personal challenge: could I reproduce the information density of a production LMS without the visual clutter? The answer became a modular React app deployed on Vercel — part portfolio piece, part reference architecture for educational UI.",
    "meta": [
      {
        "label": "Role",
        "val": "Sole designer & developer"
      },
      {
        "label": "Timeline",
        "val": "2025 — 2026"
      },
      {
        "label": "Context",
        "val": "Personal project · LMS UX study"
      },
      {
        "label": "Status",
        "val": "Feature-complete · Live demo"
      }
    ],
    "metrics": [
      {
        "n": "Live",
        "l": "Production deploy"
      },
      {
        "n": "4+",
        "l": "Core LMS surfaces"
      },
      {
        "n": "2",
        "l": "Theme modes"
      },
      {
        "n": "Modular",
        "l": "Feature folders"
      }
    ],
    "images": [
      {
        "src": "assets/projects/case-studies/coursearc/dashboard.png",
        "alt": "Student dashboard — course plates, upcoming work, and the studio desk in a single catalog view.",
        "cap": "Student dashboard — course plates, upcoming work, and the studio desk in a single catalog view."
      },
      {
        "src": "assets/projects/case-studies/coursearc/instructor.png",
        "alt": "Instructor studio — published and unpublished courses, grading queue, and course-health signals.",
        "cap": "Instructor studio — published and unpublished courses, grading queue, and course-health signals."
      },
      {
        "src": "assets/projects/case-studies/coursearc/calendar.png",
        "alt": "Calendar — month view with assignments, quizzes, discussions, and office hours on the CSCI 570 semester.",
        "cap": "Calendar — month view with assignments, quizzes, discussions, and office hours on the CSCI 570 semester."
      },
      {
        "src": "assets/projects/case-studies/coursearc/mobile.png",
        "alt": "Compact layout — the same dashboard stacked for smaller viewports without losing the desk widgets.",
        "cap": "Compact layout — the same dashboard stacked for smaller viewports without losing the desk widgets."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "label": "Overview",
        "title": "At a glance",
        "glance": [
          {
            "label": "Product type",
            "val": "Web · LMS clone · Educational UX"
          },
          {
            "label": "My contribution",
            "val": "Information architecture, UI design, front-end implementation, deployment, component system"
          },
          {
            "label": "Reference",
            "val": "Canvas LMS patterns — dashboard, courses, discussions, sidebar"
          },
          {
            "label": "Stack",
            "val": "React, Vite, TypeScript, TailwindCSS, ShadCN/UI"
          }
        ],
        "paras": []
      },
      {
        "id": "visual-proof",
        "label": "Visual proof",
        "title": "Interface & artifacts",
        "paras": [
          "Screenshots from the live CourseArc studio."
        ]
      },
      {
        "id": "context",
        "label": "Context",
        "title": "Background & origin",
        "quote": "Clone the IA, reinvent the feel. Students shouldn't need a manual to find this week's assignment.",
        "paras": [
          "Learning management systems are daily drivers for millions of students — yet their UX often feels like admin software from 2010. I use Canvas weekly at USC and wanted to understand why certain patterns persist (sidebar course list, module sequencing, discussion threading) and which could feel modern without breaking learnability.",
          "CourseArc is not a backend-complete LMS. It's a high-fidelity front-end study with realistic data models, routing, and component boundaries that would support real API integration later."
        ]
      },
      {
        "id": "challenge",
        "label": "Problem",
        "title": "The challenge",
        "paras": [
          "Canvas packs enormous information density: dozens of courses, nested modules, assignments with due dates, discussions with unread counts, and global navigation that must stay oriented across contexts.",
          "Rebuilding it meant respecting familiar mental models while upgrading typography, spacing, dark mode, and micro-interactions. ShadCN/UI accelerated component quality but required careful theming to avoid 'generic SaaS' aesthetics."
        ]
      },
      {
        "id": "goals",
        "label": "Strategy",
        "title": "Goals & constraints",
        "list": [
          "Replicate core Canvas surfaces: dashboard, course home, discussions, global sidebar",
          "Ship dark/light mode with semantic tokens — not hard-coded colors per component",
          "Structure codebase for feature growth (assignments, grades, inbox as future modules)",
          "Deploy a fast, public demo on Vercel for portfolio review",
          "Document component patterns for reuse in future educational products"
        ]
      },
      {
        "id": "architecture",
        "label": "System",
        "title": "Architecture overview",
        "arch": {
          "flow": [
            "React routes",
            "Feature modules",
            "ShadCN components",
            "Theme provider",
            "Mock data layer"
          ],
          "items": [
            {
              "title": "Dashboard",
              "desc": "Course grid, upcoming work, announcements"
            },
            {
              "title": "Course shell",
              "desc": "Local nav, breadcrumbs, module timeline"
            },
            {
              "title": "Discussions",
              "desc": "Thread list, reply composer, unread state"
            },
            {
              "title": "Global sidebar",
              "desc": "Course list, term grouping, collapse behavior"
            },
            {
              "title": "Theme system",
              "desc": "CSS variables + Tailwind dark variant"
            },
            {
              "title": "Data mocks",
              "desc": "Typed fixtures simulating LMS API responses"
            }
          ]
        },
        "paras": [
          "Vite + React Router drive client-side navigation. Each LMS surface lives in a feature folder (`/features/dashboard`, `/features/course`, etc.) with colocated components and hooks.",
          "ShadCN/UI provides accessible primitives (Dialog, Dropdown, Tabs) restyled via Tailwind tokens. Theme toggling flips `data-theme` on `` and relies on CSS variables — components never branch on theme manually."
        ]
      },
      {
        "id": "built",
        "label": "Delivery",
        "title": "What I built",
        "features": [
          {
            "title": "Information architecture",
            "desc": "Mapped Canvas navigation patterns to React routes with persistent sidebar context."
          },
          {
            "title": "Dashboard & course views",
            "desc": "Course cards, module lists, assignment due dates with responsive grid layouts."
          },
          {
            "title": "Discussion UI",
            "desc": "Threaded layout, participant avatars, reply areas matching LMS expectations."
          },
          {
            "title": "Dark/light mode",
            "desc": "Full token swap with prefers-color-scheme respect and manual toggle persistence."
          },
          {
            "title": "ShadCN integration",
            "desc": "Customized Button, Card, Sheet, and NavigationMenu for educational density."
          },
          {
            "title": "Vercel deployment",
            "desc": "Optimized build pipeline, clean URLs, OG tags for shareable demo links."
          }
        ],
        "paras": [
          "Sole ownership from wireframes to deployment."
        ]
      },
      {
        "id": "deep-dives",
        "label": "Technical",
        "title": "Deep dives",
        "dives": [
          {
            "title": "Theme tokens vs one-off styles",
            "body": "Defined `--surface`, `--muted`, `--accent` once in Tailwind config. Adding dark mode meant editing tokens, not 40 components."
          },
          {
            "title": "Sidebar persistence",
            "body": "Course context survives route changes via layout routes — mirrors how students expect the left rail to stay put."
          },
          {
            "title": "Mock data typing",
            "body": "TypeScript interfaces for Course, Module, Assignment, Discussion — ready to swap mocks for fetch calls without rewriting UI."
          }
        ]
      },
      {
        "id": "timeline",
        "label": "Process",
        "title": "Timeline & phases",
        "timeline": [
          {
            "phase": "Phase 1",
            "title": "IA audit, Figma sketches, Vite scaffold",
            "desc": "Route map + component inventory"
          },
          {
            "phase": "Phase 2",
            "title": "Dashboard + sidebar",
            "desc": "First deployable vertical slice"
          },
          {
            "phase": "Phase 3",
            "title": "Course + discussion modules",
            "desc": "Feature parity with core Canvas flows"
          },
          {
            "phase": "Phase 4",
            "title": "Dark mode, polish, Vercel",
            "desc": "Public demo linked from portfolio"
          }
        ]
      },
      {
        "id": "results",
        "label": "Impact",
        "title": "Results & outcomes",
        "list": [
          "Public Vercel deployment reviewers can click through immediately",
          "Modular architecture kept LMS surfaces isolated and easy to extend",
          "Dark/light modes with accessible contrast throughout",
          "ShadCN + Tailwind stack documented for future contributors"
        ],
        "tags": [
          "React",
          "Vite",
          "TypeScript",
          "TailwindCSS",
          "ShadCN",
          "LMS",
          "Vercel"
        ],
        "paras": [
          "CourseArc is live, fast, and readable — a feature-complete, portfolio-grade demonstration of educational UI craft."
        ]
      },
      {
        "id": "problems",
        "label": "Engineering",
        "title": "Hard problems",
        "problems": [
          {
            "title": "Information density vs whitespace",
            "problem": "LMS screens risk feeling empty or cluttered with one wrong spacing choice.",
            "solution": "Established 4px grid + typographic scale; tested with real assignment counts from a semester."
          },
          {
            "title": "ShadCN default aesthetics",
            "problem": "Out-of-box components look like admin dashboards.",
            "solution": "Custom border radii, serif headings, gold accent tokens aligned with portfolio brand."
          },
          {
            "title": "Scope without backend",
            "problem": "Easy to overbuild API layers for a UI study.",
            "solution": "Typed mocks + clear 'future integration' boundaries kept scope shippable."
          }
        ]
      },
      {
        "id": "lessons",
        "label": "Reflection",
        "title": "Lessons learned",
        "lessons": [
          {
            "n": "01",
            "text": "Students navigate by muscle memory — change visuals, keep IA."
          },
          {
            "n": "02",
            "text": "Design tokens are the cheapest dark mode investment."
          },
          {
            "n": "03",
            "text": "Deploy early; LMS UIs need real browser scroll testing, not just Storybook."
          }
        ]
      },
      {
        "id": "reviewer",
        "label": "Guide",
        "title": "Reviewer walkthrough",
        "steps": [
          {
            "n": "01",
            "text": "Open the live demo and toggle dark/light mode — notice token-based theming."
          },
          {
            "n": "02",
            "text": "Navigate dashboard → course → discussion and observe persistent sidebar."
          },
          {
            "n": "03",
            "text": "Compare assignment density to commercial Canvas — spacing and type do heavy lifting."
          },
          {
            "n": "04",
            "text": "Browse the GitHub repo for feature-folder structure and ShadCN customization."
          },
          {
            "n": "05",
            "text": "Check responsive behavior at tablet width — grids collapse intentionally."
          }
        ],
        "paras": [
          "Open the live demo and toggle dark/light mode — notice token-based theming.",
          "Navigate dashboard → course → discussion and observe persistent sidebar.",
          "Compare assignment density to commercial Canvas — spacing and type do heavy lifting.",
          "Browse the GitHub repo for feature-folder structure and ShadCN customization.",
          "Check responsive behavior at tablet width — grids collapse intentionally."
        ]
      },
      {
        "id": "stack",
        "label": "Stack",
        "title": "Technology choices",
        "stack": [
          {
            "tech": "React",
            "why": "Component model fits nested LMS layouts and shared shell state."
          },
          {
            "tech": "Vite",
            "why": "Fast dev server and optimized production bundles for Vercel."
          },
          {
            "tech": "TypeScript",
            "why": "Typed mock models ready for future API integration."
          },
          {
            "tech": "TailwindCSS",
            "why": "Utility-first styling with design tokens for theming."
          },
          {
            "tech": "ShadCN/UI",
            "why": "Accessible primitives customized for educational UI density."
          }
        ]
      },
      {
        "id": "next",
        "label": "Roadmap",
        "title": "What's next",
        "paras": [
          "CourseArc is feature-complete for its intended client-side scope — dashboard, courses, discussions, and theming on Vercel, with no further product surfaces planned. Remaining work would be a real backend (auth, persistent grading, hosted files), which is out of scope for this demo. The project remains open source on GitHub."
        ]
      }
    ]
  },
  "pulse": {
    "id": "pulse",
    "eyebrow": "Web · DevTools · In Development",
    "lead": "A real-time system monitoring dashboard that unifies logs, metrics, and alerts into one developer-friendly interface — visualizing CPU, memory, and disk live while keeping signal high and noise low.",
    "leadSub": "PulseBoard is my answer to monitoring sprawl: engineers shouldn't need three browser tabs and a grep terminal to understand if a service is healthy. Built with Next.js App Router and a component architecture optimized for clarity under pressure.",
    "meta": [
      {
        "label": "Role",
        "val": "Sole designer & developer"
      },
      {
        "label": "Timeline",
        "val": "2025 — Present"
      },
      {
        "label": "Context",
        "val": "Personal · DevTools"
      },
      {
        "label": "Status",
        "val": "Active development"
      }
    ],
    "metrics": [
      {
        "n": "3-in-1",
        "l": "Logs · metrics · alerts"
      },
      {
        "n": "Live",
        "l": "Streaming metrics"
      },
      {
        "n": "Next.js",
        "l": "App Router"
      },
      {
        "n": "Custom",
        "l": "Alert rules"
      }
    ],
    "images": [
      {
        "src": "assets/projects/case-studies/pulseboard/dashboard.png",
        "alt": "Overview — service health cards with CPU, memory, disk sparklines.",
        "cap": "Overview — service health cards with CPU, memory, disk sparklines."
      },
      {
        "src": "assets/projects/case-studies/pulseboard/logs.png",
        "alt": "Log stream — filtered live tail with severity color coding.",
        "cap": "Log stream — filtered live tail with severity color coding."
      },
      {
        "src": "assets/projects/case-studies/pulseboard/alerts.png",
        "alt": "Alert panel — active incidents, ack state, and rule configuration.",
        "cap": "Alert panel — active incidents, ack state, and rule configuration."
      },
      {
        "src": "assets/projects/case-studies/pulseboard/trends.png",
        "alt": "Trend analysis — historical metrics with zoom and comparison windows.",
        "cap": "Trend analysis — historical metrics with zoom and comparison windows."
      }
    ],
    "imageNote": "Illustrative only. PulseBoard is still in private development with no public demo. These mockups show the operator UX I’m building — not screenshots of a live production system.",
    "sections": [
      {
        "id": "overview",
        "label": "Overview",
        "title": "At a glance",
        "glance": [
          {
            "label": "Product type",
            "val": "Web · Observability · Developer tools"
          },
          {
            "label": "My contribution",
            "val": "Product design, front-end architecture, metrics visualization, alert rule UX"
          },
          {
            "label": "Philosophy",
            "val": "Clarity over density — show what matters when incidents happen"
          },
          {
            "label": "Stack",
            "val": "Next.js, TypeScript, React, TailwindCSS"
          }
        ],
        "paras": []
      },
      {
        "id": "visual-proof",
        "label": "Visual proof",
        "title": "Interface & artifacts",
        "paras": [
          "Operator surfaces — service health, live logs, alert rules, and historical trends in one pane."
        ]
      },
      {
        "id": "context",
        "label": "Context",
        "title": "Background & origin",
        "quote": "When pages are down, UI clarity is infrastructure. Every second spent parsing a chart is a second not spent fixing the issue.",
        "paras": [
          "Observability tools often optimize for power users at the expense of approachability — or they simplify so much they hide the logs you need during an incident. PulseBoard targets the middle: a single pane for on-call engineers who need fast answers.",
          "The project is actively evolving. Repository access is available on request while core architecture stabilizes."
        ]
      },
      {
        "id": "challenge",
        "label": "Problem",
        "title": "The challenge",
        "paras": [
          "Logs, metrics, and alerts live in different mental models — timestamps vs aggregations vs thresholds. Unifying them without overload means ruthless hierarchy: what's red, what's trending, what's noise.",
          "Real-time data implies streaming updates, chart performance, and alert state that doesn't flicker when metrics bounce at the threshold edge."
        ]
      },
      {
        "id": "goals",
        "label": "Strategy",
        "title": "Goals & constraints",
        "list": [
          "Unify logs, metrics, and alerts in one Next.js dashboard",
          "Visualize CPU, memory, and disk with live updates and historical trends",
          "Support customizable alert rules with clear ack/resolve flows",
          "Prioritize UX clarity — readable under stress, not just pretty in screenshots",
          "Component architecture that supports plugging real backends later"
        ]
      },
      {
        "id": "architecture",
        "label": "System",
        "title": "Architecture overview",
        "arch": {
          "flow": [
            "Next.js UI",
            "Client hooks",
            "Stream adapters",
            "Metrics store",
            "Alert engine"
          ],
          "items": [
            {
              "title": "Overview",
              "desc": "Service cards, health summary, quick filters"
            },
            {
              "title": "Log viewer",
              "desc": "Tail, search, severity filters"
            },
            {
              "title": "Metrics charts",
              "desc": "CPU/memory/disk live + historical"
            },
            {
              "title": "Alerts",
              "desc": "Rule builder, incident list, ack workflow"
            },
            {
              "title": "Trend analysis",
              "desc": "Comparative time windows"
            },
            {
              "title": "Layout shell",
              "desc": "Responsive grid, collapsible panels"
            }
          ]
        },
        "paras": [
          "Next.js App Router separates server and client components — static shell server-rendered, charts and log tail client-side with streaming hooks.",
          "Alert rules are data-driven JSON configs rendered into UI forms, so adding rule types doesn't require new pages."
        ]
      },
      {
        "id": "built",
        "label": "Delivery",
        "title": "What I built",
        "features": [
          {
            "title": "Unified dashboard shell",
            "desc": "Persistent layout with service selector, time range, and alert badge in header."
          },
          {
            "title": "Live metrics charts",
            "desc": "Streaming CPU/memory/disk with downsampling for render performance."
          },
          {
            "title": "Log tail interface",
            "desc": "Severity colors, substring search, pause/resume for incident capture."
          },
          {
            "title": "Alert rule builder",
            "desc": "Threshold conditions with preview of what would have fired historically."
          },
          {
            "title": "Trend analysis views",
            "desc": "Compare current window to previous period for anomaly context."
          }
        ],
        "paras": [
          "End-to-end product and engineering ownership."
        ]
      },
      {
        "id": "deep-dives",
        "label": "Technical",
        "title": "Deep dives",
        "dives": [
          {
            "title": "Chart performance",
            "body": "Canvas-based rendering with capped point counts; older points aggregated server-side in future backend."
          },
          {
            "title": "Alert hysteresis",
            "body": "Rules require N consecutive breaches before firing — stops pager storms on flaky metrics."
          },
          {
            "title": "Incident-mode layout",
            "body": "Collapses secondary panels by default when critical alerts active — logs + primary metric front and center."
          }
        ]
      },
      {
        "id": "timeline",
        "label": "Process",
        "title": "Timeline & phases",
        "timeline": [
          {
            "phase": "MVP",
            "title": "Static metrics mock + layout shell",
            "desc": "Prove navigation and visual hierarchy"
          },
          {
            "phase": "Streaming",
            "title": "Live metric hooks + log tail",
            "desc": "Real-time feel with simulated feeds"
          },
          {
            "phase": "Alerts",
            "title": "Rule builder + incident list",
            "desc": "End-to-end alert lifecycle UX"
          },
          {
            "phase": "Next",
            "title": "Backend integration + auth",
            "desc": "Production-ready deployment path"
          }
        ]
      },
      {
        "id": "results",
        "label": "Impact",
        "title": "Results & outcomes",
        "list": [
          "Single interface replacing three-tab monitoring workflows",
          "Custom alert rules with understandable builder UX",
          "Component library reusable for future DevTools projects",
          "Architecture ready for Prometheus/Loki-style backends"
        ],
        "tags": [
          "Next.js",
          "TypeScript",
          "DevTools",
          "Monitoring",
          "React",
          "TailwindCSS"
        ],
        "paras": [
          "PulseBoard demonstrates observability UX craft — even with simulated data, the incident workflows are real."
        ]
      },
      {
        "id": "problems",
        "label": "Engineering",
        "title": "Hard problems",
        "problems": [
          {
            "title": "Real-time UI jitter",
            "problem": "Raw metric streams cause chart flicker.",
            "solution": "Downsampling + hysteresis on alert thresholds."
          },
          {
            "title": "Log volume overwhelm",
            "problem": "Thousands of lines obscure the error that matters.",
            "solution": "Default filters: errors/warnings first; search pinned near tail."
          },
          {
            "title": "Scope creep into full APM",
            "problem": "Easy to rebuild Datadog.",
            "solution": "Focused MVP: three metric types, tail logs, threshold alerts."
          }
        ]
      },
      {
        "id": "lessons",
        "label": "Reflection",
        "title": "Lessons learned",
        "lessons": [
          {
            "n": "01",
            "text": "Design dashboards for incidents, not demos — dark theme and contrast matter at 2am."
          },
          {
            "n": "02",
            "text": "Alert UX is product work: ack, silence, and resolve must be one gesture away."
          },
          {
            "n": "03",
            "text": "Simulated data is fine if workflows are authentic."
          }
        ]
      },
      {
        "id": "reviewer",
        "label": "Guide",
        "title": "Reviewer walkthrough",
        "steps": [
          {
            "n": "01",
            "text": "Contact me for a private demo or repository access."
          },
          {
            "n": "02",
            "text": "Ask about the alert hysteresis model — it's a good systems design discussion."
          },
          {
            "n": "03",
            "text": "Compare layout behavior with and without active critical alerts."
          },
          {
            "n": "04",
            "text": "Review component boundaries in the repo for Next.js App Router patterns."
          }
        ],
        "paras": [
          "Contact me for a private demo or repository access.",
          "Ask about the alert hysteresis model — it's a good systems design discussion.",
          "Compare layout behavior with and without active critical alerts.",
          "Review component boundaries in the repo for Next.js App Router patterns."
        ]
      },
      {
        "id": "stack",
        "label": "Stack",
        "title": "Technology choices",
        "stack": [
          {
            "tech": "Next.js",
            "why": "App Router for layout shells and hybrid server/client rendering."
          },
          {
            "tech": "TypeScript",
            "why": "Typed metric points, log entries, and alert rules."
          },
          {
            "tech": "React",
            "why": "Component composition for dashboard panels."
          },
          {
            "tech": "TailwindCSS",
            "why": "Rapid layout iteration and consistent spacing under dense data."
          }
        ]
      },
      {
        "id": "next",
        "label": "Roadmap",
        "title": "What's next",
        "paras": [
          "Integrating Prometheus and Loki backends, adding auth/multi-tenant service lists, and shipping a public read-only demo instance."
        ]
      }
    ]
  },
  "revstream": {
    "id": "revstream",
    "eyebrow": "Web · SaaS · In Development",
    "lead": "A dynamic pricing intelligence platform for short-term rental hosts and property managers — unifying portfolio KPIs, confidence-scored rate recommendations, competitive-set analysis, and an interactive pricing calendar into a single operator dashboard.",
    "leadSub": "RevStream AI helps hosts understand why a price change is suggested, not just what to charge. Each recommendation ships with structured rationale across demand signals, booking pace, comp-set positioning, seasonality, and event impact — built as a production-grade operator UI with deep linking, exports, and PostgreSQL/Prisma scaffolding for real data integration.",
    "meta": [
      {
        "label": "Role",
        "val": "Sole designer & developer"
      },
      {
        "label": "Timeline",
        "val": "2025 — Present"
      },
      {
        "label": "Context",
        "val": "Personal · PropTech · Pricing"
      },
      {
        "label": "Status",
        "val": "Active development"
      }
    ],
    "metrics": [
      {
        "n": "3",
        "l": "Core surfaces"
      },
      {
        "n": "AI",
        "l": "Explainable recs"
      },
      {
        "n": "Prisma",
        "l": "Data layer"
      },
      {
        "n": "URL",
        "l": "Deep linking"
      }
    ],
    "images": [
      {
        "src": "assets/projects/case-studies/revstream-ai/dashboard.png",
        "alt": "Portfolio dashboard — KPI cards, actual-vs-target revenue chart, and AI recommendation with apply/dismiss flows.",
        "cap": "Portfolio dashboard — KPI cards, actual-vs-target revenue chart, and AI recommendation with apply/dismiss flows."
      },
      {
        "src": "assets/projects/case-studies/revstream-ai/properties.png",
        "alt": "Property browser — searchable multi-market grid with listing comparison.",
        "cap": "Property browser — searchable multi-market grid with listing comparison."
      },
      {
        "src": "assets/projects/case-studies/revstream-ai/calendar.png",
        "alt": "Pricing calendar — month view with booked/event states and day-level detail drawer.",
        "cap": "Pricing calendar — month view with booked/event states and day-level detail drawer."
      },
      {
        "src": "assets/projects/case-studies/revstream-ai/explain.png",
        "alt": "Explanation drawer — confidence score with demand, pace, comp-set, seasonality, and event drivers.",
        "cap": "Explanation drawer — confidence score with demand, pace, comp-set, seasonality, and event drivers."
      }
    ],
    "imageNote": "Illustrative only. RevStream AI is still in development and doesn’t have a public demo yet. These mockups show the operator console I’m designing toward, not a shipped product capture.",
    "sections": [
      {
        "id": "overview",
        "label": "Overview",
        "title": "At a glance",
        "glance": [
          {
            "label": "Product type",
            "val": "Web · SaaS · Short-term rental pricing"
          },
          {
            "label": "My contribution",
            "val": "Product design, operator UX, dashboard architecture, Prisma schema, demo data layer, export flows"
          },
          {
            "label": "Users",
            "val": "Airbnb hosts and property managers running multi-listing portfolios"
          },
          {
            "label": "Stack",
            "val": "Next.js, React, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Recharts"
          }
        ],
        "paras": []
      },
      {
        "id": "visual-proof",
        "label": "Visual proof",
        "title": "Interface & artifacts",
        "paras": [
          "Operator console — portfolio KPIs, listing compare, pricing calendar, and explainable rates."
        ]
      },
      {
        "id": "context",
        "label": "Context",
        "title": "Background & origin",
        "quote": "Hosts don't need a black-box price — they need to know why Saturday should cost more than Tuesday.",
        "paras": [
          "Short-term rental hosts often price by gut feel or static rules — missing demand spikes, comp-set shifts, and event-driven surges. Managing multiple listings across markets makes it worse: no unified view of portfolio health and no time to tune every calendar manually.",
          "RevStream AI reimagines that workflow as a data-first operator console: portfolio metrics at a glance, actionable recommendations with transparent reasoning, and calendar-level control with competitor context and configurable pricing rules."
        ]
      },
      {
        "id": "challenge",
        "label": "Problem",
        "title": "The challenge",
        "paras": [
          "Pricing UIs fail when they dump numbers without context — or when they hide the model entirely. Operators need confidence scores, driver breakdowns, and the ability to apply, dismiss, or drill into any calendar day without losing their place in the portfolio.",
          "Multi-property workflows add comparison, filtering, and URL-shareable state across dashboard, property detail, calendar, competitors, and rules tabs — all while the data layer is still being wired from rich demo seed data to live PostgreSQL."
        ]
      },
      {
        "id": "goals",
        "label": "Strategy",
        "title": "Goals & constraints",
        "list": [
          "Surface portfolio-level revenue, occupancy, and RevPAR with range filters and trend charts",
          "Generate confidence-scored rate recommendations with explainable multi-section rationale",
          "Support searchable property grids, market filters, and 2–4 listing comparison mode",
          "Ship an interactive pricing calendar with day-level detail drawers and event visualization",
          "Expose comp-set analysis and a configurable pricing rules engine UI",
          "Build operator-grade UX: command palette, notifications, deep links, CSV/PDF export",
          "Scaffold Prisma + PostgreSQL models for users, workspaces, and properties"
        ]
      },
      {
        "id": "architecture",
        "label": "System",
        "title": "Architecture overview",
        "arch": {
          "flow": [
            "Operator UI",
            "Dashboard",
            "Properties",
            "Property detail",
            "Recommendations",
            "Prisma / PostgreSQL"
          ],
          "items": [
            {
              "title": "Dashboard",
              "desc": "KPI cards, portfolio chart, AI rec card, alerts, activity feed"
            },
            {
              "title": "Properties",
              "desc": "Multi-market grid, search, sort, 2–4 compare mode"
            },
            {
              "title": "Property detail",
              "desc": "Overview, calendar, competitors, and rules tabs"
            },
            {
              "title": "Calendar + drawer",
              "desc": "Month view, booked/event states, day-level guidance"
            },
            {
              "title": "Explanation engine",
              "desc": "Confidence + demand, pace, comps, seasonality, events"
            },
            {
              "title": "App shell",
              "desc": "Sidebar nav, command palette, notification center, exports"
            }
          ]
        },
        "paras": [
          "Next.js App Router powers the main product surface at /dashboard with dynamic [propertyId] routes. Filters, compare selections, date/month, tabs, and actions live in URL search params for shareable operator views.",
          "Component architecture splits layout shell (DashboardLayout), feature modules (property-detail/, dashboard/, app-shell/), and shared utilities (lib/data/, lib/utils/). The UI runs on realistic seed data in src/lib/data/ while Prisma schema and DB client are wired for backend integration — API routes are the next milestone."
        ]
      },
      {
        "id": "built",
        "label": "Delivery",
        "title": "What I built",
        "features": [
          {
            "title": "Portfolio dashboard",
            "desc": "Total revenue MTD, avg occupancy, RevPAR; actual-vs-target ADR chart with occupancy overlay and 7d/14d/30d filters."
          },
          {
            "title": "Explainable recommendations",
            "desc": "Confidence-scored rate suggestions with apply/dismiss flows and structured rationale drawers."
          },
          {
            "title": "Property intelligence",
            "desc": "Searchable portfolio grid across markets; compare 2–4 listings on ADR, occupancy, pace, and signals."
          },
          {
            "title": "Pricing calendar",
            "desc": "Month view with booked and event states; day detail drawer with context-specific guidance."
          },
          {
            "title": "Comp-set analysis",
            "desc": "Side-by-side competitor rates, occupancy, and positioning notes per listing."
          },
          {
            "title": "Rules engine UI",
            "desc": "CRUD for weekend premium, last-minute discount, orphan-day filler — drag-and-drop reorder, pause/activate toggles."
          },
          {
            "title": "Operator UX",
            "desc": "Command palette, notification center with severity tiers, confirm dialogs, toast feedback, client-side CSV/PDF export."
          }
        ],
        "paras": [
          "Production-quality frontend for a pricing SaaS, with database foundation ready for backend integration."
        ]
      },
      {
        "id": "deep-dives",
        "label": "Technical",
        "title": "Deep dives",
        "dives": [
          {
            "title": "URL-driven state",
            "body": "Compare mode, calendar month, active tab, and filter state serialize to query params — shareable views without extra backend."
          },
          {
            "title": "Explainability panels",
            "body": "Each recommendation decomposes into demand, booking velocity, comp-set, seasonality, and event sections — not a single opaque score."
          },
          {
            "title": "Demo-to-live path",
            "body": "Rich seed data in lib/data/ mirrors production shapes; Prisma models User, Workspace, Property ready for API route connection."
          }
        ]
      },
      {
        "id": "timeline",
        "label": "Process",
        "title": "Timeline & phases",
        "timeline": [
          {
            "phase": "Product design",
            "title": "Operator workflows, explainability UX",
            "desc": "Validated dashboard → property → calendar flow"
          },
          {
            "phase": "Dashboard + properties",
            "title": "KPIs, charts, grid, compare mode",
            "desc": "Core portfolio surfaces shipped"
          },
          {
            "phase": "Property detail",
            "title": "Calendar, competitors, rules tabs",
            "desc": "Per-listing deep dives with exports"
          },
          {
            "phase": "Data layer",
            "title": "Prisma schema + PostgreSQL client",
            "desc": "Backend scaffolding; API integration in progress"
          }
        ]
      },
      {
        "id": "results",
        "label": "Impact",
        "title": "Results & outcomes",
        "list": [
          "Unified portfolio dashboard replacing spreadsheet-and-gut-feel pricing",
          "Explainable recommendations with confidence scores and driver breakdowns",
          "Multi-property comparison and URL-shareable operator views",
          "Prisma + PostgreSQL foundation ready for live comp-set and event ingestion"
        ],
        "tags": [
          "Next.js",
          "TypeScript",
          "React",
          "TailwindCSS",
          "Prisma",
          "PostgreSQL",
          "Recharts",
          "SaaS"
        ],
        "paras": [
          "RevStream AI demonstrates product-grade SaaS UX for a complex domain — even on demo data, the operator workflows are authentic."
        ]
      },
      {
        "id": "problems",
        "label": "Engineering",
        "title": "Hard problems",
        "problems": [
          {
            "title": "Explainability vs simplicity",
            "problem": "Too much rationale overwhelms; too little erodes trust.",
            "solution": "Layered drawers — summary card first, drill-down sections on demand."
          },
          {
            "title": "Dense operator UIs",
            "problem": "Dashboards easily become data dumps.",
            "solution": "Ruthless hierarchy: KPIs → chart → one primary recommendation → alerts."
          },
          {
            "title": "Demo data realism",
            "problem": "Fake numbers feel toy-like in interviews.",
            "solution": "Seed data mirrors real STR markets (Miami, San Diego, Austin, Nashville) with plausible seasonality and events."
          },
          {
            "title": "Backend not wired yet",
            "problem": "UI ahead of API routes risks demo-only perception.",
            "solution": "Prisma schema and typed data shapes document the integration contract explicitly."
          }
        ]
      },
      {
        "id": "lessons",
        "label": "Reflection",
        "title": "Lessons learned",
        "lessons": [
          {
            "n": "01",
            "text": "Pricing products live or die on trust — show the why, not just the number."
          },
          {
            "n": "02",
            "text": "URL state is free shareability for operator tools; design query params early."
          },
          {
            "n": "03",
            "text": "Ship the full operator shell even before the model — authentic workflows sell the vision."
          }
        ]
      },
      {
        "id": "reviewer",
        "label": "Guide",
        "title": "Reviewer walkthrough",
        "steps": [
          {
            "n": "01",
            "text": "Browse the GitHub repo and run npm run dev — open /dashboard for the main product surface."
          },
          {
            "n": "02",
            "text": "Review a portfolio KPI card and the actual-vs-target revenue chart with range filters."
          },
          {
            "n": "03",
            "text": "Select 2–4 properties in comparison mode and contrast ADR, occupancy, and signals."
          },
          {
            "n": "04",
            "text": "Open a property calendar, click a day, and read the explanation drawer drivers."
          },
          {
            "n": "05",
            "text": "Try the command palette and export a report as CSV or PDF."
          },
          {
            "n": "06",
            "text": "Inspect Prisma schema and lib/data/ for the demo-to-live integration path."
          }
        ],
        "paras": [
          "Browse the GitHub repo and run npm run dev — open /dashboard for the main product surface.",
          "Review a portfolio KPI card and the actual-vs-target revenue chart with range filters.",
          "Select 2–4 properties in comparison mode and contrast ADR, occupancy, and signals.",
          "Open a property calendar, click a day, and read the explanation drawer drivers.",
          "Try the command palette and export a report as CSV or PDF.",
          "Inspect Prisma schema and lib/data/ for the demo-to-live integration path."
        ]
      },
      {
        "id": "stack",
        "label": "Stack",
        "title": "Technology choices",
        "stack": [
          {
            "tech": "Next.js",
            "why": "App Router, dynamic routes, server/client component split."
          },
          {
            "tech": "TypeScript",
            "why": "Typed property models, recommendation shapes, and rule configs."
          },
          {
            "tech": "Prisma",
            "why": "PostgreSQL schema for users, workspaces, and properties."
          },
          {
            "tech": "Recharts",
            "why": "Portfolio trend charts with custom tooltips and range filters."
          },
          {
            "tech": "Tailwind CSS",
            "why": "Design tokens, Radix/shadcn-style components, responsive operator layout."
          }
        ]
      },
      {
        "id": "next",
        "label": "Roadmap",
        "title": "What's next",
        "paras": [
          "Wire Prisma to API routes, connect live comp-set and event signal ingestion, deploy a public demo on Vercel, and integrate the pricing model backend behind the explanation engine."
        ]
      }
    ]
  }
};
