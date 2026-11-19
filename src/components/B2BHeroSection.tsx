"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Globe2,
  TrendingUp,
  ShieldCheck,
  Headset,
} from "lucide-react";
import {
  B2B_HERO_SLIDES,
  B2B_VALUE_ADDS
} from "../data/b2bHeroSectionData";
import { B2BBestSellersRow } from "./B2BBestSellersRow";
import { TrendingCategoriesSection } from "./TrendingCategoriesSection";
import { ScientificInstrumentsSection } from "./ScientificInstrumentsSection";
import { ApparelFashionSection } from "./ApparelFashionSection";
import { PremiumBrandsSection } from "./PremiumBrandsSection";
import { ConsumerElectronicsSection } from "./ConsumerElectronicsSection";
import { FoodBeverageSection } from "./FoodBeverageSection";
import { FindSuppliersByRegionSection } from "./FindSuppliersByRegionSection";
import { CosmeticsPersonalCareSection } from "./CosmeticsPersonalCareSection";
import { PharmaceuticalHealthcareSection } from "./PharmaceuticalHealthcareSection";
import { IndustrialMachinerySection } from "./IndustrialMachinerySection";
import { TrendingProductsLocationSection } from "./TrendingProductsLocationSection";
import { UserInterestProductsSection } from "./UserInterestProductsSection";

export const B2BHeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalSlides = B2B_HERO_SLIDES.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto slide every 5 seconds
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
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
    <section className="w-full bg-[#f4f7f9] py-3.5 sm:py-5 select-none">
      <div className="max-w-[1530px] mx-auto px-3 sm:px-6">
        {/* ========================================================================= */}
        {/* 2-COLUMN MAIN HERO LAYOUT (Medium-Height Carousel Left + 4 Cards Right) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 items-stretch">
          
          {/* ---------------- 1. LEFT SIDE: MEDIUM-HEIGHT CAROUSEL BANNER (8 Cols) ---------------- */}
          <div
            className="lg:col-span-8 relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-md bg-white h-[260px] sm:h-[300px] md:h-[320px] flex flex-col group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Sliding Container */}
            <div
              className="flex transition-transform duration-700 ease-in-out h-full w-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {B2B_HERO_SLIDES.map((slide, idx) => (
                <div
                  key={slide.id}
                  className="w-full shrink-0 h-full relative overflow-hidden cursor-pointer"
                  style={{ backgroundColor: slide.bgColor }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center"
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                  {/* Interactive click link */}
                  <Link href={slide.href} className="absolute inset-0 z-10" />
                </div>
              ))}
            </div>

            {/* Slider Navigation Arrows */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/85 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg transition-all z-20 hover:scale-110 active:scale-95 cursor-pointer border border-slate-200"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/85 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg transition-all z-20 hover:scale-110 active:scale-95 cursor-pointer border border-slate-200"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Carousel Dots Pagination */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-black/20 backdrop-blur-xs px-2.5 py-1 rounded-full">
              {B2B_HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx ? "w-6 bg-white shadow-xs" : "w-2 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ---------------- 2. RIGHT SIDE: FOUR 2x2 FEATURE CARDS (4 Cols) ---------------- */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 h-auto lg:h-[260px] sm:lg:h-[300px] md:lg:h-[320px]">
            
            {/* Card 1: Global Reach (Blue) */}
            <Link
              href="/sell"
              style={{
                background: "linear-gradient(135deg, #1d72fe 0%, #1754cf 100%)",
                color: "#ffffff"
              }}
              className="rounded-2xl p-4 text-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-center group cursor-pointer relative overflow-hidden hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 relative z-10">
                <div
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.22)" }}
                  className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center border border-white/20 group-hover:scale-105 transition-transform"
                >
                  <Globe2 className="w-6 h-6 text-white stroke-[2.2]" />
                </div>
                <div className="space-y-1">
                  <h4 style={{ color: "#ffffff" }} className="text-base sm:text-[17px] font-black tracking-tight leading-tight">
                    Global Reach
                  </h4>
                  <p style={{ color: "rgba(255, 255, 255, 0.88)" }} className="text-xs font-medium leading-snug">
                    Connect with buyers from 170+ countries
                  </p>
                </div>
              </div>
              {/* Subtle background curved ring */}
              <div
                style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full pointer-events-none"
              />
            </Link>

            {/* Card 2: Grow Your Business (Orange) */}
            <Link
              href="/sell"
              style={{
                background: "linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%)",
                color: "#ffffff"
              }}
              className="rounded-2xl p-4 text-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-center group cursor-pointer relative overflow-hidden hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 relative z-10">
                <div
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.22)" }}
                  className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center border border-white/20 group-hover:scale-105 transition-transform"
                >
                  <TrendingUp className="w-6 h-6 text-white stroke-[2.2]" />
                </div>
                <div className="space-y-1">
                  <h4 style={{ color: "#ffffff" }} className="text-base sm:text-[17px] font-black tracking-tight leading-tight">
                    Grow Your Business
                  </h4>
                  <p style={{ color: "rgba(255, 255, 255, 0.88)" }} className="text-xs font-medium leading-snug">
                    Increase visibility and boost global sales
                  </p>
                </div>
              </div>
              <div
                style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full pointer-events-none"
              />
            </Link>

            {/* Card 3: Verified Members (Green) */}
            <Link
              href="/rfq"
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)",
                color: "#ffffff"
              }}
              className="rounded-2xl p-4 text-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-center group cursor-pointer relative overflow-hidden hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 relative z-10">
                <div
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.22)" }}
                  className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center border border-white/20 group-hover:scale-105 transition-transform"
                >
                  <ShieldCheck className="w-6 h-6 text-white stroke-[2.2]" />
                </div>
                <div className="space-y-1">
                  <h4 style={{ color: "#ffffff" }} className="text-base sm:text-[17px] font-black tracking-tight leading-tight">
                    Verified Members
                  </h4>
                  <p style={{ color: "rgba(255, 255, 255, 0.88)" }} className="text-xs font-medium leading-snug">
                    Trusted &amp; verified exporters and buyers
                  </p>
                </div>
              </div>
              <div
                style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full pointer-events-none"
              />
            </Link>

            {/* Card 4: Expert Support (Purple) */}
            <Link
              href="/messages"
              style={{
                background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #6d28d9 100%)",
                color: "#ffffff"
              }}
              className="rounded-2xl p-4 text-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-center group cursor-pointer relative overflow-hidden hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 relative z-10">
                <div
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.22)" }}
                  className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center border border-white/20 group-hover:scale-105 transition-transform"
                >
                  <Headset className="w-6 h-6 text-white stroke-[2.2]" />
                </div>
                <div className="space-y-1">
                  <h4 style={{ color: "#ffffff" }} className="text-base sm:text-[17px] font-black tracking-tight leading-tight">
                    Expert Support
                  </h4>
                  <p style={{ color: "rgba(255, 255, 255, 0.88)" }} className="text-xs font-medium leading-snug">
                    24/7 assistance for your export journey
                  </p>
                </div>
              </div>
              <div
                style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full pointer-events-none"
              />
            </Link>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 1. TRENDING PRODUCT CATEGORIES (2 Rows x 7 Cards)                          */}
        {/* ========================================================================= */}
        <TrendingCategoriesSection />

        {/* ========================================================================= */}
        {/* 2. SCIENTIFIC & LABORATORY INSTRUMENTS (Image 1 based)                     */}
        {/* ========================================================================= */}
        <ScientificInstrumentsSection />

        {/* ========================================================================= */}
        {/* 3. APPAREL & FASHION ACCESSORIES SUPPLIERS (Image 2 based)                 */}
        {/* ========================================================================= */}
        <ApparelFashionSection />

        {/* ========================================================================= */}
        {/* 4. PREMIUM BRANDS ON EXPORTERSINDIA (Image 3 based)                        */}
        {/* ========================================================================= */}
        <PremiumBrandsSection />

        {/* ========================================================================= */}
        {/* 5. CONSUMER ELECTRONICS & HOUSEHOLD APPLIANCES (Image 4 based)             */}
        {/* ========================================================================= */}
        <ConsumerElectronicsSection />

        {/* ========================================================================= */}
        {/* 6. FOOD & BEVERAGE PRODUCTS SUPPLIERS (Image 5 based)                      */}
        {/* ========================================================================= */}
        <FoodBeverageSection />

        {/* ========================================================================= */}
        {/* 7. FIND SUPPLIERS BY REGION (Cities / Regions based on Image 1)             */}
        {/* ========================================================================= */}
        <FindSuppliersByRegionSection />

        {/* ========================================================================= */}
        {/* 8. COSMETICS & PERSONAL CARE PRODUCTS (First Image based)                   */}
        {/* ========================================================================= */}
        <CosmeticsPersonalCareSection />

        {/* ========================================================================= */}
        {/* 9. PHARMACEUTICAL & HEALTHCARE PRODUCTS (Second Image based)                */}
        {/* ========================================================================= */}
        <PharmaceuticalHealthcareSection />

        {/* ========================================================================= */}
        {/* 10. INDUSTRIAL MACHINERY & PLANT EQUIPMENT (Third Image based)              */}
        {/* ========================================================================= */}
        <IndustrialMachinerySection />

        {/* ========================================================================= */}
        {/* 11. TRENDING PRODUCTS IN YOUR LOCATION (8 Cols x 3 Rows = 24 Real Cards)    */}
        {/* ========================================================================= */}
        <TrendingProductsLocationSection />

        {/* ========================================================================= */}
        {/* 12. USER RECENT INTEREST & TRENDING RECOMMENDATIONS (Hybrid Images 1 & 2)   */}
        {/* ========================================================================= */}
        <UserInterestProductsSection />
      </div>
    </section>
  );
};
