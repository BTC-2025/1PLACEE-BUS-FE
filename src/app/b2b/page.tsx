"use client";

import React from "react";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { HeroBannerWithAttachedCards } from "@/components/HeroBannerWithAttachedCards";
import { IndustrialMachineryProductGrid } from "@/components/IndustrialMachineryProductGrid";

export default function B2BPage() {
  return (
    <div className="min-h-screen bg-[#f5f6f9] text-slate-800 font-sans">
      <BusinessNavbar />
      <main className="w-full">
        {/* Subnav Below: Hero Banner Carousel based on uploaded images 2 & 3 */}
        <HeroBannerWithAttachedCards />

        {/* Four Cards Below: Industrial & Apparel Machinery Products Grid */}
        <IndustrialMachineryProductGrid />
      </main>
    </div>
  );
}
