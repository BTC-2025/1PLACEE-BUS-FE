"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Award } from "lucide-react";
import { B2B_BEST_SELLERS } from "../data/b2bBestSellersData";

export const B2BBestSellersRow: React.FC = () => {
  return (
    <section className="w-full mt-6 select-none">
      {/* Outer Curved Container with Vibrant Orange Gradient matching user's uploaded Image */}
      <div className="rounded-2xl bg-gradient-to-r from-[#e65c00] via-[#ea690c] to-[#e65c00] p-4 sm:p-5 shadow-md relative overflow-hidden">
        {/* Subtle decorative glow overlay */}
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-black/10 blur-2xl pointer-events-none" />

        {/* Section Header Title */}
        <div className="flex items-center justify-between mb-3.5 relative z-10 px-1">
          <div className="flex items-center gap-2">
            <h3 className="text-white font-extrabold text-base sm:text-lg tracking-tight">
              Best Sellers
            </h3>
          </div>

          <Link
            href="/products?collection=bestsellers"
            className="text-white/90 hover:text-white text-xs font-bold flex items-center gap-1 transition-colors hover:translate-x-0.5"
          >
            <span>View All</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Single Row 6 Cards Grid (1 Row x 6 Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5 relative z-10">
          {B2B_BEST_SELLERS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="bg-white rounded-xl p-3 sm:p-3.5 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group border border-white/80 cursor-pointer min-h-[265px]"
            >
              <div>
                {/* Product Image Square Container with Platinum Badge if present */}
                <div className="w-full aspect-[4/3] rounded-lg bg-slate-50 border border-slate-100/90 relative overflow-hidden flex items-center justify-center p-1.5 mb-2.5">
                  {/* Platinum Seller Badge matching Image */}
                  {item.badge && (
                    <div className="absolute top-1 left-1 bg-gradient-to-r from-[#4a154b] to-[#6b21a8] text-white text-[8.5px] font-black px-1.5 py-0.5 rounded shadow-xs flex items-center gap-0.5 z-10">
                      <Award className="w-2.5 h-2.5 text-amber-300 fill-amber-300" />
                      <span>{item.badge}</span>
                    </div>
                  )}

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Product Title */}
                <h4 className="text-[12px] sm:text-[12.5px] font-bold text-slate-900 group-hover:text-[#1559ac] line-clamp-2 leading-tight transition-colors mb-1.5">
                  {item.title}
                </h4>

                {/* Price */}
                <div className="text-[13px] sm:text-[13.5px] font-extrabold text-slate-900 leading-tight">
                  {item.price}
                </div>
              </div>

              {/* Supplier Info Footer */}
              <div className="pt-2 mt-2 border-t border-slate-100">
                <p className="text-[10px] sm:text-[10.5px] text-slate-400 group-hover:text-slate-600 line-clamp-2 leading-tight transition-colors">
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
