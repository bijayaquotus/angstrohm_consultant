import React from 'react';

export default function ContactHero() {
  // Configured with your custom background asset location path string
  const backgroundImagePath = "/aboutus/ai-002-1.jpg";

  return (
    <section
      className="relative overflow-hidden bg-[#01012C] flex items-center justify-center px-4 sm:px-6 bg-cover bg-center min-h-[240px] md:min-h-[280px]"
      style={{ backgroundImage: `url(${backgroundImagePath})` }}
    >
      {/* Dark overlay so the text pops against the image */}
      <div className="absolute inset-0 bg-[#01012C]/50 pointer-events-none z-0"></div>

      <div className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8264f]" />
          <span className="text-white text-xs italic font-semibold tracking-[0.15em] uppercase">
            Let's talk
          </span>
        </div>
        <h1 className="font-display text-white text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase">
          Give Us a Shout
        </h1>
      </div>
    </section>
  );
}