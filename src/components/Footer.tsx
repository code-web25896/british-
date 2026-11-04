import React from 'react';
import { Language, PageRoute } from '../types';
import { translations } from '../i18n/translations';
import { ArrowUp, Mail, Phone, MapPin, Globe, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import logoHeader from '../assets/images/logo_header.jpg';
import logoAcademie from '../assets/images/logo_academie_internationale.png';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  language,
}) => {
  const t = translations[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full max-w-full overflow-hidden bg-[#001438] text-slate-300 border-t border-slate-700">
      {/* British Tri-Color Accent Ribbon */}
      <div className="h-1.5 w-full flex">
        <div className="h-full flex-1 bg-[#001E6D]" />
        <div className="h-full w-24 bg-white" />
        <div className="h-full flex-1 bg-[#D90025]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Institutional Wordmark & Mission with LARGE LOGO */}
          <div className="lg:col-span-5 space-y-5 min-w-0">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-white p-1 border-2 border-slate-300 shadow-md flex items-center justify-center shrink-0">
                <img
                  src={logoHeader}
                  alt="The British Board Official Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#D90025] block truncate">
                  🇬🇧 Recognized UK Accreditation Body
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white tracking-tight truncate">
                  The British Board
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 uppercase tracking-wider font-semibold truncate">
                  Education &amp; Training Accreditation
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-serif italic">
              "Dedicated to academic excellence, standardized vocational certification, and international accreditation across aesthetic, cosmetic, and technological disciplines."
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              The British Board is a globally recognized accreditation and certification organization. Operating under strict British standards, we validate institutional curricula and endorse diplomas through strategic partner academies across the UK, Europe, and the Mediterranean.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span>Global Registry Verification Service Active</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D90025] pb-1 border-b border-blue-900/80">
              Accreditation &amp; Board Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>About The Board</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('mission-vision')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Mission &amp; Global Vision</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('standards')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Accreditation Standards</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-slate-300 hover:text-[#D90025] transition-colors cursor-pointer flex items-center gap-1.5 font-bold"
                >
                  <span>Certificate Checker (Verify Credential)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 font-bold text-[#D90025]"
                >
                  <span>Apply for Accreditation</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Associated Academy & Direct UK Secretariat */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D90025] pb-1 border-b border-blue-900/80">
              Accredited Partner Network
            </h4>

            {/* Featured Associated Academy Mention */}
            <div className="p-3.5 bg-[#001E6D]/50 border border-blue-800/80 rounded-md">
              <span className="text-[10px] uppercase tracking-wider text-[#D90025] block font-bold">
                Strategic Educational Synergy
              </span>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-16 h-16 rounded-md overflow-hidden bg-white flex items-center justify-center shrink-0 border border-slate-300 shadow-xs">
                  <img
                    src={logoAcademie}
                    alt="L'Académie Internationale de Beauté"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div>
                  <p className="font-serif text-sm font-bold text-white">
                    L'Académie Internationale de Beauté
                  </p>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    Accredited Centers: France &amp; Africa
                  </p>
                  <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1 mt-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Board Accredited Curriculums
                  </span>
                </div>
              </div>
            </div>

            {/* Official Contact Details */}
            <div className="space-y-2.5 text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D90025] shrink-0" />
                <a
                  href="mailto:contact@britishboardofbeauty.com"
                  className="hover:text-white transition-colors"
                >
                  contact@britishboardofbeauty.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D90025] shrink-0" />
                <a
                  href="tel:+447497275861"
                  className="hover:text-white transition-colors tabular-nums font-bold font-mono text-white"
                >
                  +44 7497 275861 (UK Direct Secretariat)
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D90025] shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">
                  London (United Kingdom Headquarters) · Accredited Centers: France &amp; Africa
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Statement & Anti-Misrepresentation Banner */}
        <div className="mt-12 pt-6 border-t border-blue-950">
          <div className="p-4 bg-[#00102E] border border-blue-900/80 rounded-md flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#D90025] shrink-0 mt-0.5" />
            <div className="text-xs text-slate-400 leading-relaxed">
              <span className="font-bold text-slate-200 block mb-0.5">
                Official UK Institutional Disclaimer:
              </span>
              The British Board is an independent educational accreditation and certification authority. We benchmark curriculum excellence, verify institutional compliance, and provide credential attestation. All diplomas, certificates, and partner accreditations can be verified directly via our registry.
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p>© {new Date().getFullYear()} The British Board - Education &amp; Training Accreditation Organization. All rights reserved.</p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white hover:text-[#D90025] transition-colors cursor-pointer group font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
