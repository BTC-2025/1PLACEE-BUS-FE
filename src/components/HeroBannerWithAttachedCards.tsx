"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { REAL_BANNER_SLIDES, REAL_ATTACHED_CARDS } from "../data/heroCarouselData";

export const HeroBannerWithAttachedCards: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = REAL_BANNER_SLIDES.length;
  const cardsScrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide top banner every 5.5s (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(timer);
  }, [isHovered, totalSlides]);

  const prevBanner = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextBanner = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const scrollCards = (direction: "left" | "right") => {
    if (cardsScrollRef.current) {
      const scrollAmt = direction === "left" ? -320 : 320;
      cardsScrollRef.current.scrollBy({ left: scrollAmt, behavior: "smooth" });
    }
  };

  const slide = REAL_BANNER_SLIDES[currentSlide] || REAL_BANNER_SLIDES[0];

  return (
    <div
      className="relative w-full select-none overflow-hidden bg-[#eaeded] pb-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ========================================================================= */}
      {/* 1. TOP HERO BANNER (Full Image Real Carousel matching user image) */}
      {/* ========================================================================= */}
      <div className="relative w-full overflow-hidden">
        {/* Banner Container with natural responsive aspect ratio */}
        <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px]">
          <Link href={slide.href} className="block w-full h-full relative cursor-pointer">
            <img
              src={slide.bannerImg}
              alt={slide.categoryTitle}
              className="w-full h-full object-cover object-top transition-all duration-700"
            />
            {/* Seamless Soft Fade into Background at Bottom */}
            <div className="absolute inset-x-0 bottom-0 h-44 sm:h-52 bg-gradient-to-t from-[#eaeded] via-[#eaeded]/70 to-transparent pointer-events-none" />
          </Link>

          {/* Banner Left Arrow */}
          <button
            type="button"
            onClick={prevBanner}
            aria-label="Previous Banner"
            className="absolute left-2 sm:left-4 top-1/3 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/75 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg transition-all z-20 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.8]" />
          </button>

          {/* Banner Right Arrow */}
          <button
            type="button"
            onClick={nextBanner}
            aria-label="Next Banner"
            className="absolute right-2 sm:right-4 top-1/3 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/75 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg transition-all z-20 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.8]" />
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. REAL ATTACHED 4-CARD SLIDE CAROUSEL (Real DOM Cards matching user image) */}
      {/* ========================================================================= */}
      <div className="relative -mt-32 sm:-mt-40 md:-mt-48 lg:-mt-52 max-w-[1530px] mx-auto px-3 sm:px-6 z-30">
        <div className="relative">
          {/* Card Left Arrow */}
          <button
            type="button"
            onClick={() => scrollCards("left")}
            aria-label="Previous Cards"
            className="absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center shadow-xl transition-all z-40 hover:scale-110 active:scale-95 cursor-pointer border border-slate-200"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.8]" />
          </button>

          {/* Attached Cards Track */}
          <div
            ref={cardsScrollRef}
            className="flex items-stretch gap-3.5 sm:gap-4.5 overflow-x-auto scrollbar-none scroll-smooth py-3 px-1"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {/* ---------------- CARD 1: Top discounts for you ---------------- */}
            <div
              className="shrink-0 w-[265px] sm:w-[285px] md:w-[295px] bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-between cursor-pointer border border-slate-100"
              style={{ scrollSnapAlign: "start" }}
            >
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-[17px] mb-3">
                  Top discounts for you
                </h3>

                {/* 2 Towers matching Image 1: Tall RGB PC Tower + Motherboard CPU */}
                <div className="grid grid-cols-2 gap-2 h-36 sm:h-40 w-full mb-3">
                  <div className="h-full w-full rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center p-1 border border-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=300&q=80"
                      alt="Custom Workstation"
                      className="h-full w-full object-cover rounded hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="h-full w-full rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center p-1 border border-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=300&q=80"
                      alt="Processor & RAM"
                      className="h-full w-full object-cover rounded hover:scale-105 transition duration-300"
                    />
                  </div>
                </div>

                <p className="text-[11.5px] text-slate-500 line-clamp-1">
                  High-spec refurbished and wholesale workstations
                </p>
              </div>

              <div className="pt-3 mt-2 border-t border-slate-100">
                <Link href="/products?cat=workstations" className="text-xs font-bold text-[#007185] hover:text-[#c7511f] transition-colors">
                  See more
                </Link>
              </div>
            </div>

            {/* ---------------- CARD 2: Business Essentials ---------------- */}
            <div
              className="shrink-0 w-[265px] sm:w-[285px] md:w-[295px] bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-between cursor-pointer border border-slate-100"
              style={{ scrollSnapAlign: "start" }}
            >
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-[17px] mb-3">
                  Business Essentials
                </h3>

                {/* Orange Circular Badge matching user's Image 1 */}
                <div className="h-36 sm:h-40 w-full rounded-lg bg-slate-50 flex items-center justify-center mb-3 p-3 border border-slate-100/80">
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff9900] to-[#e67a00] flex flex-col items-center justify-center text-white text-center shadow-md shrink-0 p-1">
                      <span className="font-extrabold text-[11px] leading-tight">Business</span>
                      <span className="font-medium text-[9px] leading-tight">Essentials</span>
                    </div>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      Get everything you need for your business!
                    </p>
                  </div>
                </div>

                <p className="text-[11.5px] text-slate-500 line-clamp-1">
                  Daily stationery, pantry & maintenance supplies
                </p>
              </div>

              <div className="pt-3 mt-2 border-t border-slate-100">
                <Link href="/products?cat=essentials" className="text-xs font-bold text-[#007185] hover:text-[#c7511f] transition-colors">
                  Shop Now
                </Link>
              </div>
            </div>

            {/* ---------------- CARD 3: Computers & Accessories ---------------- */}
            <div
              className="shrink-0 w-[265px] sm:w-[285px] md:w-[295px] bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-between cursor-pointer border border-slate-100"
              style={{ scrollSnapAlign: "start" }}
            >
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-[17px] mb-3">
                  Computers & Accessories
                </h3>

                {/* Mac Laptop Image matching user's Image 1 */}
                <div className="h-36 sm:h-40 w-full rounded-lg overflow-hidden bg-slate-900 mb-3 border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80"
                    alt="Computers & Laptops"
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                <p className="text-[11.5px] text-slate-500 line-clamp-2 leading-relaxed">
                  Get never before offers on Laptops, Tablets, Monitors & more.
                </p>
              </div>

              <div className="pt-3 mt-2 border-t border-slate-100">
                <Link href="/products?cat=computers" className="text-xs font-bold text-[#007185] hover:text-[#c7511f] transition-colors">
                  See all deals
                </Link>
              </div>
            </div>

            {/* ---------------- CARD 4: Get GST* benefits ---------------- */}
            <div
              className="shrink-0 w-[265px] sm:w-[285px] md:w-[295px] bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-between cursor-pointer border border-slate-100"
              style={{ scrollSnapAlign: "start" }}
            >
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-[17px] mb-3">
                  Get GST* benefits
                </h3>

                {/* Vegetable/Groceries Shelf matching user's Image 1 */}
                <div className="h-36 sm:h-40 w-full rounded-lg overflow-hidden bg-slate-100 mb-3 border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80"
                    alt="Groceries with GST benefits"
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                <p className="text-[11.5px] text-slate-500 line-clamp-2 leading-relaxed">
                  Save up to 18% with GST* invoice now on Groceries + Guaranteed cashback*
                </p>
              </div>

              <div className="pt-3 mt-2 border-t border-slate-100">
                <Link href="/b2c-gst" className="text-xs font-bold text-[#007185] hover:text-[#c7511f] transition-colors">
                  Shop Now
                </Link>
              </div>
            </div>

            {/* ---------------- CARD 5: Join Prime at ₹99 ---------------- */}
            <div
              className="shrink-0 w-[265px] sm:w-[285px] md:w-[295px] bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-between cursor-pointer border border-slate-100"
              style={{ scrollSnapAlign: "start" }}
            >
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-[17px] mb-3">
                  Join Prime at ₹99
                </h3>

                {/* Blue Prime Circular Badge matching user's Image 1 */}
                <div className="h-36 sm:h-40 w-full rounded-lg bg-sky-50/60 flex items-center justify-center mb-3 p-3 border border-sky-100">
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-16 h-16 rounded-full bg-[#00a8e1] flex items-center justify-center text-white font-black text-xl shadow-md shrink-0">
                      prime
                    </div>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      Prime Exclusive Offers and more at just ₹99 for 3 months!
                    </p>
                  </div>
                </div>

                <p className="text-[11.5px] text-slate-500 line-clamp-1">
                  Free fast delivery, wholesale deals & video streaming
                </p>
              </div>

              <div className="pt-3 mt-2 border-t border-slate-100">
                <Link href="/contracts" className="text-xs font-bold text-[#007185] hover:text-[#c7511f] transition-colors">
                  Join Prime Now
                </Link>
              </div>
            </div>
          </div>

          {/* Card Right Arrow */}
          <button
            type="button"
            onClick={() => scrollCards("right")}
            aria-label="Next Cards"
            className="absolute -right-2 sm:-right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center shadow-xl transition-all z-40 hover:scale-110 active:scale-95 cursor-pointer border border-slate-200"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.8]" />
          </button>
        </div>
      </div>
    </div>
  );
};
