import React, { useState } from 'react';
import { X, Calculator, Check, ArrowRight, Download, Send, Zap } from 'lucide-react';
import { calculateBulkPrice, formatCurrency } from '../../utils/formatters';
import { Button } from './Button';

interface InstantQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstantQuoteModal: React.FC<InstantQuoteModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [apparelType, setApparelType] = useState('Executive Honeycomb Polo');
  const [basePrice, setBasePrice] = useState(575);
  const [quantity, setQuantity] = useState(250);
  const [numLocations, setNumLocations] = useState(1);
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  // Print location surcharge (₹95 per addl location)
  const effectiveBasePrice = basePrice + (numLocations - 1) * 95;
  const priceInfo = calculateBulkPrice(effectiveBasePrice, quantity);

  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A2540]/65 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 md:p-8 text-[#0A2540]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-[#0A2540] hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-[#635BFF]/10 text-[#635BFF] rounded-2xl">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-poppins font-bold text-[#0A2540]">
              Instant Bulk Wholesale Price Calculator
            </h2>
            <p className="text-xs text-[#6B7C93]">
              Real-time transparent pricing tiers for corporate orders, sports leagues, and merchandise.
            </p>
          </div>
        </div>

        {isSent ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#0A2540]">Official Quote PDF Emailed!</h3>
            <p className="text-sm text-[#6B7C93]">
              We sent your line-item quotation and volume breakdown to <strong>{email}</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSendQuote} className="space-y-5">
            {/* Apparel Category Selector */}
            <div>
              <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wide mb-2">
                1. Select Apparel Category
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  { name: 'Executive Polo', price: 575 },
                  { name: '240 GSM Oversized Tee', price: 495 },
                  { name: 'Bio-Washed Crewneck', price: 325 },
                  { name: '380 GSM Fleece Hoodie', price: 1250 },
                  { name: 'Sublimated Sports Jersey', price: 450 },
                  { name: 'Corporate Work Shirt', price: 750 }
                ].map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => {
                      setApparelType(item.name);
                      setBasePrice(item.price);
                    }}
                    className={`p-2.5 rounded-xl text-xs font-semibold text-left border transition-all cursor-pointer ${
                      apparelType === item.name
                        ? 'border-[#635BFF] bg-[#635BFF]/10 text-[#635BFF]'
                        : 'border-slate-200 text-[#425466] hover:bg-slate-50'
                    }`}
                  >
                    <span className="block truncate">{item.name}</span>
                    <span className="text-[10px] text-[#6B7C93]">From {formatCurrency(item.price)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Print Locations */}
            <div>
              <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wide mb-2">
                2. Number of Customization Locations
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { num: 1, label: '1 Location (Chest)' },
                  { num: 2, label: '2 Locations (Chest + Back)' },
                  { num: 3, label: '3 Locations (Chest + Back + Sleeve)' }
                ].map((loc) => (
                  <button
                    key={loc.num}
                    type="button"
                    onClick={() => setNumLocations(loc.num)}
                    className={`p-2.5 rounded-xl text-xs font-semibold text-center border transition-all cursor-pointer ${
                      numLocations === loc.num
                        ? 'border-[#0A2540] bg-[#0A2540] text-white'
                        : 'border-slate-200 text-[#425466] hover:bg-slate-50'
                    }`}
                  >
                    {loc.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-[#0A2540] uppercase tracking-wide">
                  3. Order Quantity: <span className="text-[#635BFF] font-extrabold text-sm">{quantity} Units</span>
                </label>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {priceInfo.discountPercentage}% Tier Discount
                </span>
              </div>
              <input
                type="range"
                min={25}
                max={5000}
                step={25}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full accent-[#635BFF] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#6B7C93] mt-1 font-medium">
                <span>25 pcs (Starter)</span>
                <span>250 pcs (Corporate)</span>
                <span>1,000 pcs (Enterprise)</span>
                <span>5,000+ pcs (Wholesale)</span>
              </div>
            </div>

            {/* Pricing Summary Box */}
            <div className="p-4 bg-[#F4F7FB] rounded-2xl border border-slate-200/90 space-y-2">
              <div className="flex items-center justify-between text-xs text-[#6B7C93]">
                <span>Base Garment & Print Cost:</span>
                <span className="font-semibold text-[#0A2540]">{formatCurrency(effectiveBasePrice)} / unit</span>
              </div>
              <div className="flex items-center justify-between text-xs text-[#6B7C93]">
                <span>Volume Discount ({priceInfo.discountPercentage}%):</span>
                <span className="font-semibold text-emerald-600">-{formatCurrency(priceInfo.savings)} total</span>
              </div>
              <div className="flex items-center justify-between text-sm font-bold text-[#0A2540] pt-2 border-t border-slate-200">
                <span>Effective Cost per Unit:</span>
                <span className="text-[#0A2540]">{formatCurrency(priceInfo.unitPrice)}</span>
              </div>
              <div className="flex items-center justify-between text-base font-extrabold text-[#635BFF] pt-1">
                <span>Total Project Investment:</span>
                <span className="text-2xl font-poppins">{formatCurrency(priceInfo.totalPrice)}</span>
              </div>
            </div>

            {/* Email for official PDF quote */}
            <div className="flex gap-2">
              <input
                required
                type="email"
                placeholder="Enter work email for instant PDF quote..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-xs text-[#0A2540] focus:outline-none focus:border-[#635BFF]"
              />
              <Button type="submit" variant="primary" size="md" icon={<Send className="w-4 h-4" />}>
                Email Quote
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
