import React from 'react';
import { Link } from 'react-router-dom';

export default function IntroSplit({ eyebrow, heading, paragraphs = [], ctaText, ctaHref = '#', image }) {
  return (
    <section className="bg-[#F4F1EA] py-16 md:py-20 px-6">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">

        {/* Image / illustration column */}
       <div className="md:col-span-5 flex justify-center">
  {/* Removed the "image ?" check so it renders the image immediately */}
  <img 
    src="/services/corp-services (1).png" 
    alt={heading} 
    className="w-full max-w-sm rounded-sm" 
  />
</div>

        {/* Text column */}
        <div className="md:col-span-7">
          {eyebrow && (
            <p className="text-[#c8385a] text-xs font-bold tracking-[0.15em] uppercase mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
            {heading}
          </h2>
          <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {ctaText && (
            <Link
              to = "/contact"
              className="inline-block mt-8 bg-[#c8385a] hover:bg-[#a82d4a] text-white text-xs font-bold tracking-wider py-4 px-7 uppercase transition-colors"
            >
              {ctaText}
            </Link>
          )}
        </div>

      </div>
    </section>
  );
}