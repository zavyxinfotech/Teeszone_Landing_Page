import React, { useState } from 'react';
import { PRINTING_PROCESS } from '../../data/process';
import { Badge } from '../common/Badge';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';

export const PrintingProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = PRINTING_PROCESS[activeStepIndex];

  return (
    <section id="process" className="py-12 lg:py-16 lg:min-h-screen lg:flex lg:flex-col lg:justify-center bg-transparent relative" aria-label="Printing Process">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <Badge variant="primary" size="md">
            PRECISION MANUFACTURING
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-[#0A2540] tracking-tight">
            Our 5-Step Enterprise Printing Process
          </h2>
          <p className="text-sm sm:text-base text-[#425466] font-inter leading-relaxed">
            From prepress vector auditing to 160°C quartz curing and individual polybagging.
          </p>
        </div>

        {/* Timeline Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {PRINTING_PROCESS.map((proc, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={proc.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-[#0A2540] text-white shadow-xl scale-102'
                    : 'bg-white/80 backdrop-blur-md text-[#425466] hover:bg-[#635BFF]/10 hover:text-[#0A2540] shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`font-outfit text-[11px] font-bold ${isActive ? 'text-[#38BDF8]' : 'text-[#635BFF]'}`}>
                    STEP {proc.stepNumber}
                  </span>
                  {isActive && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                </div>
                <h3 className={`text-xs font-poppins font-bold truncate ${isActive ? 'text-white' : 'text-[#0A2540]'}`}>
                  {proc.title.split('&')[0]}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Step Content Spotlight Card */}
        <div className="stripe-card rounded-3xl p-6 sm:p-8 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/90 backdrop-blur-xl">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-outfit text-xl font-extrabold text-[#635BFF] bg-[#635BFF]/10 px-3 py-1 rounded-xl">
                STEP {currentStep.stepNumber}
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-poppins">
                {currentStep.duration}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-[#0A2540]">
              {currentStep.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#425466] leading-relaxed font-inter">
              {currentStep.description}
            </p>

            {/* Key Quality Deliverables Checkpoints */}
            <div className="pt-2 space-y-2 font-inter">
              <h4 className="text-[10px] font-bold text-[#0A2540] uppercase tracking-wider font-poppins">
                Guaranteed Prepress & QC Outputs
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentStep.keyOutputs.map((output, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 bg-white/90 rounded-xl text-xs font-semibold text-[#0A2540] shadow-2xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#635BFF] shrink-0" />
                    <span>{output}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Process Flow Card */}
          <div className="lg:col-span-5 bg-[#0A2540] text-white p-6 sm:p-7 rounded-3xl space-y-5 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#635BFF]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-slate-700/50 pb-3 font-poppins">
              <span className="text-[11px] font-bold text-[#38BDF8] uppercase tracking-widest">
                QUALITY AUDIT LOCK
              </span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full font-mono font-bold">
                STAGE PASSED ✓
              </span>
            </div>

            <div className="space-y-3 text-xs font-inter">
              <div className="flex justify-between items-center text-slate-300">
                <span>Pantone Matching Engine:</span>
                <span className="text-white font-bold">100% PMS Match</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Wash Test Verification:</span>
                <span className="text-white font-bold">50+ Cycles @ 40°C</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Fabric Shrinkage Limit:</span>
                <span className="text-emerald-400 font-bold">&lt; 1.5% Bio-Wash</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-700/50">
              <button
                onClick={() => setActiveStepIndex((prev) => (prev + 1) % PRINTING_PROCESS.length)}
                className="w-full text-center py-3 bg-[#635BFF] hover:bg-[#574BFF] text-white text-xs font-poppins font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-[#635BFF]/30"
              >
                <span>Next Stage: Step {PRINTING_PROCESS[(activeStepIndex + 1) % PRINTING_PROCESS.length].stepNumber}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
