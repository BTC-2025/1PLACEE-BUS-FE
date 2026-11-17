"use client";

import React from "react";
import Link from "next/link";
import { B2B_BEST_SELLERS } from "../data/b2bBestSellersData";

export const B2BBestSellersRow: React.FC = () => {
  return (
    <section className="w-full mt-6 select-none">
      {/* 
        Native Orange Container matching the exact aesthetic of the user image.
        Houses 6 exact image-based cards in a strict single horizontal row (grid-cols-6),
        with smooth hover elevation, rounded cards, and individual links.
      */}
      <div className="w-full rounded-2xl bg-gradient-to-r from-[#e85d04] via-[#f06806] to-[#e85d04] p-3 sm:p-4 md:p-5 shadow-md border border-orange-500/20">
        {/* Title */}
        <div className="flex items-center justify-between mb-2.5 sm:mb-3.5 px-1">
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

        {/* 6 Cards - Strict Single Horizontal Row */}
        <div className="grid grid-cols-6 gap-2 sm:gap-3 md:gap-3.5 w-full items-stretch">
          {B2B_BEST_SELLERS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group block rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-transparent hover:border-white/80"
              title={`${item.title} - ${item.price}`}
            >
              <img
                src={item.cardImage}
                alt={item.title}
                className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
