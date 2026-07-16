import React from "react";
import ContactHero from "../components/section/contactus/ContactHero";
import ContactForm from "../components/section/contactus/ContactForm";
import ContactFAQ from "../components/section/contactus/ContactFAQ";

export default function ContactPage() {
  return (
    <main className="bg-[#F4F1EA] min-h-screen pb-20">
      {/* 1. Full-width Top Banner */}
      <ContactHero />

      {/* 2. Side-by-Side Content Grid Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Side Column */}
          <div className="w-full [&>section]:max-w-none [&>section]:rounded-2xl [&>section]:shadow-xl">
            <ContactFAQ />
          </div>

          {/* Right Side Column */}
          <div className="w-full [&>section]:max-w-none [&>section]:mt-0">
            <ContactForm />
          </div>

        </div>
      </div>
    </main>
  );
}