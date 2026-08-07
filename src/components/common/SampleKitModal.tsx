import React, { useState } from 'react';
import { X, Box, Check, Package, Sparkles, Send, ShieldCheck, MapPin } from 'lucide-react';
import { SampleKitFormData } from '../../types';
import { Button } from './Button';

interface SampleKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SampleKitModal: React.FC<SampleKitModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<SampleKitFormData>({
    fullName: '',
    companyName: '',
    workEmail: '',
    phone: '',
    kitType: 'luxury-corporate',
    shippingAddress: '',
    city: '',
    estimatedQuantity: '100 - 250 units'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A2540]/65 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 md:p-8 text-[#0A2540]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-[#0A2540] hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-poppins font-bold text-[#0A2540]">Enterprise Sample Box Dispatched!</h3>
            <p className="text-sm text-[#425466] max-w-md mx-auto leading-relaxed">
              We have processed your request for the <strong>{formData.kitType.replace('-', ' ')} kit</strong>.
              A tracking code and digital fabric catalog has been sent to <strong>{formData.workEmail}</strong>.
            </p>
            <div className="pt-4">
              <Button variant="primary" size="md" onClick={onClose}>
                Return to TeesZone
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#635BFF]/10 text-[#635BFF] rounded-2xl">
                <Box className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-poppins font-bold text-[#0A2540]">
                  Request an Enterprise Sample Kit
                </h2>
                <p className="text-xs text-[#6B7C93]">
                  Test our fabric weight, print density, embroidery, and custom packaging before your bulk order.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Kit Box */}
              <div>
                <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wide mb-2">
                  Select Sample Box Configuration
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: 'luxury-corporate', title: 'Luxury Corporate Box', desc: 'Supima Polos, Button-Down & Heavy Fleece' },
                    { id: 'tech-startup', title: 'Tech Startup Swag Box', desc: '240 GSM Tees, Hoodies & Canvas Tote' },
                    { id: 'eco-cotton', title: '100% Eco Organic Box', desc: 'GOTS Certified Cotton & Natural Dyes' },
                    { id: 'sports-event', title: 'Sports & Event Pack', desc: 'Sublimated Jersey & Dry-Tech Activewear' }
                  ].map((box) => (
                    <button
                      key={box.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, kitType: box.id as any })}
                      className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                        formData.kitType === box.id
                          ? 'border-[#635BFF] bg-[#635BFF]/5 text-[#635BFF] ring-2 ring-[#635BFF]/20'
                          : 'border-slate-200 hover:border-slate-300 text-[#425466]'
                      }`}
                    >
                      <span className="text-xs font-bold block text-[#0A2540]">{box.title}</span>
                      <span className="text-[11px] text-[#6B7C93] block mt-0.5">{box.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Input Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-[#0A2540] mb-1">Full Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Alex Morgan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-[#0A2540] focus:outline-none focus:border-[#635BFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A2540] mb-1">Company / Brand Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Stripe Inc."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-[#0A2540] focus:outline-none focus:border-[#635BFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A2540] mb-1">Work Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="alex@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-[#0A2540] focus:outline-none focus:border-[#635BFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A2540] mb-1">Phone Number *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-[#0A2540] focus:outline-none focus:border-[#635BFF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A2540] mb-1">Office Delivery Address *</label>
                <input
                  required
                  type="text"
                  placeholder="Street address, Suite / Floor, City, Zip Code"
                  value={formData.shippingAddress}
                  onChange={(e) => setFormData({ ...formData, shippingAddress: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-[#0A2540] focus:outline-none focus:border-[#635BFF]"
                />
              </div>

              <div className="p-3 bg-[#F8FAFC] rounded-xl border border-slate-200 text-xs flex items-center justify-between text-[#6B7C93]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#635BFF]" />
                  <span>100% Free Sample Guarantee for Verified Corporate Domains</span>
                </div>
                <span className="font-bold text-[#0A2540]">Ships Next Business Day</span>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isSubmitting}
                className="w-full"
                icon={<Send className="w-4 h-4" />}
              >
                Dispatch Free Enterprise Sample Box
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
