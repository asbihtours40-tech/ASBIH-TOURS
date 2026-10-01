import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Car, Compass, ShieldCheck, Check, ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  lang: Language;
}

export const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car':
        return <Car className="w-6 h-6 text-amber-400" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          {t.services.title}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {t.services.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="servicesGrid">
        {t.services.items.map((item, idx) => (
          <div
            key={idx}
            className="group relative bg-slate-900/90 rounded-2xl p-7 border border-slate-800 hover:border-amber-400/60 transition-all duration-300 shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between"
          >
            <div>
              {/* Icon Container */}
              <div className="w-14 h-14 bg-slate-800/80 rounded-xl flex items-center justify-center border border-slate-700/80 mb-6 group-hover:border-amber-400/40 group-hover:bg-slate-800 transition">
                {getIcon(item.icon)}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {item.text}
              </p>

              {/* Checklist */}
              <ul className="space-y-2.5 mb-6 pt-4 border-t border-slate-800">
                {item.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                    <span className="w-4 h-4 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Booking Link */}
            <a
              href="#reservation"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors pt-3"
            >
              <span>{t.nav.reserve}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
