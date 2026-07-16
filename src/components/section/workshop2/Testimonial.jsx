import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonial({ avatar, name, role, rating = 5, quote }) {
  return (
    <section className="bg-[#ececec] px-6 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <img
          src={avatar}
          alt={name}
          className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow"
        />
        <p className="text-[#c8264f] font-bold">{name}</p>
        <p className="text-slate-600 text-sm mb-2">{role}</p>

        <div className="flex justify-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4"
              fill={i < rating ? '#f5a623' : 'none'}
              stroke="#f5a623"
            />
          ))}
        </div>

        <p className="text-slate-700 leading-relaxed">"{quote}"</p>
      </div>
    </section>
  );
}