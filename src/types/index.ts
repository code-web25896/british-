export type Language = 'en';

export interface AcademyPricedService {
  id: string;
  category: 'clinical' | 'cosmetology' | 'educator' | 'institutional' | 'pack' | string;
  badge: { en: string; fr: string };
  title: { en: string; fr: string };
  duration: { en: string; fr: string };
  priceUsd: number;
  priceEur: number;
  originalPriceUsd?: number;
  originalPriceEur?: number;
  priceTnd?: number;
  priceGbp?: number;
  originalPriceTnd?: number;
  originalPriceGbp?: number;
  description: { en: string; fr: string };
  features: { en: string[]; fr: string[] };
  isPopular?: boolean;
}

export type PageRoute = 
  | 'home'
  | 'about'
  | 'mission-vision'
  | 'standards'
  | 'academie'
  | 'contact';

export interface AreaOfExcellence {
  id: string;
  iconName: string;
  titleKey: string;
  descKey: string;
}

export interface EducationalStandardPillar {
  id: string;
  number: string;
  titleKey: string;
  deckKey: string;
  pointsKeys: string[];
}

export interface ProgramItem {
  id: string;
  category: 'aesthetics' | 'cosmetology' | 'institutional';
  titleKey: string;
  subtitleKey: string;
  descKey: string;
  durationKey: string;
  levelKey: string;
  image: string;
  topicsKeys: string[];
}

export interface GalleryItem {
  id: string;
  category: 'workshops' | 'aesthetics' | 'cosmetology' | 'events';
  image: string;
  titleKey: string;
  locationKey: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  subject: string;
  message: string;
}
