"use client";

import React from "react";
import Link from "next/link";
import { TRENDING_PRODUCT_CATEGORIES } from "../data/trendingCategoriesData";

export const TrendingCategoriesSection: React.FC = () => {
  return (
    <section className="w-full mt-2 select-none">
      {/* Outer Clean White Container with Orange Indicator Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs">

        {/* Header Title with Orange Accent Line matching Image 2 */}
        <div className="mb-6">
          <h3 className="font-black text-slate-900 text-lg sm:text-xl tracking-tight">
            Trending Products
          </h3>
          <div className="w-12 h-1 bg-[#ea580c] rounded-full mt-2" />
        </div>

        {/* 2 Rows x 7 Cards Grid matching User Reference Image 2 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-3.5">
          {TRENDING_PRODUCT_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#ea580c]/60 p-3 flex flex-col items-center justify-between text-center transition-all duration-300 hover:shadow-md group cursor-pointer min-h-[145px]"
            >
              {/* Product Thumbnail inside rounded light-blue container */}
              <div className="w-full h-[88px] rounded-xl bg-[#f0f6ff]/70 flex items-center justify-center p-2 mb-2 group-hover:bg-[#f0f6ff] transition-colors">
                <img
                  src={cat.thumbImage}
                  alt={cat.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h4 className="text-[12px] sm:text-[12.5px] font-bold text-slate-800 group-hover:text-[#ea580c] transition-colors line-clamp-2 leading-tight">
                {cat.name}
              </h4>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
