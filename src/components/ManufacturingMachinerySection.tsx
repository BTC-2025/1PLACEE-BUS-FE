"use client";

import React from "react";
import Link from "next/link";
import { MANUFACTURING_MACHINERY_CARDS } from "../data/manufacturingMachineryData";

export const ManufacturingMachinerySection: React.FC = () => {
  return (
    <section className="w-full mt-6 select-none">
      {/* 
        Full Real Pure UI Container (No Screenshot Texts, No Artifacts, 100% Real Code & Typography):
        - Left Pillar: Pastel Lavender (#f0e8f5) with Real Typography, Interactive "Source Now" Button, and Large CNC Machine Graphic
        - Right Section: 2 Rows x 4 Columns Clean White Cards with Real Text and Isolated Machinery Product Photos
      */}
      <div className="w-full rounded-2xl overflow-hidden shadow-xs border border-slate-200/90 bg-white flex flex-col lg:flex-row">
        {/* ========================================================================= */}
        {/* 1. LEFT FEATURE PILLAR (Pure Native UI & Interactive Button) */}
        {/* ========================================================================= */}
        <div className="w-full lg:w-[230px] xl:w-[245px] shrink-0 bg-[#f0e8f5] p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden">
          {/* Real Text Header & Button */}
          <div className="relative z-10">
            <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight leading-snug">
              Manufacturing &<br />Processing Machinery
            </h3>

            <div className="mt-3">
              <Link
                href="/products?cat=manufacturing-machinery"
                className="inline-block px-4 py-1.5 rounded-full border border-slate-700/80 bg-white/90 hover:bg-white text-slate-900 text-xs font-semibold shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Source Now
              </Link>
            </div>
          </div>

          {/* Large CNC Industrial Machine Graphic */}
          <div className="mt-4 pt-2 flex items-end justify-center relative z-10">
            <img
              src="/categories/machinery/cnc-router-large.png"
              alt="Industrial CNC Machinery"
              className="max-h-[160px] sm:max-h-[175px] object-contain block drop-shadow-sm"
              loading="lazy"
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. RIGHT 8 CATEGORIES GRID (2 Rows x 4 Columns Pure Native UI) */}
        {/* ========================================================================= */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 grid-rows-2 divide-x divide-y divide-slate-100 bg-white">
          {MANUFACTURING_MACHINERY_CARDS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="p-3.5 sm:p-4 flex flex-col justify-between hover:bg-slate-50/70 transition-colors group cursor-pointer min-h-[135px]"
            >
              {/* Category Real Name */}
              <span className="text-[12.5px] sm:text-[13px] font-medium text-slate-700 group-hover:text-[#1559ac] transition-colors line-clamp-1">
                {item.name}
              </span>

              {/* Real Isolated Product Image */}
              <div className="w-full h-[85px] sm:h-[90px] flex items-center justify-end p-1">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

