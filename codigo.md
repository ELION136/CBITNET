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
