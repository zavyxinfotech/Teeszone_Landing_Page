import { Product } from '../types';
import heroMockupImg from '../assets/images/teeszone_hero_mockup_1786102788341.jpg';
import corporatePolosImg from '../assets/images/teeszone_corporate_polos_1786102801522.jpg';
import oversizedTeesImg from '../assets/images/teeszone_oversized_tees_1786102813133.jpg';
import hoodiesSweatsImg from '../assets/images/teeszone_hoodies_sweats_1786102824199.jpg';
import sportsJerseysImg from '../assets/images/teeszone_sports_jerseys_1786102836823.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-polo-01',
    name: 'Executive Supima Cotton Polo',
    category: 'polo-shirts',
    image: corporatePolosImg,
    secondaryImage: heroMockupImg,
    gsm: 220,
    fabric: '100% Organic Supima Cotton Honeycomb Knit',
    printTechniques: ['High-Density Embroidery', 'Ultra-HD Screen Printing', '3D Puff Print'],
    rating: 4.9,
    reviewCount: 348,
    basePrice: 575,
    samplePrice: 1190,
    minQuantity: 10,
    colors: [
      { name: 'Midnight Navy', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
      { name: 'Pure White', hex: '#FFFFFF', bgClass: 'bg-white border border-gray-300' },
      { name: 'Charcoal Slate', hex: '#334155', bgClass: 'bg-slate-700' },
      { name: 'Royal Electric Blue', hex: '#635BFF', bgClass: 'bg-[#635BFF]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    description: 'Designed for corporate teams, tech startups, and executive events. Engineered with non-curling collar technology and silky breathable Supima cotton.',
    highlights: ['Anti-Pilling Finish', 'Custom Branded Buttons', 'Breathable Honeycomb Mesh', 'Pantone Dye Accuracy'],
    tag: 'Corporate Choice',
    isCustomizable: true
  },
  {
    id: 'prod-oversized-01',
    name: 'Heavyweight Heavy Duty 240 GSM Tee',
    category: 'oversized',
    image: oversizedTeesImg,
    secondaryImage: heroMockupImg,
    gsm: 240,
    fabric: '100% Combed Ring-Spun Cotton Heavy Jersey',
    printTechniques: ['Direct-to-Garment (DTG)', 'Ultra-HD Screen Printing', '3D Puff Print'],
    rating: 4.95,
    reviewCount: 512,
    basePrice: 495,
    samplePrice: 990,
    minQuantity: 15,
    colors: [
      { name: 'Sage Green', hex: '#64748B', bgClass: 'bg-slate-500' },
      { name: 'Earthy Sand', hex: '#D4D0C8', bgClass: 'bg-amber-100' },
      { name: 'Jet Black', hex: '#111827', bgClass: 'bg-gray-900' },
      { name: 'Vintage Washed Off-White', hex: '#F3F4F6', bgClass: 'bg-gray-100' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    description: 'The preferred choice for creator brands, tech launch merch, and high-end streetwear drops. Boxy drop-shoulder structure with reinforced thick ribbed collar.',
    highlights: ['Drop Shoulder Cut', 'Zero Neck Tag Scratch', 'Preshrunk Fabric', 'High Ink Absorption'],
    tag: 'Bestseller',
    isCustomizable: true
  },
  {
    id: 'prod-hoodie-01',
    name: 'Tech-Pro Fleece Pullover Hoodie',
    category: 'hoodies-sweats',
    image: hoodiesSweatsImg,
    secondaryImage: heroMockupImg,
    gsm: 380,
    fabric: '80% Organic Cotton / 20% Recycled Poly Fleece',
    printTechniques: ['3D Puff Print', 'High-Density Embroidery', 'Ultra-HD Screen Printing'],
    rating: 4.98,
    reviewCount: 420,
    basePrice: 1250,
    samplePrice: 1990,
    minQuantity: 10,
    colors: [
      { name: 'Charcoal Heather', hex: '#1F2937', bgClass: 'bg-gray-800' },
      { name: 'Midnight Blue', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
      { name: 'Oatmeal Milk', hex: '#E5E7EB', bgClass: 'bg-gray-200' },
      { name: 'Deep Olive', hex: '#3F4E36', bgClass: 'bg-emerald-950' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    description: 'Ultra-dense 380 GSM brushed fleece lined hoodie. Features double-lined hood, brass grommets, and double-needle stitched stress points built for longevity.',
    highlights: ['Double Layer Hood', 'Hidden Inside Tech Pocket', 'Super Soft Brushed Interior', 'Zero Shrinkage Guarantee'],
    tag: 'Eco Premium',
    isCustomizable: true
  },
  {
    id: 'prod-roundneck-01',
    name: 'Signature Bio-Washed Crewneck Tee',
    category: 'round-neck',
    image: heroMockupImg,
    secondaryImage: corporatePolosImg,
    gsm: 180,
    fabric: '100% Super-Combed Cotton Bio-Washed',
    printTechniques: ['Ultra-HD Screen Printing', 'Direct-to-Garment (DTG)', 'Reflective Vinyl Transfer'],
    rating: 4.88,
    reviewCount: 680,
    basePrice: 325,
    samplePrice: 650,
    minQuantity: 25,
    colors: [
      { name: 'Pure White', hex: '#FFFFFF', bgClass: 'bg-white border border-gray-300' },
      { name: 'Deep Navy', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
      { name: 'Electric Cobalt', hex: '#635BFF', bgClass: 'bg-[#635BFF]' },
      { name: 'Crimson Red', hex: '#EF4444', bgClass: 'bg-red-500' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '5XL'],
    description: 'The standard workhorse for corporate events, hackathons, and brand activations. Silky smooth surface engineered specifically for vibrant high-detail prints.',
    highlights: ['100% Bio-Washed Softness', 'Double-Stitching Sleeves', 'Color-Fast Guarantee', '48hr Express Ship Ready'],
    tag: 'Fast Ship',
    isCustomizable: true
  },
  {
    id: 'prod-sports-01',
    name: 'Dry-Tech Sublimated Performance Jersey',
    category: 'sports-jerseys',
    image: sportsJerseysImg,
    secondaryImage: heroMockupImg,
    gsm: 160,
    fabric: '100% Micro-Poly Moisture Wicking Mesh',
    printTechniques: ['Sublimation Printing', 'Reflective Vinyl Transfer'],
    rating: 4.92,
    reviewCount: 230,
    basePrice: 450,
    samplePrice: 850,
    minQuantity: 15,
    colors: [
      { name: 'Vibrant Sublimation Multicolor', hex: '#06B6D4', bgClass: 'bg-cyan-500' },
      { name: 'Neon Electric Yellow', hex: '#FACC15', bgClass: 'bg-yellow-400' },
      { name: 'Deep Stealth Black', hex: '#0F172A', bgClass: 'bg-slate-900' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    description: 'Full-bleed edge-to-edge sublimation printing for sports tournaments, marathon runs, and athletic leagues. Antimicrobial and quick-drying mesh.',
    highlights: ['All-Over HD Printing', 'UPF 50+ Sun Protection', 'Anti-Odor Microbe Finish', 'Ultra Lightweight Mesh'],
    tag: 'Trending',
    isCustomizable: true
  },
  {
    id: 'prod-uniform-01',
    name: 'Enterprise Precision Workwear Shirt',
    category: 'corporate-uniforms',
    image: corporatePolosImg,
    secondaryImage: heroMockupImg,
    gsm: 200,
    fabric: '65% Poly / 35% Cotton Stretch Twill',
    printTechniques: ['High-Density Embroidery', 'Ultra-HD Screen Printing'],
    rating: 4.91,
    reviewCount: 189,
    basePrice: 750,
    samplePrice: 1350,
    minQuantity: 10,
    colors: [
      { name: 'Oxford Navy', hex: '#1E3A5F', bgClass: 'bg-[#1E3A5F]' },
      { name: 'Crisp White', hex: '#FFFFFF', bgClass: 'bg-white border border-gray-300' },
      { name: 'Industry Grey', hex: '#475569', bgClass: 'bg-slate-600' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    description: 'Tailored corporate button-up uniform shirts for field teams, retail staff, and hospitality personnel. Stain-resistant stain shield treatment.',
    highlights: ['Wrinkle-Free Wash & Wear', 'Stain Guard Coating', 'Reinforced Collar Stays', 'Custom Logo Monogramming'],
    tag: 'Corporate Choice',
    isCustomizable: true
  },
  {
    id: 'prod-school-01',
    name: 'Pro-Duty School & Campus Uniform Polo',
    category: 'school-uniforms',
    image: corporatePolosImg,
    secondaryImage: heroMockupImg,
    gsm: 210,
    fabric: '60% Cotton / 40% Durable Poly Honeycomb',
    printTechniques: ['High-Density Embroidery', 'Ultra-HD Screen Printing'],
    rating: 4.85,
    reviewCount: 142,
    basePrice: 395,
    samplePrice: 750,
    minQuantity: 30,
    colors: [
      { name: 'Royal Navy', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
      { name: 'Bottle Green', hex: '#064E3B', bgClass: 'bg-emerald-900' },
      { name: 'Maroon Red', hex: '#881337', bgClass: 'bg-rose-900' }
    ],
    sizes: ['4-6', '8-10', '12-14', 'S', 'M', 'L', 'XL'],
    description: 'Engineered for school districts and university campus store merchandise. Tested for over 100 industrial wash cycles without color degradation.',
    highlights: ['50+ Wash Color Lock', 'Tear-Resistant Seams', 'Student Name Tag Patch', 'Hypoallergenic Dye'],
    tag: 'Bestseller',
    isCustomizable: true
  },
  {
    id: 'prod-promo-01',
    name: 'Eco-Canvas Branded Tote & Swag Pack',
    category: 'promotional-wear',
    image: heroMockupImg,
    secondaryImage: hoodiesSweatsImg,
    gsm: 320,
    fabric: '100% Heavy Recycled Canvas & Cotton',
    printTechniques: ['Ultra-HD Screen Printing', 'Direct-to-Garment (DTG)'],
    rating: 4.96,
    reviewCount: 280,
    basePrice: 195,
    samplePrice: 450,
    minQuantity: 50,
    colors: [
      { name: 'Natural Cotton Cream', hex: '#F5F5DC', bgClass: 'bg-amber-50' },
      { name: 'Midnight Navy', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
      { name: 'Eco Sage Green', hex: '#4B5563', bgClass: 'bg-gray-600' }
    ],
    sizes: ['Standard Swag Box', 'Large Executive Bag'],
    description: 'Complete promotional merch bundles including custom printed canvas totes, caps, and matching tees for trade shows, conferences, and onboardings.',
    highlights: ['100% GOTS Certified Organic', 'Heavy Load Tested up to 20kg', 'Full Color Edge Print', 'Eco Gift Box Bundling'],
    tag: 'Eco Premium',
    isCustomizable: true
  }
];
