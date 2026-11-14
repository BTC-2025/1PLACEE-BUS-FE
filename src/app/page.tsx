"use client";

import React from "react";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { HeroBannerWithAttachedCards } from "@/components/HeroBannerWithAttachedCards";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#eaeded] text-slate-800 font-sans">
      <BusinessNavbar />
      <main className="w-full">
        {/* Full Image Banner Carousel with Attached Cards Carousel */}
        <HeroBannerWithAttachedCards />
      </main>
    </div>
  );
}
