"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  MapPin,
  ChevronDown,
  ChevronRight,
  Search,
  Bell,
  Heart,
  User,
  PlusCircle,
  Headset,
  Settings,
  Menu,
  Layers,
} from "lucide-react";

export const BusinessNavbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Location Selector
  const [selectedLocation, setSelectedLocation] = useState("Chennai, TN");
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  // Search Expansion
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Profile Dropdown
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  // Categories Dropdown in Subnav
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const categoriesRef = useRef<HTMLDivElement>(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setIsSearchOpen(false);
      }
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(e.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(e.target as Node)
      ) {
        setIsCategoriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  const isHomeActive = pathname === "/";
  const isB2bActive = pathname.startsWith("/b2b");
  const isB2cActive = pathname.startsWith("/b2c-gst");
  const isOrdersActive = pathname.startsWith("/orders");

  return (
    <header className="sticky top-0 z-50 w-full select-none text-xs font-sans shadow-xs">
      {/* ========================================================================= */}
      {/* TIER 1: Main Top Navbar (60px height) */}
      {/* ========================================================================= */}
      <div className="bg-[#e9f4ff] pl-3 sm:pl-6 pr-1 sm:pr-2 py-2 flex items-center justify-between h-[60px] sm:h-[60px] border-b border-[#cde2f8] relative">
        {/* Left Group: 1PLACEE Logo + Location Pill with Name */}
        <div className="flex items-center gap-3.5 sm:gap-4 shrink-0 z-10">
          <Link
            href="/"
            className="flex items-center hover:opacity-90 transition select-none py-0.5"
          >
            <img
              src="/logo.png?v=2"
              alt="1Placee"
              className="h-24 sm:h-26 w-auto object-contain drop-shadow-xs"
            />
          </Link>

          {/* Location Pill Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              aria-label="Location"
              className="group flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/90 hover:bg-[#1559ac] border border-[#b8dcfa] shadow-2xs transition-all duration-200 cursor-pointer select-none text-[#1559ac] hover:text-white"
            >
              <MapPin className="w-4.5 h-4 text-[#1559ac] group-hover:text-white stroke-[2.2] shrink-0 transition-colors" />
              <div className="flex flex-col text-left leading-tight">
                <span className="mt-[-1.5px] font-bold text-[10px] sm:text-sm text-[#1e293b] group-hover:text-white truncate max-w-[130px] transition-colors">
                  {selectedLocation}
                </span>
              </div>
              <ChevronDown className="w-4 h-4.5 text-[#1559ac] group-hover:text-white shrink-0 ml-0.5 transition-colors" />
            </button>

            {isLocationOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 border border-slate-200 z-50 text-xs">
                {["Chennai, TN", "Bengaluru, KA", "Mumbai, MH", "Delhi, DL", "Hyderabad, TS"].map(
                  (loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => {
                        setSelectedLocation(loc);
                        setIsLocationOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 font-bold text-slate-700 hover:text-[#1559ac] transition"
                    >
                      {loc}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        {/* Center Group: Eclipse Container with Four Buttons: Home, B2B, B2C, Orders */}
        <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 bg-[#d7ebfc] p-1.5 rounded-full border border-[#b8dcfa] shadow-2xs z-10 pointer-events-auto">
          <Link
            href="/"
            className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-bold text-[13px] sm:text-sm transition duration-200 cursor-pointer ${
              isHomeActive
                ? "bg-[#1559ac] text-white shadow-sm"
                : "text-[#1559ac] hover:bg-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/b2b"
            className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-bold text-[13px] sm:text-sm transition duration-200 cursor-pointer ${
              isB2bActive
                ? "bg-[#1559ac] text-white shadow-sm"
                : "text-[#1559ac] hover:bg-white"
            }`}
          >
            B2B
          </Link>
          <Link
            href="/b2c-gst"
            className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-bold text-[13px] sm:text-sm transition duration-200 cursor-pointer ${
              isB2cActive
                ? "bg-[#1559ac] text-white shadow-sm"
                : "text-[#1559ac] hover:bg-white"
            }`}
          >
            B2C
          </Link>
          <Link
            href="/orders"
            className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-bold text-[13px] sm:text-sm transition duration-200 cursor-pointer ${
              isOrdersActive
                ? "bg-[#1559ac] text-white shadow-sm"
                : "text-[#1559ac] hover:bg-white"
            }`}
          >
            Orders
          </Link>
        </div>

        {/* Right Group: Search Box + Sell Product + Bell Notification + Wishlist + Cart + Profile + Bittool */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0 z-20">
          {/* 1. Search Box */}
          <div ref={searchContainerRef} className="relative flex items-center">
            {isSearchOpen ? (
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center bg-white rounded-full px-3.5 py-1.5 shadow-md w-44 sm:w-60 md:w-64 border border-[#b8dcfa] animate-in fade-in zoom-in-95 duration-200"
              >
                <Search className="w-4.5 h-4.5 text-[#1559ac] mr-2 shrink-0 stroke-[2.2]" />
                <input
                  type="text"
                  placeholder="Search wholesale & retail..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full text-xs sm:text-[13px] text-gray-900 outline-none placeholder:text-gray-400 bg-transparent"
                />
              </form>
            ) : (
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open Search"
                title="Search products..."
                className="group w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/90 hover:bg-[#1559ac] border border-[#b8dcfa] shadow-2xs text-[#1559ac] hover:text-white transition-all duration-200 cursor-pointer"
              >
                <Search className="w-5 h-5 text-[#1559ac] group-hover:text-white stroke-[2] transition-colors" />
              </button>
            )}
          </div>

          {/* 2. Sell Product Button */}
          <Link
            href="/sell"
            aria-label="Sell Product"
            className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-[13px] shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer select-none"
          >
            <PlusCircle className="w-4 h-4 text-slate-950 stroke-[2.5]" />
            <span>Sell Product</span>
          </Link>

          {/* 3. Notification Bell */}
          <button
            type="button"
            aria-label="Notifications"
            title="Notifications"
            className="group w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/90 hover:bg-[#1559ac] border border-[#b8dcfa] shadow-2xs text-[#1559ac] hover:text-white transition-all duration-200 cursor-pointer relative"
          >
            <Bell className="w-5 h-5 text-[#1559ac] group-hover:text-white stroke-[2] transition-colors" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#ff9900] ring-2 ring-white group-hover:ring-[#1559ac] transition-all" />
          </button>

          {/* 4. Wishlist Button */}
          <Link
            href="/wishlist"
            aria-label="Wishlist"
            title="Wishlist"
            className="group w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/90 hover:bg-[#1559ac] border border-[#b8dcfa] shadow-2xs text-[#1559ac] hover:text-white transition-all duration-200 cursor-pointer relative"
          >
            <Heart className="w-5 h-5 text-[#1559ac] group-hover:text-white stroke-[2] fill-transparent group-hover:fill-white transition-all" />
          </Link>

          {/* 5. Cart Button with Badge */}
          <Link
            href="/products"
            aria-label="Cart"
            title="Cart"
            className="group w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/90 hover:bg-[#1559ac] border border-[#b8dcfa] shadow-2xs text-[#1559ac] hover:text-white transition-all duration-200 cursor-pointer relative"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-[#1559ac] group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 2h3.2l2.4 11.5a1.8 1.8 0 0 0 1.8 1.5h10.4a1.8 1.8 0 0 0 1.8-1.4l1.6-7.6H5" />
              <line x1="9.5" y1="7" x2="9.5" y2="12" strokeWidth="2" />
              <line x1="13" y1="7" x2="13" y2="12" strokeWidth="2" />
              <line x1="16.5" y1="7" x2="16.5" y2="12" strokeWidth="2" />
              <circle cx="8.5" cy="19.5" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="17.5" cy="19.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-[#ff9900] text-black font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow">
              1
            </span>
          </Link>

          {/* 6. Profile with Icon + Name + Dropdown */}
          <div ref={profileMenuRef} className="relative">
            <button
              type="button"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              aria-label="Profile"
              className="group flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/90 hover:bg-[#1559ac] border border-[#b8dcfa] shadow-2xs text-[#1e293b] hover:text-white transition-all duration-200 cursor-pointer select-none"
            >
              <div className="w-6 h-6 rounded-full bg-[#1559ac] group-hover:bg-white text-white group-hover:text-[#1559ac] flex items-center justify-center font-bold text-xs shadow-xs transition-colors">
                <User className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col text-left leading-tight hidden sm:flex">
                <span className="mt-[-1.5px] font-bold text-[10px] sm:text-sm text-[#1e293b] group-hover:text-white max-w-[85px] transition-colors truncate">
                  Vinothkumar
                </span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#1559ac] group-hover:text-white transition-all duration-200" />
            </button>

            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl py-2 border border-gray-100 z-50 text-gray-800 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-4 py-2.5 border-b border-gray-100 bg-gray-50/70">
                  <p className="text-[11px] text-gray-500 font-medium">Business Account</p>
                  <p className="text-xs font-bold text-gray-900 truncate">vinothkumar@1place.in</p>
                </div>
                <div className="py-1">
                  <Link
                    href="/orders"
                    className="flex items-center px-4 py-2 text-xs font-semibold hover:bg-blue-50 hover:text-[#1559ac] transition"
                  >
                    Your Orders
                  </Link>
                  <Link
                    href="/contracts"
                    className="flex items-center px-4 py-2 text-xs font-semibold hover:bg-blue-50 hover:text-[#1559ac] transition"
                  >
                    Vendor Contracts
                  </Link>
                  <Link
                    href="/sell"
                    className="flex items-center px-4 py-2 text-xs font-bold text-amber-600 hover:bg-amber-50 transition"
                  >
                    Seller Portal
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Vertical Divider Line */}
          <div className="h-6 w-[1.5px] bg-[#b8dcfa] ml-0.5 mr-1" />

          {/* 7. Bittool / Equalizer Control Sliders Icon Button */}
          <button
            type="button"
            aria-label="Preferences & Bittool"
            title="Preferences & Bittool"
            className="group w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/90 hover:bg-[#1559ac] border border-[#b8dcfa] shadow-2xs transition-all duration-200 cursor-pointer overflow-hidden mr-0.5"
          >
            <img
              src="/equalizer-icon.png"
              alt="Bittool"
              className="w-5 h-5 object-contain transition-all duration-200 group-hover:brightness-0 group-hover:invert"
            />
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TIER 2: Subnav Ribbon (Exact 44px height) */}
      {/* Left side: Categories button; Right side: Help&Support & Settings */}
      {/* ========================================================================= */}
      <div className="bg-white pl-3 sm:pl-6 pr-3 sm:pr-4 py-1 flex items-center justify-between text-[13px] h-[44px] border-b border-gray-200/80 shadow-2xs relative select-none">
        {/* Left Side: Categories Button */}
        <div className="relative" ref={categoriesRef}>
          <button
            type="button"
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            aria-label="All Categories"
            className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-slate-100 text-slate-800 font-semibold transition cursor-pointer select-none text-xs sm:text-[13px] border border-slate-200 shadow-2xs hover:border-slate-300 active:scale-[0.98]"
          >
            <Menu className="w-4 h-4 text-[#1559ac] stroke-[2.2]" />
            <span>Categories</span>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${isCategoriesOpen ? "rotate-180 text-[#1559ac]" : ""}`} />
          </button>

          {/* Categories Dropdown Menu */}
          {isCategoriesOpen && (
            <div className="absolute left-0 top-[110%] w-72 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1">
                Wholesale Categories
              </div>
              <div className="max-h-[380px] overflow-y-auto divide-y divide-slate-50">
                {[
                  { name: "Machinery & Industrial Equipment", href: "/products?cat=machinery" },
                  { name: "Agriculture & Food", href: "/category/agriculture-food" },
                  { name: "Consumer Electronics & Smart Home", href: "/products?cat=electronics" },
                  { name: "Electrical & Electronic Components", href: "/products?cat=electrical" },
                  { name: "Chemicals, Raw Polymers & Resins", href: "/products?cat=chemicals" },
                  { name: "Construction, Stone & Real Estate", href: "/products?cat=construction" },
                  { name: "Auto, Motorcycle Parts & Accessories", href: "/products?cat=auto" },
                  { name: "Apparel & Accessories", href: "/products?cat=apparel" },
                  { name: "Lights & Lighting", href: "/products?cat=lighting" },
                  { name: "Packaging & Printing", href: "/products?cat=packaging" },
                ].map((cat, idx) => (
                  <Link
                    key={idx}
                    href={cat.href}
                    onClick={() => setIsCategoriesOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2 text-xs font-medium text-slate-700 hover:text-[#1559ac] hover:bg-sky-50/60 transition group"
                  >
                    <span className="truncate">{cat.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#1559ac] group-hover:translate-x-0.5 transition" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Fixed Group: Help&Support + Settings */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0 pl-1 z-10">
          <button
            type="button"
            aria-label="Help & Support"
            className="flex items-center gap-1.5 text-gray-600 hover:text-[#1559ac] hover:bg-gray-100 px-2.5 py-1 rounded-full text-xs sm:text-[13px] font-medium transition cursor-pointer select-none"
          >
            <Headset className="w-4 h-4 text-gray-600 group-hover:text-[#1559ac] stroke-[2.2]" />
            <span className="hidden sm:inline">Help&Support</span>
          </button>

          <button
            type="button"
            aria-label="Settings"
            className="flex items-center gap-1.5 text-gray-600 hover:text-[#1559ac] hover:bg-gray-100 px-2.5 py-1 rounded-full text-xs sm:text-[13px] font-medium transition cursor-pointer select-none"
          >
            <Settings className="w-4 h-4 text-gray-600 group-hover:text-[#1559ac] stroke-[2]" />
            <span className="hidden sm:inline">Settings</span>
          </button>
        </div>
      </div>
    </header>
  );
};
