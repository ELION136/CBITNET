---
---
<div id="custom-cursor-container">
    <div id="cursor-follower"></div>
    <div id="cursor-dot"></div>
</div>

<style>
    #custom-cursor-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: 9999;
        /* difference blend mode can be cool, but keeping it normal to pop the yellow */
    }
    
    #cursor-dot {
        position: absolute;
        top: 0;
        left: 0;
        width: 6px;
        height: 6px;
        background-color: #eab308; /* Yellow-500 */
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: transform 0.1s ease-out, opacity 0.3s ease;
        z-index: 2;
    }

    #cursor-follower {
        position: absolute;
        top: 0;
        left: 0;
        width: 32px;
        height: 32px;
        border: 1px solid rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.3s cubic-bezier(0.25, 1, 0.5, 1), 
                    height 0.3s cubic-bezier(0.25, 1, 0.5, 1), 
                    border-color 0.3s,
                    background-color 0.3s,
                    border-radius 0.3s;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Hover State for links/buttons */
    #custom-cursor-container.hovering #cursor-follower {
        width: 48px;
        height: 48px;
        background-color: rgba(234, 179, 8, 0.1); /* Yellow fill */
        border-color: #eab308; /* Yellow border */
        /* Optional: make it slightly square for a brutalist tech feel */
        /* border-radius: 8px; */
    }
    
    #custom-cursor-container.hovering #cursor-dot {
        transform: translate(-50%, -50%) scale(0); /* Hide dot on hover */
        opacity: 0;
    }

    /* Click State */
    #custom-cursor-container.clicking #cursor-follower {
        transform: translate(-50%, -50%) scale(0.85);
        border-color: #ffffff;
        background-color: rgba(255, 255, 255, 0.2);
    }
    
    #custom-cursor-container.clicking #cursor-dot {
        transform: translate(-50%, -50%) scale(0.5);
    }
</style>

<script>
    import gsap from 'gsap';

    function initCursor() {
        const cursorContainer = document.getElementById('custom-cursor-container');
        const cursorDot = document.getElementById('cursor-dot');
        const cursorFollower = document.getElementById('cursor-follower');
        
        if (!cursorContainer || !cursorDot || !cursorFollower) return;

        // Hide default cursor globally
        const style = document.createElement('style');
        style.innerHTML = `* { cursor: none !important; }`;
        document.head.appendChild(style);

        // State
        let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        let follower = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        // Mouse Move Event
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            
            // The dot follows instantly
            gsap.set(cursorDot, { x: mouse.x, y: mouse.y });
        });

        // Click Events
        window.addEventListener('mousedown', () => {
            cursorContainer.classList.add('clicking');
        });
        
        window.addEventListener('mouseup', () => {
            cursorContainer.classList.remove('clicking');
        });

        // Hover detection via event delegation
        document.addEventListener('mouseover', (e) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                cursorContainer.classList.add('hovering');
            }
        });

        document.addEventListener('mouseout', (e) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                cursorContainer.classList.remove('hovering');
            }
        });

        // Animation Loop for Smooth Follower
        let animationFrameId: number;
        function animate() {
            // Lerp follower towards mouse
            follower.x += (mouse.x - follower.x) * 0.2;
            follower.y += (mouse.y - follower.y) * 0.2;
            
            gsap.set(cursorFollower, { x: follower.x, y: follower.y });

            animationFrameId = requestAnimationFrame(animate);
        }

        animate();
    }

    // Initialize on load and on Astro view transitions
    initCursor();
    document.addEventListener('astro:page-load', initCursor);
</script>




---
// components/CursorLiquidChrome.astro
// Liquid Chrome — masa metálica con inercia, distorsión líquida y trail plateado
---

<div id="lc-root"></div>

<style>
  * { cursor: none !important; }

  #lc-root {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 9999;
    overflow: hidden;
  }

  #lc-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
</style>

<script>
  function initCursor() {
    const existing = document.getElementById('lc-canvas');
    if (existing) existing.remove();

    const root = document.getElementById('lc-root');
    if (!root) return;

    const canvas = document.createElement('canvas');
    canvas.id = 'lc-canvas';
    root.appendChild(canvas);

    const ctx = canvas.getContext('2d')!;
    const DPR = window.devicePixelRatio || 1;

    let W: number, H: number, animId: number;

    function resize() {
      W = canvas.width  = window.innerWidth  * DPR;
      H = canvas.height = window.innerHeight * DPR;
      canvas.style.width  = window.innerWidth  + 'px';
      canvas.style.height = window.innerHeight + 'px';
    }
    resize();
    window.addEventListener('resize', resize);

    // ── Estado
    let mouse  = { x: W / 2, y: H / 2 };
    let pos    = { x: W / 2, y: H / 2 };   // posición con lerp suave
    let vel    = { x: 0, y: 0 };            // velocidad real (para distorsión)
    let prevPos = { x: W / 2, y: H / 2 };
    let isHovering = false;
    let isClicking  = false;
    let clickPulse  = 0;                     // 0→1 al hacer click, decae

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX * DPR;
      mouse.y = e.clientY * DPR;
    });
    window.addEventListener('mousedown', () => {
      isClicking = true;
      clickPulse = 1;
    });
    window.addEventListener('mouseup', () => { isClicking = false; });

    document.addEventListener('mouseover', (e) => {
      if ((e.target as HTMLElement).closest('a,button,[role="button"],input,select,textarea,label'))
        isHovering = true;
    });
    document.addEventListener('mouseout', (e) => {
      if ((e.target as HTMLElement).closest('a,button,[role="button"],input,select,textarea,label'))
        isHovering = false;
    });

    // ── Trail: historial de posiciones del blob
    type TrailPoint = { x: number; y: number; vx: number; vy: number };
    const TRAIL_LEN = 28;
    const trail: TrailPoint[] = Array.from({ length: TRAIL_LEN }, () => ({
      x: W / 2, y: H / 2, vx: 0, vy: 0,
    }));

    // ── Noise suave para micro-jitter orgánico
    function noise(x: number, y: number): number {
      return Math.sin(x * 1.7 + y * 0.9) * 0.5
           + Math.sin(x * 0.5 + y * 2.3) * 0.3
           + Math.sin(x * 3.1 - y * 1.1) * 0.2;
    }

    // ── Puntos del blob (N vértices en el perímetro, se deforman individualmente)
    const BLOB_VERTS = 48;
    type Vert = { angle: number; r: number; targetR: number; vr: number };
    const verts: Vert[] = Array.from({ length: BLOB_VERTS }, (_, i) => ({
      angle: (i / BLOB_VERTS) * Math.PI * 2,
      r: 0, targetR: 0, vr: 0,
    }));

    // ── Ondas de impacto (click)
    type Wave = { r: number; alpha: number };
    const waves: Wave[] = [];

    let t = 0;

    function draw() {
      ctx.clearRect(0, 0, W, H);
      t += 0.016;

      // ── Física del follower: masa + amortiguación (feel "pesado" pero fluido)
      const lerpK = isHovering ? 0.18 : 0.13;
      pos.x += (mouse.x - pos.x) * lerpK;
      pos.y += (mouse.y - pos.y) * lerpK;
      vel.x = pos.x - prevPos.x;
      vel.y = pos.y - prevPos.y;
      prevPos.x = pos.x;
      prevPos.y = pos.y;

      const speed   = Math.sqrt(vel.x * vel.x + vel.y * vel.y);
      const moveDir = Math.atan2(vel.y, vel.x);

      // Actualizar trail
      trail.unshift({ x: pos.x, y: pos.y, vx: vel.x, vy: vel.y });
      if (trail.length > TRAIL_LEN) trail.pop();

      // Radio base según estado
      const baseR = isClicking
        ? 15 * DPR
        : isHovering
        ? 26 * DPR
        : 20 * DPR;

      // Decaimiento del pulse de click
      clickPulse *= 0.88;

      // ── Actualizar vértices del blob
      verts.forEach((v, i) => {
        const localAngle = v.angle;

        // Estiramiento eje de movimiento (mercurio que se alarga)
        const dot = Math.cos(localAngle - moveDir);
        const stretch = 1
          + Math.max(dot, 0) * Math.min(speed * 0.055, 0.7)    // estira al frente
          - Math.max(-dot, 0) * Math.min(speed * 0.025, 0.2);  // aplana atrás

        // Ondulación orgánica: 2 capas de seno para parecer líquido
        const wave1 = Math.sin(localAngle * 3 + t * 2.1) * 0.06;
        const wave2 = Math.sin(localAngle * 5 - t * 1.4) * 0.03;
        const wave3 = Math.sin(localAngle * 2 + t * 0.8 + noise(pos.x * 0.001, t)) * 0.04;

        // Pulso de click: onda de expansión radial
        const clickWave = clickPulse * Math.sin(localAngle * 6 - t * 8) * 0.12;

        v.targetR = baseR * stretch * (1 + wave1 + wave2 + wave3 + clickWave);

        // Spring suave hacia target (inercia de la gota)
        const springK = 0.35;
        const damping  = 0.72;
        v.vr = v.vr * damping + (v.targetR - v.r) * springK;
        v.r += v.vr;
      });

      // ── 1. Trail plateado (micro-gotas que se desvanecen)
      for (let i = trail.length - 1; i >= 1; i--) {
        const p    = trail[i];
        const prog = 1 - i / TRAIL_LEN;   // 1 = más reciente, 0 = más viejo
        const tr   = baseR * 0.38 * prog;
        if (tr < 1) continue;

        const alpha = prog * prog * 0.28;

        // Gradiente metálico en cada punto del trail
        const tg = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, tr);
        tg.addColorStop(0,   `rgba(230, 235, 245, ${alpha * 1.2})`);
        tg.addColorStop(0.4, `rgba(180, 190, 210, ${alpha * 0.8})`);
        tg.addColorStop(1,   `rgba(120, 130, 155, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, tr, 0, Math.PI * 2);
        ctx.fillStyle = tg;
        ctx.fill();
      }

      // ── 2. Ondas de impacto (click)
      if (clickPulse > 0.05 && waves.length < 6) {
        waves.push({ r: baseR * 0.8, alpha: 0.5 });
      }
      for (let i = waves.length - 1; i >= 0; i--) {
        const w = waves[i];
        w.r    += 1.8 * DPR;
        w.alpha *= 0.91;
        if (w.alpha < 0.01) { waves.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, w.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(210, 220, 240, ${w.alpha})`;
        ctx.lineWidth   = 0.8 * DPR;
        ctx.stroke();
      }

      // ── 3. Construir path del blob deformado
      ctx.save();

      const blobPath = new Path2D();
      // Primer punto
      const fx0 = pos.x + Math.cos(verts[0].angle) * verts[0].r;
      const fy0 = pos.y + Math.sin(verts[0].angle) * verts[0].r;
      blobPath.moveTo(fx0, fy0);

      // Curvas suaves entre vértices (catmull-rom simplificado con bezier)
      for (let i = 0; i < BLOB_VERTS; i++) {
        const curr = verts[i];
        const next = verts[(i + 1) % BLOB_VERTS];
        const cp1x = pos.x + Math.cos(curr.angle + 0.15) * curr.r * 1.05;
        const cp1y = pos.y + Math.sin(curr.angle + 0.15) * curr.r * 1.05;
        const cp2x = pos.x + Math.cos(next.angle - 0.15) * next.r * 1.05;
        const cp2y = pos.y + Math.sin(next.angle - 0.15) * next.r * 1.05;
        const ex   = pos.x + Math.cos(next.angle) * next.r;
        const ey   = pos.y + Math.sin(next.angle) * next.r;
        blobPath.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, ex, ey);
      }
      blobPath.closePath();

      // ── 4. Sombra ambiental muy sutil (sensación de profundidad)
      ctx.shadowColor  = 'rgba(0, 0, 0, 0.35)';
      ctx.shadowBlur   = 18 * DPR;
      ctx.shadowOffsetX = vel.x * 1.5;
      ctx.shadowOffsetY = vel.y * 1.5;

      // ── 5. Relleno: gradiente metálico principal (simula iluminación 3D)
      // La fuente de luz es siempre arriba-izquierda del blob
      const lightX = pos.x - baseR * 0.45;
      const lightY = pos.y - baseR * 0.45;

      const fillGrad = ctx.createRadialGradient(
        lightX, lightY, 0,
        pos.x,  pos.y,  baseR * 1.6
      );
      fillGrad.addColorStop(0,    'rgba(255, 255, 255, 0.55)');   // especular blanco
      fillGrad.addColorStop(0.12, 'rgba(230, 235, 248, 0.40)');   // highlight plateado
      fillGrad.addColorStop(0.35, 'rgba(170, 180, 205, 0.22)');   // tono medio
      fillGrad.addColorStop(0.65, 'rgba(100, 110, 140, 0.12)');   // sombra interna
      fillGrad.addColorStop(1,    'rgba(50,  55,  80,  0.05)');   // borde oscuro

      ctx.fillStyle = fillGrad;
      ctx.fill(blobPath);

      ctx.shadowColor  = 'transparent';
      ctx.shadowBlur   = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      // ── 6. Borde metálico: gradiente lineal que rota con el movimiento
      // Crea efecto de reflejo que cambia según la dirección
      const edgeGrad = ctx.createLinearGradient(
        pos.x + Math.cos(moveDir + Math.PI * 0.25) * baseR,
        pos.y + Math.sin(moveDir + Math.PI * 0.25) * baseR,
        pos.x + Math.cos(moveDir + Math.PI * 1.25) * baseR,
        pos.y + Math.sin(moveDir + Math.PI * 1.25) * baseR
      );
      edgeGrad.addColorStop(0,    'rgba(255, 255, 255, 0.90)');   // reflejo especular
      edgeGrad.addColorStop(0.20, 'rgba(200, 210, 230, 0.65)');
      edgeGrad.addColorStop(0.45, 'rgba(140, 155, 185, 0.40)');
      edgeGrad.addColorStop(0.70, 'rgba(80,  95,  130, 0.55)');
      edgeGrad.addColorStop(0.85, 'rgba(50,  60,  90,  0.80)');
      edgeGrad.addColorStop(1,    'rgba(30,  35,  60,  0.30)');

      ctx.strokeStyle = edgeGrad;
      ctx.lineWidth   = (isHovering ? 1.8 : 1.2) * DPR;
      ctx.stroke(blobPath);

      // ── 7. Reflejo interno (highlight en la zona iluminada)
      // Un segundo blob más pequeño, desplazado hacia la luz
      const hlOffX = -baseR * 0.28;
      const hlOffY = -baseR * 0.32;
      const hlR    = baseR * 0.48;

      const hlGrad = ctx.createRadialGradient(
        pos.x + hlOffX - hlR * 0.3,
        pos.y + hlOffY - hlR * 0.3,
        0,
        pos.x + hlOffX,
        pos.y + hlOffY,
        hlR
      );
      hlGrad.addColorStop(0,   `rgba(255, 255, 255, ${0.28 + clickPulse * 0.15})`);
      hlGrad.addColorStop(0.5, `rgba(230, 238, 255, 0.10)`);
      hlGrad.addColorStop(1,   `rgba(200, 215, 240, 0)`);

      ctx.beginPath();
      ctx.arc(pos.x + hlOffX, pos.y + hlOffY, hlR, 0, Math.PI * 2);
      ctx.fillStyle = hlGrad;

      // Clip al blob para que el reflejo no sobresalga
      ctx.save();
      ctx.clip(blobPath);
      ctx.fill();
      ctx.restore();

      // ── 8. Segundo reflejo pequeño (cáustica — punto de luz brillante)
      const causticR = baseR * 0.13;
      const cg = ctx.createRadialGradient(
        pos.x - baseR * 0.3,
        pos.y - baseR * 0.35,
        0,
        pos.x - baseR * 0.3,
        pos.y - baseR * 0.35,
        causticR
      );
      cg.addColorStop(0,   `rgba(255, 255, 255, ${0.75 + 0.2 * Math.sin(t * 3.5)})`);
      cg.addColorStop(0.4, `rgba(240, 245, 255, 0.35)`);
      cg.addColorStop(1,   `rgba(255, 255, 255, 0)`);
      ctx.beginPath();
      ctx.arc(pos.x - baseR * 0.3, pos.y - baseR * 0.35, causticR, 0, Math.PI * 2);
      ctx.save();
      ctx.clip(blobPath);
      ctx.fillStyle = cg;
      ctx.fill();
      ctx.restore();

      ctx.restore();

      // ── 9. Punto exacto del mouse (aparece solo cuando hay lag perceptible)
      const dist = Math.hypot(mouse.x - pos.x, mouse.y - pos.y);
      if (dist > 6 * DPR) {
        const dotAlpha = Math.min((dist - 6 * DPR) / (20 * DPR), 1) * 0.5;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 1.8 * DPR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 225, 240, ${dotAlpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    document.addEventListener('astro:before-swap', () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    }, { once: true });
  }

  initCursor();
  document.addEventListener('astro:page-load', initCursor);
</script>




---
// components/CursorFX.astro
// Plasma Ring — anillo eléctrico con arcos de energía y partículas
---

<div id="cursor-root"></div>

<style>
  * { cursor: none !important; }

  #cursor-root {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 9999;
    overflow: hidden;
  }

  #plasma-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
</style>

<script>
  function initCursor() {
    // ── Limpiar instancia previa si existe (View Transitions)
    const existing = document.getElementById('plasma-canvas');
    if (existing) existing.remove();

    const root = document.getElementById('cursor-root');
    if (!root) return;

    const canvas = document.createElement('canvas');
    canvas.id = 'plasma-canvas';
    root.appendChild(canvas);

    const ctx = canvas.getContext('2d')!;
    const DPR = window.devicePixelRatio || 1;

    let W: number, H: number;
    let animId: number;

    function resize() {
      W = canvas.width  = window.innerWidth  * DPR;
      H = canvas.height = window.innerHeight * DPR;
      canvas.style.width  = window.innerWidth  + 'px';
      canvas.style.height = window.innerHeight + 'px';
    }
    resize();
    window.addEventListener('resize', resize);

    // ── Estado del mouse
    let mouse  = { x: W / 2, y: H / 2 };
    let follow = { x: W / 2, y: H / 2 };
    let isHovering = false;
    let isClicking  = false;

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX * DPR;
      mouse.y = e.clientY * DPR;
    });

    window.addEventListener('mousedown', () => { isClicking = true;  });
    window.addEventListener('mouseup',   () => { isClicking = false; });

    document.addEventListener('mouseover', (e) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, [role="button"], input, select, textarea, label')) {
        isHovering = true;
      }
    });
    document.addEventListener('mouseout', (e) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, [role="button"], input, select, textarea, label')) {
        isHovering = false;
      }
    });

    // ── Tipos
    type Arc = {
      angle:  number;
      speed:  number;
      arcLen: number;
      hue:    number;
      width:  number;
      phase:  number;
    };

    type Spark = {
      x: number; y: number;
      angle: number;
      r: number;
      vr: number;
      va: number;
      life: number;
      maxLife: number;
      hue: number;
      size: number;
    };

    type Ring = {
      r: number;
      alpha: number;
      targetR: number;
    };

    // ── Arcos de plasma: 7 arcos con velocidades y fases distintas
    const arcs: Arc[] = Array.from({ length: 7 }, (_, i) => ({
      angle:  (i / 7) * Math.PI * 2,
      speed:  (i % 2 === 0 ? 1 : -1) * (0.025 + i * 0.008),
      arcLen: 0.25 + (i % 3) * 0.18,
      hue:    200 + i * 22,
      width:  1.0 + (i % 3) * 0.5,
      phase:  i * 0.9,
    }));

    // ── Partículas de chispa
    const sparks: Spark[] = [];

    function spawnSpark(fx: number, fy: number, R: number, burst = false) {
      const count = burst ? 6 : 1;
      for (let i = 0; i < count; i++) {
        const spawnAngle = Math.random() * Math.PI * 2;
        sparks.push({
          x:       fx + Math.cos(spawnAngle) * R,
          y:       fy + Math.sin(spawnAngle) * R,
          angle:   spawnAngle,
          r:       R,
          vr:      (Math.random() - 0.4) * 1.8 * DPR,
          va:      (Math.random() - 0.5) * 0.18,
          life:    1,
          maxLife: 1,
          hue:     210 + Math.random() * 80,
          size:    (1.2 + Math.random() * 2.0) * DPR,
        });
      }
    }

    // ── Anillos de ondas de impacto (click)
    const rings: Ring[] = [];

    function spawnRing(fx: number, fy: number) {
      rings.push({ r: 10 * DPR, alpha: 0.8, targetR: 60 * DPR });
    }

    // ── Dot de posición exacta (punto blanco pequeño)
    // separado del follower que tiene lag
    let dotAlpha = 0;

    // ── Loop principal
    let t = 0;
    let prevClick = false;

    function draw(ts: number) {
      ctx.clearRect(0, 0, W, H);
      t++;

      // Lerp suave del follower
      const lerpSpeed = isHovering ? 0.22 : 0.16;
      follow.x += (mouse.x - follow.x) * lerpSpeed;
      follow.y += (mouse.y - follow.y) * lerpSpeed;

      const fx = follow.x;
      const fy = follow.y;

      // Radio base: crece al hover, se contrae al click
      const baseR = isClicking
        ? 16 * DPR
        : isHovering
        ? 28 * DPR
        : 22 * DPR;

      // Click burst
      if (isClicking && !prevClick) {
        spawnSpark(fx, fy, baseR, true);
        spawnRing(fx, fy);
      }
      prevClick = isClicking;

      // Spawn continuo de chispas
      if (Math.random() > (isHovering ? 0.3 : 0.55)) {
        spawnSpark(fx, fy, baseR + (Math.random() - 0.5) * 6 * DPR);
      }

      // ── 1. Halo de fondo (glow difuso)
      const glowR = baseR * 3.5;
      const glow = ctx.createRadialGradient(fx, fy, baseR * 0.5, fx, fy, glowR);
      const glowHue = 220 + 20 * Math.sin(t * 0.03);
      glow.addColorStop(0,   `hsla(${glowHue}, 100%, 65%, ${isHovering ? 0.18 : 0.10})`);
      glow.addColorStop(0.4, `hsla(${glowHue + 20}, 100%, 55%, 0.06)`);
      glow.addColorStop(1,   `hsla(${glowHue + 40}, 100%, 45%, 0)`);
      ctx.beginPath();
      ctx.arc(fx, fy, glowR, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // ── 2. Anillos de onda (click)
      for (let i = rings.length - 1; i >= 0; i--) {
        const ring = rings[i];
        ring.r     += (ring.targetR - ring.r) * 0.12;
        ring.alpha *= 0.88;
        if (ring.alpha < 0.01) { rings.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(fx, fy, ring.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(160, 100, 255, ${ring.alpha})`;
        ctx.lineWidth   = 1.5 * DPR;
        ctx.stroke();
      }

      // ── 3. Partículas de chispa
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.r     += s.vr;
        s.angle += s.va;
        s.life  -= 0.035 + Math.random() * 0.02;
        if (s.life <= 0 || s.r < 2) { sparks.splice(i, 1); continue; }

        const sx = fx + Math.cos(s.angle) * s.r;
        const sy = fy + Math.sin(s.angle) * s.r;

        // Estela corta
        const tailLen = 3;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(
          sx - Math.cos(s.angle) * s.size * tailLen * s.life,
          sy - Math.sin(s.angle) * s.size * tailLen * s.life
        );
        ctx.strokeStyle = `hsla(${s.hue}, 100%, 80%, ${s.life * 0.5})`;
        ctx.lineWidth   = s.size * 0.6 * s.life;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(sx, sy, s.size * s.life, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${s.hue}, 100%, 85%, ${s.life * 0.95})`;
        ctx.fill();
      }

      // ── 4. Arcos de plasma giratorios
      arcs.forEach((arc, idx) => {
        arc.angle += arc.speed;
        // Longitud del arco pulsa con el tiempo y el hover
        const lenMod  = arc.arcLen * (isHovering ? 1.4 : 1) * (0.8 + 0.2 * Math.sin(t * 0.04 + arc.phase));
        const startA  = arc.angle;
        const endA    = arc.angle + lenMod * Math.PI * 2;
        const R       = baseR + Math.sin(t * 0.07 + arc.phase) * 2 * DPR;
        const hue     = arc.hue + 15 * Math.sin(t * 0.05 + idx);

        // Gradiente a lo largo del arco (de transparente a brillante a transparente)
        const sx = fx + Math.cos(startA) * R;
        const sy = fy + Math.sin(startA) * R;
        const ex = fx + Math.cos(endA)   * R;
        const ey = fy + Math.sin(endA)   * R;
        const g  = ctx.createLinearGradient(sx, sy, ex, ey);
        g.addColorStop(0,    `hsla(${hue}, 100%, 70%, 0)`);
        g.addColorStop(0.2,  `hsla(${hue}, 100%, 78%, 0.7)`);
        g.addColorStop(0.5,  `hsla(${hue}, 100%, 85%, 1.0)`);
        g.addColorStop(0.8,  `hsla(${hue}, 100%, 78%, 0.7)`);
        g.addColorStop(1,    `hsla(${hue}, 100%, 70%, 0)`);

        // Arco principal
        ctx.beginPath();
        ctx.arc(fx, fy, R, startA, endA);
        ctx.strokeStyle = g;
        ctx.lineWidth   = arc.width * DPR * (isHovering ? 1.5 : 1) * (isClicking ? 0.6 : 1);
        ctx.stroke();

        // Segundo pasada más delgada y más brillante (inner glow del arco)
        ctx.beginPath();
        ctx.arc(fx, fy, R, startA, endA);
        ctx.strokeStyle = `hsla(${hue + 20}, 100%, 95%, ${0.3 * Math.abs(Math.sin(t * 0.06 + arc.phase))})`;
        ctx.lineWidth   = arc.width * DPR * 0.4;
        ctx.stroke();
      });

      // ── 5. Anillo base (borde del círculo principal)
      ctx.beginPath();
      ctx.arc(fx, fy, baseR, 0, Math.PI * 2);
      const ringGrad = ctx.createLinearGradient(fx - baseR, fy - baseR, fx + baseR, fy + baseR);
      ringGrad.addColorStop(0,    'rgba(180, 100, 255, 0.5)');
      ringGrad.addColorStop(0.33, 'rgba(80,  160, 255, 0.7)');
      ringGrad.addColorStop(0.66, 'rgba(0,   220, 255, 0.5)');
      ringGrad.addColorStop(1,    'rgba(180, 100, 255, 0.5)');
      ctx.strokeStyle = ringGrad;
      ctx.lineWidth   = (isClicking ? 2.5 : 1.2) * DPR;
      ctx.stroke();

      // ── 6. Núcleo interior (corazón del plasma)
      const coreR = (isClicking ? 5 : isHovering ? 4 : 3) * DPR;
      const core  = ctx.createRadialGradient(fx, fy, 0, fx, fy, coreR * 2.5);
      core.addColorStop(0, `rgba(255, 255, 255, ${isClicking ? 1 : 0.9})`);
      core.addColorStop(0.4, `rgba(180, 140, 255, 0.6)`);
      core.addColorStop(1,   `rgba(100,  80, 255, 0)`);
      ctx.beginPath();
      ctx.arc(fx, fy, coreR * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = core;
      ctx.fill();

      // ── 7. Punto exacto del mouse (se mueve sin lag)
      const dDist = Math.hypot(mouse.x - follow.x, mouse.y - follow.y);
      dotAlpha    = dDist > 4 * DPR
        ? Math.min(dotAlpha + 0.12, 0.55)
        : Math.max(dotAlpha - 0.08, 0);

      if (dotAlpha > 0.01) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 2 * DPR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${dotAlpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    // ── Cleanup para View Transitions
    document.addEventListener('astro:before-swap', () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    }, { once: true });
  }

  initCursor();
  document.addEventListener('astro:page-load', initCursor);
</script>