"use client";

import React, { useState, useEffect } from "react";
import { Megaphone, HelpCircle, Smartphone, Scan } from "lucide-react";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { BusinessFooter } from "@/components/BusinessFooter";
import { HeroSection } from "@/components/HeroSection";
import { CatalogShowcases } from "@/components/CatalogShowcases";
import { EasySourcingRfq } from "@/components/EasySourcingRfq";
import { TradeServices } from "@/components/TradeServices";
import { ItemDetailModal } from "@/components/ItemDetailModal";
import { heroSlides } from "@/data/homeData";

export default function BuyerHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeModalItem, setActiveModalItem] = useState<{
    title: string;
    category?: string;
    img?: string;
    price?: string;
    moq?: string;
  } | null>(null);

  // Auto carousel slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleOpenItem = (item: {
    title: string;
    category?: string;
    img?: string;
    price?: string;
    moq?: string;
  }) => {
    setActiveModalItem(item);
  };

  return (
    <div className="min-h-screen bg-[#f5f6f9] text-slate-800 font-sans text-xs sm:text-sm relative pb-16">
      {/* FIXED RIGHT FLOATING TOOLBAR */}
      <aside className="fixed right-2 top-1/2 -translate-y-1/2 z-50 bg-white border border-slate-200 rounded-lg shadow-xl p-1 flex flex-col items-center gap-3 text-[10px] text-slate-600">
        <button
          onClick={() => handleOpenItem({ title: "Custom Sourcing RFQ Form", category: "Global Inquiry" })}
          className="flex flex-col items-center gap-0.5 p-1.5 hover:text-[#1862c6] group cursor-pointer"
        >
          <Megaphone className="w-4 h-4 text-slate-700 group-hover:text-[#1862c6]" />
          <span>RFQ</span>
        </button>
        <button
          onClick={() => alert("Customer Support: 24/7 Live Assistance is active")}
          className="flex flex-col items-center gap-0.5 p-1.5 hover:text-[#1862c6] group cursor-pointer"
        >
          <HelpCircle className="w-4 h-4 text-slate-700 group-hover:text-[#1862c6]" />
          <span>Help</span>
        </button>
        <button
          onClick={() => alert("1PLACEE Business App: Available on Android & iOS")}
          className="flex flex-col items-center gap-0.5 p-1.5 hover:text-[#1862c6] group cursor-pointer"
        >
          <Smartphone className="w-4 h-4 text-slate-700 group-hover:text-[#1862c6]" />
          <span>APP</span>
        </button>
        <button
          onClick={() => alert("Sourcing Lens: AI camera recognition active")}
          className="flex flex-col items-center gap-0.5 p-1.5 hover:text-[#1862c6] group cursor-pointer"
        >
          <Scan className="w-4 h-4 text-slate-700 group-hover:text-[#1862c6]" />
          <span className="text-center leading-tight">Sourcing<br />Lens</span>
        </button>
      </aside>

      {/* 1. TOP NAVBAR: [1PLACEE Business Logo] -> [Home] -> [B2C] -> [B2B] -> [Orders] -> [Sell Button] */}
      <BusinessNavbar />

      {/* 2. HERO SECTION & CATEGORY FLYOUT */}
      <HeroSection
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        onOpenItem={handleOpenItem}
      />

      {/* 3. CATALOG SHOWCASES & FACTORY LIVE */}
      <CatalogShowcases onOpenItem={handleOpenItem} />

      {/* 4. EASY SOURCING & RFQ FORM BANNER */}
      <EasySourcingRfq
        onSuccessToast={(msg) => alert(msg)}
      />

      {/* 5. SOURCING SOLUTIONS & GLOBAL TRADE EXPOS */}
      <TradeServices onOpenItem={handleOpenItem} />

      {/* 6. BUSINESS FOOTER */}
      <BusinessFooter onOpenItem={handleOpenItem} />

      {/* 7. INTERACTIVE DETAIL & INQUIRY POPUP */}
      <ItemDetailModal
        item={activeModalItem}
        onClose={() => setActiveModalItem(null)}
      />
    </div>
  );
}
