"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
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
  Filter,
  CheckCircle2,
  Star,
  ShieldCheck,
  Send,
  HelpCircle,
  Smartphone,
  Scan,
  Grid,
  List
} from "lucide-react";
import { PRODUCT_LIST_DATA } from "../../data/categoryAgriData";

function ProductListContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState<"product" | "supplier" | "certified" | "secured">("product");
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [inquiryModalProduct, setInquiryModalProduct] = useState<any | null>(null);
  const [inquirySent, setInquirySent] = useState(false);

  // Filter chips (Fresh Carrot, Red Carrot, Dehydrated, Pickled Radish...)
  const filterChips = [
    "All",
    "Fresh Carrot",
    "Red Carrot",
    "Dehydrated Carrot Granule",
    "Pickled Radish",
    "White Radish",
    "White Garlic",
    "Air-Dried Ginger"
  ];

  const filteredProducts = PRODUCT_LIST_DATA.filter((p) => {
    const matchesQuery = !searchQuery || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.subCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag = selectedTag === "All" || p.tags.includes(selectedTag);
    return matchesQuery && matchesTag;
  });

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setInquiryModalProduct(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#f5f6f9] text-slate-800 font-sans text-xs sm:text-sm pb-16">
      
      {/* RIGHT FLOATING TOOLBAR */}
      <aside className="fixed right-2 top-1/2 -translate-y-1/2 z-50 bg-white border border-slate-200 rounded-lg shadow-xl p-1 flex flex-col items-center gap-3 text-[10px] text-slate-600">
        <Link href="/rfq" className="flex flex-col items-center gap-0.5 p-1.5 hover:text-[#1862c6] group">
          <Megaphone className="w-4 h-4 text-slate-700 group-hover:text-[#1862c6]" />
          <span>RFQ</span>
        </Link>
        <button onClick={() => alert("Customer Support: Online")} className="flex flex-col items-center gap-0.5 p-1.5 hover:text-[#1862c6] group">
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
          
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-md bg-white text-[#1862c6] flex items-center justify-center font-black text-xl shadow-xs">
              1P
            </div>
            <div>
              <span className="text-xl font-black text-white tracking-tight">
                1PLACE<span className="text-amber-300">.BIZ</span>
              </span>
              <span className="block text-[8px] font-bold text-blue-100 uppercase tracking-widest">
                Global B2B Marketplace
              </span>
            </div>
          </Link>

          {/* Search Box */}
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
                placeholder="Search products or suppliers..." 
                className="w-full px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
              />

              <button className="px-3 text-slate-400 hover:text-slate-600 hidden sm:flex items-center justify-center">
                <Camera className="w-4 h-4" />
              </button>

              <button className="bg-[#1862c6] hover:bg-blue-700 text-white px-5 transition-colors flex items-center justify-center shrink-0">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-5 shrink-0 text-xs text-white font-medium">
            <Link href="/rfq" className="flex flex-col items-center gap-0.5 hover:text-amber-300">
              <Megaphone className="w-4 h-4 text-amber-300" />
              <span className="font-semibold text-amber-300">Post My RFQ</span>
            </Link>
            <button onClick={() => alert("0 Messages")} className="flex flex-col items-center gap-0.5 hover:text-blue-100">
              <MessageSquare className="w-4 h-4" />
              <span>Messages</span>
            </button>
            <button onClick={() => alert("Inquiry Basket: Active")} className="flex flex-col items-center gap-0.5 hover:text-blue-100">
              <ShoppingBag className="w-4 h-4" />
              <span>Inquiry Basket</span>
            </button>
            <button onClick={() => alert("Account Portal")} className="flex flex-col items-center gap-0.5 hover:text-blue-100">
              <User className="w-4 h-4" />
              <span>Account</span>
            </button>
          </div>

        </div>
      </header>

      {/* 2. SUB HEADER TABS (MATCHING FOURTH SCREENSHOT) */}
      <div className="bg-white border-b border-slate-200 px-4 py-2.5 shadow-2xs">
        <div className="max-w-[1380px] mx-auto flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-8 text-xs font-bold text-slate-700">
            <button 
              onClick={() => setActiveTab("product")}
              className={`pb-1 transition-colors ${activeTab === "product" ? "text-[#1862c6] border-b-2 border-[#1862c6]" : "hover:text-slate-900"}`}
            >
              Product List
            </button>
            <button 
              onClick={() => setActiveTab("supplier")}
              className={`pb-1 transition-colors ${activeTab === "supplier" ? "text-[#1862c6] border-b-2 border-[#1862c6]" : "hover:text-slate-900"}`}
            >
              Supplier List
            </button>
            <button 
              onClick={() => setActiveTab("certified")}
              className={`pb-1 transition-colors ${activeTab === "certified" ? "text-[#1862c6] border-b-2 border-[#1862c6]" : "hover:text-slate-900"}`}
            >
              Certified Manufacturers
            </button>
            <button 
              onClick={() => setActiveTab("secured")}
              className={`pb-1 transition-colors ${activeTab === "secured" ? "text-[#1862c6] border-b-2 border-[#1862c6]" : "hover:text-slate-900"}`}
            >
              Secured Trading
            </button>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link href="/category/agriculture-food" className="hover:text-[#1862c6] flex items-center gap-1 font-semibold">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Category Tree
            </Link>
          </div>

        </div>
      </div>

      {/* 3. MAIN PRODUCT LISTING PAGE (MATCHING FOURTH SCREENSHOT) */}
      <main className="max-w-[1380px] mx-auto px-4 py-4">
        
        {/* Top Tag Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar">
          {filterChips.map((chip) => (
            <button
              key={chip}
              onClick={() => setSelectedTag(chip)}
              className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors ${selectedTag === chip ? "bg-[#1862c6] text-white shadow-xs" : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"}`}
            >
              {chip}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-6 items-start">
          
          {/* LEFT FILTERS SIDEBAR (Matching Screenshot: New Selection, Category, Usage, Color...) */}
          <div className="col-span-12 md:col-span-3 bg-white border border-slate-200 rounded-lg p-4 shadow-2xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 font-black text-xs text-slate-900">
              <span className="flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-[#1862c6]" /> Filters
              </span>
              <button onClick={() => { setSelectedTag("All"); setSearchQuery(""); }} className="text-slate-400 hover:text-[#1862c6] font-normal text-[11px]">
                Reset All
              </button>
            </div>

            {/* New Selection */}
            <div>
              <h4 className="font-bold text-xs text-slate-900 mb-2">New Selection</h4>
              <ul className="space-y-1 text-xs text-slate-600">
                <li className="hover:text-[#1862c6] cursor-pointer">Carrot Beetroot Radish</li>
                <li className="hover:text-[#1862c6] cursor-pointer">Carrot Radish Brinjal</li>
                <li className="hover:text-[#1862c6] cursor-pointer">Radishes Cabbage</li>
              </ul>
            </div>

            {/* Category Hierarchy */}
            <div>
              <div className="flex items-center justify-between font-bold text-xs text-slate-900 mb-1">
                <span>Category</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </div>
              <div className="text-xs text-slate-600 pl-2 space-y-1">
                <div className="font-semibold text-slate-800">Agriculture & Food</div>
                <div className="pl-3 text-slate-600 font-medium">Vegetable & Preparation</div>
                <div className="pl-6 text-[#1862c6] font-bold">Carrot & Radish</div>
              </div>
            </div>

            {/* Usage */}
            <div>
              <div className="flex items-center justify-between font-bold text-xs text-slate-900 mb-1">
                <span>Usage</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex justify-between hover:text-[#1862c6] cursor-pointer">
                  <span>For Vegetable</span> <span className="text-slate-400">(1,404)</span>
                </li>
                <li className="flex justify-between hover:text-[#1862c6] cursor-pointer">
                  <span>For Processing Preserved</span> <span className="text-slate-400">(435)</span>
                </li>
                <li className="flex justify-between hover:text-[#1862c6] cursor-pointer">
                  <span>For Fruit</span> <span className="text-slate-400">(405)</span>
                </li>
              </ul>
            </div>

            {/* Color */}
            <div>
              <div className="flex items-center justify-between font-bold text-xs text-slate-900 mb-1">
                <span>Color</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex justify-between hover:text-[#1862c6] cursor-pointer">
                  <span>Red</span> <span className="text-slate-400">(588)</span>
                </li>
                <li className="flex justify-between hover:text-[#1862c6] cursor-pointer">
                  <span>White</span> <span className="text-slate-400">(160)</span>
                </li>
                <li className="flex justify-between hover:text-[#1862c6] cursor-pointer">
                  <span>Green</span> <span className="text-slate-400">(15)</span>
                </li>
              </ul>
            </div>

          </div>

          {/* RIGHT PRODUCT PRICE LIST (MATCHING FOURTH SCREENSHOT EXACT CARD TILES) */}
          <div className="col-span-12 md:col-span-9 space-y-4">
            
            {filteredProducts.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-lg border border-slate-200">
                <p className="text-slate-500 text-sm">No products found matching "{searchQuery}".</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedTag("All"); }}
                  className="mt-3 bg-[#1862c6] text-white font-bold px-4 py-2 rounded text-xs"
                >
                  View All Products
                </button>
              </div>
            ) : (
              filteredProducts.map((prod) => (
                <div 
                  key={prod.id}
                  className="bg-white border border-slate-200 hover:border-[#1862c6] rounded-lg p-5 shadow-2xs hover:shadow-md transition-all flex flex-col md:flex-row gap-5"
                >
                  {/* Image Column */}
                  <div className="w-full md:w-56 aspect-4/3 md:aspect-square bg-slate-50 rounded-lg overflow-hidden border border-slate-200 shrink-0 relative group">
                    <img 
                      src={prod.images[0]} 
                      alt={prod.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      1/{prod.images.length > 1 ? prod.images.length : 6}
                    </span>
                  </div>

                  {/* Details Column */}
                  <div className="flex-1 flex flex-col justify-between space-y-2.5">
                    <div>
                      <h3 className="font-bold text-sm text-slate-900 leading-snug hover:text-[#1862c6] cursor-pointer">
                        {prod.title}
                      </h3>

                      {/* Live Price & MOQ Highlight (Matching Fourth Screenshot) */}
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-lg font-black text-slate-900">
                          {prod.priceRange}
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">/{prod.unit}</span>
                        <span className="text-xs font-bold text-slate-600 ml-3">
                          {prod.moq}
                        </span>
                      </div>

                      <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                        {prod.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {prod.tags.map((t, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Supplier & Contact Button Column (Matching Fourth Screenshot) */}
                  <div className="w-full md:w-60 border-t md:border-t-0 md:border-l border-slate-100 pt-3 md:pt-0 md:pl-5 flex flex-col justify-between shrink-0">
                    <div>
                      <div className="font-bold text-xs text-slate-800 hover:text-[#1862c6] cursor-pointer">
                        {prod.supplier.name}
                      </div>

                      <div className="flex items-center gap-2 mt-1.5 text-xs">
                        {prod.supplier.isAudited && (
                          <span className="bg-blue-50 text-[#1862c6] border border-blue-200 text-[10px] font-bold px-1.5 py-0.2 rounded flex items-center gap-1">
                            Audited
                          </span>
                        )}
                        <span className="flex items-center gap-0.5 text-amber-500 font-bold text-xs">
                          <Star className="w-3.5 h-3.5 fill-amber-500" /> {prod.supplier.rating}
                        </span>
                        <span className="text-[10px] text-slate-400">"{prod.supplier.responseTime}"</span>
                      </div>

                      <div className="text-[11px] text-slate-400 mt-1">
                        {prod.supplier.location} • {prod.supplier.verifiedYears} Yrs
                      </div>
                    </div>

                    <div className="pt-4 space-y-2">
                      <button 
                        onClick={() => setInquiryModalProduct(prod)}
                        className="w-full bg-[#e60012] hover:bg-[#c80010] text-white font-bold py-2 rounded text-xs transition-colors shadow-xs"
                      >
                        Contact Now
                      </button>
                      <button 
                        onClick={() => alert(`Sample requested for ${prod.title}. Supplier notified!`)}
                        className="w-full border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold py-1.5 rounded text-xs"
                      >
                        Request Sample
                      </button>
                    </div>
                  </div>

                </div>
              ))
            )}

          </div>

        </div>
      </main>

      {/* CONTACT NOW DIRECT INQUIRY MODAL */}
      {inquiryModalProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95">
            <button 
              onClick={() => setInquiryModalProduct(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-lg font-bold"
            >
              ✕
            </button>

            <span className="text-[10px] font-black uppercase text-[#1862c6] bg-blue-50 px-2 py-0.5 rounded">
              Direct Manufacturer Inquiry
            </span>

            <h3 className="text-base font-black text-slate-900 mt-2">
              {inquiryModalProduct.title}
            </h3>
            <p className="text-xs text-slate-500">Supplier: {inquiryModalProduct.supplier.name}</p>

            <form onSubmit={handleSendInquiry} className="space-y-3 mt-4">
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs">
                <div className="flex justify-between font-semibold">
                  <span>Price Range:</span>
                  <span className="text-slate-900 font-bold">{inquiryModalProduct.priceRange} / {inquiryModalProduct.unit}</span>
                </div>
                <div className="flex justify-between text-slate-500 mt-1">
                  <span>MOQ:</span>
                  <span>{inquiryModalProduct.moq}</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Quantity Needed:</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. 500 Boxes or 20 Tons"
                  className="w-full border border-slate-300 rounded p-2 text-xs focus:border-[#1862c6] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Message to Supplier:</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Hello, I am interested in this product. Please share your FOB pricing, lead time, and certificate documents..."
                  className="w-full border border-slate-300 rounded p-2 text-xs focus:border-[#1862c6] focus:outline-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-[#1862c6] hover:bg-blue-700 text-white font-bold py-2.5 rounded text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{inquirySent ? "✓ Inquiry Sent to Supplier!" : "Send Direct Inquiry Now"}</span>
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default function ProductListPage() {
  return (
    <React.Suspense fallback={<div className="p-12 text-center text-xs text-slate-500 font-semibold">Loading Verified Products & Price Lists...</div>}>
      <ProductListContent />
    </React.Suspense>
  );
}
