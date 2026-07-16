import React, { useEffect, useRef, useState } from 'react';

const AUTOPLAY_MS = 3200;

export default function ClientsHero() {
  const clientLogos = [
    { name: "Happy Bar", img: "/client/Client-HB.png" },
    { name: "doctorDB", img: "/client/Client-doctorDB.png" },
    { name: "AEGLE PHARMA", img: "/client/Client-Aegle.png" },
    { name: "Christine Kreplins", img: "/client/Client-CK.png" },
    { name: "ÅNGSTROHM FOODS", img: "/client/Client-AngstrohmFoods.png" },
    { name: "GO POWER NUTRITION", img: "/client/Client-GPN.png" },
    { name: "Luna Lab", img: "/client/Client-LunaLab.png" },
    { name: "BALINATU", img: "/client/Client-balinatu.png" },
    { name: "S Logo", img: "/client/Client-SmitheCapital.png" },
    { name: "Sweet Ink", img: "/client/Client-SweetInk.png" },
    { name: "MAVERIC", img: "/client/Client-Maveric.png" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderInView, setSliderInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [bgScale, setBgScale] = useState(1);
  const [bgBlur, setBgBlur] = useState(0);
  const sliderRef = useRef(null);
  const heroRef = useRef(null);
  const rafRef = useRef(null);

  const visibleItems = 5;
  const maxIndex = clientLogos.length - visibleItems;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSliderInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Autoplay — pauses on hover/focus and respects reduced-motion
  useEffect(() => {
    if (reduceMotion || isPaused || !sliderInView) return;
    const id = setInterval(handleNext, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [isPaused, sliderInView, maxIndex, reduceMotion]);

  // Enhanced mouse-parallax with background hover effects
  const handleHeroMouseMove = (e) => {
    if (reduceMotion) return;
    if (rafRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    rafRef.current = requestAnimationFrame(() => {
      setParallax({ x, y });
      // Background zoom effect based on mouse position
      setBgScale(1 + (Math.abs(x) + Math.abs(y)) * 0.15);
      // Background blur effect based on mouse distance from center
      const distFromCenter = Math.sqrt(x * x + y * y);
      setBgBlur(distFromCenter * 2);
      rafRef.current = null;
    });
  };

  const handleHeroMouseLeave = () => {
    if (reduceMotion) return;
    setBgScale(1);
    setBgBlur(0);
  };

  // Per-pixel 3D tilt on logo hover — direct DOM write, no re-render
  const handleTiltMove = (e) => {
    if (reduceMotion) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(600px) rotateX(${py * -14}deg) rotateY(${px * 14}deg) scale(1.1)`;
  };
  const handleTiltLeave = (e) => {
    e.currentTarget.style.transform = '';
  };

  const words = "Our Delighted Clients".split(' ');

  return (
    <section className="w-full bg-white select-none">
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .ch-hero-bg {
            transition: transform 0.2s ease-out, filter 0.2s ease-out;
          }
          .ch-hero-bg.drift {
            animation: ch-bg-drift 18s ease-in-out infinite;
          }
          @keyframes ch-bg-drift {
            0%, 100% { transform: scale(1.05) translate(0, 0); }
            50% { transform: scale(1.15) translate(-1.5%, -1%); }
          }

          .ch-orb { transition: transform 0.4s ease-out; }

          .ch-word {
            display: inline-block;
            opacity: 0;
            transform: translateY(0.5em);
            filter: blur(6px);
            transition: opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1), filter 0.7s cubic-bezier(.16,1,.3,1);
          }
          .ch-word.in { opacity: 1; transform: translateY(0); filter: blur(0); }

          .ch-underline {
            transform: scaleX(0);
            transform-origin: center;
            transition: transform 0.7s cubic-bezier(.16,1,.3,1) 0.5s;
          }
          .ch-underline.in { transform: scaleX(1); }

          .ch-slider {
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 0.7s ease-out, transform 0.7s ease-out;
          }
          .ch-slider.in { opacity: 1; transform: translateY(0); }

          .ch-logo-wrap {
            opacity: 0;
            transform: translateY(14px) scale(0.9);
            transition: opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.35s ease;
          }
          .ch-slider.in .ch-logo-wrap { opacity: 1; transform: translateY(0) scale(1); }
          .ch-logo-wrap:hover { box-shadow: 0 18px 30px -14px rgba(200,38,79,0.35); border-radius: 12px; }
          .ch-logo-wrap > img { transition: filter 0.35s ease, transform 0.2s ease-out; transform-style: preserve-3d; }

          .ch-logo-img { filter: grayscale(100%) opacity(0.65); }
          .ch-logo-wrap:hover .ch-logo-img { filter: grayscale(0%) opacity(1); }

          .ch-arrow {
            position: relative;
            overflow: hidden;
            isolation: isolate;
            transition: color 0.3s ease, transform 0.25s ease;
          }
          .ch-arrow::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 9999px;
            background: #c8264f;
            transform: scale(0);
            transition: transform 0.35s cubic-bezier(.16,1,.3,1);
            z-index: -1;
          }
          .ch-arrow:hover::before { transform: scale(1); }
          .ch-arrow:hover { color: #fff; transform: scale(1.12); }
          .ch-arrow:active { transform: scale(0.94); }

          .ch-dot {
            position: relative;
            overflow: hidden;
            transition: width 0.35s ease, background-color 0.3s ease, transform 0.3s ease;
          }
          .ch-dot:hover { transform: scale(1.3); }
          .ch-dot-fill {
            position: absolute;
            inset: 0;
            background: #ffffff;
            opacity: 0.55;
            transform-origin: left;
            transform: scaleX(0);
            animation: ch-fill linear forwards;
          }
          @keyframes ch-fill {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
        }
      `}</style>

      {/* ========== HERO HEADER ========== */}
      <section
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative bg-[#01012C] text-white py-28 px-4 sm:px-6 text-center overflow-hidden"
      >
        {/* Background image with hover effects */}
        <div
          className={`ch-hero-bg ${!reduceMotion ? 'drift' : ''} absolute inset-0 bg-cover bg-center opacity-200`}
          style={{
            backgroundImage: `url('/aboutus/ai-002-1.jpg')`,
            transform: `scale(${bgScale})`,
            filter: `blur(${bgBlur}px)`,
            transition: 'transform 0.15s ease-out, filter 0.15s ease-out',
          }}
        />
        
        {/* Additional overlay that darkens on hover for depth */}
        <div 
          className="absolute inset-0 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${50 + parallax.x * 20}% ${50 + parallax.y * 20}%, 
                        rgba(200,38,79,0.15) 0%, 
                        rgba(1,1,44,0.85) 100%)`,
          }}
        />
        
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#01012C]/40 via-[#01012C]/70 to-[#01012C]" />

        {/* Floating glow orbs, drifting + mouse-reactive */}
        <div
          className="ch-orb absolute w-72 h-72 rounded-full bg-[#c8264f] opacity-30 blur-3xl pointer-events-none"
          style={{ top: '10%', left: '15%', transform: `translate(${parallax.x * 30}px, ${parallax.y * 30}px)` }}
        />
        <div
          className="ch-orb absolute w-72 h-72 rounded-full bg-[#4a1130] opacity-40 blur-3xl pointer-events-none"
          style={{ bottom: '5%', right: '12%', transform: `translate(${parallax.x * -24}px, ${parallax.y * -24}px)` }}
        />

        <div className="max-w-[1280px] mx-auto relative z-10">
          <h1 className="font-display text-5xl md:text-6xl tracking-tight">
            {words.map((word, i) => (
              <span
                key={word}
                className={`ch-word ${loaded ? 'in' : ''} mr-3`}
                style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
              >
                {word}
              </span>
            ))}
          </h1>
          <div
            className={`ch-underline ${loaded ? 'in' : ''} h-[3px] w-32 mx-auto mt-6 rounded-full`}
            style={{ background: 'linear-gradient(90deg, transparent, #c8264f, transparent)' }}
          />
        </div>
      </section>

      {/* ========== EXACT SLIDER WORKING AREA ========== */}
      <div
        ref={sliderRef}
        className={`ch-slider ${sliderInView ? 'in' : ''} max-w-[1340px] mx-auto px-4 py-20 relative flex items-center`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* Left Nav Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous clients"
          className="ch-arrow text-gray-400 text-4xl p-2 rounded-full z-20"
        >
          &#10216;
        </button>

        {/* Hidden Overflow Viewport */}
        <div className="w-full overflow-hidden mx-4" style={{ perspective: '1000px' }}>
          <div
            className="flex items-center transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`
            }}
          >
            {clientLogos.map((logo, idx) => (
              <div
                key={idx}
                className="ch-logo-wrap w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 shrink-0 flex items-center justify-center p-6 h-full"
                style={{ flex: `0 0 ${100 / visibleItems}%`, transitionDelay: `${(idx % visibleItems) * 0.08}s` }}
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltLeave}
              >
                <img
                  src={logo.img}
                  alt={logo.name}
                  className="ch-logo-img max-h-full max-w-full object-contain pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Nav Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next clients"
          className="ch-arrow text-gray-400 text-4xl p-2 rounded-full z-20"
        >
          &#10217;
        </button>
      </div>

      {/* ========== DOT INDICATORS ========== */}
      <div className="flex justify-center items-center gap-2 pb-16">
        {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => {
          const isActive = currentIndex === dotIdx;
          return (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`ch-dot h-2 rounded-full ${isActive ? 'w-7 bg-[#c8264f]' : 'w-2 bg-gray-200'}`}
            >
              {isActive && !isPaused && !reduceMotion && (
                <span
                  key={currentIndex}
                  className="ch-dot-fill"
                  style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}