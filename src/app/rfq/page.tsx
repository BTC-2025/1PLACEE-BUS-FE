"use client";

import React, { useState } from "react";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { BusinessFooter } from "@/components/BusinessFooter";
import { AuthGuardGate } from "@/components/AuthGuardGate";
import {
  FileText,
  Sparkles,
  Upload,
  CheckCircle2,
  Plus,
  Trash2,
  Package,
  Building2,
} from "lucide-react";

export default function RFQPage() {
  const [rfqMode, setRfqMode] = useState<"direct" | "product">("direct");
  const [productStep, setProductStep] = useState<"add" | "details">("add");
  const [submitted, setSubmitted] = useState(false);

  // Direct Custom RFQ State (Alibaba + Made-in-China)
  const [productName, setProductName] = useState("Sewing Needles");
  const [category, setCategory] = useState("Apparel & Accessories > Sewing Supplies > Sewing Needles");
  const [purchaseQty, setPurchaseQty] = useState("10000");
  const [unit, setUnit] = useState("Piece(s)");
  const [tradeTerms, setTradeTerms] = useState("FOB");
  const [targetPrice, setTargetPrice] = useState("7.50");
  const [maxBudget, setMaxBudget] = useState("₹50,000 - ₹1,00,000");
  const [details, setDetails] = useState(
    "I'm looking for Sewing Needles.\nProduct specifications:\n• Material: Stainless Steel\n• Type: Hand Sewing\n• Packaging: 25pcs/bag, custom logo"
  );
  const [shippingMethod, setShippingMethod] = useState("Sea freight");
  const [destPort, setDestPort] = useState("Chennai Port");
  const [leadDays, setLeadDays] = useState("15");
  const [paymentTerms, setPaymentTerms] = useState("T/T");
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  // Amazon Business Product Quote State
  const [addMethod, setAddMethod] = useState("ASIN or ISBN");
  const [itemInput, setItemInput] = useState("");
  const [itemQtyInput, setItemQtyInput] = useState("50");
  const [quoteItems, setQuoteItems] = useState([
    {
      id: "philips-na231",
      title:
        "PHILIPS Air Fryer NA231/00, touch panel, 6.2L, Extra Large, 100% Food Safe | uses up to 90% less fat, 1700W",
      qty: 50,
      targetPrice: "5507.63",
      inclGst: "6499.00",
      priceRange: "+/- 2%",
      image: "/categories/b2b-products/presser-foot-set.png",
    },
  ]);
  const [expectedDate, setExpectedDate] = useState("2026-12-07");
  const [deliverDate, setDeliverDate] = useState("2026-12-10");
  const [zipCode, setZipCode] = useState("600032");
  const [shareBusinessName, setShareBusinessName] = useState(true);

  const handleSubmitRfq = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans text-slate-800">
      <BusinessNavbar />

      <AuthGuardGate
        title="Request for Quotation (RFQ)"
        description="Please sign in to submit custom RFQs and receive quotes from verified suppliers."
      >
      {/* Top Hero Banner (Alibaba RFQ Style - Image 4) */}
      <section
        style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
        className="border-b border-[#0a0b6e] shadow-md"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-black text-[11px] px-3 py-0.5 rounded-full uppercase">
              <FileText className="w-3.5 h-3.5" />
              <span>Request for Quotation (RFQ)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Get quotes for your custom request
            </h1>
            <p className="text-xs sm:text-sm text-blue-100">
              Accurate supplier matching, fast price comparison &amp; Trade Assurance protection.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              "Design customization",
              "Logo customization",
              "Bundling customization",
              "Packaging customization",
            ].map((c) => (
              <div
                key={c}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  borderColor: "rgba(255, 255, 255, 0.25)",
                }}
                className="px-3 py-2.5 rounded-xl border text-xs font-bold text-white text-center"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-6 py-6 space-y-6">
        {/* Mode Switcher: Direct Custom RFQ vs Product Quote Request */}
        <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-2xs flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-black text-slate-700 px-2">
            Choose RFQ Type:
          </span>
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              type="button"
              onClick={() => {
                setRfqMode("direct");
                setSubmitted(false);
              }}
              style={
                rfqMode === "direct"
                  ? { backgroundColor: "#0e0f89", color: "#ffffff" }
                  : { backgroundColor: "transparent", color: "#64748b" }
              }
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-black cursor-pointer transition"
            >
              <Building2 className="w-4 h-4" />
              <span>Direct Custom RFQ (No Product Selected)</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setRfqMode("product");
                setSubmitted(false);
              }}
              style={
                rfqMode === "product"
                  ? { backgroundColor: "#0e0f89", color: "#ffffff" }
                  : { backgroundColor: "transparent", color: "#64748b" }
              }
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-black cursor-pointer transition"
            >
              <Package className="w-4 h-4" />
              <span>Product Quote Request (Bulk Items)</span>
            </button>
          </div>
        </div>

        {submitted ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-10 text-center max-w-xl mx-auto space-y-4 shadow-md">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
            <h2 className="text-2xl font-black text-slate-900">
              RFQ Submitted Successfully!
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Verified suppliers on 1PLACEE Business will review your requirements and send competitive quotes within 4 hours.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
              className="px-6 py-2.5 rounded-full text-xs font-black cursor-pointer"
            >
              Submit Another RFQ
            </button>
          </div>
        ) : rfqMode === "direct" ? (
          /* ================================================================= */
          /* MODE 1: DIRECT CUSTOM RFQ (Made-in-China + Alibaba - Images 3,4,5)*/
          /* ================================================================= */
          <form
            onSubmit={handleSubmitRfq}
            style={{ display: "flex", flexDirection: "row", gap: "24px", alignItems: "flex-start", flexWrap: "wrap" }}
          >
            <div style={{ flex: "1 1 650px", minWidth: 0 }} className="space-y-6">
              {/* Basic Product Information */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-5">
                <h2 className="text-base font-black text-slate-900 border-b border-slate-100 pb-3">
                  Basic Product Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Product Name *</label>
                    <input
                      type="text"
                      required
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Category *</label>
                    <input
                      type="text"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Purchase Quantity *</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        required
                        value={purchaseQty}
                        onChange={(e) => setPurchaseQty(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold"
                      />
                      <select
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                        className="px-3 py-2 rounded-xl border border-slate-300 bg-white font-semibold"
                      >
                        <option>Piece(s)</option>
                        <option>Box(es)</option>
                        <option>Kg</option>
                        <option>Sets</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Trade Terms *</label>
                    <select
                      value={tradeTerms}
                      onChange={(e) => setTradeTerms(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white font-semibold"
                    >
                      <option>FOB</option>
                      <option>CIF</option>
                      <option>EXW</option>
                      <option>DDP</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Target Unit Price (₹)</label>
                    <input
                      type="text"
                      value={targetPrice}
                      onChange={(e) => setTargetPrice(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Max Budget *</label>
                    <select
                      value={maxBudget}
                      onChange={(e) => setMaxBudget(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white font-semibold"
                    >
                      <option>₹10,000 - ₹50,000</option>
                      <option>₹50,000 - ₹1,00,000</option>
                      <option>₹1,00,000 - ₹5,00,000</option>
                      <option>₹5,00,000+</option>
                    </select>
                  </div>
                </div>

                {/* Detailed Requirements + AI Button + File Upload */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <label className="font-bold text-slate-700">Detailed requirements *</label>
                    <button
                      type="button"
                      onClick={() =>
                        setDetails((prev) => `${prev}\n• Quality Standard: ISO 9001:2015 Certified`)
                      }
                      className="px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[#0e0f89] font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Write with AI</span>
                    </button>
                  </div>
                  <textarea
                    rows={4}
                    required
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 leading-relaxed"
                  />
                  <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100 cursor-pointer font-bold text-slate-700">
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) =>
                        setUploadedFileName(e.target.files?.[0]?.name || null)
                      }
                    />
                    <Upload className="w-4 h-4 text-[#0e0f89]" />
                    <span>
                      {uploadedFileName
                        ? `Attached: ${uploadedFileName}`
                        : "Upload product images or files (jpg, png, pdf < 10MB)"}
                    </span>
                  </label>
                </div>
              </div>

              {/* Shipping & Payment (Made-in-China Image 3) */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
                <h2 className="text-base font-black text-slate-900 border-b border-slate-100 pb-3">
                  Shipping and Payment
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Shipping Method *</label>
                    <select
                      value={shippingMethod}
                      onChange={(e) => setShippingMethod(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white font-semibold"
                    >
                      <option>Sea freight</option>
                      <option>Air freight</option>
                      <option>Express Courier</option>
                      <option>Road Transport</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Destination Port / City</label>
                    <input
                      type="text"
                      value={destPort}
                      onChange={(e) => setDestPort(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Lead Time (Days)</label>
                    <input
                      type="number"
                      value={leadDays}
                      onChange={(e) => setLeadDays(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Payment Terms *</label>
                    <select
                      value={paymentTerms}
                      onChange={(e) => setPaymentTerms(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white font-semibold"
                    >
                      <option>T/T</option>
                      <option>L/C</option>
                      <option>1PLACEE Trade Assurance</option>
                      <option>Net-30 GST Invoice</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                    className="px-8 py-3 rounded-full text-xs sm:text-sm font-black shadow-md hover:opacity-95 cursor-pointer"
                  >
                    Post request
                  </button>
                </div>
              </div>
            </div>

            {/* Right Sidebar: How to use RFQ (Image 5) */}
            <aside
              style={{ width: "300px", minWidth: "280px" }}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-4 shrink-0"
            >
              <h3 className="text-sm font-black text-slate-900">How to use RFQ</h3>
              <div className="space-y-4 text-xs">
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-100 font-black flex items-center justify-center shrink-0">
                    1
                  </span>
                  <div>
                    <strong className="text-slate-900 block">Describe your request</strong>
                    <span className="text-slate-500">
                      Write your detailed requirements in this form and post it as an RFQ.
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-100 font-black flex items-center justify-center shrink-0">
                    2
                  </span>
                  <div>
                    <strong className="text-slate-900 block">Get accurate quotes</strong>
                    <span className="text-slate-500">
                      Receive quotations from matching verified suppliers via message or email.
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-100 font-black flex items-center justify-center shrink-0">
                    3
                  </span>
                  <div>
                    <strong className="text-slate-900 block">Compare quotes</strong>
                    <span className="text-slate-500">
                      Communicate with suppliers that meet your exact needs to finalize order details.
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </form>
        ) : (
          /* ================================================================= */
          /* MODE 2: AMAZON BUSINESS PRODUCT QUOTE REQUEST (Images 1 & 2)      */
          /* ================================================================= */
          <form onSubmit={handleSubmitRfq} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-6">
            <div className="flex items-center gap-6 border-b border-slate-200">
              <button
                type="button"
                onClick={() => setProductStep("add")}
                className={`pb-3 text-xs sm:text-sm font-black border-b-2 cursor-pointer ${
                  productStep === "add"
                    ? "border-[#0e0f89] text-[#0e0f89]"
                    : "border-transparent text-slate-500"
                }`}
              >
                1. Add items
              </button>
              <button
                type="button"
                onClick={() => setProductStep("details")}
                className={`pb-3 text-xs sm:text-sm font-black border-b-2 cursor-pointer ${
                  productStep === "details"
                    ? "border-[#0e0f89] text-[#0e0f89]"
                    : "border-transparent text-slate-500"
                }`}
              >
                2. Enter quote details
              </button>
            </div>

            {productStep === "add" ? (
              <div className="space-y-5">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">
                    Add up to 49 different items using product information:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["ASIN or ISBN", "1PLACEE URL", "Keyword", "Supplier and SKU", "Manufacturer part number"].map(
                      (m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setAddMethod(m)}
                          className={`px-3 py-1 rounded-full text-xs font-bold border cursor-pointer ${
                            addMethod === m
                              ? "border-[#0e0f89] bg-blue-50 text-[#0e0f89]"
                              : "border-slate-300 text-slate-600"
                          }`}
                        >
                          {m}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 items-end text-xs">
                  <div className="flex-1 min-w-[240px]">
                    <label className="font-bold text-slate-700 block mb-1">
                      Enter {addMethod}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. PHILIPS Air Fryer NA231/00"
                      value={itemInput}
                      onChange={(e) => setItemInput(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    />
                  </div>
                  <div className="w-28">
                    <label className="font-bold text-slate-700 block mb-1">Quantity</label>
                    <input
                      type="number"
                      value={itemQtyInput}
                      onChange={(e) => setItemQtyInput(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (!itemInput.trim()) return;
                      setQuoteItems([
                        ...quoteItems,
                        {
                          id: `item-${Date.now()}`,
                          title: itemInput.trim(),
                          qty: parseInt(itemQtyInput, 10) || 50,
                          targetPrice: "4500.00",
                          inclGst: "5310.00",
                          priceRange: "+/- 2%",
                          image: "/categories/b2b-products/hand-needles.png",
                        },
                      ]);
                      setItemInput("");
                    }}
                    className="px-4 py-2 rounded-xl border border-slate-300 bg-slate-100 hover:bg-slate-200 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Item</span>
                  </button>
                </div>

                {/* Items Table */}
                <div className="border border-slate-200 rounded-xl overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 border-b border-slate-200 font-bold text-slate-600">
                      <tr>
                        <th className="py-3 px-4">Item</th>
                        <th className="py-3 px-4">Quantity</th>
                        <th className="py-3 px-4">Buy now price</th>
                        <th className="py-3 px-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {quoteItems.map((it) => (
                        <tr key={it.id}>
                          <td className="py-3 px-4 flex items-center gap-3 max-w-md">
                            <img
                              src={it.image}
                              alt={it.title}
                              className="w-14 h-14 rounded-lg object-contain border border-slate-200 p-1 shrink-0"
                            />
                            <span className="font-bold text-slate-900">{it.title}</span>
                          </td>
                          <td className="py-3 px-4 font-black">{it.qty} units</td>
                          <td className="py-3 px-4">
                            <strong className="text-slate-900 block">
                              ₹{it.targetPrice} <span className="text-[10px] font-normal text-slate-500">excl. GST</span>
                            </strong>
                            <span className="text-[11px] text-slate-500">
                              ₹{it.inclGst} incl. GST
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <button
                              type="button"
                              onClick={() => setQuoteItems(quoteItems.filter((x) => x.id !== it.id))}
                              className="text-rose-500 hover:text-rose-700 cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <button
                  type="button"
                  onClick={() => setProductStep("details")}
                  style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                  className="px-6 py-2.5 rounded-full text-xs font-black cursor-pointer"
                >
                  Enter quote details →
                </button>
              </div>
            ) : (
              <div className="space-y-5 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Expected purchase by date</label>
                    <input
                      type="date"
                      value={expectedDate}
                      onChange={(e) => setExpectedDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Deliver by date</label>
                    <input
                      type="date"
                      value={deliverDate}
                      onChange={(e) => setDeliverDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Delivery zip code *</label>
                    <input
                      type="text"
                      required
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono font-bold"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Share business name with suppliers?</label>
                    <div className="flex items-center gap-4 pt-2">
                      <label className="flex items-center gap-1.5 cursor-pointer font-bold">
                        <input
                          type="radio"
                          checked={shareBusinessName}
                          onChange={() => setShareBusinessName(true)}
                          className="accent-[#0e0f89]"
                        />
                        Yes (Recommended)
                      </label>
                      <label className="flex items-center gap-1.5 cursor-pointer font-bold">
                        <input
                          type="radio"
                          checked={!shareBusinessName}
                          onChange={() => setShareBusinessName(false)}
                          className="accent-[#0e0f89]"
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setProductStep("add")}
                    className="px-5 py-2.5 rounded-full border border-slate-300 font-bold cursor-pointer"
                  >
                    ← Back to Add items
                  </button>
                  <button
                    type="submit"
                    style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                    className="px-7 py-2.5 rounded-full font-black cursor-pointer shadow-md"
                  >
                    Request quote
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </main>
      </AuthGuardGate>

      <BusinessFooter />
    </div>
  );
}
