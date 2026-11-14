"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { BusinessFooter } from "@/components/BusinessFooter";
import {
  FileText,
  Download,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building,
  ArrowRight,
  PackageCheck,
  Receipt,
  Truck,
} from "lucide-react";

interface OrderItem {
  id: string;
  orderNumber: string;
  date: string;
  type: "B2C (GST Tax Invoice)" | "B2B (Bulk Wholesale)";
  productName: string;
  qty: number;
  totalTaxable: number;
  gstAmount: number;
  totalPayable: number;
  status: "Delivered" | "Processing" | "Dispatched";
  invoiceNumber: string;
  hsn: string;
}

const sampleOrders: OrderItem[] = [
  {
    id: "ord-1",
    orderNumber: "1PL-2026-88190",
    date: "12 Nov 2026",
    type: "B2C (GST Tax Invoice)",
    productName: "Dell UltraSharp 27-inch 4K USB-C Hub Monitor (U2723QE)",
    qty: 2,
    totalTaxable: 104000,
    gstAmount: 18720,
    totalPayable: 122720,
    status: "Delivered",
    invoiceNumber: "INV-2026-90412",
    hsn: "84716060",
  },
  {
    id: "ord-2",
    orderNumber: "1PL-2026-74921",
    date: "08 Nov 2026",
    type: "B2B (Bulk Wholesale)",
    productName: "Industrial Ergonomic Executive Chairs (Apex Seating)",
    qty: 50,
    totalTaxable: 210000,
    gstAmount: 37800,
    totalPayable: 247800,
    status: "Dispatched",
    invoiceNumber: "INV-2026-89104",
    hsn: "94031090",
  },
  {
    id: "ord-3",
    orderNumber: "1PL-2026-61029",
    date: "29 Oct 2026",
    type: "B2C (GST Tax Invoice)",
    productName: "Apple MacBook Pro 14 M3 Pro (18GB / 512GB SSD)",
    qty: 1,
    totalTaxable: 169400,
    gstAmount: 30492,
    totalPayable: 199892,
    status: "Delivered",
    invoiceNumber: "INV-2026-82019",
    hsn: "84713010",
  },
];

export default function BusinessOrdersPage() {
  const [filter, setFilter] = useState<string>("all");

  const filteredOrders = sampleOrders.filter((ord) => {
    if (filter === "all") return true;
    if (filter === "b2c") return ord.type.includes("B2C");
    if (filter === "b2b") return ord.type.includes("B2B");
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      <BusinessNavbar />

      <main className="flex-1 max-w-[1400px] mx-auto w-full px-4 py-8">
        {/* Header */}
        <div className="bg-[#1862c6] text-white rounded-2xl p-6 sm:p-8 mb-8 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 font-black text-xs px-3 py-0.5 rounded-full uppercase tracking-wider mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>Business Purchases & GST Invoices</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Order History & Input Tax Credit (ITC) Records
            </h1>
            <p className="text-blue-100 text-xs sm:text-sm mt-1">
              Download GST-compliant tax invoices for your accounts department and audit filings.
            </p>
          </div>

          <div className="flex gap-2">
            <button className="px-4 py-2.5 rounded-xl bg-white text-[#1862c6] font-black text-xs hover:bg-blue-50 transition shadow-xs flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span>Download Monthly ITC Report</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mb-6">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
              filter === "all" ? "bg-[#1862c6] text-white" : "bg-white text-slate-600 border border-slate-200"
            }`}
          >
            All Orders ({sampleOrders.length})
          </button>
          <button
            onClick={() => setFilter("b2c")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
              filter === "b2c" ? "bg-[#1862c6] text-white" : "bg-white text-slate-600 border border-slate-200"
            }`}
          >
            B2C (With GST Invoices)
          </button>
          <button
            onClick={() => setFilter("b2b")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
              filter === "b2b" ? "bg-[#1862c6] text-white" : "bg-white text-slate-600 border border-slate-200"
            }`}
          >
            B2B (Wholesale Bulk)
          </button>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="divide-y divide-slate-100">
            {filteredOrders.map((ord) => (
              <div key={ord.id} className="p-6 hover:bg-slate-50/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-black text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg">
                      {ord.orderNumber}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">{ord.date}</span>
                    <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                      {ord.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{ord.status}</span>
                    </span>
                    <button className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100 transition flex items-center gap-1.5 cursor-pointer">
                      <Download className="w-3.5 h-3.5 text-blue-600" />
                      <span>Tax Invoice (PDF)</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs pt-2 border-t border-slate-100">
                  <div className="md:col-span-2">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">
                      Product Description
                    </span>
                    <span className="font-black text-slate-900 block mt-0.5">{ord.productName}</span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      HSN: {ord.hsn} • Qty: {ord.qty} units
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">
                      Taxable & GST Breakdown
                    </span>
                    <span className="text-slate-700 font-semibold block mt-0.5">
                      Taxable: ₹{ord.totalTaxable.toLocaleString("en-IN")}
                    </span>
                    <span className="text-amber-700 font-bold block">
                      GST (18%): ₹{ord.gstAmount.toLocaleString("en-IN")} (ITC)
                    </span>
                  </div>

                  <div className="text-left md:text-right">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">
                      Total Invoice Value
                    </span>
                    <span className="text-base font-black text-slate-900 block mt-0.5">
                      ₹{ord.totalPayable.toLocaleString("en-IN")}
                    </span>
                    <span className="text-[10px] text-emerald-600 font-bold">Paid via Corporate NEFT/NetBanking</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <BusinessFooter />
    </div>
  );
}
