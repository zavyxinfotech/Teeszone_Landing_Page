import React from 'react';
import logoPng from '../../assets/images/logo_png.png';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'light',
  size = 'md',
  showWordmark = true 
}) => {
  const isDarkBg = variant === 'dark';

  const imgSizeClass = size === 'sm'
    ? 'h-7 sm:h-8'
    : size === 'lg'
    ? 'h-9 sm:h-11'
    : 'h-8 sm:h-9';

  const textSizeClass = size === 'sm'
    ? 'text-base sm:text-lg'
    : size === 'lg'
    ? 'text-xl sm:text-2xl'
    : 'text-lg sm:text-xl';

  return (
    <div className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer select-none shrink-0">
      {/* Uploaded logo_png.png image */}
      <img
        src={logoPng}
        alt="TeesZone Logo"
        className={`${imgSizeClass} w-auto object-contain flex-shrink-0 transition-transform duration-200 group-hover:scale-102`}
      />
      {showWordmark && (
        <span
          className={`font-poppins font-extrabold ${textSizeClass} tracking-tight transition-colors ${
            isDarkBg
              ? 'text-white group-hover:text-[#38BDF8]'
              : 'text-[#0A2540] group-hover:text-[#635BFF]'
          }`}
        >
          TEESZONE
        </span>
      )}
    </div>
  );
};
