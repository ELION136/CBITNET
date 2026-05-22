---
// components/BackgroundFX.astro
---

<canvas id="bg-canvas" class="fixed inset-0 w-full h-full pointer-events-none z-0"></canvas>

<script>
const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

let W: number, H: number, animId: number;
const COLORS = ['rgba(14,165,233,', 'rgba(45,212,191,', 'rgba(29,78,216,'];
const HEX_R = 38;

function resize() {
  W = canvas.width  = canvas.offsetWidth;
  H = canvas.height = canvas.offsetHeight;
  grid = buildGrid();
}

type HexCell = { x: number; y: number; dist: number; phase: number };
type Particle = { x: number; y: number; vx: number; vy: number; size: number; life: number; maxLife: number; color: string; tail: [number,number][] };

let grid: HexCell[] = [];

function hexPoints(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = Math.PI / 180 * (60 * i - 30);
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as [number, number];
  });
}

function buildGrid(): HexCell[] {
  const cols = Math.ceil(W / (HEX_R * 1.732)) + 2;
  const rows = Math.ceil(H / (HEX_R * 1.5)) + 2;
  return Array.from({ length: rows * cols }, (_, k) => {
    const row = Math.floor(k / cols) - 1;
    const col = (k % cols) - 1;
    const x = col * (HEX_R * 1.732) + (row % 2 === 0 ? 0 : HEX_R * 0.866);
    const y = row * (HEX_R * 1.5);
    const dist = Math.hypot(x - W * 0.5, y - H * 0.5);
    return { x, y, dist, phase: Math.random() * Math.PI * 2 };
  });
}

function mkParticle(): Particle {
  const side = Math.random();
  let x = 0, y = 0, vx = 0, vy = 0;
  const speed = 0.25 + Math.random() * 0.55;
  const angle = (Math.random() * 50 - 25) * Math.PI / 180;
  if (side < 0.5) {
    x = side < 0.25 ? 0 : W; y = Math.random() * H;
    vx = (side < 0.25 ? 1 : -1) * Math.cos(angle) * speed;
    vy = Math.sin(angle) * speed;
  } else {
    x = Math.random() * W; y = side < 0.75 ? 0 : H;
    vx = Math.sin(angle) * speed;
    vy = (side < 0.75 ? 1 : -1) * Math.cos(angle) * speed;
  }
  return { x, y, vx, vy, size: 1.2 + Math.random() * 2.2,
    life: 0, maxLife: 200 + Math.random() * 280,
    color: COLORS[Math.floor(Math.random() * COLORS.length)], tail: [] };
}

let particles: Particle[] = Array.from({ length: 55 }, mkParticle);
let scanY = 0;

function draw(ts: number) {
  ctx.clearRect(0, 0, W, H);
  const t = ts * 0.001;

  // — Hex grid
  const maxDist = Math.hypot(W, H) * 0.5;
  grid.forEach(({ x, y, dist, phase }) => {
    const raw = Math.sin(t * 0.6 + phase + dist * 0.004) * 0.5 + 0.5;
    const fade = 1 - Math.min(dist / (maxDist * 0.85), 1);
    const alpha = raw * fade * 0.14;
    if (alpha < 0.005) return;
    const pts = hexPoints(x, y, HEX_R - 4);
    ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]);
    pts.forEach(p => ctx.lineTo(p[0], p[1])); ctx.closePath();
    ctx.strokeStyle = `rgba(14,165,233,${alpha.toFixed(3)})`; ctx.lineWidth = 0.6; ctx.stroke();
    if (dist < 180 && raw > 0.78) {
      ctx.fillStyle = `rgba(14,165,233,${(alpha * 0.35).toFixed(3)})`; ctx.fill();
    }
  });

  // — Scan line
  scanY += 0.55; if (scanY > H + 80) scanY = -80;
  const sg = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40);
  sg.addColorStop(0, 'rgba(14,165,233,0)'); sg.addColorStop(0.5, 'rgba(14,165,233,0.06)'); sg.addColorStop(1, 'rgba(14,165,233,0)');
  ctx.fillStyle = sg; ctx.fillRect(0, scanY - 40, W, 80);

  // — Central orb (sin gradientes)
  const cx = W * 0.5, cy = H * 0.5;
  const pulse = 0.7 + 0.3 * Math.sin(t * 1.2);
  for (let r = 280; r > 0; r -= 14) {
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(14,165,233,${(((280 - r) / 280) * 0.055 * pulse).toFixed(4)})`; ctx.fill();
  }

  // — Particles
  particles.forEach((p, i) => {
    p.tail.push([p.x, p.y]); if (p.tail.length > 28) p.tail.shift();
    p.life++; p.x += p.vx; p.y += p.vy;
    const prog = p.life / p.maxLife;
    const a = prog < 0.12 ? prog / 0.12 : prog > 0.75 ? 1 - (prog - 0.75) / 0.25 : 1;
    if (p.tail.length > 2) {
      ctx.beginPath(); ctx.moveTo(p.tail[0][0], p.tail[0][1]);
      p.tail.forEach(pt => ctx.lineTo(pt[0], pt[1]));
      ctx.strokeStyle = p.color + (a * 0.22).toFixed(3) + ')'; ctx.lineWidth = p.size * 0.5; ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color + (a * 0.85).toFixed(3) + ')'; ctx.fill();
    if (p.life >= p.maxLife) particles[i] = mkParticle();
  });

  animId = requestAnimationFrame(draw);
}

window.addEventListener('resize', resize);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) cancelAnimationFrame(animId);
  else animId = requestAnimationFrame(draw);
});
document.addEventListener('astro:before-swap', () => cancelAnimationFrame(animId));

resize();
animId = requestAnimationFrame(draw);
</script>