import React from 'react';
import { Link } from 'react-router-dom';

export default function CalloutBox({ label, text, ctaText, ctaHref = '#' }) {
  return (
    <section className="bg-white py-16 md:py-20 px-6">
      <div className="max-w-[1100px] mx-auto border border-[#c8385a]/50 relative pt-8 pb-10 px-6 md:px-12">
        {label && (
          <span className="absolute -top-3 left-6 bg-white px-3 text-[#c8385a] text-xs font-bold tracking-[0.15em] uppercase">
            {label}
          </span>
        )}
        <p className="text-lg md:text-xl font-semibold text-slate-900 leading-relaxed mb-8 max-w-2xl">
          {text}
        </p>
        {ctaText && (
          <Link
            to='/contact'
            className="inline-block bg-[#c8385a] hover:bg-[#a82d4a] text-white text-xs font-bold tracking-wider py-4 px-7 uppercase transition-colors"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}