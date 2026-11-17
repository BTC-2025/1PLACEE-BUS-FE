"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Camera } from "lucide-react";
import { ELECTRONICS_SHOWCASE_PRODUCTS } from "../data/electronicsShowcaseData";

export const ElectronicsShowcaseSection: React.FC = () => {
  return (
    <section className="w-full mt-6 select-none">
      {/* 
        Image 1 Row: Strict Single Row 6 Cards Grid (grid-cols-6)
        100% Native Real Typography, Prices, MOQ, Sold, Reorder, Badges and Camera Search
      */}
      <div className="w-full overflow-x-auto pb-1">
        <div className="grid grid-cols-6 gap-2.5 sm:gap-3 md:gap-3.5 min-w-[900px] lg:min-w-0">
          {ELECTRONICS_SHOWCASE_PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="bg-white rounded-xl overflow-hidden border border-slate-200/90 hover:border-[#1559ac]/50 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
            >
              {/* Product Photo Area with Camera Icon */}
              <div className="w-full h-[145px] sm:h-[150px] bg-slate-50/50 relative overflow-hidden flex items-center justify-center p-2 border-b border-slate-100">
                <img
                  src={product.photo}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />

                {/* Visual Search Button */}
                <button
                  type="button"
                  aria-label="Search similar"
                  className="absolute bottom-2 left-2 w-6 h-6 rounded-md bg-white/90 hover:bg-white text-slate-500 hover:text-slate-900 flex items-center justify-center shadow-xs border border-slate-200/80 transition-all opacity-80 group-hover:opacity-100 cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5 stroke-[2]" />
                </button>
              </div>

              {/* Product Details Section (100% Real Text) */}
              <div className="p-3 flex flex-col justify-between flex-1">
                <div>
                  {/* Title */}
                  <h4 className="text-xs font-normal text-slate-800 line-clamp-2 mb-1.5 leading-snug group-hover:text-[#1559ac] transition-colors">
                    {product.title}
                  </h4>

                  {/* Reorder Rate / Delivery Date */}
                  {product.reorderRate && (
                    <div className="text-[10px] text-slate-400 font-medium mb-1">
                      {product.reorderRate}
                    </div>
                  )}
                  {product.deliveryDate && (
                    <div className="text-[10px] text-emerald-600 font-medium mb-1">
                      {product.deliveryDate}
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
                      <span className="text-slate-400 font-light">{product.soldCount}</span>
                    )}
                  </div>
                </div>

                {/* Supplier & Verification Badge */}
                <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <div className="flex items-center gap-1.5">
                    {product.isVerified ? (
                      <span className="inline-flex items-center gap-0.5 text-[#1559ac] font-bold text-[10.5px]">
                        <CheckCircle2 className="w-3 h-3 text-[#1559ac] fill-[#1559ac]/15" />
                        Verified
                      </span>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    )}
                    <span className="text-[10px] text-slate-400 font-normal">
                      {product.supplierYears}
                    </span>
                  </div>

                  <ChevronRight className="w-3 h-3 text-slate-300 group-hover:text-[#1559ac] group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
