"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import React, { useRef, useEffect } from "react";

interface CardData {
  id: number | string;
  image: string;
  alt?: string;
}

interface StickyCard002Props {
  cards: CardData[];
  className?: string;
  containerClassName?: string;
  imageClassName?: string;
}

export const StickyCard002: React.FC<StickyCard002Props> = ({
  cards,
  className = "",
  containerClassName = "",
  imageClassName = "",
}) => {
  const container = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const imageElements = imageRefs.current.filter(Boolean);
      const totalCards = imageElements.length;

      if (!imageElements[0] || totalCards === 0) return;

      gsap.set(imageElements[0], { y: "0%", scale: 1, rotation: 0 });

      for (let i = 1; i < totalCards; i++) {
        if (!imageElements[i]) continue;
        gsap.set(imageElements[i], { y: "100%", scale: 1, rotation: 0 });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: `+=${window.innerHeight * (totalCards - 1)}`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const currentImage = imageElements[i];
        const nextImage = imageElements[i + 1];
        const position = i;
        if (!currentImage || !nextImage) continue;

        scrollTimeline.to(
          currentImage,
          {
            scale: 0.85,
            rotation: 2,
            duration: 1,
            ease: "power2.inOut",
          },
          position,
        );

        scrollTimeline.to(
          nextImage,
          {
            y: "0%",
            duration: 1,
            ease: "power2.inOut",
          },
          position,
        );
      }

      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });

      if (container.current) {
        resizeObserver.observe(container.current);
      }

      return () => {
        resizeObserver.disconnect();
        scrollTimeline.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container },
  );

  return (
    <div className={`relative h-full w-full ${className}`} ref={container}>
      <div className="sticky-cards relative flex h-full w-full items-center justify-center overflow-hidden p-3 lg:p-8">
        <div
          className={`relative h-[90%] w-full max-w-sm overflow-hidden rounded-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl ${containerClassName}`}
        >
          {cards.map((card, i) => (
            <img
              key={card.id}
              src={card.image}
              alt={card.alt || ""}
              className={`rounded-4xl absolute h-full w-full object-cover ${imageClassName}`}
              ref={(el) => {
                imageRefs.current[i] = el;
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Skiper17: React.FC = () => {
  const defaultCards = [
    { id: 1, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800" },
    { id: 2, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800" },
    { id: 3, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800" },
    { id: 4, image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800" },
  ];

  return (
    <ReactLenis root>
      <div className="h-full w-full">
        <StickyCard002 cards={defaultCards} />
      </div>
    </ReactLenis>
  );
};
