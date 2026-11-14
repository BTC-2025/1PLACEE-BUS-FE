"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight, SlidersHorizontal, Sparkles } from "lucide-react";
import { MACHINERY_PRODUCTS, MachineryProductItem } from "../data/machineryProductsData";

export const IndustrialMachineryProductGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProducts = MACHINERY_PRODUCTS.filter((item) => {
    if (activeFilter === "verified") return item.isVerified;
    if (activeFilter === "reorder") return !!item.reorderRate;
    if (activeFilter === "low_moq") return item.moq.includes("1 piece") || item.moq.includes("1 set");
    return true;
  });

  return (
    <section className="w-full bg-[#f4f7f9] py-8 sm:py-10 select-none border-t border-slate-200">
      <div className="max-w-[1530px] mx-auto px-3 sm:px-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-200 gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-[#1559ac] text-white text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-wider">
                Industrial & Wholesale
              </span>
              <span className="text-slate-400 text-xs font-medium">18 Verified Factory Items</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1 tracking-tight">
              Apparel & Textile Industrial Machinery & Spare Parts
            </h2>
          </div>

          {/* Quick Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[#1559ac] text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              All Items (18)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("verified")}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                activeFilter === "verified"
                  ? "bg-emerald-700 text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified Only
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("reorder")}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === "reorder"
                  ? "bg-amber-600 text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              High Reorder Rate
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("low_moq")}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === "low_moq"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              MOQ: 1 Pc / Set
            </button>
          </div>
        </div>

        {/* 6 Columns Grid Matching the Uploaded User Image (3 Rows x 6 Columns) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-3.5">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="bg-white rounded-xl overflow-hidden border border-slate-200/90 hover:border-[#1559ac]/50 hover:shadow-xl transition-all duration-200 flex flex-col justify-between group cursor-pointer"
            >
              {/* Product Card Top Photo */}
              <div className="w-full aspect-[4/3] bg-slate-50 relative overflow-hidden flex items-center justify-center p-1">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 rounded-t-lg"
                  loading="lazy"
                />

                {/* Reorder rate or delivery badge */}
                {product.reorderRate && (
                  <span className="absolute top-1.5 left-1.5 bg-amber-500/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs backdrop-blur-xs">
                    {product.reorderRate}
                  </span>
                )}
                {product.deliveryDate && (
                  <span className="absolute top-1.5 left-1.5 bg-emerald-600/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs backdrop-blur-xs">
                    {product.deliveryDate}
                  </span>
                )}
              </div>

              {/* Product Details Section */}
              <div className="p-3 flex flex-col justify-between flex-1">
                <div>
                  {/* Product Title */}
                  <h3 className="text-xs font-medium text-slate-800 line-clamp-2 mb-1.5 leading-snug group-hover:text-[#1559ac] transition-colors">
                    {product.title}
                  </h3>

                  {/* Price */}
                  <div className="text-[14px] sm:text-[15px] font-black text-slate-900 leading-tight">
                    {product.price}
                  </div>

                  {/* MOQ & Sold Count */}
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5 flex items-center gap-1.5 flex-wrap">
                    <span>{product.moq}</span>
                    {product.soldCount && (
                      <span className="text-slate-400 font-normal">· {product.soldCount}</span>
                    )}
                  </div>
                </div>

                {/* Supplier Info Footer matching Image (e.g. Verified 4 yrs · CN) */}
                <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1">
                    {product.isVerified && (
                      <span className="text-[#1559ac] font-bold text-[10.5px] flex items-center gap-0.5">
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

        {/* View All / RFQ Footer Bar */}
        <div className="mt-8 bg-white rounded-xl p-4 sm:p-5 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1559ac]/10 flex items-center justify-center text-[#1559ac] shrink-0 font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm sm:text-base">
                Looking for customized industrial machinery or bulk quotation?
              </div>
              <div className="text-xs text-slate-500">
                Post an RFQ and receive competitive bids directly from verified manufacturers.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <Link
              href="/rfq"
              className="flex-1 sm:flex-none text-center px-4 py-2 bg-[#1559ac] hover:bg-[#12498f] text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm transition"
            >
              Post My RFQ Now
            </Link>
            <Link
              href="/products?cat=machinery"
              className="flex-1 sm:flex-none text-center px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold rounded-lg transition"
            >
              View All 1,400+ Machines
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
