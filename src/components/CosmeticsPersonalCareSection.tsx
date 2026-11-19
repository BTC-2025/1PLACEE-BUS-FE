"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import {
  COSMETICS_PILLAR_LINKS,
  COSMETICS_CATEGORY_CARDS,
} from "../data/b2bAdditionalShowcaseData";

export const CosmeticsPersonalCareSection: React.FC = () => {
  return (
    <section className="w-full mt-7 select-none">
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs">
        
        {/* Section Heading with Orange Accent Line matching Image 1 */}
        <div className="mb-6">
          <h3 className="font-black text-slate-900 text-lg sm:text-xl tracking-tight">
            Cosmetics &amp; Personal Care Products
          </h3>
          <div className="w-12 h-1 bg-[#ea580c] rounded-full mt-2" />
        </div>

        {/* 2-Column: Left Hero Banner + Right 6 Category Cards matching Food & Beverage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          
          {/* Left Hero Banner */}
          <div className="lg:col-span-4 xl:col-span-3.5 relative rounded-2xl overflow-hidden shadow-xs border border-slate-200/90 min-h-[360px] sm:min-h-[380px] flex flex-col justify-end group">
            <img
              src="/categories/cosmetics/cosmetics-hero-banner.jpg"
              alt="Cosmetics & Personal Care Products"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 pillar-hero-gradient pointer-events-none" />

            <div className="relative z-10 p-4 sm:p-5 space-y-2">
              <ul className="space-y-1.5 pb-2">
                {COSMETICS_PILLAR_LINKS.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between pillar-link-text text-xs sm:text-[13px] font-bold py-1 px-1.5 rounded-lg hover:bg-white/20 transition-all group/item"
                    >
                      <span className="truncate">{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-white group-hover/item:translate-x-1 transition-transform shrink-0 ml-1" />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="pt-2 border-t border-white/20">
                <Link
                  href="/products?cat=cosmetics-personal-care"
                  className="pillar-view-all-btn inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black transition-all active:scale-95 cursor-pointer"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right 6 Cards (2 Rows x 3 Columns) */}
          <div className="lg:col-span-8 xl:col-span-8.5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
            {COSMETICS_CATEGORY_CARDS.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#1d72fe]/50 p-4 flex flex-col justify-between hover:shadow-md transition-all duration-300 group cursor-pointer relative"
              >
                <div>
                  <Link href={cat.href}>
                    <h4 className="text-[13px] sm:text-[13.5px] font-black text-slate-900 group-hover:text-[#1d72fe] transition-colors leading-snug line-clamp-2">
                      {cat.title}
                    </h4>
                  </Link>

                  <div className="mt-3 flex items-start justify-between gap-2.5">
                    <ul className="space-y-1 flex-1 min-w-0">
                      {cat.subcategories.map((sub) => (
                        <li key={sub.id}>
                          <Link
                            href={sub.href}
                            className="text-[11.5px] text-slate-600 hover:text-[#1d72fe] hover:underline font-medium block truncate leading-tight transition-colors"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <div className="b2b-card-thumb-box group-hover:border-[#1d72fe]/40 transition-colors">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="b2b-card-thumb-img group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

