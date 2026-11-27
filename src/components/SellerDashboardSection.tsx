"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Package,
  ShoppingBag,
  MessageSquare,
  ShieldCheck,
  Star,
  Plus,
  ArrowRight,
  BarChart3,
  Clock,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export const SellerDashboardSection: React.FC = () => {
  const [activeRange, setActiveRange] = useState("Last 30 days");
  const [chartMetric, setChartMetric] = useState<"sales" | "units" | "rfqs">("sales");

  const topKpis = [
    { label: "My business", sub: "Today's Global Sales", value: "₹6,978", active: true },
    { label: "Products", sub: "Active", value: "20/20", badge: "Healthy" },
    { label: "Supply Chain", sub: "Active Shipments", value: "3" },
    { label: "Orders", sub: "Open Orders", value: "44", href: "/orders" },
    { label: "Finance", sub: "Proceeds (21/05-Today)", value: "₹16,290" },
    { label: "Customers", sub: "Feedback Rating", value: "4.9/5 ★" },
    { label: "Marketing", sub: "Impressions", value: "28,979" },
  ];

  return (
    <section className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 py-6 space-y-6">
      {/* Welcome & Quick Actions Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-2xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider bg-blue-50 text-[#0e0f89] px-2.5 py-0.5 rounded-full border border-blue-200">
                1PLACEE Business Seller Hub
              </span>
              <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified GST: 33AABCU9603R1ZM
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 mt-1">
              Welcome back, Vinothkumar (VERTEX CLOUD SOLUTIONS PVT LTD)
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/sell"
              style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
              className="px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-sm hover:opacity-95 transition"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add products</span>
            </Link>
            <Link
              href="/orders"
              className="px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-xs font-bold text-slate-800 transition"
            >
              Manage orders
            </Link>
            <Link
              href="/rfq"
              className="px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-xs font-bold text-slate-800 transition"
            >
              RFQ Market
            </Link>
            <Link
              href="/messages"
              className="px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-xs font-bold text-slate-800 transition"
            >
              Buyer Messages
            </Link>
          </div>
        </div>

        {/* Amazon-style 7-Column Top KPI Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 pt-2 border-t border-slate-100">
          {topKpis.map((kpi) => (
            <div
              key={kpi.label}
              className={`p-3 rounded-xl border transition ${
                kpi.active
                  ? "border-[#0e0f89] bg-blue-50/40"
                  : "border-slate-200 bg-slate-50/50 hover:bg-white"
              }`}
            >
              <span className="text-[11px] font-bold text-[#0e0f89] block">
                {kpi.label}
              </span>
              <span className="text-[10px] text-slate-500 block">{kpi.sub}</span>
              <strong className="text-sm sm:text-base font-black text-slate-900 block mt-1">
                {kpi.value}
              </strong>
            </div>
          ))}
        </div>
      </div>

      {/* Key Metrics Grid (Amazon Seller Central Image 2) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-1">
          <span className="text-xs font-bold text-slate-500">Sales (Today)</span>
          <div className="text-xl font-black text-slate-900">₹6,978.00</div>
          <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +14.2% vs yesterday
          </span>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-1">
          <span className="text-xs font-bold text-slate-500">Open Orders</span>
          <div className="text-xl font-black text-slate-900">44</div>
          <span className="text-[11px] text-slate-500 block">
            B2B: 12 • B2C FBA: 32
          </span>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-1">
          <span className="text-xs font-bold text-slate-500">Buyer Messages</span>
          <div className="text-xl font-black text-slate-900">2</div>
          <Link href="/messages" className="text-[11px] text-[#0e0f89] font-bold hover:underline block">
            Reply within 4h →
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-1">
          <span className="text-xs font-bold text-slate-500">Total Balance</span>
          <div className="text-xl font-black text-slate-900">₹1,04,600</div>
          <span className="text-[11px] text-slate-500 block">Upcoming Payout</span>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-1">
          <span className="text-xs font-bold text-slate-500">Account Health</span>
          <div className="pt-1">
            <span className="bg-emerald-600 text-white text-xs font-black px-2.5 py-1 rounded-full">
              Healthy
            </span>
          </div>
          <span className="text-[11px] text-slate-500 block pt-1">0 policy violations</span>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-1">
          <span className="text-xs font-bold text-slate-500">Seller Feedback</span>
          <div className="text-xl font-black text-slate-900 flex items-center gap-1">
            <span>5.00</span>
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          </div>
          <span className="text-[11px] text-slate-500 block">Past Year (213)</span>
        </div>
      </div>

      {/* Sales Analytics + Alibaba B2B Performance Funnel (Properly Proportioned Grid) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: "24px",
          alignItems: "stretch",
        }}
      >
        {/* Left: Amazon Sales & Units Ordered */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#0e0f89]" />
                <h3 className="text-base font-black text-slate-900">
                  Sales &amp; Order Analytics
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-[11px] font-bold">
                  {(
                    [
                      { id: "sales", label: "Sales (₹)" },
                      { id: "units", label: "Units" },
                      { id: "rfqs", label: "B2B RFQs" },
                    ] as const
                  ).map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setChartMetric(m.id)}
                      style={
                        chartMetric === m.id
                          ? { backgroundColor: "#0e0f89", color: "#ffffff" }
                          : { color: "#475569" }
                      }
                      className="px-2.5 py-1 rounded-md cursor-pointer transition"
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
                <select
                  value={activeRange}
                  onChange={(e) => setActiveRange(e.target.value)}
                  className="px-2.5 py-1 rounded-lg border border-slate-300 text-xs font-bold bg-slate-50"
                >
                  <option>Last 30 days</option>
                  <option>Last 7 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              <div>
                <span className="text-slate-500 block">Ordered product sales</span>
                <strong className="text-base sm:text-lg font-black text-slate-900">
                  ₹3,40,009.28
                </strong>
                <span className="text-[10px] text-emerald-600 font-bold block">+18.4% MoM</span>
              </div>
              <div>
                <span className="text-slate-500 block">Units ordered</span>
                <strong className="text-base sm:text-lg font-black text-slate-900">714</strong>
                <span className="text-[10px] text-emerald-600 font-bold block">B2B: 520 • B2C: 194</span>
              </div>
              <div>
                <span className="text-slate-500 block">Conversion rate</span>
                <strong className="text-base sm:text-lg font-black text-emerald-700">1.5%</strong>
                <span className="text-[10px] text-slate-500 block">Avg. order: ₹476</span>
              </div>
            </div>

            {/* Rich SVG Area & Comparison Chart with Axes */}
            <div className="bg-slate-50/60 rounded-xl border border-slate-100 p-4 space-y-2">
              <div className="flex gap-3 items-stretch h-44">
                {/* Y-Axis Labels */}
                <div className="flex flex-col justify-between text-[10px] font-bold text-slate-400 py-1 shrink-0">
                  <span>{chartMetric === "sales" ? "₹30K" : chartMetric === "units" ? "100" : "25"}</span>
                  <span>{chartMetric === "sales" ? "₹20K" : chartMetric === "units" ? "65" : "15"}</span>
                  <span>{chartMetric === "sales" ? "₹10K" : chartMetric === "units" ? "30" : "5"}</span>
                  <span>0</span>
                </div>

                {/* SVG Plot */}
                <div className="flex-1 relative">
                  <svg viewBox="0 0 400 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="salesAreaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0e0f89" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#0e0f89" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    <line x1="0" y1="25" x2="400" y2="25" stroke="#e2e8f0" strokeDasharray="3 3" />
                    <line x1="0" y1="50" x2="400" y2="50" stroke="#e2e8f0" strokeDasharray="3 3" />
                    <line x1="0" y1="75" x2="400" y2="75" stroke="#e2e8f0" strokeDasharray="3 3" />

                    {/* Area Fill */}
                    <polygon
                      fill="url(#salesAreaGrad)"
                      points={
                        chartMetric === "sales"
                          ? "0,100 0,72 45,58 90,64 135,36 180,46 225,26 270,38 315,20 360,30 400,14 400,100"
                          : chartMetric === "units"
                          ? "0,100 0,65 45,48 90,54 135,30 180,40 225,22 270,34 315,18 360,24 400,12 400,100"
                          : "0,100 0,80 45,70 90,55 135,60 180,42 225,48 270,30 315,35 360,22 400,18 400,100"
                      }
                    />
                    {/* Main Curve */}
                    <polyline
                      fill="none"
                      stroke="#0e0f89"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points={
                        chartMetric === "sales"
                          ? "0,72 45,58 90,64 135,36 180,46 225,26 270,38 315,20 360,30 400,14"
                          : chartMetric === "units"
                          ? "0,65 45,48 90,54 135,30 180,40 225,22 270,34 315,18 360,24 400,12"
                          : "0,80 45,70 90,55 135,60 180,42 225,48 270,30 315,35 360,22 400,18"
                      }
                    />
                    {/* Comparison Dashed Curve */}
                    <polyline
                      fill="none"
                      stroke="#94a3b8"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      points="0,82 45,72 90,76 135,58 180,62 225,50 270,54 315,42 360,48 400,38"
                    />
                  </svg>
                </div>
              </div>

              {/* X-Axis Dates & Legend */}
              <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 pl-8 pt-1 border-t border-slate-200/70">
                <span>Nov 01</span>
                <span>Nov 08</span>
                <span>Nov 15</span>
                <span>Nov 22</span>
                <span>Nov 27</span>
              </div>
              <div className="flex items-center gap-5 text-[11px] font-semibold text-slate-600 pl-8 pt-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 bg-[#0e0f89] inline-block" />
                  Current Period
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 border-b border-dashed border-slate-400 inline-block" />
                  Previous Period
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Alibaba B2B Performance Funnel & Rewarded Tasks */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#0e0f89]" />
                <span>B2B Performance Funnel</span>
              </h3>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Gold Supplier
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 block">Unique Visitors</span>
                <strong className="text-lg font-black text-slate-900">184</strong>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 block">Inquiries</span>
                <strong className="text-lg font-black text-slate-900">12</strong>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 block">Response Time</span>
                <strong className="text-lg font-black text-emerald-700">≤2.5h</strong>
              </div>
            </div>

            {/* Rewarded Tasks */}
            <div className="space-y-2.5 pt-2 border-t border-slate-100">
              <span className="text-xs font-black text-slate-800 block">
                Rewarded Tasks (Boost Traffic)
              </span>
              <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center justify-between gap-2 text-xs">
                <span className="font-semibold text-slate-700">
                  Post more Potential Products (133/90)
                </span>
                <Link
                  href="/sell"
                  style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                  className="px-3 py-1.5 rounded-lg font-black text-[11px] shrink-0"
                >
                  Act now
                </Link>
              </div>
              <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center justify-between gap-2 text-xs">
                <span className="font-semibold text-slate-700">
                  Reply to 2 unread B2B inquiries
                </span>
                <Link
                  href="/messages"
                  style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                  className="px-3 py-1.5 rounded-lg font-black text-[11px] shrink-0"
                >
                  Reply now
                </Link>
              </div>
            </div>
          </div>

          {/* Top Performing Product Mini Summary */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Top Performing SKU
              </span>
              <strong className="text-slate-800">VertexPro Standing Desk (VP-ESD)</strong>
            </div>
            <Link href="/orders" className="font-bold text-[#0e0f89] hover:underline">
              View All →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

