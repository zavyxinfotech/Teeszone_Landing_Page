import React, { useState } from 'react';
import { PRODUCTS } from '../../data/products';
import { Product, ApparelCategory } from '../../types';
import { Badge } from '../common/Badge';
import { Skiper50ProductCard } from '../ui/skiper-ui/skiper50';

interface FeaturedProductsSectionProps {
  onQuickView: (product: Product) => void;
  onOpenCustomizer: (product: Product) => void;
}

export const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({
  onQuickView,
  onOpenCustomizer,
  
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | ApparelCategory>('all');
  const [wishlist, setWishlist] = useState<string[]>([]);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const filteredProducts = selectedFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedFilter);

  return (
    <section id="products" className="py-12 lg:py-16 lg:min-h-screen lg:flex lg:flex-col lg:justify-center bg-[#F8FAFC] relative">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="primary" size="md">
              ENTERPRISE APPAREL COLLECTION
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-[#0A2540] tracking-tight">
              Featured Custom Apparel & Uniforms
            </h2>
            <p className="text-xs sm:text-sm text-[#425466] font-inter leading-relaxed">
              Best-selling corporate polo shirts, 240 GSM heavyweight tees, hoodies, and sublimated jerseys.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Apparel' },
              { id: 'polo-shirts', label: 'Polos' },
              { id: 'oversized', label: '240 GSM Oversized' },
              { id: 'round-neck', label: 'Bio-Washed Tees' },
              { id: 'hoodies-sweats', label: 'Hoodies' },
              { id: 'sports-jerseys', label: 'Jerseys' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-poppins font-bold transition-all cursor-pointer ${
                  selectedFilter === filter.id
                    ? 'bg-[#0A2540] text-white shadow-md scale-102'
                    : 'bg-white text-[#425466] hover:bg-[#635BFF]/10 hover:text-[#0A2540] shadow-2xs'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skiper UI Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredProducts.map((product) => (
            <Skiper50ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlist.includes(product.id)}
              onToggleWishlist={toggleWishlist}
              onQuickView={onQuickView}
              onOpenCustomizer={onOpenCustomizer}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
