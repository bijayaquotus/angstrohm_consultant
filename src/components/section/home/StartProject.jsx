import React from 'react';
import { Link } from 'react-router-dom';

export default function StartProject() {
  return (
    <section className="bg-[#f4f1ea] py-20 px-4 sm:px-6">
      <div className="max-w-[1000px] mx-auto bg-[#01012C] text-white p-12 md:p-16 text-center shadow-[0_25px_60px_-15px_rgba(1,1,44,0.4)] rounded-[2rem]">
        <h2 className="font-display text-3xl md:text-5xl mb-6 tracking-tight">
          Start a Project
        </h2>

        <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-8 font-light">
          Get the ball rolling by reaching out to us, and we'll set up a complimentary meeting to dive deep into your needs. No strings attached, just a friendly chat to ensure we're on the same wavelength!
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center bg-[#c8264f] hover:bg-[#b01e42] text-white text-xs font-extrabold tracking-widest py-4 px-8 rounded-full uppercase transition-colors duration-200"
        >
          Schedule a Free Consultation
        </Link>
      </div>
    </section>
  );
}