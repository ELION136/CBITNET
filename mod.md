---
const slides = [
  { id: 1, title: "INFOCADE",      subtitle: "Instituto Deportivo",       image: "/images/ima2.jpg", href: "/infocade"     },
  { id: 2, title: "CENACAP",       subtitle: "Centro de Capacitacion",    image: "/images/ima3.jpg", href: "/cenacap"      },
  { id: 3, title: "NUEVO SIGLO",   subtitle: "Formacion Profesional",     image: "/images/head1.jpg", href: "/nuevo-ciclo" },
  { id: 4, title: "FUNDECT",       subtitle: "Fundacion Educativa",       image: "/images/ima4.jpg", href: "/fundect"      },
  { id: 5, title: "CLUB DE LEONES", subtitle: "Accion Civica y Social",  image: "/images/ima5.jpg", href: "/club-leones"  },
];

const institutions = ["INAF","UNITEP","UNIFRANZ","CLUB OLIMPIC","INTRASPORTS"];
---

<section class="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black coverflow-section py-28 xl:py-0">

  <!-- ── ANIMATED BEAM BACKGROUND ── -->
  <canvas id="beam-canvas" class="absolute inset-0 w-full h-full z-0 pointer-events-none"></canvas>

  <!-- Background image subtle -->
  <div class="absolute inset-0 z-0">
    <img src="/images/head1.jpg" alt="" class="w-full h-full object-cover opacity-[0.06] scale-110 pointer-events-none" style="filter:grayscale(80%);" />
    <div class="absolute inset-0" style="background:linear-gradient(to bottom,#000 0%,transparent 30%,transparent 70%,#000 100%);"></div>
    <div class="absolute inset-0" style="background:linear-gradient(to right,#000 0%,transparent 25%,transparent 75%,#000 100%);"></div>
  </div>

  <!-- Glow orb -->
  <div class="absolute z-0 pointer-events-none" style="top:50%;left:50%;transform:translate(-50%,-50%);width:700px;height:500px;background:radial-gradient(ellipse,rgba(14,165,233,0.08) 0%,transparent 70%);filter:blur(20px);"></div>

  <!-- ── MAIN LAYOUT ── -->
  <div class="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-6">

    <!-- LEFT COLUMN -->
    <div class="w-full xl:w-[340px] flex flex-col items-center xl:items-start text-center xl:text-left order-1">

      <div class="left-reveal" style="opacity:0;transform:translateY(30px);">
        <div style="display:inline-flex;align-items:center;gap:10px;margin-bottom:16px;font-size:0.68rem;font-weight:700;letter-spacing:0.26em;text-transform:uppercase;color:#0ea5e9;">
          <span style="width:28px;height:1.5px;background:#0ea5e9;display:block;"></span>
          Sistema de Acceso
        </div>
        <h1 style="font-family:'Anton',sans-serif;font-size:clamp(4rem,8vw,7rem);line-height:0.9;letter-spacing:0.02em;text-transform:uppercase;color:#f8fafc;margin-bottom:4px;">CBIT</h1>
        <p style="font-family:'Anton',sans-serif;font-size:clamp(1rem,2vw,1.4rem);letter-spacing:0.12em;text-transform:uppercase;-webkit-text-stroke:1px rgba(255,255,255,0.18);color:transparent;margin-bottom:24px;">PLATAFORMA</p>
        <!-- Animated line -->
        <div id="left-line" style="width:0;height:2px;background:linear-gradient(90deg,#0ea5e9,#2dd4bf);margin-bottom:24px;transition:width 1s ease;"></div>
        <p style="font-size:0.88rem;color:rgba(255,255,255,0.35);line-height:1.8;max-width:320px;">
          Accede a la red de instituciones y programas aliados. Explora cada modulo y descubre la oferta academica, civica y deportiva de nuestra plataforma.
        </p>
      </div>

      <!-- Nav arrows -->
      <div style="display:flex;gap:10px;margin-top:36px;" class="left-reveal" style="opacity:0;">
        <button id="btn-prev" aria-label="Anterior" style="width:44px;height:44px;border:1.5px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.03);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.25s;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:rgba(255,255,255,0.4);"><path d="M19 12H5"/><path d="m12 5-7 7 7 7"/></svg>
        </button>
        <button id="btn-next" aria-label="Siguiente" style="width:44px;height:44px;border:1.5px solid rgba(14,165,233,0.4);background:rgba(14,165,233,0.06);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.25s;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:#0ea5e9;"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>

      <!-- Slide counter -->
      <div id="slide-counter" style="margin-top:24px;font-family:'Anton',sans-serif;font-size:0.75rem;letter-spacing:0.2em;color:rgba(255,255,255,0.2);">
        <span id="counter-current" style="color:#0ea5e9;">01</span>
        <span style="margin:0 6px;">/</span>
        <span>0{slides.length}</span>
      </div>
    </div>

    <!-- CENTER CAROUSEL -->
    <div class="relative w-full xl:flex-1 h-[380px] md:h-[460px] lg:h-[520px] flex items-center justify-center order-2"
         style="perspective:1200px;" id="slider-container">
      <div id="carousel-spinner" style="position:relative;width:220px;height:360px;transform-style:preserve-3d;will-change:transform;">
        {slides.map((slide, index) => (
          <div class="carousel-card" data-index={index}
               style="position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;">
            <!-- Card inner -->
            <div class="card-inner" style="width:100%;height:100%;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px;background:rgba(6,6,6,0.92);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.07);overflow:hidden;transition:border-color 0.4s,box-shadow 0.4s;clip-path:polygon(10% 0,100% 0,100% 90%,90% 100%,0 100%,0 10%);">

              <img src={slide.image} alt={slide.title}
                   style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.35;filter:grayscale(50%);transition:opacity 0.5s,filter 0.5s,transform 0.6s;pointer-events:none;" class="card-bg-img" />
              <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0.75),transparent 40%,rgba(0,0,0,0.85));pointer-events:none;"></div>

              <!-- Animated border top -->
              <div class="card-top-line" style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#0ea5e9,#2dd4bf);transform:scaleX(0);transition:transform 0.4s ease;transform-origin:left;"></div>

              <!-- Corner accents -->
              <div style="position:absolute;top:0;left:0;width:16px;height:2px;background:rgba(14,165,233,0.3);transition:background 0.4s;" class="c-tl-h"></div>
              <div style="position:absolute;top:0;left:0;width:2px;height:16px;background:rgba(14,165,233,0.3);transition:background 0.4s;" class="c-tl-v"></div>
              <div style="position:absolute;bottom:0;right:0;width:16px;height:2px;background:rgba(14,165,233,0.3);transition:background 0.4s;" class="c-br-h"></div>
              <div style="position:absolute;bottom:0;right:0;width:2px;height:16px;background:rgba(14,165,233,0.3);transition:background 0.4s;" class="c-br-v"></div>

              <!-- Header -->
              <div style="position:relative;z-index:2;width:100%;text-align:center;margin-top:4px;">
                <p class="card-sub" style="font-size:0.6rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.3);transition:color 0.4s;">{slide.subtitle}</p>
                <h2 class="card-title" style="font-family:'Anton',sans-serif;font-size:1.4rem;letter-spacing:0.06em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-top:4px;transition:color 0.4s;">{slide.title}</h2>
              </div>

              <!-- Center icon -->
              <div class="card-icon" style="position:relative;z-index:2;width:52px;height:52px;border-radius:50%;border:1.5px solid rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.6);transition:all 0.4s;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:rgba(255,255,255,0.3);transition:color 0.4s;" class="card-icon-svg">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </div>

              <!-- Footer CTA -->
              <div style="position:relative;z-index:2;width:100%;text-align:center;margin-bottom:4px;">
                <a href={slide.href}
                   class="card-cta"
                   style="display:inline-block;padding:8px 28px;border:1.5px solid rgba(255,255,255,0.12);color:rgba(255,255,255,0.3);font-family:'Anton',sans-serif;font-size:0.72rem;letter-spacing:0.18em;text-transform:uppercase;text-decoration:none;transition:all 0.35s;clip-path:polygon(0 0,calc(100% - 7px) 0,100% 7px,100% 100%,7px 100%,0 calc(100% - 7px));">
                  ENTRAR
                </a>
                <!-- Progress dots -->
                <div style="display:flex;justify-content:center;gap:4px;margin-top:12px;">
                  <div style="width:6px;height:1.5px;background:rgba(255,255,255,0.15);transition:background 0.4s;" class="dot-l"></div>
                  <div style="width:18px;height:1.5px;background:rgba(255,255,255,0.15);transition:background 0.4s;" class="dot-c"></div>
                  <div style="width:6px;height:1.5px;background:rgba(255,255,255,0.15);transition:background 0.4s;" class="dot-r"></div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>

    <!-- RIGHT COLUMN -->
    <div class="w-full xl:w-[340px] flex flex-col items-center xl:items-end text-center xl:text-right order-3">
      <div class="right-reveal" style="opacity:0;transform:translateX(30px);">
        <div style="display:inline-flex;align-items:center;gap:10px;margin-bottom:14px;font-size:0.68rem;font-weight:700;letter-spacing:0.26em;text-transform:uppercase;color:rgba(255,255,255,0.25);justify-content:flex-end;">
          Convenios
          <span style="width:28px;height:1.5px;background:rgba(255,255,255,0.15);display:block;"></span>
        </div>
        <h3 style="font-family:'Anton',sans-serif;font-size:1.4rem;letter-spacing:0.1em;text-transform:uppercase;color:#f8fafc;margin-bottom:4px;">
          NUESTROS <span style="color:#0ea5e9;">ALIADOS</span>
        </h3>
        <div style="width:36px;height:1.5px;background:linear-gradient(90deg,transparent,#0ea5e9);margin:14px 0 24px auto;"></div>

        <div style="display:flex;flex-direction:column;gap:8px;align-items:flex-end;">
          {institutions.map((inst, i) => (
            <button
              class="inst-btn"
              data-i={i}
              style="position:relative;padding:13px 24px;border:1px solid rgba(255,255,255,0.07);background:rgba(255,255,255,0.02);width:100%;max-width:260px;display:flex;align-items:center;justify-content:flex-end;gap:12px;cursor:pointer;transition:all 0.3s;overflow:hidden;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));opacity:0;transform:translateX(20px);">
              <span style="font-size:0.72rem;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.3);position:relative;z-index:1;transition:color 0.3s;" class="inst-label">{inst}</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:rgba(14,165,233,0.3);transition:all 0.3s;flex-shrink:0;position:relative;z-index:1;" class="inst-arrow"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              <!-- hover fill -->
              <span style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(14,165,233,0.06),rgba(45,212,191,0.04));opacity:0;transition:opacity 0.3s;" class="inst-fill"></span>
              <!-- left accent bar -->
              <span style="position:absolute;right:0;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,#0ea5e9,#2dd4bf);transform:scaleY(0);transform-origin:bottom;transition:transform 0.3s;" class="inst-bar"></span>
            </button>
          ))}
        </div>
      </div>
    </div>

  </div>

  <!-- Bottom slide name display -->
  <div id="slide-name-display" style="position:absolute;bottom:32px;left:50%;transform:translateX(-50%);z-index:10;text-align:center;pointer-events:none;">
    <p id="active-slide-name" style="font-family:'Anton',sans-serif;font-size:0.7rem;letter-spacing:0.3em;text-transform:uppercase;color:rgba(255,255,255,0.15);transition:opacity 0.4s;"></p>
  </div>

</section>

<style>
  .carousel-card { transition: opacity 0.3s; }

  /* Active card styles applied via JS class */
  .carousel-card.active .card-inner {
    border-color: rgba(14,165,233,0.45) !important;
    box-shadow: 0 0 50px rgba(14,165,233,0.2), 0 0 0 1px rgba(14,165,233,0.15) !important;
  }
  .carousel-card.active .card-bg-img {
    opacity: 0.75 !important;
    filter: grayscale(0%) !important;
    transform: scale(1.04) !important;
  }
  .carousel-card.active .card-top-line { transform: scaleX(1) !important; }
  .carousel-card.active .card-title { color: #0ea5e9 !important; }
  .carousel-card.active .card-sub { color: rgba(255,255,255,0.55) !important; }
  .carousel-card.active .card-icon {
    border-color: #0ea5e9 !important;
    background: rgba(14,165,233,0.15) !important;
  }
  .carousel-card.active .card-icon-svg { color: #0ea5e9 !important; }
  .carousel-card.active .card-cta {
    border-color: #0ea5e9 !important;
    color: #000 !important;
    background: #0ea5e9 !important;
    box-shadow: 0 0 20px rgba(14,165,233,0.5) !important;
  }
  .carousel-card.active .c-tl-h,
  .carousel-card.active .c-tl-v,
  .carousel-card.active .c-br-h,
  .carousel-card.active .c-br-v { background: #0ea5e9 !important; }
  .carousel-card.active .dot-l,
  .carousel-card.active .dot-c,
  .carousel-card.active .dot-r { background: #0ea5e9 !important; }

  /* Inst btn hover */
  .inst-btn:hover .inst-label { color: #0ea5e9 !important; }
  .inst-btn:hover .inst-arrow { color: #0ea5e9 !important; transform: translateX(3px) !important; }
  .inst-btn:hover .inst-fill { opacity: 1 !important; }
  .inst-btn:hover .inst-bar { transform: scaleY(1) !important; }

  /* Nav btns hover */
  #btn-prev:hover { border-color: rgba(255,255,255,0.25) !important; background: rgba(255,255,255,0.06) !important; }
  #btn-next:hover { border-color: #0ea5e9 !important; background: rgba(14,165,233,0.12) !important; box-shadow: 0 0 20px rgba(14,165,233,0.25); }

  @media (max-width: 640px) {
    #carousel-spinner { width: 180px !important; height: 300px !important; }
  }
  @media (min-width: 1024px) {
    #carousel-spinner { width: 260px !important; height: 440px !important; }
  }
</style>

<script>
import gsap from 'gsap';

let floatTween: gsap.core.Tween | null = null;
let autoTween: gsap.core.Tween | null = null;
let resumeTO: ReturnType<typeof setTimeout> | null = null;
let userBusy = false;
let ac: AbortController | null = null;
let beamRAF: number | null = null;

function cleanup() {
  autoTween?.kill(); floatTween?.kill();
  autoTween = floatTween = null;
  if (resumeTO) { clearTimeout(resumeTO); resumeTO = null; }
  ac?.abort(); ac = null;
  userBusy = false;
  if (beamRAF) { cancelAnimationFrame(beamRAF); beamRAF = null; }
  const sp = document.getElementById('carousel-spinner');
  if (sp) { gsap.killTweensOf(sp); gsap.set(sp, { clearProps: 'all' }); }
}

// ── BEAM CANVAS ANIMATION ──────────────────────────────────────────────────
type Beam = { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; width: number; color: string };

function initBeam() {
  const canvas = document.getElementById('beam-canvas') as HTMLCanvasElement | null;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const resize = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };
  resize();
  window.addEventListener('resize', resize);

  const beams: Beam[] = [];
  const colors = ['rgba(14,165,233,', 'rgba(45,212,191,', 'rgba(29,78,216,'];

  const spawnBeam = () => {
    const w = canvas.width;
    const h = canvas.height;
    const side = Math.random();
    let x = 0, y = 0, vx = 0, vy = 0;
    const speed = 0.4 + Math.random() * 0.8;
    const angle = (Math.random() * 60 - 30) * Math.PI / 180;

    if (side < 0.5) {
      x = side < 0.25 ? 0 : w;
      y = Math.random() * h;
      vx = side < 0.25 ? Math.cos(angle) * speed : -Math.cos(angle) * speed;
      vy = Math.sin(angle) * speed;
    } else {
      x = Math.random() * w;
      y = side < 0.75 ? 0 : h;
      vx = Math.sin(angle) * speed;
      vy = side < 0.75 ? Math.cos(angle) * speed : -Math.cos(angle) * speed;
    }

    const maxLife = 180 + Math.random() * 180;
    beams.push({
      x, y, vx, vy,
      life: 0, maxLife,
      width: 0.5 + Math.random() * 1.5,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  };

  for (let i = 0; i < 8; i++) spawnBeam();

  const drawFrame = () => {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    if (Math.random() < 0.03) spawnBeam();

    for (let i = beams.length - 1; i >= 0; i--) {
      const b = beams[i];
      b.life++;
      b.x += b.vx;
      b.y += b.vy;

      const progress = b.life / b.maxLife;
      let alpha = progress < 0.15
        ? progress / 0.15
        : progress > 0.75
        ? 1 - (progress - 0.75) / 0.25
        : 1;
      alpha *= 0.35;

      ctx.beginPath();
      ctx.moveTo(b.x - b.vx * 80, b.y - b.vy * 80);
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

// ── CAROUSEL ───────────────────────────────────────────────────────────────
function init() {
  cleanup();

  const spinner = document.getElementById('carousel-spinner') as HTMLElement | null;
  const container = document.getElementById('slider-container') as HTMLElement | null;
  const cards = document.querySelectorAll<HTMLElement>('.carousel-card');
  if (!spinner || !container || !cards.length) return;

  ac = new AbortController();
  const { signal } = ac;

  const total = cards.length;
  const theta = 360 / total;
  let radius = 0;
  let activeIdx = 0;

  const getRadius = () => {
    if (window.innerWidth < 640) return 160;
    if (window.innerWidth < 1024) return 220;
    return 310;
  };

  const positionCards = () => {
    radius = getRadius();
    cards.forEach((c, i) => {
      c.style.transform = `rotateY(${theta * i}deg) translateZ(${radius}px)`;
    });
  };

  const counterEl = document.getElementById('counter-current');
  const nameEl = document.getElementById('active-slide-name');

  const updateActive = (animate = true) => {
    const rot = -activeIdx * theta;
    if (animate) {
      gsap.to(spinner, { rotationY: rot, z: -radius, duration: 0.75, ease: 'power3.out' });
    } else {
      gsap.set(spinner, { rotationY: rot, z: -radius });
    }
    const norm = ((activeIdx % total) + total) % total;
    cards.forEach((c, i) => c.classList.toggle('active', i === norm));
    if (counterEl) counterEl.textContent = String(norm + 1).padStart(2, '0');
    if (nameEl) {
      const ne = nameEl; // capture non-null reference for closure
      gsap.to(ne, { opacity: 0, duration: 0.2, onComplete: () => {
        const slide = cards[norm].querySelector<HTMLElement>('.card-title');
        ne.textContent = slide?.textContent ?? '';
        gsap.to(ne, { opacity: 1, duration: 0.3 });
      }});
    }
  };

  const startAuto = () => {
    autoTween?.kill();
    autoTween = gsap.delayedCall(3.8, () => {
      if (!userBusy) { activeIdx++; updateActive(); startAuto(); }
    });
  };

  const onInteract = () => {
    userBusy = true;
    autoTween?.kill();
    if (resumeTO) clearTimeout(resumeTO);
    resumeTO = setTimeout(() => { userBusy = false; startAuto(); }, 5000);
  };

  positionCards();
  updateActive(false);

  // Float animation
  floatTween = gsap.to(spinner, {
    y: -12, duration: 3.5, ease: 'sine.inOut', yoyo: true, repeat: -1
  });

  startAuto();
  initBeam();

  // ── REVEAL on load ──
  gsap.to('.left-reveal', { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' });
  gsap.to('.right-reveal', { opacity: 1, x: 0, duration: 0.8, delay: 0.35, ease: 'power3.out' });
  gsap.fromTo(cards, { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 0.7, delay: 0.15, ease: 'power3.out' });
  gsap.to('.inst-btn', { opacity: 1, x: 0, duration: 0.6, delay: 0.5, stagger: 0.08, ease: 'power3.out' });
  // Animate left-line
  setTimeout(() => {
    const ll = document.getElementById('left-line');
    if (ll) ll.style.width = '64px';
  }, 600);

  // ── CARD CLICK ──
  cards.forEach(card => {
    card.addEventListener('click', e => {
      if ((e.target as HTMLElement).closest('a')) return;
      const idx = parseInt(card.dataset.index || '0');
      const norm = ((activeIdx % total) + total) % total;
      onInteract();
      if (norm !== idx) {
        let diff = idx - norm;
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;
        activeIdx += diff;
        updateActive();
      } else {
        gsap.fromTo(card, { scale: 0.96 }, { scale: 1, duration: 0.4, ease: 'back.out(2)' });
      }
    }, { signal });
  });

  // ── ARROW BUTTONS ──
  document.getElementById('btn-prev')?.addEventListener('click', () => {
    onInteract(); activeIdx--; updateActive();
  }, { signal });
  document.getElementById('btn-next')?.addEventListener('click', () => {
    onInteract(); activeIdx++; updateActive();
  }, { signal });

  // ── WHEEL ──
  let wTO: ReturnType<typeof setTimeout>;
  container.addEventListener('wheel', (e: WheelEvent) => {
    e.preventDefault();
    clearTimeout(wTO);
    wTO = setTimeout(() => {
      onInteract();
      activeIdx += (e.deltaY > 0 || e.deltaX > 0) ? 1 : -1;
      updateActive();
    }, 50);
  }, { passive: false, signal });

  // ── TOUCH ──
  let tx = 0, ty = 0;
  container.addEventListener('touchstart', (e: TouchEvent) => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true, signal });
  container.addEventListener('touchend', (e: TouchEvent) => {
    const dx = e.changedTouches[0].clientX - tx;
    const dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      onInteract(); activeIdx += dx < 0 ? 1 : -1; updateActive();
    }
  }, { passive: true, signal });

  // ── RESIZE ──
  window.addEventListener('resize', () => { positionCards(); updateActive(false); }, { signal });

  // ── VISIBILITY ──
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { floatTween?.pause(); autoTween?.kill(); }
    else { floatTween?.resume(); if (!userBusy) startAuto(); }
  }, { signal });
}

document.addEventListener('astro:before-swap', cleanup);
document.addEventListener('astro:page-load', init);
if (document.readyState !== 'loading') init();
else document.addEventListener('DOMContentLoaded', init);
</script>