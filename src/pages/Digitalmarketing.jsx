import React from 'react';
import { BrainCircuit, Cpu, Bot, Monitor, Sparkles } from 'lucide-react';

import PageHero from '../components/section/services/digitalmarketingservices/Pagehero';
import IntroSplit from '../components/section/services/digitalmarketingservices/Introsplit';
import IconFeatureGrid from '../components/section/services/digitalmarketingservices/Iconfeaturegrid';
import CalloutBox from '../components/section/services/digitalmarketingservices/Calloutbox';
import CtaBanner from '../components/section/services/digitalmarketingservices/Ctabanner';

const mojoMethod = [
  {
    icon: BrainCircuit,
    title: 'Discovery Dash',
    description:
      "In the first step of our exhilarating digital marketing journey, we embark on a Discovery Dash. We'll dive deep into your business, target audience, and goals to uncover valuable insights. By understanding your unique value proposition and market landscape, we lay the groundwork for a powerful digital marketing strategy.",
  },
  {
    icon: Cpu,
    title: 'Creative Frenzy',
    description:
      "Get ready to unleash your creativity! In this step, we enter the realm of the Creative Frenzy. Our team of imaginative masterminds will craft compelling content, captivating visuals, and engaging campaigns. From brainstorming wild ideas to designing eye-catching visuals, we'll ensure your digital presence stands out from the crowd.",
  },
  {
    icon: Bot,
    title: 'Campaign Launchpad',
    description:
      "Blast off to success with our Campaign Launchpad! We'll carefully plan and execute your digital marketing campaigns across various channels. Whether it's social media, search engines, or email marketing, we'll set the stage for maximum impact. Buckle up as we launch your campaigns into the digital stratosphere.",
  },
  {
    icon: Monitor,
    title: 'Analytics Playground',
    description:
      "Welcome to the Analytics Playground, where data reigns supreme! We'll dive deep into the performance metrics and analytics to gain valuable insights. By monitoring campaign effectiveness, website traffic, and user behavior, we'll make data-driven decisions to optimize your digital marketing efforts. Get ready to unravel the secrets hidden within the numbers.",
  },
  {
    icon: Sparkles,
    title: 'Growth Accelerator',
    description:
      "In the final step, we become your Growth Accelerator. We'll continuously refine and optimize your digital marketing strategies to drive sustainable growth. From identifying new opportunities to adapting to market trends, we'll ensure your digital presence keeps evolving. Together, we'll propel your business forward and achieve remarkable results.",
  },
];

export default function DigitalMarketing() {
  return (
    <div className="bg-[#f4f1ea] text-slate-800 min-h-screen font-sans">
      

      <PageHero title="Digital Marketing Services" />

      <IntroSplit
        eyebrow="Digital Marketing"
        heading={
          <>
            Maximum Impact with Zero
            <br />
            Pills!
          </>
        }
        paragraphs={[
          "Welcome to the digital playground where creativity meets strategy and sparks fly! At Angstrohm Consulting, we're passionate about all things digital marketing, and we're here to unleash a digital storm that will electrify your brand and take your online presence to new heights.",
          "In the fast-paced world of digital marketing, standing out from the crowd is no easy feat. But fear not, brave adventurer, because our team of digital maestros is armed with the skills, expertise, and a pinch of pixie dust to make your brand shine like never before. From captivating social media campaigns to dazzling search engine optimization, we'll craft a digital marketing strategy that's tailored to your unique needs, goals, and budget.",
          "Get ready to ride the waves of viral content, engage with your audience like a pro, and conquer the digital realms with our powerful digital marketing services. We'll dive deep into the digital ocean, uncovering hidden opportunities, and surfacing with innovative ideas that will make your competitors green with envy.",
          "But we're not just about fancy tactics and flashy campaigns. We believe in measurable results and tangible business growth. With our data-driven approach, we'll track, analyze, and optimize your digital marketing efforts, ensuring every penny you invest generates a wave of returns. Say goodbye to wasted ad spend and hello to a digital marketing strategy that's as efficient as it is effective.",
          "So, are you ready to make some digital waves? Join us on this thrilling digital marketing adventure, where creativity, strategy, and a touch of magic collide. Together, let's unlock the full potential of your brand and make your digital presence an unstoppable force to be reckoned with. Get ready to conquer the digital world, one click at a time!",
        ]}
        ctaText="No pills for me! Show me how..."
      />

      <IconFeatureGrid title="Marketing Mojo Method" items={mojoMethod} />

      <CalloutBox
        label="Decision Time!"
        text="From uncovering hidden treasures in the discovery phase to unleashing your creative superpowers, crafting jaw-dropping campaigns, diving into the data playground, and accelerating your growth to new heights, we'll be your dynamic sidekick every step of the way. Can you imagine the thrill of harnessing the power of digital marketing to transform your business into an epic digital success story? Get ready to unleash the digital marketing beast within and let the magic unfold! So, are you in for an exhilarating ride?"
        ctaText="This is bad*ss. I want it now..."
      />

      <CtaBanner
        title="Start a Project"
        description="Get the ball rolling by reaching out to us, and we'll set up a complimentary meeting to dive deep into your needs. No strings attached, just a friendly chat to ensure we're on the same wavelength!"
        ctaText="Schedule a free consultation"
      />

      
    </div>
  );
}