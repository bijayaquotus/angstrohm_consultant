import React from 'react';
import { BrainCircuit, Cpu, Bot, Monitor, Sparkles } from 'lucide-react';


import PageHero from '../components/section/services/corporategovernance/PageHero';
import IntroSplit from '../components/section/services/corporategovernance/IntroSplit';
import IconFeatureGrid from '../components/section/services/corporategovernance/IconFeatureGrid';
import CalloutBox from '../components/section/services/corporategovernance/CalloutBox';
import CtaBanner from '../components/section/services/corporategovernance/CtaBanner';

const governancePlan = [
  {
    icon: BrainCircuit,
    title: 'Governance Galore',
    description:
      "We kick off the adventure by diving into the world of governance galore. We'll assess your current governance practices, identify areas of improvement, and lay the groundwork for a robust governance framework that will keep your business sailing smoothly.",
  },
  {
    icon: Cpu,
    title: 'Risk Rodeo',
    description:
      "Hold on tight as we wrangle with risks in the Risk Rodeo! We'll conduct thorough risk assessments, analyze potential threats, and lasso them with effective risk mitigation strategies. Our aim is to help you tame the risk beasts and ensure a secure environment for your business.",
  },
  {
    icon: Bot,
    title: 'Compliance Circus',
    description:
      "Get ready for a wild and entertaining Compliance Circus! We'll navigate the regulatory tightrope, juggle compliance requirements, and perform awe-inspiring acts of adherence. From policies and procedures to training and audits, we'll make compliance a showstopper.",
  },
  {
    icon: Monitor,
    title: 'Superhero Support',
    description:
      "Every adventure needs a superhero squad, and we're here to be your Governance and Compliance Superheroes! Our team of experts will provide ongoing support, serving as your trusted sidekicks in addressing governance and compliance challenges. Together, we'll save the day and keep your business on the path of ethical excellence.",
  },
  {
    icon: Sparkles,
    title: 'Celebration and Continuity',
    description:
      "Once we've conquered the governance and compliance landscape, it's time to celebrate the victories and ensure continuity. We'll raise a toast to your achievements, conduct periodic assessments to maintain compliance momentum, and keep your governance practices up-to-date as regulations evolve.",
  },
];

export default function CorporateGovernance() {
  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
      

      <PageHero title="CORPORATE GOVERNANCE | RISK & COMPLIANCE" />

      <IntroSplit
        eyebrow="Corporate Governance | Risk & Compliance"
        heading={
          <>
            Peace of Mind.
            <br />
            Small piece of wallet!
          </>
        }
        paragraphs={[
          "Welcome to the thrilling world of corporate governance and risk & compliance, where we don't just dot the i's and cross the t's, we bring the party to compliance! At Angstrohm Consulting, we're here to turn the often-dreaded realm of rules and regulations into a captivating adventure that will leave you feeling empowered and protected.",
          "Picture this: a corporate governance journey where you're not shackled by red tape, but guided by a team of compliance superheroes who know how to have a good time. We'll help you navigate the treacherous waters of regulatory requirements with a skip in your step and a smile on your face. From boardroom acrobatics to compliance magic tricks, we'll ensure your corporate governance practices are top-notch and your risk management is nothing short of legendary.",
          "But wait, there's more! We believe that compliance shouldn't be a snooze-fest. That's why we bring a fun and engaging approach to the table. Our team of compliance connoisseurs will make sure your compliance program is as exciting as a rollercoaster ride. We'll transform mind-numbing policies into interactive experiences, inject humor into training sessions, and turn risk assessments into thrilling quests.",
          "So, are you ready to join the corporate governance party? Say goodbye to the days of stuffy compliance officers and hello to a world where compliance and risk management are synonymous with excitement and innovation. Let's embark on this adventure together, where compliance meets fun and risk management becomes a piece of cake. Get ready to dance through the world of corporate governance and risk & compliance like nobody's watching. The party starts now!",
        ]}
        ctaText="I can't sleep at night. I want to know more..."
      />

      <IconFeatureGrid title="The Governance Game Plan" items={governancePlan} />

      <CalloutBox
        label="Decision Time!"
        text="So, are you ready to embark on a Corporate Governance and Risk & Compliance adventure like no other? Let's embrace the governance galore, ride the risk rodeo, marvel at the compliance circus, and unleash the power of superhero support. It's time to elevate your governance and compliance practices to new heights, ensuring a strong foundation for your business success!"
        ctaText="We need superheroes. Fly them in..."
      />

      <CtaBanner
        title="Start a Project"
        description="Get the ball rolling by reaching out to us, and we'll set up a complimentary meeting to dive deep into your needs. No strings attached, just a friendly chat to ensure we're on the same wavelength!"
        ctaText="Schedule a free consultation"
      />

      
    </div>
  );
}