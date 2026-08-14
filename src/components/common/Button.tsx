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
    primary: 'bg-primary text-cream hover:bg-primary-dark active:bg-primary-dark shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5',
    secondary: 'bg-white text-primary border border-primary hover:bg-cream-light active:bg-cream-light hover:-translate-y-0.5',
    outline: 'bg-transparent text-primary border border-primary/30 hover:border-primary hover:bg-cream-light active:bg-cream-light text-primary',
    ghost: 'bg-transparent text-primary hover:text-primary-dark hover:bg-cream-light',
    black: 'bg-primary text-cream hover:bg-primary-dark active:bg-primary-dark shadow-md shadow-primary/20 hover:shadow-md hover:-translate-y-0.5 border border-transparent'
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
