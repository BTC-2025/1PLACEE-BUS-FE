"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { BusinessFooter } from "@/components/BusinessFooter";
import { SellerDashboardSection } from "@/components/SellerDashboardSection";
import {
  Search,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Store,
  FileText,
  Globe2,
  Award,
  Truck,
  CreditCard,
  Building2,
  Layers,
  ArrowUpRight,
  Clock,
  Sparkles,
  Check,
  ChevronRight,
  FileCheck2,
  BadgeCheck,
  Percent,
  TrendingUp,
  MapPin,
  HelpCircle,
  ShieldAlert
} from "lucide-react";

export default function HomePage() {
  const router = useRouter();

  // Search & Sourcing Mode
  const [searchTarget, setSearchTarget] = useState<"products" | "suppliers">("products");
  const [productName, setProductName] = useState("");
  const [supplierType, setSupplierType] = useState("all");
  const [intentType, setIntentType] = useState<"b2b" | "rfq" | "retail">("b2b");

  // Step & Questionnaire State
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);
  const [quantity, setQuantity] = useState("100");
  const [unit, setUnit] = useState("Piece(s)");
  const [targetBudget, setTargetBudget] = useState("");
  const [customizationRequired, setCustomizationRequired] = useState("Standard (No Custom)");
  const [deliveryLocation, setDeliveryLocation] = useState("Chennai, Tamil Nadu");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Quick popular search tags
  const popularKeywords = [
    "Industrial Packaging",
    "Cotton Fabric",
    "CNC Machinery",
    "Solar Panels",
    "Plastic Storage Boxes",
    "Electronic Components"
  ];

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!productName.trim()) {
      alert("Please enter a product or service name to find suppliers.");
      return;
    }
    setIsQuestionnaireOpen(true);
  };

  const handleFinalRedirect = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);

    const queryParams = new URLSearchParams({
      q: productName.trim() || "all",
      mode: searchTarget,
      supplier: supplierType,
      intent: intentType,
      qty: quantity,
      unit: unit,
      budget: targetBudget,
      loc: deliveryLocation,
      custom: customizationRequired
    });

    setTimeout(() => {
      if (intentType === "rfq") {
        router.push(`/rfq?${queryParams.toString()}`);
      } else if (intentType === "retail") {
        router.push(`/categories?${queryParams.toString()}`);
      } else {
        router.push(`/b2b?${queryParams.toString()}`);
      }
    }, 400);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  React.useEffect(() => {
    const syncAuth = () => {
      setIsLoggedIn(localStorage.getItem("1placee_logged_in") !== "false");
    };
    syncAuth();
    window.addEventListener("1placee-auth-change", syncAuth);
    return () => window.removeEventListener("1placee-auth-change", syncAuth);
  }, []);

  return (
    <div
      className="min-h-screen text-slate-800 font-sans flex flex-col justify-between"
      style={{ backgroundColor: "#f4f6f9" }}
    >
      <BusinessNavbar />

      {/* Logged-in Seller & Business Dashboard (Amazon + Alibaba Unified) */}
      {isLoggedIn ? (
        <div className="flex-1 w-full">
          <SellerDashboardSection />
        </div>
      ) : (
      <main className="w-full flex-1">
        {/* ========================================================================= */}
        {/* SECTION 1: EUROPAGES / INDUSTRIAL B2B HERO BANNER WITH SOURCING SEARCH */}
        {/* ========================================================================= */}
        <section
          className="relative overflow-hidden py-14 sm:py-20 border-b border-slate-700/50"
          style={{
            backgroundColor: "#0d2540",
            color: "#ffffff"
          }}
        >
          {/* Subtle industrial background texture & overlay with guaranteed opacity */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(10, 27, 47, 0.96), rgba(16, 48, 84, 0.92), rgba(10, 27, 47, 0.96)), url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.95
            }}
          />

          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
            {/* Top Heading */}
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border mb-3"
                style={{
                  backgroundColor: "rgba(59, 130, 246, 0.18)",
                  borderColor: "rgba(147, 197, 253, 0.4)",
                  color: "#93c5fd"
                }}
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                Verified B2B & Retail Direct Marketplace
              </span>
              <h1
                className="text-2xl sm:text-4xl md:text-[44px] font-extrabold tracking-tight leading-tight"
                style={{ color: "#ffffff" }}
              >
                India&apos;s Leading Marketplace for{" "}
                <span style={{ color: "#60a5fa" }}>Wholesale &amp; Direct Trade</span>
              </h1>
              <p
                className="mt-3 text-sm sm:text-base max-w-2xl mx-auto font-normal"
                style={{ color: "#cbd5e1" }}
              >
                Connecting 1.3Cr+ Verified Buyers with Top Manufacturers, OEM Exporters &amp; Stockists across India and Global markets.
              </p>
            </div>

            {/* Europages-inspired Big Floating Sourcing Box */}
            <div
              className="max-w-2xl mx-auto rounded-2xl shadow-2xl p-4 sm:p-5 border relative"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#e2e8f0",
                color: "#1e293b"
              }}
            >
              <form onSubmit={handleSearchSubmit} className="space-y-3">
                {/* Search Input Bar with embedded round search button */}
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Enter product, machinery, service (e.g. plastic storage boxes, cotton fabric)..."
                    className="w-full pl-4 pr-14 py-3.5 text-sm sm:text-base border rounded-xl outline-none font-medium transition"
                    style={{
                      backgroundColor: "#f8fafc",
                      borderColor: "#cbd5e1",
                      color: "#0f172a"
                    }}
                  />
                  <button
                    type="submit"
                    aria-label="Search or Source"
                    className="absolute right-2 w-10 h-10 rounded-xl flex items-center justify-center shadow-md transition active:scale-95 cursor-pointer"
                    style={{
                      backgroundColor: "#1559ac",
                      color: "#ffffff"
                    }}
                  >
                    <Search className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>

                {/* Sub Pill Tabs (Products vs Suppliers) & Quick Mode */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <div
                    className="flex items-center gap-1.5 p-1 rounded-xl"
                    style={{ backgroundColor: "#f1f5f9" }}
                  >
                    <button
                      type="button"
                      onClick={() => setSearchTarget("products")}
                      className="px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer"
                      style={{
                        backgroundColor: searchTarget === "products" ? "#1559ac" : "transparent",
                        color: searchTarget === "products" ? "#ffffff" : "#475569"
                      }}
                    >
                      Products
                    </button>
                    <button
                      type="button"
                      onClick={() => setSearchTarget("suppliers")}
                      className="px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer"
                      style={{
                        backgroundColor: searchTarget === "suppliers" ? "#1559ac" : "transparent",
                        color: searchTarget === "suppliers" ? "#ffffff" : "#475569"
                      }}
                    >
                      Suppliers
                    </button>
                  </div>

                  {/* Intent Selection: B2B vs RFQ vs Retail */}
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="font-medium hidden sm:inline" style={{ color: "#64748b" }}>
                      Trade Type:
                    </span>
                    <button
                      type="button"
                      onClick={() => setIntentType("b2b")}
                      className="px-2.5 py-1 rounded-lg border font-semibold transition cursor-pointer"
                      style={{
                        borderColor: intentType === "b2b" ? "#1559ac" : "#cbd5e1",
                        backgroundColor: intentType === "b2b" ? "#eff6ff" : "#ffffff",
                        color: intentType === "b2b" ? "#1559ac" : "#475569"
                      }}
                    >
                      B2B Bulk
                    </button>
                    <button
                      type="button"
                      onClick={() => setIntentType("rfq")}
                      className="px-2.5 py-1 rounded-lg border font-semibold transition cursor-pointer"
                      style={{
                        borderColor: intentType === "rfq" ? "#1559ac" : "#cbd5e1",
                        backgroundColor: intentType === "rfq" ? "#eff6ff" : "#ffffff",
                        color: intentType === "rfq" ? "#1559ac" : "#475569"
                      }}
                    >
                      Post RFQ
                    </button>
                    <button
                      type="button"
                      onClick={() => setIntentType("retail")}
                      className="px-2.5 py-1 rounded-lg border font-semibold transition cursor-pointer"
                      style={{
                        borderColor: intentType === "retail" ? "#1559ac" : "#cbd5e1",
                        backgroundColor: intentType === "retail" ? "#eff6ff" : "#ffffff",
                        color: intentType === "retail" ? "#1559ac" : "#475569"
                      }}
                    >
                      Retail Direct
                    </button>
                  </div>
                </div>
              </form>

              {/* Requirement Questionnaire Dropdown/Modal Area */}
              {isQuestionnaireOpen && (
                <div
                  className="mt-4 pt-4 border-t duration-200"
                  style={{ borderColor: "#e2e8f0" }}
                >
                  <div
                    className="border rounded-xl p-3.5 mb-3"
                    style={{
                      backgroundColor: "#eff6ff",
                      borderColor: "#bfdbfe"
                    }}
                  >
                    <div className="flex items-center justify-between text-xs font-bold mb-1" style={{ color: "#1559ac" }}>
                      <span>Specify your requirements for &quot;{productName || "this product"}&quot;</span>
                      <button
                        type="button"
                        onClick={() => setIsQuestionnaireOpen(false)}
                        className="text-xs cursor-pointer"
                        style={{ color: "#64748b" }}
                      >
                        ✕ Close
                      </button>
                    </div>
                    <p className="text-[11px]" style={{ color: "#475569" }}>
                      Answer a few quick questions to get matched with the exact verified suppliers.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {/* Quantity */}
                    <div>
                      <label className="block font-bold mb-1" style={{ color: "#334155" }}>
                        Quantity Needed *
                      </label>
                      <div className="flex gap-1.5">
                        <input
                          type="number"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          className="w-2/3 px-3 py-2 border rounded-lg outline-none font-semibold"
                          style={{
                            backgroundColor: "#f8fafc",
                            borderColor: "#cbd5e1",
                            color: "#0f172a"
                          }}
                          placeholder="100"
                        />
                        <select
                          value={unit}
                          onChange={(e) => setUnit(e.target.value)}
                          className="w-1/3 px-2 py-2 border rounded-lg outline-none font-medium"
                          style={{
                            backgroundColor: "#f8fafc",
                            borderColor: "#cbd5e1",
                            color: "#0f172a"
                          }}
                        >
                          <option value="Piece(s)">Piece(s)</option>
                          <option value="Kg">Kg</option>
                          <option value="Sets">Sets</option>
                          <option value="Tons">Tons</option>
                          <option value="Boxes">Boxes</option>
                        </select>
                      </div>
                    </div>

                    {/* Target Budget */}
                    <div>
                      <label className="block font-bold mb-1" style={{ color: "#334155" }}>
                        Approx Target Budget
                      </label>
                      <input
                        type="text"
                        value={targetBudget}
                        onChange={(e) => setTargetBudget(e.target.value)}
                        placeholder="e.g. ₹500/piece or ₹50,000"
                        className="w-full px-3 py-2 border rounded-lg outline-none font-medium"
                        style={{
                          backgroundColor: "#f8fafc",
                          borderColor: "#cbd5e1",
                          color: "#0f172a"
                        }}
                      />
                    </div>

                    {/* Custom Specs */}
                    <div>
                      <label className="block font-bold mb-1" style={{ color: "#334155" }}>
                        Custom Branding / OEM
                      </label>
                      <select
                        value={customizationRequired}
                        onChange={(e) => setCustomizationRequired(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg outline-none font-medium"
                        style={{
                          backgroundColor: "#f8fafc",
                          borderColor: "#cbd5e1",
                          color: "#0f172a"
                        }}
                      >
                        <option value="Standard (No Custom)">Standard (No Custom)</option>
                        <option value="Custom Logo Printing">Custom Logo Printing</option>
                        <option value="Custom OEM Packaging">Custom OEM Packaging</option>
                        <option value="Full Custom Mold / Specs">Full Custom Mold / Specs</option>
                      </select>
                    </div>

                    {/* Delivery Location */}
                    <div>
                      <label className="block font-bold mb-1" style={{ color: "#334155" }}>
                        Delivery Destination
                      </label>
                      <input
                        type="text"
                        value={deliveryLocation}
                        onChange={(e) => setDeliveryLocation(e.target.value)}
                        placeholder="City, State"
                        className="w-full px-3 py-2 border rounded-lg outline-none font-medium"
                        style={{
                          backgroundColor: "#f8fafc",
                          borderColor: "#cbd5e1",
                          color: "#0f172a"
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-4 pt-3 flex items-center justify-between border-t" style={{ borderColor: "#f1f5f9" }}>
                    <span className="text-[11px]" style={{ color: "#64748b" }}>
                      100% Free • No sign-in required
                    </span>
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={handleFinalRedirect}
                      className="font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-md transition cursor-pointer"
                      style={{
                        backgroundColor: "#1559ac",
                        color: "#ffffff"
                      }}
                    >
                      {isSubmitting ? "Matching Suppliers..." : "Get Quotes & View Matches →"}
                    </button>
                  </div>
                </div>
              )}

              {/* Action Banner inside box */}
              {!isQuestionnaireOpen && (
                <div
                  className="mt-3.5 pt-3.5 border-t flex flex-wrap items-center justify-between gap-2 text-xs"
                  style={{ borderColor: "#f1f5f9" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-semibold" style={{ color: "#1e293b" }}>
                      Post requirement to verified suppliers:
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (!productName.trim()) setProductName("Industrial Machinery & Products");
                      setIsQuestionnaireOpen(true);
                    }}
                    className="font-bold px-4 py-2 rounded-xl transition shadow-xs flex items-center gap-1.5 cursor-pointer"
                    style={{
                      backgroundColor: "#78b30e",
                      color: "#ffffff"
                    }}
                  >
                    <span>Get Multiple Quotes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Popular Searches */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="font-medium" style={{ color: "#94a3b8" }}>
                Trending searches:
              </span>
              {popularKeywords.map((tag, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setProductName(tag);
                    setIsQuestionnaireOpen(true);
                  }}
                  className="px-2.5 py-1 rounded-full text-[11px] backdrop-blur-sm transition border cursor-pointer"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.12)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    color: "#ffffff"
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Partner / Trust Seal Strip */}
            <div className="mt-8 flex items-center justify-center gap-4 text-xs">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-md"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  borderColor: "rgba(255, 255, 255, 0.18)"
                }}
              >
                <BadgeCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-bold" style={{ color: "#ffffff" }}>
                  1PLACEE Verified Trade Seal
                </span>
                <span style={{ color: "#94a3b8" }}>• Certified ISO &amp; GST Exporters</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: HIGH-IMPACT B2B STATS CARD (REFERENCING IMAGE 2 & 4) */}
        {/* ========================================================================= */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 -mt-8 relative z-20">
          <div
            className="rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 border"
            style={{
              backgroundColor: "#1559ac",
              borderColor: "rgba(147, 197, 253, 0.35)",
              color: "#ffffff"
            }}
          >
            {/* Left Content */}
            <div className="lg:max-w-md text-center lg:text-left">
              <h2
                className="text-2xl sm:text-3xl font-black tracking-tight leading-snug"
                style={{ color: "#ffffff" }}
              >
                India&apos;s Largest Online B2B &amp; Direct Marketplace
              </h2>
              <p className="mt-2 text-sm font-normal" style={{ color: "#dbeafe" }}>
                Connecting 1.3Cr+ buyers with verified manufacturers and wholesale distributors.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setProductName("Bulk Requirement");
                    setIsQuestionnaireOpen(true);
                    window.scrollTo({ top: 100, behavior: "smooth" });
                  }}
                  className="font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition flex items-center gap-1.5 cursor-pointer"
                  style={{
                    backgroundColor: "#f97316",
                    color: "#ffffff"
                  }}
                >
                  <span>Post Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/sell"
                  className="font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition flex items-center gap-1.5 cursor-pointer"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#1559ac"
                  }}
                >
                  <span>Start Selling</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right 4-Grid Counter Stats Box (Image 2 style) */}
            <div
              className="rounded-2xl p-5 sm:p-6 shadow-md w-full lg:w-auto grid grid-cols-2 gap-6 sm:gap-8 border"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#e2e8f0",
                color: "#1e293b"
              }}
            >
              {/* Stat 1 */}
              <div className="border-r border-b pr-4 pb-4" style={{ borderColor: "#f1f5f9" }}>
                <div className="text-2xl sm:text-3xl font-black" style={{ color: "#1559ac" }}>
                  1.3Cr+
                </div>
                <div className="text-xs font-bold mt-1 uppercase tracking-wide" style={{ color: "#475569" }}>
                  Active Buyers
                </div>
              </div>

              {/* Stat 2 */}
              <div className="border-b pl-4 pb-4" style={{ borderColor: "#f1f5f9" }}>
                <div className="text-2xl sm:text-3xl font-black" style={{ color: "#f97316" }}>
                  52.4L+
                </div>
                <div className="text-xs font-bold mt-1 uppercase tracking-wide" style={{ color: "#475569" }}>
                  Verified Sellers
                </div>
              </div>

              {/* Stat 3 */}
              <div className="border-r pr-4 pt-4" style={{ borderColor: "#f1f5f9" }}>
                <div className="text-2xl sm:text-3xl font-black" style={{ color: "#10b981" }}>
                  2.6Cr+
                </div>
                <div className="text-xs font-bold mt-1 uppercase tracking-wide" style={{ color: "#475569" }}>
                  Products &amp; Services
                </div>
              </div>

              {/* Stat 4 */}
              <div className="pl-4 pt-4">
                <div className="text-2xl sm:text-3xl font-black" style={{ color: "#8b5cf6" }}>
                  21,000+
                </div>
                <div className="text-xs font-bold mt-1 uppercase tracking-wide" style={{ color: "#475569" }}>
                  Serviceable Pin-codes
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: WHY TRUST 1PLACEE? (MATCHING EXACT 4 COLORED TILES IN IMAGE 3) */}
        {/* ========================================================================= */}
        <section className="py-16 max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: "#0f172a" }}>
              Why Trust 1PLACEE Business?
            </h2>
            <p className="text-xs sm:text-sm mt-1 max-w-2xl" style={{ color: "#475569" }}>
              1PLACEE is built on India&apos;s most reliable B2B platform, connecting verified Indian suppliers to buyers across 190+ countries with complete transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Tile 1: Soft Green (Verified Exporters Only) */}
            <div
              className="rounded-2xl p-6 text-center hover:shadow-md transition border"
              style={{
                backgroundColor: "#eaf8ee",
                borderColor: "#c6edd0"
              }}
            >
              <div
                className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 shadow-sm"
                style={{ backgroundColor: "#34c759", color: "#ffffff" }}
              >
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <h3 className="text-base font-extrabold" style={{ color: "#0f172a" }}>
                Verified Exporters Only
              </h3>
              <p className="text-xs font-bold mt-1 underline cursor-pointer" style={{ color: "#248a3d" }}>
                1PLACEE Verified Supplier
              </p>
              <p className="text-xs mt-3 leading-relaxed" style={{ color: "#475569" }}>
                Connect with trusted and verified exporters screened by 1PLACEE to ensure reliable suppliers, genuine products, and secure international trade transactions.
              </p>
            </div>

            {/* Tile 2: Soft Cream/Yellow (Trust Assurance) */}
            <div
              className="rounded-2xl p-6 text-center hover:shadow-md transition border"
              style={{
                backgroundColor: "#fef9e7",
                borderColor: "#fceec0"
              }}
            >
              <div
                className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 shadow-sm"
                style={{ backgroundColor: "#f59e0b", color: "#ffffff" }}
              >
                <Award className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="text-base font-extrabold" style={{ color: "#0f172a" }}>
                Trust Assurance
              </h3>
              <p className="text-xs font-bold mt-1 underline cursor-pointer" style={{ color: "#b45309" }}>
                Member of Trust Certificate
              </p>
              <p className="text-xs mt-3 leading-relaxed" style={{ color: "#475569" }}>
                Suppliers with Trust Certificates demonstrate business authenticity, credibility, and commitment to secure and transparent global trade practices.
              </p>
            </div>

            {/* Tile 3: Soft Slate/Neutral (Legal Compliance) */}
            <div
              className="rounded-2xl p-6 text-center hover:shadow-md transition border"
              style={{
                backgroundColor: "#f4f2ee",
                borderColor: "#e5dfd5"
              }}
            >
              <div
                className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 shadow-sm"
                style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
              >
                <Search className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="text-base font-extrabold" style={{ color: "#0f172a" }}>
                Legal Compliance
              </h3>
              <p className="text-xs font-bold mt-1 underline cursor-pointer" style={{ color: "#1d4ed8" }}>
                GST Verified &amp; Audited
              </p>
              <p className="text-xs mt-3 leading-relaxed" style={{ color: "#475569" }}>
                GST verified suppliers ensure legal business compliance, authentic operations, and greater trust for buyers seeking secure domestic &amp; corporate partnerships.
              </p>
            </div>

            {/* Tile 4: Soft Blue (Export Authorization) */}
            <div
              className="rounded-2xl p-6 text-center hover:shadow-md transition border"
              style={{
                backgroundColor: "#e8f1fc",
                borderColor: "#c4dcfa"
              }}
            >
              <div
                className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 shadow-sm"
                style={{ backgroundColor: "#1559ac", color: "#ffffff" }}
              >
                <FileCheck2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="text-base font-extrabold" style={{ color: "#0f172a" }}>
                Export Authorization
              </h3>
              <p className="text-xs font-bold mt-1 underline cursor-pointer" style={{ color: "#1559ac" }}>
                IEC Code Verified
              </p>
              <p className="text-xs mt-3 leading-relaxed" style={{ color: "#475569" }}>
                IEC verified exporters are officially authorized for international trade, ensuring genuine export businesses and smooth cross-border transactions.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: DARK GREEN EUROPAGES FOOTER STATS COUNTERS (REFERENCING IMAGE 5) */}
        {/* ========================================================================= */}
        <section
          className="py-12 border-t"
          style={{
            backgroundColor: "#004d3d",
            borderColor: "#00382c",
            color: "#ffffff"
          }}
        >
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div
              className="text-center"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
                gap: "1.25rem",
                alignItems: "center"
              }}
            >
              {/* Europages Stat 1 */}
              <div>
                <div
                  className="w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.12)" }}
                >
                  <Building2 className="w-5 h-5 text-emerald-300" />
                </div>
                <div className="text-2xl sm:text-3xl font-black" style={{ color: "#ffffff" }}>
                  2.2 Million
                </div>
                <div className="text-xs font-semibold mt-1" style={{ color: "#a7f3d0" }}>
                  B2B Providers
                </div>
              </div>

              {/* Europages Stat 2 */}
              <div>
                <div
                  className="w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.12)" }}
                >
                  <Layers className="w-5 h-5 text-emerald-300" />
                </div>
                <div className="text-2xl sm:text-3xl font-black" style={{ color: "#ffffff" }}>
                  111
                </div>
                <div className="text-xs font-semibold mt-1" style={{ color: "#a7f3d0" }}>
                  Industry Sectors
                </div>
              </div>

              {/* Europages Stat 3 */}
              <div>
                <div
                  className="w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.12)" }}
                >
                  <Store className="w-5 h-5 text-emerald-300" />
                </div>
                <div className="text-2xl sm:text-3xl font-black" style={{ color: "#ffffff" }}>
                  670,000
                </div>
                <div className="text-xs font-semibold mt-1" style={{ color: "#a7f3d0" }}>
                  Products Listed
                </div>
              </div>

              {/* Europages Stat 4 */}
              <div>
                <div
                  className="w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.12)" }}
                >
                  <FileText className="w-5 h-5 text-emerald-300" />
                </div>
                <div className="text-2xl sm:text-3xl font-black" style={{ color: "#ffffff" }}>
                  1.3 Million
                </div>
                <div className="text-xs font-semibold mt-1" style={{ color: "#a7f3d0" }}>
                  Catalogs &amp; Specs
                </div>
              </div>

              {/* Europages Stat 5 */}
              <div>
                <div
                  className="w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.12)" }}
                >
                  <Users className="w-5 h-5 text-emerald-300" />
                </div>
                <div className="text-2xl sm:text-3xl font-black" style={{ color: "#ffffff" }}>
                  1 Million+
                </div>
                <div className="text-xs font-semibold mt-1" style={{ color: "#a7f3d0" }}>
                  Buyers Per Month
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => {
                  setProductName("Wholesale Sourcing");
                  setIsQuestionnaireOpen(true);
                  window.scrollTo({ top: 100, behavior: "smooth" });
                }}
                className="font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition inline-flex items-center gap-2 cursor-pointer"
                style={{
                  backgroundColor: "#78b30e",
                  color: "#ffffff"
                }}
              >
                <span>Get Multiple Quotes from Verified Suppliers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: DUAL ACTION CARDS (B2B WHOLESALE vs B2C RETAIL CATELOGUE) */}
        {/* ========================================================================= */}
        <section className="py-14 max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: B2B Wholesale */}
            <div
              className="rounded-3xl p-7 sm:p-8 relative overflow-hidden shadow-lg border"
              style={{
                background: "linear-gradient(135deg, #103e7a 0%, #1559ac 100%)",
                borderColor: "#1d4ed8",
                color: "#ffffff"
              }}
            >
              <div className="relative z-10">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-3"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", color: "#ffffff" }}
                >
                  B2B Wholesale Portal
                </span>
                <h3 className="text-xl sm:text-2xl font-black mb-2" style={{ color: "#ffffff" }}>
                  Source Direct from Verified Factories
                </h3>
                <p className="text-xs sm:text-sm mb-6 max-w-md" style={{ color: "#dbeafe" }}>
                  Bulk order discounts, custom OEM manufacturing, MOQ price slabs, and instant RFQ quotation responses.
                </p>
                <Link
                  href="/b2b"
                  className="font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition inline-flex items-center gap-2 cursor-pointer"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#1559ac"
                  }}
                >
                  <span>Explore B2B Wholesale</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
              <Building2 className="w-44 h-44 absolute -right-6 -bottom-6 text-white/10 pointer-events-none" />
            </div>

            {/* Card 2: B2C Retail & GST Invoicing */}
            <div
              className="rounded-3xl p-7 sm:p-8 relative overflow-hidden shadow-lg border"
              style={{
                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                borderColor: "#334155",
                color: "#ffffff"
              }}
            >
              <div className="relative z-10">
                <span
                  className="px-3 py-1 border rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-3"
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    borderColor: "rgba(16, 185, 129, 0.4)",
                    color: "#6ee7b7"
                  }}
                >
                  Retail &amp; Single Piece Orders
                </span>
                <h3 className="text-xl sm:text-2xl font-black mb-2" style={{ color: "#ffffff" }}>
                  Buy Direct with Instant GST Invoice
                </h3>
                <p className="text-xs sm:text-sm mb-6 max-w-md" style={{ color: "#cbd5e1" }}>
                  Browse consumer electronics, groceries, apparel, and home essentials with fast door delivery and tax credit receipts.
                </p>
                <Link
                  href="/categories"
                  className="font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition inline-flex items-center gap-2 cursor-pointer"
                  style={{
                    backgroundColor: "#10b981",
                    color: "#ffffff"
                  }}
                >
                  <span>Browse All Retail Categories</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
              <Layers className="w-44 h-44 absolute -right-6 -bottom-6 text-white/10 pointer-events-none" />
            </div>
          </div>
        </section>
      </main>
      )}

      {/* Global Business Footer */}
      <BusinessFooter />
    </div>
  );
}
