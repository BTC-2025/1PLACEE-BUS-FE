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

  // Auto-slide banner every 5.5 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) {
      if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
      return;
    }

    autoSlideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5500);

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
      className="relative w-full select-none overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ========================================================================= */}
      {/* 1. HERO BANNER BACKGROUND CAROUSEL CONTAINER */}
      {/* ========================================================================= */}
      <div className="relative w-full min-h-[500px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[660px] flex flex-col justify-between overflow-hidden">
        {/* Sliding Background Images */}
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out w-full h-full z-0"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {HERO_WIDE_BANNERS.map((banner, idx) => (
            <div
              key={banner.id}
              className="w-full h-full shrink-0 relative flex items-start justify-center cursor-pointer"
              style={{ backgroundColor: banner.bgFallback }}
            >
              <Link href={banner.href} className="block w-full h-auto">
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="w-full h-[280px] sm:h-[350px] md:h-[420px] object-cover sm:object-contain object-top block mx-auto"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Banner Left Arrow Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-4 top-1/4 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg transition-all z-30 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs border border-slate-100"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Banner Right Arrow Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-4 top-1/4 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg transition-all z-30 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs border border-slate-100"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Carousel Dots Pagination (Top-right subtle pill) */}
        <div className="absolute top-3 right-6 flex items-center gap-1.5 z-30 bg-black/20 px-2.5 py-1 rounded-full backdrop-blur-xs">
          {HERO_WIDE_BANNERS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Empty Spacer pushing cards to sit directly inside bottom */}
        <div className="flex-1 w-full" />

        {/* ========================================================================= */}
        {/* 2. THE 4 CARDS DIRECTLY INSIDE HERO BANNER BOTTOM (Truly Attached) */}
        {/* ========================================================================= */}
        <div className="relative w-full max-w-[1530px] mx-auto px-3 sm:px-6 pb-6 z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4.5">
            {/* ---------------- CARD 1: Top discounts for you ---------------- */}
            <div className="bg-white rounded-xl p-3.5 sm:p-4 shadow-xl hover:shadow-2xl transition-all duration-200 flex flex-col justify-between cursor-pointer border border-white/90 group min-h-[285px]">
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-[15px] mb-2 group-hover:text-[#1559ac] transition-colors">
                  Top discounts for you
                </h3>

                {/* 2 Workstation Towers Side by Side */}
                <div className="grid grid-cols-2 gap-2 h-28 sm:h-30 w-full mb-2">
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

                <p className="text-[11px] sm:text-[11.5px] text-slate-500 line-clamp-1">
                  High-spec refurbished and wholesale workstations
                </p>
              </div>

              <div className="pt-2 mt-2 border-t border-slate-100">
                <Link
                  href="/products?cat=workstations"
                  className="text-xs font-bold text-[#007185] hover:text-[#c7511f] transition-colors"
                >
                  See more
                </Link>
              </div>
            </div>

            {/* ---------------- CARD 2: Business Essentials ---------------- */}
            <div className="bg-white rounded-xl p-3.5 sm:p-4 shadow-xl hover:shadow-2xl transition-all duration-200 flex flex-col justify-between cursor-pointer border border-white/90 group min-h-[285px]">
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-[15px] mb-2 group-hover:text-[#1559ac] transition-colors">
                  Business Essentials
                </h3>

                {/* Orange Circular Badge matching Image */}
                <div className="h-28 sm:h-30 w-full rounded-lg bg-slate-50 flex items-center justify-center mb-2 p-2 border border-slate-100/80">
                  <div className="flex items-center gap-2.5 w-full">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ff9900] to-[#e67a00] flex flex-col items-center justify-center text-white text-center shadow-md shrink-0 p-1 group-hover:scale-105 transition duration-300">
                      <span className="font-extrabold text-[10px] leading-tight">Business</span>
                      <span className="font-medium text-[8px] leading-tight">Essentials</span>
                    </div>
                    <p className="text-[11.5px] text-slate-700 font-medium leading-tight">
                      Get everything you need for your business!
                    </p>
                  </div>
                </div>

                <p className="text-[11px] sm:text-[11.5px] text-slate-500 line-clamp-1">
                  Office supplies, pantry, stationery & daily utilities
                </p>
              </div>

              <div className="pt-2 mt-2 border-t border-slate-100">
                <Link
                  href="/products?cat=essentials"
                  className="text-xs font-bold text-[#007185] hover:text-[#c7511f] transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* ---------------- CARD 3: Get GST* benefits ---------------- */}
            <div className="bg-white rounded-xl p-3.5 sm:p-4 shadow-xl hover:shadow-2xl transition-all duration-200 flex flex-col justify-between cursor-pointer border border-white/90 group min-h-[285px]">
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-[15px] mb-2 group-hover:text-[#1559ac] transition-colors">
                  Get GST* benefits
                </h3>

                {/* Circular Fresh Groceries with GST badge matching Image */}
                <div className="h-28 sm:h-30 w-full rounded-lg bg-amber-50/50 flex items-center justify-center mb-2 p-2 border border-amber-100/60">
                  <div className="flex items-center gap-2.5 w-full">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-white shadow-md border-2 border-amber-400 shrink-0 relative group-hover:scale-105 transition duration-300">
                      <img
                        src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=200&q=80"
                        alt="GST Fresh"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-0 inset-x-0 bg-red-600 text-white font-black text-[7.5px] text-center py-0.5">
                        % OFF
                      </span>
                    </div>
                    <p className="text-[11.5px] text-slate-700 font-medium leading-tight">
                      Save up to 18% with GST* invoice now on Groceries + Guaranteed cashback*
                    </p>
                  </div>
                </div>

                <p className="text-[11px] sm:text-[11.5px] text-slate-500 line-clamp-1">
                  Verified GST tax invoice with full ITC claim
                </p>
              </div>

              <div className="pt-2 mt-2 border-t border-slate-100">
                <Link
                  href="/b2c-gst"
                  className="text-xs font-bold text-[#007185] hover:text-[#c7511f] transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* ---------------- CARD 4: Computers & Accessories ---------------- */}
            <div className="bg-white rounded-xl p-3.5 sm:p-4 shadow-xl hover:shadow-2xl transition-all duration-200 flex flex-col justify-between cursor-pointer border border-white/90 group min-h-[285px]">
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-[15px] mb-2 group-hover:text-[#1559ac] transition-colors">
                  Computers & Accessories
                </h3>

                {/* Circular Screen Display matching Image */}
                <div className="h-28 sm:h-30 w-full rounded-lg bg-sky-50/50 flex items-center justify-center mb-2 p-2 border border-sky-100/60">
                  <div className="flex items-center gap-2.5 w-full">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-900 shadow-md border-2 border-sky-400 shrink-0 group-hover:scale-105 transition duration-300">
                      <img
                        src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=200&q=80"
                        alt="Computers & Laptops"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[11.5px] text-slate-700 font-medium leading-relaxed">
                      Get never before offers on Laptops, Tablets, Monitors & more.
                    </p>
                  </div>
                </div>

                <p className="text-[11px] sm:text-[11.5px] text-slate-500 line-clamp-1">
                  Top brands with commercial manufacturer warranty
                </p>
              </div>

              <div className="pt-2 mt-2 border-t border-slate-100">
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
    </div>
  );
};
