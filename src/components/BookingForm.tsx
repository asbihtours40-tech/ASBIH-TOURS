import React, { useState } from 'react';
import { Language, BookingFormData } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/content';
import { Mail, Calendar, User, Phone, MapPin, Users, ShieldCheck, CheckCircle2, PenLine, ListFilter } from 'lucide-react';
import { Logo } from './Logo';

interface BookingFormProps {
  lang: Language;
}

export const BookingForm: React.FC<BookingFormProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    departure: '',
    destination: '',
    date: today,
    passengers: '1 à 2 passagers',
    notes: '',
  });

  const [isCustomDest, setIsCustomDest] = useState(false);
  const [customDestValue, setCustomDestValue] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Find selected destination option with price
  const selectedOption = React.useMemo(() => {
    if (!formData.destination || isCustomDest) return null;
    if (!t.form.destinationGroups) return null;
    for (const grp of t.form.destinationGroups) {
      const found = grp.options.find(opt => opt.value === formData.destination);
      if (found) return found;
    }
    return null;
  }, [formData.destination, isCustomDest, t.form.destinationGroups]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrorMessage('');
  };

  const handleDestinationSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedVal = e.target.value;
    setErrorMessage('');

    if (selectedVal === '__CUSTOM__') {
      setIsCustomDest(true);
      setFormData(prev => ({ ...prev, destination: customDestValue }));
      return;
    }

    setIsCustomDest(false);

    // Find if destination has suggested departure
    let suggestedDep = '';
    if (t.form.destinationGroups) {
      for (const grp of t.form.destinationGroups) {
        const found = grp.options.find(opt => opt.value === selectedVal);
        if (found && found.dep) {
          suggestedDep = found.dep;
          break;
        }
      }
    }

    setFormData(prev => ({
      ...prev,
      destination: selectedVal,
      departure: suggestedDep && !prev.departure ? suggestedDep : prev.departure,
    }));
  };

  const handleCustomDestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomDestValue(val);
    setFormData(prev => ({ ...prev, destination: val }));
    setErrorMessage('');
  };

  const toggleManualDestination = () => {
    if (isCustomDest) {
      setIsCustomDest(false);
      setFormData(prev => ({ ...prev, destination: '' }));
    } else {
      setIsCustomDest(true);
      setFormData(prev => ({ ...prev, destination: customDestValue }));
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage(lang === 'fr' ? 'Veuillez saisir votre nom' : lang === 'es' ? 'Por favor introduzca su nombre' : 'Please enter your name');
      return false;
    }
    if (!formData.phone.trim()) {
      setErrorMessage(lang === 'fr' ? 'Veuillez renseigner votre téléphone / WhatsApp' : lang === 'es' ? 'Por favor introduzca su teléfono / WhatsApp' : 'Please enter your phone / WhatsApp');
      return false;
    }
    if (!formData.departure.trim()) {
      setErrorMessage(lang === 'fr' ? 'Veuillez indiquer le lieu de prise en charge (départ)' : lang === 'es' ? 'Por favor introduzca el lugar de recogida' : 'Please enter pickup location');
      return false;
    }
    if (!formData.destination.trim()) {
      setErrorMessage(lang === 'fr' ? 'Veuillez sélectionner ou préciser votre destination' : lang === 'es' ? 'Por favor seleccione o introduzca su destino' : 'Please select or enter your destination');
      return false;
    }
    return true;
  };

  const handleWhatsAppSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const priceText = selectedOption?.priceDisplay
      ? `${selectedOption.priceDisplay}${selectedOption.price ? ` (≈ ${Math.round(selectedOption.price / 10.8)} €)` : ''}`
      : isCustomDest
      ? (lang === 'fr' ? 'Sur devis immédiat' : lang === 'es' ? 'Presupuesto a medida' : 'Custom quote')
      : (lang === 'fr' ? 'Sur devis' : 'Quote');

    const message = t.form.waTemplate
      .replace('{name}', formData.name)
      .replace('{phone}', formData.phone)
      .replace('{dep}', formData.departure)
      .replace('{dest}', formData.destination)
      .replace('{price}', priceText)
      .replace('{date}', formData.date)
      .replace('{passengers}', formData.passengers);

    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const priceText = selectedOption?.priceDisplay
      ? `${selectedOption.priceDisplay} (${Math.round((selectedOption.price || 0) / 10.8)} €) - Véhicule privé tout confort`
      : isCustomDest
      ? (lang === 'fr' ? 'Sur devis immédiat' : lang === 'es' ? 'Presupuesto a medida' : 'Custom quote')
      : (lang === 'fr' ? 'Sur devis' : 'Quote');

    const emailBody = [
      `ASBIH-TOURS - Demande de réservation`,
      `------------------------------------`,
      `Nom: ${formData.name}`,
      `Téléphone / WhatsApp: ${formData.phone}`,
      `Départ: ${formData.departure}`,
      `Destination: ${formData.destination}`,
      `Tarif estimé: ${priceText}`,
      `Date: ${formData.date}`,
      `Nombre de passagers: ${formData.passengers}`,
      formData.notes ? `Précisions / N° de vol: ${formData.notes}` : '',
    ].filter(Boolean).join('\n');

    const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
      t.form.mailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
    setFormSubmitted(true);
  };

  return (
    <section id="reservation" className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="flex justify-center mb-3">
              <Logo size="lg" showText={false} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-400 mb-2">
              {t.form.title}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              {t.form.subtitle}
            </p>
          </div>

          {/* Form Content */}
          <form id="bookingForm" onSubmit={handleEmailSubmit} className="space-y-4 relative z-10">
            {/* Row 1: Name and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="form-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t.form.name} *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="form-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ex: Mohamed Alami / Thomas Bernard"
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="form-phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t.form.phone} *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="form-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ex: +212 600-000000 / +33 600..."
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Departure and Destination */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Pickup / Departure */}
              <div>
                <label htmlFor="form-departure" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t.form.dep} *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="form-departure"
                    name="departure"
                    type="text"
                    required
                    value={formData.departure}
                    onChange={handleChange}
                    placeholder={t.form.depPlaceholder || 'Ex: Aéroport Tanger Ibn Battouta, Hôtel, Gare TGV...'}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition"
                  />
                </div>
              </div>

              {/* Destination with Dropdown & Custom switch */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="form-destination-select" className="text-xs font-semibold text-slate-300">
                    {t.form.dest} *
                  </label>
                  <button
                    type="button"
                    onClick={toggleManualDestination}
                    className="text-[11px] text-amber-400 hover:text-amber-300 transition flex items-center gap-1 focus:outline-none"
                  >
                    {isCustomDest ? (
                      <>
                        <ListFilter className="w-3 h-3" />
                        <span>{t.form.listInputBtn || 'Liste'}</span>
                      </>
                    ) : (
                      <>
                        <PenLine className="w-3 h-3" />
                        <span>{t.form.manualInputBtn || 'Saisie libre'}</span>
                      </>
                    )}
                  </button>
                </div>

                {!isCustomDest ? (
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="form-destination-select"
                      name="destination"
                      value={formData.destination}
                      onChange={handleDestinationSelect}
                      className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition truncate"
                    >
                      <option value="">{t.form.destPlaceholder}</option>
                      {t.form.destinationGroups.map((grp, gIdx) => (
                        <optgroup key={gIdx} label={grp.group} className="bg-slate-900 text-amber-400 font-bold">
                          {grp.options.map((opt, oIdx) => (
                            <option key={oIdx} value={opt.value} className="bg-slate-950 text-white font-normal">
                              {opt.label}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                      <option value="__CUSTOM__" className="bg-slate-900 text-amber-300 font-semibold">
                        {t.form.customDestOption || '📍 Autre destination (sur mesure / à préciser)...'}
                      </option>
                    </select>
                  </div>
                ) : (
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="form-destination-input"
                      name="destination"
                      type="text"
                      autoFocus
                      required
                      value={formData.destination}
                      onChange={handleCustomDestChange}
                      placeholder={t.form.customDestPlaceholder || 'Précisez votre destination ou adresse exacte...'}
                      className="w-full bg-slate-950 border border-amber-400/70 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Row 3: Date and Passengers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="form-date" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t.form.date} *
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="form-date"
                    name="date"
                    type="date"
                    min={today}
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-10 pr-3 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="form-passengers" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t.form.passengers}
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    id="form-passengers"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-10 pr-3 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition"
                  >
                    <option value="1 à 2 passagers">1 à 2 passagers (Mercedes Confort)</option>
                    <option value="3 à 4 passagers">3 à 4 passagers (Škoda Kodiaq 4x4 / SUV VIP)</option>
                    <option value="5 à 7 passagers (Van VIP)">5 à 7 passagers (Van VIP)</option>
                    <option value="Groupe 8+ personnes (Minibus)">Groupe 8+ personnes (Minibus)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Row 4: Notes / Flight number (optional) */}
            <div>
              <label htmlFor="form-notes" className="block text-xs font-semibold text-slate-300 mb-1.5">
                {lang === 'fr'
                  ? 'Précisions complémentaires / N° de vol (Optionnel)'
                  : lang === 'es'
                  ? 'Detalles adicionales / N° de vuelo (Opcional)'
                  : 'Additional details / Flight number (Optional)'}
              </label>
              <textarea
                id="form-notes"
                name="notes"
                rows={2}
                value={formData.notes}
                onChange={handleChange}
                placeholder={
                  lang === 'fr'
                    ? 'Ex: N° de vol AT452, heure d\'arrivée, nom de l\'hôtel ou demandes spéciales...'
                    : lang === 'es'
                    ? 'Ej: N° de vuelo AT452, hora de llegada, nombre del hotel o peticiones especiales...'
                    : 'e.g. Flight #AT452, arrival time, hotel name, child seat request...'
                }
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition resize-none"
              />
            </div>

            {/* Tableau récapitulatif du Tarif de Réservation */}
            {selectedOption && (
              <div
                id="booking-price-table"
                className="bg-slate-950/95 border-2 border-amber-400/60 rounded-2xl p-4 sm:p-5 shadow-2xl relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/15 px-2.5 py-0.5 rounded-full border border-amber-400/40">
                        {t.form.priceSummaryTitle || 'Tarif de votre réservation'}
                      </span>
                      <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1 bg-emerald-950/40 px-2 py-0.5 rounded-md border border-emerald-800/40">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{t.form.priceGuaranteed || 'Prix fixe par véhicule'}</span>
                      </span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-white">
                      <span className="text-slate-300">{formData.departure || (lang === 'fr' ? 'Départ Tanger' : lang === 'es' ? 'Salida Tánger' : 'Tangier Pickup')}</span>{' '}
                      <span className="text-amber-400">➔</span>{' '}
                      <span className="text-white">{formData.destination}</span>
                    </p>
                  </div>

                  <div className="text-left sm:text-right shrink-0 bg-slate-900/90 sm:bg-transparent p-3 sm:p-0 rounded-xl border sm:border-0 border-slate-800">
                    <span className="text-[11px] text-slate-400 block font-medium">
                      {selectedOption.price
                        ? lang === 'fr'
                          ? 'Prix total véhicule privé'
                          : lang === 'es'
                          ? 'Precio total vehículo privado'
                          : 'Total price per vehicle'
                        : lang === 'fr'
                        ? 'Tarif sur mesure'
                        : 'Custom quote'}
                    </span>
                    <div className="flex items-baseline gap-2 sm:justify-end">
                      <span className="text-2xl sm:text-3xl font-black text-amber-400">
                        {selectedOption.priceDisplay || (selectedOption.price ? `${selectedOption.price} DH` : 'Sur devis')}
                      </span>
                      {selectedOption.price && (
                        <span className="text-xs sm:text-sm font-semibold text-slate-400">
                          (≈ {Math.round(selectedOption.price / 10.8)} €)
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Prestations incluses dans le tarif */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3.5 text-[11px] sm:text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 bg-slate-900/70 p-2 rounded-lg border border-slate-800/80">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{lang === 'fr' ? 'Chauffeur agréé' : lang === 'es' ? 'Chófer profesional' : 'Licensed driver'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-900/70 p-2 rounded-lg border border-slate-800/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{lang === 'fr' ? 'Véhicule climatisé' : lang === 'es' ? 'Climatizado VIP' : 'Air-conditioned'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-900/70 p-2 rounded-lg border border-slate-800/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{lang === 'fr' ? 'Carburant & péages' : lang === 'es' ? 'Combustible y peajes' : 'Fuel & tolls'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-900/70 p-2 rounded-lg border border-slate-800/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{lang === 'fr' ? 'Bagages inclus' : lang === 'es' ? 'Equipaje incluido' : 'Luggage included'}</span>
                  </div>
                </div>
              </div>
            )}

            {isCustomDest && formData.destination.trim() && (
              <div
                id="booking-custom-price-table"
                className="bg-slate-950/90 border border-amber-400/40 rounded-2xl p-4 text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/15 px-2 py-0.5 rounded-full border border-amber-400/30">
                      {lang === 'fr' ? 'Circuit sur mesure' : lang === 'es' ? 'Circuito a medida' : 'Custom Route'}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-white">
                    <span className="text-slate-300">{formData.departure || (lang === 'fr' ? 'Départ' : 'Pickup')}</span>{' '}
                    <span className="text-amber-400">➔</span>{' '}
                    <span className="text-white">{formData.destination}</span>
                  </p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="text-sm sm:text-base font-bold text-amber-400">
                    {t.form.customQuote || (lang === 'fr' ? 'Sur devis immédiat (Confirmé en 5 min)' : 'Instant custom quote')}
                  </span>
                </div>
              </div>
            )}

            {/* Error banner if validation fails */}
            {errorMessage && (
              <p className="text-red-400 text-xs font-semibold text-center bg-red-950/40 border border-red-800/60 p-2.5 rounded-lg">
                ⚠️ {errorMessage}
              </p>
            )}

            {/* Action Buttons: WhatsApp & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <button
                type="button"
                id="btn-submit-whatsapp"
                onClick={handleWhatsAppSubmit}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl transition text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 active:scale-95 cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.35.49 1.199.534 1.286.044.087.073.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-5.467 0-9.914 4.446-9.914 9.914 0 1.97.575 3.805 1.564 5.356l-1.684 6.152 6.326-1.658c1.488.895 3.23 1.42 5.093 1.42 5.468 0 9.914-4.446 9.914-9.914 0-5.468-4.446-9.914-9.914-9.914z" />
                </svg>
                <span>{t.form.waBtn}</span>
              </button>

              <button
                type="submit"
                id="btn-submit-email"
                className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-3.5 px-4 rounded-xl transition text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-950/40 active:scale-95 cursor-pointer"
              >
                <Mail className="w-5 h-5 text-slate-950" />
                <span>{t.form.emailBtn}</span>
              </button>
            </div>

            {/* Success confirmation */}
            {formSubmitted && (
              <div className="bg-emerald-950/50 border border-emerald-800 text-emerald-300 p-3.5 rounded-xl text-center text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.form.sent}</span>
              </div>
            )}

            {/* Trust Footer Note */}
            <p className="text-center text-[11px] text-slate-400 pt-2 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t.form.helperHint}</span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
