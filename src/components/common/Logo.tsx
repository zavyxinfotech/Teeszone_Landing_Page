import React from 'react';
import logoPng from '../../assets/images/logo_new.png';

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
    ? 'h-8 sm:h-12'
    : size === 'lg'
    ? 'h-12 sm:h-20'
    : 'h-10 sm:h-16';


  return (
    <div className="flex items-center gap-2 group cursor-pointer select-none shrink-0">
      <img
        src={logoPng}
        alt="TeesZone Logo"
        className={`${imgSizeClass} w-auto object-contain flex-shrink-0 transition-all duration-300 group-hover:scale-102`}
      />
    </div>
  );
};
