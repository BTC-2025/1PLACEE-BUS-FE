"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Camera } from "lucide-react";
import { SEWING_SHOWCASE_PRODUCTS } from "../data/sewingShowcaseData";

export const SewingShowcaseSection: React.FC = () => {
  return (
    <section className="w-full mt-6 select-none">
      {/* 
        Strict Single Row 6 Cards Grid on All Screen Sizes (grid-cols-6):
        - Exactly 6 cards per row with horizontal scroll safeguard on very narrow screens
        - Clean White Cards with Rounded Borders
        - Reorder Rate Badges, CE Badges, Real Pricing, MOQ, Sold Counts and Verified Supplier Info
      */}
      <div className="w-full overflow-x-auto pb-1">
        <div className="grid grid-cols-6 gap-2.5 sm:gap-3 md:gap-3.5 min-w-[900px] lg:min-w-0">
          {SEWING_SHOWCASE_PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="bg-white rounded-xl overflow-hidden border border-slate-200/90 hover:border-[#1559ac]/50 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
            >
              {/* Product Card Top Photo Square with Visual Search Icon */}
              <div className="w-full h-[145px] sm:h-[150px] bg-slate-50/50 relative overflow-hidden flex items-center justify-center p-2 border-b border-slate-100">
                <img
                  src={product.photo}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />

                {/* Visual Search / Camera Button matching image */}
                <button
                  type="button"
                  aria-label="Search similar"
                  className="absolute bottom-2 left-2 w-6 h-6 rounded-md bg-white/90 hover:bg-white text-slate-500 hover:text-slate-900 flex items-center justify-center shadow-xs border border-slate-200/80 transition-all opacity-80 group-hover:opacity-100 cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5 stroke-[2]" />
                </button>
              </div>

              {/* Product Details Section */}
              <div className="p-3 flex flex-col justify-between flex-1">
                <div>
                  {/* CE / Green Badges if applicable */}
                  {product.badgeCe && (
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-[9.5px] font-extrabold text-slate-500 tracking-wider">
                        CE
                      </span>
                    </div>
                  )}

                  {/* Product Title */}
                  <h4 className="text-xs font-normal text-slate-800 line-clamp-2 mb-1.5 leading-snug group-hover:text-[#1559ac] transition-colors">
                    {product.title}
                  </h4>

                  {/* Reorder Rate */}
                  {product.reorderRate && (
                    <div className="text-[10px] text-slate-400 font-medium mb-1">
                      {product.reorderRate}
                    </div>
                  )}

                  {/* Price */}
                  <div className="text-[14px] sm:text-[14.5px] font-black text-slate-900 leading-tight">
                    {product.price}
                  </div>

                  {/* MOQ & Sold Count */}
                  <div className="text-[10.5px] text-slate-500 font-normal mt-0.5 flex items-center gap-1.5 flex-wrap">
                    <span>{product.moq}</span>
                    {product.soldCount && (
                      <span className="text-slate-400">· {product.soldCount}</span>
                    )}
                  </div>
                </div>

                {/* Supplier Info Footer matching Image (e.g. Verified 11 yrs · CN) */}
                <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[10.5px]">
                  <div className="flex items-center gap-1">
                    {product.isVerified && (
                      <span className="text-[#1559ac] font-bold text-[10px] flex items-center gap-0.5">
                        <CheckCircle2 className="w-3 h-3 text-[#1559ac] inline stroke-[2.5]" />
                        Verified
                      </span>
                    )}
                    <span className="text-slate-400 font-medium">
                      {product.supplierYears} · {product.supplierCountry}
                    </span>
                  </div>

                  <span className="text-slate-300 group-hover:text-[#1559ac] transition-colors">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

