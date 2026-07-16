import React from 'react';
import LegalHero from '../components/section/legal/LegalHero.jsx';
import TermsContent from '../components/section/legal/TermsContent.jsx';

export default function TermsOfUsePage() {
  return (
    <main className="bg-white">
      <LegalHero title="Terms of Use" />
      <TermsContent />
    </main>
  );
}