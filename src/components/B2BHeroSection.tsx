"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Shirt,
  FlaskConical,
  Cog,
  Building2,
  Laptop,
  HeartPulse,
  Gift,
  Package,
  Wheat,
  Home,
  Layers,
  Factory,
  Wrench,
  CheckCircle2,
  Store,
  ShoppingBag
} from "lucide-react";
import {
  B2B_TOP_CATEGORIES,
  B2B_HERO_SLIDES,
  B2B_VALUE_ADDS
} from "../data/b2bHeroSectionData";

// Dynamic Icon Map for Top Categories
const ICON_MAP: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-3.5 h-3.5" />,
  Shirt: <Shirt className="w-3.5 h-3.5" />,
  FlaskConical: <FlaskConical className="w-3.5 h-3.5" />,
  Cog: <Cog className="w-3.5 h-3.5" />,
  Building2: <Building2 className="w-3.5 h-3.5" />,
  Laptop: <Laptop className="w-3.5 h-3.5" />,
  Cross: <HeartPulse className="w-3.5 h-3.5" />,
  Gift: <Gift className="w-3.5 h-3.5" />,
  Box: <Package className="w-3.5 h-3.5" />,
  Wheat: <Wheat className="w-3.5 h-3.5" />,
  Home: <Home className="w-3.5 h-3.5" />,
  Layers: <Layers className="w-3.5 h-3.5" />,
  Factory: <Factory className="w-3.5 h-3.5" />,
  Wrench: <Wrench className="w-3.5 h-3.5" />
};

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
    <section className="w-full bg-[#f4f7f9] py-4 sm:py-6 select-none">
      <div className="max-w-[1530px] mx-auto px-3 sm:px-6">
        {/* ========================================================================= */}
        {/* 3-COLUMN MAIN HERO LAYOUT (Left Categories + Center Wide Carousel + Right 2 Cards) */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row gap-3.5 sm:gap-4 items-stretch">
          {/* ---------------- 1. LEFT SIDE: TOP CATEGORIES LIST (Compact Width: 230px) ---------------- */}
          <div className="w-full lg:w-[230px] shrink-0 bg-white rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between p-3.5 sm:p-4">
            <div>
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-[15px] mb-2.5 pb-2 border-b border-slate-100 flex items-center justify-between">
                <span>Top Categories</span>
              </h3>

              <ul className="space-y-1">
                {B2B_TOP_CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      href={cat.href}
                      className="flex items-center gap-2.5 px-2 py-1 rounded-md text-[12px] sm:text-[12.5px] font-medium text-slate-600 hover:text-[#1559ac] hover:bg-slate-50 transition-all group"
                    >
                      <span className="text-slate-400 group-hover:text-[#1559ac] group-hover:scale-110 transition-all shrink-0">
                        {ICON_MAP[cat.iconName] || <Cog className="w-3.5 h-3.5" />}
                      </span>
                      <span className="truncate group-hover:translate-x-0.5 transition-transform">
                        {cat.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 mt-2 border-t border-slate-100">
              <Link
                href="/products?cat=all"
                className="text-xs font-bold text-[#e67a00] hover:text-[#c7511f] flex items-center gap-1 transition-colors"
              >
                <span>View all Categories</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* ---------------- 2. CENTER: CAROUSEL HERO BANNER (Expanded Width: flex-1) ---------------- */}
          <div
            className="flex-1 min-w-0 relative rounded-xl overflow-hidden border border-slate-200/90 shadow-md bg-white min-h-[380px] flex flex-col"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Sliding Container */}
            <div
              className="flex transition-transform duration-700 ease-in-out h-full flex-1"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {B2B_HERO_SLIDES.map((slide, idx) => (
                <div
                  key={slide.id}
                  className="w-full shrink-0 h-full relative flex items-center overflow-hidden cursor-pointer"
                  style={{ backgroundColor: slide.bgColor }}
                >
                  {/* If slide has photo, display as background with clean layout */}
                  {slide.image ? (
                    <div className="w-full h-full relative">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover object-left sm:object-center min-h-[380px]"
                        loading={idx === 0 ? "eager" : "lazy"}
                      />
                      {/* Interactive click overlay */}
                      <Link href={slide.href} className="absolute inset-0 z-10" />
                    </div>
                  ) : (
                    /* Fallback Custom Stylized Hero Slide */
                    <div
                      className={`w-full h-full p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-r ${slide.bgGradient} text-white relative z-10`}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-white/80 font-bold text-xs uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-full">
                            {slide.brand}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight mb-3 whitespace-pre-line tracking-tight drop-shadow-xs">
                          {slide.title}
                        </h2>
                        <p className="text-sm sm:text-base text-white/90 max-w-md font-normal leading-relaxed drop-shadow-xs">
                          {slide.subtitle}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-6">
                        <Link
                          href={slide.href}
                          className="px-5 py-2.5 rounded-full border-2 border-white text-white font-bold text-xs sm:text-sm hover:bg-white hover:text-slate-900 transition-all shadow-md active:scale-95 cursor-pointer inline-flex items-center gap-2"
                        >
                          <span>{slide.ctaText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <span className="text-xs font-semibold text-white/70 tracking-wide">
                          {slide.tagline}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Slider Navigation Arrows */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg transition-all z-20 hover:scale-110 active:scale-95 cursor-pointer border border-slate-100"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg transition-all z-20 hover:scale-110 active:scale-95 cursor-pointer border border-slate-100"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Carousel Dots Pagination */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
              {B2B_HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx ? "w-7 bg-white shadow-xs" : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ---------------- 3. RIGHT SIDE: TWO PROMO CARDS (Fixed Compact Width: 260px) ---------------- */}
          <div className="w-full lg:w-[260px] shrink-0 flex flex-col justify-between gap-3.5">
            {/* CARD 1: Looking for a Product -> Post Buy Requirement (Amber/Yellow Gradient) */}
            <div className="rounded-xl border border-amber-200/80 bg-gradient-to-br from-[#fff7e6] via-[#fffaee] to-[#ffeed0] p-4.5 sm:p-5 shadow-xs flex flex-col justify-between flex-1 group hover:shadow-md transition-all">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-xs font-semibold text-slate-600">Looking</span>
                  <h4 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                    for a <span className="text-[#1559ac]">Product</span>
                  </h4>
                </div>
                {/* Shopping Bag Icon with Question Badge */}
                <div className="w-12 h-12 rounded-2xl bg-amber-100/90 border border-amber-300/60 flex items-center justify-center text-amber-700 shadow-xs shrink-0 relative group-hover:scale-105 transition-transform">
                  <ShoppingBag className="w-6 h-6 stroke-[2]" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center">
                    ?
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-amber-200/60">
                <Link
                  href="/rfq"
                  className="w-full block text-center py-2.5 px-3 rounded-lg border border-slate-900/80 bg-transparent hover:bg-slate-900 hover:text-white text-slate-900 text-xs sm:text-[13px] font-bold transition-all shadow-2xs active:scale-95 cursor-pointer"
                >
                  Post Buy <span className="font-extrabold">Requirement</span>
                </Link>
              </div>
            </div>

            {/* CARD 2: Want to grow your business 10x faster -> Sell on 1PLACEE (Red/Coral Gradient) */}
            <div className="rounded-xl border border-red-200/80 bg-gradient-to-br from-[#df4638] via-[#cb3629] to-[#b72c20] p-4.5 sm:p-5 shadow-xs flex flex-col justify-between flex-1 text-white group hover:shadow-md transition-all">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-xs font-medium text-white/80">Want to grow your</span>
                  <h4 className="text-base sm:text-lg font-black leading-tight text-white">
                    business 10x <span className="text-amber-300">faster</span>
                  </h4>
                </div>
                {/* Store Icon with Check Badge */}
                <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white shadow-xs shrink-0 relative group-hover:scale-105 transition-transform">
                  <Store className="w-6 h-6 stroke-[2]" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 text-slate-900 text-[9px] font-black flex items-center justify-center">
                    ✓
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/20">
                <Link
                  href="/sell"
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-white/80 bg-white/10 hover:bg-white hover:text-rose-700 text-white text-xs sm:text-[13px] font-bold transition-all shadow-2xs active:scale-95 cursor-pointer"
                >
                  <span>Sell on 1PLACEE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM VALUE ADDS ROW (Matching Image: More Value Adds + 5 Cards) */}
        {/* ========================================================================= */}
        <div className="mt-6 pt-5 border-t border-slate-200/80">
          <h4 className="font-extrabold text-slate-900 text-sm sm:text-base mb-3 tracking-tight">
            More Value Adds
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5">
            {B2B_VALUE_ADDS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer min-h-[96px]"
              >
                <div>
                  <span className="text-[11px] text-slate-400 font-medium block">
                    {item.subtitle}
                  </span>
                  <h5 className="text-[12.5px] sm:text-[13px] font-bold text-slate-900 group-hover:text-[#1559ac] transition-colors leading-snug mt-0.5 line-clamp-2">
                    {item.title}
                  </h5>
                </div>

                <div className="pt-2 mt-2 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-[#e67a00] group-hover:text-[#c7511f]">
                  <span>{item.ctaText}</span>
                  <span className="w-4 h-4 rounded-full bg-[#e67a00] text-white flex items-center justify-center text-[9px] group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
