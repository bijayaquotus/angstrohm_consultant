import React from 'react';

export default function SuperheroesSnapshot() {
  const snapshots = [
    {
      num: "1",
      title: "Domain Expertise + Functional Knowledge",
      desc: "Our team is a wild mix of industry trailblazers, tech geeks, finance gurus, manufacturing mavens, retail rebels, healthcare heroes, entertainment enthusiasts, gaming fanatics, packaging & printing pundits and food aficionados. We've got it all covered! With a combined experience of over 200 years in the core team, we've seen it all, from the rise of the internet to the latest food trends. We've danced with technology, tamed financial dragons, cracked the code of efficient manufacturing, dazzled in the world of retail, healed the sick, entertained the masses, battled virtual foes, and savored the taste of success. Our diverse backgrounds and deep knowledge in these domains make us the ultimate dream team to tackle any challenge you throw at us."
    },
    {
      num: "2",
      title: "200+ years of experience in the core team",
      desc: "With a combined total of over 200 years of know-how, we've seen it all, done it all, and probably invented a few things along the way. From seasoned veterans who've weathered countless storms to fresh minds with a knack for innovation, our team is a powerhouse of expertise. We've got the battle scars and success stories to prove that we're not just here for the ride; we're here to make history. So rest assured, when you work with us, you're tapping into a wellspring of knowledge that's been honed and polished over the years. It's like having a time-traveling advisory dream team at your service."
    },
    {
      num: "3",
      title: "All of us know each other well",
      desc: "We're like a tight-knit family, with a bond that's stronger than super glue. Our teamwork is a well-oiled machine that runs smoother than a purring dream. We finish each other's sentences, read each other's minds, and bring out the best in one another. We're not just colleagues, we're partners in crime, ready to conquer any challenge that comes our way."
    },
    {
      num: "4",
      title: "Enough Said",
      desc: "Something you will see in our engagement approach. Unlike traditional consulting firms who generate copious amounts of mind-numbing documentation and bore you with snooze-inducing powerpoints and spreadsheets, we know when to stop talking!"
    }
  ];

  return (
    <section className="bg-[#01012C] text-white pt-20 pb-32 px-4 sm:px-6 border-t border-white/10">
      <div className="max-w-[1100px] mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-[#c8264f] text-4xl tracking-tight">Snapshot</h2>
          <div className="w-16 h-1 bg-[#c8264f] mx-auto mt-4" />
        </div>

        {/* 2-Column Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {snapshots.map((item) => (
            <div
              key={item.num}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex gap-5 items-start"
            >
              {/* Big Numeric Counter */}
              <span className="font-display text-4xl text-[#c8264f] leading-none pt-1 flex-shrink-0">
                {item.num}
              </span>

              {/* Content Text Blocks */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold tracking-wide text-white uppercase">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}