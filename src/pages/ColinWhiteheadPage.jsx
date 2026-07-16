import React from 'react';
import ProfileHero from '../components/section/team/ProfileHero.jsx';
import BiographyContent from '../components/section/team/BiographyContent.jsx';

export default function ColinWhiteheadPage() {
  const paragraphs = [
    `After leaving a long term planned military career due to injury, I had to quickly direct what continues to this day to be a high level of energy in a new direction. Highlights of my professional career include, General management, business turnarounds and sustainable re-structuring. During my time as the Regional Manager for Dresser Industries (now Halliburton) from 1990 until 1997 I was overseeing operations in fourteen countries spreading geographically from India to Japan to New Zealand. A highlight of this role was in 1994 negotiating and executing operations for the first foreign majority owned Oil and Gas Joint venture in China during the period before full foreign ownership was allowed. This successful JV is still in operation to this day.`,
    `In 1997 I became a management consultant working on business turn arounds in China and primarily for venture capital invested companies. In 2002 I co-founded and became the CEO of Rentwise a position I held until I transitioned co-founder Leanne Ooi into the CEO role a position she still holds. In 2004 I was able to give the initial VC an attractive exit by gaining significant funding from the UK billionaire John Madejski (ReadingFC / Motortrader etc). This has allowed Rentwise to become arguably SE Asia's fastest growing privately owned technology rental company.`,
    <>
      From 2010 until 2022 (with an 18 month break in 2015) I was the Country
      then SE Head for Macquarie Banks Specialised and Asset finance division
      building a significant business in a short period of time. I also
      operated as a Vistage Chair. Vistage is the World's Largest CEO network
      organisation and provides professionally facilitated, private advisory
      groups for CEO's, executives and business owners. Each group is
      facilitated by a Chair that oversees a peer group of up to 16 CEO's and
      Business Leaders.{' '}
      <a
        href="https://www.vistage.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#6213e0] hover:underline"
      >
        www.vistage.com
      </a>
    </>,
    `I have always been fascinated by motivation and what specifically motivates Individuals to set and achieve goals (myself included). Aside from my professional life I am a lifelong martial artist and practice on a daily basis. In the late 1970's and 80's I competed internationally in full contact tournaments. (My background is as a Goju Ryu Karate and Military Krav Maga Instructor). Additionally I have Diplomas in Sports Psychology, Neuro linguistic Psychology (Masters) and during the Covid Pandemic I took the time to complete two further diplomas with the National Academy of Sports Medicine in corrective exercise and senior fitness.`,
    `Since October 2022 I have been focused on building mine and my wife's coaching and training business. My style of coaching I believe is somewhat unique given my unusual background. Our corporate training programmes are AppliedNLP based and delivered using our three decades of personal experience. We live and work between our Mediterranean home in Cyprus and Kuala Lumpur. These programmes have been delivered over the past 15 years to multiple companies in Asia and include F500 companies such as Macquarie Bank, Cisco, AVON, Zuellig Pharma, CSC and local entities such as InvestKL, Sunway, Rentwise, CSI ETC.`,
  ];

  const facts = [
    { label: 'Speciality', value: 'Maximising Performance' },
    { label: 'Business Experience', value: '35 Years' },
  ];

  return (
    <main className="bg-white">
      <ProfileHero
        name="Colin Whitehead"
        title="Managing Partner"
        image="/workshop/UPS-Colin-Profile3.png"
      />
      <BiographyContent paragraphs={paragraphs} facts={facts} />
    </main>
  );
}