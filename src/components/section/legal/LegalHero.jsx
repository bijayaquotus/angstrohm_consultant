import React from 'react';

// Shared hero banner for legal pages (Terms of Use, Privacy Policy).
// Pass the page title as a prop so both pages reuse the exact same visual.
export default function LegalHero({ title }) {
  return (
    <section className="relative overflow-hidden bg-[#0e0c2a] px-6 py-14 flex items-center justify-center">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1400 260"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="rayPink" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e879b9" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#e879b9" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="rayPurple" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 29 }).map((_, i) => {
          const originX = 700;
          const spread = 900;
          const targetX = originX - spread / 2 + (spread / 28) * i;
          const stroke = i % 2 === 0 ? 'url(#rayPink)' : 'url(#rayPurple)';
          return (
            <line
              key={i}
              x1={originX}
              y1="-40"
              x2={targetX}
              y2="260"
              stroke={stroke}
              strokeWidth="1"
            />
          );
        })}
      </svg>

      <div className="relative z-10 border border-[#c8264f]/50 px-10 py-5 sm:px-16 sm:py-6">
        <h1 className="text-[#c8264f] text-xl sm:text-2xl md:text-3xl font-extrabold tracking-[0.15em] uppercase text-center whitespace-nowrap">
          {title}
        </h1>
      </div>
    </section>
  );
}