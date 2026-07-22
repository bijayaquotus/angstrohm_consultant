import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function AboutStory() {
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroBadgeRef = useRef(null);
  const storySectionRef = useRef(null);
  const storyCardRef = useRef(null);
  const storyTextRef = useRef([]);
  const ctaCardRef = useRef(null);
  const ctaTitleRef = useRef(null);
  const ctaTextRef = useRef(null);
  const ctaButtonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ========== HERO SECTION ANIMATIONS ==========
      gsap.set(heroBadgeRef.current, {
        opacity: 0,
        y: -20,
      });

      gsap.set(heroTitleRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.9,
        rotationX: -10,
      });

      // Hero badge animation
      gsap.to(heroBadgeRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 90%",
          end: "top 40%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Hero title animation with 3D effect
      gsap.to(heroTitleRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 85%",
          end: "top 40%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
      });

      // Hero background parallax
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        backgroundPosition: "50% 30%",
        duration: 1,
        ease: "none",
      });

      // ========== STORY SECTION ANIMATIONS ==========
      // Set initial states for story card
      gsap.set(storyCardRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.92,
      });

      // Story card entrance
      gsap.to(storyCardRef.current, {
        scrollTrigger: {
          trigger: storySectionRef.current,
          start: "top 85%",
          end: "top 40%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
      });

      // Story text paragraphs stagger
      storyTextRef.current.forEach((p, index) => {
        gsap.set(p, {
          opacity: 0,
          x: -20,
        });

        gsap.to(p, {
          scrollTrigger: {
            trigger: storySectionRef.current,
            start: "top 80%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.15 + 0.2,
          ease: "power2.out",
        });
      });

      // ========== CTA CARD ANIMATIONS ==========
      gsap.set(ctaCardRef.current, {
        opacity: 0,
        x: 60,
        rotationY: 10,
        scale: 0.9,
      });

      gsap.set([ctaTitleRef.current, ctaTextRef.current, ctaButtonRef.current], {
        opacity: 0,
        y: 30,
      });

      // CTA card entrance with 3D effect
      gsap.to(ctaCardRef.current, {
        scrollTrigger: {
          trigger: storySectionRef.current,
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
        opacity: 1,
        x: 0,
        rotationY: 0,
        scale: 1,
        duration: 1.8,
        ease: "back.out(2.5)",
      });

      // CTA content stagger
      const ctaTl = gsap.timeline({
        scrollTrigger: {
          trigger: storySectionRef.current,
          start: "top 75%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "back.out(1.7)",
          duration: 0.9,
        }
      });

      ctaTl
        .to(ctaTitleRef.current, {
          opacity: 1,
          y: 0,
        })
        .to(ctaTextRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
        }, "-=0.4")
        .to(ctaButtonRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "back.out(2)",
        }, "-=0.3");

      // ========== INTERACTIVE EFFECTS ==========
      // Story card hover effect
      const storyCard = storyCardRef.current;
      if (storyCard) {
        storyCard.addEventListener('mouseenter', () => {
          gsap.to(storyCard, {
            boxShadow: "0 40px 80px -20px rgba(200,38,79,0.3)",
            scale: 1.01,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        storyCard.addEventListener('mouseleave', () => {
          gsap.to(storyCard, {
            boxShadow: "0 30px 70px -20px rgba(0,0,0,0.5)",
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      }

      // CTA card hover effect
      const ctaCard = ctaCardRef.current;
      if (ctaCard) {
        ctaCard.addEventListener('mouseenter', () => {
          gsap.to(ctaCard, {
            scale: 1.02,
            boxShadow: "0 40px 80px -20px rgba(200,38,79,0.4)",
            duration: 0.4,
            ease: "power2.out",
          });
        });

        ctaCard.addEventListener('mouseleave', () => {
          gsap.to(ctaCard, {
            scale: 1,
            boxShadow: "none",
            duration: 0.4,
            ease: "power2.out",
          });
        });
      }

      // CTA button hover animation
      const ctaButton = ctaButtonRef.current;
      if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
          gsap.to(ctaButton, {
            scale: 1.05,
            boxShadow: "0 20px 40px -8px rgba(200,38,79,0.4)",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        ctaButton.addEventListener('mouseleave', () => {
          gsap.to(ctaButton, {
            scale: 1,
            boxShadow: "none",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }

      // ========== DECORATIVE EFFECTS ==========
      // Floating particles
      const particles = document.querySelectorAll('.about-particle');
      particles.forEach((particle, i) => {
        gsap.to(particle, {
          y: -20 - Math.random() * 30,
          x: Math.random() * 20 - 10,
          opacity: Math.random() * 0.3 + 0.1,
          duration: 4 + Math.random() * 5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.3,
        });
      });

      // Section background parallax for story section
      gsap.to(storySectionRef.current, {
        scrollTrigger: {
          trigger: storySectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        backgroundPosition: "50% 40%",
        duration: 1,
        ease: "none",
      });

    }, [heroRef, storySectionRef]);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ========== PAGE HERO ========== */}
      <section 
        ref={heroRef}
        className="group relative bg-[#01012C] text-white py-28 px-4 sm:px-6 text-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-[1400ms] ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          style={{
            backgroundImage: `url('/aboutus/ai-002-1.jpg')`
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#01012C]/40 via-[#01012C]/70 to-[#01012C] transition-opacity duration-700 group-hover:opacity-80" />

        {/* Decorative particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="about-particle absolute rounded-full bg-[#c8264f]"
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

        {/* Content */}
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div 
            ref={heroBadgeRef}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8264f]" />
            <span className="text-[#c8264f] text-xs italic font-semibold tracking-[0.15em] uppercase">
              Who we are
            </span>
          </div>
          <h1 
            ref={heroTitleRef}
            className="font-display text-5xl md:text-6xl tracking-tight"
          >
            About Us
          </h1>
        </div>
      </section>

      {/* ========== STORY & SURVIVE OR THRIVE SECTION ========== */}
      <section 
        ref={storySectionRef}
        className="group relative bg-[#01012C] text-white pt-20 pb-28 px-4 sm:px-6 overflow-hidden"
      >
        {/* Background neon wavy line visual */}
        <div className="absolute inset-0 bg-[url('/aboutus/ai-001.jpg')] bg-cover bg-center opacity-25 pointer-events-none transition-transform duration-[1400ms] ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100" />

        {/* Decorative particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="about-particle absolute rounded-full bg-[#c8264f]"
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.1 + 0.05,
              }}
            />
          ))}
        </div>

        {/* Overlapping Content Split Block Container */}
        <div className="max-w-[1100px] mx-auto relative z-20">
          <div 
            ref={storyCardRef}
            className="grid grid-cols-1 lg:grid-cols-12 rounded-[2rem] overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)]"
          >
            {/* Left Block: White Story Container */}
            <div className="bg-white text-slate-600 p-8 md:p-12 lg:col-span-7 relative z-10">
              <span className="text-[#c8264f] text-xs tracking-widest font-bold block mb-5">ÅΩ</span>
              <div className="space-y-4 text-[16px] leading-relaxed">
                {[
                  "Angstrohm, oh boy, let's break it down for you! Angstrohm, without the 'h,' is a teeny-tiny unit of measurement, smaller than small, equal to 10 to the power minus 10 meters. We're talking one ten-billionth of a meter here! It's named after the incredible Swedish scientist, Anders Ångström. This little fellow is used to measure the tiniest of things, the stuff that's almost impossible to see with the naked eye.",
                  "Now, let's talk about Ohm. No, we're not talking about meditation and zen vibes (although those are pretty cool too). Ohm is a measurement of electrical resistance, named after the genius physicist himself, Georg Ohm. It's all about that resistance, baby!",
                  "So, why did we choose the name Angstrohm? Well, life has taught us that making progress and achieving greatness often involves traversing those small paths, making those small changes. And guess what? They're usually paved with resistance! We wanted to pay homage to this incredible process by combining the names Angstrom and Ohm. It's a symbol of our dedication to overcoming challenges, embracing the resistance, and pushing forward to achieve remarkable progress. So, join us on this electrifying journey as we conquer the small and mighty with Angstrohm!"
                ].map((text, index) => (
                  <p 
                    key={index} 
                    ref={el => storyTextRef.current[index] = el}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>

            {/* Right Block: Crimson Call To Action Card Box */}
            <div 
              ref={ctaCardRef}
              className="bg-[#c8264f] text-white p-10 md:p-14 lg:col-span-5 flex flex-col justify-center items-center text-center relative z-20"
            >
              <h3 
                ref={ctaTitleRef}
                className="font-display text-3xl md:text-4xl tracking-tight mb-4 leading-tight"
              >
                Survive or Thrive?
              </h3>
              <p 
                ref={ctaTextRef}
                className="text-white/90 text-[16px] leading-relaxed mb-8 max-w-sm"
              >
                Do you want to settle for mere survival when you can unleash your inner champion and take your company to great heights?
              </p>
              <Link
                ref={ctaButtonRef}
                to="/contact"
                className="bg-[#01012C] hover:bg-[#151347] text-white text-[11px] font-black tracking-widest py-4 px-8 rounded-full uppercase transition-colors duration-200 inline-block"
              >
                I Choose To Thrive! Show Me How...
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}