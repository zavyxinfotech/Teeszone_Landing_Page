import React, { useState } from 'react';
import { Product } from '../../types';
import { X, Star, Sliders, ShoppingBag } from 'lucide-react';
import { Button } from './Button';
import { Badge } from './Badge';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenCustomizer: (product: Product) => void;
  onOrderSample: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onOpenCustomizer,
  onOrderSample
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2] || product.sizes[0]);
  const [quantity, setQuantity] = useState(100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A2540]/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 md:p-8 text-[#0A2540]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-[#0A2540] hover:bg-slate-100 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Product Image & Interactive Mockup */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 aspect-[4/3] flex items-center justify-center group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {product.tag && (
                <div className="absolute top-4 left-4">
                  <Badge variant="primary" size="md">
                    {product.tag}
                  </Badge>
                </div>
              )}
              
              {/* Color overlay indicator */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 flex items-center gap-2 text-xs font-semibold text-[#0A2540]">
                <span className={`w-3.5 h-3.5 rounded-full ${selectedColor.bgClass}`} />
                <span>Selected: {selectedColor.name}</span>
              </div>
            </div>

            {/* Print techniques badges */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <h4 className="text-xs font-bold text-[#6B7C93] uppercase tracking-wider mb-2">Available Customization Methods</h4>
              <div className="flex flex-wrap gap-1.5">
                {product.printTechniques.map((tech, idx) => (
                  <span key={idx} className="text-xs bg-white text-[#0A2540] border border-slate-200 px-2.5 py-1 rounded-lg font-medium shadow-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Details & Custom Order Parameters */}
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-[#635BFF] uppercase tracking-widest">{product.category.replace('-', ' ')}</span>
                <span className="text-slate-300">•</span>
                <div className="flex items-center gap-1 text-xs font-semibold text-amber-600">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-slate-400">({product.reviewCount} reviews)</span>
                </div>
              </div>
              <h2 className="text-2xl font-poppins font-bold text-[#0A2540]">{product.name}</h2>
              <p className="text-sm text-[#425466] mt-2 leading-relaxed">{product.description}</p>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-3 p-3.5 bg-[#F8FAFC] rounded-xl border border-slate-200 text-xs">
              <div>
                <span className="text-[#6B7C93] block">Fabric Weight:</span>
                <span className="font-bold text-[#0A2540]">{product.gsm} GSM Heavyweight</span>
              </div>
              <div>
                <span className="text-[#6B7C93] block">Fabric Composition:</span>
                <span className="font-bold text-[#0A2540] truncate block">{product.fabric}</span>
              </div>
              <div>
                <span className="text-[#6B7C93] block">Min Order Quantity:</span>
                <span className="font-bold text-[#0A2540]">{product.minQuantity} units</span>
              </div>
              <div>
                <span className="text-[#6B7C93] block">Dispatch Speed:</span>
                <span className="font-bold text-[#635BFF]">48-Hour Express Available</span>
              </div>
            </div>

            {/* Color Swatch Picker */}
            <div>
              <label className="block text-xs font-bold text-[#0A2540] mb-2 uppercase tracking-wide">
                1. Select Colorway ({product.colors.length} Available)
              </label>
              <div className="flex flex-wrap gap-2.5">
                {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(color)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                      selectedColor.name === color.name
                        ? 'border-[#635BFF] bg-[#635BFF]/5 text-[#635BFF] ring-2 ring-[#635BFF]/20'
                        : 'border-slate-200 hover:border-slate-300 text-[#425466]'
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full ${color.bgClass}`} />
                    <span>{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <label className="block text-xs font-bold text-[#0A2540] mb-2 uppercase tracking-wide">
                2. Select Sample Size
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedSize === size
                        ? 'bg-[#0A2540] text-white'
                        : 'bg-slate-100 text-[#425466] hover:bg-slate-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector Slider */}
            <div className="p-4 bg-[#F4F7FB] rounded-2xl border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0A2540] uppercase tracking-wide">
                  3. Enterprise Order Quantity
                </span>
                <span className="text-xs font-bold text-[#635BFF] bg-[#635BFF]/10 px-2.5 py-0.5 rounded-full">
                  Bulk Wholesale Solution
                </span>
              </div>

              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={product.minQuantity}
                  max={2000}
                  step={25}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full accent-[#635BFF] cursor-pointer"
                />
                <input
                  type="number"
                  min={product.minQuantity}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                  className="w-20 px-2 py-1 text-sm font-bold border border-slate-300 rounded-lg text-center bg-white"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  onClose();
                  onOpenCustomizer(product);
                }}
                icon={<Sliders className="w-4 h-4" />}
              >
                Customize Logo & Design
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={() => {
                  onClose();
                  onOrderSample(product);
                }}
                icon={<ShoppingBag className="w-4 h-4" />}
              >
                Request Sample Kit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
