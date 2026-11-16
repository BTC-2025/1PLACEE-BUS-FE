"use client";

import React from "react";
import { BusinessNavbar } from "@/components/BusinessNavbar";

export default function B2BPage() {
  return (
    <div className="min-h-screen bg-[#f5f6f9] text-slate-800 font-sans">
      <BusinessNavbar />
      <main className="w-full">
        {/* Content below navbar */}
      </main>
    </div>
  );
}
