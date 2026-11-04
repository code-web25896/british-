/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MissionVisionPage } from './pages/MissionVisionPage';
import { StandardsPage } from './pages/StandardsPage';
import { AcademiePage } from './pages/AcademiePage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { translations } from './i18n/translations';
import { ArrowUp, PhoneCall, Sparkles } from 'lucide-react';

export default function App() {
  // English only — language is fixed to 'en'
  const [language, setLanguage] = useState<Language>('en');

  // Routing state based on hash
  const getRouteFromHash = (): PageRoute => {
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    switch (hash) {
      case '':
      case 'home':
        return 'home';
      case 'about':
        return 'about';
      case 'mission-vision':
      case 'mission':
      case 'vision':
        return 'mission-vision';
      case 'standards':
      case 'educational-standards':
        return 'standards';
      case 'academie':
      case 'academie-internationale':
        return 'academie';
      case 'contact':
        return 'contact';
      default:
        return 'home';
    }
  };

  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getRouteFromHash);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(getRouteFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update HTML dir and lang attributes on language change
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = 'ltr';
    localStorage.setItem('britishboard_language', language);
  }, [language]);

  // Update document title dynamically
  useEffect(() => {
    const t = translations[language];
    let pageTitle = t.common.brandAbbr;
    switch (currentRoute) {
      case 'about':
        pageTitle = `${t.nav.about} | ${t.common.brandAbbr}`;
        break;
      case 'mission-vision':
        pageTitle = `${t.nav.missionVision} | ${t.common.brandAbbr}`;
        break;
      case 'standards':
        pageTitle = `${t.nav.standards} | ${t.common.brandAbbr}`;
        break;
      case 'academie':
        pageTitle = `L’Académie Internationale | ${t.common.brandAbbr}`;
        break;
      case 'contact':
        pageTitle = `${t.nav.contact} | ${t.common.brandAbbr}`;
        break;
      default:
        pageTitle = `${t.common.brandName} (${t.common.brandAbbr})`;
        break;
    }
    document.title = pageTitle;
  }, [currentRoute, language]);

  // Track scroll position for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (route: PageRoute) => {
    window.location.hash = route === 'home' ? '' : `#/${route}`;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-[#001E6D] selection:text-white w-full max-w-full overflow-x-hidden">
      {/* Top Navigation */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {currentRoute === 'home' && (
          <HomePage onNavigate={handleNavigate} language={language} />
        )}
        {currentRoute === 'about' && (
          <AboutPage onNavigate={handleNavigate} language={language} />
        )}
        {currentRoute === 'mission-vision' && (
          <MissionVisionPage onNavigate={handleNavigate} language={language} />
        )}
        {currentRoute === 'standards' && (
          <StandardsPage onNavigate={handleNavigate} language={language} />
        )}
        {currentRoute === 'academie' && (
          <AcademiePage onNavigate={handleNavigate} language={language} />
        )}
        {currentRoute === 'contact' && (
          <ContactPage onNavigate={handleNavigate} language={language} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      {/* Mobile Sticky Quick Action Bar (Direct Call & Board Portal) */}
      <div className="lg:hidden fixed bottom-3 left-3 right-3 z-40 bg-white/95 backdrop-blur-md border border-slate-300 rounded-full py-2 px-3 shadow-xl flex items-center justify-between text-xs text-slate-800">
        <a
          href="tel:+447497275861"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#001E6D] hover:bg-[#00144D] text-white rounded-full font-bold shadow-xs tracking-wider text-[11px]"
          title="Direct Line"
        >
          <PhoneCall className="w-3.5 h-3.5 text-[#D90025]" />
          <span>+44 7497 275861</span>
        </a>

        <button
          onClick={() => handleNavigate('contact')}
          className="inline-flex items-center gap-1.5 text-[11px] text-[#D90025] hover:text-[#B5001F] font-bold truncate px-2 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Apply for Accreditation</span>
        </button>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-1.5 bg-slate-100 hover:bg-[#001E6D] text-slate-700 hover:text-white rounded-full border border-slate-300 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Floating Scroll-to-Top Button for Desktop */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="hidden lg:flex fixed bottom-6 right-6 z-40 p-3 bg-[#001E6D] hover:bg-[#D90025] text-white rounded-full shadow-xl border border-slate-200 transition-all transform hover:scale-105 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
