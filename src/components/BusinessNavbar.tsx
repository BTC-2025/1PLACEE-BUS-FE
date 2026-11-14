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
    <header
      style={{
        backgroundColor: "#e9f4ff",
        borderBottom: "1px solid #c8e2fb",
        position: "sticky",
        top: 0,
        zIndex: 50,
        userSelect: "none",
        width: "100%",
        height: "60px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        {/* Left Section: 1placee B3 Logo + Location Pill */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", flexShrink: 0 }}>
          {/* Logo with B3 Symbol - Perfectly Sized */}
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/logo-1placee-b3.png"
              alt="1placee B3 Business Logo"
              style={{
                height: "36px",
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </Link>

          {/* Location Selector Pill */}
          <div style={{ position: "relative" }}>
            <button
              type="button"
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 14px",
                borderRadius: "9999px",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                border: "1px solid #b8dcfa",
                color: "#1559ac",
                fontSize: "12px",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
              }}
            >
              <MapPin style={{ width: "14px", height: "14px", color: "#1559ac" }} />
              <span style={{ color: "#1e293b", maxWidth: "120px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {selectedLocation}
              </span>
              <ChevronDown style={{ width: "13px", height: "13px", color: "#1559ac" }} />
            </button>

            {isLocationOpen && (
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: "100%",
                  marginTop: "6px",
                  width: "170px",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                  padding: "6px 0",
                  border: "1px solid #e2e8f0",
                  zIndex: 60,
                  fontSize: "12px",
                }}
              >
                {["Chennai, TN", "Bengaluru, KA", "Mumbai, MH", "Delhi, DL", "Hyderabad, TS"].map(
                  (loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => {
                        setSelectedLocation(loc);
                        setIsLocationOpen(false);
                      }}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "8px 14px",
                        fontWeight: 700,
                        color: "#334155",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#eff6ff")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#d6ecff",
            borderRadius: "9999px",
            padding: "4px",
            border: "1px solid #b8dcfa",
            flexShrink: 0,
          }}
        >
          {navButtons.map((btn) => (
            <Link
              key={btn.label}
              href={btn.href}
              style={{
                padding: "6px 18px",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "13px",
                textDecoration: "none",
                transition: "all 0.2s",
                color: btn.active ? "#ffffff" : "#1559ac",
                backgroundColor: btn.active ? "#1559ac" : "transparent",
                boxShadow: btn.active ? "0 1px 3px rgba(21, 89, 172, 0.4)" : "none",
              }}
            >
              {btn.label}
            </Link>
          ))}
        </div>

        {/* Right Section: Search, Sell Product, Notification, Wishlist, Cart, Profile, Bittool */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
          {/* 1. Search Box */}
          <div ref={searchContainerRef} style={{ position: "relative", display: "flex", alignItems: "center" }}>
            {isSearchOpen ? (
              <form
                onSubmit={handleSearchSubmit}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: "9999px",
                  padding: "5px 12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  width: "220px",
                  border: "1px solid #b8dcfa",
                }}
              >
                <Search style={{ width: "15px", height: "15px", color: "#1559ac", marginRight: "6px", flexShrink: 0 }} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  style={{
                    width: "100%",
                    fontSize: "12px",
                    color: "#0f172a",
                    outline: "none",
                    border: "none",
                    background: "transparent",
                  }}
                />
              </form>
            ) : (
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                title="Search"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "9999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  border: "1px solid #b8dcfa",
                  color: "#1559ac",
                  cursor: "pointer",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                }}
              >
                <Search style={{ width: "16px", height: "16px" }} />
              </button>
            )}
          </div>

          {/* 2. Sell Product Button */}
          <Link
            href="/sell"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "6px 14px",
              borderRadius: "9999px",
              backgroundColor: "#fbbf24",
              color: "#0f172a",
              fontWeight: 900,
              fontSize: "12px",
              textDecoration: "none",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              cursor: "pointer",
            }}
          >
            <PlusCircle style={{ width: "14px", height: "14px", color: "#0f172a" }} />
            <span>Sell Product</span>
          </Link>

          {/* 3. Notification */}
          <button
            type="button"
            title="Notifications"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              border: "1px solid #b8dcfa",
              color: "#1559ac",
              cursor: "pointer",
              position: "relative",
              boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
            }}
          >
            <Bell style={{ width: "16px", height: "16px" }} />
            <span
              style={{
                position: "absolute",
                top: "6px",
                right: "6px",
                width: "8px",
                height: "8px",
                borderRadius: "9999px",
                backgroundColor: "#ff9900",
                border: "2px solid #ffffff",
              }}
            />
          </button>

          {/* 4. Wishlist */}
          <Link
            href="/wishlist"
            title="Wishlist"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              border: "1px solid #b8dcfa",
              color: "#1559ac",
              cursor: "pointer",
              boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
            }}
          >
            <Heart style={{ width: "16px", height: "16px" }} />
          </Link>

          {/* 5. Cart with Badge */}
          <Link
            href="/products"
            title="Cart"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              border: "1px solid #b8dcfa",
              color: "#1559ac",
              cursor: "pointer",
              position: "relative",
              boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              style={{ width: "17px", height: "17px" }}
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
                position: "absolute",
                top: "-4px",
                right: "-4px",
                backgroundColor: "#ff9900",
                color: "#000000",
                fontWeight: 900,
                fontSize: "10px",
                width: "16px",
                height: "16px",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
              }}
            >
              1
            </span>
          </Link>

          {/* 6. User Profile Dropdown */}
          <div ref={profileMenuRef} style={{ position: "relative" }}>
            <button
              type="button"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 12px 4px 6px",
                borderRadius: "9999px",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                border: "1px solid #b8dcfa",
                color: "#1e293b",
                cursor: "pointer",
                boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "9999px",
                  backgroundColor: "#1559ac",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: 700,
                }}
              >
                <User style={{ width: "13px", height: "13px" }} />
              </div>
              <span style={{ fontWeight: 700, fontSize: "12px", color: "#1e293b", maxWidth: "90px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                Vinothkumar
              </span>
              <ChevronDown style={{ width: "13px", height: "13px", color: "#1559ac" }} />
            </button>

            {isProfileMenuOpen && (
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: "100%",
                  marginTop: "6px",
                  width: "200px",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                  padding: "6px 0",
                  border: "1px solid #e2e8f0",
                  zIndex: 60,
                  fontSize: "12px",
                }}
              >
                <div style={{ padding: "8px 14px", borderBottom: "1px solid #f1f5f9", backgroundColor: "#f8fafc" }}>
                  <p style={{ margin: 0, fontSize: "10px", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase" }}>
                    Business Account
                  </p>
                  <p style={{ margin: 0, fontWeight: 700, color: "#0f172a", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    vinothkumar@1place.in
                  </p>
                </div>
                <div style={{ padding: "4px 0" }}>
                  <Link href="/orders" style={{ display: "block", padding: "6px 14px", color: "#334155", textDecoration: "none", fontWeight: 600 }}>
                    Your Orders
                  </Link>
                  <Link href="/contracts" style={{ display: "block", padding: "6px 14px", color: "#334155", textDecoration: "none", fontWeight: 600 }}>
                    Vendor Contracts
                  </Link>
                  <Link href="/sell" style={{ display: "block", padding: "6px 14px", color: "#b45309", textDecoration: "none", fontWeight: 700 }}>
                    Seller Portal
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div style={{ width: "1.5px", height: "20px", backgroundColor: "#b8dcfa", margin: "0 2px" }} />

          {/* 7. Bittool (Equalizer / Preferences Icon Button) */}
          <button
            type="button"
            title="Bittool / Preferences"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              border: "1px solid #b8dcfa",
              cursor: "pointer",
              boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
            }}
          >
            <img
              src="/equalizer-icon.png"
              alt="Bittool"
              style={{ width: "16px", height: "16px", objectFit: "contain", display: "block" }}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
