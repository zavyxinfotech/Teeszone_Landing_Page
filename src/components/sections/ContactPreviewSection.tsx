import React, { useState } from 'react';
import { BRAND } from '../../data/brand';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Mail, Phone, MapPin, Send, Check, FileText } from 'lucide-react';

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
    <section className="py-12 lg:py-16 lg:min-h-screen lg:flex lg:flex-col lg:justify-center bg-transparent relative" aria-label="Contact & Prepress Consultation">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Details & Official Locations */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <Badge variant="primary" size="md" className="mb-2">
                GET IN TOUCH
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-[#0A2540] tracking-tight">
                Speak With a Dedicated Apparel Specialist
              </h2>
              <p className="text-xs sm:text-sm text-[#425466] mt-2 leading-relaxed font-inter">
                Custom embroidery specs, bulk uniform orders, or corporate swag boxes? Our team is available to assist you.
              </p>
            </div>

            <div className="space-y-3 font-inter">
              {/* GSTIN & Legal Name */}
              <div className="p-3.5 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xs flex items-center gap-3.5">
                <div className="p-2.5 bg-[#635BFF]/10 text-[#635BFF] rounded-xl shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-poppins">Legal Entity & GSTIN</span>
                  <span className="text-xs font-bold text-[#0A2540] block font-poppins">{BRAND.legalName}</span>
                  <span className="text-[11px] font-mono text-[#0284C7] font-semibold">GSTIN: {BRAND.gstin}</span>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="p-3.5 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xs flex items-center gap-3.5">
                <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-poppins">Direct Phone Line</span>
                  <div className="flex items-center gap-2">
                    <a href={`tel:${BRAND.contact.phonePrimary}`} className="text-xs sm:text-sm font-bold text-[#0A2540] hover:text-[#635BFF] transition-colors">
                      {BRAND.contact.phonePrimary}
                    </a>
                    <span className="text-slate-400">|</span>
                    <a href={`tel:${BRAND.contact.phoneSecondary}`} className="text-xs sm:text-sm font-bold text-[#0A2540] hover:text-[#635BFF] transition-colors">
                      {BRAND.contact.phoneSecondary}
                    </a>
                  </div>
                </div>
              </div>

              {/* Official Email */}
              <div className="p-3.5 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xs flex items-center gap-3.5">
                <div className="p-2.5 bg-[#38BDF8]/15 text-[#0284C7] rounded-xl shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-poppins">Official Sales & Inquiry Email</span>
                  <a href={`mailto:${BRAND.contact.email}`} className="text-xs sm:text-sm font-bold text-[#0A2540] hover:text-[#635BFF] transition-colors block">
                    {BRAND.contact.email}
                  </a>
                </div>
              </div>

              {/* Head Office Location */}
              <div className="p-3.5 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xs flex items-start gap-3.5">
                <div className="p-2.5 bg-[#635BFF]/10 text-[#635BFF] rounded-xl shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-poppins">{BRAND.contact.headOffice.title}</span>
                  <span className="text-xs text-[#0A2540] block font-medium leading-normal">{BRAND.contact.headOffice.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-xl font-poppins font-extrabold text-[#0A2540] mb-1.5">
              Request an Instant Prepress Consultation
            </h3>
            <p className="text-xs text-slate-600 mb-5 font-inter">
              Fill out your details below and our senior prepress designer will review your artwork.
            </p>

            {submitted ? (
              <div className="py-8 text-center space-y-2 bg-emerald-50/90 rounded-2xl font-inter shadow-xs">
                <Check className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-[#0A2540] font-poppins">Consultation Request Received!</h4>
                <p className="text-xs text-slate-600">
                  An account manager will contact you within 15 minutes with vector proof specs.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-inter">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#0A2540] mb-1 font-poppins">Your Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs text-[#0A2540] font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#635BFF]/20 transition-all shadow-2xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#0A2540] mb-1 font-poppins">Work Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="rajesh@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs text-[#0A2540] font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#635BFF]/20 transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#0A2540] mb-1 font-poppins">Phone Number *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 99446 87485"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs text-[#0A2540] font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#635BFF]/20 transition-all shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#0A2540] mb-1 font-poppins">Project Notes / Garment Quantities</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your custom apparel requirements, event date, or print technique..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs text-[#0A2540] font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#635BFF]/20 transition-all shadow-2xs"
                  />
                </div>

                <Button type="submit" variant="primary" size="md" className="w-full justify-center shadow-md shadow-[#635BFF]/30" icon={<Send className="w-4 h-4" />}>
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
