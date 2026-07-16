import React from 'react';

// Reusable biography body. `paragraphs` accepts plain strings or JSX nodes
// (so a link, like www.vistage.com, can be dropped inline where needed).
// `facts` renders the Speciality / Business Experience style rows.
export default function BiographyContent({ paragraphs, facts }) {
  return (
    <section className="relative bg-white max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-[#c8264f] text-3xl sm:text-4xl font-extrabold text-center mb-10">
        Biography
      </h2>

      <div className="space-y-6 text-slate-600 leading-relaxed text-justify sm:text-left">
        {paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {facts && facts.length > 0 && (
        <div className="mt-10 border-t border-slate-200">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 py-4 border-b border-slate-200"
            >
              <span className="text-[#c8264f] font-bold w-56 shrink-0">
                {fact.label}
              </span>
              <span className="text-slate-500">{fact.value}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}