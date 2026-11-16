"use client";

import React from "react";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { B2BHeroSection } from "@/components/B2BHeroSection";

export default function B2BPage() {
  return (
    <div className="min-h-screen bg-[#f5f6f9] text-slate-800 font-sans">
      <BusinessNavbar />
      <main className="w-full">
        {/* B2B Hero Section: Left Top Categories + Center Carousel Hero Banner + Right 2 Promo Cards + More Value Adds */}
        <B2BHeroSection />
      </main>
    </div>
  );
}
