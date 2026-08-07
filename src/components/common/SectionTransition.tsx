import React, { useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface SectionTransitionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  index?: number;
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  children,
  id,
  className = '',
  index = 0
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (shouldReduceMotion) return;

      gsap.registerPlugin(ScrollTrigger);

      const element = sectionRef.current;
      if (!element) return;

      // Subtle GSAP ScrollTrigger reveal with scaling and soft elevation
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 45,
          scale: 0.985,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            end: "top 25%",
            toggleActions: "play none none reverse",
          },
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger === element) t.kill();
        });
      };
    },
    { scope: sectionRef, dependencies: [shouldReduceMotion] }
  );

  return (
    <div
      ref={sectionRef}
      id={id}
      className={`relative w-full will-change-transform transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};
