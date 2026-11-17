"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { B2C_VALUE_CARDS } from "@/data/b2cValueCardsData";

export const B2CHeroValueCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  };

  useEffect(() => {
    checkScroll();
    const current = scrollRef.current;
    if (current) {
      current.addEventListener("scroll", checkScroll, { passive: true });
    }
    window.addEventListener("resize", checkScroll);
    return () => {
      if (current) {
        current.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardStep = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardStep : cardStep,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full relative py-2 select-none">
      {/* 
        Native HTML/CSS cards with real typography, clean fonts, 
        crisp isolated graphics, and full-width responsive grid.
      */}
      <div className="relative group/carousel w-full">
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-2.5 z-30 w-9 h-14 bg-white/95 hover:bg-white text-slate-800 rounded-r-md border border-slate-300 shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer ${
            !canScrollLeft ? "opacity-30 cursor-not-allowed hidden sm:flex" : "opacity-90 hover:opacity-100"
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-2.5 z-30 w-9 h-14 bg-white/95 hover:bg-white text-slate-800 rounded-l-md border border-slate-300 shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer ${
            !canScrollRight ? "opacity-30 cursor-not-allowed hidden sm:flex" : "opacity-90 hover:opacity-100"
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* 4 Full-Width Native Cards Grid */}
        <div
          ref={scrollRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-3.5 w-full overflow-x-auto scrollbar-none scroll-smooth px-1 py-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {B2C_VALUE_CARDS.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="w-full bg-white rounded-xl p-4 sm:p-4.5 shadow-sm hover:shadow-lg transition-all duration-200 border border-slate-200/80 hover:border-blue-400 overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[160px]"
            >
              {/* Real Text Title */}
              <div>
                <h3 className="text-[15px] sm:text-[16.5px] font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
              </div>

              {/* Graphic + Subtitle Body */}
              <div className="my-2.5 flex items-center gap-3">
                {card.graphicType === "double-img" ? (
                  /* Double PC Desktop Images for Card 1 */
                  <div className="w-full h-20 flex items-center justify-center">
                    <img
                      src={card.graphic}
                      alt={card.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  /* Circular Icon + Real Descriptive Subtitle */
                  <div className="flex items-center gap-2.5 w-full">
                    <div className="flex-shrink-0 w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center">
                      <img
                        src={card.graphic}
                        alt={card.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    {card.subtitle && (
                      <p className="text-[11px] sm:text-[11.5px] text-slate-600 font-normal leading-tight line-clamp-3">
                        {card.subtitle}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Real Blue Action Link at Bottom */}
              <div className="pt-1">
                <span className="text-[12px] sm:text-[12.5px] font-medium text-[#007185] hover:text-[#c7511f] group-hover:underline transition-colors inline-block">
                  {card.actionText}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
