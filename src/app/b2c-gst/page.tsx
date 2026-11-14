"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { BusinessFooter } from "@/components/BusinessFooter";
import {
  FileCheck2,
  ShieldCheck,
  Download,
  Building2,
  Receipt,
  Percent,
  CheckCircle2,
  ArrowRight,
  Info,
  Sparkles,
} from "lucide-react";

interface GstProduct {
  id: string;
  name: string;
  brand: string;
  hsn: string;
  basePrice: number;
  gstRate: number; // e.g. 18
  image: string;
  category: string;
}

const sampleGstProducts: GstProduct[] = [
  {
    id: "prod-1",
    name: "Dell UltraSharp 27-inch 4K USB-C Hub Monitor (U2723QE)",
    brand: "Dell Technologies",
    hsn: "84716060",
    basePrice: 52000,
    gstRate: 18,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60",
    category: "Office Electronics",
  },
  {
    id: "prod-2",
    name: "Ergonomic Mesh High-Back Executive Office Chair",
    brand: "Steelcase",
    hsn: "94031090",
    basePrice: 18500,
    gstRate: 18,
    image: "https://images.unsplash.com/photo-1580481077195-c328a37db729?w=500&auto=format&fit=crop&q=60",
    category: "Office Furniture",
  },
  {
    id: "prod-3",
    name: "Apple MacBook Pro 14 M3 Pro (18GB / 512GB SSD) Space Black",
    brand: "Apple India",
    hsn: "84713010",
    basePrice: 169400,
    gstRate: 18,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60",
    category: "IT Hardware",
  },
  {
    id: "prod-4",
    name: "Commercial Paper Shredder Cross-Cut Heavy Duty (30L)",
    brand: "Fellowes",
    hsn: "84729090",
    basePrice: 12000,
    gstRate: 18,
    image: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=500&auto=format&fit=crop&q=60",
    category: "Office Equipment",
  },
];

export default function B2CGstPage() {
  const [selectedProduct, setSelectedProduct] = useState<GstProduct>(sampleGstProducts[0]);
  const [gstin, setGstin] = useState("33AABCU9603R1ZM");
  const [businessName, setBusinessName] = useState("VERTEX CLOUD SOLUTIONS PRIVATE LIMITED");
  const [isVerified, setIsVerified] = useState(true);
  const [stateCode, setStateCode] = useState("33 - Tamil Nadu");
  const [sellerState] = useState("33 - Tamil Nadu");

  const isIntraState = stateCode.startsWith("33");
  const gstAmount = (selectedProduct.basePrice * selectedProduct.gstRate) / 100;
  const totalPrice = selectedProduct.basePrice + gstAmount;

  const cgst = isIntraState ? gstAmount / 2 : 0;
  const sgst = isIntraState ? gstAmount / 2 : 0;
  const igst = !isIntraState ? gstAmount : 0;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      <BusinessNavbar />

      <main className="flex-1 max-w-[1400px] mx-auto w-full px-4 py-8">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-[#1862c6] to-blue-900 rounded-2xl p-6 sm:p-8 text-white mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>B2C with Verified GST Invoicing</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                Buy Retail Products with Official GST Tax Invoices
              </h1>
              <p className="text-blue-100 text-sm mt-2 max-w-2xl">
                Purchase single or multiple products for your business, claim 100% Input Tax Credit (ITC) on eligible purchases, and download automated GST-compliant tax invoices instantly.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shrink-0 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] text-blue-200 font-bold block uppercase tracking-wider">
                  Verified Business Profile
                </span>
                <span className="text-sm font-extrabold text-white block">
                  {businessName.slice(0, 24)}...
                </span>
                <span className="text-xs text-amber-300 font-mono font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> GSTIN: {gstin}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Product Selection & Catalog */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <h2 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                <Receipt className="w-5 h-5 text-blue-600" />
                <span>Select Product to Inspect GST Breakdown & ITC</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sampleGstProducts.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => setSelectedProduct(prod)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedProduct.id === prod.id
                        ? "border-[#1862c6] bg-blue-50/50 shadow-md ring-2 ring-blue-100"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs"
                    }`}
                  >
                    <div className="h-32 w-full rounded-lg bg-slate-100 overflow-hidden mb-3">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
                      {prod.brand} • HSN: {prod.hsn}
                    </span>
                    <h3 className="text-xs font-black text-slate-800 line-clamp-2 mt-1">
                      {prod.name}
                    </h3>
                    <div className="mt-3 flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-slate-400 block line-through">
                          MRP: ₹{(prod.basePrice * 1.3).toLocaleString("en-IN")}
                        </span>
                        <span className="text-base font-black text-slate-900">
                          ₹{prod.basePrice.toLocaleString("en-IN")}
                        </span>
                        <span className="text-[10px] text-slate-500 font-semibold block">
                          + {prod.gstRate}% GST (₹{((prod.basePrice * prod.gstRate) / 100).toLocaleString("en-IN")})
                        </span>
                      </div>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        ITC Eligible
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GST Verification & State Rules */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Buyer Business GST Information</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-extrabold text-slate-600 uppercase tracking-wider block mb-1">
                    GSTIN (15 Digits)
                  </label>
                  <input
                    type="text"
                    value={gstin}
                    onChange={(e) => setGstin(e.target.value.toUpperCase())}
                    className="w-full px-3 py-2 text-xs font-mono font-bold uppercase rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-extrabold text-slate-600 uppercase tracking-wider block mb-1">
                    Registered Trade Name
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-3 py-2 text-xs font-bold rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-extrabold text-slate-600 uppercase tracking-wider block mb-1">
                    Buyer Place of Supply (POS)
                  </label>
                  <select
                    value={stateCode}
                    onChange={(e) => setStateCode(e.target.value)}
                    className="w-full px-3 py-2 text-xs font-bold rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  >
                    <option value="33 - Tamil Nadu">33 - Tamil Nadu (Intra-State: CGST + SGST)</option>
                    <option value="29 - Karnataka">29 - Karnataka (Inter-State: IGST)</option>
                    <option value="27 - Maharashtra">27 - Maharashtra (Inter-State: IGST)</option>
                    <option value="07 - Delhi">07 - Delhi (Inter-State: IGST)</option>
                    <option value="36 - Telangana">36 - Telangana (Inter-State: IGST)</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <div className="w-full p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-[11px] font-extrabold text-emerald-800">
                      GST Active & Verified on GSTN Portal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live GST Tax Invoice Preview & ITC Claim Breakdown */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border-2 border-slate-300 shadow-xl overflow-hidden sticky top-20">
              {/* Invoice Top Banner */}
              <div className="bg-[#1862c6] text-white p-5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-amber-300 block">
                    ORIGINAL FOR RECIPIENT
                  </span>
                  <h3 className="text-lg font-black tracking-tight flex items-center gap-2">
                    <FileCheck2 className="w-5 h-5" />
                    <span>TAX INVOICE (GST)</span>
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold block">INV-2026-90412</span>
                  <span className="text-[11px] text-blue-200">Date: 14 Nov 2026</span>
                </div>
              </div>

              {/* Invoice Parties */}
              <div className="p-5 border-b border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                    SELLER (SUPPLIER)
                  </span>
                  <span className="font-extrabold text-slate-900 block">1PLACEE RETAIL COMMERCE LTD</span>
                  <span className="text-slate-500 block">GSTIN: 33AAACR4029L1Z2</span>
                  <span className="text-slate-500 block">POS: {sellerState}</span>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                    BUYER (BILLED TO)
                  </span>
                  <span className="font-extrabold text-slate-900 block truncate">{businessName}</span>
                  <span className="text-blue-700 font-mono font-bold block">GSTIN: {gstin}</span>
                  <span className="text-slate-500 block">State: {stateCode}</span>
                </div>
              </div>

              {/* Itemized Calculation */}
              <div className="p-5 space-y-4 text-xs">
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 text-[10px] font-black uppercase text-slate-500 border-b border-slate-200">
                      <tr>
                        <th className="p-2.5">Item & HSN</th>
                        <th className="p-2.5 text-right">Taxable</th>
                        <th className="p-2.5 text-right">Tax</th>
                        <th className="p-2.5 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-2.5">
                          <span className="font-extrabold text-slate-900 block truncate max-w-[140px]">
                            {selectedProduct.name}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            HSN: {selectedProduct.hsn} (Qty: 1)
                          </span>
                        </td>
                        <td className="p-2.5 text-right font-bold text-slate-800">
                          ₹{selectedProduct.basePrice.toLocaleString("en-IN")}
                        </td>
                        <td className="p-2.5 text-right font-bold text-amber-600">
                          ₹{gstAmount.toLocaleString("en-IN")}
                        </td>
                        <td className="p-2.5 text-right font-black text-slate-900">
                          ₹{totalPrice.toLocaleString("en-IN")}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Tax Split breakdown */}
                <div className="bg-slate-50 rounded-xl p-3.5 space-y-2 border border-slate-200">
                  <div className="flex justify-between text-slate-600 font-semibold">
                    <span>Taxable Value:</span>
                    <span>₹{selectedProduct.basePrice.toLocaleString("en-IN")}</span>
                  </div>

                  {isIntraState ? (
                    <>
                      <div className="flex justify-between text-slate-600">
                        <span>CGST (9.0%):</span>
                        <span className="font-bold text-slate-800">₹{cgst.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>SGST (9.0%):</span>
                        <span className="font-bold text-slate-800">₹{sgst.toLocaleString("en-IN")}</span>
                      </div>
                    </>
                  ) : (
                    <div className="flex justify-between text-slate-600">
                      <span>IGST (18.0%):</span>
                      <span className="font-bold text-slate-800">₹{igst.toLocaleString("en-IN")}</span>
                    </div>
                  )}

                  <div className="pt-2 border-t border-slate-200 flex justify-between text-sm font-black text-slate-900">
                    <span>Total Amount Payable:</span>
                    <span className="text-[#1862c6]">₹{totalPrice.toLocaleString("en-IN")}</span>
                  </div>
                </div>

                {/* Input Tax Credit (ITC) Callout */}
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                      <Percent className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-black text-emerald-900 block">
                        Input Tax Credit (ITC) Available: ₹{gstAmount.toLocaleString("en-IN")}
                      </span>
                      <p className="text-[11px] text-emerald-800 mt-0.5 leading-snug">
                        Your business can offset this full ₹{gstAmount.toLocaleString("en-IN")} against your output GST liability on GSTR-3B filing. Net effective cost: <strong>₹{selectedProduct.basePrice.toLocaleString("en-IN")}</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Checkout & Download Action Buttons */}
                <div className="space-y-2 pt-2">
                  <button className="w-full bg-[#1862c6] hover:bg-blue-700 text-white font-black py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98">
                    <span>Proceed to Purchase with GST Invoice</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button className="w-full bg-white hover:bg-slate-50 text-slate-700 font-bold py-2.5 rounded-xl border border-slate-300 transition-all flex items-center justify-center gap-2 text-xs cursor-pointer">
                    <Download className="w-4 h-4" />
                    <span>Download Sample Proforma GST Invoice (PDF)</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BusinessFooter />
    </div>
  );
}
