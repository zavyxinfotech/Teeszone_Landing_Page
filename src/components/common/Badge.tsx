import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'sky' | 'emerald' | 'amber' | 'violet' | 'slate';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  pulse?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  pulse = false
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5'
  };

  const variantStyles = {
    primary: 'bg-[#635BFF]/10 text-[#635BFF] border border-[#635BFF]/20',
    sky: 'bg-[#38BDF8]/10 text-[#0284C7] border border-[#38BDF8]/30',
    emerald: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    amber: 'bg-amber-50 text-amber-700 border border-amber-200',
    violet: 'bg-violet-50 text-violet-700 border border-violet-200',
    slate: 'bg-slate-100 text-[#425466] border border-slate-200'
  };

  return (
    <span className={`inline-flex items-center font-poppins font-semibold tracking-wide rounded-full whitespace-nowrap ${sizeStyles[size]} ${variantStyles[variant]}`}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
        </span>
      )}
      {icon}
      <span>{children}</span>
    </span>
  );
};
