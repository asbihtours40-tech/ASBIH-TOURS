import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/content';
import { Mail, MapPin, Clock, PhoneCall } from 'lucide-react';
import { Logo } from './Logo';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="contact" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="flex justify-center mb-3">
          <Logo size="md" showText={false} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          {t.contact.title}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* WhatsApp Card */}
        <a
          href={getWhatsAppUrl('Bonjour ASBIH-TOURS 👋 Je souhaite des informations sur vos services de transport.')}
          target="_blank"
          rel="noopener noreferrer"
          id="contact-card-wa"
          className="bg-slate-900/90 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500 transition-all duration-300 text-center group shadow-lg flex flex-col justify-between"
        >
          <div>
            <div className="w-16 h-16 mx-auto bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 text-3xl mb-5 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.35.49 1.199.534 1.286.044.087.073.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-5.467 0-9.914 4.446-9.914 9.914 0 1.97.575 3.805 1.564 5.356l-1.684 6.152 6.326-1.658c1.488.895 3.23 1.42 5.093 1.42 5.468 0 9.914-4.446 9.914-9.914 0-5.468-4.446-9.914-9.914-9.914z" />
              </svg>
            </div>
            <h3 className="font-bold text-white text-lg mb-1">{t.contact.waTitle}</h3>
            <p className="text-base text-slate-300 font-semibold">{COMPANY_INFO.phoneDisplay}</p>
          </div>
          <span className="text-xs text-emerald-400 font-semibold mt-4 inline-block bg-emerald-500/10 border border-emerald-500/20 py-1 px-3 rounded-full">
            {t.contact.waNote}
          </span>
        </a>

        {/* Email Card */}
        <a
          href={`mailto:${COMPANY_INFO.email}?subject=Demande%20de%20renseignements%20ASBIH-TOURS`}
          id="contact-card-email"
          className="bg-slate-900/90 p-8 rounded-2xl border border-slate-800 hover:border-amber-400 transition-all duration-300 text-center group shadow-lg flex flex-col justify-between"
        >
          <div>
            <div className="w-16 h-16 mx-auto bg-amber-400/10 rounded-2xl flex items-center justify-center text-amber-400 text-3xl mb-5 group-hover:scale-110 group-hover:bg-amber-400/20 transition-all">
              <Mail className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="font-bold text-white text-lg mb-1">{t.contact.mailTitle}</h3>
            <p className="text-sm sm:text-base text-slate-300 break-all font-semibold">{COMPANY_INFO.email}</p>
          </div>
          <span className="text-xs text-amber-400 font-semibold mt-4 inline-block bg-amber-400/10 border border-amber-400/20 py-1 px-3 rounded-full">
            {t.contact.mailNote}
          </span>
        </a>

        {/* Location & 24/7 Card */}
        <div
          id="contact-card-loc"
          className="bg-slate-900/90 p-8 rounded-2xl border border-slate-800 text-center shadow-lg flex flex-col justify-between"
        >
          <div>
            <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 text-3xl mb-5">
              <MapPin className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="font-bold text-white text-lg mb-1">{t.contact.locTitle}</h3>
            <p className="text-sm sm:text-base text-slate-300 font-semibold">{t.contact.locValue}</p>
          </div>
          <span className="text-xs text-blue-400 font-semibold mt-4 inline-flex items-center justify-center gap-1 bg-blue-500/10 border border-blue-500/20 py-1 px-3 rounded-full">
            <Clock className="w-3.5 h-3.5" />
            <span>{t.contact.avail}</span>
          </span>
        </div>
      </div>

      {/* Direct Call Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="p-3 bg-amber-400/10 rounded-xl text-amber-400 shrink-0">
            <PhoneCall className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-white font-bold text-base sm:text-lg">
              Une urgence ou une arrivée immédiate ?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Nos chauffeurs sont postés à Tanger Aéroport & Tanger Med 24h/24.
            </p>
          </div>
        </div>
        <a
          href={`tel:${COMPANY_INFO.phoneDisplay.replace(/\s+/g, '')}`}
          className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition active:scale-95 shrink-0 shadow-md shadow-amber-950/40"
        >
          {COMPANY_INFO.phoneDisplay}
        </a>
      </div>
    </section>
  );
};
