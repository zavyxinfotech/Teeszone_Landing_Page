import heroMockupImg from '../assets/images/teeszone_hero_mockup_1786102788341.jpg';
import corporatePolosImg from '../assets/images/teeszone_corporate_polos_1786102801522.jpg';
import catalogHoodiePoster from '../assets/images/catalog_hoodie_poster.jpg';
import catCorporateTshirt from '../assets/images/cat_corporate_tshirt_1786521137829.jpg';
import catIndustrialTshirt from '../assets/images/cat_industrial_tshirt_1786521333010.jpg';
import catSchoolTshirt from '../assets/images/cat_school_tshirt_1786521465042.jpg';
import catCollegeTshirt from '../assets/images/cat_college_tshirt_1786521482659.jpg';
import catSportsJersey from '../assets/images/cat_sports_jersey_1786521568260.jpg';
import catEventTshirt from '../assets/images/cat_event_tshirt_1786521633256.jpg';
import catHospitalityTshirt from '../assets/images/cat_hospitality_tshirt_1786521661746.jpg';
import catPoloTshirt from '../assets/images/cat_polo_tshirt_1786521728445.jpg';
import catCrewneckTshirt from '../assets/images/cat_crewneck_tshirt_1786521897962.jpg';
import catCustomHoodie from '../assets/images/cat_custom_hoodie_1786521924888.jpg';
import catBlankTshirt from '../assets/images/cat_blank_tshirt_1786522045486.jpg';

export interface CustomBulkCategory {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  backdropTitle: string;
  cta: string;
  customizationOptions: string[];
  type: 'custom-bulk';
}

export interface ReadyStockProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  fabric: string;
  colors: { name: string; hex: string; bgClass: string }[];
  sizes: string[];
  price: number;
  currency: string;
  rating: number;
  image: string;
  cta: string;
  type: 'ready-stock';
}

export const CUSTOM_BULK_PRODUCTS: CustomBulkCategory[] = [
  {
    id: 'corporate-uniforms',
    name: 'Corporate & Office Uniforms',
    category: 'Corporate Uniforms',
    backdropTitle: 'CORPORATE',
    description: 'Corporate & Office Uniforms',
    image: catCorporateTshirt,
    cta: 'Enquire',
    customizationOptions: [],
    type: 'custom-bulk'
  },
  {
    id: 'industrial-uniforms',
    name: 'Industrial & Factory Uniforms',
    category: 'Industrial Uniforms',
    backdropTitle: 'INDUSTRIAL',
    description: 'Industrial & Factory Uniforms',
    image: catIndustrialTshirt,
    cta: 'Enquire',
    customizationOptions: [],
    type: 'custom-bulk'
  },
  {
    id: 'school-uniforms',
    name: 'School Uniforms',
    category: 'School Uniforms',
    backdropTitle: 'SCHOOL',
    description: 'School Uniforms',
    image: catSchoolTshirt,
    cta: 'Enquire',
    customizationOptions: [],
    type: 'custom-bulk'
  },
  {
    id: 'college-uniforms',
    name: 'College Uniforms',
    category: 'College Uniforms',
    backdropTitle: 'COLLEGE',
    description: 'College Uniforms',
    image: catCollegeTshirt,
    cta: 'Enquire',
    customizationOptions: [],
    type: 'custom-bulk'
  },
  {
    id: 'sports-jerseys',
    name: 'Sports Jerseys',
    category: 'Sports Jerseys',
    backdropTitle: 'SPORTS',
    description: 'Sports Jerseys',
    image: catSportsJersey,
    cta: 'Enquire',
    customizationOptions: [],
    type: 'custom-bulk'
  },
  {
    id: 'event-tshirts',
    name: 'Event & Promotional T-Shirts',
    category: 'Event T-Shirts',
    backdropTitle: 'EVENT',
    description: 'Event & Promotional T-Shirts',
    image: catEventTshirt,
    cta: 'Enquire',
    customizationOptions: [],
    type: 'custom-bulk'
  },
  {
    id: 'hospitality-uniforms',
    name: 'Hospitality Uniforms',
    category: 'Hospitality Uniforms',
    backdropTitle: 'HOSPITALITY',
    description: 'Hospitality Uniforms',
    image: catHospitalityTshirt,
    cta: 'Enquire',
    customizationOptions: [],
    type: 'custom-bulk'
  },
  {
    id: 'polo-tshirts',
    name: 'Polo T-Shirts',
    category: 'Polo T-Shirts',
    backdropTitle: 'POLO',
    description: 'Polo T-Shirts',
    image: catPoloTshirt,
    cta: 'Enquire',
    customizationOptions: [],
    type: 'custom-bulk'
  },
  {
    id: 'crewneck-tshirts',
    name: 'Crew Neck (Round Neck) T-Shirts',
    category: 'Crew Neck',
    backdropTitle: 'CREW',
    description: 'Crew Neck (Round Neck) T-Shirts',
    image: catCrewneckTshirt,
    cta: 'Enquire',
    customizationOptions: [],
    type: 'custom-bulk'
  },
  {
    id: 'custom-hoodies',
    name: 'Customized Hoodies',
    category: 'Hoodies',
    backdropTitle: 'HOODIES',
    description: 'Customized Hoodies',
    image: catCustomHoodie,
    cta: 'Enquire',
    customizationOptions: [],
    type: 'custom-bulk'
  },
  {
    id: 'blank-apparel',
    name: 'Blank Apparel for Custom Branding',
    category: 'Blank Apparel',
    backdropTitle: 'BLANK',
    description: 'Blank Apparel for Custom Branding',
    image: catBlankTshirt,
    cta: 'Enquire',
    customizationOptions: [],
    type: 'custom-bulk'
  }
];

export const READY_STOCK_PRODUCTS: ReadyStockProduct[] = [
  {
    id: 'ready-aerosoft-polo',
    name: 'AeroSoft Polo T-Shirts',
    category: 'Ready Stock',
    description: 'Premium realistic polo T-shirt with honeycomb fabric texture, structured collar, and sleeve ribbed details.',
    fabric: '100% Combed Supima Honeycomb Cotton',
    colors: [
      { name: 'Navy Blue', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
      { name: 'Pure White', hex: '#FFFFFF', bgClass: 'bg-white border border-gray-300' },
      { name: 'Charcoal Grey', hex: '#334155', bgClass: 'bg-slate-700' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    price: 599,
    currency: 'INR',
    rating: 4.9,
    image: corporatePolosImg,
    cta: 'Add to Cart',
    type: 'ready-stock'
  },
  {
    id: 'ready-crew-neck',
    name: 'Crew Neck T-Shirts',
    category: 'Ready Stock',
    description: 'Soft bio-washed crew neck T-shirt with premium cotton texture, durable neckline, and modern tailored fit.',
    fabric: '100% Super-Combed Cotton (180 GSM)',
    colors: [
      { name: 'Jet Black', hex: '#000000', bgClass: 'bg-black' },
      { name: 'Crisp White', hex: '#FFFFFF', bgClass: 'bg-white border border-gray-300' },
      { name: 'Heather Grey', hex: '#94A3B8', bgClass: 'bg-slate-400' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    price: 399,
    currency: 'INR',
    rating: 4.8,
    image: heroMockupImg,
    cta: 'Add to Cart',
    type: 'ready-stock'
  },
  {
    id: 'ready-customized-hoodie',
    name: 'Customized Hoodies',
    category: 'Ready Stock / Customizable',
    description: 'Heavyweight fleece hoodie with soft interior fabric texture, double-lined hood, and kangaroo pouch pocket.',
    fabric: '380 GSM Heavy Organic Fleece Cotton',
    colors: [
      { name: 'Midnight Navy', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
      { name: 'Space Grey', hex: '#475569', bgClass: 'bg-slate-600' },
      { name: 'Jet Black', hex: '#020617', bgClass: 'bg-slate-950' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    price: 1299,
    currency: 'INR',
    rating: 4.95,
    image: catalogHoodiePoster,
    cta: 'Add to Cart',
    type: 'ready-stock'
  }
];

// Alias export for backward compatibility
export const PRODUCTS = READY_STOCK_PRODUCTS;
