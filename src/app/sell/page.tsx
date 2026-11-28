"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { BusinessFooter } from "@/components/BusinessFooter";
import { AuthGuardGate } from "@/components/AuthGuardGate";
import {
  Store,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Package,
  Layers,
  Upload,
  Globe,
  Building2,
  DollarSign,
  Info,
  ChevronRight,
  Plus,
  Trash2,
  Eye,
  FileText,
  Truck,
  Percent,
  SlidersHorizontal,
  BadgeCheck,
  HelpCircle,
  Copy,
  ChevronDown,
  RotateCcw,
  Boxes,
  Zap,
} from "lucide-react";

export default function SellListingPortalPage() {
  // Verified Business Merchant Header Info
  const [merchant] = useState({
    name: "Vinothkumar (VERTEX CLOUD SOLUTIONS PVT LTD)",
    businessEmail: "vinothkumar@vertexcloud.in",
    gstin: "33AABCU9603R1ZM",
    phone: "+91 98401 23456",
    verified: true,
    rating: "4.9 ★",
    supplierType: "Gold Verified Factory / Merchant",
    membershipYear: "5th Year Gold Merchant",
  });

  // Top Channel Switcher: "B2B" (1PLACEE B2B format) vs "B2C" (1PLACEE B2C format)
  const [activeChannel, setActiveChannel] = useState<"B2B" | "B2C">("B2B");

  // Step state for multi-stage workflow
  // B2B Steps: 1. Basic Info & Categories, 2. Product Attributes & Specs, 3. Tiered MOQ Pricing & Variants, 4. Logistics & Lead Times, 5. Customization & Trade Assurance
  // B2C Steps: 1. Product Identity, 2. Description & Bullets, 3. Product Details & Dimensions, 4. Offer & Pricing (1PLACEE vs 1PLACEE-BUS GST), 5. Compliance & Fulfillment
  const [currentStep, setCurrentStep] = useState(1);

  // Common Form States
  const [productTitle, setProductTitle] = useState(
    "Ergonomic Heavy-Duty Multi-Tier Adjustable Workstation / Electric Standing Desk"
  );
  const [category, setCategory] = useState("Commercial Furniture > Office Desks");
  const [productKeywords, setProductKeywords] = useState(
    "standing desk, ergonomic workstation, motorized adjustable table, office furniture"
  );
  const [brandName, setBrandName] = useState("VertexPro");
  const [modelNumber, setModelNumber] = useState("VP-ESD-900");
  const [hsnCode, setHsnCode] = useState("94031000");
  const [gstRate, setGstRate] = useState("18");

  // B2B specific states (1PLACEE B2B format)
  const [b2bGroup, setB2bGroup] = useState("Commercial Workspace Collection");
  const [fabricMaterial, setFabricMaterial] = useState("Industrial Cold-Rolled Carbon Steel + Solid Oak");
  const [finishType, setFinishType] = useState("Anti-Scratch Matte Powder Coating");
  const [needleDetection, setNeedleDetection] = useState("Yes");
  const [placeOfOrigin, setPlaceOfOrigin] = useState("India (Tamil Nadu)");
  const [sampleOrderSupported, setSampleOrderSupported] = useState(true);
  const [sampleLeadTime, setSampleLeadTime] = useState("5 Days");
  const [samplePrice, setSamplePrice] = useState("3200");

  // Tiered Volume Pricing (1PLACEE B2B MOQ Slabs)
  const [moqSlabs, setMoqSlabs] = useState([
    { minQty: "5", maxQty: "49", priceUnit: "2650" },
    { minQty: "50", maxQty: "199", priceUnit: "2250" },
    { minQty: "200+", maxQty: "Bulk", priceUnit: "1900" },
  ]);

  // Lead Times (1PLACEE B2B Logistics)
  const [leadTimes, setLeadTimes] = useState([
    { qtyRange: "1 - 50 Units", leadDays: "7 Days" },
    { qtyRange: "51 - 200 Units", leadDays: "14 Days" },
    { qtyRange: "201+ Units", leadDays: "21 Days (Negotiable)" },
  ]);

  // Customization Services (1PLACEE B2B Format)
  const [customizationOptions, setCustomizationOptions] = useState({
    logo: true,
    logoMoq: "20",
    packaging: true,
    packagingMoq: "50",
    designGraphic: true,
    designMoq: "100",
  });

  // B2C specific states (1PLACEE B2C format)
  const [b2cRetailMrp, setB2cRetailMrp] = useState("4499");
  const [b2c1PlaceePrice, setB2c1PlaceePrice] = useState("3299"); // 1PLACEE Original Price (Retail Consumer)
  // 1PLACEE Business B2C GST-claim price calculation:
  // Consumer pays Rs. 3299. For registered business on 1PLACEE-BUS, ex-tax price = 3299 / 1.18 = 2795.76 (Save 503.24 GST ITC)
  const b2cTaxInclusive = parseFloat(b2c1PlaceePrice) || 3299;
  const gstPercentage = parseFloat(gstRate) || 18;
  const b2cExGstPrice = Math.round((b2cTaxInclusive / (1 + gstPercentage / 100)) * 100) / 100;
  const b2cGstSavings = Math.round((b2cTaxInclusive - b2cExGstPrice) * 100) / 100;

  const [externalProductId, setExternalProductId] = useState("8904321987654");
  const [externalIdType, setExternalIdType] = useState("EAN");
  const [sku, setSku] = useState("VP-ESD-BLK-01");
  const [inventoryStock, setInventoryStock] = useState("150");
  const [fulfillmentChannel, setFulfillmentChannel] = useState<"self" | "fba">("self");

  // Bullet Points (1PLACEE B2C format)
  const [bulletPoints, setBulletPoints] = useState([
    "DUAL-MOTOR QUIET LIFT: Smooth motorized height adjustment from 72cm to 120cm with whisper-quiet operation under 45dB.",
    "ROBUST INDUSTRIAL CAPACITY: High-grade aerospace carbon steel legs support up to 120kg weight evenly distributed.",
    "SMART MEMORY PRESETS: Digital LED controller with 4 customizable memory presets and safety anti-collision sensors.",
    "SEAMLESS ASSEMBLY: Pre-drilled screw holes with magnetic hex key guide for fast 20-minute setup.",
  ]);

  // Description
  const [productDescription, setProductDescription] = useState(
    "Engineered for high-performance workspaces, the VertexPro Ergonomic Motorized Workstation brings unmatched durability and health benefits to modern corporate and home offices. Integrated with advanced cable management trays, dual grommets, and smart overload protection."
  );

  // Dimensions & Weight
  const [dimensions, setDimensions] = useState({
    length: "140",
    width: "70",
    height: "72",
    unit: "cm",
    itemWeight: "28.5",
    packageWeight: "31.2",
    weightUnit: "kg",
  });

  // Variations (Color / Size)
  const [hasVariations, setHasVariations] = useState(true);
  const [variationType, setVariationType] = useState<"Color" | "Size" | "Color-Size">("Color");
  const [variantsList, setVariantsList] = useState([
    { name: "Matte Midnight Black", sku: "VP-ESD-BLK-01", stock: "60", priceOffset: "+0" },
    { name: "Nordic Natural Oak", sku: "VP-ESD-OAK-02", stock: "50", priceOffset: "+200" },
    { name: "Arctic White Minimalist", sku: "VP-ESD-WHT-03", stock: "40", priceOffset: "+100" },
  ]);

  // Uploaded Images & Video State
  const [uploadedImages, setUploadedImages] = useState<Record<string, string>>({});
  const [uploadedVideo, setUploadedVideo] = useState<{ name: string; url: string } | null>(null);

  const handleImageUpload = (slotKey: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setUploadedImages((prev) => ({ ...prev, [slotKey]: url }));
  };

  const handleRemoveImage = (slotKey: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setUploadedImages((prev) => {
      const next = { ...prev };
      delete next[slotKey];
      return next;
    });
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadedVideo({ name: file.name, url: URL.createObjectURL(file) });
  };

  // Submission State
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);

  // Handle submit
  const handlePublishListing = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans text-slate-800">
      <BusinessNavbar />

      <AuthGuardGate
        title="Seller Listing Portal"
        description="Please sign in to your verified 1PLACEE Business account to publish B2B & B2C products."
      >
      {/* Top Banner: Merchant Identification & Global Mode Switcher */}
      <section
        style={{ backgroundColor: "#0e0f89" }}
        className="text-white border-b border-[#0a0b6e] shadow-md relative z-10"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Left: Merchant Profile & Verification */}
            <div className="flex items-start sm:items-center gap-4">
              <div
                style={{ backgroundColor: "#ffffff", color: "#0e0f89" }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center font-black shadow-lg shrink-0 border-2 border-amber-400"
              >
                <Store className="w-8 h-8 text-[#0e0f89]" style={{ color: "#0e0f89" }} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-extrabold text-lg sm:text-xl text-white tracking-tight">
                    {merchant.name}
                  </span>
                  <span
                    style={{ backgroundColor: "#10b981", color: "#ffffff" }}
                    className="inline-flex items-center gap-1 text-[11px] font-black px-2.5 py-0.5 rounded-full shadow-2xs"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Business
                  </span>
                  <span
                    style={{ backgroundColor: "#fbbf24", color: "#0f172a" }}
                    className="text-[11px] font-black px-2.5 py-0.5 rounded-full"
                  >
                    {merchant.membershipYear}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-blue-100 mt-1 font-medium">
                  <span>
                    Email: <strong className="text-white">{merchant.businessEmail}</strong>
                  </span>
                  <span>
                    GSTIN: <strong style={{ color: "#fef08a" }} className="font-mono">{merchant.gstin}</strong>
                  </span>
                  <span>
                    Channel: <strong className="text-white">Unified Multi-Marketplace Seller Hub</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Master Switcher B2B (1PLACEE B2B style) vs B2C (1PLACEE B2C style) */}
            <div
              style={{ backgroundColor: "rgba(255, 255, 255, 0.12)", borderColor: "rgba(255, 255, 255, 0.25)" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-2 rounded-2xl border backdrop-blur-md"
            >
              <span style={{ color: "#fef08a" }} className="text-xs font-black uppercase tracking-wider px-2">
                Select Listing Pipeline:
              </span>

              {/* B2B Button */}
              <button
                type="button"
                onClick={() => {
                  setActiveChannel("B2B");
                  setCurrentStep(1);
                }}
                style={
                  activeChannel === "B2B"
                    ? { backgroundColor: "#ffffff", color: "#0e0f89" }
                    : { backgroundColor: "transparent", color: "#ffffff" }
                }
                className={`flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl font-black text-sm transition-all duration-200 cursor-pointer shadow-sm ${activeChannel === "B2B"
                  ? "ring-2 ring-amber-400 scale-[1.02]"
                  : "hover:bg-white/15"
                  }`}
              >
                <Building2 className="w-4 h-4" />
                <div className="text-left leading-tight">
                  <span className="block text-[13px]">B2B Bulk Wholesale</span>
                  <span className="block text-[10px] font-normal opacity-80">
                    1PLACEE Wholesale Specification Form
                  </span>
                </div>
              </button>

              {/* B2C Button */}
              <button
                type="button"
                onClick={() => {
                  setActiveChannel("B2C");
                  setCurrentStep(1);
                }}
                style={
                  activeChannel === "B2C"
                    ? { backgroundColor: "#ffffff", color: "#0e0f89" }
                    : { backgroundColor: "transparent", color: "#ffffff" }
                }
                className={`flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl font-black text-sm transition-all duration-200 cursor-pointer shadow-sm ${activeChannel === "B2C"
                  ? "ring-2 ring-amber-400 scale-[1.02]"
                  : "hover:bg-white/15"
                  }`}
              >
                <Package className="w-4 h-4" />
                <div className="text-left leading-tight">
                  <span className="block text-[13px]">B2C Single Unit Retail</span>
                  <span className="block text-[10px] font-normal opacity-80">
                    1PLACEE Retail + GST Input Benefit
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-6 py-8">
        {/* Success Modal / Screen */}
        {isSubmitted ? (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xs font-black uppercase text-emerald-600 tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
                Listing Live & Synced
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                Product Published Successfully!
              </h2>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Your listing <strong>"{productTitle}"</strong> has been compiled with all verified attributes and published under{" "}
                <span className="font-bold text-[#0e0f89]">
                  {activeChannel === "B2B" ? "1PLACEE B2B Wholesale Format" : "1PLACEE B2C Dual-Marketplace Format"}
                </span>.
              </p>
            </div>

            {/* Pricing & GST Breakdown Confirmation Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs space-y-2">
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="font-bold text-slate-600">Product Title:</span>
                <span className="font-extrabold text-slate-900 truncate max-w-[260px]">{productTitle}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="font-bold text-slate-600">Catalog Category:</span>
                <span className="font-semibold text-slate-800">{category}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="font-bold text-slate-600">HSN & Tax Rate:</span>
                <span className="font-mono font-bold text-slate-800">
                  HSN {hsnCode} ({gstRate}% GST)
                </span>
              </div>
              {activeChannel === "B2B" ? (
                <>
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="font-bold text-slate-600">Wholesale MOQ:</span>
                    <span className="font-black text-emerald-700">5 Units (Tiered up to ₹1,900/unit)</span>
                  </div>
                  <div className="flex justify-between py-1 text-slate-700">
                    <span className="font-bold">Trade Assurance & Customization:</span>
                    <span className="font-bold text-blue-600">Logo + Packaging Customization Enabled</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="font-bold text-slate-600">1PLACEE Retail Consumer Price:</span>
                    <span className="font-black text-slate-900">₹{b2c1PlaceePrice} (Incl. GST)</span>
                  </div>
                  <div className="flex justify-between py-1 text-emerald-700 font-bold bg-emerald-50 px-2 rounded-lg">
                    <span>1PLACEE-BUSINESS Net Price (After ITC):</span>
                    <span>₹{b2cExGstPrice} (Save ₹{b2cGstSavings} GST)</span>
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition cursor-pointer"
              >
                Edit Listing
              </button>
              <Link
                href={activeChannel === "B2B" ? "/b2b" : "/products"}
                className="px-7 py-3 rounded-xl bg-[#0e0f89] hover:bg-[#0a0b6e] border border-slate-300 text-grey-700 font-black text-xs transition shadow-md cursor-pointer flex items-center gap-2"
              >
                <span>View on Live Store</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          /* Multi-Step Listing Workflow */
          <div className="space-y-6">
            {/* Step Wizard Navigation Bar */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-3 sm:p-4">
              <div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-2 sm:gap-4">
                {activeChannel === "B2B" ? (
                  // B2B 5-Step 1PLACEE B2B flow
                  [
                    { step: 1, title: "Product Information", subtitle: "Name & Keywords" },
                    { step: 2, title: "Attributes & Specs", subtitle: "Materials, Origin & Cert" },
                    { step: 3, title: "Tiered Pricing & MOQ", subtitle: "1PLACEE Volume Slabs" },
                    { step: 4, title: "Logistics & Lead Times", subtitle: "Shipping & Sizing" },
                    { step: 5, title: "Trade & Customization", subtitle: "Logo, Packaging & Terms" },
                  ].map((s) => (
                    <button
                      key={s.step}
                      type="button"
                      onClick={() => setCurrentStep(s.step)}
                      style={
                        currentStep === s.step
                          ? { backgroundColor: "#0e0f89", color: "#ffffff" }
                          : currentStep > s.step
                            ? { backgroundColor: "#eff6ff", color: "#0e0f89" }
                            : { backgroundColor: "#f8fafc", color: "#475569" }
                      }
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-left shrink-0 transition cursor-pointer border border-slate-200/80"
                    >
                      <span
                        style={
                          currentStep === s.step
                            ? { backgroundColor: "#ffffff", color: "#0e0f89" }
                            : currentStep > s.step
                              ? { backgroundColor: "#0e0f89", color: "#ffffff" }
                              : { backgroundColor: "#cbd5e1", color: "#1e293b" }
                        }
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0"
                      >
                        {currentStep > s.step ? "✓" : s.step}
                      </span>
                      <div className="block">
                        <span className="block text-xs font-bold leading-tight">{s.title}</span>
                        <span
                          style={currentStep === s.step ? { color: "#bfdbfe" } : { color: "#64748b" }}
                          className="block text-[10px] mt-0.5 leading-none"
                        >
                          {s.subtitle}
                        </span>
                      </div>
                    </button>
                  ))
                ) : (
                  // B2C 5-Step 1PLACEE B2C flow
                  [
                    { step: 1, title: "Product Identity", subtitle: "Title, Brand & EAN/UPC" },
                    { step: 2, title: "Description & Bullets", subtitle: "A+ Content & Features" },
                    { step: 3, title: "Attributes & Dimensions", subtitle: "Size, Weight & Tech Specs" },
                    { step: 4, title: "Offers & GST Dual-Pricing", subtitle: "1PLACEE vs 1PLACEE-BUS" },
                    { step: 5, title: "Fulfillment & Safety", subtitle: "Inventory & Dispatch" },
                  ].map((s) => (
                    <button
                      key={s.step}
                      type="button"
                      onClick={() => setCurrentStep(s.step)}
                      style={
                        currentStep === s.step
                          ? { backgroundColor: "#0e0f89", color: "#ffffff" }
                          : currentStep > s.step
                            ? { backgroundColor: "#eff6ff", color: "#0e0f89" }
                            : { backgroundColor: "#f8fafc", color: "#475569" }
                      }
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-left shrink-0 transition cursor-pointer border border-slate-200/80"
                    >
                      <span
                        style={
                          currentStep === s.step
                            ? { backgroundColor: "#ffffff", color: "#0e0f89" }
                            : currentStep > s.step
                              ? { backgroundColor: "#0e0f89", color: "#ffffff" }
                              : { backgroundColor: "#cbd5e1", color: "#1e293b" }
                        }
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0"
                      >
                        {currentStep > s.step ? "✓" : s.step}
                      </span>
                      <div className="block">
                        <span className="block text-xs font-bold leading-tight">{s.title}</span>
                        <span
                          style={currentStep === s.step ? { color: "#bfdbfe" } : { color: "#64748b" }}
                          className="block text-[10px] mt-0.5 leading-none"
                        >
                          {s.subtitle}
                        </span>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>

            {/* Dynamic Step Forms */}
            <form onSubmit={handlePublishListing} className="space-y-6">
              {/* ========================================================================= */}
              {/* PIPELINE A: B2B 1PLACEE B2B-STYLE COMPREHENSIVE FORM                          */}
              {/* ========================================================================= */}
              {activeChannel === "B2B" && (
                <>
                  {/* STEP 1: Basic Information, Category & Keywords */}
                  {currentStep === 1 && (
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                        <div>
                          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                            <Package className="w-5 h-5 text-[#0e0f89]" />
                            <span>1. 1PLACEE B2B Product Information & Classification</span>
                          </h2>
                          <p className="text-xs text-slate-500 mt-1">
                            High-quality product titles and multi-keyword tagging ensure maximum reach across global enterprise buyers.
                          </p>
                        </div>
                        <span className="text-xs font-black text-[#0e0f89] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                          Step 1 of 5
                        </span>
                      </div>

                      {/* Title Optimization Field */}
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="text-xs font-black text-slate-700">
                            Product Name / Listing Title *
                          </label>
                          <span className="text-[11px] text-slate-400 font-mono">
                            {productTitle.length} / 128 characters
                          </span>
                        </div>
                        <input
                          type="text"
                          required
                          value={productTitle}
                          onChange={(e) => setProductTitle(e.target.value)}
                          placeholder="e.g. Wholesale High Quality Ergonomic Height Adjustable Motorized Office Desk"
                          className="w-full px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0e0f89] focus:outline-none"
                        />
                        <span className="text-[11px] text-blue-600 font-medium mt-1 flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          Title Optimization: Includes material, function, and target application for superior SEO indexing.
                        </span>
                      </div>

                      {/* Select Category Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-xs font-black text-slate-700 block mb-1">
                            1PLACEE Primary Category Hierarchy *
                          </label>
                          <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0e0f89] focus:outline-none font-medium bg-white"
                          >
                            <option value="Commercial Furniture > Office Desks">
                              Commercial Furniture &gt; Office Desks &gt; Height Adjustable Desks
                            </option>
                            <option value="Apparel & Accessories > Men's Clothing > Plus Size T-Shirts">
                              Apparel &amp; Accessories &gt; Men's Clothing &gt; T-Shirts &amp; Polo
                            </option>
                            <option value="Industrial Machinery > Manufacturing Equipment">
                              Industrial Machinery &gt; Workshop Tools &gt; CNC &amp; Fabrication
                            </option>
                            <option value="Packaging & Printing > Custom Corrugated Boxes">
                              Packaging &amp; Printing &gt; Custom Mailers &amp; Boxes
                            </option>
                            <option value="Electronics & Components > Smart Adapters">
                              Electronics &amp; Components &gt; Power Supply &amp; Adapters
                            </option>
                          </select>
                        </div>

                        <div>
                          <label className="text-xs font-black text-slate-700 block mb-1">
                            Internal Product Group
                          </label>
                          <input
                            type="text"
                            value={b2bGroup}
                            onChange={(e) => setB2bGroup(e.target.value)}
                            className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0e0f89] focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Product Keywords (1PLACEE B2B 3-Tag Keyword expansion) */}
                      <div>
                        <label className="text-xs font-black text-slate-700 block mb-1">
                          Product Keywords (Hidden search tags - up to 255 chars) *
                        </label>
                        <input
                          type="text"
                          value={productKeywords}
                          onChange={(e) => setProductKeywords(e.target.value)}
                          placeholder="e.g. standing desk, motorized desk, bulk office table, ergonomic workstation"
                          className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0e0f89] focus:outline-none font-medium"
                        />
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="text-[11px] text-slate-500 font-bold">Suggested Keywords:</span>
                          {["heavy-duty steel frame", "quiet dual motor", "b2b wholesale furniture", "anti-collision"].map(
                            (kw) => (
                              <button
                                key={kw}
                                type="button"
                                onClick={() => setProductKeywords((prev) => `${prev}, ${kw}`)}
                                className="text-[10px] bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#0e0f89] px-2 py-0.5 rounded-full border border-slate-200 transition"
                              >
                                + {kw}
                              </button>
                            )
                          )}
                        </div>
                      </div>

                      {/* Product Image Bank (1PLACEE B2B 6-image layout + Main Product Video) */}
                      <div>
                        <label className="text-xs font-black text-slate-700 block mb-1">
                          Product Images &amp; Video (1PLACEE Multi-Angle &amp; Certificate Bank) *
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 pt-2">
                          {/* Image 1 (Main) */}
                          <label className="border-2 border-dashed border-[#0e0f89] bg-blue-50/30 hover:bg-blue-50/60 rounded-2xl p-2 flex flex-col items-center justify-center text-center h-32 relative cursor-pointer overflow-hidden transition">
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => handleImageUpload("angle1", e)}
                            />
                            <span
                              style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                              className="absolute top-1.5 left-2 text-[9px] font-black px-1.5 py-0.5 rounded z-10"
                            >
                              MAIN
                            </span>
                            {uploadedImages["angle1"] ? (
                              <>
                                <img
                                  src={uploadedImages["angle1"]}
                                  alt="Angle 1"
                                  className="w-full h-full object-cover rounded-xl"
                                />
                                <button
                                  type="button"
                                  onClick={(e) => handleRemoveImage("angle1", e)}
                                  className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-black/70 text-white text-xs font-bold flex items-center justify-center hover:bg-rose-600 z-10 cursor-pointer"
                                  title="Remove image"
                                >
                                  ×
                                </button>
                              </>
                            ) : (
                              <>
                                <Upload className="w-6 h-6 text-[#0e0f89] mb-1" />
                                <span className="text-[11px] font-bold text-slate-700">Angle 1</span>
                                <span className="text-[9px] text-slate-400">White Background</span>
                              </>
                            )}
                          </label>

                          {/* Image 2, 3, 4, 5 */}
                          {[
                            { key: "dimension", lbl: "Dimension Specs" },
                            { key: "material", lbl: "Material Detail" },
                            { key: "color", lbl: "Color Swatches" },
                            { key: "packaging", lbl: "Packaging Carton" },
                          ].map((slot, idx) => (
                            <label
                              key={slot.key}
                              className="border border-dashed border-slate-300 hover:border-[#0e0f89] bg-slate-50 hover:bg-slate-100 rounded-2xl p-2 flex flex-col items-center justify-center text-center h-32 cursor-pointer transition relative overflow-hidden"
                            >
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => handleImageUpload(slot.key, e)}
                              />
                              {uploadedImages[slot.key] ? (
                                <>
                                  <img
                                    src={uploadedImages[slot.key]}
                                    alt={slot.lbl}
                                    className="w-full h-full object-cover rounded-xl"
                                  />
                                  <button
                                    type="button"
                                    onClick={(e) => handleRemoveImage(slot.key, e)}
                                    className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-black/70 text-white text-xs font-bold flex items-center justify-center hover:bg-rose-600 z-10 cursor-pointer"
                                    title="Remove image"
                                  >
                                    ×
                                  </button>
                                </>
                              ) : (
                                <>
                                  <Upload className="w-5 h-5 text-slate-400 mb-1" />
                                  <span className="text-[10px] font-bold text-slate-600">{slot.lbl}</span>
                                  <span className="text-[9px] text-slate-400">Photo {idx + 2}</span>
                                </>
                              )}
                            </label>
                          ))}

                          {/* Main Product Video Upload */}
                          <label className="border border-dashed border-amber-400 bg-amber-50/40 hover:bg-amber-50 rounded-2xl p-2 flex flex-col items-center justify-center text-center h-32 cursor-pointer relative overflow-hidden transition">
                            <input
                              type="file"
                              accept="video/*"
                              className="hidden"
                              onChange={handleVideoUpload}
                            />
                            {uploadedVideo ? (
                              <>
                                <Zap className="w-5 h-5 text-emerald-600 mb-1" />
                                <span className="text-[10px] font-bold text-emerald-700 truncate max-w-full px-1">
                                  {uploadedVideo.name}
                                </span>
                                <span className="text-[9px] text-emerald-600 font-semibold">Video Ready</span>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setUploadedVideo(null);
                                  }}
                                  className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-black/70 text-white text-xs font-bold flex items-center justify-center hover:bg-rose-600 z-10 cursor-pointer"
                                  title="Remove video"
                                >
                                  ×
                                </button>
                              </>
                            ) : (
                              <>
                                <Zap className="w-5 h-5 text-amber-600 mb-1" />
                                <span className="text-[10px] font-bold text-slate-800">Factory Video</span>
                                <span className="text-[9px] text-amber-700 font-semibold">Under 100MB</span>
                              </>
                            )}
                          </label>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Attributes, Specs, Needle Detection & Certifications */}
                  {currentStep === 2 && (
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                        <div>
                          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                            <SlidersHorizontal className="w-5 h-5 text-[#0e0f89]" />
                            <span>2. Technical Specifications &amp; Factory Compliance</span>
                          </h2>
                          <p className="text-xs text-slate-500 mt-1">
                            1PLACEE B2B buyers inspect certified origins, technical dimensions, and quality control badges.
                          </p>
                        </div>
                        <span className="text-xs font-black text-[#0e0f89] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                          Step 2 of 5
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div>
                          <label className="text-xs font-black text-slate-700 block mb-1">
                            Primary Raw Material / Fabric *
                          </label>
                          <input
                            type="text"
                            value={fabricMaterial}
                            onChange={(e) => setFabricMaterial(e.target.value)}
                            className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0e0f89] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-black text-slate-700 block mb-1">
                            Finish / Coating Type *
                          </label>
                          <input
                            type="text"
                            value={finishType}
                            onChange={(e) => setFinishType(e.target.value)}
                            className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0e0f89] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-black text-slate-700 block mb-1">
                            Model Number *
                          </label>
                          <input
                            type="text"
                            value={modelNumber}
                            onChange={(e) => setModelNumber(e.target.value)}
                            className="w-full px-3 py-2 text-xs font-mono rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0e0f89] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-black text-slate-700 block mb-1">
                            Place of Origin *
                          </label>
                          <input
                            type="text"
                            value={placeOfOrigin}
                            onChange={(e) => setPlaceOfOrigin(e.target.value)}
                            className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0e0f89] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-black text-slate-700 block mb-1">
                            Needle / Metal Detection Passed? *
                          </label>
                          <select
                            value={needleDetection}
                            onChange={(e) => setNeedleDetection(e.target.value)}
                            className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0e0f89] focus:outline-none bg-white"
                          >
                            <option value="Yes">Yes (ISO Certified Detection)</option>
                            <option value="No">No / Not Applicable</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-xs font-black text-slate-700 block mb-1">
                            Sample Order Support *
                          </label>
                          <div className="flex items-center gap-3 pt-1">
                            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 cursor-pointer">
                              <input
                                type="radio"
                                checked={sampleOrderSupported}
                                onChange={() => setSampleOrderSupported(true)}
                                className="accent-[#0e0f89]"
                              />
                              Available (Recommended)
                            </label>
                            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 cursor-pointer">
                              <input
                                type="radio"
                                checked={!sampleOrderSupported}
                                onChange={() => setSampleOrderSupported(false)}
                                className="accent-[#0e0f89]"
                              />
                              Unavailable
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Product Certifications Upload Table */}
                      <div className="pt-4 border-t border-slate-100">
                        <label className="text-xs font-black text-slate-700 block mb-2">
                          Product Certifications &amp; Lab Test Reports (CE, RoHS, BIFMA, ISO)
                        </label>
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <BadgeCheck className="w-8 h-8 text-emerald-600 shrink-0" />
                            <div>
                              <span className="text-xs font-black text-slate-900 block">
                                Verified BIFMA X5.5 &amp; CE Quality Certificate Attached
                              </span>
                              <span className="text-[11px] text-slate-500">
                                Cert Number: BIFMA-IND-2026-8890 | Status: Active &amp; Verified
                              </span>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="text-xs font-bold text-[#0e0f89] hover:underline cursor-pointer"
                          >
                            + Add Additional Certificate
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Tiered Volume Pricing & MOQ (1PLACEE B2B Slabs) */}
                  {currentStep === 3 && (
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                        <div>
                          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                            <DollarSign className="w-5 h-5 text-[#0e0f89]" />
                            <span>3. 1PLACEE Tiered MOQ Pricing Slabs &amp; Unit Options</span>
                          </h2>
                          <p className="text-xs text-slate-500 mt-1">
                            Set progressive volume discounts. Verified B2B buyers automatically unlock discounted wholesale pricing based on order volume.
                          </p>
                        </div>
                        <span className="text-xs font-black text-[#0e0f89] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                          Step 3 of 5
                        </span>
                      </div>

                      {/* Price Setting Method */}
                      <div className="flex items-center gap-6 text-xs font-bold text-slate-700">
                        <label className="flex items-center gap-2 cursor-pointer text-[#0e0f89]">
                          <input type="radio" defaultChecked name="pricingMethod" className="accent-[#0e0f89]" />
                          Tiered Pricing by Quantity (Recommended)
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="pricingMethod" className="accent-[#0e0f89]" />
                          SKU-Based Variant Pricing
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="pricingMethod" className="accent-[#0e0f89]" />
                          Negotiable Range Pricing
                        </label>
                      </div>

                      {/* Quantity Price Table */}
                      <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="bg-slate-100/80 text-slate-700 border-b border-slate-200 font-black">
                              <th className="py-3 px-4">MOQ Slab</th>
                              <th className="py-3 px-4">Quantity Range</th>
                              <th className="py-3 px-4">Price Per Unit (₹)</th>
                              <th className="py-3 px-4">Buyer Preview</th>
                              <th className="py-3 px-4 text-center">Action</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200">
                            {moqSlabs.map((slab, i) => (
                              <tr key={i} className="hover:bg-slate-50">
                                <td className="py-3 px-4 font-bold text-slate-900">
                                  Tier {i + 1}
                                </td>
                                <td className="py-3 px-4">
                                  <span className="font-semibold text-slate-700">
                                    {slab.minQty} - {slab.maxQty} Units
                                  </span>
                                </td>
                                <td className="py-3 px-4">
                                  <div className="flex items-center gap-1">
                                    <span className="font-bold text-slate-500">₹</span>
                                    <input
                                      type="number"
                                      value={slab.priceUnit}
                                      onChange={(e) => {
                                        const updated = [...moqSlabs];
                                        updated[i].priceUnit = e.target.value;
                                        setMoqSlabs(updated);
                                      }}
                                      className="w-28 px-2 py-1 border border-slate-300 rounded font-black text-slate-900"
                                    />
                                  </div>
                                </td>
                                <td className="py-3 px-4">
                                  <span className="text-emerald-700 font-black bg-emerald-50 px-2.5 py-1 rounded-full">
                                    ₹{slab.priceUnit} / unit
                                  </span>
                                </td>
                                <td className="py-3 px-4 text-center">
                                  {i > 0 && (
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setMoqSlabs(moqSlabs.filter((_, idx) => idx !== i));
                                      }}
                                      className="text-rose-500 hover:text-rose-700 p-1 cursor-pointer"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setMoqSlabs([
                            ...moqSlabs,
                            { minQty: "500+", maxQty: "Container", priceUnit: "1650" },
                          ]);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-black text-[#0e0f89] hover:underline cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add New Quantity Slab</span>
                      </button>

                      {/* Sample Order Pricing */}
                      {sampleOrderSupported && (
                        <div className="bg-blue-50/50 border border-blue-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div>
                            <span className="text-xs font-black text-slate-900 block">
                              1-Piece Sample Order Option
                            </span>
                            <span className="text-[11px] text-slate-600">
                              Allow buyers to order 1 sample unit to test build quality before signing bulk contracts.
                            </span>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-xs font-bold text-slate-700">Sample Price: ₹</span>
                            <input
                              type="number"
                              value={samplePrice}
                              onChange={(e) => setSamplePrice(e.target.value)}
                              className="w-24 px-2 py-1 text-xs font-black rounded border border-slate-300"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* STEP 4: Logistics, Lead Times & Package Sizing */}
                  {currentStep === 4 && (
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                        <div>
                          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                            <Truck className="w-5 h-5 text-[#0e0f89]" />
                            <span>4. Production Lead Times &amp; Freight Dimensions</span>
                          </h2>
                          <p className="text-xs text-slate-500 mt-1">
                            Accurate dispatch lead times ensure compliance with 1PLACEE On-Time Delivery Guarantee.
                          </p>
                        </div>
                        <span className="text-xs font-black text-[#0e0f89] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                          Step 4 of 5
                        </span>
                      </div>

                      {/* Lead Time Table (1PLACEE B2B Format) */}
                      <div>
                        <label className="text-xs font-black text-slate-700 block mb-2">
                          Quantity vs. Estimated Production &amp; Dispatch Lead Time *
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {leadTimes.map((lt, idx) => (
                            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                              <span className="text-xs font-black text-slate-800 block">
                                {lt.qtyRange}
                              </span>
                              <div className="mt-2 flex items-center gap-2">
                                <span className="text-[11px] text-slate-500">Lead Time:</span>
                                <input
                                  type="text"
                                  value={lt.leadDays}
                                  onChange={(e) => {
                                    const updated = [...leadTimes];
                                    updated[idx].leadDays = e.target.value;
                                    setLeadTimes(updated);
                                  }}
                                  className="w-full px-2 py-1 text-xs font-bold rounded border border-slate-300 bg-white"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Package Specification */}
                      <div className="pt-4 border-t border-slate-100">
                        <label className="text-xs font-black text-slate-700 block mb-3">
                          Per-Carton Master Freight Package Dimensions
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          <div>
                            <span className="text-[11px] font-bold text-slate-600 block mb-1">
                              Length (cm)
                            </span>
                            <input
                              type="number"
                              value={dimensions.length}
                              onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
                              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300"
                            />
                          </div>
                          <div>
                            <span className="text-[11px] font-bold text-slate-600 block mb-1">
                              Width (cm)
                            </span>
                            <input
                              type="number"
                              value={dimensions.width}
                              onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
                              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300"
                            />
                          </div>
                          <div>
                            <span className="text-[11px] font-bold text-slate-600 block mb-1">
                              Height (cm)
                            </span>
                            <input
                              type="number"
                              value={dimensions.height}
                              onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
                              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300"
                            />
                          </div>
                          <div>
                            <span className="text-[11px] font-bold text-slate-600 block mb-1">
                              Gross Package Weight (kg)
                            </span>
                            <input
                              type="number"
                              value={dimensions.packageWeight}
                              onChange={(e) => setDimensions({ ...dimensions, packageWeight: e.target.value })}
                              className="w-full px-3 py-2 text-xs font-black rounded-xl border border-slate-300"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 5: Customization & Trade Assurance Terms */}
                  {currentStep === 5 && (
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                        <div>
                          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-[#0e0f89]" />
                            <span>5. Buyer Customization Services &amp; Trade Assurance</span>
                          </h2>
                          <p className="text-xs text-slate-500 mt-1">
                            1PLACEE B2B buyers favor sellers providing custom company logos, packaging, and Trade Assurance escrow protection.
                          </p>
                        </div>
                        <span className="text-xs font-black text-[#0e0f89] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                          Step 5 of 5
                        </span>
                      </div>

                      {/* Customization Options Checkboxes */}
                      <div className="space-y-4">
                        <label className="text-xs font-black text-slate-700 block">
                          Offered OEM/ODM Customization Services:
                        </label>

                        {/* Customized Logo */}
                        <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={customizationOptions.logo}
                              onChange={(e) =>
                                setCustomizationOptions({ ...customizationOptions, logo: e.target.checked })
                              }
                              className="w-4 h-4 accent-[#0e0f89]"
                            />
                            <div>
                              <span className="text-xs font-black text-slate-900 block">
                                Customized Laser / Screen Printed Logo
                              </span>
                              <span className="text-[11px] text-slate-500">
                                Imprint customer brand identity onto product surface
                              </span>
                            </div>
                          </label>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-600">MOQ:</span>
                            <input
                              type="number"
                              value={customizationOptions.logoMoq}
                              onChange={(e) =>
                                setCustomizationOptions({ ...customizationOptions, logoMoq: e.target.value })
                              }
                              className="w-16 px-2 py-1 text-xs font-bold rounded border border-slate-300"
                            />
                            <span className="text-xs text-slate-500">Pcs</span>
                          </div>
                        </div>

                        {/* Customized Packaging */}
                        <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={customizationOptions.packaging}
                              onChange={(e) =>
                                setCustomizationOptions({ ...customizationOptions, packaging: e.target.checked })
                              }
                              className="w-4 h-4 accent-[#0e0f89]"
                            />
                            <div>
                              <span className="text-xs font-black text-slate-900 block">
                                Customized Packaging &amp; Retail Box
                              </span>
                              <span className="text-[11px] text-slate-500">
                                Full color custom outer cartons &amp; foam molds
                              </span>
                            </div>
                          </label>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-600">MOQ:</span>
                            <input
                              type="number"
                              value={customizationOptions.packagingMoq}
                              onChange={(e) =>
                                setCustomizationOptions({ ...customizationOptions, packagingMoq: e.target.value })
                              }
                              className="w-16 px-2 py-1 text-xs font-bold rounded border border-slate-300"
                            />
                            <span className="text-xs text-slate-500">Pcs</span>
                          </div>
                        </div>
                      </div>

                      {/* Trade Assurance & Payment Gateways */}
                      <div className="pt-4 border-t border-slate-100">
                        <label className="text-xs font-black text-slate-700 block mb-2">
                          Accepted Payment Terms &amp; Escrow
                        </label>
                        <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-700">
                          {[
                            "1PLACEE Trade Assurance (Escrow)",
                            "Letter of Credit (L/C)",
                            "Telegraphic Transfer (T/T 30/70)",
                            "GST Invoice & Net-30",
                            "NEFT / RTGS Corporate",
                          ].map((pm) => (
                            <span
                              key={pm}
                              className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1.5"
                            >
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                              {pm}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* ========================================================================= */}
              {/* PIPELINE B: B2C 1PLACEE B2C-STYLE COMPREHENSIVE FORM + 1PLACEE GST DUAL BENEFIT*/}
              {/* ========================================================================= */}
              {activeChannel === "B2C" && (
                <>
                  {/* STEP 1: Product Identity, Brand, EAN/UPC */}
                  {currentStep === 1 && (
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                        <div>
                          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                            <Package className="w-5 h-5 text-[#0e0f89]" />
                            <span>1. 1PLACEE B2C Product Identity &amp; External Barcode</span>
                          </h2>
                          <p className="text-xs text-slate-500 mt-1">
                            Accurate brand naming and standard EAN/UPC barcode mapping ensure seamless single-unit retail sales.
                          </p>
                        </div>
                        <span className="text-xs font-black text-[#0e0f89] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                          Step 1 of 5
                        </span>
                      </div>

                      {/* Product Title */}
                      <div>
                        <label className="text-xs font-black text-slate-700 block mb-1">
                          Product Title / Name (1PLACEE format: [Brand] + [Feature] + [Material] + [Type]) *
                        </label>
                        <input
                          type="text"
                          required
                          value={productTitle}
                          onChange={(e) => setProductTitle(e.target.value)}
                          className="w-full px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0e0f89] focus:outline-none"
                        />
                      </div>

                      {/* Brand Name & Barcode (EAN / UPC / HSN) */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div>
                          <label className="text-xs font-black text-slate-700 block mb-1">
                            Brand Name *
                          </label>
                          <input
                            type="text"
                            value={brandName}
                            onChange={(e) => setBrandName(e.target.value)}
                            className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0e0f89] focus:outline-none font-bold"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-black text-slate-700 block mb-1">
                            External Product ID Type *
                          </label>
                          <select
                            value={externalIdType}
                            onChange={(e) => setExternalIdType(e.target.value)}
                            className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0e0f89] focus:outline-none bg-white font-medium"
                          >
                            <option value="EAN">EAN (13 Digits European Article Number)</option>
                            <option value="UPC">UPC (12 Digits Universal Product Code)</option>
                            <option value="GTIN">GTIN-14</option>
                            <option value="1PLACEE_ID">1PLACEE Catalog ID</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-xs font-black text-slate-700 block mb-1">
                            Barcode / External ID Value *
                          </label>
                          <input
                            type="text"
                            value={externalProductId}
                            onChange={(e) => setExternalProductId(e.target.value)}
                            className="w-full px-3 py-2 text-xs font-mono font-bold rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0e0f89] focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Browse Node Category & HSN Code */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="text-xs font-black text-slate-700 block mb-1">
                            1PLACEE Recommended Browse Node Category *
                          </label>
                          <input
                            type="text"
                            value="Home & Kitchen > Furniture > Home Office Furniture > Desks & Workstations"
                            readOnly
                            className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-700 font-medium"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-black text-slate-700 block mb-1">
                            HSN Code (GST Classification) *
                          </label>
                          <input
                            type="text"
                            value={hsnCode}
                            onChange={(e) => setHsnCode(e.target.value)}
                            className="w-full px-3 py-2 text-xs font-mono font-bold rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0e0f89] focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Variations Toggle */}
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
                        <div>
                          <span className="text-xs font-black text-slate-900 block">
                            Does this product have variations (Colors, Sizes)?
                          </span>
                          <span className="text-[11px] text-slate-500">
                            Create parent-child variation listings (e.g. Black, Oak, White)
                          </span>
                        </div>
                        <input
                          type="checkbox"
                          checked={hasVariations}
                          onChange={(e) => setHasVariations(e.target.checked)}
                          className="w-5 h-5 accent-[#0e0f89] cursor-pointer"
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Description & Key Bullet Points (1PLACEE B2C Format) */}
                  {currentStep === 2 && (
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                        <div>
                          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-[#0e0f89]" />
                            <span>2. Bullet Points (Features) &amp; Product Description</span>
                          </h2>
                          <p className="text-xs text-slate-500 mt-1">
                            1PLACEE standard 5-bullet point structure for high conversion rates.
                          </p>
                        </div>
                        <span className="text-xs font-black text-[#0e0f89] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                          Step 2 of 5
                        </span>
                      </div>

                      {/* 5 Bullet Points */}
                      <div className="space-y-3">
                        <label className="text-xs font-black text-slate-700 block">
                          Key Product Features / Bullet Points (Top Highlights) *
                        </label>
                        {bulletPoints.map((bp, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="w-6 h-8 flex items-center justify-center text-xs font-black text-slate-500 bg-slate-100 rounded-lg shrink-0">
                              {i + 1}
                            </span>
                            <input
                              type="text"
                              value={bp}
                              onChange={(e) => {
                                const updated = [...bulletPoints];
                                updated[i] = e.target.value;
                                setBulletPoints(updated);
                              }}
                              className="flex-1 px-3 py-1.5 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0e0f89] focus:outline-none"
                            />
                            {bulletPoints.length > 2 && (
                              <button
                                type="button"
                                onClick={() => setBulletPoints(bulletPoints.filter((_, idx) => idx !== i))}
                                className="p-1 text-slate-400 hover:text-rose-500 cursor-pointer"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        ))}

                        <button
                          type="button"
                          onClick={() => setBulletPoints([...bulletPoints, "New High-Quality Feature Highlight"])}
                          className="inline-flex items-center gap-1.5 text-xs font-black text-[#0e0f89] hover:underline cursor-pointer pt-1"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add Another Bullet Point</span>
                        </button>
                      </div>

                      {/* Product Description */}
                      <div className="pt-4 border-t border-slate-100">
                        <label className="text-xs font-black text-slate-700 block mb-1">
                          Product Full Description / A+ Story *
                        </label>
                        <textarea
                          rows={4}
                          value={productDescription}
                          onChange={(e) => setProductDescription(e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0e0f89] focus:outline-none leading-relaxed"
                        />
                      </div>

                      {/* Amazon B2C Product Images Upload (Up to 6 images with MAIN) */}
                      <div className="pt-4 border-t border-slate-100">
                        <label className="text-xs font-black text-slate-700 block mb-1">
                          Product Images (Amazon Main + Multi-Angle Gallery) *
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-2">
                          {[
                            { key: "b2c_main", lbl: "MAIN Image", isMain: true },
                            { key: "b2c_2", lbl: "Side View", isMain: false },
                            { key: "b2c_3", lbl: "Dimensions", isMain: false },
                            { key: "b2c_4", lbl: "In-Use / Lifestyle", isMain: false },
                            { key: "b2c_5", lbl: "Close-Up Detail", isMain: false },
                            { key: "b2c_6", lbl: "Box & Contents", isMain: false },
                          ].map((slot, idx) => (
                            <label
                              key={slot.key}
                              className={`border-dashed rounded-2xl p-2 flex flex-col items-center justify-center text-center h-32 cursor-pointer transition relative overflow-hidden ${
                                slot.isMain
                                  ? "border-2 border-[#0e0f89] bg-blue-50/30 hover:bg-blue-50/60"
                                  : "border border-slate-300 hover:border-[#0e0f89] bg-slate-50 hover:bg-slate-100"
                              }`}
                            >
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => handleImageUpload(slot.key, e)}
                              />
                              {slot.isMain && (
                                <span
                                  style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                                  className="absolute top-1.5 left-2 text-[9px] font-black px-1.5 py-0.5 rounded z-10"
                                >
                                  MAIN
                                </span>
                              )}
                              {uploadedImages[slot.key] ? (
                                <>
                                  <img
                                    src={uploadedImages[slot.key]}
                                    alt={slot.lbl}
                                    className="w-full h-full object-cover rounded-xl"
                                  />
                                  <button
                                    type="button"
                                    onClick={(e) => handleRemoveImage(slot.key, e)}
                                    className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-black/70 text-white text-xs font-bold flex items-center justify-center hover:bg-rose-600 z-10 cursor-pointer"
                                    title="Remove image"
                                  >
                                    ×
                                  </button>
                                </>
                              ) : (
                                <>
                                  <Upload className={`w-5 h-5 mb-1 ${slot.isMain ? "text-[#0e0f89]" : "text-slate-400"}`} />
                                  <span className="text-[10px] font-bold text-slate-700">{slot.lbl}</span>
                                  <span className="text-[9px] text-slate-400">Photo {idx + 1}</span>
                                </>
                              )}
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Attributes, Dimensions & Variation SKUs */}
                  {currentStep === 3 && (
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                        <div>
                          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                            <Layers className="w-5 h-5 text-[#0e0f89]" />
                            <span>3. Item Dimensions &amp; Variation Child SKUs</span>
                          </h2>
                          <p className="text-xs text-slate-500 mt-1">
                            Physical dimensions determine shipping tiers and packaging weight calculation.
                          </p>
                        </div>
                        <span className="text-xs font-black text-[#0e0f89] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                          Step 3 of 5
                        </span>
                      </div>

                      {/* Dimensions Input */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div>
                          <label className="text-xs font-bold text-slate-600 block mb-1">
                            Length (L)
                          </label>
                          <div className="flex">
                            <input
                              type="number"
                              value={dimensions.length}
                              onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
                              className="w-full px-3 py-2 text-xs rounded-l-xl border border-slate-300"
                            />
                            <span className="bg-slate-100 border border-l-0 border-slate-300 px-2 py-2 text-xs font-bold text-slate-600 rounded-r-xl">
                              cm
                            </span>
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-bold text-slate-600 block mb-1">
                            Width (W)
                          </label>
                          <div className="flex">
                            <input
                              type="number"
                              value={dimensions.width}
                              onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
                              className="w-full px-3 py-2 text-xs rounded-l-xl border border-slate-300"
                            />
                            <span className="bg-slate-100 border border-l-0 border-slate-300 px-2 py-2 text-xs font-bold text-slate-600 rounded-r-xl">
                              cm
                            </span>
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-bold text-slate-600 block mb-1">
                            Height (H)
                          </label>
                          <div className="flex">
                            <input
                              type="number"
                              value={dimensions.height}
                              onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
                              className="w-full px-3 py-2 text-xs rounded-l-xl border border-slate-300"
                            />
                            <span className="bg-slate-100 border border-l-0 border-slate-300 px-2 py-2 text-xs font-bold text-slate-600 rounded-r-xl">
                              cm
                            </span>
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-bold text-slate-600 block mb-1">
                            Item Weight
                          </label>
                          <div className="flex">
                            <input
                              type="number"
                              value={dimensions.itemWeight}
                              onChange={(e) => setDimensions({ ...dimensions, itemWeight: e.target.value })}
                              className="w-full px-3 py-2 text-xs rounded-l-xl border border-slate-300 font-bold"
                            />
                            <span className="bg-slate-100 border border-l-0 border-slate-300 px-2 py-2 text-xs font-bold text-slate-600 rounded-r-xl">
                              kg
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Variation SKU Matrix */}
                      {hasVariations && (
                        <div className="pt-4 border-t border-slate-100 space-y-3">
                          <label className="text-xs font-black text-slate-700 block">
                            Child Variation Matrix (Color / Material):
                          </label>
                          <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                            <table className="w-full text-left text-xs border-collapse">
                              <thead className="bg-slate-100/80 font-black text-slate-700">
                                <tr>
                                  <th className="py-2.5 px-4">Variant Name</th>
                                  <th className="py-2.5 px-4">Child SKU</th>
                                  <th className="py-2.5 px-4">Stock Qty</th>
                                  <th className="py-2.5 px-4">Price Differential</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-200">
                                {variantsList.map((vr, i) => (
                                  <tr key={i} className="hover:bg-slate-50">
                                    <td className="py-2.5 px-4 font-bold text-slate-900">{vr.name}</td>
                                    <td className="py-2.5 px-4 font-mono">{vr.sku}</td>
                                    <td className="py-2.5 px-4 font-bold">{vr.stock} in stock</td>
                                    <td className="py-2.5 px-4 text-emerald-700 font-bold">{vr.priceOffset}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* STEP 4: Pricing Offers & 1PLACEE vs 1PLACEE-BUSINESS GST BENEFIT (Crucial User Requirement) */}
                  {currentStep === 4 && (
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                        <div>
                          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                            <Percent className="w-5 h-5 text-[#0e0f89]" />
                            <span>4. Dual-Marketplace Pricing &amp; GST Input Tax Credit (ITC) Benefit</span>
                          </h2>
                          <p className="text-xs text-slate-500 mt-1">
                            Published simultaneously on <strong>1PLACEE Retail</strong> (Original inclusive price) and <strong>1PLACEE-BUSINESS</strong> (Automated GST deduction for verified business buyers).
                          </p>
                        </div>
                        <span className="text-xs font-black text-[#0e0f89] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                          Step 4 of 5
                        </span>
                      </div>

                      {/* Primary Price Input */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div>
                          <label className="text-xs font-black text-slate-700 block mb-1">
                            Maximum Retail Price (MRP ₹) *
                          </label>
                          <input
                            type="number"
                            value={b2cRetailMrp}
                            onChange={(e) => setB2cRetailMrp(e.target.value)}
                            className="w-full px-3 py-2 text-xs font-bold rounded-xl border border-slate-300"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-black text-slate-700 block mb-1">
                            1PLACEE Selling Price (Consumer Incl. GST) *
                          </label>
                          <input
                            type="number"
                            value={b2c1PlaceePrice}
                            onChange={(e) => setB2c1PlaceePrice(e.target.value)}
                            className="w-full px-3 py-2 text-sm font-black text-[#0e0f89] rounded-xl border-2 border-[#0e0f89] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-black text-slate-700 block mb-1">
                            Applicable GST Rate (%) *
                          </label>
                          <select
                            value={gstRate}
                            onChange={(e) => setGstRate(e.target.value)}
                            className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white font-bold"
                          >
                            <option value="5">5% GST</option>
                            <option value="12">12% GST</option>
                            <option value="18">18% GST (Standard)</option>
                            <option value="28">28% GST</option>
                          </select>
                        </div>
                      </div>

                      {/* GST Benefit Comparison Card: 1PLACEE Consumer vs 1PLACEE-BUSINESS Buyer */}
                      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-emerald-50 border-2 border-indigo-200 rounded-3xl p-6 shadow-xs">
                        <div className="flex items-center gap-2 mb-4">
                          <Zap className="w-5 h-5 text-[#0e0f89]" />
                          <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                            Automated Dual-Portal Customer Pricing Display
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Channel 1: 1PLACEE Normal Consumer */}
                          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-black text-slate-900">
                                1. 1PLACEE (Retail Consumer)
                              </span>
                              <span className="text-[10px] bg-slate-100 font-bold px-2 py-0.5 rounded text-slate-600">
                                Regular B2C
                              </span>
                            </div>
                            <div className="text-2xl font-black text-slate-900 mt-2">
                              ₹{b2cTaxInclusive}
                            </div>
                            <span className="text-[11px] text-slate-500 block mt-1">
                              Tax-inclusive retail price displayed on public 1PLACEE storefront.
                            </span>
                            <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-600 flex justify-between">
                              <span>Customer Pays:</span>
                              <strong className="text-slate-800">₹{b2cTaxInclusive}</strong>
                            </div>
                          </div>

                          {/* Channel 2: 1PLACEE-BUSINESS Verified Enterprise */}
                          <div className="bg-white rounded-2xl p-4 border-2 border-emerald-500 shadow-2xs relative">
                            <span className="absolute -top-2.5 right-4 bg-emerald-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs">
                              GST ITC BENEFIT
                            </span>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-black text-emerald-800">
                                2. 1PLACEE-BUSINESS (GST Buyer)
                              </span>
                            </div>
                            <div className="text-2xl font-black text-emerald-600 mt-2 flex items-baseline gap-2">
                              <span>₹{b2cExGstPrice}</span>
                              <span className="text-xs line-through text-slate-400 font-normal">
                                ₹{b2cTaxInclusive}
                              </span>
                            </div>
                            <span className="text-[11px] text-emerald-700 font-medium block mt-1">
                              Effective cost to business buyer after claiming {gstRate}% GST Input Tax Credit.
                            </span>
                            <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] space-y-1">
                              <div className="flex justify-between text-slate-600">
                                <span>GST Invoice Tax Amount:</span>
                                <strong>₹{b2cGstSavings} ({gstRate}%)</strong>
                              </div>
                              <div className="flex justify-between text-emerald-700 font-black">
                                <span>Total Savings per unit:</span>
                                <span>Save ₹{b2cGstSavings}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 5: Inventory, Fulfillment Channel & Safety Compliance */}
                  {currentStep === 5 && (
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                        <div>
                          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                            <Truck className="w-5 h-5 text-[#0e0f89]" />
                            <span>5. Fulfillment Channel &amp; Inventory Allocation</span>
                          </h2>
                          <p className="text-xs text-slate-500 mt-1">
                            Choose between Merchant Self-Ship (Easy Ship) or 1PLACEE Fulfillment Warehouse fulfillment.
                          </p>
                        </div>
                        <span className="text-xs font-black text-[#0e0f89] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                          Step 5 of 5
                        </span>
                      </div>

                      {/* Stock & SKU */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="text-xs font-black text-slate-700 block mb-1">
                            Merchant SKU (Stock Keeping Unit) *
                          </label>
                          <input
                            type="text"
                            value={sku}
                            onChange={(e) => setSku(e.target.value)}
                            className="w-full px-3 py-2 text-xs font-mono font-bold rounded-xl border border-slate-300"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-black text-slate-700 block mb-1">
                            Available Inventory Stock (Units) *
                          </label>
                          <input
                            type="number"
                            value={inventoryStock}
                            onChange={(e) => setInventoryStock(e.target.value)}
                            className="w-full px-3 py-2 text-xs font-black rounded-xl border border-slate-300"
                          />
                        </div>
                      </div>

                      {/* Fulfillment Method Selection */}
                      <div className="space-y-3">
                        <label className="text-xs font-black text-slate-700 block">
                          Fulfillment Delivery Channel:
                        </label>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <label
                            className={`p-4 rounded-2xl border-2 cursor-pointer flex items-start gap-3 transition ${fulfillmentChannel === "self"
                              ? "border-[#0e0f89] bg-blue-50/40"
                              : "border-slate-200 bg-white"
                              }`}
                          >
                            <input
                              type="radio"
                              name="fulfillment"
                              checked={fulfillmentChannel === "self"}
                              onChange={() => setFulfillmentChannel("self")}
                              className="mt-1 accent-[#0e0f89]"
                            />
                            <div>
                              <span className="text-xs font-black text-slate-900 block">
                                Merchant Self-Ship / 1PLACEE Easy Ship
                              </span>
                              <span className="text-[11px] text-slate-500 leading-tight block mt-0.5">
                                You store and pack items from your factory/warehouse in Chennai. 1PLACEE logistics courier picks up directly from your doorstep.
                              </span>
                            </div>
                          </label>

                          <label
                            className={`p-4 rounded-2xl border-2 cursor-pointer flex items-start gap-3 transition ${fulfillmentChannel === "fba"
                              ? "border-[#0e0f89] bg-blue-50/40"
                              : "border-slate-200 bg-white"
                              }`}
                          >
                            <input
                              type="radio"
                              name="fulfillment"
                              checked={fulfillmentChannel === "fba"}
                              onChange={() => setFulfillmentChannel("fba")}
                              className="mt-1 accent-[#0e0f89]"
                            />
                            <div>
                              <span className="text-xs font-black text-slate-900 block">
                                1PLACEE Prime Fulfillment (FBA Warehouse)
                              </span>
                              <span className="text-[11px] text-slate-500 leading-tight block mt-0.5">
                                Ship inventory in bulk to 1PLACEE automated fulfillment center. We handle fast 24-hr dispatch and customer support.
                              </span>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Navigation Footer Controls: Prev, Next, Submit */}
              <div className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center justify-between shadow-xs">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
                    className="px-6 py-2.5 rounded-xl border border-slate-300 font-bold text-xs text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                  >
                    ← Back to Step {currentStep - 1}
                  </button>
                ) : (
                  <Link
                    href="/"
                    className="px-6 py-2.5 rounded-xl border border-slate-300 font-bold text-xs text-slate-500 hover:bg-slate-100 transition"
                  >
                    Cancel
                  </Link>
                )}

                <div className="flex items-center gap-3">
                  {currentStep < 5 ? (
                    <button
                      key="next-step-btn"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setCurrentStep((prev) => Math.min(prev + 1, 5));
                      }}
                      style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                      className="px-8 py-2.5 rounded-xl font-black text-xs transition shadow-md flex items-center gap-2 cursor-pointer active:scale-98"
                    >
                      <span>Proceed to Step {currentStep + 1}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      key="publish-submit-btn"
                      type="submit"
                      style={{ backgroundColor: "#fbbf24", color: "#0f172a" }}
                      className="px-8 py-3 rounded-xl font-black text-sm transition shadow-lg flex items-center gap-2 cursor-pointer active:scale-98"
                    >
                      <Store className="w-5 h-5" />
                      <span>
                        Publish {activeChannel === "B2B" ? "B2B Wholesale Listing" : "B2C Dual Listing"}
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        )}
      </main>
      </AuthGuardGate>

      <BusinessFooter />
    </div>
  );
}
