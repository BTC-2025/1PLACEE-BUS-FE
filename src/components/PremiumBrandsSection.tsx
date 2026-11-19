"use client";

import React from "react";
import Link from "next/link";
import { PREMIUM_BRANDS_LIST } from "../data/b2bShowcaseSectionsData";

export const PremiumBrandsSection: React.FC = () => {
  return (
    <section className="w-full mt-7 select-none">
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs">

        {/* Header Title with Orange Indicator Bar matching Image 3 */}
        <div className="mb-6">
          <h3 className="font-black text-slate-900 text-lg sm:text-xl tracking-tight">
            Premium Brands on India
          </h3>
          <div className="w-12 h-1 bg-[#ea580c] rounded-full mt-2" />
        </div>

        {/* 5-Column Grid of Premium Brand Logo Cards */}
        <div className="brands-grid-5 gap-3.5 sm:gap-4">
          {PREMIUM_BRANDS_LIST.map((brand) => (
            <Link
              key={brand.id}
              href={brand.href}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 p-3.5 flex items-center justify-center transition-all duration-300 hover:shadow-md group cursor-pointer h-[105px] sm:h-[115px] relative"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

