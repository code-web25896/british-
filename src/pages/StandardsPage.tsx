import React from 'react';
import { Language, PageRoute } from '../types';
import { translations } from '../i18n/translations';
import { EDUCATIONAL_STANDARDS } from '../data/siteData';
import { CheckCircle2, ShieldCheck, FileText, ArrowRight } from 'lucide-react';

interface StandardsPageProps {
  onNavigate: (route: PageRoute) => void;
  language: Language;
}

export const StandardsPage: React.FC<StandardsPageProps> = ({
  onNavigate,
  language,
}) => {
  const t = translations[language];

  return (
    <div className="w-full pt-28 pb-20 bg-[#F8F6F2]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#78163D] font-semibold block mb-2">
            {t.standards.kicker}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#202020] font-medium leading-tight">
            {t.standards.title}
          </h1>
          <div className="w-20 h-[2px] bg-[#C6A56B] my-4" />
          <p className="text-base text-stone-600 font-light leading-relaxed">
            {t.standards.subtitle}
          </p>
        </div>
      </div>

      {/* Standards Editorial Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Main 5 Pillars column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="p-6 bg-white border border-[#C6A56B]/25 rounded-sm shadow-sm">
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                {t.standards.intro}
              </p>
            </div>

            {EDUCATIONAL_STANDARDS.map((pillar) => {
              const title = t.standards[pillar.titleKey as keyof typeof t.standards] as string;
              const deck = t.standards[pillar.deckKey as keyof typeof t.standards] as string;

              return (
                <div
                  key={pillar.id}
                  className="bg-white p-8 border border-[#C6A56B]/25 rounded-sm shadow-sm space-y-5"
                >
                  <div className="flex items-center gap-4 pb-4 border-b border-stone-100">
                    <span className="w-10 h-10 rounded-sm bg-[#78163D] text-white font-serif font-bold text-sm flex items-center justify-center shrink-0">
                      {pillar.number}
                    </span>
                    <div>
                      <h2 className="font-serif text-xl sm:text-2xl text-[#202020] font-semibold">
                        {title}
                      </h2>
                      <p className="text-xs text-[#78163D] font-medium mt-0.5">
                        {deck}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    {pillar.pointsKeys.map((ptKey) => {
                      const ptText = t.standards[ptKey as keyof typeof t.standards] as string;
                      return (
                        <div key={ptKey} className="flex items-start gap-3 text-sm text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-[#C6A56B] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{ptText}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Sidebar: Assessment Criteria & Visual */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="bg-[#202020] text-white p-6 rounded-sm border border-[#C6A56B]/40 shadow-xl space-y-4">
              <div className="w-10 h-10 rounded-sm bg-[#78163D] flex items-center justify-center text-white mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">
                Institutional Quality Audits
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                The British Board provides structured evaluation frameworks for academies seeking to verify that their laboratory sanitation, equipment calibration, and educator credentials meet internationally recognized benchmarks.
              </p>

              <div className="pt-4 border-t border-stone-800 space-y-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-luxury w-full py-3 bg-[#C6A56B] hover:bg-[#D4B782] text-[#202020] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#78163D]" />
                  <span>Request Evaluation Form</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
