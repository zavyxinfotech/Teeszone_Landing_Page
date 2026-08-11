import React, { useState } from 'react';
import { READY_STOCK_PRODUCTS, ReadyStockProduct } from '../../data/products';
import { Badge } from '../common/Badge';
import { Star, Eye, Heart, ShoppingCart } from 'lucide-react';

interface FeaturedProductsSectionProps {
  onQuickView?: (product: any) => void;
  onAddToCart?: (product: ReadyStockProduct) => void;
}

export const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({
  onQuickView,
  onAddToCart,
}) => {
  const [wishlist, setWishlist] = useState<string[]>([]);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  return (
    <section id="products" className="py-16 lg:py-24 bg-white text-[#0A2540] relative overflow-hidden select-none border-t border-slate-100">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Badge variant="emerald" size="md">
            READY STOCK
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#0A2540] tracking-tight">
            Ready Stock Products
          </h2>
          <p className="text-sm sm:text-base text-[#425466] font-inter font-semibold leading-relaxed">
            Quality apparel available for immediate purchase.
          </p>
        </div>

        {/* 3 E-Commerce Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {READY_STOCK_PRODUCTS.map((product) => {
            const isWishlisted = wishlist.includes(product.id);

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group relative"
              >
                
                {/* Image Container & Action Overlays */}
                <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-50 mb-5 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Top Action Buttons (Quick View & Wishlist) */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      aria-label="Wishlist product"
                      className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-md cursor-pointer ${
                        isWishlisted
                          ? 'bg-rose-500 text-white'
                          : 'bg-white/85 text-slate-700 hover:bg-white hover:text-rose-500'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                    </button>

                    {onQuickView && (
                      <button
                        onClick={() => onQuickView(product)}
                        aria-label="Quick view product"
                        className="w-9 h-9 rounded-full bg-white/85 text-slate-700 hover:bg-white hover:text-[#635BFF] flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-md cursor-pointer"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Rating & Category */}
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-poppins font-bold uppercase tracking-wider text-[#635BFF]">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{product.rating}</span>
                      </div>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-lg font-poppins font-extrabold text-[#0A2540] group-hover:text-[#635BFF] transition-colors">
                      {product.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-[#425466] font-inter leading-relaxed mt-1 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Fabric Details */}
                    <div className="mt-3 text-[11px] font-inter font-medium text-slate-500">
                      <span className="font-bold text-slate-700">Fabric: </span>
                      {product.fabric}
                    </div>

                    {/* Colors & Sizes */}
                    <div className="mt-3 space-y-2 pt-2 border-t border-slate-100">
                      
                      {/* Color Swatches */}
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-poppins font-bold text-slate-500 uppercase">Colors:</span>
                        <div className="flex items-center gap-1.5">
                          {product.colors.map((c, i) => (
                            <span
                              key={i}
                              title={c.name}
                              className={`w-3.5 h-3.5 rounded-full ${c.bgClass} ring-1 ring-slate-300 shadow-2xs`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Sizes */}
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-poppins font-bold text-slate-500 uppercase">Sizes:</span>
                        <div className="flex items-center gap-1">
                          {product.sizes.map((s, i) => (
                            <span key={i} className="text-[10px] font-poppins font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Price & Add to Cart CTA */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-4">
                    <div>
                      <span className="text-[10px] font-inter font-bold text-slate-400 block uppercase">Price</span>
                      <span className="text-xl font-poppins font-black text-[#0A2540]">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <button
                      onClick={() => onAddToCart ? onAddToCart(product) : alert(`Added ${product.name} to cart!`)}
                      className="py-2.5 px-4 bg-[#0A2540] hover:bg-[#635BFF] text-white font-poppins font-bold text-xs rounded-xl transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
