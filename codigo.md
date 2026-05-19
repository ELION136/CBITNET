Hero.astro 
---
const slides = [
  {
    image: "/images/ima1.jpg",
    subtitle: "Breaking News • Exclusive Coverage",
    title: "PRESS STUNNED",
    titleHighlight: "BY BARCA!",
    text: "The dramatic turnaround that left the world in awe. A masterclass in strategy, passion, and pure sporting excellence on the grandest stage."
  },
  {
    image: "/images/ima5.jpg",
    subtitle: "Manager's Insight",
    title: "MASTERMIND",
    titleHighlight: "REVEALED",
    text: "Go behind the scenes and discover the tactical genius that orchestrated this unforgettable comeback. The untold story from the locker room."
  },
  {
    image: "/images/ima4.jpg",
    subtitle: "Historic Victory",
    title: "A NIGHT TO",
    titleHighlight: "REMEMBER",
    text: "Fans celebrated across the globe as the team secured their place in history. Witness the passion and glory of the ultimate triumph."
  }
];
---

<section class="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black hero-slider">
  
  {slides.map((slide, index) => (
    <div class={`absolute inset-0 z-0 slide-container w-full h-full ${index === 0 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-in-out`} data-index={index}>
      <img src={slide.image} alt={slide.title} class="w-full h-full object-cover opacity-60 hero-bg scale-105" />
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
      
      <div class="absolute inset-0 z-10 container mx-auto px-6 md:px-10 flex flex-col items-start justify-center w-full">
        <div class="slide-content translate-y-12 opacity-0">
          <p class="text-yellow-500 font-bold tracking-widest text-xs md:text-sm mb-4 uppercase">{slide.subtitle}</p>
          <h1 class="text-6xl md:text-8xl lg:text-9xl font-display leading-[0.85] text-white mix-blend-lighten relative">
            {slide.title}<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">{slide.titleHighlight}</span>
          </h1>
          <p class="text-gray-300 max-w-xl mt-6 md:mt-8 text-base md:text-lg">
            {slide.text}
          </p>
          <div class="mt-8 md:mt-10">
            <a href="#" class="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-yellow-500 text-black font-bold uppercase tracking-wider overflow-hidden hover:scale-105 transition-transform duration-300">
              <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span class="relative z-10 flex items-center gap-2 group-hover:text-black">
                Read the Full Story
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  ))}

  <!-- Slider Controls -->
  <div class="absolute bottom-10 left-0 w-full z-20 px-6 md:px-10">
    <div class="container mx-auto flex gap-4 slider-controls">
      {slides.map((_, index) => (
        <button class={`h-1 transition-all duration-500 rounded-full cursor-pointer ${index === 0 ? 'w-16 bg-yellow-500' : 'w-8 bg-white/30 hover:bg-white/50'}`} data-target={index} aria-label={`Go to slide ${index + 1}`}></button>
      ))}
    </div>
  </div>
</section>

<script>
  import gsap from 'gsap';

  document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide-container');
    const controls = document.querySelectorAll('.slider-controls button');
    let currentSlide = 0;
    let isAnimating = false;
    let slideInterval: number;

    const animateContentIn = (index: number) => {
      const content = slides[index].querySelector('.slide-content');
      const bg = slides[index].querySelector('.hero-bg');
      
      gsap.fromTo(content, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      );
      
      gsap.fromTo(bg,
        { scale: 1.1 },
        { scale: 1, duration: 6, ease: 'power1.out' }
      );
    };

    const animateContentOut = (index: number) => {
      const content = slides[index].querySelector('.slide-content');
      gsap.to(content, {
        y: -50, opacity: 0, duration: 0.8, ease: 'power3.in'
      });
    };

    const goToSlide = (index: number) => {
      if (isAnimating || index === currentSlide) return;
      isAnimating = true;

      // Update controls
      controls.forEach((btn, i) => {
        if (i === index) {
          btn.className = 'h-1 transition-all duration-500 rounded-full cursor-pointer w-16 bg-yellow-500';
        } else {
          btn.className = 'h-1 transition-all duration-500 rounded-full cursor-pointer w-8 bg-white/30 hover:bg-white/50';
        }
      });

      // Animate out current
      animateContentOut(currentSlide);
      
      // Crossfade
      setTimeout(() => {
        slides[currentSlide].classList.remove('opacity-100', 'z-10');
        slides[currentSlide].classList.add('opacity-0', 'z-0');
        
        slides[index].classList.remove('opacity-0', 'z-0');
        slides[index].classList.add('opacity-100', 'z-10');
        
        animateContentIn(index);
        currentSlide = index;
        
        setTimeout(() => {
          isAnimating = false;
        }, 800);
      }, 600);
    };

    const nextSlide = () => {
      let next = (currentSlide + 1) % slides.length;
      goToSlide(next);
    };

    const startInterval = () => {
      slideInterval = window.setInterval(nextSlide, 6000);
    };

    const stopInterval = () => {
      if (slideInterval) clearInterval(slideInterval);
    };

    if (slides.length > 0) {
        animateContentIn(0);
        slides[0].classList.add('z-10');
        startInterval();

        controls.forEach((btn, i) => {
          btn.addEventListener('click', () => {
            stopInterval();
            goToSlide(i);
            startInterval();
          });
        });
    }
  });
</script>






verision 1 de carucel
---
const slides = [
  {
    id: 1,
    title: "TACTICS",
    subtitle: "INSTANCE TASK",
    image: "/images/ima2.jpg",
    locked: false,
  },
  {
    id: 2,
    title: "MATCH REPORT",
    subtitle: "INSTANCE TASK",
    image: "/images/ima3.jpg",
    locked: false,
  },
  {
    id: 3,
    title: "THE MASTERMIND",
    subtitle: "MAIN EVENT",
    image: "/images/head1.jpg",
    locked: false,
  },
  {
    id: 4,
    title: "INTERVIEW",
    subtitle: "INSTANCE TASK",
    image: "/images/ima4.jpg",
    locked: true,
  },
  {
    id: 5,
    title: "ANALYSIS",
    subtitle: "INSTANCE TASK",
    image: "/images/ima5.jpg",
    locked: true,
  }
];

const institutions = [
  "INFOCADE",
  "CENACAP",
  "FUNDACION 1",
  "FUNDACION 2",
  "CLUB DE LEONES"
];
---

<section class="relative min-h-screen w-full flex items-center justify-center overflow-x-hidden bg-[#030303] coverflow-section py-32 xl:py-0">
  
  <!-- Animated Background Image -->
  <div class="absolute inset-0 z-0 overflow-hidden">
    <img src="/images/ima1.jpg" alt="Background" class="w-full h-full object-cover opacity-20 bg-pan pointer-events-none" />
    <div class="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303]"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/50 to-[#030303]"></div>
  </div>

  <!-- Background glow effect -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-yellow-500/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none z-0"></div>

  <!-- Main Layout Container (3 Columns) -->
  <div class="relative z-50 w-full max-w-[1600px] mx-auto px-6 md:px-10 flex flex-col xl:flex-row items-center justify-between gap-16 xl:gap-4">
    
    <!-- Left Column (Title & Review) -->
    <div class="w-full xl:w-[350px] flex flex-col items-center xl:items-start text-center xl:text-left pointer-events-none order-1">
      <h1 class="text-6xl md:text-7xl font-display text-white tracking-widest uppercase leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] type-text" data-text="CBIT"></h1>
      <h2 class="text-[10px] md:text-xs font-display text-yellow-500 tracking-[0.3em] md:tracking-[0.5em] uppercase mt-2 h-4 type-text" data-text="SYSTEM INITIALIZATION"></h2>
      
      <div class="h-[2px] w-16 bg-yellow-500 mt-4 opacity-80 line-anim origin-center xl:origin-left scale-x-0"></div>
      
      <p class="text-gray-400 text-xs md:text-sm mt-6 mb-8 leading-relaxed pointer-events-auto max-w-md xl:max-w-sm min-h-[80px] type-text text-left xl:text-left" data-text="Accede a la base de datos principal para revisar análisis tácticos, entrevistas exclusivas y la metodología deportiva. Explora las instancias de manera fluida interactuando con los módulos centrales del sistema."></p>
    </div>

    <!-- Center Column (3D Carousel Container) -->
    <div class="relative w-full xl:flex-1 h-[380px] md:h-[450px] lg:h-[500px] flex items-center justify-center perspective-[1200px] z-20 slider-container pointer-events-auto order-2">
      <!-- The Spinner that rotates -->
      <div class="relative w-[200px] md:w-[280px] lg:w-[320px] h-[320px] md:h-[450px] lg:h-[500px] transform-style-3d carousel-spinner" style="will-change: transform;">
        
        {slides.map((slide, index) => (
          <div 
            class="absolute top-0 left-0 w-full h-full cursor-pointer coverflow-card group"
            data-index={index}
          >
            <div class="w-full h-full relative flex flex-col items-center justify-between p-3 md:p-4 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 group-[.active]:border-yellow-500 group-[.active]:shadow-[0_0_50px_rgba(234,179,8,0.3)] transition-all duration-500 overflow-hidden" style="clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);">
              
              <img src={slide.image} alt={slide.title} class="absolute inset-0 w-full h-full object-cover opacity-50 group-[.active]:opacity-90 transition-opacity duration-500 pointer-events-none grayscale-[60%] group-[.active]:grayscale-0" />
              <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 group-[.active]:from-black/40 group-[.active]:to-black/80 transition-colors duration-500"></div>

              <!-- Top Header -->
              <div class="relative z-10 w-full flex flex-col items-center mt-2">
                 <div class="h-[2px] w-1/3 bg-yellow-500 mb-2 opacity-30 group-[.active]:opacity-100 group-[.active]:w-2/3 transition-all duration-500"></div>
                 <h3 class="text-gray-400 group-[.active]:text-white text-[8px] md:text-xs font-bold tracking-[0.2em] uppercase transition-colors">{slide.subtitle}</h3>
                 <h2 class="text-white/50 group-[.active]:text-yellow-500 font-display text-base md:text-2xl mt-1 tracking-wider text-center transition-colors">{slide.title}</h2>
              </div>

              <!-- Center Icon (Lock or Unlock) -->
              <div class="relative z-10 w-10 h-10 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center bg-black/60 backdrop-blur-md group-[.active]:border-yellow-500/80 group-[.active]:bg-yellow-500/20 group-[.active]:scale-110 transition-all duration-500">
                {slide.locked ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/30 md:w-6 md:h-6"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/50 group-[.active]:text-yellow-400 md:w-6 md:h-6"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>
                )}
              </div>

              <!-- Bottom Button -->
              <div class="relative z-10 w-full flex flex-col items-center mb-2 md:mb-4">
                 <button class="px-4 py-1.5 md:px-8 md:py-2 rounded-sm border border-white/20 text-white/50 font-bold tracking-widest text-[8px] md:text-xs bg-white/5 hover:bg-white/10 group-[.active]:border-yellow-500 group-[.active]:text-black group-[.active]:bg-yellow-500 group-[.active]:shadow-[0_0_20px_rgba(234,179,8,0.6)] transition-all duration-300">
                   ENTER
                 </button>
                 <div class="flex gap-1 mt-3 md:mt-6 opacity-30 group-[.active]:opacity-100 transition-opacity duration-500">
                    <div class="w-2 h-1 bg-white/50 group-[.active]:bg-yellow-500 transition-colors"></div>
                    <div class="w-6 h-1 bg-white/50 group-[.active]:bg-yellow-500 transition-colors"></div>
                    <div class="w-2 h-1 bg-white/50 group-[.active]:bg-yellow-500 transition-colors"></div>
                 </div>
              </div>

              <!-- Decorative borders -->
              <div class="absolute top-0 left-0 w-4 md:w-6 h-[2px] bg-white/20 group-[.active]:bg-yellow-500 transition-colors duration-500"></div>
              <div class="absolute top-0 left-0 w-[2px] h-4 md:h-6 bg-white/20 group-[.active]:bg-yellow-500 transition-colors duration-500"></div>
              <div class="absolute bottom-0 right-0 w-4 md:w-6 h-[2px] bg-white/20 group-[.active]:bg-yellow-500 transition-colors duration-500"></div>
              <div class="absolute bottom-0 right-0 w-[2px] h-4 md:h-6 bg-white/20 group-[.active]:bg-yellow-500 transition-colors duration-500"></div>

            </div>
          </div>
        ))}
      </div>
    </div>

    <!-- Right Column (Institutions Buttons) -->
    <div class="w-full xl:w-[350px] flex flex-col items-center xl:items-end text-center xl:text-right pointer-events-none order-3">
      <h3 class="text-base lg:text-lg font-display text-white tracking-[0.2em] uppercase right-title-anim opacity-0">
        NUESTRAS <span class="text-yellow-500">INSTITUCIONES</span>
      </h3>
      <div class="h-[2px] w-12 bg-white/20 mt-3 mb-6 right-line-anim origin-center xl:origin-right mx-auto xl:mx-0 scale-x-0"></div>
      
      <div class="flex flex-col items-center xl:items-end gap-3 pointer-events-auto right-buttons-anim w-full">
        {institutions.map(inst => (
          <button class="group relative px-6 py-3 md:py-4 border border-white/10 bg-white/5 hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 w-full max-w-[300px] xl:w-[250px] flex items-center justify-center xl:justify-end overflow-hidden opacity-0 translate-x-5">
            <span class="absolute left-0 top-0 w-1 h-full bg-yellow-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
            <span class="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-400 group-hover:text-yellow-500 transition-colors z-10 relative">
              {inst}
            </span>
          </button>
        ))}
      </div>
    </div>

  </div>
</section>

<style>
  .bg-pan {
    animation: panImage 30s linear infinite alternate;
  }
  @keyframes panImage {
    0% { transform: scale(1.1) translate(0, 0); }
    100% { transform: scale(1.15) translate(-2%, 2%); }
  }
  .transform-style-3d {
    transform-style: preserve-3d;
  }
  
  /* Typewriter Cursor */
  .cursor {
    display: inline-block;
    width: 8px;
    height: 1.2em;
    background-color: #eab308; /* yellow-500 */
    vertical-align: middle;
    animation: blink 1s step-end infinite;
    margin-left: 4px;
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
</style>

<script>
  import gsap from 'gsap';

  document.addEventListener('DOMContentLoaded', () => {

    // ── TYPEWRITER ──────────────────────────────────────────────
    const typeElements = document.querySelectorAll('.type-text');

    const typeWriter = (element: Element, speed: number): Promise<void> => {
      return new Promise(resolve => {
        const text = element.getAttribute('data-text') || '';
        // Limpiar sin innerHTML para no reparsear el DOM completo
        while (element.firstChild) element.removeChild(element.firstChild);

        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        element.appendChild(cursor);

        let i = 0;
        const tick = () => {
          if (i < text.length) {
            element.insertBefore(document.createTextNode(text[i++]), cursor);
            setTimeout(tick, speed);
          } else {
            cursor.remove();
            resolve();
          }
        };
        tick();
      });
    };

    const startTypingSequence = async () => {
      if (typeElements.length >= 3) {
        await typeWriter(typeElements[0], 80);
        await typeWriter(typeElements[1], 40);
        gsap.to('.line-anim', { scaleX: 1, opacity: 0.8, duration: 0.8, ease: 'power3.out' });
        await new Promise(r => setTimeout(r, 200));
        await typeWriter(typeElements[2], 18);
        gsap.to('.right-title-anim', { x: 0, opacity: 1, duration: 1, ease: 'power3.out' });
        gsap.to('.right-line-anim', { scaleX: 1, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' });
        gsap.to('.right-buttons-anim button', { x: 0, opacity: 1, duration: 0.8, delay: 0.4, stagger: 0.1, ease: 'power3.out' });
      }
    };

    startTypingSequence();

    // ── CARRUSEL 3D ─────────────────────────────────────────────
    // Flotado solo en el spinner (no en el container) → una sola capa compuesta
    const spinner = document.querySelector('.carousel-spinner') as HTMLElement;
    const cards = document.querySelectorAll('.coverflow-card') as NodeListOf<HTMLElement>;
    const totalCards = cards.length;
    const theta = 360 / totalCards;

    const calculateRadius = () => {
      if (window.innerWidth < 640) return 160;
      if (window.innerWidth < 1024) return 220;
      return 320;
    };

    let radius = calculateRadius();
    let activeIndex = 0;
    let autoPlayTween: gsap.core.Tween | null = null;

    const positionCards = () => {
      radius = calculateRadius();
      cards.forEach((card, i) => {
        card.style.transform = `rotateY(${theta * i}deg) translateZ(${radius}px)`;
      });
    };

    const updateCards = (animate = true) => {
      const rotation = -activeIndex * theta;
      const props = { z: -radius, rotationY: rotation };

      if (animate) {
        gsap.to(spinner, { ...props, duration: 0.85, ease: 'power3.out' });
      } else {
        gsap.set(spinner, props);
      }

      const norm = ((activeIndex % totalCards) + totalCards) % totalCards;
      cards.forEach((card, i) => card.classList.toggle('active', i === norm));
    };

    // Auto-play con repeat en lugar de recursión
    const startAutoPlay = () => {
      autoPlayTween?.kill();
      autoPlayTween = gsap.delayedCall(3.5, () => {
        activeIndex++;
        updateCards();
        startAutoPlay();
      });
    };

    positionCards();
    updateCards(false);

    // Flotado en el spinner directamente (no en slider-container)
    gsap.to(spinner, {
      y: -10,
      duration: 4,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    startAutoPlay();

    // ── CLICK ───────────────────────────────────────────────────
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const index = parseInt(card.getAttribute('data-index') || '0');
        const norm = ((activeIndex % totalCards) + totalCards) % totalCards;

        if (norm !== index) {
          let diff = index - norm;
          if (diff > totalCards / 2) diff -= totalCards;
          if (diff < -totalCards / 2) diff += totalCards;
          activeIndex += diff;
          updateCards();
          startAutoPlay();
        } else {
          gsap.fromTo(card, { scale: 0.95 }, { scale: 1, duration: 0.4, ease: 'back.out(2)' });
        }
      });
    });

    // ── SCROLL DEL MOUSE (wheel) ─────────────────────────────────
    const sliderContainer = document.querySelector('.slider-container') as HTMLElement;
    let wheelTimeout: ReturnType<typeof setTimeout>;

    sliderContainer.addEventListener('wheel', (e: WheelEvent) => {
      e.preventDefault();
      clearTimeout(wheelTimeout);
      // Debounce para que no dispare 10 veces por scroll
      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 0 || e.deltaX > 0) {
          activeIndex++;
        } else {
          activeIndex--;
        }
        updateCards();
        startAutoPlay();
      }, 50);
    }, { passive: false });

    // ── SWIPE TÁCTIL (móvil) ─────────────────────────────────────
    let touchStartX = 0;
    let touchStartY = 0;

    sliderContainer.addEventListener('touchstart', (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    sliderContainer.addEventListener('touchend', (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;

      // Solo reaccionar si el swipe fue más horizontal que vertical
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        activeIndex += dx < 0 ? 1 : -1;
        updateCards();
        startAutoPlay();
      }
    }, { passive: true });

    // ── RESIZE ──────────────────────────────────────────────────
    window.addEventListener('resize', () => {
      positionCards();
      updateCards(false);
    });
  });
</script>




version 3

---
const slides = [
  { id: 1, title: "TACTICS", subtitle: "INSTANCE TASK", image: "/images/ima2.jpg", locked: false },
  { id: 2, title: "MATCH REPORT", subtitle: "INSTANCE TASK", image: "/images/ima3.jpg", locked: false },
  { id: 3, title: "THE MASTERMIND", subtitle: "MAIN EVENT", image: "/images/head1.jpg", locked: false },
  { id: 4, title: "INTERVIEW", subtitle: "INSTANCE TASK", image: "/images/ima4.jpg", locked: true },
  { id: 5, title: "ANALYSIS", subtitle: "INSTANCE TASK", image: "/images/ima5.jpg", locked: true },
];

const institutions = ["INFOCADE", "CENACAP", "FUNDACION 1", "FUNDACION 2", "CLUB DE LEONES"];

const baseOffsets = [
  { x: 40, y: 24, rot: -8, z: 1 },
  { x: 20, y: 12, rot: -4, z: 2 },
  { x: 0,  y: 0,  rot:  0, z: 3 },
  { x: 20, y: 12, rot:  4, z: 2 },
  { x: 40, y: 24, rot:  8, z: 1 },
];
---

<section class="relative min-h-screen w-full flex items-center justify-center overflow-x-hidden bg-[#030303] coverflow-section py-32 xl:py-0">

  <div class="absolute inset-0 z-0 overflow-hidden">
    <img src="/images/ima1.jpg" alt="Background" class="w-full h-full object-cover opacity-20 bg-pan pointer-events-none" />
    <div class="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303]"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/50 to-[#030303]"></div>
  </div>

  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-yellow-500/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none z-0"></div>

  <div class="relative z-50 w-full max-w-[1600px] mx-auto px-6 md:px-10 flex flex-col xl:flex-row items-center justify-between gap-16 xl:gap-4">

    <!-- Left Column -->
    <div class="w-full xl:w-[350px] flex flex-col items-center xl:items-start text-center xl:text-left pointer-events-none order-1">
      <h1 class="text-6xl md:text-7xl font-display text-white tracking-widest uppercase leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] type-text" data-text="CBIT"></h1>
      <h2 class="text-[10px] md:text-xs font-display text-yellow-500 tracking-[0.3em] md:tracking-[0.5em] uppercase mt-2 h-4 type-text" data-text="SYSTEM INITIALIZATION"></h2>
      <div class="h-[2px] w-16 bg-yellow-500 mt-4 opacity-80 line-anim origin-center xl:origin-left scale-x-0"></div>
      <p class="text-gray-400 text-xs md:text-sm mt-6 mb-8 leading-relaxed pointer-events-auto max-w-md xl:max-w-sm min-h-[80px] type-text text-left" data-text="Accede a la base de datos principal para revisar análisis tácticos, entrevistas exclusivas y la metodología deportiva. Explora las instancias de manera fluida interactuando con los módulos centrales del sistema."></p>

      <!-- Dot navigator -->
      <div class="flex gap-2 mt-2 pointer-events-auto deck-dots">
        {slides.map((_, i) => (
          <button
            data-dot={i}
            class={`w-2 h-2 rounded-full border transition-all duration-300 ${i === 2 ? 'bg-yellow-500 border-yellow-500 w-5' : 'bg-transparent border-white/30'}`}
          />
        ))}
      </div>
    </div>

    <!-- Center: Deck -->
    <div class="relative xl:flex-1 flex items-center justify-center order-2">
      <div class="deck-stage relative" style="width:260px; height:380px; perspective:1000px;">
        {slides.map((slide, index) => {
          const off = baseOffsets[index];
          return (
            <div
              class="deck-card absolute top-0 left-0 w-full h-full cursor-pointer"
              data-index={index}
              style={`transform: translate(${off.x}px, ${off.y}px) rotate(${off.rot}deg); z-index:${off.z};`}
            >
              <div class="w-full h-full relative flex flex-col items-center justify-between p-4 bg-[#0a0a0a] border border-white/10 overflow-hidden transition-[border-color,box-shadow] duration-300"
                style="clip-path: polygon(8% 0,100% 0,100% 92%,92% 100%,0 100%,0 8%);">

                <img src={slide.image} alt={slide.title}
                  class="absolute inset-0 w-full h-full object-cover opacity-30 transition-opacity duration-400 pointer-events-none grayscale-[70%] card-img"
                  style="will-change: opacity;" />
                <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90"></div>

                <!-- Top -->
                <div class="relative z-10 w-full flex flex-col items-center mt-1">
                  <div class="h-[2px] w-1/3 bg-yellow-500 mb-2 opacity-30 card-bar transition-all duration-400"></div>
                  <h3 class="text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 card-sub transition-colors duration-300">{slide.subtitle}</h3>
                  <h2 class="text-white/40 font-display text-lg md:text-2xl mt-1 tracking-wider text-center card-title transition-colors duration-300">{slide.title}</h2>
                </div>

                <!-- Lock -->
                <div class="relative z-10 w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/15 flex items-center justify-center bg-black/50 card-icon transition-all duration-300">
                  {slide.locked ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/25 md:w-5 md:h-5"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/40 md:w-5 md:h-5 card-lock-svg"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>
                  )}
                </div>

                <!-- Bottom -->
                <div class="relative z-10 w-full flex flex-col items-center mb-2">
                  <button class="px-6 py-1.5 md:px-8 md:py-2 border border-white/15 text-white/30 font-bold tracking-widest text-[8px] md:text-xs bg-white/5 transition-all duration-300 card-btn">
                    ENTER
                  </button>
                  <div class="flex gap-1 mt-4 opacity-20 card-dots-inner transition-opacity duration-400">
                    <div class="w-2 h-1 bg-white/50 card-pip transition-colors duration-300"></div>
                    <div class="w-6 h-1 bg-white/50 card-pip transition-colors duration-300"></div>
                    <div class="w-2 h-1 bg-white/50 card-pip transition-colors duration-300"></div>
                  </div>
                </div>

                <!-- Corner decor -->
                <div class="absolute top-0 left-0 w-5 h-[2px] bg-white/15 card-corner-h transition-colors duration-300"></div>
                <div class="absolute top-0 left-0 w-[2px] h-5 bg-white/15 card-corner-v transition-colors duration-300"></div>
                <div class="absolute bottom-0 right-0 w-5 h-[2px] bg-white/15 card-corner-h transition-colors duration-300"></div>
                <div class="absolute bottom-0 right-0 w-[2px] h-5 bg-white/15 card-corner-v transition-colors duration-300"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    <!-- Right Column -->
    <div class="w-full xl:w-[350px] flex flex-col items-center xl:items-end text-center xl:text-right pointer-events-none order-3">
      <h3 class="text-base lg:text-lg font-display text-white tracking-[0.2em] uppercase right-title-anim opacity-0">
        NUESTRAS <span class="text-yellow-500">INSTITUCIONES</span>
      </h3>
      <div class="h-[2px] w-12 bg-white/20 mt-3 mb-6 right-line-anim origin-center xl:origin-right mx-auto xl:mx-0 scale-x-0"></div>
      <div class="flex flex-col items-center xl:items-end gap-3 pointer-events-auto right-buttons-anim w-full">
        {institutions.map(inst => (
          <button class="group relative px-6 py-3 md:py-4 border border-white/10 bg-white/5 hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 w-full max-w-[300px] xl:w-[250px] flex items-center justify-center xl:justify-end overflow-hidden opacity-0 translate-x-5">
            <span class="absolute left-0 top-0 w-1 h-full bg-yellow-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
            <span class="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-400 group-hover:text-yellow-500 transition-colors z-10 relative">{inst}</span>
          </button>
        ))}
      </div>
    </div>

  </div>
</section>

<style>
  .bg-pan { animation: panImage 30s linear infinite alternate; }
  @keyframes panImage {
    0%   { transform: scale(1.1) translate(0,0); }
    100% { transform: scale(1.15) translate(-2%,2%); }
  }
  .cursor {
    display: inline-block; width: 8px; height: 1.1em;
    background: #eab308; vertical-align: middle;
    animation: blink 1s step-end infinite; margin-left: 3px;
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

  /* Estado ACTIVE de la carta top */
  .deck-card.is-top .card-img      { opacity: .75 !important; filter: grayscale(0%) !important; }
  .deck-card.is-top .card-bar      { opacity: 1 !important; width: 60% !important; }
  .deck-card.is-top .card-sub      { color: rgba(255,255,255,.8) !important; }
  .deck-card.is-top .card-title    { color: #eab308 !important; }
  .deck-card.is-top .card-icon     { border-color: rgba(234,179,8,.8) !important; background: rgba(234,179,8,.15) !important; }
  .deck-card.is-top .card-lock-svg { color: #eab308 !important; }
  .deck-card.is-top .card-btn      { border-color: #eab308 !important; color: #000 !important; background: #eab308 !important; box-shadow: 0 0 20px rgba(234,179,8,.5); }
  .deck-card.is-top .card-dots-inner { opacity: 1 !important; }
  .deck-card.is-top .card-pip      { background: #eab308 !important; }
  .deck-card.is-top .card-corner-h,
  .deck-card.is-top .card-corner-v { background: #eab308 !important; }
  .deck-card.is-top > div          { border-color: rgba(234,179,8,.6) !important; box-shadow: 0 0 50px rgba(234,179,8,.2); }
</style>

<script>
  import gsap from 'gsap';

  document.addEventListener('DOMContentLoaded', () => {

    // ── TYPEWRITER ──────────────────────────────────────────────
    const typeElements = document.querySelectorAll('.type-text');
    const typeWriter = (el: Element, speed: number): Promise<void> =>
      new Promise(resolve => {
        const text = el.getAttribute('data-text') || '';
        while (el.firstChild) el.removeChild(el.firstChild);
        const cursor = Object.assign(document.createElement('span'), { className: 'cursor' });
        el.appendChild(cursor);
        let i = 0;
        const tick = () => i < text.length
          ? (el.insertBefore(document.createTextNode(text[i++]), cursor), setTimeout(tick, speed))
          : (cursor.remove(), resolve());
        tick();
      });

    const startTypingSequence = async () => {
      if (typeElements.length < 3) return;
      await typeWriter(typeElements[0], 80);
      await typeWriter(typeElements[1], 40);
      gsap.to('.line-anim', { scaleX: 1, opacity: 0.8, duration: 0.8, ease: 'power3.out' });
      await new Promise(r => setTimeout(r, 200));
      await typeWriter(typeElements[2], 18);
      gsap.to('.right-title-anim', { x: 0, opacity: 1, duration: 1, ease: 'power3.out' });
      gsap.to('.right-line-anim', { scaleX: 1, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' });
      gsap.to('.right-buttons-anim button', { x: 0, opacity: 1, duration: 0.8, delay: 0.4, stagger: 0.1, ease: 'power3.out' });
    };
    startTypingSequence();

    // ── DECK ────────────────────────────────────────────────────
    const cards = Array.from(document.querySelectorAll<HTMLElement>('.deck-card'));
    const dots  = Array.from(document.querySelectorAll<HTMLElement>('.deck-dots button'));
    const total = cards.length;
    const midIndex = Math.floor(total / 2); // carta del centro = la "top"

    // Offsets base para cada posición en el deck (5 cartas)
    const BASE = [
      { x: 40, y: 24, rot: -8, z: 1, scale: .88 },
      { x: 20, y: 12, rot: -4, z: 2, scale: .94 },
      { x: 0,  y: 0,  rot:  0, z: 5, scale: 1   },
      { x: 20, y: 12, rot:  4, z: 2, scale: .94 },
      { x: 40, y: 24, rot:  8, z: 1, scale: .88 },
    ];

    // Orden visual: qué slide está en qué posición del deck
    // offset[i] = posición en BASE del slide i
    let topIndex = 2; // slide índice 2 empieza al frente

    const applyPositions = (animate: boolean) => {
      cards.forEach((card, slideIdx) => {
        // posición relativa al top
        let pos = (slideIdx - topIndex + total) % total;
        // mapear 0..4 a -2..2 centrado
        if (pos > total / 2) pos -= total;
        const basePos = pos + midIndex; // 0..4
        const clamped = Math.max(0, Math.min(total - 1, basePos));
        const b = BASE[clamped];

        const isTop = slideIdx === topIndex;
        card.classList.toggle('is-top', isTop);

        const transform = `translate(${b.x}px,${b.y}px) rotate(${b.rot}deg) scale(${b.scale})`;

        if (animate) {
          gsap.to(card, { x: b.x, y: b.y, rotation: b.rot, scale: b.scale, zIndex: b.z + (isTop ? 2 : 0), duration: 0.55, ease: 'power3.out' });
        } else {
          card.style.transform = transform;
          card.style.zIndex = String(b.z + (isTop ? 2 : 0));
        }
      });

      // Dots
      dots.forEach((dot, i) => {
        const active = i === topIndex;
        dot.style.background = active ? '#eab308' : 'transparent';
        dot.style.borderColor = active ? '#eab308' : 'rgba(255,255,255,0.3)';
        dot.style.width = active ? '20px' : '8px';
      });
    };

    applyPositions(false);

    // Click en carta → llevarla al frente
    cards.forEach((card, i) => {
      card.addEventListener('click', () => {
        if (i === topIndex) return;
        topIndex = i;
        applyPositions(true);
      });
    });

    // Click en dot
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        topIndex = i;
        applyPositions(true);
      });
    });

    // Tilt 3D solo en la carta top
    cards.forEach(card => {
      card.addEventListener('mousemove', (e: MouseEvent) => {
        if (!card.classList.contains('is-top')) return;
        const r = card.getBoundingClientRect();
        const mx = (e.clientX - r.left) / r.width - 0.5;
        const my = (e.clientY - r.top)  / r.height - 0.5;
        gsap.to(card, {
          rotationX: -my * 14,
          rotationY:  mx * 14,
          z: 30,
          duration: 0.2,
          ease: 'power1.out',
          transformPerspective: 900,
          overwrite: 'auto',
        });
      });

      card.addEventListener('mouseleave', () => {
        if (!card.classList.contains('is-top')) return;
        gsap.to(card, {
          rotationX: 0, rotationY: 0, z: 0,
          duration: 0.5, ease: 'power3.out',
          overwrite: 'auto',
        });
      });
    });

    // Scroll / swipe para cambiar carta
    let wheelCooldown = false;
    document.querySelector('.deck-stage')?.addEventListener('wheel', (e: Event) => {
      const we = e as WheelEvent;
      we.preventDefault();
      if (wheelCooldown) return;
      wheelCooldown = true;
      setTimeout(() => { wheelCooldown = false; }, 600);
      topIndex = (topIndex + (we.deltaY > 0 ? 1 : -1) + total) % total;
      applyPositions(true);
    }, { passive: false });

    let tx = 0;
    document.querySelector('.deck-stage')?.addEventListener('touchstart', (e: Event) => {
      tx = (e as TouchEvent).touches[0].clientX;
    }, { passive: true });
    document.querySelector('.deck-stage')?.addEventListener('touchend', (e: Event) => {
      const dx = (e as TouchEvent).changedTouches[0].clientX - tx;
      if (Math.abs(dx) < 40) return;
      topIndex = (topIndex + (dx < 0 ? 1 : -1) + total) % total;
      applyPositions(true);
    }, { passive: true });
  });
</script>



version 4
---
const slides = [
  { id: 1, title: "TACTICS", subtitle: "INSTANCE TASK", image: "/images/ima2.jpg", locked: false },
  { id: 2, title: "MATCH REPORT", subtitle: "INSTANCE TASK", image: "/images/ima3.jpg", locked: false },
  { id: 3, title: "THE MASTERMIND", subtitle: "MAIN EVENT", image: "/images/head1.jpg", locked: false },
  { id: 4, title: "INTERVIEW", subtitle: "INSTANCE TASK", image: "/images/ima4.jpg", locked: true },
  { id: 5, title: "ANALYSIS", subtitle: "INSTANCE TASK", image: "/images/ima5.jpg", locked: true },
];

const institutions = ["INFOCADE", "CENACAP", "FUNDACION 1", "FUNDACION 2", "CLUB DE LEONES"];
---

<section class="relative min-h-screen w-full flex items-center justify-center overflow-x-hidden bg-[#030303] py-24 xl:py-0">

  <div class="absolute inset-0 z-0 overflow-hidden">
    <img src="/images/ima1.jpg" alt="Background" class="w-full h-full object-cover opacity-20 bg-pan pointer-events-none" />
    <div class="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303]"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/50 to-[#030303]"></div>
  </div>

  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

  <div class="relative z-50 w-full max-w-[1600px] mx-auto px-6 md:px-10 flex flex-col gap-12">

    <!-- Top row: title -->
    <div class="flex flex-col items-center text-center pointer-events-none">
      <h1 class="text-6xl md:text-8xl font-display text-white tracking-widest uppercase leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] type-text" data-text="CBIT"></h1>
      <h2 class="text-[10px] md:text-xs font-display text-yellow-500 tracking-[0.5em] uppercase mt-3 type-text" data-text="SYSTEM INITIALIZATION"></h2>
      <div class="h-[2px] w-16 bg-yellow-500 mt-5 opacity-80 line-anim origin-center scale-x-0"></div>
    </div>

    <!-- Accordion -->
    <div class="accordion-wrap flex gap-2 md:gap-3 w-full" style="height: 420px; md:height: 480px;">
      {slides.map((slide, index) => (
        <div
          class="acc-card relative flex-shrink-0 overflow-hidden cursor-pointer border border-white/10 transition-[border-color] duration-500"
          data-index={index}
          style={`clip-path: polygon(6% 0,100% 0,100% 94%,94% 100%,0 100%,0 6%); flex: ${index === 0 ? '4' : '1'}; transition: flex .6s cubic-bezier(.77,0,.18,1), border-color .4s;`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            class="absolute inset-0 w-full h-full object-cover pointer-events-none acc-img transition-[opacity,filter] duration-500"
            style="opacity:.2; filter: grayscale(80%);"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/95"></div>
          <div class="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>

          <!-- Collapsed: vertical title -->
          <div class="acc-vtitle absolute inset-0 flex items-center justify-center transition-opacity duration-300" style="opacity:0;">
            <span class="font-display text-white/40 text-xs tracking-[0.3em] uppercase whitespace-nowrap"
              style="writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg);">
              {slide.title}
            </span>
          </div>

          <!-- Expanded: full content -->
          <div class="acc-content absolute inset-0 flex flex-col justify-between p-5 md:p-7 transition-opacity duration-500" style="opacity:0;">

            <!-- Top -->
            <div class="flex flex-col">
              <div class="h-[2px] bg-yellow-500 mb-3 acc-bar transition-all duration-500" style="width:32px;"></div>
              <span class="text-yellow-500 text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase">{slide.subtitle}</span>
              <h2 class="font-display text-white text-2xl md:text-4xl mt-2 tracking-wider uppercase leading-none">{slide.title}</h2>
            </div>

            <!-- Center: lock icon -->
            <div class="flex items-center justify-start">
              <div class="acc-icon w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center bg-black/60 transition-all duration-400">
                {slide.locked ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/30 md:w-6 md:h-6"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-400 md:w-6 md:h-6"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>
                )}
              </div>
            </div>

            <!-- Bottom -->
            <div class="flex flex-col gap-3">
              <button class="self-start px-6 py-2 border border-yellow-500 text-black bg-yellow-500 font-bold tracking-widest text-[10px] md:text-xs hover:bg-yellow-400 transition-colors duration-200">
                ENTER
              </button>
              <div class="flex gap-1">
                <div class="w-2 h-1 bg-yellow-500"></div>
                <div class="w-6 h-1 bg-yellow-500"></div>
                <div class="w-2 h-1 bg-yellow-500"></div>
              </div>
            </div>
          </div>

          <!-- Corner decor -->
          <div class="absolute top-0 left-0 w-5 h-[2px] acc-corner bg-white/15 transition-colors duration-400"></div>
          <div class="absolute top-0 left-0 w-[2px] h-5 acc-corner bg-white/15 transition-colors duration-400"></div>
          <div class="absolute bottom-0 right-0 w-5 h-[2px] acc-corner bg-white/15 transition-colors duration-400"></div>
          <div class="absolute bottom-0 right-0 w-[2px] h-5 acc-corner bg-white/15 transition-colors duration-400"></div>
        </div>
      ))}
    </div>

    <!-- Bottom row: description + institutions -->
    <div class="flex flex-col md:flex-row items-start justify-between gap-8 pointer-events-none">
      <p class="text-gray-400 text-xs md:text-sm leading-relaxed max-w-md pointer-events-auto type-text"
        data-text="Accede a la base de datos principal para revisar análisis tácticos, entrevistas exclusivas y la metodología deportiva.">
      </p>

      <div class="flex flex-col items-start md:items-end gap-2 pointer-events-auto right-buttons-anim">
        <h3 class="text-xs font-display text-white tracking-[0.2em] uppercase right-title-anim opacity-0">
          NUESTRAS <span class="text-yellow-500">INSTITUCIONES</span>
        </h3>
        <div class="h-[2px] w-10 bg-white/20 mb-2 right-line-anim scale-x-0 origin-left"></div>
        {institutions.map(inst => (
          <button class="group relative px-5 py-2.5 border border-white/10 bg-white/5 hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 w-full md:w-[220px] flex items-center justify-end overflow-hidden opacity-0 translate-x-5">
            <span class="absolute left-0 top-0 w-1 h-full bg-yellow-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
            <span class="text-[10px] font-bold tracking-[0.2em] text-gray-400 group-hover:text-yellow-500 transition-colors z-10 relative">{inst}</span>
          </button>
        ))}
      </div>
    </div>

  </div>
</section>

<style>
  .bg-pan { animation: panImage 30s linear infinite alternate; }
  @keyframes panImage {
    0%   { transform: scale(1.1) translate(0,0); }
    100% { transform: scale(1.15) translate(-2%,2%); }
  }
  .cursor {
    display: inline-block; width: 8px; height: 1.1em;
    background: #eab308; vertical-align: middle;
    animation: blink 1s step-end infinite; margin-left: 3px;
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

  .acc-card.is-open { border-color: rgba(234,179,8,.5) !important; }
  .acc-card.is-open .acc-img    { opacity: .8 !important; filter: grayscale(0%) !important; }
  .acc-card.is-open .acc-bar    { width: 56px !important; }
  .acc-card.is-open .acc-icon   { border-color: rgba(234,179,8,.7) !important; background: rgba(234,179,8,.15) !important; }
  .acc-card.is-open .acc-corner { background: #eab308 !important; }
  .acc-card.is-open .acc-vtitle { opacity: 0 !important; pointer-events: none; }
  .acc-card.is-open .acc-content { opacity: 1 !important; }
  .acc-card:not(.is-open) .acc-vtitle { opacity: 1 !important; }
  .acc-card:not(.is-open) .acc-content { opacity: 0 !important; pointer-events: none; }
</style>

<script>
  import gsap from 'gsap';

  document.addEventListener('DOMContentLoaded', () => {

    // ── TYPEWRITER ──────────────────────────────────────────────
    const typeElements = document.querySelectorAll('.type-text');
    const typeWriter = (el: Element, speed: number): Promise<void> =>
      new Promise(resolve => {
        const text = el.getAttribute('data-text') || '';
        while (el.firstChild) el.removeChild(el.firstChild);
        const cursor = Object.assign(document.createElement('span'), { className: 'cursor' });
        el.appendChild(cursor);
        let i = 0;
        const tick = () => i < text.length
          ? (el.insertBefore(document.createTextNode(text[i++]), cursor), setTimeout(tick, speed))
          : (cursor.remove(), resolve());
        tick();
      });

    const startTypingSequence = async () => {
      if (typeElements.length < 1) return;
      await typeWriter(typeElements[0], 80);
      await typeWriter(typeElements[1], 40);
      gsap.to('.line-anim', { scaleX: 1, opacity: 0.8, duration: 0.8, ease: 'power3.out' });
      await new Promise(r => setTimeout(r, 300));
      if (typeElements[2]) await typeWriter(typeElements[2], 18);
      gsap.to('.right-title-anim', { x: 0, opacity: 1, duration: 1, ease: 'power3.out' });
      gsap.to('.right-line-anim', { scaleX: 1, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' });
      gsap.to('.right-buttons-anim button', { x: 0, opacity: 1, duration: 0.8, delay: 0.4, stagger: 0.1, ease: 'power3.out' });
    };
    startTypingSequence();

    // ── ACCORDION ───────────────────────────────────────────────
    const accCards = Array.from(document.querySelectorAll<HTMLElement>('.acc-card'));
    let openIndex = 0;

    const openCard = (idx: number) => {
      openIndex = idx;
      accCards.forEach((card, i) => {
        const isOpen = i === idx;
        card.classList.toggle('is-open', isOpen);
        // flex grow via GSAP en el style inline
        gsap.to(card, {
          flexGrow: isOpen ? 4 : 1,
          duration: 0.6,
          ease: 'power3.inOut',
        });
      });
    };

    // Abrir la primera al inicio
    openCard(0);

    accCards.forEach((card, i) => {
      card.addEventListener('click', () => openCard(i));

      // Hover en cartas cerradas: leve escala
      card.addEventListener('mouseenter', () => {
        if (i === openIndex) return;
        gsap.to(card, { scale: 1.02, duration: 0.2, ease: 'power2.out' });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    });

    // Swipe táctil para accordion
    let tx = 0;
    const wrap = document.querySelector('.accordion-wrap');
    wrap?.addEventListener('touchstart', (e: Event) => {
      tx = (e as TouchEvent).touches[0].clientX;
    }, { passive: true });
    wrap?.addEventListener('touchend', (e: Event) => {
      const dx = (e as TouchEvent).changedTouches[0].clientX - tx;
      if (Math.abs(dx) < 40) return;
      const next = (openIndex + (dx < 0 ? 1 : -1) + accCards.length) % accCards.length;
      openCard(next);
    }, { passive: true });
  });
</script>

version 5
---
const slides = [
  { id: 1, title: "TACTICS", subtitle: "INSTANCE TASK", image: "/images/ima2.jpg", locked: false },
  { id: 2, title: "MATCH REPORT", subtitle: "INSTANCE TASK", image: "/images/ima3.jpg", locked: false },
  { id: 3, title: "THE MASTERMIND", subtitle: "MAIN EVENT", image: "/images/head1.jpg", locked: false },
  { id: 4, title: "INTERVIEW", subtitle: "INSTANCE TASK", image: "/images/ima4.jpg", locked: true },
  { id: 5, title: "ANALYSIS", subtitle: "INSTANCE TASK", image: "/images/ima5.jpg", locked: true },
  { id: 6, title: "TRAINING", subtitle: "INSTANCE TASK", image: "/images/ima2.jpg", locked: true },
  { id: 7, title: "SCOUTING", subtitle: "INSTANCE TASK", image: "/images/ima3.jpg", locked: true },
];

const institutions = ["INFOCADE", "CENACAP", "FUNDACION 1", "FUNDACION 2", "CLUB DE LEONES"];
---

<section class="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303] py-16 xl:py-0">

  <!-- Background -->
  <div class="absolute inset-0 z-0 overflow-hidden">
    <img src="/images/ima1.jpg" alt="" class="w-full h-full object-cover opacity-15 bg-pan pointer-events-none" />
    <div class="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303]"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-[#030303]"></div>
  </div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/8 blur-[160px] rounded-full pointer-events-none z-0"></div>

  <!-- ── MAIN GRID ── -->
  <div class="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-10 grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-8 xl:gap-12 items-center min-h-screen py-16 xl:py-20">

    <!-- ── LEFT SIDEBAR ── -->
    <div class="flex flex-col justify-between h-full xl:h-[520px] order-2 xl:order-1">

      <!-- Brand block -->
      <div class="pointer-events-none">
        <p class="text-yellow-500 text-[9px] tracking-[0.4em] uppercase font-bold mb-3 type-text opacity-0" data-text="// SISTEMA ACTIVO"></p>
        <h1 class="font-display text-white text-7xl md:text-8xl xl:text-[96px] leading-none tracking-tight uppercase type-text opacity-0" data-text="CBIT"></h1>
        <div class="h-[2px] w-0 bg-yellow-500 mt-4 mb-5 line-anim"></div>
        <p class="text-white/40 text-xs leading-relaxed max-w-[240px] type-text opacity-0"
          data-text="Accede a la base de datos principal. Analiza tácticas, entrevistas y metodología deportiva.">
        </p>
      </div>

      <!-- Instituciones block -->
      <div class="inst-block opacity-0 translate-y-4">
        <p class="text-white/25 text-[9px] tracking-[0.35em] uppercase font-bold mb-3">
          INSTITUCIONES <span class="text-yellow-500">AFILIADAS</span>
        </p>
        <div class="flex flex-col gap-1.5">
          {institutions.map(inst => (
            <button class="group flex items-center gap-3 text-left py-1.5 border-b border-white/8 hover:border-yellow-500/50 transition-colors duration-200 pointer-events-auto">
              <span class="w-1 h-1 rounded-full bg-white/20 group-hover:bg-yellow-500 transition-colors duration-200 flex-shrink-0"></span>
              <span class="text-[10px] font-bold tracking-[0.2em] text-white/30 group-hover:text-yellow-500 transition-colors duration-200 uppercase">{inst}</span>
            </button>
          ))}
        </div>
      </div>

    </div>

    <!-- ── RIGHT: ACCORDION + footer ── -->
    <div class="flex flex-col gap-5 order-1 xl:order-2">

      <!-- Accordion -->
      <div
        class="accordion-wrap flex gap-2 w-full overflow-x-auto xl:overflow-x-visible"
        style="height: 460px; scrollbar-width: none;"
      >
        {slides.map((slide, index) => (
          <div
            class="acc-card relative flex-shrink-0 overflow-hidden cursor-pointer border border-white/8 transition-[border-color] duration-500"
            data-index={index}
            style={`clip-path: polygon(5% 0,100% 0,100% 95%,95% 100%,0 100%,0 5%); min-width: 52px; flex: ${index === 0 ? '4' : '1'}; transition: flex .55s cubic-bezier(.77,0,.18,1), border-color .4s;`}
          >
            <img
              src={slide.image} alt={slide.title}
              class="absolute inset-0 w-full h-full object-cover pointer-events-none acc-img"
              style="opacity:.15; filter: grayscale(90%); transition: opacity .5s, filter .5s;"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/50"></div>

            <!-- Vertical title (collapsed) -->
            <div class="acc-vtitle absolute inset-0 flex items-center justify-center" style="opacity:1; transition: opacity .25s;">
              <span class="font-display text-white/25 text-[10px] tracking-[0.25em] uppercase whitespace-nowrap select-none"
                style="writing-mode:vertical-rl; text-orientation:mixed; transform:rotate(180deg);">
                {slide.title}
              </span>
            </div>

            <!-- Expanded content -->
            <div class="acc-content absolute inset-0 flex flex-col justify-between p-5 xl:p-6" style="opacity:0; transition: opacity .35s .1s; pointer-events:none;">

              <div>
                <div class="h-[2px] bg-yellow-500 mb-3 acc-bar" style="width:24px; transition: width .4s .2s;"></div>
                <span class="text-yellow-500/80 text-[9px] font-bold tracking-[0.3em] uppercase">{slide.subtitle}</span>
                <h2 class="font-display text-white text-2xl xl:text-3xl mt-2 tracking-wide uppercase leading-none">{slide.title}</h2>
              </div>

              <div class="flex items-center gap-4">
                <div class="acc-icon w-12 h-12 rounded-full border border-white/15 flex items-center justify-center bg-black/60" style="transition: border-color .3s, background .3s;">
                  {slide.locked ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/25"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-400"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>
                  )}
                </div>
                {slide.locked && <span class="text-white/20 text-[9px] tracking-[0.2em] uppercase font-bold">BLOQUEADO</span>}
              </div>

              <div class="flex flex-col gap-3">
                <button class={`self-start px-5 py-2 font-bold tracking-widest text-[9px] transition-colors duration-200 ${slide.locked ? 'border border-white/20 text-white/30 cursor-not-allowed' : 'bg-yellow-500 text-black hover:bg-yellow-400 border border-yellow-500'}`}>
                  {slide.locked ? 'LOCKED' : 'ENTER'}
                </button>
                <div class="flex gap-1">
                  <div class="w-2 h-[2px] bg-yellow-500/60"></div>
                  <div class="w-6 h-[2px] bg-yellow-500"></div>
                  <div class="w-2 h-[2px] bg-yellow-500/60"></div>
                </div>
              </div>
            </div>

            <!-- Corner decor -->
            <div class="absolute top-0 left-0 w-4 h-[1px] acc-corner bg-white/15" style="transition:background .3s;"></div>
            <div class="absolute top-0 left-0 w-[1px] h-4 acc-corner bg-white/15" style="transition:background .3s;"></div>
            <div class="absolute bottom-0 right-0 w-4 h-[1px] acc-corner bg-white/15" style="transition:background .3s;"></div>
            <div class="absolute bottom-0 right-0 w-[1px] h-4 acc-corner bg-white/15" style="transition:background .3s;"></div>
          </div>
        ))}
      </div>

      <!-- Footer row debajo del accordion -->
      <div class="flex items-center justify-between gap-4 acc-footer opacity-0 translate-y-2">
        <!-- Dots navigator -->
        <div class="flex gap-1.5 acc-dots">
          {slides.map((_, i) => (
            <button
              data-dot={i}
              class="h-[3px] rounded-full bg-white/20 transition-all duration-400"
              style={`width: ${i === 0 ? '24px' : '8px'};`}
            />
          ))}
        </div>

        <!-- Hint -->
        <p class="text-white/20 text-[9px] tracking-[0.2em] uppercase hidden md:block">
          CLICK · SWIPE PARA NAVEGAR
        </p>

        <!-- Counter -->
        <p class="text-white/30 text-[10px] font-mono">
          <span class="acc-counter text-yellow-500">01</span>
          <span class="text-white/15"> / {String(slides.length).padStart(2, '0')}</span>
        </p>
      </div>

    </div>
  </div>
</section>

<style>
  .bg-pan { animation: panImage 30s linear infinite alternate; }
  @keyframes panImage {
    0%   { transform: scale(1.1) translate(0,0); }
    100% { transform: scale(1.15) translate(-2%,2%); }
  }
  .cursor {
    display: inline-block; width: 7px; height: 1em;
    background: #eab308; vertical-align: middle;
    animation: blink 1s step-end infinite; margin-left: 3px;
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

  /* Ocultar scrollbar horizontal en móvil */
  .accordion-wrap::-webkit-scrollbar { display: none; }

  /* Estado abierto */
  .acc-card.is-open { border-color: rgba(234,179,8,.4) !important; }
  .acc-card.is-open .acc-img    { opacity: .75 !important; filter: grayscale(0%) !important; }
  .acc-card.is-open .acc-bar    { width: 48px !important; }
  .acc-card.is-open .acc-icon   { border-color: rgba(234,179,8,.6) !important; background: rgba(234,179,8,.12) !important; }
  .acc-card.is-open .acc-corner { background: #eab308 !important; }
  .acc-card.is-open .acc-vtitle { opacity: 0 !important; pointer-events: none; }
  .acc-card.is-open .acc-content { opacity: 1 !important; pointer-events: auto !important; }
</style>

<script>
  import gsap from 'gsap';

  document.addEventListener('DOMContentLoaded', () => {

    // ── TYPEWRITER ──────────────────────────────────────────────
    const typeElements = document.querySelectorAll<Element>('.type-text');

    const typeWriter = (el: Element, speed: number): Promise<void> =>
      new Promise(resolve => {
        const text = el.getAttribute('data-text') || '';
        while (el.firstChild) el.removeChild(el.firstChild);
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        el.appendChild(cursor);
        let i = 0;
        const tick = () => {
          if (i < text.length) {
            el.insertBefore(document.createTextNode(text[i++]), cursor);
            setTimeout(tick, speed);
          } else {
            cursor.remove();
            resolve();
          }
        };
        tick();
      });

    const startTypingSequence = async () => {
      // Mostrar elementos antes de escribir
      typeElements.forEach(el => {
        (el as HTMLElement).style.opacity = '1';
      });

      if (typeElements.length >= 1) await typeWriter(typeElements[0], 35);
      if (typeElements.length >= 2) await typeWriter(typeElements[1], 65);

      gsap.to('.line-anim', { width: 64, duration: 0.7, ease: 'power3.out' });
      await new Promise(r => setTimeout(r, 150));

      if (typeElements.length >= 3) await typeWriter(typeElements[2], 16);

      // Animar instituciones
      gsap.to('.inst-block', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });

      // Footer del accordion
      gsap.to('.acc-footer', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' });
    };

    startTypingSequence();

    // ── ACCORDION ───────────────────────────────────────────────
    const accCards = Array.from(document.querySelectorAll<HTMLElement>('.acc-card'));
    const dots     = Array.from(document.querySelectorAll<HTMLElement>('.acc-dots button'));
    const counter  = document.querySelector<HTMLElement>('.acc-counter');
    let openIndex  = 0;

    const openCard = (idx: number, animate = true) => {
      openIndex = idx;

      accCards.forEach((card, i) => {
        const isOpen = i === idx;
        card.classList.toggle('is-open', isOpen);

        if (animate) {
          gsap.to(card, {
            flexGrow: isOpen ? 4 : 1,
            duration: 0.55,
            ease: 'power3.inOut',
          });
        } else {
          card.style.flexGrow = isOpen ? '4' : '1';
        }
      });

      // Actualizar dots
      dots.forEach((dot, i) => {
        gsap.to(dot, {
          width: i === idx ? 24 : 8,
          backgroundColor: i === idx ? '#eab308' : 'rgba(255,255,255,0.2)',
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      // Actualizar counter
      if (counter) counter.textContent = String(idx + 1).padStart(2, '0');
    };

    openCard(0, false);

    // Clicks en cartas
    accCards.forEach((card, i) => {
      card.addEventListener('click', () => openCard(i));

      // Hover en cerradas
      card.addEventListener('mouseenter', () => {
        if (i === openIndex) return;
        gsap.to(card, { scale: 1.015, duration: 0.2, ease: 'power2.out' });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    });

    // Clicks en dots
    dots.forEach((dot, i) => dot.addEventListener('click', () => openCard(i)));

    // Wheel sobre el accordion
    let wheelCooldown = false;
    document.querySelector('.accordion-wrap')?.addEventListener('wheel', (e: Event) => {
      const we = e as WheelEvent;
      we.preventDefault();
      if (wheelCooldown) return;
      wheelCooldown = true;
      setTimeout(() => { wheelCooldown = false; }, 550);
      const next = (openIndex + (we.deltaY > 0 ? 1 : -1) + accCards.length) % accCards.length;
      openCard(next);
    }, { passive: false });

    // Swipe táctil
    let tx = 0;
    document.querySelector('.accordion-wrap')?.addEventListener('touchstart', (e: Event) => {
      tx = (e as TouchEvent).touches[0].clientX;
    }, { passive: true });

    document.querySelector('.accordion-wrap')?.addEventListener('touchend', (e: Event) => {
      const dx = (e as TouchEvent).changedTouches[0].clientX - tx;
      if (Math.abs(dx) < 35) return;
      const next = (openIndex + (dx < 0 ? 1 : -1) + accCards.length) % accCards.length;
      openCard(next);
    }, { passive: true });

    // Teclado (←→)
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') openCard((openIndex + 1) % accCards.length);
      if (e.key === 'ArrowLeft')  openCard((openIndex - 1 + accCards.length) % accCards.length);
    });
  });
</script>