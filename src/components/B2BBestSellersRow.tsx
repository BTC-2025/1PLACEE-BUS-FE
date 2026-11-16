"use client";

import React from "react";
import Link from "next/link";
import { B2B_BEST_SELLERS } from "../data/b2bBestSellersData";

export const B2BBestSellersRow: React.FC = () => {
  return (
    <section className="w-full mt-6 select-none">
      {/* Outer Curved Container with Warm Vibrant Orange Gradient exactly matching User's 2nd Image */}
      <div className="rounded-2xl bg-gradient-to-r from-[#e65c00] via-[#ea690c] to-[#e65c00] p-4 sm:p-5 md:p-6 shadow-md relative overflow-hidden">
        {/* Subtle decorative glow overlay */}
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-black/10 blur-2xl pointer-events-none" />

        {/* Section Header Title matching 2nd Image */}
        <div className="mb-3.5 px-1 relative z-10">
          <h3 className="text-white font-extrabold text-base sm:text-lg tracking-tight">
            Best Sellers
          </h3>
        </div>

        {/* 
          Single row 6 cards grid matching 2nd image:
          Clean white cards with generous orange margins, rounded-xl corners, 
          and perfectly proportioned height.
        */}
        <div className="w-full overflow-x-auto pb-1 relative z-10">
          <div className="grid grid-cols-6 gap-2.5 sm:gap-3 md:gap-3.5 min-w-[700px] sm:min-w-0">
            {B2B_BEST_SELLERS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-200 block group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-300 rounded-xl"
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
