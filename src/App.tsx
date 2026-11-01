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
import { ProgramsPage } from './pages/ProgramsPage';
import { AcademiePage } from './pages/AcademiePage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { translations } from './i18n/translations';
import { ArrowUp, PhoneCall, Sparkles } from 'lucide-react';

export default function App() {
  // Initialize language from localStorage or default to 'fr'
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('abac_language');
    if (saved === 'en' || saved === 'fr') {
      return saved;
    }
    return 'fr';
  });

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
      case 'programs':
        return 'programs';
      case 'academie':
      case 'academie-internationale':
        return 'academie';
      case 'gallery':
        return 'gallery';
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
    localStorage.setItem('abac_language', language);
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
      case 'programs':
        pageTitle = `${t.nav.programs} | ${t.common.brandAbbr}`;
        break;
      case 'academie':
        pageTitle = `L’Académie Internationale | ${t.common.brandAbbr}`;
        break;
      case 'gallery':
        pageTitle = `${t.nav.gallery} | ${t.common.brandAbbr}`;
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
    <div className="min-h-screen flex flex-col bg-[#F8F6F2] text-[#202020] selection:bg-[#78163D] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      {/* Main Page Content */}
      <main className="flex-1">
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
        {currentRoute === 'programs' && (
          <ProgramsPage onNavigate={handleNavigate} language={language} />
        )}
        {currentRoute === 'academie' && (
          <AcademiePage onNavigate={handleNavigate} language={language} />
        )}
        {currentRoute === 'gallery' && (
          <GalleryPage onNavigate={handleNavigate} language={language} />
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

      {/* Mobile Sticky Quick Action Bar (Direct Call & Academy Portal) */}
      <div className="lg:hidden fixed bottom-3 left-3 right-3 z-40 bg-[#161616]/95 backdrop-blur-md border border-[#C6A56B]/50 rounded-full py-2 px-3 shadow-2xl flex items-center justify-between text-xs text-white">
        <a
          href="tel:+447497275861"
          className="btn-luxury inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#78163D] hover:bg-[#8F1B4A] text-white rounded-full font-semibold border border-[#C6A56B]/60 shadow-md tracking-wider text-[11px]"
          title="Appel Direct"
        >
          <PhoneCall className="w-3.5 h-3.5 text-[#C6A56B]" />
          <span>+44 7497 275861</span>
        </a>

        <a
          href="https://lacademie-internationale.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] text-[#C6A56B] hover:text-white font-medium truncate px-2"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C6A56B] shrink-0" />
          <span className="truncate">L’Académie</span>
        </a>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-1.5 bg-stone-800 hover:bg-[#78163D] text-[#C6A56B] hover:text-white rounded-full border border-stone-700 transition-colors"
            aria-label="Haut de page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Floating Scroll-to-Top Button for Desktop */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="hidden lg:flex fixed bottom-6 right-6 z-40 p-3 bg-[#78163D] hover:bg-[#8F1B4A] text-white rounded-full shadow-xl border border-[#C6A56B] transition-all transform hover:scale-105 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
