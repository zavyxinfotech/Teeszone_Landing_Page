import React, { useState } from 'react';
import { Logo } from '../common/Logo';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '../common/Button';

interface HeaderProps {
  onOpenQuoteModal?: () => void;
  onOpenSampleModal?: () => void;
  onOpenCustomizerModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuoteModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact navigation links as specified
  const primaryNavLinks = [
    { name: 'Categories', href: '#categories' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'How It Works', href: '#process' },
    { name: 'Products', href: '#products' },
    { name: 'Industries', href: '#industries' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQs', href: '#faq' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 py-[18px] px-6 sm:px-10 lg:px-12 transition-all duration-200">
      {/* Three-Zone Flex Container with justify-content: space-between */}
      <div className="w-full flex items-center justify-between gap-6">
        
        {/* Zone 1: Far Left - Logo */}
        <div className="flex items-center flex-shrink-0">
          <a href="#" className="flex items-center">
            <Logo showWordmark={true} />
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

        {/* Zone 3: Far Right - Only "Enquire Now" CTA Button */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Enquire Now CTA Button (Primary Action) */}
          <Button
            variant="primary"
            size="md"
            onClick={onOpenQuoteModal}
            icon={<ArrowRight className="w-4 h-4" />}
            className="shadow-md shadow-[#635BFF]/30 text-xs sm:text-sm font-poppins font-bold px-5 py-2.5 rounded-xl whitespace-nowrap"
          >
            Enquire Now
          </Button>

          {/* Hamburger Menu Toggle (Visible below 1024px / lg) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.75]" /> : <Menu className="w-6 h-6 stroke-[1.75]" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Below 1024px / lg) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 mt-4 px-4 pt-4 pb-6 space-y-4 animate-fadeIn shadow-xl rounded-2xl">
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
