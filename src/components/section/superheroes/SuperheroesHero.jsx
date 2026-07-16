import React from 'react';

export default function SuperheroesHero() {
  const members = [
    {
      name: "Joanne (Jo) Seaton",
      role: "Leader",
      image: "/superheroes/Jo.png",
      initial: "JS"
    },
    {
      name: "Arun (AA) Augustine",
      role: "Expert",
      image: "/superheroes/aa2.png",
      initial: "AA"
    },
    {
      name: "Giridhar (Giri) Singh",
      role: "Guru",
      image: "/superheroes/Screenshot-2023-06-25-at-11.32.11-AM.png",
      initial: "GS"
    },
    {
      name: "Helmar ten Winkel",
      role: "Strategist",
      image: "/superheroes/helmarten.png",
      initial: "HW"
    },
    {
      name: "Job van Hasselt",
      role: "Advisor",
      image: "/superheroes/job.png",
      initial: "JH"
    },
    {
      name: "BOING",
      role: "Mascot",
      image: "/superheroes/boing2.png",
      isMascot: true
    }
  ];

  return (
    <section className="bg-[#F4F1EA] pb-16">

      {/* ========== HERO SECTION ========== */}
      <div className="relative w-full bg-gradient-to-r from-[#c8264f] via-[#4a1130] to-[#01012C] py-20 px-4 sm:px-6 overflow-hidden flex items-center min-h-[340px]">

        {/* Concentric Circle Lines Background Asset on Left */}
        <div
          className="absolute left-[-100px] top-1/2 -translate-y-1/2 w-[600px] h-[90%] bg-contain bg-no-repeat bg-left opacity-60 pointer-events-none mix-blend-screen"
          style={{ backgroundImage: "url('/superheroes/financial-technology-40.png')" }}
        />

        {/* Hero Typography Content */}
        <div className="max-w-[850px] mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-white text-xs italic font-semibold tracking-[0.15em] uppercase">
              Meet the team
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl tracking-tight text-white">
            The A Team
          </h1>
          <p className="text-white/85 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Introducing our squad of wild and wacky visionaries, the dreamers with enough audacity, big ideas, unconventional thinking, and the kind of madness that changes the world that leave everyone wondering, "How on earth did they do that?!"
          </p>
        </div>
      </div>

      {/* ========== TEAM MATRIX SECTION ========== */}
      {/* Background is now clean #F4F1EA. Subtitles updated to slate-800 for high-contrast readability */}
      <div className="max-w-[1200px] mx-auto text-center mt-16 mb-10 px-4">
        <h2 className="font-display text-[#c8264f] text-3xl tracking-tight font-bold">Our Team</h2>
        <div className="w-16 h-1 bg-[#c8264f] mx-auto mt-4" />
      </div>

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6">
        {members.map((member, idx) => (
          /* Cards updated with an explicit slate border to pop nicely off the light beige background */
          <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl flex flex-col group transform hover:-translate-y-1 transition-all duration-300">

            {/* Portrait Image Container */}
            <div className={`aspect-square w-full flex items-center justify-center relative overflow-hidden ${member.isMascot && !member.image ? 'bg-[#c8264f]/10' : 'bg-slate-50'}`}>

              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}

              {/* Fallback layout if image path is missing */}
              <div className={`absolute inset-0 flex items-center justify-center ${member.image ? 'hidden' : 'flex'}`}>
                {member.isMascot ? (
                  <span className="text-5xl animate-bounce">🦤</span>
                ) : (
                  <div className="w-24 h-24 rounded-full bg-[#c8264f]/10 border-2 border-[#c8264f] flex items-center justify-center text-xl font-bold text-[#c8264f] tracking-widest">
                    {member.initial}
                  </div>
                )}
              </div>
            </div>

            {/* Crimson Bottom Label Block */}
            <div className="bg-[#c8264f] text-white py-4 px-6 text-center mt-auto">
              <h4 className="font-bold text-sm tracking-wide uppercase">{member.name}</h4>
              <p className="text-white/80 text-[11px] tracking-wider uppercase mt-0.5">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}