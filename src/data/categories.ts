import { CategoryInfo } from '../types';
import heroMockupImg from '../assets/images/teeszone_hero_mockup_1786102788341.jpg';
import corporatePolosImg from '../assets/images/teeszone_corporate_polos_1786102801522.jpg';
import oversizedTeesImg from '../assets/images/teeszone_oversized_tees_1786102813133.jpg';
import hoodiesSweatsImg from '../assets/images/teeszone_hoodies_sweats_1786102824199.jpg';
import sportsJerseysImg from '../assets/images/teeszone_sports_jerseys_1786102836823.jpg';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'polo-shirts',
    name: 'Polo T-Shirts',
    tagline: 'Refined Corporate Elegance',
    description: 'Premium combed cotton & honeycomb polo shirts customized with precision high-density embroidery. Essential for tech teams, sales reps, and corporate executives.',
    image: corporatePolosImg,
    itemCount: 24,
    recommendedGsm: '220 - 260 GSM',
    badge: 'Most Popular for Corporate',
    popularTechniques: ['High-Density Embroidery', '3D Puff Monogram', 'Dual Crest Print']
  },
  {
    id: 'round-neck',
    name: 'Round Neck T-Shirts',
    tagline: 'Versatile Daily Wear & Activations',
    description: 'Classic bio-washed 100% ring-spun cotton tees engineered for event launches, tech hackathons, employee onboarding, and high-volume promotional drives.',
    image: heroMockupImg,
    itemCount: 36,
    recommendedGsm: '180 - 200 GSM',
    badge: 'Fastest 48hr Dispatch',
    popularTechniques: ['Ultra-HD Screen Printing', 'Direct-to-Garment (DTG)', 'Waterbase Discharge']
  },
  {
    id: 'oversized',
    name: 'Oversized Streetwear Tees',
    tagline: 'Heavyweight Modern Aesthetic',
    description: 'Trendy drop-shoulder boxy cuts crafted from 240+ GSM ultra-heavyweight cotton. Designed for creator merch, startup launches, and youth brands.',
    image: oversizedTeesImg,
    itemCount: 18,
    recommendedGsm: '240 - 280 GSM',
    badge: 'Top Trending Category',
    popularTechniques: ['3D Puff Printing', 'High-Density Screen Print', 'Vapor Discharge']
  },
  {
    id: 'hoodies-sweats',
    name: 'Hoodies & Sweatshirts',
    tagline: 'Luxury Heavy Fleece Outerwear',
    description: '380 GSM dense fleece hoodies and crewneck sweatshirts with double-lined hoods, ribbed cuffs, and custom inside neck branding.',
    image: hoodiesSweatsImg,
    itemCount: 22,
    recommendedGsm: '350 - 420 GSM',
    badge: 'Luxury Winter Apparel',
    popularTechniques: ['Embroidery Patch', '3D Puff Print', 'Custom Zipper Pulls']
  },
  {
    id: 'corporate-uniforms',
    name: 'Corporate Uniforms & Button-Downs',
    tagline: 'Industrial & Executive Workwear',
    description: 'Tailored button-up shirts, field jackets, and hospitality uniforms equipped with stain-resistant coatings and anti-wrinkle twill weaves.',
    image: corporatePolosImg,
    itemCount: 15,
    recommendedGsm: '180 - 240 GSM',
    badge: 'Industrial Grade',
    popularTechniques: ['Precision Chest Embroidery', 'Subtle Collar Monogram']
  },
  {
    id: 'sports-jerseys',
    name: 'Sports & Performance Jerseys',
    tagline: 'Breathable Sublimated Athletics',
    description: 'Moisture-wicking micro-poly mesh athletic jerseys featuring full-bleed vibrant edge-to-edge sublimation that never fades, cracks, or peels.',
    image: sportsJerseysImg,
    itemCount: 20,
    recommendedGsm: '150 - 180 GSM',
    badge: '100% Fade Proof',
    popularTechniques: ['Edge-to-Edge Sublimation', 'Reflective Vinyl Numbers']
  },
  {
    id: 'school-uniforms',
    name: 'School & Campus Uniforms',
    tagline: 'Durable Student Activewear',
    description: 'Tested for 50+ industrial laundry washes. Hypoallergenic, color-fast school polos, PE sports kits, and graduation hoodies.',
    image: corporatePolosImg,
    itemCount: 12,
    recommendedGsm: '210 - 240 GSM',
    badge: 'Ultra Durable',
    popularTechniques: ['Embroidered Crest', 'Silkscreen Student ID Patch']
  },
  {
    id: 'promotional-wear',
    name: 'Promotional Swag & Accessories',
    tagline: 'Complete Onboarding & Conference Kits',
    description: 'Custom canvas totes, caps, aprons, and curated eco-friendly swag boxes for trade shows, investor gifts, and corporate milestones.',
    image: heroMockupImg,
    itemCount: 30,
    recommendedGsm: 'Custom Spec',
    badge: 'Complete Swag Solution',
    popularTechniques: ['Screen Print', 'Leatherette Patch', 'Laser Engrave']
  }
];
