"use client";

import React from "react";
import Link from "next/link";
import { ELECTRONICS_SHOWCASE_PRODUCTS } from "../data/electronicsShowcaseData";

export const ElectronicsShowcaseSection: React.FC = () => {
  return (
    <section className="w-full mt-6 select-none">
      {/* 
        Image 1 Row: 6 Cards in Strict Single Row (grid-cols-6)
        Electronics, Earphones, Sewing Needles, Tape Measure, Preheating plate
      */}
      <div className="w-full overflow-x-auto pb-1">
        <div className="grid grid-cols-6 gap-2.5 sm:gap-3 md:gap-3.5 min-w-[900px] lg:min-w-0">
          {ELECTRONICS_SHOWCASE_PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="bg-white rounded-xl overflow-hidden border border-slate-200/90 hover:border-[#1559ac]/50 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
              title={product.title}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover block group-hover:scale-[1.01] transition-transform duration-300"
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
