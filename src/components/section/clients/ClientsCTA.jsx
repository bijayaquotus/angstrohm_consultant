import React, { useEffect, useRef, useState } from 'react';

export default function ClientsCTA() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="group relative bg-[#01012C] text-white pt-24 pb-36 px-4 sm:px-6 overflow-hidden"
    >
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .cc-bg {
            animation: cc-drift 16s ease-in-out infinite;
            transition: transform 1.2s ease-out, filter 1.2s ease-out;
          }
          .group:hover .cc-bg {
            animation-play-state: paused;
            transform: scale(1.14) !important;
            filter: brightness(1.1) saturate(1.15);
          }
          @keyframes cc-drift {
            0%, 100% { transform: scale(1) translate(0, 0); }
            50% { transform: scale(1.06) translate(-1%, -1%); }
          }

          .cc-card-left {
            opacity: 0;
            transform: translateX(-36px);
            transition: opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1);
          }
          .cc-card-left.in { opacity: 1; transform: translateX(0); }

          .cc-card-right {
            opacity: 0;
            transform: translateX(36px);
            transition: opacity 0.8s cubic-bezier(.16,1,.3,1) 0.15s, transform 0.8s cubic-bezier(.16,1,.3,1) 0.15s;
          }
          .cc-card-right.in { opacity: 1; transform: translateX(0); }

          .cc-heading {
            opacity: 0;
            transform: translateY(14px);
            transition: opacity 0.7s ease-out 0.35s, transform 0.7s ease-out 0.35s;
          }
          .cc-heading.in { opacity: 1; transform: translateY(0); }

          .cc-btn {
            position: relative;
            overflow: hidden;
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 0.6s ease-out 0.55s, transform 0.6s ease-out 0.55s, box-shadow 0.25s ease;
            animation: cc-pulse 2.6s ease-in-out 1.6s infinite;
          }
          .cc-btn.in { opacity: 1; transform: translateY(0); }
          .cc-btn::after {
            content: '';
            position: absolute;
            top: 0; left: -60%;
            width: 40%; height: 100%;
            background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
            transform: skewX(-20deg);
            transition: left 0.6s ease;
          }
          .cc-btn:hover::after { left: 130%; }
          .cc-btn:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 10px 24px -6px rgba(200,38,79,0.55); }
          @keyframes cc-pulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(200,38,79,0.4); }
            50% { box-shadow: 0 0 0 9px rgba(200,38,79,0); }
          }
        }
      `}</style>

      {/* Background Image */}
      <div
        className="cc-bg absolute inset-0 bg-cover bg-center opacity-100 pointer-events-none"
        style={{
          backgroundImage: `url('/aboutus/ai-001.jpg')`
        }}
      />

      {/* Gradient Overlay for readability, tuned to the site navy */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#01012C]/60 via-[#01012C]/30 to-[#01012C]/85 pointer-events-none" />

      <div className="max-w-[1100px] mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[2rem] overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)]">

          {/* Left Side: White Info Box */}
          <div className={`cc-card-left ${inView ? 'in' : ''} bg-white text-slate-600 p-8 md:p-12 lg:col-span-6 z-10`}>
            <p className="text-sm leading-relaxed">
              Not only do we aim for excellence, but we also deliver results that speak for themselves. Our
              track record of success is reflected in the satisfaction of our esteemed clients, who have
              partnered with us to achieve their goals and reach new heights. From small startups to
              established enterprises, we've had the pleasure of working with a diverse array of
              businesses, each with its unique story of growth and accomplishment. Our happy
              clients are our biggest advocates, and their success stories serve as a testament to our
              unwavering commitment to delivering exceptional service. Join the ranks of our
              satisfied clientele and experience firsthand the transformative power of our dedicated
              approach to client success.
            </p>
          </div>

          {/* Right Side: Crimson CTA Box */}
          <div className={`cc-card-right ${inView ? 'in' : ''} bg-[#c8264f] text-white p-10 md:p-14 lg:col-span-6 flex flex-col justify-center items-center text-center min-h-[420px] relative z-20`}>
            <h3 className={`cc-heading ${inView ? 'in' : ''} font-display text-3xl md:text-4xl tracking-tight mb-8 leading-tight max-w-md`}>
              Ready to hop aboard the stress-free train and become one of our delighted customers?
            </h3>
            <button className={`cc-btn ${inView ? 'in' : ''} bg-[#01012C] hover:bg-[#151347] text-white text-[11px] font-black tracking-widest py-4 px-8 uppercase transition-colors duration-200 rounded-full shadow-lg`}>
              Yes! Yes! Yes! Please Yes!
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}