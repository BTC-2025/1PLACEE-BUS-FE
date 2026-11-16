"use client";

import React from "react";
import Link from "next/link";
import { B2B_BEST_SELLERS } from "../data/b2bBestSellersData";

export const B2BBestSellersRow: React.FC = () => {
  return (
    <section className="w-full mt-6 select-none">
      {/* Outer Curved Container with Vibrant Solid Orange Theme matching User's 2nd Image */}
      <div className="rounded-2xl bg-[#ea690c] p-4 sm:p-5 shadow-md relative overflow-hidden">
        {/* Section Header Title */}
        <div className="mb-3.5 px-1 flex items-center justify-between">
          <h3 className="text-white font-extrabold text-base sm:text-lg tracking-tight">
            Best Sellers
          </h3>
        </div>

        {/* 
          6 Cards in Exact Single Row Grid:
          Each card uses the pure, uncropped white card graphic from Image 2
          with rounded corners, correct aspect ratio, no orange bleed, and interactive hover.
        */}
        <div className="w-full overflow-x-auto pb-1">
          <div className="grid grid-cols-6 gap-2.5 sm:gap-3 md:gap-3.5 min-w-[720px] sm:min-w-0">
            {B2B_BEST_SELLERS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="rounded-xl overflow-hidden shadow-xs hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 block group bg-white cursor-pointer"
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
      </div>
    </section>
  );
};
