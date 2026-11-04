import React, { useState } from 'react';
import { Language, PageRoute, GalleryItem } from '../types';
import { translations } from '../i18n/translations';
import {
  ASSET_IMAGES,
  AREAS_OF_EXCELLENCE,
  EDUCATIONAL_STANDARDS,
  PROGRAMS_CATALOG,
  GALLERY_ITEMS,
  ACADEMY_PRICED_SERVICES,
} from '../data/siteData';
import { AcademyPricedService } from '../types';
import {
  GraduationCap,
  Sparkles,
  Scissors,
  Award,
  BookOpen,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Maximize2,
  LayoutGrid,
  TrendingUp,
  Globe,
  Camera,
  Send,
  Compass,
  ArrowUpRight,
  Check,
  Clock,
  Phone,
  Tag,
  BadgePercent,
  CheckCheck,
  Building2,
  FileCheck2,
} from 'lucide-react';
import { HeroCarousel } from '../components/HeroCarousel';
import { LightboxModal } from '../components/LightboxModal';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  language: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, language }) => {
  const t = translations[language];
  const [activeProgramTab, setActiveProgramTab] = useState<'all' | 'aesthetics' | 'cosmetology' | 'institutional'>('all');
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [pricingCurrency, setPricingCurrency] = useState<'USD' | 'EUR'>('USD');
  const [pricingCategory, setPricingCategory] = useState<'all' | 'clinical' | 'cosmetology' | 'educator' | 'institutional' | 'pack'>('all');

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

  const filteredPrograms =
    activeProgramTab === 'all'
      ? PROGRAMS_CATALOG
      : PROGRAMS_CATALOG.filter((p) => p.category === activeProgramTab);

  const filteredPricedServices =
    pricingCategory === 'all'
      ? ACADEMY_PRICED_SERVICES
      : ACADEMY_PRICED_SERVICES.filter((s) => s.category === pricingCategory);

  const formatPrice = (service: AcademyPricedService, currency: 'USD' | 'EUR') => {
    if (currency === 'USD') {
      return `$${service.priceUsd.toLocaleString()} USD`;
    }
    return `${service.priceEur.toLocaleString()} € EUR`;
  };

  const formatOriginalPrice = (service: AcademyPricedService, currency: 'USD' | 'EUR') => {
    if (currency === 'USD') {
      return service.originalPriceUsd ? `$${service.originalPriceUsd.toLocaleString()} USD` : null;
    }
    return service.originalPriceEur ? `${service.originalPriceEur.toLocaleString()} € EUR` : null;
  };

  const getServiceImage = (serviceId: string) => {
    switch (serviceId) {
      case 'board-cert-clinical-aesthetics':
        return ASSET_IMAGES.about;
      case 'board-cert-advanced-cosmetology':
        return ASSET_IMAGES.cosmetology;
      case 'master-aesthetician-diplomate':
        return ASSET_IMAGES.masterclass;
      case 'certified-aesthetic-educator':
        return ASSET_IMAGES.hero;
      case 'institutional-academy-accreditation':
        return ASSET_IMAGES.academie;
      case 'executive-global-fellowship-pack':
        return ASSET_IMAGES.about;
      default:
        return ASSET_IMAGES.academie;
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
                Educational Standards
              </span>
            </div>
            <div className="flex flex-col items-center border-l border-slate-200">
              <span className="font-serif text-3xl font-bold text-[#001E6D] tabular-nums">
                Paris · Tunis
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
                UK Quality Verified
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
                      alt="British Board Aesthetics Education Laboratory Session"
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

      {/* 6. FEATURED INSTITUTION: L'ACADÉMIE INTERNATIONALE DE BEAUTÉ */}
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
                    <span>Educational Standards</span>
                  </button>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-slate-800 hover:bg-slate-100 text-xs font-bold uppercase tracking-wider rounded-md transition-colors border border-slate-300 shadow-xs cursor-pointer"
                  >
                    <Award className="w-4 h-4 text-[#D90025]" />
                    <span>Inquire About Partnership</span>
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

              {/* Right Column: Visual of L'Académie Internationale */}
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-lg bg-white">
                    <div className="overflow-hidden">
                      <img
                        src={ASSET_IMAGES.academie}
                        alt="L’Académie Internationale de Beauté Paris Workshop Atelier"
                        referrerPolicy="no-referrer"
                        className="w-full h-auto object-cover transform group-hover:scale-103 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="p-4 bg-slate-50 text-slate-700 flex items-center justify-between border-t border-slate-200">
                      <div>
                        <p className="font-serif text-xs font-bold text-[#001E6D]">
                          Campuses: Paris &amp; Tunis
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

      {/* 6.1 OFFICIAL ACADEMY SERVICES & PRICING CATALOG (CLEAN WHITE / SLATE THEME) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200 text-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header & Controls */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 border border-slate-300">
                <Tag className="w-3.5 h-3.5 text-[#001E6D]" />
                <span className="text-xs uppercase tracking-widest text-[#001E6D] font-bold">
                  Accreditation &amp; Credentialing Fees
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#001E6D] font-bold leading-tight">
                {t.pricing.title}
              </h2>
              <div className="w-16 h-1 bg-[#D90025]" />
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.pricing.subtitle}
              </p>
            </div>

            {/* Controls: Currency Switcher & Category Filter */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
              {/* Currency Selector */}
              <div className="flex items-center gap-1.5 bg-white p-1 rounded-md border border-slate-200 shadow-xs">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold px-2">
                  Currency :
                </span>
                <button
                  type="button"
                  onClick={() => setPricingCurrency('USD')}
                  className={`px-3 py-1 text-xs font-bold rounded-sm transition-all cursor-pointer ${
                    pricingCurrency === 'USD'
                      ? 'bg-[#001E6D] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  USD ($)
                </button>
                <button
                  type="button"
                  onClick={() => setPricingCurrency('EUR')}
                  className={`px-3 py-1 text-xs font-bold rounded-sm transition-all cursor-pointer ${
                    pricingCurrency === 'EUR'
                      ? 'bg-[#001E6D] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  EUR (€)
                </button>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap items-center gap-1.5 bg-white p-1 rounded-md border border-slate-200 shadow-xs">
                <button
                  type="button"
                  onClick={() => setPricingCategory('all')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-colors cursor-pointer ${
                    pricingCategory === 'all'
                      ? 'bg-[#001E6D] text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.pricing.filterAll}
                </button>
                <button
                  type="button"
                  onClick={() => setPricingCategory('clinical')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-colors cursor-pointer ${
                    pricingCategory === 'clinical'
                      ? 'bg-[#001E6D] text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.pricing.filterFacial}
                </button>
                <button
                  type="button"
                  onClick={() => setPricingCategory('cosmetology')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-colors cursor-pointer ${
                    pricingCategory === 'cosmetology'
                      ? 'bg-[#001E6D] text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.pricing.filterAntiaging}
                </button>
                <button
                  type="button"
                  onClick={() => setPricingCategory('pack')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-colors cursor-pointer ${
                    pricingCategory === 'pack'
                      ? 'bg-[#001E6D] text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.pricing.filterPack}
                </button>
              </div>
            </div>
          </div>

          {/* Service & Price Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPricedServices.map((service) => {
              const title = service.title[language];
              const duration = service.duration[language];
              const description = service.description[language];
              const badge = service.badge[language];
              const highlights: string[] = service.features[language];
              const currentPrice = formatPrice(service, pricingCurrency);
              const originalPrice = formatOriginalPrice(service, pricingCurrency);
              const cardImage = getServiceImage(service.id);

              return (
                <div
                  key={service.id}
                  className={`relative rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-300 border bg-white ${
                    service.isPopular
                      ? 'border-[#001E6D] shadow-xl ring-2 ring-[#001E6D]/20'
                      : 'border-slate-200 hover:border-slate-400 shadow-md'
                  }`}
                >
                  {/* Flagship Badge */}
                  {service.isPopular && (
                    <div className="absolute top-3 right-3 z-20 px-3 py-1 bg-[#D90025] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-white" />
                      <span>Flagship Credential</span>
                    </div>
                  )}

                  {service.originalPriceUsd && (
                    <div className="absolute top-3 left-3 z-20 px-2.5 py-1 bg-[#001E6D] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-md flex items-center gap-1">
                      <BadgePercent className="w-3.5 h-3.5 text-white" />
                      <span>Save 35%</span>
                    </div>
                  )}

                  <div>
                    {/* Course Editorial Image */}
                    <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                      <img
                        src={cardImage}
                        alt={title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                      {/* Duration Tag */}
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-xs border border-slate-200 rounded-sm text-[11px] font-semibold text-slate-800 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#001E6D]" />
                        <span>{duration}</span>
                      </div>

                      {/* Signature Badge */}
                      <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-[#001E6D] text-white rounded-sm text-[10px] font-bold">
                        {badge}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-serif text-xl font-bold text-[#001E6D] leading-snug">
                          {title}
                        </h3>
                        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                          {description}
                        </p>
                      </div>

                      {/* Pricing Tag Display */}
                      <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-md flex items-baseline justify-between">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-slate-500 block font-semibold">
                            {pricingCurrency === 'USD' ? 'Official Board Rate ($ USD)' : 'Official Board Rate (€ EUR)'}
                          </span>
                          <div className="flex items-baseline gap-2 mt-0.5">
                            <span className="font-serif text-2xl font-bold text-[#001E6D] tabular-nums">
                              {currentPrice}
                            </span>
                            {originalPrice && (
                              <span className="text-xs text-slate-400 line-through tabular-nums">
                                {originalPrice}
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-sm border border-emerald-200">
                          {t.pricing.guaranteeCert}
                        </span>
                      </div>

                      {/* Syllabus & Highlights */}
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        {highlights.map((item: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                            <CheckCheck className="w-4 h-4 text-[#D90025] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-6 pt-2 border-t border-slate-100 space-y-2.5 bg-slate-50/50">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="w-full py-3 bg-[#D90025] hover:bg-[#B5001F] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                    >
                      <span>{t.pricing.bookEnroll}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </button>

                    <a
                      href="tel:+447497275861"
                      className="w-full py-2 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-2 border border-slate-300"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#001E6D]" />
                      <span>Secretariat: +44 7497 275861</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Official Verification Footnote */}
          <div className="mt-12 p-6 bg-white border border-slate-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#001E6D] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-bold text-[#001E6D]">
                  The British Board of Aesthetics and Cosmetology · Paris &amp; Tunis Hubs
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                  {t.pricing.officialAcademyNotice}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 bg-[#001E6D] hover:bg-[#00144D] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Partner Inquiries</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="tel:+447497275861"
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#001E6D] text-xs font-bold rounded-md border border-slate-300 flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#D90025]" />
                <span className="tabular-nums font-mono">+44 7497 275861</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROGRAMS & PROFESSIONAL DEVELOPMENT PREVIEW */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300">
                <BookOpen className="w-3.5 h-3.5 text-[#001E6D]" />
                <span className="text-xs uppercase tracking-widest text-[#001E6D] font-bold">
                  {t.programs.kicker}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#001E6D] font-bold">
                {t.programs.title}
              </h2>
              <div className="w-16 h-1 bg-[#D90025]" />
              <p className="text-sm text-slate-600 max-w-xl">
                {t.programs.subtitle}
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-50 border border-slate-200 rounded-md">
              <button
                onClick={() => setActiveProgramTab('all')}
                className={`px-3.5 py-2 text-xs font-bold rounded-sm transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeProgramTab === 'all'
                    ? 'bg-[#001E6D] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>{t.programs.filterAll}</span>
              </button>
              <button
                onClick={() => setActiveProgramTab('aesthetics')}
                className={`px-3.5 py-2 text-xs font-bold rounded-sm transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeProgramTab === 'aesthetics'
                    ? 'bg-[#001E6D] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.programs.filterAesthetics}</span>
              </button>
              <button
                onClick={() => setActiveProgramTab('cosmetology')}
                className={`px-3.5 py-2 text-xs font-bold rounded-sm transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeProgramTab === 'cosmetology'
                    ? 'bg-[#001E6D] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Scissors className="w-3.5 h-3.5" />
                <span>{t.programs.filterCosmetology}</span>
              </button>
              <button
                onClick={() => setActiveProgramTab('institutional')}
                className={`px-3.5 py-2 text-xs font-bold rounded-sm transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeProgramTab === 'institutional'
                    ? 'bg-[#001E6D] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>{t.programs.filterInstitutional}</span>
              </button>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.slice(0, 3).map((prog) => {
              const title = t.programs[prog.titleKey as keyof typeof t.programs] as string;
              const sub = t.programs[prog.subtitleKey as keyof typeof t.programs] as string;
              const desc = t.programs[prog.descKey as keyof typeof t.programs] as string;
              const duration = t.programs[prog.durationKey as keyof typeof t.programs] as string;
              const level = t.programs[prog.levelKey as keyof typeof t.programs] as string;

              return (
                <div
                  key={prog.id}
                  className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#001E6D] hover:shadow-lg transition-all duration-300 shadow-sm group"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img
                        src={prog.image}
                        alt={title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#001E6D] text-white text-[10px] uppercase tracking-wider font-bold rounded-xs shadow-md">
                        {prog.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div className="text-xs text-slate-500 font-semibold">
                        <span>{duration}</span>
                        <span className="mx-1.5">·</span>
                        <span className="text-[#D90025]">{level}</span>
                      </div>

                      <h3 className="font-serif text-lg font-bold text-[#001E6D] leading-snug">
                        {title}
                      </h3>

                      <p className="text-xs text-slate-500 font-medium">
                        {sub}
                      </p>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => onNavigate('programs')}
                      className="w-full py-2.5 bg-slate-50 hover:bg-[#001E6D] text-[#001E6D] hover:text-white border border-slate-200 hover:border-[#001E6D] text-xs font-bold uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{t.common.learnMore}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('programs')}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#001E6D] text-white hover:bg-[#00144D] text-xs font-bold uppercase tracking-wider rounded-md transition-colors shadow-md cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-white" />
              <span>{t.common.viewAll} Programs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
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

      {/* 9. GALLERY PREVIEW */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300">
                <Camera className="w-3.5 h-3.5 text-[#001E6D]" />
                <span className="text-xs uppercase tracking-widest text-[#001E6D] font-bold">
                  {t.gallery.kicker}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#001E6D] font-bold">
                {t.gallery.title}
              </h2>
              <div className="w-16 h-1 bg-[#D90025]" />
              <p className="text-sm text-slate-600">
                {t.gallery.subtitle}
              </p>
            </div>

            <button
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-50 hover:bg-[#001E6D] text-[#001E6D] hover:text-white border border-slate-300 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer group shadow-xs"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>{t.common.viewAll} Gallery</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_ITEMS.slice(0, 4).map((item) => {
              const itemTitle = t.gallery[item.titleKey as keyof typeof t.gallery] as string;
              const itemLoc = t.gallery[item.locationKey as keyof typeof t.gallery] as string;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedGalleryItem(item)}
                  className="relative group rounded-lg overflow-hidden bg-slate-900 cursor-pointer shadow-md border border-slate-200 aspect-4/3"
                >
                  <img
                    src={item.image}
                    alt={itemTitle}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <span className="text-[10px] uppercase tracking-wider text-[#D90025] font-bold block mb-1">
                      {itemLoc}
                    </span>
                    <h4 className="font-serif text-xs font-medium leading-snug line-clamp-2">
                      {itemTitle}
                    </h4>
                  </div>

                  <div className="absolute top-3 right-3 p-2 bg-[#001E6D] rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. CALL TO ACTION & INQUIRY BANNER (BRITISH NAVY & RED ACCENT) */}
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

      {/* Lightbox Modal */}
      {selectedGalleryItem && (
        <LightboxModal
          item={selectedGalleryItem}
          onClose={() => setSelectedGalleryItem(null)}
          title={t.gallery[selectedGalleryItem.titleKey as keyof typeof t.gallery] as string}
          location={t.gallery[selectedGalleryItem.locationKey as keyof typeof t.gallery] as string}
        />
      )}
    </div>
  );
};
