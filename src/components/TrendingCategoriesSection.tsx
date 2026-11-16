"use client";

import React, { useRef, useState, useEffect } from "react";
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
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // Scroll by width of 3 cards (~600px) smoothly to show Cast iron Flanged Valves
      const scrollAmount = 600;
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth"
      });
      setTimeout(checkScroll, 400);
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

        {/* Carousel / Cards Track with Outside Arrows */}
        <div className="relative">
          {/* 
            Left Arrow Button:
            Placed cleanly outside the first card at the left edge.
            Visible when user has scrolled to the right, to smoothly slide back to Human Hair.
          */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Previous Slide"
              title="Slide to Human Hair"
              className="absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white hover:bg-slate-50 text-[#003366] flex items-center justify-center shadow-2xl transition-all z-30 hover:scale-110 active:scale-95 cursor-pointer border border-slate-200"
            >
              <ChevronLeft className="w-6 h-6 stroke-[3]" />
            </button>
          )}

          {/* 
            Right Arrow Button:
            Placed on the right edge so clicking it slides the carousel directly 
            to reveal "Silent Diesel Generators" and "Cast Iron Flanged Valves".
          */}
          {canScrollRight && (
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Next Slide"
              title="Slide to Cast Iron Flanged Valves"
              className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white hover:bg-slate-50 text-[#003366] flex items-center justify-center shadow-2xl transition-all z-30 hover:scale-110 active:scale-95 cursor-pointer border border-slate-200"
            >
              <ChevronRight className="w-6 h-6 stroke-[3]" />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex items-stretch gap-3 sm:gap-4 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {TRENDING_CATEGORIES_DATA.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="w-[185px] sm:w-[200px] md:w-[215px] shrink-0 bg-white rounded-xl border border-slate-200/80 hover:border-[#1559ac]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group/card cursor-pointer min-h-[175px]"
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
        </div>
      </div>
    </section>
  );
};
