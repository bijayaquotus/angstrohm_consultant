import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function IntroSplit({ eyebrow, heading, paragraphs = [], ctaText, ctaHref = '#', image }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphsRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(imageRef.current, {
        opacity: 0,
        x: -80,
        rotation: -8,
        scale: 0.85,
      });

      gsap.set(eyebrowRef.current, {
        opacity: 0,
        y: -20,
      });

      gsap.set(headingRef.current, {
        opacity: 0,
        y: 40,
        rotationX: -10,
        scale: 0.95,
      });

      gsap.set(paragraphsRef.current, {
        opacity: 0,
        x: 30,
      });

      gsap.set(ctaRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.9,
      });

      // Image animation with dramatic entrance
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 40%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
        opacity: 1,
        x: 0,
        rotation: 0,
        scale: 1,
        duration: 1.8,
        ease: "back.out(2.5)",
      });

      // Eyebrow animation
      gsap.to(eyebrowRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Heading animation with 3D effect
      gsap.to(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 45%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
        opacity: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      });

      // Paragraphs stagger animation
      paragraphsRef.current.forEach((p, index) => {
        gsap.to(p, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power2.out",
        });
      });

      // CTA button animation
      gsap.to(ctaRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 40%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "back.out(1.7)",
        delay: 0.2,
      });

      // Image hover animation (enhanced)
      const imageEl = imageRef.current;
      if (imageEl) {
        imageEl.addEventListener('mouseenter', () => {
          gsap.to(imageEl, {
            scale: 1.05,
            rotation: 2,
            boxShadow: "0 20px 60px -10px rgba(200,56,90,0.3)",
            duration: 0.5,
            ease: "power2.out",
          });
        });

        imageEl.addEventListener('mouseleave', () => {
          gsap.to(imageEl, {
            scale: 1,
            rotation: 0,
            boxShadow: "none",
            duration: 0.5,
            ease: "power2.out",
          });
        });
      }

      // CTA button hover animation
      const cta = ctaRef.current;
      if (cta) {
        cta.addEventListener('mouseenter', () => {
          gsap.to(cta, {
            scale: 1.05,
            boxShadow: "0 15px 40px -8px rgba(200,56,90,0.4)",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        cta.addEventListener('mouseleave', () => {
          gsap.to(cta, {
            scale: 1,
            boxShadow: "none",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }

      // Section background parallax
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        backgroundColor: "#efe8dd",
        duration: 1,
        ease: "none",
      });

      // Floating decorative elements
      const decorations = document.querySelectorAll('.deco-dot');
      decorations.forEach((dot, i) => {
        gsap.to(dot, {
          y: -15 - Math.random() * 20,
          x: Math.random() * 20 - 10,
          opacity: Math.random() * 0.3 + 0.1,
          duration: 3 + Math.random() * 4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.3,
        });
      });

      // Animated underline effect for heading
      gsap.to('.heading-underline', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
        width: "100%",
        duration: 1.2,
        ease: "power3.out",
      });

      // Subtle pulse on the image (only when visible)
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
        boxShadow: "0 10px 40px -5px rgba(200,56,90,0.15)",
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F4F1EA] py-16 md:py-20 px-6 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#c8385a]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#c8385a]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#c8385a]/3 blur-3xl" />
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="deco-dot absolute rounded-full bg-[#c8385a]"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.1 + 0.05,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center relative z-10">

        {/* Image / illustration column */}
        <div className="md:col-span-5 flex justify-center">
          <img 
            ref={imageRef}
            src="/services/expansion-growth.png" 
            alt={heading} 
            className="w-full max-w-sm rounded-sm transition-all duration-300"
          />
        </div>

        {/* Text column */}
        <div className="md:col-span-7">
          {eyebrow && (
            <p ref={eyebrowRef} className="text-[#c8385a] text-xs font-bold tracking-[0.15em] uppercase mb-3">
              {eyebrow}
            </p>
          )}
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6 relative">
            {heading}
            <span className="heading-underline absolute bottom-0 left-0 h-1 bg-[#c8385a] w-0 rounded-full" style={{ bottom: '-8px' }} />
          </h2>
          <div className="space-y-4 text-slate-600 text-[16px] leading-relaxed">
            {paragraphs.map((p, i) => (
              <p 
                key={i} 
                ref={el => paragraphsRef.current[i] = el}
                className="opacity-0"
              >
                {p}
              </p>
            ))}
          </div>
          {ctaText && (
            <Link
              ref={ctaRef}
              to="/contact"
              className="inline-block mt-8 bg-[#c8385a] hover:bg-[#a82d4a] text-white text-xs font-bold tracking-wider py-4 px-7 uppercase transition-colors relative overflow-hidden group"
            >
              <span className="relative z-10">{ctaText}</span>
              {/* Hover ripple effect */}
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <span className="absolute -inset-full top-0 block w-1/2 h-full bg-white/20 skew-x-12 group-hover:left-full transition-all duration-500" />
            </Link>
          )}
        </div>

      </div>
    </section>
  );
}