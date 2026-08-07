import { IndustryCard } from '../types';
import corporatePolosImg from '../assets/images/teeszone_corporate_polos_1786102801522.jpg';
import heroMockupImg from '../assets/images/teeszone_hero_mockup_1786102788341.jpg';
import oversizedTeesImg from '../assets/images/teeszone_oversized_tees_1786102813133.jpg';
import hoodiesSweatsImg from '../assets/images/teeszone_hoodies_sweats_1786102824199.jpg';
import sportsJerseysImg from '../assets/images/teeszone_sports_jerseys_1786102836823.jpg';

export const INDUSTRIES: IndustryCard[] = [
  {
    id: 'corporate-tech',
    name: 'Corporate & Tech Startups',
    subtitle: 'Executive Polos, Onboarding Swag & Hackathon Tees',
    description: 'Elevate your employer brand with premium Supima cotton embroidered polos and heavy fleece hoodies. Trusted by YC startups and Fortune 500 tech leaders.',
    image: corporatePolosImg,
    popularApparel: ['Executive Honeycomb Polo', 'Tech-Pro Fleece Hoodie', 'Bio-Washed Team Tees'],
    keyBenefits: ['Individual Employee Drop-Shipping', 'Custom Welcome Swag Box', 'Dedicated Corporate Account Manager'],
    iconName: 'Building2',
    clientCount: '4,500+ Tech Brands'
  },
  {
    id: 'education-campus',
    name: 'Education & Universities',
    subtitle: 'Campus Merchandise, Graduation Hoodies & PE Kits',
    description: 'Durable, vibrant, school-approved uniforms and university bookstore apparel. Built to withstand hundreds of industrial washes.',
    image: heroMockupImg,
    popularApparel: ['Pro-Duty Campus Polo', 'Graduation Year Hoodies', 'Sublimated Athletic Kits'],
    keyBenefits: ['Bulk Educational Discounts', 'Hypoallergenic OEKO-TEX Cotton', 'Student Name Customization'],
    iconName: 'GraduationCap',
    clientCount: '1,200+ Institutions'
  },
  {
    id: 'healthcare-medical',
    name: 'Healthcare & Medical',
    subtitle: 'Antimicrobial Scrubs & Clinical Staff Apparel',
    description: 'High-performance medical uniforms with liquid-repellent technology and odor-control treatments engineered for 24/7 hospital shifts.',
    image: corporatePolosImg,
    popularApparel: ['Flex-Fit Medical Scrubs', 'Lab Coat Embroidery', 'Comfort Under-Layer Tees'],
    keyBenefits: ['Fluid & Stain Repellent', 'High Temp Laundry Safe', 'Anti-Static Micro-Weave'],
    iconName: 'Activity',
    clientCount: '850+ Clinics & Hospitals'
  },
  {
    id: 'hotels-hospitality',
    name: 'Hotels & Hospitality',
    subtitle: 'Luxury Front-Desk Attire & Housekeeping Uniforms',
    description: 'Create an unforgettable guest impression with tailored button-downs, embroidered aprons, and polished front-of-house uniforms.',
    image: heroMockupImg,
    popularApparel: ['Wrinkle-Free Dress Shirts', 'Heavyweight Bistro Aprons', 'Concierge Jackets'],
    keyBenefits: ['Non-Iron Easy Care', 'Luxury Fabric Hand-Feel', 'Matching Color Accessories'],
    iconName: 'Hotel',
    clientCount: '1,600+ Hotels & Resorts'
  },
  {
    id: 'restaurants-food',
    name: 'Restaurants & Food Service',
    subtitle: 'Chef Coats, Crew T-Shirts & Kitchen Aprons',
    description: 'Flame-resistant, stain-shielded kitchen apparel and casual server t-shirts designed for heat, movement, and quick turnaround.',
    image: oversizedTeesImg,
    popularApparel: ['Breathable Mesh Chef Jacket', 'Heavy Canvas Cross-Back Aprons', 'Crew Staff Tees'],
    keyBenefits: ['Stain Shield Coating', 'Heat Dissipating Mesh Venting', 'Double Needle Stress Seams'],
    iconName: 'Utensils',
    clientCount: '2,800+ Food Outlets'
  },
  {
    id: 'sports-fitness',
    name: 'Sports & Fitness Clubs',
    subtitle: 'Performance Athletic Tops, Running Vests & Jerseys',
    description: 'Ultra-lightweight moisture-wicking jerseys with vibrant all-over sublimation printing for marathons, football leagues, and CrossFit boxes.',
    image: sportsJerseysImg,
    popularApparel: ['Dry-Tech Sublimated Jersey', 'Pro Compression Tops', 'Gym Staff Tanks'],
    keyBenefits: ['100% Fade Proof Sublimation', '4-Way Stretch Performance', 'UPF 50+ UV Shield'],
    iconName: 'Trophy',
    clientCount: '1,900+ Athletic Clubs'
  },
  {
    id: 'factories-construction',
    name: 'Factories & Industrial Workwear',
    subtitle: 'High-Visibility Safety Vests, Tough Overalls & Polos',
    description: 'ANSI & ISO certified high-vis reflective safety workwear and rugged industrial uniforms designed for tough jobsite durability.',
    image: corporatePolosImg,
    popularApparel: ['Class 3 High-Vis Reflective Vest', 'Heavy Duty Twill Overalls', 'Reinforced Collar Work Polo'],
    keyBenefits: ['ANSI/ISEA Certified', '3M Scotchlite Reflective Strips', 'Triple Stitching Strength'],
    iconName: 'HardHat',
    clientCount: '950+ Industrial Facilities'
  },
  {
    id: 'events-conferences',
    name: 'Events, Festivals & Trade Shows',
    subtitle: 'Event Staff Apparel, Volunteer Vests & Attendee Merch',
    description: 'Rapid 48-hour event turnaround for global tech conferences, music festivals, trade shows, and charity marathon runs.',
    image: heroMockupImg,
    popularApparel: ['48hr Express Event Tee', 'High-Vis Event Crew Lanyards', 'VIP Swag Hoodies'],
    keyBenefits: ['Guaranteed On-Time Delivery', 'Zero Minimum Orders', 'Individual Size Bagging'],
    iconName: 'CalendarRange',
    clientCount: '3,400+ Global Events'
  }
];
