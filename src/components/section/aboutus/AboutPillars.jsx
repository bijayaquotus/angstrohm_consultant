import React from 'react';

export default function AboutPillars() {
  const points = [
    "Good Advice. Period.",
    "Subject Matter Experts without the fancy suits",
    "Honest about what we can and can't do",
    "Simple Solutions",
    "No BS!",
  ];

  return (
    <section className="w-full text-[#01012C]">
  <div className="w-full">

    {/* Row 1: Our Approach */}
    <div className="w-full bg-white border-b border-gray-100 py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
        <div className="md:col-span-4 lg:col-span-5">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#c8264f] tracking-tight">
            Our Approach
          </h2>
        </div>
        <div className="md:col-span-8 lg:col-span-7">
          <ul className="space-y-4 list-none p-0 m-0">
            {points.map((point) => (
              <li key={point} className="flex items-start sm:items-center gap-3 sm:gap-4">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#c8264f] text-white text-[10px] font-black flex items-center justify-center mt-0.5 sm:mt-0">
                  ✓
                </span>
                <span className="text-[#01012C] text-sm font-semibold tracking-wide leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Row 2: Our Mission */}
    <div className="w-full bg-[#f4f1ea]/40 border-b border-gray-100 py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
        <div className="md:col-span-4 lg:col-span-5">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#c8264f] tracking-tight">
            Our Mission
          </h2>
        </div>
        <div className="md:col-span-8 lg:col-span-7">
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            At Angstrohm, our mission is to unleash the superpowers of your business and take it to the next level of awesomeness! We're not your average consultants; we're a squad of dynamic problem-solvers with a knack for making things happen and having a blast while doing it. Our mission is simple: to help you conquer challenges with a big ol' grin on your face and a sprinkling of fun along the way. From tackling complex projects to transforming your business operations, we're here to make the impossible possible and turn your dreams into reality. So buckle up, grab your capes, and get ready to join us on an epic adventure where success and laughter go hand in hand. With Angstrohm by your side, your business will soar higher than a unicorn on a rocket ship!
          </p>
        </div>
      </div>
    </div>

    {/* Row 3: Our Vision */}
    <div className="w-full bg-white py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
        <div className="md:col-span-4 lg:col-span-5">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#c8264f] tracking-tight">
            Our Vision
          </h2>
        </div>
        <div className="md:col-span-8 lg:col-span-7 space-y-4">
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            At Angstrohm, we're on a mission to revolutionize the consulting game and turn it from drab to fab! To become the coolest and most respected consulting firm in all of South East Asia, where we're known for our incredible expertise, infectious energy, and a touch of fabulousness. We're here to break free from the traditional consulting mold and bring a fresh perspective that's both impactful and glamorous.
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            So, wave goodbye to boring consulting experiences and say hello to a world where consulting is glamorous, exciting, and oh-so-fabulous. Join us on this extraordinary journey and let's make your business shine brighter than the disco ball at a Saturday night party.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>
  );
}