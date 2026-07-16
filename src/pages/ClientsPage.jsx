import React from 'react';
import ClientsHero from '../components/section/clients/ClientsHero';
import ClientsCTA from '../components/section/clients/ClientsCTA';

export default function ClientsPage() {
  return (
    <div className="clients-page bg-[#07061f]">
      <ClientsHero />
      <ClientsCTA />
    </div>
  );
}