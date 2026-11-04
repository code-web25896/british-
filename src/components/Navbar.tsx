import React, { useState } from 'react';
import { Language, PageRoute } from '../types';
import { translations } from '../i18n/translations';
import logoHeader from '../assets/images/logo_header.jpg';
import {
  Menu,
  X,
  ChevronRight,
  Phone,
  Sparkles,
  Home,
  ShieldCheck,
  Target,
  BookOpen,
  PhoneCall,
} from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  language,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[language];

  const navItems: { route: PageRoute; label: string; icon: React.ReactNode }[] = [
    { route: 'home', label: t.nav.home, icon: <Home className="w-4 h-4 text-[#001E6D]" /> },
    { route: 'about', label: t.nav.about, icon: <ShieldCheck className="w-4 h-4 text-[#001E6D]" /> },
    { route: 'mission-vision', label: t.nav.missionVision, icon: <Target className="w-4 h-4 text-[#001E6D]" /> },
    { route: 'standards', label: t.nav.standards, icon: <BookOpen className="w-4 h-4 text-[#001E6D]" /> },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header positioned STATIC with full width adjustment */}
      <header className="static w-full max-w-full bg-white border-b border-slate-200 shadow-sm overflow-hidden">
        {/* Top Institutional British Announcement & Contact Bar */}
        <div className="bg-[#001E6D] text-white py-1.5 px-3 sm:px-4 text-xs w-full max-w-full">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 min-w-0">
            {/* Left: Official UK Accreditation Body Info */}
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-[#D90025] text-white shadow-xs shrink-0 whitespace-nowrap">
                <span>🇬🇧</span>
                <span>UK Accreditation</span>
              </span>
              <div className="hidden sm:flex items-center gap-1.5 font-medium text-slate-200 text-[11px] truncate">
                <Sparkles className="w-3 h-3 text-amber-300 shrink-0" />
                <span className="truncate">The British Board · Recognized Education &amp; Training Accreditation Body</span>
              </div>
            </div>

            {/* Right: Official Direct Contact & Verification Link */}
            <div className="flex items-center gap-2 sm:gap-4 shrink-0 text-xs font-medium">
              <span className="hidden md:inline text-[11px] text-slate-300">
                London · France · Africa
              </span>
              <span className="text-slate-500 hidden md:inline">|</span>
              <a
                href="tel:+447497275861"
                className="hover:text-amber-300 transition-colors flex items-center gap-1 text-white font-semibold text-[11px] sm:text-xs whitespace-nowrap"
                title="Direct Phone Line"
              >
                <Phone className="w-3 h-3 text-[#D90025] shrink-0" />
                <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-slate-300 font-normal">Headquarters:</span>
                <span className="tabular-nums font-mono">+44 7497 275861</span>
              </a>
            </div>
          </div>
        </div>

        {/* British Flag Tri-Color Accent Stripe */}
        <div className="h-[3px] w-full flex">
          <div className="h-full flex-1 bg-[#001E6D]" />
          <div className="h-full w-20 bg-white" />
          <div className="h-full flex-1 bg-[#D90025]" />
        </div>

        {/* Main Navbar with Large Official Logo & Adaptive Mobile Width */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 w-full max-w-full">
          <div className="flex items-center justify-between gap-2 sm:gap-6 min-w-0">
            
            {/* Zone 1: Big Official Logo & Title with Flex-Shrink Safety on Mobile */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 sm:gap-3.5 text-left focus:outline-none group cursor-pointer min-w-0 flex-1 sm:flex-none overflow-hidden"
              aria-label="The British Board Home"
            >
              <div className="h-12 sm:h-16 md:h-20 w-auto flex items-center justify-center shrink-0">
                <img
                  src={logoHeader}
                  alt="The British Board"
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
                />
              </div>
              <div className="flex flex-col min-w-0 overflow-hidden">
                <span className="font-serif font-black text-sm sm:text-2xl md:text-3xl text-[#001E6D] tracking-tight leading-tight group-hover:text-[#D90025] transition-colors truncate">
                  THE BRITISH BOARD
                </span>
                <span className="text-[8px] sm:text-xs font-bold text-[#D90025] tracking-tight sm:tracking-widest uppercase leading-tight truncate">
                  Education &amp; Training Accreditation
                </span>
              </div>
            </button>

            {/* Zone 2: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold">
              {navItems.map((item) => {
                const isActive = currentRoute === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    className={`relative py-1.5 transition-colors cursor-pointer whitespace-nowrap text-sm tracking-wide ${
                      isActive
                        ? 'text-[#D90025] font-bold'
                        : 'text-[#001E6D] hover:text-[#D90025]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#D90025] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Actions & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Primary Nav Action: Official Apply/Contact */}
              <button
                onClick={() => handleNavClick('contact')}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider uppercase transition-all duration-300 rounded-md cursor-pointer whitespace-nowrap shrink-0 shadow-md bg-[#D90025] hover:bg-[#B5001F] text-white border border-[#B5001F]"
              >
                <ChevronRight className="w-3.5 h-3.5" />
                <span>Contact Us</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-[#001E6D] hover:bg-slate-100 focus:outline-none shrink-0"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Mobile Drawer Menu in Clean White with British Colors */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white border-l border-slate-200 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-50">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200">
                <div className="flex items-center gap-3 min-w-0">
                  <img src={logoHeader} alt="The British Board" className="h-12 w-auto object-contain shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="font-serif text-sm font-bold text-[#001E6D] truncate">
                      THE BRITISH BOARD
                    </span>
                    <span className="text-[9px] text-[#D90025] font-semibold tracking-wider uppercase truncate">
                      Accreditation Body
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-slate-500 hover:text-slate-800 rounded-md shrink-0 ml-2"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Partner Highlight Card in Mobile Drawer */}
              <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-md">
                <span className="text-[9px] uppercase tracking-wider text-[#D90025] font-bold block mb-1">
                  Strategic Academic Partner
                </span>
                <p className="font-serif text-xs font-semibold text-[#001E6D]">
                  The International Academy of Beauty
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  Accredited Centers: France &amp; Africa
                </p>
              </div>

              {/* Navigation links with rich icons */}
              <div className="mt-5 flex flex-col space-y-1.5">
                {navItems.map((item) => (
                  <button
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    className={`flex items-center justify-between w-full px-3.5 py-3 text-xs font-semibold rounded-md transition-colors text-left ${
                      currentRoute === item.route
                        ? 'bg-[#001E6D] text-white shadow-xs'
                        : 'text-[#001E6D] hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                  </button>
                ))}
              </div>

              {/* Quick Call Action in Mobile Drawer */}
              <div className="mt-5 pt-4 border-t border-slate-200 space-y-2.5">
                <a
                  href="tel:+447497275861"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#001E6D] text-white rounded-md font-semibold text-xs shadow-sm tracking-wider"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-300" />
                  <span>Call: +44 7497 275861</span>
                </a>

                <button
                  onClick={() => handleNavClick('contact')}
                  className="flex items-center justify-center w-full px-4 py-2.5 text-xs font-bold tracking-wider uppercase bg-[#D90025] text-white rounded-md hover:bg-[#B5001F] transition-colors shadow-sm cursor-pointer"
                >
                  Apply for Accreditation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
