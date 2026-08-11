import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BlankProduct } from '../../../data/blankCatalogue';
import { Check, ShoppingBag } from 'lucide-react';

interface BlankProductCardProps {
  product: BlankProduct;
  onAddToCart: (product: BlankProduct) => void;
}

export const BlankProductCard: React.FC<BlankProductCardProps> = ({
  product,
  onAddToCart
}) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleCartClick = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="bg-white rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100/80 group relative overflow-hidden h-full"
    >
      
      {/* Top: 4:5 Aspect Ratio Product Image with Clean Off-White Background */}
      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#F7F4EF] mb-4 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter contrast-[1.02] brightness-[1.01]"
        />

        {/* Category Pill Tag */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-poppins font-bold text-[#0A2540] uppercase tracking-wider shadow-xs">
          {product.categoryLabel}
        </span>
      </div>

      {/* Middle: Product Details */}
      <div className="space-y-2 flex-grow flex flex-col justify-between mb-4">
        <div>
          {/* Subtitle: Fabric Detail & GSM */}
          <p className="text-[11px] font-inter font-semibold text-[#635BFF] uppercase tracking-wider block mb-1">
            {product.fabricDetail} • <span className="font-bold text-slate-800">{product.gsm}</span>
          </p>

          {/* Product Name (Bold, Medium Size) */}
          <h3 className="text-sm sm:text-base font-poppins font-bold text-[#0A2540] leading-snug group-hover:text-[#635BFF] transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Color-Swatch Dots under name with +N More Indicator */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1.5">
            {product.colors.map((color, idx) => (
              <span
                key={idx}
                title={color.name}
                className={`w-3.5 h-3.5 rounded-full ${color.bgClass} ring-1 ring-slate-300/80 shadow-2xs`}
              />
            ))}
          </div>

          <span className="text-[10px] font-poppins font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
            +{product.extraColorsCount} more
          </span>
        </div>
      </div>

      {/* Bottom: Full-Width / Pill-Shaped "Add to Cart" Button (No Price Shown) */}
      <div className="pt-2 border-t border-slate-100 mt-auto">
        <button
          onClick={handleCartClick}
          className={`w-full py-2.5 sm:py-3 px-4 rounded-xl font-poppins font-bold text-xs sm:text-sm transition-all duration-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer transform group-hover:shadow-md ${
            isAdded
              ? 'bg-emerald-600 text-white shadow-emerald-500/30'
              : 'bg-[#0A2540] hover:bg-[#635BFF] text-white'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-4 h-4 text-white" />
              <span>Added ✓</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4 opacity-90" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>

    </motion.div>
  );
};
