import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BLANK_CATALOGUE_PRODUCTS, BlankProduct } from '../../../data/blankCatalogue';
import { BlankProductCard } from './BlankProductCard';
import { ChevronDown, CheckCircle2, Layers } from 'lucide-react';
import { Badge } from '../../common/Badge';
import { QuickViewModal } from '../../common/QuickViewModal';

const BATCH_SIZE = 8; // Sliced progressive loading

interface ProductCatalogueSectionProps {
  onOpenQuoteModal?: () => void;
}

export const ProductCatalogueSection: React.FC<ProductCatalogueSectionProps> = ({
  onOpenQuoteModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(BATCH_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<BlankProduct | null>(null);

  // Filter products by active category tab
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return BLANK_CATALOGUE_PRODUCTS;
    return BLANK_CATALOGUE_PRODUCTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Sliced progressive display
  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, visibleCount);
  }, [filteredProducts, visibleCount]);

  const hasMore = visibleCount < filteredProducts.length;

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + BATCH_SIZE);
      setIsLoadingMore(false);
    }, 400);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setVisibleCount(BATCH_SIZE); // Reset pagination on filter change
  };



  // Category Filter Chips
  const filterCategories = [
    { id: 'all', label: 'All Products', count: BLANK_CATALOGUE_PRODUCTS.length },
    { id: 'roundneck', label: 'Roundneck', count: BLANK_CATALOGUE_PRODUCTS.filter(p => p.category === 'roundneck').length },
    { id: 'polo', label: 'Polo', count: BLANK_CATALOGUE_PRODUCTS.filter(p => p.category === 'polo').length },
    { id: 'oversized', label: 'Oversized', count: BLANK_CATALOGUE_PRODUCTS.filter(p => p.category === 'oversized').length },
    { id: 'hoodies', label: 'Hoodies', count: BLANK_CATALOGUE_PRODUCTS.filter(p => p.category === 'hoodies').length },
    { id: 'kids-women', label: "Kids & Women's", count: BLANK_CATALOGUE_PRODUCTS.filter(p => p.category === 'kids-women').length },
  ];

  return (
    <section id="blank-catalogue" className="py-12 sm:py-16 lg:py-24 bg-[#F7F4EF]/60 text-[#0A2540] relative overflow-hidden select-none" aria-label="Blank Apparel Catalogue">
      
      {/* Subtle Background Glow Accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(99,91,255,0.04),transparent_70%)] blur-3xl pointer-events-none" />
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2 sm:space-y-3">
          <Badge variant="primary" size="md">
            BLANK APPAREL CATALOGUE
          </Badge>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#0A2540] tracking-tight leading-tight">
            Explore Our Premium Signature Range
          </h2>
          <p className="text-xs sm:text-base text-[#425466] font-inter font-medium leading-relaxed max-w-2xl mx-auto">
            High-quality pre-shrunk fabrics ready for custom screen printing, high-density embroidery, and premium DTF customization.
          </p>
        </div>

        {/* 2. Category Filter Chips (Pill Buttons, Light Border, Active State Filled) */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 -mx-6 px-6 sm:-mx-0 sm:px-0 sm:pb-0 sm:flex-wrap w-full sm:w-auto">
            {filterCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-poppins font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 shrink-0 ${
                    isActive
                      ? 'bg-[#0A2540] text-white shadow-md scale-102 ring-2 ring-[#635BFF]/30'
                      : 'bg-white text-[#425466] hover:bg-white/80 border border-slate-200 shadow-2xs'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Showing Count Indicator */}
          <div className="text-xs font-inter font-semibold text-slate-500 hidden sm:block">
            Showing <span className="font-bold text-[#0A2540]">{displayedProducts.length}</span> of <span className="font-bold text-[#0A2540]">{filteredProducts.length}</span> products
          </div>
        </div>

        {/* 3. Responsive Product Catalogue Grid (4 cols desktop, 3 tablet, 2 small, 1 mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product) => (
              <BlankProductCard
                key={product.id}
                product={product}
                onOpenQuickView={(p) => setSelectedProduct(p)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* 4. "LOAD MORE" Behavior & Button */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4">
          <div className="flex flex-row items-center gap-4">
            {hasMore && (
              <button
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                className="px-8 py-3.5 rounded-full border-2 border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white font-poppins font-bold text-xs sm:text-sm transition-all duration-300 shadow-sm flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
              >
                {isLoadingMore ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>Fetching Products...</span>
                  </>
                ) : (
                  <>
                    <span>Load More Products</span>
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )}

            {visibleCount > BATCH_SIZE && (
              <button
                onClick={() => setVisibleCount(BATCH_SIZE)}
                className="px-8 py-3.5 rounded-full border-2 border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700 font-poppins font-bold text-xs sm:text-sm transition-all duration-300 shadow-sm flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Show Less</span>
              </button>
            )}
          </div>
          
          {!hasMore && (
            <div className="py-4 px-6 rounded-full bg-white border border-slate-200 text-xs font-poppins font-bold text-slate-500 shadow-2xs flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#635BFF]" />
              <span>You've seen all {filteredProducts.length} products in this category</span>
            </div>
          )}
        </div>

      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <QuickViewModal
          product={{
            ...selectedProduct,
            fabric: selectedProduct.fabricDetail,
            description: `Premium ${selectedProduct.gsm} ${selectedProduct.name} crafted with ${selectedProduct.fabricDetail}. Engineered with high-grade pre-shrunk yarn, bio-washed for superior comfort, durability, and a smooth printing surface. Ideal for corporate branding, sports teams, and custom retail lines.`,
            sizes: ['S', 'M', 'L', 'XL', 'XXL']
          }}
          onClose={() => setSelectedProduct(null)}
          onRequestQuote={onOpenQuoteModal}
        />
      )}
    </section>
  );
};
