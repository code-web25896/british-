import React, { useState } from 'react';
import { Language, PageRoute, NewsItem } from '../types';
import { translations } from '../i18n/translations';
import {
  ASSET_IMAGES,
  AREAS_OF_EXCELLENCE,
  EDUCATIONAL_STANDARDS,
  LATEST_NEWS_ITEMS,
} from '../data/siteData';
import {
  GraduationCap,
  Sparkles,
  Scissors,
  Award,
  BookOpen,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  Globe,
  Send,
  Compass,
  ArrowUpRight,
  Check,
  Calendar,
  Newspaper,
  X,
} from 'lucide-react';
import { HeroCarousel } from '../components/HeroCarousel';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  language: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, language }) => {
  const t = translations[language];
  const [selectedNewsItem, setSelectedNewsItem] = useState<NewsItem | null>(null);

  // Helper to map icon names
  const renderIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#001E6D]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#D90025]" />;
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-[#001E6D]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#D90025]" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#001E6D]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#001E6D]" />;
      default:
        return <Award className="w-6 h-6 text-[#001E6D]" />;
    }
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white text-slate-800">
      {/* 1. HERO SECTION: CLEAN WHITE OFFICIAL BRITISH BOARD BANNER WITH CERTIFICATE CHECKER */}
      <section className="relative w-full max-w-full overflow-hidden">
        <HeroCarousel onNavigate={onNavigate} language={language} />
      </section>

      {/* Institutional Distinction Bar Below Hero */}
      <section className="bg-slate-50 border-b border-slate-200 py-7 text-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="font-serif text-3xl font-bold text-[#001E6D] tabular-nums">
                6+
              </span>
              <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold mt-1">
                Curricular Disciplines
              </span>
            </div>
            <div className="flex flex-col items-center border-l border-slate-200">
              <span className="font-serif text-3xl font-bold text-[#D90025] tabular-nums">
                5 Pillars
              </span>
              <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold mt-1">
                Accreditation Standards
              </span>
            </div>
            <div className="flex flex-col items-center border-l border-slate-200">
              <span className="font-serif text-3xl font-bold text-[#001E6D] tabular-nums">
                France · Africa
              </span>
              <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold mt-1">
                Accredited Hubs
              </span>
            </div>
            <div className="flex flex-col items-center border-l border-slate-200">
              <span className="font-serif text-3xl font-bold text-[#D90025] tabular-nums">
                100%
              </span>
              <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold mt-1">
                UK Standards Verified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT THE BRITISH BOARD SECTION */}
      <section id="about-section" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Narrative prose with Institutional Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#001E6D]" />
                  <span className="text-xs uppercase tracking-widest text-[#001E6D] font-bold">
                    Official UK Institutional Authority
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#001E6D] font-bold leading-tight">
                  About The British Board
                </h2>
                <div className="flex items-center gap-2 pt-1">
                  <div className="w-16 h-1 bg-[#001E6D]" />
                  <div className="w-6 h-1 bg-[#D90025]" />
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed text-base">
                {t.about.p1}
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {t.about.p2}
              </p>

              <p className="text-slate-500 leading-relaxed text-sm">
                {t.about.p3}
              </p>

              {/* Three Institutional Tenets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-md shadow-xs hover:border-[#001E6D] hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-9 h-9 rounded-md bg-[#001E6D]/10 flex items-center justify-center text-[#001E6D] mb-2.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-[#001E6D] mb-1">
                    {t.about.pillar1Title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t.about.pillar1Desc}
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-md shadow-xs hover:border-[#001E6D] hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-9 h-9 rounded-md bg-[#D90025]/10 flex items-center justify-center text-[#D90025] mb-2.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-[#D90025] mb-1">
                    {t.about.pillar2Title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t.about.pillar2Desc}
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-md shadow-xs hover:border-[#001E6D] hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-9 h-9 rounded-md bg-[#001E6D]/10 flex items-center justify-center text-[#001E6D] mb-2.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-[#001E6D] mb-1">
                    {t.about.pillar3Title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t.about.pillar3Desc}
                  </p>
                </div>
              </div>

              {/* Action Button with Icon */}
              <div className="pt-3">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#001E6D] hover:bg-[#00144D] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md transition-all duration-300 cursor-pointer group"
                >
                  <BookOpen className="w-4 h-4 text-white" />
                  <span>{t.common.learnMore}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Column: Editorial Photograph with British Flag accent frame */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="relative bg-white rounded-lg overflow-hidden border-2 border-slate-200 shadow-xl">
                  {/* Subtle British accent bar above image */}
                  <div className="h-1.5 w-full flex">
                    <div className="h-full flex-1 bg-[#001E6D]" />
                    <div className="h-full flex-1 bg-[#D90025]" />
                  </div>
                  <div className="overflow-hidden">
                    <img
                      src={ASSET_IMAGES.about}
                      alt="The British Board Education Laboratory Session"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover transform group-hover:scale-103 transition-transform duration-700 ease-out"
                    />
                  </div>
                  {/* Caption banner */}
                  <div className="p-4 bg-slate-50 text-slate-700 border-t border-slate-200 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-serif text-[#001E6D] font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#D90025]" />
                        Accredited Clinical Training Workshop
                      </p>
                      <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                        British Board Curricular Benchmarking
                      </p>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono font-bold">UK·01</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION SECTION */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 border border-slate-300">
              <Compass className="w-3.5 h-3.5 text-[#001E6D]" />
              <span className="text-xs uppercase tracking-widest text-[#001E6D] font-bold">
                {t.missionVision.kicker}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#001E6D] font-bold">
              {t.missionVision.title}
            </h2>
            <div className="w-16 h-1 bg-[#D90025] mx-auto" />
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.missionVision.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: MISSION */}
            <div className="bg-white p-8 sm:p-10 border border-slate-200 rounded-lg shadow-sm flex flex-col justify-between hover:border-[#001E6D] hover:shadow-md transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-md bg-[#001E6D] flex items-center justify-center shadow-xs">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D90025]">
                  Institutional Mandate
                </span>
                <h3 className="font-serif text-2xl text-[#001E6D] font-bold">
                  {t.missionVision.missionTitle}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {t.missionVision.missionDesc}
                </p>
                <div className="pt-2">
                  <p className="text-xs text-slate-500 italic border-l-2 border-[#001E6D] pl-3">
                    {t.missionVision.missionSub}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">Core Objective 01</span>
                <button
                  onClick={() => onNavigate('mission-vision')}
                  className="px-4 py-2 bg-[#001E6D] hover:bg-[#00144D] text-white text-xs font-bold uppercase tracking-wider rounded-md flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>{t.common.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2: VISION */}
            <div className="bg-white p-8 sm:p-10 border border-slate-200 rounded-lg shadow-sm flex flex-col justify-between hover:border-[#D90025] hover:shadow-md transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-md bg-[#D90025] flex items-center justify-center shadow-xs">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#001E6D]">
                  Global Trajectory
                </span>
                <h3 className="font-serif text-2xl text-[#001E6D] font-bold">
                  {t.missionVision.visionTitle}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {t.missionVision.visionDesc}
                </p>
                <div className="pt-2">
                  <p className="text-xs text-slate-500 italic border-l-2 border-[#D90025] pl-3">
                    {t.missionVision.visionSub}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">Core Objective 02</span>
                <button
                  onClick={() => onNavigate('mission-vision')}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold uppercase tracking-wider rounded-md flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>{t.common.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AREAS OF EXCELLENCE SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300">
              <Award className="w-3.5 h-3.5 text-[#001E6D]" />
              <span className="text-xs uppercase tracking-widest text-[#001E6D] font-bold">
                {t.areas.kicker}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#001E6D] font-bold">
              {t.areas.title}
            </h2>
            <div className="w-16 h-1 bg-[#D90025] mx-auto" />
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.areas.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {AREAS_OF_EXCELLENCE.map((area, idx) => {
              const itemTitle =
                t.areas.items[area.titleKey as keyof typeof t.areas.items] || area.titleKey;
              const itemDesc =
                t.areas.items[area.descKey as keyof typeof t.areas.items] || area.descKey;

              return (
                <div
                  key={area.id}
                  className="bg-slate-50 p-7 border border-slate-200 rounded-lg shadow-xs hover:shadow-md hover:border-[#001E6D] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-md bg-white border border-slate-200 flex items-center justify-center group-hover:bg-[#001E6D] transition-colors shadow-xs">
                        <div className="group-hover:text-white transition-colors">
                          {renderIcon(area.iconName)}
                        </div>
                      </div>
                      <span className="text-xs font-mono text-[#D90025] font-bold">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#001E6D] mb-2.5 transition-colors">
                      {itemTitle}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {itemDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">British Quality Pillar</span>
                    <button
                      onClick={() => onNavigate('standards')}
                      className="px-3 py-1.5 bg-white hover:bg-[#001E6D] text-[#001E6D] hover:text-white border border-slate-300 rounded-md font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. EDUCATIONAL STANDARDS SECTION (OFFICIAL BRITISH NAVY BLUE) */}
      <section className="py-20 bg-[#001E6D] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Header & Intro */}
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D90025] text-white font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t.standards.kicker}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-bold leading-tight">
                {t.standards.title}
              </h2>
              <div className="w-16 h-1 bg-[#D90025]" />
              <p className="text-slate-200 text-sm leading-relaxed">
                {t.standards.intro}
              </p>
              <div className="pt-4">
                <button
                  onClick={() => onNavigate('standards')}
                  className="px-6 py-3.5 bg-[#D90025] hover:bg-[#B5001F] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center gap-2.5 shadow-lg cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-white" />
                  <span>Explore Full Standards Document</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: The 5 Pillars list */}
            <div className="lg:col-span-7 space-y-5">
              {EDUCATIONAL_STANDARDS.map((pillar) => {
                const title = t.standards[pillar.titleKey as keyof typeof t.standards] as string;
                const deck = t.standards[pillar.deckKey as keyof typeof t.standards] as string;

                return (
                  <div
                    key={pillar.id}
                    className="p-6 bg-[#00144D] border border-blue-900/60 rounded-lg hover:border-white/50 transition-all duration-300 shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-md bg-[#D90025] font-serif text-sm text-white font-bold flex items-center justify-center shrink-0">
                        {pillar.number}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-white">
                        {title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-300 mb-4">{deck}</p>
                    <div className="space-y-2">
                      {pillar.pointsKeys.map((ptKey) => {
                        const ptText = t.standards[ptKey as keyof typeof t.standards] as string;
                        return (
                          <div key={ptKey} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-[#D90025] shrink-0 mt-0.5" />
                            <span>{ptText}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURED INSTITUTION: THE INTERNATIONAL ACADEMY OF BEAUTY */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Academy Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#001E6D]/10 border border-[#001E6D]/20 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-[#001E6D]" />
                  <span className="text-[11px] uppercase tracking-wider text-[#001E6D] font-bold">
                    Strategic Educational Partnership
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#001E6D] font-bold">
                    {t.academie.title}
                  </h2>
                  <p className="font-serif italic text-sm text-[#D90025] font-medium">
                    "{t.academie.tagline}"
                  </p>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  {t.academie.p1}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {t.academie.p2}
                </p>

                {/* Academy Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                  <div className="p-3 bg-white border border-slate-200 rounded-md shadow-2xs">
                    <p className="font-serif text-xs font-bold text-[#001E6D] mb-1">
                      {t.academie.highlight1Title}
                    </p>
                    <p className="text-[11px] text-slate-600">
                      {t.academie.highlight1Desc}
                    </p>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-md shadow-2xs">
                    <p className="font-serif text-xs font-bold text-[#001E6D] mb-1">
                      {t.academie.highlight2Title}
                    </p>
                    <p className="text-[11px] text-slate-600">
                      {t.academie.highlight2Desc}
                    </p>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-md shadow-2xs">
                    <p className="font-serif text-xs font-bold text-[#001E6D] mb-1">
                      {t.academie.highlight3Title}
                    </p>
                    <p className="text-[11px] text-slate-600">
                      {t.academie.highlight3Desc}
                    </p>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => onNavigate('standards')}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#001E6D] hover:bg-[#00144D] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all duration-300 shadow-md cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4 text-white" />
                    <span>Accreditation Standards</span>
                  </button>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-slate-800 hover:bg-slate-100 text-xs font-bold uppercase tracking-wider rounded-md transition-colors border border-slate-300 shadow-xs cursor-pointer"
                  >
                    <Award className="w-4 h-4 text-[#D90025]" />
                    <span>Inquire About Accreditation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Accurate relationship statement */}
                <div className="p-3.5 bg-white border border-slate-200 rounded-md text-[11px] text-slate-500 leading-relaxed">
                  <span className="font-bold text-slate-700 block mb-0.5">
                    {t.academie.noteTitle}:
                  </span>
                  {t.academie.noteText}
                </div>
              </div>

              {/* Right Column: Visual of The Academy */}
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-lg bg-white">
                    <div className="overflow-hidden">
                      <img
                        src={ASSET_IMAGES.academie}
                        alt="International Academy Training Atelier"
                        referrerPolicy="no-referrer"
                        className="w-full h-auto object-cover transform group-hover:scale-103 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="p-4 bg-slate-50 text-slate-700 flex items-center justify-between border-t border-slate-200">
                      <div>
                        <p className="font-serif text-xs font-bold text-[#001E6D]">
                          Accredited Centers: France &amp; Africa
                        </p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                          Strategic Educational Partner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LATEST NEWS & ANNOUNCEMENTS (BRITISH BOARD NEWS - DIRECT FROM BRITISH-BOARD.UK/NEWS) */}
      <section id="news" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-300 shadow-2xs">
                <Newspaper className="w-3.5 h-3.5 text-[#001E6D]" />
                <span className="text-xs uppercase tracking-widest text-[#001E6D] font-bold">
                  Official Board Dispatches
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#001E6D] font-bold">
                Latest News &amp; Updates
              </h2>
              <div className="w-16 h-1 bg-[#D90025]" />
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                See The Most Recent News, institutional accreditations, and global developments from The British Board.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-[#001E6D] text-[#001E6D] hover:text-white border border-slate-300 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xs cursor-pointer group"
              >
                <span>Media &amp; Inquiries</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* News Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LATEST_NEWS_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedNewsItem(item)}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#001E6D] hover:shadow-xl transition-all duration-300 shadow-sm group cursor-pointer"
              >
                <div>
                  {/* Thumbnail Cover */}
                  <div className="relative h-52 overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out opacity-95 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#001E6D] text-white text-[10px] uppercase tracking-wider font-bold rounded-xs shadow-md">
                      {item.badge || item.category}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-white text-xs font-medium">
                      <Calendar className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                      <span className="text-slate-200 text-[11px] font-mono">{item.date}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <span className="text-[10px] uppercase tracking-widest text-[#D90025] font-bold block">
                      {item.category}
                    </span>

                    <h3 className="font-serif text-lg font-bold text-[#001E6D] leading-snug group-hover:text-[#D90025] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#001E6D] flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    <span>Read Full Dispatch</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D90025]" />
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-[#001E6D] group-hover:text-white text-[#001E6D] border border-slate-200 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE THE BRITISH BOARD? */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 border border-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-[#001E6D]" />
              <span className="text-xs uppercase tracking-widest text-[#001E6D] font-bold">
                {t.whyChoose.kicker}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#001E6D] font-bold">
              {t.whyChoose.title}
            </h2>
            <div className="w-16 h-1 bg-[#D90025] mx-auto" />
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.whyChoose.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                num: '01',
                icon: <ShieldCheck className="w-5 h-5 text-[#001E6D]" />,
                title: t.whyChoose.point1Title,
                desc: t.whyChoose.point1Desc,
              },
              {
                num: '02',
                icon: <TrendingUp className="w-5 h-5 text-[#D90025]" />,
                title: t.whyChoose.point2Title,
                desc: t.whyChoose.point2Desc,
              },
              {
                num: '03',
                icon: <Sparkles className="w-5 h-5 text-[#001E6D]" />,
                title: t.whyChoose.point3Title,
                desc: t.whyChoose.point3Desc,
              },
              {
                num: '04',
                icon: <Globe className="w-5 h-5 text-[#D90025]" />,
                title: t.whyChoose.point4Title,
                desc: t.whyChoose.point4Desc,
              },
              {
                num: '05',
                icon: <Award className="w-5 h-5 text-[#001E6D]" />,
                title: t.whyChoose.point5Title,
                desc: t.whyChoose.point5Desc,
              },
            ].map((pt) => (
              <div
                key={pt.num}
                className="bg-white p-6 border border-slate-200 rounded-lg shadow-xs hover:border-[#001E6D] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center">
                      {pt.icon}
                    </div>
                    <span className="font-serif text-sm font-bold text-[#D90025]">
                      {pt.num}.
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#001E6D] mb-2 leading-snug">
                    {pt.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CALL TO ACTION & INQUIRY BANNER (BRITISH NAVY & RED ACCENT) */}
      <section className="py-18 bg-[#001E6D] text-white relative overflow-hidden border-t-4 border-[#D90025]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20">
            <ShieldCheck className="w-3.5 h-3.5 text-white" />
            <span className="text-xs uppercase tracking-widest text-white font-bold">
              UK Institutional Collaboration
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold max-w-3xl mx-auto leading-tight">
            Join the Global Effort to Elevate Education &amp; Training Accreditation
          </h2>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Whether you are an educational institution, a vocational training center, or an aspiring accredited professional, The British Board welcomes your application and partnership inquiry.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-[#D90025] hover:bg-[#B5001F] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2.5"
            >
              <Send className="w-4 h-4 text-white" />
              <span>Apply for Accreditation</span>
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-3.5 bg-white text-[#001E6D] hover:bg-slate-100 text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-md cursor-pointer flex items-center justify-center gap-2.5"
            >
              <Compass className="w-4 h-4 text-[#001E6D]" />
              <span>Discover The British Board</span>
            </button>
          </div>
        </div>
      </section>

      {/* News Detail Modal */}
      {selectedNewsItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#001E6D] text-white">
              <div className="flex items-center gap-2">
                <Newspaper className="w-4 h-4 text-amber-300" />
                <span className="text-xs uppercase tracking-widest font-bold">
                  The British Board · News &amp; Dispatches
                </span>
              </div>
              <button
                onClick={() => setSelectedNewsItem(null)}
                className="p-1 text-slate-300 hover:text-white rounded-sm hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Scrollable */}
            <div className="p-6 overflow-y-auto space-y-5">
              <div className="relative h-64 sm:h-72 w-full rounded-md overflow-hidden bg-slate-900 border border-slate-200">
                <img
                  src={selectedNewsItem.image}
                  alt={selectedNewsItem.title}
                  className="w-full h-full object-contain bg-slate-950"
                />
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-500 pb-2 border-b border-slate-100">
                <span className="px-2.5 py-0.5 bg-[#001E6D] text-white text-[10px] font-bold uppercase rounded-xs">
                  {selectedNewsItem.badge || selectedNewsItem.category}
                </span>
                <span className="flex items-center gap-1 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{selectedNewsItem.date}</span>
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#001E6D] leading-snug">
                {selectedNewsItem.title}
              </h3>

              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {selectedNewsItem.summary}
              </p>

              {selectedNewsItem.fullContent && (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-md text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedNewsItem.fullContent}
                </div>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setSelectedNewsItem(null)}
                className="w-full sm:w-auto px-5 py-2.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs font-semibold uppercase rounded-md transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedNewsItem(null);
                  onNavigate('contact');
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#D90025] hover:bg-[#B5001F] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Inquire About This Announcement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
