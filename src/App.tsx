import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Gallery } from './components/Gallery';
import { Destinations } from './components/Destinations';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top sticky navigation bar */}
      <Navbar lang={lang} onLanguageChange={setLang} />

      {/* Main page content sections */}
      <main className="flex-1">
        <Hero lang={lang} />
        <Services lang={lang} />
        <Pricing lang={lang} />
        <Gallery lang={lang} />
        <Destinations lang={lang} />
        <Testimonials lang={lang} />
        <FAQ lang={lang} />
        <Contact lang={lang} />
        <BookingForm lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Persistent floating WhatsApp button */}
      <FloatingWhatsApp lang={lang} />
    </div>
  );
}
