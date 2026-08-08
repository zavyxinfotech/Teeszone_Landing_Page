import React, { useState } from 'react';
import { BRAND } from '../../data/brand';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

export const ContactPreviewSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section className="py-20 lg:py-28 bg-transparent relative" aria-label="Contact & Prepress Consultation">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <Badge variant="primary" size="md" className="mb-3">
                GET IN TOUCH
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#0A2540] tracking-tight">
                Speak With a Dedicated Apparel Specialist
              </h2>
              <p className="text-base sm:text-lg text-[#425466] mt-3 leading-relaxed font-inter">
                Have a custom embroidery spec, complex split-shipment requirement, or global swag box project? Our team is available 24/7.
              </p>
            </div>

            <div className="space-y-4 pt-2 font-inter">
              <div className="p-4 sm:p-5 bg-white/90 backdrop-blur-xl rounded-2xl shadow-sm flex items-start gap-4">
                <div className="p-3 bg-[#635BFF]/10 text-[#635BFF] rounded-2xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block font-poppins">Phone Support</span>
                  <a href={`tel:${BRAND.contact.phone}`} className="text-base font-bold text-[#0A2540] hover:text-[#635BFF] transition-colors">
                    {BRAND.contact.phone}
                  </a>
                  <span className="text-xs text-slate-600 block mt-0.5">Mon–Fri: 24 Hours • Sat–Sun: 8am–8pm EST</span>
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-white/90 backdrop-blur-xl rounded-2xl shadow-sm flex items-start gap-4">
                <div className="p-3 bg-[#38BDF8]/15 text-[#0284C7] rounded-2xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block font-poppins">Sales & Prepress Email</span>
                  <a href={`mailto:${BRAND.contact.salesEmail}`} className="text-base font-bold text-[#0A2540] hover:text-[#635BFF] transition-colors">
                    {BRAND.contact.salesEmail}
                  </a>
                  <span className="text-xs text-slate-600 block mt-0.5">Average response time: &lt; 15 minutes</span>
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-white/90 backdrop-blur-xl rounded-2xl shadow-sm flex items-start gap-4">
                <div className="p-3 bg-emerald-100 text-emerald-700 rounded-2xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block font-poppins">Global Headquarters</span>
                  <span className="text-sm font-bold text-[#0A2540] block">{BRAND.contact.headquarters}</span>
                  <span className="text-xs text-slate-600 block mt-0.5">Manufacturing Park: {BRAND.contact.productionFacility}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Callback Form (Borderless Glass Card) */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-[#0A2540] mb-2">
              Request an Instant Prepress Consultation
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 font-inter leading-relaxed">
              Fill out your order details below and our senior prepress designer will review your artwork and reply with a vector proof.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-3 bg-emerald-50/90 rounded-2xl font-inter shadow-xs">
                <Check className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-[#0A2540] font-poppins">Consultation Request Received!</h4>
                <p className="text-sm text-slate-600">
                  An account manager will call or email you within 15 minutes with artwork specifications.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-inter">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1.5 font-poppins">Your Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Sarah Lin"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl text-sm text-[#0A2540] font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#635BFF]/20 transition-all shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1.5 font-poppins">Work Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl text-sm text-[#0A2540] font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#635BFF]/20 transition-all shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A2540] mb-1.5 font-poppins">Phone Number *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl text-sm text-[#0A2540] font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#635BFF]/20 transition-all shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A2540] mb-1.5 font-poppins">Project Notes / Garment Quantities</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your custom apparel requirements, event date, or preferred print technique..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl text-sm text-[#0A2540] font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#635BFF]/20 transition-all shadow-xs"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full justify-center shadow-lg shadow-[#635BFF]/30" icon={<Send className="w-4 h-4" />}>
                  Submit Consultation Request
                </Button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
