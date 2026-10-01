import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { TESTIMONIALS_DATA } from '../data/content';
import { Star, Quote, CheckCircle } from 'lucide-react';

interface TestimonialsProps {
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const getInitials = (fullName: string) => {
    return fullName
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <section id="avis" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          <span>{t.testi.titleA}</span>
          <span className="text-amber-400">{t.testi.highlight}</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {t.testi.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="testiGrid">
        {TESTIMONIALS_DATA.map((item, idx) => (
          <figure
            key={idx}
            className="group bg-slate-900/90 p-6 rounded-2xl border border-slate-800 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(item.rating)].map((_, rIdx) => (
                  <Star key={rIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-slate-300 text-xs sm:text-sm leading-relaxed italic mb-6">
                « {item.text} »
              </blockquote>
            </div>

            {/* Author Info */}
            <figcaption className="flex items-center gap-3 pt-4 border-t border-slate-800">
              <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-black text-sm shrink-0">
                {getInitials(item.name)}
              </div>
              <div className="min-w-0">
                <p className="font-bold text-white text-sm truncate">
                  {item.name}
                </p>
                <p className="text-xs text-slate-400 flex items-center gap-1">
                  <span>{item.country}</span>
                </p>
                <p className="text-[11px] text-blue-400 mt-0.5 truncate font-medium">
                  {item.service}
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="text-center text-slate-500 text-xs mt-8">
        {t.testi.note}
      </p>
    </section>
  );
};
