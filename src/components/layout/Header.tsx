import React, { useState } from 'react';
import { Logo } from '../common/Logo';
import { Menu, X, ArrowRight, ChevronRight, ShoppingCart } from 'lucide-react';
import { Button } from '../common/Button';

interface HeaderProps {
  onOpenQuoteModal?: () => void;
  cartCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuoteModal,
  cartCount = 0
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Nav links matching active sections
  const primaryNavLinks = [
    { name: 'Catalogue', href: '#blank-catalogue' },
    { name: 'Categories', href: '#categories' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'How It Works', href: '#process' },
    { name: 'Ready Stock', href: '#products' },
    { name: 'Our Team', href: '#team' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 py-3 sm:py-[18px] px-3 sm:px-6 lg:px-12 transition-all duration-200 overflow-x-hidden">
      {/* Three-Zone Flex Container with justify-between */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 lg:gap-6">
        
        {/* Zone 1: Far Left - Logo */}
        <div className="flex items-center shrink-0">
          <a href="#" className="flex items-center">
            <Logo size="sm" showWordmark={true} />
          </a>
        </div>

        {/* Zone 2: Left-of-Center - Primary Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-inter">
          {primaryNavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-gray-900 hover:text-[#635BFF] transition-colors no-underline whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Far Right - Cart Icon Badge & CTA Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Cart Icon Button with Item Count Badge */}
          <button
            onClick={onOpenQuoteModal}
            aria-label="View Cart"
            className="relative p-2 rounded-xl text-[#0A2540] hover:bg-slate-100 transition-colors cursor-pointer flex items-center justify-center"
          >
            <ShoppingCart className="w-5 h-5 text-[#0A2540]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#635BFF] text-white text-[11px] font-poppins font-bold flex items-center justify-center shadow-md animate-scaleIn">
                {cartCount}
              </span>
            )}
          </button>

          {/* Enquire Now CTA Button */}
          <Button
            variant="primary"
            size="md"
            onClick={onOpenQuoteModal}
            icon={<ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            className="shadow-md shadow-[#635BFF]/30 text-[11px] sm:text-xs md:text-sm font-poppins font-bold px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-xl whitespace-nowrap shrink-0"
          >
            Enquire Now
          </Button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 mt-3 px-4 pt-4 pb-6 space-y-4 animate-fadeIn shadow-xl rounded-2xl">
          <nav className="flex flex-col space-y-2 font-inter">
            {primaryNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-gray-900 py-2.5 px-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-gray-100">
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenQuoteModal) onOpenQuoteModal();
              }}
              className="w-full justify-center text-sm font-poppins font-bold"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Enquire Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
