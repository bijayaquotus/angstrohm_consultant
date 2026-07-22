import React from 'react';
import { BrainCircuit, Cpu, Bot, Monitor, Sparkles } from 'lucide-react';


import PageHero from '../components/section/services/businessexpansionservices/Pagehero';
import IntroSplit from '../components/section/services/businessexpansionservices/Introsplit';
import IconFeatureGrid from '../components/section/services/businessexpansionservices/Iconfeaturegrid';
import CalloutBox from '../components/section/services/businessexpansionservices/Calloutbox';
import CtaBanner from '../components/section/services/businessexpansionservices/Ctabanner';

const expansionPlaybook = [
  {
    icon: BrainCircuit,
    title: 'Dream Big and Brew Brilliance',
    description:
      "We start by unleashing your imagination and brewing up brilliant ideas. We'll dive into your business goals, analyze market opportunities, and stir up a concoction of creative strategies to expand your horizons.",
  },
  {
    icon: Cpu,
    title: 'Plot the Adventure Map',
    description:
      "Once we've brewed the perfect blend of ideas, it's time to plot the adventure map. We'll chart out a detailed plan, identifying target markets, assessing competition, and outlining the key steps to take your business to new frontiers.",
  },
  {
    icon: Bot,
    title: 'Gather the Adventure Squad',
    description:
      "No adventure is complete without a fearless and capable squad. We'll assemble a team of experts, each bringing their unique skills and expertise to the table. From market researchers to legal whizzes, we've got the dream team to make your business expansion a roaring success.",
  },
  {
    icon: Monitor,
    title: 'Execute with Flair',
    description:
      "With the adventure map in hand and the squad ready for action, it's time to execute with flair! We'll guide you through the process of market entry, navigating challenges, and seizing opportunities along the way. From setting up local operations to crafting winning marketing campaigns, we'll ensure your business expansion is a journey worth remembering.",
  },
  {
    icon: Sparkles,
    title: 'Celebrate the Triumph',
    description:
      "Finally, it's time to celebrate the triumph of your business expansion! We'll raise a toast to your success, evaluate the outcomes, and identify areas for continuous growth. Our goal is not just to help you expand, but to ensure long-term success and sustainability in your new markets.",
  },
];

export default function BusinessExpansion() {
  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
     

      <PageHero title="Business Expansion Services" />

      <IntroSplit
        eyebrow="Expansion"
        heading={
          <>
            Grow your business minus
            <br />
            the cardiac problems!
          </>
        }
        paragraphs={[
          "Hold onto your hats and prepare for a wild ride through the treacherous world of market expansion horror stories! We've all heard those spine-chilling tales of companies that thought they had it all figured out, only to be haunted by their own boneheaded mistakes. But fear not, brave souls, because we're about to unveil the secret to avoiding these frightful fiascos!",
          "Picture this: companies venturing into new markets armed with nothing but poor planning, misguided strategies, and the delusion that they can just copy-paste everything from their HQ country. They fail to grasp the unique culture and laws of the land, like tourists without a map. And if that wasn't enough, they ship in their HQ staff en masse, completely ignoring the local talent pool. Yikes!",
          "The result? A terrifying cascade of legal and regulatory nightmares, compliance conundrums, HR horrors, and the wrath of statutory bodies raining down upon them like a plague of vengeful spirits. As if that weren't spooky enough, the damage to their reputation and finances will haunt them for eternity. If only there was a way to make it easier, right?",
          "Well, hold onto your broomsticks, because guess what? There is! We've got the spellbinding solution you've been dreaming of. With our expert guidance, you can navigate the treacherous seas of market expansion with confidence and ease. We'll equip you with the magical knowledge to understand local laws and cultures, summon the perfect blend of global and local talent, and protect you from those ghastly legal and compliance monsters.",
          "No more nightmares or haunted hallways for you! Together, we'll steer clear of disaster, saving you from the ghostly grip of reputational damage and financial woes. So, gather 'round, fearless adventurers, because the easier way is right here, waiting for you. Get ready to conquer new markets like true business sorcerers and leave those horror stories in the dust. It's time to make your expansion journey a thrilling tale of success!",
        ]}
        ctaText="Save my heart! Show me the way..."
      />

      <IconFeatureGrid title="The Expansion Playbook" items={expansionPlaybook} />

      <CalloutBox
        label="Decision Time!"
        text="So, are you ready for the grand adventure of business expansion? Let's strap on our boots, map out the route, gather the squad, and embark on a journey that will take your business to thrilling new heights!"
        ctaText="I love adventures! Let's go!"
      />

      <CtaBanner
        eyebrow="Expansion"
        title="Start a Project"
        description="Get the ball rolling by reaching out to us, and we'll set up a complimentary meeting to dive deep into your needs. No strings attached, just a friendly chat to ensure we're on the same wavelength!"
        ctaText="Schedule a free consultation"
      />

      
    </div>
  );
}