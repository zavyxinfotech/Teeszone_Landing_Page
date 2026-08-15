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
    scaleClass: 'h-6 sm:h-9 md:h-10 lg:h-11 max-w-[120px] sm:max-w-[170px]' 
  },
  { 
    name: 'Cognizant', 
    logo: cognizantLogo, 
    altText: 'Cognizant custom team polo shirts client logo', 
    scaleClass: 'h-8 sm:h-11 md:h-12 lg:h-13' 
  },
  { 
    name: 'Tata Electronics', 
    logo: tataElectronicsLogo, 
    altText: 'Tata Electronics workwear client logo', 
    scaleClass: 'h-5 sm:h-8 md:h-9 lg:h-10 min-w-[90px] sm:min-w-[130px]' 
  },
  { 
    name: 'Tech Mahindra', 
    logo: techMahindraLogo, 
    altText: 'Tech Mahindra corporate apparel client logo', 
    scaleClass: 'h-6 sm:h-9 md:h-10 lg:h-11 min-w-[100px] sm:min-w-[140px]' 
  },
  { 
    name: 'Zoho', 
    logo: zohoLogo, 
    altText: 'Zoho custom t-shirts client logo', 
    scaleClass: 'h-5 sm:h-8 md:h-9 lg:h-10 max-w-[95px] sm:max-w-[130px]' 
  },
  { 
    name: 'IIT Madras', 
    logo: iitMadrasLogo, 
    altText: 'IIT Madras campus hoodies client logo', 
    scaleClass: 'h-8 sm:h-11 md:h-12 lg:h-13' 
  },
  { 
    name: 'SRM Institute of Technology', 
    logo: srmInstituteLogo, 
    altText: 'SRM Institute college apparel client logo', 
    scaleClass: 'h-8 sm:h-11 md:h-12 lg:h-13' 
  },
  { 
    name: 'Wheels India', 
    logo: wheelsIndiaLogo, 
    altText: 'Wheels India industrial uniform client logo', 
    scaleClass: 'h-6 sm:h-9 md:h-10 lg:h-11 min-w-[100px] sm:min-w-[140px]' 
  },
  { 
    name: 'Address Developer', 
    logo: addressDevLogo, 
    altText: 'Address Developer corporate polos client logo', 
    scaleClass: 'h-6 sm:h-9 md:h-10 lg:h-11 max-w-[120px] sm:max-w-[170px]' 
  },
  { 
    name: 'EuroKids', 
    logo: euroKidsLogo, 
    altText: 'EuroKids custom t-shirts client logo', 
    scaleClass: 'h-7 sm:h-10 md:h-11 lg:h-12' 
  },
  { 
    name: 'Ampo', 
    logo: ampoLogo, 
    altText: 'Ampo enterprise apparel client logo', 
    scaleClass: 'h-8 sm:h-11 md:h-12 lg:h-13' 
  },
  { 
    name: 'Fortune City', 
    logo: fortuneCityLogo, 
    altText: 'Fortune City client logo', 
    scaleClass: 'h-6 sm:h-9 md:h-10 lg:h-11' 
  },
  { 
    name: 'GR Media', 
    logo: grMediaLogo, 
    altText: 'GR Media promotional apparel client logo', 
    scaleClass: 'h-7 sm:h-10 md:h-11 lg:h-12' 
  },
  { 
    name: 'Leo', 
    logo: leoLogo, 
    altText: 'Leo enterprise client logo', 
    scaleClass: 'h-6 sm:h-9 md:h-10 lg:h-11' 
  },
  { 
    name: 'Mahe Megalo Strikers', 
    logo: maheStrikersLogo, 
    altText: 'Mahe Megalo Strikers athletic jerseys client logo', 
    scaleClass: 'h-8 sm:h-11 md:h-12 lg:h-13' 
  },
];

export const TrustedClientsSection: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 bg-white text-[#241A1D] relative overflow-hidden select-none border-b border-slate-200/80" aria-label="Trusted Clients">
      
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

      <div className="w-full px-6 sm:px-10 lg:px-16 mb-6 text-center relative z-20">
        <h2 className="text-[10px] sm:text-xs md:text-sm font-poppins font-bold uppercase tracking-widest text-[#6B5B60] drop-shadow-xs">
          Trusted by World-Class Brands & Creator Teams Globally
        </h2>
      </div>

      {/* Infinite Logo Slider Marquee (100% White Background Seamless Blend & Zero Boxes) */}
      <div className="relative w-full overflow-hidden flex items-center z-20">
        {/* Subtle Edge Gradients for Smooth Seamless Marquee Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 sm:gap-12 lg:gap-16 items-center animate-marquee whitespace-nowrap py-3">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center justify-center shrink-0 w-24 sm:w-36 md:w-44 lg:w-52 h-10 sm:h-14 md:h-16 lg:h-18 transition-all duration-300 transform hover:scale-105 cursor-pointer px-1 bg-transparent border-0 outline-none group"
            >
              <img
                src={client.logo}
                alt={client.altText}
                loading="lazy"
                decoding="async"
                className={`${client.scaleClass || 'h-6 sm:h-9 lg:h-11'} w-auto max-w-[120px] sm:max-w-[170px] lg:max-w-[210px] object-contain mix-blend-multiply border-0 outline-none transition-all duration-300 opacity-75 group-hover:opacity-100`}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
