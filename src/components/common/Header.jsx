import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  TrendingUp,
  Globe,
  Cpu,
  Megaphone,
  Shield,
  Users,
  Building2,
  ChevronDown
} from 'lucide-react';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();

  const links = [
    { label: 'HOME', to: '/' },
    { label: 'SERVICES', to: '/ultimateperformance', isDropdown: true },
    { label: 'ABOUT US', to: '/about' },
    { label: 'SUPERHEROES', to: '/superheroes' },
    // { label: 'WORKSHOP', to: '/workshop' },
    { label: 'CLIENTS', to: '/client' },
    { label: 'CONTACT US', to: '/contact' },
  ];

  const servicesItems = [
    {
      title: 'ULTIMATE PERFORMANCE SOLUTIONS',
      desc: 'Leadership Coaching for Future Leaders',
      icon: TrendingUp,
      path: '/ultimateperformance'
    },
    {
      title: 'BUSINESS EXPANSION & GROWTH',
      desc: 'Make your business grow like magic!',
      icon: Globe,
      path: '/businessexpansion'
    },
    {
      title: 'DIGITAL TRANSFORMATION',
      desc: 'Transform into a digital powerhouse',
      icon: Cpu,
      path: '/digitaltransformation'
    },
    {
      title: 'DIGITAL MARKETING',
      desc: 'From drab to fab',
      icon: Megaphone,
      path: '/digital-marketing'
    },
    {
      title: 'CORPORATE GOVERNANCE | RISK & COMPLIANCE',
      desc: 'Sails through stormy seas of regulations',
      icon: Shield,
      path: '/corporate-governance'
    },
    {
      title: 'SALES FORCE AUGMENTATION',
      desc: 'Unstoppable Sales Force',
      icon: Users,
      path: '/sales-force-augmentation'
    },
    {
      title: 'CORPORATE SERVICES',
      desc: 'One-stop-shop for all things corporate',
      icon: Building2,
      path: '/corporate-services'
    },
  ];

  const isActive = (to) => location.pathname === to;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-[#f4f1ea] pt-3 sm:pt-4 pb-2 px-3 sm:px-6 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="relative flex items-center justify-between gap-2 bg-white rounded-full shadow-[0_6px_24px_rgba(1,1,44,0.08)] pl-4 pr-3 py-2 sm:pl-8 sm:pr-4 sm:py-2.5">

            {/* Brand Logo Container (Now Left Side on Mobile) */}
            <Link to="/" className="flex-shrink-0 flex items-center order-1">
              <img
                src="/20170629-Angstrohm-Consulting-Logo-300x102.png"
                alt="Angstrohm Consulting"
                className="h-8 sm:h-9 md:h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-8 text-[11px] font-semibold tracking-[0.08em] text-[#01012C]/70 order-2">
              {links.map((link) => {
                if (link.isDropdown) {
                  return (
                    <div
                      key={link.label}
                      className="relative py-2 cursor-pointer"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button className={`flex items-center gap-1 uppercase transition-colors duration-200 hover:text-[#c8264f] bg-transparent border-0 cursor-pointer text-[11px] font-semibold tracking-inherit ${isServicesOpen ? 'text-[#c8264f]' : ''}`}>
                        {link.label}
                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isServicesOpen && (
                        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-3 w-[90vw] max-w-[380px] xl:max-w-[420px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(1,1,44,0.14)] border border-slate-50 p-5 sm:p-6 z-50">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white" />
                          <div className="space-y-5 text-left">
                            {servicesItems.map((item, idx) => {
                              const IconComponent = item.icon;
                              return (
                                <Link
                                  key={idx}
                                  to={item.path}
                                  className="flex items-start gap-4 group"
                                >
                                  <div className="text-[#c8264f] w-6 flex justify-center flex-shrink-0 mt-0.5">
                                    <IconComponent className="w-5 h-5" strokeWidth={1.5} />
                                  </div>
                                  <div className="space-y-0.5">
                                    <h4 className="text-[#c8264f] font-bold text-[11px] tracking-wider uppercase leading-tight">
                                      {item.title}
                                    </h4>
                                    <p className="text-slate-400 font-normal normal-case text-[11px]">
                                      {item.desc}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                const active = isActive(link.to);

                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    className={`relative py-2 uppercase transition-colors duration-200 hover:text-[#c8264f] ${active ? 'text-[#c8264f]' : ''}`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-1 h-1 rounded-full bg-[#c8264f]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions Row: Desktop CTA & Mobile Menu Trigger (Now Right Side on Mobile) */}
            <div className="flex items-center gap-2 order-2 lg:order-3">
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center bg-[#c8264f] hover:bg-[#b01e42] text-white text-[10px] font-bold tracking-[0.1em] py-3 px-6 rounded-full uppercase transition-colors duration-200 whitespace-nowrap"
              >
                Start a Project
              </Link>

              <button
                className="lg:hidden bg-transparent border-none text-[#01012C] cursor-pointer p-2 hover:bg-slate-50 rounded-full transition-colors flex-shrink-0 flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer (Flipped to Slide from Right Side) */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[85vw] max-w-[300px] sm:max-w-[350px] bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5 sm:p-6 overflow-y-auto h-full">
          <button
            className="absolute top-4 right-4 text-slate-600 hover:text-slate-900 p-2 bg-transparent border-0 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="mb-8 pt-4">
            <span className="font-display text-[#c8264f] text-xl tracking-tight font-bold">ÅNGSTROHM</span>
          </div>

          <nav className="flex flex-col gap-2">
            {links.map((link) => {
              if (link.isDropdown) {
                return (
                  <div key={link.label} className="border-b border-slate-100 pb-2">
                    <button
                      className="flex items-center justify-between w-full py-3 text-slate-700 font-semibold text-sm tracking-wide hover:text-[#c8264f] transition-colors bg-transparent border-0 cursor-pointer text-left"
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {isMobileServicesOpen && (
                      <div className="space-y-3 pl-2 mt-2">
                        {servicesItems.map((item, idx) => {
                          const IconComponent = item.icon;
                          return (
                            <Link
                              key={idx}
                              to={item.path}
                              className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <IconComponent className="w-5 h-5 text-[#c8264f] flex-shrink-0" strokeWidth={1.5} />
                              <div>
                                <div className="text-[#c8264f] font-bold text-[10px] tracking-wider uppercase leading-tight">
                                  {item.title}
                                </div>
                                <div className="text-slate-400 text-[10px]">{item.desc}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const active = isActive(link.to);

              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`py-3 text-sm font-semibold tracking-wide hover:text-[#c8264f] transition-colors border-b border-slate-100 ${
                    active ? 'text-[#c8264f]' : 'text-slate-700'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center bg-[#c8264f] hover:bg-[#b01e42] text-white text-xs font-bold tracking-widest py-3.5 px-6 rounded-full uppercase transition-colors duration-200 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start a Project
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}