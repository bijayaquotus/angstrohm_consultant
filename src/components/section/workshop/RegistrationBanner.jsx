import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationBanner = ({ data }) => {
  return (
    <section className="relative bg-[#01012C] text-white">
      {/* Ribbon Accent Header */}
      <div className="w-full bg-[#c8264f] h-12 flex justify-center items-center relative">
        <div className="absolute inset-0 flex justify-around items-center text-xs font-bold uppercase tracking-wider text-white/90 px-4">
          <span>Date: {data.date}</span>
          <span>Time: {data.time}</span>
          <span>Venue: {data.venue}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="line-through text-slate-400">{data.price}</span>
          <h4 className="font-display text-lg text-[#c8264f]">*Early Bird Promo</h4>
          <h2 className="font-display text-3xl">{data.promoPrice}</h2>
          <p className="text-xs text-slate-400 mt-1">*Register &amp; Pay before {data.deadline}</p>
        </div>
        <Link 
  to="/workshop2" 
  className="inline-block mt-8 bg-[#01012C] hover:bg-[#151347] text-white font-semibold uppercase px-6 py-3 rounded-full text-sm transition-colors duration-200"
>
  Register for Workshop
</Link>
      </div>
    </section>
  );
};

export default RegistrationBanner;