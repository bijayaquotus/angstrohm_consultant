import React from 'react';

export default function WorkshopHero({ title, image }) {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] min-h-[260px] sm:min-h-[300px] flex items-center">
      {image && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        </>
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-14 text-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          {title}
        </h1>
      </div>
    </section>
  );
}