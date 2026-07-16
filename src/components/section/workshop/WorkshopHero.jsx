import React from 'react';
import { Link } from 'react-router-dom';

const WorkshopHero = ({ data }) => {
  return (
    <section
      className="relative bg-[#01012C] text-white py-20 px-4 sm:px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/workshop/ups-header-leadership-1-jpeg.webp')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#01012C]/75 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8264f]" />
          <span className="text-white text-xs italic font-semibold tracking-[0.15em] uppercase">
            Goal Achievement Workshop
          </span>
        </div>

        <h1 className="font-display text-3xl md:text-5xl tracking-tight mb-12 max-w-4xl mx-auto">
          {data.title}
        </h1>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-b border-white/15 pb-8">
          <div>
            <h4 className="text-[#c8264f] font-bold uppercase tracking-wider text-sm mb-1">Date</h4>
            <p className="text-slate-300 font-medium">{data.date}</p>
          </div>
          <div>
            <h4 className="text-[#c8264f] font-bold uppercase tracking-wider text-sm mb-1">Time</h4>
            <p className="text-slate-300 font-medium">{data.time}</p>
          </div>
          <div>
            <h4 className="text-[#c8264f] font-bold uppercase tracking-wider text-sm mb-1">Venue</h4>
            <p className="text-slate-300 font-medium">{data.venue}</p>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm max-w-4xl mx-auto">
          <div className="text-left">
            <span className="line-through text-slate-400 text-lg">{data.price}</span>
            <h3 className="font-display text-lg text-[#c8264f]">*Early Bird Promo</h3>
            <h2 className="font-display text-3xl text-white">{data.promoPrice}</h2>
            <p className="text-xs text-slate-400 mt-1">*Register &amp; Pay before {data.deadline}</p>
          </div>
             <Link 
  to="/workshop2" 
  className="inline-block mt-8 bg-[#B3213E] hover:bg-[#151347] text-white font-semibold uppercase px-6 py-3 rounded-full text-sm transition-colors duration-200"
>
  Register for Workshop
</Link>
        </div>
      </div>
    </section>
  );
};

export default WorkshopHero;