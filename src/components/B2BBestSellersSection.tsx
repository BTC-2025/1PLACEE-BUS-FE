"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, ShieldCheck } from "lucide-react";
import { BEST_SELLER_PRODUCTS } from "../data/b2bBestSellersData";

export const B2BBestSellersSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f4f7f9] pb-8 select-none">
      <div className="max-w-[1530px] mx-auto px-3 sm:px-6">
        {/* Outer Orange Container Matching Uploaded Image */}
        <div className="rounded-2xl bg-gradient-to-r from-[#e65c00] via-[#ea6812] to-[#e65c00] p-4 sm:p-5 shadow-lg border border-orange-600/30">
          {/* Header Row */}
          <div className="flex items-center justify-between pb-3.5 mb-2">
            <h3 className="text-white font-extrabold text-lg sm:text-xl tracking-tight flex items-center gap-2">
              <span>Best Sellers</span>
            </h3>

            <Link
              href="/products?collection=best-sellers"
              className="text-white/90 hover:text-white text-xs sm:text-[13px] font-bold flex items-center gap-1 group transition-colors"
            >
              <span>View All</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* 6 Inner White Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5">
            {BEST_SELLER_PRODUCTS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-xl hover:scale-[1.02] transition-all duration-200 flex flex-col justify-between group cursor-pointer border border-white/90"
              >
                {/* Product Card Top Photo Area */}
                <div className="w-full aspect-[4/3] bg-white relative overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Product Info Area */}
                <div className="p-3 pt-1 flex flex-col justify-between flex-1 border-t border-slate-50">
                  <div>
                    {/* Title */}
                    <h4 className="text-[12.5px] font-bold text-slate-800 line-clamp-2 leading-snug group-hover:text-[#e65c00] transition-colors">
                      {item.title}
                    </h4>

                    {/* Price */}
                    <div className="text-[13px] sm:text-[13.5px] font-extrabold text-slate-900 mt-1 leading-tight">
                      {item.price}
                    </div>
                  </div>

                  {/* Supplier Info */}
                  <div className="pt-2 mt-2 border-t border-slate-100">
                    <p className="text-[10px] sm:text-[10.5px] text-slate-400 font-medium line-clamp-2 leading-tight">
                      {item.supplier}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
