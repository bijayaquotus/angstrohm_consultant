import React, { useState } from 'react';
// Import the core Icon component creator to bypass named export errors
import * as Icons from 'lucide-react';

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

  // Safely grab icons even if named exports conflict in Vite bundles
  const FacebookIcon = Icons.Facebook || Icons.facebook;
  const LinkedinIcon = Icons.Linkedin || Icons.linkedin;

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
                    
                    {/* Dynamic Safe Icon Rendering Layout */}
                    <div className="flex gap-3 text-slate-500 justify-center">
                      {member.facebook && member.facebook !== '#' && FacebookIcon && (
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
                      {member.linkedin && member.linkedin !== '#' && LinkedinIcon && (
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