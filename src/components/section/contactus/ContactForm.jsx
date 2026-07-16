import React, { useState } from 'react';

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    /* Added mt-16 to move it downward away from the hero, and changed pt-24 to pt-12 to make it smaller/tighter */
    <section className="bg-[#01012C] max-w-3xl mx-auto px-4 sm:px-6 mt-16 pt-12 pb-16 rounded-2xl shadow-xl">
      <h2 className="font-display text-white text-4xl md:text-5xl mb-5">
        Get In Touch
      </h2>
      <p className="text-slate-400 italic mb-8">
        I dont want to lose hair or sleep. Call me already...
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-white text-xs font-bold tracking-widest mb-2"
          >
            NAME
          </label>
          <input
            id="contact-name"
            type="text"
            value={values.name}
            onChange={handleChange('name')}
            required
            className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#c8264f] transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-white text-xs font-bold tracking-widest mb-2"
          >
            EMAIL ADDRESS
          </label>
          <input
            id="contact-email"
            type="email"
            value={values.email}
            onChange={handleChange('email')}
            required
            className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#c8264f] transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-white text-xs font-bold tracking-widest mb-2"
          >
            MESSAGE
          </label>
          <textarea
            id="contact-message"
            rows="6"
            value={values.message}
            onChange={handleChange('message')}
            required
            className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#c8264f] transition-colors resize-y min-h-[140px]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="inline-block bg-[#c8264f] hover:bg-[#b01e42] text-white font-bold rounded-full px-10 py-3.5 text-sm uppercase tracking-wider transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 cursor-pointer"
        >
          Phew!!!
        </button>

        {submitted && (
          <p className="text-emerald-400 text-sm mt-2">
            Thanks — we'll be in touch shortly.
          </p>
        )}
      </form>
    </section>
  );
}