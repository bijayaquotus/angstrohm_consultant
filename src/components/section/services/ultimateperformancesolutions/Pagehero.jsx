import React from 'react';

export default function PageHero({ title, subtitle, imageSrc, imageAlt }) {
  return (
    <section 
      className="relative bg-[#06050f] overflow-hidden py-16 md:py-24 px-6 md:px-12 text-left bg-cover bg-center bg-no-repeat"
      style={{
        // Make sure to match this path to where you save the image file in your public folder
        backgroundImage: `url('/aboutus/ai-002-1.jpg')`
      }}
    >
      
      {/* 2-Column responsive grid */}
      <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Typography */}
        <div className="col-span-12 md:col-span-7 lg:pl-12 text-center md:text-left order-2 md:order-1">
          <h1 className="text-2xl md:text-5xl lg:text-3xl font-['Archivo_Black','Arial_Black',sans-serif] font-black uppercase text-white tracking-tight leading-[0.95]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-slate-300 text-lg md:text-xl font-medium tracking-wide">
              {subtitle}
            </p>
          )}
        </div>

        {/* Right Side: Foreground Image Slot */}
        {/* <div className="col-span-12 md:col-span-5 flex justify-center md:justify-start lg:pl-12 order-1 md:order-2">
          <img
            src={imageSrc || "/homepage/Jump_woman_02.png"}
            alt={imageAlt || "Hero Illustration"}
            className="w-36 sm:w-44 md:w-48 lg:w-56 h-auto object-contain block transform-none filter-none"
          />
        </div> */}

      </div>
    </section>
  );
}