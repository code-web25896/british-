import React from 'react';
import { Language, PageRoute } from '../types';
import { translations } from '../i18n/translations';
import { ASSET_IMAGES } from '../data/siteData';
import { ExternalLink, Sparkles, Award, Users, CheckCircle, ArrowRight, MapPin, Phone } from 'lucide-react';

interface AcademiePageProps {
  onNavigate: (route: PageRoute) => void;
  language: Language;
}

export const AcademiePage: React.FC<AcademiePageProps> = ({
  onNavigate,
  language,
}) => {
  const t = translations[language];

  return (
    <div className="w-full pt-28 pb-20 bg-[#F8F6F2]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#78163D] font-bold block mb-2">
            {t.academie.badge}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#202020] font-semibold leading-tight">
            {t.academie.title}
          </h1>
          <div className="w-20 h-[2px] bg-[#C6A56B] my-4" />
          <p className="font-serif italic text-base sm:text-lg text-[#78163D] leading-relaxed">
            "{t.academie.tagline}"
          </p>
        </div>
      </div>

      {/* Main Feature Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white border-2 border-[#C6A56B]/40 rounded-sm p-8 sm:p-12 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Atelier */}
            <div className="lg:col-span-6">
              <div className="relative rounded-sm overflow-hidden border border-[#C6A56B]/50 shadow-2xl bg-[#202020]">
                <img
                  src={ASSET_IMAGES.academie}
                  alt="L'Académie Internationale de Beauté Training Atelier Paris & Tunis"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-[#202020] text-stone-200 border-t border-[#C6A56B]/30 flex items-center justify-between text-xs">
                  <span>Paris & Tunis Campuses · Master Training</span>
                  <a
                    href="https://lacademie-internationale.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C6A56B] hover:text-white flex items-center gap-1"
                  >
                    <span>Visit Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Narrative text */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#202020] font-semibold">
                European Elegance Meets International Excellence
              </h2>

              <p className="drop-cap text-stone-700 leading-relaxed text-sm sm:text-base">
                {t.academie.p1}
              </p>

              <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                {t.academie.p2}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://lacademie-internationale.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury px-6 py-3.5 bg-[#78163D] hover:bg-[#8F1B4A] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-300 border border-[#C6A56B] shadow-lg flex items-center justify-center gap-2.5"
                >
                  <Sparkles className="w-4 h-4 text-[#C6A56B]" />
                  <span>{t.academie.visitCta}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-luxury px-6 py-3.5 bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors border border-[#C6A56B]/60 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Award className="w-4 h-4 text-[#78163D]" />
                  <span>Institutional Inquiries</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </button>
              </div>

              {/* Exact verified relationship disclaimer */}
              <div className="p-4 bg-[#F8F6F2] border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#78163D] rounded-sm text-xs text-stone-600">
                <span className="font-semibold text-stone-800 block mb-0.5">
                  {t.academie.noteTitle}:
                </span>
                {t.academie.noteText}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Academy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 border border-[#C6A56B]/30 rounded-sm shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-sm bg-[#78163D]/10 flex items-center justify-center text-[#78163D]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#202020]">
              {t.academie.highlight1Title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t.academie.highlight1Desc}
            </p>
          </div>

          <div className="bg-white p-8 border border-[#C6A56B]/30 rounded-sm shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-sm bg-[#78163D]/10 flex items-center justify-center text-[#78163D]">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#202020]">
              {t.academie.highlight2Title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t.academie.highlight2Desc}
            </p>
          </div>

          <div className="bg-white p-8 border border-[#C6A56B]/30 rounded-sm shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-sm bg-[#78163D]/10 flex items-center justify-center text-[#78163D]">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#202020]">
              {t.academie.highlight3Title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t.academie.highlight3Desc}
            </p>
          </div>
        </div>

        {/* Strategic Partner Campuses: Paris & Tunis (SEO & Institutional Focus) */}
        <div className="bg-[#202020] text-white p-8 sm:p-12 rounded-sm border border-[#C6A56B]/40 shadow-2xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-widest text-[#C6A56B] font-bold block mb-2">
              Strategic Partner Hubs · Paris & Tunis
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
              Centres de Formation & Pôles d'Excellence
            </h3>
            <div className="w-16 h-[2px] bg-[#C6A56B] my-3" />
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              En collaboration avec le British Board of Aesthetics and Cosmetology, L’Académie Internationale de Beauté déploie son enseignement de haut vol à travers ses deux métropoles partenaires phares.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Campus 1: Paris */}
            <div className="p-6 bg-[#272727] border border-[#C6A56B]/30 rounded-sm space-y-4">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#C6A56B]" />
                <h4 className="font-serif text-lg font-semibold text-white">
                  Campus Paris (France)
                </h4>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Ateliers de haute esthétique, masterclasses internationales en colorimétrie et soins dermocosmétiques au cœur de la capitale mondiale du raffinement et de l'élégance.
              </p>
              <div className="pt-2 text-xs text-[#C6A56B] font-medium flex items-center justify-between">
                <span>Normes British Board</span>
                <a
                  href="https://lacademie-internationale.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1"
                >
                  <span>lacademie-internationale.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Campus 2: Tunis */}
            <div className="p-6 bg-[#272727] border border-[#C6A56B]/30 rounded-sm space-y-4">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#C6A56B]" />
                <h4 className="font-serif text-lg font-semibold text-white">
                  Campus Tunis (Tunisie)
                </h4>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Pôle méditerranéen majeur offrant des formations professionnelles diplômantes et des perfectionnements en cosmétologie moderne répondant aux critères d'évaluation du British Board.
              </p>
              <div className="pt-2 text-xs text-[#C6A56B] font-medium flex items-center justify-between">
                <span>Normes British Board</span>
                <a
                  href="https://lacademie-internationale.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1"
                >
                  <span>lacademie-internationale.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Contact & Direct Registration Banner */}
          <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#C6A56B]" />
              <span className="text-xs text-stone-300">
                Inscriptions & Secrétariat : <strong className="text-white">+44 7497 275861</strong>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://lacademie-internationale.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury px-4 py-2 bg-stone-800 hover:bg-stone-700 text-[#C6A56B] text-xs font-semibold rounded-sm border border-[#C6A56B]/50 flex items-center gap-2"
              >
                <span>Portail Inscription</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="tel:+447497275861"
                className="btn-luxury px-4 py-2 bg-[#78163D] hover:bg-[#8F1B4A] text-white text-xs font-semibold rounded-sm border border-[#C6A56B]/60"
              >
                Appeler +44 7497 275861
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
