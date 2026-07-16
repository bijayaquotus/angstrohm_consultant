import React from 'react';
import { Link } from 'react-router-dom';

export default function CourseLeader({
  image,
  name,
  paragraphs,
  readMoreTo = "/colin-whitehead",
}) {
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <img
          src={image}
          alt={name}
          className="w-full h-auto rounded-md object-cover"
        />

        <div>
          <h2 className="text-[#c8264f] text-3xl sm:text-4xl font-extrabold mb-1">
            Course Leader
          </h2>
          <p className="text-slate-800 text-xl font-semibold mb-5">{name}</p>

          <div className="space-y-4 text-slate-600 leading-relaxed mb-6">
            {paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
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
}