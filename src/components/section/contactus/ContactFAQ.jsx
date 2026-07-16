import React, { useState } from 'react';

const FAQS = [
  {
    question: 'What happens next?',
    answer:
      "We're all about honest conversations and skipping the fluffy sales pitches. So, here's the deal: we'll reach out to you to set up a no-obligation free consultation, where we'll shoot it to you straight. We'll assess your situation, put our thinking caps on, and give you an honest verdict on whether we're the perfect fit to save the day. No smoke and mirrors, no empty promises. If we can work our magic, we'll dive right in and take things from there. But if we're not the superheroes you're looking for, we won't waste your time. We believe in transparency, integrity, and finding the best solution, even if it means directing you elsewhere. So, get ready for a consultation that's refreshingly real and obligation-free. It's time to see if we're destined to join forces and conquer the challenges together!",
  },
  {
    question: 'How big is our team?',
    answer:
      "Big enough to get things done, small enough that you're never just a ticket number. You'll work directly with the people doing the work, not a rotating cast of account managers.",
  },
  {
    question: 'Do we offer all the services by ourselves?',
    answer:
      "Most of it, yes — in-house. For the specialist edges outside our core expertise, we bring in vetted partners we trust, and we stay accountable for the outcome either way.",
  },
  {
    question: 'Are all services available in all countries?',
    answer:
      "Coverage varies by service and region. Tell us where you're based and what you need, and we'll confirm what's available in your market during the free consultation.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    /* Added "self-start" to keep this container independent of the other column's height */
    <section className="bg-[#01012C] max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-16 rounded-2xl shadow-xl self-start w-full">
      <h2 className="font-display text-white text-4xl md:text-5xl mb-7">
        FAQ
      </h2>

      <div className="flex flex-col">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className={
                isOpen
                  ? 'bg-white/5 rounded-2xl px-4 mb-2'
                  : 'border-b border-white/10'
              }
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className={`w-full h-10 bg-transparent border-0 flex items-center justify-between gap-4 text-left cursor-pointer ${
                  isOpen ? 'py-4' : 'py-5'
                }`}
              >
                <h3 className="text-white text-base md:text-lg font-bold m-0">
                  {faq.question}
                </h3>
                <span
                  className={`shrink-0 text-[#c8264f] text-xl font-bold transition-transform ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              {isOpen && (
                <div className="pb-6">
                  <p className="text-slate-400 text-sm leading-7 m-0">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}