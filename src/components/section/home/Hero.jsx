import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const storyCardRef = useRef(null);
  const shuttleRef = useRef(null);
  const checklistItemsRef = useRef([]);

  const checklist = [
    "Good Advice. Period.",
    "Subject Matter Experts without the fancy suits",
    "Honest about what we can and can't do",
    "Simple Solutions",
    "No BS!",
  ];

  useEffect(() => {
    // Initial animation setup
    const elements = containerRef.current?.querySelectorAll('.h-rise');
    
    const ctx = gsap.context(() => {
      // Set initial states for all h-rise elements
      gsap.set(elements, {
        opacity: 0,
        y: 30,
      });

      // Main entrance animation timeline
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 1,
        }
      });

      // Animate each element with staggered delay
      tl.to(elements, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "back.out(1.7)",
      })
      // Add a subtle pulse to the CTA button after entrance
      .to('.cta-button', {
        scale: 1.05,
        duration: 0.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: 1,
      }, "-=0.2");

      // Story card scroll animation
      gsap.from(storyCardRef.current, {
        scrollTrigger: {
          trigger: storyCardRef.current,
          start: "top 85%",
          end: "top 40%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
        opacity: 0,
        y: 80,
        scale: 0.92,
        duration: 1.5,
        ease: "power3.out",
      });

      // Space shuttle - simple fade in only (no movement)
      const shuttle = shuttleRef.current;
      
      // Set initial state
      gsap.set(shuttle, {
        opacity: 0,
      });

      // Shuttle fade in animation on scroll
      gsap.to(shuttle, {
        scrollTrigger: {
          trigger: storyCardRef.current,
          start: "top 85%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });

      // Checklist items stagger animation
      checklistItemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: storyCardRef.current,
            start: "top 75%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          x: -30,
          duration: 0.6,
          delay: index * 0.12,
          ease: "power2.out",
        });
      });

      // Parallax effect on jumping woman
      const womanImage = containerRef.current?.querySelector('.woman-image');
      if (womanImage) {
        gsap.to(womanImage, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
          y: -40,
          ease: "none",
        });
      }

      // Background color transition
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        backgroundColor: "#f0ebe2",
        duration: 1,
        ease: "none",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#f4f1ea] text-[#01012C] overflow-hidden">
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .h-rise {
            opacity: 0;
            transform: translateY(14px);
            transition: opacity 0.6s cubic-bezier(.16,1,.3,1), transform 0.6s cubic-bezier(.16,1,.3,1);
          }
          .h-rise.in { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Decorative floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#c8264f]/5"
            style={{
              width: Math.random() * 80 + 20,
              height: Math.random() * 80 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out ${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Top banner: badge + headline + jump woman */}
      <div ref={containerRef} className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-14 pb-8 md:pt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="h-rise inline-flex items-center gap-2 bg-white rounded-full pl-1.5 pr-4 py-1.5 mb-6 shadow-[0_2px_10px_rgba(1,1,44,0.06)]">
              <span className="bg-[#c8264f] text-white text-[9px] font-bold tracking-wider uppercase rounded-full px-2.5 py-1">
                Goal Achievement Workshop
              </span>
              <span className="text-[#01012C]/60 text-[11px] font-medium">
                From the Comfort Zone to the Achievement Zone
              </span>
            </div>

            <h1 className="h-rise font-display text-[#01012C] text-5xl sm:text-6xl md:text-7xl leading-[0.95] uppercase mb-4">
              Get Sh*t
              <br />
              Done!
            </h1>

            <p className="h-rise text-slate-500 text-lg sm:text-xl font-medium mb-8">
              C'mon, get it done, already!
            </p>

            <Link
              to="/contact"
              className="cta-button h-rise inline-flex items-center gap-3 bg-[#c8264f] hover:bg-[#b01e42] text-white text-xs font-bold tracking-widest py-4 px-7 rounded-full uppercase shadow-[0_10px_24px_-6px_rgba(200,38,79,0.45)] transition-colors duration-200"
            >
              Advisory Services. Really!
              <span className="text-sm font-normal leading-none">&gt;</span>
            </Link>
          </div>

          <div className="h-rise flex justify-center md:justify-end">
            <img
              src="/homepage/Jump_woman_02.png"
              alt="Jumping woman"
              className="woman-image w-40 sm:w-52 md:w-64 h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Story card: Houston, we don't have a problem! */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pb-20 md:pb-28 relative z-10">
        <div ref={storyCardRef} className="relative bg-white rounded-[2rem] border-l-[6px] border-l-[#c8264f] shadow-[0_20px_55px_-15px_rgba(1,1,44,0.15)] p-8 sm:p-10 md:p-14 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <span className="text-[#c8264f] text-sm tracking-widest font-bold block mb-4">ÅΩ</span>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#01012C] mb-6 leading-tight">
              Houston, we <span className="font-serif italic font-normal text-slate-700 normal-case">don't</span> have a problem!
            </h2>

            <div className="space-y-4 text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
              <p>
                Step right up to Angstrohm Consulting, where we're on a mission to make your business dreams come true! Our main gig? Assisting you in achieving those jaw-dropping business objectives of yours. We're all about customizing our support to fit your unique company needs, because one-size-fits-all just ain't our style.
              </p>
              <p>
                Prepare for a wild adventure as we join forces with your business, hand in hand, to conquer the realms of success. We've got a whole arsenal of advisory services that'll knock your socks off!
              </p>
              <p>
                Our team is armed with meticulous guidance, expertise, and a contagious passion to help your business not just survive, but thrive like a boss. So grab your business boots and get ready to dance to the rhythm of success with Angstrohm Consulting!
              </p>
              <p className="pt-2 text-[#01012C] font-semibold">
                Buckle up, folks, as we unveil our not-so-secret recipe for success:
              </p>
            </div>

            <ul className="space-y-3 list-none p-0">
              {checklist.map((item, index) => (
                <li
                  key={item}
                  ref={el => checklistItemsRef.current[index] = el}
                  className="flex items-center gap-3"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#c8264f] text-white text-[10px] font-bold flex items-center justify-center">✓</span>
                  <span className="text-[#01012C] text-sm font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 flex items-center justify-center">
            <img
              ref={shuttleRef}
              src="/homepage/space-shuttle.png"
              alt="Space shuttle illustration"
              className="w-40 sm:w-52 lg:w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* CSS animations for floating particles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
      `}</style>
    </section>
  );
}