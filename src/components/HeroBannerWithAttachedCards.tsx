"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_WIDE_BANNERS, OVERLAPPING_CARDS } from "../data/heroCarouselData";

export const HeroBannerWithAttachedCards: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = HERO_WIDE_BANNERS.length;
  const [isHovered, setIsHovered] = useState(false);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide banner every 4.5 seconds (pauses on hover)
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
    <div
      className="relative w-full select-none overflow-hidden bg-[#eaeded] pb-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ========================================================================= */}
      {/* 1. TOP HERO BANNER CAROUSEL (Sliding Track for Images 2 & 3) */}
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

        {/* Soft Gradient Overlay at bottom for seamless card overlapping */}
        <div className="absolute inset-x-0 bottom-0 h-40 sm:h-48 bg-gradient-to-t from-[#eaeded] via-[#eaeded]/60 to-transparent pointer-events-none z-10" />

        {/* Banner Left Arrow Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-4 top-1/3 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg transition-all z-20 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs border border-slate-100"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Banner Right Arrow Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-4 top-1/3 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg transition-all z-20 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs border border-slate-100"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Carousel Dots Pagination */}
        <div className="absolute bottom-28 sm:bottom-36 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {HERO_WIDE_BANNERS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx ? "w-8 bg-slate-800" : "w-2 bg-slate-800/40 hover:bg-slate-800/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. OVERLAPPING 4 CARDS (Prime removed - 4 Cards Grid Matching User Image) */}
      {/* ========================================================================= */}
      <div className="relative -mt-24 sm:-mt-28 md:-mt-32 max-w-[1530px] mx-auto px-3 sm:px-6 z-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4.5">
          {/* ---------------- CARD 1: Top discounts for you ---------------- */}
          <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-between cursor-pointer border border-slate-100/90 group">
            <div>
              <h3 className="font-bold text-slate-900 text-base sm:text-[17px] mb-3 group-hover:text-[#1559ac] transition-colors">
                Top discounts for you
              </h3>

              {/* 2 Workstation Towers Side by Side matching Image */}
              <div className="grid grid-cols-2 gap-2 h-36 sm:h-40 w-full mb-3">
                <div className="h-full w-full rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center p-1 border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=300&q=80"
                    alt="Custom Workstation Tower"
                    className="h-full w-full object-cover rounded group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="h-full w-full rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center p-1 border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=300&q=80"
                    alt="Server Processor Tower"
                    className="h-full w-full object-cover rounded group-hover:scale-105 transition duration-300"
                  />
                </div>
              </div>

              <p className="text-[11.5px] text-slate-500 line-clamp-1">
                High-spec refurbished and wholesale workstations
              </p>
            </div>

            <div className="pt-3 mt-2 border-t border-slate-100">
              <Link
                href="/products?cat=workstations"
                className="text-xs font-bold text-[#007185] hover:text-[#c7511f] transition-colors"
              >
                See more
              </Link>
            </div>
          </div>

          {/* ---------------- CARD 2: Business Essentials ---------------- */}
          <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-between cursor-pointer border border-slate-100/90 group">
            <div>
              <h3 className="font-bold text-slate-900 text-base sm:text-[17px] mb-3 group-hover:text-[#1559ac] transition-colors">
                Business Essentials
              </h3>

              {/* Orange Circular Badge matching Image */}
              <div className="h-36 sm:h-40 w-full rounded-lg bg-slate-50 flex items-center justify-center mb-3 p-3 border border-slate-100/80">
                <div className="flex items-center gap-3 w-full">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff9900] to-[#e67a00] flex flex-col items-center justify-center text-white text-center shadow-md shrink-0 p-1 group-hover:scale-105 transition duration-300">
                    <span className="font-extrabold text-[11px] leading-tight">Business</span>
                    <span className="font-medium text-[9px] leading-tight">Essentials</span>
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Get everything you need for your business!
                  </p>
                </div>
              </div>

              <p className="text-[11.5px] text-slate-500 line-clamp-1">
                Office supplies, pantry, stationery & daily utilities
              </p>
            </div>

            <div className="pt-3 mt-2 border-t border-slate-100">
              <Link
                href="/products?cat=essentials"
                className="text-xs font-bold text-[#007185] hover:text-[#c7511f] transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* ---------------- CARD 3: Get GST* benefits ---------------- */}
          <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-between cursor-pointer border border-slate-100/90 group">
            <div>
              <h3 className="font-bold text-slate-900 text-base sm:text-[17px] mb-3 group-hover:text-[#1559ac] transition-colors">
                Get GST* benefits
              </h3>

              {/* Circular Fresh Groceries with GST badge matching Image */}
              <div className="h-36 sm:h-40 w-full rounded-lg bg-amber-50/50 flex items-center justify-center mb-3 p-3 border border-amber-100/60">
                <div className="flex items-center gap-3 w-full">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-md border-2 border-amber-400 shrink-0 relative group-hover:scale-105 transition duration-300">
                    <img
                      src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=200&q=80"
                      alt="GST Fresh"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-0 inset-x-0 bg-red-600 text-white font-black text-[8px] text-center py-0.5">
                      % OFF
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Save up to 18% with GST* invoice now on Groceries + Guaranteed cashback*
                  </p>
                </div>
              </div>

              <p className="text-[11.5px] text-slate-500 line-clamp-1">
                Verified GST tax invoice with full ITC claim
              </p>
            </div>

            <div className="pt-3 mt-2 border-t border-slate-100">
              <Link
                href="/b2c-gst"
                className="text-xs font-bold text-[#007185] hover:text-[#c7511f] transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* ---------------- CARD 4: Computers & Accessories ---------------- */}
          <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-between cursor-pointer border border-slate-100/90 group">
            <div>
              <h3 className="font-bold text-slate-900 text-base sm:text-[17px] mb-3 group-hover:text-[#1559ac] transition-colors">
                Computers & Accessories
              </h3>

              {/* Circular Screen Display matching Image */}
              <div className="h-36 sm:h-40 w-full rounded-lg bg-sky-50/50 flex items-center justify-center mb-3 p-3 border border-sky-100/60">
                <div className="flex items-center gap-3 w-full">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-900 shadow-md border-2 border-sky-400 shrink-0 group-hover:scale-105 transition duration-300">
                    <img
                      src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=200&q=80"
                      alt="Computers & Laptops"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Get never before offers on Laptops, Tablets, Monitors & more.
                  </p>
                </div>
              </div>

              <p className="text-[11.5px] text-slate-500 line-clamp-1">
                Top brands with commercial manufacturer warranty
              </p>
            </div>

            <div className="pt-3 mt-2 border-t border-slate-100">
              <Link
                href="/products?cat=computers"
                className="text-xs font-bold text-[#007185] hover:text-[#c7511f] transition-colors"
              >
                See all deals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
