import React from 'react';
import LegalHero from '../components/section/legal/LegalHero.jsx';
import PrivacyContent from '../components/section/legal/PrivacyContent.jsx';

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <LegalHero title="Privacy Policy" />
      <PrivacyContent />
    </main>
  );
}