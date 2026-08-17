export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  companyLogoText: string;
  avatar: string;
  content: string;
  rating: number;
  orderVolume: string;
  apparelType: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Orders & MOQ' | 'Printing & Quality' | 'Shipping & Turnaround' | 'Samples & Design' | 'Corporate Accounts';
}
