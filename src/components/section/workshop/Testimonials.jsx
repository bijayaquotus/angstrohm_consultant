import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-white text-[#01012C] py-20 px-4 sm:px-6 text-center">
      <div className="max-w-2xl mx-auto bg-[#f4f1ea] rounded-2xl p-10 md:p-12">
        <div className="mb-4 flex justify-center">
          <img
            src="/workshop/Xavier-Suren.webp"
            alt="Reviewer Headshot"
            className="w-20 h-20 rounded-full border-2 border-[#c8264f] object-cover"
          />
        </div>
        <h4 className="font-bold text-lg text-[#c8264f]">Xavier Suren</h4>
        <p className="text-sm text-slate-500 mb-2">APAC Regional Sales Head</p>

        {/* Star Rating Layout */}
        <div className="flex justify-center text-amber-400 text-xl mb-6">
          ★★★★★
        </div>

        <blockquote className="text-lg italic text-slate-600 font-medium leading-relaxed">
          "This workshop completely re-calibrated our corporate approach to milestones. The frameworks provided are pragmatic, immediately actionable, and highly effective for personal and team acceleration."
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonials;