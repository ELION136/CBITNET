---
const slides = [
  {
    id: 1,
    title: "TACTICS",
    subtitle: "Instance Task",
    image: "/images/ima2.jpg",
    locked: false,
  },
  {
    id: 2,
    title: "MATCH REPORT",
    subtitle: "Instance Task",
    image: "/images/ima3.jpg",
    locked: false,
  },
  {
    id: 3,
    title: "MASTERMIND",
    subtitle: "Main Event",
    image: "/images/head1.jpg",
    locked: false,
  },
  {
    id: 4,
    title: "INTERVIEW",
    subtitle: "Instance Task",
    image: "/images/ima4.jpg",
    locked: true,
  },
  {
    id: 5,
    title: "ANALYSIS",
    subtitle: "Instance Task",
    image: "/images/ima5.jpg",
    locked: true,
  },
];

const institutions = [
  "Infocade",
  "Cenacap",
  "Fundación 1",
  "Fundación 2",
  "Club de Leones",
];

const tickerItems = [
  "CBIT", "Análisis táctico", "Match Report", "The Mastermind",
  "Entrevistas exclusivas", "Sistema activo", "INFOCADE", "CENACAP", "Fundaciones",
];
---

<section class="hero">

  <!-- Noise grain overlay -->
  <div class="grain" aria-hidden="true"></div>

  <!-- Scanline -->
  <div class="scanline" aria-hidden="true"></div>

  <!-- Ambient glow -->
  <div class="ambient" aria-hidden="true"></div>

  <!-- Background image -->
  <div class="bg-wrap" aria-hidden="true">
    <img src="/images/ima1.jpg" alt="" class="bg-img" />
    <div class="bg-vignette"></div>
  </div>

  <!-- ── MAIN LAYOUT ── -->
  <div class="layout">

    <!-- LEFT -->
    <div class="panel-left">
      <div class="sys-tag">
        <span class="sys-dot"></span>
        Sistema activo — v2.4.1
      </div>

      <h1 class="main-title">
        <span class="title-solid">CBIT</span>
        <span class="title-outline">SYSTEM</span>
      </h1>

      <div class="divider-line"></div>

      <p class="description">
        Base de datos principal. Accede a análisis tácticos, entrevistas exclusivas
        y metodología deportiva avanzada. Explora cada módulo con precisión.
      </p>

      <div class="status-grid">
        <div class="status-item">
          <span class="status-label">Módulos</span>
          <span class="status-val">05</span>
        </div>
        <div class="status-item">
          <span class="status-label">Estado</span>
          <span class="status-val gold">ON</span>
        </div>
        <div class="status-item">
          <span class="status-label">Acceso</span>
          <span class="status-val">3/5</span>
        </div>
        <div class="status-item">
          <span class="status-label">Versión</span>
          <span class="status-val">2025</span>
        </div>
      </div>
    </div>

    <!-- CENTER -->
    <div class="carousel-wrap">
      <div class="carousel-stage" id="carouselStage">
        {slides.map((slide, index) => (
          <div
            class="card"
            data-index={index}
            role="button"
            tabindex="0"
            aria-label={`${slide.title} — ${slide.subtitle}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              class="card-img"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div class="card-overlay"></div>
            <div class="card-strip"></div>

            <div class="card-body">
              <div class="card-top">
                <span class="card-index">0{index + 1} / 0{slides.length}</span>
                <div class="lock-icon">
                  {slide.locked ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2"/>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
                    </svg>
                  )}
                </div>
              </div>

              <div class="card-bottom">
                <p class="card-subtitle">{slide.subtitle}</p>
                <h2 class="card-title">{slide.title}</h2>
                <button class="card-btn">
                  {slide.locked ? "Bloqueado" : "Acceder"}
                  <span class="btn-arrow">→</span>
                </button>
              </div>
            </div>

            <!-- Corner notch -->
            <div class="card-notch" aria-hidden="true"></div>
          </div>
        ))}
      </div>

      <!-- Controls -->
      <div class="carousel-controls">
        <div class="dots" id="carouselDots">
          {slides.map((_, i) => (
            <button class="dot" data-dot={i} aria-label={`Ir a slide ${i + 1}`}></button>
          ))}
        </div>
        <div class="arrows">
          <button class="arrow-btn" id="prevBtn" aria-label="Anterior">←</button>
          <button class="arrow-btn" id="nextBtn" aria-label="Siguiente">→</button>
        </div>
      </div>
    </div>

    <!-- RIGHT -->
    <div class="panel-right">
      <p class="right-label">Nuestras instituciones</p>
      {institutions.map((inst, i) => (
        <button class="inst-btn" style={`animation-delay: ${0.7 + i * 0.12}s`}>
          <span class="inst-accent"></span>
          {inst}
        </button>
      ))}
    </div>

  </div>

  <!-- TICKER -->
  <div class="ticker" aria-hidden="true">
    <div class="ticker-track">
      {[...tickerItems, ...tickerItems].map((item, i) => (
        <span class="ticker-item">
          {item}
          <span class="ticker-sep">◆</span>
        </span>
      ))}
    </div>
  </div>

</section>

<!-- ─────────────────── STYLES ─────────────────── -->
<style>
  /* ── TOKENS ── */
  :root {
    --gold:        #D4A843;
    --gold-dim:    rgba(212, 168, 67, 0.12);
    --gold-glow:   rgba(212, 168, 67, 0.35);
    --bg:          #060608;
    --border:      rgba(255, 255, 255, 0.08);
    --text-dim:    rgba(255, 255, 255, 0.32);
    --text-mid:    rgba(255, 255, 255, 0.62);
    --card-w:      220px;
    --card-h:      340px;
    --font-display: 'Bebas Neue', sans-serif;
    --font-mono:    'Space Mono', monospace;
  }

  /* ── SECTION ── */
  .hero {
    position: relative;
    width: 100%;
    min-height: 100svh;
    background: var(--bg);
    overflow: hidden;
    font-family: var(--font-mono);
    color: #fff;
  }

  /* ── GRAIN ── */
  .grain {
    position: absolute;
    inset: 0;
    z-index: 10;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
    opacity: 0.55;
    mix-blend-mode: overlay;
  }

  /* ── SCANLINE ── */
  .scanline {
    position: absolute;
    left: 0;
    top: -2px;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, var(--gold-glow) 50%, transparent 100%);
    z-index: 9;
    pointer-events: none;
    animation: scanMove 7s linear infinite;
  }
  @keyframes scanMove {
    0%   { top: -2px; opacity: 0; }
    5%   { opacity: 1; }
    95%  { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }

  /* ── AMBIENT ── */
  .ambient {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(212, 168, 67, 0.055) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 0;
    animation: ambientBreathe 9s ease-in-out infinite;
  }
  @keyframes ambientBreathe {
    0%, 100% { transform: translate(-50%, -50%) scale(1);   opacity: 0.7; }
    50%       { transform: translate(-50%, -50%) scale(1.35); opacity: 1;   }
  }

  /* ── BACKGROUND IMAGE ── */
  .bg-wrap {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
  }
  .bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.12;
    animation: bgPan 30s linear infinite alternate;
  }
  @keyframes bgPan {
    0%   { transform: scale(1.1) translate(0, 0); }
    100% { transform: scale(1.15) translate(-2%, 2%); }
  }
  .bg-vignette {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(to bottom, var(--bg) 0%, transparent 20%, transparent 80%, var(--bg) 100%),
      linear-gradient(to right,  var(--bg) 0%, transparent 15%, transparent 85%, var(--bg) 100%);
  }

  /* ── LAYOUT ── */
  .layout {
    position: relative;
    z-index: 5;
    width: 100%;
    min-height: 100svh;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    padding: 2.5rem 3rem 5rem; /* bottom padding for ticker */
    gap: 2rem;
    max-width: 1600px;
    margin: 0 auto;
  }

  /* ─────────── LEFT ─────────── */
  .panel-left {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    opacity: 0;
    transform: translateX(-28px);
    animation: panelIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
  }
  @keyframes panelIn {
    to { opacity: 1; transform: translateX(0); }
  }

  .sys-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 9px;
    letter-spacing: 0.26em;
    color: var(--gold);
    text-transform: uppercase;
  }
  .sys-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--gold);
    flex-shrink: 0;
    animation: dotPulse 2.5s ease-in-out infinite;
  }
  @keyframes dotPulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 var(--gold-glow); }
    50%       { opacity: 0.55; box-shadow: 0 0 0 5px transparent; }
  }

  .main-title {
    font-family: var(--font-display);
    line-height: 0.88;
    display: flex;
    flex-direction: column;
  }
  .title-solid {
    font-size: clamp(4rem, 7vw, 7rem);
    letter-spacing: 0.07em;
    color: #fff;
  }
  .title-outline {
    font-size: clamp(4rem, 7vw, 7rem);
    letter-spacing: 0.07em;
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
  }

  .divider-line {
    width: 0;
    height: 1px;
    background: var(--gold);
    animation: lineExpand 0.7s ease 1s forwards;
  }
  @keyframes lineExpand {
    to { width: 42px; }
  }

  .description {
    font-size: 11px;
    line-height: 1.95;
    color: var(--text-mid);
    max-width: 290px;
    letter-spacing: 0.025em;
  }

  .status-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    max-width: 240px;
  }
  .status-item {
    border: 1px solid var(--border);
    padding: 10px 14px;
    position: relative;
    overflow: hidden;
    transition: border-color 0.3s;
  }
  .status-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--gold);
    transition: width 0.4s ease;
  }
  .status-item:hover { border-color: rgba(212, 168, 67, 0.3); }
  .status-item:hover::after { width: 100%; }
  .status-label {
    display: block;
    font-size: 8px;
    letter-spacing: 0.22em;
    color: var(--text-dim);
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .status-val {
    display: block;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
  }
  .status-val.gold { color: var(--gold); }

  /* ─────────── CENTER ─────────── */
  .carousel-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
  }

  .carousel-stage {
    position: relative;
    width: var(--card-w);
    height: var(--card-h);
    perspective: 1100px;
    transform-style: preserve-3d;
  }

  /* ── CARD ── */
  .card {
    position: absolute;
    inset: 0;
    cursor: pointer;
    border: 1px solid var(--border);
    overflow: hidden;
    background: #0c0c10;
    transition:
      transform  0.72s cubic-bezier(0.16, 1, 0.3, 1),
      opacity    0.72s ease,
      border-color 0.4s ease;
    outline: none;
    /* clip diagonal corner */
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%);
  }
  .card:focus-visible { border-color: var(--gold); }
  .card.active { border-color: rgba(212, 168, 67, 0.35); }

  /* Corner notch element */
  .card-notch {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 28px;
    height: 28px;
    background: var(--bg);
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
    z-index: 6;
    transition: background 0.4s;
  }
  .card.active .card-notch { background: var(--gold); }

  .card-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(85%) brightness(0.35);
    transform: scale(1);
    transition:
      filter    0.72s ease,
      transform 0.72s ease;
  }
  .card.active .card-img {
    filter: grayscale(15%) brightness(0.6);
    transform: scale(1.05);
  }

  .card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(6, 6, 8, 0.98) 0%,
      rgba(6, 6, 8, 0.5)  45%,
      rgba(6, 6, 8, 0.1)  100%
    );
    z-index: 1;
  }

  /* Gold vertical strip */
  .card-strip {
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 0%;
    background: var(--gold);
    z-index: 3;
    transition: height 0.55s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .card.active .card-strip { height: 100%; }

  /* Shimmer on active */
  .card.active::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(212, 168, 67, 0.06) 0%,
      transparent 55%
    );
    z-index: 2;
    pointer-events: none;
  }

  .card-body {
    position: absolute;
    inset: 0;
    z-index: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .card-index {
    font-family: var(--font-display);
    font-size: 11px;
    letter-spacing: 0.2em;
    color: var(--gold);
    opacity: 0;
    transition: opacity 0.4s;
  }
  .card.active .card-index { opacity: 1; }

  .lock-icon {
    width: 24px;
    height: 24px;
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.4s, background 0.4s;
    flex-shrink: 0;
  }
  .lock-icon svg {
    width: 11px;
    height: 11px;
    stroke: var(--text-dim);
    transition: stroke 0.4s;
  }
  .card.active .lock-icon {
    border-color: var(--gold);
    background: var(--gold-dim);
  }
  .card.active .lock-icon svg { stroke: var(--gold); }

  .card-subtitle {
    font-size: 8px;
    letter-spacing: 0.3em;
    color: var(--text-dim);
    text-transform: uppercase;
    margin: 0 0 5px;
    transition: color 0.4s;
  }
  .card.active .card-subtitle { color: var(--gold); }

  .card-title {
    font-family: var(--font-display);
    font-size: 28px;
    letter-spacing: 0.04em;
    line-height: 1;
    color: rgba(255, 255, 255, 0.35);
    margin: 0 0 12px;
    transition: color 0.4s;
  }
  .card.active .card-title { color: #fff; }

  .card-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 7px 14px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text-dim);
    font-family: var(--font-mono);
    font-size: 8px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    cursor: pointer;
    opacity: 0;
    transform: translateY(8px);
    transition:
      opacity     0.4s ease,
      transform   0.4s ease,
      border-color 0.3s,
      color       0.3s,
      background  0.3s;
  }
  .card.active .card-btn {
    opacity: 1;
    transform: translateY(0);
    border-color: rgba(212, 168, 67, 0.5);
    color: var(--gold);
  }
  .card-btn:hover { background: var(--gold-dim); }
  .btn-arrow {
    display: inline-block;
    transition: transform 0.2s;
  }
  .card-btn:hover .btn-arrow { transform: translateX(4px); }

  /* ── CONTROLS ── */
  .carousel-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: var(--card-w);
  }

  .dots { display: flex; gap: 7px; align-items: center; }
  .dot {
    width: 4px;
    height: 4px;
    background: var(--border);
    border: none;
    padding: 0;
    cursor: pointer;
    transition: width 0.35s ease, background 0.35s ease;
    flex-shrink: 0;
  }
  .dot.active {
    width: 20px;
    background: var(--gold);
  }

  .arrows { display: flex; gap: 6px; }
  .arrow-btn {
    width: 34px;
    height: 34px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text-mid);
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
    transition: border-color 0.3s, color 0.3s, background 0.3s;
  }
  .arrow-btn:hover {
    border-color: var(--gold);
    color: var(--gold);
    background: var(--gold-dim);
  }
  .arrow-btn:active { transform: scale(0.95); }

  /* ─────────── RIGHT ─────────── */
  .panel-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    opacity: 0;
    transform: translateX(28px);
    animation: panelInRight 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
  }
  @keyframes panelInRight {
    to { opacity: 1; transform: translateX(0); }
  }

  .right-label {
    font-size: 9px;
    letter-spacing: 0.28em;
    color: var(--text-dim);
    text-transform: uppercase;
    text-align: right;
    margin-bottom: 4px;
  }

  .inst-btn {
    position: relative;
    width: 220px;
    padding: 13px 20px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text-mid);
    font-family: var(--font-mono);
    font-size: 9px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    text-align: right;
    cursor: pointer;
    overflow: hidden;
    opacity: 0;
    transform: translateX(14px);
    animation: instIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    transition: border-color 0.3s, color 0.3s, background 0.3s;
  }
  @keyframes instIn {
    to { opacity: 1; transform: translateX(0); }
  }
  .inst-accent {
    position: absolute;
    right: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background: var(--gold);
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .inst-btn:hover {
    border-color: rgba(212, 168, 67, 0.35);
    color: var(--gold);
    background: var(--gold-dim);
  }
  .inst-btn:hover .inst-accent { transform: scaleY(1); }
  .inst-btn:active { transform: scale(0.98); }

  /* ─────────── TICKER ─────────── */
  .ticker {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 34px;
    border-top: 1px solid var(--border);
    background: rgba(6, 6, 8, 0.85);
    backdrop-filter: blur(8px);
    overflow: hidden;
    display: flex;
    align-items: center;
    z-index: 8;
  }
  .ticker-track {
    display: flex;
    gap: 0;
    white-space: nowrap;
    animation: tickerScroll 22s linear infinite;
  }
  @keyframes tickerScroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .ticker-item {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    font-size: 9px;
    letter-spacing: 0.22em;
    color: var(--text-dim);
    text-transform: uppercase;
    padding: 0 14px;
  }
  .ticker-sep { color: var(--gold); font-size: 7px; }

  /* ─────────── RESPONSIVE ─────────── */
  @media (max-width: 1024px) {
    .layout {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      padding: 2rem 2rem 4rem;
    }
    .panel-left  { grid-column: 1 / 2; grid-row: 1; }
    .carousel-wrap { grid-column: 2 / 3; grid-row: 1; justify-self: end; }
    .panel-right { grid-column: 1 / 3; grid-row: 2; flex-direction: row; flex-wrap: wrap; align-items: center; justify-content: center; }
    .right-label { width: 100%; text-align: center; }
    .inst-btn { text-align: center; width: auto; min-width: 140px; }
  }

  @media (max-width: 700px) {
    :root { --card-w: 190px; --card-h: 300px; }
    .layout {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      align-items: start;
      gap: 2.5rem;
      padding: 2rem 1.25rem 4.5rem;
      min-height: 100svh;
    }
    .panel-left  { grid-column: 1; align-items: center; text-align: center; }
    .description { text-align: center; max-width: 100%; }
    .divider-line { margin: 0 auto; }
    .status-grid { max-width: 260px; margin: 0 auto; }
    .carousel-wrap { grid-column: 1; }
    .panel-right { grid-column: 1; }
  }

  /* ── Prefer reduced motion ── */
  @media (prefers-reduced-motion: reduce) {
    .scanline, .ambient { animation: none; }
    .bg-img { animation: none; }
    .ticker-track { animation: none; }
    .card { transition: opacity 0.3s; }
  }
</style>

<!-- ─────────────────── SCRIPT ─────────────────── -->
<script>
  (() => {
    const stage   = document.getElementById('carouselStage') as HTMLElement;
    const dotsEl  = document.getElementById('carouselDots') as HTMLElement;
    const prevBtn = document.getElementById('prevBtn') as HTMLButtonElement;
    const nextBtn = document.getElementById('nextBtn') as HTMLButtonElement;

    const cards = Array.from(stage.querySelectorAll<HTMLElement>('.card'));
    const dots  = Array.from(dotsEl.querySelectorAll<HTMLElement>('.dot'));
    const total = cards.length;
    let active  = 0;
    let timer: ReturnType<typeof setInterval> | null = null;

    // ── Position all cards relative to active ──
    function render(idx: number): void {
      active = ((idx % total) + total) % total;

      cards.forEach((card, i) => {
        let d = i - active;
        if (d >  total / 2) d -= total;
        if (d < -total / 2) d += total;

        const absD = Math.abs(d);
        const translateX = d * 68;
        const translateZ = -absD * 95;
        const rotateY    = d * 20;
        const scale      = d === 0 ? 1 : Math.max(0.7, 0.82 - absD * 0.06);
        const opacity    = absD > 2 ? 0 : (d === 0 ? 1 : Math.max(0, 0.4 - absD * 0.1));

        card.style.transform  = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
        card.style.zIndex     = String(10 - absD);
        card.style.opacity    = String(opacity);
        card.style.pointerEvents = d === 0 ? 'auto' : 'none';
        card.classList.toggle('active', i === active);
        card.setAttribute('aria-selected', String(i === active));
      });

      dots.forEach((dot, i) => dot.classList.toggle('active', i === active));
    }

    function resetTimer(): void {
      if (timer) clearInterval(timer);
      timer = setInterval(() => render(active + 1), 4000);
    }

    function go(direction: number): void {
      render(active + direction);
      resetTimer();
    }

    // ── Click on card ──
    cards.forEach((card, i) => {
      card.addEventListener('click', () => {
        if (i !== active) { render(i); resetTimer(); }
      });
      card.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (i !== active) { render(i); resetTimer(); }
        }
      });
    });

    // ── Dot clicks ──
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { render(i); resetTimer(); });
    });

    // ── Arrow buttons ──
    prevBtn.addEventListener('click', () => go(-1));
    nextBtn.addEventListener('click', () => go(1));

    // ── Keyboard navigation ──
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft')  go(-1);
    });

    // ── Touch / Swipe ──
    let touchX = 0;
    stage.addEventListener('touchstart', (e: TouchEvent) => {
      touchX = e.touches[0].clientX;
    }, { passive: true });
    stage.addEventListener('touchend', (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 40) { go(dx < 0 ? 1 : -1); }
    }, { passive: true });

    // ── Wheel scroll on stage ──
    let wheelCooldown = false;
    stage.addEventListener('wheel', (e: WheelEvent) => {
      e.preventDefault();
      if (wheelCooldown) return;
      wheelCooldown = true;
      go(e.deltaY > 0 ? 1 : -1);
      setTimeout(() => { wheelCooldown = false; }, 600);
    }, { passive: false });

    // ── Init ──
    render(0);
    resetTimer();
  })();
</script>





---
const slides = [
  { id: 1, title: "TACTICS",       subtitle: "INSTANCE TASK", image: "/images/ima2.jpg", locked: false },
  { id: 2, title: "MATCH REPORT",  subtitle: "INSTANCE TASK", image: "/images/ima3.jpg", locked: false },
  { id: 3, title: "THE MASTERMIND",subtitle: "MAIN EVENT",    image: "/images/head1.jpg",locked: false },
  { id: 4, title: "INTERVIEW",     subtitle: "INSTANCE TASK", image: "/images/ima4.jpg", locked: true  },
  { id: 5, title: "ANALYSIS",      subtitle: "INSTANCE TASK", image: "/images/ima5.jpg", locked: true  },
];

const institutions = ["INFOCADE", "CENACAP", "FUNDACION 1", "FUNDACION 2", "CLUB DE LEONES"];
---

<section class="hero-section">

  <!-- Background -->
  <div class="hero-bg">
    <img src="/images/ima1.jpg" alt="" class="hero-bg-img" aria-hidden="true" />
    <div class="hero-bg-fade-y"></div>
    <div class="hero-bg-fade-x"></div>
  </div>
  <div class="hero-glow"></div>

  <div class="hero-inner">

    <!-- Header -->
    <header class="hero-header">
      <h1 class="hero-title">CBIT</h1>
      <p class="hero-sub">SYSTEM INITIALIZED</p>
      <div class="hero-divider"></div>
    </header>

    <!-- Carousel -->
    <div class="carousel-wrap" id="carousel" aria-label="Módulos CBIT">
      <div class="carousel-track" id="carouselTrack">
        {slides.map((slide, i) => (
          <article
            class="card"
            data-index={i}
            aria-label={slide.title}
            role="button"
            tabindex="0"
          >
            <div
              class="card-bg"
              style={`background-image: url('${slide.image}')`}
            ></div>
            <div class="card-overlay-y"></div>
            <div class="card-overlay-x"></div>

            <!-- Collapsed: vertical label -->
            <div class="card-vtitle" aria-hidden="true">{slide.title}</div>

            <!-- Expanded: full content -->
            <div class="card-content">
              <div class="card-top">
                <div class="acc-bar"></div>
                <span class="card-subtitle">{slide.subtitle}</span>
                <h2 class="card-title">{slide.title}</h2>
              </div>

              <div class="lock-wrap">
                <div class="lock-icon">
                  {slide.locked ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="rgba(255,255,255,0.3)" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect width="18" height="11" x="3" y="11" rx="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="#eab308" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect width="18" height="11" x="3" y="11" rx="2"/>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
                    </svg>
                  )}
                </div>
              </div>

              <div class="card-bottom">
                <button class="enter-btn" tabindex="-1">ENTER</button>
                <div class="dot-row" aria-hidden="true">
                  <span class="dot" style="width:6px"></span>
                  <span class="dot" style="width:20px"></span>
                  <span class="dot" style="width:6px"></span>
                </div>
              </div>
            </div>

            <!-- Corner decor -->
            <span class="corner c-tl-h" aria-hidden="true"></span>
            <span class="corner c-tl-v" aria-hidden="true"></span>
            <span class="corner c-br-h" aria-hidden="true"></span>
            <span class="corner c-br-v" aria-hidden="true"></span>
          </article>
        ))}
      </div>
    </div>

    <!-- Dot indicators -->
    <div class="indicators" id="indicators" aria-label="Navegación de tarjetas">
      {slides.map((_, i) => (
        <button class:list={["ind", { active: i === 0 }]} data-idx={i} aria-label={`Ir a tarjeta ${i + 1}`}></button>
      ))}
    </div>

    <!-- Bottom row -->
    <div class="bottom-row">
      <p class="hero-desc">
        Accede a la base de datos principal para revisar análisis tácticos,
        entrevistas exclusivas y la metodología deportiva.
      </p>

      <div class="inst-col">
        <h3 class="inst-title">NUESTRAS <span>INSTITUCIONES</span></h3>
        <div class="inst-sep"></div>
        {institutions.map(inst => (
          <button class="inst-btn">
            <span class="inst-accent" aria-hidden="true"></span>
            <span>{inst}</span>
          </button>
        ))}
      </div>
    </div>

  </div>
</section>

<style>
  /* ── Base ─────────────────────────────────────────────────── */
  .hero-section {
    position: relative;
    width: 100%;
    min-height: 100svh;
    background: #030303;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  /* ── Background ───────────────────────────────────────────── */
  .hero-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
  }
  .hero-bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.18;
    animation: panBg 32s linear infinite alternate;
    will-change: transform;
  }
  @keyframes panBg {
    0%   { transform: scale(1.1) translate(0, 0); }
    100% { transform: scale(1.15) translate(-2%, 2%); }
  }
  .hero-bg-fade-y {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, #030303 0%, transparent 30%, transparent 70%, #030303 100%);
  }
  .hero-bg-fade-x {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, #030303 0%, rgba(3,3,3,0.4) 40%, rgba(3,3,3,0.4) 60%, #030303 100%);
  }
  .hero-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(234,179,8,0.07) 0%, transparent 70%);
    pointer-events: none;
    z-index: 1;
  }

  /* ── Layout ───────────────────────────────────────────────── */
  .hero-inner {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
  }

  /* ── Header ───────────────────────────────────────────────── */
  .hero-header {
    text-align: center;
  }
  .hero-title {
    font-family: 'Courier New', Courier, monospace;
    font-size: clamp(40px, 8vw, 72px);
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 0.25em;
    line-height: 1;
    text-transform: uppercase;
  }
  .hero-sub {
    font-family: 'Courier New', Courier, monospace;
    font-size: 10px;
    color: #eab308;
    letter-spacing: 0.5em;
    text-transform: uppercase;
    margin-top: 10px;
  }
  .hero-divider {
    width: 36px;
    height: 1px;
    background: #eab308;
    margin: 14px auto 0;
    opacity: 0.75;
  }

  /* ── Carousel ─────────────────────────────────────────────── */
  .carousel-wrap {
    position: relative;
    width: 100%;
    height: 380px;
    cursor: grab;
    user-select: none;
    -webkit-user-select: none;
    overflow: hidden;
  }
  .carousel-wrap.is-dragging { cursor: grabbing; }

  .carousel-track {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    align-items: center;
    will-change: transform;
  }

  /* ── Card ─────────────────────────────────────────────────── */
  .card {
    flex-shrink: 0;
    width: 260px;
    height: 340px;
    margin: 0 10px;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.08);
    clip-path: polygon(5% 0, 100% 0, 100% 95%, 95% 100%, 0 100%, 0 5%);
    cursor: pointer;
    outline: none;

    /* Scale/translate managed by JS inline style — not transition here to let JS lerp handle it */
    will-change: transform, opacity;
    transition:
      border-color 0.4s ease,
      transform 0.5s cubic-bezier(0.23, 1, 0.32, 1),
      opacity 0.5s ease;
  }
  .card:focus-visible { outline: 2px solid #eab308; outline-offset: 4px; }

  .card-bg {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    filter: grayscale(80%);
    opacity: 0.22;
    transform: scale(1.06);
    transition: filter 0.5s ease, opacity 0.5s ease, transform 0.6s ease;
  }
  .card-overlay-y {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 40%, rgba(0,0,0,0.9) 100%);
  }
  .card-overlay-x {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(0,0,0,0.35), transparent);
  }

  /* Vertical title (collapsed) */
  .card-vtitle {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Courier New', Courier, monospace;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.3);
    letter-spacing: 0.3em;
    text-transform: uppercase;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    transition: opacity 0.3s;
    pointer-events: none;
  }

  /* Full content (expanded) */
  .card-content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.4s;
    pointer-events: none;
  }
  .acc-bar {
    width: 24px;
    height: 2px;
    background: #eab308;
    margin-bottom: 10px;
    transition: width 0.4s ease;
  }
  .card-subtitle {
    font-family: 'Courier New', Courier, monospace;
    font-size: 9px;
    color: #eab308;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    display: block;
  }
  .card-title {
    font-family: 'Courier New', Courier, monospace;
    font-size: 22px;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    line-height: 1.1;
    margin-top: 6px;
  }

  .lock-wrap { display: flex; align-items: center; }
  .lock-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    transition: border-color 0.4s, background 0.4s;
  }

  .enter-btn {
    display: inline-block;
    padding: 8px 20px;
    border: 1px solid #eab308;
    background: #eab308;
    color: #000;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 700;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.2s;
  }
  .enter-btn:hover { background: #fcd34d; }

  .dot-row {
    display: flex;
    gap: 4px;
    margin-top: 10px;
  }
  .dot {
    display: block;
    height: 2px;
    background: #eab308;
  }

  /* Corner decorations */
  .corner { position: absolute; background: rgba(255, 255, 255, 0.12); transition: background 0.4s; }
  .c-tl-h { top: 0; left: 0; width: 18px; height: 1px; }
  .c-tl-v { top: 0; left: 0; width: 1px;  height: 18px; }
  .c-br-h { bottom: 0; right: 0; width: 18px; height: 1px; }
  .c-br-v { bottom: 0; right: 0; width: 1px;  height: 18px; }

  /* ── Card states ──────────────────────────────────────────── */
  /* Selected */
  .card.is-selected {
    border-color: rgba(234, 179, 8, 0.6);
    transform: scale(1.06) translateY(-10px);
  }
  .card.is-selected .card-bg    { filter: grayscale(0%); opacity: 0.82; transform: scale(1); }
  .card.is-selected .acc-bar    { width: 48px; }
  .card.is-selected .lock-icon  { border-color: rgba(234,179,8,0.7); background: rgba(234,179,8,0.12); }
  .card.is-selected .corner     { background: #eab308; }
  .card.is-selected .card-vtitle  { opacity: 0; pointer-events: none; }
  .card.is-selected .card-content { opacity: 1; pointer-events: auto; }

  /* Neighbor */
  .card.is-neighbor { transform: scale(0.93) translateY(6px); opacity: 0.8; }

  /* Far */
  .card.is-far { transform: scale(0.84) translateY(14px); opacity: 0.5; }

  /* ── Indicators ───────────────────────────────────────────── */
  .indicators {
    display: flex;
    gap: 6px;
  }
  .ind {
    width: 20px;
    height: 2px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: width 0.35s ease, background 0.35s ease;
  }
  .ind.active { width: 38px; background: #eab308; }

  /* ── Bottom row ───────────────────────────────────────────── */
  .bottom-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    gap: 24px;
    flex-wrap: wrap;
  }
  .hero-desc {
    font-family: 'Courier New', Courier, monospace;
    font-size: 11px;
    color: rgba(156, 163, 175, 1);
    line-height: 1.9;
    max-width: 360px;
  }

  .inst-col {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
  }
  .inst-title {
    font-family: 'Courier New', Courier, monospace;
    font-size: 9px;
    font-weight: 400;
    color: #fff;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 2px;
  }
  .inst-title span { color: #eab308; }
  .inst-sep {
    width: 28px;
    height: 1px;
    background: rgba(255, 255, 255, 0.15);
    align-self: flex-end;
    margin-bottom: 2px;
  }

  .inst-btn {
    position: relative;
    width: 190px;
    padding: 9px 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.03);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    overflow: hidden;
    cursor: pointer;
    transition: border-color 0.3s, background 0.3s;
  }
  .inst-btn:hover { border-color: #eab308; background: rgba(234,179,8,0.06); }

  .inst-accent {
    position: absolute;
    left: 0; top: 0;
    width: 3px; height: 100%;
    background: #eab308;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.3s ease;
  }
  .inst-btn:hover .inst-accent { transform: scaleY(1); }

  .inst-btn > span:last-child {
    font-family: 'Courier New', Courier, monospace;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(156, 163, 175, 1);
    transition: color 0.3s;
    position: relative;
    z-index: 1;
  }
  .inst-btn:hover > span:last-child { color: #eab308; }

  /* ── Responsive ───────────────────────────────────────────── */
  @media (max-width: 640px) {
    .carousel-wrap { height: 300px; }
    .card { width: 200px; height: 270px; }
    .bottom-row { flex-direction: column; gap: 20px; }
    .inst-col { align-items: flex-start; }
    .inst-btn { width: 100%; justify-content: flex-start; }
    .hero-desc { max-width: 100%; }
  }
</style>

<script>
  const CARD_W = 280; // card width (260) + margins (10*2)

  const carousel   = document.getElementById('carousel')!;
  const track      = document.getElementById('carouselTrack')!;
  const cards      = Array.from(document.querySelectorAll<HTMLElement>('.card'));
  const indicators = Array.from(document.querySelectorAll<HTMLElement>('.ind'));

  let selectedIdx   = 0;
  let currentOffset = 0;
  let targetOffset  = 0;
  let isDragging    = false;
  let startX        = 0;
  let startOffset   = 0;
  let dragDelta     = 0;
  let rafId         = 0;

  // ── Helpers ────────────────────────────────────────────────
  const getCenter = () => carousel.offsetWidth / 2;

  const scrollToCard = (idx: number) => {
    targetOffset = getCenter() - (idx * CARD_W + CARD_W / 2);
  };

  const selectCard = (idx: number) => {
    selectedIdx = Math.max(0, Math.min(cards.length - 1, idx));

    cards.forEach((card, i) => {
      const diff = Math.abs(i - selectedIdx);
      card.classList.remove('is-selected', 'is-neighbor', 'is-far');
      if (i === selectedIdx)    card.classList.add('is-selected');
      else if (diff === 1)      card.classList.add('is-neighbor');
      else                      card.classList.add('is-far');
    });

    indicators.forEach((ind, i) => {
      ind.classList.toggle('active', i === selectedIdx);
    });
  };

  // ── RAF loop ───────────────────────────────────────────────
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const tick = () => {
    currentOffset = lerp(currentOffset, targetOffset, 0.1);
    (track as HTMLElement).style.transform = `translateX(${currentOffset}px)`;
    rafId = requestAnimationFrame(tick);
  };

  // ── Mouse drag ─────────────────────────────────────────────
  carousel.addEventListener('mousedown', (e: MouseEvent) => {
    isDragging = true;
    dragDelta  = 0;
    startX     = e.clientX;
    startOffset = currentOffset;
    targetOffset = currentOffset;
    carousel.classList.add('is-dragging');
  });

  window.addEventListener('mousemove', (e: MouseEvent) => {
    if (!isDragging) return;
    dragDelta = e.clientX - startX;
    targetOffset = startOffset + dragDelta;
  });

  window.addEventListener('mouseup', (e: MouseEvent) => {
    if (!isDragging) return;
    isDragging = false;
    carousel.classList.remove('is-dragging');
    const moved = e.clientX - startX;
    if (Math.abs(moved) > 40) {
      selectCard(selectedIdx + (moved < 0 ? 1 : -1));
    }
    scrollToCard(selectedIdx);
  });

  // ── Touch drag ─────────────────────────────────────────────
  carousel.addEventListener('touchstart', (e: TouchEvent) => {
    startX = e.touches[0].clientX;
    startOffset = currentOffset;
    targetOffset = currentOffset;
    dragDelta = 0;
  }, { passive: true });

  carousel.addEventListener('touchmove', (e: TouchEvent) => {
    dragDelta = e.touches[0].clientX - startX;
    targetOffset = startOffset + dragDelta;
  }, { passive: true });

  carousel.addEventListener('touchend', (e: TouchEvent) => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) {
      selectCard(selectedIdx + (dx < 0 ? 1 : -1));
    }
    scrollToCard(selectedIdx);
  });

  // ── Card click ─────────────────────────────────────────────
  cards.forEach((card, i) => {
    card.addEventListener('click', () => {
      if (Math.abs(dragDelta) > 6) return; // ignore click after drag
      selectCard(i);
      scrollToCard(i);
    });

    card.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectCard(i);
        scrollToCard(i);
      }
    });
  });

  // ── Indicator click ────────────────────────────────────────
  indicators.forEach((ind, i) => {
    ind.addEventListener('click', () => { selectCard(i); scrollToCard(i); });
  });

  // ── Keyboard arrow nav ─────────────────────────────────────
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft')  { selectCard(selectedIdx - 1); scrollToCard(selectedIdx); }
    if (e.key === 'ArrowRight') { selectCard(selectedIdx + 1); scrollToCard(selectedIdx); }
  });

  // ── Init ───────────────────────────────────────────────────
  selectCard(0);
  scrollToCard(0);
  currentOffset = targetOffset;
  rafId = requestAnimationFrame(tick);
</script>