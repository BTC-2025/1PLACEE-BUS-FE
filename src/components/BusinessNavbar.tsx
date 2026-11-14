"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Camera,
  ChevronDown,
  ShoppingBag,
  User,
  MessageSquare,
  FileText,
  Tag,
  Package,
} from "lucide-react";

export const BusinessNavbar: React.FC = () => {
  const [searchCategory, setSearchCategory] = useState("All");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-[#1862c6] border-b border-blue-700 px-4 py-2.5 sticky top-0 z-40 shadow-md select-none">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
        {/* [1PLACEE Business Logo] -> [Home] */}
        <div className="flex items-center gap-6 shrink-0">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-white text-[#1862c6] font-black px-2 py-0.5 rounded text-sm tracking-tighter">
              1P
            </div>
            <div>
              <span className="text-xl font-black text-white tracking-tight flex items-center">
                1PLACEE<span className="text-amber-300 ml-1 text-sm font-extrabold uppercase bg-blue-800/60 px-1.5 py-0.5 rounded">Business</span>
              </span>
            </div>
          </Link>

          {/* Top Navbar Core Links: [Home] -> [B2C] -> [B2B] -> [Orders] */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-bold text-blue-100">
            <Link
              href="/"
              className="px-3 py-1.5 rounded-lg hover:bg-white/10 hover:text-white transition flex items-center gap-1"
            >
              Home
            </Link>
            <Link
              href="/b2c-gst"
              className="px-3 py-1.5 rounded-lg hover:bg-white/10 hover:text-white transition flex items-center gap-1 text-amber-200"
              title="B2C with Verified GST Invoicing & ITC"
            >
              <Tag className="w-3.5 h-3.5" />
              <span>B2C (GST Tax Invoice)</span>
            </Link>
            <Link
              href="/b2b"
              className="px-3 py-1.5 rounded-lg hover:bg-white/10 hover:text-white transition flex items-center gap-1"
              title="B2B Bulk Wholesale Hub (Price Slabs & MOQ)"
            >
              <Package className="w-3.5 h-3.5" />
              <span>B2B Wholesale Hub</span>
            </Link>
            <Link
              href="/orders"
              className="px-3 py-1.5 rounded-lg hover:bg-white/10 hover:text-white transition flex items-center gap-1"
              title="Track Business & GST Orders"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Orders</span>
            </Link>
          </nav>
        </div>

        {/* Global Search Bar */}
        <div className="flex-1 max-w-xl hidden sm:flex items-center">
          <div className="w-full flex rounded-full border-2 border-white overflow-hidden shadow-xs bg-white text-slate-800">
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                className="h-full px-3 text-xs font-semibold text-slate-700 flex items-center gap-1 hover:bg-slate-50 border-r border-slate-200 bg-slate-50/50 cursor-pointer"
              >
                <span>{searchCategory}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>
              {showCategoryDropdown && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-md shadow-lg py-1 z-50 text-xs w-32">
                  {["All", "B2B Bulk", "B2C Retail", "Suppliers"].map((cat) => (
                    <div
                      key={cat}
                      onClick={() => {
                        setSearchCategory(cat);
                        setShowCategoryDropdown(false);
                      }}
                      className="px-3 py-1.5 hover:bg-slate-50 cursor-pointer"
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search wholesale products, bulk slabs, verified suppliers..."
              className="w-full px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
            />

            <button className="px-3 text-slate-400 hover:text-slate-600 hidden md:flex items-center justify-center">
              <Camera className="w-4 h-4" />
            </button>

            <Link
              href={`/products?q=${encodeURIComponent(searchQuery || "all")}`}
              className="bg-[#1862c6] hover:bg-blue-700 text-white px-4 transition-colors flex items-center justify-center shrink-0"
            >
              <Search className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Navigation & [Sell Button] */}
        <div className="flex items-center gap-4 shrink-0 text-xs text-white font-medium">
          <Link
            href="/messages"
            className="hidden lg:flex flex-col items-center gap-0.5 hover:text-amber-200 transition"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-[11px]">Chat</span>
          </Link>
          <Link
            href="/products"
            className="flex flex-col items-center gap-0.5 hover:text-amber-200 transition"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="text-[11px]">Cart</span>
          </Link>
          <Link
            href="/account"
            className="hidden sm:flex flex-col items-center gap-0.5 hover:text-amber-200 transition"
          >
            <User className="w-4 h-4" />
            <span className="text-[11px]">Account</span>
          </Link>

          {/* SELL BUTTON: Unified Seller Hub (Sell B2B & B2C with Verified GST) */}
          <Link
            href="/sell"
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-4 py-1.5 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 text-xs cursor-pointer active:scale-95"
          >
            <span>Sell on 1PLACEE</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
