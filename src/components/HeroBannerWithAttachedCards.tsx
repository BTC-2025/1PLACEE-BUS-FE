"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_WIDE_BANNERS } from "../data/heroCarouselData";

export const HeroBannerWithAttachedCards: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = HERO_WIDE_BANNERS.length;
  const [isHovered, setIsHovered] = useState(false);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide every 4.5 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) {
      if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
      return;
    }

    autoSlideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 4500);

    return () => {
      if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
    };
  }, [isHovered, totalSlides]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="relative w-full select-none overflow-hidden bg-white shadow-xs"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ========================================================================= */}
      {/* Sliding Track for Second & Third Image Banners */}
      {/* ========================================================================= */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out w-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {HERO_WIDE_BANNERS.map((banner, idx) => (
            <div
              key={banner.id}
              className="w-full shrink-0 relative flex items-center justify-center cursor-pointer"
              style={{ backgroundColor: banner.bgFallback }}
            >
              <Link href={banner.href} className="block w-full h-auto">
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="w-full h-auto max-h-[380px] sm:max-h-[420px] md:max-h-[460px] object-cover sm:object-contain object-center block mx-auto transition-transform duration-500"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg transition-all z-20 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs border border-slate-100"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg transition-all z-20 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs border border-slate-100"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Carousel Dots Pagination Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {HERO_WIDE_BANNERS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx ? "w-8 bg-slate-800" : "w-2 bg-slate-800/30 hover:bg-slate-800/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
