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
  showWordmark = true 
}) => {
  const isDarkBg = variant === 'dark';

  return (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      {/* Uploaded logo_png.png image */}
      <img
        src={logoPng}
        alt="TeesZone Logo"
        className="h-9 sm:h-10 w-auto object-contain flex-shrink-0 transition-transform duration-200 group-hover:scale-102"
      />
      {showWordmark && (
        <span
          className={`font-poppins font-extrabold text-xl sm:text-2xl tracking-tight transition-colors ${
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
