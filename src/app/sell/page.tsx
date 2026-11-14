"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { BusinessFooter } from "@/components/BusinessFooter";
import {
  Store,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Package,
  Layers,
  Upload,
  BarChart3,
  Globe,
  Building2,
  DollarSign,
} from "lucide-react";

export default function SellOn1PlaceePage() {
  const [businessGstin] = useState("33AABCU9603R1ZM");
  const [legalName] = useState("VERTEX CLOUD SOLUTIONS PRIVATE LIMITED");
  const [productTitle, setProductTitle] = useState("");
  const [category, setCategory] = useState("Office Electronics");
  const [hsnCode, setHsnCode] = useState("8471");
  const [gstRate, setGstRate] = useState("18");

  // Multi-Channel Publish toggles
  const [publishB2C, setPublishB2C] = useState(true);
  const [publishB2B, setPublishB2B] = useState(true);

  // Pricing
  const [b2cRetailPrice, setB2cRetailPrice] = useState("2499");
  const [b2bMoq, setB2bMoq] = useState("25");
  const [slab1Price, setSlab1Price] = useState("2100");
  const [slab2Price, setSlab2Price] = useState("1850");
  const [slab3Price, setSlab3Price] = useState("1600");

  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      <BusinessNavbar />

      <main className="flex-1 max-w-[1400px] mx-auto w-full px-4 py-8">
        {/* Unified Seller Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                <Store className="w-3.5 h-3.5" />
                <span>Unified Seller Portal</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                Publish & Sell Across Retail Consumers (B2C) & Wholesale Bulk (B2B)
              </h1>
              <p className="text-slate-300 text-sm mt-2 max-w-2xl">
                Your business GST is verified. You don't need a separate merchant account: list your products once and set retail prices for consumers plus wholesale quantity slabs for verified business buyers.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shrink-0 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[11px] text-emerald-300 font-bold block uppercase tracking-wider">
                  One-Click Verified Merchant
                </span>
                <span className="text-sm font-extrabold text-white block">
                  {legalName.slice(0, 24)}...
                </span>
                <span className="text-xs text-amber-300 font-mono font-bold">
                  GSTIN: {businessGstin}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center max-w-lg mx-auto space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">
                Product Published Successfully!
              </h2>
              <p className="text-sm text-slate-600">
                Your product has been published simultaneously to both the <strong>1PLACEE B2C Consumer Store</strong> and the <strong>B2B Wholesale Hub</strong>.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <Link
                  href="/b2b"
                  className="px-5 py-2.5 rounded-xl bg-[#1862c6] text-white font-bold text-xs hover:bg-blue-700 transition"
                >
                  View on B2B Hub
                </Link>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition"
                >
                  Publish Another Product
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-8"
            >
              {/* Section 1: Basic Product Information */}
              <div>
                <h2 className="text-base font-black text-slate-900 border-b border-slate-200 pb-2 mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-blue-600" />
                  <span>1. General Product Specifications</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Product Title / Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ergonomic Standing Desk Converter with Dual Monitor Arm"
                      value={productTitle}
                      onChange={(e) => setProductTitle(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Product Category *
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    >
                      <option value="Office Electronics">Office Electronics</option>
                      <option value="Commercial Furniture">Commercial Furniture</option>
                      <option value="Industrial Tools">Industrial Tools</option>
                      <option value="Packaging & Logistics">Packaging & Logistics</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      HSN Code (GST Classification) *
                    </label>
                    <input
                      type="text"
                      required
                      value={hsnCode}
                      onChange={(e) => setHsnCode(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Applicable GST Tax Rate (%) *
                    </label>
                    <select
                      value={gstRate}
                      onChange={(e) => setGstRate(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    >
                      <option value="5">5% (Essential Goods)</option>
                      <option value="12">12% (Standard Low)</option>
                      <option value="18">18% (Standard Commercial)</option>
                      <option value="28">28% (Luxury / Specific)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Upload Product Images
                    </label>
                    <div className="border border-dashed border-slate-300 rounded-lg p-2 text-center bg-slate-50 hover:bg-slate-100 cursor-pointer flex items-center justify-center gap-2">
                      <Upload className="w-4 h-4 text-slate-500" />
                      <span className="text-xs text-slate-600 font-bold">Upload Photos (PNG/JPG)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Distribution Channels (B2C & B2B) */}
              <div>
                <h2 className="text-base font-black text-slate-900 border-b border-slate-200 pb-2 mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span>2. Sales Channels & Dual-Pricing Configuration</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* B2C Retail Box */}
                  <div className={`p-5 rounded-2xl border-2 transition-all ${publishB2C ? "border-blue-500 bg-blue-50/30" : "border-slate-200 bg-slate-50"}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-sm font-black text-slate-900 block">
                          B2C Retail Channel (1PLACEE Public Marketplace)
                        </span>
                        <span className="text-xs text-slate-500">Sell single units to individual consumers & offices</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={publishB2C}
                        onChange={(e) => setPublishB2C(e.target.checked)}
                        className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
                      />
                    </div>

                    {publishB2C && (
                      <div className="space-y-3 pt-2">
                        <div>
                          <label className="text-xs font-bold text-slate-700 block mb-1">
                            Single Unit Retail Price (₹)
                          </label>
                          <input
                            type="number"
                            value={b2cRetailPrice}
                            onChange={(e) => setB2cRetailPrice(e.target.value)}
                            className="w-full px-3 py-2 text-sm font-black rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                          />
                        </div>
                        <span className="text-[11px] text-slate-500 block">
                          Includes automated GST receipt & ITC claim for registered business customers.
                        </span>
                      </div>
                    )}
                  </div>

                  {/* B2B Wholesale Box */}
                  <div className={`p-5 rounded-2xl border-2 transition-all ${publishB2B ? "border-emerald-500 bg-emerald-50/30" : "border-slate-200 bg-slate-50"}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-sm font-black text-slate-900 block">
                          B2B Wholesale Hub (Bulk Volume Slabs)
                        </span>
                        <span className="text-xs text-slate-500">Sell in volume to verified enterprises & merchants</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={publishB2B}
                        onChange={(e) => setPublishB2B(e.target.checked)}
                        className="w-5 h-5 accent-emerald-600 rounded cursor-pointer"
                      />
                    </div>

                    {publishB2B && (
                      <div className="space-y-4 pt-2">
                        <div>
                          <label className="text-xs font-bold text-slate-700 block mb-1">
                            Minimum Order Quantity (MOQ)
                          </label>
                          <input
                            type="number"
                            value={b2bMoq}
                            onChange={(e) => setB2bMoq(e.target.value)}
                            className="w-full px-3 py-2 text-xs font-bold rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                          />
                        </div>

                        {/* Quantity Slabs */}
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-700 block">
                            Tiered Volume Pricing Slabs (₹ per unit):
                          </label>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div>
                              <span className="text-[10px] text-slate-500 block font-bold">25 - 50 Units</span>
                              <input
                                type="number"
                                value={slab1Price}
                                onChange={(e) => setSlab1Price(e.target.value)}
                                className="w-full px-2 py-1.5 font-bold rounded border border-slate-300"
                              />
                            </div>
                            <div>
                              <span className="text-[10px] text-slate-500 block font-bold">51 - 200 Units</span>
                              <input
                                type="number"
                                value={slab2Price}
                                onChange={(e) => setSlab2Price(e.target.value)}
                                className="w-full px-2 py-1.5 font-bold rounded border border-slate-300"
                              />
                            </div>
                            <div>
                              <span className="text-[10px] text-slate-500 block font-bold">201+ Units</span>
                              <input
                                type="number"
                                value={slab3Price}
                                onChange={(e) => setSlab3Price(e.target.value)}
                                className="w-full px-2 py-1.5 font-bold rounded border border-slate-300"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex items-center justify-end gap-4">
                <Link
                  href="/"
                  className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 transition"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="px-8 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm shadow-md hover:shadow-lg transition flex items-center gap-2 cursor-pointer active:scale-98"
                >
                  <Store className="w-4 h-4" />
                  <span>Publish Product on 1PLACEE (B2B + B2C)</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      <BusinessFooter />
    </div>
  );
}
