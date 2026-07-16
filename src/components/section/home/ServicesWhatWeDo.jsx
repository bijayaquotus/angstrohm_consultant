import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesWhatWeDo() {
  // Pulled out the featured item to style its grid/width independently
  const mainService = {
    title: "ULTIMATE PERFORMANCE SOLUTIONS - LEADERSHIP COACHING",
    path: "/ultimateperformance",
    text: "Get ready to level up your business skills with our Coaching Programmes for Strategic Business Development and Leadership supporting Business Leaders, Professional Managers and motivated individuals. We’re here to make learning fun and help you unleash your inner boss! Whether you’re a seasoned pro looking to up your game or a rising star hungry for success, we’ve got your back. Let’s kickstart your journey to greatness – one coaching session at a time!"
  };

  const secondaryServices = [
    { 
      title: "BUSINESS EXPANSION & GROWTH", 
      path: "/businessexpansion",
      text: "We're like wizards of expansion, waving our wands and making your business grow like magic!" 
    },
    { 
      title: "DIGITAL TRANSFORMATION", 
      path: "/digitaltransformation",
      text: "Get ready for a tech revolution! We'll whip your business into shape, transforming it into a digital powerhouse that'll leave your competition eating your digital dust." 
    },
    { 
      title: "DIGITAL MARKETING", 
      path: "/digital-marketing",
      text: "We've got the secret sauce to turn your online presence from drab to fab. Brace yourself for a tsunami of likes, clicks, and conversions!" 
    },
    { 
      title: "CORPORATE GOVERNANCE | RISK & COMPLIANCE", 
      path: "/corporate-governance",
      text: "We'll be your guardians of order, making sure your business sails through stormy seas of regulations unscathed. Compliance? Consider it done!" 
    },
    { 
      title: "SALES FORCE AUGMENTATION", 
      path: "/sales-force-augmentation",
      text: "Prepare for a masterclass in persuasion and domination. We'll arm you with the deadliest sales and marketing strategies that'll make your rivals tremble with envy." 
    },
    { 
      title: "CORPORATE SERVICES", 
      path: "/corporate-services",
      text: "We're the superhero team equipped with all the tools and powers to help you navigate the world of Company Registration, Statutory Body registrations, Payroll Services, HR Legal, and more!" 
    }
  ];

  const mainIcon = (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h6m4 0h6v6m-6-6l-6 6" />
  );

  const icons = [
    <path key="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L15 12l-5.25-5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />,
    <path key="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    <path key="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
    <path key="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
  ];

  return (
    <section id="services" className="relative bg-[#f4f1ea] py-24 px-4 sm:px-6 text-[#01012C]">
      <div className="max-w-[1280px] mx-auto relative z-10">

        {/* Section header */}
        <div className="text-center mb-16">
          <h3 className="font-display text-4xl md:text-5xl tracking-tight mb-4">
            What We're Awesome At
          </h3>
          <div className="w-16 h-1 bg-[#c8264f] mx-auto" />
        </div>

        {/* Top Full-Width White Card Container matching the layout width pattern */}
        <div className="mb-6">
          <Link
            to={mainService.path}
            className="group block relative bg-white rounded-2xl border border-slate-100 p-7 text-left shadow-[0_2px_10px_rgba(1,1,44,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-10px_rgba(1,1,44,0.18)]"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-[#c8264f]/10 text-[#c8264f] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c8264f] group-hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mainIcon}
              </svg>
            </div>

            <h4 className="font-display text-sm tracking-wide text-[#01012C] uppercase mb-3 leading-snug group-hover:text-[#c8264f] transition-colors duration-300">
              {mainService.title}
            </h4>
            
            {/* Width Constraint applied to text wrapper for paragraph layout */}
            <p className="text-slate-500 text-sm leading-relaxed max-w-[850px]">
              {mainService.text}
            </p>

            {/* Decorative underline on hover */}
            <div className="w-0 h-[2px] bg-[#c8264f] transition-all duration-300 group-hover:w-10 mt-5" />
          </Link>
        </div>

        {/* Secondary Services 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {secondaryServices.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="group relative bg-white rounded-2xl border border-slate-100 p-7 text-left shadow-[0_2px_10px_rgba(1,1,44,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-10px_rgba(1,1,44,0.18)]"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#c8264f]/10 text-[#c8264f] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c8264f] group-hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {icons[index] ?? icons[0]}
                </svg>
              </div>

              <h4 className="font-display text-sm tracking-wide text-[#01012C] uppercase mb-3 leading-snug group-hover:text-[#c8264f] transition-colors duration-300">
                {service.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                {service.text}
              </p>

              {/* Decorative underline on hover */}
              <div className="w-0 h-[2px] bg-[#c8264f] transition-all duration-300 group-hover:w-10 mt-5" />
            </Link>
          ))}
        </div>

        {/* Section Bottom Headline */}
        <div className="text-center">
          <h2 className="inline-block font-display text-2xl md:text-3xl tracking-wide text-[#c8264f] uppercase">
            Where do you need our awesomeness?
          </h2>
        </div>
      </div>
    </section>
  );
}