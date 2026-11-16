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

        {/* Single Row 6 Cards Grid (Exact 1 Row x 6 Cards matching original image proportions) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5 relative z-10">
          {B2B_BEST_SELLERS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 group border border-white/80 cursor-pointer block"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-200"
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

