import React from 'react';
import { BrainCircuit, Cpu, Bot, Monitor, Sparkles } from 'lucide-react';

import PageHero from '../components/section/services/corporateservices/PageHero';
import IntroSplit from '../components/section/services/corporateservices/IntroSplit';
import IconFeatureGrid from '../components/section/services/corporateservices/IconFeatureGrid';
import CalloutBox from '../components/section/services/corporateservices/CalloutBox';
import CtaBanner from '../components/section/services/corporateservices/CtaBanner';

const painPlaybook = [
  {
    icon: BrainCircuit,
    title: 'Launchpad',
    description:
      "In this first step, we'll help you navigate the thrilling launchpad of company registration. Our expert team will guide you through the process, ensuring all the necessary paperwork and legal requirements are taken care of. Consider us your trusted co-pilots, ready to help you take off and establish your business with ease.",
  },
  {
    icon: Cpu,
    title: 'Compliance Codebusters',
    description:
      "Cracking the compliance code can be a challenging task, but fear not! Our Compliance Codebusters are here to save the day. We'll unravel the complexities of statutory body registrations, ensuring your business is in full compliance. From understanding regulations to completing necessary documentation, we'll guide you through the maze and make compliance a breeze.",
  },
  {
    icon: Bot,
    title: 'Accounting Avengers',
    description:
      "Managing accounting and payroll can be a daunting task, but our Accounting Avengers are ready to swoop in and save the day. We'll streamline your financial processes, ensuring accuracy, efficiency, and compliance. Leave the number crunching to us, so you can focus on growing your business and achieving your goals.",
  },
  {
    icon: Monitor,
    title: 'Guardians of Intellectual Property',
    description:
      "Your intellectual property is valuable, and our Guardians are dedicated to its protection and preservation. We'll help you navigate the complex world of intellectual property rights, trademarks, copyrights, and patents. Our team will work tirelessly to safeguard your innovative ideas, ensuring your business remains at the forefront of its industry.",
  },
  {
    icon: Sparkles,
    title: 'Success Story Architects',
    description:
      "Our journey doesn't end with the completion of essential corporate services. As Success Story Architects, we're committed to your ongoing support and growth. We'll be by your side, providing expert advice, strategic guidance, and continuous assistance as you navigate the dynamic corporate landscape. Together, we'll build a solid foundation for your success and shape your business into a true industry leader.",
  },
];

export default function CorporateServices() {
  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
     

      <PageHero title="Corporate Services" />

      <IntroSplit
        eyebrow="Corporate Services"
        heading={
          <>
            We&rsquo;ve got your back, on all
            <br />
            things Corporate!
          </>
        }
        paragraphs={[
          "Need to conquer the maze of paperwork and register your company? We'll be your fearless guide, slashing through red tape like it's nobody's business. Facing the challenge of Statutory Body registrations? We'll crack the code and ensure compliance is a piece of cake. From managing your accounting and payroll needs to providing top-notch Legal services and protecting your valuable Intellectual Property, we've got the superpowers to handle it all.",
          "At Angstrohm Consulting, we're your one-stop-shop for all things corporate. Think of us as your trusty sidekick, equipped with superpowers to tackle the administrative challenges that come your way. We'll take those mundane tasks and turn them into a thrilling adventure. No need to fear the corporate chaos when we're around!",
          "So, whether you're starting a new venture or looking to level up your existing business, let us be your guiding light. We'll navigate the twists and turns of corporate services, making sure you're always one step ahead. Get ready to unlock a world of possibilities with our fun, reliable, and oh-so-magical corporate services. Embrace the excitement and leave the paperwork woes behind. Together, we'll conquer the corporate realm and write your success story in dazzling ink!",
        ]}
        ctaText="I don't like red tape! Show me the light..."
      />

      <IconFeatureGrid title={<>&ldquo;Take away your pain&rdquo; Playbook</>} items={painPlaybook} />

      <CalloutBox
        label="Decision Time!"
        text="Are you ready to buckle up and embark on an exhilarating adventure? From company registration to statutory compliance, accounting to intellectual property protection, and beyond, our five-step methodology is designed to equip your business for success. Are you ready?"
        ctaText="I'm buckled up and ready..."
      />

      <CtaBanner
        eyebrow="Corporate Services"
        title="Start a Project"
        description="Get the ball rolling by reaching out to us, and we'll set up a complimentary meeting to dive deep into your needs. No strings attached, just a friendly chat to ensure we're on the same wavelength!"
        ctaText="Schedule a free consultation"
      />

      
    </div>
  );
}