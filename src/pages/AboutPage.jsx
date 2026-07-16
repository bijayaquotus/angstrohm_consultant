import React from "react";
import AboutStory from "../components/section/aboutus/AboutStory";
import AboutPillars from "../components/section/aboutus/AboutPillars";

export default function AboutPage() {
  return (
    <div className="AboutPage bg-white">
      <AboutStory />
      <AboutPillars />
    </div>
  );
}