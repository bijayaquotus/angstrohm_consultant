import React from 'react';
import { BrainCircuit, Cpu, Bot, Monitor, Sparkles } from 'lucide-react';


import PageHero from '../components/section/services/digitaltransformationservices/Pagehero';
import IntroSplit from '../components/section/services/digitaltransformationservices/Introsplit';
import IconFeatureGrid from '../components/section/services/digitaltransformationservices/Iconfeaturegrid';
import CalloutBox from '../components/section/services/digitaltransformationservices/Calloutbox';
import CtaBanner from '../components/section/services/digitaltransformationservices/Ctabanner';

const danceMoves = [
  {
    icon: BrainCircuit,
    title: 'Digital Discovery',
    description:
      "We kick off the digital transformation journey by diving deep into your business to uncover hidden opportunities and challenges. Through extensive research and analysis, we identify areas where digitalization can revolutionize your operations, customer experience, and overall business growth.",
  },
  {
    icon: Cpu,
    title: 'Strategy Stratosphere',
    description:
      "With the insights gained from our discovery phase, we ascend to the strategy stratosphere. We develop a customized roadmap that outlines clear goals, objectives, and a comprehensive digital strategy to guide your transformation journey. This includes defining target audiences, selecting the right digital channels, and designing compelling user experiences.",
  },
  {
    icon: Bot,
    title: 'Techno Turbocharge',
    description:
      "Now it's time to rev up the digital engines! We assist you in implementing cutting-edge technologies and platforms to optimize your business processes, streamline operations, and enhance collaboration. Whether it's adopting cloud solutions, leveraging automation tools, or integrating data analytics, we ensure you're equipped with the right tech firepower.",
  },
  {
    icon: Monitor,
    title: 'Cultural Catalyst',
    description:
      "Transforming an organization goes beyond technology—it's about fostering a digital-first culture. We work alongside your teams to ignite a digital mindset, promoting innovation, collaboration, and agility. Through engaging workshops, training programs, and change management initiatives, we empower your workforce to embrace the digital revolution.",
  },
  {
    icon: Sparkles,
    title: 'Success Soar',
    description:
      "The final step is all about soaring to new heights of success. We continuously monitor and optimize your digital initiatives, measuring key performance indicators and refining strategies to maximize your return on investment. Our team remains by your side, providing ongoing support, insights, and innovative ideas to keep your digital transformation journey thriving.",
  },
];

export default function DigitalTransformation() {
  return (
    <div className="bg-[#f4f7f6] text-slate-800 min-h-screen font-sans">
      

      <PageHero title="Digital Transformation Services" />

      <IntroSplit
        eyebrow="Transform"
        heading={
          <>
            Transform Your IT without
            <br />
            Breaking the Bank!
          </>
        }
        paragraphs={[
          "Welcome to our digital wonderland, where we're on a mission to revolutionize your business from top hat to digital toes! At Angstrohm Consulting, we're masters of the digital realm, and our passion lies in helping businesses like yours embrace the winds of change and embark on a transformational journey like no other.",
          "Picture this: your business soaring through the digital skies, leaving your competition in a trail of pixelated dust. With our digital transformation services, we'll equip you with the tools, strategies, and secret digital potions to unlock your true digital potential. From streamlining your processes to optimizing your online presence, we'll sprinkle that digital magic that'll have your customers spellbound and your rivals green with envy.",
          "But wait, there's more! Our team of digital wizards will guide you every step of the way, holding your hand as we navigate the vast landscapes of digital disruption. We'll assess your current digital landscape, identify areas for improvement, and craft a tailored roadmap that'll lead you to digital glory. Whether it's embracing cutting-edge technologies, revolutionizing your customer experience, or harnessing the power of data, we've got the spells to make it happen.",
          "So, are you ready to embrace the digital revolution? Join us on this electrifying adventure, where together, we'll turn your business into a digital powerhouse that'll leave a lasting mark on the digital cosmos. The future is calling, and it's time to answer with a resounding \"Yes!\" Let's dive headfirst into the digital deep end and make waves that'll be felt across the digital universe!",
        ]}
        ctaText="Transform my tech wasteland to a digital wonderland...."
      />

      <IconFeatureGrid title="Digital Transformation Dance Moves" items={danceMoves} />

      <CalloutBox
        label="Decision Time!"
        text="Are you ready to release the digital beast within your organization and create a digital culture that grooves to the beat of collaboration and adaptability? If you're up for the challenge, let's jump into this mind-blowing journey together and unleash the full power of your business in the digital wonderland. Get ready to dance to the rhythm of transformation and embrace a world of endless possibilities in the digital realm. It's time to rock and roll your way to digital success! Ready?"
        ctaText="♪ Let's get digital, digital ♪"
      />

      <CtaBanner
        eyebrow="Transform"
        title="Start a Project"
        description="Get the ball rolling by reaching out to us, and we'll set up a complimentary meeting to dive deep into your needs. No strings attached, just a friendly chat to ensure we're on the same wavelength!"
        ctaText="Schedule a free consultation"
      />

      
    </div>
  );
}