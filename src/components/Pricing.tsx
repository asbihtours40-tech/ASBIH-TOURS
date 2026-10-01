import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { PRICING_DATA, getWhatsAppUrl } from '../data/content';
import { Plane, Compass, Navigation, Clock, ShieldAlert, Sparkles, Check } from 'lucide-react';

interface PricingProps {
  lang: Language;
}

export const Pricing: React.FC<PricingProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [showEur, setShowEur] = useState(false);
  const EUR_RATE = 10.8; // Approximate conversion 1 EUR ≈ 10.8 MAD

  const formatPrice = (mad: number) => {
    if (showEur) {
      const eur = Math.round(mad / EUR_RATE);
      return `${eur.toLocaleString('fr-FR')} €`;
    }
    return `${mad.toLocaleString('fr-FR')} ${t.tarifs.currency}`;
  };

  const sectionsConfig: {
    key: 'transfers' | 'tours' | 'distance';
    icon: React.ReactNode;
    popular?: boolean;
  }[] = [
    {
      key: 'transfers',
      icon: <Plane className="w-5 h-5 text-amber-400" />,
    },
    {
      key: 'tours',
      icon: <Compass className="w-5 h-5 text-amber-400" />,
      popular: true,
    },
    {
      key: 'distance',
      icon: <Navigation className="w-5 h-5 text-amber-400" />,
    },
  ];

  return (
    <section id="tarifs" className="py-20 bg-slate-950 border-y border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-amber-400/40 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.tarifs.badge}</span>
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            <span>{t.tarifs.titleA}</span>
            <span className="text-amber-400">{t.tarifs.highlight}</span>
          </h2>

          <p className="text-slate-300 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            <span>{t.tarifs.introA}</span>
            <strong className="text-amber-400 font-bold">{t.tarifs.strong}</strong>
            <span>{t.tarifs.introB}</span>
          </p>

          {/* Currency Toggle (MAD / EUR) */}
          <div className="mt-5 inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-lg p-1 text-xs">
            <span className="text-slate-400 pl-2 text-[11px]">Devise / Currency:</span>
            <button
              onClick={() => setShowEur(false)}
              className={`px-2.5 py-1 rounded font-bold transition ${
                !showEur ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              MAD (DH)
            </button>
            <button
              onClick={() => setShowEur(true)}
              className={`px-2.5 py-1 rounded font-bold transition ${
                showEur ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              EUR (€)
            </button>
          </div>
        </div>

        {/* Pricing Category Tables */}
        <div className="space-y-12" id="pricingWrap">
          {sectionsConfig.map(({ key, icon, popular }) => {
            const secInfo = t.tarifs.sections[key];
            const routes = PRICING_DATA[key];

            return (
              <div key={key} className="space-y-4">
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      {icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {secInfo.name}
                        </h3>
                        {popular && (
                          <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                            {t.tarifs.popular}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                        {secInfo.note}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Table of Routes */}
                <div className="bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden divide-y divide-slate-800/80 shadow-lg">
                  {routes.map((route, rIdx) => {
                    const waMessage = t.tarifs.routeWa.replace('{route}', `${route.route} (${formatPrice(route.price)})`);
                    return (
                      <div
                        key={rIdx}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 hover:bg-slate-800/40 transition"
                      >
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="font-bold text-white text-base">
                              {route.route}
                            </p>
                            {route.note && (
                              <span className="text-[11px] bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">
                                {route.note}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-amber-400" />
                            <span>{route.time}</span>
                            <span className="text-slate-600">•</span>
                            <span className="text-slate-400">{t.tarifs.fixed}</span>
                          </p>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-5 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/60">
                          <div className="text-left sm:text-right">
                            <span className="text-[10px] uppercase tracking-wider text-amber-400/90 block font-semibold">
                              {t.tarifs.from}
                            </span>
                            <span className="text-xl sm:text-2xl font-black text-amber-400">
                              {formatPrice(route.price)}
                            </span>
                            {showEur && (
                              <span className="text-[10px] text-slate-500 block">
                                (≈ {route.price.toLocaleString('fr-FR')} MAD)
                              </span>
                            )}
                          </div>

                          <a
                            href={getWhatsAppUrl(waMessage)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition active:scale-95 shadow shadow-emerald-950/40 whitespace-nowrap"
                          >
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.35.49 1.199.534 1.286.044.087.073.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-5.467 0-9.914 4.446-9.914 9.914 0 1.97.575 3.805 1.564 5.356l-1.684 6.152 6.326-1.658c1.488.895 3.23 1.42 5.093 1.42 5.468 0 9.914-4.446 9.914-9.914 0-5.468-4.446-9.914-9.914-9.914z" />
                            </svg>
                            <span>{t.tarifs.book}</span>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing disclaimer card */}
        <div className="bg-slate-900/60 rounded-2xl border border-slate-800/80 p-6 mt-12 text-center">
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed">
            <span className="text-amber-400 font-semibold mr-1">ℹ️ Note :</span>
            {t.tarifs.note}
          </p>
        </div>
      </div>
    </section>
  );
};
