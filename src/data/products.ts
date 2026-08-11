import heroMockupImg from '../assets/images/teeszone_hero_mockup_1786102788341.jpg';
import corporatePolosImg from '../assets/images/teeszone_corporate_polos_1786102801522.jpg';
import oversizedTeesImg from '../assets/images/teeszone_oversized_tees_1786102813133.jpg';
import catalogHoodiePoster from '../assets/images/catalog_hoodie_poster.jpg';
import catalogJerseyPoster from '../assets/images/catalog_jersey_poster.jpg';
import catalogPoloPoster from '../assets/images/catalog_polo_poster.jpg';
import catalogPremiumPoster from '../assets/images/catalog_premium_poster.jpg';
import corporateAndOfficeUniformsImg from '../assets/categories/corporate_and_office_uniforms.png';
import eventsAndPromotionalImg from '../assets/categories/Events_and_Promotional_Tshirts.png';
import industrialFactoryUniformsImg from '../assets/categories/Industrial_Factory_Uniforms.png';
import schoolUniformsImg from '../assets/categories/school_uniforms.png';

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
    name: 'Corporate Uniforms',
    category: 'Corporate Uniforms',
    backdropTitle: 'CORPORATE',
    description: 'Matching branded polo and T-shirt uniforms for tech teams, corporate employees, and executive events.',
    image: corporateAndOfficeUniformsImg,
    cta: 'Explore Corporate Uniforms',
    customizationOptions: ['Chest Logo Embroidery', 'Collar Monogramming', 'Pantone Color Match'],
    type: 'custom-bulk'
  },
  {
    id: 'office-uniforms',
    name: 'Office Uniforms',
    category: 'Office Uniforms',
    backdropTitle: 'OFFICE',
    description: 'Coordinated professional uniforms for front-desk staff, workplace teams, and corporate environments.',
    image: corporatePolosImg,
    cta: 'Explore Office Uniforms',
    customizationOptions: ['Pocket Embroidery', 'Custom Neck Label', 'Wrinkle-Free Weave'],
    type: 'custom-bulk'
  },
  {
    id: 'school-uniforms',
    name: 'School Uniforms',
    category: 'School Uniforms',
    backdropTitle: 'SCHOOL',
    description: 'Professionally designed school uniform T-shirts, polos, and campus wear tested for 100+ wash durability.',
    image: schoolUniformsImg,
    cta: 'Explore School Uniforms',
    customizationOptions: ['School Crest Patch', 'Name Tag Labeling', 'Hypoallergenic Dye'],
    type: 'custom-bulk'
  },
  {
    id: 'college-uniforms',
    name: 'College Uniforms',
    category: 'College Uniforms',
    backdropTitle: 'COLLEGE',
    description: 'Modern branded college uniforms, varsity hoodies, and campus store merch for university students.',
    image: catalogPremiumPoster,
    cta: 'Explore College Uniforms',
    customizationOptions: ['3D Monogram Print', 'Custom Sleeve Stripe', 'Bio-Wash Softness'],
    type: 'custom-bulk'
  },
  {
    id: 'industrial-uniforms',
    name: 'Industrial Uniforms',
    category: 'Industrial Uniforms',
    backdropTitle: 'INDUSTRIAL',
    description: 'Heavy-duty industrial and factory workwear uniforms equipped with anti-shrink and stain-resistant finishes.',
    image: industrialFactoryUniformsImg,
    cta: 'Explore Industrial Uniforms',
    customizationOptions: ['High-Vis Reflective Tape', 'Heavy Duty Stitching', 'Stain Guard Coating'],
    type: 'custom-bulk'
  },
  {
    id: 'sports-jerseys',
    name: 'Sports Jerseys',
    category: 'Sports Jerseys',
    backdropTitle: 'JERSEY',
    description: 'Customized athletic jerseys featuring full-bleed edge-to-edge moisture-wicking sublimation printing.',
    image: catalogJerseyPoster,
    cta: 'Explore Sports Jerseys',
    customizationOptions: ['Edge-to-Edge Sublimation', 'Reflective Vinyl Numbers', 'Antimicrobial Mesh'],
    type: 'custom-bulk'
  },
  {
    id: 'event-tshirts',
    name: 'Event T-Shirts',
    category: 'Event T-Shirts',
    backdropTitle: 'EVENT',
    description: 'High-impact branded event T-shirts for corporate summits, hackathons, conferences, and volunteer staff.',
    image: eventsAndPromotionalImg,
    cta: 'Explore Event T-Shirts',
    customizationOptions: ['Ultra-HD Screen Print', 'Front & Back Logo', 'Express 48hr Dispatch'],
    type: 'custom-bulk'
  },
  {
    id: 'promotional-tshirts',
    name: 'Promotional T-Shirts',
    category: 'Promotional T-Shirts',
    backdropTitle: 'PROMO',
    description: 'Marketing campaign T-shirts designed for brand activations, product launches, and giveaway campaigns.',
    image: oversizedTeesImg,
    cta: 'Explore Promotional T-Shirts',
    customizationOptions: ['Bulk Screen Printing', 'Custom Packaging', 'Wholesale Pricing'],
    type: 'custom-bulk'
  },
  {
    id: 'hospitality-uniforms',
    name: 'Hospitality Uniforms',
    category: 'Hospitality Uniforms',
    backdropTitle: 'HOSPITALITY',
    description: 'Premium coordinated uniforms for hotel, restaurant, cafe, and luxury hospitality personnel.',
    image: catalogPoloPoster,
    cta: 'Explore Hospitality Uniforms',
    customizationOptions: ['Chef & Server Monograms', 'Stain Shield Finish', 'Custom Aprons & Tees'],
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
