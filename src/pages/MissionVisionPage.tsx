import React from 'react';
import { Language, PageRoute } from '../types';
import { translations } from '../i18n/translations';
import { ASSET_IMAGES } from '../data/siteData';
import { Award, Sparkles, Shield, Compass, BookOpen, Layers, ArrowRight } from 'lucide-react';

interface MissionVisionPageProps {
  onNavigate: (route: PageRoute) => void;
  language: Language;
}

export const MissionVisionPage: React.FC<MissionVisionPageProps> = ({
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
            {t.missionVision.kicker}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#202020] font-medium leading-tight">
            {t.missionVision.title}
          </h1>
          <div className="w-20 h-[2px] bg-[#C6A56B] my-4" />
          <p className="text-base text-stone-600 font-light leading-relaxed">
            {t.missionVision.subtitle}
          </p>
        </div>
      </div>

      {/* Mission & Vision Major Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white p-8 sm:p-12 border-2 border-[#C6A56B]/30 rounded-sm shadow-md flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-sm bg-[#78163D] border border-[#C6A56B] flex items-center justify-center text-white">
                <Award className="w-7 h-7" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#78163D] block">
                Official Charter
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#202020] font-semibold">
                {t.missionVision.missionTitle}
              </h2>
              <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                {t.missionVision.missionDesc}
              </p>
              <div className="p-4 bg-[#F8F6F2] rounded-sm border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#78163D]">
                <p className="text-xs text-stone-600 italic">
                  {t.missionVision.missionSub}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-[#C6A56B] font-medium">Core Pillar 01</span>
              <button
                onClick={() => onNavigate('standards')}
                className="text-xs font-semibold text-[#78163D] hover:text-[#C6A56B] flex items-center gap-1"
              >
                <span>View Standards</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </button>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 sm:p-12 border-2 border-[#C6A56B]/30 rounded-sm shadow-md flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-sm bg-[#202020] border border-[#C6A56B] flex items-center justify-center text-[#C6A56B]">
                <Sparkles className="w-7 h-7" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#78163D] block">
                Future Horizon
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#202020] font-semibold">
                {t.missionVision.visionTitle}
              </h2>
              <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                {t.missionVision.visionDesc}
              </p>
              <div className="p-4 bg-[#F8F6F2] rounded-sm border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#C6A56B]">
                <p className="text-xs text-stone-600 italic">
                  {t.missionVision.visionSub}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-[#C6A56B] font-medium">Core Pillar 02</span>
              <button
                onClick={() => onNavigate('standards')}
                className="text-xs font-semibold text-[#78163D] hover:text-[#C6A56B] flex items-center gap-1 cursor-pointer"
              >
                <span>Accreditation Standards</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#78163D] font-semibold">
            Fundamental Ethos
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#202020] font-medium">
            {t.missionVision.coreValuesTitle}
          </h2>
          <div className="w-16 h-[2px] bg-[#C6A56B] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 border border-[#C6A56B]/25 rounded-sm shadow-sm space-y-3 hover:border-[#78163D] transition-colors">
            <div className="w-10 h-10 rounded-sm bg-[#78163D]/10 flex items-center justify-center text-[#78163D]">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#202020]">
              {t.missionVision.val1Title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t.missionVision.val1Desc}
            </p>
          </div>

          <div className="bg-white p-6 border border-[#C6A56B]/25 rounded-sm shadow-sm space-y-3 hover:border-[#78163D] transition-colors">
            <div className="w-10 h-10 rounded-sm bg-[#78163D]/10 flex items-center justify-center text-[#78163D]">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#202020]">
              {t.missionVision.val2Title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t.missionVision.val2Desc}
            </p>
          </div>

          <div className="bg-white p-6 border border-[#C6A56B]/25 rounded-sm shadow-sm space-y-3 hover:border-[#78163D] transition-colors">
            <div className="w-10 h-10 rounded-sm bg-[#78163D]/10 flex items-center justify-center text-[#78163D]">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#202020]">
              {t.missionVision.val3Title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t.missionVision.val3Desc}
            </p>
          </div>

          <div className="bg-white p-6 border border-[#C6A56B]/25 rounded-sm shadow-sm space-y-3 hover:border-[#78163D] transition-colors">
            <div className="w-10 h-10 rounded-sm bg-[#78163D]/10 flex items-center justify-center text-[#78163D]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#202020]">
              {t.missionVision.val4Title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t.missionVision.val4Desc}
            </p>
          </div>
        </div>
      </div>

      {/* International Symposium Banner with Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-sm overflow-hidden bg-[#202020] text-white border border-[#C6A56B]/40 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-4">
              <span className="text-[11px] uppercase tracking-widest text-[#C6A56B] font-semibold">
                Global Collaboration
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium">
                Bridging Knowledge Across Continents
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Our vision reaches beyond local salon traditions to create an interconnected community of beauty educators, researchers, and practitioners who hold each other to the highest ethical and instructional standards.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-luxury px-6 py-3.5 bg-[#78163D] hover:bg-[#8F1B4A] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors border border-[#C6A56B] shadow-lg flex items-center gap-2.5 cursor-pointer"
                >
                  <Award className="w-4 h-4 text-[#C6A56B]" />
                  <span>Join Our Institutional Dialogue</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 h-full min-h-[250px]">
              <img
                src={ASSET_IMAGES.masterclass}
                alt="International Aesthetics Symposium"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
