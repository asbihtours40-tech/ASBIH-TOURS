import React, { useState } from 'react';
import { getWhatsAppUrl } from '../data/content';
import { Language } from '../types';

interface FloatingWhatsAppProps {
  lang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const [hovered, setHovered] = useState(false);

  const defaultMsg = lang === 'fr'
    ? 'Bonjour ASBIH-TOURS 👋 Je souhaite des informations sur vos transferts et circuits.'
    : lang === 'es'
    ? '¡Hola ASBIH-TOURS! 👋 Deseo información sobre traslados y circuitos.'
    : 'Hello ASBIH-TOURS! 👋 I would like details about your transfers and tours.';

  const label = lang === 'fr' ? 'WhatsApp 24/7' : lang === 'es' ? 'WhatsApp 24/7' : 'WhatsApp 24/7';

  return (
    <aside
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Contact WhatsApp rapide"
    >
      {/* Tooltip on hover or screen */}
      <span
        className={`hidden sm:inline-block bg-slate-900/95 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-slate-700 shadow-xl transition-all duration-300 pointer-events-none ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        {label}
      </span>

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl(defaultMsg)}
        target="_blank"
        rel="noopener noreferrer"
        id="float-wa-btn"
        className="relative w-14 h-14 bg-emerald-600 hover:bg-emerald-500 rounded-full flex items-center justify-center text-white text-2xl shadow-2xl transition transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
        aria-label="Discuter sur WhatsApp avec ASBIH-TOURS"
      >
        {/* Glow / Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        <svg className="w-7 h-7 fill-current relative z-10" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.35.49 1.199.534 1.286.044.087.073.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-5.467 0-9.914 4.446-9.914 9.914 0 1.97.575 3.805 1.564 5.356l-1.684 6.152 6.326-1.658c1.488.895 3.23 1.42 5.093 1.42 5.468 0 9.914-4.446 9.914-9.914 0-5.468-4.446-9.914-9.914-9.914z" />
        </svg>
      </a>
    </aside>
  );
};
