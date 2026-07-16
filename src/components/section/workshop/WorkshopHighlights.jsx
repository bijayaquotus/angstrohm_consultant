import React from 'react';
import { Link } from 'react-router-dom';

const WorkshopHighlights = () => {
  const highlights = [
    "Proven step-by-step frame to structure open and compelling action-oriented goals.",
    "Focus and learn how to develop a positive structure mindset.",
    "Identify challenges and clear away obstacles quickly, made celebrating personal breakthroughs.",
    "Develop structural mindsets and tactical solutions that will help you excel in health, career, growth, relationships, financial goals, and more.",
  ];

  return (
    <section className="bg-white text-[#01012C] py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="font-display text-[#c8264f] text-xl uppercase mb-6 tracking-tight">
            Workshop Highlights
          </h3>
          <ul className="space-y-4 list-none p-0 m-0">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-[#c8264f] text-white text-[10px] font-black flex items-center justify-center">✓</span>
                <span className="text-slate-500 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          {/* Secondary Early Bird Flag & Mini CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="bg-[#c8264f] text-white font-bold px-5 py-2.5 rounded-full text-sm">
              Early Bird Discount <span className="font-black">20%</span>
            </div>
            <Link 
  to="/workshop2" 
  className="inline-block bg-[#01012C] hover:bg-[#151347] text-white font-bold uppercase px-6 py-3 rounded-full text-sm transition-colors duration-200 text-center"
>
  Register Now
</Link>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/workshop/Goals-4.webp"
            alt="Workshop Growth Concept"
            className="rounded-2xl shadow-xl border border-slate-100 max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkshopHighlights;