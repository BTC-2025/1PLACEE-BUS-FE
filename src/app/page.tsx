"use client";

import React from "react";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { HeroBannerWithAttachedCards } from "@/components/HeroBannerWithAttachedCards";
import { IndustrialMachineryProductGrid } from "@/components/IndustrialMachineryProductGrid";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f6f9] text-slate-800 font-sans">
      <BusinessNavbar />
      <main className="w-full">
        {/* Subnav Below: Hero Banner Carousel with 4 Overlapping Cards */}
        <HeroBannerWithAttachedCards />

        {/* Four Cards Below: Industrial & Apparel Machinery Products Grid (from uploaded image) */}
        <IndustrialMachineryProductGrid />
      </main>
    </div>
  );
}
