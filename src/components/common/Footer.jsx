// Footer.jsx with React Router
import { useState } from "react";
import { Link } from "react-router-dom";

// Subscribe Form Component (inline)
function SubscribeForm({ variant = "dark" }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your subscription logic here
  };

  const inputClass = variant === "dark"
    ? "bg-white/10 border-white/20 text-white placeholder:text-slate-400"
    : "bg-gray-100 border-gray-300 text-gray-900 placeholder:text-gray-500";

  return (
   <form onSubmit={handleSubmit} className="flex flex-col gap-3">
  <input
    type="text"
    name="firstName"
    placeholder="First Name"
    value={formData.firstName}
    onChange={handleChange}
    className={`w-full px-4 py-2.5 rounded-full border bg-[#F4F1EA] text-slate-800 text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#c8264f] transition-colors ${inputClass}`}
    required
  />
  <input
    type="text"
    name="lastName"
    placeholder="Last Name"
    value={formData.lastName}
    onChange={handleChange}
    className={`w-full px-4 py-2.5 rounded-full border bg-[#F4F1EA] text-slate-800 text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#c8264f] transition-colors ${inputClass}`}
    required
  />
  <input
    type="email"
    name="email"
    placeholder="Email"
    value={formData.email}
    onChange={handleChange}
    className={`w-full px-4 py-2.5 rounded-full border bg-[#F4F1EA] text-slate-800 text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#c8264f] transition-colors ${inputClass}`}
    required
  />
  <button
    type="submit"
    className="bg-[#c8264f] text-white font-semibold py-2.5 px-6 rounded-full hover:bg-[#b01e42] transition-colors text-sm uppercase tracking-wider mt-1 cursor-pointer"
  >
    Subscribe
  </button>
</form>
  );
}

// Main Footer Component with React Router
export default function Footer() {
  const services = [
    { name: "Business Expansion & Growth", path: "/businessexpansion" },
    { name: "Digital Transformation", path: "/digitaltransformation" },
    { name: "Digital Marketing", path: "/digital-marketing" },
    { name: "Corporate Governance | Risk & Compliance", path: "/corporate-governance" },
    { name: "Sales Force Augmentation", path: "/sales-force-augmentation" },
    { name: "Corporate Services", path: "/corporate-services" },
  ];

  const corporate = [
    { name: "About Us", path: "/about" },
    { name: "Clients", path: "/client" },
    { name: "Contact Us", path: "/contact" },
    { name: "Superheroes", path: "/superheroes" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Use", path: "/terms-of-use" },
  ];

return (
    <footer id="contact" className="bg-[#0b0c10] pt-8 pb-6 border-t border-white/5">
      <div className="max-w-[1340px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
        
        {/* Brand Logo Integration Wrapper */}
        <div className="md:col-span-3 mb-4">
          <Link to="/" className="inline-block">
            <img 
              src="/20170629-Angstrohm-Consulting-Logo-300x102.png" 
              alt="Angstrohm Consulting" 
              className="w-44 h-auto brightness-110 contrast-125" 
            />
          </Link>
        </div>

        {/* Services Column */}
        <div className="space-y-4">
          <h5 className="text-[#b92c48] font-bold tracking-[0.15em] text-xs uppercase m-0">
            SERVICES
          </h5>
          <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
            {services.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-slate-400 text-xs sm:text-sm hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Corporate Information Column */}
        <div className="space-y-4">
          <h5 className="text-[#b92c48] font-bold tracking-[0.15em] text-xs uppercase m-0">
            CORPORATE INFORMATION
          </h5>
          <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
            {corporate.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-slate-400 text-xs sm:text-sm hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe Column */}
        <div className="space-y-4">
          <h5 className="text-white font-bold tracking-[0.15em] text-xs uppercase m-0">
            Get Sh*t Done!
          </h5>
          <SubscribeForm variant="dark" />
        </div>
      </div>

      {/* Copyright */}
      <p className="max-w-[1340px] mx-auto px-6 text-center text-slate-500 text-xs pt-6 m-0 font-mono">
        Copyright ©2014 - 2026 | All Rights Reserved
      </p>
    </footer>
  );
}