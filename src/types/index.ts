export type ApparelCategory = 
  | 'round-neck'
  | 'oversized'
  | 'polo-shirts'
  | 'corporate-uniforms'
  | 'sports-jerseys'
  | 'school-uniforms'
  | 'hoodies-sweats'
  | 'promotional-wear';

export type PrintTechnique = 
  | 'Ultra-HD Screen Printing'
  | 'Direct-to-Garment (DTG)'
  | 'High-Density Embroidery'
  | 'Sublimation Printing'
  | '3D Puff Print'
  | 'Reflective Vinyl Transfer';

export interface ProductColor {
  name: string;
  hex: string;
  bgClass: string;
}

export interface Product {
  id: string;
  name: string;
  category: ApparelCategory;
  image: string;
  secondaryImage?: string;
  gsm: number;
  fabric: string;
  printTechniques: PrintTechnique[];
  rating: number;
  reviewCount: number;
  basePrice: number; // For bulk 100+
  samplePrice: number;
  minQuantity: number;
  colors: ProductColor[];
  sizes: string[];
  description: string;
  highlights: string[];
  tag?: 'Bestseller' | 'Corporate Choice' | 'Eco Premium' | 'Trending' | 'Fast Ship';
  isCustomizable: boolean;
}

export interface CategoryInfo {
  id: ApparelCategory;
  name: string;
  tagline: string;
  description: string;
  image: string;
  itemCount: number;
  recommendedGsm: string;
  badge?: string;
  popularTechniques: string[];
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  keyOutputs: string[];
  iconName: string;
}

export interface IndustryCard {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  popularApparel: string[];
  keyBenefits: string[];
  iconName: string;
  clientCount: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  companyLogoText: string;
  avatar: string;
  content: string;
  rating: number;
  orderVolume: string;
  apparelType: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Orders & MOQ' | 'Printing & Quality' | 'Shipping & Turnaround' | 'Samples & Design' | 'Corporate Accounts';
}

export interface StatItem {
  value: string;
  numberValue: number;
  suffix: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface CustomizerState {
  apparelType: ApparelCategory;
  colorHex: string;
  colorName: string;
  size: string;
  printTechnique: PrintTechnique;
  printLocation: 'Front Chest' | 'Back Shield' | 'Sleeve Crest' | 'Dual Location';
  quantity: number;
  customText: string;
  logoUrl: string | null;
}

export interface SampleKitFormData {
  fullName: string;
  companyName: string;
  workEmail: string;
  phone: string;
  kitType: 'tech-startup' | 'luxury-corporate' | 'eco-cotton' | 'sports-event';
  shippingAddress: string;
  city: string;
  estimatedQuantity: string;
}
