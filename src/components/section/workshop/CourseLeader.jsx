import React from 'react';
import {Link} from 'react-router-dom';

const CourseLeader = () => {
  return (
    <section className="bg-[#f4f1ea] text-[#01012C] py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Leader Image */}
        <div className="md:col-span-5 flex justify-center">
          <img
            src="/workshop/UPS_Colin_Main3.webp"
            alt="Colin Whitehead"
            className="max-w-full h-auto object-cover rounded-2xl shadow-[0_20px_45px_-15px_rgba(1,1,44,0.2)]"
          />
        </div>

        {/* Leader Bio */}
        <div className="md:col-span-7">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8264f]" />
            <span className="text-[#c8264f] text-xs italic font-semibold tracking-[0.15em] uppercase">
              Course Leader
            </span>
          </div>
          <h2 className="font-display text-4xl text-[#01012C] mb-6">Colin Whitehead</h2>
          <div className="space-y-4 text-slate-500 leading-relaxed">
            <p>Colin Whitehead combines military discipline with extensive corporate experience. Educated in British Military Schools, Colin joined the military at 17, where he honed his leadership skills.</p>
            <p>In his 30-year plus corporate career, Colin managed operations in 14 countries across Asia Pacific for a Fortune 500 company, negotiated the very first foreign majority owned joint venture in China. As a management consultant he spent several years restructuring and executing business turnarounds. He then co-founded Rentwise, a tech rental firm that attracted significant investment twice and was sold to UK billionaire Sir John Madejski. He was then the head of the Exclusive, Dynamic Macquarie Bank SAF division for SE Asia for twelve years.</p>
            <p>Colin is a corporate, personal and executive coach, training teams at Cisco, Macquarie Bank, and Zuellig Pharma among many others. With his deep experience in driven goal-setting and personal growth, Colin is dedicated to helping others achieve their full potential.</p>
          </div>
          <Link 
  to="/colin-whitehead" 
  className="inline-block mt-8 bg-[#01012C] hover:bg-[#151347] text-white font-semibold uppercase px-6 py-3 rounded-full text-sm transition-colors duration-200"
>
  Read More
</Link>
        </div>
      </div>
    </section>
  );
};

export default CourseLeader;