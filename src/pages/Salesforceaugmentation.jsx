import React from 'react';
import { BrainCircuit, Cpu, Bot, Monitor, Sparkles } from 'lucide-react';


import PageHero from '../components/section/services/salesforceaugmentation/Pagehero';
import IntroSplit from '../components/section/services/salesforceaugmentation/Introsplit';
import IconFeatureGrid from '../components/section/services/salesforceaugmentation/Iconfeaturegrid';
import CalloutBox from '../components/section/services/salesforceaugmentation/Calloutbox';
import CtaBanner from '../components/section/services/salesforceaugmentation/Ctabanner';

const expansionPlaybook = [
  {
    icon: BrainCircuit,
    title: 'Superhero Assessment',
    description:
      "We'll swoop in and assess your sales force like caped crusaders, identifying strengths, weaknesses, and areas for improvement. It's time to unleash the sales superheroes within your team!",
  },
  {
    icon: Cpu,
    title: 'Power-Up Training',
    description:
      "Get ready for an intense training montage where we'll equip your sales force with supercharged skills, techniques, and strategies. We'll turn them into a force to be reckoned with, armed with the tools they need to conquer any sales challenge!",
  },
  {
    icon: Bot,
    title: 'Sidekick Support',
    description:
      "Our team of sales sidekicks will be by your side, providing ongoing support, guidance, and motivation. Think of us as your trusty wingmen, ready to tackle any sales battle together!",
  },
  {
    icon: Monitor,
    title: 'Dynamic Duos',
    description:
      "We'll match your sales force with the perfect dynamic duos, pairing them up with our seasoned sales experts. Together, they'll form unstoppable alliances, leveraging their combined powers to achieve extraordinary sales results.",
  },
  {
    icon: Sparkles,
    title: 'Epic Victories',
    description:
      "Prepare for epic victories as your sales force soars to new heights. With our augmented sales force methodology, you'll witness incredible sales growth, conquering targets, and leaving your competitors in awe.",
  },
];

export default function SalesForceAugmentation() {
  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
      

      <PageHero title="Sales Force Augmentation" />

      <IntroSplit
        eyebrow="Sales Force Augmentation"
        heading="Sales Force, not Farce!"
        paragraphs={[
          "Welcome to the Sales Force Augmentation revolution, where we supercharge your sales team to achieve extraordinary results! At Angstrohm Consulting, we understand that building a high-performing sales force is no easy feat. That's why we're here to provide you with the secret sauce that will take your sales team from ordinary to extraordinary.",
          "Imagine a sales force that's unstoppable, armed with the perfect blend of talent, expertise, and enthusiasm. With our Sales Force Augmentation services, we'll turbocharge your team with top-notch professionals who are ready to hit the ground running. Whether you need additional sales representatives, specialized industry knowledge, or a strategic sales leader, we've got you covered.",
          "But we're not just about filling the gaps in your team. We're about igniting a sales revolution. Our augmentation experts will work closely with you to understand your unique sales goals, challenges, and culture. We'll handpick the perfect additions to your team, ensuring a seamless integration and a powerhouse of sales prowess.",
          "Prepare to witness your sales numbers skyrocket as our augmented team brings their A-game to the table. With their expertise and our proven strategies, your sales force will become an unstoppable force in the market. Together, we'll conquer new territories, shatter sales records, and leave your competitors in awe.",
          "So, are you ready to experience the sales force of your dreams? Let's join forces and take your sales game to new heights. Say goodbye to sales struggles and hello to a sales force that's ready to dominate. The revolution starts now, and we're here to make your sales dreams a reality. Get ready to witness the power of Sales Force Augmentation in action!",
        ]}
        ctaText="Show me the money..."
      />

      <IconFeatureGrid title="The Expansion Playbook" items={expansionPlaybook} />

      <CalloutBox
        label="Decision Time!"
        text="Are you prepared to assemble the ultimate sales force dream team and unleash their true potential? Are you ready to put the “super” back in sales and achieve sales greatness like never before? Get ready to embark on an epic journey of transforming your sales force into an unstoppable powerhouse. Will you seize this opportunity to take your sales to unprecedented heights?"
        ctaText="Ka-ching ka-ching ka-ching..."
      />

      <CtaBanner
        eyebrow="Sales Force Augmentation"
        title="Start a Project"
        description="Get the ball rolling by reaching out to us, and we'll set up a complimentary meeting to dive deep into your needs. No strings attached, just a friendly chat to ensure we're on the same wavelength!"
        ctaText="Schedule a free consultation"
      />

      
    </div>
  );
}