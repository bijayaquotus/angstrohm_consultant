import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function StartProject() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(cardRef.current, {
        opacity: 0,
        scale: 0.85,
        rotationX: 10,
        y: 60,
      });

      gsap.set([titleRef.current, textRef.current, buttonRef.current], {
        opacity: 0,
        y: 30,
      });

      // Main card entrance animation with 3D effect
      gsap.to(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          end: "top 40%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
        opacity: 1,
        scale: 1,
        rotationX: 0,
        y: 0,
        duration: 1.8,
        ease: "power3.out",
      });

      // Title animation with stagger
      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "back.out(1.7)",
          duration: 0.9,
        }
      });

      titleTl
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
        })
        .to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
        }, "-=0.4")
        .to(buttonRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "back.out(2)",
        }, "-=0.3");

      // Animated gradient border effect
      gsap.to(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        boxShadow: "0 35px 80px -15px rgba(200,38,79,0.3)",
        duration: 1,
        ease: "none",
      });

      // Particle effects (floating dots in background) - static, no animation
      const particles = document.querySelectorAll('.particle');
      particles.forEach((particle, i) => {
        // Just set initial opacity, no animation
        gsap.set(particle, {
          opacity: Math.random() * 0.15 + 0.05,
        });
      });

      // Button pulse effect on hover (enhanced)
      const button = buttonRef.current;
      if (button) {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            boxShadow: "0 20px 40px -6px rgba(200,38,79,0.5)",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            boxShadow: "none",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f4f1ea] py-20 px-4 sm:px-6 overflow-hidden relative">
      {/* Background decorative particles - static */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-[#c8264f]"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c8264f]/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1000px] mx-auto relative z-10">
        <div
          ref={cardRef}
          className="bg-[#01012C] text-white p-12 md:p-16 text-center shadow-[0_25px_60px_-15px_rgba(1,1,44,0.4)] rounded-[2rem] relative overflow-hidden"
        >
          {/* Animated border glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#c8264f] via-transparent to-[#c8264f] rounded-[2rem] opacity-20 blur-sm" />

          {/* Content */}
          <div className="relative z-10">
            <h2 ref={titleRef} className="font-display text-3xl md:text-5xl mb-6 tracking-tight">
              Start a Project
            </h2>

            <p ref={textRef} className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-8 font-light">
              Get the ball rolling by reaching out to us, and we'll set up a complimentary meeting to dive deep into your needs. No strings attached, just a friendly chat to ensure we're on the same wavelength!
            </p>

            <Link
              ref={buttonRef}
              to="/contact"
              className="inline-flex items-center bg-[#c8264f] hover:bg-[#b01e42] text-white text-xs font-extrabold tracking-widest py-4 px-8 rounded-full uppercase transition-colors duration-200 relative"
            >
              Schedule a Free Consultation
              <span className="absolute -inset-1 rounded-full bg-[#c8264f]/20 blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}