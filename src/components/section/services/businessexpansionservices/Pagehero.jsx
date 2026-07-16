import React from 'react';

function WaveBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <img
        src="/aboutus/ai-002-1.jpg" 
        alt="Background Graphics"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function PageHero({ title, subtitle }) {
  return (
    <section className="relative bg-[#06050f] overflow-hidden py-16 md:py-20 px-6 text-center">
      <WaveBackground />
      <div className="relative z-10 max-w-[1280px] mx-auto">
        <h1 className="text-4xl md:text-6xl font-normal text-white tracking-wide">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl font-bold text-white tracking-wide uppercase">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}