"use client";

import React from "react";
import Link from "next/link";
import { B2B_BEST_SELLERS } from "../data/b2bBestSellersData";

export const B2BBestSellersRow: React.FC = () => {
  return (
    <section className="w-full mt-6 select-none">
      {/* Outer Curved Container with Vibrant Solid Orange Theme matching User's 2nd Image */}
      <div className="rounded-2xl bg-[#ea690c] p-3.5 sm:p-4 md:p-5 shadow-md relative overflow-hidden">
        {/* Section Header Title */}
        <div className="mb-3 px-1">
          <h3 className="text-white font-extrabold text-base sm:text-lg tracking-tight">
            Best Sellers
          </h3>
        </div>

        {/* 
          STRICT SINGLE ROW WITH ALL 6 CARDS:
          Uses exact 6 columns on all screens (grid-cols-6) with overflow protection 
          so cards NEVER wrap into multiple rows.
        */}
        <div className="w-full overflow-x-auto pb-1">
          <div className="grid grid-cols-6 gap-2 sm:gap-2.5 md:gap-3.5 min-w-[680px] sm:min-w-0">
            {B2B_BEST_SELLERS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-200 block group border border-white/90 cursor-pointer"
              >
                <img
                  src={item.fullCardImage}
                  alt={item.title}
                  className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-300"
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
