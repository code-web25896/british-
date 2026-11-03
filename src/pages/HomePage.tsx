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
        return <GraduationCap className="w-6 h-6 text-[#C6A56B]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#C6A56B]" />;
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-[#C6A56B]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#C6A56B]" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#C6A56B]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#C6A56B]" />;
      default:
        return <Award className="w-6 h-6 text-[#C6A56B]" />;
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
    <div className="w-full">
      {/* 1. HERO SECTION: INTERACTIVE SLIDESHOW / CAROUSEL WITH KEN BURNS & PROGRESS TIMELINE */}
      <section className="relative w-full">
        <HeroCarousel onNavigate={onNavigate} language={language} />
      </section>

      {/* Institutional Distinction Bar Below Hero */}
      <section className="bg-[#1C1C1C] border-y border-[#C6A56B]/30 py-6 text-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C6A56B] tabular-nums">
                6+
              </span>
              <span className="text-[11px] text-stone-400 uppercase tracking-wider font-medium mt-1">
                Curricular Disciplines
              </span>
            </div>
            <div className="flex flex-col items-center border-l rtl:border-l-0 rtl:border-r border-stone-800">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C6A56B] tabular-nums">
                5 Pillars
              </span>
              <span className="text-[11px] text-stone-400 uppercase tracking-wider font-medium mt-1">
                Educational Standards
              </span>
            </div>
            <div className="flex flex-col items-center border-l rtl:border-l-0 rtl:border-r border-stone-800">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C6A56B] tabular-nums">
                Paris · Tunis
              </span>
              <span className="text-[11px] text-stone-400 uppercase tracking-wider font-medium mt-1">
                Strategic Partner Hubs
              </span>
            </div>
            <div className="flex flex-col items-center border-l rtl:border-l-0 rtl:border-r border-stone-800">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C6A56B] tabular-nums">
                100%
              </span>
              <span className="text-[11px] text-stone-400 uppercase tracking-wider font-medium mt-1">
                Verified Guidelines
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT ABAC SECTION */}
      <section id="about-section" className="py-24 bg-[#F8F6F2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Narrative prose with Drop Cap & Institutional Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#78163D]/10 border border-[#78163D]/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#78163D]" />
                  <span className="text-xs uppercase tracking-widest text-[#78163D] font-bold">
                    {t.about.kicker}
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#202020] font-medium leading-tight">
                  {t.about.title}
                </h2>
                <div className="flex items-center gap-2 pt-1">
                  <div className="w-16 h-[2px] bg-[#C6A56B]" />
                  <div className="w-2 h-2 rotate-45 bg-[#78163D]" />
                </div>
              </div>

              <p className="drop-cap text-stone-700 leading-relaxed text-sm sm:text-base">
                {t.about.p1}
              </p>

              <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                {t.about.p2}
              </p>

              <p className="text-stone-600 leading-relaxed text-sm">
                {t.about.p3}
              </p>

              {/* Three Institutional Tenets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#C6A56B]/25">
                <div className="p-4 bg-white border border-[#C6A56B]/30 rounded-sm shadow-sm hover:border-[#78163D] hover:-translate-y-1 transition-all duration-300">
                  <div className="w-8 h-8 rounded-sm bg-[#78163D]/10 flex items-center justify-center text-[#78163D] mb-2">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-sm font-semibold text-[#78163D] mb-1">
                    {t.about.pillar1Title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {t.about.pillar1Desc}
                  </p>
                </div>
                <div className="p-4 bg-white border border-[#C6A56B]/30 rounded-sm shadow-sm hover:border-[#78163D] hover:-translate-y-1 transition-all duration-300">
                  <div className="w-8 h-8 rounded-sm bg-[#78163D]/10 flex items-center justify-center text-[#78163D] mb-2">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-sm font-semibold text-[#78163D] mb-1">
                    {t.about.pillar2Title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {t.about.pillar2Desc}
                  </p>
                </div>
                <div className="p-4 bg-white border border-[#C6A56B]/30 rounded-sm shadow-sm hover:border-[#78163D] hover:-translate-y-1 transition-all duration-300">
                  <div className="w-8 h-8 rounded-sm bg-[#78163D]/10 flex items-center justify-center text-[#78163D] mb-2">
                    <Globe className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-sm font-semibold text-[#78163D] mb-1">
                    {t.about.pillar3Title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {t.about.pillar3Desc}
                  </p>
                </div>
              </div>

              {/* Luxury Action Button with Icon */}
              <div className="pt-3">
                <button
                  onClick={() => onNavigate('about')}
                  className="btn-luxury inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#78163D] text-white hover:bg-[#8F1B4A] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-300 border border-[#C6A56B]/60 shadow-md cursor-pointer group"
                >
                  <BookOpen className="w-4 h-4 text-[#C6A56B]" />
                  <span>{t.common.learnMore}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Column: Editorial Laboratory Photograph with Luxury Double Frame */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#78163D]/30 to-[#C6A56B]/40 rounded-sm transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                <div className="relative bg-[#202020] rounded-sm overflow-hidden border-2 border-[#C6A56B]/50 shadow-2xl">
                  <div className="overflow-hidden">
                    <img
                      src={ASSET_IMAGES.about}
                      alt="ABAC Aesthetics Education Laboratory Session"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  {/* Subtle caption banner */}
                  <div className="p-4 bg-[#202020] text-stone-300 border-t border-[#C6A56B]/30 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-serif text-white font-medium flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#C6A56B]" />
                        Aesthetics Training Laboratory
                      </p>
                      <p className="text-[10px] text-[#C6A56B] uppercase tracking-wider">
                        Educational Quality Standards
                      </p>
                    </div>
                    <span className="text-[11px] text-stone-400 font-mono">FIG. 01</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION SECTION */}
      <section className="py-24 bg-white border-y border-[#C6A56B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#78163D]/10 border border-[#78163D]/30">
              <Compass className="w-3.5 h-3.5 text-[#78163D]" />
              <span className="text-xs uppercase tracking-widest text-[#78163D] font-bold">
                {t.missionVision.kicker}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#202020] font-medium">
              {t.missionVision.title}
            </h2>
            <div className="w-16 h-[2px] bg-[#C6A56B] mx-auto" />
            <p className="text-sm text-stone-600 leading-relaxed">
              {t.missionVision.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: MISSION */}
            <div className="relative bg-[#F8F6F2] p-8 sm:p-10 border-2 border-[#C6A56B]/30 rounded-sm shadow-md flex flex-col justify-between hover:border-[#78163D] hover:-translate-y-1 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-sm bg-[#78163D] border border-[#C6A56B] flex items-center justify-center shadow-md">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#78163D]">
                  Institutional Mandate
                </span>
                <h3 className="font-serif text-2xl text-[#202020] font-semibold">
                  {t.missionVision.missionTitle}
                </h3>
                <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                  {t.missionVision.missionDesc}
                </p>
                <div className="pt-2">
                  <p className="text-xs text-stone-600 italic border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#C6A56B] pl-3 rtl:pl-0 rtl:pr-3">
                    {t.missionVision.missionSub}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#C6A56B]/25 flex items-center justify-between">
                <span className="text-xs font-medium text-stone-500">Core Objective 01</span>
                <button
                  onClick={() => onNavigate('mission-vision')}
                  className="btn-luxury px-4 py-2 bg-[#78163D] text-white text-xs font-semibold uppercase tracking-wider rounded-sm flex items-center gap-2 group-hover:bg-[#8F1B4A] transition-colors cursor-pointer"
                >
                  <Award className="w-3.5 h-3.5 text-[#C6A56B]" />
                  <span>{t.common.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </button>
              </div>
            </div>

            {/* Card 2: VISION */}
            <div className="relative bg-[#F8F6F2] p-8 sm:p-10 border-2 border-[#C6A56B]/30 rounded-sm shadow-md flex flex-col justify-between hover:border-[#78163D] hover:-translate-y-1 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-sm bg-[#202020] border border-[#C6A56B] flex items-center justify-center shadow-md">
                  <Sparkles className="w-6 h-6 text-[#C6A56B]" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#78163D]">
                  Global Trajectory
                </span>
                <h3 className="font-serif text-2xl text-[#202020] font-semibold">
                  {t.missionVision.visionTitle}
                </h3>
                <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                  {t.missionVision.visionDesc}
                </p>
                <div className="pt-2">
                  <p className="text-xs text-stone-600 italic border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#C6A56B] pl-3 rtl:pl-0 rtl:pr-3">
                    {t.missionVision.visionSub}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#C6A56B]/25 flex items-center justify-between">
                <span className="text-xs font-medium text-stone-500">Core Objective 02</span>
                <button
                  onClick={() => onNavigate('mission-vision')}
                  className="btn-luxury px-4 py-2 bg-[#202020] text-stone-100 hover:text-white text-xs font-semibold uppercase tracking-wider rounded-sm flex items-center gap-2 border border-[#C6A56B]/50 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C6A56B]" />
                  <span>{t.common.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AREAS OF EXCELLENCE SECTION */}
      <section className="py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#78163D]/10 border border-[#78163D]/30">
              <Award className="w-3.5 h-3.5 text-[#78163D]" />
              <span className="text-xs uppercase tracking-widest text-[#78163D] font-bold">
                {t.areas.kicker}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#202020] font-medium">
              {t.areas.title}
            </h2>
            <div className="w-16 h-[2px] bg-[#C6A56B] mx-auto" />
            <p className="text-sm text-stone-600 leading-relaxed">
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
                  className="bg-white p-7 border border-[#C6A56B]/30 rounded-sm shadow-sm hover:shadow-xl hover:border-[#78163D] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-sm bg-[#78163D]/5 border border-[#C6A56B]/40 flex items-center justify-center group-hover:bg-[#78163D] transition-colors">
                        <div className="group-hover:text-white transition-colors">
                          {renderIcon(area.iconName)}
                        </div>
                      </div>
                      <span className="text-xs font-mono text-[#C6A56B] font-bold">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-semibold text-[#202020] mb-2.5 group-hover:text-[#78163D] transition-colors">
                      {itemTitle}
                    </h3>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {itemDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-stone-400">Institutional Pillar</span>
                    <button
                      onClick={() => onNavigate('standards')}
                      className="btn-luxury px-3 py-1.5 bg-[#F8F6F2] hover:bg-[#78163D] text-[#78163D] hover:text-white border border-[#C6A56B]/40 rounded-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>{t.common.learnMore}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. EDUCATIONAL STANDARDS SECTION */}
      <section className="py-24 bg-[#202020] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Header & Intro */}
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#78163D] border border-[#C6A56B]/60">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C6A56B]" />
                <span className="text-xs uppercase tracking-widest text-[#F8F6F2] font-semibold">
                  {t.standards.kicker}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-medium leading-tight">
                {t.standards.title}
              </h2>
              <div className="w-16 h-[2px] bg-[#C6A56B]" />
              <p className="text-stone-300 text-sm leading-relaxed">
                {t.standards.intro}
              </p>
              <div className="pt-4">
                <button
                  onClick={() => onNavigate('standards')}
                  className="btn-luxury px-6 py-3.5 bg-[#78163D] hover:bg-[#8F1B4A] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors border border-[#C6A56B] flex items-center gap-2.5 shadow-lg cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-[#C6A56B]" />
                  <span>Explore Full Standards Document</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </button>
              </div>
            </div>

            {/* Right: The 5 Pillars list */}
            <div className="lg:col-span-7 space-y-6">
              {EDUCATIONAL_STANDARDS.map((pillar) => {
                const title = t.standards[pillar.titleKey as keyof typeof t.standards] as string;
                const deck = t.standards[pillar.deckKey as keyof typeof t.standards] as string;

                return (
                  <div
                    key={pillar.id}
                    className="p-6 bg-[#272727] border border-[#C6A56B]/30 rounded-sm hover:border-[#C6A56B] hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-sm bg-[#78163D] border border-[#C6A56B]/60 font-serif text-sm text-[#C6A56B] font-bold flex items-center justify-center">
                        {pillar.number}
                      </span>
                      <h3 className="font-serif text-lg font-medium text-white">
                        {title}
                      </h3>
                    </div>
                    <p className="text-xs text-stone-300 mb-4">{deck}</p>
                    <div className="space-y-2">
                      {pillar.pointsKeys.map((ptKey) => {
                        const ptText = t.standards[ptKey as keyof typeof t.standards] as string;
                        return (
                          <div key={ptKey} className="flex items-start gap-2.5 text-xs text-stone-400">
                            <Check className="w-3.5 h-3.5 text-[#C6A56B] shrink-0 mt-0.5" />
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
      <section className="py-24 bg-[#F8F6F2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-[#C6A56B]/50 rounded-sm p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Academy Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#78163D]/10 border border-[#78163D]/30 rounded-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#78163D]" />
                  <span className="text-[11px] uppercase tracking-wider text-[#78163D] font-bold">
                    {t.academie.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#202020] font-semibold">
                    {t.academie.title}
                  </h2>
                  <p className="font-serif italic text-sm text-[#78163D]">
                    "{t.academie.tagline}"
                  </p>
                </div>

                <p className="text-sm text-stone-700 leading-relaxed">
                  {t.academie.p1}
                </p>

                <p className="text-sm text-stone-700 leading-relaxed">
                  {t.academie.p2}
                </p>

                {/* Academy Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-200">
                  <div className="p-3 bg-[#F8F6F2] border border-[#C6A56B]/25 rounded-sm">
                    <p className="font-serif text-xs font-semibold text-[#78163D] mb-1">
                      {t.academie.highlight1Title}
                    </p>
                    <p className="text-[11px] text-stone-600">
                      {t.academie.highlight1Desc}
                    </p>
                  </div>
                  <div className="p-3 bg-[#F8F6F2] border border-[#C6A56B]/25 rounded-sm">
                    <p className="font-serif text-xs font-semibold text-[#78163D] mb-1">
                      {t.academie.highlight2Title}
                    </p>
                    <p className="text-[11px] text-stone-600">
                      {t.academie.highlight2Desc}
                    </p>
                  </div>
                  <div className="p-3 bg-[#F8F6F2] border border-[#C6A56B]/25 rounded-sm">
                    <p className="font-serif text-xs font-semibold text-[#78163D] mb-1">
                      {t.academie.highlight3Title}
                    </p>
                    <p className="text-[11px] text-stone-600">
                      {t.academie.highlight3Desc}
                    </p>
                  </div>
                </div>

                {/* Direct Action Buttons with Icons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href="https://lacademie-internationale.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#78163D] hover:bg-[#8F1B4A] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-300 border border-[#C6A56B] shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4 text-[#C6A56B]" />
                    <span>{t.academie.visitCta}</span>
                  </a>

                  <button
                    onClick={() => onNavigate('academie')}
                    className="btn-luxury inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-[#202020] hover:bg-stone-50 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors border border-[#C6A56B]/60 shadow-sm cursor-pointer"
                  >
                    <GraduationCap className="w-4 h-4 text-[#78163D]" />
                    <span>Institutional Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </button>
                </div>

                {/* Accurate relationship statement */}
                <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-sm text-[11px] text-stone-500 leading-relaxed">
                  <span className="font-semibold text-stone-700 block mb-0.5">
                    {t.academie.noteTitle}:
                  </span>
                  {t.academie.noteText}
                </div>
              </div>

              {/* Right Column: Visual of L'Académie Internationale */}
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div className="relative rounded-sm overflow-hidden border-2 border-[#C6A56B]/60 shadow-2xl bg-[#202020]">
                    <div className="overflow-hidden">
                      <img
                        src={ASSET_IMAGES.academie}
                        alt="L’Académie Internationale de Beauté Paris Workshop Atelier"
                        referrerPolicy="no-referrer"
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="p-4 bg-[#202020] text-white flex items-center justify-between border-t border-[#C6A56B]/30">
                      <div>
                        <p className="font-serif text-xs font-medium">
                          Campuses: Paris & Tunis
                        </p>
                        <p className="text-[10px] text-[#C6A56B] uppercase tracking-wider">
                          https://lacademie-internationale.com/
                        </p>
                      </div>
                      <a
                        href="https://lacademie-internationale.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-[#78163D] text-white rounded hover:bg-[#8F1B4A] transition-colors"
                        aria-label="Open academy website"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.1 OFFICIAL ACADEMY SERVICES & PRICING CATALOG (EXTRACTED FROM LACADEMIE-INTERNATIONALE.COM) */}
      <section className="py-24 bg-gradient-to-b from-[#1C1C1C] via-[#242424] to-[#1C1C1C] text-white border-y-2 border-[#C6A56B]/40 relative overflow-hidden">
        {/* Subtle background luxury accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#78163D]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C6A56B]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header & Controls */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#78163D] border border-[#C6A56B]/50 shadow-md">
                <Tag className="w-3.5 h-3.5 text-[#C6A56B]" />
                <span className="text-xs uppercase tracking-widest text-[#F8F6F2] font-semibold">
                  {t.pricing.kicker}
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-medium leading-tight">
                {t.pricing.title}
              </h2>
              <div className="w-20 h-[2px] bg-[#C6A56B]" />
              <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
                {t.pricing.subtitle}
              </p>
            </div>

            {/* Controls: Currency Switcher & Category Filter */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-4">
              {/* Currency Selector */}
              <div className="flex items-center gap-2 bg-[#2D2D2D] p-1.5 rounded-sm border border-[#C6A56B]/40 shadow-inner">
                <span className="text-[11px] uppercase tracking-wider text-stone-400 font-mono px-2">
                  Devise :
                </span>
                <button
                  type="button"
                  onClick={() => setPricingCurrency('USD')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                    pricingCurrency === 'USD'
                      ? 'bg-[#78163D] text-white shadow-sm border border-[#C6A56B]'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  <span>USD ($)</span>
                  <span className="text-[10px] text-[#C6A56B]">US Dollar</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPricingCurrency('EUR')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                    pricingCurrency === 'EUR'
                      ? 'bg-[#78163D] text-white shadow-sm border border-[#C6A56B]'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  <span>EUR (€)</span>
                  <span className="text-[10px] text-[#C6A56B]">Euro</span>
                </button>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap items-center gap-1.5 bg-[#2D2D2D]/80 p-1 rounded-sm border border-stone-700">
                <button
                  type="button"
                  onClick={() => setPricingCategory('all')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                    pricingCategory === 'all'
                      ? 'bg-[#C6A56B] text-[#1C1C1C] font-semibold'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {t.pricing.filterAll}
                </button>
                <button
                  type="button"
                  onClick={() => setPricingCategory('clinical')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                    pricingCategory === 'clinical'
                      ? 'bg-[#C6A56B] text-[#1C1C1C] font-semibold'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {t.pricing.filterFacial}
                </button>
                <button
                  type="button"
                  onClick={() => setPricingCategory('cosmetology')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                    pricingCategory === 'cosmetology'
                      ? 'bg-[#C6A56B] text-[#1C1C1C] font-semibold'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {t.pricing.filterAntiaging}
                </button>
                <button
                  type="button"
                  onClick={() => setPricingCategory('pack')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                    pricingCategory === 'pack'
                      ? 'bg-[#C6A56B] text-[#1C1C1C] font-semibold'
                      : 'text-stone-300 hover:text-white'
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
                  className={`relative rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 border ${
                    service.isPopular
                      ? 'bg-gradient-to-b from-[#2E1822] via-[#242022] to-[#1C1C1C] border-[#C6A56B] shadow-2xl scale-[1.01]'
                      : 'bg-[#272727] border-stone-800 hover:border-[#C6A56B]/60 shadow-lg'
                  }`}
                >
                  {/* Popular or Savings Badge */}
                  {service.isPopular && (
                    <div className="absolute top-3 right-3 z-20 px-3 py-1 bg-gradient-to-r from-[#C6A56B] to-[#E3C994] text-[#202020] text-[10px] font-bold uppercase tracking-wider rounded-xs shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#78163D]" />
                      <span>Flagship Credential</span>
                    </div>
                  )}

                  {service.originalPriceUsd && (
                    <div className="absolute top-3 left-3 z-20 px-2.5 py-1 bg-[#78163D] text-white text-[10px] font-bold uppercase tracking-wider rounded-xs shadow-md flex items-center gap-1 border border-[#C6A56B]/40">
                      <BadgePercent className="w-3.5 h-3.5 text-[#C6A56B]" />
                      <span>Save 35%</span>
                    </div>
                  )}

                  <div>
                    {/* Course Editorial Image */}
                    <div className="relative h-48 sm:h-52 overflow-hidden bg-black/60">
                      <img
                        src={cardImage}
                        alt={title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-black/20 to-transparent" />

                      {/* Duration Tag */}
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/75 backdrop-blur-sm border border-stone-700 rounded-xs text-[11px] text-stone-200 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#C6A56B]" />
                        <span>{duration}</span>
                      </div>

                      {/* Signature Badge */}
                      <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-[#78163D]/90 border border-[#C6A56B]/50 rounded-xs text-[10px] text-[#F8F6F2] font-medium">
                        {badge}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-white group-hover:text-[#C6A56B] transition-colors leading-snug">
                          {title}
                        </h3>
                        <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                          {description}
                        </p>
                      </div>

                      {/* Pricing Tag Display */}
                      <div className="p-3.5 bg-[#1C1C1C] border border-[#C6A56B]/30 rounded-xs flex items-baseline justify-between">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-mono">
                            {pricingCurrency === 'USD' ? 'Tarif Officiel Board ($ USD)' : 'Tarif Officiel Board (€ EUR)'}
                          </span>
                          <div className="flex items-baseline gap-2 mt-0.5">
                            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C6A56B] tabular-nums">
                              {currentPrice}
                            </span>
                            {originalPrice && (
                              <span className="text-xs text-stone-500 line-through tabular-nums">
                                {originalPrice}
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="text-[10px] text-stone-400 font-medium">
                          {t.pricing.guaranteeCert}
                        </span>
                      </div>

                      {/* Syllabus & Highlights */}
                      <div className="space-y-2 pt-2 border-t border-stone-800">
                        {highlights.map((item: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-300">
                            <CheckCheck className="w-4 h-4 text-[#C6A56B] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-6 pt-2 border-t border-stone-800/80 space-y-2.5 bg-black/20">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="btn-luxury w-full py-3 bg-[#78163D] hover:bg-[#8F1B4A] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-all flex items-center justify-center gap-2 border border-[#C6A56B]/60 shadow-md cursor-pointer"
                    >
                      <span>{t.pricing.bookEnroll}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C6A56B] rtl:rotate-180" />
                    </button>

                    <a
                      href="tel:+447497275861"
                      className="w-full py-2.5 bg-[#202020] hover:bg-stone-800 text-stone-200 hover:text-white text-xs font-medium rounded-xs transition-colors flex items-center justify-center gap-2 border border-stone-700"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C6A56B]" />
                      <span>Board Secretariat: +44 7497 275861</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Official Verification Footnote */}
          <div className="mt-12 p-6 bg-[#272727] border border-[#C6A56B]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#C6A56B] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-sm font-semibold text-white">
                  American Board of Aesthetics and Cosmetology (ABAC) · Partenariats Paris & Tunis
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed mt-0.5">
                  {t.pricing.officialAcademyNotice}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://lacademie-internationale.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury px-5 py-2.5 bg-[#C6A56B] hover:bg-[#D4B782] text-[#202020] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2 shadow-sm"
              >
                <span>Académie Partenaire (Paris · Tunis)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="tel:+447497275861"
                className="btn-luxury px-4 py-2.5 bg-[#78163D] hover:bg-[#8F1B4A] text-white text-xs font-semibold rounded-xs border border-[#C6A56B]/50 flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A56B]" />
                <span className="tabular-nums">+44 7497 275861</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROGRAMS & PROFESSIONAL DEVELOPMENT PREVIEW */}
      <section className="py-24 bg-white border-b border-[#C6A56B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#78163D]/10 border border-[#78163D]/30">
                <BookOpen className="w-3.5 h-3.5 text-[#78163D]" />
                <span className="text-xs uppercase tracking-widest text-[#78163D] font-bold">
                  {t.programs.kicker}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#202020] font-medium">
                {t.programs.title}
              </h2>
              <div className="w-16 h-[2px] bg-[#C6A56B]" />
              <p className="text-sm text-stone-600 max-w-xl">
                {t.programs.subtitle}
              </p>
            </div>

            {/* Filter buttons with Icons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F8F6F2] border border-[#C6A56B]/40 rounded-sm">
              <button
                onClick={() => setActiveProgramTab('all')}
                className={`btn-luxury px-3.5 py-2 text-xs font-semibold rounded-sm transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeProgramTab === 'all'
                    ? 'bg-[#78163D] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>{t.programs.filterAll}</span>
              </button>
              <button
                onClick={() => setActiveProgramTab('aesthetics')}
                className={`btn-luxury px-3.5 py-2 text-xs font-semibold rounded-sm transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeProgramTab === 'aesthetics'
                    ? 'bg-[#78163D] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.programs.filterAesthetics}</span>
              </button>
              <button
                onClick={() => setActiveProgramTab('cosmetology')}
                className={`btn-luxury px-3.5 py-2 text-xs font-semibold rounded-sm transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeProgramTab === 'cosmetology'
                    ? 'bg-[#78163D] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Scissors className="w-3.5 h-3.5" />
                <span>{t.programs.filterCosmetology}</span>
              </button>
              <button
                onClick={() => setActiveProgramTab('institutional')}
                className={`btn-luxury px-3.5 py-2 text-xs font-semibold rounded-sm transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeProgramTab === 'institutional'
                    ? 'bg-[#78163D] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
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
                  className="bg-[#F8F6F2] border border-[#C6A56B]/30 rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#78163D] hover:-translate-y-1 transition-all duration-300 shadow-sm group"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden bg-[#202020]">
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

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div className="text-xs text-stone-500 font-medium">
                        <span>{duration}</span>
                        <span className="mx-1.5">·</span>
                        <span>{level}</span>
                      </div>

                      <h3 className="font-serif text-lg font-semibold text-[#202020] group-hover:text-[#78163D] transition-colors leading-snug">
                        {title}
                      </h3>

                      <p className="text-xs text-[#78163D] font-medium">
                        {sub}
                      </p>

                      <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                        {desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-stone-200/60">
                    <button
                      onClick={() => onNavigate('programs')}
                      className="btn-luxury w-full py-2.5 bg-white hover:bg-[#78163D] text-[#78163D] hover:text-white border border-[#C6A56B]/60 hover:border-[#78163D] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{t.common.learnMore}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('programs')}
              className="btn-luxury inline-flex items-center gap-2.5 px-8 py-4 bg-[#78163D] text-white hover:bg-[#8F1B4A] text-xs font-semibold uppercase tracking-widest rounded-sm transition-colors border border-[#C6A56B] shadow-lg cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-[#C6A56B]" />
              <span>{t.common.viewAll} Programs</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE ABAC? */}
      <section className="py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#78163D]/10 border border-[#78163D]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#78163D]" />
              <span className="text-xs uppercase tracking-widest text-[#78163D] font-bold">
                {t.whyChoose.kicker}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#202020] font-medium">
              {t.whyChoose.title}
            </h2>
            <div className="w-16 h-[2px] bg-[#C6A56B] mx-auto" />
            <p className="text-sm text-stone-600 leading-relaxed">
              {t.whyChoose.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                num: '01',
                icon: <ShieldCheck className="w-5 h-5 text-[#C6A56B]" />,
                title: t.whyChoose.point1Title,
                desc: t.whyChoose.point1Desc,
              },
              {
                num: '02',
                icon: <TrendingUp className="w-5 h-5 text-[#C6A56B]" />,
                title: t.whyChoose.point2Title,
                desc: t.whyChoose.point2Desc,
              },
              {
                num: '03',
                icon: <Sparkles className="w-5 h-5 text-[#C6A56B]" />,
                title: t.whyChoose.point3Title,
                desc: t.whyChoose.point3Desc,
              },
              {
                num: '04',
                icon: <Globe className="w-5 h-5 text-[#C6A56B]" />,
                title: t.whyChoose.point4Title,
                desc: t.whyChoose.point4Desc,
              },
              {
                num: '05',
                icon: <Award className="w-5 h-5 text-[#C6A56B]" />,
                title: t.whyChoose.point5Title,
                desc: t.whyChoose.point5Desc,
              },
            ].map((pt) => (
              <div
                key={pt.num}
                className="bg-white p-6 border border-[#C6A56B]/30 rounded-sm shadow-sm hover:border-[#78163D] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-sm bg-[#78163D]/10 flex items-center justify-center">
                      {pt.icon}
                    </div>
                    <span className="font-serif text-sm font-bold text-[#C6A56B]">
                      {pt.num}.
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-semibold text-[#202020] mb-2 leading-snug">
                    {pt.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GALLERY PREVIEW */}
      <section className="py-24 bg-white border-t border-[#C6A56B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#78163D]/10 border border-[#78163D]/30">
                <Camera className="w-3.5 h-3.5 text-[#78163D]" />
                <span className="text-xs uppercase tracking-widest text-[#78163D] font-bold">
                  {t.gallery.kicker}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#202020] font-medium">
                {t.gallery.title}
              </h2>
              <div className="w-16 h-[2px] bg-[#C6A56B]" />
              <p className="text-sm text-stone-600">
                {t.gallery.subtitle}
              </p>
            </div>

            <button
              onClick={() => onNavigate('gallery')}
              className="btn-luxury inline-flex items-center gap-2 px-5 py-2.5 bg-[#F8F6F2] hover:bg-[#78163D] text-[#78163D] hover:text-white border border-[#C6A56B]/50 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer group"
            >
              <Camera className="w-3.5 h-3.5 text-[#C6A56B]" />
              <span>{t.common.viewAll} Gallery</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
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
                  className="relative group rounded-sm overflow-hidden bg-[#202020] cursor-pointer shadow-md border border-[#C6A56B]/40 aspect-4/3"
                >
                  <img
                    src={item.image}
                    alt={itemTitle}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <span className="text-[10px] uppercase tracking-wider text-[#C6A56B] font-bold block mb-1">
                      {itemLoc}
                    </span>
                    <h4 className="font-serif text-xs font-medium leading-snug line-clamp-2">
                      {itemTitle}
                    </h4>
                  </div>

                  <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 p-2 bg-[#78163D]/90 border border-[#C6A56B] rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. CALL TO ACTION & INQUIRY BANNER */}
      <section className="py-20 bg-gradient-to-r from-[#78163D] via-[#5A0F2D] to-[#420A20] text-white relative overflow-hidden border-t-2 border-[#C6A56B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/30 border border-[#C6A56B]/50">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C6A56B]" />
            <span className="text-xs uppercase tracking-widest text-[#C6A56B] font-semibold">
              Institutional Collaboration
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-medium max-w-3xl mx-auto leading-tight">
            Join the Global Effort to Elevate Beauty Education Standards
          </h2>

          <p className="text-sm sm:text-base text-stone-200 max-w-2xl mx-auto leading-relaxed font-light">
            Whether you are an aspiring beauty professional, an accredited educator, or a vocational training academy, the American Board of Aesthetics and Cosmetology welcomes your inquiry.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-luxury px-8 py-4 bg-[#C6A56B] hover:bg-[#D4B782] text-[#202020] text-xs font-semibold uppercase tracking-widest rounded-sm transition-all shadow-xl cursor-pointer flex items-center justify-center gap-2.5"
            >
              <Send className="w-4 h-4 text-[#78163D]" />
              <span>{t.common.inquireNow}</span>
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="btn-luxury px-8 py-4 bg-[#202020]/70 hover:bg-[#202020] text-white text-xs font-semibold uppercase tracking-widest rounded-sm transition-all border border-[#C6A56B]/60 cursor-pointer flex items-center justify-center gap-2.5"
            >
              <Compass className="w-4 h-4 text-[#C6A56B]" />
              <span>{t.common.discoverABAC}</span>
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
