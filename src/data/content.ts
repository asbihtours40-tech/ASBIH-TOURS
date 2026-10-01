import { RoutePricing, GalleryItem, DestinationItem, TestimonialItem, FAQItem } from '../types';
import tangerMedImg from '../assets/images/regenerated_image_1789426457586.jpg';
import asilahImg from '../assets/images/regenerated_image_1789426468349.jpg';
import akchourImg from '../assets/images/regenerated_image_1789426470920.webp';
import chefchaouenImg from '../assets/images/regenerated_image_1789426473707.jpg';
import fleetVanImg from '../assets/images/ford_van_1_masked.jpg';
import fleetInteriorImg from '../assets/images/ford_van_2_masked.jpg';
import fleetMercedesImg from '../assets/images/regenerated_image_1790164759066.jpg';
import skodaKodiaqExtImg from '../assets/images/skoda_kodiaq_exterior_1790810286037.jpg';
import skodaKodiaqComfortImg from '../assets/images/skoda_kodiaq_comfort_1790810295918.jpg';
import companyLogoImg from '../assets/images/asbih_tours_logo_1790164848014.jpg';

export const COMPANY_INFO = {
  name: 'ASBIH-TOURS',
  logoUrl: companyLogoImg,
  whatsappNumber: '212661424957',
  phoneDisplay: '+212 661-424957',
  email: 'asbih.tours40@gmail.com',
  address: 'Tanger, Maroc',
  geo: { lat: 35.7595, lng: -5.8340 },
  openingHours: '24/7 (365 jours / an)',
};

export const PRICING_DATA: Record<'transfers' | 'tours' | 'distance', RoutePricing[]> = {
  transfers: [
    { route: 'Tanger Aéroport / Port → Tanger Centre', price: 350, time: '≈ 30 min', note: 'Accueil VIP avec pancarte' },
    { route: 'Tanger Aéroport → Port Tanger Med', price: 600, time: '≈ 1h', note: 'Liaison directe autoroute' },
    { route: 'Tanger → Tétouan', price: 700, time: '≈ 1h15', note: 'Porte-à-porte grand confort' },
    { route: 'Tanger Aéroport → Chefchaouen', price: 900, time: '≈ 1h30', note: 'Direct médina en van touristique' },
  ],
  tours: [
    { route: 'Chefchaouen Journée (départ Tanger)', price: 1500, time: '8h', note: 'Van privé & chauffeur à disposition' },
    { route: 'Tétouan & Côte Méditerranéenne', price: 1200, time: '8h', note: 'Médina UNESCO, Martil & Cabo Negro' },
    { route: 'Asilah et Tours Tanger (Cap Spartel & Grottes)', price: 1100, time: '4h30', note: 'Cap Spartel, Grottes & remparts' },
    { route: 'Cascades d’Akchour & Pont de Dieu', price: 1500, time: '9h', note: 'Escapade montagne, randonnée & nature' },
  ],
  distance: [
    { route: 'Tanger → Rabat (Capitale)', price: 1700, time: '≈ 3h', note: 'Autoroute directe en Mercedes / Van VIP' },
    { route: 'Tanger → Casablanca (Aéroport / Centre)', price: 2500, time: '≈ 4h30', note: 'Pauses confort & autoroute' },
    { route: 'Tanger → Fès (Ville Impériale)', price: 2000, time: '≈ 4h', note: 'Trajet touristique privatif' },
    { route: 'Tanger → Meknès', price: 1900, time: '≈ 3h30', note: 'Autoroute & pauses confort' },
    { route: 'Tanger → Marrakech (Ville Ocre)', price: 4000, time: '≈ 7h', note: 'Longue distance grand confort' },
  ],
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'skoda-kodiaq-suv',
    cat: 'fleet',
    icon: 'ShieldCheck',
    src: skodaKodiaqExtImg,
    alt: 'Škoda Kodiaq 4x4 VIP ASBIH-TOURS',
    caption: 'SUV de prestige 4x4 tout confort, idéal pour vos transferts d’affaires et excursions au Maroc',
    location: 'Tanger & Région',
  },
  {
    id: 'skoda-kodiaq-comfort',
    cat: 'fleet',
    icon: 'Sparkles',
    src: skodaKodiaqComfortImg,
    alt: 'Škoda Kodiaq 4x4 Confort & Sécurité',
    caption: 'Véhicule haut de gamme climatisé avec vitres teintées, grand coffre et espace passager spacieux',
    location: 'Flotte Privée',
  },
  {
    id: 'van-vip',
    cat: 'fleet',
    icon: 'Car',
    src: fleetVanImg,
    alt: 'Van climatisé tout confort ASBIH-TOURS',
    caption: 'Van touristique spacieux avec climatisation intégrale et grand coffre à bagages',
    location: 'Tanger',
  },
  {
    id: 'interior-comfort',
    cat: 'fleet',
    icon: 'Sparkles',
    src: fleetInteriorImg,
    alt: 'Van Ford VIP ASBIH-TOURS',
    caption: 'Véhicule tout confort avec climatisation, vitres teintées et espace généreux',
    location: 'Flotte Privée',
  },
  {
    id: 'mercedes-vip',
    cat: 'fleet',
    icon: 'ShieldCheck',
    src: fleetMercedesImg,
    alt: 'Mercedes VIP pour transferts haut de gamme',
    caption: 'Conduite souple, élégance et confort absolu pour vos transferts d’affaires et séjours',
    location: 'Tanger & Casablanca',
  },
  {
    id: 'chefchaouen-tour',
    cat: 'tours',
    icon: 'Compass',
    src: chefchaouenImg,
    alt: 'La ville bleue de Chefchaouen',
    caption: 'Excursion magique au cœur des ruelles bleues et de la médina rifaine',
    location: 'Chefchaouen',
  },
  {
    id: 'akchour-cascade',
    cat: 'tours',
    icon: 'Mountain',
    src: akchourImg,
    alt: 'Cascades d’Akchour et Parc de Talassemtane',
    caption: 'Escapade nature, eaux cristallines et paysages rocheux du Pont de Dieu',
    location: 'Akchour',
  },
  {
    id: 'asilah-ocean',
    cat: 'tours',
    icon: 'Camera',
    src: asilahImg,
    alt: 'Remparts côtiers d’Asilah face à l’Atlantique',
    caption: 'Balade artistique sur les remparts portugais d’Asilah et coucher de soleil',
    location: 'Asilah',
  },
  {
    id: 'airport-welcome',
    cat: 'transfers',
    icon: 'Plane',
    src: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1000&q=80',
    alt: 'Accueil personnalisé à l’Aéroport',
    caption: 'Votre chauffeur vous attend dès la sortie du terminal avec pancarte nominative',
    location: 'Aéroport Tanger Ibn Battouta',
  },
  {
    id: 'tanger-med-port',
    cat: 'transfers',
    icon: 'Ship',
    src: tangerMedImg,
    alt: 'Transfert Port Tanger Med & Tanger Ville',
    caption: 'Liaison directe depuis les ferries d’Espagne (Algésiras, Tarifa) vers votre destination',
    location: 'Port Tanger Med',
  },
];

export const DESTINATIONS_DATA: DestinationItem[] = [
  {
    icon: 'Anchor',
    name: 'Tanger & Le Nord',
    desc: 'Aéroports, Ports Tanger Med, Cap Spartel, Grottes d’Hercule & Kasbah',
    tag: 'Base Opérationnelle',
  },
  {
    icon: 'Compass',
    name: 'Chefchaouen & Rif',
    desc: 'La perle bleue, cascades d’Akchour, paysages montagneux et gastronomie',
    tag: 'Circuit Phare',
    gold: true,
  },
  {
    icon: 'Building2',
    name: 'Rabat & Salé',
    desc: 'Capitale administrative, Tour Hassan, Kasbah des Oudayas & ambassades',
    tag: 'Affaires & Culture',
  },
  {
    icon: 'Plane',
    name: 'Casablanca & Sud',
    desc: 'Aéroport Mohammed V, Mosquée Hassan II et liaisons directes vers Marrakech',
    tag: 'Hub Métropolitain',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    name: 'Sophie Moreau',
    country: 'France 🇫🇷',
    rating: 5,
    service: 'Tanger Aéroport → Chefchaouen',
    text: 'Ponctuel, très professionnel et véhicule impeccable ! Le chauffeur nous attendait avec une pancarte malgré 40 minutes de retard de notre vol Ryanair. Conduite très agréable et rassurante en montagne.',
    date: 'Février 2026',
  },
  {
    name: 'Karim Benjelloun',
    country: 'Maroc 🇲🇦',
    rating: 5,
    service: 'Circuit Chefchaouen & Akchour',
    text: 'Superbe journée organisée avec ASBIH-TOURS pour ma famille. Chauffeur très attentif, pauses photos magnifiques et conseils précieux sur les bons restaurants locaux. Rapport qualité-prix imbattable.',
    date: 'Janvier 2026',
  },
  {
    name: 'Elena Rodríguez',
    country: 'Espagne 🇪🇸',
    rating: 5,
    service: 'Transfert Tanger Med → Tanger Centre',
    text: 'Reservamos por WhatsApp en minutos y recibimos confirmación inmediata. Llegamos en el ferry tarde y el conductor ya estaba listo en el muelle. Sin estrés, precio fijo exacto sin sobrecostes.',
    date: 'Mars 2026',
  },
  {
    name: 'James Walker',
    country: 'Royaume-Uni 🇬🇧',
    rating: 5,
    service: 'Tanger → Casablanca Centre',
    text: 'Long trip between Tangier and Casablanca was remarkably smooth. Comfortable air-conditioned van, polite driver, bottled water provided. Truly 24/7 reliable service.',
    date: 'Janvier 2026',
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    q: 'Comment réserver un transfert avec ASBIH-TOURS ?',
    a: 'Vous pouvez réserver en moins de 2 minutes via notre formulaire en ligne, directement par message WhatsApp au +212 661-424957, ou par email à asbih.tours40@gmail.com. Vous recevez une confirmation immédiate avec les détails de prise en charge.',
  },
  {
    q: 'Le chauffeur attend-il à l’aéroport ou au port en cas de retard ?',
    a: 'Oui, absolument ! Nous suivons votre numéro de vol ou l’horaire de votre ferry en temps réel. Même en cas de retard, votre chauffeur vous attend à la porte des arrivées avec une pancarte nominative. 60 minutes d’attente gratuites sont incluses.',
  },
  {
    q: 'Les tarifs sont-ils par personne ou par véhicule ?',
    a: 'Tous nos tarifs sont strictement par véhicule (Mercedes confort jusqu’à 4 personnes, grand van jusqu’à 7 places), et non par passager. Tout est inclus : carburant, péages d’autoroute, bagages et chauffeur.',
  },
  {
    q: 'Quels moyens de paiement sont acceptés ?',
    a: 'Le règlement s’effectue en toute simplicité en espèces (en Dirhams marocains MAD ou en Euros €) directement auprès de votre chauffeur à destination. Virement bancaire possible pour les entreprises et circuits de groupe.',
  },
  {
    q: 'Puis-je modifier ou annuler ma réservation ?',
    a: 'L’annulation ou la modification d’horaire est totalement gratuite jusqu’à 24h avant l’heure prévue du transfert. Un simple message WhatsApp suffit pour ajuster vos projets.',
  },
];

export function getWhatsAppUrl(message?: string): string {
  const text = message ? encodeURIComponent(message) : encodeURIComponent('Bonjour ASBIH-TOURS ! 👋 Je souhaite avoir des informations sur vos transferts et circuits touristiques.');
  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`;
}
