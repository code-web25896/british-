import React, { useState, useEffect } from 'react';
import { Language, PageRoute } from '../types';
import { translations } from '../i18n/translations';
import logoHeader from '../assets/images/logo_header.jpg';
import {
  Menu,
  X,
  Globe,
  ChevronRight,
  Phone,
  ExternalLink,
  Sparkles,
  Home,
  ShieldCheck,
  Target,
  BookOpen,
  GraduationCap,
  Camera,
  PhoneCall,
  Award
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
  onLanguageChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { route: PageRoute; label: string; icon: React.ReactNode }[] = [
    { route: 'home', label: t.nav.home, icon: <Home className="w-4 h-4 text-[#C6A56B]" /> },
    { route: 'about', label: t.nav.about, icon: <ShieldCheck className="w-4 h-4 text-[#C6A56B]" /> },
    { route: 'mission-vision', label: t.nav.missionVision, icon: <Target className="w-4 h-4 text-[#C6A56B]" /> },
    { route: 'standards', label: t.nav.standards, icon: <BookOpen className="w-4 h-4 text-[#C6A56B]" /> },
    { route: 'gallery', label: t.nav.gallery, icon: <Camera className="w-4 h-4 text-[#C6A56B]" /> },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm transition-all duration-300">
        {/* Top Institutional British Announcement & Contact Bar */}
        <div className="bg-[#001E6D] text-white py-2 px-4 text-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Left: Official UK Accreditation Body Info */}
            <div className="flex items-center gap-2 truncate">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#D90025] text-white shadow-xs shrink-0">
                <span>🇬🇧</span>
                <span>UK Accreditation Body</span>
              </span>
              <div className="hidden sm:flex items-center gap-1.5 font-medium text-slate-200 text-[11px] truncate">
                <Sparkles className="w-3 h-3 text-[#C6A56B] shrink-0" />
                <span className="truncate">The British Board · Recognized Education & Training Accreditation Body</span>
              </div>
            </div>

            {/* Right: Official Direct Contact & Verification Link */}
            <div className="flex items-center gap-4 shrink-0 text-xs font-medium">
              <span className="hidden md:inline text-[11px] text-slate-300">
                Hubs: London · Paris · Tunis
              </span>
              <span className="text-slate-500 hidden md:inline">|</span>
              <a
                href="tel:+447497275861"
                className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-white font-semibold"
                title="Direct Phone Line"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A56B]" />
                <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-slate-300 font-normal">Headquarters:</span>
                <span className="tabular-nums">+44 7497 275861</span>
              </a>
            </div>
          </div>
        </div>

        {/* British Flag Tri-Color Accent Stripe */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[#001E6D] via-[#D90025] to-[#001E6D]" />

        {/* Main Navbar with Large Official Logo */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-6">
            {/* Zone 1: Big Official Logo & Title */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3.5 text-left focus:outline-none group cursor-pointer shrink-0"
              aria-label="The British Board Home"
            >
              <div className="h-14 sm:h-18 md:h-20 w-auto flex items-center justify-center">
                <img
                  src={logoHeader}
                  alt="The British Board"
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-black text-lg sm:text-2xl md:text-3xl text-[#001E6D] tracking-tight leading-none group-hover:text-[#D90025] transition-colors">
                  THE BRITISH BOARD
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-[#D90025] tracking-widest uppercase mt-1">
                  Education & Training Accreditation Organization
                </span>
              </div>
            </button>

            {/* Zone 2: Navigation Links */}
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

            {/* Zone 3: Primary Action */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Primary Nav Action: Official Contact */}
              <button
                onClick={() => handleNavClick('contact')}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold tracking-wider uppercase transition-all duration-300 rounded-md cursor-pointer whitespace-nowrap shrink-0 shadow-md bg-[#D90025] hover:bg-[#B5001F] text-white border border-[#B5001F]"
              >
                <ChevronRight className="w-3.5 h-3.5" />
                <span>Contact Us</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-[#001E6D] hover:bg-slate-100 focus:outline-none"
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
                <div className="flex items-center gap-3">
                  <img src={logoHeader} alt="The British Board" className="h-12 w-auto object-contain" />
                  <div className="flex flex-col">
                    <span className="font-serif text-sm font-bold text-[#001E6D]">
                      THE BRITISH BOARD
                    </span>
                    <span className="text-[9px] text-[#D90025] font-semibold tracking-wider uppercase">
                      Accreditation Body
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-slate-500 hover:text-slate-800 rounded-md"
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
                  L’Académie Internationale de Beauté
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  Campuses: Paris (France) · Tunis (Tunisia)
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
                  <PhoneCall className="w-3.5 h-3.5 text-[#C6A56B]" />
                  <span>Call: +44 7497 275861</span>
                </a>

                <button
                  onClick={() => handleNavClick('contact')}
                  className="flex items-center justify-center w-full px-4 py-2.5 text-xs font-bold tracking-wider uppercase bg-[#D90025] text-white rounded-md hover:bg-[#B5001F] transition-colors shadow-sm"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
