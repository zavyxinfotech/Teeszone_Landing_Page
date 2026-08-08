import catalogPoloPoster from '../assets/images/catalog_polo_poster_processed.png';
import catalogPremiumPoster from '../assets/images/catalog_premium_poster_processed.png';
import catalogOversizedPoster from '../assets/images/catalog_oversized_poster_processed.png';
import catalogHoodiePoster from '../assets/images/catalog_hoodie_poster_processed.png';
import catalogJerseyPoster from '../assets/images/catalog_jersey_poster_processed.png';
import catalogUniformPoster from '../assets/images/catalog_uniform_poster_processed.png';

export interface EnterpriseCatalogItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  backdropTitle: string;
  price: number; // INR (₹)
  colors: { name: string; hex: string; bgClass: string }[];
  sizes: string[];
  cta: string;
  recommendedGsm: string;
  badge: string;
  code: string;
  popularTechniques: string[];
}

export const ENTERPRISE_CATALOG_DATA: EnterpriseCatalogItem[] = [
  {
    id: 'polo-shirts',
    name: 'Executive Polo T-Shirts',
    category: 'Polo T-Shirts',
    backdropTitle: 'POLO',
    description: 'Premium 220-260 GSM combed cotton honeycomb polo shirts customized with precision high-density embroidery. Essential for tech teams, sales reps, and executives.',
    image: catalogPoloPoster,
    price: 399,
    colors: [
      { name: 'Navy Blue', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
      { name: 'Pure White', hex: '#FFFFFF', bgClass: 'bg-white' },
      { name: 'Charcoal Grey', hex: '#334155', bgClass: 'bg-slate-700' },
      { name: 'Royal Blue', hex: '#2563EB', bgClass: 'bg-blue-600' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    cta: 'Customize Polo Line',
    recommendedGsm: '220 - 260 GSM',
    badge: 'Most Popular for Corporate',
    code: '# POLO-2026',
    popularTechniques: ['High-Density Embroidery', '3D Puff Monogram', 'Dual Crest Print']
  },
  {
    id: 'round-neck',
    name: 'Premium Bio-Washed T-Shirts',
    category: 'Premium T-Shirts',
    backdropTitle: 'PREMIUM',
    description: 'Bio-washed 180 GSM 100% ring-spun combed cotton tees engineered for event launches, hackathons, employee onboarding, and promotional drives.',
    image: catalogPremiumPoster,
    price: 249,
    colors: [
      { name: 'Jet Black', hex: '#000000', bgClass: 'bg-black' },
      { name: 'Crisp White', hex: '#FFFFFF', bgClass: 'bg-white' },
      { name: 'Heather Grey', hex: '#94A3B8', bgClass: 'bg-slate-400' },
      { name: 'Indigo Blue', hex: '#1E3A8A', bgClass: 'bg-indigo-900' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    cta: 'Order T-Shirt Bulk',
    recommendedGsm: '180 - 200 GSM',
    badge: 'Fastest 48hr Dispatch',
    code: '# TEE-180GSM',
    popularTechniques: ['Ultra-HD Screen Printing', 'Direct-to-Garment (DTG)', 'Waterbase Discharge']
  },
  {
    id: 'oversized',
    name: '240 GSM Heavyweight Oversized Tees',
    category: 'Oversized T-Shirts',
    backdropTitle: 'OVERSIZED',
    description: 'Trendy drop-shoulder boxy cuts crafted from 240+ GSM ultra-heavyweight cotton. Designed for creator merch, startup launches, and youth brands.',
    image: catalogOversizedPoster,
    price: 499,
    colors: [
      { name: 'Pitch Black', hex: '#0F172A', bgClass: 'bg-slate-900' },
      { name: 'Bone White', hex: '#F8FAFC', bgClass: 'bg-slate-100' },
      { name: 'Olive Green', hex: '#3F6212', bgClass: 'bg-[#3F6212]' },
      { name: 'Mocha Brown', hex: '#451A03', bgClass: 'bg-[#451A03]' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    cta: 'Explore Oversized Line',
    recommendedGsm: '240 - 280 GSM',
    badge: 'Top Trending Category',
    code: '# OVER-240GSM',
    popularTechniques: ['3D Puff Printing', 'High-Density Screen Print', 'Vapor Discharge']
  },
  {
    id: 'hoodies-sweats',
    name: 'Luxury Heavy Fleece Hoodies & Sweats',
    category: 'Hoodies & Sweatshirts',
    backdropTitle: 'HOODIE',
    description: '380 GSM dense fleece hoodies and crewneck sweatshirts with double-lined hoods, ribbed cuffs, and custom inside neck branding.',
    image: catalogHoodiePoster,
    price: 899,
    colors: [
      { name: 'Deep Navy', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
      { name: 'Space Grey', hex: '#475569', bgClass: 'bg-slate-600' },
      { name: 'Burgundy', hex: '#881337', bgClass: 'bg-rose-900' },
      { name: 'Midnight Black', hex: '#020617', bgClass: 'bg-slate-950' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    cta: 'Customize Outerwear',
    recommendedGsm: '350 - 420 GSM',
    badge: 'Luxury Winter Apparel',
    code: '# HOOD-380GSM',
    popularTechniques: ['Embroidery Patch', '3D Puff Print', 'Custom Zipper Pulls']
  },
  {
    id: 'sports-jerseys',
    name: 'Sublimated Sports & Athletic Jerseys',
    category: 'Sports Jerseys',
    backdropTitle: 'JERSEY',
    description: 'Moisture-wicking micro-poly mesh athletic jerseys featuring full-bleed vibrant edge-to-edge sublimation that never fades, cracks, or peels.',
    image: catalogJerseyPoster,
    price: 349,
    colors: [
      { name: 'Neon Blue', hex: '#0284C7', bgClass: 'bg-sky-600' },
      { name: 'Vibrant Red', hex: '#DC2626', bgClass: 'bg-red-600' },
      { name: 'Volt Yellow', hex: '#CA8A04', bgClass: 'bg-yellow-600' },
      { name: 'Electric Green', hex: '#16A34A', bgClass: 'bg-green-600' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    cta: 'Order Athletic Jerseys',
    recommendedGsm: '150 - 180 GSM',
    badge: '100% Fade Proof',
    code: '# ATH-SPORT',
    popularTechniques: ['Edge-to-Edge Sublimation', 'Reflective Vinyl Numbers']
  },
  {
    id: 'corporate-apparel',
    name: 'Industrial & Corporate Uniforms',
    category: 'Corporate Apparel',
    backdropTitle: 'UNIFORM',
    description: 'Tailored button-up shirts, field jackets, and hospitality uniforms equipped with stain-resistant coatings and anti-wrinkle twill weaves.',
    image: catalogUniformPoster,
    price: 599,
    colors: [
      { name: 'Navy Blue', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
      { name: 'White', hex: '#FFFFFF', bgClass: 'bg-white' },
      { name: 'Sky Blue', hex: '#38BDF8', bgClass: 'bg-sky-400' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    cta: 'Request Corporate Quote',
    recommendedGsm: '180 - 240 GSM',
    badge: 'Industrial Grade',
    code: '# CORP-WORK',
    popularTechniques: ['Precision Chest Embroidery', 'Subtle Collar Monogram']
  }
];
