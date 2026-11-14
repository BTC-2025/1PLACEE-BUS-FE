"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_BANNER_SLIDES } from "../data/heroCarouselData";

export const HeroBannerWithAttachedCards: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const totalBanners = HERO_BANNER_SLIDES.length;
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

  const banner = HERO_BANNER_SLIDES[currentBanner] || HERO_BANNER_SLIDES[0];

  return (
    <section className="relative w-full select-none overflow-hidden pb-4">
      {/* ========================================================================= */}
      {/* TOP HERO BANNER CAROUSEL (Full Width) */}
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
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
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
    </section>
  );
};
