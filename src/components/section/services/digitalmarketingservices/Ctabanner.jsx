import React from 'react';
import { Link } from 'react-router-dom';

function Streaks() {
  const colors = ['#f472b6', '#60a5fa', '#facc15', '#34d399', '#a78bfa'];
  return (
    <svg className="absolute inset-0 w-full h-full opacity-70" viewBox="0 0 1280 360" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <g strokeLinecap="round" fill="none">
        {[...Array(14)].map((_, i) => (
          <line
            key={i}
            x1={i * 90 - 60}
            y1="0"
            x2={i * 90 - 160}
            y2="360"
            stroke={colors[i % colors.length]}
            strokeWidth="2"
            strokeOpacity="0.35"
          />
        ))}
      </g>
    </svg>
  );
}

export default function CtaBanner({ eyebrow, title, description, ctaText, ctaHref = '#' }) {
  return (
    <section className="relative bg-white py-16 md:py-20 px-6 overflow-hidden">
      <Streaks />
      <div className="relative z-10 max-w-[1100px] mx-auto bg-[#171650] text-center py-14 px-6 md:px-16">
        {eyebrow && (
          <p className="text-[#c8385a] text-xs font-bold tracking-[0.15em] uppercase mb-3">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        {description && (
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            {description}
          </p>
        )}
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