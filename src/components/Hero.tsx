import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/content';
import { Phone, ShieldCheck, CheckCircle2, ChevronRight, MessageSquareQuote } from 'lucide-react';
import { Logo } from './Logo';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="accueil" className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 lg:py-28 px-4 border-b border-slate-800">
      {/* Subtle decorative background gradient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Official Logo Emblem & 24/7 Badge */}
        <div className="inline-flex items-center gap-3 bg-slate-900/90 border border-amber-400/50 px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-amber-950/40">
          <Logo size="sm" showText={false} />
          <span className="text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-wider">
            {t.hero.badge}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
          <span>{t.hero.titleA} </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 underline decoration-amber-400/30 decoration-wavy decoration-2">
            {t.hero.titleBrand}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-base sm:text-lg md:text-xl mb-6 max-w-3xl mx-auto leading-relaxed font-normal">
          {t.hero.subtitle}
        </p>

        {/* Phone Contact Quick Pill */}
        <div className="inline-flex items-center justify-center gap-2 bg-slate-900/80 border border-slate-800 hover:border-amber-400/50 px-5 py-2.5 rounded-xl mb-10 transition">
          <Phone className="w-4 h-4 text-amber-400" />
          <span className="text-xs text-slate-400">{t.hero.phoneLabel} :</span>
          <a
            href={`tel:${COMPANY_INFO.phoneDisplay.replace(/\s+/g, '')}`}
            className="text-sm sm:text-base font-bold text-amber-400 hover:text-amber-300 transition"
          >
            {COMPANY_INFO.phoneDisplay}
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-14">
          <a
            href="#reservation"
            id="hero-cta-reserve"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition transform active:scale-95"
          >
            <span>{t.hero.cta1}</span>
            <ChevronRight className="w-5 h-5 text-slate-950" />
          </a>

          <a
            href={getWhatsAppUrl('Bonjour ASBIH-TOURS 👋 Je souhaite demander un devis pour un transfert ou circuit au Maroc.')}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta-whatsapp"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-700 bg-slate-900/90 hover:bg-slate-800 hover:border-emerald-500 text-white font-semibold px-8 py-4 rounded-xl transition shadow-md active:scale-95 group"
          >
            <svg className="w-5 h-5 fill-emerald-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.35.49 1.199.534 1.286.044.087.073.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-5.467 0-9.914 4.446-9.914 9.914 0 1.97.575 3.805 1.564 5.356l-1.684 6.152 6.326-1.658c1.488.895 3.23 1.42 5.093 1.42 5.468 0 9.914-4.446 9.914-9.914 0-5.468-4.446-9.914-9.914-9.914z" />
            </svg>
            <span>{t.hero.cta2}</span>
          </a>
        </div>

        {/* Feature Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
          {t.hero.features.map((feature, idx) => (
            <div key={idx} className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-medium text-center">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
