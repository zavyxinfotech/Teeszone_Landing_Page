import heroMockupImg from '../assets/images/teeszone_hero_mockup_1786102788341.jpg';
import corporatePolosImg from '../assets/images/teeszone_corporate_polos_1786102801522.jpg';
import oversizedTeesImg from '../assets/images/teeszone_oversized_tees_1786102813133.jpg';
import hoodiesSweatsImg from '../assets/images/teeszone_hoodies_sweats_1786102824199.jpg';
import catalogHoodiePoster from '../assets/images/catalog_hoodie_poster.jpg';
import catalogPoloPoster from '../assets/images/catalog_polo_poster.jpg';
import catalogPremiumPoster from '../assets/images/catalog_premium_poster.jpg';
import catalogOversizedPoster from '../assets/images/catalog_oversized_poster.jpg';
import eventsAndPromotionalImg from '../assets/categories/Events_and_Promotional_Tshirts.png';
import schoolUniformsImg from '../assets/categories/school_uniforms.png';

export interface ColorSwatch {
  name: string;
  hex: string;
  bgClass: string;
}

export interface BlankProduct {
  id: string;
  name: string;
  category: 'roundneck' | 'polo' | 'oversized' | 'hoodies' | 'kids-women';
  categoryLabel: string;
  fabricDetail: string;
  gsm: string;
  image: string;
  colors: ColorSwatch[];
  extraColorsCount: number;
}

export const BLANK_CATALOGUE_PRODUCTS: BlankProduct[] = [
  {
    id: 'blank-01',
    name: "Men's Round Neck Half Sleeve",
    category: 'roundneck',
    categoryLabel: 'Roundneck',
    fabricDetail: '100% Compact Cotton',
    gsm: '180 GSM',
    image: heroMockupImg,
    colors: [
      { name: 'Jet Black', hex: '#000000', bgClass: 'bg-black' },
      { name: 'Pure White', hex: '#FFFFFF', bgClass: 'bg-white border border-gray-300' },
      { name: 'Navy Blue', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
      { name: 'Heather Grey', hex: '#94A3B8', bgClass: 'bg-slate-400' },
    ],
    extraColorsCount: 12
  },
  {
    id: 'blank-02',
    name: "Men's Round Neck Half Sleeve",
    category: 'roundneck',
    categoryLabel: 'Roundneck',
    fabricDetail: '100% Super-Combed Cotton',
    gsm: '200 GSM',
    image: catalogPremiumPoster,
    colors: [
      { name: 'Pitch Black', hex: '#0F172A', bgClass: 'bg-slate-900' },
      { name: 'Optic White', hex: '#FFFFFF', bgClass: 'bg-white border border-gray-300' },
      { name: 'Royal Blue', hex: '#2563EB', bgClass: 'bg-blue-600' },
      { name: 'Crimson Red', hex: '#DC2626', bgClass: 'bg-red-600' },
    ],
    extraColorsCount: 15
  },
  {
    id: 'blank-03',
    name: "Men's Round Neck Half Sleeve",
    category: 'roundneck',
    categoryLabel: 'Roundneck',
    fabricDetail: 'Cotton Spandex Stretch',
    gsm: '200 GSM Spandex',
    image: heroMockupImg,
    colors: [
      { name: 'Stealth Black', hex: '#020617', bgClass: 'bg-slate-950' },
      { name: 'Pure White', hex: '#FFFFFF', bgClass: 'bg-white border border-gray-300' },
      { name: 'Charcoal Grey', hex: '#334155', bgClass: 'bg-slate-700' },
      { name: 'Olive Green', hex: '#3F6212', bgClass: 'bg-[#3F6212]' },
    ],
    extraColorsCount: 8
  },
  {
    id: 'blank-04',
    name: "Men's Round Neck Full Sleeve",
    category: 'roundneck',
    categoryLabel: 'Roundneck',
    fabricDetail: '100% Combed Cotton Rib Cuffs',
    gsm: '180 GSM',
    image: catalogPremiumPoster,
    colors: [
      { name: 'Midnight Navy', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
      { name: 'Pure White', hex: '#FFFFFF', bgClass: 'bg-white border border-gray-300' },
      { name: 'Maroon', hex: '#881337', bgClass: 'bg-rose-900' },
      { name: 'Jet Black', hex: '#000000', bgClass: 'bg-black' },
    ],
    extraColorsCount: 10
  },
  {
    id: 'blank-05',
    name: "Women's Round Neck Half Sleeve",
    category: 'kids-women',
    categoryLabel: "Women's",
    fabricDetail: '100% Bio-Washed Soft Cotton',
    gsm: '180 GSM',
    image: eventsAndPromotionalImg,
    colors: [
      { name: 'Blush Pink', hex: '#F472B6', bgClass: 'bg-pink-400' },
      { name: 'Crisp White', hex: '#FFFFFF', bgClass: 'bg-white border border-gray-300' },
      { name: 'Jet Black', hex: '#000000', bgClass: 'bg-black' },
      { name: 'Sky Lavender', hex: '#C084FC', bgClass: 'bg-purple-400' },
    ],
    extraColorsCount: 14
  },
  {
    id: 'blank-06',
    name: "Kids Round Neck Half Sleeve",
    category: 'kids-women',
    categoryLabel: 'Kids',
    fabricDetail: '100% Hypoallergenic Organic Cotton',
    gsm: '180 GSM',
    image: schoolUniformsImg,
    colors: [
      { name: 'Bright Yellow', hex: '#EAB308', bgClass: 'bg-yellow-500' },
      { name: 'Royal Blue', hex: '#2563EB', bgClass: 'bg-blue-600' },
      { name: 'Pure White', hex: '#FFFFFF', bgClass: 'bg-white border border-gray-300' },
      { name: 'Vibrant Red', hex: '#EF4444', bgClass: 'bg-red-500' },
    ],
    extraColorsCount: 16
  },
  {
    id: 'blank-07',
    name: "Men's Oversize Half Sleeve",
    category: 'oversized',
    categoryLabel: 'Oversized',
    fabricDetail: '100% Heavy Combed Cotton Boxy Cut',
    gsm: '200 GSM',
    image: oversizedTeesImg,
    colors: [
      { name: 'Sage Green', hex: '#64748B', bgClass: 'bg-slate-500' },
      { name: 'Earthy Sand', hex: '#D4D0C8', bgClass: 'bg-amber-100' },
      { name: 'Pitch Black', hex: '#0F172A', bgClass: 'bg-slate-900' },
      { name: 'Bone White', hex: '#F8FAFC', bgClass: 'bg-slate-100' },
    ],
    extraColorsCount: 9
  },
  {
    id: 'blank-08',
    name: "Men's Oversize Half Sleeve",
    category: 'oversized',
    categoryLabel: 'Oversized',
    fabricDetail: 'Heavy French Terry Unbrushed Loop',
    gsm: 'French Terry 240-250 GSM',
    image: catalogOversizedPoster,
    colors: [
      { name: 'Washed Charcoal', hex: '#334155', bgClass: 'bg-slate-700' },
      { name: 'Raw Natural Cream', hex: '#FEF3C7', bgClass: 'bg-amber-100' },
      { name: 'Deep Olive', hex: '#3F4E36', bgClass: 'bg-emerald-950' },
      { name: 'Obsidian Black', hex: '#020617', bgClass: 'bg-slate-950' },
    ],
    extraColorsCount: 11
  },
  {
    id: 'blank-09',
    name: "Men's Polo Half Sleeve",
    category: 'polo',
    categoryLabel: 'Polo',
    fabricDetail: 'Heavyweight Honeycomb Pique Cotton',
    gsm: '240-250 GSM',
    image: corporatePolosImg,
    colors: [
      { name: 'Corporate Navy', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
      { name: 'Pure White', hex: '#FFFFFF', bgClass: 'bg-white border border-gray-300' },
      { name: 'Charcoal Grey', hex: '#334155', bgClass: 'bg-slate-700' },
      { name: 'Royal Blue', hex: '#2563EB', bgClass: 'bg-blue-600' },
    ],
    extraColorsCount: 18
  },
  {
    id: 'blank-10',
    name: "Men's Polo Half Sleeve",
    category: 'polo',
    categoryLabel: 'Polo',
    fabricDetail: 'Honeycomb Cotton Spandex Stretch',
    gsm: 'Spandex 230-240 GSM',
    image: catalogPoloPoster,
    colors: [
      { name: 'Stealth Black', hex: '#090D16', bgClass: 'bg-slate-950' },
      { name: 'Snow White', hex: '#FFFFFF', bgClass: 'bg-white border border-gray-300' },
      { name: 'Maroon', hex: '#881337', bgClass: 'bg-rose-900' },
      { name: 'Emerald Green', hex: '#064E3B', bgClass: 'bg-emerald-900' },
    ],
    extraColorsCount: 14
  },
  {
    id: 'blank-11',
    name: "Men's Polo Half Sleeve Mars",
    category: 'polo',
    categoryLabel: 'Polo',
    fabricDetail: 'Lustrous Mars Weave Cotton Knit',
    gsm: '200 GSM',
    image: corporatePolosImg,
    colors: [
      { name: 'Sky Blue', hex: '#38BDF8', bgClass: 'bg-sky-400' },
      { name: 'Crisp White', hex: '#FFFFFF', bgClass: 'bg-white border border-gray-300' },
      { name: 'Midnight Navy', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
      { name: 'Heather Grey', hex: '#94A3B8', bgClass: 'bg-slate-400' },
    ],
    extraColorsCount: 10
  },
  {
    id: 'blank-12',
    name: "Unisex Hoodies (with zipper)",
    category: 'hoodies',
    categoryLabel: 'Hoodies',
    fabricDetail: 'Brushed Inner Poly Fleece Zipper',
    gsm: '325 GSM',
    image: hoodiesSweatsImg,
    colors: [
      { name: 'Space Grey', hex: '#475569', bgClass: 'bg-slate-600' },
      { name: 'Deep Navy', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
      { name: 'Jet Black', hex: '#000000', bgClass: 'bg-black' },
      { name: 'Oatmeal Milk', hex: '#E5E7EB', bgClass: 'bg-gray-200' },
    ],
    extraColorsCount: 8
  },
  {
    id: 'blank-13',
    name: "Unisex Hoodies (with zipper)",
    category: 'hoodies',
    categoryLabel: 'Hoodies',
    fabricDetail: 'Ultra-Dense Heavy Fleece Full Zip',
    gsm: '360-370 GSM',
    image: catalogHoodiePoster,
    colors: [
      { name: 'Obsidian Black', hex: '#020617', bgClass: 'bg-slate-950' },
      { name: 'Charcoal Heather', hex: '#1F2937', bgClass: 'bg-gray-800' },
      { name: 'Burgundy', hex: '#881337', bgClass: 'bg-rose-900' },
      { name: 'Forest Green', hex: '#14532D', bgClass: 'bg-green-900' },
    ],
    extraColorsCount: 12
  },
  {
    id: 'blank-14',
    name: "Ecoblend Roundneck",
    category: 'roundneck',
    categoryLabel: 'Roundneck',
    fabricDetail: '60% Recycled Poly / 40% Organic Cotton',
    gsm: '180 GSM',
    image: heroMockupImg,
    colors: [
      { name: 'Eco Sage', hex: '#4B5563', bgClass: 'bg-gray-600' },
      { name: 'Natural Off-White', hex: '#F5F5DC', bgClass: 'bg-amber-50' },
      { name: 'Slate Blue', hex: '#3B82F6', bgClass: 'bg-blue-500' },
      { name: 'Charcoal', hex: '#1F2937', bgClass: 'bg-gray-800' },
    ],
    extraColorsCount: 7
  },
  {
    id: 'blank-15',
    name: "Classic Crewneck Roundneck (Biowash)",
    category: 'roundneck',
    categoryLabel: 'Roundneck',
    fabricDetail: '100% Super-Combed Biowash Cotton',
    gsm: '180 GSM',
    image: catalogPremiumPoster,
    colors: [
      { name: 'Crisp White', hex: '#FFFFFF', bgClass: 'bg-white border border-gray-300' },
      { name: 'Jet Black', hex: '#000000', bgClass: 'bg-black' },
      { name: 'Navy Blue', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
      { name: 'Red', hex: '#EF4444', bgClass: 'bg-red-500' },
    ],
    extraColorsCount: 20
  },
  {
    id: 'blank-16',
    name: "Primoknit Polo",
    category: 'polo',
    categoryLabel: 'Polo',
    fabricDetail: 'Primo Soft Interlock Pique Cotton',
    gsm: '200 GSM',
    image: corporatePolosImg,
    colors: [
      { name: 'Executive Navy', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
      { name: 'Pure White', hex: '#FFFFFF', bgClass: 'bg-white border border-gray-300' },
      { name: 'Charcoal', hex: '#334155', bgClass: 'bg-slate-700' },
      { name: 'Teal Green', hex: '#0D9488', bgClass: 'bg-teal-600' },
    ],
    extraColorsCount: 9
  },
  {
    id: 'blank-17',
    name: "EcoBlend Polo",
    category: 'polo',
    categoryLabel: 'Polo',
    fabricDetail: 'Recycled Sustainable Polyester Pique',
    gsm: '240 GSM',
    image: catalogPoloPoster,
    colors: [
      { name: 'Eco Heather Blue', hex: '#2563EB', bgClass: 'bg-blue-600' },
      { name: 'Off-White', hex: '#F8FAFC', bgClass: 'bg-slate-100' },
      { name: 'Jet Black', hex: '#000000', bgClass: 'bg-black' },
      { name: 'Olive', hex: '#3F6212', bgClass: 'bg-[#3F6212]' },
    ],
    extraColorsCount: 8
  },
  {
    id: 'blank-18',
    name: "AeroPiq Polo",
    category: 'polo',
    categoryLabel: 'Polo',
    fabricDetail: 'Aero-Cool Moisture Wicking Micro-Pique',
    gsm: '210 GSM',
    image: corporatePolosImg,
    colors: [
      { name: 'Electric Sky Blue', hex: '#0284C7', bgClass: 'bg-sky-600' },
      { name: 'Crisp White', hex: '#FFFFFF', bgClass: 'bg-white border border-gray-300' },
      { name: 'Stealth Grey', hex: '#475569', bgClass: 'bg-slate-600' },
      { name: 'Midnight', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
    ],
    extraColorsCount: 11
  },
  {
    id: 'blank-19',
    name: "Organic Polo",
    category: 'polo',
    categoryLabel: 'Polo',
    fabricDetail: '100% GOTS Certified Organic Heavy Cotton',
    gsm: '270 GSM',
    image: catalogPoloPoster,
    colors: [
      { name: 'Raw Organic Natural', hex: '#FEF3C7', bgClass: 'bg-amber-100' },
      { name: 'Deep Forest', hex: '#14532D', bgClass: 'bg-green-900' },
      { name: 'Ink Black', hex: '#090D16', bgClass: 'bg-slate-950' },
      { name: 'Navy', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
    ],
    extraColorsCount: 6
  },
  {
    id: 'blank-20',
    name: "Organic Polo Plain",
    category: 'polo',
    categoryLabel: 'Polo',
    fabricDetail: '100% GOTS Certified Plain Weave Cotton',
    gsm: '270 GSM',
    image: corporatePolosImg,
    colors: [
      { name: 'Natural Cotton Cream', hex: '#F5F5DC', bgClass: 'bg-amber-50' },
      { name: 'Pure White', hex: '#FFFFFF', bgClass: 'bg-white border border-gray-300' },
      { name: 'Charcoal Slate', hex: '#334155', bgClass: 'bg-slate-700' },
      { name: 'Navy', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
    ],
    extraColorsCount: 7
  },
  {
    id: 'blank-21',
    name: "UrbanHood without Zip",
    category: 'hoodies',
    categoryLabel: 'Hoodies',
    fabricDetail: 'Heavy Organic Fleece Pullover Hoodie',
    gsm: '320/350 GSM',
    image: hoodiesSweatsImg,
    colors: [
      { name: 'Washed Charcoal', hex: '#334155', bgClass: 'bg-slate-700' },
      { name: 'Midnight Navy', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
      { name: 'Bone White', hex: '#F8FAFC', bgClass: 'bg-slate-100' },
      { name: 'Pitch Black', hex: '#0F172A', bgClass: 'bg-slate-900' },
    ],
    extraColorsCount: 10
  },
  {
    id: 'blank-22',
    name: "UrbanHood with Zip",
    category: 'hoodies',
    categoryLabel: 'Hoodies',
    fabricDetail: 'Heavy Organic Fleece Full-Zip Hoodie',
    gsm: '320/350 GSM',
    image: catalogHoodiePoster,
    colors: [
      { name: 'Space Grey', hex: '#475569', bgClass: 'bg-slate-600' },
      { name: 'Jet Black', hex: '#000000', bgClass: 'bg-black' },
      { name: 'Burgundy', hex: '#881337', bgClass: 'bg-rose-900' },
      { name: 'Navy Blue', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
    ],
    extraColorsCount: 9
  },
  {
    id: 'blank-23',
    name: "AeroSoft Polo",
    category: 'polo',
    categoryLabel: 'Polo',
    fabricDetail: 'Ultra-Soft Featherweight Pique Cotton',
    gsm: '210 GSM',
    image: corporatePolosImg,
    colors: [
      { name: 'Navy Blue', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
      { name: 'Pure White', hex: '#FFFFFF', bgClass: 'bg-white border border-gray-300' },
      { name: 'Charcoal Grey', hex: '#334155', bgClass: 'bg-slate-700' },
      { name: 'Royal Blue', hex: '#2563EB', bgClass: 'bg-blue-600' },
    ],
    extraColorsCount: 12
  }
];
