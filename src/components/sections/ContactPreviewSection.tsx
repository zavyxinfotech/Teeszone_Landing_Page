import React, { useState } from 'react';
import { BRAND } from '../../data/brand';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Mail, Phone, MapPin, Send, Check, FileText, ExternalLink } from 'lucide-react';

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
    <section id="contact" className="py-12 lg:py-16 bg-transparent relative" aria-label="Corporate Office & Prepress Consultation">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Details & Official Locations */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <Badge variant="primary" size="md" className="mb-2">
                CORPORATE OFFICE & CONTACT
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
              <div className="p-3.5 bg-white/90 backdrop-blur-xl rounded-2xl flex items-center gap-3.5 border-b border-slate-200/80">
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
              <div className="p-3.5 bg-white/90 backdrop-blur-xl rounded-2xl flex items-center gap-3.5 border-b border-slate-200/80">
                <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-poppins">Direct Phone Lines</span>
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
              <div className="p-3.5 bg-white/90 backdrop-blur-xl rounded-2xl flex items-center gap-3.5 border-b border-slate-200/80">
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
              <div className="p-3.5 bg-white/90 backdrop-blur-xl rounded-2xl flex items-start gap-3.5 border-b border-slate-200/80">
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
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl font-poppins font-extrabold text-[#0A2540] mb-1.5">
              Request an Instant Prepress Consultation
            </h3>
            <p className="text-xs text-slate-600 mb-5 font-inter">
              Fill out your details below and our senior prepress designer will review your artwork.
            </p>

            {submitted ? (
              <div className="py-8 text-center space-y-2 bg-emerald-50/90 rounded-2xl font-inter">
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
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs text-[#0A2540] font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#635BFF]/20 transition-all border border-slate-200"
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
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs text-[#0A2540] font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#635BFF]/20 transition-all border border-slate-200"
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
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs text-[#0A2540] font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#635BFF]/20 transition-all border border-slate-200"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#0A2540] mb-1 font-poppins">Project Notes / Garment Quantities</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your custom apparel requirements, event date, or print technique..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs text-[#0A2540] font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#635BFF]/20 transition-all border border-slate-200"
                  />
                </div>

                <Button type="submit" variant="primary" size="md" className="w-full justify-center" icon={<Send className="w-4 h-4" />}>
                  Submit Consultation Request
                </Button>
              </form>
            )}
          </div>

        </div>

        {/* Embedded Exact Google Map for Corporate Office */}
        <div className="space-y-4 pt-4 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-poppins font-bold uppercase tracking-wider text-[#635BFF] flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#635BFF]" />
                Official Verified Corporate Office Location
              </span>
              <h3 className="text-xl font-poppins font-bold text-[#0A2540] mt-0.5">
                Texvalley Global Market, Erode — Head Office
              </h3>
            </div>

            <a
              href="https://maps.google.com/?q=Texvalley+Global+Market+NH+544+Chithode+Erode"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A2540] hover:bg-[#635BFF] text-white text-xs font-poppins font-bold rounded-xl transition-colors cursor-pointer w-fit"
            >
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-200 relative bg-slate-100">
            <iframe
              title="TeesZone Clothing Head Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.234!2d77.654!3d11.432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96144e5d6d84f%3A0xa59f77f0ed4d59a7!2sTexvalley%20Market!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
