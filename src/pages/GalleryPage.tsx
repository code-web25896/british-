import React, { useState } from 'react';
import { Language, PageRoute, GalleryItem } from '../types';
import { translations } from '../i18n/translations';
import { GALLERY_ITEMS } from '../data/siteData';
import { Maximize2, Images, GraduationCap, Sparkles, Scissors, Award } from 'lucide-react';
import { LightboxModal } from '../components/LightboxModal';

interface GalleryPageProps {
  onNavigate: (route: PageRoute) => void;
  language: Language;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ language }) => {
  const t = translations[language];
  const [activeFilter, setActiveFilter] = useState<'all' | 'workshops' | 'aesthetics' | 'cosmetology' | 'events'>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleNext = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[prevIndex]);
  };

  return (
    <div className="w-full pt-28 pb-20 bg-[#F8F6F2]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#78163D] font-semibold block mb-2">
            {t.gallery.kicker}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#202020] font-medium leading-tight">
            {t.gallery.title}
          </h1>
          <div className="w-20 h-[2px] bg-[#C6A56B] my-4" />
          <p className="text-base text-stone-600 font-light leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Filter buttons with Icons */}
        <div className="mt-8 flex flex-wrap items-center gap-2 p-1.5 bg-white border border-[#C6A56B]/30 rounded-sm w-fit shadow-sm">
          <button
            onClick={() => setActiveFilter('all')}
            className={`btn-luxury px-4 py-2 text-xs font-semibold rounded-sm transition-colors cursor-pointer flex items-center gap-2 ${
              activeFilter === 'all'
                ? 'bg-[#78163D] text-white'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Images className="w-3.5 h-3.5" />
            <span>{t.gallery.filterAll}</span>
          </button>
          <button
            onClick={() => setActiveFilter('workshops')}
            className={`btn-luxury px-4 py-2 text-xs font-semibold rounded-sm transition-colors cursor-pointer flex items-center gap-2 ${
              activeFilter === 'workshops'
                ? 'bg-[#78163D] text-white'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.gallery.filterWorkshops}</span>
          </button>
          <button
            onClick={() => setActiveFilter('aesthetics')}
            className={`btn-luxury px-4 py-2 text-xs font-semibold rounded-sm transition-colors cursor-pointer flex items-center gap-2 ${
              activeFilter === 'aesthetics'
                ? 'bg-[#78163D] text-white'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.gallery.filterAesthetics}</span>
          </button>
          <button
            onClick={() => setActiveFilter('cosmetology')}
            className={`btn-luxury px-4 py-2 text-xs font-semibold rounded-sm transition-colors cursor-pointer flex items-center gap-2 ${
              activeFilter === 'cosmetology'
                ? 'bg-[#78163D] text-white'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Scissors className="w-3.5 h-3.5" />
            <span>{t.gallery.filterCosmetology}</span>
          </button>
          <button
            onClick={() => setActiveFilter('events')}
            className={`btn-luxury px-4 py-2 text-xs font-semibold rounded-sm transition-colors cursor-pointer flex items-center gap-2 ${
              activeFilter === 'events'
                ? 'bg-[#78163D] text-white'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>{t.gallery.filterEvents}</span>
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredItems.map((item) => {
            const itemTitle = t.gallery[item.titleKey as keyof typeof t.gallery] as string;
            const itemLoc = t.gallery[item.locationKey as keyof typeof t.gallery] as string;

            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="bg-white border border-[#C6A56B]/30 rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:border-[#78163D] transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-[#202020]">
                  <img
                    src={item.image}
                    alt={itemTitle}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 bg-white/90 text-[#78163D] rounded-full shadow-lg">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                <div className="p-5 bg-white border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#78163D] font-bold block mb-1">
                      {itemLoc}
                    </span>
                    <h3 className="font-serif text-sm font-semibold text-[#202020] leading-snug">
                      {itemTitle}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <LightboxModal
          item={activeItem}
          onClose={() => setActiveItem(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          title={t.gallery[activeItem.titleKey as keyof typeof t.gallery] as string}
          location={t.gallery[activeItem.locationKey as keyof typeof t.gallery] as string}
        />
      )}
    </div>
  );
};
