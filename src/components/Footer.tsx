import React from 'react';
import { Language, PageRoute } from '../types';
import { translations } from '../i18n/translations';
import { ArrowUp, Mail, Phone, MapPin, Globe, ExternalLink, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  language,
  onLanguageChange,
}) => {
  const t = translations[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-stone-300 border-t border-[#C6A56B]/25">
      {/* Decorative Champagne Gold hairline rule */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C6A56B] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Institutional Wordmark & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#78163D] border border-[#C6A56B] flex items-center justify-center shrink-0">
                <span className="font-serif font-bold text-sm tracking-wider text-white">
                  BBAC
                </span>
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-white tracking-wide">
                  British Board
                </h3>
                <p className="text-xs text-[#C6A56B] uppercase tracking-wider font-medium">
                  of Aesthetics & Cosmetology
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed font-serif italic text-stone-300">
              "{t.common.tagline}"
            </p>

            <p className="text-xs text-stone-400 leading-relaxed">
              {t.footer.aboutText}
            </p>

            {/* Language Switcher in Footer (EN / FR only) */}
            <div className="pt-2 flex items-center gap-2 text-xs">
              <Globe className="w-3.5 h-3.5 text-[#C6A56B]" />
              <span className="text-stone-400">Language:</span>
              <button
                onClick={() => onLanguageChange('en')}
                className={`hover:text-white transition-colors cursor-pointer ${
                  language === 'en' ? 'text-[#C6A56B] font-bold underline' : 'text-stone-400'
                }`}
              >
                English
              </button>
              <span className="text-stone-600">·</span>
              <button
                onClick={() => onLanguageChange('fr')}
                className={`hover:text-white transition-colors cursor-pointer ${
                  language === 'fr' ? 'text-[#C6A56B] font-bold underline' : 'text-stone-400'
                }`}
              >
                Français
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C6A56B] pb-1 border-b border-stone-800">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#C6A56B] transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#C6A56B] transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('mission-vision')}
                  className="hover:text-[#C6A56B] transition-colors cursor-pointer"
                >
                  {t.nav.missionVision}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('standards')}
                  className="hover:text-[#C6A56B] transition-colors cursor-pointer"
                >
                  {t.nav.standards}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-[#C6A56B] transition-colors cursor-pointer"
                >
                  {t.nav.programs}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('academie')}
                  className="hover:text-[#C6A56B] transition-colors cursor-pointer"
                >
                  {t.nav.academie}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#C6A56B] transition-colors cursor-pointer"
                >
                  {t.nav.gallery}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Associated Academy & Inquiries */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C6A56B] pb-1 border-b border-stone-800">
              {t.footer.communication}
            </h4>

            {/* Featured Associated Academy Link */}
            <div className="p-3.5 bg-[#242424] border border-[#C6A56B]/30 rounded-sm">
              <span className="text-[10px] uppercase tracking-wider text-[#C6A56B] block font-bold">
                Strategic Educational Partner
              </span>
              <p className="font-serif text-sm font-semibold text-white mt-1">
                L’Académie Internationale de Beauté
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5">
                Campuses: Paris (France) · Tunis (Tunisie)
              </p>
              <a
                href="https://lacademie-internationale.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-[#C6A56B] hover:text-white transition-colors font-medium"
              >
                <span>https://lacademie-internationale.com/</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Official Contact Details */}
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C6A56B] shrink-0" />
                <a
                  href="mailto:contact@lacademie-internationale.com"
                  className="hover:text-white transition-colors"
                >
                  contact@lacademie-internationale.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C6A56B] shrink-0" />
                <a
                  href="tel:+447497275861"
                  className="hover:text-[#C6A56B] transition-colors tabular-nums font-semibold"
                >
                  +44 7497 275861 (UK Direct)
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C6A56B] shrink-0 mt-0.5" />
                <span className="text-stone-400 leading-snug">
                  London (UK Headquarters) · Hubs : Paris & Tunis
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Statement & Anti-Misrepresentation Banner */}
        <div className="mt-12 pt-6 border-t border-stone-800/80">
          <div className="p-4 bg-[#202020] border border-stone-800 rounded-sm flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C6A56B] shrink-0 mt-0.5" />
            <div className="text-xs text-stone-400 leading-relaxed">
              <span className="font-semibold text-stone-300 block mb-0.5">
                {t.footer.disclaimerTitle}:
              </span>
              {t.footer.disclaimerBody}
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
            <p>© {new Date().getFullYear()} {t.footer.rights}</p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#C6A56B] hover:text-white transition-colors cursor-pointer group"
            >
              <span>{t.footer.top}</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
