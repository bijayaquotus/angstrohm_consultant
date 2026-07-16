import React from 'react';

// Reusable hero for team-member bio pages. Pass a different name/title/image
// for each person so this one component covers all bios, not just Colin's.
export default function ProfileHero({ name, title, image }) {
  return (
    <section className="relative overflow-hidden min-h-[420px] sm:min-h-[480px] flex items-end">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e0c2a]/70 via-[#0e0c2a]/30 to-transparent" />

      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 sm:px-10 pb-20">
        <h1 className="text-[#c8264f] text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] mb-4 drop-shadow-sm">
          {name.split(' ').map((word) => (
            <span key={word} className="block">
              {word}
            </span>
          ))}
        </h1>
        <p className="text-slate-800 text-lg sm:text-xl font-bold uppercase tracking-wide bg-white/70 inline-block px-1">
          {title}
        </p>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-16 sm:h-20"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,50 C240,100 480,0 720,40 C960,80 1200,20 1440,55 L1440,100 L0,100 Z"
          fill="#0e0c2a"
        />
      </svg>
    </section>
  );
}