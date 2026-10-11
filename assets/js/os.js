(() => {
  const PROJECTS = [
    { id:'nexusiq', title:'NexusIQ AI', status:'Completed MVP', tags:['Next.js','React','TypeScript','Prisma','PostgreSQL','Ollama','Supabase'],
      desc:'Enterprise decision intelligence for due diligence — upload a data room, retrieve with hybrid search, run Financial/Legal/Compliance/Risk/Fraud agents in parallel, and leave with cited consensus, contradiction scans, risk simulations, and board-ready exports. Completed MVP on Vercel + Supabase at zero paid AI API cost.',
      demo:'https://nexusiq-ai-steel.vercel.app', demoPreview:'https://nexusiq-ai-steel.vercel.app',
      demoAuth:'top-level', github:'https://github.com/NehangPatel23/nexusiq-ai' },
    { id:'moodboard', title:'MoodBoard AI', status:'Portfolio complete', tags:['Next.js','React','TypeScript','Supabase','TailwindCSS','Gemini'],
      desc:'Portfolio-complete AI workspace that turns a rough creative brief into a structured moodboard — palette, typography, reference images, and brand notes — in minutes. Includes templates, real-time collaboration, Discover, snapshots, and export to JSON, PNG, PDF, or design-system tokens. Live on Vercel.',
      demo:'https://moodboard-ai-omega.vercel.app', demoPreview:'https://moodboard-ai-omega.vercel.app/discover',
      demoAuth:'top-level', github:'https://github.com/NehangPatel23/Moodboard-AI' },
    { id:'dirscope', title:'Dirscope', status:'Feature-complete', tags:['Swift','SwiftUI','AppKit','macOS','Quick Look'],
      desc:'Feature-complete native macOS Quick Look extension for browsing folder and zip archive contents directly in Finder. Sortable file lists, expandable subfolder trees, side-panel previews, and sandbox-safe in-process archive I/O — press Space on any folder or .zip without opening a new window.',
      github:'https://github.com/NehangPatel23/dirscope' },
    { id:'fintrackr', title:'FinTrackr', status:'Completed', tags:['Flutter','Dart','Agile','Full-Stack'],
      desc:'End-to-end personal finance app with modules for expense tracking, debt payoff planning, tax estimation, and financial literacy resources. Owned UI/UX design, sprint planning, and both front-end & back-end development with a cross-functional team of 3.',
      github:'https://github.com/NehangPatel23/FinTrackr' },
    { id:'scrape', title:'Scalable Scraping Pipeline', status:'Completed', tags:['Python','BeautifulSoup','Selenium','MySQL'],
      desc:'Refactored an enterprise web-scraping codebase at MediTechSafe to process 10,000+ records daily. Added QA automation, data normalisation, and engineering dashboards for real-time pipeline visibility via MySQL queries.',
      note:'Proprietary codebase — built during internship at MediTechSafe.' },
    { id:'mtsui', title:'MediTechSafe Internal UI', status:'Completed', tags:['Flutter','GoLang','REST APIs'],
      desc:'Learned Flutter independently and built a new internal project UI — responsive layouts, reusable widget library, and seamless integration with Golang backend APIs, improving design consistency across the team.',
      note:'Internal tooling — built during internship at MediTechSafe.' },
    { id:'coursearc', title:'CourseArc', status:'Feature-complete', tags:['React','Vite','TypeScript','TailwindCSS'],
      desc:'A full-stack reimagining of Canvas LMS — replicating the dashboard, course pages, discussion boards, and sidebar navigation with a modern React + Vite stack. Features dark/light mode, ShadCN/UI components, and a modular architecture built for extensibility. Live on Vercel.',
      demo:'https://canvas-clone-theta.vercel.app', github:'https://github.com/NehangPatel23/canvas-clone' },
    { id:'pulse', title:'PulseBoard', status:'In development', tags:['Next.js','TypeScript','React','TailwindCSS'],
      desc:'A real-time system monitoring dashboard that unifies logs, metrics, and alerts into a single developer-friendly interface. Visualises CPU, memory, and disk usage live; supports customisable alert rules and trend analysis. Built with Next.js App Router and a component-based architecture focused on UX clarity over data overload.',
      note:'Repository link available upon request — actively in development.' },
    { id:'revstream', title:'RevStream AI', status:'In development', tags:['Next.js','TypeScript','React','TailwindCSS','Prisma','PostgreSQL','Recharts'],
      desc:'Dynamic pricing intelligence platform for short-term rental hosts — unifies portfolio KPIs, explainable AI rate recommendations, competitive-set analysis, and an interactive pricing calendar in a single operator dashboard. Production-grade UI with Prisma/PostgreSQL scaffolding for real data integration.',
      github:'https://github.com/NehangPatel23/RevStream-AI' }
  ];

  const EXPERIENCE = [
    { when:'May 2026 — Present', role:'President', co:'GRIDS · USC · Los Angeles, CA', items:['Leading strategy, programming, and member engagement for USC\'s data science graduate student organisation'] },
    { when:'Jan 2026 — May 2026', role:'Director of Marketing', co:'GRIDS · USC · Los Angeles, CA', items:['Led marketing and outreach strategy','Previously Executive Board Member – Marketing & Outreach (Oct 2025 – Jan 2026)'] },
    { when:'Aug 2024 — May 2025', role:'Peer Teaching Assistant', co:'Dept. of Engineering Education, University of Cincinnati', items:['Taught ENED-1100 & ENED-1120 to classes of 72 (1:24 ratio)','Tutored in the Engineering Education Tutor Room','Graded assignments and facilitated active in-class learning'] },
    { when:'Jan 2024 — Apr 2024', role:'Software Developer Intern', co:'MediTechSafe Inc · West Chester, OH', items:['Refactored scraping codebase to 10,000+ records/day','Learned Flutter independently; built reusable widgets','Integrated Flutter with Golang APIs','Built pipeline visualisations; queried MySQL'] },
    { when:'Aug 2023 — Dec 2023', role:'Learning Assistant', co:'UC Learning Commons', items:['Promoted active learning in large-lecture classrooms','Facilitated group discussions and weekly office hours'] },
    { when:'Jan 2023 — Dec 2023', role:'Peer Tutor', co:'UC Learning Commons', items:['One-on-one support across CS and engineering courses','Online and in-person sessions'] },
    { when:'May 2023 — Aug 2023', role:'Software Developer Intern', co:'MediTechSafe Inc · Hamilton, OH', items:['Collected and normalised thousands of records weekly','Built scalable cleaning pipelines','QA on thousands of records per run'] },
    { when:'Jan 2022 — Dec 2023', role:'Peer Teaching Assistant', co:'Dept. of Engineering Education, UC', items:['Led final presentations for Engineering Design Thinking','Orientation workshops for 150+ high school seniors','Coordinated demos for 1,500+ students'] },
    { when:'Aug 2022 — Dec 2022', role:'Software Co-op', co:'ITE LLC · Loveland, OH', items:['C++ debugging, configuration updates, computer models','Hands-on IoT (Losant) and Neo4j'] },
    { when:'Feb 2022 — Apr 2022', role:'Cybersecurity Analyst Apprentice', co:'iQ4 Corporation · Remote', items:['NIST and NICE frameworks through case studies','Incident Response case study','Weekly progress presentations'] }
  ];

  const RESUME = {
    href: 'assets/resume/Resume_Nehang_Patel_Software_Engineer_2026-08.pdf',
    file: 'Resume_Nehang_Patel_Software_Engineer_2026-08.pdf',
    pages: 2
  };

  const STACK = {
    languages: ['Python','TypeScript','JavaScript','React','Next.js','GoLang','Flutter','Vite','C++','HTML/CSS'],
    backend: ['PostgreSQL','MySQL','Prisma','Supabase','BeautifulSoup','Selenium','Pandas','NumPy','matplotlib'],
    tools: ['Docker','Git','GitHub','Gemini API','TailwindCSS','ShadCN/UI','IBM Watson Studio','ClickUp','Jupyter','Canva','Microsoft Office'],
    practices: ['Agile','Sprint Planning','Progress Tracking','Cross-Team Communication','Technical Documentation','Prompt Engineering'],
    other: ['MATLAB','LabVIEW','VBA','Linux','Windows','iOS'],
    spoken: ['English','Gujarati','Hindi','French']
  };
  const SKILLS = [...STACK.languages, ...STACK.backend, ...STACK.tools, ...STACK.practices, ...STACK.other];

  const PHOTO_ART = {
    nexusiq: 'linear-gradient(145deg,#0f766e 0%,#115e59 45%,#042f2e 100%)',
    moodboard: 'linear-gradient(145deg,#c026d3 0%,#db2777 50%,#9f1239 100%)',
    dirscope: 'linear-gradient(145deg,#2563eb 0%,#1d4ed8 50%,#172554 100%)',
    fintrackr: 'linear-gradient(145deg,#059669 0%,#047857 50%,#064e3b 100%)',
    scrape: 'linear-gradient(145deg,#ea580c 0%,#c2410c 50%,#7c2d12 100%)',
    mtsui: 'linear-gradient(145deg,#0891b2 0%,#0e7490 50%,#164e63 100%)',
    coursearc: 'linear-gradient(145deg,#4f46e5 0%,#4338ca 50%,#312e81 100%)',
    pulse: 'linear-gradient(145deg,#dc2626 0%,#b91c1c 50%,#7f1d1d 100%)',
    revstream: 'linear-gradient(145deg,#d97706 0%,#b45309 50%,#78350f 100%)'
  };

  const MAP_PLACES = [
    { id:'la', name:'Los Angeles', sub:'Home base · open to roles', detail:'Based in Los Angeles while finishing the MSCS at USC Viterbi. Looking for internships and new-grad software engineering roles.', lat:34.0522, lon:-118.2437, open:'notes', openLabel:'About Me' },
    { id:'usc', name:'USC Viterbi', sub:'Los Angeles, CA · MS CS', detail:'Master of Science in Computer Science at the Viterbi School of Engineering. Expected May 2027. President of GRIDS @ USC since May 2026.', lat:34.0205, lon:-118.2856, open:'education', pane:'usc', openLabel:'Education' },
    { id:'uc', name:'University of Cincinnati', sub:'Cincinnati, OH · BS CS', detail:'Bachelor of Science in Computer Science with a minor in Cyber Operations & Software Engineering (Aug 2020 — May 2025). Taught ENED and tutored while earning the degree.', lat:39.1329, lon:-84.5150, open:'education', pane:'uc', openLabel:'Education' },
    { id:'mts', name:'MediTechSafe Inc', sub:'West Chester / Hamilton, OH', detail:'Two Software Developer Intern terms (2023–2024): scraping pipelines to 10,000+ records/day, QA automation, and a Flutter internal UI on Golang APIs.', lat:39.3317, lon:-84.4073, open:'experience', openLabel:'Experience' },
    { id:'ite', name:'ITE LLC', sub:'Loveland, OH · Co-op', detail:'Software Co-op (Aug–Dec 2022): C++ debugging, configuration updates, computer models, plus hands-on Losant IoT and Neo4j.', lat:39.2689, lon:-84.2638, open:'experience', openLabel:'Experience' }
  ];

  const CONTACTS = [
    { id:'me', me:true, name:'Nehang Patel', role:'Software Engineer · MS CS @ USC', email:'nehangal@usc.edu', phone:'Los Angeles, CA', company:'USC Viterbi · GRIDS President', note:'Open to internships and new-grad SWE roles.', color:'#007aff', links:[
      { label:'Mail', open:'contact' },
      { label:'GitHub', safari:'https://github.com/NehangPatel23' },
      { label:'LinkedIn', safari:'https://www.linkedin.com/in/nehangpatel/' },
      { label:'Resume', open:'resume' }
    ]},
    { id:'grids', name:'GRIDS @ USC', role:'Graduate student org', email:'grids@usc.edu', phone:'RTH · USC', company:'Viterbi School of Engineering', note:'Data-science graduate organisation. Nehang is President since May 2026.', color:'#30d158', links:[
      { label:'Messages', open:'messages' },
      { label:'Mail', open:'contact' }
    ]},
    { id:'recruit', name:'Recruiting', role:'New Grad / Internships', email:'nehangal@usc.edu', phone:'Los Angeles · PT', company:'Reach out anytime', note:'Prefer email or LinkedIn. Tuesday or Thursday afternoon PT works well for calls.', color:'#ff9f0a', links:[
      { label:'Mail', open:'contact' },
      { label:'LinkedIn', safari:'https://www.linkedin.com/in/nehangpatel/' },
      { label:'FaceTime', open:'facetime' }
    ]}
  ];

  const NOTES = [
    {
      id: 'about',
      title: 'About Me',
      preview: 'MSCS student at USC\'s Viterbi School of Engineering.',
      body: () => `<h2>About Me</h2>
        <p>MSCS student at USC's Viterbi School of Engineering. Previously BS-CS at the University of Cincinnati with a minor in Cyber Operations &amp; Software Engineering.</p>
        <p>Work spans data pipelines, mobile apps, web scraping, and interactive UI — always anchored in clean architecture, user empathy, and measurable impact. Taught design thinking to 1,500+ students. President of GRIDS @ USC since May 2026.</p>
        <p>Open to internships and new-grad software engineering roles. Los Angeles, CA.</p>
        ${pills(SKILLS)}`
    },
    {
      id: 'coffee',
      title: 'Coffee near campus',
      stamp: '2026-08-21T11:18:00',
      preview: 'Intelligentsia on Figueroa. Skip 11am.',
      body: () => `<h2>Coffee near campus</h2>
        <p>Intelligentsia on Figueroa if it\'s a work block. Don\'t go at 11 — line wraps the block.</p>
        <p>Blue Bottle is quieter after 3. Wifi is fine for a PR review, not for a video call.</p>`
    },
    {
      id: 'hours',
      title: 'Office hours',
      stamp: '2026-08-13T14:05:00',
      preview: 'Wed 2–4. Bring the last problem set.',
      body: () => `<h2>Office hours</h2>
        <p>Wednesday 2:00–4:00. If the room changes, put it in the Slack channel first.</p>
        <ul>
          <li>Last problem set — graph question, not the SQL one</li>
          <li>Whiteboard markers in the side cabinet</li>
        </ul>`
    },
    {
      id: 'grids',
      title: 'GRIDS standup',
      stamp: '2026-08-05T09:40:00',
      preview: 'RTH 115. Agenda before I forget.',
      body: () => `<h2>GRIDS standup</h2>
        <p>Room confirmed: RTH 115. Keep it to 25 minutes.</p>
        <ul>
          <li>Fall kickoff — food + projector</li>
          <li>Speaker shortlist for September</li>
          <li>Slack reminder the night before, not the morning of</li>
        </ul>`
    },
    {
      id: 'dump',
      title: 'Weekend dump',
      stamp: '2026-07-22T19:52:00',
      preview: 'Dry cleaner, charger, call home.',
      body: () => `<h2>Weekend dump</h2>
        <ul>
          <li>Dry cleaner on Fig before Saturday</li>
          <li>USB-C charger in the backpack, not the desk</li>
          <li>Call home — Cincinnati is three hours ahead of whatever I think it is</li>
        </ul>`
    }
  ];

  const ICON_FILE = {
    finder:'finder.png', safari:'safari.png', mail:'mail.png',
    cal:'calendar.png', calendar:'calendar.png', notes:'notes.png',
    preview:'preview.png', music:'music.png', set:'settings.png', settings:'settings.png',
    term:'terminal.png', terminal:'terminal.png', launch:'launchpad.svg', launchpad:'launchpad.svg',
    gh:'github.png', github:'github.png', in:'linkedin.png', linkedin:'linkedin.png',
    folder:'folder.png', trash:'trash.png', photos:'photos.png', maps:'maps.png',
    messages:'messages.png', facetime:'facetime.png', appstore:'appstore.png',
    contacts:'contacts.png', document:'document.png', pdf:'pdf.svg', textedit:'textedit.png'
  };
  function ico(name){
    const file = ICON_FILE[name] || (name + '.png');
    const extra = /github|linkedin/.test(file) ? ' ios' : '';
    return `<img class="appico${extra}" src="assets/icons/macos/${file}" alt="" draggable="false"/>`;
  }

  function setMenuApp(name){
    const el = document.getElementById('appMenuName');
    if (el) el.textContent = name || 'Finder';
  }

  function bounceDock(id){
    const btn = [...document.querySelectorAll('.dapp')].find(d => d.dataset.open === id);
    if (!btn) return;
    btn.classList.remove('bounce');
    void btn.offsetWidth;
    btn.classList.add('bounce');
    setTimeout(() => btn.classList.remove('bounce'), 600);
  }

  const state = { z: 30, os: 'mac', front: null, windows: new Map() };
  const safariState = { history: [], i: -1 };
  function loadPrefs() {
    const base = { appearance: 'dark', dockMag: true, dockSize: 52, dockHide: false, reduceMotion: false };
    try { return Object.assign(base, JSON.parse(localStorage.getItem('nehang-prefs') || '{}')); }
    catch { return base; }
  }
  const prefs = loadPrefs();
  function savePrefs() {
    try { localStorage.setItem('nehang-prefs', JSON.stringify(prefs)); } catch (_) {}
  }
  let settingsCtl = null;
  let settingsPane = 'wifi';
  const layer = () => document.getElementById('window-layer');

  function initDesktop() {
    state.os = 'mac';
    document.documentElement.setAttribute('data-os', 'mac');
    try { localStorage.removeItem('nehang-os'); } catch (_) {}
    closeMenus();
    restoreDeskLayout();
    applyDockPrefs();
    settingsCtl?.sync();
  }

  function toast(msg, ms = 2200) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toast._id);
    toast._id = setTimeout(() => { t.hidden = true; }, ms);
  }

  function closeNook() {
    const island = document.getElementById('notchIsland');
    const scrim = document.getElementById('nookScrim');
    const notch = document.getElementById('notch');
    if (island) island.classList.remove('open');
    if (scrim) scrim.hidden = true;
    if (notch) notch.setAttribute('aria-expanded', 'false');
    stopNookMirror();
  }

  function closeMenus() {
    document.querySelectorAll('.dropdown,.cc-panel,.cc-scrim,#spotlight,#ctxMenu,#iconCtx,#stickyCtx,#shotCtx').forEach(el => { el.hidden = true; });
    const ccBtn = document.getElementById('ccBtn');
    if (ccBtn) ccBtn.classList.remove('on');
    closeNook();
  }

  function toggleCC() {
    const p = document.getElementById('controlCenter');
    const scrim = document.getElementById('ccScrim');
    if (!p) return;
    const was = p.hidden;
    closeMenus();
    p.hidden = !was;
    if (scrim) scrim.hidden = !was;
    const ccBtn = document.getElementById('ccBtn');
    if (ccBtn) ccBtn.classList.toggle('on', !p.hidden);
  }

  const MUSIC_LIBRARY = [
    { id:'eastern', title:'Eastern Thought', artist:'Kevin MacLeod', album:'Bollywood Mix', genre:'bollywood', src:'assets/music/eastern-thought.m4a', art:'linear-gradient(145deg,#bf5af2 0%,#ff375f 100%)' },
    { id:'rites', title:'Rites', artist:'Kevin MacLeod', album:'Bollywood Mix', genre:'bollywood', src:'assets/music/rites.m4a', art:'linear-gradient(145deg,#ff9f0a 0%,#ffd60a 100%)' },
    { id:'carefree', title:'Carefree', artist:'Kevin MacLeod', album:'English Mix', genre:'english', src:'assets/music/carefree.m4a', art:'linear-gradient(145deg,#0a84ff 0%,#64d2ff 100%)' },
    { id:'cool', title:'Cool Vibes', artist:'Kevin MacLeod', album:'English Mix', genre:'english', src:'assets/music/cool-vibes.m4a', art:'linear-gradient(145deg,#30d158 0%,#64d2ff 100%)' },
    { id:'lemon', title:'Easy Lemon', artist:'Kevin MacLeod', album:'English Mix', genre:'english', src:'assets/music/easy-lemon.m4a', art:'linear-gradient(145deg,#ffd60a 0%,#ff9f0a 100%)' },
    { id:'funk', title:'Funk Game Loop', artist:'Kevin MacLeod', album:'English Mix', genre:'english', src:'assets/music/funk-game-loop.m4a', art:'linear-gradient(145deg,#5e5ce6 0%,#bf5af2 100%)' }
  ];
  const musicAudio = new Audio();
  musicAudio.preload = 'metadata';
  let musicFilter = 'all';
  let projectsFilter = 'all';
  let musicSeeking = false;
  const ccState = { track:0, playing:false, airdrop:0, bright:72, vol:68 };

  function isProjectInDev(p) {
    return /in development/i.test(p.status || '');
  }
  function filteredProjects() {
    if (projectsFilter === 'completed') return PROJECTS.filter(p => !isProjectInDev(p));
    if (projectsFilter === 'dev') return PROJECTS.filter(isProjectInDev);
    return PROJECTS;
  }
  function projectCardHTML(p) {
    return `<button class="pcard" data-project="${p.id}">
      <span class="badge${isProjectInDev(p) ? ' badge-dev' : ''}">${p.status}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tags">${p.tags.slice(0,4).map(t=>`<span>${t}</span>`).join('')}</div>
    </button>`;
  }
  function paintProjectsWindow() {
    const win = document.querySelector('.window[data-id="projects"]');
    if (!win) return;
    win.querySelectorAll('[data-proj-filter]').forEach(btn => {
      const on = btn.dataset.projFilter === projectsFilter;
      btn.classList.toggle('on', on);
      btn.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    const grid = win.querySelector('.proj-grid');
    if (grid) grid.innerHTML = filteredProjects().map(projectCardHTML).join('');
  }

  let photosAlbum = 'library';
  let photosSel = null;
  let mapPlace = 'la';
  let ftContact = 'me';
  let ftPhase = 'idle';
  let contactsSel = 'me';
  let storeTab = 'today';

  function photoLibrary() {
    const photos = [{
      id: 'wall',
      album: 'memories',
      title: 'NehangOS Desktop',
      cap: 'Landscape wallpaper — the portfolio boots into this view.',
      src: 'assets/wallpaper-mac.jpg',
      project: null,
      when: 'Aug 2026'
    }];
    PROJECTS.forEach(p => {
      const s = studyOf(p);
      const imgs = s?.images || [];
      if (imgs.length) {
        imgs.forEach((im, i) => {
          photos.push({
            id: p.id + '-' + i,
            album: p.id,
            title: p.title,
            cap: im.cap || im.alt || p.desc,
            src: im.src,
            project: p.id,
            when: p.status,
            art: null
          });
        });
      } else {
        photos.push({
          id: p.id + '-cover',
          album: p.id,
          title: p.title,
          cap: p.desc,
          src: null,
          art: PHOTO_ART[p.id] || 'linear-gradient(145deg,#3a3a3c,#1d1d1f)',
          project: p.id,
          when: p.status
        });
      }
    });
    return photos;
  }
  function shotFileName(src) {
    try {
      const path = String(src || '').split('?')[0];
      return decodeURIComponent(path.split('/').pop()) || 'Screenshot.png';
    } catch {
      return 'Screenshot.png';
    }
  }
  function isShotFile(file) {
    return String(file || '').startsWith('shot:');
  }
  const DESK_DOODLE = {
    id: 'desk-doodle',
    file: 'shot:desk:doodle',
    src: 'assets/readme/desktop-doodle.jpg',
    name: 'Screenshot 2026-08-01 at 1.11.11 AM.png',
    cap: 'Portfolio desktop energy — stickies, dock, vibes.',
    alt: 'NehangOS desktop doodle',
    kind: 'PNG Image',
    icon: 'photos',
    size: '840 KB',
    project: null,
    album: 'desk'
  };
  function shotsForProject(p) {
    if (!p) return [];
    const s = studyOf(p);
    return (s?.images || []).map((im, i) => ({
      id: p.id + '-' + i,
      file: 'shot:' + p.id + ':' + i,
      project: p.id,
      projectTitle: p.title,
      index: i,
      src: im.src,
      cap: im.cap || im.alt || p.title,
      alt: im.alt || im.cap || p.title,
      name: shotFileName(im.src),
      kind: 'PNG Image',
      icon: 'photos',
      size: '—'
    }));
  }
  function shotByFile(file) {
    if (!isShotFile(file)) return null;
    const parts = String(file).split(':');
    if (parts[1] === 'desk' && parts[2] === 'doodle') return { ...DESK_DOODLE };
    const pid = parts[1];
    const idx = parseInt(parts[2], 10);
    const p = PROJECTS.find(x => x.id === pid);
    return shotsForProject(p)[idx] || null;
  }
  function shotSetFor(shot) {
    if (!shot) return [];
    const p = PROJECTS.find(x => x.id === shot.project);
    const set = shotsForProject(p);
    return set.length ? set : [shot];
  }
  function galleryImgClass(src) {
    const s = String(src || '');
    const contain = /\/fintrackr\//.test(s) || /architecture\.png/i.test(s);
    const diagram = /architecture\.png/i.test(s);
    return (contain ? ' contain' : '') + (diagram ? ' diagram' : '');
  }

  let qlState = { items: [], i: 0 };
  let previewShotState = { items: [], i: 0 };
  let ctxShot = null;

  function motionOk() {
    return !prefs.reduceMotion && !window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  }
  function qlOpen() {
    const el = document.getElementById('quickLook');
    return !!(el && (!el.hidden || el.dataset.closing === '1'));
  }
  function paintQuickLook() {
    const items = qlState.items || [];
    const shot = items[qlState.i];
    const img = document.getElementById('qlImg');
    const cap = document.getElementById('qlCap');
    const name = document.getElementById('qlName');
    const count = document.getElementById('qlCount');
    const prev = document.querySelector('#quickLook [data-ql="prev"]');
    const next = document.querySelector('#quickLook [data-ql="next"]');
    if (!shot || !img) return;
    img.src = shot.src;
    img.alt = shot.alt || shot.name;
    if (cap) cap.textContent = shot.cap || '';
    if (name) name.textContent = shot.name || 'Quick Look';
    if (count) count.textContent = items.length ? (qlState.i + 1) + ' of ' + items.length : '';
    if (prev) prev.hidden = items.length < 2;
    if (next) next.hidden = items.length < 2;
  }
  function closeQuickLook() {
    const wrap = document.getElementById('quickLook');
    if (!wrap || wrap.hidden || wrap.dataset.closing === '1') return;
    wrap.dataset.closing = '1';
    wrap.classList.remove('on');
    const hide = () => {
      wrap.hidden = true;
      delete wrap.dataset.closing;
    };
    if (motionOk()) setTimeout(hide, 160);
    else hide();
  }
  function openQuickLook(items, index) {
    const list = (items || []).filter(s => s && s.src);
    if (!list.length) return;
    qlState.items = list;
    qlState.i = Math.max(0, Math.min(index || 0, list.length - 1));
    const wrap = document.getElementById('quickLook');
    if (!wrap) return;
    closeMenus();
    delete wrap.dataset.closing;
    paintQuickLook();
    wrap.hidden = false;
    requestAnimationFrame(() => wrap.classList.add('on'));
  }
  function stepQuickLook(dir) {
    const n = qlState.items.length;
    if (n < 2) return;
    qlState.i = (qlState.i + dir + n) % n;
    paintQuickLook();
  }
  function openQuickLookFromShot(shot) {
    const set = shotSetFor(shot);
    const i = Math.max(0, set.findIndex(s => s.file === shot.file || s.id === shot.id));
    openQuickLook(set, i < 0 ? 0 : i);
  }
  function currentQlShot() {
    return qlState.items[qlState.i] || null;
  }
  function imagePreviewHTML() {
    return `<div class="preview-app">
      <div class="pv-toolbar">
        <div class="pv-left">
          <span class="pv-file" id="pvShotName"></span>
        </div>
        <div class="pv-center">
          <button type="button" class="pv-btn" data-pv="prev" title="Previous" aria-label="Previous">‹</button>
          <span class="pv-page" id="pvShotPage">1 / 1</span>
          <button type="button" class="pv-btn" data-pv="next" title="Next" aria-label="Next">›</button>
        </div>
        <div class="pv-right">
          <button type="button" class="pv-btn" data-pv="ql" title="Quick Look" aria-label="Quick Look">QL</button>
        </div>
      </div>
      <div class="pv-stage pv-img-stage">
        <img id="pvShotImg" alt=""/>
        <p class="pv-img-cap" id="pvShotCap"></p>
      </div>
    </div>`;
  }
  function paintImagePreview(win) {
    const items = previewShotState.items || [];
    const shot = items[previewShotState.i];
    if (!win || !shot) return;
    const title = win.querySelector('.wtitle');
    if (title) title.textContent = shot.name;
    const rec = state.windows.get(win.dataset.id);
    if (rec) rec.title = shot.name;
    if (state.front === win.dataset.id) setMenuApp('Preview');
    const name = win.querySelector('#pvShotName');
    const page = win.querySelector('#pvShotPage');
    const img = win.querySelector('#pvShotImg');
    const cap = win.querySelector('#pvShotCap');
    if (name) name.textContent = shot.name;
    if (page) page.textContent = (previewShotState.i + 1) + ' / ' + items.length;
    if (img) { img.src = shot.src; img.alt = shot.alt || shot.name; }
    if (cap) cap.textContent = shot.cap || '';
  }
  function bindImagePreview(win) {
    paintImagePreview(win);
    win.querySelector('.pv-toolbar')?.addEventListener('click', e => {
      const btn = e.target.closest('[data-pv]');
      if (!btn) return;
      const act = btn.dataset.pv;
      const n = previewShotState.items.length;
      if (act === 'prev' && n) {
        previewShotState.i = (previewShotState.i - 1 + n) % n;
        paintImagePreview(win);
      }
      if (act === 'next' && n) {
        previewShotState.i = (previewShotState.i + 1) % n;
        paintImagePreview(win);
      }
      if (act === 'ql') {
        const shot = previewShotState.items[previewShotState.i];
        if (shot) openQuickLookFromShot(shot);
      }
    });
  }
  function openImagePreview(items, index) {
    const list = (items || []).filter(s => s && s.src);
    if (!list.length) return;
    previewShotState.items = list;
    previewShotState.i = Math.max(0, Math.min(index || 0, list.length - 1));
    closeQuickLook();
    if (state.windows.has('preview-shot')) {
      const win = state.windows.get('preview-shot').el;
      paintImagePreview(win);
      focusWin('preview-shot');
      bounceDock('resume');
      return;
    }
    const shot = list[previewShotState.i];
    makeWindow('preview-shot', shot.name, imagePreviewHTML(), { w: 860, h: 640, kind: 'preview', dock: 'resume' });
  }
  function openImagePreviewFromShot(shot) {
    const set = shotSetFor(shot);
    const i = Math.max(0, set.findIndex(s => s.file === shot.file || s.id === shot.id));
    openImagePreview(set, i < 0 ? 0 : i);
  }
  function showShotInPhotos(shot) {
    if (!shot) return;
    photosSel = shot.id;
    photosAlbum = shot.project || 'library';
    closeQuickLook();
    openApp('photos');
    document.querySelector('.window[data-id="photos"]')?.dispatchEvent(new Event('photos-refresh'));
  }
  async function copyShotImage(shot) {
    if (!shot?.src) return;
    const abs = (() => { try { return new URL(shot.src, location.href).href; } catch { return shot.src; } })();
    try {
      const res = await fetch(abs);
      const blob = await res.blob();
      const type = blob.type || 'image/png';
      if (navigator.clipboard?.write && window.ClipboardItem) {
        await navigator.clipboard.write([new ClipboardItem({ [type]: blob })]);
        toast('Copied');
        return;
      }
    } catch (_) {}
    try {
      await navigator.clipboard.writeText(abs);
      toast('Copied image address');
    } catch {
      toast('Couldn’t copy image');
    }
  }
  function showShotCtx(x, y, shot, extra) {
    closeMenus();
    ctxShot = shot;
    ctxFile = extra || null;
    const m = document.getElementById('shotCtx');
    if (!m || !shot) return;
    m.hidden = false;
    m.style.left = Math.min(x, window.innerWidth - 220) + 'px';
    m.style.top = Math.min(y, window.innerHeight - 120) + 'px';
  }
  function photosInAlbum(album) {
    const all = photoLibrary();
    if (album === 'library' || album === 'recents') return all;
    if (album === 'memories') return all.filter(p => p.album === 'memories' || p.src);
    if (album === 'projects') return all.filter(p => p.project);
    return all.filter(p => p.album === album);
  }
  function mapEmbed(place) {
    const d = 0.045;
    const left = place.lon - d, right = place.lon + d, bottom = place.lat - d * 0.7, top = place.lat + d * 0.7;
    return `https://www.openstreetmap.org/export/embed.html?bbox=${left}%2C${bottom}%2C${right}%2C${top}&layer=mapnik&marker=${place.lat}%2C${place.lon}`;
  }

  function paintRange(el) {
    if (!el) return;
    const pct = ((+el.value - +el.min) / (+el.max - +el.min)) * 100;
    const fill = el.parentElement && el.parentElement.querySelector('.cc-bar-fill');
    if (fill) fill.style.width = pct + '%';
  }

  function applyDisplay() {
    const wall = document.querySelector('.wallpaper');
    if (!wall) return;
    const light = document.documentElement.getAttribute('data-appearance') === 'light';
    const b = (ccState.bright / 100) * (light ? 1.16 : 1);
    wall.style.filter = 'brightness(' + b + ')';
  }

  function resolveAppearance() {
    if (prefs.appearance === 'auto') {
      try { return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'; }
      catch { return 'dark'; }
    }
    return prefs.appearance === 'light' ? 'light' : 'dark';
  }
  function setAppearance(mode) {
    if (mode) prefs.appearance = mode;
    savePrefs();
    const light = resolveAppearance() === 'light';
    document.documentElement.setAttribute('data-appearance', light ? 'light' : 'dark');
    document.querySelector('[data-cc="dark"]')?.classList.toggle('on', light);
    applyDisplay();
    settingsCtl?.sync();
  }
  function applyDockPrefs() {
    document.documentElement.style.setProperty('--dapp', (prefs.dockSize || 52) + 'px');
    document.documentElement.classList.toggle('dock-autohide', !!prefs.dockHide);
    if (!prefs.dockMag) {
      document.querySelectorAll('#dockInner .dapp').forEach(a => {
        a.style.width = '';
        a.style.height = '';
        const d = a.querySelector('.appico');
        if (d) { d.style.width = ''; d.style.height = ''; }
      });
    }
  }
  function ccOn(kind) {
    return !!document.querySelector(`[data-cc="${kind}"]`)?.classList.contains('on');
  }

  function applyVolume() {
    musicAudio.volume = Math.max(0, Math.min(1, ccState.vol / 100));
    const eq = document.querySelector('.eq');
    if (eq) {
      eq.classList.toggle('paused', !ccState.playing || ccState.vol === 0);
      eq.style.opacity = String(Math.max(0.25, ccState.vol / 100));
    }
    const am = document.querySelector('.window.music .am-vol');
    if (am && document.activeElement !== am) am.value = String(ccState.vol);
  }

  function musicTrack() {
    return MUSIC_LIBRARY[ccState.track] || MUSIC_LIBRARY[0];
  }
  function musicPlaylist() {
    if (musicFilter === 'all') return MUSIC_LIBRARY;
    return MUSIC_LIBRARY.filter(t => t.genre === musicFilter);
  }
  function hasTrackSrc(t) {
    const name = t.src.split('/').pop();
    return (musicAudio.src || '').includes(name) || (musicAudio.currentSrc || '').includes(name);
  }
  function fmtMusicTime(s) {
    if (!isFinite(s) || s < 0) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ':' + String(sec).padStart(2, '0');
  }
  function paintNowPlaying() {
    const t = musicTrack();
    const title = document.getElementById('ccTrack');
    const artist = document.getElementById('ccArtist');
    const notch = document.querySelector('.notch-label');
    if (title) title.textContent = t.title;
    if (artist) artist.textContent = t.artist;
    if (notch) notch.textContent = t.title;
    const nookTrack = document.getElementById('nookTrack');
    const nookArtist = document.getElementById('nookArtist');
    const nookArt = document.getElementById('nookArt');
    if (nookTrack) nookTrack.textContent = t.title;
    if (nookArtist) nookArtist.textContent = t.artist;
    if (nookArt) nookArt.style.background = t.art;
    document.querySelector('.cc-play')?.classList.toggle('playing', ccState.playing);
    document.querySelector('.nook-play')?.classList.toggle('playing', ccState.playing);
    applyVolume();
    paintMusicWindow();
  }
  function loadTrack(i, autoplay) {
    const n = MUSIC_LIBRARY.length;
    ccState.track = ((i % n) + n) % n;
    const t = musicTrack();
    if (!hasTrackSrc(t)) musicAudio.src = t.src;
    paintNowPlaying();
    if (autoplay) playMusic();
  }
  function playMusic() {
    const t = musicTrack();
    if (!hasTrackSrc(t)) musicAudio.src = t.src;
    musicAudio.volume = ccState.vol / 100;
    ccState.playing = true;
    paintNowPlaying();
    const p = musicAudio.play();
    if (p && p.catch) p.catch(() => {
      ccState.playing = false;
      paintNowPlaying();
      toast('Could not play this track');
    });
  }
  function pauseMusic() {
    musicAudio.pause();
    ccState.playing = false;
    paintNowPlaying();
  }
  function toggleMusic() {
    if (ccState.playing) pauseMusic();
    else playMusic();
  }
  function skipMusic(dir) {
    const list = musicPlaylist();
    const cur = musicTrack();
    let idx = list.findIndex(t => t.id === cur.id);
    if (idx < 0) idx = dir > 0 ? -1 : 0;
    const next = list[(idx + dir + list.length) % list.length];
    loadTrack(MUSIC_LIBRARY.findIndex(t => t.id === next.id), true);
  }
  function onMusicTime() {
    const win = document.querySelector('.window.music');
    if (!win || musicSeeking) return;
    const dur = musicAudio.duration;
    const cur = musicAudio.currentTime || 0;
    const seek = win.querySelector('.am-seek');
    const a = win.querySelector('.am-t0');
    const b = win.querySelector('.am-t1');
    if (a) a.textContent = fmtMusicTime(cur);
    if (b) b.textContent = fmtMusicTime(dur);
    if (seek && isFinite(dur) && dur > 0) seek.value = String(Math.round((cur / dur) * 1000));
  }
  function paintMusicWindow() {
    const win = document.querySelector('.window.music');
    if (!win) return;
    const t = musicTrack();
    const list = musicPlaylist();
    const titles = { all:'Listen Now', bollywood:'Bollywood', english:'English' };
    win.querySelectorAll('[data-am-lib]').forEach(btn => {
      btn.classList.toggle('on', btn.dataset.amLib === musicFilter);
    });
    const heading = win.querySelector('.am-heading');
    const sub = win.querySelector('.am-sub');
    if (heading) heading.textContent = titles[musicFilter] || 'Listen Now';
    if (sub) {
      sub.textContent = musicFilter === 'all'
        ? `${MUSIC_LIBRARY.length} songs · Bollywood & English`
        : `${list.length} songs · ${titles[musicFilter]}`;
    }
    const cover = win.querySelector('.am-cover');
    if (cover) cover.style.background = t.art;
    const heroTitle = win.querySelector('.am-hero-title');
    const heroMeta = win.querySelector('.am-hero-meta');
    if (heroTitle) heroTitle.textContent = t.title;
    if (heroMeta) heroMeta.textContent = `${t.artist} · ${t.album}`;
    const badge = win.querySelector('.am-badge');
    if (badge) badge.textContent = t.genre === 'bollywood' ? 'Bollywood' : 'English';
    win.querySelectorAll('.am-play').forEach(btn => btn.classList.toggle('playing', ccState.playing));
    const nowTitle = win.querySelector('.am-now-title');
    const nowArtist = win.querySelector('.am-now-artist');
    const nowArt = win.querySelector('.am-now-art');
    if (nowTitle) nowTitle.textContent = t.title;
    if (nowArtist) nowArtist.textContent = t.artist;
    if (nowArt) nowArt.style.background = t.art;
    const songs = win.querySelector('.am-songs');
    if (songs) {
      songs.innerHTML = list.map((row, i) => {
        const on = row.id === t.id;
        return `<button type="button" class="am-row${on ? ' on' : ''}${on && ccState.playing ? ' playing' : ''}" data-am-track="${row.id}">
          <span class="am-idx"><em>${i + 1}</em><span class="am-mini-eq" aria-hidden="true"><i></i><i></i><i></i></span></span>
          <span class="am-row-main">
            <span class="am-row-art" style="background:${row.art}"></span>
            <span class="am-row-txt"><strong>${row.title}</strong><small>${row.artist}</small></span>
          </span>
          <span class="am-row-album">${row.album}</span>
          <span class="am-row-genre">${row.genre === 'bollywood' ? 'Bollywood' : 'English'}</span>
        </button>`;
      }).join('');
    }
    onMusicTime();
  }

  function screenshotFlash() {
    closeMenus();
    const flash = document.getElementById('shotFlash');
    if (!flash) return;
    flash.hidden = false;
    flash.style.animation = 'none';
    void flash.offsetWidth;
    flash.style.animation = '';
    setTimeout(() => { flash.hidden = true; toast('Screenshot captured'); }, 320);
  }

  function handleCC(kind) {
    const wifiRow = document.querySelector('[data-cc="wifi"]');
    const btRow = document.querySelector('[data-cc="bt"]');
    const adRow = document.querySelector('[data-cc="airdrop"]');
    if (kind === 'wifi') {
      wifiRow.classList.toggle('on');
      const on = wifiRow.classList.contains('on');
      document.getElementById('ccWifiName').textContent = on ? 'NehangOS' : 'Not Connected';
      document.getElementById('wifiBtn').classList.toggle('off', !on);
    } else if (kind === 'bt') {
      btRow.classList.toggle('on');
      document.getElementById('ccBtName').textContent = btRow.classList.contains('on') ? 'On' : 'Off';
    } else if (kind === 'airdrop') {
      const modes = ['Off', 'Contacts Only', 'Everyone'];
      ccState.airdrop = (ccState.airdrop + 1) % 3;
      adRow.classList.toggle('on', ccState.airdrop > 0);
      document.getElementById('ccAdName').textContent = modes[ccState.airdrop];
    } else if (kind === 'play') {
      toggleMusic();
    } else if (kind === 'prev') {
      skipMusic(-1);
    } else if (kind === 'next') {
      skipMusic(1);
    } else if (kind === 'stage') {
      document.querySelector('[data-cc="stage"]').classList.toggle('on');
    } else if (kind === 'mirror') {
      const btn = document.querySelector('[data-cc="mirror"]');
      btn.classList.toggle('on');
      toast(btn.classList.contains('on') ? 'Looking for displays…' : 'Screen Mirroring off');
    } else if (kind === 'dark') {
      setAppearance(resolveAppearance() === 'light' ? 'dark' : 'light');
    } else if (kind === 'shot') {
      screenshotFlash();
    } else if (kind === 'focus') {
      const btn = document.querySelector('[data-cc="focus"]');
      btn.classList.toggle('on');
      const on = btn.classList.contains('on');
      document.getElementById('focusDot').hidden = !on;
      toast(on ? 'Focus on' : 'Focus off');
    } else if (kind === 'airplay') {
      toast('No AirPlay devices nearby');
    }
    settingsCtl?.sync();
  }

  function bindControlCenter() {
    ['ccBright', 'ccVol'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      paintRange(el);
      el.addEventListener('input', () => {
        paintRange(el);
        if (id === 'ccBright') { ccState.bright = +el.value; applyDisplay(); }
        else { ccState.vol = +el.value; applyVolume(); }
      });
    });
    musicAudio.addEventListener('ended', () => skipMusic(1));
    musicAudio.addEventListener('timeupdate', onMusicTime);
    musicAudio.addEventListener('loadedmetadata', onMusicTime);
    paintNowPlaying();
    applyVolume();
  }

  let nookStream = null;
  const nookTrayItems = [
    { id:'resume', name:'Resume.pdf', open:'resume', icon:'assets/icons/macos/pdf.svg' },
    { id:'readme', name:'README.md', open:'readme', icon:'assets/icons/macos/textedit.png' }
  ];

  function stopNookMirror() {
    if (!nookStream) return;
    nookStream.getTracks().forEach(t => t.stop());
    nookStream = null;
    const video = document.getElementById('nookCam');
    if (video) video.srcObject = null;
    document.getElementById('nookMirrorBtn')?.classList.remove('on');
    document.querySelector('.nook-mirror')?.classList.remove('on');
  }
  function nookEventList() {
    const now = new Date();
    const y = now.getFullYear(), m = now.getMonth(), d = now.getDate();
    const items = [{ day: d, name: 'Open to internships', time: 'All day' }];
    const grids = nthWeekday(y, m, 3, 1);
    const hours = nthWeekday(y, m, 4, 2) || nthWeekday(y, m, 4, 1);
    if (grids && grids >= d) items.push({ day: grids, name: 'GRIDS standup', time: '4:00 PM' });
    if (hours && hours >= d && hours !== grids) items.push({ day: hours, name: 'Office hours', time: '2:00 PM' });
    return items.slice(0, 3);
  }
  function paintNookCalendar() {
    const now = new Date();
    const kicker = document.getElementById('nookCalKicker');
    const num = document.getElementById('nookCalNum');
    const list = document.getElementById('nookEvents');
    if (kicker) kicker.textContent = now.toLocaleDateString(undefined, { weekday: 'long' });
    if (num) num.textContent = String(now.getDate());
    if (!list) return;
    list.innerHTML = nookEventList().map(ev =>
      `<div class="nook-ev"><strong>${ev.name}</strong><span>${ev.day === now.getDate() ? ev.time : now.toLocaleDateString(undefined, { month:'short' }) + ' ' + ev.day + ' · ' + ev.time}</span></div>`
    ).join('');
  }
  function paintNookTray() {
    const wrap = document.getElementById('nookTrayItems');
    if (!wrap) return;
    wrap.innerHTML = nookTrayItems.map(it =>
      `<button type="button" class="nook-chip"${it.open ? ` data-open="${it.open}"` : ''} data-nook-file="${it.id}" title="${esc(it.name)}">
        <img src="${it.icon}" alt="" draggable="false"/><span>${esc(it.name)}</span>
      </button>`
    ).join('');
  }
  function trayIconPath(icon) {
    const name = icon || 'textedit';
    const file = ICON_FILE[name] || (/\./.test(name) ? name : name + '.png');
    return 'assets/icons/macos/' + file;
  }
  let ignoreNookClick = false;
  function armIgnoreNookClick() {
    ignoreNookClick = true;
    setTimeout(() => { ignoreNookClick = false; }, 450);
  }
  function pointerOverTray(x, y) {
    const island = document.getElementById('notchIsland');
    if (!island || island.hidden) return null;
    const nodes = document.elementsFromPoint(x, y) || [];
    for (const n of nodes) {
      if (!n?.closest) continue;
      if (n.closest('#nookTray, [data-nook-page="tray"], [data-nook-tab="tray"]')) return island;
      if (n.closest('#notchIsland')) return island;
    }
    const r = island.getBoundingClientRect();
    const open = island.classList.contains('open');
    const padX = open ? 10 : 48;
    const padY = open ? 10 : 40;
    if (x >= r.left - padX && x <= r.right + padX && y >= 0 && y <= r.bottom + padY) return island;
    return null;
  }
  function setTrayHot(on) {
    const island = document.getElementById('notchIsland');
    const tray = document.getElementById('nookTray');
    island?.classList.toggle('drop-on', !!on);
    tray?.classList.toggle('drag', !!on);
  }
  function addToNookTray(meta) {
    if (!meta) return;
    const key = meta.file || meta.id || meta.name;
    if (nookTrayItems.some(t => t.id === key || (meta.file && t.open === meta.file))) {
      openNook();
      showNookTab('tray');
      paintNookTray();
      toast('Already in Tray');
      return;
    }
    nookTrayItems.push({
      id: key,
      name: meta.name,
      open: meta.file && !String(meta.file).startsWith('restored-') ? meta.file : undefined,
      icon: meta.src || trayIconPath(meta.icon || (meta.folder ? 'folder' : 'textedit'))
    });
    openNook();
    showNookTab('tray');
    paintNookTray();
    toast('Added to Tray');
  }
  function fileDragHover(x, y) {
    const trash = pointerOverTrash(x, y);
    const tray = !trash && pointerOverTray(x, y);
    setTrashHot(!!trash);
    if (tray) {
      openNook();
      showNookTab('tray');
      setTrayHot(true);
    } else {
      setTrayHot(false);
    }
    return { trash, tray };
  }
  function clearFileDragHover() {
    setTrashHot(false);
    setTrayHot(false);
  }
  function pointerOverDesktop(x, y) {
    const nodes = document.elementsFromPoint(x, y) || [];
    for (const n of nodes) {
      if (!n?.closest) continue;
      if (n.closest('.window, .dock, .menubar, .notch, #notchIsland, #nookScrim, #quickLook, .ctx, [data-open="trash"]')) return false;
    }
    const hit = document.elementFromPoint(x, y);
    return !!(hit && hit.closest('.stage, #desktop'));
  }
  function placeShotOnDesk(meta, clientX, clientY) {
    if (!meta?.src) return;
    const file = meta.file || ('shot-drop-' + Date.now());
    const existing = [...document.querySelectorAll('.dicon[data-file]:not([hidden])')].find(el => el.dataset.file === file);
    if (existing) {
      toast('Already on Desktop');
      return;
    }
    const stage = document.querySelector('.stage');
    if (!stage) return;
    const sr = stage.getBoundingClientRect();
    const btn = document.createElement('button');
    btn.className = 'dicon';
    btn.dataset.deskId = 'desk-' + file.replace(/[:/]/g, '-');
    btn.dataset.file = file;
    if (meta.src) btn.dataset.shotSrc = meta.src;
    btn.innerHTML = `<img class="appico shot-thumb" src="${esc(meta.src)}" alt="" draggable="false"/><span>${esc(meta.name)}</span>`;
    stage.appendChild(btn);
    floatOnStage(btn, clientX - sr.left - 40, clientY - sr.top - 36);
    saveDeskLayout();
    rememberPlacedShot({ file, deskId: btn.dataset.deskId, name: meta.name, src: meta.src });
    toast('Placed on Desktop');
  }
  function loadPlacedShots() {
    try {
      const raw = JSON.parse(localStorage.getItem('nehang-desk-shots') || '[]');
      return Array.isArray(raw) ? raw : [];
    } catch { return []; }
  }
  function savePlacedShots(list) {
    try { localStorage.setItem('nehang-desk-shots', JSON.stringify(list)); } catch (_) {}
  }
  function rememberPlacedShot(item) {
    const list = loadPlacedShots().filter(x => x.file !== item.file && x.deskId !== item.deskId);
    list.push(item);
    savePlacedShots(list);
  }
  function restorePlacedShots() {
    const stage = document.querySelector('.stage');
    if (!stage) return;
    loadPlacedShots().forEach(it => {
      if (!it?.file || !it.src) return;
      if ([...document.querySelectorAll('.dicon')].some(el => el.dataset.deskId === it.deskId || el.dataset.file === it.file)) return;
      const btn = document.createElement('button');
      btn.className = 'dicon';
      btn.dataset.deskId = it.deskId || ('desk-' + String(it.file).replace(/[:/]/g, '-'));
      btn.dataset.file = it.file;
      btn.dataset.shotSrc = it.src;
      btn.innerHTML = `<img class="appico shot-thumb" src="${esc(it.src)}" alt="" draggable="false"/><span>${esc(it.name || shotFileName(it.src))}</span>`;
      stage.appendChild(btn);
    });
  }
  function trackFileDrag(ev, meta, sourceEl) {
    if (ev.button !== 0 || !meta) return;
    const startX = ev.clientX, startY = ev.clientY;
    let moved = false;
    let ghost = null;
    function move(e2) {
      if (!moved && Math.hypot(e2.clientX - startX, e2.clientY - startY) < 6) return;
      if (!moved) {
        moved = true;
        ghost = document.createElement('div');
        ghost.className = 'file-ghost';
        const pic = sourceEl.querySelector('.appico, .ico, img');
        const icon = meta.src
          ? `<img class="appico fthumb" src="${esc(meta.src)}" alt="" draggable="false"/>`
          : (pic ? pic.outerHTML : ico(meta.icon || 'photos'));
        ghost.innerHTML = icon + '<span>' + esc(meta.name) + '</span>';
        document.body.appendChild(ghost);
      }
      ghost.style.left = (e2.clientX - 32) + 'px';
      ghost.style.top = (e2.clientY - 24) + 'px';
      fileDragHover(e2.clientX, e2.clientY);
    }
    function up(e2) {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
      ghost?.remove();
      const hover = moved ? fileDragHover(e2.clientX, e2.clientY) : { trash: null, tray: null };
      clearFileDragHover();
      if (!moved) return;
      sourceEl._dragged = true;
      const swallow = e => { e.preventDefault(); e.stopPropagation(); sourceEl.removeEventListener('click', swallow, true); };
      sourceEl.addEventListener('click', swallow, true);
      setTimeout(() => { sourceEl._dragged = false; }, 0);
      const canTrash = meta.from === 'Desktop' || !!meta.deskEl;
      if (hover.trash) {
        if (canTrash) {
          moveFileToTrash(meta);
          armIgnoreTrashClick();
        } else if (isShotFile(meta.file)) {
          toast('Screenshots stay in Projects');
        } else {
          moveFileToTrash(meta);
          armIgnoreTrashClick();
        }
      } else if (hover.tray) {
        addToNookTray(meta);
        armIgnoreNookClick();
      } else if (meta.src && pointerOverDesktop(e2.clientX, e2.clientY)) {
        placeShotOnDesk(meta, e2.clientX, e2.clientY);
      }
    }
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  }
  function showNookTab(name) {
    document.querySelectorAll('[data-nook-page]').forEach(p => {
      const on = p.dataset.nookPage === name;
      p.classList.toggle('on', on);
      p.hidden = !on;
    });
    document.querySelectorAll('[data-nook-tab]').forEach(b => b.classList.toggle('on', b.dataset.nookTab === name));
  }
  function openNook() {
    const island = document.getElementById('notchIsland');
    const scrim = document.getElementById('nookScrim');
    const notch = document.getElementById('notch');
    if (!island) return;
    paintNookCalendar();
    paintNookTray();
    paintNowPlaying();
    island.classList.add('open');
    if (scrim) scrim.hidden = false;
    if (notch) notch.setAttribute('aria-expanded', 'true');
  }
  function toggleNook() {
    const island = document.getElementById('notchIsland');
    const was = island?.classList.contains('open');
    closeMenus();
    if (!was) openNook();
  }
  async function toggleNookMirror() {
    if (nookStream) { stopNookMirror(); return; }
    try {
      nookStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      const video = document.getElementById('nookCam');
      if (video) {
        video.srcObject = nookStream;
        video.play().catch(() => {});
      }
      document.getElementById('nookMirrorBtn')?.classList.add('on');
      document.querySelector('.nook-mirror')?.classList.add('on');
    } catch {
      toast('Camera unavailable');
    }
  }
  function bindNook() {
    const island = document.getElementById('notchIsland');
    const tray = document.getElementById('nookTray');
    if (!island) return;
    island.addEventListener('click', e => {
      const tab = e.target.closest('[data-nook-tab]');
      if (tab) { showNookTab(tab.dataset.nookTab); e.stopPropagation(); return; }
      const act = e.target.closest('[data-nook]');
      if (!act) return;
      e.stopPropagation();
      const kind = act.dataset.nook;
      if (kind === 'play') toggleMusic();
      else if (kind === 'prev') skipMusic(-1);
      else if (kind === 'next') skipMusic(1);
      else if (kind === 'mirror') toggleNookMirror();
    });
    const onNookDragOver = e => {
      e.preventDefault();
      openNook();
      showNookTab('tray');
      setTrayHot(true);
    };
    const onNookDrop = e => {
      e.preventDefault();
      setTrayHot(false);
      const files = [...(e.dataTransfer?.files || [])];
      files.forEach(f => {
        nookTrayItems.push({
          id: 'drop-' + Date.now() + Math.random().toString(16).slice(2),
          name: f.name,
          icon: /\.pdf$/i.test(f.name) ? 'assets/icons/macos/pdf.svg'
            : /\.(png|jpe?g|gif|webp)$/i.test(f.name) ? 'assets/icons/macos/photos.png'
            : 'assets/icons/macos/textedit.png'
        });
      });
      if (files.length) {
        paintNookTray();
        toast(files.length === 1 ? 'Added to Tray' : files.length + ' files added to Tray');
      }
    };
    island.addEventListener('dragover', onNookDragOver);
    island.addEventListener('dragleave', e => {
      if (!e.relatedTarget || !island.contains(e.relatedTarget)) setTrayHot(false);
    });
    island.addEventListener('drop', onNookDrop);
  }

  /* clocks */
  function tzOffsetLabel(tz) {
    const now = new Date();
    const minutes = z => {
      const p = new Intl.DateTimeFormat('en-US', { timeZone: z, timeZoneName:'shortOffset', hour:'numeric' }).formatToParts(now);
      const raw = (p.find(x => x.type === 'timeZoneName') || {}).value || 'GMT';
      const m = raw.match(/([+-])(\d+)(?::(\d+))?/);
      if (!m) return 0;
      return (m[1] === '-' ? -1 : 1) * (parseInt(m[2],10) * 60 + parseInt(m[3] || '0', 10));
    };
    let localTz = 'UTC';
    try { localTz = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch (_) {}
    const rel = minutes(tz) - minutes(localTz);
    if (!rel) return '+0:00';
    const sign = rel < 0 ? '-' : '+';
    const abs = Math.abs(rel);
    return sign + Math.floor(abs / 60) + ':' + String(abs % 60).padStart(2, '0');
  }

  function tickClocks() {
    const now = new Date();
    const fmt = { weekday:'short', month:'short', day:'numeric', hour:'numeric', minute:'2-digit' };
    const menu = document.getElementById('menuClock');
    const lockT = document.getElementById('lockTime');
    const lockD = document.getElementById('lockDate');
    const slim = window.innerWidth < 860;
    if (menu) menu.textContent = slim
      ? now.toLocaleTimeString(undefined, { hour:'numeric', minute:'2-digit' })
      : now.toLocaleString(undefined, fmt).replace(',', '');
    if (lockT) lockT.textContent = now.toLocaleTimeString(undefined, { hour:'numeric', minute:'2-digit' });
    if (lockD) lockD.textContent = now.toLocaleDateString(undefined, { weekday:'long', month:'long', day:'numeric' });
    document.getElementById('widDow').textContent = now.toLocaleDateString(undefined, { weekday:'long' });
    document.getElementById('widDay').textContent = String(now.getDate());
    const calIco = document.querySelector('.di.calendar');
    if (calIco) calIco.setAttribute('data-day', String(now.getDate()));

    document.querySelectorAll('.analog').forEach(el => {
      const tz = el.dataset.tz;
      const parts = new Intl.DateTimeFormat('en-US', { timeZone: tz, hour:'numeric', minute:'numeric', second:'numeric', hour12:false }).formatToParts(now);
      const get = t => +parts.find(p => p.type === t).value;
      let h = get('hour') % 12, m = get('minute'), s = get('second');
      el.querySelector('.h').style.transform = `rotate(${h*30 + m*0.5}deg)`;
      el.querySelector('.m').style.transform = `rotate(${m*6}deg)`;
      el.querySelector('.s').style.transform = `rotate(${s*6}deg)`;
    });
    const localDay = now.toLocaleDateString('en-US', { day:'numeric', month:'numeric', year:'numeric' });
    document.querySelectorAll('.clk-day').forEach(el => {
      const there = new Date(now.toLocaleString('en-US', { timeZone: el.dataset.tz }));
      const thereDay = there.toLocaleDateString('en-US', { day:'numeric', month:'numeric', year:'numeric' });
      el.textContent = thereDay === localDay ? 'Today' : (there > now ? 'Tomorrow' : 'Yesterday');
    });
    document.querySelectorAll('.clk-off').forEach(el => {
      el.textContent = tzOffsetLabel(el.dataset.tz);
    });
  }

  async function weather() {
    try {
      const r = await fetch('https://api.open-meteo.com/v1/forecast?latitude=34.0522&longitude=-118.2437&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=America%2FLos_Angeles');
      const j = await r.json();
      const t = Math.round(j.current.temperature_2m);
      const code = j.current.weather_code;
      const map = {0:'Clear',1:'Mainly Clear',2:'Partly Cloudy',3:'Overcast',45:'Fog',51:'Drizzle',61:'Rain',71:'Snow',80:'Showers',95:'Thunder'};
      document.getElementById('wTemp').textContent = t + '°';
      document.getElementById('wDesc').textContent = map[code] || 'Clear';
      const hi = Math.round(j.daily.temperature_2m_max[0]);
      const lo = Math.round(j.daily.temperature_2m_min[0]);
      const hl = document.getElementById('wHiLo');
      if (hl) hl.textContent = 'H:' + hi + '° L:' + lo + '°';
    } catch (_) {
      document.getElementById('wTemp').textContent = '72°';
      document.getElementById('wDesc').textContent = 'Clear';
      const hl = document.getElementById('wHiLo');
      if (hl) hl.textContent = 'H:76° L:62°';
    }
  }

  function battery() {
    const el = document.getElementById('batteryPct');
    if (navigator.getBattery) {
      navigator.getBattery().then(b => {
        el.textContent = Math.round(b.level * 100) + '%';
        b.addEventListener('levelchange', () => { el.textContent = Math.round(b.level * 100) + '%'; });
      }).catch(() => { el.textContent = '100%'; });
    } else el.textContent = '100%';
  }

  /* window manager */
  function focusWin(id) {
    const w = state.windows.get(id);
    if (!w) return;
    state.z += 1;
    w.el.style.zIndex = state.z;
    state.front = id;
    w.el.classList.remove('hidden');
    setMenuApp(w.title.split(' — ')[0].split(' · ')[0]);
    document.querySelectorAll('.dapp').forEach(d => {
      const isSaf = id === 'safari' && (d.dataset.open === 'safari' || d.dataset.safari);
      const isPrev = id === 'preview-shot' && d.dataset.open === 'resume';
      d.classList.toggle('open', d.dataset.open === id || isSaf && d.dataset.open === 'safari' || isPrev);
    });
    const safBtn = document.querySelector('.dapp[data-open="safari"]');
    if (safBtn) safBtn.classList.toggle('open', id === 'safari' || [...state.windows.keys()].some(k => k === 'safari'));
  }

  function closeWin(id) {
    const w = state.windows.get(id);
    if (!w) return;
    w.el.remove();
    state.windows.delete(id);
    if (id === 'settings') settingsCtl = null;
    document.querySelectorAll('.dapp').forEach(d => {
      if (d.dataset.open === id) d.classList.remove('open');
    });
    if (id === 'preview-shot' && !state.windows.has('resume')) {
      document.querySelector('.dapp[data-open="resume"]')?.classList.remove('open');
    }
  }

  function minWin(id) {
    const w = state.windows.get(id);
    if (!w) return;
    w.el.classList.add('hidden');
  }

  function maxWin(id) {
    const w = state.windows.get(id);
    if (!w) return;
    w.el.classList.toggle('max');
  }

  function makeWindow(id, title, bodyHTML, opts = {}) {
    if (state.windows.has(id)) { focusWin(id); return; }
    const el = document.createElement('div');
    el.className = 'window' + (opts.kind ? ' ' + opts.kind : '');
    el.dataset.id = id;
    const w = opts.w || 640, h = opts.h || 480;
    const stageEl = document.querySelector('.stage');
    const sw = stageEl.clientWidth, sh = stageEl.clientHeight;
    const left = Math.max(16, (sw - w) / 2 + (state.windows.size % 4) * 22 - 40);
    const top = Math.max(16, Math.min(80, (sh - h) / 6) + (state.windows.size % 4) * 20);
    el.style.width = w + 'px';
    el.style.height = opts.kind === 'aboutmac' ? 'auto' : h + 'px';
    el.style.left = left + 'px';
    el.style.top = top + 'px';
    el.innerHTML = `
      <div class="titlebar">
        <div class="traffic">
          <button class="tbtn t-close" data-act="close" aria-label="Close"></button>
          <button class="tbtn t-min" data-act="min" aria-label="Minimize"></button>
          <button class="tbtn t-max" data-act="max" aria-label="Maximize"></button>
        </div>
        <div class="wtitle">${title}</div>
      </div>
      <div class="wbody">${bodyHTML}</div>
      <div class="resize"></div>`;
    layer().appendChild(el);
    state.windows.set(id, { el, title });
    bindWindow(el, id);
    focusWin(id);
    bounceDock(opts.dock || id);
    if (id === 'terminal') initTerminal(el);
    if (id === 'contact') bindContact(el);
    if (id === 'messages') bindMessages(el);
    if (id === 'finder' || id === 'trash') bindFinder(el, id === 'trash' ? 'Trash' : 'Desktop');
    if (id === 'resume') bindPreview(el);
    if (id === 'preview-shot') bindImagePreview(el);
    if (id === 'calendar') bindCalendar(el);
    if (id === 'education') bindEducation(el);
    if (id === 'experience') bindExperience(el);
    if (String(id).startsWith('proj-')) bindProject(el);
    if (id === 'projects') bindProjects(el);
    if (id === 'music') bindMusic(el);
    if (id === 'notes') bindNotes(el);
    if (id === 'settings') bindSettings(el);
    if (id === 'photos') bindPhotos(el);
    if (id === 'maps') bindMaps(el);
    if (id === 'facetime') bindFaceTime(el);
    if (id === 'appstore') bindAppStore(el);
    if (id === 'contacts') bindContacts(el);
    if (opts.kind === 'safari') bindSafari(el);
  }

  function bindWindow(el, id) {
    el.addEventListener('mousedown', () => focusWin(id));
    el.querySelector('[data-act="close"]').addEventListener('click', e => { e.stopPropagation(); closeWin(id); });
    el.querySelector('[data-act="min"]').addEventListener('click', e => { e.stopPropagation(); minWin(id); });
    el.querySelector('[data-act="max"]').addEventListener('click', e => { e.stopPropagation(); maxWin(id); });
    const bar = el.querySelector('.titlebar');
    bar.addEventListener('mousedown', ev => {
      if (ev.target.closest('.tbtn') || el.classList.contains('max')) return;
      const r = el.getBoundingClientRect();
      const ox = ev.clientX - r.left, oy = ev.clientY - r.top;
      const stage = document.querySelector('.stage').getBoundingClientRect();
      function move(e2) {
        el.style.left = Math.max(0, e2.clientX - stage.left - ox) + 'px';
        el.style.top = Math.max(0, e2.clientY - stage.top - oy) + 'px';
      }
      function up() { document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', up); }
      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', up);
    });
    const rz = el.querySelector('.resize');
    rz.addEventListener('mousedown', ev => {
      ev.preventDefault();
      const startX = ev.clientX, startY = ev.clientY;
      const startW = el.offsetWidth, startH = el.offsetHeight;
      function move(e2) {
        const minW = el.classList.contains('settings') ? 680 : el.classList.contains('finder') ? 560 : 360;
        const minH = el.classList.contains('settings') ? 420 : 240;
        el.style.width = Math.max(minW, startW + (e2.clientX - startX)) + 'px';
        el.style.height = Math.max(minH, startH + (e2.clientY - startY)) + 'px';
      }
      function up() { document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', up); }
      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', up);
    });
  }

  function pills(list) {
    return `<div class="pills">${list.map(s => `<span class="pill">${s}</span>`).join('')}</div>`;
  }

  function nthWeekday(y, m, weekday, n) {
    const first = new Date(y, m, 1).getDay();
    const day = 1 + ((weekday - first + 7) % 7) + (n - 1) * 7;
    return day <= new Date(y, m + 1, 0).getDate() ? day : null;
  }
  function calendarMarkup(y, m) {
    const now = new Date();
    const label = new Date(y, m, 1).toLocaleString(undefined, { month: 'long', year: 'numeric' });
    const first = new Date(y, m, 1).getDay();
    const days = new Date(y, m + 1, 0).getDate();
    const thisMonth = y === now.getFullYear() && m === now.getMonth();
    const flavor = new Map();
    const grids = nthWeekday(y, m, 3, 1);
    const hours = nthWeekday(y, m, 4, 2) || nthWeekday(y, m, 4, 1);
    if (grids) flavor.set(grids, { name: 'GRIDS standup', kind: 'grids' });
    if (hours && hours !== grids) flavor.set(hours, { name: 'Office hours', kind: 'hours' });
    const cells = [];
    for (let i = 0; i < first; i++) cells.push('<div class="cal-cell"></div>');
    for (let i = 1; i <= days; i++) {
      const ev = flavor.get(i);
      const pill = ev ? `<p class="cal-pill ${ev.kind}">${ev.name}</p>` : '';
      cells.push(`<div class="cal-cell${thisMonth && i === now.getDate() ? ' today' : ''}"><span>${i}</span>${pill}</div>`);
    }
    while (cells.length < 42) cells.push('<div class="cal-cell"></div>');
    return `<div class="cal-app" data-y="${y}" data-m="${m}">
      <div class="cal-toolbar">
        <div class="cal-nav">
          <button type="button" data-cal="prev" aria-label="Previous month">‹</button>
          <button type="button" data-cal="next" aria-label="Next month">›</button>
        </div>
        <button type="button" class="cal-today" data-cal="today"${thisMonth ? ' disabled' : ''}>Today</button>
        <p class="cal-month">${label}</p>
      </div>
      <div class="cal-grid">
        ${['S','M','T','W','T','F','S'].map(h => `<div class="cal-hd">${h}</div>`).join('')}
        ${cells.join('')}
      </div>
    </div>`;
  }
  function bindCalendar(win) {
    const paint = (y, m) => {
      const wrap = win.querySelector('.wbody');
      if (!wrap) return;
      wrap.innerHTML = calendarMarkup(y, m);
    };
    win.addEventListener('click', e => {
      const btn = e.target.closest('[data-cal]');
      if (!btn) return;
      const app = win.querySelector('.cal-app');
      let y = +app.dataset.y, m = +app.dataset.m;
      if (btn.dataset.cal === 'prev') { m -= 1; if (m < 0) { m = 11; y -= 1; } }
      if (btn.dataset.cal === 'next') { m += 1; if (m > 11) { m = 0; y += 1; } }
      if (btn.dataset.cal === 'today') {
        const n = new Date();
        y = n.getFullYear();
        m = n.getMonth();
      }
      paint(y, m);
    });
  }

  let eduLaunchPane = null;

  function bindEducation(win) {
    const show = id => {
      win.querySelectorAll('.edu-nav').forEach(b => b.classList.toggle('on', b.dataset.edu === id));
      win.querySelectorAll('[data-edu-pane]').forEach(p => {
        const on = p.dataset.eduPane === id;
        p.classList.toggle('on', on);
        p.hidden = !on;
      });
      win.querySelector('.edu-main')?.scrollTo(0, 0);
    };
    win.addEventListener('click', e => {
      const btn = e.target.closest('[data-edu]');
      if (!btn) return;
      e.preventDefault();
      show(btn.dataset.edu);
    });
    if (eduLaunchPane) {
      show(eduLaunchPane);
      eduLaunchPane = null;
    }
  }

  function bindExperience(win) {
    const show = id => {
      win.querySelectorAll('.edu-nav').forEach(b => b.classList.toggle('on', b.dataset.exp === id));
      win.querySelectorAll('[data-exp-pane]').forEach(p => {
        const on = p.dataset.expPane === id;
        p.classList.toggle('on', on);
        p.hidden = !on;
      });
      win.querySelector('.edu-main')?.scrollTo(0, 0);
    };
    win.addEventListener('click', e => {
      const btn = e.target.closest('[data-exp]');
      if (!btn || btn.dataset.open) return;
      e.preventDefault();
      show(btn.dataset.exp);
    });
  }

  function bindProjects(win) {
    paintProjectsWindow();
    win.addEventListener('click', e => {
      const filter = e.target.closest('[data-proj-filter]');
      if (!filter) return;
      const next = filter.dataset.projFilter;
      if (!next || next === projectsFilter) return;
      projectsFilter = next;
      paintProjectsWindow();
    });
  }

  function bindMusic(win) {
    paintMusicWindow();
    win.addEventListener('click', e => {
      const lib = e.target.closest('[data-am-lib]');
      if (lib) {
        musicFilter = lib.dataset.amLib;
        paintMusicWindow();
        return;
      }
      const track = e.target.closest('[data-am-track]');
      if (track) {
        const i = MUSIC_LIBRARY.findIndex(t => t.id === track.dataset.amTrack);
        if (i < 0) return;
        if (i === ccState.track) toggleMusic();
        else loadTrack(i, true);
        return;
      }
      const act = e.target.closest('[data-am]');
      if (!act) return;
      if (act.dataset.am === 'play') toggleMusic();
      else if (act.dataset.am === 'prev') skipMusic(-1);
      else if (act.dataset.am === 'next') skipMusic(1);
    });
    const seek = win.querySelector('.am-seek');
    if (seek) {
      seek.addEventListener('pointerdown', () => { musicSeeking = true; });
      seek.addEventListener('input', () => {
        const dur = musicAudio.duration;
        const a = win.querySelector('.am-t0');
        if (a && isFinite(dur) && dur > 0) a.textContent = fmtMusicTime((+seek.value / 1000) * dur);
      });
      const commitSeek = () => {
        const dur = musicAudio.duration;
        if (isFinite(dur) && dur > 0) musicAudio.currentTime = (+seek.value / 1000) * dur;
        musicSeeking = false;
        onMusicTime();
      };
      seek.addEventListener('change', commitSeek);
      seek.addEventListener('pointerup', commitSeek);
    }
    const vol = win.querySelector('.am-vol');
    if (vol) {
      vol.value = String(ccState.vol);
      vol.addEventListener('input', () => {
        ccState.vol = +vol.value;
        const cc = document.getElementById('ccVol');
        if (cc) { cc.value = vol.value; paintRange(cc); }
        const set = document.querySelector('.window.settings [data-set="vol"]');
        if (set) set.value = vol.value;
        applyVolume();
      });
    }
  }

  function noteStamp(n) {
    return n.stamp ? new Date(n.stamp) : new Date();
  }
  function bindNotes(win) {
    const items = win.querySelector('.notes-items');
    const body = win.querySelector('.notes-body');
    const search = win.querySelector('.nl-bar input');
    let sel = NOTES[0].id;
    const shown = () => {
      const q = (search?.value || '').trim().toLowerCase();
      return NOTES.filter(n => {
        if (!q) return true;
        const hay = (n.title + ' ' + n.preview + ' ' + n.body()).toLowerCase();
        return hay.includes(q);
      });
    };
    const paint = () => {
      const list = shown();
      if (!list.some(n => n.id === sel)) sel = list[0]?.id || '';
      items.innerHTML = list.map(n => {
        const d = noteStamp(n);
        const when = d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
        return `<button type="button" data-note="${n.id}" class="${n.id === sel ? 'on' : ''}">
          <span class="nl-top"><strong>${n.title}</strong><time>${when}</time></span>
          <span class="nl-preview">${n.preview}</span>
        </button>`;
      }).join('') || `<p class="nl-empty">No Results</p>`;
      const n = NOTES.find(x => x.id === sel);
      if (!n) { body.innerHTML = ''; return; }
      const long = noteStamp(n).toLocaleString(undefined, { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
      body.innerHTML = `<p class="nb-date">${long}</p>${n.body()}`;
    };
    paint();
    items.addEventListener('click', e => {
      const btn = e.target.closest('[data-note]');
      if (!btn) return;
      sel = btn.dataset.note;
      paint();
    });
    search?.addEventListener('input', paint);
    search?.addEventListener('keydown', e => { if (e.key === 'Enter') e.preventDefault(); });
  }

  const SET_NAV = [
    { id:'apple', name:'Nehang Patel', sub:'Apple Account', user:true },
    { sep:true },
    { id:'wifi', name:'Wi-Fi', tint:'#007aff', icon:'wifi' },
    { id:'bluetooth', name:'Bluetooth', tint:'#007aff', icon:'bt' },
    { id:'network', name:'Network', tint:'#007aff', icon:'net' },
    { sep:true },
    { id:'notifications', name:'Notifications', tint:'#ff3b30', icon:'bell' },
    { id:'sound', name:'Sound', tint:'#ff375f', icon:'spk' },
    { id:'focus', name:'Focus', tint:'#5856d6', icon:'moon' },
    { sep:true },
    { id:'general', name:'General', tint:'#8e8e93', icon:'gear' },
    { id:'appearance', name:'Appearance', appear:true },
    { id:'accessibility', name:'Accessibility', tint:'#007aff', icon:'a11y' },
    { id:'control-center', name:'Control Center', tint:'#8e8e93', icon:'cc' },
    { id:'siri', name:'Siri & Spotlight', siri:true },
    { id:'privacy', name:'Privacy & Security', tint:'#007aff', icon:'lock' },
    { sep:true },
    { id:'desktop', name:'Desktop & Dock', tint:'#5ac8fa', icon:'dock' },
    { id:'displays', name:'Displays', tint:'#007aff', icon:'display' },
    { id:'wallpaper', name:'Wallpaper', photo:true },
    { sep:true },
    { id:'battery', name:'Battery', tint:'#30d158', icon:'bolt' },
    { id:'users', name:'Users & Groups', tint:'#8e8e93', icon:'users' },
    { id:'accounts', name:'Internet Accounts', tint:'#007aff', icon:'at' },
    { sep:true },
    { id:'keyboard', name:'Keyboard', tint:'#8e8e93', icon:'kbd' },
    { id:'trackpad', name:'Trackpad', tint:'#8e8e93', icon:'pad' }
  ];
  const SET_SVG = {
    wifi:'<path fill="none" stroke="#fff" stroke-width="1.85" stroke-linecap="round" d="M4.4 9.2a11 11 0 0 1 15.2 0M7 12.4a7 7 0 0 1 10 0"/><circle cx="12" cy="16.6" r="1.4" fill="#fff"/>',
    bt:'<path fill="#fff" d="M12.15 3.1 17.2 7.9l-3.5 3.4 3.5 3.4-5.05 4.7V13.1L8.7 16.6 7.35 15.2l4-3.4-4-3.4L8.7 6.9l3.45 3.4V3.1zm1.7 11.9v3.3l2.15-1.95zM13.85 6.4l2.15 1.95-2.15 2.05V6.4z"/>',
    net:'<path fill="none" stroke="#fff" stroke-width="1.7" d="M12 4.2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"/><path fill="none" stroke="#fff" stroke-width="1.5" d="M4.2 12h15.6M12 4.2c2.4 2.6 3.6 5.4 3.6 7.8S14.4 17.2 12 19.8C9.6 17.2 8.4 14.4 8.4 12S9.6 6.8 12 4.2z"/>',
    bell:'<path fill="#fff" d="M12 4.2a4.6 4.6 0 0 1 4.6 4.6v3.1l1.5 2.4H6l1.5-2.4V8.8A4.6 4.6 0 0 1 12 4.2zM9.4 17.8a2.6 2.6 0 0 0 5.2 0z"/>',
    spk:'<path fill="#fff" d="M4.2 9.2h3.1L12 5.4v13.2l-4.7-3.8H4.2zm9.4.4 1.2-1.2A5.4 5.4 0 0 1 16.4 12a5.4 5.4 0 0 1-1.6 3.6l-1.2-1.2A3.7 5 0 0 0 15 12a3.7 5 0 0 0-1.4-2.4z"/>',
    moon:'<path fill="#fff" d="M14.8 3.4a.85.85 0 0 0-1 .2A8 8 0 1 0 20.4 15.6a.85.85 0 0 0-.28-1.5 6.2 6.2 0 0 1-4-4.1 6.2 6.2 0 0 1 1.3-5.5.85.85 0 0 0-.62-1.1z"/>',
    gear:'<path fill="#fff" d="M12 8.4A3.6 3.6 0 1 0 12 15.6 3.6 3.6 0 0 0 12 8.4zm0-4.2 1.1 2.2 2.4-.3 1.1 2.1-1.6 1.8.6 2.3-2.2 1.1-1.1 2.2H10.7L9.6 17.4l-2.2-1.1.6-2.3-1.6-1.8 1.1-2.1 2.4.3z"/>',
    a11y:'<circle cx="12" cy="6.2" r="2.05" fill="#fff"/><path fill="#fff" d="M7.2 9.2h9.6v1.8h-3.3l.9 8.4h-2.1l-.5-4.4h-.6l-.5 4.4H8.6l.9-8.4H7.2z"/>',
    cc:'<rect x="3.4" y="4" width="7.2" height="16" rx="3.4" fill="none" stroke="#fff" stroke-width="1.7"/><circle cx="7" cy="8.4" r="1.7" fill="#fff"/><rect x="13.4" y="4" width="7.2" height="16" rx="3.4" fill="none" stroke="#fff" stroke-width="1.7"/><circle cx="17" cy="15.6" r="1.7" fill="#fff"/>',
    lock:'<rect x="6.2" y="10.2" width="11.6" height="9.2" rx="2" fill="#fff"/><path fill="none" stroke="#fff" stroke-width="1.8" d="M8.4 10.2V8.2a3.6 3.6 0 0 1 7.2 0v2"/>',
    dock:'<rect x="3.4" y="5" width="17.2" height="10.4" rx="2" fill="none" stroke="#fff" stroke-width="1.6"/><rect x="6.2" y="17.2" width="11.6" height="2.2" rx="1.1" fill="#fff"/>',
    display:'<rect x="3.6" y="4.6" width="16.8" height="11.6" rx="2" fill="none" stroke="#fff" stroke-width="1.7"/><path fill="#fff" d="M8 18.6h8v1.4H8z"/>',
    bolt:'<path fill="#fff" d="M13.6 3.2 7.4 13.2h4.2l-1.2 7.6 6.4-10.4h-4.3z"/>',
    users:'<circle cx="9.2" cy="8.4" r="2.4" fill="#fff"/><circle cx="15.6" cy="9" r="1.9" fill="#fff"/><path fill="#fff" d="M3.8 18.4c.4-3.1 2.8-4.8 5.4-4.8s5 1.7 5.4 4.8zm8.4-.2c.2-1.8 1.4-3.2 3.2-3.6 1.4.6 2.4 1.9 2.6 3.8z"/>',
    at:'<path fill="none" stroke="#fff" stroke-width="1.7" d="M12 19.4a7.4 7.4 0 1 1 0-14.8 7.4 7.4 0 0 1 0 14.8z"/><path fill="none" stroke="#fff" stroke-width="1.6" d="M14.6 12a2.6 2.6 0 1 1-2.6-2.6"/><path fill="none" stroke="#fff" stroke-width="1.6" d="M14.6 9.4v4.2a2 2 0 0 0 3.6 1"/>',
    kbd:'<rect x="3.2" y="6.4" width="17.6" height="11.2" rx="2" fill="none" stroke="#fff" stroke-width="1.6"/><path fill="#fff" d="M6 9.2h1.6v1.5H6zm3.2 0h1.6v1.5H9.2zm3.2 0H14v1.5h-1.6zm3.2 0h1.6v1.5h-1.6zM6 12.2h8.8v1.5H6z"/>',
    pad:'<rect x="5.4" y="3.6" width="13.2" height="16.8" rx="3.2" fill="none" stroke="#fff" stroke-width="1.7"/><path fill="#fff" d="M5.4 13.2h13.2v1.1H5.4z"/>'
  };
  function setIco(item) {
    if (item.user) return '<span class="set-ava">NP</span>';
    if (item.appear) return '<span class="set-ico set-ico-appear"></span>';
    if (item.siri) return '<span class="set-ico set-ico-siri"><svg viewBox="0 0 24 24" width="14" height="14"><path fill="#fff" d="M12 3.4v10.2a2.6 2.6 0 0 1-2.6 2.6 2.6 2.6 0 0 1-2.6-2.6H8a1.4 1.4 0 1 0 2.8 0V3.4zm6.2 8.8v1.4A6.2 6.2 0 0 1 12 19.8v1.6h3.2v1.4H8.8v-1.4h3.2v-1.6a6.2 6.2 0 0 1-6.2-6.2h1.4a4.8 4.8 0 0 0 9.6 0z"/></svg></span>';
    if (item.photo) return '<span class="set-ico set-ico-photo"></span>';
    return `<span class="set-ico" style="background:${item.tint}"><svg viewBox="0 0 24 24" width="15" height="15">${SET_SVG[item.icon] || ''}</svg></span>`;
  }
  function setSwitch(on) {
    return `<span class="set-sw${on ? ' on' : ''}" aria-hidden="true"></span>`;
  }
  function setGroup(rows) {
    return `<div class="set-group">${rows.join('')}</div>`;
  }
  function setRow(opts) {
    const { label, sub, trailing = '', chevron, val } = opts;
    let { action } = opts;
    const inner = `<span class="set-lab">${label}${sub ? `<em>${sub}</em>` : ''}</span><span class="set-trail">${trailing}${chevron ? '<span class="set-chev">›</span>' : ''}</span>`;
    if (!action && /set-sw/.test(String(trailing))) action = 'flip';
    if (action) {
      return `<button type="button" class="set-row${chevron ? ' chev' : ''}" data-set="${action}"${val != null ? ` data-val="${esc(String(val))}"` : ''}>${inner}</button>`;
    }
    return `<div class="set-row">${inner}</div>`;
  }
  function setPane(id) {
    const wifi = ccOn('wifi');
    const bt = ccOn('bt');
    const focus = ccOn('focus');
    const stage = ccOn('stage');
    const airdrop = ['Off', 'Contacts Only', 'Everyone'][ccState.airdrop] || 'Off';
    const batt = document.getElementById('batteryPct')?.textContent || '100%';
    const appear = prefs.appearance || 'dark';
    const panes = {
      apple: () => `<div class="set-apple">
          <div class="set-ava lg">NP</div>
          <h1>Nehang Patel</h1>
          <p class="set-sub">Apple Account</p>
        </div>
        ${setGroup([
          setRow({ label:'Name', trailing:'Nehang Patel' }),
          setRow({ label:'Apple Account', trailing:'nehangal@usc.edu', action:'copy-mail' })
        ])}
        ${setGroup([
          setRow({ label:'iCloud', sub:'5 GB of ideas — plenty of room', chevron:true, action:'toast', val:'iCloud is signed in on this Mac' }),
          setRow({ label:'iCloud Drive', trailing:setSwitch(true) }),
          setRow({ label:'Messages in iCloud', trailing:setSwitch(true) })
        ])}
        ${setGroup([
          setRow({ label:'Mail', sub:'nehangal@usc.edu', chevron:true, action:'open', val:'contact' }),
          setRow({ label:'GitHub', chevron:true, action:'safari', val:'https://github.com/NehangPatel23' }),
          setRow({ label:'LinkedIn', chevron:true, action:'safari', val:'https://www.linkedin.com/in/nehangpatel/' })
        ])}`,
      wifi: () => `<h1>Wi-Fi</h1>
        ${setGroup([setRow({ label:'Wi-Fi', trailing:setSwitch(wifi), action:'wifi' })])}
        ${wifi ? `<p class="set-h">Known Networks</p>
          ${setGroup([
            setRow({ label:'NehangOS', sub:'Connected' }),
            setRow({ label:'eduroam', action:'join', val:'eduroam' }),
            setRow({ label:'USC Guest', action:'join', val:'USC Guest' }),
            setRow({ label:'iPhone (Nehang)', action:'join', val:'iPhone (Nehang)' })
          ])}
          <p class="set-foot">Ask to Join Networks is on. This Mac uses Wi-Fi for Mail, Messages, and Safari.</p>` : '<p class="set-foot">Wi-Fi is off. The menu bar icon stays dimmed until you turn it back on.</p>'}`,
      bluetooth: () => `<h1>Bluetooth</h1>
        ${setGroup([setRow({ label:'Bluetooth', trailing:setSwitch(bt), action:'bt' })])}
        ${bt ? `<p class="set-h">My Devices</p>
          ${setGroup([
            setRow({ label:'AirPods Pro', sub:'Connected' }),
            setRow({ label:'Magic Keyboard', sub:'Connected' }),
            setRow({ label:'Magic Trackpad', sub:'Not Connected', action:'toast', val:'Magic Trackpad is out of range' })
          ])}` : '<p class="set-foot">Bluetooth is off.</p>'}`,
      network: () => `<h1>Network</h1>
        ${setGroup([
          setRow({ label:'Wi-Fi', sub: wifi ? 'NehangOS · Connected' : 'Off', chevron:true, action:'pane', val:'wifi' }),
          setRow({ label:'VPN', sub:'Not configured' })
        ])}
        ${setGroup([
          setRow({ label:'Firewall', trailing:setSwitch(true) }),
          setRow({ label:'Firewall Options', chevron:true, action:'toast', val:'Incoming connections are limited to Mail and Messages' })
        ])}`,
      notifications: () => `<h1>Notifications</h1>
        ${setGroup([
          setRow({ label:'Show Previews', trailing:'When Unlocked' }),
          setRow({ label:'Allow Notifications', trailing:setSwitch(true) })
        ])}
        <p class="set-h">Notification Style</p>
        ${setGroup([
          setRow({ label:'Mail', sub:'Banners, Sounds', chevron:true, action:'open', val:'contact' }),
          setRow({ label:'Messages', sub:'Banners, Sounds', chevron:true, action:'open', val:'messages' }),
          setRow({ label:'Calendar', sub:'Banners', chevron:true, action:'open', val:'calendar' }),
          setRow({ label:'Safari', sub:'None', chevron:true, action:'open', val:'safari' })
        ])}`,
      sound: () => `<h1>Sound</h1>
        <p class="set-h">Output</p>
        ${setGroup([
          setRow({ label:'MacBook Speakers', sub:'Selected' }),
          setRow({ label:'AirPods Pro', action:'toast', val:'Moved sound to AirPods Pro' })
        ])}
        <p class="set-h">Volume</p>
        ${setGroup([`<div class="set-row range"><span class="set-lab">Output volume</span><input class="set-range" type="range" min="0" max="100" value="${ccState.vol}" data-set="vol" aria-label="Output volume"/></div>`])}
        ${setGroup([
          setRow({ label:'Play sound on startup', trailing:setSwitch(true) }),
          setRow({ label:'Play user interface sound effects', trailing:setSwitch(true) })
        ])}`,
      focus: () => `<h1>Focus</h1>
        ${setGroup([setRow({ label:'Do Not Disturb', trailing:setSwitch(focus), action:'focus' })])}
        ${setGroup([
          setRow({ label:'Share across devices', trailing:setSwitch(false) }),
          setRow({ label:'Focus status', sub:'Share when a Focus is on', trailing:setSwitch(true) })
        ])}
        <p class="set-foot">Focus hides the menu bar moon until you turn it off from here or Control Center.</p>`,
      general: () => `<h1>General</h1>
        ${setGroup([
          setRow({ label:'About', sub:'NehangOS 26.8', chevron:true, action:'open', val:'about-mac' }),
          setRow({ label:'Software Update', sub:'Up to date', chevron:true, action:'toast', val:'NehangOS 26.8 is up to date' }),
          setRow({ label:'Storage', sub:'Projects HD — plenty of room', chevron:true, action:'toast', val:'Projects HD has room for more internships' }),
          setRow({ label:'AirDrop & Handoff', sub:airdrop, chevron:true, action:'airdrop' }),
          setRow({ label:'Language & Region', sub:'English (US)', chevron:true, action:'toast', val:'English · United States' }),
          setRow({ label:'Date & Time', sub:'Los Angeles · 12-hour', chevron:true, action:'toast', val:'America/Los_Angeles' }),
          setRow({ label:'Transfer or Reset', chevron:true, action:'toast', val:'This Mac stays as it is. Unused ideas go in the Trash.' })
        ])}`,
      appearance: () => `<h1>Appearance</h1>
        <div class="set-themes" role="group" aria-label="Appearance">
          <button type="button" class="set-theme${appear==='light'?' on':''}" data-set="appear" data-val="light">
            <span class="set-theme-prev light"></span>Light
          </button>
          <button type="button" class="set-theme${appear==='dark'?' on':''}" data-set="appear" data-val="dark">
            <span class="set-theme-prev dark"></span>Dark
          </button>
          <button type="button" class="set-theme${appear==='auto'?' on':''}" data-set="appear" data-val="auto">
            <span class="set-theme-prev auto"></span>Auto
          </button>
        </div>
        ${setGroup([
          setRow({ label:'Accent color', trailing:'<span class="set-accent"></span> Multicolor' }),
          setRow({ label:'Show scroll bars', trailing:'Automatically' })
        ])}
        <p class="set-foot">Light mode lifts the wallpaper. Dark is the default for this Mac.</p>`,
      accessibility: () => `<h1>Accessibility</h1>
        ${setGroup([
          setRow({ label:'Reduce motion', trailing:setSwitch(!!prefs.reduceMotion), action:'motion' }),
          setRow({ label:'Increase contrast', trailing:setSwitch(document.documentElement.classList.contains('set-contrast')), action:'contrast' })
        ])}
        ${setGroup([
          setRow({ label:'Display', chevron:true, action:'pane', val:'displays' }),
          setRow({ label:'VoiceOver', sub:'Off' }),
          setRow({ label:'Zoom', sub:'Off' })
        ])}`,
      'control-center': () => `<h1>Control Center</h1>
        ${setGroup([
          setRow({ label:'Wi-Fi', trailing:'Show in Control Center' }),
          setRow({ label:'Bluetooth', trailing:'Show in Control Center' }),
          setRow({ label:'AirDrop', sub:airdrop, trailing:setSwitch(ccState.airdrop > 0), action:'airdrop' }),
          setRow({ label:'Focus', trailing:'Show in Menu Bar' }),
          setRow({ label:'Sound', trailing:'Always Show in Menu Bar' }),
          setRow({ label:'Now Playing', trailing:'Show in Control Center' })
        ])}
        <p class="set-foot">These modules are already in Control Center. Click the menu bar switches to open it.</p>`,
      siri: () => `<h1>Siri &amp; Spotlight</h1>
        ${setGroup([
          setRow({ label:'Ask Siri', trailing:setSwitch(false), action:'siri' }),
          setRow({ label:'Listen for', trailing:'Off' })
        ])}
        ${setGroup([
          setRow({ label:'Spotlight', sub:'⌘K or ⌘Space', chevron:true, action:'spotlight' }),
          setRow({ label:'Siri Suggestions', trailing:setSwitch(true) })
        ])}
        <p class="set-foot">This Mac does not listen. Use Spotlight (⌘K) when you want to find something.</p>`,
      privacy: () => `<h1>Privacy &amp; Security</h1>
        ${setGroup([
          setRow({ label:'Location Services', trailing:setSwitch(false) }),
          setRow({ label:'Camera', sub:'Safari' }),
          setRow({ label:'Microphone', sub:'None' }),
          setRow({ label:'Files and Folders', sub:'Finder, Preview' })
        ])}
        ${setGroup([
          setRow({ label:'Lock Screen', sub:'Click or press any key to unlock', chevron:true, action:'lock' }),
          setRow({ label:'Analytics & Improvements', trailing:setSwitch(false) })
        ])}`,
      desktop: () => `<h1>Desktop &amp; Dock</h1>
        <p class="set-h">Dock</p>
        ${setGroup([
          `<div class="set-row range"><span class="set-lab">Size</span><input class="set-range" type="range" min="40" max="72" value="${prefs.dockSize}" data-set="dock-size" aria-label="Dock size"/></div>`,
          setRow({ label:'Magnification', trailing:setSwitch(!!prefs.dockMag), action:'dock-mag' }),
          setRow({ label:'Automatically hide and show the Dock', trailing:setSwitch(!!prefs.dockHide), action:'dock-hide' }),
          setRow({ label:'Show indicators for open applications', trailing:setSwitch(true) })
        ])}
        ${setGroup([
          setRow({ label:'Stage Manager', trailing:setSwitch(stage), action:'stage' })
        ])}`,
      displays: () => `<h1>Displays</h1>
        <div class="set-display">
          <div class="set-display-screen"></div>
          <p>Built-in Liquid Retina XDR Display</p>
        </div>
        ${setGroup([
          `<div class="set-row range"><span class="set-lab">Brightness</span><input class="set-range" type="range" min="35" max="100" value="${ccState.bright}" data-set="bright" aria-label="Display brightness"/></div>`,
          setRow({ label:'Automatically adjust brightness', trailing:setSwitch(true) }),
          setRow({ label:'True Tone', trailing:setSwitch(true) }),
          setRow({ label:'Night Shift', trailing:'Off', chevron:true, action:'toast', val:'Night Shift is scheduled Off' })
        ])}`,
      wallpaper: () => `<h1>Wallpaper</h1>
        <p class="set-h">Current Desktop Picture</p>
        <div class="set-walls">
          <button type="button" class="set-wall on" disabled>
            <span class="set-wall-img mac"></span><span>NehangOS</span>
          </button>
        </div>
        <p class="set-foot">Light appearance still lifts the wallpaper.</p>`,
      battery: () => `<h1>Battery</h1>
        ${setGroup([
          setRow({ label:'Battery', trailing:batt }),
          setRow({ label:'Power Source', trailing: batt === '100%' ? 'Power Adapter' : 'Battery' }),
          setRow({ label:'Low Power Mode', trailing:setSwitch(false), action:'toast', val:'Low Power Mode is unavailable in the browser' })
        ])}
        <p class="set-foot">Percentage in the menu bar uses this computer&apos;s battery when the browser allows it.</p>`,
      users: () => `<h1>Users &amp; Groups</h1>
        ${setGroup([
          setRow({ label:'<span class="set-ava sm">NP</span> Nehang Patel', sub:'Admin', trailing:'Current User' })
        ])}
        ${setGroup([
          setRow({ label:'Allow guests to log in', trailing:setSwitch(false) }),
          setRow({ label:'Automatic login', trailing:'Off' })
        ])}`,
      accounts: () => `<h1>Internet Accounts</h1>
        ${setGroup([
          setRow({ label:'iCloud', sub:'nehangal@usc.edu', chevron:true, action:'pane', val:'apple' }),
          setRow({ label:'Google', sub:'Not added' })
        ])}
        ${setGroup([
          setRow({ label:'Mail', chevron:true, action:'open', val:'contact' }),
          setRow({ label:'Add Account…', chevron:true, action:'toast', val:'Mail is already set to nehangal@usc.edu' })
        ])}`,
      keyboard: () => `<h1>Keyboard</h1>
        ${setGroup([
          setRow({ label:'Key repeat rate', trailing:'Fast' }),
          setRow({ label:'Delay until repeat', trailing:'Short' }),
          setRow({ label:'Keyboard brightness', trailing:'Automatic' })
        ])}
        ${setGroup([
          setRow({ label:'Spotlight', sub:'⌘K or ⌘Space', chevron:true, action:'spotlight' }),
          setRow({ label:'Input sources', trailing:'U.S.' })
        ])}`,
      trackpad: () => `<h1>Trackpad</h1>
        ${setGroup([
          setRow({ label:'Tracking speed', trailing:'Medium' }),
          setRow({ label:'Click', trailing:'Medium' }),
          setRow({ label:'Tap to click', trailing:setSwitch(true) }),
          setRow({ label:'Natural scrolling', trailing:setSwitch(true) })
        ])}
        ${setGroup([
          setRow({ label:'Look up &amp; data detectors', trailing:setSwitch(true) }),
          setRow({ label:'Mission Control', trailing:'Swipe up with three fingers' })
        ])}`
    };
    return (panes[id] || panes.wifi)();
  }
  function bindSettings(win) {
    const nav = win.querySelector('.set-nav');
    const main = win.querySelector('.set-main');
    const search = win.querySelector('.set-search input');
    let sel = SET_NAV.some(i => i.id === settingsPane) ? settingsPane : 'wifi';

    function shown() {
      const q = (search?.value || '').trim().toLowerCase();
      if (!q) return SET_NAV;
      return SET_NAV.filter(i => !i.sep && (i.name + ' ' + (i.sub || '')).toLowerCase().includes(q));
    }
    function paintNav() {
      nav.innerHTML = shown().map(i => {
        if (i.sep) return '<div class="set-sep"></div>';
        return `<button type="button" class="${i.id === sel ? 'on' : ''}${i.user ? ' set-user' : ''}" data-pane="${i.id}">${setIco(i)}<span>${i.user ? `<b>${i.name}</b><em>${i.sub}</em>` : i.name}</span></button>`;
      }).join('') || '<p class="set-none">No Results</p>';
      nav.querySelector('button.on')?.scrollIntoView({ block: 'nearest' });
    }
    function paintMain() {
      settingsPane = sel;
      main.innerHTML = setPane(sel);
    }
    function select(id) {
      if (!SET_NAV.some(i => i.id === id)) id = 'wifi';
      sel = id;
      paintNav();
      paintMain();
    }
    settingsCtl = { select, sync() { paintNav(); paintMain(); } };
    select(sel);

    nav.addEventListener('click', e => {
      const b = e.target.closest('[data-pane]');
      if (b) select(b.dataset.pane);
    });
    search?.addEventListener('input', paintNav);
    search?.addEventListener('keydown', e => { if (e.key === 'Enter') e.preventDefault(); });

    win.addEventListener('click', e => {
      if (e.target.closest('input[type="range"]')) return;
      const btn = e.target.closest('[data-set]');
      if (!btn) return;
      const act = btn.dataset.set;
      const val = btn.dataset.val;
      if (act === 'wifi') handleCC('wifi');
      else if (act === 'bt') handleCC('bt');
      else if (act === 'focus') handleCC('focus');
      else if (act === 'stage') handleCC('stage');
      else if (act === 'airdrop') handleCC('airdrop');
      else if (act === 'appear') setAppearance(val);
      else if (act === 'dock-mag') { prefs.dockMag = !prefs.dockMag; savePrefs(); applyDockPrefs(); settingsCtl.sync(); }
      else if (act === 'dock-hide') { prefs.dockHide = !prefs.dockHide; savePrefs(); applyDockPrefs(); settingsCtl.sync(); }
      else if (act === 'motion') { prefs.reduceMotion = !prefs.reduceMotion; savePrefs(); applyDockPrefs(); settingsCtl.sync(); }
      else if (act === 'contrast') { document.documentElement.classList.toggle('set-contrast'); settingsCtl.sync(); }
      else if (act === 'pane') select(val);
      else if (act === 'open') openApp(val);
      else if (act === 'safari') openSafari(val);
      else if (act === 'spotlight') openSpotlight();
      else if (act === 'lock') { closeWin('settings'); document.getElementById('lock').classList.remove('hidden'); }
      else if (act === 'copy-mail') {
        navigator.clipboard?.writeText('nehangal@usc.edu').then(() => toast('Email copied')).catch(() => toast('nehangal@usc.edu'));
      }
      else if (act === 'join') toast('Joined ' + val);
      else if (act === 'siri') toast('This Mac does not listen. Try Spotlight ⌘K.');
      else if (act === 'flip') btn.querySelector('.set-sw')?.classList.toggle('on');
      else if (act === 'toast') toast(val || 'OK');
    });
    win.addEventListener('input', e => {
      const el = e.target.closest('[data-set]');
      if (!el) return;
      if (el.dataset.set === 'bright') {
        ccState.bright = +el.value;
        const cc = document.getElementById('ccBright');
        if (cc) { cc.value = el.value; paintRange(cc); }
        applyDisplay();
      }
      if (el.dataset.set === 'vol') {
        ccState.vol = +el.value;
        const cc = document.getElementById('ccVol');
        if (cc) { cc.value = el.value; paintRange(cc); }
        applyVolume();
      }
      if (el.dataset.set === 'dock-size') {
        prefs.dockSize = +el.value;
        savePrefs();
        applyDockPrefs();
      }
    });
  }

  const bodies = {
    about() {
      return `<p class="kicker">About</p>
        <h2 class="app-h">Engineer at heart, builder by nature.</h2>
        <p class="lede">MSCS student at USC's Viterbi School of Engineering. Previously BS-CS at the University of Cincinnati with a minor in Cyber Operations &amp; Software Engineering. Work spans data pipelines, mobile apps, web scraping, and interactive UI — always anchored in clean architecture, user empathy, and measurable impact. Taught design thinking to 1,500+ students. President of GRIDS @ USC since May 2026.</p>
        ${pills(SKILLS)}
        <div class="stats">
          <div class="stat"><b>5+</b><span>Years coding</span></div>
          <div class="stat"><b>8+</b><span>Roles held</span></div>
          <div class="stat"><b>1.5k+</b><span>Students taught</span></div>
          <div class="stat"><b>4×</b><span>Dean's List</span></div>
        </div>
        <p class="lede">Open to internships and new-grad software engineering roles. Los Angeles, CA.</p>
        <div class="links">
          <button type="button" class="btn" data-safari="https://github.com/NehangPatel23">GitHub</button>
          <button type="button" class="btn" data-safari="https://www.linkedin.com/in/nehangpatel/">LinkedIn</button>
          <button type="button" class="btn" data-safari="https://x.com/itsnehangp_x">X</button>
          <button type="button" class="btn" data-open="contact">Email</button>
        </div>`;
    },
    projects() {
      const list = filteredProjects();
      return `<p class="kicker">Selected work</p>
        <h2 class="app-h">Things I've shipped</h2>
        <div class="proj-filters" role="tablist" aria-label="Filter projects">
          <button type="button" role="tab" data-proj-filter="all" class="${projectsFilter === 'all' ? 'on' : ''}" aria-selected="${projectsFilter === 'all'}">All</button>
          <button type="button" role="tab" data-proj-filter="completed" class="${projectsFilter === 'completed' ? 'on' : ''}" aria-selected="${projectsFilter === 'completed'}">Completed</button>
          <button type="button" role="tab" data-proj-filter="dev" class="${projectsFilter === 'dev' ? 'on' : ''}" aria-selected="${projectsFilter === 'dev'}">In development</button>
        </div>
        <div class="grid2 proj-grid">${list.map(projectCardHTML).join('')}</div>`;
    },
    experience() {
      return `<div class="edu-app xp">
        <aside class="edu-side">
          <p class="edu-side-label">Roles</p>
          <button type="button" class="edu-nav on" data-exp="overview">At a glance<span>How to read this</span></button>
          <button type="button" class="edu-nav" data-exp="mts">MediTechSafe<span>Intern · 2023–2024</span></button>
          <button type="button" class="edu-nav" data-exp="grids">GRIDS @ USC<span>President · current</span></button>
          <button type="button" class="edu-nav" data-exp="teach">Teaching<span>UC · 2022–2025</span></button>
          <button type="button" class="edu-nav" data-exp="ite">ITE Co-op<span>Loveland · 2022</span></button>
          <button type="button" class="edu-nav" data-exp="iq4">iQ4<span>Apprentice · 2022</span></button>
          <div class="edu-side-foot">
            <p>Open to internships and new-grad SWE roles.</p>
            <button type="button" class="edu-link" data-open="resume">Open Resume.pdf</button>
          </div>
        </aside>
        <div class="edu-main">
          <section class="edu-pane on" data-exp-pane="overview">
            <p class="edu-kicker">Work history</p>
            <h2>Production internships, teaching at scale, then lead the org.</h2>
            <p class="edu-lead">Two terms at MediTechSafe, a co-op, a security apprenticeship, 3.5 years teaching while earning the BS, and now President of GRIDS at USC. Projects has the case studies. This window is the employer side — role, impact, stack, and what a recruiter can verify.</p>
            <div class="xp-stats">
              <div><b>2</b><span>MediTechSafe internships</span></div>
              <div><b>10k+</b><span>records / day at peak</span></div>
              <div><b>3.5 yr</b><span>teaching appointment</span></div>
              <div><b>Now</b><span>GRIDS President</span></div>
            </div>
            <h3>Open a role</h3>
            <div class="xp-roles">
              <button type="button" class="xp-role feat" data-exp="mts">
                <em>May 2023 — Apr 2024</em>
                <strong>MediTechSafe Inc</strong>
                <span>Software Developer Intern · two terms</span>
                <p>Scrapers and QA at volume, then a Flutter internal UI on Golang + MySQL. The internship that should carry a new-grad conversation.</p>
              </button>
              <button type="button" class="xp-role now" data-exp="grids">
                <em>Oct 2025 — Present</em>
                <strong>GRIDS @ USC</strong>
                <span>President · previously Director of Marketing</span>
                <p>Strategy, programming, and member engagement for Viterbi’s data-science graduate org — current, since May 2026.</p>
              </button>
              <button type="button" class="xp-role" data-exp="teach">
                <em>Jan 2022 — May 2025</em>
                <strong>University of Cincinnati</strong>
                <span>Peer TA · Learning Assistant · Tutor</span>
                <p>72-person sections, 1,500+ orientation, kept in parallel with internships — communication proof, not a gap.</p>
              </button>
              <button type="button" class="xp-role" data-exp="ite">
                <em>Aug 2022 — Dec 2022</em>
                <strong>ITE LLC</strong>
                <span>Software Co-op · Loveland, OH</span>
                <p>C++ debugging, configuration, and models under a Technical Lead, plus Losant IoT and Neo4j on the job.</p>
              </button>
              <button type="button" class="xp-role" data-exp="iq4">
                <em>Feb 2022 — Apr 2022</em>
                <strong>iQ4 Corporation</strong>
                <span>Cybersecurity Analyst Apprentice</span>
                <p>NIST / NICE, incident-response case work, weekly briefings. The security thread that continues into the minor and Forensics &amp; IR.</p>
              </button>
            </div>
            <div class="edu-take">
              <h3>What a recruiter should notice</h3>
              <ul>
                <li><strong>Current:</strong> President of GRIDS @ USC since May 2026, MSCS at Viterbi — open to internships and new-grad SWE from Los Angeles.</li>
                <li><strong>Production:</strong> two MediTechSafe internships — 10,000+ records/day, QA gates, then Flutter on Golang APIs. Source is NDA; architecture is in Projects.</li>
                <li><strong>Communication:</strong> 72-person ENED sections and 1,500+ orientation, overlapping internships. Teaching is employment, not a substitute for shipping.</li>
              </ul>
            </div>
          </section>
          <section class="edu-pane" data-exp-pane="mts" hidden>
            <div class="edu-head">
              <p class="edu-kicker">Software Developer Intern</p>
              <span class="edu-status done">Two terms · 2023–2024</span>
            </div>
            <h2>MediTechSafe Inc</h2>
            <p class="xp-place">Healthcare cybersecurity · Hamilton, then West Chester, OH</p>
            <p class="edu-lead">First term: collect and clean at volume. Second term: treat scraping as production software, then learn Flutter on the job and ship an internal UI on the same Golang APIs. Proprietary codebase — architecture and outcomes, not source.</p>
            <div class="xp-stats">
              <div><b>10k+</b><span>records / day after refactor</span></div>
              <div><b>2</b><span>terms, same pipeline</span></div>
              <div><b>0→1</b><span>Flutter on the job</span></div>
              <div><b>NDA</b><span>architecture is public</span></div>
            </div>
            <h3>Two terms, one system</h3>
            <div class="xp-terms">
              <article>
                <em>May — Aug 2023 · Hamilton, OH</em>
                <strong>Collect and clean at scale</strong>
                <ul>
                  <li>Collected and normalised thousands of online records weekly.</li>
                  <li>Built cleaning pipelines so scraped datasets could integrate without a manual pass.</li>
                  <li>QA on thousands of records per run — inconsistencies resolved before they hit downstream.</li>
                  <li>Automated work that had been hours of collection per cycle.</li>
                </ul>
              </article>
              <article>
                <em>Jan — Apr 2024 · West Chester, OH</em>
                <strong>Production software, then a UI</strong>
                <ul>
                  <li>Refactored the scraping codebase to 10,000+ records/day with shared libraries and a shadow-run cutover.</li>
                  <li>Learned Flutter independently; reusable widgets, dashboard, record explorer, filters, pagination.</li>
                  <li>Wired the UI to Golang APIs — typed client, error codes operators could act on.</li>
                  <li>Engineering dashboards and MySQL validation queries (null-rate, cardinality, stale sources).</li>
                </ul>
              </article>
            </div>
            <h3>How the system was split</h3>
            <p class="edu-hint">Same data, two surfaces — collectors in Python, operators in Flutter. MySQL stays authoritative.</p>
            <div class="xp-stages">
              <span>Scheduler</span>
              <span>Source scrapers</span>
              <span>Raw staging</span>
              <span>QA &amp; normalize</span>
              <span>MySQL</span>
              <span>Dashboards / Flutter</span>
            </div>
            <div class="edu-courses">
              <article><strong>Collector layer</strong><p>Per-source adapters with retry/backoff. Shared HTTP, selectors, and logging instead of one-off scripts.</p></article>
              <article><strong>QA &amp; staging</strong><p>Schema, duplicates, and anomalies as a pipeline stage. Raw payloads kept for replay when parsers break.</p></article>
              <article><strong>MySQL + dashboards</strong><p>System of record plus validation queries — null-rate spikes, cardinality, stale sources — before downstream noticed.</p></article>
              <article><strong>Flutter thin client</strong><p>Presentation and session state only. Golang owns rules. Widget library so the next internal screen did not start from zero.</p></article>
            </div>
            <h3>Stack</h3>
            ${pills(['Python','Selenium','Pandas','MySQL','Flutter','Dart','GoLang','REST APIs'])}
            <div class="edu-callout">
              <p><strong>Proof a recruiter can check.</strong> Scale and QA live in the Scraping Pipeline case study. The UI ramp and API wiring live in MediTechSafe Internal UI. Both are NDA-bound on source; the architecture is public.</p>
            </div>
            <div class="edu-actions">
              <button type="button" data-open="scrape">Open Scraping Pipeline</button>
              <button type="button" data-open="mtsui">Open Internal UI</button>
            </div>
          </section>
          <section class="edu-pane" data-exp-pane="grids" hidden>
            <div class="edu-head">
              <p class="edu-kicker">Graduates Rising in Data Science</p>
              <span class="edu-status live">Current · President</span>
            </div>
            <h2>GRIDS @ USC</h2>
            <p class="xp-place">Viterbi School of Engineering · Los Angeles, CA · Oct 2025 — Present</p>
            <p class="edu-lead">Graduate student organisation for informatics, data science, and CS. I came in on marketing, ran the function, then took President in May 2026. Leadership next to the MSCS — strategy, programming, and engagement, not a title on a flyer.</p>
            <div class="xp-stats">
              <div><b>Now</b><span>President since May 2026</span></div>
              <div><b>3</b><span>roles in one org</span></div>
              <div><b>MSCS</b><span>in parallel at Viterbi</span></div>
              <div><b>LA</b><span>seeking internships / new-grad</span></div>
            </div>
            <h3>How the role grew</h3>
            <div class="xp-chapters">
              <article>
                <em>Oct 2025 — Jan 2026</em>
                <strong>Executive Board · Marketing &amp; Outreach</strong>
                <p>Stood up brand presence and member engagement. Aligned messaging with events so the org had a public surface, not just a Slack channel.</p>
              </article>
              <article>
                <em>Jan 2026 — May 2026</em>
                <strong>Director of Marketing</strong>
                <p>Owned branding, outreach, and campaigns — Canva, social, and coordinated promotion. Past role; not current.</p>
              </article>
              <article class="now">
                <em>May 2026 — Present</em>
                <strong>President</strong>
                <p>Leading strategy, programming, and member engagement. Semester events, speaker/recruiting, exec coordination — the teaching communication load, applied to a graduate org. Brand continuity from the marketing year so the handoff did not reset GRIDS.</p>
              </article>
            </div>
            <div class="edu-jump">
              <button type="button" data-open="education">Open Education</button>
              <button type="button" data-open="resume">Open Resume.pdf</button>
            </div>
          </section>
          <section class="edu-pane" data-exp-pane="teach" hidden>
            <div class="edu-head">
              <p class="edu-kicker">Peer TA · Learning Assistant · Tutor</p>
              <span class="edu-status done">Jan 2022 — May 2025</span>
            </div>
            <h2>University of Cincinnati</h2>
            <p class="xp-place">Dept. of Engineering Education · Learning Commons · Cincinnati, OH</p>
            <p class="edu-lead">Teaching ran alongside internships, not instead of them. Three related roles, one communication proof: large sections, design-thinking workshops, and logistics for thousands of students.</p>
            <div class="xp-stats">
              <div><b>72</b><span>students per section</span></div>
              <div><b>1:24</b><span>instruction ratio</span></div>
              <div><b>1,500+</b><span>orientation &amp; demos</span></div>
              <div><b>3.5 yr</b><span>appointment</span></div>
            </div>
            <div class="xp-chapters">
              <article>
                <em>Jan 2022 — May 2025</em>
                <strong>Peer Teaching Assistant · ENED-1100 &amp; ENED-1120</strong>
                <p>Taught, graded, and mentored teamwork, conflict resolution, and leadership for classes of 72. Led final presentations for the Engineering Design Thinking Classroom Simulation. Orientation workshops for incoming freshmen and the 2022 summer camp for 150+ high school seniors. Coordinated demonstrations for 1,500+ students across cohorts.</p>
              </article>
              <article>
                <em>Aug 2023 — Dec 2023</em>
                <strong>Learning Assistant · UC Learning Commons</strong>
                <p>Active, application-based teaching in large-lecture classrooms with faculty. Group discussions, problem sets, weekly office hours. Regular faculty meetings as professional development — not a drop-in tutor hour.</p>
              </article>
              <article>
                <em>Jan 2023 — Dec 2023</em>
                <strong>Peer Tutor · UC Learning Commons</strong>
                <p>One-on-one CS and engineering support, in person and online. Programme representative modelling professional attitudes for students and faculty.</p>
              </article>
            </div>
            <div class="edu-actions">
              <button type="button" data-open="education" data-edu-start="teach">Open Education · Teaching</button>
            </div>
          </section>
          <section class="edu-pane" data-exp-pane="ite" hidden>
            <div class="edu-head">
              <p class="edu-kicker">Software Co-op</p>
              <span class="edu-status done">Aug 2022 — Dec 2022</span>
            </div>
            <h2>ITE LLC</h2>
            <p class="xp-place">Loveland, OH · product design &amp; engineering</p>
            <p class="edu-lead">A co-op term under a Technical Lead: C++ debugging, configuration, computer models, plus self-directed IoT (Losant) and Neo4j. Early proof of sitting in an engineering org and shipping assigned work without a student-project wrapper.</p>
            <div class="xp-stats">
              <div><b>1</b><span>term, assigned work</span></div>
              <div><b>C++</b><span>debug · config · models</span></div>
              <div><b>IoT</b><span>Losant workflows</span></div>
              <div><b>Graph</b><span>Neo4j on the job</span></div>
            </div>
            <div class="edu-courses">
              <article><strong>Project execution</strong><p>Debugging, configuration updates, and computer models on the schedule the lead set — design-engineering practice as employment, not a class project.</p></article>
              <article><strong>Adjacent stack</strong><p>Losant IoT workflows and Neo4j graph queries alongside the core assignment, not as a side tutorial after hours.</p></article>
            </div>
            ${pills(['C++','IoT','Losant','Neo4j'])}
          </section>
          <section class="edu-pane" data-exp-pane="iq4" hidden>
            <div class="edu-head">
              <p class="edu-kicker">Cybersecurity Analyst Apprentice</p>
              <span class="edu-status done">Feb 2022 — Apr 2022</span>
            </div>
            <h2>iQ4 Corporation</h2>
            <p class="xp-place">Remote · The Threat Within virtual apprenticeship</p>
            <p class="edu-lead">Team of four apprentices. NIST and NICE frameworks, incident-response case work, and weekly briefings for mixed audiences. This is the security thread that later shows up as the Cincinnati cyber-operations minor and the current Forensics &amp; IR course — not a claim of SOC employment.</p>
            <div class="xp-stats">
              <div><b>4</b><span>apprentices on the team</span></div>
              <div><b>NIST</b><span>+ NICE frameworks</span></div>
              <div><b>IR</b><span>written case study</span></div>
              <div><b>Weekly</b><span>technical + non-technical briefings</span></div>
            </div>
            <div class="edu-courses">
              <article><strong>Framework literacy</strong><p>NIST / NICE through mentored case studies — vocabulary used later in the minor, Applied Cryptography, and Forensics &amp; IR.</p></article>
              <article><strong>Incident response</strong><p>IR methods into a written case study modelling industry practice. Weekly progress updates; findings translated for technical and non-technical listeners.</p></article>
            </div>
            <div class="edu-actions">
              <button type="button" data-open="education" data-edu-start="creds">Open Education · Credentials</button>
            </div>
          </section>
        </div>
      </div>`;
    },

    education() {
      return `<div class="edu-app">
        <aside class="edu-side">
          <p class="edu-side-label">Record</p>
          <button type="button" class="edu-nav on" data-edu="overview">At a glance</button>
          <button type="button" class="edu-nav" data-edu="usc">MS · USC Viterbi</button>
          <button type="button" class="edu-nav" data-edu="uc">BS · Cincinnati</button>
          <button type="button" class="edu-nav" data-edu="teach">Teaching</button>
          <button type="button" class="edu-nav" data-edu="creds">Credentials</button>
          <div class="edu-side-foot">
            <p>Open to internships and new-grad SWE roles.</p>
            <button type="button" class="edu-link" data-open="resume">Open Resume.pdf</button>
          </div>
        </aside>
        <div class="edu-main">
          <section class="edu-pane on" data-edu-pane="overview">
            <p class="edu-kicker">Academic record</p>
            <h2>Two degrees, one through-line: build systems that hold up.</h2>
            <p class="edu-lead">MS Computer Science in progress at USC Viterbi, after a completed BS in CS at Cincinnati with a Cyber Operations &amp; Software Engineering minor. The coursework, teaching, and credentials below are the academic side of the same work in Experience and Projects — data pipelines, full-stack products, and security-aware engineering.</p>
            <div class="edu-timeline" aria-hidden="true">
              <span><i></i>Aug 2020<br>BS starts</span>
              <span><i></i>May 2025<br>BS conferred</span>
              <span class="now"><i></i>Aug 2025<br>MS starts</span>
              <span><i></i>May 2027<br>MS expected</span>
            </div>
            <div class="edu-take">
              <h3>What a recruiter should notice</h3>
              <ul>
                <li><strong>Current:</strong> second-year MSCS at Viterbi — algorithms, databases, web, applied cryptography, and Computer Forensics &amp; Information Retrieval (in session).</li>
                <li><strong>Foundation:</strong> five-year CS degree plus a security/software-engineering minor, not a survey elective.</li>
                <li><strong>Communication:</strong> multi-year teaching load (72-person sections, 1,500+ orientation) alongside internships.</li>
              </ul>
            </div>
            <div class="edu-jump">
              <button type="button" data-edu="usc">Read the MS in detail</button>
              <button type="button" data-edu="uc">Read the BS in detail</button>
            </div>
          </section>
          <section class="edu-pane" data-edu-pane="usc" hidden>
            <div class="edu-head">
              <p class="edu-kicker">Master of Science · Computer Science</p>
              <span class="edu-status live">In progress · second year</span>
            </div>
            <h2>University of Southern California</h2>
            <p class="edu-meta">Viterbi School of Engineering · Los Angeles, CA · Aug 2025 — May 2027</p>
            <p class="edu-lead">A two-year MSCS focused on the theory and systems behind production software: how algorithms behave, how data is stored and queried, how the web is built, how cryptography is applied, and how digital evidence is recovered and searched. Expected graduation May 2027. Seeking internships and new-grad software engineering roles from Los Angeles.</p>
            <h3>Coursework in play</h3>
            <p class="edu-hint">These are the courses on the record — mapped to how they show up in shipped work, not a catalog dump.</p>
            <div class="edu-courses">
              <article class="now"><strong>Computer Forensics &amp; Information Retrieval <span class="edu-now">In session</span></strong><p>Digital evidence, acquisition, and retrieval systems. Extends the Cincinnati cyber-operations minor and the iQ4 incident-response work into how artifacts are found, ranked, and preserved.</p></article>
              <article><strong>Analysis of Algorithms</strong><p>Complexity and correctness. The same discipline used when refactoring a pipeline that had to hold 10,000+ records/day without becoming a black box.</p></article>
              <article><strong>Database Systems</strong><p>Relational modeling, queries, integrity. Directly relevant to Prisma, PostgreSQL, MySQL, and the QA work on scraped datasets at MediTechSafe.</p></article>
              <article><strong>Web Technologies</strong><p>Modern web architecture. The academic counterpart to Next.js/React products such as NexusIQ AI and MoodBoard AI.</p></article>
              <article><strong>Applied Cryptography</strong><p>Security primitives in practice. Complements the Cincinnati cyber-operations minor and the iQ4 apprenticeship (NIST / NICE / incident response).</p></article>
            </div>
            <div class="edu-callout">
              <p><strong>Campus leadership.</strong> President of GRIDS @ USC since May 2026 — strategy, programming, and member engagement for the data-science graduate student organisation. Previously Director of Marketing and Executive Board (Marketing &amp; Outreach).</p>
            </div>
            <div class="edu-actions">
              <button type="button" data-open="experience">Open Experience</button>
              <button type="button" data-open="projects">Open Projects</button>
            </div>
          </section>
          <section class="edu-pane" data-edu-pane="uc" hidden>
            <div class="edu-head">
              <p class="edu-kicker">Bachelor of Science · Computer Science</p>
              <span class="edu-status done">Completed May 2025</span>
            </div>
            <h2>University of Cincinnati</h2>
            <p class="edu-meta">College of Engineering &amp; Applied Science · Cincinnati, OH · Aug 2020 — May 2025</p>
            <p class="edu-lead">A five-year CS degree with a named minor in Cyber Operations &amp; Software Engineering. Internships at MediTechSafe and ITE, a senior-design product (FinTrackr), and a multi-year teaching appointment in Engineering Education ran in parallel with the degree — not after it.</p>
            <div class="edu-split">
              <div>
                <h3>Minor</h3>
                <p><strong>Cyber Operations &amp; Software Engineering</strong> is a security-and-systems minor, not a certificate add-on. It is the academic through-line to the iQ4 apprenticeship, applied cryptography at USC, and production data pipelines that had to be correct, not just fast.</p>
              </div>
              <div>
                <h3>Dean’s List</h3>
                <p>Four terms, including the first year and the final two: <strong>Fall 2020, Summer 2022, Fall 2024, Spring 2025</strong>. Consistent academic standing across co-ops, internships, and teaching.</p>
              </div>
            </div>
            <div class="edu-callout">
              <p><strong>Senior design.</strong> FinTrackr — personal finance app (expense tracking, debt payoff, tax estimation). UI/UX lead and full-stack contributor on a 3-person Agile team. Open it from Projects.</p>
            </div>
            <div class="edu-actions">
              <button type="button" data-edu="teach">See teaching record</button>
              <button type="button" data-open="projects">Open Projects</button>
            </div>
          </section>
          <section class="edu-pane" data-edu-pane="teach" hidden>
            <p class="edu-kicker">Instruction &amp; mentoring</p>
            <h2>Taught while earning the degree — not instead of shipping.</h2>
            <p class="edu-lead">Peer teaching assistant in UC’s Department of Engineering Education from January 2022 through May 2025. Recruiters asking “can this person explain a system?” can look here: large sections, design-thinking workshops, and logistics for thousands of students, kept in parallel with internships.</p>
            <div class="edu-stats">
              <div><b>72</b><span>students per section</span></div>
              <div><b>1:24</b><span>instruction ratio</span></div>
              <div><b>1,500+</b><span>orientation &amp; demos</span></div>
              <div><b>3.5 yr</b><span>teaching appointment</span></div>
            </div>
            <div class="edu-role">
              <div class="edu-role-h"><strong>Peer Teaching Assistant</strong><em>Jan 2022 — May 2025</em></div>
              <p class="edu-meta">Dept. of Engineering Education · University of Cincinnati</p>
              <ul>
                <li>Taught and graded <strong>ENED-1100</strong> and <strong>ENED-1120</strong> for classes of 72 (1:24), mentoring teamwork, conflict resolution, and leadership.</li>
                <li>Coordinated final project demonstrations and technical logistics for <strong>1,500+</strong> students across course milestones.</li>
                <li>Delivered Engineering Design Thinking orientation workshops to <strong>1,500 incoming freshmen</strong>.</li>
                <li>Led a summer workshop for <strong>150+ high school seniors</strong> on design thinking and hands-on problem-solving.</li>
              </ul>
            </div>
            <div class="edu-role">
              <div class="edu-role-h"><strong>Learning Assistant &amp; Peer Tutor</strong><em>Jan 2023 — Dec 2023</em></div>
              <p class="edu-meta">UC Learning Commons</p>
              <ul>
                <li>Promoted active learning in large-lecture classrooms; ran group discussions and weekly office hours.</li>
                <li>One-on-one support across CS and engineering courses, in person and online.</li>
              </ul>
            </div>
            <div class="edu-actions">
              <button type="button" data-open="experience">Open Experience</button>
            </div>
          </section>
          <section class="edu-pane" data-edu-pane="creds" hidden>
            <p class="edu-kicker">Credentials</p>
            <h2>Certificates that map to shipped work.</h2>
            <p class="edu-lead">Not a wall of logos. Each item below is listed with the issuer and what it actually covered — security practice, data science tooling, ML, quantum literacy, and applied AI fluency.</p>
            <div class="edu-creds">
              <article>
                <span>iQ4</span>
                <div>
                  <strong>The Threat Within — Cybersecurity Virtual Apprenticeship</strong>
                  <em>Feb 2022 — Apr 2022 · also on the Experience timeline</em>
                  <p>NIST and NICE frameworks, incident-response case studies, and written/spoken briefings for technical and non-technical audiences. Team of four apprentices.</p>
                </div>
              </article>
              <article>
                <span>IBM</span>
                <div>
                  <strong>Build Your Own Chatbot · UX Design Fundamentals</strong>
                  <em>IBM Skills Academy · Chatbot Level 1 issued May 2024</em>
                  <p>Conversational interfaces and UX fundamentals — the human side of the AI tools later used in NexusIQ and MoodBoard.</p>
                </div>
              </article>
              <article>
                <span>IBM</span>
                <div>
                  <strong>Enterprise Design Thinking Practitioner</strong>
                  <em>IBM · issued Feb 2022</em>
                  <p>IBM’s practitioner badge for the design-thinking loop (observe, reflect, make). Matches the multi-year Engineering Design Thinking teaching load at Cincinnati.</p>
                </div>
              </article>
              <article>
                <span>IBM</span>
                <div>
                  <strong>Data Science Tools, Methodologies &amp; Cloud Core</strong>
                  <em>IBM Skills Academy</em>
                  <p>Working vocabulary for notebooks, methodology, and cloud primitives used around Python pipelines and MySQL validation work.</p>
                </div>
              </article>
              <article>
                <span>IBM</span>
                <div>
                  <strong>Data Science Practitioner · Foundations L2</strong>
                  <em>IBM · issued Apr 2022</em>
                  <p>Practitioner-level data science foundations — cleaning, structuring, and reasoning about datasets before they hit production.</p>
                </div>
              </article>
              <article>
                <span>LI</span>
                <div>
                  <strong>Machine Learning with Python</strong>
                  <em>LinkedIn Learning · May 2024 · Foundations, Decision Trees, Logistic Regression, k-Means</em>
                  <p>Supervised and unsupervised models in Python — the same clustering/classification vocabulary used later around retrieval and LLM-agent work, not a substitute for it.</p>
                </div>
              </article>
              <article>
                <span>IBM</span>
                <div>
                  <strong>Machine Learning with Python</strong>
                  <em>Coursera · Association Rules &amp; k-Means clustering</em>
                  <p>Association rules and clustering in Python — complementary to the LinkedIn Learning series above.</p>
                </div>
              </article>
              <article>
                <span>TCS</span>
                <div>
                  <strong>Introduction to Quantum Computing</strong>
                  <em>The Coding School · issued Apr 2023</em>
                  <p>Literacy in qubits and quantum circuits — adjacent to the crypto/security thread, not claimed as a research specialty.</p>
                </div>
              </article>
              <article>
                <span>ATT</span>
                <div>
                  <strong>Summer Learning Academy Extern</strong>
                  <em>AT&amp;T · issued Jul 2021</em>
                  <p>Completed AT&amp;T’s 2021 Summer Learning Academy extern program — early exposure to enterprise technology practice alongside the CS degree.</p>
                </div>
              </article>
              <article>
                <span>ANT</span>
                <div>
                  <strong>AI Fluency &amp; Frameworks</strong>
                  <em>Anthropic</em>
                  <p>How to use foundation models responsibly and effectively — prompt discipline, evaluation, and limits. Matches production use of Gemini/Ollama in shipped apps.</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>`;
    },
    resume() {
      return `<div class="preview-app">
        <div class="pv-toolbar">
          <div class="pv-left">
            <button class="pv-btn" data-pv="sidebar" title="Sidebar" aria-label="Sidebar">
              <svg viewBox="0 0 16 16" width="14" height="14"><path fill="currentColor" d="M2 2h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 1v10h3V3H2zm4 0v10h8V3H6z"/></svg>
            </button>
            <span class="pv-file" title="${RESUME.file}">${RESUME.file}</span>
          </div>
          <div class="pv-center">
            <button class="pv-btn" data-pv="prev" title="Previous page" aria-label="Previous page">‹</button>
            <span class="pv-page" id="pvPage">1 / ${RESUME.pages}</span>
            <button class="pv-btn" data-pv="next" title="Next page" aria-label="Next page">›</button>
            <span class="pv-div"></span>
            <button class="pv-btn" data-pv="out" title="Zoom out" aria-label="Zoom out">−</button>
            <span class="pv-zoom" id="pvZoom">100%</span>
            <button class="pv-btn" data-pv="in" title="Zoom in" aria-label="Zoom in">+</button>
          </div>
          <div class="pv-right">
            <button class="pv-btn" data-pv="rotate" title="Rotate" aria-label="Rotate">
              <svg viewBox="0 0 16 16" width="14" height="14"><path fill="currentColor" d="M8 2a6 6 0 1 1-5.3 3.1l1.3.7A4.5 4.5 0 1 0 8 3.5V5l3-2.5L8 0v2z"/></svg>
            </button>
            <a class="pv-btn" href="${RESUME.href}" download="${RESUME.file}" title="Download" aria-label="Download">
              <svg viewBox="0 0 16 16" width="14" height="14"><path fill="currentColor" d="M8 1v8.2L5.4 6.6 4.3 7.7 8 11.4l3.7-3.7-1.1-1.1L8 9.2V1H7zM2 13h12v1.5H2z"/></svg>
            </a>
            <button class="pv-btn" data-pv="print" title="Print" aria-label="Print">
              <svg viewBox="0 0 16 16" width="14" height="14"><path fill="currentColor" d="M4 2h8v3H4V2zm-2 4h12a1 1 0 0 1 1 1v5h-3v3H4v-3H1V7a1 1 0 0 1 1-1zm3 7h6v-2H5v2z"/></svg>
            </button>
          </div>
        </div>
        <div class="pv-stage" id="pvStage">
          <div class="pv-zoombox" id="pvZoombox">
            <iframe class="pv-frame" id="pvFrame" title="Resume" src="${RESUME.href}#toolbar=0&navpanes=0&scrollbar=1"></iframe>
          </div>
        </div>
      </div>`;
    },
    contact() {
      return `<div class="mail-app">
        <div class="mail-toolbar">
          <button type="button" class="mail-tool" data-mail="compose" title="New Message">
            <svg viewBox="0 0 20 16" width="16" height="13"><path fill="currentColor" d="M1.5 1h17a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5v-13A.5.5 0 0 1 1.5 1zm.7 1.4v.4l7.3 5.1c.3.2.7.2 1 0l7.3-5.1v-.4H2.2zm0 1.6V13.6h15.6V4l-7.1 5a2 2 0 0 1-2.2 0L2.2 4z"/></svg>
          </button>
          <button type="button" class="mail-tool" data-mail="get" title="Get Mail">
            <svg viewBox="0 0 16 16" width="14" height="14"><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M8 2.5v8.2M4.8 7.6 8 10.8l3.2-3.2M3 13.2h10"/></svg>
          </button>
          <span class="mail-div"></span>
          <button type="button" class="mail-tool" data-mail="reply" title="Reply">
            <svg viewBox="0 0 16 16" width="14" height="14"><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M6.2 4.2 2.6 7.6l3.6 3.4M3 7.6h7.2c2.2 0 3.4 1.3 3.4 3.2"/></svg>
          </button>
        </div>
        <div class="mail-panes">
          <aside class="mail-side" id="mailSide"></aside>
          <div class="mail-list" id="mailList"></div>
          <div class="mail-read" id="mailRead"></div>
        </div>
      </div>`;
    },
    messages() {
      return `<div class="imsg-app">
        <aside class="imsg-side">
          <div class="imsg-side-bar">
            <input class="imsg-search" id="imsgSearch" type="search" placeholder="Search" autocomplete="off"/>
            <button type="button" class="imsg-new" data-imsg="new" title="New Message" aria-label="New Message">
              <svg viewBox="0 0 16 16" width="15" height="15"><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" d="M3.2 12.6 12.4 3.4M8.6 3.2h3.8v3.8M3.4 8.2v4.2h4.2"/></svg>
            </button>
          </div>
          <div class="imsg-list" id="imsgList" role="listbox" aria-label="Conversations"></div>
        </aside>
        <section class="imsg-chat">
          <header class="imsg-head" id="imsgHead"></header>
          <div class="imsg-stage">
            <div class="imsg-thread" id="imsgThread"></div>
            <aside class="imsg-info-pane" id="imsgInfo" hidden></aside>
          </div>
          <form class="imsg-compose" id="imsgCompose">
            <div class="imsg-attach" id="imsgAttach" hidden></div>
            <div class="imsg-bar">
              <button type="button" class="imsg-plus" data-imsg="attach" title="Add attachment" aria-label="Add attachment">+</button>
              <input type="file" id="imsgFile" hidden accept="image/*,video/*,.pdf,.doc,.docx,.txt,.zip,.png,.jpg,.jpeg,.gif,.webp,.mp4,.mov,.webm"/>
              <textarea name="message" class="imsg-input" rows="1" placeholder="iMessage"></textarea>
              <button type="button" class="imsg-send" data-imsg="send" aria-label="Send">
                <svg viewBox="0 0 16 16" width="14" height="14"><path fill="currentColor" d="M8 2.4 3.6 6.6h2.6V13h3.6V6.6h2.6z"/></svg>
              </button>
            </div>
          </form>
        </section>
      </div>`;
    },
    terminal() {
      return `<div class="term" id="termBody"><div class="term-line">Welcome to NehangOS. Type <span class="prompt">help</span> to get started.</div></div>`;
    },
    finder() {
      return finderMarkup();
    },
    notes() {
      return `<div class="notes-app">
        <aside class="notes-folders">
          <p class="nf-lab">iCloud</p>
          <button type="button" class="on">
            <img class="nf-ico" src="assets/icons/macos/notes.png" alt="" draggable="false"/>
            <span>Notes</span>
            <b>${NOTES.length}</b>
          </button>
        </aside>
        <div class="notes-list">
          <div class="nl-bar"><input type="search" placeholder="Search" spellcheck="false"/></div>
          <div class="notes-items"></div>
        </div>
        <div class="notes-body"></div>
      </div>`;
    },
    calendar() {
      return calendarMarkup(new Date().getFullYear(), new Date().getMonth());
    },
    music() {
      return `<div class="am-app">
        <div class="am-chrome">
          <div class="am-now">
            <span class="am-now-art" aria-hidden="true"></span>
            <span class="am-now-txt">
              <strong class="am-now-title">Eastern Thought</strong>
              <em class="am-now-artist">Kevin MacLeod</em>
            </span>
          </div>
          <div class="am-transport">
            <button type="button" class="am-ctrl" data-am="prev" aria-label="Previous">
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M6 5.5h1.8v13H6zm2 6.5 10.2 6.2V5.8z"/></svg>
            </button>
            <button type="button" class="am-ctrl am-play" data-am="play" aria-label="Play/Pause">
              <svg class="i-play" viewBox="0 0 24 24"><path fill="currentColor" d="M8 4.8v14.4L20.4 12z"/></svg>
              <svg class="i-pause" viewBox="0 0 24 24"><path fill="currentColor" d="M6.8 5h3.4v14H6.8zm6.8 0h3.4v14h-3.4z"/></svg>
            </button>
            <button type="button" class="am-ctrl" data-am="next" aria-label="Next">
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M16.2 5.5H18v13h-1.8zM5.8 5.8v12.4L16 12z"/></svg>
            </button>
            <div class="am-seekwrap">
              <span class="am-t0">0:00</span>
              <input class="am-seek" type="range" min="0" max="1000" value="0" aria-label="Playback position"/>
              <span class="am-t1">0:00</span>
            </div>
          </div>
          <label class="am-volwrap" title="Volume">
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M4.2 9.2h3.2L12 5.6v12.8L7.4 14.8H4.2zm11.2-.4a4.4 4.4 0 0 1 0 6.4l-1.1-1.1a2.8 2.8 0 0 0 0-4.2zm2.3-2.3a7.6 7.6 0 0 1 0 11l-1.1-1.1a6 6 0 0 0 0-8.8z"/></svg>
            <input class="am-vol" type="range" min="0" max="100" value="68" aria-label="Volume"/>
          </label>
        </div>
        <div class="am-split">
          <aside class="am-side">
            <p class="am-sec">Library</p>
            <button type="button" class="am-nav on" data-am-lib="all">Listen Now</button>
            <button type="button" class="am-nav" data-am-lib="bollywood">Bollywood</button>
            <button type="button" class="am-nav" data-am-lib="english">English</button>
            <p class="am-credit">Music by Kevin MacLeod<br/>incompetech.com · CC BY 3.0</p>
          </aside>
          <div class="am-main">
            <header class="am-head">
              <h2 class="am-heading">Listen Now</h2>
              <p class="am-sub">6 songs · Bollywood &amp; English</p>
            </header>
            <div class="am-hero">
              <div class="am-cover" aria-hidden="true"></div>
              <div class="am-hero-txt">
                <span class="am-badge">Bollywood</span>
                <h3 class="am-hero-title">Eastern Thought</h3>
                <p class="am-hero-meta">Kevin MacLeod · Bollywood Mix</p>
                <button type="button" class="am-hero-play am-play" data-am="play"><span class="am-play-lab">Play</span><span class="am-pause-lab">Pause</span></button>
              </div>
            </div>
            <div class="am-cols" aria-hidden="true"><span>#</span><span>Title</span><span>Album</span><span>Genre</span></div>
            <div class="am-songs"></div>
          </div>
        </div>
      </div>`;
    },
    safari() {
      return `<div class="safari-toolbar">
          <button type="button" class="safari-tool" data-saf="side" title="Show sidebar" aria-label="Sidebar">
            <svg viewBox="0 0 16 16" width="15" height="15"><rect x="1.5" y="2.5" width="13" height="11" rx="1.6" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M6 2.5v11" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>
          </button>
          <button type="button" class="safari-tool" data-saf="back" aria-label="Back" title="Back">
            <svg viewBox="0 0 16 16" width="12" height="12"><path d="M10.2 2.6 4.8 8l5.4 5.4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <button type="button" class="safari-tool" data-saf="fwd" aria-label="Forward" title="Forward">
            <svg viewBox="0 0 16 16" width="12" height="12"><path d="M5.8 2.6 11.2 8l-5.4 5.4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <label class="safari-url">
            <svg class="safari-lock" viewBox="0 0 16 16" width="11" height="11" aria-hidden="true"><rect x="3.5" y="7.2" width="9" height="6.3" rx="1.4" fill="currentColor"/><path d="M5.4 7.2V5.4a2.6 2.6 0 0 1 5.2 0v1.8" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>
            <input class="urlbar" placeholder="Search or enter website name" spellcheck="false" autocomplete="off"/>
            <button type="button" class="safari-tool safari-reload" data-saf="reload" aria-label="Reload" title="Reload">
              <svg viewBox="0 0 16 16" width="13" height="13"><path d="M13.2 8A5.2 5.2 0 1 1 11 3.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M11 1.6v3.2h-3.2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </label>
          <button type="button" class="safari-tool" data-saf="share" title="Copy link" aria-label="Share">
            <svg viewBox="0 0 16 16" width="14" height="14"><path d="M8 9.2V2.6M5.4 4.8 8 2.4l2.6 2.4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.2 8.2v4.2c0 .7.5 1.2 1.2 1.2h7.2c.7 0 1.2-.5 1.2-1.2V8.2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </button>
          <button type="button" class="safari-tool" data-saf="new" title="New tab" aria-label="New tab">
            <svg viewBox="0 0 16 16" width="13" height="13"><path d="M8 3.2v9.6M3.2 8h9.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          </button>
        </div>
        <div class="safari-favbar" aria-label="Favorites">
          <button type="button" class="safari-fav" data-safari="https://github.com/NehangPatel23">
            <img src="assets/icons/macos/github.png" alt="" draggable="false"/>GitHub
          </button>
          <button type="button" class="safari-fav" data-safari="https://www.linkedin.com/in/nehangpatel/">
            <img src="assets/icons/macos/linkedin.png" alt="" draggable="false"/>LinkedIn
          </button>
        </div>
        <div class="safari-main">
          <aside class="safari-side" hidden>
            <p class="safari-side-lab">Favorites</p>
            <button type="button" class="safari-side-item" data-safari="https://github.com/NehangPatel23">
              <img src="assets/icons/macos/github.png" alt="" draggable="false"/>GitHub
            </button>
            <button type="button" class="safari-side-item" data-safari="https://www.linkedin.com/in/nehangpatel/">
              <img src="assets/icons/macos/linkedin.png" alt="" draggable="false"/>LinkedIn
            </button>
          </aside>
          <div class="safari-view"></div>
        </div>`;
    },
    readme() {
      return `<div class="readme-doc">
        <p class="rd-kicker">README.md</p>
        <header class="rd-hero">
          <p class="rd-status"><span></span>Open to work</p>
          <h1>Nehang Patel</h1>
          <p class="rd-role">Software engineer</p>
          <p class="rd-meta">MS Computer Science · USC Viterbi<br>Los Angeles, CA</p>
        </header>
        <p class="rd-body">I build full-stack products, data pipelines, and AI-backed tools. The work that sticks is the kind that feels as considered as it functions — clean architecture, honest UX, and something you can actually ship.</p>
        <p class="rd-body">Previously BS-CS at the University of Cincinnati, with a minor in Cyber Operations &amp; Software Engineering. Looking for internships and new-grad software engineering roles.</p>
        <h2>On this desktop</h2>
        <div class="rd-files">
          <button type="button" class="rd-file" data-open="resume">
            <img src="assets/icons/macos/pdf.svg" alt="" draggable="false"/>
            <span><b>Resume.pdf</b><i>The current resume — two pages</i></span>
          </button>
          <button type="button" class="rd-file" data-open="projects">
            <img src="assets/icons/macos/folder.png" alt="" draggable="false"/>
            <span><b>Projects</b><i>NexusIQ, MoodBoard, FinTrackr, CourseArc</i></span>
          </button>
          <button type="button" class="rd-file" data-open="experience">
            <img src="assets/icons/macos/folder.png" alt="" draggable="false"/>
            <span><b>Experience</b><i>Internships, teaching, GRIDS</i></span>
          </button>
          <button type="button" class="rd-file" data-open="education">
            <img src="assets/icons/macos/folder.png" alt="" draggable="false"/>
            <span><b>Education</b><i>USC · Cincinnati</i></span>
          </button>
          <button type="button" class="rd-file" data-open="stack">
            <img src="assets/icons/macos/textedit.png" alt="" draggable="false"/>
            <span><b>Stack.md</b><i>Languages, tools, and how I work</i></span>
          </button>
          <button type="button" class="rd-file" data-open="secrets">
            <img src="assets/icons/macos/folder.png" alt="" draggable="false"/>
            <span><b>Secrets</b><i>passwords.txt and other theater</i></span>
          </button>
        </div>
        <h2>Right now</h2>
        <p class="rd-body">MS CS at USC Viterbi. President of GRIDS @ USC since May 2026. Looking for internships and new-grad software engineering roles.</p>
        <h2>Say hello</h2>
        <div class="rd-contact">
          <button type="button" data-open="contact">nehangal@usc.edu</button>
          <button type="button" data-safari="https://github.com/NehangPatel23">GitHub</button>
          <button type="button" data-safari="https://www.linkedin.com/in/nehangpatel/">LinkedIn</button>
        </div>
      </div>`;
    },
    stack() {
      const tags = list => `<div class="rd-tags">${list.map(s => `<span>${s}</span>`).join('')}</div>`;
      return `<div class="readme-doc">
        <p class="rd-kicker">Stack.md</p>
        <header class="rd-hero">
          <h1>Stack</h1>
          <p class="rd-role">Languages, tools, and how I work</p>
          <p class="rd-meta">Combined from both resume versions</p>
        </header>
        <p class="rd-body">What I reach for when shipping products, pipelines, and internal tools — languages and frameworks first, then the data layer, platforms, and the way I work with a team.</p>
        <div class="rd-groups">
          <section class="rd-group">
            <h2>Languages &amp; Frameworks</h2>
            ${tags(STACK.languages)}
          </section>
          <section class="rd-group">
            <h2>Databases &amp; Backend</h2>
            ${tags(STACK.backend)}
          </section>
          <section class="rd-group">
            <h2>Tools &amp; Platforms</h2>
            ${tags(STACK.tools)}
          </section>
          <section class="rd-group">
            <h2>Project &amp; TPM</h2>
            ${tags(STACK.practices)}
          </section>
          <section class="rd-group">
            <h2>Other</h2>
            ${tags(STACK.other)}
          </section>
          <section class="rd-group">
            <h2>Spoken</h2>
            ${tags(STACK.spoken)}
          </section>
        </div>
      </div>`;
    },
    secrets() {
      return `<div class="readme-doc fun-doc">
        <p class="rd-kicker">Secrets</p>
        <header class="rd-hero">
          <h1>Secrets</h1>
          <p class="rd-role">Not actually secret</p>
          <p class="rd-meta">A folder for things that feel too unserious for the top row.</p>
        </header>
        <p class="rd-body">Double-click anything. None of these are real credentials. One of them is a cry for help disguised as a password list.</p>
        <div class="rd-files">
          <button type="button" class="rd-file" data-open="passwords">
            <img src="assets/icons/macos/textedit.png" alt="" draggable="false"/>
            <span><b>passwords.txt</b><i>Theatrical · do not try these</i></span>
          </button>
          <button type="button" class="rd-file" data-open="names">
            <img src="assets/icons/macos/textedit.png" alt="" draggable="false"/>
            <span><b>bad-startup-names.txt</b><i>Also living in Trash, emotionally</i></span>
          </button>
          <button type="button" class="rd-file" data-open="cover">
            <img src="assets/icons/macos/document.png" alt="" draggable="false"/>
            <span><b>Cover Letter v7 FINAL.docx</b><i>Deprecated. Open Mail instead.</i></span>
          </button>
          <button type="button" class="rd-file" data-open="donotopen">
            <img src="assets/icons/macos/textedit.png" alt="" draggable="false"/>
            <span><b>do-not-open.txt</b><i>You already know how this ends</i></span>
          </button>
          <button type="button" class="rd-file" data-open="commits">
            <img src="assets/icons/macos/textedit.png" alt="" draggable="false"/>
            <span><b>commit-messages.txt</b><i>A hall of shame</i></span>
          </button>
          <button type="button" class="rd-file" data-open="meeting">
            <img src="assets/icons/macos/textedit.png" alt="" draggable="false"/>
            <span><b>meeting-notes.txt</b><i>This could have been a sticky</i></span>
          </button>
          <button type="button" class="rd-file" data-open="interview">
            <img src="assets/icons/macos/textedit.png" alt="" draggable="false"/>
            <span><b>interview-answers-DONT-SEND.txt</b><i>Draft energy only</i></span>
          </button>
          <button type="button" class="rd-file" data-open="socks">
            <img src="assets/icons/macos/textedit.png" alt="" draggable="false"/>
            <span><b>matching-socks.log</b><i>Boot WARN, still open</i></span>
          </button>
          <button type="button" class="rd-file" data-open="why">
            <img src="assets/icons/macos/textedit.png" alt="" draggable="false"/>
            <span><b>why-i-built-this.md</b><i>The origin story, unsorted</i></span>
          </button>
        </div>
      </div>`;
    },
    settings() {
      return `<div class="set-app">
        <aside class="set-side">
          <label class="set-search">
            <svg viewBox="0 0 24 24" width="13" height="13"><circle cx="11" cy="11" r="6.2" fill="none" stroke="currentColor" stroke-width="2"/><path stroke="currentColor" stroke-width="2" d="M20 20l-3.4-3.5"/></svg>
            <input type="search" placeholder="Search" autocomplete="off" spellcheck="false"/>
          </label>
          <div class="set-nav"></div>
        </aside>
        <div class="set-main"></div>
      </div>`;
    },
    'about-mac'() {
      return `<div class="atm">
        <div class="atm-device" aria-hidden="true">
          <div class="atm-lid">
            <div class="atm-screen">
              <span class="atm-notch"></span>
            </div>
          </div>
          <div class="atm-base">
            <span class="atm-gap"></span>
            <span class="atm-deck"></span>
          </div>
        </div>
        <h1>NehangOS</h1>
        <p class="atm-sub">Portfolio desktop, Aug 2026</p>
        <dl class="atm-specs">
          <div><dt>Chip</dt><dd>Caffeine M3 Pro</dd></div>
          <div><dt>Memory</dt><dd>16 GB of internships</dd></div>
          <div><dt>Startup disk</dt><dd>Projects HD</dd></div>
          <div><dt>Serial</dt><dd>N3H4NG-USC-2608</dd></div>
          <div><dt>macOS</dt><dd>NehangOS 26.8</dd></div>
        </dl>
        <button type="button" class="atm-more" data-open="about">More Info...</button>
        <button type="button" class="atm-reg" data-open="contact">Open to internships</button>
        <p class="atm-copy">Nehang Patel · Los Angeles, CA<br>All Rights Reserved.</p>
      </div>`;
    },
    trash() {
      return finderMarkup();
    },
    photos() {
      const albums = [
        { id:'library', label:'Library', sub:'All project shots' },
        { id:'recents', label:'Recents', sub:'Latest additions' },
        { id:'memories', label:'Memories', sub:'Desktop & demos' },
        { id:'projects', label:'Projects', sub:`${PROJECTS.length} albums` },
        ...PROJECTS.map(p => ({ id:p.id, label:p.title, sub:p.status }))
      ];
      return `<div class="ph-app">
        <aside class="ph-side">
          <p class="ph-side-lab">Photos</p>
          ${albums.slice(0,4).map(a => `<button type="button" class="ph-nav${a.id===photosAlbum?' on':''}" data-ph-album="${a.id}"><span>${esc(a.label)}</span><em>${esc(a.sub)}</em></button>`).join('')}
          <p class="ph-side-lab">Albums</p>
          ${albums.slice(4).map(a => `<button type="button" class="ph-nav${a.id===photosAlbum?' on':''}" data-ph-album="${a.id}"><span>${esc(a.label)}</span><em>${esc(a.sub)}</em></button>`).join('')}
        </aside>
        <div class="ph-main">
          <header class="ph-head">
            <div>
              <h2 class="ph-title">Library</h2>
              <p class="ph-sub">Project gallery — screenshots, covers, and case-study stills</p>
            </div>
          </header>
          <div class="ph-grid" id="phGrid"></div>
          <div class="ph-viewer" id="phViewer" hidden></div>
        </div>
      </div>`;
    },
    maps() {
      return `<div class="mp-app">
        <aside class="mp-side">
          <p class="mp-side-lab">Guides</p>
          <p class="mp-side-title">Where I've worked &amp; studied</p>
          <div class="mp-list" id="mpList"></div>
        </aside>
        <div class="mp-stage">
          <div class="mp-mapwrap">
            <iframe class="mp-frame" id="mpFrame" title="Map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="mp-card" id="mpCard"></div>
        </div>
      </div>`;
    },
    facetime() {
      return `<div class="ft-app">
        <aside class="ft-side">
          <p class="ft-side-lab">FaceTime</p>
          ${CONTACTS.map(c => `<button type="button" class="ft-nav${c.id===ftContact?' on':''}" data-ft="${c.id}">
            <span class="ft-ava" style="background:${c.color}">${esc(initials(c.name))}</span>
            <span><b>${esc(c.name)}</b><em>${esc(c.role)}</em></span>
          </button>`).join('')}
        </aside>
        <div class="ft-stage" id="ftStage"></div>
      </div>`;
    },
    appstore() {
      return `<div class="as-app">
        <nav class="as-tabs" role="tablist">
          <button type="button" role="tab" data-as-tab="today" class="${storeTab==='today'?'on':''}">Today</button>
          <button type="button" role="tab" data-as-tab="apps" class="${storeTab==='apps'?'on':''}">Apps</button>
          <button type="button" role="tab" data-as-tab="search" class="${storeTab==='search'?'on':''}">Search</button>
        </nav>
        <div class="as-main" id="asMain"></div>
      </div>`;
    },
    contacts() {
      return `<div class="ct-app">
        <aside class="ct-side">
          <div class="ct-search-wrap"><input class="ct-search" id="ctSearch" type="search" placeholder="Search" autocomplete="off"/></div>
          <div class="ct-list" id="ctList"></div>
        </aside>
        <div class="ct-detail" id="ctDetail"></div>
      </div>`;
    }
  };

  function studyOf(p) {
    return (typeof STUDIES !== 'undefined' && STUDIES[p.id]) || window.STUDIES?.[p.id] || null;
  }

  function studySections(s) {
    return (s.sections || []).filter(sec => {
      if (sec.id === 'visual-proof') return !!(s.images && s.images.length);
      return !!(sec.paras?.length || sec.quote || sec.glance?.length || sec.list?.length || sec.arch || sec.features?.length || sec.dives?.length || sec.timeline?.length || sec.problems?.length || sec.lessons?.length || sec.steps?.length || sec.stack?.length || sec.tags?.length);
    });
  }

  function studySectionHTML(sec, s, p) {
    const bits = [];
    (sec.paras || []).forEach(t => bits.push(`<p>${esc(t)}</p>`));
    if (sec.id === 'visual-proof' && s.imageNote) {
      bits.push(`<p class="csos-illus">${esc(s.imageNote)}</p>`);
    }
    if (sec.id === 'visual-proof' && s.images?.length) {
      const pid = p?.id || '';
      bits.push(`<div class="csos-gallery">${s.images.map((im, i) => `<figure class="csos-shot${galleryImgClass(im.src)}" tabindex="0" data-shot-project="${esc(pid)}" data-shot="${i}">
        <img src="${esc(im.src)}" alt="${esc(im.alt)}" loading="lazy" draggable="false"/>
        <figcaption>${esc(im.cap)}</figcaption>
      </figure>`).join('')}</div>`);
    }
    if (sec.quote) bits.push(`<blockquote class="csos-quote">${esc(sec.quote)}</blockquote>`);
    if (sec.glance?.length) {
      bits.push(`<div class="csos-glance">${sec.glance.map(g => `<div><em>${esc(g.label)}</em><span>${esc(g.val)}</span></div>`).join('')}</div>`);
    }
    if (sec.list?.length) bits.push(`<ul>${sec.list.map(t => `<li>${esc(t)}</li>`).join('')}</ul>`);
    if (sec.arch) {
      if (sec.arch.flow?.length) {
        bits.push(`<p class="csos-flow">${sec.arch.flow.map(esc).join(' <span>→</span> ')}</p>`);
      }
      if (sec.arch.items?.length) {
        bits.push(`<div class="csos-arch">${sec.arch.items.map(it => `<div><strong>${esc(it.title)}</strong><p>${esc(it.desc)}</p></div>`).join('')}</div>`);
      }
    }
    if (sec.features?.length) {
      bits.push(`<div class="csos-feats">${sec.features.map(f => `<article><strong>${esc(f.title)}</strong><p>${esc(f.desc)}</p></article>`).join('')}</div>`);
    }
    if (sec.dives?.length) {
      bits.push(sec.dives.map(d => `<article class="csos-dive"><h4>${esc(d.title)}</h4><p>${esc(d.body)}</p></article>`).join(''));
    }
    if (sec.timeline?.length) {
      bits.push(`<div class="csos-tl">${sec.timeline.map(t => `<div><em>${esc(t.phase)}</em><strong>${esc(t.title)}</strong><p>${esc(t.desc)}</p></div>`).join('')}</div>`);
    }
    if (sec.problems?.length) {
      bits.push(`<div class="csos-probs">${sec.problems.map(pr => `<article><h4>${esc(pr.title)}</h4><p>${esc(pr.problem)}</p>${pr.solution ? `<p class="csos-sol"><strong>Solution →</strong> ${esc(pr.solution)}</p>` : ''}</article>`).join('')}</div>`);
    }
    if (sec.lessons?.length) {
      bits.push(`<div class="csos-lessons">${sec.lessons.map(l => `<div><b>${esc(l.n)}</b><span>${esc(l.text)}</span></div>`).join('')}</div>`);
    }
    if (sec.steps?.length) {
      bits.push(`<ol class="csos-steps">${sec.steps.map(st => `<li><b>${esc(st.n)}</b><span>${esc(st.text)}</span></li>`).join('')}</ol>`);
    }
    if (sec.stack?.length) {
      bits.push(`<div class="csos-stack">${sec.stack.map(row => `<div><strong>${esc(row.tech)}</strong><span>${esc(row.why)}</span></div>`).join('')}</div>`);
    }
    if (sec.tags?.length) bits.push(`<div class="csos-tags">${sec.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div>`);
    return bits.join('');
  }

  function demoHost(url) {
    try { return new URL(url).host; } catch { return String(url || '').replace(/^https?:\/\//, ''); }
  }

  /** Auth cookies (Supabase / Auth.js) don't stick in third-party iframes — open top-level instead. */
  function needsTopLevelAuth(url) {
    if (!url) return false;
    const hit = PROJECTS.find(p => p.demoAuth === 'top-level' && p.demo && String(url).startsWith(p.demo.replace(/\/$/, '')));
    return !!hit;
  }

  function openTopLevel(url) {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
    toast('Opened in a browser tab — sign-in works there');
  }

  function demoEmbedHTML(p) {
    if (!p.demo) return '';
    const previewUrl = p.demoPreview || p.demo;
    const host = demoHost(previewUrl);
    const authTop = p.demoAuth === 'top-level';
    const blurb = authTop
      ? 'Browse the live deploy here. Sign-in opens in a browser tab — auth cookies can’t complete inside NehangOS iframes.'
      : 'Run the production build right here — same deploy reviewers open in Safari.';
    return `<section class="csos-sec csos-demo-sec" id="csos-live-demo" data-csos-sec="live-demo">
      <p class="csos-lab">Try it</p>
      <h3>Live demo</h3>
      <p>${blurb}</p>
      <div class="csos-demo" data-demo-url="${esc(previewUrl)}" data-demo-title="${esc(p.title)}"${authTop ? ` data-demo-auth="top-level" data-demo-workspace="${esc(p.demo)}"` : ''}>
        <div class="csos-demo-chrome">
          <span class="csos-demo-dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <div class="csos-demo-url" title="${esc(previewUrl)}">
            <svg viewBox="0 0 16 16" width="11" height="11" aria-hidden="true"><path fill="currentColor" d="M8 1.6a3.4 3.4 0 0 0-3.4 3.4v1.2H3.8A1.2 1.2 0 0 0 2.6 7.4v5.2c0 .66.54 1.2 1.2 1.2h8.4c.66 0 1.2-.54 1.2-1.2V7.4c0-.66-.54-1.2-1.2-1.2h-.8V5A3.4 3.4 0 0 0 8 1.6zm-1.8 3.4A1.8 1.8 0 1 1 9.8 5v1.2H6.2z"/></svg>
            <span>${esc(host)}</span>
          </div>
          <button type="button" class="csos-demo-tool" data-demo-reload title="Reload" aria-label="Reload preview">
            <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M13 8A5 5 0 1 1 11.2 4.2M13 2.6v3.2h-3.2"/></svg>
          </button>
          ${authTop
            ? `<button type="button" class="csos-demo-open" data-external="${esc(p.demo)}">Sign in in browser</button>`
            : `<button type="button" class="csos-demo-open" data-safari="${esc(p.demo)}">Open in Safari</button>`}
        </div>
        <div class="csos-demo-stage">
          <button type="button" class="csos-demo-start" data-demo-load>
            <span class="csos-demo-play" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M8.2 5.4v13.2L19.4 12z"/></svg>
            </span>
            <strong>Start interactive preview</strong>
            <em>${authTop ? `Browse ${esc(p.title)} here · sign in opens in a browser tab` : `Loads ${esc(p.title)} from ${esc(host)}`}</em>
          </button>
        </div>
      </div>
    </section>`;
  }

  function projectBody(p) {
    const s = studyOf(p);
    if (!s) {
      return `<p class="kicker">${esc(p.status)}</p>
        <h2 class="app-h">${esc(p.title)}</h2>
        <p class="lede">${esc(p.desc)}</p>
        ${p.note ? `<p class="lede">${esc(p.note)}</p>` : ''}
        ${pills(p.tags)}
        <div class="links">
          ${p.demo ? (p.demoAuth === 'top-level'
            ? `<button type="button" class="btn primary" data-external="${p.demo}">Open live app</button>`
            : `<button type="button" class="btn primary" data-safari="${p.demo}">Open in Safari</button>`) : ''}
          ${p.github ? `<button type="button" class="btn" data-safari="${p.github}">GitHub</button>` : ''}
        </div>
        ${p.demo ? demoEmbedHTML(p) : ''}`;
    }
    const sections = studySections(s);
    const nav = [
      ...(p.demo ? [{ id: 'live-demo', label: 'Live demo' }] : []),
      ...sections.map(sec => ({ id: sec.id, label: sec.label || sec.title }))
    ];
    const demoOpenAttr = p.demoAuth === 'top-level' ? `data-external="${p.demo}"` : `data-safari="${p.demo}"`;
    const demoOpenLabel = p.demoAuth === 'top-level' ? 'Open live app' : 'Open in Safari';
    return `<div class="csos">
      <aside class="csos-side">
        <p class="csos-side-label">On this page</p>
        ${nav.map((sec, i) => `<button type="button" class="csos-nav${i ? '' : ' on'}" data-csos="${sec.id}">${esc(sec.label)}</button>`).join('')}
        <div class="csos-side-foot">
          ${p.demo ? `<button type="button" class="csos-link" ${demoOpenAttr}>${demoOpenLabel}</button>` : ''}
          ${p.github ? `<button type="button" class="csos-link" data-safari="${p.github}">GitHub</button>` : ''}
          <button type="button" class="csos-link" data-open="projects">All projects</button>
        </div>
      </aside>
      <div class="csos-main">
        <p class="csos-kicker">${esc(s.eyebrow || p.status)}</p>
        <h2>${esc(p.title)}</h2>
        <p class="csos-lead">${esc(s.lead || p.desc)}</p>
        ${s.leadSub ? `<p class="csos-sub">${esc(s.leadSub)}</p>` : ''}
        ${p.note ? `<p class="csos-note">${esc(p.note)}</p>` : ''}
        ${s.meta?.length ? `<div class="csos-meta">${s.meta.map(m => `<div><em>${esc(m.label)}</em><span>${esc(m.val)}</span></div>`).join('')}</div>` : ''}
        <div class="csos-actions">
          ${p.demo ? `<button type="button" class="btn primary" data-csos="live-demo">Try live demo</button>` : ''}
          ${p.demo ? `<button type="button" class="btn" ${demoOpenAttr}>${demoOpenLabel}</button>` : ''}
          ${p.github ? `<button type="button" class="btn" data-safari="${p.github}">GitHub</button>` : ''}
          <button type="button" class="btn" data-open="contact">Contact</button>
        </div>
        ${s.metrics?.length ? `<div class="csos-metrics">${s.metrics.map(m => `<div><b>${esc(m.n)}</b><span>${esc(m.l)}</span></div>`).join('')}</div>` : ''}
        ${demoEmbedHTML(p)}
        ${sections.map(sec => `<section class="csos-sec" id="csos-${sec.id}" data-csos-sec="${sec.id}">
          <p class="csos-lab">${esc(sec.label || '')}</p>
          <h3>${esc(sec.title || '')}</h3>
          ${studySectionHTML(sec, s, p)}
        </section>`).join('')}
      </div>
    </div>`;
  }

  function loadDemoFrame(box, { force } = {}) {
    const url = box?.dataset.demoUrl;
    const stage = box?.querySelector('.csos-demo-stage');
    if (!url || !stage) return;
    const existing = stage.querySelector('iframe');
    if (existing && !force) return;
    const title = box.dataset.demoTitle || 'Live demo';
    box.classList.remove('is-ready');
    stage.innerHTML = `<iframe class="csos-demo-frame" src="${esc(url)}" title="${esc(title)} live preview" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allow="fullscreen"></iframe>
      <button type="button" class="csos-demo-veil" data-demo-veil hidden aria-label="Click to interact with demo">
        <span>Click to interact</span>
      </button>`;
    box.classList.add('is-live');
    const frame = stage.querySelector('iframe');
    const veil = stage.querySelector('[data-demo-veil]');
    const setInteractive = on => {
      const v = stage.querySelector('[data-demo-veil]');
      const f = stage.querySelector('iframe');
      if (!v || !f) return;
      v.hidden = on;
      f.style.pointerEvents = on ? 'auto' : 'none';
    };
    veil?.addEventListener('click', () => setInteractive(true));
    if (!box._demoVeilBound) {
      box._demoVeilBound = true;
      box.addEventListener('mouseleave', () => {
        if (box.classList.contains('is-ready')) setInteractive(false);
      });
    }
    frame?.addEventListener('load', () => {
      box.classList.add('is-ready');
      setInteractive(false);
    });
  }

  function bindDemoEmbed(win) {
    const boxes = [...win.querySelectorAll('.csos-demo[data-demo-url]')];
    if (!boxes.length) return;
    win.addEventListener('click', e => {
      const loadBtn = e.target.closest('[data-demo-load]');
      if (loadBtn && win.contains(loadBtn)) {
        e.preventDefault();
        loadDemoFrame(loadBtn.closest('.csos-demo'));
        return;
      }
      const reload = e.target.closest('[data-demo-reload]');
      if (reload && win.contains(reload)) {
        e.preventDefault();
        const box = reload.closest('.csos-demo');
        if (box?.classList.contains('is-live')) loadDemoFrame(box, { force: true });
        else loadDemoFrame(box);
      }
    });
  }

  function bindProject(win) {
    const main = win.querySelector('.csos-main');
    const navs = [...win.querySelectorAll('.csos-nav')];
    const show = id => {
      navs.forEach(b => b.classList.toggle('on', b.dataset.csos === id));
      const sec = win.querySelector('#csos-' + id);
      if (sec && main) {
        const top = sec.getBoundingClientRect().top - main.getBoundingClientRect().top + main.scrollTop - 8;
        main.scrollTop = Math.max(0, top);
      }
    };
    win.addEventListener('click', e => {
      const btn = e.target.closest('[data-csos]');
      if (!btn || !win.contains(btn)) return;
      if (btn.closest('.csos-demo')) return;
      e.preventDefault();
      show(btn.dataset.csos);
    });
    bindDemoEmbed(win);
    function shotFromFigure(fig) {
      const p = PROJECTS.find(x => x.id === fig.dataset.shotProject);
      const shots = shotsForProject(p);
      return shots[+fig.dataset.shot] || null;
    }
    function selectFigure(fig) {
      win.querySelectorAll('.csos-shot').forEach(f => f.classList.toggle('sel', f === fig));
      fig?.focus({ preventScroll: true });
    }
    win.addEventListener('click', e => {
      const fig = e.target.closest('.csos-shot');
      if (!fig || !win.contains(fig) || fig._dragged) return;
      const shot = shotFromFigure(fig);
      if (!shot) return;
      selectFigure(fig);
      openQuickLookFromShot(shot);
    });
    win.addEventListener('keydown', e => {
      const fig = e.target.closest('.csos-shot');
      if (!fig || !win.contains(fig)) return;
      if (e.key === ' ' || e.code === 'Space' || e.key === 'Enter') {
        e.preventDefault();
        const shot = shotFromFigure(fig);
        if (shot) {
          selectFigure(fig);
          openQuickLookFromShot(shot);
        }
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const figs = [...win.querySelectorAll('.csos-shot')];
        const i = figs.indexOf(fig);
        const next = figs[i + (e.key === 'ArrowRight' ? 1 : -1)];
        if (next) { e.preventDefault(); selectFigure(next); }
      }
    });
    win.addEventListener('contextmenu', e => {
      const fig = e.target.closest('.csos-shot');
      if (!fig || !win.contains(fig)) return;
      e.preventDefault();
      e.stopPropagation();
      const shot = shotFromFigure(fig);
      if (!shot) return;
      selectFigure(fig);
      showShotCtx(e.clientX, e.clientY, shot);
    });
    win.addEventListener('mousedown', e => {
      const fig = e.target.closest('.csos-shot');
      if (!fig || !win.contains(fig) || e.button !== 0) return;
      const shot = shotFromFigure(fig);
      if (!shot) return;
      trackFileDrag(e, { ...shot, from: 'Gallery' }, fig);
    });
    if (!main || !navs.length) return;
    const secs = [...win.querySelectorAll('[data-csos-sec]')];
    const sync = () => {
      const top = main.scrollTop + 48;
      let on = navs[0]?.dataset.csos;
      secs.forEach(sec => {
        if (sec.offsetTop <= top) on = sec.dataset.csosSec;
      });
      navs.forEach(b => b.classList.toggle('on', b.dataset.csos === on));
    };
    main.addEventListener('scroll', sync, { passive: true });
  }

  function openFunDoc(docId) {
    if (!FUN_DOCS[docId]) return false;
    const winId = 'fun-' + docId;
    if (state.windows.has(winId)) {
      focusWin(winId);
      return true;
    }
    const doc = FUN_DOCS[docId];
    makeWindow(winId, doc.title, funDocHTML(docId), { w: 560, h: 520, kind: 'textedit', dock: 'notes' });
    return true;
  }
  function openTrashGag(rid) {
    const target = TRASH_OPEN[rid];
    if (!target) return false;
    if (FUN_DOCS[target]) return openFunDoc(target);
    openApp(target);
    return true;
  }
  function openApp(id) {
    closeMenus();
    closeLaunchpad();
    if (id === 'spotlight') return openSpotlight();
    if (id === 'launchpad') return toggleLaunchpad();
    if (id === 'safari') return openSafari();
    if (id === 'mail-alias') return openApp('contact');
    if (isShotFile(id)) {
      const shot = shotByFile(id);
      if (shot) openImagePreviewFromShot(shot);
      return;
    }
    if (String(id).startsWith('pfolder:')) {
      openApp('finder');
      document.querySelector('.window.finder')?.dispatchEvent(new CustomEvent('finder-go', { detail: { loc: 'Projects', project: String(id).slice(8) } }));
      return;
    }
    if (String(id).startsWith('restored-')) {
      const rid = String(id).slice(9);
      if (openTrashGag(rid)) return;
      const it = restoredItems.find(x => x.id === rid) || TRASH_SEED.find(x => x.id === rid);
      toast(it ? it.name : 'Restored from Trash');
      return;
    }
    if (String(id).startsWith('fun-')) {
      if (openFunDoc(String(id).slice(4))) return;
    }
    if (FUN_DOCS[id]) {
      openFunDoc(id);
      return;
    }
    if (id === 'about') id = 'notes';
    if (id === 'settings' && state.windows.has('settings')) {
      focusWin('settings');
      bounceDock('settings');
      settingsCtl?.select(settingsPane);
      return;
    }
    if (id === 'education' && state.windows.has('education') && eduLaunchPane) {
      focusWin('education');
      bounceDock('education');
      const win = state.windows.get('education').el;
      const pane = eduLaunchPane;
      eduLaunchPane = null;
      win.querySelectorAll('.edu-nav').forEach(b => b.classList.toggle('on', b.dataset.edu === pane));
      win.querySelectorAll('[data-edu-pane]').forEach(p => {
        const on = p.dataset.eduPane === pane;
        p.classList.toggle('on', on);
        p.hidden = !on;
      });
      win.querySelector('.edu-main')?.scrollTo(0, 0);
      return;
    }
    if (bodies[id]) {
      const sizes = { notes:[780,520], projects:[760,560], experience:[940,680], education:[900,640], resume:[840,720], contact:[980,600], messages:[920,580], terminal:[640,380], finder:[780,500], settings:[780,680], 'about-mac':[286,558], trash:[800,520], readme:[800,780], stack:[800,880], secrets:[1100,820], calendar:[640,440], music:[840,660], safari:[960,640], photos:[920,640], maps:[960,640], facetime:[860,560], appstore:[880,640], contacts:[780,520] };
      const kinds = { finder:'finder', trash:'finder', safari:'safari', resume:'preview', stack:'textedit', readme:'textedit', secrets:'textedit', 'about-mac':'aboutmac', contact:'mail', messages:'messages', calendar:'calendar', notes:'notes', settings:'settings', music:'music', education:'education', experience:'experience', photos:'photos', maps:'maps', facetime:'facetime', appstore:'appstore', contacts:'contacts' };
      const [w,h] = sizes[id] || [640,480];
      makeWindow(id, titleFor(id), bodies[id](), { w, h, kind: kinds[id], dock: id === 'notes' ? 'notes' : id });
      return;
    }
    const proj = PROJECTS.find(p => p.id === id || ('proj-'+p.id) === id);
    if (proj) makeWindow('proj-'+proj.id, proj.title, projectBody(proj), {
      w: proj.demo ? 980 : 920,
      h: proj.demo ? 720 : 680,
      kind: 'casestudy'
    });
  }

  function pWrap(p){ return p; }
  function titleFor(id) {
    const map = { about:'Notes', notes:'Notes', projects:'Projects', experience:'Experience', education:'Education', resume:'Preview', contact:'Mail', messages:'Messages', terminal:'Terminal — zsh', finder:'Finder', readme:'README.md', stack:'Stack.md', secrets:'Secrets', settings:'System Settings', 'about-mac':'About This Mac', trash:'Trash', calendar:'Calendar', music:'Music', safari:'Safari', photos:'Photos', maps:'Maps', facetime:'FaceTime', appstore:'App Store', contacts:'Contacts' };
    return map[id] || FUN_DOCS[id]?.title || id;
  }

  /* Safari */
  const SAFARI_START = 'safari://start';
  function safariStartPage() {
    return `<div class="safari-start">
      <div class="safari-start-inner">
        <p class="sf-fav-label">Favorites</p>
        <div class="sf-fav-grid">
          <button type="button" class="sf-tile" data-safari="https://github.com/NehangPatel23">
            <span class="sf-tile-ico"><img src="assets/icons/macos/github.png" alt="" draggable="false"/></span>
            GitHub
          </button>
          <button type="button" class="sf-tile" data-safari="https://www.linkedin.com/in/nehangpatel/">
            <span class="sf-tile-ico"><img src="assets/icons/macos/linkedin.png" alt="" draggable="false"/></span>
            LinkedIn
          </button>
        </div>
      </div>
    </div>`;
  }

  function openSafari(url) {
    if (url && needsTopLevelAuth(url)) {
      openTopLevel(url);
      return;
    }
    closeMenus();
    closeLaunchpad();
    bounceDock('safari');
    if (!state.windows.has('safari')) {
      makeWindow('safari', 'Safari', bodies.safari(), { w: 960, h: 640, kind: 'safari', dock: 'safari' });
    } else {
      focusWin('safari');
    }
    navigateSafari(url || SAFARI_START, true);
  }

  function bindSafari(win) {
    const bar = win.querySelector('.urlbar');
    win.querySelector('[data-saf="back"]').addEventListener('click', () => {
      if (safariState.i > 0) { safariState.i--; loadSafari(safariState.history[safariState.i]); }
    });
    win.querySelector('[data-saf="fwd"]').addEventListener('click', () => {
      if (safariState.i < safariState.history.length - 1) { safariState.i++; loadSafari(safariState.history[safariState.i]); }
    });
    win.querySelector('[data-saf="reload"]').addEventListener('click', () => {
      const u = safariState.history[safariState.i];
      if (u) loadSafari(u);
    });
    win.querySelector('[data-saf="side"]').addEventListener('click', () => {
      const side = win.querySelector('.safari-side');
      if (side) side.hidden = !side.hidden;
      win.classList.toggle('safari-side-on', side && !side.hidden);
    });
    win.querySelector('[data-saf="new"]').addEventListener('click', () => navigateSafari(SAFARI_START, true));
    win.querySelector('[data-saf="share"]').addEventListener('click', () => {
      const u = safariState.history[safariState.i];
      if (!u || u === SAFARI_START) return;
      navigator.clipboard?.writeText(u);
    });
    bar.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        let v = bar.value.trim();
        if (!v) { navigateSafari(SAFARI_START, true); return; }
        if (!/^https?:\/\//i.test(v) && !v.startsWith('safari://')) v = 'https://' + v;
        navigateSafari(v, true);
      }
    });
  }

  function navigateSafari(url, push) {
    if (push) {
      safariState.history = safariState.history.slice(0, safariState.i + 1);
      safariState.history.push(url);
      safariState.i = safariState.history.length - 1;
    }
    loadSafari(url);
  }

  function safariTitle(url) {
    if (!url || url === SAFARI_START) return 'Start Page';
    if (/linkedin\.com/i.test(url)) return 'LinkedIn';
    const repo = url.match(/github\.com\/[^/]+\/([^/?#]+)/i);
    if (repo) return repo[1];
    if (/github\.com/i.test(url)) return 'GitHub';
    try { return new URL(url).hostname.replace(/^www\./, ''); }
    catch { return url.replace(/^https?:\/\//, '').split('/')[0]; }
  }

  function syncSafariChrome(url) {
    const win = state.windows.get('safari');
    if (!win) return;
    const el = win.el;
    const back = el.querySelector('[data-saf="back"]');
    const fwd = el.querySelector('[data-saf="fwd"]');
    if (back) back.disabled = safariState.i <= 0;
    if (fwd) fwd.disabled = safariState.i >= safariState.history.length - 1;
    const title = safariTitle(url);
    const wt = el.querySelector('.wtitle');
    if (wt) wt.textContent = title;
    el.querySelectorAll('[data-safari]').forEach(b => {
      const u = b.getAttribute('data-safari');
      b.classList.toggle('on', !!(u && url && url.replace(/\/$/, '') === u.replace(/\/$/, '')));
    });
    const lock = el.querySelector('.safari-lock');
    if (lock) lock.style.opacity = (!url || url === SAFARI_START) ? '0' : '1';
  }

  function loadSafari(url) {
    const win = state.windows.get('safari');
    if (!win) return;
    const bar = win.el.querySelector('.urlbar');
    const view = win.el.querySelector('.safari-view');
    const start = !url || url === SAFARI_START;
    if (bar) bar.value = start ? '' : url.replace(/^https?:\/\//, '');
    setMenuApp('Safari');
    syncSafariChrome(url);
    view.dataset.page = url || '';

    if (start) {
      view.innerHTML = safariStartPage();
      return;
    }

    const ghRepo = url.match(/github\.com\/([^/]+)\/([^/?#]+)/i);
    const ghUser = url.match(/github\.com\/([^/?#]+)\/?$/i);
    const li = /linkedin\.com/i.test(url);

    if (ghRepo && !/github\.com\/orgs/i.test(url)) {
      loadGitHubRepo(view, url, ghRepo[1], ghRepo[2].replace(/\.git$/, ''));
      return;
    }
    if (ghUser) {
      loadGitHubUser(view, url, ghUser[1]);
      return;
    }
    if (li) {
      loadLinkedIn(view, url);
      return;
    }
    if (needsTopLevelAuth(url)) {
      const host = demoHost(url);
      const preview = PROJECTS.find(p => p.demoAuth === 'top-level' && p.demo && url.startsWith(p.demo.replace(/\/$/, '')))?.demoPreview;
      view.innerHTML = `<div class="safari-auth-gate">
        <p class="safari-auth-kicker">Secure sign-in</p>
        <h1>Open ${esc(host)} in a browser tab</h1>
        <p>NehangOS Safari runs sites in an embed. Auth cookies for this app only stick in a top-level window — that’s why login works when you run the app on its own.</p>
        <div class="safari-auth-actions">
          <button type="button" class="btn primary" data-external="${esc(url)}">Open live app</button>
          ${preview ? `<button type="button" class="btn" data-safari-preview="${esc(preview)}">Browse without signing in</button>` : ''}
        </div>
      </div>`;
      view.querySelector('[data-safari-preview]')?.addEventListener('click', ev => {
        ev.preventDefault();
        iframeSafari(view, preview);
      });
      return;
    }
    iframeSafari(view, url);
  }

  function esc(s) {
    return String(s ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
  }
  function initials(name) {
    const parts = String(name || '').split(/\s+/).filter(Boolean);
    return ((parts[0]?.[0] || '') + (parts[1]?.[0] || '')).toUpperCase() || '?';
  }

  const MAIL_ADDR = 'nehangal@usc.edu';
  const WEB3FORMS_KEY = '37c3a97d-369d-4c4c-80c9-2cd2f35bef8b';
  const MAIL_KEY_STORE = 'nehang-w3-key';
  const FIREBASE = {
    apiKey: 'AIzaSyAWWQGHWjreZTX2KM7NpZdXKUomxFSDwA4',
    authDomain: 'nehangos.firebaseapp.com',
    projectId: 'nehangos',
    storageBucket: 'nehangos.firebasestorage.app',
    appId: '1:461445655939:web:e3822abb2f9bec02dfdab6'
  };
  const FIREBASE_SDK = 'https://www.gstatic.com/firebasejs/11.6.0';
  function mailKey() {
    return (WEB3FORMS_KEY || localStorage.getItem(MAIL_KEY_STORE) || '').trim();
  }
  function saveMailKey(k) {
    let v = String(k || '').trim().replace(/^["']|["']$/g, '');
    const uuid = v.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i);
    if (uuid) v = uuid[0];
    if (v) localStorage.setItem(MAIL_KEY_STORE, v);
    return v;
  }
  function firebaseReady() {
    return !!(FIREBASE.apiKey && FIREBASE.projectId && FIREBASE.storageBucket);
  }
  let firebaseStorage = null;
  async function getFirebaseStorage() {
    if (firebaseStorage) return firebaseStorage;
    const [{ initializeApp, getApps, getApp }, { getStorage }] = await Promise.all([
      import(`${FIREBASE_SDK}/firebase-app.js`),
      import(`${FIREBASE_SDK}/firebase-storage.js`)
    ]);
    const app = getApps().length ? getApp() : initializeApp(FIREBASE);
    firebaseStorage = getStorage(app);
    return firebaseStorage;
  }
  async function uploadPublicFile(file) {
    if (!firebaseReady()) {
      throw new Error('Attachments are not set up yet. Remove the file to send text.');
    }
    const { ref, uploadBytes, getDownloadURL } = await import(`${FIREBASE_SDK}/firebase-storage.js`);
    const storage = await getFirebaseStorage();
    const ext = (file.name.split('.').pop() || 'bin').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 8) || 'bin';
    const path = `nehangos/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const fileRef = ref(storage, path);
    await uploadBytes(fileRef, file, { contentType: file.type || 'application/octet-stream' });
    return getDownloadURL(fileRef);
  }
  async function deliverPortfolioMail({ name, email, subject, message, fromName, key }) {
    const access = key || WEB3FORMS_KEY || mailKey();
    if (!access) throw new Error('Mail is not configured.');
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: access,
        name,
        email,
        subject,
        message,
        from_name: fromName || 'NehangOS',
        replyto: email,
        botcheck: false
      })
    });
    let result = null;
    try { result = await res.json(); } catch { /* non-JSON */ }
    if (!res.ok || !result?.success) {
      throw new Error(result?.message || 'Could not deliver. Try again in a moment.');
    }
    return result;
  }

  function stillOn(view, url) {
    return view.isConnected && view.dataset.page === url;
  }

  function ghHeaders(extra) {
    return { 'Accept': extra || 'application/vnd.github+json', 'User-Agent': 'NehangOS-portfolio' };
  }

  function loadGitHubUser(view, url, user) {
    view.innerHTML = `<div class="gh-site"><p class="gh-loading">Loading GitHub…</p></div>`;
    Promise.all([
      fetch(`https://api.github.com/users/${user}`, { headers: ghHeaders() }).then(r => r.ok ? r.json() : Promise.reject()),
      fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=12`, { headers: ghHeaders() }).then(r => r.ok ? r.json() : [])
    ]).then(([j, repos]) => {
      if (!stillOn(view, url)) return;
      const popular = (repos || []).filter(r => !r.fork).slice(0, 6);
      view.innerHTML = `<div class="gh-site">
        <div class="gh-nav">
          <span class="gh-mark">●</span><span>GitHub</span>
          <a class="gh-nav-link" href="${esc(j.html_url)}" target="_blank" rel="noopener noreferrer">github.com/${esc(user)} ↗</a>
        </div>
        <div class="gh-wrap">
          <aside class="gh-aside">
            <img class="gh-ava" src="${esc(j.avatar_url)}" alt=""/>
            <h1>${esc(j.name || j.login)}</h1>
            <p class="gh-login">${esc(j.login)}</p>
            ${j.hireable ? '<p class="gh-hire">Available for hire</p>' : ''}
            ${j.bio ? `<p class="gh-bio">${esc(j.bio)}</p>` : '<p class="gh-bio">Software engineer · MS CS @ USC Viterbi. Open to New Grad roles.</p>'}
            <p class="gh-counts"><b>${j.followers}</b> followers · <b>${j.following}</b> following</p>
            <ul class="gh-facts">
              ${j.company ? `<li>${esc(j.company)}</li>` : ''}
              ${j.location ? `<li>${esc(j.location)}</li>` : ''}
              ${j.blog ? `<li>${esc(j.blog.replace(/^https?:\/\//, ''))}</li>` : ''}
              <li>${j.public_repos} repositories</li>
            </ul>
            <a class="gh-out" href="${esc(j.html_url)}" target="_blank" rel="noopener noreferrer">
              View on GitHub
              <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path fill="currentColor" d="M6.2 3.2h-3a1 1 0 0 0-1 1v7.6a1 1 0 0 0 1 1h7.6a1 1 0 0 0 1-1v-3h-1.4v2.6H3.6V4.6h2.6zm2.6 0V4.6h2.3L6.4 9.3l1 1 4.7-4.7v2.3h1.4V3.2z"/></svg>
            </a>
          </aside>
          <section class="gh-main">
            <p class="gh-sec">Popular repositories</p>
            <div class="gh-repos">${popular.map(r => `
              <button type="button" class="gh-repo" data-safari="${esc(r.html_url)}">
                <b>${esc(r.name)}</b>
                <p>${esc(r.description || 'No description')}</p>
                <span>${r.language ? `<i class="gh-dot"></i>${esc(r.language)}` : ''} ★ ${r.stargazers_count}</span>
              </button>`).join('')}</div>
          </section>
        </div>
      </div>`;
    }).catch(() => {
      if (stillOn(view, url)) iframeSafari(view, url);
    });
  }

  function loadGitHubRepo(view, url, user, repo) {
    view.innerHTML = `<div class="gh-site"><p class="gh-loading">Loading ${esc(user)}/${esc(repo)}…</p></div>`;
    Promise.all([
      fetch(`https://api.github.com/repos/${user}/${repo}`, { headers: ghHeaders() }).then(r => r.ok ? r.json() : Promise.reject()),
      fetch(`https://api.github.com/repos/${user}/${repo}/readme`, { headers: ghHeaders('application/vnd.github.html') }).then(r => r.ok ? r.text() : '')
    ]).then(([j, readme]) => {
      if (!stillOn(view, url)) return;
      view.innerHTML = `<div class="gh-site">
        <div class="gh-nav"><span class="gh-mark">●</span><span>GitHub</span></div>
        <div class="gh-repohead">
          <p class="gh-name"><button type="button" data-safari="https://github.com/${esc(user)}">${esc(j.owner.login)}</button> / <b>${esc(j.name)}</b></p>
          <p class="gh-desc">${esc(j.description || '')}</p>
          <p class="gh-meta">★ ${j.stargazers_count} · Forks ${j.forks_count} · ${esc(j.language || 'Code')}</p>
          <a class="gh-out gh-out-inline" href="${esc(j.html_url)}" target="_blank" rel="noopener noreferrer">
            View on GitHub
            <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path fill="currentColor" d="M6.2 3.2h-3a1 1 0 0 0-1 1v7.6a1 1 0 0 0 1 1h7.6a1 1 0 0 0 1-1v-3h-1.4v2.6H3.6V4.6h2.6zm2.6 0V4.6h2.3L6.4 9.3l1 1 4.7-4.7v2.3h1.4V3.2z"/></svg>
          </a>
        </div>
        <div class="gh-readme">${readme || '<p>No README found.</p>'}</div>
      </div>`;
    }).catch(() => {
      if (stillOn(view, url)) iframeSafari(view, url);
    });
  }

  function loadLinkedIn(view, url) {
    const avatar = 'https://avatars.githubusercontent.com/u/90214774?v=4';
    const jobs = EXPERIENCE.slice(0, 6).map(e => `
      <article class="li-job">
        <h3>${esc(e.role)}</h3>
        <p class="li-co">${esc(e.co)}</p>
        <p class="li-when">${esc(e.when)}</p>
        <ul>${e.items.slice(0, 2).map(i => `<li>${esc(i)}</li>`).join('')}</ul>
      </article>`).join('');
    view.innerHTML = `<div class="li-site">
      <div class="li-banner"></div>
      <div class="li-cardx">
        <img class="li-ava" src="${avatar}" alt=""/>
        <h1>Nehang Patel</h1>
        <p class="li-headline">Software Engineer · MS CS @ USC Viterbi</p>
        <p class="li-sub">University of Southern California · Los Angeles, CA</p>
        <p class="li-open">Open to New Grad roles</p>
        <a class="li-out" href="https://www.linkedin.com/in/nehangpatel/" target="_blank" rel="noopener noreferrer">
          View profile on LinkedIn
          <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path fill="currentColor" d="M6.2 3.2h-3a1 1 0 0 0-1 1v7.6a1 1 0 0 0 1 1h7.6a1 1 0 0 0 1-1v-3h-1.4v2.6H3.6V4.6h2.6zm2.6 0V4.6h2.3L6.4 9.3l1 1 4.7-4.7v2.3h1.4V3.2z"/></svg>
        </a>
      </div>
      <section class="li-sec">
        <h2>About</h2>
        <p>I build full-stack products, data pipelines, and AI-backed tools — work that feels as considered as it functions.</p>
      </section>
      <section class="li-sec">
        <h2>Experience</h2>
        ${jobs}
      </section>
      <section class="li-sec">
        <h2>Education</h2>
        <article class="li-job">
          <h3>University of Southern California</h3>
          <p class="li-co">MS Computer Science · Viterbi School of Engineering</p>
          <p class="li-when">Aug 2025 — May 2027</p>
        </article>
        <article class="li-job">
          <h3>University of Cincinnati</h3>
          <p class="li-co">BS Computer Science · Minor in Cyber Operations &amp; Software Engineering</p>
          <p class="li-when">Aug 2020 — May 2025</p>
        </article>
      </section>
    </div>`;
  }

  function iframeSafari(view, url, onBlocked) {
    view.innerHTML = `<iframe class="safari-frame" src="${url}" title="Safari" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    const frame = view.querySelector('iframe');
    if (!onBlocked) return;
    let done = false;
    const finish = blocked => {
      if (done || !frame.isConnected) return;
      done = true;
      if (blocked) onBlocked();
    };
    frame.addEventListener('load', () => {
      try {
        const doc = frame.contentDocument;
        if (!doc || doc.URL === 'about:blank' || !doc.body || doc.body.childElementCount === 0) finish(true);
        else finish(false);
      } catch {
        finish(false);
      }
    });
    setTimeout(() => {
      try {
        const doc = frame.contentDocument;
        if (!doc || doc.URL === 'about:blank' || !doc.body || !doc.body.innerHTML.trim()) finish(true);
      } catch {
        finish(false);
      }
    }, 1400);
  }

  /* Finder */
  const DESK_FILES = [
    { name:'Projects', file:'projects', folder:true, icon:'folder', deskId:'icon-projects', kind:'Folder', size:'—' },
    { name:'Experience', file:'experience', folder:true, icon:'folder', deskId:'icon-experience', kind:'Folder', size:'—' },
    { name:'Education', file:'education', folder:true, icon:'folder', deskId:'icon-education', kind:'Folder', size:'—' },
    { name:'Resume.pdf', file:'resume', icon:'pdf', deskId:'icon-resume', kind:'PDF Document', size:'186 KB' },
    { name:'Mail.app', file:'mail-alias', icon:'mail', deskId:'icon-mail', kind:'Application', size:'—' },
    { name:'README.md', file:'readme', icon:'textedit', deskId:'icon-readme', kind:'Markdown', size:'12 KB' },
    { name:'Stack.md', file:'stack', icon:'textedit', deskId:'icon-stack', kind:'Markdown', size:'8 KB' },
    { name:'Secrets', file:'secrets', folder:true, icon:'folder', deskId:'icon-secrets', kind:'Folder', size:'—' },
    { name:'todo.txt', file:'todo', icon:'textedit', deskId:'icon-todo', kind:'Plain Text', size:'1 KB' },
    { name:'do-not-open.txt', file:'donotopen', icon:'textedit', deskId:'icon-donotopen', kind:'Plain Text', size:'1 KB' },
    { name: DESK_DOODLE.name, file: DESK_DOODLE.file, icon:'photos', deskId:'icon-doodle', kind:'PNG Image', size: DESK_DOODLE.size, src: DESK_DOODLE.src }
  ];
  const FUN_DOCS = {
    todo: {
      title: 'todo.txt',
      kicker: 'Plain Text',
      lead: 'A living document. Updated never.',
      lines: [
        '[x] build an entire operating system instead of a portfolio',
        '[ ] sleep before 2am (carry forward since 2022)',
        '[ ] stop renaming branches "final-final-v3"',
        '[ ] reply to that LinkedIn message from three weeks ago',
        '[ ] teach the dock bounce to respect weekends',
        '[ ] write a cover letter (deprecated — see Trash)',
        '[ ] rearrange desktop icons into something intentional'
      ]
    },
    donotopen: {
      title: 'do-not-open.txt',
      kicker: 'Plain Text',
      lead: 'You opened it anyway. Respect.',
      paras: [
        'Congratulations. You failed a very easy instruction.',
        'Contents: one (1) empty threat, zero (0) actual secrets.',
        'Close this window like nothing happened. I will know.'
      ]
    },
    passwords: {
      title: 'passwords.txt',
      kicker: 'Plain Text · theatrical',
      lead: 'Obviously fake. Please do not try these anywhere.',
      lines: [
        'wifi-guest → askRoommate2026',
        'github → hunter2 (encrypted, allegedly)',
        'laptop → correct-horse-battery-staple',
        'nehangos-admin → caffeineM3pro!',
        'zoom → the meeting id is a state of mind'
      ]
    },
    names: {
      title: 'bad-startup-names.txt',
      kicker: 'Plain Text',
      lead: 'Brainstorm debris. Do not incorporate.',
      lines: [
        'Shiply',
        'Foldr',
        'InternOS',
        'RecruiterGPT (too on the nose)',
        'StickyNote Capital',
        'NehangAF',
        'Portfolio as a Service',
        'yes.com (taken)'
      ]
    },
    untitled: {
      title: 'Untitled.txt',
      kicker: 'Plain Text',
      lead: 'Started at 2:14am. Abandoned at 2:16am.',
      paras: [
        'ideas:',
        '—',
        '(the cursor blinked at me judgmentally and I closed the window)'
      ]
    },
    cover: {
      title: 'Cover Letter v7 FINAL.docx',
      kicker: 'Microsoft Word · emotionally archived',
      lead: 'Status: superseded by an entire operating system.',
      paras: [
        'Dear Hiring Manager,',
        'I am writing to express my interest in… actually, no. I built NehangOS instead.',
        'Please open Mail on the desktop. The cover letter has been deprecated in favor of clicking around.',
        'Sincerely,<br>Nehang Patel<br><em>v7 FINAL FINAL (use this one)</em>'
      ]
    },
    commits: {
      title: 'commit-messages.txt',
      kicker: 'Plain Text · do not git blame',
      lead: 'Recovered from reflog. Emotional damage intact.',
      lines: [
        'fix',
        'fix for real',
        'okay THIS one',
        'wip',
        'asdfasdf',
        'remove console.log (missed two)',
        'make dock bounce harder',
        'revert "make dock bounce harder"',
        'docs: pretend this was intentional',
        'chore: move sticky 3px to the left'
      ]
    },
    meeting: {
      title: 'meeting-notes.txt',
      kicker: 'Plain Text',
      lead: 'Standup · RTH · allegedly 25 minutes',
      lines: [
        'Attendees: me, future me, the coffee',
        '— ship Secrets folder before anyone asks for a cover letter',
        '— decide if the notch is a feature or a cry for help (both)',
        '— action item: sleep (owner: TBD)',
        '— parking lot: matching socks',
        'Next meeting: when the sticky notes revolt'
      ]
    },
    interview: {
      title: 'interview-answers-DONT-SEND.txt',
      kicker: 'Plain Text · DRAFT · do not paste',
      lead: 'If this file leaves Secrets, the timeline splits.',
      paras: [
        '<strong>Tell me about yourself.</strong><br>I built a Mac so I wouldn\'t have to write a cover letter. Next question.',
        '<strong>What\'s your biggest weakness?</strong><br>Dock magnification. Also underestimating CSS.',
        '<strong>Where do you see yourself in five years?</strong><br>Still rearranging these icons. Hopefully employed.',
        '<strong>Why should we hire you?</strong><br>Open Mail.app. It actually sends. That\'s the pitch.'
      ]
    },
    socks: {
      title: 'matching-socks.log',
      kicker: 'System log',
      lead: 'NehangOS Boot Log · excerpt',
      lines: [
        '[  OK  ] sticky notes loaded (slightly crooked)',
        '[  OK  ] dock magnification armed',
        '[  OK  ] Eastern Thought queued',
        '[ WARN ] matching socks not found',
        '[ WARN ] matching socks not found',
        '[ WARN ] matching socks not found',
        '[ FAIL ] gave up. proceeded barefoot spiritually',
        '[  OK  ] desktop ready'
      ]
    },
    why: {
      title: 'why-i-built-this.md',
      kicker: 'Markdown',
      lead: 'Origin story, unsorted.',
      paras: [
        'I got tired of the usual portfolio — hero section, three cards, footer saying "let\'s connect."',
        'So I built a computer instead. You boot it. You unlock it. You drag windows around like you meant to be productive.',
        'If you\'re still reading this inside Secrets: you\'re hired. Spiritually. Open Mail for the non-spiritual version.'
      ]
    }
  };
  function funDocHTML(id) {
    const doc = FUN_DOCS[id];
    if (!doc) return '';
    const paras = (doc.paras || []).map(p => `<p class="rd-body">${p}</p>`).join('');
    const list = doc.lines
      ? `<ul class="fun-list">${doc.lines.map(li => `<li>${li}</li>`).join('')}</ul>`
      : '';
    return `<div class="readme-doc fun-doc">
      <p class="rd-kicker">${doc.kicker}</p>
      <header class="rd-hero">
        <h1>${doc.title}</h1>
        <p class="rd-meta">${doc.lead}</p>
      </header>
      ${paras}${list}
    </div>`;
  }
  const TRASH_SEED = [
    { id:'cover', name:'Cover Letter v7 FINAL.docx', kind:'Microsoft Word', icon:'document', from:'Documents', deleted:'Yesterday', size:'28 KB' },
    { id:'shot', name:'Screenshot 2026-07-12 at 2.14.03 AM.png', kind:'PNG Image', icon:'photos', from:'Desktop', deleted:'Aug 18', size:'1.2 MB' },
    { id:'oldcv', name:'Resume_Nehang_Patel_2024.pdf', kind:'PDF Document', icon:'pdf', from:'Downloads', deleted:'Aug 4', size:'186 KB' },
    { id:'untitled', name:'Untitled.txt', kind:'Plain Text', icon:'textedit', from:'Desktop', deleted:'Jul 22', size:'1 KB' },
    { id:'names', name:'bad-startup-names.txt', kind:'Plain Text', icon:'textedit', from:'Documents', deleted:'Jul 9', size:'2 KB' }
  ];
  const TRASH_OPEN = {
    cover: 'cover',
    untitled: 'untitled',
    names: 'names',
    oldcv: 'resume',
    shot: 'shot:desk:doodle'
  };
  function loadTrash() {
    try {
      const v2 = localStorage.getItem('nehang-trash-v2');
      if (v2) {
        const items = JSON.parse(v2);
        return Array.isArray(items) ? items : TRASH_SEED.map(x => ({ ...x }));
      }
      const raw = localStorage.getItem('nehang-trash');
      if (raw === null) return TRASH_SEED.map(x => ({ ...x }));
      const ids = JSON.parse(raw);
      if (!Array.isArray(ids)) return TRASH_SEED.map(x => ({ ...x }));
      return TRASH_SEED.filter(x => ids.includes(x.id)).map(x => ({ ...x }));
    } catch {
      return TRASH_SEED.map(x => ({ ...x }));
    }
  }
  function loadGone() {
    try {
      const ids = JSON.parse(localStorage.getItem('nehang-desk-gone') || '[]');
      return Array.isArray(ids) ? ids : [];
    } catch { return []; }
  }
  let trashItems = loadTrash();
  let restoredItems = loadRestored();
  let goneKeys = loadGone();
  let ignoreTrashClick = false;
  let ctxFile = null;
  let ctxSticky = null;
  function loadRestored() {
    try {
      const ids = JSON.parse(localStorage.getItem('nehang-restored') || '[]');
      if (!Array.isArray(ids)) return [];
      return TRASH_SEED.filter(x => ids.includes(x.id)).map(x => ({ ...x }));
    } catch { return []; }
  }
  function saveTrash() {
    try { localStorage.setItem('nehang-trash-v2', JSON.stringify(trashItems)); } catch (_) {}
    try { localStorage.setItem('nehang-restored', JSON.stringify(restoredItems.map(x => x.id))); } catch (_) {}
    try { localStorage.setItem('nehang-desk-gone', JSON.stringify(goneKeys)); } catch (_) {}
  }
  function fileInTrash(file) {
    if (!file) return false;
    return trashItems.some(t => t.file === file) || goneKeys.includes(file);
  }
  function paintTrashDock() {
    const btn = document.querySelector('.dapp[data-open="trash"]');
    if (btn) btn.classList.toggle('full', trashItems.length > 0);
  }
  function syncDeskIcons() {
    document.querySelectorAll('.dicon[data-file]').forEach(el => {
      if (el.dataset.restored) return;
      el.hidden = fileInTrash(el.dataset.file);
    });
    paintTrashDock();
  }
  function armIgnoreTrashClick() {
    ignoreTrashClick = true;
    setTimeout(() => { ignoreTrashClick = false; }, 450);
  }
  function pointerOverTrash(x, y) {
    const nodes = document.elementsFromPoint(x, y) || [];
    for (const n of nodes) {
      if (!n || !n.closest) continue;
      const dock = n.closest('[data-open="trash"]');
      if (dock) return dock;
      const side = n.closest('.f-trash');
      if (side) return side;
      const win = n.closest('.window.finder');
      if (win && win.querySelector('.wtitle')?.textContent === 'Trash' && n.closest('.fmain, .finder-col')) return win;
    }
    return null;
  }
  function setTrashHot(on) {
    document.querySelectorAll('[data-open="trash"], .f-trash').forEach(el => el.classList.toggle('drop-on', !!on));
  }
  function deskMeta(el) {
    const file = el.dataset.file;
    if (isShotFile(file) || el.dataset.shotSrc) {
      const shot = shotByFile(file);
      return {
        ...(shot || {}),
        name: shot?.name || el.querySelector('span')?.textContent?.trim() || file,
        file,
        icon: 'photos',
        src: shot?.src || el.dataset.shotSrc,
        from: 'Desktop',
        kind: 'PNG Image',
        size: shot?.size || '—',
        deskId: el.dataset.deskId,
        deskEl: el
      };
    }
    const known = DESK_FILES.find(x => x.file === file);
    const name = el.querySelector('span')?.textContent?.trim() || known?.name || file;
    if (el.dataset.restored) {
      const it = restoredItems.find(x => x.id === el.dataset.restored);
      return {
        restoredId: el.dataset.restored,
        name: it?.name || name,
        file,
        icon: it?.icon || 'textedit',
        from: 'Desktop',
        kind: it?.kind || 'Document',
        size: it?.size || '—',
        deskEl: el
      };
    }
    return {
      id: 'desktop-' + file,
      name,
      file,
      folder: !!known?.folder,
      icon: known?.icon || 'folder',
      from: 'Desktop',
      kind: known?.kind || (known?.folder ? 'Folder' : 'Document'),
      size: known?.size || '—',
      deskId: el.dataset.deskId || known?.deskId,
      deskEl: el
    };
  }
  function finderItemIcon(it) {
    if (it.src) return `<img class="appico fthumb" src="${esc(it.src)}" alt="" draggable="false"/>`;
    return it.folder ? ico('folder') : ico(it.icon || 'textedit');
  }
  function finderFileMeta(row, loc) {
    const file = row.dataset.file;
    if (isShotFile(file)) {
      const shot = shotByFile(file);
      if (shot) return { ...shot, from: loc || 'Projects', folder: false };
    }
    if (String(file).startsWith('pfolder:')) {
      const p = PROJECTS.find(x => x.id === String(file).slice(8));
      return {
        name: p?.title || file,
        file,
        folder: true,
        icon: 'folder',
        from: loc || 'Projects',
        kind: 'Folder',
        size: '—'
      };
    }
    const known = DESK_FILES.find(x => x.file === file);
    const name = row.getAttribute('title') || row.querySelector('.fl-name span, span:last-child')?.textContent?.trim() || known?.name || file;
    const folder = row.dataset.folder === '1' || !!known?.folder;
    return {
      id: String(loc || 'Desktop').toLowerCase() + '-' + file,
      name,
      file,
      folder,
      icon: known?.icon || (folder ? 'folder' : 'textedit'),
      from: loc || 'Desktop',
      kind: folder ? 'Folder' : (known?.kind || 'Document'),
      size: known?.size || '—'
    };
  }
  function showFileCtx(x, y, meta) {
    closeMenus();
    ctxFile = meta;
    const m = document.getElementById('iconCtx');
    if (!m) return;
    m.hidden = false;
    m.style.left = Math.min(x, window.innerWidth - 210) + 'px';
    m.style.top = Math.min(y, window.innerHeight - 90) + 'px';
  }
  function moveFileToTrash(meta) {
    if (!meta || !meta.file) return;
    if (meta.from === 'Applications') {
      toast('Applications stay in Applications');
      return;
    }
    if (String(meta.file).startsWith('pfolder:')) {
      toast('Project folders stay in Projects');
      return;
    }
    if (isShotFile(meta.file) && meta.from !== 'Desktop') {
      toast('Screenshots stay in Projects');
      return;
    }
    if (meta.restoredId) {
      const it = restoredItems.find(x => x.id === meta.restoredId);
      restoredItems = restoredItems.filter(x => x.id !== meta.restoredId);
      if (it && !trashItems.some(t => t.id === it.id)) trashItems.unshift({ ...it, deleted: 'Today' });
      document.querySelector('.dicon[data-restored="' + meta.restoredId + '"]')?.remove();
      saveTrash();
      refreshFinders();
      syncDeskIcons();
      bounceDock('trash');
      toast('Moved to Trash');
      return;
    }
    if (trashItems.some(t => t.file === meta.file)) {
      syncDeskIcons();
      refreshFinders();
      return;
    }
    goneKeys = goneKeys.filter(k => k !== meta.file);
    trashItems.unshift({
      id: meta.id || ((meta.from || 'Desktop').toLowerCase() + '-' + meta.file),
      name: meta.name,
      kind: meta.kind || (meta.folder ? 'Folder' : 'Document'),
      icon: meta.icon || (meta.folder ? 'folder' : 'textedit'),
      from: meta.from || 'Desktop',
      deleted: 'Today',
      size: meta.size || '—',
      file: meta.file,
      folder: !!meta.folder
    });
    saveTrash();
    refreshFinders();
    syncDeskIcons();
    bounceDock('trash');
    toast('Moved to Trash');
  }
  function selectedDeskIcon() {
    return document.querySelector('.dicon.sel:not([hidden])');
  }
  function extrasFor(loc) {
    return restoredItems.filter(t => t.from === loc).map(t => ({
      name: t.name,
      file: 'restored-' + t.id,
      icon: t.icon,
      restored: true
    }));
  }
  function locItems(loc) {
    if (loc === 'Trash') return trashItems.map(t => ({ ...t, trash: true }));
    const base = FINDER_LOCS[loc] ? FINDER_LOCS[loc]() : [];
    return base.concat(extrasFor(loc)).filter(it => !it.file || it.restored || !fileInTrash(it.file));
  }
  function addRestoredDeskIcon(it) {
    if (document.querySelector('[data-restored="' + it.id + '"]')) return;
    const desk = document.getElementById('deskIcons');
    const stage = document.querySelector('.stage');
    if (!desk && !stage) return;
    const btn = document.createElement('button');
    btn.className = 'dicon';
    btn.dataset.restored = it.id;
    btn.dataset.file = 'restored-' + it.id;
    btn.dataset.deskId = 'restored-' + it.id;
    btn.innerHTML = `${ico(it.icon)}<span>${esc(it.name)}</span>`;
    (desk || stage).appendChild(btn);
    // Mid-session put-back: other icons are already floated, so place this one now.
    if (stage && window.innerWidth >= 860 && stage.querySelector('.loose')) {
      const saved = loadDeskLayout()[btn.dataset.deskId];
      if (saved) {
        floatOnStage(btn, saved.left, saved.top, saved.width);
      } else {
        const base = composeDeskLayout();
        const anchor = base['icon-stack'] || base['icon-readme'] || { left: 40, top: 180 };
        const idx = [...document.querySelectorAll('.dicon[data-restored]')].indexOf(btn);
        floatOnStage(btn, anchor.left + (idx + 1) * 108, anchor.top);
        saveDeskLayout();
      }
      tidyDeskShells();
    }
  }
  function putBackItem(id) {
    const it = trashItems.find(x => x.id === id);
    if (!it) return null;
    trashItems = trashItems.filter(x => x.id !== id);
    if (it.file && !String(it.file).startsWith('restored-')) {
      goneKeys = goneKeys.filter(k => k !== it.file);
    } else {
      if (!restoredItems.some(x => x.id === it.id)) restoredItems.push(it);
      if (it.from === 'Desktop') addRestoredDeskIcon(it);
    }
    saveTrash();
    syncDeskIcons();
    return it;
  }
  function refreshFinders() {
    document.querySelectorAll('.window.finder').forEach(el => el.dispatchEvent(new Event('finder-refresh')));
  }
  function finderMarkup() {
    return `<div class="finder-ui">
      <div class="fside" id="finderSide"></div>
      <div class="finder-col">
        <div class="finder-tools">
          <button type="button" class="ftool" data-finder="back" aria-label="Back" title="Back">
            <svg viewBox="0 0 16 16" width="12" height="12"><path d="M10.2 2.8 5 8l5.2 5.2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <button type="button" class="ftool" data-finder="fwd" aria-label="Forward" title="Forward">
            <svg viewBox="0 0 16 16" width="12" height="12"><path d="M5.8 2.8 11 8l-5.2 5.2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <span class="ftool-div"></span>
          <button type="button" class="ftool" data-finder="view-icons" aria-label="Icons" title="Icons">
            <svg viewBox="0 0 16 16" width="13" height="13"><rect x="2.2" y="2.2" width="4.4" height="4.4" rx=".8" fill="currentColor"/><rect x="9.4" y="2.2" width="4.4" height="4.4" rx=".8" fill="currentColor"/><rect x="2.2" y="9.4" width="4.4" height="4.4" rx=".8" fill="currentColor"/><rect x="9.4" y="9.4" width="4.4" height="4.4" rx=".8" fill="currentColor"/></svg>
          </button>
          <button type="button" class="ftool" data-finder="view-list" aria-label="List" title="List">
            <svg viewBox="0 0 16 16" width="13" height="13"><path fill="currentColor" d="M2.2 3.2h11.6v1.6H2.2zm0 4h11.6v1.6H2.2zm0 4h11.6v1.6H2.2z"/></svg>
          </button>
          <button type="button" class="ftool f-put" data-finder="putback">Put Back</button>
          <button type="button" class="ftool f-empty" data-finder="empty">Empty</button>
        </div>
        <div class="fmain" id="finderMain"></div>
        <div class="finder-status"></div>
        <div class="finder-sheet" hidden>
          <p class="fs-title">Are you sure you want to permanently erase the items in the Trash?</p>
          <p class="fs-copy">You can’t undo this action.</p>
          <div class="fs-actions">
            <button type="button" data-finder="cancel">Cancel</button>
            <button type="button" class="danger" data-finder="confirm-empty">Empty Trash</button>
          </div>
        </div>
      </div>
    </div>`;
  }
  const FINDER_LOCS = {
    Recents: () => [
      { name:'Resume.pdf', file:'resume', icon:'pdf' },
      { name:'Stack.md', file:'stack', icon:'textedit' },
      { name:'NexusIQ AI', file:'nexusiq', folder:true },
      { name:'README.md', file:'readme', icon:'textedit' }
    ],
    Desktop: () => DESK_FILES.map(x => ({ name: x.name, file: x.file, folder: !!x.folder, icon: x.icon, src: x.src })),
    Projects: () => PROJECTS.map(p => ({ name: p.title, file: 'pfolder:' + p.id, folder: true, icon: 'folder' })),
    Documents: () => [
      { name:'Resume.pdf', file:'resume', icon:'pdf' },
      { name:'README.md', file:'readme', icon:'textedit' },
      { name:'Stack.md', file:'stack', icon:'textedit' },
      { name:'passwords.txt', file:'passwords', icon:'textedit' },
      { name:'todo.txt', file:'todo', icon:'textedit' },
      ...PROJECTS.map(p => ({ name: p.title, file: p.id, folder: true }))
    ],
    Applications: () => [
      { name:'Safari', file:'safari', icon:'safari' },
      { name:'Messages', file:'messages', icon:'messages' },
      { name:'Mail', file:'contact', icon:'mail' },
      { name:'Notes', file:'notes', icon:'notes' },
      { name:'Calendar', file:'calendar', icon:'calendar' },
      { name:'Photos', file:'photos', icon:'photos' },
      { name:'Maps', file:'maps', icon:'maps' },
      { name:'FaceTime', file:'facetime', icon:'facetime' },
      { name:'Contacts', file:'contacts', icon:'contacts' },
      { name:'App Store', file:'appstore', icon:'appstore' },
      { name:'Preview', file:'resume', icon:'preview' },
      { name:'Terminal', file:'terminal', icon:'terminal' },
      { name:'Music', file:'music', icon:'music' },
      { name:'System Settings', file:'settings', icon:'settings' }
    ],
    Downloads: () => [{ name: RESUME.file, file:'resume', icon:'pdf' }],
    Trash: () => trashItems.map(t => ({ ...t, trash:true }))
  };

  function bindFinder(win, start) {
    const side = win.querySelector('#finderSide');
    const main = win.querySelector('#finderMain');
    const status = win.querySelector('.finder-status');
    const sheet = win.querySelector('.finder-sheet');
    const locs = Object.keys(FINDER_LOCS);
    let loc = start && FINDER_LOCS[start] ? start : 'Desktop';
    let view = loc === 'Trash' ? 'list' : 'icons';
    let sel = null;
    let nest = null;
    const hist = [loc];
    let hi = 0;

    function go(next, fromHist) {
      if (!FINDER_LOCS[next]) return;
      loc = next;
      nest = null;
      if (!fromHist) {
        hist.splice(hi + 1);
        hist.push(loc);
        hi = hist.length - 1;
      }
      if (loc !== 'Trash') sel = null;
      if (loc === 'Trash') view = view || 'list';
      paint();
    }
    function enterProject(pid) {
      const p = PROJECTS.find(x => x.id === pid);
      if (!p) return;
      loc = 'Projects';
      nest = { id: p.id, title: p.title };
      sel = null;
      paint();
    }
    function itemsFor() {
      if (loc === 'Projects' && nest) {
        const p = PROJECTS.find(x => x.id === nest.id);
        return shotsForProject(p);
      }
      return locItems(loc);
    }
    function paint() {
      const title = nest?.title || (loc === 'Trash' ? 'Trash' : loc);
      const tEl = win.querySelector('.wtitle');
      if (tEl) tEl.textContent = title;
      const w = state.windows.get(win.dataset.id);
      if (w) w.title = 'Finder';
      if (state.front === win.dataset.id) setMenuApp('Finder');

      side.innerHTML = `<p class="flab">Favorites</p>` + locs.map(n => {
        return `<button type="button" data-loc="${n}" class="${n === loc ? 'on' : ''}${n === 'Trash' ? ' f-trash' : ''}">${n}</button>`;
      }).join('');

      const items = itemsFor();
      const inTrash = loc === 'Trash';
      const empty = win.querySelector('[data-finder="empty"]');
      const put = win.querySelector('[data-finder="putback"]');
      const back = win.querySelector('[data-finder="back"]');
      const fwd = win.querySelector('[data-finder="fwd"]');
      if (empty) empty.disabled = !inTrash || items.length === 0;
      if (put) {
        put.classList.toggle('off', !inTrash || !sel);
        put.setAttribute('aria-disabled', (!inTrash || !sel) ? 'true' : 'false');
      }
      if (back) back.disabled = hi <= 0 && !nest;
      if (fwd) fwd.disabled = hi >= hist.length - 1;
      win.querySelector('[data-finder="view-icons"]')?.classList.toggle('on', view === 'icons');
      win.querySelector('[data-finder="view-list"]')?.classList.toggle('on', view === 'list');
      if (sheet) sheet.hidden = true;

      if (inTrash && !items.length) {
        main.className = 'fmain empty';
        main.innerHTML = `<div class="trash-empty">
          <img src="assets/icons/macos/trash.png" alt="" draggable="false"/>
          <p>The Trash is Empty</p>
        </div>`;
        if (status) status.textContent = '0 items';
        return;
      }

      main.className = 'fmain ' + view;
      if (view === 'list') {
        const head = inTrash
          ? `<div class="flist-hd"><span>Name</span><span>Date Deleted</span><span>Size</span><span>Kind</span></div>`
          : `<div class="flist-hd"><span>Name</span><span></span><span></span><span>Kind</span></div>`;
        main.innerHTML = head + items.map(it => {
          const ic = finderItemIcon(it);
          if (it.trash) {
            return `<button type="button" class="flist-row${it.id === sel ? ' on' : ''}" data-trash="${it.id}">
              <span class="fl-name">${ic}<span>${esc(it.name)}</span></span>
              <span>${esc(it.deleted)}</span><span>${esc(it.size)}</span><span>${esc(it.kind)}</span>
            </button>`;
          }
          return `<button type="button" class="flist-row${it.file === sel ? ' on' : ''}" data-file="${esc(it.file)}" data-folder="${it.folder ? '1' : ''}">
            <span class="fl-name">${ic}<span>${esc(it.name)}</span></span>
            <span></span><span></span><span>${it.folder ? 'Folder' : esc(it.kind || '')}</span>
          </button>`;
        }).join('');
      } else {
        main.innerHTML = items.map(it => {
          const ic = finderItemIcon(it);
          if (it.trash) {
            return `<button type="button" class="fitem${it.id === sel ? ' on' : ''}" data-trash="${it.id}" title="${esc(it.name)}">${ic}<span>${esc(it.name)}</span></button>`;
          }
          return `<button type="button" class="fitem${it.file === sel ? ' on' : ''}" data-file="${esc(it.file)}" data-folder="${it.folder ? '1' : ''}" title="${esc(it.name)}">${ic}<span>${esc(it.name)}</span></button>`;
        }).join('');
      }
      if (status) {
        status.textContent = inTrash
          ? items.length + ' item' + (items.length === 1 ? '' : 's') + ' in the Trash'
          : items.length + ' item' + (items.length === 1 ? '' : 's');
      }
    }

    function restore(id) {
      const it = putBackItem(id || sel);
      if (!it) {
        toast('Select an item to put back');
        return;
      }
      sel = null;
      toast('Put Back to ' + it.from);
      go(it.from);
      refreshFinders();
    }
    function selectedFinderFile() {
      if (loc === 'Trash' || loc === 'Applications' || !sel) return null;
      const row = win.querySelector('[data-file="' + sel + '"]');
      return row ? finderFileMeta(row, loc) : null;
    }
    paint();
    win.addEventListener('finder-refresh', paint);
    win.addEventListener('finder-go', e => {
      const next = e.detail?.loc;
      const project = e.detail?.project;
      if (next) go(next);
      if (project) enterProject(project);
    });
    win.addEventListener('finder-ql', () => {
      const meta = selectedFinderFile();
      if (isShotFile(meta?.file)) openQuickLookFromShot(shotByFile(meta.file));
    });
    win.addEventListener('finder-trash-sel', () => {
      const meta = selectedFinderFile();
      if (meta) moveFileToTrash(meta);
    });
    side.addEventListener('click', e => {
      const b = e.target.closest('[data-loc]');
      if (b) go(b.dataset.loc);
    });
    main.addEventListener('click', e => {
      const trashRow = e.target.closest('[data-trash]');
      const fileRow = e.target.closest('[data-file]');
      if (trashRow) {
        e.stopPropagation();
        sel = trashRow.dataset.trash;
        win.querySelectorAll('[data-trash]').forEach(el => el.classList.toggle('on', el.dataset.trash === sel));
        const put = win.querySelector('[data-finder="putback"]');
        if (put) {
          put.classList.remove('off');
          put.setAttribute('aria-disabled', 'false');
        }
        return;
      }
      if (fileRow) {
        sel = fileRow.dataset.file;
        win.querySelectorAll('[data-file]').forEach(el => el.classList.toggle('on', el.dataset.file === sel));
        return;
      }
      sel = null;
      paint();
    });
    main.addEventListener('dblclick', e => {
      const trashRow = e.target.closest('[data-trash]');
      if (trashRow) {
        e.preventDefault();
        e.stopPropagation();
        const tid = trashRow.dataset.trash;
        if (TRASH_OPEN[tid]) {
          openTrashGag(tid);
          return;
        }
        restore(tid);
        return;
      }
      const fileRow = e.target.closest('[data-file]');
      if (fileRow) {
        e.preventDefault();
        e.stopPropagation();
        const file = fileRow.dataset.file;
        if (String(file).startsWith('pfolder:')) {
          enterProject(String(file).slice(8));
          return;
        }
        if (isShotFile(file)) {
          openImagePreviewFromShot(shotByFile(file));
          return;
        }
        openApp(file);
      }
    });
    main.addEventListener('mousedown', ev => {
      if (ev.button !== 0) return;
      const row = ev.target.closest('[data-file]');
      if (!row || loc === 'Trash' || loc === 'Applications') return;
      trackFileDrag(ev, finderFileMeta(row, nest?.title || loc), row);
    });
    win.addEventListener('contextmenu', e => {
      const trashRow = e.target.closest('[data-trash]');
      if (trashRow) {
        e.preventDefault();
        e.stopPropagation();
        sel = trashRow.dataset.trash;
        paint();
        const it = trashItems.find(x => x.id === sel);
        if (it) toast(TRASH_OPEN[it.id] ? it.name + ' — Double-click to open' : it.name + ' — Put Back or Empty from the toolbar');
        return;
      }
      const fileRow = e.target.closest('[data-file]');
      if (fileRow && loc !== 'Trash' && loc !== 'Applications') {
        e.preventDefault();
        e.stopPropagation();
        sel = fileRow.dataset.file;
        paint();
        const meta = finderFileMeta(fileRow, nest?.title || loc);
        if (isShotFile(meta.file)) showShotCtx(e.clientX, e.clientY, shotByFile(meta.file), meta);
        else showFileCtx(e.clientX, e.clientY, meta);
      }
    });
    win.addEventListener('click', e => {
      const btn = e.target.closest('[data-finder]');
      if (!btn) return;
      const act = btn.dataset.finder;
      if (act === 'back') {
        if (nest) { nest = null; sel = null; paint(); }
        else if (hi > 0) { hi -= 1; go(hist[hi], true); }
      }
      else if (act === 'fwd' && hi < hist.length - 1) { hi += 1; go(hist[hi], true); }
      else if (act === 'view-icons') { view = 'icons'; paint(); }
      else if (act === 'view-list') { view = 'list'; paint(); }
      else if (act === 'empty' && loc === 'Trash' && trashItems.length) {
        if (sheet) sheet.hidden = false;
      }
      else if (act === 'cancel' && sheet) sheet.hidden = true;
      else if (act === 'confirm-empty') {
        trashItems.forEach(t => {
          if (t.file && !String(t.file).startsWith('restored-') && !goneKeys.includes(t.file)) goneKeys.push(t.file);
        });
        trashItems = [];
        sel = null;
        saveTrash();
        if (sheet) sheet.hidden = true;
        refreshFinders();
        syncDeskIcons();
        toast('Trash emptied');
      }
      else if (act === 'putback') {
        e.preventDefault();
        restore(sel);
      }
    });
  }

  /* Preview */
  function bindPreview(win) {
    const box = win.querySelector('#pvZoombox');
    const frame = win.querySelector('#pvFrame');
    const pageEl = win.querySelector('#pvPage');
    const zoomEl = win.querySelector('#pvZoom');
    const pv = { page: 1, pages: RESUME.pages, zoom: 1, rot: 0 };

    function paintChrome() {
      pageEl.textContent = pv.page + ' / ' + pv.pages;
      zoomEl.textContent = Math.round(pv.zoom * 100) + '%';
      box.style.zoom = String(pv.zoom);
      box.style.transform = pv.rot ? `rotate(${pv.rot}deg)` : '';
    }

    function goTo(page) {
      pv.page = Math.min(pv.pages, Math.max(1, page));
      frame.src = RESUME.href + '#page=' + pv.page + '&toolbar=0&navpanes=0&scrollbar=1';
      paintChrome();
    }

    paintChrome();

    win.querySelector('.pv-toolbar').addEventListener('click', e => {
      const btn = e.target.closest('[data-pv]');
      if (!btn) return;
      const act = btn.dataset.pv;
      if (act === 'prev') goTo(pv.page - 1);
      if (act === 'next') goTo(pv.page + 1);
      if (act === 'in') { pv.zoom = Math.min(2.2, +(pv.zoom + 0.15).toFixed(2)); paintChrome(); }
      if (act === 'out') { pv.zoom = Math.max(0.5, +(pv.zoom - 0.15).toFixed(2)); paintChrome(); }
      if (act === 'rotate') { pv.rot = (pv.rot + 90) % 360; paintChrome(); }
      if (act === 'print') {
        const w = window.open(RESUME.href);
        if (w) setTimeout(() => { try { w.print(); } catch (_) {} }, 600);
      }
    });
  }

  function bindPhotos(win) {
    const grid = win.querySelector('#phGrid');
    const viewer = win.querySelector('#phViewer');
    const title = win.querySelector('.ph-title');
    const sub = win.querySelector('.ph-sub');
    const albumLabels = {
      library: ['Library', 'Project gallery — screenshots, covers, and case-study stills'],
      recents: ['Recents', 'Everything in the library, newest first'],
      memories: ['Memories', 'Wallpaper and live product shots'],
      projects: ['Projects', 'One tile per shipped or in-progress build']
    };
    function paint() {
      win.querySelectorAll('[data-ph-album]').forEach(b => b.classList.toggle('on', b.dataset.phAlbum === photosAlbum));
      const label = albumLabels[photosAlbum] || [PROJECTS.find(p => p.id === photosAlbum)?.title || 'Album', 'Open a tile for the case study'];
      if (title) title.textContent = label[0];
      if (sub) sub.textContent = label[1];
      const list = photosInAlbum(photosAlbum);
      if (!grid) return;
      grid.innerHTML = list.map(ph => {
        const media = ph.src
          ? `<img src="${esc(ph.src)}" alt="${esc(ph.title)}" loading="lazy"/>`
          : `<span class="ph-art" style="background:${ph.art}"><b>${esc(ph.title)}</b><em>${esc(ph.when || '')}</em></span>`;
        return `<button type="button" class="ph-tile${photosSel===ph.id?' on':''}" data-ph="${esc(ph.id)}">${media}<span class="ph-cap"><strong>${esc(ph.title)}</strong><em>${esc(ph.when || '')}</em></span></button>`;
      }).join('') || '<p class="ph-empty">No photos in this album.</p>';
      paintViewer();
      if (photosSel) grid.querySelector('[data-ph="' + photosSel + '"]')?.scrollIntoView({ block: 'nearest' });
    }
    function paintViewer() {
      if (!viewer) return;
      const ph = photoLibrary().find(p => p.id === photosSel);
      if (!ph) { viewer.hidden = true; viewer.innerHTML = ''; return; }
      viewer.hidden = false;
      const media = ph.src
        ? `<img src="${esc(ph.src)}" alt="${esc(ph.title)}"/>`
        : `<div class="ph-art lg" style="background:${ph.art}"><b>${esc(ph.title)}</b></div>`;
      viewer.innerHTML = `<button type="button" class="ph-close" data-ph-close aria-label="Close">×</button>
        <div class="ph-view-media">${media}</div>
        <div class="ph-view-meta">
          <h3>${esc(ph.title)}</h3>
          <p>${esc(ph.cap)}</p>
          <div class="ph-view-acts">
            ${ph.project ? `<button type="button" class="btn primary" data-project="${esc(ph.project)}">Open project</button>` : ''}
            <button type="button" class="btn" data-open="projects">All projects</button>
          </div>
        </div>`;
    }
    function photoToShot(ph) {
      if (!ph?.src) return null;
      if (ph.project) {
        const match = shotsForProject(PROJECTS.find(p => p.id === ph.project)).find(s => s.id === ph.id || s.src === ph.src);
        if (match) return match;
      }
      return {
        id: ph.id,
        file: ph.project ? ('shot:' + ph.project + ':0') : ('photo:' + ph.id),
        project: ph.project,
        src: ph.src,
        cap: ph.cap,
        alt: ph.title,
        name: shotFileName(ph.src)
      };
    }
    paint();
    win.addEventListener('photos-refresh', paint);
    win.addEventListener('dblclick', e => {
      const tile = e.target.closest('[data-ph]');
      if (!tile || !win.contains(tile)) return;
      const ph = photoLibrary().find(p => p.id === tile.dataset.ph);
      const shot = photoToShot(ph);
      if (shot) {
        e.preventDefault();
        photosSel = ph.id;
        paint();
        const albumShots = photosInAlbum(photosAlbum).map(photoToShot).filter(Boolean);
        const i = Math.max(0, albumShots.findIndex(s => s.id === shot.id));
        openQuickLook(albumShots.length ? albumShots : [shot], i);
      }
    });
    win.addEventListener('click', e => {
      const album = e.target.closest('[data-ph-album]');
      if (album && win.contains(album)) {
        photosAlbum = album.dataset.phAlbum;
        photosSel = null;
        paint();
        return;
      }
      const tile = e.target.closest('[data-ph]');
      if (tile && win.contains(tile)) {
        photosSel = tile.dataset.ph;
        paint();
        return;
      }
      if (e.target.closest('[data-ph-close]')) {
        photosSel = null;
        paint();
      }
    });
  }

  function bindMaps(win) {
    const list = win.querySelector('#mpList');
    const frame = win.querySelector('#mpFrame');
    const card = win.querySelector('#mpCard');
    function paint() {
      if (list) {
        list.innerHTML = MAP_PLACES.map(p => `<button type="button" class="mp-item${p.id===mapPlace?' on':''}" data-mp="${p.id}">
          <span class="mp-pin" aria-hidden="true"></span>
          <span><b>${esc(p.name)}</b><em>${esc(p.sub)}</em></span>
        </button>`).join('');
      }
      const place = MAP_PLACES.find(p => p.id === mapPlace) || MAP_PLACES[0];
      if (frame) frame.src = mapEmbed(place);
      if (card) {
        card.innerHTML = `<p class="mp-kicker">Selected</p>
          <h2>${esc(place.name)}</h2>
          <p class="mp-sub">${esc(place.sub)}</p>
          <p class="mp-detail">${esc(place.detail)}</p>
          <div class="mp-acts">
            <button type="button" class="btn primary" data-mp-open="${esc(place.open)}"${place.pane ? ` data-edu-start="${esc(place.pane)}"` : ''}>${esc(place.openLabel)}</button>
            <a class="btn" href="https://www.openstreetmap.org/?mlat=${place.lat}&mlon=${place.lon}#map=14/${place.lat}/${place.lon}" target="_blank" rel="noopener noreferrer">Open in OSM</a>
          </div>`;
      }
    }
    paint();
    win.addEventListener('click', e => {
      const item = e.target.closest('[data-mp]');
      if (item && win.contains(item)) {
        mapPlace = item.dataset.mp;
        paint();
        return;
      }
      const go = e.target.closest('[data-mp-open]');
      if (go && win.contains(go)) {
        if (go.dataset.eduStart) eduLaunchPane = go.dataset.eduStart;
        openApp(go.dataset.mpOpen);
      }
    });
  }

  function bindFaceTime(win) {
    const stage = win.querySelector('#ftStage');
    let timer = null;
    function clearTimer() {
      if (timer) { clearTimeout(timer); timer = null; }
    }
    function paintSide() {
      win.querySelectorAll('[data-ft]').forEach(b => b.classList.toggle('on', b.dataset.ft === ftContact));
    }
    function paint() {
      paintSide();
      const c = CONTACTS.find(x => x.id === ftContact) || CONTACTS[0];
      if (!stage) return;
      if (ftPhase === 'connecting') {
        stage.innerHTML = `<div class="ft-call">
          <span class="ft-ava xl pulse" style="background:${c.color}">${esc(initials(c.name))}</span>
          <h2>${esc(c.name)}</h2>
          <p class="ft-status">Connecting…</p>
          <button type="button" class="ft-end" data-ft-act="end">End</button>
        </div>`;
        return;
      }
      if (ftPhase === 'missed') {
        stage.innerHTML = `<div class="ft-call">
          <span class="ft-ava xl" style="background:${c.color}">${esc(initials(c.name))}</span>
          <h2>${esc(c.name)}</h2>
          <p class="ft-status">FaceTime isn’t available in the browser — leave a message instead.</p>
          <div class="ft-acts">
            <button type="button" class="btn primary" data-open="contact">Mail</button>
            <button type="button" class="btn" data-open="messages">Messages</button>
            <button type="button" class="btn" data-safari="https://www.linkedin.com/in/nehangpatel/">LinkedIn</button>
          </div>
          <button type="button" class="ft-back" data-ft-act="idle">Back</button>
        </div>`;
        return;
      }
      stage.innerHTML = `<div class="ft-idle">
        <span class="ft-ava xl" style="background:${c.color}">${esc(initials(c.name))}</span>
        <h2>${esc(c.name)}</h2>
        <p class="ft-role">${esc(c.role)}</p>
        <p class="ft-note">${esc(c.note)}</p>
        <div class="ft-acts">
          <button type="button" class="ft-video" data-ft-act="call" title="Video">
            <svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M4 7.5A2.5 2.5 0 0 1 6.5 5h7A2.5 2.5 0 0 1 16 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 16.5v-9zm13.2 2.2 3.3-2.1a.8.8 0 0 1 1.2.7v7.4a.8.8 0 0 1-1.2.7l-3.3-2.1v-4.6z"/></svg>
            Video
          </button>
          <button type="button" class="ft-audio" data-ft-act="call" title="Audio">
            <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M7.2 3.8c.4-.4 1-.5 1.5-.3l2.2 1c.5.2.8.7.8 1.2v2.3c0 .4-.2.8-.6 1L9.5 10c.7 1.6 2 2.9 3.6 3.6l1-1.6c.2-.4.6-.6 1-.6h2.3c.5 0 1 .3 1.2.8l1 2.2c.2.5.1 1.1-.3 1.5l-1.3 1.3c-.4.4-1 .6-1.6.5C10.8 17.1 6.9 13.2 5.3 7.7c-.1-.6.1-1.2.5-1.6L7.2 3.8z"/></svg>
            Audio
          </button>
        </div>
        <div class="ft-quick">
          <button type="button" data-open="contact">Mail</button>
          <button type="button" data-open="messages">Messages</button>
          <button type="button" data-open="contacts">Contacts</button>
        </div>
      </div>`;
    }
    paint();
    win.addEventListener('click', e => {
      const nav = e.target.closest('[data-ft]');
      if (nav && win.contains(nav) && !nav.dataset.ftAct) {
        clearTimer();
        ftContact = nav.dataset.ft;
        ftPhase = 'idle';
        paint();
        return;
      }
      const act = e.target.closest('[data-ft-act]');
      if (!act || !win.contains(act)) return;
      const a = act.dataset.ftAct;
      if (a === 'call') {
        clearTimer();
        ftPhase = 'connecting';
        paint();
        timer = setTimeout(() => { ftPhase = 'missed'; paint(); }, 1600);
      } else if (a === 'end' || a === 'idle') {
        clearTimer();
        ftPhase = 'idle';
        paint();
      }
    });
  }

  function bindAppStore(win) {
    const main = win.querySelector('#asMain');
    function featured() {
      return PROJECTS.filter(p => p.demo || /Completed|Feature-complete|Portfolio complete/i.test(p.status)).slice(0, 4);
    }
    function paint() {
      win.querySelectorAll('[data-as-tab]').forEach(b => b.classList.toggle('on', b.dataset.asTab === storeTab));
      if (!main) return;
      if (storeTab === 'today') {
        const hero = PROJECTS[0];
        const rest = featured().slice(1);
        main.innerHTML = `<button type="button" class="as-hero" data-project="${hero.id}">
            <span class="as-hero-art" style="background:${PHOTO_ART[hero.id] || '#1d1d1f'}"></span>
            <div class="as-hero-copy">
              <p class="as-kicker">App of the Day</p>
              <h2>${esc(hero.title)}</h2>
              <p>${esc(hero.desc)}</p>
              <span class="as-get">GET</span>
            </div>
          </button>
          <p class="as-sec">Also worth a look</p>
          <div class="as-rows">${rest.map(storeRow).join('')}</div>`;
        return;
      }
      if (storeTab === 'apps') {
        main.innerHTML = `<p class="as-sec">Nehang’s apps</p>
          <div class="as-rows">${PROJECTS.map(storeRow).join('')}</div>`;
        return;
      }
      main.innerHTML = `<label class="as-search-lab">Search the catalog
          <input class="as-search" id="asSearch" type="search" placeholder="Games, apps, and more" autocomplete="off"/>
        </label>
        <div class="as-rows" id="asSearchRows">${PROJECTS.map(storeRow).join('')}</div>`;
    }
    function storeRow(p) {
      return `<div class="as-row">
        <span class="as-ico" style="background:${PHOTO_ART[p.id] || '#3a3a3c'}">${esc(p.title.slice(0,1))}</span>
        <div class="as-row-copy">
          <b>${esc(p.title)}</b>
          <em>${esc(p.status)} · ${esc(p.tags.slice(0,3).join(' · '))}</em>
        </div>
        <button type="button" class="as-get" data-project="${p.id}">GET</button>
      </div>`;
    }
    paint();
    win.addEventListener('click', e => {
      const tab = e.target.closest('[data-as-tab]');
      if (tab && win.contains(tab)) {
        storeTab = tab.dataset.asTab;
        paint();
      }
    });
    win.addEventListener('input', e => {
      if (e.target.id !== 'asSearch') return;
      const q = e.target.value.trim().toLowerCase();
      const rows = win.querySelector('#asSearchRows');
      if (!rows) return;
      const list = PROJECTS.filter(p => !q || p.title.toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q)) || p.desc.toLowerCase().includes(q));
      rows.innerHTML = list.map(storeRow).join('') || '<p class="as-empty">No apps match that search.</p>';
    });
  }

  function bindContacts(win) {
    const list = win.querySelector('#ctList');
    const detail = win.querySelector('#ctDetail');
    const search = win.querySelector('#ctSearch');
    function filtered() {
      const q = (search?.value || '').trim().toLowerCase();
      return CONTACTS.filter(c => !q || c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q) || c.company.toLowerCase().includes(q));
    }
    function paint() {
      const items = filtered();
      if (!items.find(c => c.id === contactsSel) && items[0]) contactsSel = items[0].id;
      if (list) {
        list.innerHTML = items.map(c => `<button type="button" class="ct-item${c.id===contactsSel?' on':''}" data-ct="${c.id}">
          <span class="ct-ava" style="background:${c.color}">${esc(initials(c.name))}</span>
          <span><b>${esc(c.name)}</b><em>${esc(c.role)}</em></span>
        </button>`).join('') || '<p class="ct-empty">No contacts</p>';
      }
      const c = CONTACTS.find(x => x.id === contactsSel);
      if (!detail || !c) return;
      detail.innerHTML = `<div class="ct-card">
        <span class="ct-ava xl" style="background:${c.color}">${esc(initials(c.name))}</span>
        <h2>${esc(c.name)}</h2>
        <p class="ct-role">${esc(c.role)}</p>
        ${c.me ? '<p class="ct-me">Me</p>' : ''}
        <dl>
          <div><dt>Email</dt><dd><button type="button" class="ct-link" data-ct-copy="${esc(c.email)}">${esc(c.email)}</button></dd></div>
          <div><dt>Location</dt><dd>${esc(c.phone)}</dd></div>
          <div><dt>Company</dt><dd>${esc(c.company)}</dd></div>
          <div><dt>Note</dt><dd>${esc(c.note)}</dd></div>
        </dl>
        <div class="ct-acts">
          ${c.links.map(l => l.safari
            ? `<button type="button" data-safari="${esc(l.safari)}">${esc(l.label)}</button>`
            : `<button type="button" data-open="${esc(l.open)}">${esc(l.label)}</button>`).join('')}
        </div>
      </div>`;
    }
    paint();
    win.addEventListener('click', e => {
      const item = e.target.closest('[data-ct]');
      if (item && win.contains(item)) {
        contactsSel = item.dataset.ct;
        paint();
        return;
      }
      const copy = e.target.closest('[data-ct-copy]');
      if (copy && win.contains(copy)) {
        navigator.clipboard.writeText(copy.dataset.ctCopy).then(() => toast('Email copied')).catch(() => toast(copy.dataset.ctCopy));
      }
    });
    search?.addEventListener('input', paint);
  }

  /* Launchpad */
  const LP_APPS = [
    { name:'Finder', open:'finder', icon:'finder' },
    { name:'Safari', open:'safari', icon:'safari' },
    { name:'Mail', open:'contact', icon:'mail' },
    { name:'Messages', open:'messages', icon:'messages' },
    { name:'Notes', open:'notes', icon:'notes' },
    { name:'Calendar', open:'calendar', icon:'calendar' },
    { name:'Photos', open:'photos', icon:'photos' },
    { name:'Maps', open:'maps', icon:'maps' },
    { name:'FaceTime', open:'facetime', icon:'facetime' },
    { name:'Contacts', open:'contacts', icon:'contacts' },
    { name:'Preview', open:'resume', icon:'preview' },
    { name:'Music', open:'music', icon:'music' },
    { name:'App Store', open:'appstore', icon:'appstore' },
    { name:'Terminal', open:'terminal', icon:'terminal' },
    { name:'Settings', open:'settings', icon:'settings' },
    { name:'GitHub', safari:'https://github.com/NehangPatel23', icon:'github' },
    { name:'LinkedIn', safari:'https://www.linkedin.com/in/nehangpatel/', icon:'linkedin' },
    { name:'Projects', open:'projects', icon:'folder' }
  ];

  function toggleLaunchpad() {
    const lp = document.getElementById('launchpad');
    if (!lp.hidden) { closeLaunchpad(); return; }
    closeMenus();
    renderLaunchpad('');
    lp.hidden = false;
    document.getElementById('lpSearch').value = '';
    document.getElementById('lpSearch').focus();
  }
  function closeLaunchpad() {
    const lp = document.getElementById('launchpad');
    if (lp) lp.hidden = true;
  }
  function renderLaunchpad(q) {
    const grid = document.getElementById('lpGrid');
    const items = LP_APPS.filter(a => a.name.toLowerCase().includes((q||'').toLowerCase()));
    grid.innerHTML = items.map(a =>
      `<button class="lp-app" ${a.safari ? `data-safari="${a.safari}"` : `data-open="${a.open}"`}>${ico(a.icon)}<span>${a.name}</span></button>`
    ).join('');
  }

  const lpEl = document.getElementById('launchpad');
  if (lpEl) {
    lpEl.addEventListener('click', e => {
      if (e.target.closest('.lp-app') || e.target.closest('.lp-search')) return;
      closeLaunchpad();
    });
  }

  /* Desktop layout — drag + persist */
  const DESK_IDS = () => [...document.querySelectorAll('[data-desk-id]')];

  function deskStoreKey() {
    return 'nehang-desk-v10-mac';
  }
  function loadDeskLayout() {
    try { return JSON.parse(localStorage.getItem(deskStoreKey()) || '{}') || {}; }
    catch (_) { return {}; }
  }
  function saveDeskLayout() {
    const stage = document.querySelector('.stage');
    if (!stage) return;
    const sr = stage.getBoundingClientRect();
    const map = {};
    DESK_IDS().forEach(el => {
      if (!el.classList.contains('loose')) return;
      const r = el.getBoundingClientRect();
      map[el.dataset.deskId] = {
        left: Math.round(r.left - sr.left),
        top: Math.round(r.top - sr.top),
        width: Math.round(el.classList.contains('sticky') ? el.offsetWidth : r.width),
        height: el.classList.contains('sticky') ? Math.round(el.offsetHeight) : undefined,
        pinned: el.dataset.pinned === '1'
      };
    });
    try { localStorage.setItem(deskStoreKey(), JSON.stringify(map)); } catch (_) {}
  }
  function clampDesk(el, left, top) {
    const stage = document.querySelector('.stage');
    const maxL = Math.max(0, stage.clientWidth - el.offsetWidth);
    const maxT = Math.max(0, stage.clientHeight - el.offsetHeight);
    return {
      left: Math.min(maxL, Math.max(0, left)),
      top: Math.min(maxT, Math.max(0, top))
    };
  }
  function floatOnStage(el, left, top, width, height) {
    const stage = document.querySelector('.stage');
    if (el.parentElement !== stage) {
      if (width && !el.classList.contains('dicon')) el.style.width = Math.round(width) + 'px';
      if (height && el.classList.contains('sticky')) el.style.height = Math.round(height) + 'px';
      el.classList.add('loose');
      el.style.position = 'absolute';
      el.style.right = 'auto';
      el.style.margin = '0';
      stage.appendChild(el);
    } else {
      el.classList.add('loose');
      el.style.position = 'absolute';
      if (width && !el.classList.contains('dicon')) el.style.width = Math.round(width) + 'px';
      if (height && el.classList.contains('sticky')) el.style.height = Math.round(height) + 'px';
    }
    const c = clampDesk(el, left, top);
    el.style.left = c.left + 'px';
    el.style.top = c.top + 'px';
  }
  function setStickyPinned(el, on) {
    if (!el) return;
    el.dataset.pinned = on ? '1' : '';
    el.classList.toggle('pinned', !!on);
    const pin = el.querySelector('.pin');
    if (pin) {
      pin.setAttribute('aria-pressed', on ? 'true' : 'false');
      pin.title = on ? 'Unpin' : 'Pin in place';
      pin.setAttribute('aria-label', pin.title);
    }
  }
  function composeDeskLayout() {
    const stage = document.querySelector('.stage');
    const w = stage.clientWidth;
    const h = stage.clientHeight;
    const pad = 22, top = 18, gap = 12;
    const heroW = 308;
    const pair = w < 1180 ? 140 : 152;
    const clusterW = pair * 2 + gap;
    const right = Math.max(pad + heroW + 160, w - pad - clusterW);
    const iconW = 86, iconH = 108, gx = 18, rowGap = 28;
    const layout = {
      hero: { left: pad, top, width: heroW },
      weather: { left: right, top, width: pair },
      cal: { left: right + pair + gap, top, width: pair },
      clocks: { left: right, top: top + pair + gap, width: clusterW },
      coffee: { left: right, top: top + pair + gap + 156 + gap, width: clusterW }
    };
    const openL = pad + heroW + 36;
    const openR = right - 28;
    const clampSticky = (left, topY, width) => ({
      left: Math.max(pad, Math.min(openR - width, left)),
      top: Math.max(top, Math.min(h - 140, topY)),
      width
    });
    /* Default scatter matched to the curated first-load desktop */
    layout['sticky-yellow'] = clampSticky(pad + 16, Math.round(h * 0.42), 198);
    layout['sticky-peach'] = clampSticky(Math.round(w * 0.04), Math.round(h * 0.70), 200);
    layout['sticky-mint'] = clampSticky(Math.round(w * 0.17), Math.round(h * 0.52), 188);
    layout['sticky-sky'] = clampSticky(Math.round(w * 0.30), Math.round(h * 0.62), 204);
    layout['sticky-pink'] = clampSticky(Math.round(w * 0.45), Math.round(h * 0.48), 218);
    layout['sticky-lilac'] = clampSticky(Math.round(w * 0.58), Math.round(h * 0.72), 210);

    /* Center cluster: folders → resume/mail → readme/stack */
    const folders = ['icon-projects', 'icon-experience', 'icon-education'];
    const folderW = folders.length * iconW + (folders.length - 1) * gx;
    const roomL = openL;
    const roomR = Math.max(roomL + folderW, openR - iconW - 16);
    const spare = roomR - roomL - folderW;
    const ix = spare > 0 ? Math.round(roomL + spare * 0.42) : roomL;
    const y0 = top + 6;
    folders.forEach((id, i) => {
      layout[id] = { left: ix + i * (iconW + gx), top: y0 };
    });
    const docsY = y0 + iconH + rowGap;
    layout['icon-resume'] = { left: ix, top: docsY };
    layout['icon-mail'] = { left: ix + iconW + gx, top: docsY };
    const mdY = docsY + iconH + rowGap;
    layout['icon-readme'] = { left: ix, top: mdY };
    layout['icon-stack'] = { left: ix + iconW + gx, top: mdY };

    /* Right icon column (just left of widgets): screenshot + extras */
    const rx = Math.min(openR - iconW, ix + folderW + 28);
    layout['icon-doodle'] = { left: rx, top: y0 };
    layout['icon-donotopen'] = { left: rx, top: mdY };
    layout['icon-todo'] = { left: rx, top: mdY + iconH + rowGap };
    layout['icon-secrets'] = { left: rx, top: mdY + (iconH + rowGap) * 2 };
    return layout;
  }
  function tidyDeskShells() {
    document.querySelectorAll('.wid-pair').forEach(el => {
      el.style.display = el.childElementCount ? '' : 'none';
    });
    document.querySelectorAll('.col-left, .col-right, .desk-icons').forEach(el => {
      el.style.pointerEvents = el.childElementCount ? '' : 'none';
    });
  }
  function pinRightWidgets() {
    const stack = document.getElementById('widgetStack');
    if (!stack) return;
    const pair = stack.querySelector('.wid-pair');
    const cal = document.querySelector('.w-cal');
    const weather = document.querySelector('.w-weather');
    const clocks = document.querySelector('.clocks');
    const coffee = document.querySelector('.coffee');
    const pin = el => {
      if (!el) return;
      el.classList.remove('loose');
      el.removeAttribute('data-drag');
      el.style.left = '';
      el.style.top = '';
      el.style.right = '';
      el.style.position = '';
      el.style.width = '';
      el.style.margin = '';
      delete el.dataset.dragged;
    };
    pin(cal); pin(weather); pin(clocks); pin(coffee);
    if (pair) {
      if (cal && cal.parentElement !== pair) pair.appendChild(cal);
      if (weather && weather.parentElement !== pair) pair.appendChild(weather);
    }
    if (clocks && clocks.parentElement !== stack) {
      if (coffee && coffee.parentElement === stack) stack.insertBefore(clocks, coffee);
      else stack.appendChild(clocks);
    }
    if (coffee && coffee.parentElement !== stack) stack.appendChild(coffee);
  }

  function restoreDeskLayout() {
    const stage = document.querySelector('.stage');
    if (!stage || window.innerWidth < 860) return;
    pinRightWidgets();
    const saved = loadDeskLayout();
    const fresh = !Object.keys(saved).length;
    const base = composeDeskLayout();
    DESK_IDS().forEach(el => {
      let pos = saved[el.dataset.deskId] || base[el.dataset.deskId];
      if (!pos && el.dataset.restored) {
        const anchor = base['icon-stack'] || base['icon-readme'] || { left: 40, top: 180 };
        const idx = [...document.querySelectorAll('.dicon[data-restored]')].indexOf(el);
        pos = { left: anchor.left + (Math.max(0, idx) + 1) * 108, top: anchor.top };
      }
      if (pos) {
        floatOnStage(el, pos.left, pos.top, pos.width, pos.height);
        if (el.classList.contains('sticky')) setStickyPinned(el, !!pos.pinned);
      }
    });
    if (fresh) {
      const hero = document.querySelector('.hero-card');
      const yellow = document.querySelector('[data-desk-id="sticky-yellow"]');
      if (hero && yellow) {
        const sr = stage.getBoundingClientRect();
        const hr = hero.getBoundingClientRect();
        floatOnStage(yellow, 38, hr.bottom - sr.top + 28, 198);
      }
      const clocks = document.querySelector('[data-desk-id="clocks"]');
      const coffee = document.querySelector('[data-desk-id="coffee"]');
      if (clocks && coffee && !clocks.closest('.col-right') && !coffee.closest('.col-right')) {
        floatOnStage(coffee, parseFloat(clocks.style.left) || 0, (parseFloat(clocks.style.top) || 0) + clocks.offsetHeight + 12, clocks.offsetWidth);
      }
    }
    tidyDeskShells();
    if (fresh) saveDeskLayout();
  }

  function enableDrag() {
    const stage = document.querySelector('.stage');
    document.addEventListener('mousedown', ev => {
      if (ev.button !== 0) return;
      if (!document.getElementById('lock').classList.contains('hidden')) return;
      const el = ev.target.closest('[data-desk-id], [data-drag], .dicon');
      if (!el || ev.target.closest('.hero-cta, .hero-meta, a, input, textarea, .window, .dock, .menubar, .pin, .sticky-resize')) return;
      if (el.closest('#widgetStack, .col-right')) return;
      if (el.classList.contains('dicon') && ev.detail === 2) return;
      if (el.classList.contains('sticky') && el.dataset.pinned === '1') return;
      const canFileDrop = el.classList.contains('dicon') && !!el.dataset.file;
      const sr = () => stage.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      const ox = ev.clientX - r.left, oy = ev.clientY - r.top;
      const startX = ev.clientX, startY = ev.clientY;
      const origin = { left: r.left - sr().left, top: r.top - sr().top };
      let moved = false;
      function detach() {
        const now = sr();
        const cur = el.getBoundingClientRect();
        floatOnStage(el, cur.left - now.left, cur.top - now.top, cur.width);
        tidyDeskShells();
      }
      function move(e2) {
        if (!moved && Math.hypot(e2.clientX - startX, e2.clientY - startY) < 6) return;
        if (!moved) {
          detach();
          if (canFileDrop) el.style.pointerEvents = 'none';
        }
        moved = true;
        const now = sr();
        const c = clampDesk(el, e2.clientX - now.left - ox, e2.clientY - now.top - oy);
        el.style.left = c.left + 'px';
        el.style.top = c.top + 'px';
        el.style.right = 'auto';
        if (canFileDrop) fileDragHover(e2.clientX, e2.clientY);
      }
      function up(e2) {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
        el.style.pointerEvents = '';
        const hover = canFileDrop && moved ? fileDragHover(e2.clientX, e2.clientY) : { trash: null, tray: null };
        clearFileDragHover();
        if (hover.trash) {
          moveFileToTrash(deskMeta(el));
          armIgnoreTrashClick();
          const swallow = e => { e.preventDefault(); e.stopPropagation(); el.removeEventListener('click', swallow, true); };
          el.addEventListener('click', swallow, true);
          return;
        }
        if (hover.tray) {
          floatOnStage(el, origin.left, origin.top);
          addToNookTray(deskMeta(el));
          armIgnoreNookClick();
          const swallow = e => { e.preventDefault(); e.stopPropagation(); el.removeEventListener('click', swallow, true); };
          el.addEventListener('click', swallow, true);
          return;
        }
        if (!moved) return;
        el.dataset.dragged = '1';
        saveDeskLayout();
        const swallow = e => { e.preventDefault(); e.stopPropagation(); el.removeEventListener('click', swallow, true); };
        el.addEventListener('click', swallow, true);
      }
      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', up);
    });
  }

  function enableStickyResize() {
    const stage = document.querySelector('.stage');
    document.addEventListener('mousedown', ev => {
      if (ev.button !== 0) return;
      if (!document.getElementById('lock').classList.contains('hidden')) return;
      const handle = ev.target.closest('.sticky-resize');
      if (!handle) return;
      ev.preventDefault();
      ev.stopPropagation();
      const el = handle.closest('.sticky');
      if (!el || !stage) return;
      const startW = el.offsetWidth;
      const startH = el.offsetHeight;
      const startX = ev.clientX;
      const startY = ev.clientY;
      const minW = 140, minH = 88, maxW = 380, maxH = 340;
      el.classList.add('resizing');
      function move(e2) {
        const w = Math.min(maxW, Math.max(minW, startW + (e2.clientX - startX)));
        const h = Math.min(maxH, Math.max(minH, startH + (e2.clientY - startY)));
        el.style.width = Math.round(w) + 'px';
        el.style.height = Math.round(h) + 'px';
        const left = parseFloat(el.style.left) || 0;
        const top = parseFloat(el.style.top) || 0;
        const c = clampDesk(el, left, top);
        el.style.left = c.left + 'px';
        el.style.top = c.top + 'px';
      }
      function up() {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
        el.classList.remove('resizing');
        saveDeskLayout();
      }
      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', up);
    });
  }

  /* terminal */
  function initTerminal(win) {
    const body = win.querySelector('#termBody');
    const history = [];
    let hi = 0;
    let input = null;

    function scroll() {
      const pane = body.parentElement;
      if (pane) pane.scrollTop = pane.scrollHeight;
    }
    function promptLine() {
      const line = document.createElement('div');
      line.className = 'term-line term-in';
      line.innerHTML = `<span class="prompt">nehang@usc ~ %</span> `;
      input = document.createElement('input');
      input.autocomplete = 'off';
      input.spellcheck = false;
      line.appendChild(input);
      body.appendChild(line);
      input.addEventListener('keydown', onKey);
      input.focus();
      scroll();
    }
    function freezeInput(cmd) {
      const line = input?.closest('.term-line');
      if (!line) return;
      input.remove();
      line.classList.remove('term-in');
      const typed = document.createElement('span');
      typed.textContent = cmd;
      line.appendChild(typed);
      input = null;
    }
    function print(html) {
      const d = document.createElement('div');
      d.className = 'term-line';
      d.innerHTML = html;
      body.appendChild(d);
      scroll();
    }
    function run(raw) {
      const c = raw.trim();
      const [a, ...rest] = c.split(/\s+/);
      const arg = rest.join(' ');
      if (a === 'clear') {
        if (c) { history.push(c); hi = history.length; }
        body.innerHTML = '';
        promptLine();
        return;
      }
      freezeInput(raw);
      if (c) {
        history.push(c); hi = history.length;
        if (a === 'help') print('Commands: help, whoami, ls, cat, open, neofetch, clear, contact, messages, resume');
        else if (a === 'whoami') print('Nehang Patel — software engineer · MS CS @ USC Viterbi');
        else if (a === 'ls') print('About  Projects  Experience  Education  Resume.pdf  README.md  Stack.md');
        else if (a === 'cat') {
          if (/stack/i.test(arg)) print(SKILLS.join('  '));
          else if (/readme/i.test(arg)) print('Nehang Patel — MS CS @ USC Viterbi. Open to internships and new-grad SWE roles. Los Angeles.');
          else if (/about/i.test(arg)) print('Engineer at heart, builder by nature. Open to New Grad roles.');
          else print('usage: cat about.txt | cat readme.md | cat stack.md');
        }
        else if (a === 'neofetch') print('NehangOS 2026.08<br>Host: USC Viterbi<br>Shell: zsh<br>Stack: Python, TypeScript, React, Next.js, Flutter, Go<br>Uptime: 5+ years coding');
        else if (a === 'open') {
          if (/project/i.test(arg)) openApp('projects');
          else if (/resume/i.test(arg)) openApp('resume');
          else if (/about/i.test(arg)) openApp('about');
          else if (/stack/i.test(arg)) openApp('stack');
          else if (/readme/i.test(arg)) openApp('readme');
          else if (/mail|contact/i.test(arg)) openApp('contact');
          else if (/message/i.test(arg)) openApp('messages');
          else if (/trash/i.test(arg)) openApp('trash');
          else print('open: try open projects | open resume | open stack | open trash');
        } else if (a === 'contact') openApp('contact');
        else if (a === 'messages') openApp('messages');
        else if (a === 'resume') openApp('resume');
        else print(`zsh: command not found: ${a}`);
      }
      promptLine();
    }
    function onKey(e) {
      if (e.key === 'Enter') { e.preventDefault(); run(input.value); }
      if (e.key === 'ArrowUp') {
        if (hi > 0) { hi--; input.value = history[hi] || ''; e.preventDefault(); }
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (hi < history.length) hi++;
        input.value = hi < history.length ? history[hi] : '';
      }
    }
    promptLine();
    win.addEventListener('mousedown', () => setTimeout(() => input?.focus(), 0));
  }

  function bindContact(win) {
    const boxes = {
      inbox: [
        {
          id:'t-recruiter', unread:true, from:'Priya Raman', date:'Today', count:3,
          subject:'Internship / new-grad chat?',
          preview:'Tuesday works — I’ll send a calendar hold for 2:30 PT.',
          messages:[
            { from:'Priya Raman', fromMail:'priya@northstar.example', to:MAIL_ADDR, date:'Today, 9:14 AM',
              body:`<p>Hi Nehang,</p><p>I found your portfolio and GitHub — full-stack plus the teaching background is an unusual mix. We’re hiring internships and new-grad SWE (TypeScript, Python, a bit of Go).</p><p>Would you have 20 minutes next week?</p><p>— Priya Raman<br>Talent, Northstar</p>` },
            { from:'Nehang Patel', fromMail:MAIL_ADDR, to:'priya@northstar.example', date:'Today, 11:02 AM',
              body:`<p>Hi Priya,</p><p>Thanks for reaching out. I’m an MS CS student at USC Viterbi (previously BS CS at Cincinnati) and I’m open to New Grad roles and new-grad SWE conversations.</p><p>Tuesday or Thursday afternoon PT works well.</p><p>Best,<br>Nehang</p>` },
            { from:'Priya Raman', fromMail:'priya@northstar.example', to:MAIL_ADDR, date:'Today, 2:40 PM',
              body:`<p>Tuesday at 2:30 PT is perfect. I’ll send a calendar hold.</p><p>Looking forward to it.<br>— Priya</p>` }
          ]
        },
        {
          id:'t-grids', unread:true, from:'GRIDS @ USC', date:'Yesterday', count:2,
          subject:'Fall 2026 kickoff next week',
          preview:'Room confirmed: RTH 115, Thursday 6pm. Can you send a 5-line bio?',
          messages:[
            { from:'GRIDS @ USC', fromMail:'grids@usc.edu', to:MAIL_ADDR, date:'Yesterday, 4:05 PM',
              body:`<p>Hi Nehang,</p><p>Welcome to the year as President. Kickoff is next week: intro, recruiting, and a short demo night. We’ll send a room once Viterbi confirms.</p><p>Could you also share a 5-line bio for the flyer?</p><p>See you there,<br>GRIDS exec</p>` },
            { from:'Nehang Patel', fromMail:MAIL_ADDR, to:'grids@usc.edu', date:'Yesterday, 6:22 PM',
              body:`<p>Yes — RTH whenever it’s booked is fine.</p><p>Bio: Nehang Patel is an MS CS student at USC Viterbi. He builds full-stack products, data pipelines, and AI-backed tools, and previously taught design thinking to 1,500+ students at Cincinnati. He currently serves as President of GRIDS @ USC.</p><p>— Nehang</p>` }
          ]
        },
        {
          id:'t-viterbi', unread:false, from:'Viterbi Career Connections', date:'Fri', count:2,
          subject:'Roles that match your profile',
          preview:'Three listings in the thread. Reply if you want a referral intro.',
          messages:[
            { from:'Viterbi Career Connections', fromMail:'careers@viterbi.usc.edu', to:MAIL_ADDR, date:'Fri, 10:18 AM',
              body:`<p>Hi Nehang,</p><p>Based on your resume (Python, TypeScript, Go, teaching 1.5k+ students), here are a few internship and new-grad listings that look like a fit:</p><p>1. Full-stack intern — TypeScript / Postgres<br>2. Data platform intern — Python pipelines<br>3. New-grad SWE — tools and internal products</p><p>Reply in this thread if you want a referral intro.</p><p>— Viterbi Career Connections</p>` },
            { from:'Nehang Patel', fromMail:MAIL_ADDR, to:'careers@viterbi.usc.edu', date:'Fri, 1:41 PM',
              body:`<p>Thanks — I’ll take the intro for #1 and #3. Resume is current as of August 2026.</p><p>Nehang</p>` }
          ]
        },
        {
          id:'t-fintrackr', unread:false, from:'FinTrackr', date:'Aug 21', count:2,
          subject:'Retro notes — expense tracker',
          preview:'Demo went well. Tax estimate flow still needs a pass before we freeze.',
          messages:[
            { from:'Sam Ortiz', fromMail:'sam@fintrackr.dev', to:MAIL_ADDR, date:'Aug 21, 7:18 PM',
              body:`<p>Hey Nehang,</p><p>Good retro. The three of us shipped expense tracking and the debt-payoff planner. Tax estimate is the last gap before we freeze the sprint.</p><p>Want to own that flow or should I?</p>` },
            { from:'Nehang Patel', fromMail:MAIL_ADDR, to:'sam@fintrackr.dev', date:'Aug 21, 8:02 PM',
              body:`<p>I’ll take tax estimate and the empty states. You take the payoff chart labels if you still have time.</p><p>— N</p>` }
          ]
        },
        {
          id:'t-hacksc', unread:false, from:'Alex Kim', date:'Aug 18', count:2,
          subject:'Algorithms study group — this Sunday?',
          preview:'RTH lobby at 2. I’ll bring the CLRS notes from last week.',
          messages:[
            { from:'Alex Kim', fromMail:'alkim@usc.edu', to:MAIL_ADDR, date:'Aug 18, 3:11 PM',
              body:`<p>Nehang — a few of us from Analysis of Algorithms are meeting Sunday at 2 in RTH lobby. Graph cuts + a couple of practice proofs.</p><p>You in?</p>` },
            { from:'Nehang Patel', fromMail:MAIL_ADDR, to:'alkim@usc.edu', date:'Aug 18, 4:40 PM',
              body:`<p>I’m in. I’ll bring the last problem set. See you at 2.</p>` }
          ]
        }
      ],
      sent: [
        {
          id:'t-sent1', unread:false, from:'Nehang Patel', date:'Today', count:1,
          subject:'Re: Internship / new-grad chat?',
          preview:'Tuesday or Thursday afternoon PT works well.',
          messages:[
            { from:'Nehang Patel', fromMail:MAIL_ADDR, to:'priya@northstar.example', date:'Today, 11:02 AM',
              body:`<p>Hi Priya,</p><p>Thanks for reaching out. I’m an MS CS student at USC Viterbi and I’m open to New Grad roles and new-grad SWE conversations. Tuesday or Thursday afternoon PT works.</p><p>Best,<br>Nehang</p>` }
          ]
        }
      ],
      drafts: [
        {
          id:'t-draft', unread:false, from:'Nehang Patel', date:'Thu', count:1,
          subject:'Internship — USC Viterbi',
          preview:'Draft: attaching resume and a couple of project links…',
          messages:[
            { from:'Nehang Patel', fromMail:MAIL_ADDR, to:'', date:'Thu, 7:12 PM',
              body:`<p>Hi,</p><p>I’m an MS CS student at USC Viterbi, previously BS CS at Cincinnati. Attaching my resume and a few project links.</p><p>This is still a draft — finish it from New Message if you want it to reach me for real.</p>` }
          ]
        }
      ],
      junk: [],
      trash: []
    };
    const labels = { inbox:'Inbox', sent:'Sent', drafts:'Drafts', junk:'Junk', trash:'Trash' };
    let box = 'inbox';
    let sel = boxes.inbox[0].id;
    let composing = true;
    let replySubject = 'Hello from the NehangOS desktop';
    let justSent = false;

    const side = win.querySelector('#mailSide');
    const list = win.querySelector('#mailList');
    const read = win.querySelector('#mailRead');
    const title = win.querySelector('.wtitle');

    function unreadCount() {
      return boxes.inbox.filter(m => m.unread).length;
    }
    function current() {
      return boxes[box].find(x => x.id === sel);
    }
    function renderSide() {
      const count = unreadCount();
      side.innerHTML = `<p class="mail-lab">Favorites</p>` +
        ['inbox','sent','drafts','junk','trash'].map(id => {
          const n = id === 'inbox' ? count : boxes[id].length;
          const badge = n ? `<span class="mail-n">${n}</span>` : '';
          return `<button type="button" data-mbox="${id}" class="${id===box&&!composing?'on':''}">${labels[id]}${badge}</button>`;
        }).join('');
    }
    function renderList() {
      const items = boxes[box];
      list.setAttribute('role', 'listbox');
      list.setAttribute('aria-label', labels[box]);
      if (!items.length) {
        list.innerHTML = `<p class="mail-empty">No Messages</p>`;
        return;
      }
      list.innerHTML = items.map(m => `
        <button type="button" role="option" aria-selected="${m.id===sel&&!composing}" class="mail-item${m.id===sel&&!composing?' on':''}${m.unread?' unread':''}" data-mid="${m.id}">
          <span class="mail-from">${esc(m.from)}</span>
          <span class="mail-date">${justSent && m.live && m.id===sel ? 'Just now' : esc(m.date)}</span>
          <span class="mail-sub">${esc(m.subject)}${m.count>1?` <em>${m.count}</em>`:''}</span>
          <span class="mail-prev">${esc(m.preview)}</span>
        </button>`).join('');
    }
    function renderRead() {
      if (composing) {
        const sub = replySubject || 'Hello from the NehangOS desktop';
        const key = mailKey();
        read.innerHTML = `<form class="mail-compose" id="mailCompose">
          <div class="mail-chead">
            <p><span>To:</span> <button type="button" class="mail-addr" id="copyMail">${MAIL_ADDR}</button></p>
            <label><span>From:</span> <input type="email" name="email" placeholder="Your email" required autocomplete="email"/></label>
            <label><span>Name:</span> <input type="text" name="name" placeholder="Your name" required autocomplete="name"/></label>
            <label><span>Subject:</span> <input name="subject" value="${esc(sub)}" required/></label>
          </div>
          <textarea name="message" required placeholder="Write a message…">Hi Nehang,</textarea>
          ${key ? '' : `<p class="mail-warn">Create a free <a href="https://app.web3forms.com" target="_blank" rel="noopener noreferrer">Web3Forms</a> account with ${esc(MAIL_ADDR)}. In the dashboard, copy the Access Key (a UUID), paste it below, then Send.</p>
            <label class="mail-keyrow"><span>Key</span> <input name="w3key" placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" autocomplete="off" spellcheck="false"/></label>`}
          <div class="mail-cfoot">
            <button class="mail-send" type="button" data-mail="send">Send</button>
            <button type="button" class="mail-cancel" data-mail="cancel">Cancel</button>
          </div>
        </form>`;
        return;
      }
      const thread = current();
      if (!thread) {
        read.innerHTML = `<div class="mail-blank"><p>No Conversation Selected</p></div>`;
        return;
      }
      const delivered = justSent && thread.live && box === 'sent';
      read.innerHTML = `<div class="mail-thread${delivered ? ' mail-thread-sent' : ''}" tabindex="0">
        ${delivered ? `<div class="mail-delivered">
          <span class="mail-sent-mark" aria-hidden="true">
            <svg viewBox="0 0 20 20" width="18" height="18"><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M4.2 10.4 8 14.1 15.8 5.8"/></svg>
          </span>
          <div class="mail-delivered-copy">
            <p class="mail-delivered-kicker">Sent</p>
            <h1>Message delivered</h1>
            <p>To Nehang Patel · ${esc(MAIL_ADDR)}</p>
          </div>
          <button type="button" class="mail-send" data-mail="compose">New Message</button>
        </div>` : ''}
        <h1 class="mail-thread-title">${esc(thread.subject)}</h1>
        <p class="mail-thread-meta">${thread.messages.length} ${thread.messages.length===1?'message':'messages'} in this thread</p>
        ${thread.messages.map((m,i) => `
          <article class="mail-msg${i===thread.messages.length-1?' latest':''}${thread.id.startsWith('t-out-')?' mail-msg-out':''}">
            <header>
              <span class="mail-ava" aria-hidden="true">${esc(initials(m.from))}</span>
              <div>
                <p class="mail-who"><b>${esc(m.from)}</b> <span>&lt;${esc(m.fromMail)}&gt;</span></p>
                <p class="mail-when">${esc(m.date)} · To: ${esc(m.to || MAIL_ADDR)}${thread.id.startsWith('t-out-') ? ' <span class="mail-sent-chip">Sent</span>' : ''}</p>
              </div>
            </header>
            <div class="mail-body">${m.body}</div>
          </article>`).join('')}
      </div>`;
    }
    function paint() {
      if (title) title.textContent = justSent ? 'Sent' : composing ? 'New Message' : labels[box];
      renderSide();
      renderList();
      renderRead();
    }
    function copyAddr() {
      navigator.clipboard.writeText(MAIL_ADDR).then(() => toast('Email copied')).catch(() => toast(MAIL_ADDR));
    }
    function sentWhen() {
      const d = new Date();
      const h = d.getHours();
      const h12 = h % 12 || 12;
      const min = String(d.getMinutes()).padStart(2, '0');
      return `Today, ${h12}:${min} ${h >= 12 ? 'PM' : 'AM'}`;
    }
    function bodyToHtml(text) {
      const parts = String(text).split(/\n+/).map(p => p.trim()).filter(Boolean);
      return (parts.length ? parts : ['']).map(p => `<p>${esc(p)}</p>`).join('');
    }
    function mailThread(id, unread, name, email, subject, message, when, listFrom) {
      const preview = message.replace(/\s+/g, ' ').slice(0, 90);
      return {
        id, unread, live: true, from: listFrom || name || email, date: 'Today', count: 1, subject, preview,
        messages: [{
          from: name || 'Me',
          fromMail: email,
          to: MAIL_ADDR,
          date: when,
          body: `${bodyToHtml(message)}<p>— ${esc(name)} &lt;${esc(email)}&gt;</p>`
        }]
      };
    }
    async function sendCompose(form) {
      const sendBtn = form.querySelector('.mail-send');
      if (sendBtn?.disabled) return;
      const data = Object.fromEntries(new FormData(form).entries());
      const key = WEB3FORMS_KEY || saveMailKey(data.w3key) || mailKey();
      if (!key) {
        toast('Paste the Web3Forms access key from your email, then Send.', 5600);
        form.querySelector('[name="w3key"]')?.focus();
        return;
      }
      if (!form.reportValidity()) return;
      const name = String(data.name || '').trim();
      const email = String(data.email || '').trim();
      const subject = String(data.subject || '').trim();
      const message = String(data.message || '').trim();
      if (sendBtn) { sendBtn.disabled = true; sendBtn.textContent = 'Sending…'; }
      try {
        await deliverPortfolioMail({
          name, email, subject, message, fromName: 'NehangOS Mail', key
        });
        const when = sentWhen();
        const stamp = Date.now();
        const incoming = mailThread('t-in-' + stamp, true, name, email, subject, message, when);
        const outgoing = mailThread('t-out-' + stamp, false, name, email, subject, message, when, 'Nehang Patel');
        boxes.inbox.unshift(incoming);
        boxes.sent.unshift(outgoing);
        box = 'sent';
        sel = outgoing.id;
        composing = false;
        justSent = true;
        paint();
        toast('Sent');
      } catch (err) {
        if (sendBtn) { sendBtn.disabled = false; sendBtn.textContent = 'Send'; }
        toast(err.message || 'Send failed', 5600);
      }
    }
    function selectAt(delta) {
      const items = boxes[box];
      if (!items.length) return;
      const i = Math.max(0, items.findIndex(m => m.id === sel));
      const next = items[Math.min(items.length-1, Math.max(0, i + delta))];
      sel = next.id;
      next.unread = false;
      composing = false;
      justSent = false;
      paint();
    }

    paint();
    const firstFrom = win.querySelector('.mail-compose input[name="email"]');
    if (firstFrom) firstFrom.focus();
    win.addEventListener('click', e => {
      const mbox = e.target.closest('[data-mbox]');
      const item = e.target.closest('[data-mid]');
      const act = e.target.closest('[data-mail]');
      if (e.target.closest('#copyMail') || e.target.closest('.mail-addr')) {
        e.preventDefault();
        e.stopPropagation();
        copyAddr();
        return;
      }
      if (mbox) {
        e.stopPropagation();
        box = mbox.dataset.mbox;
        composing = false;
        justSent = false;
        sel = boxes[box][0]?.id || '';
        paint();
        return;
      }
      if (item) {
        e.stopPropagation();
        composing = false;
        justSent = false;
        sel = item.dataset.mid;
        const msg = current();
        if (msg) msg.unread = false;
        paint();
        read.scrollTop = 0;
        return;
      }
      if (!act) return;
      e.stopPropagation();
      const a = act.dataset.mail;
      if (a === 'compose') {
        composing = true;
        justSent = false;
        replySubject = 'Hello from the NehangOS desktop';
        paint();
        const input = win.querySelector('.mail-compose input[name="email"]');
        if (input) input.focus();
      }
      if (a === 'send') {
        const form = act.closest('.mail-compose');
        if (form) sendCompose(form);
      }
      if (a === 'cancel') { composing = false; justSent = false; paint(); }
      if (a === 'get') toast('Updated just now');
      if (a === 'reply') {
        const m = current();
        composing = true;
        justSent = false;
        replySubject = m ? (m.subject.startsWith('Re:') ? m.subject : 'Re: ' + m.subject) : 'Hello from the NehangOS desktop';
        paint();
      }
    });
    win.addEventListener('submit', e => {
      e.preventDefault();
      e.stopPropagation();
    });
    win.addEventListener('keydown', e => {
      if (e.target.closest('input, textarea')) return;
      if (e.key === 'ArrowDown') { e.preventDefault(); selectAt(1); }
      if (e.key === 'ArrowUp') { e.preventDefault(); selectAt(-1); }
    });
  }

  function bindMessages(win) {
    const chats = [
      {
        id:'nehang', live:true, unread:false, name:'Nehang Patel', handle:MAIL_ADDR,
        service:'iMessage', color:'#30d158', date:'Now',
        preview:'Hey — drop a note here. It goes to my inbox.',
        bubbles:[
          { me:false, text:'Hey — drop a note here. It goes to my inbox.', time:'Now' }
        ]
      },
      {
        id:'priya', unread:true, name:'Priya Raman', handle:'priya@northstar.example',
        service:'iMessage', color:'#af52de', date:'Today',
        preview:'Tuesday at 2:30 PT is perfect.',
        bubbles:[
          { me:false, text:'Hi Nehang — I found your portfolio and GitHub. We’re hiring internships and new-grad SWE. 20 minutes next week?', time:'Today 9:14 AM' },
          { me:true, text:'Thanks for reaching out. I’m an MS CS student at USC Viterbi (previously BS CS at Cincinnati). Tuesday or Thursday afternoon PT works well.', time:'Today 11:02 AM' },
          { me:false, text:'Tuesday at 2:30 PT is perfect. I’ll send a calendar hold.', time:'Today 2:40 PM' }
        ]
      },
      {
        id:'grids', unread:true, name:'GRIDS @ USC', handle:'grids@usc.edu',
        service:'iMessage', color:'#007aff', date:'Yesterday',
        preview:'Room confirmed: RTH 115, Thursday 6pm.',
        bubbles:[
          { me:false, text:'Welcome to the year as President. Kickoff is next week — intro, recruiting, and a short demo night. Could you share a 5-line bio for the flyer?', time:'Yesterday 4:05 PM' },
          { me:true, text:'Yes — RTH whenever it’s booked is fine. Bio: Nehang Patel is an MS CS student at USC Viterbi. He builds full-stack products, data pipelines, and AI-backed tools, and previously taught design thinking to 1,500+ students at Cincinnati.', time:'Yesterday 6:22 PM' }
        ]
      },
      {
        id:'sam', unread:false, name:'Sam Ortiz', handle:'sam@fintrackr.dev',
        service:'iMessage', color:'#ff2d55', date:'Aug 21',
        preview:'I’ll take tax estimate and the empty states.',
        bubbles:[
          { me:false, text:'Good retro. The three of us shipped expense tracking and the debt-payoff planner. Tax estimate is the last gap — want to own that flow or should I?', time:'Aug 21 7:18 PM' },
          { me:true, text:'I’ll take tax estimate and the empty states. You take the payoff chart labels if you still have time.', time:'Aug 21 8:02 PM' }
        ]
      },
      {
        id:'alex', unread:false, name:'Alex Kim', handle:'alkim@usc.edu',
        service:'iMessage', color:'#ff9500', date:'Aug 18',
        preview:'I’m in. I’ll bring the last problem set.',
        bubbles:[
          { me:false, text:'A few of us from Analysis of Algorithms are meeting Sunday at 2 in RTH lobby. Graph cuts + a couple of practice proofs. You in?', time:'Aug 18 3:11 PM' },
          { me:true, text:'I’m in. I’ll bring the last problem set. See you at 2.', time:'Aug 18 4:40 PM' }
        ]
      }
    ];
    let sel = 'nehang';
    let query = '';
    let infoOpen = false;
    let attachFile = null;
    const list = win.querySelector('#imsgList');
    const head = win.querySelector('#imsgHead');
    const thread = win.querySelector('#imsgThread');
    const form = win.querySelector('#imsgCompose');
    const infoPane = win.querySelector('#imsgInfo');
    const fileInput = win.querySelector('#imsgFile');
    const sendBtn = win.querySelector('[data-imsg="send"]');
    const title = win.querySelector('.wtitle');

    function current() { return chats.find(c => c.id === sel); }
    function clockLabel() {
      const d = new Date();
      const h = d.getHours();
      const h12 = h % 12 || 12;
      const min = String(d.getMinutes()).padStart(2, '0');
      return `Today ${h12}:${min} ${h >= 12 ? 'PM' : 'AM'}`;
    }
    function paintList() {
      const items = chats.filter(c => {
        const q = query.trim().toLowerCase();
        if (!q) return true;
        return (c.name + ' ' + c.preview).toLowerCase().includes(q);
      });
      list.innerHTML = items.map(c => {
        return `<button type="button" role="option" aria-selected="${c.id===sel}" class="imsg-item${c.id===sel?' on':''}${c.unread?' unread':''}" data-imsg-id="${c.id}">
          <span class="imsg-ava" style="background:${c.color}">${esc(initials(c.name))}</span>
          <span class="imsg-item-copy">
            <span class="imsg-item-top"><b>${esc(c.name)}</b><em>${esc(c.date)}</em></span>
            <span class="imsg-item-prev">${esc(c.preview)}</span>
          </span>
        </button>`;
      }).join('') || `<p class="imsg-empty">No Results</p>`;
    }
    function paintHead() {
      const c = current();
      if (!c) { head.innerHTML = ''; return; }
      head.innerHTML = `<div class="imsg-head-person">
        <span class="imsg-ava lg" style="background:${c.color}">${esc(initials(c.name))}</span>
        <p><b>${esc(c.name)}</b><em class="imsg-svc">${esc(c.service)}</em></p>
      </div>
      <button type="button" class="imsg-info${infoOpen?' on':''}" data-imsg="info" title="Details" aria-label="Details">ⓘ</button>`;
    }
    function paintThread() {
      const c = current();
      if (!c) { thread.innerHTML = ''; return; }
      thread.innerHTML = c.bubbles.map((b, i) => {
        const delivered = c.live && b.me && b.delivered && i === c.bubbles.length - 1;
        return `<div class="imsg-row${b.me?' me':''}">
          ${b.me ? '' : `<span class="imsg-ava sm" style="background:${c.color}">${esc(initials(c.name))}</span>`}
          <div>
            ${b.file ? (b.url
              ? `<a class="imsg-file" href="${esc(b.url)}" target="_blank" rel="noopener noreferrer">${esc(b.file)}</a>`
              : `<p class="imsg-file">${esc(b.file)}</p>`) : ''}
            ${b.text ? `<p class="imsg-bubble">${esc(b.text)}</p>` : ''}
            ${delivered ? `<p class="imsg-status">Delivered</p>` : ''}
          </div>
        </div>`;
      }).join('');
      thread.scrollTop = thread.scrollHeight;
    }
    function paintInfo() {
      const c = current();
      if (!infoPane) return;
      infoPane.hidden = !infoOpen || !c;
      if (!c || !infoOpen) return;
      if (c.live) {
        infoPane.innerHTML = `<div class="imsg-card">
          <span class="imsg-ava xl" style="background:${c.color}">${esc(initials(c.name))}</span>
          <h2>Nehang Patel</h2>
          <p class="imsg-svc">iMessage</p>
          <p class="imsg-card-bio">MS CS at USC Viterbi. Previously BS CS at Cincinnati. Open to internships and new-grad SWE roles.</p>
          <dl>
            <div><dt>Email</dt><dd><button type="button" class="imsg-link" data-imsg="copy-mail">${esc(MAIL_ADDR)}</button></dd></div>
            <div><dt>School</dt><dd>USC Viterbi · Los Angeles</dd></div>
            <div><dt>Now</dt><dd>GRIDS President · since May 2026</dd></div>
          </dl>
          <div class="imsg-card-acts">
            <button type="button" data-open="contact">Mail</button>
            <button type="button" data-safari="https://github.com/NehangPatel23">GitHub</button>
            <button type="button" data-safari="https://www.linkedin.com/in/nehangpatel/">LinkedIn</button>
            <button type="button" data-open="resume">Resume</button>
          </div>
        </div>`;
      } else {
        infoPane.innerHTML = `<div class="imsg-card">
          <span class="imsg-ava xl" style="background:${c.color}">${esc(initials(c.name))}</span>
          <h2>${esc(c.name)}</h2>
          <p class="imsg-svc">${esc(c.service)}</p>
          <dl><div><dt>Address</dt><dd>${esc(c.handle)}</dd></div></dl>
        </div>`;
      }
    }
    function paintAttach() {
      const wrap = win.querySelector('#imsgAttach');
      if (!wrap) return;
      if (!attachFile) { wrap.hidden = true; wrap.innerHTML = ''; return; }
      wrap.hidden = false;
      wrap.innerHTML = `<span class="imsg-chip">${esc(attachFile.name)} <button type="button" data-imsg="unattach" aria-label="Remove attachment">×</button></span>`;
    }
    function paintCompose() {
      const c = current();
      form.hidden = !(c && c.live);
      if (title) title.textContent = c ? c.name : 'Messages';
      paintAttach();
      syncSend();
    }
    function syncSend() {
      const msg = form.querySelector('.imsg-input');
      sendBtn.classList.toggle('on', !!(msg && msg.value.trim()) || !!attachFile);
    }
    function paint() {
      paintList();
      paintHead();
      paintThread();
      paintInfo();
      paintCompose();
    }
    function selectChat(id) {
      const c = chats.find(x => x.id === id);
      if (!c) return;
      sel = id;
      c.unread = false;
      paint();
      if (c.live) form.querySelector('.imsg-input')?.focus();
    }
    async function sendImsg() {
      const c = current();
      if (!c?.live) { selectChat('nehang'); return; }
      const data = Object.fromEntries(new FormData(form).entries());
      const message = String(data.message || '').trim();
      const file = attachFile;
      if (!message && !file) return;
      sendBtn.disabled = true;
      try {
        let fileUrl = '';
        if (file) {
          toast('Uploading…');
          fileUrl = await uploadPublicFile(file);
        }
        const body = [
          message,
          fileUrl ? `Attachment (${file.name}): ${fileUrl}` : ''
        ].filter(Boolean).join('\n\n') || `Attachment: ${file.name}`;
        await deliverPortfolioMail({
          name: 'Nehang Patel',
          email: MAIL_ADDR,
          subject: 'iMessage from NehangOS',
          message: body,
          fromName: 'NehangOS Messages'
        });
        const when = clockLabel();
        c.bubbles.push({ me:true, text: message || '', file: file ? file.name : '', url: fileUrl, time:when, delivered:true });
        c.preview = (message || file.name).replace(/\s+/g, ' ').slice(0, 90);
        c.date = 'Just now';
        form.querySelector('.imsg-input').value = '';
        attachFile = null;
        if (fileInput) fileInput.value = '';
        paint();
        toast('Sent');
      } catch (err) {
        toast(err.message || 'Send failed', 5600);
      } finally {
        sendBtn.disabled = false;
        syncSend();
      }
    }

    paint();
    form.querySelector('.imsg-input')?.focus();
    list.addEventListener('click', e => {
      const item = e.target.closest('[data-imsg-id]');
      if (item) selectChat(item.dataset.imsgId);
    });
    win.querySelector('#imsgSearch').addEventListener('input', e => {
      query = e.target.value;
      paintList();
    });
    win.addEventListener('click', e => {
      const act = e.target.closest('[data-imsg]');
      if (!act) return;
      if (act.dataset.imsg === 'new') selectChat('nehang');
      if (act.dataset.imsg === 'send') sendImsg();
      if (act.dataset.imsg === 'info') { infoOpen = !infoOpen; paint(); }
      if (act.dataset.imsg === 'attach') fileInput?.click();
      if (act.dataset.imsg === 'unattach') {
        attachFile = null;
        if (fileInput) fileInput.value = '';
        paintAttach();
        syncSend();
      }
      if (act.dataset.imsg === 'copy-mail') {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(MAIL_ADDR).then(() => toast('Email copied')).catch(() => toast(MAIL_ADDR));
      }
    });
    fileInput?.addEventListener('change', () => {
      const f = fileInput.files?.[0] || null;
      if (f && f.size > 25 * 1024 * 1024) {
        toast('Keep attachments under 25 MB');
        fileInput.value = '';
        attachFile = null;
      } else attachFile = f;
      paintAttach();
      syncSend();
    });
    form.addEventListener('submit', e => { e.preventDefault(); sendImsg(); });
    form.querySelector('.imsg-input').addEventListener('input', syncSend);
    form.querySelector('.imsg-input').addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendImsg(); }
    });
  }

  /* spotlight */
  function openSpotlight() {
    closeMenus();
    const wrap = document.getElementById('spotlight');
    wrap.hidden = false;
    const input = document.getElementById('spotInput');
    input.value = '';
    renderSpot('');
    setTimeout(() => input.focus(), 0);
  }
  function renderSpot(q) {
    const items = [
      { label:'Finder', id:'finder', icon:'finder' },
      { label:'Safari', id:'safari', icon:'safari' },
      { label:'Mail', id:'contact', icon:'mail' },
      { label:'Messages', id:'messages', icon:'messages' },
      { label:'Notes', id:'notes', icon:'notes' },
      { label:'Calendar', id:'calendar', icon:'calendar' },
      { label:'Photos', id:'photos', icon:'photos' },
      { label:'Maps', id:'maps', icon:'maps' },
      { label:'FaceTime', id:'facetime', icon:'facetime' },
      { label:'Contacts', id:'contacts', icon:'contacts' },
      { label:'App Store', id:'appstore', icon:'appstore' },
      { label:'Preview', id:'resume', icon:'preview' },
      { label:'Stack.md', id:'stack', icon:'textedit' },
      { label:'README.md', id:'readme', icon:'textedit' },
      { label:'Secrets', id:'secrets', icon:'folder' },
      { label:'todo.txt', id:'todo', icon:'textedit' },
      { label:'do-not-open.txt', id:'donotopen', icon:'textedit' },
      { label:'passwords.txt', id:'passwords', icon:'textedit' },
      { label:'commit-messages.txt', id:'commits', icon:'textedit' },
      { label:'why-i-built-this.md', id:'why', icon:'textedit' },
      { label:'Mail.app', id:'mail-alias', icon:'mail' },
      { label:'Terminal', id:'terminal', icon:'terminal' },
      { label:'System Settings', id:'settings', icon:'settings' },
      ...PROJECTS.map(p => ({ label: p.title, id: p.id, icon:'folder' }))
    ].filter(i => i.label.toLowerCase().includes(q.toLowerCase()));
    document.getElementById('spotResults').innerHTML = items.slice(0,8).map((i,n) =>
      `<button class="spot-item${n===0?' active':''}" data-open="${i.id}">${ico(i.icon)}<span>${i.label}</span></button>`
    ).join('') || `<p class="spot-item">No results</p>`;
  }

  /* dock mag */
  function dockMag() {
    const dock = document.getElementById('dockInner');
    if (!dock) return;
    const apps = [...dock.querySelectorAll('.dapp')];
    dock.addEventListener('mousemove', e => {
      if (!prefs.dockMag || prefs.reduceMotion || window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
      const base = prefs.dockSize || 52;
      apps.forEach(a => {
        const icon = a.querySelector('.appico');
        if (!icon) return;
        const r = a.getBoundingClientRect();
        const dist = Math.abs(e.clientX - (r.left + r.width/2));
        const s = 1 + Math.max(0, 1 - dist/140) * 0.55;
        const iconBase = icon.classList.contains('ios') ? base * 0.76 : base - 2;
        a.style.width = (base * s) + 'px';
        a.style.height = (base * s) + 'px';
        icon.style.width = (iconBase * s) + 'px';
        icon.style.height = (iconBase * s) + 'px';
      });
    });
    dock.addEventListener('mouseleave', () => {
      apps.forEach(a => {
        a.style.width = ''; a.style.height = '';
        const d = a.querySelector('.appico');
        if (d) { d.style.width = ''; d.style.height = ''; }
      });
    });
  }

  function bootThenLock() {
    const boot = document.getElementById('boot');
    const lock = document.getElementById('lock');
    const skip = /(?:\?|&)skip(?:&|=|$)/.test(location.search) || location.hash === '#desktop';
    if (skip) {
      boot.classList.add('hidden');
      lock.classList.add('hidden');
      return;
    }
    const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    const t = reduce ? 200 : 1800;
    setTimeout(() => {
      boot.classList.add('hidden');
      lock.classList.remove('hidden');
    }, t);
  }

  function unlock() {
    document.getElementById('lock').classList.add('hidden');
  }

  function restart() {
    closeMenus();
    document.getElementById('lock').classList.add('hidden');
    document.getElementById('shutdown').classList.add('hidden');
    const boot = document.getElementById('boot');
    boot.classList.remove('hidden');
    const fill = boot.querySelector('.boot-fill');
    fill.style.animation = 'none';
    void fill.offsetWidth;
    fill.style.animation = '';
    bootThenLock();
  }

  /* clicks */
  document.addEventListener('click', e => {
    const external = e.target.closest('[data-external]');
    if (external) {
      e.preventDefault();
      openTopLevel(external.dataset.external);
      return;
    }
    const saf = e.target.closest('[data-safari]');
    const open = e.target.closest('[data-open]');
    const act = e.target.closest('[data-action]');
    const proj = e.target.closest('[data-project]');
    const file = e.target.closest('[data-file]');
    const a = e.target.closest('a[href]');

    if (e.target.closest('.sticky-resize')) return;
    const pinBtn = e.target.closest('.sticky .pin');
    if (pinBtn) {
      e.preventDefault();
      e.stopPropagation();
      closeMenus();
      const sticky = pinBtn.closest('.sticky');
      const on = sticky.dataset.pinned !== '1';
      setStickyPinned(sticky, on);
      saveDeskLayout();
      toast(on ? 'Pinned to desktop' : 'Unpinned — drag to move');
      return;
    }
    const stickyAct = e.target.closest('[data-sticky-act]');
    if (stickyAct) {
      e.preventDefault();
      const sticky = ctxSticky;
      closeMenus();
      if (sticky) {
        const pin = stickyAct.dataset.stickyAct === 'pin';
        setStickyPinned(sticky, pin);
        saveDeskLayout();
        toast(pin ? 'Pinned to desktop' : 'Unpinned — drag to move');
      }
      ctxSticky = null;
      return;
    }

    if (e.target.closest('#appleBtn')) {
      const m = document.getElementById('appleMenu');
      const was = m.hidden;
      closeMenus(); closeLaunchpad();
      m.hidden = !was;
      m.style.left = '8px';
      return;
    }
    if (e.target.closest('[data-menu]')) {
      const name = e.target.closest('[data-menu]').dataset.menu;
      const map = { file:'fileMenu', edit:'editMenu', view:'viewMenu', window:'windowMenu', help:'helpMenu' };
      const el = document.getElementById(map[name]);
      const r = e.target.getBoundingClientRect();
      const was = el.hidden;
      closeMenus();
      el.hidden = !was;
      el.style.left = r.left + 'px';
      return;
    }
    if (e.target.closest('#ccScrim')) { closeMenus(); return; }
    if (e.target.closest('#ccBtn') || e.target.closest('#wifiBtn') || e.target.closest('#focusDot')) {
      toggleCC();
      return;
    }
    if (e.target.closest('[data-cc]')) {
      e.preventDefault();
      handleCC(e.target.closest('[data-cc]').dataset.cc);
      return;
    }
    if (e.target.closest('.cc-panel')) return;
    if (e.target.closest('#spotlightBtn')) { openSpotlight(); return; }
    if (e.target.closest('#nookScrim')) {
      if (ignoreNookClick) return;
      closeNook();
      return;
    }
    if (e.target.closest('#notch') && !e.target.closest('.nook-panel')) {
      if (ignoreNookClick) return;
      toggleNook();
      return;
    }
    if (e.target.closest('#notchIsland') && e.target.closest('[data-nook], [data-nook-tab]')) return;

    if (a) {
      const href = a.getAttribute('href');
      if (a.target === '_blank') return;
      if (/^https?:/i.test(href)) { e.preventDefault(); openSafari(href); return; }
      if (href.startsWith('mailto:')) { e.preventDefault(); openApp('contact'); return; }
    }
    if (saf) { e.preventDefault(); openSafari(saf.dataset.safari); return; }
    if (file && !file.classList.contains('dicon') && !file.closest('.window.finder')) {
      openApp(file.dataset.file);
      return;
    }
    const shotAct = e.target.closest('[data-shot-act]');
    if (shotAct) {
      e.preventDefault();
      const shot = ctxShot;
      const actn = shotAct.dataset.shotAct;
      closeMenus();
      if (shot && actn === 'preview') openImagePreviewFromShot(shot);
      if (shot && actn === 'photos') showShotInPhotos(shot);
      if (shot && actn === 'copy') copyShotImage(shot);
      ctxShot = null;
      return;
    }
    const iconAct = e.target.closest('[data-icon-act]');
    if (iconAct) {
      e.preventDefault();
      const meta = ctxFile;
      const actn = iconAct.dataset.iconAct;
      closeMenus();
      if (actn === 'open' && meta?.file) openApp(meta.file);
      if (actn === 'trash' && meta) moveFileToTrash(meta);
      ctxFile = null;
      return;
    }
    if (open) {
      e.preventDefault();
      if (open.dataset.open === 'trash' && ignoreTrashClick) return;
      if (open.dataset.pane) settingsPane = open.dataset.pane;
      if (open.dataset.eduStart) eduLaunchPane = open.dataset.eduStart;
      if (open.closest('#notchIsland')) closeNook();
      openApp(open.dataset.open);
      return;
    }
    if (proj && !proj.closest('.csos-shot')) { openApp(proj.dataset.project); return; }
    if (act) {
      const a2 = act.dataset.action;
      if (a2 === 'lock') { closeMenus(); document.getElementById('lock').classList.remove('hidden'); }
      if (a2 === 'restart') restart();
      if (a2 === 'shutdown') { closeMenus(); document.getElementById('shutdown').classList.remove('hidden'); }
      if (a2 === 'close-front' && state.front) closeWin(state.front);
      if (a2 === 'move-trash') {
        const ic = selectedDeskIcon();
        if (ic) moveFileToTrash(deskMeta(ic));
        else {
          const front = state.front && document.querySelector('.window[data-id="' + state.front + '"]');
          if (front?.classList.contains('finder')) front.dispatchEvent(new Event('finder-trash-sel'));
          else toast('Select a file first');
        }
      }
      return;
    }
    if (!e.target.closest('#launchpad') && !e.target.closest('[data-open="launchpad"]')) closeLaunchpad();
    if (!ignoreNookClick && !e.target.closest('.dropdown') && !e.target.closest('.cc-panel') && !e.target.closest('.spot') && !e.target.closest('#notchIsland')) closeMenus();
  });

  document.getElementById('desktop').addEventListener('click', e => {
    const ic = e.target.closest('.dicon');
    if (!ic) {
      if (!e.target.closest('.window')) document.querySelectorAll('.dicon.sel').forEach(x => x.classList.remove('sel'));
      return;
    }
    document.querySelectorAll('.dicon').forEach(x => x.classList.remove('sel'));
    ic.classList.add('sel');
  });
  document.getElementById('desktop').addEventListener('dblclick', e => {
    const ic = e.target.closest('.dicon');
    if (ic && ic.dataset.file) openApp(ic.dataset.file);
  });

  document.getElementById('lock').addEventListener('click', unlock);
  document.getElementById('rebootBtn').addEventListener('click', restart);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (qlOpen()) { e.preventDefault(); closeQuickLook(); return; }
      if (!document.getElementById('spotlight').hidden) { document.getElementById('spotlight').hidden = true; return; }
      if (!document.getElementById('launchpad').hidden) { closeLaunchpad(); return; }
      if (document.getElementById('notchIsland')?.classList.contains('open')) { closeNook(); return; }
      closeMenus();
      if (state.front) closeWin(state.front);
    }
    if ((e.key === 'ArrowLeft' || e.key === 'ArrowRight') && !e.target.closest('input, textarea, [contenteditable]')) {
      const dir = e.key === 'ArrowRight' ? 1 : -1;
      if (qlOpen()) { e.preventDefault(); stepQuickLook(dir); return; }
      if (state.front === 'preview-shot') {
        const n = previewShotState.items.length;
        if (n > 1) {
          e.preventDefault();
          previewShotState.i = (previewShotState.i + dir + n) % n;
          const win = state.windows.get('preview-shot')?.el;
          if (win) paintImagePreview(win);
        }
      }
    }
    if ((e.key === ' ' || e.code === 'Space') && !e.metaKey && !e.ctrlKey && !e.target.closest('input, textarea, [contenteditable]')) {
      if (qlOpen()) { e.preventDefault(); closeQuickLook(); return; }
      const front = state.front && document.querySelector('.window[data-id="' + state.front + '"]');
      const fig = e.target.closest?.('.csos-shot') || (front?.classList.contains('casestudy') && front.querySelector('.csos-shot.sel'));
      if (fig) {
        e.preventDefault();
        const p = PROJECTS.find(x => x.id === fig.dataset.shotProject);
        const shot = shotsForProject(p)[+fig.dataset.shot];
        if (shot) openQuickLookFromShot(shot);
        return;
      }
      const deskShot = selectedDeskIcon() && isShotFile(selectedDeskIcon().dataset.file) ? shotByFile(selectedDeskIcon().dataset.file) : null;
      if (deskShot) { e.preventDefault(); openQuickLookFromShot(deskShot); return; }
      if (front?.classList.contains('finder')) {
        const row = front.querySelector('.fitem.on[data-file], .flist-row.on[data-file]');
        if (row && isShotFile(row.dataset.file)) {
          e.preventDefault();
          openQuickLookFromShot(shotByFile(row.dataset.file));
          return;
        }
      }
      if (front?.classList.contains('photos') && photosSel) {
        const ph = photoLibrary().find(p => p.id === photosSel);
        if (ph?.src) {
          e.preventDefault();
          const shot = ph.project
            ? shotsForProject(PROJECTS.find(x => x.id === ph.project)).find(s => s.id === ph.id)
            : { id: ph.id, src: ph.src, cap: ph.cap, name: shotFileName(ph.src), alt: ph.title };
          if (shot) openQuickLookFromShot(shot);
          return;
        }
      }
    }
    if ((e.metaKey || e.ctrlKey) && (e.key === ' ' || e.code === 'Space')) { e.preventDefault(); openSpotlight(); }
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSpotlight(); }
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'w') {
      if (qlOpen()) { e.preventDefault(); closeQuickLook(); return; }
      if (state.front) { e.preventDefault(); closeWin(state.front); }
    }
    if ((e.key === 'Backspace' || e.key === 'Delete') && !e.target.closest('input, textarea, [contenteditable]')) {
      const ic = selectedDeskIcon();
      if (ic) {
        e.preventDefault();
        moveFileToTrash(deskMeta(ic));
      } else {
        const front = state.front && document.querySelector('.window[data-id="' + state.front + '"]');
        if (front?.classList.contains('finder')) {
          e.preventDefault();
          front.dispatchEvent(new Event('finder-trash-sel'));
        }
      }
    }
    if (!document.getElementById('lock').classList.contains('hidden') && e.key !== 'Escape') unlock();
    if (!document.getElementById('spotlight').hidden && e.key === 'Enter') {
      const first = document.querySelector('.spot-item[data-open]');
      if (first) openApp(first.dataset.open);
    }
  });
  document.getElementById('spotInput').addEventListener('input', e => renderSpot(e.target.value));
  const lpSearch = document.getElementById('lpSearch');
  if (lpSearch) lpSearch.addEventListener('input', e => renderLaunchpad(e.target.value));

  document.getElementById('desktop').addEventListener('contextmenu', e => {
    if (e.target.closest('.window') || e.target.closest('.menubar') || e.target.closest('.dock')) return;
    e.preventDefault();
    const ic = e.target.closest('.dicon');
    if (ic && ic.dataset.file && !ic.hidden) {
      const meta = deskMeta(ic);
      if (isShotFile(meta.file) || meta.src) showShotCtx(e.clientX, e.clientY, shotByFile(meta.file) || meta, meta);
      else showFileCtx(e.clientX, e.clientY, meta);
      return;
    }
    const sticky = e.target.closest('.sticky');
    if (sticky) {
      ctxSticky = sticky;
      closeMenus();
      const m = document.getElementById('stickyCtx');
      const pinned = sticky.dataset.pinned === '1';
      m.querySelector('[data-sticky-act="pin"]').hidden = pinned;
      m.querySelector('[data-sticky-act="unpin"]').hidden = !pinned;
      m.hidden = false;
      m.style.left = Math.min(e.clientX, window.innerWidth - 210) + 'px';
      m.style.top = Math.min(e.clientY, window.innerHeight - 80) + 'px';
      return;
    }
    const m = document.getElementById('ctxMenu');
    closeMenus();
    m.hidden = false;
    m.style.left = e.clientX + 'px';
    m.style.top = e.clientY + 'px';
  });

  initDesktop();
  setAppearance(prefs.appearance);
  applyDockPrefs();
  restoredItems.filter(t => t.from === 'Desktop').forEach(addRestoredDeskIcon);
  try {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
      if (prefs.appearance === 'auto') setAppearance('auto');
    });
  } catch (_) {}
  tickClocks();
  setInterval(tickClocks, 1000);
  weather();
  battery();
  dockMag();
  enableDrag();
  enableStickyResize();
  restorePlacedShots();
  restoreDeskLayout();
  syncDeskIcons();
  (function bindQuickLook() {
    const wrap = document.getElementById('quickLook');
    if (!wrap) return;
    wrap.addEventListener('click', e => {
      const btn = e.target.closest('[data-ql]');
      if (!btn) return;
      const act = btn.dataset.ql;
      if (act === 'close') closeQuickLook();
      else if (act === 'prev') stepQuickLook(-1);
      else if (act === 'next') stepQuickLook(1);
      else if (act === 'preview') {
        const shot = currentQlShot();
        if (shot) openImagePreviewFromShot(shot);
      } else if (act === 'photos') {
        const shot = currentQlShot();
        if (shot) showShotInPhotos(shot);
      }
    });
  })();
  window.addEventListener('resize', () => {
    DESK_IDS().forEach(el => {
      if (!el.classList.contains('loose')) return;
      const left = parseFloat(el.style.left) || 0;
      const top = parseFloat(el.style.top) || 0;
      const c = clampDesk(el, left, top);
      el.style.left = c.left + 'px';
      el.style.top = c.top + 'px';
    });
  });
  window.addEventListener('pagehide', saveDeskLayout);
  bindControlCenter();
  bindNook();
  bootThenLock();
  const launch = new URLSearchParams(location.search).get('app');
  const pane = new URLSearchParams(location.search).get('pane');
  if (pane) settingsPane = pane;
  if (launch) setTimeout(() => openApp(launch), 80);
  if (new URLSearchParams(location.search).has('cc')) setTimeout(toggleCC, 40);
})();
