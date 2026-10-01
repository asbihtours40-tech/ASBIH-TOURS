import { Language, DestinationGroup } from '../types';

export const TRANSLATIONS: Record<Language, {
  nav: {
    tagline: string;
    home: string;
    services: string;
    tarifs: string;
    gallery: string;
    destinations: string;
    contact: string;
    reserve: string;
  };
  hero: {
    badge: string;
    titleA: string;
    titleBrand: string;
    subtitle: string;
    phoneLabel: string;
    cta1: string;
    cta2: string;
    features: string[];
  };
  services: {
    title: string;
    subtitle: string;
    items: { icon: string; title: string; text: string; details: string[] }[];
  };
  tarifs: {
    badge: string;
    titleA: string;
    highlight: string;
    introA: string;
    strong: string;
    introB: string;
    note: string;
    from: string;
    fixed: string;
    book: string;
    popular: string;
    routeWa: string;
    currency: string;
    sections: {
      transfers: { name: string; note: string };
      tours: { name: string; note: string };
      distance: { name: string; note: string };
    };
  };
  gallery: {
    titleA: string;
    highlight: string;
    subtitle: string;
    all: string;
    hint: string;
    cats: {
      fleet: string;
      tours: string;
      transfers: string;
    };
  };
  destinations: {
    title: string;
    subtitle: string;
    items: { name: string; desc: string; highlights: string }[];
  };
  testi: {
    titleA: string;
    highlight: string;
    subtitle: string;
    note: string;
  };
  faq: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    waTitle: string;
    waNote: string;
    mailTitle: string;
    mailNote: string;
    locTitle: string;
    locValue: string;
    avail: string;
    callNow: string;
  };
  form: {
    title: string;
    subtitle: string;
    name: string;
    phone: string;
    dep: string;
    depPlaceholder?: string;
    dest: string;
    destPlaceholder: string;
    customDestOption?: string;
    customDestPlaceholder?: string;
    manualInputBtn?: string;
    listInputBtn?: string;
    date: string;
    passengers: string;
    destinationGroups: DestinationGroup[];
    priceSummaryTitle?: string;
    priceGuaranteed?: string;
    priceInclude?: string;
    customQuote?: string;
    waBtn: string;
    emailBtn: string;
    sent: string;
    waTemplate: string;
    mailSubject: string;
    helperHint: string;
  };
  footer: {
    loc: string;
    rights: string;
    cities: string;
    tagline: string;
  };
}> = {
  fr: {
    nav: {
      tagline: 'TRANSPORT TOURISTIQUE',
      home: 'Accueil',
      services: 'Services',
      tarifs: 'Tarifs',
      gallery: 'Galerie',
      destinations: 'Destinations',
      contact: 'Contact',
      reserve: 'Réserver',
    },
    hero: {
      badge: 'Spécialiste du Nord du Maroc — Disponible 24/7',
      titleA: 'Voyagez en Confort et Sérénité avec',
      titleBrand: 'ASBIH-TOURS',
      subtitle: 'Services de transport touristique, transferts privés vers gares, aéroports et ports, et accompagnement personnalisé pour vos séjours au Maroc.',
      phoneLabel: 'Assistance & Réservations directes 24/7',
      cta1: 'Réserver votre Transfert',
      cta2: 'Demander un Devis WhatsApp',
      features: ['Véhicules climatisés récents', 'Accueil pancarte aéroport/port', 'Tarif fixe sans surprise', 'Chauffeurs professionnels'],
    },
    services: {
      title: 'Nos Services sur Mesure',
      subtitle: 'Un accompagnement professionnel et ponctuel pour tous vos déplacements au Maroc',
      items: [
        {
          icon: 'Car',
          title: 'Transferts Privés VIP',
          text: 'Accueil sur mesure aux aéroports (Tanger Ibn Battouta, Casablanca Mohammed V, Rabat-Salé, Marrakech-Ménara) et ports (Tanger Ville & Tanger Med). Chauffeurs professionnels bilingues et Mercedes / vans tout confort.',
          details: ['Suivi de vol en direct inclus', 'Attente offerte jusqu’à 60 min', 'Bagages pris en charge'],
        },
        {
          icon: 'Compass',
          title: 'Circuits Nord du Maroc',
          text: 'Découvrez les perles du Royaume : la cité bleue de Chefchaouen, Tétouan l’andalouse, les remparts d’Asilah, le Cap Spartel et les cascades féeriques d’Akchour. Journée complète ou circuits sur plusieurs jours.',
          details: ['Arrêts photos panoramiques', 'Itinéraires flexibles à votre rythme', 'Découvertes culturelles & artisanales'],
        },
        {
          icon: 'ShieldCheck',
          title: 'Accompagnement Voyageurs 24/7',
          text: 'Prise en charge complète pour vos voyages d’affaires, séminaires, congrès, mariages ou vacances en famille à travers tout le Maroc. Flotte entretenue selon les normes les plus strictes.',
          details: ['Chauffeurs expérimentés et discrets', 'Groupes & familles (jusqu’à 7 places)', 'Disponibilité jour et nuit'],
        },
      ],
    },
    tarifs: {
      badge: 'Tarifs Transport Touristique 2026',
      titleA: 'Nos Tarifs ',
      highlight: 'Transport Touristique',
      introA: 'Prix ',
      strong: 'par véhicule privé',
      introB: ' (non par personne) en transport touristique agréé : Mercedes ou van climatisé grand confort, carburant, péages et chauffeur professionnel.',
      note: 'Tarifs réels et fixes par véhicule privé grand confort (Mercedes ou van 7 places). Carburant, autoroute et chauffeur professionnel inclus sans frais cachés.',
      from: 'Tarif fixe',
      fixed: 'Aller simple, tarif fixe garanti',
      book: 'Réserver',
      popular: 'Populaire',
      routeWa: 'Bonjour ASBIH-TOURS 👋\nJe souhaite réserver : {route}. Pourriez-vous m’indiquer la disponibilité et le tarif ?',
      currency: 'DH',
      sections: {
        transfers: {
          name: 'Transferts Aéroports & Ports',
          note: 'Accueil personnalisé avec pancarte nominative + suivi de vol en temps réel inclus',
        },
        tours: {
          name: 'Circuits & Excursions du Nord',
          note: 'Par véhicule (jusqu’à 4 ou 7 pers.) — pauses libres et panoramas',
        },
        distance: {
          name: 'Trajets Longue Distance',
          note: 'Trajets directs inter-villes, climatisation et pauses confort incluses',
        },
      },
    },
    gallery: {
      titleA: 'Notre ',
      highlight: 'Galerie Photos',
      subtitle: 'Flotte premium, circuits panoramiques et moments capturés sur les routes du Maroc',
      all: 'Tous',
      hint: 'Véhicules climatisés récents entretenus avec rigueur pour votre sécurité et votre confort.',
      cats: {
        fleet: 'Flotte & Confort',
        tours: 'Circuits & Visites',
        transfers: 'Transferts & Ports',
      },
    },
    destinations: {
      title: 'Villes & Régions Desservies',
      subtitle: 'Une couverture complète du Nord jusqu’aux métropoles impériales du Maroc',
      items: [
        {
          name: 'Tanger & Le Détroit',
          desc: 'Aéroport Ibn Battouta, Tanger Med, Cap Spartel et Grottes d’Hercule',
          highlights: 'Port & Aéroport',
        },
        {
          name: 'Chefchaouen & Akchour',
          desc: 'La perle bleue du Rif, la place Outa El Hamam et les cascades d’Akchour',
          highlights: 'Incontournable',
        },
        {
          name: 'Tétouan & Asilah',
          desc: 'La colombe blanche, la médina UNESCO, et la cité d’art balnéaire d’Asilah',
          highlights: 'Culture & Plages',
        },
        {
          name: 'Rabat & Casablanca',
          desc: 'La capitale administrative, la tour Hassan et la métropole économique',
          highlights: 'Affaires & Hubs',
        },
      ],
    },
    testi: {
      titleA: 'Ce que disent nos ',
      highlight: 'voyageurs',
      subtitle: 'Retours d’expérience de clients du monde entier ayant voyagé avec ASBIH-TOURS',
      note: 'Votre satisfaction et votre ponctualité sont notre priorité absolue.',
    },
    faq: {
      title: 'Questions Fréquentes',
      subtitle: 'Tout ce qu’il faut savoir pour organiser votre voyage en toute sérénité',
    },
    contact: {
      title: 'Contactez-nous 24/7',
      subtitle: 'Une équipe réactive à votre écoute pour organiser vos trajets et répondre à vos questions',
      waTitle: 'WhatsApp Direct',
      waNote: 'Réponse rapide garantie en 5 minutes',
      mailTitle: 'Email officiel',
      mailNote: 'Devis entreprises, agences & groupes',
      locTitle: 'Base opérationnelle',
      locValue: 'Tanger, Maroc — Disponibilité nationale',
      avail: 'Service 24h/24 et 7j/7',
      callNow: 'Appeler directement',
    },
    form: {
      title: 'Demande de Réservation & Devis',
      subtitle: 'Remplissez les informations ci-dessous. Confirmation immédiate sur WhatsApp ou par email.',
      name: 'Nom & Prénom',
      phone: 'Téléphone / WhatsApp (avec indicatif pays)',
      dep: 'Lieu de prise en charge (Départ)',
      depPlaceholder: 'Ex: Aéroport Tanger Ibn Battouta, Hôtel, Gare TGV...',
      dest: 'Destination ou Circuit',
      destPlaceholder: '- Choisissez votre destination ou circuit -',
      customDestOption: '📍 Autre destination (sur mesure / à préciser)...',
      customDestPlaceholder: 'Précisez votre destination ou adresse exacte...',
      manualInputBtn: 'Saisir une adresse manuellement',
      listInputBtn: 'Choisir dans la liste des destinations',
      date: 'Date de prise en charge',
      passengers: 'Nombre de passagers',
      destinationGroups: [
        {
          group: '✈️ Transferts Aéroports & Ports',
          options: [
            {
              label: 'Tanger Centre (Hôtels, Médina, Gare TGV) — 350 DH',
              value: 'Tanger Centre (Hôtels, Médina, Gare TGV)',
              dep: 'Aéroport / Port de Tanger',
              price: 350,
              priceDisplay: '350 DH',
            },
            {
              label: 'Aéroport Tanger Ibn Battouta (TNG) — 350 DH',
              value: 'Aéroport Tanger Ibn Battouta',
              dep: 'Tanger Centre / Hôtel',
              price: 350,
              priceDisplay: '350 DH',
            },
            {
              label: 'Port Tanger Med (Ferries Algésiras) — 600 DH',
              value: 'Port Tanger Med',
              dep: 'Tanger (Aéroport / Centre)',
              price: 600,
              priceDisplay: '600 DH',
            },
            {
              label: 'Port Tanger Ville (Ferries Tarifa) — 350 DH',
              value: 'Port Tanger Ville',
              dep: 'Tanger Aéroport / Hôtel',
              price: 350,
              priceDisplay: '350 DH',
            },
            {
              label: 'Tétouan / Martil / Cabo Negro / M’diq — 700 DH',
              value: 'Tétouan & Côte Méditerranéenne',
              dep: 'Tanger',
              price: 700,
              priceDisplay: '700 DH',
            },
            {
              label: 'Asilah (Remparts & Océan Atlantique) — 500 DH',
              value: 'Asilah',
              dep: 'Tanger',
              price: 500,
              priceDisplay: '500 DH',
            },
            {
              label: 'Chefchaouen (La Cité Bleue) — 900 DH',
              value: 'Chefchaouen Médina',
              dep: 'Aéroport / Centre Tanger',
              price: 900,
              priceDisplay: '900 DH',
            },
          ],
        },
        {
          group: '🌄 Circuits & Excursions Touristiques (Journée)',
          options: [
            {
              label: 'Excursion Chefchaouen Journée (départ Tanger) — 1 500 DH',
              value: 'Excursion Chefchaouen Journée',
              dep: 'Tanger (Hôtel / Adresse)',
              price: 1500,
              priceDisplay: '1 500 DH',
            },
            {
              label: 'Excursion Tétouan & Côte Méditerranéenne (8h) — 1 200 DH',
              value: 'Excursion Tétouan & Côte Méditerranéenne',
              dep: 'Tanger (Hôtel / Adresse)',
              price: 1200,
              priceDisplay: '1 200 DH',
            },
            {
              label: 'Excursion Asilah et tours Tanger (Cap Spartel & Grottes) — 1 100 DH',
              value: 'Excursion Asilah et tours Tanger',
              dep: 'Tanger (Hôtel / Adresse)',
              price: 1100,
              priceDisplay: '1 100 DH',
            },
            {
              label: 'Excursion Cascades d’Akchour & Pont de Dieu (9h) — 1 500 DH',
              value: 'Excursion Cascades d’Akchour & Pont de Dieu',
              dep: 'Tanger (Hôtel / Adresse)',
              price: 1500,
              priceDisplay: '1 500 DH',
            },
            {
              label: 'Circuit touristique sur mesure (Nord du Maroc) — Sur devis',
              value: 'Circuit touristique sur mesure',
              dep: 'Tanger',
              priceDisplay: 'Sur devis',
            },
          ],
        },
        {
          group: '🛣️ Trajets Longue Distance Intervilles',
          options: [
            {
              label: 'Rabat (Capitale) — 1 700 DH',
              value: 'Rabat (Capitale)',
              dep: 'Tanger',
              price: 1700,
              priceDisplay: '1 700 DH',
            },
            {
              label: 'Casablanca (Centre / Aéroport Mohammed V) — 2 500 DH',
              value: 'Casablanca (Centre / Aéroport CMN)',
              dep: 'Tanger',
              price: 2500,
              priceDisplay: '2 500 DH',
            },
            {
              label: 'Fès (Ville Impériale) — 2 000 DH',
              value: 'Fès (Ville Impériale)',
              dep: 'Tanger',
              price: 2000,
              priceDisplay: '2 000 DH',
            },
            {
              label: 'Meknès — 1 900 DH',
              value: 'Meknès',
              dep: 'Tanger',
              price: 1900,
              priceDisplay: '1 900 DH',
            },
            {
              label: 'Marrakech (Ville Ocre) — 4 000 DH',
              value: 'Marrakech (Ville Ocre)',
              dep: 'Tanger',
              price: 4000,
              priceDisplay: '4 000 DH',
            },
          ],
        },
        {
          group: '👔 Chauffeur Privé à Disposition & VIP',
          options: [
            {
              label: 'Chauffeur privé à disposition (Demi-journée 4h) — 700 DH',
              value: 'Chauffeur privé à disposition (Demi-journée 4h)',
              dep: 'Tanger',
              price: 700,
              priceDisplay: '700 DH',
            },
            {
              label: 'Chauffeur privé à disposition (Journée entière 8h) — 1 200 DH',
              value: 'Chauffeur privé à disposition (Journée entière 8h)',
              dep: 'Tanger',
              price: 1200,
              priceDisplay: '1 200 DH',
            },
            {
              label: 'Événements d’affaires, Séminaires & Mariages VIP — Sur devis VIP',
              value: 'Événements d’affaires & Mariages VIP',
              dep: 'Tanger / Région',
              priceDisplay: 'Sur devis',
            },
          ],
        },
      ],
      priceSummaryTitle: 'Tarif Transport Touristique Garanti',
      priceGuaranteed: 'Tarif fixe par véhicule privé (non par personne)',
      priceInclude: 'Chauffeur professionnel • Véhicule climatisé tout confort • Carburant & péages inclus • Bagages inclus',
      customQuote: 'Sur devis immédiat (Confirmation en moins de 5 min via WhatsApp)',
      waBtn: 'Envoyer via WhatsApp',
      emailBtn: 'Envoyer par Email',
      sent: '✅ Votre message a été préparé avec succès !',
      waTemplate: 'Bonjour ASBIH-TOURS ! 👋\n\n📢 *Nouvelle demande de réservation*\n\n👤 *Nom* : {name}\n📱 *Téléphone* : {phone}\n🚩 *Départ* : {dep}\n🏁 *Destination* : {dest}\n💰 *Tarif estimé* : {price}\n📅 *Date* : {date}\n👥 *Passagers* : {passengers}\n\nMerci de me confirmer la disponibilité et le tarif exact. 🙏',
      mailSubject: 'Demande de réservation - ASBIH-TOURS',
      helperHint: 'Paiement sécurisé sur place en Dirhams (MAD) ou Euros (€). Transport touristique agréé, véhicule climatisé tout confort avec chauffeur professionnel.',
    },
    footer: {
      loc: 'Tanger, Maroc — Disponible 24/7',
      rights: 'Tous droits réservés. Transport touristique agréé & transferts privés.',
      cities: 'Tanger • Chefchaouen • Tétouan • Asilah • Rabat • Casablanca • Marrakech',
      tagline: 'Votre partenaire de confiance pour un voyage inoubliable au Maroc.',
    },
  },
  en: {
    nav: {
      tagline: 'TOURIST TRANSPORT',
      home: 'Home',
      services: 'Services',
      tarifs: 'Pricing',
      gallery: 'Gallery',
      destinations: 'Destinations',
      contact: 'Contact',
      reserve: 'Book Now',
    },
    hero: {
      badge: 'Northern Morocco Specialist — Available 24/7',
      titleA: 'Travel in Comfort and Peace of Mind with',
      titleBrand: 'ASBIH-TOURS',
      subtitle: 'Tourist transport services, private transfers to railway stations, airports, and ports, and personalized assistance for your travels in Morocco.',
      phoneLabel: 'Direct 24/7 Assistance & Bookings',
      cta1: 'Book Your Transfer',
      cta2: 'Get a WhatsApp Quote',
      features: ['Recent air-conditioned vehicles', 'Airport/port sign greeting included', 'Fixed price with no surprises', 'Professional drivers'],
    },
    services: {
      title: 'Our Tailor-Made Services',
      subtitle: 'Professional, punctual assistance for all your journeys throughout Morocco',
      items: [
        {
          icon: 'Car',
          title: 'Private VIP Transfers',
          text: 'Custom greeting at major airports (Tangier Ibn Battouta, Casablanca Mohammed V, Rabat-Salé, Marrakech-Ménara) and ports (Tangier City & Tanger Med). Bilingual professional drivers and comfortable modern Mercedes and vans.',
          details: ['Real-time flight tracking included', 'Free waiting time up to 60 min', 'Full luggage assistance'],
        },
        {
          icon: 'Compass',
          title: 'Northern Morocco Tours',
          text: 'Explore the gems of the Kingdom: the blue city of Chefchaouen, Tetouan the Andalusian, the historic ramparts of Asilah, Cape Spartel, and the breathtaking Akchour waterfalls. Full-day trips or multi-day tours.',
          details: ['Scenic panoramic photo stops', 'Flexible pacing at your own rhythm', 'Authentic cultural & craft discoveries'],
        },
        {
          icon: 'ShieldCheck',
          title: '24/7 Traveler Assistance',
          text: 'Full support for your business events, corporate trips, conferences, weddings, or family holidays across Morocco. Our fleet is maintained to the highest safety and comfort standards.',
          details: ['Discreet & experienced drivers', 'Groups & families (up to 7 seats)', 'Round-the-clock availability'],
        },
      ],
    },
    tarifs: {
      badge: '2026 Tourist Transport Rates',
      titleA: 'Our ',
      highlight: 'Tourist Transport Rates',
      introA: 'Price ',
      strong: 'per private vehicle',
      introB: ' (not per person) in licensed tourist vehicles: premium air-conditioned Mercedes/van, fuel, highway tolls, and professional driver.',
      note: 'Real, guaranteed fixed prices per private vehicle (Mercedes or 7-seater van). Fuel, highway tolls, and professional driver included with no hidden fees.',
      from: 'Fixed price',
      fixed: 'One way, guaranteed fixed price',
      book: 'Book',
      popular: 'Popular',
      routeWa: 'Hello ASBIH-TOURS 👋\nI would like to book: {route}. Could you please let me know availability and exact price?',
      currency: 'MAD',
      sections: {
        transfers: {
          name: 'Airport & Port Transfers',
          note: 'Personalized greeting with name sign + real-time flight tracking included',
        },
        tours: {
          name: 'Northern Morocco Day Tours',
          note: 'Per vehicle (up to 4 or 7 guests) — free photo stops and panoramic views',
        },
        distance: {
          name: 'Long-Distance Intercity Trips',
          note: 'Direct door-to-door trips, AC and comfort breaks included',
        },
      },
    },
    gallery: {
      titleA: 'Our ',
      highlight: 'Photo Gallery',
      subtitle: 'Premium fleet, scenic routes, and memorable moments captured across Morocco',
      all: 'All',
      hint: 'Modern air-conditioned vehicles rigorously maintained for your safety and comfort.',
      cats: {
        fleet: 'Fleet & Comfort',
        tours: 'Tours & Sights',
        transfers: 'Transfers & Ports',
      },
    },
    destinations: {
      title: 'Destinations We Serve',
      subtitle: 'Comprehensive coverage from Northern Morocco to the imperial metropolises',
      items: [
        {
          name: 'Tangier & The Strait',
          desc: 'Ibn Battouta Airport, Tanger Med Port, Cape Spartel & Hercules Caves',
          highlights: 'Port & Airport',
        },
        {
          name: 'Chefchaouen & Akchour',
          desc: 'The iconic Blue Pearl of the Rif, Outa El Hamam square and mountain falls',
          highlights: 'Must-See',
        },
        {
          name: 'Tetouan & Asilah',
          desc: 'The White Dove UNESCO Medina and the charming coastal art town of Asilah',
          highlights: 'Heritage & Sea',
        },
        {
          name: 'Rabat & Casablanca',
          desc: 'The Kingdom capital, Hassan Tower, and the commercial business hub',
          highlights: 'Business & Hubs',
        },
      ],
    },
    testi: {
      titleA: 'What our ',
      highlight: 'travellers say',
      subtitle: 'Genuine reviews from international travelers who experienced ASBIH-TOURS',
      note: 'Your peace of mind and punctuality are our top priorities.',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know before booking your transfer or tour',
    },
    contact: {
      title: 'Contact Us 24/7',
      subtitle: 'A dedicated, responsive team ready to organize your trips and answer all inquiries',
      waTitle: 'Direct WhatsApp',
      waNote: 'Guaranteed quick answer in 5 minutes',
      mailTitle: 'Official Email',
      mailNote: 'Corporate quotes, travel agencies & groups',
      locTitle: 'Base Location',
      locValue: 'Tangier, Morocco — Nationwide Operations',
      avail: '24 Hours / 7 Days a Week',
      callNow: 'Call directly',
    },
    form: {
      title: 'Booking Request & Quote',
      subtitle: 'Fill in your details below. Fast confirmation directly via WhatsApp or Email.',
      name: 'Full Name',
      phone: 'Phone / WhatsApp (with country code)',
      dep: 'Pickup Location',
      depPlaceholder: 'e.g. Tangier Airport Ibn Battouta, Hotel, TGV Station...',
      dest: 'Destination or Tour',
      destPlaceholder: '- Select your destination or excursion -',
      customDestOption: '📍 Other destination (custom quote / specify)...',
      customDestPlaceholder: 'Specify your exact destination or address...',
      manualInputBtn: 'Enter an address manually',
      listInputBtn: 'Choose from destination list',
      date: 'Pickup Date',
      passengers: 'Number of passengers',
      destinationGroups: [
        {
          group: '✈️ Airport & Port Transfers',
          options: [
            {
              label: 'Tangier City Center (Hotels, Medina, Beach, TGV Station) — 350 DH',
              value: 'Tangier City Center (Hotels, Medina, TGV Station)',
              dep: 'Tangier Airport / Port',
              price: 350,
              priceDisplay: '350 DH',
            },
            {
              label: 'Tangier Ibn Battouta Airport (TNG) — 350 DH',
              value: 'Tangier Ibn Battouta Airport',
              dep: 'Tangier Center / Hotel',
              price: 350,
              priceDisplay: '350 DH',
            },
            {
              label: 'Tangier Med Port (Algeciras Ferries) — 600 DH',
              value: 'Tangier Med Port',
              dep: 'Tangier (Airport / Center)',
              price: 600,
              priceDisplay: '600 DH',
            },
            {
              label: 'Tangier City Port (Tarifa Ferries) — 350 DH',
              value: 'Tangier City Port',
              dep: 'Tangier Airport / Hotel',
              price: 350,
              priceDisplay: '350 DH',
            },
            {
              label: 'Tetouan / Martil / Cabo Negro / M’diq — 700 DH',
              value: 'Tetouan & Mediterranean Coast',
              dep: 'Tangier',
              price: 700,
              priceDisplay: '700 DH',
            },
            {
              label: 'Asilah (Ramparts & Atlantic Ocean) — 500 DH',
              value: 'Asilah',
              dep: 'Tangier',
              price: 500,
              priceDisplay: '500 DH',
            },
            {
              label: 'Chefchaouen (The Blue City) — 900 DH',
              value: 'Chefchaouen Medina',
              dep: 'Tangier Airport / Center',
              price: 900,
              priceDisplay: '900 DH',
            },
          ],
        },
        {
          group: '🌄 Northern Morocco Tours & Excursions',
          options: [
            {
              label: 'Chefchaouen Day Trip from Tangier — 1,500 DH',
              value: 'Chefchaouen Day Trip from Tangier',
              dep: 'Tangier (Hotel / Address)',
              price: 1500,
              priceDisplay: '1,500 DH',
            },
            {
              label: 'Tetouan & Mediterranean Coast Excursion (8h) — 1,200 DH',
              value: 'Tetouan & Mediterranean Coast Excursion',
              dep: 'Tangier (Hotel / Address)',
              price: 1200,
              priceDisplay: '1,200 DH',
            },
            {
              label: 'Asilah and Tangier Tours (Cap Spartel & Caves) — 1,100 DH',
              value: 'Asilah and Tangier Tours',
              dep: 'Tangier (Hotel / Address)',
              price: 1100,
              priceDisplay: '1,100 DH',
            },
            {
              label: 'Akchour Waterfalls & God’s Bridge Hike (9h) — 1,500 DH',
              value: 'Akchour Waterfalls & God’s Bridge Hike',
              dep: 'Tangier (Hotel / Address)',
              price: 1500,
              priceDisplay: '1,500 DH',
            },
            {
              label: 'Custom Northern Morocco Private Tour — Custom Quote',
              value: 'Custom Northern Morocco Private Tour',
              dep: 'Tangier',
              priceDisplay: 'Custom Quote',
            },
          ],
        },
        {
          group: '🛣️ Long Distance Intercity Transfers',
          options: [
            {
              label: 'Rabat (Capital) — 1,700 DH',
              value: 'Rabat (Capital)',
              dep: 'Tangier',
              price: 1700,
              priceDisplay: '1,700 DH',
            },
            {
              label: 'Casablanca (Center / CMN Airport) — 2,500 DH',
              value: 'Casablanca (Center / CMN Airport)',
              dep: 'Tangier',
              price: 2500,
              priceDisplay: '2,500 DH',
            },
            {
              label: 'Fez (Imperial City) — 2,000 DH',
              value: 'Fez (Imperial City)',
              dep: 'Tangier',
              price: 2000,
              priceDisplay: '2,000 DH',
            },
            {
              label: 'Meknes — 1,900 DH',
              value: 'Meknes',
              dep: 'Tangier',
              price: 1900,
              priceDisplay: '1,900 DH',
            },
            {
              label: 'Marrakech (Red City) — 4,000 DH',
              value: 'Marrakech (Red City)',
              dep: 'Tangier',
              price: 4000,
              priceDisplay: '4,000 DH',
            },
          ],
        },
        {
          group: '👔 Chauffeur at Disposal & VIP',
          options: [
            {
              label: 'Private Chauffeur at disposal (Half-day 4h) — 700 DH',
              value: 'Private Chauffeur at disposal (Half-day 4h)',
              dep: 'Tangier',
              price: 700,
              priceDisplay: '700 DH',
            },
            {
              label: 'Private Chauffeur at disposal (Full-day 8h) — 1,200 DH',
              value: 'Private Chauffeur at disposal (Full-day 8h)',
              dep: 'Tangier',
              price: 1200,
              priceDisplay: '1,200 DH',
            },
            {
              label: 'VIP Corporate Events, Seminars & Weddings — Custom VIP Quote',
              value: 'VIP Corporate Events, Seminars & Weddings',
              dep: 'Tangier / Region',
              priceDisplay: 'Custom Quote',
            },
          ],
        },
      ],
      priceSummaryTitle: 'Guaranteed Tourist Transport Price',
      priceGuaranteed: 'Fixed price per private vehicle (not per passenger)',
      priceInclude: 'Professional driver • Air-conditioned premium vehicle • Fuel & highway tolls included • Luggage included',
      customQuote: 'Instant custom quote (Confirmation within 5 mins via WhatsApp)',
      waBtn: 'Send via WhatsApp',
      emailBtn: 'Send by Email',
      sent: '✅ Your request has been prepared successfully!',
      waTemplate: 'Hello ASBIH-TOURS! 👋\n\n📢 *New booking request*\n\n👤 *Name*: {name}\n📱 *Phone*: {phone}\n🚩 *Pickup*: {dep}\n🏁 *Destination*: {dest}\n💰 *Estimated Price*: {price}\n📅 *Date*: {date}\n👥 *Passengers*: {passengers}\n\nPlease confirm availability and exact quote. 🙏',
      mailSubject: 'Booking request - ASBIH-TOURS',
      helperHint: 'Pay directly to your driver in Moroccan Dirhams (MAD) or Euros (€). Licensed tourist transport, air-conditioned vehicle with professional driver.',
    },
    footer: {
      loc: 'Tangier, Morocco — Available 24/7',
      rights: 'All rights reserved. Licensed tourist transport & private transfers.',
      cities: 'Tangier • Chefchaouen • Tetouan • Asilah • Rabat • Casablanca • Marrakech',
      tagline: 'Your trusted partner for an unforgettable journey across Morocco.',
    },
  },
  es: {
    nav: {
      tagline: 'TRANSPORTE TURÍSTICO',
      home: 'Inicio',
      services: 'Servicios',
      tarifs: 'Precios',
      gallery: 'Galería',
      destinations: 'Destinos',
      contact: 'Contacto',
      reserve: 'Reservar',
    },
    hero: {
      badge: 'Especialista del Norte de Marruecos — Disponible 24/7',
      titleA: 'Viaje con Comodidad y Serenidad con',
      titleBrand: 'ASBIH-TOURS',
      subtitle: 'Servicios de transporte turístico, traslados privados a estaciones, aeropuertos y puertos, y acompañamiento personalizado para sus estancias en Marruecos.',
      phoneLabel: 'Asistencia y reservas directas 24/7',
      cta1: 'Reservar su Traslado',
      cta2: 'Presupuesto por WhatsApp',
      features: ['Vehículos climatizados modernos', 'Recepción con cartel en puerto/aeropuerto', 'Precio fijo garantizado', 'Conductores profesionales'],
    },
    services: {
      title: 'Nuestros Servicios a Medida',
      subtitle: 'Acompañamiento profesional y puntual para todos sus desplazamientos por Marruecos',
      items: [
        {
          icon: 'Car',
          title: 'Traslados Privados VIP',
          text: 'Bienvenida personalizada en los principales aeropuertos (Tánger Ibn Battouta, Casablanca Mohammed V, Rabat-Salé, Marrakech-Ménara) y puertos (Tánger Ciudad y Tanger Med). Conductores bilingües y vehículos de alto confort.',
          details: ['Seguimiento de vuelo en directo incluido', 'Espera gratuita de hasta 60 min', 'Asistencia completa con equipaje'],
        },
        {
          icon: 'Compass',
          title: 'Circuitos Norte de Marruecos',
          text: 'Descubra las joyas del Reino: la perla azul de Chefchaouen, Tetuán la andalusí, las murallas históricas de Asilah, el Cabo Espartel y las cascadas de Akchour. Excursiones de un día o rutas de varios días.',
          details: ['Paradas fotográficas panorámicas', 'Itinerarios flexibles a su propio ritmo', 'Experiencias culturales auténticas'],
        },
        {
          icon: 'ShieldCheck',
          title: 'Atención al Viajero 24/7',
          text: 'Atención integral para sus viajes de negocios, conferencias, eventos familiares o vacaciones en Marruecos. Flota mantenida rigurosamente con los más altos estándares de seguridad.',
          details: ['Conductores discretos y experimentados', 'Familias y grupos (hasta 7 plazas)', 'Disponibilidad total de día y noche'],
        },
      ],
    },
    tarifs: {
      badge: 'Tarifas Transporte Turístico 2026',
      titleA: 'Nuestras Tarifas ',
      highlight: 'Transporte Turístico',
      introA: 'Precio ',
      strong: 'por vehículo privado',
      introB: ' (no por persona) en transporte turístico autorizado: Mercedes o van climatizada de gran confort, combustible, peajes y chófer profesional.',
      note: 'Precios reales y fijos por vehículo privado de gran confort (Mercedes o van de 7 plazas). Combustible, peajes y chófer profesional incluidos sin costes ocultos.',
      from: 'Precio fijo',
      fixed: 'Solo ida, precio fijo garantizado',
      book: 'Reservar',
      popular: 'Popular',
      routeWa: 'Hola ASBIH-TOURS 👋\nQuisiera reservar: {route}. ¿Podrían indicarme disponibilidad y precio exacto?',
      currency: 'DH',
      sections: {
        transfers: {
          name: 'Traslados Aeropuertos y Puertos',
          note: 'Bienvenida personalizada con cartel + seguimiento de vuelo en tiempo real incluido',
        },
        tours: {
          name: 'Circuitos y Excursiones del Norte',
          note: 'Por vehículo (hasta 4 o 7 pers.) — paradas libres y paisajes panorámicos',
        },
        distance: {
          name: 'Trayectos de Larga Distancia',
          note: 'Trayectos interurbanos directos, climatización y paradas de descanso incluidas',
        },
      },
    },
    gallery: {
      titleA: 'Nuestra ',
      highlight: 'Galería de Fotos',
      subtitle: 'Flota premium, rutas panorámicas y momentos capturados en los caminos de Marruecos',
      all: 'Todos',
      hint: 'Vehículos climatizados modernos mantenidos rigurosamente para su seguridad y comodidad.',
      cats: {
        fleet: 'Flota y Confort',
        tours: 'Circuitos y Visitas',
        transfers: 'Traslados y Puertos',
      },
    },
    destinations: {
      title: 'Ciudades y Regiones Cubiertas',
      subtitle: 'Cobertura integral desde el Norte hasta las grandes metrópolis imperiales de Marruecos',
      items: [
        {
          name: 'Tánger y el Estrecho',
          desc: 'Aeropuerto Ibn Battouta, Puerto Tanger Med, Cabo Espartel y Cuevas de Hércules',
          highlights: 'Puerto y Aeropuerto',
        },
        {
          name: 'Chefchaouen y Akchour',
          desc: 'La perla azul del Rif, la plaza Outa El Hamam y las cascadas en la montaña',
          highlights: 'Imprescindible',
        },
        {
          name: 'Tetuán y Asilah',
          desc: 'La paloma blanca medina UNESCO y la encantadora ciudad costera de artistas',
          highlights: 'Patrimonio y Mar',
        },
        {
          name: 'Rabat y Casablanca',
          desc: 'La capital del Reino, Torre Hassan y el gran centro económico y de negocios',
          highlights: 'Negocios y Hubs',
        },
      ],
    },
    testi: {
      titleA: 'Lo que dicen nuestros ',
      highlight: 'viajeros',
      subtitle: 'Opiniones y experiencias de viajeros internacionales que confiaron en ASBIH-TOURS',
      note: 'Su seguridad, comodidad y puntualidad son nuestro mayor compromiso.',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Todo lo que necesita saber para planificar su viaje con total tranquilidad',
    },
    contact: {
      title: 'Contáctenos 24/7',
      subtitle: 'Un equipo cercano y receptivo listo para coordinar sus trayectos y responder sus consultas',
      waTitle: 'WhatsApp Directo',
      waNote: 'Respuesta rápida garantizada en 5 minutos',
      mailTitle: 'Email Oficial',
      mailNote: 'Presupuestos para empresas, agencias y grupos',
      locTitle: 'Base Operativa',
      locValue: 'Tánger, Marruecos — Disponibilidad en todo el país',
      avail: 'Servicio 24 horas / 7 días',
      callNow: 'Llamar directamente',
    },
    form: {
      title: 'Solicitud de Reserva y Presupuesto',
      subtitle: 'Complete el formulario. Confirmación rápida a través de WhatsApp o Email.',
      name: 'Nombre y Apellidos',
      phone: 'Teléfono / WhatsApp (con prefijo internacional)',
      dep: 'Punto de recogida (Salida)',
      depPlaceholder: 'ej: Aeropuerto de Tánger Ibn Battouta, Hotel, Estación TGV...',
      dest: 'Destino o Circuito',
      destPlaceholder: '- Seleccione su destino o excursión -',
      customDestOption: '📍 Otro destino (a medida / a precisar)...',
      customDestPlaceholder: 'Indique su destino o dirección exacta...',
      manualInputBtn: 'Escribir dirección manualmente',
      listInputBtn: 'Elegir de la lista de destinos',
      date: 'Fecha de recogida',
      passengers: 'Número de pasajeros',
      destinationGroups: [
        {
          group: '✈️ Traslados Aeropuertos y Puertos',
          options: [
            {
              label: 'Tánger Centro (Hoteles, Medina, Playa, Estación TGV) — 350 DH',
              value: 'Tánger Centro (Hoteles, Medina, Estación TGV)',
              dep: 'Aeropuerto / Puerto de Tánger',
              price: 350,
              priceDisplay: '350 DH',
            },
            {
              label: 'Aeropuerto Tánger Ibn Battouta (TNG) — 350 DH',
              value: 'Aeropuerto Tánger Ibn Battouta',
              dep: 'Tánger Centro / Hotel',
              price: 350,
              priceDisplay: '350 DH',
            },
            {
              label: 'Puerto Tánger Med (Ferries Algeciras) — 600 DH',
              value: 'Puerto Tánger Med',
              dep: 'Tánger (Aeropuerto / Centro)',
              price: 600,
              priceDisplay: '600 DH',
            },
            {
              label: 'Puerto Tánger Ciudad (Ferries Tarifa) — 350 DH',
              value: 'Puerto Tánger Ciudad',
              dep: 'Tánger Aeropuerto / Hotel',
              price: 350,
              priceDisplay: '350 DH',
            },
            {
              label: 'Tetuán / Martil / Cabo Negro / M’diq — 700 DH',
              value: 'Tetuán y Costa Mediterránea',
              dep: 'Tánger',
              price: 700,
              priceDisplay: '700 DH',
            },
            {
              label: 'Arcila / Asilah (Murallas y Océano Atlántico) — 500 DH',
              value: 'Asilah',
              dep: 'Tánger',
              price: 500,
              priceDisplay: '500 DH',
            },
            {
              label: 'Chauen / Chefchaouen (La Ciudad Azul) — 900 DH',
              value: 'Chefchaouen Medina',
              dep: 'Tánger Aeropuerto / Centro',
              price: 900,
              priceDisplay: '900 DH',
            },
          ],
        },
        {
          group: '🌄 Circuitos y Excursiones Turísticas (Día Completo)',
          options: [
            {
              label: 'Excursión Chefchaouen Día Completo (desde Tánger) — 1.500 DH',
              value: 'Excursión Chefchaouen Día Completo',
              dep: 'Tánger (Hotel / Dirección)',
              price: 1500,
              priceDisplay: '1.500 DH',
            },
            {
              label: 'Excursión Tetuán y Costa Mediterránea (8h) — 1.200 DH',
              value: 'Excursión Tetuán y Costa Mediterránea',
              dep: 'Tánger (Hotel / Dirección)',
              price: 1200,
              priceDisplay: '1.200 DH',
            },
            {
              label: 'Excursión Asilah y tours Tánger (Cabo Espartel y Grutas) — 1.100 DH',
              value: 'Excursión Asilah y tours Tánger',
              dep: 'Tánger (Hotel / Dirección)',
              price: 1100,
              priceDisplay: '1.100 DH',
            },
            {
              label: 'Excursión Cascadas de Akchour y Puente de Dios (9h) — 1.500 DH',
              value: 'Excursión Cascadas de Akchour y Puente de Dios',
              dep: 'Tánger (Hotel / Dirección)',
              price: 1500,
              priceDisplay: '1.500 DH',
            },
            {
              label: 'Circuito turístico privado a medida por el Norte — Presupuesto a medida',
              value: 'Circuito turístico a medida',
              dep: 'Tánger',
              priceDisplay: 'A medida',
            },
          ],
        },
        {
          group: '🛣️ Ciudades y Larga Distancia',
          options: [
            {
              label: 'Rabat (Capital) — 1.700 DH',
              value: 'Rabat (Capital)',
              dep: 'Tánger',
              price: 1700,
              priceDisplay: '1.700 DH',
            },
            {
              label: 'Casablanca (Centro / Aeropuerto CMN) — 2.500 DH',
              value: 'Casablanca (Centro / Aeropuerto CMN)',
              dep: 'Tánger',
              price: 2500,
              priceDisplay: '2.500 DH',
            },
            {
              label: 'Fez (Ciudad Imperial) — 2.000 DH',
              value: 'Fez (Ciudad Imperial)',
              dep: 'Tánger',
              price: 2000,
              priceDisplay: '2.000 DH',
            },
            {
              label: 'Mequinez (Meknès) — 1.900 DH',
              value: 'Mequinez',
              dep: 'Tánger',
              price: 1900,
              priceDisplay: '1.900 DH',
            },
            {
              label: 'Marrakech (Ciudad Ocre) — 4.000 DH',
              value: 'Marrakech (Ciudad Ocre)',
              dep: 'Tánger',
              price: 4000,
              priceDisplay: '4.000 DH',
            },
          ],
        },
        {
          group: '👔 Chófer Privado a Disposición y VIP',
          options: [
            {
              label: 'Chófer privado a disposición (Media jornada 4h) — 700 DH',
              value: 'Chófer privado a disposición (Media jornada 4h)',
              dep: 'Tánger',
              price: 700,
              priceDisplay: '700 DH',
            },
            {
              label: 'Chófer privado a disposición (Jornada completa 8h) — 1.200 DH',
              value: 'Chófer privado a disposición (Jornada completa 8h)',
              dep: 'Tánger',
              price: 1200,
              priceDisplay: '1.200 DH',
            },
            {
              label: 'Eventos corporativos, Congresos y Bodas VIP — Presupuesto VIP',
              value: 'Eventos corporativos y Bodas VIP',
              dep: 'Tánger / Región',
              priceDisplay: 'A medida',
            },
          ],
        },
      ],
      priceSummaryTitle: 'Tarifa Garantizada de Transporte Turístico',
      priceGuaranteed: 'Precio fijo por vehículo privado (no por persona)',
      priceInclude: 'Chófer profesional • Vehículo climatizado de alto confort • Combustible y peajes de autopista incluidos • Equipaje incluido',
      customQuote: 'Presupuesto inmediato a medida (Confirmación en menos de 5 min por WhatsApp)',
      waBtn: 'Enviar por WhatsApp',
      emailBtn: 'Enviar por Email',
      sent: '✅ ¡Su solicitud ha sido preparada con éxito!',
      waTemplate: '¡Hola ASBIH-TOURS! 👋\n\n📢 *Nueva solicitud de reserva*\n\n👤 *Nombre*: {name}\n📱 *Teléfono*: {phone}\n🚩 *Salida*: {dep}\n🏁 *Destino*: {dest}\n💰 *Tarifa estimada*: {price}\n📅 *Fecha*: {date}\n👥 *Pasajeros*: {passengers}\n\nPor favor, confírmenme disponibilidad y presupuesto exacto. 🙏',
      mailSubject: 'Solicitud de reserva - ASBIH-TOURS',
      helperHint: 'Pago seguro directamente al conductor en Dirhams (MAD) o Euros (€). Transporte turístico autorizado, vehículo climatizado de alto confort con chófer profesional.',
    },
    footer: {
      loc: 'Tánger, Marruecos — Disponible 24/7',
      rights: 'Todos los derechos reservados. Transporte turístico autorizado y traslados privados.',
      cities: 'Tánger • Chefchaouen • Tetuán • Asilah • Rabat • Casablanca • Marrakech',
      tagline: 'Su socio de confianza para un viaje inolvidable por Marruecos.',
    },
  },
};
