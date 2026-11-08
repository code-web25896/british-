import React from 'react';
import { Language, PageRoute } from '../types';
import { translations } from '../i18n/translations';
import { ShieldCheck, BookOpen, Award, CheckCircle, ArrowRight, Compass, ExternalLink, Building2, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  language: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, language }) => {
  const t = translations[language];

  return (
    <div className="w-full pt-28 pb-20 bg-[#F8F6F2]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#78163D] font-semibold block mb-2">
            {t.about.kicker}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#202020] font-medium leading-tight">
            {t.about.title}
          </h1>
          <div className="w-20 h-[2px] bg-[#C6A56B] my-4" />
          <p className="text-base text-stone-600 font-light leading-relaxed">
            {t.common.tagline}
          </p>
        </div>
      </div>

      {/* Main Editorial Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Main Prose */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-8 sm:p-10 border border-[#C6A56B]/25 rounded-sm shadow-sm space-y-6">
              <h2 className="font-serif text-2xl text-[#78163D] font-semibold">
                Advancing the Discipline of Aesthetic &amp; Cosmetology Education
              </h2>
              <p className="drop-cap text-stone-700 leading-relaxed text-sm sm:text-base">
                {t.about.p1}
              </p>
              <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                {t.about.p2}
              </p>
              <p className="text-stone-600 leading-relaxed text-sm">
                {t.about.p3}
              </p>

              {/* Verified Institutional Registration Panel */}
              <div className="p-5 bg-[#F8F6F2] border-l-4 rtl:border-l-0 rtl:border-r-4 border-[#001E6D] text-xs text-stone-700 space-y-3 rounded-r-sm">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-bold text-[#001E6D] text-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#D90025]" />
                    Official UK Institutional Governance &amp; Registration
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="bg-emerald-100 text-emerald-800 font-mono font-bold px-2 py-0.5 rounded text-[10px]">
                      UKPRN: 10062939
                    </span>
                    <span className="bg-blue-100 text-blue-900 font-mono font-bold px-2 py-0.5 rounded text-[10px]">
                      Co. No: 10473336
                    </span>
                  </div>
                </div>
                <p className="leading-relaxed">
                  The British Board (legal entity: <strong>BRI BOARD FOR TRAINING AND CONSULTING LTD</strong>, incorporated in England &amp; Wales under Company No. <strong>10473336</strong>) is listed on the official UK Register of Learning Providers (UKPRN: <strong>10062939</strong>).
                </p>
                <div className="pt-2 border-t border-stone-300/60 flex flex-wrap gap-4 text-[11px] font-semibold text-[#001E6D]">
                  <a
                    href="https://find-and-update.company-information.service.gov.uk/company/10473336"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#D90025] transition-colors"
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Companies House Service (GOV.UK)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.ukrlp.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#D90025] transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>UKRLP Verification Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Three Foundation Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 border border-[#C6A56B]/20 rounded-sm shadow-sm">
                <div className="w-10 h-10 rounded-sm bg-[#78163D]/10 flex items-center justify-center text-[#78163D] mb-3">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-semibold text-[#202020] mb-2">
                  {t.about.pillar1Title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {t.about.pillar1Desc}
                </p>
              </div>

              <div className="bg-white p-6 border border-[#C6A56B]/20 rounded-sm shadow-sm">
                <div className="w-10 h-10 rounded-sm bg-[#78163D]/10 flex items-center justify-center text-[#78163D] mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-semibold text-[#202020] mb-2">
                  {t.about.pillar2Title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {t.about.pillar2Desc}
                </p>
              </div>

              <div className="bg-white p-6 border border-[#C6A56B]/20 rounded-sm shadow-sm">
                <div className="w-10 h-10 rounded-sm bg-[#78163D]/10 flex items-center justify-center text-[#78163D] mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-semibold text-[#202020] mb-2">
                  {t.about.pillar3Title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {t.about.pillar3Desc}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Evidence & Institutional Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#202020] rounded-sm overflow-hidden border border-[#C6A56B]/40 shadow-xl text-white">
              <div className="p-6 space-y-4">
                <span className="text-[11px] uppercase tracking-widest text-[#C6A56B] font-semibold block">
                  Institutional Focus
                </span>
                <h3 className="font-serif text-xl font-medium text-white">
                  Practical Laboratory Evaluation
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Our educational guidelines mandate that theoretical knowledge of cosmetic formulations and skin histology must be proven in rigorous practical laboratory environments with supervised client simulations.
                </p>

                <div className="pt-3 border-t border-stone-800 space-y-2 text-xs text-stone-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#C6A56B]" />
                    <span>Evidence-based clinical skincare methodology</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#C6A56B]" />
                    <span>Stringent aseptic and sanitation controls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#C6A56B]" />
                    <span>Transparent educator qualification matrices</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Link Card */}
            <div className="p-6 bg-white border border-[#C6A56B]/30 rounded-sm shadow-sm space-y-4">
              <h4 className="font-serif text-base font-semibold text-[#78163D]">
                Explore Our Foundational Frameworks
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Learn how The British Board articulates standards for training academies, curriculum developers, and aesthetic specialists worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => onNavigate('standards')}
                  className="btn-luxury px-5 py-2.5 bg-[#78163D] hover:bg-[#8F1B4A] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C6A56B]" />
                  <span>Educational Standards</span>
                  <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                </button>
                <button
                  onClick={() => onNavigate('mission-vision')}
                  className="btn-luxury px-5 py-2.5 bg-white hover:bg-stone-50 text-[#202020] border border-[#C6A56B]/60 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors text-center flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Compass className="w-3.5 h-3.5 text-[#78163D]" />
                  <span>Mission & Vision</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
