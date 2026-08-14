import React from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'black';
  size?: 'sm' | 'md' | 'lg' | 'none';
  children: React.ReactNode;
  icon?: React.ReactNode;
  showArrow?: boolean;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  showArrow = false,
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-poppins font-medium transition-all duration-200 cursor-pointer select-none rounded-xl disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2 shadow-sm',
    lg: 'text-base px-7 py-3.5 gap-2.5 shadow-md',
    none: ''
  };

  const variantStyles = {
    primary: 'bg-[#635BFF] text-white hover:bg-[#574BFF] active:bg-[#4B3FFF] shadow-[#635BFF]/25 hover:shadow-[#635BFF]/35 hover:-translate-y-0.5',
    secondary: 'bg-white text-[#0A2540] border border-[#0A2540]/20 hover:border-[#0A2540] hover:bg-[#F8FAFC] active:bg-[#EDF2F7] hover:-translate-y-0.5',
    outline: 'bg-transparent text-[#0A2540] border border-[#635BFF]/30 hover:border-[#635BFF] hover:bg-[#635BFF]/5 text-[#635BFF]',
    ghost: 'bg-transparent text-[#425466] hover:text-[#0A2540] hover:bg-slate-100',
    black: 'bg-black text-white hover:bg-neutral-900 active:bg-neutral-800 shadow-md shadow-black/10 hover:shadow-black/20 hover:-translate-y-0.5 border border-transparent'
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        icon
      )}
      <span>{children}</span>
      {showArrow && !isLoading && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </button>
  );
};
