import React from 'react';
import { motion } from 'motion/react';

import accentureLogo from '../../assets/client_company_logos/accenture.png';
import addressDevLogo from '../../assets/client_company_logos/Address_developer.png';
import ampoLogo from '../../assets/client_company_logos/ampo.png';
import euroKidsLogo from '../../assets/client_company_logos/euro_kids.png';
import fortuneCityLogo from '../../assets/client_company_logos/Fortune_city.png';
import grMediaLogo from '../../assets/client_company_logos/GR_media.png';
import iitMadrasLogo from '../../assets/client_company_logos/IIT_Madras.png';
import leoLogo from '../../assets/client_company_logos/LEO.png';
import cognizantLogo from '../../assets/client_company_logos/Logo_Cognizant.png';
import maheStrikersLogo from '../../assets/client_company_logos/Mahe_megalo_strikers.png';
import srmInstituteLogo from '../../assets/client_company_logos/SRM_institute_of_technology.png';
import tataElectronicsLogo from '../../assets/client_company_logos/Tata_electronics.png';
import techMahindraLogo from '../../assets/client_company_logos/tech_mahindra.png';
import wheelsIndiaLogo from '../../assets/client_company_logos/wheelsindia.png';
import zohoLogo from '../../assets/client_company_logos/zoho.png';

interface ClientLogoItem {
  name: string;
  logo: string;
  altText: string;
  scaleClass?: string;
}

const CLIENT_LOGOS: ClientLogoItem[] = [
  { 
    name: 'Accenture', 
    logo: accentureLogo, 
    altText: 'Accenture corporate uniform client logo', 
    scaleClass: 'h-9 sm:h-12 lg:h-14 max-w-[180px] sm:max-w-[220px]' 
  },
  { 
    name: 'Cognizant', 
    logo: cognizantLogo, 
    altText: 'Cognizant custom team polo shirts client logo', 
    scaleClass: 'h-12 sm:h-15 lg:h-18 scale-145' 
  },
  { 
    name: 'Tata Electronics', 
    logo: tataElectronicsLogo, 
    altText: 'Tata Electronics workwear client logo', 
    scaleClass: 'h-8 sm:h-11 lg:h-13 min-w-[140px] sm:min-w-[170px]' 
  },
  { 
    name: 'Tech Mahindra', 
    logo: techMahindraLogo, 
    altText: 'Tech Mahindra corporate apparel client logo', 
    scaleClass: 'h-10 sm:h-13 lg:h-15 scale-125 min-w-[150px] sm:min-w-[190px]' 
  },
  { 
    name: 'Zoho', 
    logo: zohoLogo, 
    altText: 'Zoho custom t-shirts client logo', 
    scaleClass: 'h-8 sm:h-11 lg:h-13 max-w-[140px] sm:max-w-[170px]' 
  },
  { 
    name: 'IIT Madras', 
    logo: iitMadrasLogo, 
    altText: 'IIT Madras campus hoodies client logo', 
    scaleClass: 'h-12 sm:h-15 lg:h-18 scale-145' 
  },
  { 
    name: 'SRM Institute of Technology', 
    logo: srmInstituteLogo, 
    altText: 'SRM Institute college apparel client logo', 
    scaleClass: 'h-12 sm:h-15 lg:h-18 scale-145' 
  },
  { 
    name: 'Wheels India', 
    logo: wheelsIndiaLogo, 
    altText: 'Wheels India industrial uniform client logo', 
    scaleClass: 'h-10 sm:h-13 lg:h-15 scale-125 min-w-[160px] sm:min-w-[200px]' 
  },
  { 
    name: 'Address Developer', 
    logo: addressDevLogo, 
    altText: 'Address Developer corporate polos client logo', 
    scaleClass: 'h-9 sm:h-12 lg:h-14 max-w-[180px] sm:max-w-[220px]' 
  },
  { 
    name: 'EuroKids', 
    logo: euroKidsLogo, 
    altText: 'EuroKids custom t-shirts client logo', 
    scaleClass: 'h-11 sm:h-14 lg:h-16 scale-135' 
  },
  { 
    name: 'Ampo', 
    logo: ampoLogo, 
    altText: 'Ampo enterprise apparel client logo', 
    scaleClass: 'h-12 sm:h-15 lg:h-18 scale-145' 
  },
  { 
    name: 'Fortune City', 
    logo: fortuneCityLogo, 
    altText: 'Fortune City client logo', 
    scaleClass: 'h-10 sm:h-13 lg:h-15 scale-120' 
  },
  { 
    name: 'GR Media', 
    logo: grMediaLogo, 
    altText: 'GR Media promotional apparel client logo', 
    scaleClass: 'h-11 sm:h-14 lg:h-16 scale-135' 
  },
  { 
    name: 'Leo', 
    logo: leoLogo, 
    altText: 'Leo enterprise client logo', 
    scaleClass: 'h-10 sm:h-13 lg:h-15 scale-120' 
  },
  { 
    name: 'Mahe Megalo Strikers', 
    logo: maheStrikersLogo, 
    altText: 'Mahe Megalo Strikers athletic jerseys client logo', 
    scaleClass: 'h-12 sm:h-15 lg:h-18 scale-140' 
  },
];

export const TrustedClientsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white text-[#0A2540] relative overflow-hidden select-none border-b border-slate-200/80" aria-label="Trusted Clients">
      
      {/* 1. Animated Light Smoky Background Motion Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary Drifting Purple Smoky Mist */}
        <motion.div
          animate={{
            x: [-60, 60, -60],
            y: [-25, 25, -25],
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-1/2 left-1/4 w-[550px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(99,91,255,0.08),transparent_70%)] blur-3xl rounded-full"
        />

        {/* Secondary Drifting Sky Blue Smoky Mist */}
        <motion.div
          animate={{
            x: [50, -50, 50],
            y: [30, -30, 30],
            scale: [1.1, 0.9, 1.1],
            opacity: [0.3, 0.65, 0.3],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-1/2 right-1/4 w-[550px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.09),transparent_70%)] blur-3xl rounded-full"
        />

        {/* Ambient Center Smoke Motion Glow */}
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] bg-[radial-gradient(ellipse_at_center,rgba(99,91,255,0.05),transparent_70%)] blur-3xl"
        />
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 mb-8 text-center relative z-20">
        <h2 className="text-xs sm:text-sm font-poppins font-bold uppercase tracking-widest text-[#425466] drop-shadow-xs">
          Trusted by World-Class Brands & Creator Teams Globally
        </h2>
      </div>

      {/* Infinite Logo Slider Marquee (100% White Background Seamless Blend & Zero Boxes) */}
      <div className="relative w-full overflow-hidden flex items-center z-20">
        {/* Subtle Edge Gradients for Smooth Seamless Marquee Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-10 sm:gap-16 lg:gap-20 items-center animate-marquee whitespace-nowrap py-3">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center justify-center shrink-0 w-36 sm:w-48 lg:w-56 h-14 sm:h-18 lg:h-20 transition-all duration-300 transform hover:scale-105 cursor-pointer px-2 bg-white border-0 outline-none group"
            >
              <img
                src={client.logo}
                alt={client.altText}
                loading="lazy"
                decoding="async"
                className={`${client.scaleClass || 'h-9 sm:h-12 lg:h-14'} w-auto max-w-[180px] sm:max-w-[220px] lg:max-w-[260px] object-contain filter contrast-105 saturate-105 bg-white border-0 outline-none transition-all duration-300 opacity-90 group-hover:opacity-100`}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
