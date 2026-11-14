"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { BusinessFooter } from "@/components/BusinessFooter";
import {
  Boxes,
  Layers,
  Send,
  MessageSquare,
  Users,
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
  ArrowRight,
  TrendingDown,
  Building,
} from "lucide-react";

interface WholesaleProduct {
  id: string;
  name: string;
  moq: number; // Minimum Order Quantity
  unit: string;
  supplier: string;
  verifiedYears: number;
  rating: number;
  slabs: { minQty: number; maxQty: number | string; pricePerUnit: number }[];
  image: string;
  leadTime: string;
}

const wholesaleCatalog: WholesaleProduct[] = [
  {
    id: "wh-1",
    name: "Industrial Ergonomic Executive Chairs (Heavy Duty Gas Lift)",
    moq: 20,
    unit: "Pieces",
    supplier: "Apex Seating Solutions Pvt Ltd",
    verifiedYears: 7,
    rating: 4.9,
    leadTime: "3-5 Days",
    image: "https://images.unsplash.com/photo-1580481077195-c328a37db729?w=500&auto=format&fit=crop&q=60",
    slabs: [
      { minQty: 20, maxQty: 50, pricePerUnit: 4800 },
      { minQty: 51, maxQty: 200, pricePerUnit: 4200 },
      { minQty: 201, maxQty: "500+", pricePerUnit: 3650 },
    ],
  },
  {
    id: "wh-2",
    name: "Cat6 UTP Solid Copper LAN Cable (305-meter drum box)",
    moq: 10,
    unit: "Boxes",
    supplier: "D-Link Authorized Commercial Distributor",
    verifiedYears: 12,
    rating: 4.8,
    leadTime: "2 Days",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=60",
    slabs: [
      { minQty: 10, maxQty: 25, pricePerUnit: 6200 },
      { minQty: 26, maxQty: 100, pricePerUnit: 5400 },
      { minQty: 101, maxQty: "300+", pricePerUnit: 4850 },
    ],
  },
  {
    id: "wh-3",
    name: "Custom Corporate Branded Vacuum Insulated Flasks 750ml",
    moq: 100,
    unit: "Pieces",
    supplier: "Titan Merchandise & Gifts India",
    verifiedYears: 5,
    rating: 4.7,
    leadTime: "7-10 Days",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60",
    slabs: [
      { minQty: 100, maxQty: 300, pricePerUnit: 420 },
      { minQty: 301, maxQty: 1000, pricePerUnit: 340 },
      { minQty: 1001, maxQty: "5000+", pricePerUnit: 260 },
    ],
  },
  {
    id: "wh-4",
    name: "Commercial LED Ceiling Panel Light 36W (2x2 ft)",
    moq: 50,
    unit: "Units",
    supplier: "Havells Commercial Lighting Partner",
    verifiedYears: 9,
    rating: 4.9,
    leadTime: "3-4 Days",
    image: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=500&auto=format&fit=crop&q=60",
    slabs: [
      { minQty: 50, maxQty: 150, pricePerUnit: 850 },
      { minQty: 151, maxQty: 500, pricePerUnit: 740 },
      { minQty: 501, maxQty: "2000+", pricePerUnit: 630 },
    ],
  },
];

export default function B2BWholesaleHubPage() {
  const [selectedProduct, setSelectedProduct] = useState<WholesaleProduct>(wholesaleCatalog[0]);
  const [orderQuantity, setOrderQuantity] = useState<number>(50);
  const [activeTab, setActiveTab] = useState<"catalog" | "rfq" | "chat" | "contracts">("catalog");

  // Determine current active price slab
  const currentSlab = selectedProduct.slabs.find((s) => {
    if (typeof s.maxQty === "number") {
      return orderQuantity >= s.minQty && orderQuantity <= s.maxQty;
    }
    return orderQuantity >= s.minQty;
  }) || selectedProduct.slabs[0];

  const effectiveUnitPrice = currentSlab.pricePerUnit;
  const totalOrderValue = effectiveUnitPrice * orderQuantity;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      <BusinessNavbar />

      <main className="flex-1 max-w-[1400px] mx-auto w-full px-4 py-8">
        {/* Hub Header */}
        <div className="bg-[#1862c6] text-white rounded-2xl p-6 sm:p-8 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                <Boxes className="w-3.5 h-3.5" />
                <span>B2B Wholesale Hub</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                Bulk Purchasing with Quantity Price Slabs & Verified Suppliers
              </h1>
              <p className="text-blue-100 text-sm mt-2 max-w-2xl">
                Source directly from OEM manufacturers and certified distributors across India. Unlock wholesale tier discounts, negotiate bulk RFQs, and secure supply contracts.
              </p>
            </div>

            {/* Quick 3 Sub-options Nav */}
            <div className="flex flex-wrap items-center gap-2 bg-white/10 p-2 rounded-xl border border-white/20">
              <Link
                href="/rfq"
                className="px-3.5 py-2 rounded-lg bg-white text-[#1862c6] font-black text-xs hover:bg-blue-50 transition shadow-xs flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>1. RFQ (Custom Quotation)</span>
              </Link>
              <Link
                href="/messages"
                className="px-3.5 py-2 rounded-lg bg-blue-700/80 hover:bg-blue-700 text-white font-bold text-xs transition flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>2. Messages / Chat</span>
              </Link>
              <Link
                href="/contracts"
                className="px-3.5 py-2 rounded-lg bg-blue-700/80 hover:bg-blue-700 text-white font-bold text-xs transition flex items-center gap-1.5"
              >
                <Users className="w-3.5 h-3.5" />
                <span>3. Contacts & Contracts</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 2-Column Catalog & Slab Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Wholesale Catalog */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600" />
                <span>Wholesale Products with Tiered Volume Pricing</span>
              </h2>
              <span className="text-xs text-slate-500 font-bold">
                Showing {wholesaleCatalog.length} Top Sourced Items
              </span>
            </div>

            <div className="space-y-4">
              {wholesaleCatalog.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => {
                    setSelectedProduct(prod);
                    setOrderQuantity(prod.moq);
                  }}
                  className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedProduct.id === prod.id
                      ? "border-[#1862c6] bg-white shadow-lg ring-2 ring-blue-100"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="w-full sm:w-44 h-36 rounded-xl bg-slate-100 overflow-hidden shrink-0">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-amber-100 text-amber-900 text-[10px] font-black px-2 py-0.5 rounded uppercase">
                          MOQ: {prod.moq} {prod.unit}
                        </span>
                        <span className="text-[11px] font-extrabold text-emerald-700 flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" /> {prod.supplier} ({prod.verifiedYears} Yrs)
                        </span>
                      </div>

                      <h3 className="text-sm font-black text-slate-900 leading-snug">
                        {prod.name}
                      </h3>

                      {/* Quantity Price Slabs Grid */}
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        {prod.slabs.map((slab, idx) => (
                          <div
                            key={idx}
                            className={`p-2.5 rounded-lg border text-center transition-all ${
                              currentSlab === slab && selectedProduct.id === prod.id
                                ? "border-emerald-500 bg-emerald-50/80 font-black text-emerald-900 ring-1 ring-emerald-400"
                                : "border-slate-200 bg-slate-50 text-slate-700"
                            }`}
                          >
                            <span className="text-[10px] font-bold text-slate-500 block uppercase">
                              {slab.minQty} - {slab.maxQty} {prod.unit}
                            </span>
                            <span className="text-sm font-black text-slate-900 block mt-0.5">
                              ₹{slab.pricePerUnit.toLocaleString("en-IN")}
                            </span>
                            <span className="text-[9px] text-slate-400 font-medium">per unit</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-3 flex items-center justify-between text-xs">
                        <span className="text-slate-500 font-semibold">
                          Lead Time: <strong className="text-slate-800">{prod.leadTime}</strong>
                        </span>
                        <span className="text-blue-600 font-black flex items-center gap-1">
                          <span>Configure Bulk Order</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Volume Price Calculator & Direct Actions */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl border-2 border-slate-300 shadow-xl p-6 sticky top-20 space-y-5">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-[10px] uppercase font-bold text-blue-600 tracking-wider block">
                  Bulk Order Configuration
                </span>
                <h3 className="text-base font-black text-slate-900 mt-1">
                  {selectedProduct.name}
                </h3>
                <span className="text-xs text-slate-500 font-medium block mt-0.5">
                  Supplier: {selectedProduct.supplier}
                </span>
              </div>

              {/* Order Quantity Input with Slabs Visual */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Enter Order Quantity ({selectedProduct.unit}):</span>
                  <span className="text-amber-700 font-black">Min: {selectedProduct.moq}</span>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={selectedProduct.moq}
                    step={10}
                    value={orderQuantity}
                    onChange={(e) => setOrderQuantity(Math.max(selectedProduct.moq, Number(e.target.value) || selectedProduct.moq))}
                    className="w-full px-3 py-2 text-sm font-black rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                  <span className="text-xs font-bold text-slate-500 shrink-0">
                    {selectedProduct.unit}
                  </span>
                </div>
              </div>

              {/* Price Calculation Card */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2.5 text-xs">
                <div className="flex justify-between items-center text-slate-600">
                  <span>Applicable Slab:</span>
                  <span className="font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {currentSlab.minQty} - {currentSlab.maxQty} {selectedProduct.unit}
                  </span>
                </div>

                <div className="flex justify-between items-center text-slate-600">
                  <span>Wholesale Unit Price:</span>
                  <span className="text-sm font-black text-slate-900">
                    ₹{effectiveUnitPrice.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between items-center text-slate-600">
                  <span>Volume Savings:</span>
                  <span className="font-extrabold text-emerald-600 flex items-center gap-1">
                    <TrendingDown className="w-3.5 h-3.5" />
                    ₹{((selectedProduct.slabs[0].pricePerUnit - effectiveUnitPrice) * orderQuantity).toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="pt-3 border-t border-slate-200 flex justify-between items-baseline">
                  <span className="text-xs font-black uppercase text-slate-700">Estimated Total:</span>
                  <span className="text-xl font-black text-[#1862c6]">
                    ₹{totalOrderValue.toLocaleString("en-IN")}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 block text-right font-medium">
                  *Excluding 18% GST (Claimable under ITC)
                </span>
              </div>

              {/* Direct Actions: Purchase / RFQ / Chat */}
              <div className="space-y-2.5 pt-2">
                <button className="w-full bg-[#1862c6] hover:bg-blue-700 text-white font-black py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98">
                  <Boxes className="w-4 h-4" />
                  <span>Place Bulk Order (PO)</span>
                </button>

                <Link
                  href={`/rfq?prod=${selectedProduct.id}&qty=${orderQuantity}`}
                  className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 text-xs shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Custom RFQ for Higher Volume</span>
                </Link>

                <Link
                  href={`/messages?supplier=${encodeURIComponent(selectedProduct.supplier)}`}
                  className="w-full bg-white hover:bg-slate-50 text-slate-700 font-bold py-2.5 rounded-xl border border-slate-300 transition-all flex items-center justify-center gap-2 text-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                  <span>Chat with Supplier Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BusinessFooter />
    </div>
  );
}
