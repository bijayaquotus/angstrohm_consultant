import React from 'react';
import WorkshopHero from '../components/section/workshop2/WorkshopHero.jsx';
import WorkshopForm from '../components/section/workshop2/WorkshopForm.jsx';
import CourseLeader from '../components/section/workshop2/CourseLeader.jsx';
import Testimonial from '../components/section/workshop2/Testimonial.jsx';

export default function WorkshopPage() {
  const leaderParagraphs = [
    'Colin Whitehead combines military discipline with extensive corporate experience. Educated in British Military Schools, Colin joined the military at 17, where he honed his leadership skills.',
    "In his 30-year plus corporate career, Colin managed operations in 14 countries across Asia Pacific for a Fortune 500 company, negotiated the very first foreign majority owned joint venture in China. As a management consultant he spent several years restructuring and executing business turnarounds. He then co-founded Rentwise, a tech rental firm that attracted significant investment twice and was sold to UK billionaire Sir John Madejski. He was then the head of the Exclusive, Dynamic Macquarie Bank SAF division for SE Asia for twelve years.",
    'Colin is a corporate, personal and executive coach, training teams at Cisco, Macquarie Bank, and Zuellig Pharma among many others. With his deep experience in driven goal-setting and personal growth, Colin is dedicated to helping others achieve their full potential.',
  ];

  return (
    <main className="bg-white">
      <WorkshopHero
        title="Goal achievement : Unique, Intense one day goal achievement workshop"
        image="/workshop/ups-header-leadership-1-jpeg.webp"
      />

      <WorkshopForm />

      <CourseLeader
        image="/workshop/UPS_Colin_Main3.webp"
        name="Colin Whitehead"
        paragraphs={leaderParagraphs}
        readMoreTo="/about"
      />

      <Testimonial
        avatar="/workshop/Xavier-Suren.webp"
        name="Xavier Suren"
        role="APAC Regional Sales Head"
        rating={5}
        quote="Colin's mentoring transformed my career. His goal-setting process is straightforward, no nonsense and effective, and it's helped me achieve far more than I ever thought possible"
      />
    </main>
  );
}