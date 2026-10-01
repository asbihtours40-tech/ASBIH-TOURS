import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { DESTINATIONS_DATA } from '../data/content';
import { Anchor, Compass, Building2, Plane, MapPin } from 'lucide-react';

interface DestinationsProps {
  lang: Language;
}

export const Destinations: React.FC<DestinationsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const getIcon = (iconName: string, isGold?: boolean) => {
    const colorClass = isGold ? 'text-amber-400' : 'text-blue-400';
    switch (iconName) {
      case 'Anchor':
        return <Anchor className={`w-6 h-6 ${colorClass}`} />;
      case 'Compass':
        return <Compass className={`w-6 h-6 ${colorClass}`} />;
      case 'Building2':
        return <Building2 className={`w-6 h-6 ${colorClass}`} />;
      case 'Plane':
      default:
        return <Plane className={`w-6 h-6 ${colorClass}`} />;
    }
  };

  return (
    <section id="destinations" className="py-20 bg-slate-950 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            {t.destinations.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.destinations.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="destGrid">
          {DESTINATIONS_DATA.map((dest, idx) => {
            const locItem = t.destinations.items[idx] || { name: dest.name, desc: dest.desc, highlights: dest.tag || '' };
            return (
              <div
                key={idx}
                className="group bg-slate-900/90 rounded-2xl p-6 border border-slate-800 hover:border-amber-400/50 transition-all duration-300 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 bg-slate-800/80 rounded-xl flex items-center justify-center border border-slate-700/80 group-hover:border-amber-400/40 transition">
                      {getIcon(dest.icon, dest.gold)}
                    </div>
                    {locItem.highlights && (
                      <span className="text-[10px] font-bold bg-slate-800 text-amber-400 px-2.5 py-1 rounded-full border border-slate-700/80 uppercase tracking-wider">
                        {locItem.highlights}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition">
                    {locItem.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {locItem.desc}
                  </p>
                </div>

                <a
                  href="#reservation"
                  className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1 text-xs font-semibold text-slate-400 group-hover:text-amber-400 transition"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Réserver vers {locItem.name.split('&')[0].trim()}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
