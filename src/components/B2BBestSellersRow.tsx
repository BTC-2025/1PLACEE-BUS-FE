"use client";

import React from "react";
import Link from "next/link";
import { B2B_BEST_SELLERS } from "../data/b2bBestSellersData";

export const B2BBestSellersRow: React.FC = () => {
  return (
    <section className="w-full mt-6 select-none">
      {/* 
        Native HTML/CSS container matching the exact bright orange gradient, 
        curved aesthetic, real fonts, crisp real text, and isolated product images.
      */}
      <div className="w-full rounded-2xl bg-gradient-to-r from-[#e85d04] via-[#f46a07] to-[#e85d04] p-4 sm:p-5 shadow-md border border-orange-500/20">
        {/* Title */}
        <div className="flex items-center justify-between mb-3 px-1">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            Best Sellers
          </h2>
          <Link
            href="/products?collection=bestsellers"
            className="text-xs sm:text-sm font-semibold text-white/90 hover:text-white underline-offset-2 hover:underline transition-colors"
          >
            View All
          </Link>
        </div>

        {/* 6 Native Cards Grid - Strict Single Horizontal Row */}
        <div className="grid grid-cols-6 gap-2.5 sm:gap-3 w-full">
          {B2B_BEST_SELLERS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col justify-between bg-white rounded-xl p-2.5 sm:p-3 shadow-sm hover:shadow-lg transition-all duration-200 border border-transparent hover:border-orange-200 overflow-hidden relative cursor-pointer min-h-[200px]"
            >
              {/* Optional Platinum Badge */}
              {item.badge && (
                <div className="absolute top-0 left-0 z-10">
                  <div className="bg-gradient-to-r from-purple-800 to-indigo-700 text-white text-[8px] sm:text-[9px] font-bold px-1.5 sm:px-2 py-0.5 rounded-br-md shadow flex items-center gap-0.5 sm:gap-1">
                    <span>👑</span>
                    <span className="uppercase tracking-wider truncate">{item.badge.text}</span>
                  </div>
                </div>
              )}

              {/* Product Image Area */}
              <div className="w-full h-24 sm:h-28 flex items-center justify-center p-1 relative overflow-hidden mt-0.5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Real Native Text Content */}
              <div className="mt-1.5 flex flex-col justify-end flex-grow pt-0.5">
                {/* Title */}
                <h3 className="text-[11px] sm:text-[12.5px] font-semibold text-slate-800 line-clamp-1 group-hover:text-orange-600 transition-colors leading-tight">
                  {item.title}
                </h3>

                {/* Price */}
                <p className="text-[11px] sm:text-[12.5px] font-bold text-slate-950 mt-0.5 leading-none">
                  {item.price}
                </p>

                {/* Supplier */}
                <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium line-clamp-1 mt-1 uppercase tracking-tight">
                  {item.supplier}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
