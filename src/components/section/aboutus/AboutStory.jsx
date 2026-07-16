import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutStory() {
  return (
    <>
      {/* ========== PAGE HERO ========== */}
      <section className="group relative bg-[#01012C] text-white py-28 px-4 sm:px-6 text-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-[1400ms] ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          style={{
            backgroundImage: `url('/aboutus/ai-002-1.jpg')`
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#01012C]/40 via-[#01012C]/70 to-[#01012C] transition-opacity duration-700 group-hover:opacity-80" />

        {/* Content */}
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8264f]" />
            <span className="text-[#c8264f] text-xs italic font-semibold tracking-[0.15em] uppercase">
              Who we are
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl tracking-tight">
            About Us
          </h1>
        </div>
      </section>

      {/* ========== STORY & SURVIVE OR THRIVE SECTION ========== */}
      <section className="group relative bg-[#01012C] text-white pt-20 pb-28 px-4 sm:px-6 overflow-hidden">
        {/* Background neon wavy line visual */}
        <div className="absolute inset-0 bg-[url('/aboutus/ai-001.jpg')] bg-cover bg-center opacity-25 pointer-events-none transition-transform duration-[1400ms] ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100" />

        {/* Overlapping Content Split Block Container */}
        <div className="max-w-[1100px] mx-auto relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[2rem] overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)]">

            {/* Left Block: White Story Container */}
            <div className="bg-white text-slate-600 p-8 md:p-12 lg:col-span-7 relative z-10">
              <span className="text-[#c8264f] text-xs tracking-widest font-bold block mb-5">ÅΩ</span>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Angstrohm, oh boy, let's break it down for you! Angstrohm, without the "h," is a teeny-tiny unit of measurement, smaller than small, equal to 10 to the power minus 10 meters. We're talking one ten-billionth of a meter here! It's named after the incredible Swedish scientist, Anders Ångström. This little fellow is used to measure the tiniest of things, the stuff that's almost impossible to see with the naked eye.
                </p>
                <p>
                  Now, let's talk about Ohm. No, we're not talking about meditation and zen vibes (although those are pretty cool too). Ohm is a measurement of electrical resistance, named after the genius physicist himself, Georg Ohm. It's all about that resistance, baby!
                </p>
                <p>
                  So, why did we choose the name Angstrohm? Well, life has taught us that making progress and achieving greatness often involves traversing those small paths, making those small changes. And guess what? They're usually paved with resistance! We wanted to pay homage to this incredible process by combining the names Angstrom and Ohm. It's a symbol of our dedication to overcoming challenges, embracing the resistance, and pushing forward to achieve remarkable progress. So, join us on this electrifying journey as we conquer the small and mighty with Angstrohm!
                </p>
              </div>
            </div>

            {/* Right Block: Crimson Call To Action Card Box */}
            <div className="bg-[#c8264f] text-white p-10 md:p-14 lg:col-span-5 flex flex-col justify-center items-center text-center relative z-20">
              <h3 className="font-display text-3xl md:text-4xl tracking-tight mb-4 leading-tight">
                Survive or Thrive?
              </h3>
              <p className="text-white/90 text-sm leading-relaxed mb-8 max-w-sm">
                Do you want to settle for mere survival when you can unleash your inner champion and take your company to great heights?
              </p>
              <Link
                to="/contact"
                className="bg-[#01012C] hover:bg-[#151347] text-white text-[11px] font-black tracking-widest py-4 px-8 rounded-full uppercase transition-colors duration-200 inline-block"
              >
                I Choose To Thrive! Show Me How...
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}