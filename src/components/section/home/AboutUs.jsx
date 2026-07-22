import React from 'react';

export default function AboutUs() {
  const points = [
    "Good Advice. Period.",
    "Subject Matter Experts without the fancy suits",
    "Honest about what we can and can't do",
    "Simple Solutions",
    "No BS!",
  ];

  return (
    <section id="about" className="bg-[#01012C] py-24 px-4 sm:px-6 text-white">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Side: Story Text */}
        <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm leading-relaxed">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8264f]" />
            <span className="text-[#c8264f] text-xs italic font-semibold tracking-[0.15em] uppercase">
              The story behind the name
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight mb-8">
            About Us
          </h2>
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

        {/* Right Side: Split Card Graphic Box */}
        <div className="lg:col-span-5 relative">
          <div className="bg-[#c8264f] p-8 md:p-10 rounded-2xl shadow-2xl space-y-6 relative z-10">
            <h3 className="font-display text-3xl text-white leading-tight">
              Survive or Thrive?
            </h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Do you want to settle for mere survival when you can unleash your inner champion and take your company to great heights?
            </p>
            <button className="w-full bg-[#01012C] hover:bg-[#16144b] text-white text-xs font-bold tracking-widest py-4 px-6 rounded-full uppercase transition-colors duration-200">
              I Choose To Thrive! Show Me How...
            </button>
          </div>

          {/* Subtle background element mimicking the original layout's structure */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#c8264f]/30 to-transparent blur-xl pointer-events-none z-0" />
        </div>
      </div>

      {/* Philosophy Pillars Layout */}
      <div className="max-w-[1280px] mx-auto mt-24 pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h4 className="font-display text-[#c8264f] text-xl tracking-wide uppercase">Our Approach</h4>
          <ul className="space-y-3 list-none p-0 m-0">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#c8264f] text-white text-[10px] flex items-center justify-center">✓</span>
                <span className="text-slate-300 text-sm font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-display text-[#c8264f] text-xl tracking-wide uppercase">Our Mission</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            At Angstrohm, our mission is to unleash the superpowers of your business and take it to the next level of awesomeness! We're not your average consultants; we're a squad of dynamic problem-solvers with a knack for making things happen and having a blast while doing it.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-display text-[#c8264f] text-xl tracking-wide uppercase">Our Vision</h4>
          <p className="text-slate-400 text-[16px] leading-relaxed">
            At Angstrohm, we're on a mission to revolutionize the consulting game and turn it from drab to fab! To become the coolest and most respected consulting firm in all of South East Asia, where we're known for our incredible expertise, infectious energy, and a touch of fabulousness.
          </p>
        </div>
      </div>
    </section>
  );
}