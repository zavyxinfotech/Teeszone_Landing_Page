import React from 'react';
import logoPng from '../../assets/images/logo_new.png';
import logoLightPng from '../../assets/images/logo_light.png';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'light',
  size = 'md'
}) => {
  const imgSizeClass = size === 'sm'
    ? 'h-5 sm:h-6 md:h-7'
    : size === 'lg'
    ? 'h-8 sm:h-10 md:h-11 lg:h-12'
    : 'h-6 sm:h-8 md:h-9';

  const logoSrc = variant === 'dark' ? logoLightPng : logoPng;

  return (
    <div className="flex items-center gap-2 group cursor-pointer select-none shrink-0">
      <img
        src={logoSrc}
        alt="TeesZone Logo"
        className={`${imgSizeClass} w-auto object-contain flex-shrink-0 transition-all duration-300 group-hover:scale-102`}
      />
    </div>
  );
};
