import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { COMPANY_INFO } from '../data/content';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top summary row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand */}
          <div className="flex items-center text-center md:text-left">
            <Logo size="md" tagline={t.nav.tagline} />
          </div>

          {/* Contact Details */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm">
            <a
              href={`tel:${COMPANY_INFO.phoneDisplay.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>

            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>{t.footer.loc}</span>
            </span>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 text-slate-300 hover:text-amber-400 transition"
            aria-label="Haut de page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright & coverage */}
        <div className="pt-8 text-center text-xs space-y-2">
          <p className="text-slate-400">
            &copy; {currentYear} <strong className="text-amber-400 font-bold">{COMPANY_INFO.name}</strong>. {t.footer.rights}
          </p>
          <p className="text-slate-500 font-medium tracking-wide">
            {t.footer.cities}
          </p>
        </div>
      </div>
    </footer>
  );
};
