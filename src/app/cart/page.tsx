"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { BusinessFooter } from "@/components/BusinessFooter";
import { AuthGuardGate } from "@/components/AuthGuardGate";
import {
  ShoppingCart,
  Building2,
  Package,
  ShieldCheck,
  Lock,
  Truck,
  Trash2,
  Plus,
  Minus,
  Info,
  Clock,
  CheckCircle2,
  Send,
  Heart,
  ArrowLeftRight,
} from "lucide-react";

export default function CartPage() {
  const [activeMode, setActiveMode] = useState<"B2B" | "B2C">("B2B");
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // B2B Direct Order State
  const [b2bChecked, setB2bChecked] = useState(true);
  const [b2bQty, setB2bQty] = useState(1);
  const [showPriceTier, setShowPriceTier] = useState(false);

  // B2C Cart State (Image 3)
  const [b2cItems, setB2cItems] = useState([
    {
      id: "adidas-grand-court",
      title: "Adidas - Grand Court Alpha Shoes",
      image: "/categories/b2b-products/presser-foot-set.png",
      variant: "Size: 43 1/3 • Color: Blue",
      price: 2200,
      originalPrice: 3999,
      discount: "45% OFF",
      qty: 1,
      checked: true,
      stockNote: "Only 3 left in stock - order soon",
    },
  ]);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2500);
  };

  // B2B Tiered Unit Price
  const b2bUnitPrice = b2bQty >= 100 ? 645.91 : b2bQty >= 10 ? 683.91 : 712.41;
  const b2bSubtotal = Math.round(b2bUnitPrice * b2bQty * 100) / 100;
  const b2bShipping = b2bChecked ? 998.32 : 0;
  const b2bTotal = Math.round(((b2bChecked ? b2bSubtotal : 0) + b2bShipping) * 100) / 100;

  // B2C Totals
  const b2cSubtotal = b2cItems
    .filter((i) => i.checked)
    .reduce((acc, i) => acc + i.price * i.qty, 0);
  const b2cGstSavings = Math.round((b2cSubtotal - b2cSubtotal / 1.18) * 100) / 100;

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans text-slate-800">
      <BusinessNavbar />

      <AuthGuardGate
        title="Shopping Cart"
        description="Please sign in to view your B2B & B2C shopping cart and proceed to checkout."
      >
      <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-6 py-6 space-y-6">
        {/* Top Switcher Bar: B2B Cart vs B2C Cart */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            >
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-black text-slate-900">
                Shopping Cart
              </h1>
              <p className="text-xs text-slate-500">
                Manage your B2B Wholesale Orders, Inquiry Basket &amp; B2C Retail Cart
              </p>
            </div>
          </div>

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
              <span>B2B Cart</span>
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
              <span>B2C Cart</span>
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
        {/* VIEW 1: B2B CART                                                    */}
        {/* =================================================================== */}
        {activeMode === "B2B" && (
          <div
            style={{ display: "flex", flexDirection: "row", gap: "24px", alignItems: "flex-start", flexWrap: "wrap" }}
          >
                {/* Left Cart Items */}
                <div style={{ flex: "1 1 600px", minWidth: 0 }} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-4">
                  <label className="flex items-center gap-3 text-xs font-black text-slate-800 pb-3 border-b border-slate-100 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={b2bChecked}
                      onChange={(e) => setB2bChecked(e.target.checked)}
                      className="w-4 h-4 accent-[#0e0f89]"
                    />
                    <span>Select all variations (1)</span>
                  </label>

                  <div className="flex items-center gap-3 text-xs font-black text-slate-900">
                    <input
                      type="checkbox"
                      checked={b2bChecked}
                      onChange={(e) => setB2bChecked(e.target.checked)}
                      className="w-4 h-4 accent-[#0e0f89]"
                    />
                    <span>Dongyang Huisidun Import And Export Co., Ltd.</span>
                  </div>

                  <div className="pl-7 space-y-2">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Industrial Sewing Binder DAYU427 F522 Piping Folder for Trousers Side Seam With Sting and T Shirt Five-Thread Overlock Machine
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-[11px]">
                      <span className="text-slate-500">Guaranteed delivery: 09 Dec - 03 Jan</span>
                      <span className="text-rose-600 font-bold">21 sold recently</span>
                      <span className="text-slate-500 flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded">
                        <Clock className="w-3 h-3 text-[#0e0f89]" />
                        Added: Nov 26, 2026 • 09:45 AM
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 block">
                      Min. order: 1 piece
                    </span>

                    {/* Variation Box */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex flex-wrap items-center justify-between gap-4 mt-2 relative">
                      <div className="flex items-center gap-3">
                        <img
                          src="/categories/b2b-products/hand-needles.png"
                          alt="DY427/F522"
                          className="w-16 h-16 rounded-lg object-contain bg-white border border-slate-200 p-1"
                        />
                        <span className="text-xs font-bold text-slate-700">
                          model number: DY427/ F522
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setShowPriceTier(!showPriceTier)}
                            className="flex items-center gap-1 text-sm font-black text-slate-900 cursor-pointer"
                          >
                            <span>₹{b2bUnitPrice.toFixed(2)}</span>
                            <span className="text-xs font-normal text-slate-500">/piece</span>
                            <Info className="w-3.5 h-3.5 text-slate-400" />
                          </button>

                          {showPriceTier && (
                            <div className="absolute right-0 top-7 w-44 bg-white border border-slate-200 rounded-xl shadow-xl p-3 z-20 text-xs space-y-1">
                              <span className="font-black text-slate-800 block border-b border-slate-100 pb-1">
                                Price by quantity
                              </span>
                              <div className="flex justify-between">
                                <span>1-9</span>
                                <strong>₹712.41</strong>
                              </div>
                              <div className="flex justify-between">
                                <span>10-99</span>
                                <strong>₹683.91</strong>
                              </div>
                              <div className="flex justify-between">
                                <span>≥100</span>
                                <strong>₹645.91</strong>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Stepper */}
                        <div className="flex items-center border border-slate-300 rounded-full bg-white px-2 py-1 gap-3">
                          <button
                            type="button"
                            onClick={() => setB2bQty(Math.max(1, b2bQty - 1))}
                            className="text-slate-600 hover:text-slate-900 cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-black w-6 text-center">{b2bQty}</span>
                          <button
                            type="button"
                            onClick={() => setB2bQty(b2bQty + 1)}
                            className="text-slate-600 hover:text-slate-900 cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Order Summary */}
                <aside
                  style={{ width: "340px", minWidth: "300px" }}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4 shrink-0"
                >
                  <h2 className="text-base font-black text-slate-900">
                    Order summary ({b2bChecked ? 1 : 0} items)
                  </h2>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>Item subtotal</span>
                      <strong className="text-slate-900">
                        ₹{b2bChecked ? b2bSubtotal.toFixed(2) : "0.00"}
                      </strong>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Shipping fee</span>
                      <strong className="text-slate-900">₹{b2bShipping.toFixed(2)}</strong>
                    </div>
                    <div className="flex justify-between text-sm font-black text-slate-900 pt-2 border-t border-slate-100">
                      <span>Subtotal excl. tax</span>
                      <span>₹{b2bTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => showToast("Proceeding to B2B Trade Assurance Checkout")}
                    style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                    className="w-full py-3 rounded-full text-xs font-black flex items-center justify-center gap-2 shadow-md hover:opacity-95 cursor-pointer transition"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Check out</span>
                  </button>

                  <div className="pt-3 border-t border-slate-100 space-y-2.5 text-[11px] text-slate-600">
                    <span className="font-black text-slate-900 block text-xs">
                      1PLACEE Order Protection
                    </span>
                    <div className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>Secure payments:</strong> SSL encryption &amp; PCI DSS data protection.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Truck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>Guaranteed delivery:</strong> Receive 5% delay compensation if late.
                      </span>
                    </div>
                  </div>
                </aside>
              </div>
        )}

        {/* =================================================================== */}
        {/* VIEW 2: B2C CART (Image 3 Style with - 1 + Stepper & Summary)       */}
        {/* =================================================================== */}
        {activeMode === "B2C" && (
          <div
            style={{ display: "flex", flexDirection: "row", gap: "24px", alignItems: "flex-start", flexWrap: "wrap" }}
          >
            {/* Left B2C Items */}
            <div style={{ flex: "1 1 600px", minWidth: 0 }} className="space-y-4">
              {b2cItems.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-sm text-slate-500">
                  Your B2C Cart is empty.
                </div>
              ) : (
                b2cItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-2xs"
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: "16px",
                        flexWrap: "wrap",
                      }}
                    >
                      {/* Checkbox + Image + Stepper */}
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={item.checked}
                          onChange={(e) =>
                            setB2cItems(
                              b2cItems.map((x) =>
                                x.id === item.id ? { ...x, checked: e.target.checked } : x
                              )
                            )
                          }
                          className="w-4 h-4 mt-2 accent-[#0e0f89] cursor-pointer"
                        />

                        <div className="space-y-2 flex flex-col items-center">
                          <div className="w-24 h-24 rounded-xl bg-slate-50 border border-slate-200 p-2 flex items-center justify-center">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>

                          {/* - 1 + Stepper */}
                          <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50 px-2 py-1 gap-3 text-xs">
                            <button
                              type="button"
                              onClick={() =>
                                setB2cItems(
                                  b2cItems.map((x) =>
                                    x.id === item.id
                                      ? { ...x, qty: Math.max(1, x.qty - 1) }
                                      : x
                                  )
                                )
                              }
                              className="text-slate-600 hover:text-rose-600 cursor-pointer"
                            >
                              {item.qty === 1 ? (
                                <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                              ) : (
                                <Minus className="w-3.5 h-3.5" />
                              )}
                            </button>
                            <span className="font-black text-slate-900">{item.qty}</span>
                            <button
                              type="button"
                              onClick={() =>
                                setB2cItems(
                                  b2cItems.map((x) =>
                                    x.id === item.id ? { ...x, qty: x.qty + 1 } : x
                                  )
                                )
                              }
                              className="text-slate-600 hover:text-[#0e0f89] cursor-pointer"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Middle Details */}
                      <div style={{ flex: "1 1 260px", minWidth: 0 }} className="space-y-1.5">
                        <h3 className="text-sm sm:text-base font-black text-slate-900">
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
                          <span className="text-slate-500 flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                            <Clock className="w-3 h-3 text-[#0e0f89]" />
                            Added: Nov 26, 2026 • 09:45 AM
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

                      {/* Right Delete + Price */}
                      <div className="flex flex-col items-end justify-between gap-4 shrink-0">
                        <button
                          type="button"
                          onClick={() => {
                            setB2cItems(b2cItems.filter((x) => x.id !== item.id));
                            showToast("Item removed from B2C Cart");
                          }}
                          className="w-8 h-8 rounded-full border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-500 flex items-center justify-center cursor-pointer"
                          title="Remove"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                        <div className="text-right">
                          <div className="text-lg sm:text-xl font-black text-slate-900">
                            ₹{(item.price * item.qty).toLocaleString("en-IN")}
                          </div>
                          <div className="text-xs font-bold text-emerald-600">
                            {item.discount}{" "}
                            <span className="text-slate-400 line-through font-normal">
                              ₹{(item.originalPrice * item.qty).toLocaleString("en-IN")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Right B2C Summary */}
            <aside
              style={{ width: "340px", minWidth: "300px" }}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4 shrink-0"
            >
              <h2 className="text-base font-black text-slate-900">
                B2C Order Summary
              </h2>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal (Incl. GST)</span>
                  <strong className="text-slate-900">
                    ₹{b2cSubtotal.toLocaleString("en-IN")}
                  </strong>
                </div>
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>1PLACEE-BUS GST ITC Savings</span>
                  <span>- ₹{b2cGstSavings}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Express Delivery</span>
                  <strong className="text-emerald-600">FREE</strong>
                </div>
                <div className="flex justify-between text-sm font-black text-slate-900 pt-2 border-t border-slate-100">
                  <span>Total Payable</span>
                  <span>₹{b2cSubtotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => showToast("Proceeding to B2C Express Checkout")}
                style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                className="w-full py-3 rounded-full text-xs font-black shadow-md hover:opacity-95 cursor-pointer transition"
              >
                Proceed to Checkout
              </button>
            </aside>
          </div>
        )}
      </main>
      </AuthGuardGate>

      <BusinessFooter />
    </div>
  );
}

