"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { BusinessFooter } from "@/components/BusinessFooter";
import {
  Heart,
  MessageSquare,
  ShoppingCart,
  Trash2,
  MoreHorizontal,
  ShieldCheck,
  Plus,
  Zap,
  Clock,
  CheckCircle2,
  Building2,
  Package,
} from "lucide-react";

interface B2BFavItem {
  id: string;
  title: string;
  image: string;
  delivery: string;
  price: string;
  moq: string;
  sold: string;
  supplier: string;
  years: string;
  country: string;
  verified: boolean;
  reorderRate: string;
  customization?: string;
}

interface B2CFavItem {
  id: string;
  title: string;
  image: string;
  variant: string;
  price: string;
  originalPrice: string;
  discount: string;
  stockNote: string;
}

const INITIAL_B2B_FAVS: B2BFavItem[] = [
  {
    id: "sewing-needles-hand",
    title: "Industrial Sewing Binder DAYU427 F522 Piping Folder for Trousers Side Seam With...",
    image: "/categories/b2b-products/hand-needles.png",
    delivery: "Delivery by 03 Jan",
    price: "₹645.91 - 712.41",
    moq: "MOQ: 1",
    sold: "20+ sold",
    supplier: "Dongyang Huisidun Import And Export Co., Ltd.",
    years: "5 yrs",
    country: "CN",
    verified: true,
    reorderRate: "13.5% reorder rate",
  },
  {
    id: "pro-sewing-needles-box",
    title: "Private Label Quality Herbal Mushroom Extract Powder - USDA Organic - Lions...",
    image: "/categories/b2b-products/sewing-needles-set.png",
    delivery: "Delivery by 08 Jan",
    price: "₹3,266.60 - 3,389.13",
    moq: "MOQ: 10",
    sold: "3.3K+ sold",
    supplier: "Fujian Herbal Treasure Bioengineering Co.,Ltd",
    years: "6 yrs",
    country: "CN",
    verified: true,
    reorderRate: "42.9% reorder rate",
    customization: "Minor customization",
  },
];

const INITIAL_B2C_FAVS: B2CFavItem[] = [
  {
    id: "adidas-grand-court",
    title: "Adidas - Grand Court Alpha Shoes",
    image: "/categories/b2b-products/presser-foot-set.png",
    variant: "Size: 43 1/3 • Color: Blue",
    price: "₹2,200",
    originalPrice: "₹3,999",
    discount: "45% OFF",
    stockNote: "Only 3 left in stock - order soon",
  },
  {
    id: "frizto-mango",
    title: "FRIZTO Freeze-Dried Mango | MANGO 25GM PACK OF 10 | 100% Natural Crispy Fruit... (200 g)",
    image: "/categories/b2b-products/hand-needles.png",
    variant: "Pack of 10 • 200 g",
    price: "₹4,780",
    originalPrice: "₹6,980",
    discount: "32% OFF",
    stockNote: "Only 3 left in stock - order soon",
  },
  {
    id: "ergo-desk-mat",
    title: "VertexPro Dual-Motor Ergonomic Workstation Mat & Cable Organizer",
    image: "/categories/b2b-products/sewing-needles-set.png",
    variant: "Size: XL • Color: Midnight Black",
    price: "₹1,499",
    originalPrice: "₹2,499",
    discount: "40% OFF",
    stockNote: "Only 5 left in stock - order soon",
  },
];

export default function WishlistPage() {
  const [activeMode, setActiveMode] = useState<"B2B" | "B2C">("B2B");
  const [b2bTab, setB2bTab] = useState<"products" | "suppliers">("products");
  const [b2bListFilter, setB2bListFilter] = useState<"all" | "ungrouped">("all");
  const [b2bFavs, setB2bFavs] = useState<B2BFavItem[]>(INITIAL_B2B_FAVS);
  const [b2cFavs, setB2cFavs] = useState<B2CFavItem[]>(INITIAL_B2C_FAVS);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans text-slate-800">
      <BusinessNavbar />

      <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-6 py-6 space-y-6">
        {/* Top Switcher Bar: B2B Favourites vs B2C Favourites */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            >
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-black text-slate-900">
                Favorites &amp; Saved Items
              </h1>
              <p className="text-xs text-slate-500">
                Switch between your B2B Wholesale Favorites and B2C Retail Wishlist
              </p>
            </div>
          </div>

          {/* Two Switch-Over Option Buttons */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            <button
              type="button"
              onClick={() => setActiveMode("B2B")}
              style={
                activeMode === "B2B"
                  ? { backgroundColor: "#0e0f89", color: "#ffffff" }
                  : { backgroundColor: "transparent", color: "#64748b", opacity: 0.65 }
              }
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-black transition cursor-pointer shadow-2xs"
            >
              <Building2 className="w-4 h-4" />
              <span>B2B Favourites</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMode("B2C")}
              style={
                activeMode === "B2C"
                  ? { backgroundColor: "#0e0f89", color: "#ffffff" }
                  : { backgroundColor: "transparent", color: "#64748b", opacity: 0.65 }
              }
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-black transition cursor-pointer shadow-2xs"
            >
              <Package className="w-4 h-4" />
              <span>B2C Favourites</span>
            </button>
          </div>
        </div>

        {/* Toast Notification */}
        {toastMsg && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-lg text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMsg}</span>
          </div>
        )}

        {/* =================================================================== */}
        {/* VIEW 1: B2B FAVOURITES (Alibaba Style - Image 1)                    */}
        {/* =================================================================== */}
        {activeMode === "B2B" && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs p-6 space-y-6">
            {/* Products | Suppliers Tabs */}
            <div className="flex items-center gap-6 border-b border-slate-200">
              <button
                type="button"
                onClick={() => setB2bTab("products")}
                className={`pb-3 text-sm font-black border-b-2 cursor-pointer transition ${
                  b2bTab === "products"
                    ? "border-slate-900 text-slate-900"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                Products
              </button>
              <button
                type="button"
                onClick={() => setB2bTab("suppliers")}
                className={`pb-3 text-sm font-black border-b-2 cursor-pointer transition ${
                  b2bTab === "suppliers"
                    ? "border-slate-900 text-slate-900"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                Suppliers
              </button>
            </div>

            {b2bTab === "products" ? (
              <div
                style={{ display: "flex", flexDirection: "row", gap: "24px", alignItems: "flex-start" }}
                className="w-full"
              >
                {/* Left Sidebar: My list */}
                <aside
                  style={{ width: "200px", minWidth: "200px" }}
                  className="space-y-4 shrink-0 hidden md:block"
                >
                  <div className="space-y-1">
                    <span className="text-sm font-black text-slate-900 block">
                      My list
                    </span>
                    <button
                      type="button"
                      onClick={() => showToast("Create new list modal coming soon")}
                      className="text-xs font-bold text-slate-700 underline hover:text-[#0e0f89] cursor-pointer flex items-center gap-1"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Create a list</span>
                    </button>
                  </div>

                  <div className="space-y-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setB2bListFilter("all")}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition cursor-pointer ${
                        b2bListFilter === "all"
                          ? "bg-slate-100 font-black text-slate-900"
                          : "text-slate-600 hover:bg-slate-50 font-semibold"
                      }`}
                    >
                      <span className="block">All</span>
                      <span className="text-[11px] text-slate-500 font-normal">
                        {b2bFavs.length} items
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setB2bListFilter("ungrouped")}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition cursor-pointer ${
                        b2bListFilter === "ungrouped"
                          ? "bg-slate-100 font-black text-slate-900"
                          : "text-slate-600 hover:bg-slate-50 font-semibold"
                      }`}
                    >
                      <span className="block">Ungrouped</span>
                      <span className="text-[11px] text-slate-500 font-normal">
                        {b2bFavs.length} items
                      </span>
                    </button>
                  </div>
                </aside>

                {/* Right Cards Grid */}
                <div style={{ flex: 1 }} className="min-w-0">
                  {b2bFavs.length === 0 ? (
                    <div className="py-12 text-center text-sm text-slate-500">
                      No B2B favorite products saved yet.
                    </div>
                  ) : (
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                        gap: "20px",
                      }}
                    >
                      {b2bFavs.map((item) => (
                        <div
                          key={item.id}
                          className="bg-white rounded-2xl border border-slate-200 p-4 hover:shadow-md transition flex flex-col justify-between"
                        >
                          <div>
                            <div className="relative w-full h-52 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-3 overflow-hidden">
                              <button
                                type="button"
                                onClick={() => {
                                  setB2bFavs(b2bFavs.filter((f) => f.id !== item.id));
                                  showToast("Removed from B2B Favorites");
                                }}
                                title="Remove from Favorites"
                                className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center cursor-pointer hover:bg-rose-50"
                              >
                                <Heart className="w-4 h-4 text-orange-500 fill-orange-500" />
                              </button>
                              <Link href={`/b2b/product/${item.id}`} className="w-full h-full flex items-center justify-center">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="max-h-full max-w-full object-contain"
                                />
                              </Link>
                            </div>

                            <Link href={`/b2b/product/${item.id}`}>
                              <h3 className="text-xs sm:text-[13px] font-bold text-slate-800 line-clamp-2 mt-3 hover:text-[#0e0f89] leading-snug">
                                {item.title}
                              </h3>
                            </Link>

                            <span className="text-[11px] font-bold text-emerald-700 block mt-1">
                              {item.delivery}
                            </span>

                            <div className="mt-1.5 flex items-baseline gap-2">
                              <span className="text-base font-black text-slate-900">
                                {item.price}
                              </span>
                              <span className="text-xs font-bold text-slate-600">
                                {item.moq}
                              </span>
                            </div>

                            <span className="text-[11px] text-slate-500 block mt-0.5">
                              {item.sold}
                            </span>

                            <div className="mt-3 pt-2.5 border-t border-slate-100 space-y-1">
                              <span className="text-[11px] font-bold text-slate-700 underline decoration-slate-300 block truncate">
                                {item.supplier}
                              </span>
                              <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                                {item.verified && (
                                  <span className="font-black text-blue-700 flex items-center gap-0.5">
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    Verified
                                  </span>
                                )}
                                <span>
                                  {item.years} • {item.country}
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-1.5 pt-1">
                                {item.customization && (
                                  <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-semibold">
                                    {item.customization}
                                  </span>
                                )}
                                <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-semibold">
                                  {item.reorderRate}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Bottom Actions: Chat now, Add to cart, ... */}
                          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                            <Link
                              href={`/b2b/product/${item.id}`}
                              className="flex-1 py-2 px-3 rounded-full border border-slate-300 hover:border-[#0e0f89] text-xs font-bold text-slate-800 hover:text-[#0e0f89] text-center transition"
                            >
                              Chat now
                            </Link>
                            <button
                              type="button"
                              onClick={() => showToast("Added to B2B Cart")}
                              className="flex-1 py-2 px-3 rounded-full border border-slate-300 hover:border-[#0e0f89] text-xs font-bold text-slate-800 hover:text-[#0e0f89] text-center transition cursor-pointer"
                            >
                              Add to cart
                            </button>
                            <button
                              type="button"
                              className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 cursor-pointer shrink-0"
                            >
                              <MoreHorizontal className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="py-10 text-center space-y-2 text-slate-500 text-xs">
                <Building2 className="w-10 h-10 text-slate-300 mx-auto" />
                <p className="font-bold text-slate-700">2 Verified Suppliers Saved</p>
                <p>Dongyang Huisidun Import And Export Co., Ltd. • Fujian Herbal Treasure Bioengineering Co.,Ltd</p>
              </div>
            )}
          </div>
        )}

        {/* =================================================================== */}
        {/* VIEW 2: B2C FAVOURITES (Image 2 style + Delete Icon & Add to Cart)  */}
        {/* =================================================================== */}
        {activeMode === "B2C" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
              gap: "20px",
            }}
          >
            {b2cFavs.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-sm text-slate-500">
                Your B2C Wishlist is empty.
              </div>
            ) : (
              b2cFavs.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden"
                >
                  {/* Yellow Express Banner */}
                  <div
                    style={{ backgroundColor: "#fde047" }}
                    className="px-4 py-1.5 flex items-center justify-between text-xs font-black text-slate-900"
                  >
                    <span className="flex items-center gap-1 italic">
                      <Zap className="w-3.5 h-3.5 fill-slate-900" />
                      express
                    </span>
                    <span>Guaranteed Delivery</span>
                  </div>

                  {/* Card Body */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "20px",
                      flexWrap: "wrap",
                    }}
                    className="p-4 sm:p-5"
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        gap: "16px",
                        flex: "1 1 320px",
                        minWidth: 0,
                      }}
                    >
                      {/* Product Thumbnail */}
                      <div
                        style={{ width: "96px", height: "96px" }}
                        className="rounded-xl bg-slate-50 border border-slate-200 p-2 flex items-center justify-center shrink-0"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      {/* Details */}
                      <div style={{ flex: 1, minWidth: 0 }} className="space-y-1.5">
                        <h3 className="text-sm sm:text-base font-black text-slate-900 leading-snug">
                          {item.title}
                        </h3>
                        <span className="inline-block text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-lg border border-slate-200">
                          {item.variant}
                        </span>
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="text-slate-600 font-semibold">Get it</span>
                          <span className="bg-amber-100 text-amber-900 font-black px-2 py-0.5 rounded">
                            Tomorrow
                          </span>
                          <span className="text-slate-500 flex items-center gap-1 text-[11px]">
                            <Clock className="w-3 h-3" />
                            Order in 3 hrs 41 mins
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-0.5">
                          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                            Extra 15% off
                          </span>
                          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                            Extra 10% off
                          </span>
                        </div>
                        <span className="text-[11px] font-bold text-amber-700 block">
                          • {item.stockNote}
                        </span>
                      </div>
                    </div>

                    {/* Right Side: Price + Delete Icon & Add to Cart Button (No + / - stepper) */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
                      <div className="text-left sm:text-right">
                        <div className="text-lg sm:text-xl font-black text-slate-900">
                          {item.price}
                        </div>
                        <div className="text-xs font-bold text-emerald-600">
                          {item.discount}{" "}
                          <span className="text-slate-400 line-through font-normal">
                            {item.originalPrice}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <button
                          type="button"
                          onClick={() => {
                            setB2cFavs(b2cFavs.filter((f) => f.id !== item.id));
                            showToast("Removed from B2C Wishlist");
                          }}
                          title="Delete item"
                          aria-label="Delete item"
                          className="w-9 h-9 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-600 flex items-center justify-center cursor-pointer transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => showToast(`Added "${item.title}" to Cart`)}
                          style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                          className="px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-sm hover:opacity-95 cursor-pointer transition"
                        >
                          <ShoppingCart className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </main>

      <BusinessFooter />
    </div>
  );
}

