import React from 'react';
import { Badge } from '../common/Badge';
import { 
  Factory, 
  Layers, 
  Printer, 
  RefreshCw, 
  Users, 
  Truck,
  CheckCircle2
} from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const advantages = [
    {
      id: 'direct-manufacturer',
      title: 'Direct Manufacturer',
      description: 'Made in Tiruppur with quality-focused manufacturing.',
      badge: 'Tiruppur Hub',
      icon: Factory,
      accent: 'bg-[#635BFF]/10 text-[#635BFF]',
      cardSpan: 'md:col-span-2'
    },
    {
      id: 'premium-fabrics',
      title: 'Premium Fabrics',
      description: 'Cotton, Polycotton, EcoBlend & Nano Poly options.',
      badge: 'Zero-Lint Combed',
      icon: Layers,
      accent: 'bg-[#38BDF8]/15 text-[#0284C7]',
      cardSpan: 'md:col-span-1'
    },
    {
      id: 'custom-branding',
      title: 'Custom Branding',
      description: 'Professional high-density printing and precision embroidery.',
      badge: '1200 DPI Precision',
      icon: Printer,
      accent: 'bg-emerald-100 text-emerald-700',
      cardSpan: 'md:col-span-1'
    },
    {
      id: 'end-to-end',
      title: 'End-to-End Service',
      description: 'From design and manufacturing to final doorstep delivery.',
      badge: 'In-House Prepress',
      icon: RefreshCw,
      accent: 'bg-amber-100 text-amber-700',
      cardSpan: 'md:col-span-1'
    },
    {
      id: 'bulk-ready',
      title: 'Bulk Order Ready',
      description: 'Competitive solutions for businesses and organizations of all sizes.',
      badge: 'Wholesale Pricing',
      icon: Users,
      accent: 'bg-purple-100 text-purple-700',
      cardSpan: 'md:col-span-1'
    },
    {
      id: 'pan-india',
      title: 'Pan-India Delivery',
      description: 'Reliable express delivery across India with live tracking.',
      badge: 'Fast Logistics',
      icon: Truck,
      accent: 'bg-sky-100 text-sky-700',
      cardSpan: 'md:col-span-2'
    }
  ];

  return (
    <section id="why-us" className="py-12 lg:py-16 lg:min-h-screen lg:flex lg:flex-col lg:justify-center bg-transparent relative" aria-label="Why Choose TeesZone">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <Badge variant="sky" size="md">
            THE TEESZONE ADVANTAGE
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-[#0A2540] tracking-tight">
            Why Choose TeesZone?
          </h2>
          <p className="text-sm sm:text-base text-[#425466] font-inter font-semibold leading-relaxed">
            Quality apparel. Custom solutions. Reliable service.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {advantages.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`${item.cardSpan} stripe-card stripe-card-hover rounded-3xl p-6 sm:p-7 bg-white/90 backdrop-blur-xl shadow-lg relative overflow-hidden flex flex-col justify-between group transition-all duration-300`}
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-2xl ${item.accent} flex items-center justify-center font-bold shadow-xs`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-poppins font-bold text-[#635BFF] uppercase tracking-wider block mb-1">
                      {item.badge}
                    </span>
                    <h3 className="text-xl font-poppins font-extrabold text-[#0A2540]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#425466] mt-2 leading-relaxed font-inter">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-inter text-[#0A2540] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Guaranteed Specs</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
