"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { BusinessFooter } from "@/components/BusinessFooter";
import {
  User,
  Building2,
  Type,
  Package,
  ListChecks,
  Repeat,
  BarChart3,
  Boxes,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Settings,
} from "lucide-react";

type SettingsSection =
  | "account"
  | "business"
  | "appearance"
  | "orders"
  | "lists"
  | "subscribe"
  | "analytics"
  | "bulk";

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState<SettingsSection>("account");
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Profile User Details State
  const [fullName, setFullName] = useState("Vinothkumar");
  const [email, setEmail] = useState("vinothkumar@1place.in");
  const [phone, setPhone] = useState("+91 98401 23456");
  const [companyName, setCompanyName] = useState("VERTEX CLOUD SOLUTIONS PRIVATE LIMITED");
  const [gstin, setGstin] = useState("33AABCU9603R1ZM");
  const [address, setAddress] = useState("Plot 42, Guindy Industrial Estate, Chennai, TN - 600032");

  // Text & Appearance State
  const [textSize, setTextSize] = useState<"compact" | "standard" | "large">("standard");
  const [themeMode, setThemeMode] = useState<"light" | "contrast">("light");
  const [language, setLanguage] = useState<"en" | "ta">("en");

  // Business Settings State
  const [autoGstItc, setAutoGstItc] = useState(true);
  const [requirePoNumber, setRequirePoNumber] = useState(false);

  // Embedded Orders & Returns State
  const [ordersMode, setOrdersMode] = useState<"B2B" | "B2C">("B2B");
  const [b2bOrderTab, setB2bOrderTab] = useState("All Orders (2)");
  const [b2cOrderTab, setB2cOrderTab] = useState("Orders");

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2500);
  };

  const menuItems: { id: SettingsSection; label: string; icon: React.ElementType }[] = [
    { id: "account", label: "Your Account", icon: User },
    { id: "business", label: "Business Settings", icon: Building2 },
    { id: "appearance", label: "Text & Appearance", icon: Type },
    { id: "orders", label: "Orders & Returns", icon: Package },
    { id: "lists", label: "Lists", icon: ListChecks },
    { id: "subscribe", label: "Manage 'Subscribe & Save'", icon: Repeat },
    { id: "analytics", label: "Business Analytics", icon: BarChart3 },
    { id: "bulk", label: "Bulk Ordering", icon: Boxes },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans text-slate-800">
      <BusinessNavbar />

      <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-6 py-6 space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            >
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-black text-slate-900">
                Account &amp; Business Settings
              </h1>
              <p className="text-xs text-slate-500">
                Manage your profile, text appearance, orders, lists, and B2B procurement preferences
              </p>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-xs font-black">
            <ShieldCheck className="w-4 h-4" />
            Verified GST Business
          </span>
        </div>

        {/* Toast */}
        {toastMsg && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-lg text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMsg}</span>
          </div>
        )}

        {/* Split Layout: Left Menu + Right Content */}
        <div
          style={{ display: "flex", flexDirection: "row", gap: "24px", alignItems: "flex-start", flexWrap: "wrap" }}
        >
          {/* Left Sidebar */}
          <aside
            style={{ width: "260px", minWidth: "240px" }}
            className="bg-white rounded-2xl border border-slate-200 p-2 shadow-2xs shrink-0 space-y-1"
          >
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveSection(item.id)}
                  style={
                    isActive
                      ? { backgroundColor: "#0e0f89", color: "#ffffff" }
                      : { backgroundColor: "transparent", color: "#334155" }
                  }
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs sm:text-[13px] flex items-center gap-3 cursor-pointer transition ${
                    isActive ? "font-black shadow-2xs" : "font-semibold hover:bg-slate-50"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </aside>

          {/* Right Content Panel */}
          <div style={{ flex: "1 1 560px", minWidth: 0 }} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-6">
            {/* 1. YOUR ACCOUNT (Profile User Details) */}
            {activeSection === "account" && (
              <div className="space-y-5">
                <div className="border-b border-slate-100 pb-3">
                  <h2 className="text-base sm:text-lg font-black text-slate-900">
                    Your Account — Profile User Details
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Update your personal contact details and verified business identity.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Full Name</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Business Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Phone Number</label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">GSTIN</label>
                    <input
                      type="text"
                      value={gstin}
                      onChange={(e) => setGstin(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono font-bold"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="font-bold text-slate-700 block mb-1">Registered Legal Company Name</label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="font-bold text-slate-700 block mb-1">Primary Billing &amp; Delivery Address</label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => showToast("Profile details saved successfully!")}
                  style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                  className="px-6 py-2.5 rounded-xl text-xs font-black cursor-pointer shadow-sm"
                >
                  Save Profile Changes
                </button>
              </div>
            )}

            {/* 2. BUSINESS SETTINGS */}
            {activeSection === "business" && (
              <div className="space-y-5">
                <div className="border-b border-slate-100 pb-3">
                  <h2 className="text-base sm:text-lg font-black text-slate-900">
                    Business Settings
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Configure GST invoicing, purchase order approvals, and procurement rules.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <label className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer">
                    <div>
                      <strong className="text-slate-900 block">Automatic GST Input Tax Credit (ITC) Invoices</strong>
                      <span className="text-slate-500">Automatically attach GSTIN 33AABCU9603R1ZM to all B2B &amp; B2C orders</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={autoGstItc}
                      onChange={(e) => setAutoGstItc(e.target.checked)}
                      className="w-4 h-4 accent-[#0e0f89]"
                    />
                  </label>

                  <label className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer">
                    <div>
                      <strong className="text-slate-900 block">Require PO Number on Checkout</strong>
                      <span className="text-slate-500">Mandate internal Purchase Order reference before placing bulk orders</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={requirePoNumber}
                      onChange={(e) => setRequirePoNumber(e.target.checked)}
                      className="w-4 h-4 accent-[#0e0f89]"
                    />
                  </label>
                </div>
              </div>
            )}

            {/* 3. TEXT & APPEARANCE */}
            {activeSection === "appearance" && (
              <div className="space-y-5">
                <div className="border-b border-slate-100 pb-3">
                  <h2 className="text-base sm:text-lg font-black text-slate-900">
                    Text &amp; Appearance
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Customize text size, display contrast, and portal language.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="font-bold text-slate-800 block mb-2">Text Size</label>
                    <div className="flex gap-3">
                      {(["compact", "standard", "large"] as const).map((sz) => (
                        <button
                          key={sz}
                          type="button"
                          onClick={() => setTextSize(sz)}
                          style={
                            textSize === sz
                              ? { backgroundColor: "#0e0f89", color: "#ffffff" }
                              : { backgroundColor: "#f8fafc", color: "#334155" }
                          }
                          className="px-4 py-2 rounded-xl border border-slate-200 font-bold capitalize cursor-pointer"
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-slate-800 block mb-2">Display Theme</label>
                    <div className="flex gap-3">
                      {[
                        { id: "light", label: "Clean Light" },
                        { id: "contrast", label: "High Contrast" },
                      ].map((th) => (
                        <button
                          key={th.id}
                          type="button"
                          onClick={() => setThemeMode(th.id as "light" | "contrast")}
                          style={
                            themeMode === th.id
                              ? { backgroundColor: "#0e0f89", color: "#ffffff" }
                              : { backgroundColor: "#f8fafc", color: "#334155" }
                          }
                          className="px-4 py-2 rounded-xl border border-slate-200 font-bold cursor-pointer"
                        >
                          {th.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-slate-800 block mb-2">Preferred Language</label>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value as "en" | "ta")}
                      className="px-3 py-2 rounded-xl border border-slate-300 font-semibold bg-white"
                    >
                      <option value="en">English (India)</option>
                      <option value="ta">தமிழ் (Tamil)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => showToast("Appearance preferences applied!")}
                  style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                  className="px-6 py-2.5 rounded-xl text-xs font-black cursor-pointer"
                >
                  Apply Appearance
                </button>
              </div>
            )}

            {/* 4. ORDERS & RETURNS (Full Embedded B2B & B2C Orders) */}
            {activeSection === "orders" && (
              <div className="space-y-5">
                <div className="border-b border-slate-100 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-base sm:text-lg font-black text-slate-900">
                      Orders &amp; Returns
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Track your B2B Bulk Procurement Orders &amp; B2C Business Retail Orders
                    </p>
                  </div>

                  {/* B2B Orders / B2C Orders Switcher */}
                  <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setOrdersMode("B2B")}
                      style={
                        ordersMode === "B2B"
                          ? { backgroundColor: "#0e0f89", color: "#ffffff" }
                          : { backgroundColor: "transparent", color: "#64748b" }
                      }
                      className="px-3.5 py-1.5 rounded-lg text-xs font-black cursor-pointer transition"
                    >
                      B2B Orders
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrdersMode("B2C")}
                      style={
                        ordersMode === "B2C"
                          ? { backgroundColor: "#0e0f89", color: "#ffffff" }
                          : { backgroundColor: "transparent", color: "#64748b" }
                      }
                      className="px-3.5 py-1.5 rounded-lg text-xs font-black cursor-pointer transition"
                    >
                      B2C Orders
                    </button>
                  </div>
                </div>

                {ordersMode === "B2B" ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 border-b border-slate-200 overflow-x-auto no-scrollbar">
                      {["All Orders (2)", "Payment Unsettled (1)", "In transit (1)", "Completed (0)", "Refund / Chargeback (0)"].map(
                        (tab) => (
                          <button
                            key={tab}
                            type="button"
                            onClick={() => setB2bOrderTab(tab)}
                            className={`pb-2.5 text-xs font-bold border-b-2 whitespace-nowrap cursor-pointer ${
                              b2bOrderTab === tab
                                ? "border-[#0e0f89] text-[#0e0f89] font-black"
                                : "border-transparent text-slate-500"
                            }`}
                          >
                            {tab}
                          </button>
                        )
                      )}
                    </div>

                    {[
                      {
                        id: "1P-B2B-904821",
                        time: "Nov 26, 2026 09:30 AM",
                        title: "Industrial Sewing Binder DAYU427 F522 Piping Folder — Bulk Lot",
                        qty: "₹712.41 × 50",
                        total: "₹35,620.50",
                        supplier: "Dongyang Huisidun Import & Export",
                        status: "Unpaid",
                        image: "/categories/b2b-products/hand-needles.png",
                      },
                      {
                        id: "1P-B2B-883104",
                        time: "Nov 22, 2026 04:15 PM",
                        title: "Wholesale 3-1/2\" Household Hand Needles & Sewing Craft Needles",
                        qty: "₹7.67 × 20,000",
                        total: "₹1,53,400.00",
                        supplier: "Apex Craft Tools Pvt. Ltd.",
                        status: "In transit",
                        image: "/categories/b2b-products/sewing-needles-set.png",
                      },
                    ]
                      .filter((o) => {
                        if (b2bOrderTab.startsWith("Payment Unsettled")) return o.status === "Unpaid";
                        if (b2bOrderTab.startsWith("In transit")) return o.status === "In transit";
                        if (b2bOrderTab.startsWith("Completed") || b2bOrderTab.startsWith("Refund")) return false;
                        return true;
                      })
                      .map((order) => (
                        <div key={order.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-600 border-b border-slate-200/70 pb-2">
                            <span className="font-bold text-slate-800">
                              Order ID: <span className="font-mono">{order.id}</span>
                            </span>
                            <span>{order.time}</span>
                          </div>
                          <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-3 flex-1 min-w-[220px]">
                              <img
                                src={order.image}
                                alt={order.title}
                                className="w-14 h-14 rounded-lg object-contain border border-slate-200 bg-white p-1 shrink-0"
                              />
                              <div>
                                <p className="text-xs font-bold text-slate-900 line-clamp-2">{order.title}</p>
                                <span className="text-[11px] text-slate-500">{order.qty}</span>
                              </div>
                            </div>
                            <div className="text-xs">
                              <span className="text-slate-600 block">{order.supplier}</span>
                              <strong className="text-sm font-black text-slate-900">{order.total}</strong>
                            </div>
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-xs font-black ${
                                  order.status === "Unpaid" ? "text-amber-600" : "text-emerald-600"
                                }`}
                              >
                                {order.status}
                              </span>
                              <button
                                type="button"
                                onClick={() => showToast(`Action triggered for ${order.id}`)}
                                style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                                className="px-3 py-1.5 rounded-lg text-xs font-black cursor-pointer"
                              >
                                {order.status === "Unpaid" ? "Pay Now" : "Track"}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-5 border-b border-slate-200 overflow-x-auto no-scrollbar">
                      {["Orders", "Buy Again", "Not Yet Shipped", "Cancelled Orders"].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setB2cOrderTab(t)}
                          className={`pb-2.5 text-xs font-bold border-b-2 whitespace-nowrap cursor-pointer ${
                            b2cOrderTab === t
                              ? "border-[#0e0f89] text-[#0e0f89] font-black"
                              : "border-transparent text-slate-500"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    {[
                      {
                        orderNo: "407-6702862-8925147",
                        date: "26 November 2026",
                        total: "₹2,200.00",
                        status: "Delivered Tomorrow",
                        title: "Adidas - Grand Court Alpha Shoes | Size: 43 1/3 • Color: Blue",
                        image: "/categories/b2b-products/presser-foot-set.png",
                        cancelled: false,
                      },
                      {
                        orderNo: "407-3194820-1129402",
                        date: "9 October 2026",
                        total: "₹1,499.00",
                        status: "Cancelled",
                        title: "Philips India's No.1 Men's Trimmer | 60 mins runtime | MG3927",
                        image: "/categories/b2b-products/hand-needles.png",
                        cancelled: true,
                      },
                    ]
                      .filter((o) => (b2cOrderTab === "Cancelled Orders" ? o.cancelled : true))
                      .map((order) => (
                        <div key={order.orderNo} className="rounded-xl border border-slate-200 overflow-hidden">
                          <div className="bg-slate-100/80 px-4 py-2.5 border-b border-slate-200 flex flex-wrap justify-between gap-2 text-[11px] text-slate-600">
                            <span>
                              Order placed: <strong className="text-slate-800">{order.date}</strong> • Total:{" "}
                              <strong className="text-slate-800">{order.total}</strong>
                            </span>
                            <span>Order # {order.orderNo}</span>
                          </div>
                          <div className="p-4 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-3 flex-1 min-w-[220px]">
                              <img
                                src={order.image}
                                alt={order.title}
                                className="w-16 h-16 rounded-lg object-contain border border-slate-200 bg-slate-50 p-1 shrink-0"
                              />
                              <div>
                                <span
                                  className={`text-xs font-black block ${
                                    order.cancelled ? "text-slate-800" : "text-emerald-700"
                                  }`}
                                >
                                  {order.status}
                                </span>
                                <p className="text-xs font-bold text-[#0e0f89] mt-0.5">{order.title}</p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => showToast(`Added "${order.title}" back to Cart`)}
                              style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                              className="px-4 py-2 rounded-full text-xs font-black cursor-pointer"
                            >
                              Buy it again
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            )}

            {/* 5. LISTS */}
            {activeSection === "lists" && (
              <div className="space-y-4">
                <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                  <div>
                    <h2 className="text-base sm:text-lg font-black text-slate-900">
                      Procurement Lists
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Organize frequently reordered B2B &amp; B2C items into custom lists.
                    </p>
                  </div>
                  <Link
                    href="/wishlist"
                    style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                    className="px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1.5"
                  >
                    <span>View Saved Lists</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <strong className="text-slate-900 block">Default Reorder List (5 items)</strong>
                  <span className="text-slate-500">Includes Sewing Needles, Industrial Binders, and Office Supplies</span>
                </div>
              </div>
            )}

            {/* 6. MANAGE SUBSCRIBE & SAVE */}
            {activeSection === "subscribe" && (
              <div className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <h2 className="text-base sm:text-lg font-black text-slate-900">
                    Manage &lsquo;Subscribe &amp; Save&rsquo;
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Automate monthly office &amp; factory consumable deliveries with extra 10% bulk savings.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center justify-between">
                  <div>
                    <strong className="text-slate-900 block">Monthly Packaging &amp; Tape Refill</strong>
                    <span className="text-slate-500">Next delivery: 01 Dec 2026 • Save 10%</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => showToast("Subscription schedule updated")}
                    className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white font-bold cursor-pointer"
                  >
                    Manage
                  </button>
                </div>
              </div>
            )}

            {/* 7. BUSINESS ANALYTICS */}
            {activeSection === "analytics" && (
              <div className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <h2 className="text-base sm:text-lg font-black text-slate-900">
                    Business Analytics
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Monthly procurement spend and GST Input Tax Credit (ITC) savings overview.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200">
                    <span className="text-slate-600 block">Total Spend (Nov 2026)</span>
                    <strong className="text-xl font-black text-[#0e0f89]">₹1,91,220</strong>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200">
                    <span className="text-slate-600 block">GST ITC Claimed</span>
                    <strong className="text-xl font-black text-emerald-700">₹29,169</strong>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-600 block">Verified Suppliers</span>
                    <strong className="text-xl font-black text-slate-900">6</strong>
                  </div>
                </div>
              </div>
            )}

            {/* 8. BULK ORDERING */}
            {activeSection === "bulk" && (
              <div className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <h2 className="text-base sm:text-lg font-black text-slate-900">
                    Bulk Ordering Preferences
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Set default MOQ, RFQ auto-matching, and Trade Assurance escrow settings.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                  <strong className="text-slate-900 block">Default Trade Assurance Protection: Enabled</strong>
                  <span className="text-slate-500 block">
                    All bulk orders above ₹10,000 automatically use 1PLACEE Escrow &amp; On-Time Dispatch Guarantee.
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <BusinessFooter />
    </div>
  );
}

