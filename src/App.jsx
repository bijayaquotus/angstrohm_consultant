import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import Home from "./pages/Home.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ClientsPage from "./pages/ClientsPage.jsx";
import SuperheroesPage from "./pages/SuperheroesPage.jsx";
// import WorkshopPage from "./pages/WorkshopPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Ultimateperformance from "./pages/Ultimateperformance.jsx";
import BusinessExpansion from "./pages/Businessexpansion.jsx";
import DigitalTransformation from "./pages/Digitaltransformation.jsx";
import DigitalMarketing from "./pages/Digitalmarketing.jsx";
import CorporateGovernance from "./pages/CorporateGovernance.jsx"
import Salesforceaugmentation from "./pages/Salesforceaugmentation.jsx";
import Corporateservices from "./pages/Corporateservices.jsx";
import TermsOfUsePage from "./pages/TermsOfUsePage.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import Colinwhiteheadpage from "./pages/ColinWhiteheadPage.jsx";
// import WorkshopPage2 from "./pages/WorkshopPage2.jsx"; // Import the new WorkshopPage2 component

// Small sub-component that handles resetting scroll position on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use "instant" or "auto" to prevent awkward sliding animations while elements load
    });
  }, [pathname]); // Fires every single time the URL path changes

  return null;
}

export default function App() {
  return (
    <Router>
      {/* Placed inside the Router so it has access to the navigation history hook */}
      <ScrollToTop />
      
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/client" element={<ClientsPage />} />
          <Route path="/superheroes" element={<SuperheroesPage />} />
          {/* <Route path="/workshop" element={<WorkshopPage />} /> */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ultimateperformance" element={<Ultimateperformance />} />
          <Route path="/businessexpansion" element={<BusinessExpansion />} />
          <Route path="/digitaltransformation" element={<DigitalTransformation />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/corporate-governance" element={<CorporateGovernance/>}/>
          <Route path="/sales-force-augmentation" element={<Salesforceaugmentation />} />
          <Route path="/corporate-services" element={<Corporateservices />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/colin-whitehead" element={<Colinwhiteheadpage />} />
          {/* <Route path="/workshop2" element={<WorkshopPage2 />} /> New route for WorkshopPage2 */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}