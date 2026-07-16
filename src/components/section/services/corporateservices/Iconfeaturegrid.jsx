import React from 'react';

export default function IconFeatureGrid({ title, items = [] }) {
  return (
    <section className="bg-[#0c0b2e] py-16 md:py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">
            {title}
          </h2>
        )}
        <div className="flex flex-wrap justify-center gap-x-15 gap-y-10">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="w-full sm:w-[280px]">
                <div className="w-14 h-14 rounded-md border border-[#3b4a8f]/60 bg-[#161544] flex items-center justify-center mb-5">
                  {Icon && <Icon className="w-7 h-7 text-[#5fb8e0]" strokeWidth={1.5} />}
                </div>
                <h3 className="text-[#c8385a] font-bold text-sm tracking-wide uppercase mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}