import React, { useState } from 'react';
import { BRAND } from '../../data/brand';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Mail, Phone, MapPin, Send, Check, FileText, ExternalLink, Navigation, Building2, Map as MapIcon, Factory } from 'lucide-react';
import { locations } from '../../data/locations';
import { IndiaMapSVG } from '../common/IndiaMapSVG';

export const ContactPreviewSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeLocation, setActiveLocation] = useState(locations[0].id);
  const activeLocationData = locations.find(l => l.id === activeLocation) || locations[0];

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
              {/* <div className="p-3.5 bg-white/90 backdrop-blur-xl rounded-2xl flex items-start gap-3.5 border-b border-slate-200/80">
                <div className="p-2.5 bg-[#635BFF]/10 text-[#635BFF] rounded-xl shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-poppins">{BRAND.contact.headOffice.title}</span>
                  <span className="text-xs text-[#0A2540] block font-medium leading-normal">{BRAND.contact.headOffice.address}</span>
                </div>
              </div> */}
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

        {/* Our Locations Section (Dark Theme 2D Map Redesign) */}
        <div className="py-16 lg:py-24 border-t border-slate-200/80 relative overflow-hidden bg-transparent">
          <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Text */}
              <div className="text-center lg:text-left z-20">
                <span className="uppercase text-xs font-poppins font-bold tracking-[0.2em] text-[#635BFF] block mb-3">
                  Our Network
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-poppins font-black text-[#0A2540] leading-[1.15] mb-6">
                  Find Us Across South India
                </h2>
                <div className="flex gap-2 justify-center lg:justify-start mb-8">
                  <div className="h-1.5 w-12 bg-[#FF5A36] rounded-full"></div>
                  <div className="h-1.5 w-4 bg-[#635BFF] rounded-full"></div>
                </div>
                <p className="text-slate-600 font-inter text-base lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                  From our origins in Erode to manufacturing in Tiruppur, and expanding reach through Chennai and Bengaluru. Hover over any location to view full details.
                </p>
              </div>

              {/* Right Column: Map Container Wrapper */}
              <div className="w-full max-w-[400px] mx-auto lg:max-w-none lg:w-auto h-auto lg:h-[600px] aspect-square lg:aspect-auto relative flex justify-center z-10 lg:ml-auto">
                {/* Aspect Square wrapper */}
                <div className="relative w-full h-full lg:h-full aspect-square bg-transparent">
                  
                  {/* Background & SVG (Overflow Hidden) */}
                  <div className="absolute inset-0 overflow-visible pointer-events-none">
                    {/* Map SVG background (Google Maps Default Theme) */}
                    <IndiaMapSVG 
                      className="absolute inset-0 w-full h-full drop-shadow-sm text-[#e5e3df]"
                      fill="currentColor"
                      stroke="#d5d3cf"
                      strokeWidth={1}
                    />

                    {/* Curved Connecting Lines (Google Maps Blue) */}
                    <svg className="absolute inset-0 w-full h-full overflow-visible">
                      <path 
                        d={`M ${locations[0].coordinates.left}% ${locations[0].coordinates.top}% 
                            Q ${(locations[0].coordinates.left + locations[1].coordinates.left) / 2}% ${(locations[0].coordinates.top + locations[1].coordinates.top) / 2 + 5}% 
                              ${locations[1].coordinates.left}% ${locations[1].coordinates.top}%
                            Q ${(locations[1].coordinates.left + locations[3].coordinates.left) / 2 - 5}% ${(locations[1].coordinates.top + locations[3].coordinates.top) / 2}% 
                              ${locations[3].coordinates.left}% ${locations[3].coordinates.top}%
                            Q ${(locations[3].coordinates.left + locations[2].coordinates.left) / 2}% ${(locations[3].coordinates.top + locations[2].coordinates.top) / 2 - 10}% 
                              ${locations[2].coordinates.left}% ${locations[2].coordinates.top}%`}
                        fill="none" 
                        stroke="#4285F4" 
                        strokeWidth="2.5" 
                        strokeDasharray="4 6"
                        className="opacity-70"
                      />
                    </svg>
                  </div>
                  
                  {/* Location Markers */}
                  <div className="absolute inset-0 pointer-events-none z-20">
                    {locations.map((loc) => {
                      const isActive = activeLocation === loc.id;
                      
                      // Precise label positioning to avoid overlaps
                      let labelPosClass = 'top-full mt-3 left-1/2 -translate-x-1/2'; // Default
                      if (loc.id.includes('bengaluru')) labelPosClass = 'bottom-full mb-3 left-1/2 -translate-x-1/2';
                      if (loc.id.includes('erode')) labelPosClass = 'left-full ml-3 top-1/2 -translate-y-1/2';
                      if (loc.id.includes('tiruppur')) labelPosClass = 'right-full mr-3 top-1/2 -translate-y-1/2';
                      
                      return (
                        <div 
                          key={`map-marker-${loc.id}`}
                          className={`absolute transition-all duration-300 pointer-events-auto ${isActive ? 'z-[60]' : 'z-10'}`}
                          style={{ 
                            top: `${loc.coordinates.top}%`, 
                            left: `${loc.coordinates.left}%`,
                            transform: 'translate(-50%, -50%)'
                          }}
                          onMouseEnter={() => setActiveLocation(loc.id)}
                          onClick={() => setActiveLocation(loc.id)}
                        >
                          <div className="relative group flex flex-col items-center cursor-pointer">
                            
                            {/* Active/Hover Expanded Card */}
                            <div className={`absolute bottom-full mb-6 bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-slate-100 p-5 flex items-start gap-4 w-[280px] transition-all duration-300 origin-bottom ${isActive ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-4 pointer-events-none'}`}>
                              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#4285F4] rounded-l-2xl"></div>
                              
                              <div className="w-10 h-10 bg-[#4285F4]/10 rounded-full flex items-center justify-center shrink-0">
                                <MapPin className="w-5 h-5 text-[#4285F4]" fill="currentColor" />
                              </div>
                              
                              <div>
                                <h4 className="text-[#4285F4] font-poppins font-bold text-[10px] uppercase tracking-wider mb-1">
                                  {loc.type}
                                </h4>
                                <h5 className="text-sm font-black text-[#0A2540] mb-2 font-poppins">{loc.city}</h5>
                                <p className="text-xs text-slate-500 font-medium font-inter leading-relaxed mb-3 line-clamp-2">
                                  {loc.address}
                                </p>
                                
                                <a
                                  href={loc.mapsUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-[#0A2540] hover:text-[#4285F4] font-poppins font-bold text-[10px] uppercase tracking-wide transition-colors"
                                >
                                  <Navigation className="w-3 h-3" />
                                  View on Map
                                </a>
                              </div>
                               {/* Card Arrow pointing down */}
                               <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-slate-100"></div>
                            </div>

                            {/* Google Maps Markers */}
                            <div className={`relative flex items-center justify-center z-10 transition-transform duration-300 ${isActive ? 'scale-125' : 'hover:scale-110'}`}>
                              {isActive ? (
                                /* Google Maps Dropped Pin (Blue Dot with shadow) */
                                <div className="relative flex items-center justify-center w-8 h-8">
                                  <div className="absolute inset-0 bg-[#4285F4]/40 rounded-full blur-[4px] scale-150 animate-pulse"></div>
                                  <div className="relative w-4 h-4 rounded-full bg-[#4285F4] border-2 border-white shadow-sm z-20"></div>
                                </div>
                              ) : (
                                /* Google Maps Place Icon (Yellow/Orange) */
                                <div className="relative flex items-center justify-center w-6 h-8">
                                  <svg viewBox="0 0 24 34" fill="none" className="w-full h-full drop-shadow-sm">
                                    <path d="M12 0C5.372 0 0 5.373 0 12C0 20.354 12 34 12 34C12 34 24 20.354 24 12C24 5.373 18.628 0 12 0Z" fill="#F4B400"/>
                                    <circle cx="12" cy="12" r="5" fill="white"/>
                                  </svg>
                                </div>
                              )}
                            </div>
                            
                            {/* Name Label (Google Maps Style) */}
                            <div className={`absolute ${labelPosClass} bg-white/95 backdrop-blur-sm px-2 py-1 rounded shadow-sm border border-slate-200 whitespace-nowrap transition-all duration-300 ${isActive ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
                              <span className="text-[10px] font-bold text-[#3c4043] font-inter tracking-wide">{loc.name}</span>
                            </div>

                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
