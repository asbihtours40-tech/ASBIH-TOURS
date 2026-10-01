import React, { useState, useEffect, useCallback } from 'react';
import { Language, GalleryItem } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { GALLERY_ITEMS } from '../data/content';
import { X, ChevronLeft, ChevronRight, Camera, MapPin, ZoomIn } from 'lucide-react';

interface GalleryProps {
  lang: Language;
}

export const Gallery: React.FC<GalleryProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [activeFilter, setActiveFilter] = useState<'all' | 'fleet' | 'tours' | 'transfers'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.cat === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  return (
    <section id="galerie" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          <span>{t.gallery.titleA}</span>
          <span className="text-amber-400">{t.gallery.highlight}</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {t.gallery.subtitle}
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-10" id="galleryFilters">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition border ${
            activeFilter === 'all'
              ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md'
              : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-amber-400'
          }`}
        >
          {t.gallery.all}
        </button>
        <button
          onClick={() => setActiveFilter('fleet')}
          className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition border ${
            activeFilter === 'fleet'
              ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md'
              : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-amber-400'
          }`}
        >
          {t.gallery.cats.fleet}
        </button>
        <button
          onClick={() => setActiveFilter('tours')}
          className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition border ${
            activeFilter === 'tours'
              ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md'
              : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-amber-400'
          }`}
        >
          {t.gallery.cats.tours}
        </button>
        <button
          onClick={() => setActiveFilter('transfers')}
          className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition border ${
            activeFilter === 'transfers'
              ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md'
              : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-amber-400'
          }`}
        >
          {t.gallery.cats.transfers}
        </button>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" id="galleryGrid">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => openLightbox(idx)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-400 transition-all duration-300 cursor-pointer shadow-lg bg-slate-900"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

            {/* Badges and Caption */}
            <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col justify-end text-left">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="inline-block bg-amber-400/90 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                  {t.gallery.cats[item.cat]}
                </span>
                {item.location && (
                  <span className="text-[11px] text-slate-300 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {item.location}
                  </span>
                )}
              </div>
              <p className="text-white font-semibold text-xs sm:text-sm line-clamp-1 group-hover:text-amber-300 transition">
                {item.alt}
              </p>
            </div>

            {/* Hover Icon Indicator */}
            <div className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-950/60 text-white opacity-0 group-hover:opacity-100 transition backdrop-blur-sm">
              <ZoomIn className="w-4 h-4 text-amber-400" />
            </div>
          </div>
        ))}
      </div>

      {/* Helper Note */}
      <p className="text-center text-slate-500 text-xs mt-8 flex items-center justify-center gap-1.5">
        <Camera className="w-3.5 h-3.5 text-amber-400" />
        <span>{t.gallery.hint}</span>
      </p>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          id="lightbox"
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 text-slate-300 hover:text-white p-2 rounded-full bg-slate-900/80 border border-slate-700 transition"
            aria-label="Fermer la vue agrandie"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-8 z-50 text-slate-300 hover:text-white p-3 rounded-full bg-slate-900/80 border border-slate-700 transition active:scale-95"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Lightbox Content */}
          <div
            className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-black">
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].alt}
                className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-white">
                {filteredItems[lightboxIndex].alt}
              </h3>
              {filteredItems[lightboxIndex].caption && (
                <p className="text-sm text-slate-300 mt-1 max-w-xl mx-auto">
                  {filteredItems[lightboxIndex].caption}
                </p>
              )}
              <span className="inline-block text-xs text-amber-400 font-semibold mt-2">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-8 z-50 text-slate-300 hover:text-white p-3 rounded-full bg-slate-900/80 border border-slate-700 transition active:scale-95"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
