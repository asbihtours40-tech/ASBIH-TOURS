export type Language = 'fr' | 'en' | 'es';

export interface ServiceItem {
  icon: string;
  title: string;
  text: string;
}

export interface RoutePricing {
  route: string;
  price: number;
  time: string;
  note?: string;
}

export interface PricingCategoryData {
  icon: string;
  name: string;
  note: string;
  popular?: boolean;
  items: RoutePricing[];
}

export interface GalleryItem {
  id: string;
  cat: 'fleet' | 'tours' | 'transfers';
  icon: string;
  src: string;
  alt: string;
  caption?: string;
  location?: string;
}

export interface DestinationItem {
  icon: string;
  name: string;
  desc: string;
  gold?: boolean;
  tag?: string;
}

export interface TestimonialItem {
  name: string;
  country: string;
  rating: number;
  service: string;
  text: string;
  date?: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface DestinationOption {
  label: string;
  value: string;
  dep?: string;
  price?: number;
  priceDisplay?: string;
}

export interface DestinationGroup {
  group: string;
  options: DestinationOption[];
}

export type ServiceOption = DestinationOption;
export type ServiceGroup = DestinationGroup;

export interface BookingFormData {
  name: string;
  phone: string;
  departure: string;
  destination: string;
  date: string;
  time?: string;
  passengers: string;
  serviceType?: string;
  notes?: string;
}

