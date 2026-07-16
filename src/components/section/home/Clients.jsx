import React from 'react';

export default function Clients() {
  // Replace placeholders with real partner logos later
  const clientLogos = [
    { name: "doctorDB", placeholder: "doctorDB" },
    { name: "AEGLE PHARMA", placeholder: "AEGLE PHARMA" },
    { name: "Christine Kroplins", placeholder: "Christine Kroplins" },
    { name: "ÅNGSTROHM FOODS", placeholder: "ÅNGSTROHM FOODS" },
    { name: "GO POWER NUTRITION", placeholder: "GO POWER NUTRITION" }
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-6 text-[#01012C]">
      <div className="max-w-[1280px] mx-auto text-center space-y-16">

        {/* Title */}
        <div className="space-y-2">
          <h2 className="font-display text-4xl md:text-5xl text-[#01012C]">
            Our Delighted Clients
          </h2>
          <div className="w-16 h-1 bg-[#c8264f] mx-auto mt-4" />
        </div>

        {/* Logo flex row */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
          {clientLogos.map((logo, idx) => (
            <div key={idx} className="h-12 flex items-center justify-center px-4 font-serif text-lg font-bold text-slate-400 tracking-wider">
              {logo.placeholder}
            </div>
          ))}
        </div>

        {/* CTA Banner Split */}
        <div className="pt-12 text-left max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr] shadow-[0_20px_50px_-15px_rgba(1,1,44,0.15)] rounded-2xl overflow-hidden border border-slate-100">
          {/* Left Text */}
          <div className="bg-[#f4f1ea] p-8 md:p-12 space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              Not only do we aim for excellence, but we also deliver results that speak for themselves. Our track record of success is reflected in the satisfaction of our esteemed clients, who have partnered with us to achieve their goals and reach new heights. From small startups to established enterprises, we've had the pleasure of working with a diverse array of businesses.
            </p>
          </div>

          {/* Right Red Panel Box */}
          <div className="bg-[#c8264f] p-8 md:p-12 flex flex-col justify-between text-white space-y-6">
            <h3 className="font-display text-2xl md:text-3xl leading-tight">
              Ready to hop aboard the stress-free train and become one of our delighted customers?
            </h3>
            <button className="w-full bg-[#01012C] hover:bg-[#171549] text-white text-xs font-black tracking-widest py-4 px-6 rounded-full uppercase transition-colors">
              Yes! Yes! Please Yes!
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}