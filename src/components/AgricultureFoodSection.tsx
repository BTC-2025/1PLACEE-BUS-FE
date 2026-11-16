"use client";

import React from "react";
import Link from "next/link";
import { AGRICULTURE_FOOD_CATEGORIES } from "../data/agricultureFoodData";

export const AgricultureFoodSection: React.FC = () => {
  return (
    <section className="w-full mt-6 select-none">
      {/* 
        Container matching the exact aspect ratio, rounded corners, and clean white border 
        of the user uploaded image (1024x279).
        Left Hero Feature: Agriculture & Food + "Source Now" button + fresh produce bag graphic
        Right 8 Categories: 2 Rows x 4 Columns (Feed, Canned Food, Ginger, Greenhouse, Chicken Cage, Frozen Seafood, Beverage, Confectionery)
      */}
      <div className="w-full rounded-2xl overflow-hidden shadow-xs border border-slate-200/90 bg-white relative group">
        <img
          src="/categories/agriculture-food-banner.jpg"
          alt="Agriculture & Food - Source Now and 8 Categories"
          className="w-full h-auto object-cover block"
          loading="lazy"
        />

        {/* ========================================================================= */}
        {/* INTERACTIVE CLICKABLE HOTSPOTS */}
        {/* ========================================================================= */}
        <div className="absolute inset-0 w-full h-full">
          {/* 1. Left Feature Area Hotspot (Left ~21% width) */}
          <Link
            href="/products?cat=agriculture-food"
            className="absolute left-0 top-0 w-[21%] h-full z-10 cursor-pointer"
            aria-label="Agriculture & Food - Source Now"
            title="Agriculture & Food - Source Now"
          >
            {/* Hover highlight on 'Source Now' button */}
            <span className="sr-only">Source Now</span>
          </Link>

          {/* 2. Right 8 Categories Hotspots (2 Rows x 4 Columns starting at ~21% to 100%) */}
          <div className="absolute left-[21%] right-0 top-0 bottom-0 grid grid-cols-4 grid-rows-2 z-10">
            {AGRICULTURE_FOOD_CATEGORIES.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="w-full h-full hover:bg-slate-900/[0.02] transition-colors cursor-pointer relative"
                aria-label={item.name}
                title={item.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

