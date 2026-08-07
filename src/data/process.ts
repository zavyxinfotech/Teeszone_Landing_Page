import { ProcessStep } from '../types';

export const PRINTING_PROCESS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Vector Proof & 3D Digital Mockup',
    tagline: 'Precision Pre-Production Alignment',
    description: 'Submit your logo or brand assets. Our expert pre-press design engineers create a high-resolution 3D digital apparel proof with exact print dimensions, placement coordinates, and Pantone hex matches within 2 hours.',
    duration: '2 Hours Response',
    keyOutputs: [
      '3D 360° Rotatable Proof',
      'Exact Pantone Solid Coated Match',
      'Print Position & Dimension Audit',
      'Free Digital Revisions'
    ],
    iconName: 'FileCheck'
  },
  {
    stepNumber: '02',
    title: 'Premium Fabric & Yarn Selection',
    tagline: 'OEKO-TEX Certified Raw Materials',
    description: 'We source 100% long-staple combed cotton, organic Supima, and recycled eco-blend yarns. Every batch undergoes GSM weight verification and pre-shrunk bio-wash treatment prior to printing.',
    duration: 'Automated QC Test',
    keyOutputs: [
      'Verified GSM Fabric Density',
      'Bio-Wash Zero-Lint Surface',
      'Anti-Pilling & Shape Retention',
      'Eco-Friendly Dye Verification'
    ],
    iconName: 'Scissors'
  },
  {
    stepNumber: '03',
    title: 'Ultra-HD Precision Printing & Stitching',
    tagline: 'Japanese M&R & Tajima Automated Machinery',
    description: 'Utilizing state-of-the-art M&R automatic screen printing presses, Kornit DTG printers, and 15-needle Tajima embroidery machines. High ink density, crisp edge reproduction, and zero tactile rubbery feel.',
    duration: 'High-Speed Automated Production',
    keyOutputs: [
      'Micro-Precision Ink Layering',
      'Tajima 1,000 SPM Embroidery',
      'Phthalate-Free Eco Inks',
      '3D Puff & Specialty Effects'
    ],
    iconName: 'Printer'
  },
  {
    stepNumber: '04',
    title: 'Curing, Heat Tunnel & Quality Audit',
    tagline: 'Rigorous 100-Point Wash & Stretch Test',
    description: 'Printed apparel passes through infrared gas quartz heat tunnels to cure ink at precise 160°C temperatures. Random batch samples undergo 50+ wash and stress tests before final folding.',
    duration: '100% Defect-Free Guarantee',
    keyOutputs: [
      '160°C Infrared Polymerization',
      '50+ Machine Wash Durability Test',
      'Thread Tension & Stitch Inspection',
      'Custom Woven Neck Tag Attachment'
    ],
    iconName: 'Flame'
  },
  {
    stepNumber: '05',
    title: 'Eco Packaging & Express Global Shipping',
    tagline: 'Individual Poly-Bagging & Real-Time Tracking',
    description: 'Garments are individually folded, size-tagged, and packed into biodegradable starch poly-bags or custom branded corporate gift boxes. Shipped via express air freight with guaranteed 48hr delivery options.',
    duration: '48hr Express Delivery Option',
    keyOutputs: [
      'Individual Biodegradable Polybagging',
      'Size Sorting & Box Labeling',
      'Live GPS Tracking Dashboard',
      'Dedicated Account Manager Support'
    ],
    iconName: 'Truck'
  }
];
