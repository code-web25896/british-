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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#181818]/95 backdrop-blur-md shadow-xl border-b border-[#C6A56B]/25 text-white'
            : 'bg-gradient-to-b from-[#181818]/95 via-[#181818]/80 to-transparent text-white'
        }`}
      >
        {/* Top Institutional Announcement & Contact Bar (No WhatsApp, Direct Line & Official Portal) */}
        <div className="bg-[#101010] border-b border-[#C6A56B]/20 py-1.5 px-4 text-[11px] text-stone-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Left: Strategic Academy Partner */}
            <div className="flex items-center gap-2 truncate">
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-[#78163D] text-[#C6A56B] border border-[#C6A56B]/30 shrink-0">
                Strategic Partner
              </span>
              <div className="flex items-center gap-1.5 font-medium truncate text-stone-300">
                <Sparkles className="w-3 h-3 text-[#C6A56B] shrink-0" />
                <span className="truncate">L’Académie Internationale de Beauté (Paris · Tunis)</span>
              </div>
            </div>

            {/* Right: Official Direct Phone Line */}
            <div className="flex items-center gap-3 shrink-0 text-xs">
              <span className="hidden md:inline text-[10px] uppercase tracking-wider text-stone-400">
                Hubs: Paris · Tunis · London
              </span>
              <span className="text-stone-700 hidden md:inline">|</span>
              <a
                href="tel:+447497275861"
                className="hover:text-[#C6A56B] transition-colors flex items-center gap-1.5 text-stone-200 font-medium"
                title="Direct Phone Line"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A56B]" />
                <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-stone-400">Direct Line:</span>
                <span className="tabular-nums font-semibold tracking-wide">+44 7497 275861</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between gap-6">
            {/* Zone 1: Brand Wordmark (British Board / BBAC) */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A56B] rounded-sm group cursor-pointer whitespace-nowrap shrink-0"
              aria-label="British Board Home"
            >
              <div className="w-10 h-10 rounded-sm overflow-hidden border border-[#C6A56B]/60 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 bg-white">
                <img src={logoHeader} alt="British Board Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-base sm:text-lg tracking-wide text-[#FFFFFF] group-hover:text-[#C6A56B] transition-colors leading-tight">
                  British Board
                </span>
                <span className="text-[10px] sm:text-xs text-[#C6A56B] uppercase tracking-widest font-medium">
                  Aesthetics & Cosmetology
                </span>
              </div>
            </button>

            {/* Zone 2: Navigation Links (Single line, quiet luxury text with underlines) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium">
              {navItems.map((item) => {
                const isActive = currentRoute === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    className={`relative py-1 transition-colors cursor-pointer whitespace-nowrap shrink-0 text-[13px] tracking-wide ${
                      isActive
                        ? 'text-[#C6A56B] font-semibold'
                        : 'text-stone-200 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C6A56B] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action */}
            <div className="flex items-center gap-3 shrink-0">

              {/* Primary Nav Action: Contact with Luxury Button Styling and Icon */}
              <button
                onClick={() => handleNavClick('contact')}
                className={`btn-luxury hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 rounded-sm cursor-pointer whitespace-nowrap shrink-0 shadow-md ${
                  currentRoute === 'contact'
                    ? 'bg-[#C6A56B] text-[#202020] border border-[#C6A56B]'
                    : 'bg-[#78163D] hover:bg-[#8F1B4A] text-white border border-[#C6A56B]/60 hover:border-[#C6A56B]'
                }`}
              >
                <ChevronRight className="w-3.5 h-3.5 text-[#C6A56B]" />
                <span>{t.nav.contact}</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-sm text-stone-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A56B]"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Mobile Drawer Menu with Icons, Call CTA & Partner Hubs */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#181818] border-l border-[#C6A56B]/30 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-50">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-stone-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-sm overflow-hidden border border-[#C6A56B]/50 flex items-center justify-center shadow-md bg-white">
                    <img src={logoHeader} alt="British Board Logo" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif text-sm font-semibold text-white">
                      British Board
                    </span>
                    <span className="text-[10px] text-[#C6A56B] uppercase tracking-wider">
                      Paris · Tunis · London
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-stone-400 hover:text-white rounded-sm"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Partner Highlight Card in Mobile Drawer */}
              <div className="mt-4 p-3 bg-[#242424] border border-[#C6A56B]/30 rounded-sm">
                <span className="text-[9px] uppercase tracking-wider text-[#C6A56B] font-bold block mb-1">
                  Strategic Partner
                </span>
                <p className="font-serif text-xs font-semibold text-white">
                  L’Académie Internationale de Beauté
                </p>
                <p className="text-[10px] text-stone-400 mt-0.5">
                  Campuses: Paris (France) · Tunis (Tunisia)
                </p>
              </div>

              {/* Navigation links with rich icons */}
              <div className="mt-5 flex flex-col space-y-1.5">
                {navItems.map((item) => (
                  <button
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    className={`flex items-center justify-between w-full px-3 py-2.5 text-xs font-medium rounded-sm transition-colors text-left ${
                      currentRoute === item.route
                        ? 'bg-[#78163D] text-white font-semibold shadow-sm'
                        : 'text-stone-300 hover:bg-stone-800 hover:text-white'
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
              <div className="mt-5 pt-4 border-t border-stone-800 space-y-2.5">
                <a
                  href="tel:+447497275861"
                  className="btn-luxury flex items-center justify-center gap-2 w-full py-2.5 bg-[#78163D] hover:bg-[#8F1B4A] text-white rounded-sm font-semibold text-xs border border-[#C6A56B] shadow-md tracking-wider"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#C6A56B]" />
                  <span>Call: +44 7497 275861</span>
                </a>

                <button
                  onClick={() => handleNavClick('contact')}
                  className="flex items-center justify-center w-full px-4 py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#C6A56B] text-[#202020] rounded-sm hover:bg-[#D4B782] transition-colors"
                >
                  {t.nav.contact}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
