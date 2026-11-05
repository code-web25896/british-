import React, { useState } from 'react';
import { Language, PageRoute, ProgramItem } from '../types';
import { translations } from '../i18n/translations';
import { PROGRAMS_CATALOG } from '../data/siteData';
import { Clock, BookOpen, Layers, CheckCircle, ArrowRight, X, LayoutGrid, Sparkles, Palette, Award, Send } from 'lucide-react';

interface ProgramsPageProps {
  onNavigate: (route: PageRoute) => void;
  language: Language;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({
  onNavigate,
  language,
}) => {
  const t = translations[language];
  const [activeTab, setActiveTab] = useState<'all' | 'aesthetics' | 'cosmetology' | 'institutional'>('all');
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  const filteredPrograms =
    activeTab === 'all'
      ? PROGRAMS_CATALOG
      : PROGRAMS_CATALOG.filter((p) => p.category === activeTab);

  return (
    <div className="w-full pt-28 pb-20 bg-[#F8F6F2]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#78163D] font-semibold block mb-2">
            {t.programs.kicker}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#202020] font-medium leading-tight">
            {t.programs.title}
          </h1>
          <div className="w-20 h-[2px] bg-[#C6A56B] my-4" />
          <p className="text-base text-stone-600 font-light leading-relaxed">
            {t.programs.subtitle}
          </p>
        </div>

        {/* Filter Bar with Icons */}
        <div className="mt-8 flex flex-wrap items-center gap-2 p-1.5 bg-white border border-[#C6A56B]/30 rounded-sm w-fit shadow-sm">
          <button
            onClick={() => setActiveTab('all')}
            className={`btn-luxury px-4 py-2 text-xs font-semibold rounded-sm transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'all'
                ? 'bg-[#78163D] text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>{t.programs.filterAll}</span>
          </button>
          <button
            onClick={() => setActiveTab('aesthetics')}
            className={`btn-luxury px-4 py-2 text-xs font-semibold rounded-sm transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'aesthetics'
                ? 'bg-[#78163D] text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.programs.filterAesthetics}</span>
          </button>
          <button
            onClick={() => setActiveTab('cosmetology')}
            className={`btn-luxury px-4 py-2 text-xs font-semibold rounded-sm transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'cosmetology'
                ? 'bg-[#78163D] text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>{t.programs.filterCosmetology}</span>
          </button>
          <button
            onClick={() => setActiveTab('institutional')}
            className={`btn-luxury px-4 py-2 text-xs font-semibold rounded-sm transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'institutional'
                ? 'bg-[#78163D] text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>{t.programs.filterInstitutional}</span>
          </button>
        </div>
      </div>

      {/* Program Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredPrograms.map((prog) => {
            const title = t.programs[prog.titleKey as keyof typeof t.programs] as string;
            const sub = t.programs[prog.subtitleKey as keyof typeof t.programs] as string;
            const desc = t.programs[prog.descKey as keyof typeof t.programs] as string;
            const duration = t.programs[prog.durationKey as keyof typeof t.programs] as string;
            const level = t.programs[prog.levelKey as keyof typeof t.programs] as string;

            return (
              <div
                key={prog.id}
                className="bg-white border border-[#C6A56B]/30 rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#78163D] hover:-translate-y-1 transition-all duration-300 shadow-sm group"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-[#202020]">
                    <img
                      src={prog.image}
                      alt={title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 px-2.5 py-1 bg-[#78163D]/95 text-white text-[10px] uppercase tracking-wider font-semibold rounded-xs shadow-md">
                      {prog.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-xs text-stone-500">
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#C6A56B]" />
                        {duration}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1 font-medium">
                        <Layers className="w-3.5 h-3.5 text-[#C6A56B]" />
                        {level}
                      </span>
                    </div>

                    <h2 className="font-serif text-xl font-semibold text-[#202020] group-hover:text-[#78163D] transition-colors leading-snug">
                      {title}
                    </h2>

                    <p className="text-xs text-[#78163D] font-medium">
                      {sub}
                    </p>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {desc}
                    </p>

                    {/* Highlights */}
                    <div className="pt-2 border-t border-stone-100">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 block mb-2">
                        {t.programs.topicsLabel}
                      </span>
                      <ul className="space-y-1.5 text-xs text-stone-600">
                        {prog.topicsKeys.slice(0, 2).map((top, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-[#C6A56B] shrink-0 mt-0.5" />
                            <span>{top}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-2 border-t border-stone-100 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProgram(prog)}
                    className="btn-luxury flex-1 py-2.5 bg-[#F8F6F2] hover:bg-[#78163D] text-[#78163D] hover:text-white border border-[#C6A56B]/50 hover:border-[#78163D] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all text-center cursor-pointer flex items-center justify-center gap-2"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View Syllabus</span>
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="btn-luxury py-2.5 px-3.5 bg-[#78163D] hover:bg-[#8F1B4A] text-white text-xs font-semibold rounded-sm transition-colors cursor-pointer flex items-center justify-center shadow-sm"
                    title="Inquire about this program"
                  >
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Program Details Modal */}
      {selectedProgram && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
          onClick={() => setSelectedProgram(null)}
        >
          <div
            className="bg-white rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#C6A56B]/40 shadow-2xl p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 text-stone-400 hover:text-stone-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#78163D] font-bold block">
                {selectedProgram.category} · Curricular Track
              </span>
              <h3 className="font-serif text-2xl text-[#202020] font-semibold">
                {t.programs[selectedProgram.titleKey as keyof typeof t.programs] as string}
              </h3>
              <p className="text-sm font-medium text-[#78163D]">
                {t.programs[selectedProgram.subtitleKey as keyof typeof t.programs] as string}
              </p>
              <p className="text-sm text-stone-700 leading-relaxed">
                {t.programs[selectedProgram.descKey as keyof typeof t.programs] as string}
              </p>

              <div className="pt-4 border-t border-stone-200">
                <h4 className="font-serif text-base font-semibold text-[#202020] mb-3">
                  Comprehensive Curriculum Modules
                </h4>
                <ul className="space-y-2">
                  {selectedProgram.topicsKeys.map((top, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle className="w-4 h-4 text-[#C6A56B] shrink-0 mt-0.5" />
                      <span>{top}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setSelectedProgram(null);
                    onNavigate('contact');
                  }}
                  className="btn-luxury flex-1 py-3 bg-[#78163D] hover:bg-[#8F1B4A] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors text-center flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-3.5 h-3.5 text-[#C6A56B]" />
                  <span>Request Program Enrollment Information</span>
                </button>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
