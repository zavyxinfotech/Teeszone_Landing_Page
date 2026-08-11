import React, { useState } from 'react';
import { X, Star, ShoppingBag, Send } from 'lucide-react';
import { Button } from './Button';

interface QuickViewModalProps {
  product: any;
  onClose: () => void;
  onOrderSample?: (product: any) => void;
  onRequestQuote?: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onOrderSample,
  onRequestQuote
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || { name: 'Default', bgClass: 'bg-slate-700' });
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'M');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A2540]/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 md:p-8 text-[#0A2540]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-[#0A2540] hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Product Image */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 aspect-[4/3] flex items-center justify-center group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Selected Color indicator */}
              {selectedColor && (
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 flex items-center gap-2 text-xs font-semibold text-[#0A2540]">
                  <span className={`w-3.5 h-3.5 rounded-full ${selectedColor.bgClass}`} />
                  <span>{selectedColor.name}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Details & Order Options */}
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-[#635BFF] uppercase tracking-widest">{product.category}</span>
                {product.rating && (
                  <>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1 text-xs font-semibold text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{product.rating}</span>
                    </div>
                  </>
                )}
              </div>
              <h2 className="text-2xl font-poppins font-bold text-[#0A2540]">{product.name}</h2>
              <p className="text-sm text-[#425466] mt-2 leading-relaxed">{product.description}</p>
            </div>

            {/* Fabric Details */}
            {product.fabric && (
              <div className="p-3.5 bg-[#F8FAFC] rounded-xl border border-slate-200 text-xs">
                <span className="text-[#6B7C93] block font-medium">Fabric Composition:</span>
                <span className="font-bold text-[#0A2540]">{product.fabric}</span>
              </div>
            )}

            {/* Price (if applicable) */}
            {product.price && (
              <div className="text-xl font-poppins font-black text-[#0A2540]">
                ₹{product.price.toLocaleString('en-IN')}
              </div>
            )}

            {/* Color Swatches */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <label className="block text-xs font-bold text-[#0A2540] mb-2 uppercase tracking-wide">
                  Select Colorway
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.colors.map((color: any, idx: number) => (
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
            )}

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <label className="block text-xs font-bold text-[#0A2540] mb-2 uppercase tracking-wide">
                  Select Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size: string) => (
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
            )}

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  onClose();
                  if (onRequestQuote) onRequestQuote();
                }}
                icon={<Send className="w-4 h-4" />}
              >
                Request Quote
              </Button>
              {onOrderSample && (
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
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
