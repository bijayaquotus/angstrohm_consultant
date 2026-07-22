import React from 'react';

// Direct Inline SVGs - guaranteed to render with zero setup
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
  return (
    /* Changed background color to match Image 2 (#EAF1F8) */
    <section className="bg-[#F4F1EA] py-16 px-6 text-center select-none overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Title */}
        {title && (
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B3D] mb-16 tracking-tight">
            {title}
          </h2>
        )}

        {/* Team Members Grid Container */}
        {members.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 mb-16 max-w-[1000px] mx-auto">
            {members.map((member, i) => (
              <div 
                key={i} 
                className="flex items-center gap-5 text-left"
              >
                {/* Circle Image Wrapper */}
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden bg-slate-200 shadow-md shrink-0">
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
                
                {/* Member Details (Right side of photo like 2nd image) */}
                <div className="flex flex-col justify-center">
                  <p className="text-[#a82542] font-bold text-base md:text-lg leading-tight mb-2">
                    {member.name}
                  </p>
                  
                  {/* Social Icons positioned side-by-side beneath name */}
                  <div className="flex gap-2 items-center">
                    <a 
                      href={member.facebook || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#00529b] hover:opacity-80 transition-opacity p-0.5" 
                      aria-label={`${member.name} on Facebook`}
                    >
                      <FacebookIcon className="w-5 h-5" />
                    </a>
                    
                    <a 
                      href={member.linkedin || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#0077b5] hover:opacity-80 transition-opacity p-0.5" 
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Highlight Tagline Text */}
        {tagline && (
          <p className="text-2xl md:text-3xl font-bold text-[#0B1B3D] max-w-3xl mx-auto leading-snug tracking-tight mt-12">
            {highlight
              ? tagline.split(highlight).reduce((acc, part, i, arr) => {
                  acc.push(part);
                  if (i < arr.length - 1) {
                    acc.push(
                      <span key={i} className="text-[#c84b16]">{highlight}</span>
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