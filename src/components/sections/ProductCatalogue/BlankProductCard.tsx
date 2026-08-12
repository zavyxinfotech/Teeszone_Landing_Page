

import React from 'react';
import { motion } from 'motion/react';
import { BlankProduct } from '../../../data/blankCatalogue';
import { Eye } from 'lucide-react';

interface BlankProductCardProps {
  product: BlankProduct;
  onOpenQuickView: (product: BlankProduct) => void;
}

export const BlankProductCard: React.FC<BlankProductCardProps> = ({
  product,
  onOpenQuickView
}) => {

  return (
    <div
      onClick={() => onOpenQuickView(product)}
      className="bg-transparent flex flex-col justify-between group relative overflow-hidden h-full cursor-pointer transition-all duration-300"
    >
      
      {/* Top: 4:5 Aspect Ratio Product Image with Clean Grey Background */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#F1F3F5] mb-3.5 flex items-center justify-center border border-slate-100/50">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103 filter contrast-[1.01] brightness-[1.01]"
        />

        {/* Category Pill Tag */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[9px] font-poppins font-bold text-[#0A2540] uppercase tracking-wider shadow-2xs">
          {product.categoryLabel}
        </span>

        {/* Quick View Hover Overlay */}
        <div className="absolute inset-0 bg-[#0A2540]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
          <div className="bg-white/95 backdrop-blur-md text-[#0A2540] font-poppins font-bold text-xs py-2 px-3.5 rounded-lg shadow-sm transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1.5 hover:scale-105">
            <Eye className="w-3.5 h-3.5 text-[#635BFF]" />
            <span>Quick View</span>
          </div>
        </div>
      </div>

      {/* Middle: Product Details */}
      <div className="space-y-1.5 flex-grow flex flex-col justify-between px-1">
        <div>
          {/* Product Name (Left aligned, thin/medium weight) */}
          <h3 className="text-sm sm:text-base font-poppins font-semibold text-[#0A2540] leading-snug group-hover:text-[#635BFF] transition-colors duration-200">
            {product.name}
          </h3>

          {/* Subtitle: Fabric Detail & GSM */}
          <p className="text-[11px] font-inter text-slate-500 font-medium">
            {product.fabricDetail} • <span className="font-semibold text-slate-700">{product.gsm}</span>
          </p>
        </div>

      </div>

    </div>
  );
};
