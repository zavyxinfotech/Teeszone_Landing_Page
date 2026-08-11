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
}

const CLIENT_LOGOS: ClientLogoItem[] = [
  { name: 'Accenture', logo: accentureLogo, altText: 'Accenture corporate uniform client logo' },
  { name: 'Cognizant', logo: cognizantLogo, altText: 'Cognizant custom team polo shirts client logo' },
  { name: 'Tata Electronics', logo: tataElectronicsLogo, altText: 'Tata Electronics workwear client logo' },
  { name: 'Tech Mahindra', logo: techMahindraLogo, altText: 'Tech Mahindra corporate apparel client logo' },
  { name: 'Zoho', logo: zohoLogo, altText: 'Zoho custom t-shirts client logo' },
  { name: 'IIT Madras', logo: iitMadrasLogo, altText: 'IIT Madras campus hoodies client logo' },
  { name: 'SRM Institute of Technology', logo: srmInstituteLogo, altText: 'SRM Institute college apparel client logo' },
  { name: 'Wheels India', logo: wheelsIndiaLogo, altText: 'Wheels India industrial uniform client logo' },
  { name: 'Address Developer', logo: addressDevLogo, altText: 'Address Developer corporate polos client logo' },
  { name: 'EuroKids', logo: euroKidsLogo, altText: 'EuroKids custom t-shirts client logo' },
  { name: 'Ampo', logo: ampoLogo, altText: 'Ampo enterprise apparel client logo' },
  { name: 'Fortune City', logo: fortuneCityLogo, altText: 'Fortune City client logo' },
  { name: 'GR Media', logo: grMediaLogo, altText: 'GR Media promotional apparel client logo' },
  { name: 'Leo', logo: leoLogo, altText: 'Leo enterprise client logo' },
  { name: 'Mahe Megalo Strikers', logo: maheStrikersLogo, altText: 'Mahe Megalo Strikers athletic jerseys client logo' },
];

export const TrustedClientsSection: React.FC = () => {
  return (
    <section className="py-12 bg-[#F8FAFC] border-y border-slate-200/80 overflow-hidden select-none" aria-label="Trusted Clients">
      <div className="w-full px-6 sm:px-10 lg:px-16 mb-8 text-center">
        <h2 className="text-xs font-poppins font-bold uppercase tracking-widest text-[#425466] drop-shadow-xs">
          Trusted by World-Class Brands & Creator Teams Globally
        </h2>
      </div>

      {/* Infinite Logo Slider Marquee (Card-Free Clean Logo View) */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right Gradient Fades for Smooth Transition */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-12 sm:gap-16 items-center animate-marquee whitespace-nowrap py-2">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center justify-center shrink-0 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <img
                src={client.logo}
                alt={client.altText}
                loading="lazy"
                decoding="async"
                className="h-9 sm:h-12 max-w-[140px] sm:max-w-[170px] w-auto object-contain filter drop-shadow-xs"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
