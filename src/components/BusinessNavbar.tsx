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

  const [mounted, setMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("1placee_logged_in");
    if (saved === "false") setIsLoggedIn(false);

    const onAuthChange = () => {
      setIsLoggedIn(localStorage.getItem("1placee_logged_in") !== "false");
    };
    window.addEventListener("1placee-auth-change", onAuthChange);
    return () => window.removeEventListener("1placee-auth-change", onAuthChange);
  }, []);

  const handleSignOut = () => {
    localStorage.setItem("1placee_logged_in", "false");
    setIsLoggedIn(false);
    setIsProfileMenuOpen(false);
    window.dispatchEvent(new Event("1placee-auth-change"));
  };

  const handleSignIn = () => {
    localStorage.setItem("1placee_logged_in", "true");
    setIsLoggedIn(true);
    window.dispatchEvent(new Event("1placee-auth-change"));
  };

  // Location Selector
  const [selectedLocation, setSelectedLocation] = useState("Chennai, TN");
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const locationRef = useRef<HTMLDivElement>(null);

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
      if (
        locationRef.current &&
        !locationRef.current.contains(target)
      ) {
        setIsLocationOpen(false);
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
    <header className="sticky top-0 z-50 w-full select-none text-xs font-sans shadow-xs" suppressHydrationWarning>
      {/* ========================================================================= */}
      {/* TIER 1: Main Top Navbar (64px height) */}
      {/* ========================================================================= */}
      <div
        className="pl-3 sm:pl-6 pr-1 sm:pr-2 py-2 flex items-center justify-between h-[64px] sm:h-[64px] border-b relative z-30"
        style={{
          height: "64px",
          backgroundColor: "#0f2361",
          borderColor: "#0a0b6e",
          color: "#0e0f89"
        }}
      >
        {/* Left Group: 1PLACEE Logo + Location Pill with Name */}
        <div className="flex items-center gap-3.5 sm:gap-4 shrink-0 z-30">
          <Link
            href="/"
            className="flex items-center hover:opacity-90 transition select-none py-0.5 h-[50px] overflow-hidden"
          >
            <img
              src="/logo.png?v=2"
              alt="1Placee"
              className="px-4 py-1 h-10 sm:h-10 w-auto bg-white rounded-full object-contain drop-shadow-xs"
            />
          </Link>

          {/* Location Pill Button */}
          <div className="relative" ref={locationRef}>
            <button
              type="button"
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              aria-label="Location"
              style={{ height: "33.6px" }}
              className={`topnav-glass-btn group flex items-center gap-2 px-3 py-1 rounded-full border shadow-sm cursor-pointer select-none ${isLocationOpen ? "is-active" : ""}`}
            >
              <MapPin className="w-5 h-5 text-white stroke-[2] shrink-0" />
              <div className="flex flex-col text-left leading-tight">
                <span className="font-bold text-sm sm:text-[15px] text-white truncate max-w-[130px]">
                  {selectedLocation}
                </span>
              </div>
              <ChevronDown className="w-4 h-4 text-white shrink-0 ml-0.5" />
            </button>

            {isLocationOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-2xl py-2 border border-slate-200 z-50 text-xs text-slate-800 animate-in fade-in slide-in-from-top-1 duration-150">
                {["Chennai, TN", "Vellore", "trichy", "Madurai", "Bangalore"].map(
                  (loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => {
                        setSelectedLocation(loc);
                        setIsLocationOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-blue-50 font-bold transition flex items-center justify-between ${selectedLocation === loc
                        ? "bg-blue-50/70 text-[#0e0f89]"
                        : "text-slate-700 hover:text-[#0e0f89]"
                        }`}
                    >
                      <span>{loc}</span>
                      {selectedLocation === loc && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0e0f89]" />
                      )}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        {/* Center Group: Eclipse Container with Four Buttons: Home, B2B, B2C, Orders */}
        <div
          style={{
            backgroundColor: "rgba(1, 1, 10, 0.14)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            borderColor: "rgba(255, 255, 255, 0.28)",
          }}
          className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 p-1 rounded-full border shadow-sm z-10 pointer-events-auto"
        >
          <Link
            href="/"
            style={
              isHomeActive
                ? {
                  backgroundColor: "rgba(255, 255, 255, 0.13)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.35)",
                  color: "#ffffff",
                }
                : undefined
            }
            className={`px-4 sm:px-5 py-1.5 rounded-full font-bold text-[13px] sm:text-sm transition duration-200 cursor-pointer ${isHomeActive
              ? "shadow-sm"
              : "center-nav-inactive"
              }`}
          >
            Home
          </Link>
          <Link
            href="/b2b"
            style={
              isB2bActive
                ? {
                  backgroundColor: "rgba(255, 255, 255, 0.13)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.35)",
                  color: "#ffffff",
                }
                : undefined
            }
            className={`px-4 sm:px-5 py-1.5 rounded-full font-bold text-[13px] sm:text-sm transition duration-200 cursor-pointer ${isB2bActive
              ? "shadow-sm"
              : "center-nav-inactive"
              }`}
          >
            B2B
          </Link>
          <Link
            href="/b2c-gst"
            style={
              isB2cActive
                ? {
                  backgroundColor: "rgba(255, 255, 255, 0.13)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.35)",
                  color: "#ffffff",
                }
                : undefined
            }
            className={`px-4 sm:px-5 py-1.5 rounded-full font-bold text-[13px] sm:text-sm transition duration-200 cursor-pointer ${isB2cActive
              ? "shadow-sm"
              : "center-nav-inactive"
              }`}
          >
            B2C
          </Link>
          <Link
            href="/orders"
            style={
              isOrdersActive
                ? {
                  backgroundColor: "rgba(255, 255, 255, 0.13)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.35)",
                  color: "#ffffff",
                }
                : undefined
            }
            className={`px-4 sm:px-5 py-1.5 rounded-full font-bold text-[13px] sm:text-sm transition duration-200 cursor-pointer ${isOrdersActive
              ? "shadow-sm"
              : "center-nav-inactive"
              }`}
          >
            Orders
          </Link>
        </div>

        {/* Right Group: Sell Store Pill + Bell Notification + Wishlist + Cart + Profile + Bittool */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0 z-20">
          {/* 1. Sell Button */}
          <Link
            href="/sell"
            aria-label="Sell"
            title="Sell on 1PLACEE"
            style={{ height: "33.6px" }}
            className={`topnav-glass-btn flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full border shadow-sm cursor-pointer select-none text-white ${pathname.startsWith("/sell") ? "is-active" : ""}`}
          >
            <Store className="w-5 h-5 text-white stroke-[2] shrink-0" />
            <span className="font-bold text-sm sm:text-[15px] text-white leading-tight">
              Sell
            </span>
          </Link>

          {/* 3. Notification Bell */}
          <button
            type="button"
            aria-label="Notifications"
            title="Notifications"
            style={{ height: "33.6px", width: "33.6px" }}
            className="topnav-glass-btn rounded-full flex items-center justify-center border shadow-sm cursor-pointer relative"
          >
            <Bell className="w-5 h-5 text-white stroke-[2] transition-colors" />
            <span
              suppressHydrationWarning
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.45)",
                color: "#ffffff",

              }}
              className="absolute  -top-1 -right-1 font-black text-[11px] w-3.5 h-3.5 rounded-full flex items-center justify-center shadow"
            >
              1
            </span>
          </button>

          {/* 4. Wishlist Button */}
          <Link
            href="/wishlist"
            aria-label="Wishlist"
            title="Wishlist"
            style={{ height: "33.6px", width: "33.6px" }}
            className={`topnav-glass-btn rounded-full flex items-center justify-center border shadow-sm cursor-pointer relative ${pathname.startsWith("/wishlist") ? "is-active" : ""}`}
          >
            <Heart className="w-5 h-5 text-white stroke-[2] fill-transparent" />
            <span
              suppressHydrationWarning
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.45)",
                color: "#ffffff",
              }}
              className="absolute -top-1 -right-1 font-black text-[10px] w-3.5 h-3.5 rounded-full flex items-center justify-center shadow"
            >
              1
            </span>
          </Link>

          {/* 5. Cart Button with Badge */}
          <Link
            href="/cart"
            aria-label="Cart"
            title="Cart"
            style={{ height: "33.6px", width: "33.6px" }}
            className={`topnav-glass-btn rounded-full flex items-center justify-center border shadow-sm cursor-pointer relative ${pathname.startsWith("/cart") ? "is-active" : ""}`}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-white"
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
            <span
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.45)",
                color: "#ffffff",
              }}
              className="absolute -top-1 -right-1 font-black text-[10px] w-3.5 h-3.5 rounded-full flex items-center justify-center shadow"
            >
              1
            </span>
          </Link>

          {/* 6. Profile with Icon + Name + Dropdown (or Sign In when logged out) */}
          <div ref={profileMenuRef} className="relative">
            {isLoggedIn ? (
              <button
                type="button"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                aria-label="Profile"
                style={{ height: "33.6px" }}
                className={`topnav-glass-btn flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full border shadow-sm text-white cursor-pointer select-none ${isProfileMenuOpen ? "is-active" : ""}`}
              >
                <span
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.18)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 255, 255, 0.35)",
                  }}
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                >
                  <User className="w-3.5 h-3.5 text-white stroke-[2.2]" />
                </span>
                <div className="flex flex-col text-left leading-tight hidden sm:flex">
                  <span className="font-bold text-sm sm:text-[15px] text-white max-w-[85px]">
                    Vinothkumar
                  </span>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-white" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSignIn}
                aria-label="Sign in"
                style={{ height: "33.6px" }}
                className="topnav-glass-btn flex items-center gap-1.5 px-3.5 py-1 rounded-full border shadow-sm text-white cursor-pointer select-none font-bold text-xs sm:text-sm"
              >
                <User className="w-4 h-4 text-white stroke-[2.2]" />
                <span>Sign in</span>
              </button>
            )}

            {isProfileMenuOpen && (
              <div
                style={{ width: "280px" }}
                className="absolute right-0 mt-2 bg-white rounded-3xl shadow-2xl border border-slate-200 z-50 text-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
              >
                {/* Top Avatar + Name + Email + Manage your account */}
                <div className="px-5 pt-6 pb-5 flex flex-col items-center text-center border-b border-slate-100">
                  <div className="relative mb-3">
                    <div
                      style={{ backgroundColor: "#1a73e8", color: "#ffffff" }}
                      className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black shadow-sm"
                    >
                      V
                    </div>
                    <span
                      style={{ top: "-2px", right: "-2px" }}
                      className="absolute w-6 h-6 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-600"
                    >
                      <Camera className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <p className="text-base font-black text-slate-900 leading-tight">
                    Vinothkumar
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    vinothkumar@1place.in
                  </p>

                  <Link
                    href="/orders"
                    onClick={() => setIsProfileMenuOpen(false)}
                    className="mt-4 px-5 py-2 rounded-full border border-slate-300 hover:bg-slate-50 text-xs font-bold text-slate-800 flex items-center gap-2 transition"
                  >
                    <User className="w-3.5 h-3.5 text-slate-600" />
                    <span>Manage your account</span>
                  </Link>
                </div>

                {/* Middle Actions (Manage Branches & Manage SubIDs removed) */}
                <div className="py-2 border-b border-slate-100">
                  <button
                    type="button"
                    onClick={() => setIsProfileMenuOpen(false)}
                    className="w-full px-5 py-2.5 text-left text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-3 cursor-pointer transition"
                  >
                    <svg className="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <line x1="20" y1="8" x2="20" y2="14" />
                      <line x1="23" y1="11" x2="17" y2="11" />
                    </svg>
                    <span>Add another account</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="w-full px-5 py-2.5 text-left text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-3 cursor-pointer transition"
                  >
                    <svg className="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                      <polyline points="16 17 21 12 16 7" />
                      <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                    <span>Sign out of all accounts</span>
                  </button>
                </div>

                {/* Bottom Sign Out */}
                <div className="py-2">
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="w-full px-5 py-2.5 text-center text-xs font-black text-rose-600 hover:bg-rose-50 flex items-center justify-center gap-2 cursor-pointer transition"
                  >
                    <svg className="w-4 h-4 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                      <polyline points="16 17 21 12 16 7" />
                      <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                    <span>Sign out</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Vertical Divider Line */}
          <div style={{ backgroundColor: "#364799ff" }} className="h-7 w-[1.5px] bg-[#b8dcfa] ml-0.5 mr-1" />

          {/* 7. Bittool / Preferences Icon Button */}
          <button
            type="button"
            aria-label="Preferences & Bittool"
            title="Preferences & Bittool"
            style={{ height: "33.6px", width: "33.6px" }}
            className="topnav-glass-btn rounded-full flex items-center justify-center border shadow-sm cursor-pointer overflow-hidden mr-0.5"
          >
            <img
              src="/bittool-icon.png"
              alt="Bittool"
              style={{ filter: "brightness(0) invert(1)" }}
              className="w-5 h-5 object-contain"
            />
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TIER 2: Subnav Ribbon (48px height) */}
      {/* Left: Categories button; Center: Big Search Bar; Right: Help&Support & Settings */}
      {/* ========================================================================= */}
      <div
        style={{
          height: "48px",
          backgroundColor: "#f0f0fbff"
        }}
        className="bg-white pl-3 sm:pl-6 pr-3 sm:pr-4 py-1 flex items-center justify-between gap-3 text-[13px] h-[48px] border-b border-gray-200/80 shadow-2xs relative z-10 select-none"
      >
        {/* Left Side: Categories Button & Expandable Search Bar */}
        {!isHomeActive ? (
          <div className="flex items-center gap-2 shrink-0 z-10">
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
                style={{ fontSize: "14px" }}
                className={`subnav-glass-btn h-8 w-auto font-bold flex px-5 py-1 rounded-full cursor-pointer select-none text-sm sm:text-[17px] shadow-xs active:scale-[0.98] ${isCategoriesOpen ? "is-active" : ""}`}
              >
                <span className="pb-1 pointer-events-none">Categories</span>
              </button>
            </div>

            {/* Expandable Search Bar right next to Categories */}
            <div
              ref={searchContainerRef}
              className="relative flex items-center"
              style={{ marginLeft: "6px" }}
            >
              {isSearchOpen ? (
                <div
                  className="flex items-center animate-in fade-in slide-in-from-left-2 duration-200"
                  style={{ width: "386px", height: "32px" }}
                >
                  <form
                    onSubmit={handleSearchSubmit}
                    className="w-full h-8 subnav-blue-search-container relative"
                    style={{ height: "32px" }}
                  >
                    {/* Left Search Type Dropdown trigger */}
                    <div className="relative shrink-0 pl-1 h-8" ref={searchTypeRef}>
                      <button
                        type="button"
                        onClick={() => setIsSearchTypeOpen(!isSearchTypeOpen)}
                        className="flex items-center gap-1.5 pl-3 pr-2.5 py-1 text-slate-800 hover:text-[#0e0f89] text-[13px] font-bold transition select-none cursor-pointer h-full"
                      >
                        <span className="truncate max-w-[75px]">{searchType}</span>
                        <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${isSearchTypeOpen ? "rotate-180 text-[#0e0f89]" : ""}`} />
                      </button>

                      {/* Dropdown Menu */}
                      {isSearchTypeOpen && (
                        <div className="absolute top-[48px] left-0 w-[170px] border border-[#0e0f89] bg-white rounded-2xl shadow-2xl border-slate-200/90 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">

                          <button
                            type="button"
                            onClick={() => { setSearchType("Products"); setIsSearchTypeOpen(false); }}
                            className={`w-full flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-left transition ${searchType === "Products"
                              ? "bg-blue-50/70 text-[#0e0f89]"
                              : "text-slate-700 hover:bg-slate-50 hover:text-[#0e0f89]"
                              }`}
                          >
                            <span>Products</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => { setSearchType("Suppliers"); setIsSearchTypeOpen(false); }}
                            className={`w-full flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-left transition ${searchType === "Suppliers"
                              ? "bg-blue-50/70 text-[#0e0f89]"
                              : "text-slate-700 hover:bg-slate-50 hover:text-[#0e0f89]"
                              }`}
                          >
                            <span>Suppliers</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => { setSearchType("Audited Factory"); setIsSearchTypeOpen(false); }}
                            className={`w-full flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-left transition ${searchType === "Audited Factory"
                              ? "bg-blue-50/70 text-[#0e0f89]"
                              : "text-slate-700 hover:bg-slate-50 hover:text-[#0e0f89]"
                              }`}
                          >
                            <span>Audited Factory</span>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Vertical Divider Line */}
                    <div className="w-[1px] h-5 bg-slate-200 shrink-0" />

                    {/* Main Search Input */}
                    <input
                      type="text"
                      autoFocus
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

                    {/* Right Search Button */}
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
              ) : (
                /* Search Pill Button (Icon + Search Text) */
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Open Search"
                  title="Search"
                  className="subnav-glass-btn h-8 px-3.5 rounded-full flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold cursor-pointer shrink-0"
                >
                  <Search className="w-4 h-4 stroke-[2.2]" />
                  <span>Search</span>
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="shrink-0 w-0" />
        )}

        {/* Right Fixed Group: RFQ + Messages (Only in B2B/Wholesale modes) + Help&Support + Settings */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0 pl-1 z-10">
          {/* RFQ & Messages: Only visible in B2B mode, removed on Home and B2C */}
          {isB2bActive && (
            <>
              {/* 1. RFQ Button */}
              <Link
                href="/rfq"
                aria-label="Post My RFQ"
                className={`subnav-glass-btn flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs sm:text-[12.5px] font-semibold cursor-pointer select-none group ${pathname.startsWith("/rfq") ? "is-active" : ""}`}
              >
                <Target className="w-4 h-4 stroke-[2.2]" />
                <span className="hidden sm:inline">RFQ</span>
              </Link>

              {/* 2. Messages Button */}
              <Link
                href="/messages"
                aria-label="Messages"
                className={`subnav-glass-btn flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs sm:text-[12.5px] font-semibold cursor-pointer select-none group ${pathname.startsWith("/messages") ? "is-active" : ""}`}
              >
                <Mail className="w-4 h-4 stroke-[2.2]" />
                <span className="hidden sm:inline">Messages</span>
              </Link>
            </>
          )}

          {/* 3. Help & Support */}
          <button
            type="button"
            aria-label="Help & Support"
            className="subnav-glass-btn flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs sm:text-[12.5px] font-semibold cursor-pointer select-none group"
          >
            <Headset className="w-4 h-4 stroke-[2.2]" />
            <span className="hidden sm:inline">Help&Support</span>
          </button>

          {/* 4. Settings */}
          <Link
            href="/settings"
            aria-label="Settings"
            className={`subnav-glass-btn flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs sm:text-[12.5px] font-semibold cursor-pointer select-none group ${pathname.startsWith("/settings") ? "is-active" : ""}`}
          >
            <Settings className="w-4 h-4 stroke-[2.2]" />
            <span className="hidden sm:inline">Settings</span>
          </Link>
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
