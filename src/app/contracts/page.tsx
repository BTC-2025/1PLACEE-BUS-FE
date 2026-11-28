"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { BusinessFooter } from "@/components/BusinessFooter";
import {
  FileSignature,
  Building,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Download,
  Plus,
  Users,
  Clock,
  ArrowRight,
} from "lucide-react";

interface Contract {
  id: string;
  contractNumber: string;
  vendorName: string;
  category: string;
  validTill: string;
  status: "Active" | "Pending Signature" | "Renewed";
  committedValue: number;
  paymentTerms: string;
  sla: string;
}

const vendorContracts: Contract[] = [
  {
    id: "ct-1",
    contractNumber: "AGR-2026-BLR-019",
    vendorName: "Apex Seating Solutions Pvt Ltd",
    category: "Office Furniture Annual Rate Contract",
    validTill: "31 Dec 2027",
    status: "Active",
    committedValue: 1500000,
    paymentTerms: "Net 30 Days after Delivery",
    sla: "99.2% On-Time Delivery Guarantee",
  },
  {
    id: "ct-2",
    contractNumber: "AGR-2026-CHN-042",
    vendorName: "D-Link Authorized Commercial Distributor",
    category: "Structured Cabling & Networking Supply SLA",
    validTill: "15 Oct 2027",
    status: "Active",
    committedValue: 2400000,
    paymentTerms: "100% Against LC / Verified Inspection",
    sla: "Replacement within 48 Hours",
  },
  {
    id: "ct-3",
    contractNumber: "AGR-2026-MUM-088",
    vendorName: "Titan Merchandise & Gifts India",
    category: "Corporate Gifting & Employee Welcome Kits",
    validTill: "30 Jun 2027",
    status: "Pending Signature",
    committedValue: 800000,
    paymentTerms: "50% Advance, 50% on Dispatch",
    sla: "Pre-production Sample within 5 Days",
  },
];

export default function ContactsContractsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      <BusinessNavbar />

      <main className="flex-1 max-w-[1400px] mx-auto w-full px-4 py-8">
        {/* Header */}
        <div
          style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
          className="rounded-2xl p-6 sm:p-8 mb-8 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div>
            <div
              style={{ backgroundColor: "#fbbf24", color: "#0f172a" }}
              className="inline-flex items-center gap-1.5 font-black text-xs px-3 py-0.5 rounded-full uppercase tracking-wider mb-2"
            >
              <FileSignature className="w-3.5 h-3.5" />
              <span>Enterprise Procurement</span>
            </div>
            <h1 style={{ color: "#ffffff" }} className="text-2xl sm:text-3xl font-black tracking-tight">
              Vendor Contacts &amp; Long-Term Supply Agreements
            </h1>
            <p style={{ color: "#dbeafe" }} className="text-xs sm:text-sm mt-1 max-w-2xl">
              Lock in wholesale price slabs, establish Net-30/60 corporate credit terms, and manage legally enforceable electronic supply contracts on 1PLACEE.
            </p>
          </div>

          <button
            style={{ backgroundColor: "#fbbf24", color: "#0f172a" }}
            className="px-5 py-3 rounded-xl font-black text-xs shadow-md transition flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Draft New Vendor Agreement</span>
          </button>
        </div>

        {/* Contracts Grid */}
        <div className="space-y-4">
          {vendorContracts.map((ct) => (
            <div
              key={ct.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-black text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                      {ct.contractNumber}
                    </span>
                    <span
                      className={`text-xs font-extrabold px-3 py-0.5 rounded-full flex items-center gap-1.5 ${
                        ct.status === "Active"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{ct.status}</span>
                    </span>
                  </div>
                  <h3 className="text-base font-black text-slate-900 mt-2">
                    {ct.vendorName}
                  </h3>
                  <span className="text-xs text-slate-500 font-semibold">{ct.category}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 transition flex items-center gap-1.5">
                    <Download className="w-3.5 h-3.5 text-blue-600" />
                    <span>Download Signed PDF</span>
                  </button>
                  <Link
                    href={`/messages?vendor=${encodeURIComponent(ct.vendorName)}`}
                    className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs hover:bg-blue-100 transition"
                  >
                    Contact Vendor
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">
                    Committed Annual Value
                  </span>
                  <span className="text-sm font-black text-slate-900 block mt-0.5">
                    ₹{ct.committedValue.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">
                    Payment Terms
                  </span>
                  <span className="text-xs font-extrabold text-slate-800 block mt-0.5">
                    {ct.paymentTerms}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">
                    Validity & SLA
                  </span>
                  <span className="text-xs font-bold text-slate-800 block mt-0.5">
                    Valid till {ct.validTill} • {ct.sla}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <BusinessFooter />
    </div>
  );
}
