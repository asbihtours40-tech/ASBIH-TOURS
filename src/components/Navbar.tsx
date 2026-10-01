import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/content';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onLanguageChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center gap-4">
        {/* Logo & Brand */}
        <a 
          href="#accueil" 
          id="nav-logo"
          className="flex items-center shrink-0 group focus:outline-none"
          aria-label="ASBIH-TOURS Accueil"
        >
          <Logo size="md" tagline={t.nav.tagline} />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-300">
          <a href="#accueil" id="nav-link-home" className="hover:text-amber-400 transition-colors py-1">
            {t.nav.home}
          </a>
          <a href="#services" id="nav-link-services" className="hover:text-amber-400 transition-colors py-1">
            {t.nav.services}
          </a>
          <a href="#tarifs" id="nav-link-tarifs" className="text-amber-400 hover:text-amber-300 font-semibold transition-colors py-1">
            {t.nav.tarifs}
          </a>
          <a href="#galerie" id="nav-link-gallery" className="hover:text-amber-400 transition-colors py-1">
            {t.nav.gallery}
          </a>
          <a href="#destinations" id="nav-link-destinations" className="hover:text-amber-400 transition-colors py-1">
            {t.nav.destinations}
          </a>
          <a href="#contact" id="nav-link-contact" className="hover:text-amber-400 transition-colors py-1">
            {t.nav.contact}
          </a>
        </nav>

        {/* Right Controls: Languages & WhatsApp button & Mobile toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-lg p-1 text-xs font-bold" id="language-switcher">
            {(['fr', 'en', 'es'] as Language[]).map((l) => (
              <button
                key={l}
                id={`btn-lang-${l}`}
                onClick={() => onLanguageChange(l)}
                className={`px-2 py-1 rounded transition-colors ${
                  lang === l
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
                aria-label={`Langue ${l.toUpperCase()}`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Direct Phone Call Button (desktop icon) */}
          <a
            href={`tel:${COMPANY_INFO.phoneDisplay.replace(/\s+/g, '')}`}
            id="nav-phone-btn"
            className="hidden xl:flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-amber-400 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 transition"
            title="Appeler ASBIH-TOURS"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{COMPANY_INFO.phoneDisplay}</span>
          </a>

          {/* Desktop WhatsApp Action */}
          <a
            href={getWhatsAppUrl(t.tarifs.routeWa.replace('{route}', 'Service Transport'))}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-btn"
            className="hidden sm:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-xs md:text-sm font-bold shadow-md shadow-emerald-950/40 transition active:scale-95"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.35.49 1.199.534 1.286.044.087.073.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-5.467 0-9.914 4.446-9.914 9.914 0 1.97.575 3.805 1.564 5.356l-1.684 6.152 6.326-1.658c1.488.895 3.23 1.42 5.093 1.42 5.468 0 9.914-4.446 9.914-9.914 0-5.468-4.446-9.914-9.914-9.914z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-amber-400 hover:text-amber-300 hover:bg-slate-900 rounded-lg transition"
            aria-label="Ouvrir le menu de navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-menu"
          className="lg:hidden border-t border-slate-800 bg-slate-950 px-4 py-4 space-y-2 animate-in slide-in-from-top duration-200"
        >
          <a
            href="#accueil"
            onClick={handleNavClick}
            className="block py-2 px-3 rounded-lg hover:bg-slate-900 font-medium text-slate-200 hover:text-amber-400"
          >
            {t.nav.home}
          </a>
          <a
            href="#services"
            onClick={handleNavClick}
            className="block py-2 px-3 rounded-lg hover:bg-slate-900 font-medium text-slate-200 hover:text-amber-400"
          >
            {t.nav.services}
          </a>
          <a
            href="#tarifs"
            onClick={handleNavClick}
            className="block py-2 px-3 rounded-lg hover:bg-slate-900 font-bold text-amber-400"
          >
            {t.nav.tarifs}
          </a>
          <a
            href="#galerie"
            onClick={handleNavClick}
            className="block py-2 px-3 rounded-lg hover:bg-slate-900 font-medium text-slate-200 hover:text-amber-400"
          >
            {t.nav.gallery}
          </a>
          <a
            href="#destinations"
            onClick={handleNavClick}
            className="block py-2 px-3 rounded-lg hover:bg-slate-900 font-medium text-slate-200 hover:text-amber-400"
          >
            {t.nav.destinations}
          </a>
          <a
            href="#contact"
            onClick={handleNavClick}
            className="block py-2 px-3 rounded-lg hover:bg-slate-900 font-medium text-slate-200 hover:text-amber-400"
          >
            {t.nav.contact}
          </a>
          <a
            href="#reservation"
            onClick={handleNavClick}
            className="block py-2.5 px-3 text-center bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg mt-3"
          >
            {t.nav.reserve}
          </a>
          <a
            href={getWhatsAppUrl(t.tarifs.routeWa.replace('{route}', 'Transfert Général'))}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="flex items-center justify-center gap-2 py-2.5 px-3 text-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow"
          >
            <span>WhatsApp (+212 661-424957)</span>
          </a>
        </div>
      )}
    </header>
  );
};
