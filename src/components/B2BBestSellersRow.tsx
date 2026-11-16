"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { B2B_BEST_SELLERS } from "../data/b2bBestSellersData";

export const B2BBestSellersRow: React.FC = () => {
  return (
    <div className="w-full mt-6 select-none">
      {/* Orange/Coral Container Matching Uploaded Image */}
      <div className="rounded-2xl p-4 sm:p-5 shadow-sm border border-[#e65c00]/30 bg-gradient-to-r from-[#e65100] via-[#ed6c02] to-[#e65100]">
        {/* Header Title */}
        <div className="flex items-center justify-between mb-3.5 px-1">
          <h3 className="text-white font-extrabold text-base sm:text-lg tracking-wide drop-shadow-2xs">
            Best Sellers
          </h3>
          <Link
            href="/products?deals=best-sellers"
            className="text-white/90 hover:text-white text-xs font-bold flex items-center gap-1 transition"
          >
            <span>View All</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Cards Single Row Container (Grid on desktop, horizontal scroll on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-3.5">
          {B2B_BEST_SELLERS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-xl hover:scale-[1.02] transition-all duration-200 border border-white/80 flex flex-col justify-between group cursor-pointer"
            >
              {/* Product Visual from Uploaded Image */}
              <div className="w-full aspect-[4/3] bg-white flex items-center justify-center overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Product Details Section */}
              <div className="p-2.5 sm:p-3 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <h4 className="text-[12px] sm:text-[12.5px] font-bold text-slate-800 line-clamp-1 group-hover:text-[#1559ac] transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-[12px] sm:text-[13px] font-black text-slate-900 mt-1 leading-tight">
                    {item.price}
                  </div>
                </div>

                <div className="pt-2 mt-2 border-t border-slate-100">
                  <p className="text-[10px] text-slate-400 line-clamp-2 leading-tight">
                    {item.supplier}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
