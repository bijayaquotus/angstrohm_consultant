import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function AboutPillars() {
  const sectionRef = useRef(null);
  const rowsRef = useRef([]);
  const titlesRef = useRef([]);
  const contentRef = useRef([]);
  const listItemsRef = useRef([]);

  const points = [
    "Good Advice. Period.",
    "Subject Matter Experts without the fancy suits",
    "Honest about what we can and can't do",
    "Simple Solutions",
    "No BS!",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states for rows
      rowsRef.current.forEach((row) => {
        gsap.set(row, {
          opacity: 0,
          y: 50,
          scale: 0.95,
        });
      });

      // Set initial states for titles
      titlesRef.current.forEach((title) => {
        gsap.set(title, {
          opacity: 0,
          x: -30,
          rotationX: -10,
        });
      });

      // Set initial states for content
      contentRef.current.forEach((content) => {
        gsap.set(content, {
          opacity: 0,
          x: 30,
        });
      });

      // Set initial states for list items
      listItemsRef.current.forEach((item) => {
        gsap.set(item, {
          opacity: 0,
          x: -20,
        });
      });

      // Animate each row with stagger
      rowsRef.current.forEach((row, index) => {
        gsap.to(row, {
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            end: "top 40%",
            toggleActions: "play none none reverse",
            scrub: 1,
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          delay: index * 0.15,
          ease: "power3.out",
        });
      });

      // Animate titles with 3D effect
      titlesRef.current.forEach((title, index) => {
        gsap.to(title, {
          scrollTrigger: {
            trigger: rowsRef.current[index],
            start: "top 80%",
            end: "top 45%",
            toggleActions: "play none none reverse",
            scrub: 1,
          },
          opacity: 1,
          x: 0,
          rotationX: 0,
          duration: 1,
          delay: index * 0.15 + 0.2,
          ease: "back.out(1.7)",
        });
      });

      // Animate content
      contentRef.current.forEach((content, index) => {
        gsap.to(content, {
          scrollTrigger: {
            trigger: rowsRef.current[index],
            start: "top 80%",
            end: "top 45%",
            toggleActions: "play none none reverse",
            scrub: 1,
          },
          opacity: 1,
          x: 0,
          duration: 1,
          delay: index * 0.15 + 0.3,
          ease: "power2.out",
        });
      });

      // Staggered animation for list items in first row
      listItemsRef.current.forEach((item, index) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: rowsRef.current[0],
            start: "top 75%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: index * 0.1 + 0.4,
          ease: "power2.out",
        });
      });

      // Row hover animations
      rowsRef.current.forEach((row) => {
        const title = row.querySelector('.row-title');
        const icon = row.querySelector('.row-icon');
        
        row.addEventListener('mouseenter', () => {
          gsap.to(row, {
            scale: 1.02,
            boxShadow: "0 10px 40px -10px rgba(200,38,79,0.15)",
            duration: 0.4,
            ease: "power2.out",
          });
          
          if (title) {
            gsap.to(title, {
              color: "#c8264f",
              x: 10,
              duration: 0.3,
              ease: "power2.out",
            });
          }
          
          if (icon) {
            gsap.to(icon, {
              rotation: 360,
              scale: 1.2,
              duration: 0.6,
              ease: "back.out(2)",
            });
          }
        });

        row.addEventListener('mouseleave', () => {
          gsap.to(row, {
            scale: 1,
            boxShadow: "none",
            duration: 0.4,
            ease: "power2.out",
          });
          
          if (title) {
            gsap.to(title, {
              color: "#c8264f",
              x: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
          
          if (icon) {
            gsap.to(icon, {
              rotation: 0,
              scale: 1,
              duration: 0.4,
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
        backgroundColor: "#f8f6f2",
        duration: 1,
        ease: "none",
      });

      // Decorative particles
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

      // Animated divider lines
      const dividers = document.querySelectorAll('.divider-line');
      dividers.forEach((divider, i) => {
        gsap.to(divider, {
          scrollTrigger: {
            trigger: rowsRef.current[i + 1],
            start: "top 85%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full text-[#01012C] overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#c8264f]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#c8264f]/5 blur-3xl" />
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="about-particle absolute rounded-full bg-[#c8264f]"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.1 + 0.05,
            }}
          />
        ))}
      </div>

      <div className="w-full relative z-10">

        {/* Row 1: Our Approach */}
        <div 
          ref={el => rowsRef.current[0] = el}
          className="w-full bg-white border-b border-gray-100 py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 transition-all duration-300 cursor-pointer group"
        >
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            <div className="md:col-span-4 lg:col-span-5">
              <h2 
                ref={el => titlesRef.current[0] = el}
                className="row-title font-display text-2xl sm:text-3xl font-bold text-[#c8264f] tracking-tight transition-colors duration-300"
              >
                <span className="row-icon inline-block mr-3">✦</span>
                Our Approach
              </h2>
            </div>
            <div 
              ref={el => contentRef.current[0] = el}
              className="md:col-span-8 lg:col-span-7"
            >
              <ul className="space-y-4 list-none p-0 m-0">
                {points.map((point, index) => (
                  <li 
                    key={point} 
                    ref={el => listItemsRef.current[index] = el}
                    className="flex items-start sm:items-center gap-3 sm:gap-4"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#c8264f] text-white text-[10px] font-black flex items-center justify-center mt-0.5 sm:mt-0 transition-all duration-300 group-hover:scale-110">
                      ✓
                    </span>
                    <span className="text-[#01012C] text-sm font-semibold tracking-wide leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="divider-line w-full h-0.5 bg-gradient-to-r from-[#c8264f]/20 via-[#c8264f]/40 to-[#c8264f]/20 scale-x-0 origin-left" />

        {/* Row 2: Our Mission */}
        <div 
          ref={el => rowsRef.current[1] = el}
          className="w-full bg-[#f4f1ea]/40 border-b border-gray-100 py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 transition-all duration-300 cursor-pointer group"
        >
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
            <div className="md:col-span-4 lg:col-span-5">
              <h2 
                ref={el => titlesRef.current[1] = el}
                className="row-title font-display text-2xl sm:text-3xl font-bold text-[#c8264f] tracking-tight transition-colors duration-300"
              >
                <span className="row-icon inline-block mr-3">✦</span>
                Our Mission
              </h2>
            </div>
            <div 
              ref={el => contentRef.current[1] = el}
              className="md:col-span-8 lg:col-span-7"
            >
              <p className="text-slate-600 text-[16px] sm:text-base leading-relaxed">
                At Angstrohm, our mission is to unleash the superpowers of your business and take it to the next level of awesomeness! We're not your average consultants; we're a squad of dynamic problem-solvers with a knack for making things happen and having a blast while doing it. Our mission is simple: to help you conquer challenges with a big ol' grin on your face and a sprinkling of fun along the way. From tackling complex projects to transforming your business operations, we're here to make the impossible possible and turn your dreams into reality. So buckle up, grab your capes, and get ready to join us on an epic adventure where success and laughter go hand in hand. With Angstrohm by your side, your business will soar higher than a unicorn on a rocket ship!
              </p>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="divider-line w-full h-0.5 bg-gradient-to-r from-[#c8264f]/20 via-[#c8264f]/40 to-[#c8264f]/20 scale-x-0 origin-left" />

        {/* Row 3: Our Vision */}
        <div 
          ref={el => rowsRef.current[2] = el}
          className="w-full bg-white py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 transition-all duration-300 cursor-pointer group"
        >
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
            <div className="md:col-span-4 lg:col-span-5">
              <h2 
                ref={el => titlesRef.current[2] = el}
                className="row-title font-display text-2xl sm:text-3xl font-bold text-[#c8264f] tracking-tight transition-colors duration-300"
              >
                <span className="row-icon inline-block mr-3">✦</span>
                Our Vision
              </h2>
            </div>
            <div 
              ref={el => contentRef.current[2] = el}
              className="md:col-span-8 lg:col-span-7 space-y-4"
            >
              <p className="text-slate-600 text-[16px] sm:text-base leading-relaxed">
                At Angstrohm, we're on a mission to revolutionize the consulting game and turn it from drab to fab! To become the coolest and most respected consulting firm in all of South East Asia, where we're known for our incredible expertise, infectious energy, and a touch of fabulousness. We're here to break free from the traditional consulting mold and bring a fresh perspective that's both impactful and glamorous.
              </p>
              <p className="text-slate-600 text-[16px] sm:text-base leading-relaxed">
                So, wave goodbye to boring consulting experiences and say hello to a world where consulting is glamorous, exciting, and oh-so-fabulous. Join us on this extraordinary journey and let's make your business shine brighter than the disco ball at a Saturday night party.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}