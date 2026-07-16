import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  const checklist = [
    "Good Advice. Period.",
    "Subject Matter Experts without the fancy suits",
    "Honest about what we can and can't do",
    "Simple Solutions",
    "No BS!",
  ];

  return (
    <section className="relative bg-[#f4f1ea] text-[#01012C] overflow-hidden">
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

      {/* Top banner: badge + headline + jump woman */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-14 pb-8 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className={`h-rise ${loaded ? 'in' : ''} inline-flex items-center gap-2 bg-white rounded-full pl-1.5 pr-4 py-1.5 mb-6 shadow-[0_2px_10px_rgba(1,1,44,0.06)]`} style={{ transitionDelay: '0.05s' }}>
              <span className="bg-[#c8264f] text-white text-[9px] font-bold tracking-wider uppercase rounded-full px-2.5 py-1">
                Goal Achievement Workshop
              </span>
              <span className="text-[#01012C]/60 text-[11px] font-medium">
                From the Comfort Zone to the Achievement Zone
              </span>
            </div>

            <h1
              className={`h-rise ${loaded ? 'in' : ''} font-display text-[#01012C] text-5xl sm:text-6xl md:text-7xl leading-[0.95] uppercase mb-4`}
              style={{ transitionDelay: '0.15s' }}
            >
              Get Sh*t
              <br />
              Done!
            </h1>

            <p
              className={`h-rise ${loaded ? 'in' : ''} text-slate-500 text-lg sm:text-xl font-medium mb-8`}
              style={{ transitionDelay: '0.25s' }}
            >
              C'mon, get it done, already!
            </p>

            <Link
              to="/contact"
              className={`h-rise ${loaded ? 'in' : ''} inline-flex items-center gap-3 bg-[#c8264f] hover:bg-[#b01e42] text-white text-xs font-bold tracking-widest py-4 px-7 rounded-full uppercase shadow-[0_10px_24px_-6px_rgba(200,38,79,0.45)] transition-colors duration-200`}
              style={{ transitionDelay: '0.35s' }}
            >
              Advisory Services. Really!
              <span className="text-sm font-normal leading-none">&gt;</span>
            </Link>
          </div>

          <div className={`h-rise ${loaded ? 'in' : ''} flex justify-center md:justify-end`} style={{ transitionDelay: '0.2s' }}>
            <img
              src="/homepage/Jump_woman_02.png"
              alt="Jumping woman"
              className="w-40 sm:w-52 md:w-64 h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Story card: Houston, we don't have a problem! */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pb-20 md:pb-28">
        <div className={`h-rise ${loaded ? 'in' : ''} relative bg-white rounded-[2rem] border-l-[6px] border-l-[#c8264f] shadow-[0_20px_55px_-15px_rgba(1,1,44,0.15)] p-8 sm:p-10 md:p-14 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10`} style={{ transitionDelay: '0.3s' }}>

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
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#c8264f] text-white text-[10px] font-bold flex items-center justify-center">✓</span>
                  <span className="text-[#01012C] text-sm font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 flex items-center justify-center">
            <img
              src="/homepage/space-shuttle.png"
              alt="Space shuttle illustration"
              className="w-40 sm:w-52 lg:w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}