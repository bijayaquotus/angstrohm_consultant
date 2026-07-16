import React from 'react';
import SuperheroesHero from '../components/section/superheroes/SuperheroesHero';
import SuperheroesSnapshot from '../components/section/superheroes/SuperheroesSnapshot';
import StartProject from '../components/section/home/StartProject'; // Reuse the cta banner component if you have it!

export default function SuperheroesPage() {
  return (
    <div className="superheroes-page bg-[#07061f]">
      <SuperheroesHero />
      <SuperheroesSnapshot />
      
      {/* Renders the "Start a Project" banner box shown at the bottom of the layout */}
      {StartProject && <StartProject />} 
    </div>
  );
}