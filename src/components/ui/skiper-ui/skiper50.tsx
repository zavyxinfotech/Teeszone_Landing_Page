"use client";

import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { 
  Star, 
  Heart, 
  Eye, 
  Sliders, 
  ShoppingBag, 
  CheckCircle2
} from "lucide-react";
import { Product } from "../../../types";
import { formatCurrency, calculateBulkPrice } from "../../../utils/formatters";

export interface Skiper50ProductCardProps {
  product: Product;
  isWishlisted?: boolean;
  onToggleWishlist?: (id: string) => void;
  onQuickView?: (product: Product) => void;
  onOpenCustomizer?: (product: Product) => void;
  onOrderSample?: (product: Product) => void;
  className?: string;
}

/**
 * Skiper UI — Skiper50 Product Card
 * Enhanced enterprise-grade card component with mouse-tracking spotlight,
 * glass reflection shimmer, smooth lift elevation, and magnetic actions.
 */
export const Skiper50ProductCard: React.FC<Skiper50ProductCardProps> = ({
  product,
  isWishlisted = false,
  onToggleWishlist,
  onQuickView,
  onOpenCustomizer,
  onOrderSample,
  className = "",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const bulkPricing = calculateBulkPrice(product.basePrice, 100);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group rounded-3xl bg-white/95 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between ${className}`}
      style={{
        borderRadius: "22px",
      }}
    >
      {/* Mouse Tracking Spotlight Glow Effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 91, 255, 0.08), transparent 80%)`,
          }}
        />
      )}

      {/* Glass Reflection Shimmer Line */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-3xl">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
      </div>

      <div>
        {/* Product Image Frame */}
        <div className="relative aspect-[4/3] bg-gradient-to-b from-slate-100/80 to-slate-50 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            referrerPolicy="no-referrer"
          />

          {/* Tag Badge */}
          {product.tag && (
            <div className="absolute top-3 left-3 z-20">
              <span className="px-2.5 py-1 text-[10px] font-poppins font-black uppercase tracking-wider text-white bg-[#0A2540]/90 backdrop-blur-md rounded-full shadow-xs">
                {product.tag}
              </span>
            </div>
          )}

          {/* Action Icons Top Right (Wishlist & Quick View) */}
          <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
            {onQuickView && (
              <button
                onClick={() => onQuickView(product)}
                className="p-2 rounded-full bg-white/80 backdrop-blur-md text-[#0A2540] hover:text-[#635BFF] hover:bg-white transition-all transform active:scale-90 shadow-sm cursor-pointer"
                title="Quick View Specs"
                aria-label={`Quick View ${product.name}`}
              >
                <Eye className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => onToggleWishlist?.(product.id)}
              className={`p-2 rounded-full backdrop-blur-md transition-all transform active:scale-90 shadow-sm cursor-pointer ${
                isWishlisted
                  ? "bg-rose-500 text-white"
                  : "bg-white/80 text-slate-600 hover:text-rose-500 hover:bg-white"
              }`}
              title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              aria-label={`Wishlist ${product.name}`}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`} />
            </button>
          </div>

          {/* Hover Customizer Floating Overlay */}
          <div className="absolute inset-x-3 bottom-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex gap-2">
            {onOpenCustomizer && (
              <button
                onClick={() => onOpenCustomizer(product)}
                className="flex-1 py-2.5 px-3 bg-[#635BFF] hover:bg-[#5248FF] text-white text-xs font-poppins font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer transform active:scale-95"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Customize in Studio</span>
              </button>
            )}
          </div>
        </div>

        {/* Card Content Details */}
        <div className="p-5 space-y-3">
          {/* GSM & Category Header Row */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#635BFF] font-poppins font-black text-[10px] uppercase tracking-wider bg-[#635BFF]/10 px-2.5 py-0.5 rounded-full">
              {product.gsm} GSM • {product.category.replace("-", " ")}
            </span>
            <div className="flex items-center gap-1 font-bold text-amber-600 bg-amber-50/90 px-2 py-0.5 rounded-md">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-xs">{product.rating}</span>
              <span className="text-[10px] text-slate-400">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="text-base font-poppins font-bold text-[#0A2540] group-hover:text-[#635BFF] transition-colors leading-snug line-clamp-1">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-[#425466] line-clamp-2 leading-relaxed font-normal">
            {product.description}
          </p>

          {/* Fabric & Fit Details */}
          <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5 pt-0.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span className="truncate">{product.material}</span>
          </div>

          {/* Available Sizes Row */}
          <div className="flex items-center gap-1 pt-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1">Sizes:</span>
            {product.sizes.map((size) => (
              <span
                key={size}
                className="px-1.5 py-0.5 text-[9px] font-bold text-slate-600 bg-slate-100 rounded uppercase"
              >
                {size}
              </span>
            ))}
          </div>

          {/* Color Swatch Dots */}
          <div className="flex items-center gap-1.5 pt-0.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1">Colors:</span>
            <div className="flex items-center gap-1">
              {product.colors.map((c, i) => (
                <span
                  key={i}
                  className={`w-3.5 h-3.5 rounded-full ${c.bgClass} shadow-xs ring-1 ring-slate-200`}
                  title={c.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer: Pricing in INR & Main Action Button */}
      <div className="p-5 pt-3 bg-slate-50/70 flex items-center justify-between rounded-b-3xl">
        <div>
          <span className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">
            Bulk Rate (100+ pcs)
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-poppins font-black text-[#0A2540]">
              {formatCurrency(bulkPricing.unitPrice)}
            </span>
            <span className="text-[11px] text-slate-500 font-medium">/pc</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onOrderSample && (
            <button
              onClick={() => onOrderSample(product)}
              className="px-3.5 py-2.5 bg-white hover:bg-[#0A2540] hover:text-white text-[#0A2540] text-xs font-poppins font-bold rounded-xl shadow-xs transition-all duration-200 flex items-center gap-1.5 cursor-pointer transform active:scale-95"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Sample</span>
            </button>
          )}

          {onOpenCustomizer && (
            <button
              onClick={() => onOpenCustomizer(product)}
              className="p-2.5 bg-[#0A2540] hover:bg-[#635BFF] text-white rounded-xl shadow-xs transition-all duration-200 cursor-pointer transform active:scale-95 sm:hidden"
              title="Customize"
            >
              <Sliders className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export { Skiper50ProductCard as Skiper50 };
