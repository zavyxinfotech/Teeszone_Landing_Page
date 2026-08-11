import React from 'react';

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
  { name: 'Accenture', logo: accentureLogo, altText: 'Accenture corporate uniform client logo', scaleClass: 'h-8 sm:h-10' },
  { name: 'Cognizant', logo: cognizantLogo, altText: 'Cognizant custom team polo shirts client logo', scaleClass: 'h-10 sm:h-12 scale-110' },
  { name: 'Tata Electronics', logo: tataElectronicsLogo, altText: 'Tata Electronics workwear client logo', scaleClass: 'h-8 sm:h-10' },
  { name: 'Tech Mahindra', logo: techMahindraLogo, altText: 'Tech Mahindra corporate apparel client logo', scaleClass: 'h-8 sm:h-10' },
  { name: 'Zoho', logo: zohoLogo, altText: 'Zoho custom t-shirts client logo', scaleClass: 'h-10 sm:h-12 scale-125' },
  { name: 'IIT Madras', logo: iitMadrasLogo, altText: 'IIT Madras campus hoodies client logo', scaleClass: 'h-10 sm:h-12 scale-110' },
  { name: 'SRM Institute of Technology', logo: srmInstituteLogo, altText: 'SRM Institute college apparel client logo', scaleClass: 'h-10 sm:h-12 scale-125' },
  { name: 'Wheels India', logo: wheelsIndiaLogo, altText: 'Wheels India industrial uniform client logo', scaleClass: 'h-8 sm:h-10' },
  { name: 'Address Developer', logo: addressDevLogo, altText: 'Address Developer corporate polos client logo', scaleClass: 'h-8 sm:h-10' },
  { name: 'EuroKids', logo: euroKidsLogo, altText: 'EuroKids custom t-shirts client logo', scaleClass: 'h-9 sm:h-11' },
  { name: 'Ampo', logo: ampoLogo, altText: 'Ampo enterprise apparel client logo', scaleClass: 'h-9 sm:h-11' },
  { name: 'Fortune City', logo: fortuneCityLogo, altText: 'Fortune City client logo', scaleClass: 'h-9 sm:h-11' },
  { name: 'GR Media', logo: grMediaLogo, altText: 'GR Media promotional apparel client logo', scaleClass: 'h-10 sm:h-12' },
  { name: 'Leo', logo: leoLogo, altText: 'Leo enterprise client logo', scaleClass: 'h-9 sm:h-11' },
  { name: 'Mahe Megalo Strikers', logo: maheStrikersLogo, altText: 'Mahe Megalo Strikers athletic jerseys client logo', scaleClass: 'h-10 sm:h-12' },
];

export const TrustedClientsSection: React.FC = () => {
  return (
    <section className="py-12 bg-[#F8FAFC] border-y border-slate-200/80 overflow-hidden select-none" aria-label="Trusted Clients">
      <div className="w-full px-6 sm:px-10 lg:px-16 mb-8 text-center">
        <h2 className="text-xs font-poppins font-bold uppercase tracking-widest text-[#425466] drop-shadow-xs">
          Trusted by World-Class Brands & Creator Teams Globally
        </h2>
      </div>

      {/* Infinite Logo Slider Marquee (Blended White Backgrounds, Optical Sizing, Full Visibility) */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Subtle Edge Gradients for Smooth Seamless Marquee Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-14 sm:gap-20 items-center animate-marquee whitespace-nowrap py-3">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center justify-center shrink-0 w-36 sm:w-44 h-14 sm:h-16 transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={client.logo}
                alt={client.altText}
                loading="lazy"
                decoding="async"
                className={`${client.scaleClass || 'h-8 sm:h-10'} w-auto max-w-[160px] object-contain mix-blend-multiply filter contrast-110 brightness-95`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
