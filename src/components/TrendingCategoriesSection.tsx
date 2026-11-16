"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { TRENDING_CATEGORIES_DATA } from "../data/trendingCategoriesData";

export const TrendingCategoriesSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth"
      });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <section className="w-full mt-6 select-none">
      {/* Outer White Rounded Container matching User's Uploaded Image */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs relative">
        {/* Header Title */}
        <div className="mb-4 px-1 flex items-center justify-between">
          <h3 className="font-extrabold text-[#003366] text-base sm:text-lg tracking-tight">
            Trending Categories
          </h3>
        </div>

        {/* Carousel / Cards Track */}
        <div className="relative group">
          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex items-stretch gap-3 sm:gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {TRENDING_CATEGORIES_DATA.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="w-[180px] sm:w-[195px] md:w-[210px] shrink-0 bg-white rounded-xl border border-slate-200/80 hover:border-[#1559ac]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group/card cursor-pointer min-h-[175px]"
              >
                {/* Clean Photo Square Area */}
                <div className="w-full h-[125px] flex items-center justify-center p-3 bg-white">
                  <img
                    src={item.thumbImage}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain group-hover/card:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Category Label at Bottom with Thin Border matching Image */}
                <div className="px-3 py-2.5 border-t border-slate-100 bg-white">
                  <span className="text-[12px] sm:text-[12.5px] font-medium text-slate-800 group-hover/card:text-[#1559ac] line-clamp-1 leading-tight transition-colors block">
                    {item.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Left Arrow Button (Always clearly visible on left edge) */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Previous Categories"
            className="absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white hover:bg-slate-50 text-[#003366] flex items-center justify-center shadow-xl transition-all z-30 hover:scale-110 active:scale-95 cursor-pointer border border-slate-200"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Right Arrow Button (Always clearly visible on right edge) */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Next Categories"
            className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white hover:bg-slate-50 text-[#003366] flex items-center justify-center shadow-xl transition-all z-30 hover:scale-110 active:scale-95 cursor-pointer border border-slate-200"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
};

