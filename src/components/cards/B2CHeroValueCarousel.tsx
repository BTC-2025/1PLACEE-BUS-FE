"use client";

import React from "react";
import Link from "next/link";
import { B2C_VALUE_CARDS } from "@/data/b2cValueCardsData";

export const B2CHeroValueCarousel: React.FC = () => {
  return (
    <section className="w-full relative py-2 select-none">
      {/* 
        4 Native Full-Width Cards in a clean, elegant horizontal grid.
        Left and Right scroll arrows removed for a seamless edge-to-edge card layout.
      */}
      <div className="w-full">
        {/* 4 Full-Width Native Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
          {B2C_VALUE_CARDS.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="w-full bg-white rounded-xl p-4 sm:p-4.5 shadow-sm hover:shadow-lg transition-all duration-200 border border-slate-200/80 hover:border-blue-400 overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[160px]"
            >
              {/* Real Text Title */}
              <div>
                <h3 className="text-[15px] sm:text-[16.5px] font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
              </div>

              {/* Graphic + Subtitle Body */}
              <div className="my-2.5 flex items-center gap-3">
                {card.graphicType === "double-img" ? (
                  /* Double PC Desktop Images for Card 1 */
                  <div className="w-full h-20 flex items-center justify-center">
                    <img
                      src={card.graphic}
                      alt={card.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  /* Circular Icon + Real Descriptive Subtitle */
                  <div className="flex items-center gap-2.5 w-full">
                    <div className="flex-shrink-0 w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center">
                      <img
                        src={card.graphic}
                        alt={card.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    {card.subtitle && (
                      <p className="text-[11px] sm:text-[11.5px] text-slate-600 font-normal leading-tight line-clamp-3">
                        {card.subtitle}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Real Blue Action Link at Bottom */}
              <div className="pt-1">
                <span className="text-[12px] sm:text-[12.5px] font-medium text-[#007185] hover:text-[#c7511f] group-hover:underline transition-colors inline-block">
                  {card.actionText}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
