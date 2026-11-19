"use client";

import React from "react";
import Link from "next/link";
import { TRENDING_LOCATION_PRODUCTS } from "../data/trendingLocationProductsData";

export const TrendingProductsLocationSection: React.FC = () => {
  return (
    <section className="w-full mt-7 select-none">
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs">

        {/* Section Heading matching Image 1: "Trending Products in Your Location" */}
        <div className="mb-6">
          <h3 className="font-black text-slate-900 text-lg sm:text-xl tracking-tight">
            Trending Products in Your Location
          </h3>
        </div>

        {/* 8 Columns x 3 Rows = 24 Product Cards Grid matching Image 1 */}
        <div className="location-trending-grid-8">
          {TRENDING_LOCATION_PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              {/* Product Thumbnail Container with rounded border & subtle shadow on hover */}
              <div className="w-[88px] h-[88px] sm:w-[94px] sm:h-[94px] rounded-xl border border-slate-200/85 p-1.5 bg-white flex items-center justify-center shrink-0 overflow-hidden shadow-2xs group-hover:border-[#1d72fe] group-hover:shadow-md transition-all duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Product Name with blue text color matching Image 1 */}
              <span className="text-[12.5px] sm:text-[13px] font-medium text-[#0052cc] group-hover:underline mt-2.5 line-clamp-1 max-w-[105px] tracking-tight leading-tight">
                {product.name}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

