"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const [isHovered, setIsHovered] = useState(false);
  const totalSlides = CATEGORY_CAROUSEL_SLIDES.length;
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const goToPrev = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const goToNext = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  // Automatic Slide every 4 seconds (pauses on mouse hover)
  useEffect(() => {
    if (!isOpen || isHovered) {
      if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
      return;
    }

    autoSlideTimerRef.current = setInterval(() => {
      goToNext();
    }, 4000);

    return () => {
      if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
    };
  }, [isOpen, isHovered, goToNext]);

  if (!isOpen) return null;

  return (
    <div
      className="absolute left-0 right-0 top-[100%] w-full bg-black/40 backdrop-blur-xs z-50 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Outer Container with Pure Solid White Background matching user requirement */}
      <div
        className="w-full bg-white border-b border-t border-slate-200 px-4 sm:px-10 py-5 shadow-2xl relative select-none"
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-w-[1530px] mx-auto relative">
          {/* Header Row: Title & Slide indicator in Dark Slate Theme */}
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <span className="text-slate-900 font-extrabold text-sm sm:text-base tracking-wide uppercase">
                Explore Wholesale Categories
              </span>
              <span className="bg-[#eef2ff] text-[#1559ac] text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-blue-100">
                Slide {currentSlide + 1} of {totalSlides} (45 Categories in 3 Slides)
              </span>
            </div>
            <span className="text-slate-400 text-[11px] font-medium hidden sm:inline">
              {isHovered ? "Auto-slide paused (Hovering)" : "Auto-sliding active"}
            </span>
          </div>

          {/* Carousel Slide Area: Multi-slide Track with Smooth Transition */}
          <div className="relative py-1 px-8 sm:px-12 overflow-hidden">
            {/* Sliding Track containing all 3 slides (15 cards per slide) */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {CATEGORY_CAROUSEL_SLIDES.map((slideCards, slideIdx) => (
                <div
                  key={slideIdx}
                  className="w-full shrink-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 px-1"
                >
                  {slideCards.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={onClose}
                      className="bg-white hover:bg-slate-50/90 rounded-xl p-3 sm:p-3.5 flex flex-col items-center justify-between text-center shadow-xs hover:shadow-md hover:scale-[1.02] transition-all duration-150 group min-h-[100px] sm:min-h-[110px] border border-slate-200/90"
                    >
                      {/* Photo container */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 mb-2 flex items-center justify-center overflow-hidden rounded-full bg-slate-100 group-hover:ring-2 group-hover:ring-[#1559ac]/30 transition shrink-0 border border-slate-100">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-300"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=200&q=80";
                          }}
                        />
                      </div>

                      {/* Card Title */}
                      <span className="text-[12px] sm:text-[12.5px] font-bold text-slate-800 group-hover:text-[#1559ac] leading-tight line-clamp-2 transition-colors">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            {/* Left Slide Arrow */}
            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous Slide"
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-slate-100 text-slate-800 flex items-center justify-center shadow-xl transition-all z-30 hover:scale-110 active:scale-95 cursor-pointer border border-slate-300"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.8] text-slate-800" />
            </button>

            {/* Right Slide Arrow */}
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next Slide"
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-slate-100 text-slate-800 flex items-center justify-center shadow-xl transition-all z-30 hover:scale-110 active:scale-95 cursor-pointer border border-slate-300"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.8] text-slate-800" />
            </button>
          </div>

          {/* Carousel Dots Pagination Indicator */}
          <div className="flex items-center justify-center gap-2 pt-3">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx ? "w-8 bg-[#1559ac]" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
