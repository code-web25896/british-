import React from 'react';
import { Language, PageRoute } from '../types';
import { translations } from '../i18n/translations';
import { ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (route: PageRoute) => void;
  language: Language;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate, language }) => {
  const t = translations[language];

  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center pt-28 pb-20 bg-[#F8F6F2]">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <span className="font-serif text-6xl font-bold text-[#78163D] block">
          404
        </span>
        <h1 className="font-serif text-2xl font-semibold text-[#202020]">
          {t.common.pageNotFound}
        </h1>
        <div className="w-16 h-[2px] bg-[#C6A56B] mx-auto" />
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          {t.common.pageNotFoundDesc}
        </p>
        <div className="pt-4">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#78163D] text-white hover:bg-[#8F1B4A] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors border border-[#C6A56B]"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            <span>{t.common.backToHome}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
