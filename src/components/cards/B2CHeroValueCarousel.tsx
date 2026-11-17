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
    // Step by approx 1 card width + gap (~240px)
    const cardStep = 240;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardStep : cardStep,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full relative py-2 select-none">
      {/* 
        Amazon/1Placee B2C 5-Card Banner Carousel with prominent Left & Right Navigation Arrows
      */}
      <div className="relative group/carousel w-full">
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-3 z-30 w-10 h-14 bg-white/95 hover:bg-white text-slate-800 rounded-r-md border border-slate-300 shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer ${
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
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-3 z-30 w-10 h-14 bg-white/95 hover:bg-white text-slate-800 rounded-l-md border border-slate-300 shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer ${
            !canScrollRight ? "opacity-30 cursor-not-allowed hidden sm:flex" : "opacity-90 hover:opacity-100"
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Cards Carousel Container */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-3 overflow-x-auto scrollbar-none scroll-smooth px-1 py-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {B2C_VALUE_CARDS.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="flex-shrink-0 w-[230px] sm:w-[250px] md:w-[260px] lg:w-[calc(20%-10px)] min-w-[210px] bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 border border-slate-200/80 hover:border-blue-400 overflow-hidden cursor-pointer group flex flex-col justify-between"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto object-cover block group-hover:scale-[1.01] transition-transform duration-300"
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
