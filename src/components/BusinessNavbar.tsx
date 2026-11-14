"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  MapPin,
  ChevronDown,
  Search,
  Bell,
  Heart,
  User,
  PlusCircle,
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

  const navButtons = [
    { label: "Home", href: "/", active: pathname === "/" },
    { label: "B2B", href: "/b2b", active: pathname.startsWith("/b2b") },
    { label: "B2C", href: "/b2c-gst", active: pathname.startsWith("/b2c-gst") },
    { label: "Orders", href: "/orders", active: pathname.startsWith("/orders") },
  ];

  return (
    <header className="bg-[#e9f4ff] border-b border-[#c8e2fb] sticky top-0 z-50 select-none shadow-xs">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-5 py-2 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left Section: 1placee B3 Logo + Location Pill */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Logo with B3 Symbol */}
          <Link href="/" className="flex items-center group">
            <img
              src="/logo-1placee-b3.png"
              alt="1placee B3 Business Logo"
              className="h-7 sm:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Location Selector Pill */}
          <div className="relative">
            <button
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              className="flex items-center gap-1.5 px-3 py-1 sm:py-1.5 rounded-full bg-white/95 hover:bg-white border border-[#b8dcfa] shadow-2xs text-[#1559ac] text-xs font-bold transition-all cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#1559ac] stroke-[2.2]" />
              <span className="truncate max-w-[100px] sm:max-w-[125px] text-[#1e293b]">
                {selectedLocation}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-[#1559ac]" />
            </button>

            {isLocationOpen && (
              <div className="absolute left-0 mt-1.5 w-44 bg-white rounded-xl shadow-xl py-1.5 border border-slate-200 z-50 text-xs">
                {["Chennai, TN", "Bengaluru, KA", "Mumbai, MH", "Delhi, DL", "Hyderabad, TS"].map(
                  (loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        setSelectedLocation(loc);
                        setIsLocationOpen(false);
                      }}
                      className="w-full text-left px-3.5 py-2 hover:bg-blue-50 font-bold text-slate-700 hover:text-[#1559ac] transition"
                    >
                      {loc}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        {/* Center Container: [Home] [B2B] [B2C] [Orders] */}
        <div className="flex items-center bg-[#d6ecff] rounded-full p-1 border border-[#b8dcfa] shadow-inner shrink-0">
          {navButtons.map((btn) => (
            <Link
              key={btn.label}
              href={btn.href}
              className={`px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full font-bold text-xs sm:text-[13px] transition-all duration-200 cursor-pointer ${
                btn.active
                  ? "bg-[#1559ac] text-white shadow-sm"
                  : "text-[#1559ac] hover:bg-white/80"
              }`}
            >
              {btn.label}
            </Link>
          ))}
        </div>

        {/* Right Section: Search, Sell Product, Notification, Wishlist, Cart, Profile, Bittool */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* 1. Search Box */}
          <div ref={searchContainerRef} className="relative flex items-center">
            {isSearchOpen ? (
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center bg-white rounded-full px-3 py-1 shadow-md w-40 sm:w-56 border border-[#b8dcfa] animate-in fade-in zoom-in-95 duration-200"
              >
                <Search className="w-4 h-4 text-[#1559ac] mr-1.5 shrink-0 stroke-[2.2]" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full text-xs text-gray-900 outline-none placeholder:text-gray-400 bg-transparent"
                />
              </form>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                title="Search"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-white/95 hover:bg-[#1559ac] border border-[#b8dcfa] text-[#1559ac] hover:text-white shadow-2xs transition-all cursor-pointer"
              >
                <Search className="w-4 h-4 stroke-[2.2]" />
              </button>
            )}
          </div>

          {/* 2. Sell Product Button */}
          <Link
            href="/sell"
            className="hidden md:flex items-center gap-1 px-3 py-1 sm:py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <PlusCircle className="w-3.5 h-3.5 text-slate-950 stroke-[2.5]" />
            <span>Sell Product</span>
          </Link>

          {/* 3. Notification */}
          <button
            title="Notifications"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-white/95 hover:bg-[#1559ac] border border-[#b8dcfa] text-[#1559ac] hover:text-white shadow-2xs transition-all cursor-pointer relative"
          >
            <Bell className="w-4 h-4 stroke-[2]" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#ff9900] ring-2 ring-white" />
          </button>

          {/* 4. Wishlist */}
          <Link
            href="/wishlist"
            title="Wishlist"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-white/95 hover:bg-[#1559ac] border border-[#b8dcfa] text-[#1559ac] hover:text-white shadow-2xs transition-all cursor-pointer"
          >
            <Heart className="w-4 h-4 stroke-[2]" />
          </Link>

          {/* 5. Cart */}
          <Link
            href="/products"
            title="Cart"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-white/95 hover:bg-[#1559ac] border border-[#b8dcfa] text-[#1559ac] hover:text-white shadow-2xs transition-all cursor-pointer relative"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4.5 h-4.5"
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
            <span className="absolute -top-1 -right-1 bg-[#ff9900] text-black font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
              1
            </span>
          </Link>

          {/* 6. User Profile Dropdown */}
          <div ref={profileMenuRef} className="relative">
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/95 hover:bg-[#1559ac] border border-[#b8dcfa] text-[#1e293b] hover:text-white shadow-2xs transition-all cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full bg-[#1559ac] text-white flex items-center justify-center text-[10px] font-bold">
                <User className="w-3 h-3" />
              </div>
              <span className="font-bold text-xs text-[#1e293b] hover:text-white hidden sm:inline max-w-[85px] truncate">
                Vinothkumar
              </span>
              <ChevronDown className="w-3 h-3 text-[#1559ac] hover:text-white" />
            </button>

            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl py-2 border border-slate-200 z-50 text-xs text-slate-800 animate-in fade-in duration-150">
                <div className="px-3.5 py-2 border-b border-slate-100 bg-slate-50">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Business Account</p>
                  <p className="font-bold text-slate-900 truncate">vinothkumar@1place.in</p>
                </div>
                <div className="py-1">
                  <Link href="/orders" className="flex px-3.5 py-1.5 hover:bg-blue-50 font-semibold">
                    Your Orders
                  </Link>
                  <Link href="/contracts" className="flex px-3.5 py-1.5 hover:bg-blue-50 font-semibold">
                    Vendor Contracts
                  </Link>
                  <Link href="/sell" className="flex px-3.5 py-1.5 hover:bg-blue-50 font-semibold text-amber-700">
                    Seller Portal
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-5 w-[1.5px] bg-[#b8dcfa] mx-0.5" />

          {/* 7. Bittool (Equalizer / Sliders Icon) */}
          <button
            title="Bittool / Preferences"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-white/95 hover:bg-[#1559ac] border border-[#b8dcfa] shadow-2xs transition-all cursor-pointer group"
          >
            <img
              src="/equalizer-icon.png"
              alt="Bittool"
              className="w-4 h-4 object-contain group-hover:brightness-0 group-hover:invert transition-all"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
