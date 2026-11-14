"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { CATEGORY_CAROUSEL_SLIDES } from "../data/categoryCarouselData";

interface CategoriesCarouselMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CategoriesCarouselMegaMenu: React.FC<CategoriesCarouselMegaMenuProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = CATEGORY_CAROUSEL_SLIDES.length;

  if (!isOpen) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const activeCards = CATEGORY_CAROUSEL_SLIDES[currentSlide] || [];

  return (
    <div
      className="absolute left-0 right-0 top-[100%] w-full bg-slate-900/40 backdrop-blur-xs z-50 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Outer Blue Gradient Container matching uploaded image */}
      <div
        className="w-full bg-gradient-to-r from-[#4b58e7] via-[#5b68f5] to-[#4b58e7] px-4 sm:px-8 py-5 shadow-2xl relative select-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-7xl mx-auto relative">
          {/* Header Row: Title & Close Button */}
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/20">
            <div className="flex items-center gap-3">
              <span className="text-white font-black text-sm sm:text-base tracking-wide uppercase">
                Explore Wholesale Categories
              </span>
              <span className="bg-white/20 text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                Slide {currentSlide + 1} of {totalSlides} (15 Categories / Slide)
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition cursor-pointer"
              aria-label="Close categories"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Carousel Slide Area: 3 Rows x 5 Columns = 15 Cards */}
          <div className="relative py-2">
            {/* Left Slide Arrow */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg transition-all z-20 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* Grid of 15 Cards: 5 cols on lg, 3 cols on md, 2 cols on mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 transition-all duration-300">
              {activeCards.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  className="bg-white rounded-xl p-3 sm:p-4 flex flex-col items-center justify-between text-center shadow-xs hover:shadow-md hover:scale-[1.02] transition-all duration-150 group min-h-[96px] sm:min-h-[105px] border border-white/80"
                >
                  {/* Small round / clean item photo */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mb-2 flex items-center justify-center overflow-hidden rounded-full bg-slate-50 group-hover:ring-2 group-hover:ring-[#4b58e7]/30 transition shrink-0">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Title */}
                  <span className="text-[12px] sm:text-[13px] font-bold text-slate-900 group-hover:text-[#4b58e7] leading-tight line-clamp-2 transition-colors">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Right Slide Arrow */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Slide"
              className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg transition-all z-20 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>

          {/* Carousel Dots Pagination Indicator */}
          <div className="flex items-center justify-center gap-2 pt-3">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                  currentSlide === idx ? "w-7 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
