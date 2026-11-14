"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { HERO_BANNER_SLIDES, ATTACHED_CAROUSEL_CARDS } from "../data/heroCarouselData";

export const HeroBannerWithAttachedCards: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const totalBanners = HERO_BANNER_SLIDES.length;
  const cardsScrollRef = useRef<HTMLDivElement>(null);
  const [isBannerHovered, setIsBannerHovered] = useState(false);

  // Auto-slide Hero Banner every 5 seconds (pauses on hover)
  useEffect(() => {
    if (isBannerHovered) return;
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev === totalBanners - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isBannerHovered, totalBanners]);

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev === 0 ? totalBanners - 1 : prev - 1));
  };

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev === totalBanners - 1 ? 0 : prev + 1));
  };

  // Scroll Attached Cards horizontally
  const scrollCards = (direction: "left" | "right") => {
    if (cardsScrollRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      cardsScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const banner = HERO_BANNER_SLIDES[currentBanner] || HERO_BANNER_SLIDES[0];

  return (
    <section className="relative w-full select-none overflow-hidden pb-8">
      {/* ========================================================================= */}
      {/* 1. TOP HERO BANNER CAROUSEL (Full Width Matching Images 1 & 2) */}
      {/* ========================================================================= */}
      <div
        className="relative w-full overflow-hidden transition-all duration-700"
        onMouseEnter={() => setIsBannerHovered(true)}
        onMouseLeave={() => setIsBannerHovered(false)}
      >
        {/* Full Image Banner Container */}
        <div className="relative w-full h-[260px] sm:h-[340px] md:h-[400px] lg:h-[440px] bg-slate-900">
          <Link href={banner.href} className="block w-full h-full relative cursor-pointer group">
            <img
              src={banner.image}
              alt={banner.category}
              className="w-full h-full object-cover object-center transition-all duration-700"
            />
            {/* Subtle Gradient Overlay at bottom for seamless card blending */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/70 to-transparent pointer-events-none" />
          </Link>

          {/* Banner Left Navigation Arrow */}
          <button
            type="button"
            onClick={prevBanner}
            aria-label="Previous Banner"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all z-20 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Banner Right Navigation Arrow */}
          <button
            type="button"
            onClick={nextBanner}
            aria-label="Next Banner"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all z-20 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Banner Dots Pagination */}
          <div className="absolute bottom-28 sm:bottom-32 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
            {HERO_BANNER_SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentBanner(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentBanner === idx ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. ATTACHED CARDS SLIDE CAROUSEL (Overlapping Bottom Half of Banner) */}
      {/* ========================================================================= */}
      <div className="relative -mt-24 sm:-mt-28 md:-mt-32 max-w-[1540px] mx-auto px-3 sm:px-6 z-30">
        <div className="relative group/cards">
          {/* Left Arrow for Cards */}
          <button
            type="button"
            onClick={() => scrollCards("left")}
            aria-label="Scroll Cards Left"
            className="absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center shadow-xl transition-all z-40 hover:scale-110 active:scale-95 cursor-pointer border border-slate-200"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Scrollable Track of 4-5 Attached Cards (Single Slide 4-5 Cards View) */}
          <div
            ref={cardsScrollRef}
            className="flex items-stretch gap-3 sm:gap-4 overflow-x-auto scrollbar-none scroll-smooth py-2 px-1"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {ATTACHED_CAROUSEL_CARDS.map((card) => (
              <div
                key={card.id}
                className="shrink-0 w-[260px] sm:w-[285px] md:w-[290px] bg-white rounded-xl p-4 sm:p-5 shadow-lg hover:shadow-2xl transition-all duration-200 border border-slate-100 flex flex-col justify-between group cursor-pointer"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Card Title & Content */}
                <div>
                  <h3 className="font-black text-slate-900 text-sm sm:text-base leading-snug line-clamp-1 group-hover:text-[#1559ac] transition-colors">
                    {card.title}
                  </h3>

                  {/* Visual Content Section */}
                  <div className="my-3 h-[120px] sm:h-[135px] w-full flex items-center justify-center rounded-lg bg-slate-50 overflow-hidden relative border border-slate-100/80">
                    {/* If Prime card */}
                    {card.id === "prime-membership" ? (
                      <div className="flex flex-col items-center justify-center text-center p-2">
                        <div className="w-16 h-16 rounded-full bg-[#00a8e1] flex items-center justify-center text-white font-black text-xl tracking-tight shadow-md mb-1">
                          prime
                        </div>
                        <span className="text-[11px] font-bold text-slate-600">
                          Prime Exclusive Offers
                        </span>
                      </div>
                    ) : card.id === "business-essentials" ? (
                      /* Business Essentials Orange Emblem */
                      <div className="flex items-center gap-3 px-3">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-black text-[11px] text-center leading-tight shadow-md shrink-0 p-1">
                          Business Essentials
                        </div>
                        <p className="text-[11px] text-slate-600 font-medium leading-tight">
                          Get everything you need for your business!
                        </p>
                      </div>
                    ) : card.images.length === 2 ? (
                      /* Top discounts 2 Computer Towers side by side */
                      <div className="grid grid-cols-2 gap-2 w-full h-full p-2">
                        {card.images.map((img, i) => (
                          <div key={i} className="h-full w-full flex items-center justify-center overflow-hidden rounded bg-white">
                            <img
                              src={img.src}
                              alt={img.alt}
                              className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Single Product Image */
                      <img
                        src={card.images[0]?.src}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        loading="lazy"
                      />
                    )}
                  </div>

                  {/* Subtitle / Description */}
                  <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>

                {/* Call To Action Link */}
                <div className="pt-3 mt-1 border-t border-slate-100">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1559ac] hover:text-[#0c3c78] group/link"
                  >
                    <span>{card.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow for Cards */}
          <button
            type="button"
            onClick={() => scrollCards("right")}
            aria-label="Scroll Cards Right"
            className="absolute -right-2 sm:-right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center shadow-xl transition-all z-40 hover:scale-110 active:scale-95 cursor-pointer border border-slate-200"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
};
