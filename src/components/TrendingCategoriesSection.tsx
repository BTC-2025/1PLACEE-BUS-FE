"use client";

import React from "react";
import Link from "next/link";
import { TRENDING_CATEGORIES_DATA } from "../data/trendingCategoriesData";

export const TrendingCategoriesSection: React.FC = () => {
  return (
    <section className="w-full mt-6 select-none">
      {/* 
        Single Row Container with all 7 cards displayed in one exact row (1024x183 aspect ratio)
        matching user's uploaded screenshot perfectly, with interactive clickable links.
      */}
      <div className="w-full rounded-2xl overflow-hidden shadow-xs border border-slate-200/90 bg-white relative group">
        <img
          src="/categories/trending-row-full.png"
          alt="Trending Categories - Human Hair, Cooling Tower, T-Shirts, Air Cooler, Solar Panels, Generators, Valves"
          className="w-full h-auto object-cover block"
          loading="lazy"
        />

        {/* 7 Interactive Clickable Hotspots across the single row */}
        <div className="absolute inset-0 w-full h-full">
          {/* Header click */}
          <Link
            href="/products?cat=trending"
            className="absolute top-0 left-0 w-full h-[25%] z-10 cursor-pointer"
            aria-label="Trending Categories"
          />

          {/* 7 Cards Hotspots across the 7 columns */}
          <div className="absolute bottom-[5%] left-[2%] right-[2%] top-[24%] grid grid-cols-7 gap-1 z-20">
            {TRENDING_CATEGORIES_DATA.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="w-full h-full rounded-xl hover:bg-slate-900/[0.03] transition-colors cursor-pointer"
                title={item.name}
                aria-label={item.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
