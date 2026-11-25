"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { BusinessFooter } from "@/components/BusinessFooter";
import {
  USER_INTEREST_PRODUCTS,
  B2BRecommendationProduct,
} from "@/data/userInterestAndPopularData";
import {
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
  Send,
  ChevronRight,
  ChevronDown,
  Star,
  Heart,
  Play,
  Image as ImageIcon,
  Award,
  Truck,
  Lock,
  RefreshCw,
  Building2,
  FileCheck2,
  Sparkles,
  X,
} from "lucide-react";

export default function B2BProductDetailPage() {
  const params = useParams();
  const productId = typeof params?.id === "string" ? params.id : "";

  const product: B2BRecommendationProduct =
    USER_INTEREST_PRODUCTS.find((p) => p.id === productId) ||
    USER_INTEREST_PRODUCTS[0];

  const otherRecommendations = USER_INTEREST_PRODUCTS.filter(
    (p) => p.id !== product.id
  ).slice(0, 5);

  const [mediaTab, setMediaTab] = useState<"photos" | "video">("photos");
  const [selectedSize, setSelectedSize] = useState('3-1/2"');
  const [selectedColor, setSelectedColor] = useState("Metallic Silver");
  const [activeTab, setActiveTab] = useState<
    "attributes" | "reviews" | "supplier" | "description"
  >("attributes");
  const [reviewTab, setReviewTab] = useState<"product" | "store">("store");
  const [leadTimeOpen, setLeadTimeOpen] = useState(true);
  const [wishlisted, setWishlisted] = useState(false);

  // Inquiry / Chat Modal
  const [modalMode, setModalMode] = useState<"inquiry" | "chat" | null>(null);
  const [inquiryQty, setInquiryQty] = useState("20000");
  const [inquiryMsg, setInquiryMsg] = useState("");
  const [inquirySent, setInquirySent] = useState(false);

  const sizes = ['3-1/2"', "Standard", "Custom Size"];
  const colors = [
    { name: "Metallic Silver", hex: "#94a3b8" },
    { name: "Matte Black", hex: "#1e293b" },
    { name: "Royal Blue", hex: "#0e0f89" },
  ];

  const supplierName = product.supplierName || "Ningbo MH Industry Co., Ltd.";
  const supplierYears = product.supplierYears || "23 yrs";
  const supplierCountry = product.supplierCountry || "IN";

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans text-slate-800">
      <BusinessNavbar />

      <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-6 py-6 space-y-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/b2b" className="hover:text-[#0e0f89] transition">
            1PLACEE B2B Hub
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span>Based on recent interest &amp; search</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-bold truncate max-w-[320px]">
            {product.title}
          </span>
        </nav>

        {/* =================================================================== */}
        {/* TOP 3-COLUMN ALIBABA-STYLE PRODUCT SHOWCASE                         */}
        {/* =================================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT COLUMN (4 cols): Gallery + Supplier Card */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs">
              <div className="flex gap-3">
                {/* Vertical Thumbnails */}
                <div className="flex flex-col gap-2.5 shrink-0">
                  {[0, 1, 2].map((idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setMediaTab("photos")}
                      className={`w-14 h-14 rounded-xl border p-1 bg-slate-50 flex items-center justify-center overflow-hidden cursor-pointer transition ${
                        idx === 0
                          ? "border-[#0e0f89] ring-2 ring-blue-100"
                          : "border-slate-200 hover:border-slate-400"
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>

                {/* Main Image / Video */}
                <div className="flex-1 h-[320px] rounded-xl bg-[#fdfdfd] border border-slate-100 flex items-center justify-center relative overflow-hidden p-4">
                  <button
                    type="button"
                    onClick={() => setWishlisted(!wishlisted)}
                    aria-label="Save to wishlist"
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center cursor-pointer hover:bg-slate-50 transition z-10"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        wishlisted
                          ? "text-rose-500 fill-rose-500"
                          : "text-slate-500"
                      }`}
                    />
                  </button>

                  {mediaTab === "photos" ? (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center gap-2 text-slate-500">
                      <div className="w-14 h-14 rounded-full bg-[#0e0f89] text-white flex items-center justify-center shadow-md">
                        <Play className="w-6 h-6 ml-0.5" />
                      </div>
                      <span className="text-xs font-bold text-slate-700">
                        Factory Product Showcase Video
                      </span>
                      <span className="text-[11px] text-slate-400">
                        HD 1080p • 0:45
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Photos / Video Toggle */}
              <div className="flex justify-center gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setMediaTab("photos")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 cursor-pointer transition ${
                    mediaTab === "photos"
                      ? "bg-[#0e0f89] text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Photos</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMediaTab("video")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 cursor-pointer transition ${
                    mediaTab === "video"
                      ? "bg-[#0e0f89] text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Video</span>
                </button>
              </div>
            </div>

            {/* Supplier Mini Card */}
            <div className="bg-gradient-to-br from-blue-50/70 to-white rounded-2xl border border-blue-100 p-4 shadow-2xs space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#0e0f89] text-white font-black text-sm flex items-center justify-center shrink-0">
                    {supplierName.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-black text-sm text-slate-900 underline decoration-slate-300">
                        {supplierName}
                      </span>
                      {product.isVerified && (
                        <span className="inline-flex items-center gap-0.5 text-[10px] font-black text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded">
                          <ShieldCheck className="w-3 h-3" />
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {supplierCountry} • {supplierYears} • Manufacturer / Trading Company
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 border border-slate-200/80 rounded-xl px-3 py-2 text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500 shrink-0" />
                <span>#5 leading manufacturer in Garment &amp; Processing Accessories</span>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <div className="bg-white rounded-xl p-2 border border-slate-100">
                  <span className="block text-xs font-black text-slate-900">
                    $500K – $1M
                  </span>
                  <span className="block text-[10px] text-slate-500">
                    Online revenue
                  </span>
                </div>
                <div className="bg-white rounded-xl p-2 border border-slate-100">
                  <span className="block text-xs font-black text-slate-900">
                    ≤3h
                  </span>
                  <span className="block text-[10px] text-slate-500">
                    Response time
                  </span>
                </div>
                <div className="bg-white rounded-xl p-2 border border-slate-100">
                  <span className="block text-xs font-black text-emerald-700">
                    100.0%
                  </span>
                  <span className="block text-[10px] text-slate-500">
                    On-time dispatch
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-200/70 text-[11px]">
                <span className="font-bold text-amber-600 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Supplier vetting
                </span>
                <button
                  type="button"
                  onClick={() => setActiveTab("supplier")}
                  className="font-bold text-[#0e0f89] hover:underline flex items-center gap-0.5 cursor-pointer"
                >
                  <span>Generate report</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN (5 cols): Title, Price, Variants, Customization, Key Attributes */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-5">
            <div>
              <h1 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                {product.title}
              </h1>
              <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-500">
                <span>No product reviews yet</span>
                <span>•</span>
                <span className="text-amber-600 font-bold flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  4.9 (213 Store reviews)
                </span>
                {product.soldCount && (
                  <>
                    <span>•</span>
                    <span className="font-semibold text-slate-700">
                      {product.soldCount}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Price & MOQ */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
              <div className="flex items-baseline gap-2.5">
                <span className="text-2xl sm:text-3xl font-black text-slate-900">
                  {product.price}
                </span>
                {product.priceUnit && (
                  <span className="text-xs font-bold text-slate-500">
                    {product.priceUnit}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-sm text-slate-400 line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-600 font-semibold mt-1">
                Minimum order quantity:{" "}
                <strong className="text-slate-900">{product.moq}</strong>
              </p>
            </div>

            {/* Size Selector */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-black text-slate-800">Size</span>
                <span className="text-[#0e0f89] font-bold underline cursor-pointer">
                  Edit selections
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {sizes.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSelectedSize(sz)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold border cursor-pointer transition ${
                      selectedSize === sz
                        ? "border-[#0e0f89] bg-blue-50 text-[#0e0f89]"
                        : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="space-y-2">
              <span className="text-xs font-black text-slate-800 block">
                Color:{" "}
                <span className="font-semibold text-slate-600">
                  {selectedColor}
                </span>
              </span>
              <div className="flex items-center gap-2.5">
                {colors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setSelectedColor(c.name)}
                    title={c.name}
                    style={{ backgroundColor: c.hex }}
                    className={`w-8 h-8 rounded-lg border-2 cursor-pointer transition ${
                      selectedColor === c.name
                        ? "border-[#0e0f89] ring-2 ring-blue-200 scale-105"
                        : "border-slate-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Customization Options */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-900">
                  Customization options
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                <li>
                  <strong className="text-slate-800">Graphic customization</strong>{" "}
                  <span className="text-slate-400">(Min. order: {product.moq})</span>
                </li>
                <li>
                  <strong className="text-slate-800">Customized packaging</strong>{" "}
                  <span className="text-slate-400">(Min. order: {product.moq})</span>
                </li>
                <li>
                  <strong className="text-slate-800">Customized logo</strong>{" "}
                  <span className="text-slate-400">(Min. order: {product.moq})</span>
                </li>
              </ul>
            </div>

            {/* Supplier's customization ability */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-black text-slate-900">
                  Supplier&apos;s customization ability
                </span>
                <span className="text-[10px] font-black text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                  Verified
                </span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-600">
                <span>• Minor customization</span>
                <span>• Drawing-based customization</span>
                <span>• Sample-based customization</span>
                <span>• Full customization</span>
              </div>
            </div>

            {/* Key Attributes Quick Grid */}
            <div className="pt-3 border-t border-slate-100 space-y-2.5">
              <span className="text-xs font-black text-slate-900 block">
                Key attributes
              </span>
              <div className="grid grid-cols-3 gap-3 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div>
                  <span className="text-[10px] text-slate-400 block">Material</span>
                  <span className="font-bold text-slate-800">Stainless Steel</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">
                    Place of Origin
                  </span>
                  <span className="font-bold text-slate-800">Chennai, India</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">
                    Brand Name
                  </span>
                  <span className="font-bold text-slate-800">
                    {supplierName.split(" ")[0]}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">
                    Model Number
                  </span>
                  <span className="font-bold text-slate-800">6905-0027</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">
                    Application
                  </span>
                  <span className="font-bold text-slate-800">Commercial / Bulk</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Type</span>
                  <span className="font-bold text-slate-800">Wholesale Grade</span>
                </div>
              </div>
            </div>

            {/* At a glance */}
            <div className="pt-3 border-t border-slate-100 space-y-1.5">
              <span className="text-xs font-black text-slate-900 block">
                At a glance
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                • <strong>Industrial Durability:</strong> Corrosion-resistant,
                precision-tested material built for long-lasting commercial use.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                • <strong>Bulk Ready:</strong> Consistent factory QC inspection
                with custom OEM packaging &amp; GST invoice support.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN (3 cols): Sticky Shipping, Order Protection, Send Inquiry, Chat Now */}
          <div className="lg:col-span-3 lg:sticky lg:top-[128px] bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-black text-slate-900 block">
                Shipping
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Shipping fee and delivery date to be negotiated. Chat with
                supplier now for more details.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2.5">
              <div className="flex items-center justify-between text-xs font-black text-slate-900">
                <span>1PLACEE Order Protection</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>

              <div className="flex items-start gap-2 text-[11px] text-slate-600">
                <Lock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 block">
                    Secure payments
                  </strong>
                  <span>
                    Every payment you make on 1PLACEE is secured with strict SSL
                    encryption &amp; escrow.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-[11px] text-slate-600">
                <RefreshCw className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 block">Refund policy</strong>
                  <span>
                    Claim a refund if your order doesn&apos;t ship, is missing,
                    or arrives with product issues.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setModalMode("inquiry");
                  setInquirySent(false);
                }}
                style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                className="w-full py-3 rounded-full font-black text-xs shadow-md hover:opacity-95 transition cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send inquiry</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setModalMode("chat");
                  setInquirySent(false);
                }}
                className="w-full py-3 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-black text-xs transition cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat now</span>
              </button>
            </div>

            <p className="text-[10px] text-slate-400 text-center leading-tight">
              Only orders placed and paid through 1PLACEE can enjoy free
              protection by <strong className="text-amber-600">Trade Assurance</strong>.
            </p>
          </div>
        </section>

        {/* =================================================================== */}
        {/* OTHER RECOMMENDATIONS FOR YOUR BUSINESS                             */}
        {/* =================================================================== */}
        <section className="space-y-4">
          <h2 className="text-base sm:text-lg font-black text-slate-900">
            Other recommendations for your business
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {otherRecommendations.map((item) => (
              <Link
                key={item.id}
                href={`/b2b/product/${item.id}`}
                className="bg-white rounded-2xl border border-slate-200 p-3 hover:shadow-md hover:border-blue-300 transition flex flex-col justify-between group"
              >
                <div>
                  <div className="w-full h-36 rounded-xl bg-slate-50 flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition"
                    />
                  </div>
                  <h3 className="text-xs font-bold text-slate-800 line-clamp-2 mt-2.5 group-hover:text-[#0e0f89]">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-100">
                  <span className="block text-sm font-black text-slate-900">
                    {item.price}
                  </span>
                  <span className="block text-[11px] text-slate-500">
                    MOQ: {item.moq}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* =================================================================== */}
        {/* TABBED DETAILS: ATTRIBUTES | REVIEWS | SUPPLIER | DESCRIPTION       */}
        {/* =================================================================== */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
          <div className="flex items-center gap-6 px-6 border-b border-slate-200 overflow-x-auto no-scrollbar">
            {[
              { id: "attributes", label: "Attributes" },
              { id: "reviews", label: "Reviews" },
              { id: "supplier", label: "Supplier" },
              { id: "description", label: "Description" },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() =>
                  setActiveTab(
                    t.id as "attributes" | "reviews" | "supplier" | "description"
                  )
                }
                className={`py-4 text-xs sm:text-sm font-black border-b-2 transition cursor-pointer whitespace-nowrap ${
                  activeTab === t.id
                    ? "border-[#0e0f89] text-[#0e0f89]"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="p-6 space-y-8">
            {/* TAB 1: ATTRIBUTES */}
            {activeTab === "attributes" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-black text-slate-900 mb-3">
                    Key attributes
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 border border-slate-200 rounded-xl overflow-hidden text-xs">
                    {[
                      ["Application", "Commercial & Household Sewing / Bulk"],
                      ["Material", "Stainless Steel / Industrial Grade"],
                      ["Type", "Wholesale Standard"],
                      ["7 days sample order lead time", "Support"],
                      ["Place of Origin", "Tamil Nadu, India"],
                      ["Brand Name", supplierName.split(" ")[0]],
                      ["Model Number", "6905-0027"],
                    ].map(([k, v], i) => (
                      <div
                        key={i}
                        className="grid grid-cols-2 border-b border-slate-200 last:border-b-0"
                      >
                        <div className="bg-slate-50 px-4 py-2.5 font-semibold text-slate-600 border-r border-slate-200">
                          {k}
                        </div>
                        <div className="px-4 py-2.5 font-bold text-slate-900">
                          {v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-black text-slate-900 mb-3">
                    Packaging and delivery
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 border border-slate-200 rounded-xl overflow-hidden text-xs">
                    <div className="grid grid-cols-2 border-b md:border-b-0 border-slate-200">
                      <div className="bg-slate-50 px-4 py-2.5 font-semibold text-slate-600 border-r border-slate-200">
                        Packaging Details
                      </div>
                      <div className="px-4 py-2.5 font-bold text-slate-900">
                        25pcs/bag, 10bags/bundle, 10bundles/box, 20box/ctn
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="bg-slate-50 px-4 py-2.5 font-semibold text-slate-600 border-r border-slate-200">
                        Port of dispatch
                      </div>
                      <div className="px-4 py-2.5 font-bold text-slate-900">
                        Chennai, Tuticorin, Mumbai
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-black text-slate-900 mb-3">
                    Supply capacity
                  </h3>
                  <div className="border border-slate-200 rounded-xl overflow-hidden text-xs grid grid-cols-3">
                    <div className="bg-slate-50 px-4 py-2.5 font-semibold text-slate-600 border-r border-slate-200">
                      Supply Ability
                    </div>
                    <div className="col-span-2 px-4 py-2.5 font-bold text-slate-900">
                      10,000+ units per Week
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <button
                    type="button"
                    onClick={() => setLeadTimeOpen(!leadTimeOpen)}
                    className="w-full flex items-center justify-between text-sm font-black text-slate-900 cursor-pointer"
                  >
                    <span>Lead time</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        leadTimeOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {leadTimeOpen && (
                    <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <span className="text-slate-500 block">1 – 5,000</span>
                        <strong className="text-slate-900">7 Days</strong>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <span className="text-slate-500 block">5,001 – 20,000</span>
                        <strong className="text-slate-900">15 Days</strong>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <span className="text-slate-500 block">&gt; 20,000</span>
                        <strong className="text-slate-900">To be negotiated</strong>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 2: REVIEWS */}
            {activeTab === "reviews" && (
              <div className="space-y-5">
                <div className="flex items-center gap-6 border-b border-slate-200">
                  <button
                    type="button"
                    onClick={() => setReviewTab("product")}
                    className={`pb-2.5 text-xs font-black border-b-2 cursor-pointer ${
                      reviewTab === "product"
                        ? "border-slate-900 text-slate-900"
                        : "border-transparent text-slate-500"
                    }`}
                  >
                    Product reviews (0)
                  </button>
                  <button
                    type="button"
                    onClick={() => setReviewTab("store")}
                    className={`pb-2.5 text-xs font-black border-b-2 cursor-pointer ${
                      reviewTab === "store"
                        ? "border-slate-900 text-slate-900"
                        : "border-transparent text-slate-500"
                    }`}
                  >
                    Store reviews (213)
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 text-[11px]">
                  {["good service (1)", "happy cooperation (2)", "strong company (7)"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <div className="space-y-4">
                  {[
                    {
                      buyer: "S***a",
                      country: "United States",
                      date: "Oct 8, 2025",
                      text: "The quality of the accessories from this store is top-notch, exactly what I was looking for. The seller is very responsible and handled all my inquiries and needs.",
                    },
                    {
                      buyer: "R***m",
                      country: "India",
                      date: "Oct 12, 2025",
                      text: "Fast dispatch, accurate MOQ packaging, and smooth GST invoicing. Will definitely place repeat bulk orders.",
                    },
                  ].map((rev, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-full bg-[#0e0f89] text-white font-black flex items-center justify-center text-[11px]">
                            {rev.buyer[0]}
                          </span>
                          <span className="font-bold text-slate-900">
                            {rev.buyer}
                          </span>
                          <span className="text-slate-400">• {rev.country}</span>
                          <span className="text-emerald-600 font-bold text-[10px]">
                            ✓ Verified purchase
                          </span>
                        </div>
                        <span className="text-slate-400">{rev.date}</span>
                      </div>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {rev.text}
                      </p>
                      <p className="text-[11px] text-slate-500 bg-white p-2 rounded-lg border border-slate-100">
                        <strong>Supplier&apos;s reply:</strong> Thank you very much
                        for your trust, we will provide even better service!
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: SUPPLIER */}
            {activeTab === "supplier" && (
              <div className="space-y-6">
                <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Building2 className="w-8 h-8 text-[#0e0f89]" />
                      <div>
                        <h3 className="text-sm font-black text-slate-900">
                          {supplierName}
                        </h3>
                        <p className="text-xs text-slate-500">
                          Verified • Manufacturer, Trading Company • {supplierYears}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-blue-700">
                      Verified by TÜV Rheinland
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <span className="text-[11px] text-slate-500 block">
                        Top buyers served
                      </span>
                      <strong className="text-base font-black text-slate-900">
                        8
                      </strong>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <span className="text-[11px] text-slate-500 block">
                        Online revenue
                      </span>
                      <strong className="text-base font-black text-slate-900">
                        $500K – $1M
                      </strong>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <span className="text-[11px] text-slate-500 block">
                        Response time
                      </span>
                      <strong className="text-base font-black text-slate-900">
                        ≤3h
                      </strong>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <span className="text-[11px] text-slate-500 block">
                        On-time dispatch rate
                      </span>
                      <strong className="text-base font-black text-emerald-700">
                        100.0%
                      </strong>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <span className="text-[11px] text-slate-500 block">
                        Floorspace
                      </span>
                      <strong className="text-base font-black text-slate-900">
                        127,602 m²
                      </strong>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <span className="text-[11px] text-slate-500 block">
                        QA/QC inspectors
                      </span>
                      <strong className="text-base font-black text-slate-900">
                        36 (Total staff: 730)
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: DESCRIPTION & CERTIFICATES */}
            {activeTab === "description" && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-black text-slate-900">
                    Product descriptions from the supplier
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {product.title} — manufactured under strict ISO 9001:2015,
                    ISO 14001:2015, and ISO 45001:2018 quality management
                    systems. Suitable for wholesale distribution, retail
                    packaging, and commercial enterprise procurement.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    "ISO 9001:2015 Quality Management",
                    "ISO 14001:2015 Environmental",
                    "ISO 45001:2018 Occupational Safety",
                  ].map((cert) => (
                    <div
                      key={cert}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-3"
                    >
                      <FileCheck2 className="w-6 h-6 text-emerald-600 shrink-0" />
                      <span className="text-xs font-bold text-slate-800">
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* INQUIRY / CHAT MODAL */}
      {modalMode && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 relative">
            <button
              type="button"
              onClick={() => setModalMode(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {inquirySent ? (
              <div className="py-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-black text-slate-900">
                  {modalMode === "inquiry"
                    ? "Inquiry Sent to Supplier!"
                    : "Chat Request Connected!"}
                </h3>
                <p className="text-xs text-slate-600">
                  <strong>{supplierName}</strong> will respond within{" "}
                  <strong>≤3h</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setModalMode(null)}
                  style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                  className="px-6 py-2.5 rounded-full text-xs font-black cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySent(true);
                }}
                className="space-y-4"
              >
                <h3 className="text-base font-black text-slate-900">
                  {modalMode === "inquiry"
                    ? "Send Bulk Inquiry"
                    : `Chat with ${supplierName}`}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-1">
                  Product: {product.title}
                </p>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Estimated Order Quantity
                  </label>
                  <input
                    type="text"
                    value={inquiryQty}
                    onChange={(e) => setInquiryQty(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Message / Customization Requirements
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Enter your target price, packaging, or delivery port..."
                    value={inquiryMsg}
                    onChange={(e) => setInquiryMsg(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300"
                  />
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                  className="w-full py-2.5 rounded-full text-xs font-black cursor-pointer"
                >
                  {modalMode === "inquiry" ? "Send Inquiry Now" : "Start Chat"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <BusinessFooter />
    </div>
  );
}

