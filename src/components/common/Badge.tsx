import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'sky' | 'emerald' | 'amber' | 'violet' | 'slate';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  pulse?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  pulse = false,
  className = ''
}) => {
  const sizeStyles = {
    sm: 'text-[11px] gap-1',
    md: 'text-xs gap-1.5'
  };

  const colorStyles = {
    primary: 'text-[#635BFF]',
    sky: 'text-[#0284C7]',
    emerald: 'text-emerald-600',
    amber: 'text-amber-600',
    violet: 'text-violet-600',
    slate: 'text-slate-600'
  };

  return (
    <span className={`inline-flex items-center font-poppins font-bold uppercase tracking-widest whitespace-nowrap ${sizeStyles[size]} ${colorStyles[variant]} ${className}`}>
      {pulse && (
        <span className="relative flex h-2 w-2 mr-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
        </span>
      )}
      {icon}
      <span>{children}</span>
    </span>
  );
};
