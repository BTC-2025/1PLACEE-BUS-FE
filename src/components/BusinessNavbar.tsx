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
  Headset,
  Settings,
  Menu,
  Layers,
  Camera,
  Store,
  Target,
  Mail,
  Mic,
  Sparkles,
} from "lucide-react";
import { CategoriesCarouselMegaMenu } from "./CategoriesCarouselMegaMenu";

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
  const megaMenuRef = useRef<HTMLDivElement>(null);

  // Search Type Dropdown ("Products", "Suppliers", "Audited Factory", "AI Mode")
  const [searchType, setSearchType] = useState<"Products" | "Suppliers" | "Audited Factory" | "AI Mode">("Products");
  const [isSearchTypeOpen, setIsSearchTypeOpen] = useState(false);
  const searchTypeRef = useRef<HTMLDivElement>(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(target)
      ) {
        setIsSearchOpen(false);
      }
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(target)
      ) {
        setIsProfileMenuOpen(false);
      }
      if (
        searchTypeRef.current &&
        !searchTypeRef.current.contains(target)
      ) {
        setIsSearchTypeOpen(false);
      }
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(target) &&
        megaMenuRef.current &&
        !megaMenuRef.current.contains(target)
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
  const isB2cActive = pathname.startsWith("/b2c-gst") || pathname.startsWith("/products") || pathname.startsWith("/categories");
  const isOrdersActive = pathname.startsWith("/orders");

  return (
    <header className="sticky top-0 z-50 w-full select-none text-xs font-sans shadow-xs">
      {/* ========================================================================= */}
      {/* TIER 1: Main Top Navbar (60px height) */}
      {/* ========================================================================= */}
      <div
        className="pl-3 sm:pl-6 pr-1 sm:pr-2 py-2 flex items-center justify-between h-[60px] sm:h-[60px] border-b relative"
        style={{
          backgroundColor: "#0e0f89",
          borderColor: "#0a0b6e",
          color: "#0e0f89"
        }}
      >
        {/* Left Group: 1PLACEE Logo + Location Pill with Name */}
        <div className="flex items-center gap-3.5 sm:gap-4 shrink-0 z-10">
          <Link
            href="/"
            className="flex items-center hover:opacity-90 transition select-none py-0.5 h-[50px] overflow-hidden"
          >
            <img
              src="/logo.png?v=2"
              alt="1Placee"
              className="px-1 py-2 h-11 sm:h-8 w-auto bg-white rounded-2xl object-contain drop-shadow-xs"
            />
          </Link>

          {/* Location Pill Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              aria-label="Location"
              className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all duration-200 cursor-pointer select-none"
            >
              <MapPin className="w-4 h-4 text-[#0e0f89] stroke-[2.2] shrink-0" />
              <div className="flex flex-col text-left leading-tight">
                <span className="font-bold text-xs sm:text-[13px] text-[#0e0f89] truncate max-w-[130px]">
                  {selectedLocation}
                </span>
              </div>
              <ChevronDown className="w-4 h-4 text-[#0e0f89] shrink-0 ml-0.5" />
            </button>

            {isLocationOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 border border-slate-200 z-50 text-xs text-slate-800">
                {["Chennai, TN", "Vellore", "trichy", "Madurai", "Bangalore"].map(
                  (loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => {
                        setSelectedLocation(loc);
                        setIsLocationOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 font-bold text-slate-700 hover:text-[#0e0f89] transition"
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
        <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 bg-white p-1 rounded-full border border-slate-200 shadow-xs z-10 pointer-events-auto">
          <Link
            href="/"
            className={`px-4 sm:px-5 py-1.5 rounded-full font-bold text-[13px] sm:text-sm transition duration-200 cursor-pointer ${isHomeActive
              ? "bg-[#0e0f89] text-white shadow-sm"
              : "text-[#0e0f89] hover:bg-slate-100"
              }`}
          >
            Home
          </Link>
          <Link
            href="/b2b"
            className={`px-4 sm:px-5 py-1.5 rounded-full font-bold text-[13px] sm:text-sm transition duration-200 cursor-pointer ${isB2bActive
              ? "bg-[#0e0f89] text-white shadow-sm"
              : "text-[#0e0f89] hover:bg-slate-100"
              }`}
          >
            B2B
          </Link>
          <Link
            href="/b2c-gst"
            className={`px-4 sm:px-5 py-1.5 rounded-full font-bold text-[13px] sm:text-sm transition duration-200 cursor-pointer ${isB2cActive
              ? "bg-[#0e0f89] text-white shadow-sm"
              : "text-[#0e0f89] hover:bg-slate-100"
              }`}
          >
            B2C
          </Link>
          <Link
            href="/orders"
            className={`px-4 sm:px-5 py-1.5 rounded-full font-bold text-[13px] sm:text-sm transition duration-200 cursor-pointer ${isOrdersActive
              ? "bg-[#0e0f89] text-white shadow-sm"
              : "text-[#0e0f89] hover:bg-slate-100"
              }`}
          >
            Orders
          </Link>
        </div>

        {/* Right Group: Sell Store Pill + Bell Notification + Wishlist + Cart + Profile + Bittool */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 z-20">
          {/* 1. Sell Button */}
          <Link
            href="/sell"
            aria-label="Sell"
            title="Sell on 1PLACEE"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all duration-200 cursor-pointer select-none text-[#0e0f89]"
          >
            <Store className="w-4 h-4 text-[#0e0f89] stroke-[2.2] shrink-0" />
            <span className="font-bold text-xs sm:text-[13px] text-[#0e0f89] leading-tight">
              Sell
            </span>
          </Link>

          {/* 3. Notification Bell */}
          <button
            type="button"
            aria-label="Notifications"
            title="Notifications"
            className="w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-full flex items-center justify-center bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all duration-200 cursor-pointer relative"
          >
            <Bell className="w-4.5 h-4.5 text-[#0e0f89] stroke-[2.2]" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#ff9900] ring-2 ring-white" />
          </button>

          {/* 4. Wishlist Button */}
          <Link
            href="/wishlist"
            aria-label="Wishlist"
            title="Wishlist"
            className="w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-full flex items-center justify-center bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all duration-200 cursor-pointer relative"
          >
            <Heart className="w-4.5 h-4.5 text-[#0e0f89] stroke-[2.2] fill-transparent" />
          </Link>

          {/* 5. Cart Button with Badge */}
          <Link
            href="/products"
            aria-label="Cart"
            title="Cart"
            className="w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-full flex items-center justify-center bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all duration-200 cursor-pointer relative"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4.5 h-4 text-[#0e0f89]"
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
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs text-[#0e0f89] transition-all duration-200 cursor-pointer select-none"
            >
              <User className="w-4 h-4 text-[#0e0f89] stroke-[2.2] shrink-0" />
              <div className="flex flex-col text-left leading-tight hidden sm:flex">
                <span className="font-bold text-xs sm:text-[13px] text-[#0e0f89] max-w-[85px]">
                  Vinothkumar
                </span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#0e0f89]" />
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
                    className="flex items-center px-4 py-2 text-xs font-semibold hover:bg-blue-50 hover:text-[#0e0f89] transition"
                  >
                    Your Orders
                  </Link>
                  <Link
                    href="/contracts"
                    className="flex items-center px-4 py-2 text-xs font-semibold hover:bg-blue-50 hover:text-[#0e0f89] transition"
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
          <div className="h-6 w-[1.5px] bg-slate-200 ml-0.5 mr-1" />

          {/* 7. Bittool / Equalizer Control Sliders Icon Button */}
          <button
            type="button"
            aria-label="Preferences & Bittool"
            title="Preferences & Bittool"
            className="w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-full flex items-center justify-center bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all duration-200 cursor-pointer overflow-hidden mr-0.5"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4.5 h-4.5 text-[#0e0f89]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14" />
              <line x1="4" y1="10" x2="4" y2="3" />
              <line x1="12" y1="21" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12" y2="3" />
              <line x1="20" y1="21" x2="20" y2="16" />
              <line x1="20" y1="12" x2="20" y2="3" />
              <line x1="1" y1="14" x2="7" y2="14" />
              <line x1="9" y1="8" x2="15" y2="8" />
              <line x1="17" y1="16" x2="23" y2="16" />
            </svg>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TIER 2: Subnav Ribbon (44px height) */}
      {/* Left: Categories button; Center: Big Search Bar; Right: Help&Support & Settings */}
      {/* ========================================================================= */}
      <div className="bg-white pl-3 sm:pl-6 pr-3 sm:pr-4 py-1 flex items-center justify-between gap-3 text-[13px] h-[44px] border-b border-gray-200/80 shadow-2xs relative select-none">
        {/* Left Side: Categories Button (Hidden on Home page as requested) */}
        {!isHomeActive ? (
          <div
            className="relative shrink-0"
            ref={categoriesRef}
            onClick={(e) => {
              if (isB2cActive) {
                // In B2C mode, navigate directly to 1PLACEE-FE Categories page
                router.push("/categories");
              } else {
                e.preventDefault();
                e.stopPropagation();
                setIsCategoriesOpen((prev) => !prev);
              }
            }}
          >
            <button
              type="button"
              onClick={(e) => {
                if (isB2cActive) {
                  // In B2C mode, navigate directly to 1PLACEE-FE Categories page
                  router.push("/categories");
                } else {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsCategoriesOpen((prev) => !prev);
                }
              }}
              aria-label="All Categories"
              className="flex bg-[#1559ac] hover:bg-[#1559ac] text-white font-bold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer select-none text-sm sm:text-[17px] shadow-xs active:scale-[0.98]"
            >
              <span className="pb-1 pointer-events-none">Categories</span>
            </button>
          </div>
        ) : (
          <div className="shrink-0 w-0" />
        )}

        {/* Center: Search Bar (Exact Absolute Center matching Width 386px, First & Third Image based Blue Theme) */}
        <div
          className="py-1 hidden md:flex items-center absolute left-1/2 -translate-x-1/2 z-10 pointer-events-auto"
          style={{ width: "386px" }}
        >
          <form
            onSubmit={handleSearchSubmit}
            className="w-full subnav-blue-search-container relative"
          >
            {/* Left Search Type Dropdown trigger matching Image 1 & 3 */}
            <div className=" relative shrink-0 pl-1 h-9 " ref={searchTypeRef}>
              <button
                type="button"
                onClick={() => setIsSearchTypeOpen(!isSearchTypeOpen)}
                className="flex items-center gap-1.5 pl-3 pr-2.5 py-1 text-slate-800 hover:text-[#1559ac] text-[13px] font-bold transition select-none cursor-pointer h-full"
              >
                <span className="truncate max-w-[75px]">{searchType}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${isSearchTypeOpen ? "rotate-180 text-[#1559ac]" : ""}`} />
              </button>

              {/* Dropdown Menu matching Image 3 with AI Mode, Products, Suppliers, Audited Factory */}
              {isSearchTypeOpen && (
                <div className="absolute top-[44px] left-0 w-[170px] border border-[#1559ac] bg-white rounded-2xl shadow-2xl border border-slate-200/90 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    type="button"
                    onClick={() => { setSearchType("AI Mode"); setIsSearchTypeOpen(false); }}
                    className={`w-full flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-left transition ${searchType === "AI Mode"
                      ? "bg-blue-50 text-[#2563eb]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#2563eb]"
                      }`}
                  >
                    <Sparkles className="w-4 h-4 text-rose-500 fill-rose-500" />
                    <span>AI Mode</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setSearchType("Products"); setIsSearchTypeOpen(false); }}
                    className={`w-full flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-left transition ${searchType === "Products"
                      ? "bg-blue-50 text-[#2563eb]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#2563eb]"
                      }`}
                  >
                    <span>Products</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setSearchType("Suppliers"); setIsSearchTypeOpen(false); }}
                    className={`w-full flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-left transition ${searchType === "Suppliers"
                      ? "bg-blue-50 text-[#2563eb]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#2563eb]"
                      }`}
                  >
                    <span>Suppliers</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setSearchType("Audited Factory"); setIsSearchTypeOpen(false); }}
                    className={`w-full flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-left transition ${searchType === "Audited Factory"
                      ? "bg-blue-50 text-[#2563eb]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#2563eb]"
                      }`}
                  >
                    <span>Audited Factory</span>
                  </button>
                </div>
              )}
            </div>

            {/* Vertical Divider Line matching Image 2 */}
            <div className="w-[1px] h-5 bg-slate-200 shrink-0" />

            {/* Main Search Input */}
            <input
              type="text"
              placeholder={searchType === "AI Mode" ? "Ask AI to find products..." : "Enter Product or Service to search."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 min-w-0 pl-3 pr-2 bg-transparent text-slate-800 placeholder:text-slate-400 text-[13px] outline-none font-normal h-full"
            />

            {/* Voice Search (Mic) Icon */}
            <button
              type="button"
              aria-label="Voice Search"
              title="Search by voice"
              className="p-1.5 mr-1 text-slate-400 hover:text-[#1559ac] transition shrink-0 cursor-pointer"
            >
              <Mic className="w-4 h-4 stroke-[2]" />
            </button>

            {/* Right Solid Blue Pill Search Button with Full Height & Curved End (matching Image 2) */}
            <button
              type="submit"
              aria-label="Search"
              title="Search"
              className="subnav-blue-search-btn shrink-0 cursor-pointer"
            >
              <Search className="w-4 h-4 text-white stroke-[2.5]" />
            </button>
          </form>
        </div>

        {/* Right Fixed Group: RFQ + Messages (Only in B2B/Wholesale modes) + Help&Support + Settings */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0 pl-1 z-10">
          {/* RFQ & Messages: Only visible in B2B mode, removed on Home and B2C */}
          {isB2bActive && (
            <>
              {/* 1. RFQ Button */}
              <Link
                href="/rfq"
                aria-label="Post My RFQ"
                className="flex items-center gap-1.5 text-gray-600 hover:text-[#1559ac] hover:bg-gray-100 px-2 py-1 rounded-full text-xs sm:text-[12.5px] font-medium transition cursor-pointer select-none group"
              >
                <Target className="w-4 h-4 text-gray-600 group-hover:text-[#1559ac] stroke-[2.2]" />
                <span className="hidden sm:inline">RFQ</span>
              </Link>

              {/* 2. Messages Button */}
              <Link
                href="/messages"
                aria-label="Messages"
                className="flex items-center gap-1.5 text-gray-600 hover:text-[#1559ac] hover:bg-gray-100 px-2 py-1 rounded-full text-xs sm:text-[12.5px] font-medium transition cursor-pointer select-none group"
              >
                <Mail className="w-4 h-4 text-gray-600 group-hover:text-[#1559ac] stroke-[2.2]" />
                <span className="hidden sm:inline">Messages</span>
              </Link>
            </>
          )}

          {/* 3. Help & Support */}
          <button
            type="button"
            aria-label="Help & Support"
            className="flex items-center gap-1.5 text-gray-600 hover:text-[#1559ac] hover:bg-gray-100 px-2 py-1 rounded-full text-xs sm:text-[12.5px] font-medium transition cursor-pointer select-none group"
          >
            <Headset className="w-4 h-4 text-gray-600 group-hover:text-[#1559ac] stroke-[2.2]" />
            <span className="hidden sm:inline">Help&Support</span>
          </button>

          {/* 4. Settings */}
          <button
            type="button"
            aria-label="Settings"
            className="flex items-center gap-1.5 text-gray-600 hover:text-[#1559ac] hover:bg-gray-100 px-2 py-1 rounded-full text-xs sm:text-[12.5px] font-medium transition cursor-pointer select-none group"
          >
            <Settings className="w-4 h-4 text-gray-600 group-hover:text-[#1559ac] stroke-[2]" />
            <span className="hidden sm:inline">Settings</span>
          </button>
        </div>
      </div>

      {/* Categories Slide Carousel Container (3 Slides x 15 Cards = 45 Categories) */}
      <div ref={megaMenuRef}>
        <CategoriesCarouselMegaMenu
          isOpen={isCategoriesOpen}
          onClose={() => setIsCategoriesOpen(false)}
        />
      </div>
    </header>
  );
};
