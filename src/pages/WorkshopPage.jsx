import React from 'react';

import WorkshopHero from '../components/section/workshop/WorkshopHero';
import WorkshopIntro from '../components/section/workshop/WorkshopIntro';
import WorkshopHighlights from '../components/section/workshop/WorkshopHighlights';
import CourseLeader from '../components/section/workshop/CourseLeader';
import RegistrationBanner from '../components/section/workshop/RegistrationBanner';
import Testimonials from '../components/section/workshop/Testimonials';


const WorkshopPage = () => {
  // Centralized workshop details to pass as props if needed dynamically
  const workshopDetails = {
    title: "Goal achievement : Unique, Intense one day goal achievement workshop",
    date: "Saturday, 16 November 2024",
    time: "9AM - 5PM 2024",
    venue: "ROYALE CHULAN, the curve",
    price: "RM980",
    promoPrice: "RM 784",
    deadline: "Oct 28, 2024"
  };

  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      <WorkshopHero data={workshopDetails} />
      <WorkshopIntro />
      <WorkshopHighlights />
      <CourseLeader />
      <RegistrationBanner data={workshopDetails} isBottom={true} />
      <Testimonials />
      
    </div>
  );
};

export default WorkshopPage;