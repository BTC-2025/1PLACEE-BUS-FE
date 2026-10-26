"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Menu, 
  ChevronRight, 
  ChevronDown, 
  Camera, 
  Megaphone, 
  MessageSquare, 
  ShoppingBag, 
  User, 
  ArrowLeft,
  Sparkles,
  Layers,
  HelpCircle,
  Smartphone,
  Scan
} from "lucide-react";
import { CATEGORY_AGRI_DATA } from "../../../data/categoryAgriData";

export default function CategoryAgriPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("Vegetables & Fruits");

  return (
    <div className="min-h-screen bg-[#f5f6f9] text-slate-800 font-sans text-xs sm:text-sm pb-16">
      
      {/* RIGHT FLOATING TOOLBAR */}
      <aside className="fixed right-2 top-1/2 -translate-y-1/2 z-50 bg-white border border-slate-200 rounded-lg shadow-xl p-1 flex flex-col items-center gap-3 text-[10px] text-slate-600">
        <Link href="/rfq" className="flex flex-col items-center gap-0.5 p-1.5 hover:text-[#1862c6] group">
          <Megaphone className="w-4 h-4 text-slate-700 group-hover:text-[#1862c6]" />
          <span>RFQ</span>
        </Link>
        <button onClick={() => alert("Help Center: Available 24/7")} className="flex flex-col items-center gap-0.5 p-1.5 hover:text-[#1862c6] group">
          <HelpCircle className="w-4 h-4 text-slate-700 group-hover:text-[#1862c6]" />
          <span>Help</span>
        </button>
        <button className="flex flex-col items-center gap-0.5 p-1.5 hover:text-[#1862c6] group">
          <Smartphone className="w-4 h-4 text-slate-700 group-hover:text-[#1862c6]" />
          <span>APP</span>
        </button>
        <button className="flex flex-col items-center gap-0.5 p-1.5 hover:text-[#1862c6] group">
          <Scan className="w-4 h-4 text-slate-700 group-hover:text-[#1862c6]" />
          <span className="text-center leading-tight">Sourcing<br />Lens</span>
        </button>
      </aside>

      {/* 1. TOP HEADER (BLUE BACKGROUND AS REQUESTED) */}
      <header className="bg-[#1862c6] text-white border-b border-blue-700 px-4 py-3 sticky top-0 z-40 shadow-md">
        <div className="max-w-[1380px] mx-auto flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-md bg-white text-[#1862c6] flex items-center justify-center font-black text-xl shadow-xs">
              1P
            </div>
            <div>
              <span className="text-xl font-black text-white tracking-tight">
                1PLACE<span className="text-amber-300">.BIZ</span>
              </span>
              <span className="block text-[8px] font-bold text-blue-100 uppercase tracking-widest">
                Global B2B Agriculture Marketplace
              </span>
            </div>
          </Link>

          {/* Search Bar with Categories */}
          <div className="flex-1 max-w-2xl flex items-center">
            <div className="w-full flex rounded-full border-2 border-white overflow-hidden shadow-xs bg-white text-slate-800">
              <div className="px-3 text-xs font-semibold text-slate-700 flex items-center gap-1 border-r border-slate-200 bg-slate-50/80">
                <span>Products</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </div>

              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Agriculture & Food products, suppliers..." 
                className="w-full px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
              />

              <button className="px-3 text-slate-400 hover:text-slate-600 hidden sm:flex items-center justify-center">
                <Camera className="w-4 h-4" />
              </button>

              <Link 
                href={`/products?q=${encodeURIComponent(searchQuery || "agriculture")}`}
                className="bg-[#1862c6] hover:bg-blue-700 text-white px-5 transition-colors flex items-center justify-center shrink-0"
              >
                <Search className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-5 shrink-0 text-xs text-white font-medium">
            <Link href="/rfq" className="flex flex-col items-center gap-0.5 hover:text-amber-300">
              <Megaphone className="w-4 h-4 text-amber-300" />
              <span className="font-semibold text-amber-300">Post My RFQ</span>
            </Link>
            <button onClick={() => alert("0 Messages")} className="flex flex-col items-center gap-0.5 hover:text-blue-100">
              <MessageSquare className="w-4 h-4" />
              <span>Messages</span>
            </button>
            <Link href="/products" className="flex flex-col items-center gap-0.5 hover:text-blue-100">
              <ShoppingBag className="w-4 h-4" />
              <span>Inquiry Basket</span>
            </Link>
            <button onClick={() => alert("Account Portal")} className="flex flex-col items-center gap-0.5 hover:text-blue-100">
              <User className="w-4 h-4" />
              <span>Account</span>
            </button>
          </div>

        </div>
      </header>

      {/* 2. SUB-NAV BREADCRUMB */}
      <div className="bg-white border-b border-slate-200 px-4 py-2.5 shadow-2xs">
        <div className="max-w-[1380px] mx-auto flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-[#1862c6] flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </Link>
            <span>/</span>
            <span className="font-bold text-slate-900">Agriculture & Food</span>
            <span>/</span>
            <span className="text-[#1862c6] font-semibold">{activeSection}</span>
          </div>

          <Link href="/products" className="text-xs font-bold text-[#1862c6] hover:underline flex items-center gap-1">
            Browse All Price Lists <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* 3. IN-DEPTH CATEGORY LAYOUT (MATCHING USER THIRD SCREENSHOT) */}
      <main className="max-w-[1380px] mx-auto px-4 py-6">
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden grid grid-cols-12 min-h-[550px]">
          
          {/* LEFT SUB-SECTIONS ACCORDION / TABS (Vegetables & Fruits, Food & Beverage, Additives & Extracts) */}
          <div className="col-span-12 md:col-span-3 border-r border-slate-200 p-4 bg-slate-50/50">
            <div className="font-black text-sm text-slate-900 pb-3 mb-3 border-b border-slate-200 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#1862c6]" />
              <span>Agriculture & Food</span>
            </div>

            <div className="space-y-4">
              {CATEGORY_AGRI_DATA.subSections.map((sec, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveSection(sec.title)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${activeSection === sec.title ? "bg-white border-[#1862c6] shadow-xs" : "bg-white/60 border-slate-200 hover:border-slate-300"}`}
                >
                  <div className="flex items-center justify-between font-bold text-xs text-slate-900">
                    <span className={activeSection === sec.title ? "text-[#1862c6]" : ""}>{sec.title}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ${activeSection === sec.title ? "text-[#1862c6]" : "text-slate-400"}`} />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                    {sec.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200">
              <Link 
                href="/rfq" 
                className="w-full bg-[#1862c6] hover:bg-blue-700 text-white font-bold py-2 rounded text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
              >
                <Megaphone className="w-3.5 h-3.5" />
                <span>Post Sourcing RFQ</span>
              </Link>
            </div>
          </div>

          {/* RIGHT PRODUCT GRID (Garlic, Ginger, Onion, Chilli, Potato, Carrot, Extracts, Bulking Agents...) */}
          <div className="col-span-12 md:col-span-9 p-6">
            <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-100">
              <div>
                <h2 className="text-base font-black text-slate-900">{activeSection}</h2>
                <p className="text-xs text-slate-400">Click any card to open the live B2B wholesale price list & specifications</p>
              </div>
              <Link href="/products?q=carrot" className="text-xs font-bold text-[#1862c6] hover:underline flex items-center gap-1">
                View Price Comparison <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Grid matching the third screenshot */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {CATEGORY_AGRI_DATA.featuredProducts.map((prod) => (
                <Link 
                  key={prod.id}
                  href={`/products?q=${encodeURIComponent(prod.searchQuery)}`}
                  className="group flex flex-col border border-slate-200 hover:border-[#1862c6] rounded-lg p-3 bg-white hover:shadow-md transition-all text-center"
                >
                  <div className="text-xs font-bold text-slate-800 mb-2 truncate group-hover:text-[#1862c6]">
                    {prod.name}
                  </div>
                  <div className="aspect-square bg-slate-50 rounded-md overflow-hidden mb-2 border border-slate-100">
                    <img 
                      src={prod.img} 
                      alt={prod.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[10px] text-slate-400 group-hover:text-blue-600 font-medium">
                    View Price List →
                  </span>
                </Link>
              ))}
            </div>

            {/* Quick Sourcing Banner */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-xs text-slate-900">Looking for custom mesh packaging or phytosanitary certs?</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Tell our verified manufacturers your MOQ and destination port.</p>
              </div>
              <Link 
                href="/rfq" 
                className="bg-[#1862c6] hover:bg-blue-700 text-white font-bold px-4 py-2 rounded text-xs shadow-xs transition-colors"
              >
                Get Instant Quotes
              </Link>
            </div>

          </div>

        </div>
      </main>

    </div>
  );
}
