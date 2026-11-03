import React, { useState, useEffect, useRef } from 'react';
import { Language, PageRoute } from '../types';
import { translations } from '../i18n/translations';
import { ASSET_IMAGES } from '../data/siteData';
import heroUkFlag from '../assets/images/uk_british.jpg';
import heroBrBoard from '../assets/images/br_board.webp';
import heroUkFlagsWave from '../assets/images/uk_2_british.jpg';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Sparkles,
  Award,
  BookOpen,
  GraduationCap,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

interface HeroCarouselProps {
  onNavigate: (route: PageRoute) => void;
  language: Language;
}

interface SlideData {
  id: string;
  image: string;
  badgeIcon: React.ReactNode;
  badgeText: {
    en: string;
    fr: string;
  };
  headline: {
    en: string;
    fr: string;
  };
  subheadline: {
    en: string;
    fr: string;
  };
  primaryAction: {
    label: { en: string; fr: string };
    route?: PageRoute;
    externalUrl?: string;
    icon: React.ReactNode;
  };
  secondaryAction: {
    label: { en: string; fr: string };
    route: PageRoute;
    icon: React.ReactNode;
  };
  tabLabel: {
    en: string;
    fr: string;
  };
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onNavigate, language }) => {
  const t = translations[language];

  const slides: SlideData[] = [
    {
      id: 'slide-1',
      image: heroUkFlag,
      badgeIcon: <ShieldCheck className="w-3.5 h-3.5 text-[#C6A56B]" />,
      badgeText: {
        en: 'British Board of Aesthetics & Cosmetology · London · Paris · Tunis',
        fr: 'British Board of Aesthetics & Cosmetology · Londres · Paris · Tunis',
      },
      headline: {
        en: 'Shaping the Future of Aesthetics & Cosmetology',
        fr: 'Façonner l’Avenir de l’Esthétique & de la Cosmétologie',
      },
      subheadline: {
        en: 'Advancing beauty education through professional development, British curriculum standards, and strategic institutional partnerships.',
        fr: 'Faire progresser l’enseignement de la beauté grâce aux normes d’excellence britanniques et aux partenariats académiques.',
      },
      primaryAction: {
        label: { en: 'Discover British Board', fr: 'Découvrir le British Board' },
        route: 'about',
        icon: <Award className="w-4 h-4 text-[#C6A56B]" />,
      },
      secondaryAction: {
        label: { en: 'Educational Standards', fr: 'Normes Pédagogiques' },
        route: 'standards',
        icon: <BookOpen className="w-4 h-4" />,
      },
      tabLabel: {
        en: 'British Standards',
        fr: 'Normes Britanniques',
      },
    },
    {
      id: 'slide-2',
      image: heroBrBoard,
      badgeIcon: <Award className="w-3.5 h-3.5 text-[#C6A56B]" />,
      badgeText: {
        en: 'Official Educational Authority · London Headquarters',
        fr: 'Autorité Éducative Officielle · Siège à Londres',
      },
      headline: {
        en: 'The British Board of Aesthetics & Cosmetology',
        fr: 'The British Board of Aesthetics & Cosmetology',
      },
      subheadline: {
        en: 'Setting authoritative qualification frameworks and peer-reviewed evaluation criteria for beauty therapists and vocational academies worldwide.',
        fr: 'Définir des cadres de qualification de référence et des critères d’évaluation reconnus internationalement.',
      },
      primaryAction: {
        label: {
          en: 'Educational Standards',
          fr: 'Normes Pédagogiques',
        },
        route: 'standards',
        icon: <ShieldCheck className="w-4 h-4 text-[#C6A56B]" />,
      },
      secondaryAction: {
        label: {
          en: 'About British Board',
          fr: 'À Propos du Board',
        },
        route: 'about',
        icon: <BookOpen className="w-4 h-4" />,
      },
      tabLabel: {
        en: 'The British Board',
        fr: 'The British Board',
      },
    },
    {
      id: 'slide-3',
      image: heroUkFlagsWave,
      badgeIcon: <Sparkles className="w-3.5 h-3.5 text-[#C6A56B]" />,
      badgeText: {
        en: 'Strategic Synergy · London · Paris · Tunis',
        fr: 'Synergie Stratégique · Londres · Paris · Tunis',
      },
      headline: {
        en: 'Precision Cosmetology & Dermal Science',
        fr: 'Cosmétologie de Précision & Science Cutanée',
      },
      subheadline: {
        en: 'Bridging British educational rigor with premier European and Mediterranean centers in strategic synergy with L’Académie Internationale de Beauté.',
        fr: 'Unir la rigueur pédagogique britannique avec l’excellence européenne et méditerranéenne en synergie avec L’Académie Internationale de Beauté.',
      },
      primaryAction: {
        label: {
          en: 'Contact Board',
          fr: 'Contacter le Conseil',
        },
        route: 'contact',
        icon: <Award className="w-4 h-4 text-[#C6A56B]" />,
      },
      secondaryAction: {
        label: {
          en: 'Institutional Gallery',
          fr: 'Galerie d’Images',
        },
        route: 'gallery',
        icon: <Sparkles className="w-4 h-4" />,
      },
      tabLabel: {
        en: 'Global Synergy',
        fr: 'Synergie Globale',
      },
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [keyReset, setKeyReset] = useState(0);
  const slideDuration = 1500; // Auto-transition of 1.5s per image

  const timerRef = useRef<number | null>(null);

  // Preload all carousel images for seamless 1.5s professional transition without flashes
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setKeyReset((k) => k + 1);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setKeyReset((k) => k + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setKeyReset((k) => k + 1);
  };

  useEffect(() => {
    if (!isPlaying) return;
    timerRef.current = window.setTimeout(() => {
      nextSlide();
    }, slideDuration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentSlide, isPlaying]);

  const active = slides[currentSlide];

  return (
    <div
      className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-[#151515] overflow-hidden text-white"
    >
      {/* Background Image Carousel with Pro Cinematic Transform and Crossfade */}
      {slides.map((slide, idx) => {
        const isActive = idx === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0 bg-[#121212] flex items-center justify-center overflow-hidden">
              <img
                src={slide.image}
                alt={slide.headline[language]}
                referrerPolicy="no-referrer"
                className={`w-full h-full ${
                  slide.id === 'slide-2'
                    ? 'object-contain max-w-lg max-h-[480px] p-6 opacity-40'
                    : 'object-cover'
                } object-center ${
                  isActive ? 'animate-hero-pro' : 'scale-105'
                }`}
              />
            </div>
            {/* Multi-layered luxury overlays: dark gradient + burgundy tone + subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#1E1E1E]/80 to-[#78163D]/45" />
            <div className="absolute inset-0 bg-radial-vignette opacity-50" />
            <div className="absolute inset-0 bg-black/25 mix-blend-multiply" />
          </div>
        );
      })}

      {/* Decorative Golden Corner Accents */}
      <div className="absolute top-24 left-8 rtl:left-auto rtl:right-8 w-16 h-16 border-t-2 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#C6A56B]/30 pointer-events-none z-20 hidden md:block" />
      <div className="absolute top-24 right-8 rtl:right-auto rtl:left-8 w-16 h-16 border-t-2 border-r-2 rtl:border-r-0 rtl:border-l-2 border-[#C6A56B]/30 pointer-events-none z-20 hidden md:block" />

      {/* Main Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center flex flex-col items-center">
        {/* Animated Badge */}
        <div
          key={`badge-${currentSlide}-${keyReset}`}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#78163D]/85 border border-[#C6A56B]/70 backdrop-blur-md shadow-lg mb-6 transform transition-all duration-700"
        >
          {active.badgeIcon}
          <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#F8F6F2] font-semibold">
            {active.badgeText[language]}
          </span>
        </div>

        {/* Dynamic Animated Headline */}
        <h1
          key={`headline-${currentSlide}-${keyReset}`}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white max-w-4xl leading-[1.14] text-balance drop-shadow-md"
        >
          {active.headline[language]}
        </h1>

        {/* Decorative Gold Filigree Divider */}
        <div className="flex items-center justify-center gap-3 my-6 w-full max-w-xs">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C6A56B]" />
          <div className="w-2.5 h-2.5 rotate-45 border border-[#C6A56B] bg-[#78163D]" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C6A56B]" />
        </div>

        {/* Subtitle */}
        <p
          key={`sub-${currentSlide}-${keyReset}`}
          className="text-base sm:text-lg lg:text-xl text-stone-200 max-w-2xl font-light leading-relaxed mb-8"
        >
          {active.subheadline[language]}
        </p>

        {/* Official Tagline Banner Box */}
        <div className="p-4 bg-[#202020]/75 backdrop-blur-md border border-[#C6A56B]/40 rounded-sm mb-10 max-w-2xl shadow-xl">
          <p className="font-serif italic text-sm text-[#F8F6F2]">
            "{t.common.tagline}"
          </p>
          <p className="text-xs text-[#C6A56B] mt-1 tracking-wider uppercase font-semibold">
            {t.common.supportingMessage}
          </p>
        </div>

        {/* Luxury CTA Buttons with Icons and Hover Shine */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {active.primaryAction.externalUrl ? (
            <a
              href={active.primaryAction.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury w-full sm:w-auto px-8 py-4 bg-[#78163D] hover:bg-[#8F1B4A] text-white text-xs font-semibold uppercase tracking-widest rounded-sm border border-[#C6A56B] shadow-2xl flex items-center justify-center gap-3 group"
            >
              {active.primaryAction.icon}
              <span>{active.primaryAction.label[language]}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </a>
          ) : (
            <button
              onClick={() => active.primaryAction.route && onNavigate(active.primaryAction.route)}
              className="btn-luxury w-full sm:w-auto px-8 py-4 bg-[#78163D] hover:bg-[#8F1B4A] text-white text-xs font-semibold uppercase tracking-widest rounded-sm border border-[#C6A56B] shadow-2xl flex items-center justify-center gap-3 group cursor-pointer"
            >
              {active.primaryAction.icon}
              <span>{active.primaryAction.label[language]}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </button>
          )}

          <button
            onClick={() => onNavigate(active.secondaryAction.route)}
            className="btn-luxury w-full sm:w-auto px-8 py-4 bg-[#202020]/80 hover:bg-[#202020] text-stone-100 hover:text-white text-xs font-semibold uppercase tracking-widest rounded-sm border border-[#C6A56B]/50 hover:border-[#C6A56B] backdrop-blur-md shadow-lg flex items-center justify-center gap-3 group cursor-pointer"
          >
            {active.secondaryAction.icon}
            <span>{active.secondaryAction.label[language]}</span>
          </button>
        </div>
      </div>

      {/* Manual Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-[#78163D] text-white border border-[#C6A56B]/50 hover:border-[#C6A56B] backdrop-blur-md transition-all duration-300 shadow-xl cursor-pointer group"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5 rtl:rotate-180 rtl:group-hover:translate-x-0.5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-[#78163D] text-white border border-[#C6A56B]/50 hover:border-[#C6A56B] backdrop-blur-md transition-all duration-300 shadow-xl cursor-pointer group"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
      </button>

      {/* Bottom Carousel Pagination / Timeline Bar */}
      <div className="absolute bottom-6 left-0 right-0 z-30 max-w-4xl mx-auto px-4">
        <div className="bg-[#1C1C1C]/85 backdrop-blur-md border border-[#C6A56B]/30 rounded-sm p-2 sm:p-3 flex items-center justify-between gap-3 shadow-2xl">
          {/* Slides tabs with progress bar */}
          <div className="grid grid-cols-4 gap-2 flex-1">
            {slides.map((s, idx) => {
              const isCurrent = idx === currentSlide;
              return (
                <button
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  className={`text-left rtl:text-right p-1.5 sm:p-2 rounded-xs transition-all relative overflow-hidden cursor-pointer ${
                    isCurrent ? 'bg-[#78163D]/40 text-white' : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                    <span className={isCurrent ? 'text-[#C6A56B] font-bold' : ''}>
                      0{idx + 1}
                    </span>
                    <span className="hidden sm:inline truncate text-[11px] font-sans">
                      {s.tabLabel[language]}
                    </span>
                  </div>

                  {/* Animated Progress Bar under active slide */}
                  <div className="w-full h-[2px] bg-stone-700 rounded-full overflow-hidden">
                    {isCurrent ? (
                      <div
                        key={`bar-${currentSlide}-${keyReset}`}
                        className="h-full bg-[#C6A56B]"
                        style={{
                          animation: isPlaying
                            ? `progress-fill ${slideDuration}ms linear forwards`
                            : 'none',
                          width: isPlaying ? '100%' : '100%',
                        }}
                      />
                    ) : null}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Autoplay status badge & Play/Pause button */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono tracking-wider text-[#C6A56B] bg-[#78163D]/40 border border-[#C6A56B]/30">
              <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span>1.5s Auto</span>
            </div>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-sm text-stone-300 hover:text-[#C6A56B] hover:bg-stone-800 transition-colors cursor-pointer shrink-0"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Inline styles for the progress fill animation */}
      <style>{`
        @keyframes progress-fill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};
