import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  title: string;
  location: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
  title,
  location,
}) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-[#1A1A1A] border border-[#C6A56B]/30 rounded-sm overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-[#202020]">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#C6A56B] font-medium block">
              {location}
            </span>
            <h4 className="font-serif text-lg text-white font-medium">
              {title}
            </h4>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image viewport */}
        <div className="relative bg-black flex items-center justify-center max-h-[70vh] min-h-[300px]">
          <img
            src={item.image}
            alt={title}
            referrerPolicy="no-referrer"
            className="max-h-[70vh] w-auto object-contain mx-auto"
          />

          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#78163D] transition-colors border border-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#78163D] transition-colors border border-white/20"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-6 py-3 bg-[#202020] border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
          <span>The British Board · Official Archive</span>
          <span className="uppercase tracking-wider text-[11px] text-[#C6A56B]">
            {item.category}
          </span>
        </div>
      </div>
    </div>
  );
};
