import React from 'react';
import { Bot, BrainCircuit, Cpu, Monitor, Sparkles} from 'lucide-react';


import PageHero from '../components/section/services/ultimateperformancesolutions/Pagehero';
import IntroSplit from '../components/section/services/ultimateperformancesolutions/Introsplit';
import IconFeatureGrid from '../components/section/services/ultimateperformancesolutions/Iconfeaturegrid';
import TeamSpotlight from '../components/section/services/ultimateperformancesolutions/Teamspotlight';
import CalloutBox from '../components/section/services/ultimateperformancesolutions/Calloutbox';
import CtaBanner from '../components/section/services/ultimateperformancesolutions/Ctabanner';

const silverBullets = [
  {
    icon: BrainCircuit,
    title: 'Leadership & Life Coaching',
    description:
      "Mindset Makeover Bootcamp: Train your brain for success with expert-led sessions on positive thinking and resilience. Learn how to overcome obstacles and cultivate a mindset that sets you up for greatness.",
  },
  {
    icon: Bot,
    title: 'Two-Day AppliedNLP™ For Sales',
    description:
      "Unleash Your Potential Workshop: Dive into an interactive session where we uncover your unique strengths and talents. Through engaging activities and discussions, you'll gain insights into what makes you truly exceptional.",
  },
  {
    icon: Cpu,
    title: 'AppliedNLP™ For Business Certification',
    description:
      "Goal Setting Gala: Join us for a lively session where we map out your dreams and aspirations. With a mix of creativity and strategy, we'll help you create a roadmap to success that's as inspiring as it is effective.",
  },
];

const playbookItems = [
  {
    icon: BrainCircuit,
    title: 'Discover Your Superpowers',
    description:
      "Unleash Your Potential Workshop: Dive into an interactive session where we uncover your unique strengths and talents. Through engaging activities and discussions, you'll gain insights into what makes you truly exceptional.",
  },
  {
    icon: Cpu,
    title: 'Craft Your Master Plan',
    description:
      "Goal Setting Gala: Join us for a lively session where we map out your dreams and aspirations. With a mix of creativity and strategy, we'll help you create a roadmap to success that's as inspiring as it is effective.",
  },
  {
    icon: Bot,
    title: 'Power Up Your Mindset',
    description:
      "Mindset Makeover Bootcamp: Train your brain for success with expert-led sessions on positive thinking and resilience. Learn how to overcome obstacles and cultivate a mindset that sets you up for greatness.",
  },
  {
    icon: Monitor,
    title: 'Take Action Like A Boss',
    description:
      "Action Hero Training: Break down your goals into actionable steps and learn how to tackle them like a pro. With practical tips and strategies, you'll be empowered to turn your dreams into reality, one step at a time.",
  },
  {
    icon: Sparkles,
    title: 'Celebrate Your Success',
    description:
      "Success Soiree: Pop the champagne and celebrate your wins, big and small! Join us for a festive gathering where we applaud your achievements and toast to your future success.",
  },
];

const teamMembers = [
  { name: 'Manjeet Kaur', photo: '/ultimateperformancesolutions/ups_manjeet-5-401-2.png', facebook: '#', linkedin: '#' },
  { name: 'Colin Whitehead', photo: '/ultimateperformancesolutions/ups_colin-6-401.png', facebook: '#', linkedin: '#' },
];

export default function UltimatePerformance() {
  return (
    /* Changed bg-white to bg-[#f4f1ea] to perfectly blend with the header's background */
    <div className="bg-[#F4F1EA] text-slate-800 min-h-screen font-sans">
      

      <PageHero
        title="Ultimate Performance Solutions"
        subtitle="Leadership Coaching"
      />

      <IntroSplit
        eyebrow="Ultimate Performance"
        heading={
          <>
            Performance Improvement
            <br />
            from The Inside-Out!
          </>
        }
        paragraphs={[
          "Hey there, trailblazers and future leaders! Welcome to our world at UPS, where we're all about igniting your spark and helping you reach the stars! We've seen the demand for positive change skyrocket, and that's why we're here – to guide you on your journey to success with our strategic business development and leadership coaching.",
          "Picture this: You, stepping into your power, making bold moves, and achieving those goals you've been dreaming about. But hey, we're not just about work – we're about the whole package! Our personalized programmes aren't just about professional growth; they're about helping you live your best life, inside and out.",
          "At UPS, we believe in delivering results that last. That's why we focus on the inside out, using proven techniques and experienced facilitators to help you make real, sustainable changes in mindset and behavior. It's not just about reaching your goals; it's about transforming yourself along the way.",
          "So, if you're ready to unleash your full potential, let's team up and make magic happen! Whether you're a business leader, a manager ready to take the next step, or just someone with big dreams and the drive to achieve them, we're here to support you every step of the way. Together, we'll turn those dreams into reality – let's do this!",
        ]}
        ctaText="I want to be the best version of myself..."
      />

      <IconFeatureGrid title="The Silver Bullets" items={silverBullets} />

      <TeamSpotlight
        title="The Silver Hair"
        members={teamMembers}
        tagline="Let us help you start your Journey towards success and performance improvement"
        highlight="Journey"
      />

      <IconFeatureGrid title={<>&ldquo;Me&rdquo; 2.0 Playbook</>} items={playbookItems} />

      <CalloutBox
        label="Decision Time!"
        text="This playbook is just the beginning of your epic journey with UPS. Together, we'll unleash your full potential and help you achieve the success you deserve. Let's embark on this adventure together and make magic happen! Are you game?"
        ctaText="Mode Push...Mode Push..."
      />

      <CtaBanner
        title="Start a Project"
        description="Get the ball rolling by reaching out to us, and we'll set up a complimentary meeting to dive deep into your needs. No strings attached, just a friendly chat to ensure we're on the same wavelength!"
        ctaText="Schedule a free consultation"
      />

      
    </div>
  );
}