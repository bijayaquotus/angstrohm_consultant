import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function IconFeatureGrid({ title, items = [] }) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const iconsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(titleRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.95,
      });

      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.85,
        rotationX: 5,
      });

      gsap.set(iconsRef.current, {
        opacity: 0,
        scale: 0.3,
        rotation: -15,
      });

      // Title animation with 3D effect
      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 40%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      });

      // Cards stagger animation with 3D perspective
      cardsRef.current.forEach((card, index) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 0.9,
          delay: index * 0.12,
          ease: "back.out(1.7)",
        });
      });

      // Icons animation with bounce
      iconsRef.current.forEach((icon, index) => {
        gsap.to(icon, {
          scrollTrigger: {
            trigger: cardsRef.current[index],
            start: "top 85%",
            end: "top 55%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          delay: index * 0.12 + 0.2,
          ease: "back.out(2.5)",
        });
      });

      // Continuous floating animation for icons (subtle)
      iconsRef.current.forEach((icon, i) => {
        gsap.to(icon, {
          y: -5,
          duration: 2 + i * 0.3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.2,
        });
      });

      // Card hover animations (enhanced with GSAP)
      cardsRef.current.forEach((card) => {
        const iconWrapper = card.querySelector('.icon-wrapper');
        const titleEl = card.querySelector('.card-title');
        const descEl = card.querySelector('.card-desc');
        
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            y: -10,
            boxShadow: "0 25px 50px -12px rgba(91, 120, 224, 0.3)",
            borderColor: "rgba(91, 120, 224, 0.8)",
            duration: 0.4,
            ease: "power2.out",
          });
          
          if (iconWrapper) {
            gsap.to(iconWrapper, {
              scale: 1.15,
              rotation: 10,
              backgroundColor: "#1a1a4a",
              borderColor: "#5fb8e0",
              duration: 0.4,
              ease: "back.out(2)",
            });
          }
          
          if (titleEl) {
            gsap.to(titleEl, {
              color: "#e84a6e",
              x: 5,
              duration: 0.3,
              ease: "power2.out",
            });
          }
          
          if (descEl) {
            gsap.to(descEl, {
              color: "#e2e8f0",
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            boxShadow: "none",
            borderColor: "rgba(59, 74, 143, 0.4)",
            duration: 0.4,
            ease: "power2.out",
          });
          
          if (iconWrapper) {
            gsap.to(iconWrapper, {
              scale: 1,
              rotation: 0,
              backgroundColor: "#161544",
              borderColor: "rgba(59, 74, 143, 0.6)",
              duration: 0.4,
              ease: "power2.out",
            });
          }
          
          if (titleEl) {
            gsap.to(titleEl, {
              color: "#c8385a",
              x: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
          
          if (descEl) {
            gsap.to(descEl, {
              color: "#cbd5e1",
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });
      });

      // Background parallax effect
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        backgroundColor: "#0a0925",
        duration: 1,
        ease: "none",
      });

      // Decorative particles
      const particles = document.querySelectorAll('.feature-particle');
      particles.forEach((particle, i) => {
        gsap.to(particle, {
          y: -30 - Math.random() * 40,
          x: Math.random() * 30 - 15,
          opacity: Math.random() * 0.3 + 0.1,
          duration: 5 + Math.random() * 6,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.4,
        });
      });

      // Animated glow effect on cards
      cardsRef.current.forEach((card, i) => {
        const glow = card.querySelector('.card-glow');
        if (glow) {
          gsap.to(glow, {
            opacity: 0.6,
            duration: 3 + i * 0.3,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: i * 0.2,
          });
        }
      });

      // Subtle shimmer effect on icons
      iconsRef.current.forEach((icon, i) => {
        gsap.to(icon, {
          boxShadow: "0 0 20px rgba(91, 184, 224, 0.2)",
          duration: 2 + i * 0.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.3,
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0c0b2e] py-16 md:py-20 px-6 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#5fb8e0]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#c8385a]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#3b4a8f]/5 blur-3xl" />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="feature-particle absolute rounded-full bg-[#5fb8e0]"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.15 + 0.05,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        {title && (
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-14"
          >
            {title}
          </h2>
        )}

        {/* Grid container */}
        <div className="flex flex-wrap justify-center gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i} 
                ref={el => cardsRef.current[i] = el}
                className="w-full sm:w-[320px] lg:w-[360px] bg-[#161544]/60 border border-[#3b4a8f]/40 p-6 md:p-8 rounded-xl shadow-lg transition-all duration-300 flex flex-col items-start relative cursor-pointer group"
              >
                {/* Card glow effect */}
                <div className="card-glow absolute -inset-0.5 bg-gradient-to-r from-[#5fb8e0]/20 via-[#c8385a]/20 to-[#5fb8e0]/20 rounded-xl opacity-0 blur-xl" />

                {/* Icon Box */}
                <div 
                  ref={el => iconsRef.current[i] = el}
                  className="icon-wrapper w-14 h-14 rounded-lg border border-[#3b4a8f]/60 bg-[#161544] flex items-center justify-center mb-5 shrink-0 relative transition-all duration-300"
                >
                  {/* Icon background glow */}
                  <div className="absolute inset-0 rounded-lg bg-[#5fb8e0]/10 blur-sm" />
                  {Icon && <Icon className="w-7 h-7 text-[#5fb8e0] relative z-10" strokeWidth={1.5} />}
                </div>

                {/* Card Title */}
                <h3 className="card-title text-[#c8385a] font-bold text-sm tracking-wide uppercase mb-3 relative z-10 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="card-desc text-slate-300 text-sm leading-relaxed relative z-10 transition-colors duration-300">
                  {item.description}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-10">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-[#5fb8e0] to-transparent rotate-45 transform origin-top-right" />
                </div>

                {/* Bottom decorative line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#5fb8e0] to-[#c8385a] group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}