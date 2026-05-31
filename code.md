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















<parte 4>

---
const slides = [
  { id: 1, title: "INFOCADE",       subtitle: "Instituto Deportivo",      image: "/images/mix5.webp",  href: "/infocade"    },
  { id: 2, title: "CENACAP",        subtitle: "Centro de Capacitacion",   image: "/images/mix3.webp",  href: "/cenacap"     },
  { id: 3, title: "NUEVO SIGLO",    subtitle: "Formacion Profesional",    image: "/images/mix4.webp", href: "/nuevo-ciclo" },
  { id: 4, title: "FUNDECT",        subtitle: "Fundacion Educativa",      image: "/images/mix2.webp",  href: "/fundect"     },
  { id: 5, title: "CLUB DE LEONES", subtitle: "Accion Civica y Social",   image: "/images/mix1.webp",  href: "/club-leones" },
];

const institutions = [
  { 
    name: "INAF",         
    color: "#f59e0b", 
    glow: "rgba(245,158,11,0.25)",
    path: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z M2 12h20"
  },
  { 
    name: "UNITEP",       
    color: "#10b981", 
    glow: "rgba(16,185,129,0.25)",
    path: "M22 10v6M2 10l10-5 10 5-10 5z M6 12.5V16a6 6 0 0 0 12 0v-3.5"
  },
  { 
    name: "UNIFRANZ",     
    color: "#8b5cf6", 
    glow: "rgba(139,92,246,0.25)",
    path: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z"
  },
  { 
    name: "CLUB OLIMPIC", 
    color: "#ef4444", 
    glow: "rgba(239,68,68,0.25)",
    path: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6 M18 9h1.5a2.5 2.5 0 0 0 0-5H18 M4 22h16 M10 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34 M12 2a5 5 0 0 0-5 5v3c0 2.2 1.8 4 4 4h2c2.2 0 4-1.8 4-4V7a5 5 0 0 0-5-5z"
  },
  { 
    name: "INTRASPORTS",  
    color: "#0ea5e9", 
    glow: "rgba(14,165,233,0.25)",
    path: "M13 2L3 14h9l-1 8 10-12h-9l1-8z"
  },
];
---

<section
  class="relative min-h-screen w-full flex items-center justify-center overflow-x-hidden bg-transparent coverflow-section py-40 xl:py-0"
  transition:animate="none"
>

  <!-- ── BEAM CANVAS ── -->
  <canvas id="beam-canvas" class="absolute inset-0 w-full h-full z-0 pointer-events-none"></canvas>

  <!-- Glow orb central azul -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full pointer-events-none z-0"
       style="background:radial-gradient(ellipse,rgba(14,165,233,0.07) 0%,transparent 70%);filter:blur(24px);"></div>

  <!-- ── LAYOUT 3 COLUMNAS ── -->
  <div class="relative z-50 w-full max-w-[1600px] mx-auto px-6 md:px-10 flex flex-col xl:flex-row items-center justify-between gap-16 xl:gap-4">

    <!-- ── COLUMNA IZQUIERDA ── -->
    <div class="w-full xl:w-[350px] flex flex-col items-center xl:items-start text-center xl:text-left order-1 left-col">
      <!-- Brand Logo Container -->
      <div class="relative mb-6 opacity-0 left-reveal-logo group flex items-center justify-center xl:justify-start">
        <img src="/images/milogo.png" alt="Logo Corporación" 
             class="h-24 md:h-28 w-auto object-contain transition-all duration-500 group-hover:scale-105 pointer-events-auto" 
             style="filter: drop-shadow(0 0 20px rgba(14,165,233,0.3));" />
      </div>

      <!-- Title -->
      <h1 class="font-display text-4xl md:text-4xl text-white tracking-widest uppercase leading-none opacity-0 left-reveal-1"
          style="text-shadow:0 0 40px rgba(14,165,233,0.15);">
        CORPORACION BOLIVIANA DE TALENTO Y FORMACION INTEGRAL
      </h1>

      

      <!-- Animated line -->
      <div id="left-line"
           class="h-[2px] mb-5 origin-left"
           style="width:0;background:linear-gradient(90deg,#0ea5e9,#2dd4bf);transition:width 1s ease;"></div>

      <!-- Description -->
      <p class="text-gray-500 text-xs md:text-sm leading-relaxed max-w-md xl:max-w-sm text-left opacity-0 left-reveal-2">
        Accede a la red de instituciones y programas aliados. Explora cada modulo y descubre la oferta academica, civica y deportiva de nuestra plataforma.
      </p>

      <!-- Social Media Icons (WhatsApp, Facebook, Instagram, TikTok) -->
      <div class="flex items-center gap-3 mt-6 opacity-0 left-reveal-social">
        <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer"
           class="social-btn group relative w-10 h-10 flex items-center justify-center border transition-all duration-300"
           style="border-color: rgba(37,211,102,0.3); background: rgba(37,211,102,0.05); clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px)); --social-color: #25D366;"
           aria-label="WhatsApp">
          <span class="social-tooltip absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black/90 border rounded text-[9px] font-bold tracking-widest uppercase opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 z-50 text-white whitespace-nowrap shadow-lg"
                style="border-color: #25D366; clip-path: polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px));">
            WhatsApp
          </span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-white/60 group-hover:text-[#25D366] transition-colors duration-300">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.13-1.347a9.947 9.947 0 0 0 4.881 1.279h.005c5.505 0 9.988-4.478 9.99-9.985 0-2.67-1.037-5.18-2.92-7.065A9.925 9.925 0 0 0 12.012 2zm5.727 14.123c-.253.715-1.47 1.387-2.022 1.478-.497.082-1.135.15-3.32-.756-2.793-1.157-4.595-4.004-4.736-4.193-.14-.188-1.136-1.51-1.136-2.88 0-1.37.718-2.043.97-2.317.254-.275.563-.343.75-.343.187 0 .375.002.537.01.17.008.402-.065.63.486.23.557.788 1.92.857 2.062.069.141.115.306.022.493-.092.188-.138.305-.276.467-.137.16-.29.356-.413.478-.138.136-.282.285-.121.562.162.277.72 1.184 1.543 1.916.822.732 1.517.957 1.733 1.05.215.093.342.079.467-.066.126-.145.539-.627.683-.84.143-.214.287-.18.483-.107.195.074 1.238.583 1.452.69.214.108.356.162.408.252.052.09.052.522-.201 1.238z"/>
          </svg>
        </a>

        <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer"
           class="social-btn group relative w-10 h-10 flex items-center justify-center border transition-all duration-300"
           style="border-color: rgba(24,119,242,0.3); background: rgba(24,119,242,0.05); clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px)); --social-color: #1877F2;"
           aria-label="Facebook">
          <span class="social-tooltip absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black/90 border rounded text-[9px] font-bold tracking-widest uppercase opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 z-50 text-white whitespace-nowrap shadow-lg"
                style="border-color: #1877F2; clip-path: polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px));">
            Facebook
          </span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-white/60 group-hover:text-[#1877F2] transition-colors duration-300">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
          </svg>
        </a>

        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"
           class="social-btn group relative w-10 h-10 flex items-center justify-center border transition-all duration-300"
           style="border-color: rgba(228,64,95,0.3); background: rgba(228,64,95,0.05); clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px)); --social-color: #E4405F;"
           aria-label="Instagram">
          <span class="social-tooltip absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black/90 border rounded text-[9px] font-bold tracking-widest uppercase opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 z-50 text-white whitespace-nowrap shadow-lg"
                style="border-color: #E4405F; clip-path: polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px));">
            Instagram
          </span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-white/60 group-hover:text-[#E4405F] transition-colors duration-300">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
          </svg>
        </a>

        <a href="https://tiktok.com/@yourhandle" target="_blank" rel="noopener noreferrer"
           class="social-btn group relative w-10 h-10 flex items-center justify-center border transition-all duration-300"
           style="border-color: rgba(255,255,255,0.2); background: rgba(255,255,255,0.03); clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px)); --social-color: #ffffff;"
           aria-label="TikTok">
          <span class="social-tooltip absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black/90 border rounded text-[9px] font-bold tracking-widest uppercase opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 z-50 text-white whitespace-nowrap shadow-lg"
                style="border-color: #ffffff; clip-path: polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px));">
            TikTok
          </span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-white/60 group-hover:text-white transition-colors duration-300">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .8.11V9.4a6.27 6.27 0 0 0-8.31 6A6.25 6.25 0 0 0 12 21.67a6.24 6.24 0 0 0 6.25-6.25v-8.2a8.73 8.73 0 0 0 4.74 1.48V5.3a5.22 5.22 0 0 1-3.4-1.28z"/>
          </svg>
        </a>
      </div>

      <!-- Nav arrows + counter -->
      <div class="flex items-center gap-3 mt-8 opacity-0 left-reveal-3">
        <button id="btn-prev"
                class="w-10 h-10 border border-white/10 bg-white/[0.03] flex items-center justify-center transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07]"
                style="clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));"
                aria-label="Anterior">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-white/40"><path d="M19 12H5"/><path d="m12 5-7 7 7 7"/></svg>
        </button>
        <button id="btn-next"
                class="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]"
                style="border:1.5px solid rgba(14,165,233,0.45);background:rgba(14,165,233,0.07);clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));"
                aria-label="Siguiente">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:#0ea5e9;"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>

        <div class="ml-2 font-display text-xs tracking-[0.2em]" style="color:rgba(255,255,255,0.2);">
          <span id="counter-current" style="color:#0ea5e9;">01</span>
          <span class="mx-1">/</span>
          <span>0{slides.length}</span>
        </div>
      </div>
    </div>

    <!-- ── COLUMNA CENTRAL — CARRUSEL ORIGINAL ── -->
    <div
      class="relative w-full xl:flex-1 h-[380px] md:h-[450px] lg:h-[500px] flex items-center justify-center z-20 slider-container pointer-events-auto order-2"
      style="perspective:1200px;"
    >
      <div
        class="relative w-[160px] md:w-[220px] lg:w-[260px] h-[260px] md:h-[360px] lg:h-[420px] transform-style-3d carousel-spinner"
        style="will-change:transform;"
      >
        {slides.map((slide, index) => (
          <div
            class="absolute top-0 left-0 w-full h-full cursor-pointer coverflow-card group"
            data-index={index}
          >
            <div class="w-full h-full relative flex flex-col items-center justify-between p-3 md:p-4 bg-[#060606]/92 backdrop-blur-md border border-white/[0.07] group-[.active]:border-[#0ea5e9]/50 group-[.active]:shadow-[0_0_50px_rgba(14,165,233,0.2),0_0_0_1px_rgba(14,165,233,0.12)] transition-all duration-500 overflow-hidden"
                 style="clip-path:polygon(10% 0,100% 0,100% 90%,90% 100%,0 100%,0 10%);">

              <!-- BG image -->
              <img src={slide.image} alt={slide.title}
                   class="absolute inset-0 w-full h-full object-cover opacity-35 group-[.active]:opacity-80 transition-all duration-500 pointer-events-none grayscale group-[.active]:grayscale-0 group-[.active]:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/88 group-[.active]:from-black/40 group-[.active]:to-black/80 transition-colors duration-500"></div>

              <!-- Top accent line -->
              <div class="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-[.active]:scale-x-100 transition-transform duration-500"
                   style="background:linear-gradient(90deg,#0ea5e9,#2dd4bf);"></div>

              <!-- Corner accents -->
              <div class="absolute top-0 left-0 w-4 md:w-6 h-[2px] bg-white/20 group-[.active]:bg-[#0ea5e9] transition-colors duration-500"></div>
              <div class="absolute top-0 left-0 w-[2px] h-4 md:h-6 bg-white/20 group-[.active]:bg-[#0ea5e9] transition-colors duration-500"></div>
              <div class="absolute bottom-0 right-0 w-4 md:w-6 h-[2px] bg-white/20 group-[.active]:bg-[#2dd4bf] transition-colors duration-500"></div>
              <div class="absolute bottom-0 right-0 w-[2px] h-4 md:h-6 bg-white/20 group-[.active]:bg-[#2dd4bf] transition-colors duration-500"></div>

              <!-- Header -->
              <div class="relative z-10 w-full flex flex-col items-center mt-2">
                <div class="h-[2px] w-1/3 mb-2 opacity-25 group-[.active]:opacity-100 group-[.active]:w-2/3 transition-all duration-500"
                     style="background:linear-gradient(90deg,#0ea5e9,#2dd4bf);"></div>
                <h3 class="text-gray-500 group-[.active]:text-white/60 text-[8px] md:text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300">
                  {slide.subtitle}
                </h3>
                <h2 class="text-white/40 group-[.active]:text-[#0ea5e9] font-display text-base md:text-2xl mt-1 tracking-wider text-center transition-colors duration-300">
                  {slide.title}
                </h2>
              </div>

              <!-- Center icon -->
              <div class="relative z-10 w-10 h-10 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center bg-black/60 backdrop-blur-md group-[.active]:border-[#0ea5e9]/80 group-[.active]:bg-[#0ea5e9]/15 group-[.active]:scale-110 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     class="text-white/40 group-[.active]:text-[#0ea5e9] md:w-6 md:h-6 transition-colors duration-300">
                  <path d="M5 12h14"/>
                  <path d="M12 5l7 7-7 7"/>
                </svg>
              </div>

              <!-- Bottom CTA -->
              <div class="relative z-10 w-full flex flex-col items-center mb-2 md:mb-4">
                <a
                  href={slide.href}
                  class="px-4 py-1.5 md:px-8 md:py-2 border border-white/20 text-white/40 font-display tracking-widest text-[8px] md:text-xs bg-white/[0.04] hover:bg-white/10 group-[.active]:border-[#0ea5e9] group-[.active]:text-black group-[.active]:bg-[#0ea5e9] group-[.active]:shadow-[0_0_20px_rgba(14,165,233,0.5)] transition-all duration-300"
                  style="clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));"
                >
                  ENTRAR
                </a>
                <div class="flex gap-1 mt-3 md:mt-6 opacity-25 group-[.active]:opacity-100 transition-opacity duration-500">
                  <div class="w-2 h-[3px] bg-white/40 group-[.active]:bg-[#0ea5e9] transition-colors duration-300"></div>
                  <div class="w-6 h-[3px] bg-white/40 group-[.active]:bg-[#0ea5e9] transition-colors duration-300"></div>
                  <div class="w-2 h-[3px] bg-white/40 group-[.active]:bg-[#0ea5e9] transition-colors duration-300"></div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>

    <!-- ── COLUMNA DERECHA ── -->
     <!-- RIGHT COLUMN — ALLIES -->
    <div class="w-full xl:w-[350px] flex flex-col items-center xl:items-end text-center xl:text-right order-3">
      <div class="right-col opacity-0" style="transform:translateX(20px);">

        <div class="inline-flex items-center gap-3 mb-3 justify-end">
          <span class="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-white/40">CONVENIOS</span>
          <span class="w-10 h-[1.5px] block" style="background:rgba(255,255,255,0.15);"></span>
        </div>

        <h3 class="font-display text-2xl lg:text-3xl text-white tracking-[0.22em] uppercase leading-none">
          NUESTROS <span class="text-[#0ea5e9]">ALIADOS</span>
        </h3>
        <div class="h-[1.5px] w-10 mt-3 mb-6 ml-auto"
             style="background:linear-gradient(90deg,transparent,#0ea5e9); font-size: 1.25rem;"></div>

        <div class="flex flex-col items-center xl:items-end gap-3 w-full">
          {institutions.map((inst) => (
            <button
              class="inst-btn group relative px-6 py-3 md:py-4 transition-all duration-350 w-full max-w-[300px] xl:w-[250px] flex items-center justify-center xl:justify-end gap-3 overflow-hidden opacity-0"
              style={`
                clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));
                transform:translateX(16px);
                border:1.5px solid ${inst.color}59;
                background:linear-gradient(135deg,#0a0f1c,#05070d);
                --inst-color:${inst.color};
                --inst-glow:${inst.glow};
              `}
              data-color={inst.color}
              data-glow={inst.glow}
            >
              <span class="inst-fill absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={`background:linear-gradient(135deg,${inst.glow},transparent);`}></span>
              <span class="absolute right-0 top-0 bottom-0 w-[2px] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-400"
                    style={`background:linear-gradient(to top,${inst.color},transparent);`}></span>
              <span class="inst-dot absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                    style={`background:${inst.color};box-shadow:0 0 8px ${inst.color};`}></span>
              
              <!-- Dynamic Icon with Custom Glow -->
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="w-4 h-4 transition-all duration-300 relative z-10 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                   style={`color:${inst.color}; filter: drop-shadow(0 0 6px ${inst.color});`}>
                <path d={inst.path} />
              </svg>

              <span class="text-[10px] md:text-xs font-bold tracking-[0.22em] text-white/70 group-hover:text-white transition-colors duration-300 z-10 relative inst-label">
                {inst.name}
              </span>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                   class="opacity-20 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0 relative z-10 hidden xl:block inst-arrow"
                   style={`color:${inst.color};`}>
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>

  </div>

  <!-- Slide name bottom center -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
    <p id="active-slide-name"
       class="font-display text-[0.65rem] tracking-[0.3em] uppercase"
       style="color:rgba(255,255,255,0.12);transition:opacity 0.3s;"></p>
  </div>

</section>

<style>
  .transform-style-3d { transform-style: preserve-3d; }

  /* Active card — border glow azul ya definido con Tailwind group-[.active] */
  /* Imagen activa escala via Tailwind group-[.active]:scale-105 */

  /* Social Media Premium Buttons */
  .social-btn {
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    position: relative;
  }
  .social-btn:hover {
    transform: translateY(-4px) scale(1.08);
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--social-color) !important;
    box-shadow: 0 0 20px rgba(var(--social-color), 0.4);
  }
  .social-btn::before {
    content: '';
    position: absolute;
    inset: -1.5px;
    background: linear-gradient(135deg, var(--social-color), transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
    clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
  }
  .social-btn:hover::before {
    opacity: 0.45;
  }

  /* Tooltip animations */
  .social-btn:hover .social-tooltip {
    top: -44px;
    opacity: 1;
  }
</style>

<script>
import gsap from 'gsap';

// ── Estado global ─────────────────────────────────────────────────────────
let floatTween:    gsap.core.Tween | null = null;
let autoPlayTween: gsap.core.Tween | null = null;
let resumeTimeout: ReturnType<typeof setTimeout> | null = null;
let userInteracted = false;
let abortController: AbortController | null = null;
let beamRAF: number | null = null;

// ── CLEANUP ────────────────────────────────────────────────────────────────
function cleanup() {
  autoPlayTween?.kill();
  floatTween?.kill();
  autoPlayTween = null;
  floatTween = null;

  if (resumeTimeout) { clearTimeout(resumeTimeout); resumeTimeout = null; }
  abortController?.abort();
  abortController = null;
  userInteracted = false;

  if (beamRAF) { cancelAnimationFrame(beamRAF); beamRAF = null; }

  const spinner = document.querySelector<HTMLElement>('.carousel-spinner');
  if (spinner) { gsap.killTweensOf(spinner); gsap.set(spinner, { clearProps: 'all' }); }
}

// ── BEAM CANVAS ────────────────────────────────────────────────────────────
type Beam = {
  x: number; y: number; vx: number; vy: number;
  life: number; maxLife: number; width: number; color: string;
};

function initBeam() {
  const canvas = document.getElementById('beam-canvas') as HTMLCanvasElement | null;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
  resize();
  window.addEventListener('resize', resize);

  const beams: Beam[] = [];
  const colors = ['rgba(14,165,233,', 'rgba(45,212,191,', 'rgba(29,78,216,'];

  const spawnBeam = () => {
    const w = canvas.width;
    const h = canvas.height;
    const side = Math.random();
    let x = 0, y = 0, vx = 0, vy = 0;
    const speed = 0.35 + Math.random() * 0.75;
    const angle = (Math.random() * 60 - 30) * Math.PI / 180;
    if (side < 0.5) {
      x = side < 0.25 ? 0 : w;
      y = Math.random() * h;
      vx = side < 0.25 ?  Math.cos(angle) * speed : -Math.cos(angle) * speed;
      vy = Math.sin(angle) * speed;
    } else {
      x = Math.random() * w;
      y = side < 0.75 ? 0 : h;
      vx = Math.sin(angle) * speed;
      vy = side < 0.75 ? Math.cos(angle) * speed : -Math.cos(angle) * speed;
    }
    beams.push({
      x, y, vx, vy, life: 0,
      maxLife: 160 + Math.random() * 200,
      width: 0.4 + Math.random() * 1.4,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  };

  for (let i = 0; i < 10; i++) spawnBeam();

  const drawFrame = () => {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    if (Math.random() < 0.04) spawnBeam();

    for (let i = beams.length - 1; i >= 0; i--) {
      const b = beams[i];
      b.life++; b.x += b.vx; b.y += b.vy;
      const p = b.life / b.maxLife;
      let alpha = p < 0.15 ? p / 0.15 : p > 0.75 ? 1 - (p - 0.75) / 0.25 : 1;
      alpha *= 0.3;
      ctx.beginPath();
      ctx.moveTo(b.x - b.vx * 90, b.y - b.vy * 90);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = b.color + alpha + ')';
      ctx.lineWidth = b.width;
      ctx.stroke();
      if (b.life >= b.maxLife) beams.splice(i, 1);
    }
    beamRAF = requestAnimationFrame(drawFrame);
  };
  drawFrame();
}

// ── CAROUSEL INIT ──────────────────────────────────────────────────────────
function initCarousel() {
  cleanup();

  const spinner        = document.querySelector<HTMLElement>('.carousel-spinner');
  const sliderContainer= document.querySelector<HTMLElement>('.slider-container');
  const cards          = document.querySelectorAll<HTMLElement>('.coverflow-card');

  if (!spinner || !sliderContainer || cards.length === 0) return;

  abortController = new AbortController();
  const { signal } = abortController;

  const totalCards = cards.length;
  const theta = 360 / totalCards;
  let radius = 0;
  let activeIndex = 0;

  const calculateRadius = (): number => {
    if (window.innerWidth < 640)  return 160;
    if (window.innerWidth < 1024) return 220;
    return 320;
  };

  const positionCards = () => {
    radius = calculateRadius();
    cards.forEach((card, i) => {
      card.style.transform = `rotateY(${theta * i}deg) translateZ(${radius}px)`;
    });
  };

  const counterEl  = document.getElementById('counter-current');
  const nameEl     = document.getElementById('active-slide-name');

  const updateCards = (animate = true) => {
    const rotation = -activeIndex * theta;
    if (animate) {
      gsap.to(spinner, { z: -radius, rotationY: rotation, duration: 0.85, ease: 'power3.out' });
    } else {
      gsap.set(spinner, { z: -radius, rotationY: rotation });
    }
    const norm = ((activeIndex % totalCards) + totalCards) % totalCards;
    cards.forEach((card, i) => card.classList.toggle('active', i === norm));

    if (counterEl) counterEl.textContent = String(norm + 1).padStart(2, '0');
    if (nameEl) {
      const ne = nameEl;
      gsap.to(ne, { opacity: 0, duration: 0.18, onComplete: () => {
        const titleEl = cards[norm].querySelector<HTMLElement>('.card-title-js');
        ne.textContent = titleEl?.textContent ?? '';
        gsap.to(ne, { opacity: 1, duration: 0.28 });
      }});
    }
  };

  const startAutoPlay = () => {
    autoPlayTween?.kill();
    autoPlayTween = gsap.delayedCall(3.5, () => {
      if (!userInteracted) { activeIndex++; updateCards(); startAutoPlay(); }
    });
  };

  const onUserInteraction = () => {
    userInteracted = true;
    autoPlayTween?.kill();
    if (resumeTimeout) clearTimeout(resumeTimeout);
    resumeTimeout = setTimeout(() => { userInteracted = false; startAutoPlay(); }, 5000);
  };

  // Init
  positionCards();
  updateCards(false);

  floatTween = gsap.to(spinner, { y: -10, duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1 });

  startAutoPlay();
  initBeam();

  // ── REVEAL animations ──
  gsap.fromTo('.left-reveal-logo', { opacity: 0, scale: 0.8, y: -20 }, { opacity: 1, scale: 1, y: 0, duration: 0.8, delay: 0.05, ease: 'back.out(1.7)' });
  gsap.to('.left-reveal-1', { opacity: 1, y: 0, duration: 0.7, delay: 0.15, stagger: 0.08, ease: 'power3.out' });
  gsap.to('.left-reveal-2', { opacity: 1, y: 0, duration: 0.7, delay: 0.3,  stagger: 0.08, ease: 'power3.out' });
  gsap.to('.left-reveal-social', { opacity: 1, duration: 0.6, delay: 0.4, ease: 'power3.out' });
  gsap.fromTo('.social-btn', { opacity: 0, y: 15, scale: 0.8 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, delay: 0.45, stagger: 0.08, ease: 'power3.out' });
  gsap.to('.left-reveal-3', { opacity: 1, duration: 0.6, delay: 0.65, ease: 'power3.out' });
  gsap.fromTo(cards, { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 0.65, delay: 0.2, ease: 'power3.out' });
  gsap.to('.right-col', { opacity: 1, x: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' });
  gsap.to('.inst-btn', { opacity: 1, x: 0, duration: 0.6, delay: 0.5, stagger: 0.08, ease: 'power3.out' });
  setTimeout(() => {
    const ll = document.getElementById('left-line');
    if (ll) ll.style.width = '56px';
  }, 500);

  // ── Visibility ──
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { floatTween?.pause(); autoPlayTween?.kill(); }
    else { floatTween?.resume(); if (!userInteracted) startAutoPlay(); }
  }, { signal });

  // ── Card click ──
  cards.forEach(card => {
    card.addEventListener('click', e => {
      if ((e.target as HTMLElement).closest('a')) return;
      const index = parseInt(card.getAttribute('data-index') ?? '0');
      const norm  = ((activeIndex % totalCards) + totalCards) % totalCards;
      onUserInteraction();
      if (norm !== index) {
        let diff = index - norm;
        if (diff >  totalCards / 2) diff -= totalCards;
        if (diff < -totalCards / 2) diff += totalCards;
        activeIndex += diff;
        updateCards();
      } else {
        gsap.fromTo(card, { scale: 0.95 }, { scale: 1, duration: 0.4, ease: 'back.out(2)' });
      }
    }, { signal });
  });

  // ── Arrow buttons ──
  document.getElementById('btn-prev')?.addEventListener('click', () => {
    onUserInteraction(); activeIndex--; updateCards();
  }, { signal });
  document.getElementById('btn-next')?.addEventListener('click', () => {
    onUserInteraction(); activeIndex++; updateCards();
  }, { signal });

  // ── Wheel ──
  let wheelTO: ReturnType<typeof setTimeout>;
  sliderContainer.addEventListener('wheel', (e: WheelEvent) => {
    e.preventDefault();
    clearTimeout(wheelTO);
    wheelTO = setTimeout(() => {
      onUserInteraction();
      activeIndex += (e.deltaY > 0 || e.deltaX > 0) ? 1 : -1;
      updateCards();
    }, 50);
  }, { passive: false, signal });

  // ── Touch ──
  let touchStartX = 0, touchStartY = 0;
  sliderContainer.addEventListener('touchstart', (e: TouchEvent) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true, signal });
  sliderContainer.addEventListener('touchend', (e: TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      onUserInteraction();
      activeIndex += dx < 0 ? 1 : -1;
      updateCards();
    }
  }, { passive: true, signal });

  // ── Resize ──
  window.addEventListener('resize', () => { positionCards(); updateCards(false); }, { signal });
}

// ── ASTRO LIFECYCLE ────────────────────────────────────────────────────────
document.addEventListener('astro:before-swap', cleanup);
document.addEventListener('astro:page-load', initCarousel);
if (document.readyState !== 'loading') initCarousel();
else document.addEventListener('DOMContentLoaded', initCarousel);
</script>






secction en caso de haber un error

<section class="container mx-auto px-6 relative z-10 mb-36" id="mision-vision-section">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- MISIÓN -->
        <div class="relative group overflow-hidden select-none reveal-item" style="perspective:1000px;">
          <!-- Glowing Border Frame using clip-path -->
          <div class="absolute inset-0 p-[1.5px] transition-all duration-500 group-hover:scale-[1.01]"
               style="
                 clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
                 background: linear-gradient(135deg, #0ea5e9, #2dd4bf);
               ">
            <div class="w-full h-full bg-[#060606]/90 backdrop-blur-md relative p-8 md:p-10 flex flex-col justify-between"
                 style="clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px)); min-height: 310px;">
              
              <!-- Content Header -->
              <div class="text-left">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-8 h-8 rounded-lg flex items-center justify-center border" style="border-color: rgba(14, 165, 233, 0.3); background: rgba(14, 165, 233, 0.05); color: #0ea5e9;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"/>
                    </svg>
                  </div>
                  <h2 class="text-3xl font-display font-bold text-white tracking-widest uppercase">MISIÓN</h2>
                </div>
                
                <div class="h-[2px] w-12 bg-gradient-to-r from-[#0ea5e9] to-[#2dd4bf] mb-6"></div>
                
                <p class="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                  Promover el desarrollo integral de las personas en diferentes etapas de su 
                  vida mediante actividades de formación con enfoque deportivo y programas educativos 
                  complementarios innovadores, impulsando el aprendizaje, la salud física, el bienestar 
                  emocional, la construcción de valores y la inclusión social.
                </p>
              </div>

              <!-- Tech accents -->
              <div class="absolute top-0 left-0 w-4 h-[1.5px] bg-[#0ea5e9]"></div>
              <div class="absolute top-0 left-0 w-[1.5px] h-4 bg-[#0ea5e9]"></div>
              <div class="absolute bottom-0 right-0 w-4 h-[1.5px] bg-[#2dd4bf]"></div>
              <div class="absolute bottom-0 right-0 w-[1.5px] h-4 bg-[#2dd4bf]"></div>
            </div>
          </div>
        </div>

        <!-- VISIÓN -->
        <div class="relative group overflow-hidden select-none reveal-item" style="perspective:1000px;">
          <!-- Glowing Border Frame using clip-path -->
          <div class="absolute inset-0 p-[1.5px] transition-all duration-500 group-hover:scale-[1.01]"
               style="
                 clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
                 background: linear-gradient(135deg, #f59e0b, #eab308);
               ">
            <div class="w-full h-full bg-[#060606]/90 backdrop-blur-md relative p-8 md:p-10 flex flex-col justify-between"
                 style="clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px)); min-height: 310px;">
              
              <!-- Content Header -->
              <div class="text-left">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-8 h-8 rounded-lg flex items-center justify-center border" style="border-color: rgba(245, 158, 11, 0.3); background: rgba(245, 158, 11, 0.05); color: #f59e0b;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                  <h2 class="text-3xl font-display font-bold text-white tracking-widest uppercase">VISIÓN</h2>
                </div>
                
                <div class="h-[2px] w-12 bg-gradient-to-r from-[#f59e0b] to-[#eab308] mb-6"></div>
                
                <p class="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                  Ser una institución de referencia nacional reconocida por su excelencia para promover 
                  un ecosistema de formación integral de talento deportivo de alto rendimiento, logrando 
                  el bienestar y salud en la comunidad, haciendo que el deporte sea un pilar fundamental 
                  para una vida plena y un motor de desarrollo social con conciencia ambiental.
                </p>
              </div>

              <!-- Tech accents -->
              <div class="absolute top-0 left-0 w-4 h-[1.5px] bg-[#f59e0b]"></div>
              <div class="absolute top-0 left-0 w-[1.5px] h-4 bg-[#f59e0b]"></div>
              <div class="absolute bottom-0 right-0 w-4 h-[1.5px] bg-[#eab308]"></div>
              <div class="absolute bottom-0 right-0 w-[1.5px] h-4 bg-[#eab308]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>






bash

cat > /mnt/user-data/outputs/CoverflowV3.astro << 'ENDOFFILE'






---
const slides = [
  { id: 1, title: "INFOCADE",       subtitle: "Instituto Deportivo",      image: "/images/mix5.webp",  href: "/infocade"    },
  { id: 2, title: "CENACAP",        subtitle: "Centro de Capacitacion",   image: "/images/mix3.webp",  href: "/cenacap"     },
  { id: 3, title: "NUEVO SIGLO",    subtitle: "Formacion Profesional",    image: "/images/mix4.webp", href: "/nuevo-ciclo" },
  { id: 4, title: "FUNDECT",        subtitle: "Fundacion Educativa",      image: "/images/mix2.webp",  href: "/fundect"     },
  { id: 5, title: "CLUB DE LEONES", subtitle: "Accion Civica y Social",   image: "/images/mix1.webp",  href: "/club-leones" },
];

const institutions = [
  { 
    name: "INAF",         
    color: "#f59e0b", 
    glow: "rgba(245,158,11,0.25)",
    path: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z M2 12h20"
  },
  { 
    name: "UNITEP",       
    color: "#10b981", 
    glow: "rgba(16,185,129,0.25)",
    path: "M22 10v6M2 10l10-5 10 5-10 5z M6 12.5V16a6 6 0 0 0 12 0v-3.5"
  },
  { 
    name: "UNIFRANZ",     
    color: "#8b5cf6", 
    glow: "rgba(139,92,246,0.25)",
    path: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z"
  },
  { 
    name: "CLUB OLIMPIC", 
    color: "#ef4444", 
    glow: "rgba(239,68,68,0.25)",
    path: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6 M18 9h1.5a2.5 2.5 0 0 0 0-5H18 M4 22h16 M10 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34 M12 2a5 5 0 0 0-5 5v3c0 2.2 1.8 4 4 4h2c2.2 0 4-1.8 4-4V7a5 5 0 0 0-5-5z"
  },
  { 
    name: "INTRASPORTS",  
    color: "#0ea5e9", 
    glow: "rgba(14,165,233,0.25)",
    path: "M13 2L3 14h9l-1 8 10-12h-9l1-8z"
  },
];
---

<section
  class="relative min-h-screen w-full flex items-center justify-center overflow-x-hidden bg-transparent coverflow-section py-40 xl:py-0"
  transition:animate="none"
>

  <!-- ── BEAM CANVAS ── -->
  <canvas id="beam-canvas" class="absolute inset-0 w-full h-full z-0 pointer-events-none"></canvas>

  <!-- Glow orb central azul -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full pointer-events-none z-0"
       style="background:radial-gradient(ellipse,rgba(14,165,233,0.07) 0%,transparent 70%);filter:blur(24px);"></div>

  <!-- ── LAYOUT 3 COLUMNAS ── -->
  <div class="relative z-50 w-full max-w-[1600px] mx-auto px-6 md:px-10 flex flex-col xl:flex-row items-center justify-between gap-16 xl:gap-4">

    <!-- ── COLUMNA IZQUIERDA ── -->
    <div class="w-full xl:w-[350px] flex flex-col items-center xl:items-start text-center xl:text-left order-1 left-col">
      <!-- Brand Logo Container -->
      <div class="relative mb-6 opacity-0 left-reveal-logo group flex items-center justify-center xl:justify-start">
        <img src="/images/milogo.webp" alt="Logo Corporación" 
             class="h-24 md:h-28 w-auto object-contain transition-all duration-500 group-hover:scale-105 pointer-events-auto" 
             style="filter: drop-shadow(0 0 20px rgba(14,165,233,0.3));" />
      </div>

      <!-- Title -->
      <h1 class="font-display text-4xl md:text-4xl text-white tracking-widest uppercase leading-none opacity-0 left-reveal-1"
          style="text-shadow:0 0 40px rgba(14,165,233,0.15);">
        CORPORACION BOLIVIANA DE TALENTO Y FORMACION INTEGRAL
      </h1>

      

      <!-- Animated line -->
      <div id="left-line"
           class="h-[2px] mb-5 origin-left"
           style="width:0;background:linear-gradient(90deg,#0ea5e9,#2dd4bf);transition:width 1s ease;"></div>

      <!-- Description -->
      <p class="text-gray-500 text-xs md:text-sm leading-relaxed max-w-md xl:max-w-sm text-left opacity-0 left-reveal-2">
        Entidad orientada a la formación integral del talento boliviano, que integra programas académicos, cívicos y deportivos mediante alianzas estratégicas.
      </p>

      <!-- Social Media Icons (WhatsApp, Facebook, Instagram, TikTok) -->
      <div class="flex items-center gap-3 mt-6 opacity-0 left-reveal-social">
        <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer"
           class="social-btn group relative w-10 h-10 flex items-center justify-center border transition-all duration-300"
           style="border-color: rgba(37,211,102,0.3); background: rgba(37,211,102,0.05); clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px)); --social-color: #25D366;"
           aria-label="WhatsApp">
          <span class="social-tooltip absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black/90 border rounded text-[9px] font-bold tracking-widest uppercase opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 z-50 text-white whitespace-nowrap shadow-lg"
                style="border-color: #25D366; clip-path: polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px));">
            WhatsApp
          </span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-white/60 group-hover:text-[#25D366] transition-colors duration-300">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.13-1.347a9.947 9.947 0 0 0 4.881 1.279h.005c5.505 0 9.988-4.478 9.99-9.985 0-2.67-1.037-5.18-2.92-7.065A9.925 9.925 0 0 0 12.012 2zm5.727 14.123c-.253.715-1.47 1.387-2.022 1.478-.497.082-1.135.15-3.32-.756-2.793-1.157-4.595-4.004-4.736-4.193-.14-.188-1.136-1.51-1.136-2.88 0-1.37.718-2.043.97-2.317.254-.275.563-.343.75-.343.187 0 .375.002.537.01.17.008.402-.065.63.486.23.557.788 1.92.857 2.062.069.141.115.306.022.493-.092.188-.138.305-.276.467-.137.16-.29.356-.413.478-.138.136-.282.285-.121.562.162.277.72 1.184 1.543 1.916.822.732 1.517.957 1.733 1.05.215.093.342.079.467-.066.126-.145.539-.627.683-.84.143-.214.287-.18.483-.107.195.074 1.238.583 1.452.69.214.108.356.162.408.252.052.09.052.522-.201 1.238z"/>
          </svg>
        </a>

        <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer"
           class="social-btn group relative w-10 h-10 flex items-center justify-center border transition-all duration-300"
           style="border-color: rgba(24,119,242,0.3); background: rgba(24,119,242,0.05); clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px)); --social-color: #1877F2;"
           aria-label="Facebook">
          <span class="social-tooltip absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black/90 border rounded text-[9px] font-bold tracking-widest uppercase opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 z-50 text-white whitespace-nowrap shadow-lg"
                style="border-color: #1877F2; clip-path: polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px));">
            Facebook
          </span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-white/60 group-hover:text-[#1877F2] transition-colors duration-300">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
          </svg>
        </a>

        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"
           class="social-btn group relative w-10 h-10 flex items-center justify-center border transition-all duration-300"
           style="border-color: rgba(228,64,95,0.3); background: rgba(228,64,95,0.05); clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px)); --social-color: #E4405F;"
           aria-label="Instagram">
          <span class="social-tooltip absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black/90 border rounded text-[9px] font-bold tracking-widest uppercase opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 z-50 text-white whitespace-nowrap shadow-lg"
                style="border-color: #E4405F; clip-path: polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px));">
            Instagram
          </span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-white/60 group-hover:text-[#E4405F] transition-colors duration-300">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
          </svg>
        </a>

        <a href="https://tiktok.com/@yourhandle" target="_blank" rel="noopener noreferrer"
           class="social-btn group relative w-10 h-10 flex items-center justify-center border transition-all duration-300"
           style="border-color: rgba(255,255,255,0.2); background: rgba(255,255,255,0.03); clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px)); --social-color: #ffffff;"
           aria-label="TikTok">
          <span class="social-tooltip absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black/90 border rounded text-[9px] font-bold tracking-widest uppercase opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 z-50 text-white whitespace-nowrap shadow-lg"
                style="border-color: #ffffff; clip-path: polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px));">
            TikTok
          </span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-white/60 group-hover:text-white transition-colors duration-300">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .8.11V9.4a6.27 6.27 0 0 0-8.31 6A6.25 6.25 0 0 0 12 21.67a6.24 6.24 0 0 0 6.25-6.25v-8.2a8.73 8.73 0 0 0 4.74 1.48V5.3a5.22 5.22 0 0 1-3.4-1.28z"/>
          </svg>
        </a>
      </div>

      <!-- Nav arrows + counter -->
      <div class="flex items-center gap-3 mt-8 opacity-0 left-reveal-3">
        <button id="btn-prev"
                class="w-10 h-10 border border-white/10 bg-white/[0.03] flex items-center justify-center transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07]"
                style="clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));"
                aria-label="Anterior">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-white/40"><path d="M19 12H5"/><path d="m12 5-7 7 7 7"/></svg>
        </button>
        <button id="btn-next"
                class="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]"
                style="border:1.5px solid rgba(14,165,233,0.45);background:rgba(14,165,233,0.07);clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));"
                aria-label="Siguiente">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:#0ea5e9;"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>

        <div class="ml-2 font-display text-xs tracking-[0.2em]" style="color:rgba(255,255,255,0.2);">
          <span id="counter-current" style="color:#0ea5e9;">01</span>
          <span class="mx-1">/</span>
          <span>0{slides.length}</span>
        </div>
      </div>
    </div>

    <!-- ── COLUMNA CENTRAL — CARRUSEL ORIGINAL ── -->
    <div
      class="relative w-full xl:flex-1 h-[380px] md:h-[450px] lg:h-[500px] flex items-center justify-center z-20 slider-container pointer-events-auto order-2"
      style="perspective:1200px;"
    >
      <div
        class="relative w-[160px] md:w-[220px] lg:w-[260px] h-[260px] md:h-[360px] lg:h-[420px] transform-style-3d carousel-spinner"
        style="will-change:transform;"
      >
        {slides.map((slide, index) => (
          <div
            class="absolute top-0 left-0 w-full h-full cursor-pointer coverflow-card group"
            data-index={index}
          >
            <div class="w-full h-full relative flex flex-col items-center justify-between p-3 md:p-4 bg-[#060606]/92 backdrop-blur-md border border-white/[0.07] group-[.active]:border-[#0ea5e9]/50 group-[.active]:shadow-[0_0_50px_rgba(14,165,233,0.2),0_0_0_1px_rgba(14,165,233,0.12)] transition-all duration-500 overflow-hidden"
                 style="clip-path:polygon(10% 0,100% 0,100% 90%,90% 100%,0 100%,0 10%);">

              <!-- BG image -->
              <img src={slide.image} alt={slide.title}
                   class="absolute inset-0 w-full h-full object-cover opacity-35 group-[.active]:opacity-80 transition-all duration-500 pointer-events-none grayscale group-[.active]:grayscale-0 group-[.active]:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/88 group-[.active]:from-black/40 group-[.active]:to-black/80 transition-colors duration-500"></div>

              <!-- Top accent line -->
              <div class="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-[.active]:scale-x-100 transition-transform duration-500"
                   style="background:linear-gradient(90deg,#0ea5e9,#2dd4bf);"></div>

              <!-- Corner accents -->
              <div class="absolute top-0 left-0 w-4 md:w-6 h-[2px] bg-white/20 group-[.active]:bg-[#0ea5e9] transition-colors duration-500"></div>
              <div class="absolute top-0 left-0 w-[2px] h-4 md:h-6 bg-white/20 group-[.active]:bg-[#0ea5e9] transition-colors duration-500"></div>
              <div class="absolute bottom-0 right-0 w-4 md:w-6 h-[2px] bg-white/20 group-[.active]:bg-[#2dd4bf] transition-colors duration-500"></div>
              <div class="absolute bottom-0 right-0 w-[2px] h-4 md:h-6 bg-white/20 group-[.active]:bg-[#2dd4bf] transition-colors duration-500"></div>

              <!-- Header -->
              <div class="relative z-10 w-full flex flex-col items-center mt-2">
                <div class="h-[2px] w-1/3 mb-2 opacity-25 group-[.active]:opacity-100 group-[.active]:w-2/3 transition-all duration-500"
                     style="background:linear-gradient(90deg,#0ea5e9,#2dd4bf);"></div>
                <h3 class="text-gray-500 group-[.active]:text-white/60 text-[8px] md:text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300">
                  {slide.subtitle}
                </h3>
                <h2 class="text-white/40 group-[.active]:text-[#0ea5e9] font-display text-base md:text-2xl mt-1 tracking-wider text-center transition-colors duration-300">
                  {slide.title}
                </h2>
              </div>
              <!-- Bottom CTA -->
              <div class="relative z-10 w-full flex flex-col items-center mb-2 md:mb-4">
                <a
                  href={slide.href}
                  class="px-4 py-1.5 md:px-8 md:py-2 border border-white/20 text-white/40 font-display tracking-widest text-[8px] md:text-xs bg-white/[0.04] hover:bg-white/10 group-[.active]:border-[#0ea5e9] group-[.active]:text-black group-[.active]:bg-[#0ea5e9] group-[.active]:shadow-[0_0_20px_rgba(14,165,233,0.5)] transition-all duration-300"
                  style="clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));"
                >
                  ENTRAR
                </a>
                <div class="flex gap-1 mt-3 md:mt-6 opacity-25 group-[.active]:opacity-100 transition-opacity duration-500">
                  <div class="w-2 h-[3px] bg-white/40 group-[.active]:bg-[#0ea5e9] transition-colors duration-300"></div>
                  <div class="w-6 h-[3px] bg-white/40 group-[.active]:bg-[#0ea5e9] transition-colors duration-300"></div>
                  <div class="w-2 h-[3px] bg-white/40 group-[.active]:bg-[#0ea5e9] transition-colors duration-300"></div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>

    <!-- ── COLUMNA DERECHA ── -->
     <!-- RIGHT COLUMN — ALLIES -->
    <div class="w-full xl:w-[350px] flex flex-col items-center xl:items-end text-center xl:text-right order-3">
      <div class="right-col opacity-0" style="transform:translateX(20px);">

        <div class="inline-flex items-center gap-3 mb-3 justify-end">
          <span class="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-white/40">CONVENIOS</span>
          <span class="w-10 h-[1.5px] block" style="background:rgba(255,255,255,0.15);"></span>
        </div>

        <h3 class="font-display text-2xl lg:text-3xl text-white tracking-[0.22em] uppercase leading-none">
          NUESTROS <span class="text-[#0ea5e9]">ALIADOS</span>
        </h3>
        <div class="h-[1.5px] w-10 mt-3 mb-6 ml-auto"
             style="background:linear-gradient(90deg,transparent,#0ea5e9); font-size: 1.25rem;"></div>

        <div class="flex flex-col items-center xl:items-end gap-3 w-full">
          {institutions.map((inst) => (
            <button
              class="inst-btn group relative px-6 py-3 md:py-4 transition-all duration-350 w-full max-w-[300px] xl:w-[250px] flex items-center justify-center xl:justify-end gap-3 overflow-hidden opacity-0"
              style={`
                clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));
                transform:translateX(16px);
                border:1.5px solid ${inst.color}59;
                background:linear-gradient(135deg,#0a0f1c,#05070d);
                --inst-color:${inst.color};
                --inst-glow:${inst.glow};
              `}
              data-color={inst.color}
              data-glow={inst.glow}
            >
              <span class="inst-fill absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={`background:linear-gradient(135deg,${inst.glow},transparent);`}></span>
              <span class="absolute right-0 top-0 bottom-0 w-[2px] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-400"
                    style={`background:linear-gradient(to top,${inst.color},transparent);`}></span>
              <span class="inst-dot absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                    style={`background:${inst.color};box-shadow:0 0 8px ${inst.color};`}></span>
              
              <!-- Dynamic Icon with Custom Glow -->
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="w-4 h-4 transition-all duration-300 relative z-10 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                   style={`color:${inst.color}; filter: drop-shadow(0 0 6px ${inst.color});`}>
                <path d={inst.path} />
              </svg>

              <span class="text-[10px] md:text-xs font-bold tracking-[0.22em] text-white/70 group-hover:text-white transition-colors duration-300 z-10 relative inst-label">
                {inst.name}
              </span>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                   class="opacity-20 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0 relative z-10 hidden xl:block inst-arrow"
                   style={`color:${inst.color};`}>
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>

  </div>

  <!-- Slide name bottom center -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
    <p id="active-slide-name"
       class="font-display text-[0.65rem] tracking-[0.3em] uppercase"
       style="color:rgba(255,255,255,0.12);transition:opacity 0.3s;"></p>
  </div>

</section>

<style>
  .transform-style-3d { transform-style: preserve-3d; }

  /* Active card — border glow azul ya definido con Tailwind group-[.active] */
  /* Imagen activa escala via Tailwind group-[.active]:scale-105 */

  /* Social Media Premium Buttons */
  .social-btn {
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    position: relative;
  }
  .social-btn:hover {
    transform: translateY(-4px) scale(1.08);
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--social-color) !important;
    box-shadow: 0 0 20px rgba(var(--social-color), 0.4);
  }
  .social-btn::before {
    content: '';
    position: absolute;
    inset: -1.5px;
    background: linear-gradient(135deg, var(--social-color), transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
    clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
  }
  .social-btn:hover::before {
    opacity: 0.45;
  }

  /* Tooltip animations */
  .social-btn:hover .social-tooltip {
    top: -44px;
    opacity: 1;
  }
</style>

<script>
import gsap from 'gsap';

// ── Estado global ─────────────────────────────────────────────────────────
let floatTween:    gsap.core.Tween | null = null;
let autoPlayTween: gsap.core.Tween | null = null;
let resumeTimeout: ReturnType<typeof setTimeout> | null = null;
let userInteracted = false;
let abortController: AbortController | null = null;
let beamRAF: number | null = null;

// ── CLEANUP ────────────────────────────────────────────────────────────────
function cleanup() {
  autoPlayTween?.kill();
  floatTween?.kill();
  autoPlayTween = null;
  floatTween = null;

  if (resumeTimeout) { clearTimeout(resumeTimeout); resumeTimeout = null; }
  abortController?.abort();
  abortController = null;
  userInteracted = false;

  if (beamRAF) { cancelAnimationFrame(beamRAF); beamRAF = null; }

  const spinner = document.querySelector<HTMLElement>('.carousel-spinner');
  if (spinner) { gsap.killTweensOf(spinner); gsap.set(spinner, { clearProps: 'all' }); }
}

// ── BEAM CANVAS ────────────────────────────────────────────────────────────
type Beam = {
  x: number; y: number; vx: number; vy: number;
  life: number; maxLife: number; width: number; color: string;
};

function initBeam() {
  const canvas = document.getElementById('beam-canvas') as HTMLCanvasElement | null;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
  resize();
  window.addEventListener('resize', resize);

  const beams: Beam[] = [];
  const colors = ['rgba(14,165,233,', 'rgba(45,212,191,', 'rgba(29,78,216,'];

  const spawnBeam = () => {
    const w = canvas.width;
    const h = canvas.height;
    const side = Math.random();
    let x = 0, y = 0, vx = 0, vy = 0;
    const speed = 0.35 + Math.random() * 0.75;
    const angle = (Math.random() * 60 - 30) * Math.PI / 180;
    if (side < 0.5) {
      x = side < 0.25 ? 0 : w;
      y = Math.random() * h;
      vx = side < 0.25 ?  Math.cos(angle) * speed : -Math.cos(angle) * speed;
      vy = Math.sin(angle) * speed;
    } else {
      x = Math.random() * w;
      y = side < 0.75 ? 0 : h;
      vx = Math.sin(angle) * speed;
      vy = side < 0.75 ? Math.cos(angle) * speed : -Math.cos(angle) * speed;
    }
    beams.push({
      x, y, vx, vy, life: 0,
      maxLife: 160 + Math.random() * 200,
      width: 0.4 + Math.random() * 1.4,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  };

  for (let i = 0; i < 10; i++) spawnBeam();

  const drawFrame = () => {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    if (Math.random() < 0.04) spawnBeam();

    for (let i = beams.length - 1; i >= 0; i--) {
      const b = beams[i];
      b.life++; b.x += b.vx; b.y += b.vy;
      const p = b.life / b.maxLife;
      let alpha = p < 0.15 ? p / 0.15 : p > 0.75 ? 1 - (p - 0.75) / 0.25 : 1;
      alpha *= 0.3;
      ctx.beginPath();
      ctx.moveTo(b.x - b.vx * 90, b.y - b.vy * 90);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = b.color + alpha + ')';
      ctx.lineWidth = b.width;
      ctx.stroke();
      if (b.life >= b.maxLife) beams.splice(i, 1);
    }
    beamRAF = requestAnimationFrame(drawFrame);
  };
  drawFrame();
}

// ── CAROUSEL INIT ──────────────────────────────────────────────────────────
function initCarousel() {
  cleanup();

  const spinner        = document.querySelector<HTMLElement>('.carousel-spinner');
  const sliderContainer= document.querySelector<HTMLElement>('.slider-container');
  const cards          = document.querySelectorAll<HTMLElement>('.coverflow-card');

  if (!spinner || !sliderContainer || cards.length === 0) return;

  abortController = new AbortController();
  const { signal } = abortController;

  const totalCards = cards.length;
  const theta = 360 / totalCards;
  let radius = 0;
  let activeIndex = 0;

  const calculateRadius = (): number => {
    if (window.innerWidth < 640)  return 160;
    if (window.innerWidth < 1024) return 220;
    return 320;
  };

  const positionCards = () => {
    radius = calculateRadius();
    cards.forEach((card, i) => {
      card.style.transform = `rotateY(${theta * i}deg) translateZ(${radius}px)`;
    });
  };

  const counterEl  = document.getElementById('counter-current');
  const nameEl     = document.getElementById('active-slide-name');

  const updateCards = (animate = true) => {
    const rotation = -activeIndex * theta;
    if (animate) {
      gsap.to(spinner, { z: -radius, rotationY: rotation, duration: 0.85, ease: 'power3.out' });
    } else {
      gsap.set(spinner, { z: -radius, rotationY: rotation });
    }
    const norm = ((activeIndex % totalCards) + totalCards) % totalCards;
    cards.forEach((card, i) => card.classList.toggle('active', i === norm));

    if (counterEl) counterEl.textContent = String(norm + 1).padStart(2, '0');
    if (nameEl) {
      const ne = nameEl;
      gsap.to(ne, { opacity: 0, duration: 0.18, onComplete: () => {
        const titleEl = cards[norm].querySelector<HTMLElement>('.card-title-js');
        ne.textContent = titleEl?.textContent ?? '';
        gsap.to(ne, { opacity: 1, duration: 0.28 });
      }});
    }
  };

  const startAutoPlay = () => {
    autoPlayTween?.kill();
    autoPlayTween = gsap.delayedCall(3.5, () => {
      if (!userInteracted) { activeIndex++; updateCards(); startAutoPlay(); }
    });
  };

  const onUserInteraction = () => {
    userInteracted = true;
    autoPlayTween?.kill();
    if (resumeTimeout) clearTimeout(resumeTimeout);
    resumeTimeout = setTimeout(() => { userInteracted = false; startAutoPlay(); }, 5000);
  };

  // Init
  positionCards();
  updateCards(false);

  floatTween = gsap.to(spinner, { y: -10, duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1 });

  startAutoPlay();
  initBeam();

  // ── REVEAL animations ──
  gsap.fromTo('.left-reveal-logo', { opacity: 0, scale: 0.8, y: -20 }, { opacity: 1, scale: 1, y: 0, duration: 0.8, delay: 0.05, ease: 'back.out(1.7)' });
  gsap.to('.left-reveal-1', { opacity: 1, y: 0, duration: 0.7, delay: 0.15, stagger: 0.08, ease: 'power3.out' });
  gsap.to('.left-reveal-2', { opacity: 1, y: 0, duration: 0.7, delay: 0.3,  stagger: 0.08, ease: 'power3.out' });
  gsap.to('.left-reveal-social', { opacity: 1, duration: 0.6, delay: 0.4, ease: 'power3.out' });
  gsap.fromTo('.social-btn', { opacity: 0, y: 15, scale: 0.8 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, delay: 0.45, stagger: 0.08, ease: 'power3.out' });
  gsap.to('.left-reveal-3', { opacity: 1, duration: 0.6, delay: 0.65, ease: 'power3.out' });
  gsap.fromTo(cards, { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 0.65, delay: 0.2, ease: 'power3.out' });
  gsap.to('.right-col', { opacity: 1, x: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' });
  gsap.to('.inst-btn', { opacity: 1, x: 0, duration: 0.6, delay: 0.5, stagger: 0.08, ease: 'power3.out' });
  setTimeout(() => {
    const ll = document.getElementById('left-line');
    if (ll) ll.style.width = '56px';
  }, 500);

  // ── Visibility ──
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { floatTween?.pause(); autoPlayTween?.kill(); }
    else { floatTween?.resume(); if (!userInteracted) startAutoPlay(); }
  }, { signal });

  // ── Card click ──
  cards.forEach(card => {
    card.addEventListener('click', e => {
      if ((e.target as HTMLElement).closest('a')) return;
      const index = parseInt(card.getAttribute('data-index') ?? '0');
      const norm  = ((activeIndex % totalCards) + totalCards) % totalCards;
      onUserInteraction();
      if (norm !== index) {
        let diff = index - norm;
        if (diff >  totalCards / 2) diff -= totalCards;
        if (diff < -totalCards / 2) diff += totalCards;
        activeIndex += diff;
        updateCards();
      } else {
        gsap.fromTo(card, { scale: 0.95 }, { scale: 1, duration: 0.4, ease: 'back.out(2)' });
      }
    }, { signal });
  });

  // ── Arrow buttons ──
  document.getElementById('btn-prev')?.addEventListener('click', () => {
    onUserInteraction(); activeIndex--; updateCards();
  }, { signal });
  document.getElementById('btn-next')?.addEventListener('click', () => {
    onUserInteraction(); activeIndex++; updateCards();
  }, { signal });

  // ── Wheel ──
  let wheelTO: ReturnType<typeof setTimeout>;
  sliderContainer.addEventListener('wheel', (e: WheelEvent) => {
    e.preventDefault();
    clearTimeout(wheelTO);
    wheelTO = setTimeout(() => {
      onUserInteraction();
      activeIndex += (e.deltaY > 0 || e.deltaX > 0) ? 1 : -1;
      updateCards();
    }, 50);
  }, { passive: false, signal });

  // ── Touch ──
  let touchStartX = 0, touchStartY = 0;
  sliderContainer.addEventListener('touchstart', (e: TouchEvent) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true, signal });
  sliderContainer.addEventListener('touchend', (e: TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      onUserInteraction();
      activeIndex += dx < 0 ? 1 : -1;
      updateCards();
    }
  }, { passive: true, signal });

  // ── Resize ──
  window.addEventListener('resize', () => { positionCards(); updateCards(false); }, { signal });
}

// ── ASTRO LIFECYCLE ────────────────────────────────────────────────────────
document.addEventListener('astro:before-swap', cleanup);
document.addEventListener('astro:page-load', initCarousel);
if (document.readyState !== 'loading') initCarousel();
else document.addEventListener('DOMContentLoaded', initCarousel);
</script>