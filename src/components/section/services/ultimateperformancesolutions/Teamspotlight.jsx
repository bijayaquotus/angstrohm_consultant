import React, { useState } from 'react';

// Custom inline SVGs for brand logos to replace missing Lucide icons safely
const FacebookIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export default function TeamSpotlight({ title, members = [], tagline, highlight }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleItems = 4; 
  const maxIndex = Math.max(0, members.length - visibleItems);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  return (
    <section className="bg-[#F4F1EA] py-16 md:py-20 px-6 text-center select-none overflow-hidden">
      <div className="max-w-[1280px] mx-auto relative">
        
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-14">
            {title}
          </h2>
        )}

        {/* ========== EXACT SLIDER WORKING AREA ========== */}
        {members.length > 0 && (
          <div className="relative flex items-center justify-center max-w-[1100px] mx-auto mb-16">
            
            {/* Left Nav Arrow */}
            {members.length > visibleItems && (
              <button 
                onClick={handlePrev}
                className="absolute -left-12 text-slate-400 hover:text-slate-800 text-4xl p-2 transition-colors z-20 focus:outline-none"
              >
                &#10216;
              </button>
            )}

            {/* Hidden Overflow Viewport */}
            <div className="w-full overflow-hidden mx-2">
              <div 
                className="flex items-center transition-transform duration-500 ease-out"
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` 
                }}
              >
                {members.map((member, i) => (
                  <div 
                    key={i} 
                    className="shrink-0 flex flex-col items-center justify-center px-4"
                    style={{ flex: `0 0 ${100 / visibleItems}%` }}
                  >
                    {/* Circle Image Wrapper */}
                    <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden bg-slate-300 mb-4 shadow-md transition-transform duration-300 hover:scale-105">
                      {member.photo ? (
                        <img 
                          src={member.photo} 
                          alt={member.name} 
                          className="w-full h-full object-cover pointer-events-none" 
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs">
                          Photo
                        </div>
                      )}
                    </div>
                    
                    {/* Member Details */}
                    <p className="text-[#c8385a] font-bold text-sm mb-2">{member.name}</p>
                    
                    {/* Social Icon Rendering Layout */}
                    <div className="flex gap-3 text-slate-500 justify-center">
                      {member.facebook && member.facebook !== '#' && (
                        <a 
                          href={member.facebook} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-slate-800 transition-colors" 
                          aria-label={`${member.name} on Facebook`}
                        >
                          <FacebookIcon className="w-4 h-4" />
                        </a>
                      )}
                      {member.linkedin && member.linkedin !== '#' && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-slate-800 transition-colors" 
                          aria-label={`${member.name} on LinkedIn`}
                        >
                          <LinkedinIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Nav Arrow */}
            {members.length > visibleItems && (
              <button 
                onClick={handleNext}
                className="absolute -right-12 text-slate-400 hover:text-slate-800 text-4xl p-2 transition-colors z-20 focus:outline-none"
              >
                &#10217;
              </button>
            )}
          </div>
        )}

        {/* ========== DOT INDICATORS ========== */}
        {members.length > visibleItems && (
          <div className="flex justify-center items-center gap-2 mb-12">
            {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none ${
                  currentIndex === dotIdx ? 'bg-[#c8385a] scale-125' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        )}

        {/* ========== HIGHLIGHT TAGLINE TEXT ========== */}
        {tagline && (
          <p className="text-xl md:text-2xl font-semibold text-slate-800 max-w-2xl mx-auto leading-snug">
            {highlight
              ? tagline.split(highlight).reduce((acc, part, i, arr) => {
                  acc.push(part);
                  if (i < arr.length - 1) {
                    acc.push(
                      <span key={i} className="text-[#c8385a]">{highlight}</span>
                    );
                  }
                  return acc;
                }, [])
              : tagline}
          </p>
        )}
      </div>
    </section>
  );
}