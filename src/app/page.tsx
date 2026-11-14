"use client";

import React from "react";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { HeroBannerWithAttachedCards } from "@/components/HeroBannerWithAttachedCards";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f6f9] text-slate-800 font-sans">
      <BusinessNavbar />
      <main className="w-full">
        {/* Clean canvas */}
      </main>
    </div>
  );
}
