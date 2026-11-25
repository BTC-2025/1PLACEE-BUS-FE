"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { BusinessFooter } from "@/components/BusinessFooter";
import {
  ShieldCheck,
  Star,
  ChevronRight,
  ChevronDown,
  Search,
  SlidersHorizontal,
  Package,
} from "lucide-react";

interface ListingProduct {
  id: string;
  title: string;
  price: string;
  moq: string;
  sold: string;
  supplier: string;
  years: string;
  country: string;
  rating: string;
  reviews: number;
  tradeAssurance: boolean;
  verified: boolean;
  paidSample: boolean;
}

function generateProductsForSubcat(title: string): ListingProduct[] {
  const suppliers = [
    { name: "Apex Craft & Export Co., Ltd.", years: "12 yrs", country: "India", rating: "4.8", reviews: 142 },
    { name: "Yiwu Yongge Trading Co., Ltd.", years: "8 yrs", country: "China", rating: "4.5", reviews: 225 },
    { name: "Chennai Industrial Mfg. Pvt Ltd", years: "15 yrs", country: "India", rating: "4.9", reviews: 318 },
    { name: "Guangzhou Happybuy Co., Limited", years: "6 yrs", country: "China", rating: "4.7", reviews: 84 },
    { name: "Shanghai Tianzi Enterprise Ltd.", years: "10 yrs", country: "China", rating: "4.4", reviews: 63 },
    { name: "Vertex Global Sourcing Hub", years: "9 yrs", country: "India", rating: "4.6", reviews: 195 },
    { name: "Quanzhou Chongchi Supply Chain", years: "5 yrs", country: "China", rating: "4.6", reviews: 49 },
    { name: "Foshan Eternity Tech Co., Ltd.", years: "7 yrs", country: "India", rating: "4.7", reviews: 112 },
  ];

  const variants = [
    { prefix: "Wholesale Custom", suffix: "Heavy-Duty Commercial Grade", price: "₹450 - ₹890", moq: "50", sold: "1,240 sold" },
    { prefix: "OEM / ODM Factory Direct", suffix: "Export Quality Bulk Pack", price: "₹290 - ₹540", moq: "100", sold: "890 sold" },
    { prefix: "2026 New Style", suffix: "High Durability Industrial Series", price: "₹720 - ₹1,150", moq: "20", sold: "450 sold" },
    { prefix: "Premium", suffix: "ISO Certified Standard Edition", price: "₹180 - ₹360", moq: "200", sold: "3,100 sold" },
    { prefix: "Customized Logo", suffix: "Retail & Wholesale Ready", price: "₹520 - ₹980", moq: "30", sold: "620 sold" },
    { prefix: "Multi-Color", suffix: "Eco-Friendly Material Batch", price: "₹340 - ₹610", moq: "150", sold: "1,580 sold" },
    { prefix: "Pro Series", suffix: "Precision Tested Bulk Lot", price: "₹890 - ₹1,450", moq: "10", sold: "275 sold" },
    { prefix: "Value Pack", suffix: "Fast Dispatch Warehouse Stock", price: "₹150 - ₹280", moq: "500", sold: "4,820 sold" },
  ];

  return variants.map((v, idx) => {
    const sup = suppliers[idx % suppliers.length];
    return {
      id: "sewing-needles-hand",
      title: `${v.prefix} ${title} — ${v.suffix}`,
      price: v.price,
      moq: `${v.moq} units`,
      sold: v.sold,
      supplier: sup.name,
      years: sup.years,
      country: sup.country,
      rating: sup.rating,
      reviews: sup.reviews,
      tradeAssurance: idx % 3 !== 2,
      verified: idx % 2 === 0 || idx === 1,
      paidSample: idx % 2 === 0,
    };
  });
}

export default function B2BSubcategoryListingPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const subcatSlug = typeof params?.subcat === "string" ? params.subcat : "products";
  const displayTitle =
    searchParams.get("title") ||
    subcatSlug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  const allProducts = generateProductsForSubcat(displayTitle);

  // Filter States
  const [tradeAssuranceOnly, setTradeAssuranceOnly] = useState(false);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [paidSampleOnly, setPaidSampleOnly] = useState(false);
  const [maxMoq, setMaxMoq] = useState("");
  const [appliedMaxMoq, setAppliedMaxMoq] = useState<number | null>(null);
  const [countrySearch, setCountrySearch] = useState("");
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [openAttr, setOpenAttr] = useState<string | null>(null);

  const countries = ["India", "China", "Bangladesh", "Japan", "Malaysia", "Vietnam"];
  const filteredCountries = countries.filter((c) =>
    c.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const filteredProducts = allProducts.filter((p) => {
    if (tradeAssuranceOnly && !p.tradeAssurance) return false;
    if (verifiedOnly && !p.verified) return false;
    if (paidSampleOnly && !p.paidSample) return false;
    if (selectedCountries.length > 0 && !selectedCountries.includes(p.country)) {
      return false;
    }
    if (appliedMaxMoq !== null) {
      const num = parseInt(p.moq.replace(/[^0-9]/g, ""), 10);
      if (!isNaN(num) && num > appliedMaxMoq) return false;
    }
    return true;
  });

  const subCategories = [
    displayTitle,
    `Custom ${displayTitle}`,
    `Industrial ${displayTitle}`,
    `Wholesale ${displayTitle}`,
    `OEM ${displayTitle}`,
    `Export Grade ${displayTitle}`,
  ];

  const attributeAccordions = [
    "Material",
    "Color",
    "Feature",
    "Season / Usage",
    "Certification",
    "Packaging",
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans text-slate-800">
      <BusinessNavbar />

      <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-6 py-6 space-y-5">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/b2b" className="hover:text-[#0e0f89] transition">
            1PLACEE B2B Hub
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-bold">{displayTitle}</span>
        </nav>

        {/* Page Title */}
        <div className="flex flex-wrap items-baseline gap-2.5">
          <h1 className="text-xl sm:text-2xl font-black text-slate-900">
            {displayTitle}
          </h1>
          <span className="text-xs sm:text-sm text-slate-500 font-medium">
            (5,940+ products available)
          </span>
        </div>

        {/* Left Filter Sidebar + Right Product Grid */}
        <div
          style={{ display: "flex", flexDirection: "row", gap: "24px", alignItems: "flex-start" }}
          className="w-full"
        >
          {/* LEFT FILTER SIDEBAR (Alibaba Style) */}
          <aside
            style={{ width: "250px", minWidth: "250px" }}
            className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-5 shrink-0 hidden md:block"
          >
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <SlidersHorizontal className="w-4 h-4 text-[#0e0f89]" />
              <span className="text-sm font-black text-slate-900">Filters</span>
            </div>

            {/* Categories */}
            <div className="space-y-1.5">
              <span className="text-xs font-black text-slate-900 block">
                Categories
              </span>
              <ul className="space-y-1 text-xs text-slate-600">
                {subCategories.map((sc, i) => (
                  <li key={sc}>
                    <Link
                      href={`/b2b/listing/${encodeURIComponent(sc.toLowerCase().replace(/\s+/g, "-"))}?title=${encodeURIComponent(sc)}`}
                      className={`block py-1 hover:text-[#0e0f89] transition ${
                        i === 0 ? "font-black text-[#0e0f89]" : "font-medium"
                      }`}
                    >
                      {sc}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Supplier types */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <span className="text-xs font-black text-slate-900 block">
                Supplier types
              </span>
              <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={tradeAssuranceOnly}
                  onChange={(e) => setTradeAssuranceOnly(e.target.checked)}
                  className="accent-[#0e0f89]"
                />
                <span className="font-semibold">Trade Assurance</span>
              </label>
              <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={verifiedOnly}
                  onChange={(e) => setVerifiedOnly(e.target.checked)}
                  className="accent-[#0e0f89]"
                />
                <span className="font-semibold">Verified Supplier</span>
              </label>
            </div>

            {/* Product types */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <span className="text-xs font-black text-slate-900 block">
                Product types
              </span>
              <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={paidSampleOnly}
                  onChange={(e) => setPaidSampleOnly(e.target.checked)}
                  className="accent-[#0e0f89]"
                />
                <span className="font-semibold">Paid samples</span>
              </label>
            </div>

            {/* Min. order */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <span className="text-xs font-black text-slate-900 block">
                Min. order
              </span>
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  placeholder="Max"
                  value={maxMoq}
                  onChange={(e) => setMaxMoq(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-300"
                />
                <button
                  type="button"
                  onClick={() =>
                    setAppliedMaxMoq(maxMoq ? parseInt(maxMoq, 10) : null)
                  }
                  style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer"
                >
                  OK
                </button>
              </div>
            </div>

            {/* Supplier country/region */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <span className="text-xs font-black text-slate-900 block">
                Supplier country/region
              </span>
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
                <input
                  type="text"
                  placeholder="Search country"
                  value={countrySearch}
                  onChange={(e) => setCountrySearch(e.target.value)}
                  className="w-full pl-7 pr-2 py-1.5 text-xs rounded-lg border border-slate-300"
                />
              </div>
              <div className="space-y-1.5 max-h-36 overflow-y-auto pt-1">
                {filteredCountries.map((c) => (
                  <label
                    key={c}
                    className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCountries.includes(c)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedCountries([...selectedCountries, c]);
                        } else {
                          setSelectedCountries(
                            selectedCountries.filter((x) => x !== c)
                          );
                        }
                      }}
                      className="accent-[#0e0f89]"
                    />
                    <span>{c}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Attribute Accordions */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              {attributeAccordions.map((attr) => (
                <div key={attr} className="border-b border-slate-100 pb-2">
                  <button
                    type="button"
                    onClick={() => setOpenAttr(openAttr === attr ? null : attr)}
                    className="w-full flex items-center justify-between text-xs font-bold text-slate-800 cursor-pointer py-1"
                  >
                    <span>{attr}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                        openAttr === attr ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openAttr === attr && (
                    <div className="pt-1.5 pl-1 space-y-1 text-[11px] text-slate-600">
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input type="checkbox" className="accent-[#0e0f89]" />
                        <span>Standard Commercial</span>
                      </label>
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input type="checkbox" className="accent-[#0e0f89]" />
                        <span>Heavy-Duty Industrial</span>
                      </label>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>

          {/* RIGHT PRODUCT CARDS GRID (4 Columns) */}
          <div style={{ flex: 1 }} className="min-w-0">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
                gap: "16px",
              }}
            >
              {filteredProducts.map((item, idx) => (
                <Link
                  key={idx}
                  href={`/b2b/product/${item.id}`}
                  className="bg-white rounded-2xl border border-slate-200 p-3.5 hover:shadow-md hover:border-[#0e0f89] transition flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-full h-44 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center p-4 text-center">
                      <Package className="w-12 h-12 text-[#0e0f89] opacity-80 group-hover:scale-110 transition-transform" />
                      <span className="text-[11px] font-bold text-slate-500 mt-2 line-clamp-1">
                        {displayTitle}
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-[13px] font-bold text-slate-800 line-clamp-2 mt-3 group-hover:text-[#0e0f89] leading-snug">
                      {item.title}
                    </h3>

                    <div className="mt-2">
                      <span className="text-base font-black text-slate-900 block">
                        {item.price}
                      </span>
                      <span className="text-[11px] text-slate-500 font-semibold">
                        MOQ: {item.moq} • {item.sold}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 space-y-1">
                    <span className="text-[11px] font-bold text-slate-700 underline decoration-slate-300 block truncate">
                      {item.supplier}
                    </span>
                    <div className="flex items-center justify-between text-[10px] text-slate-500">
                      <span className="flex items-center gap-1 font-bold text-blue-700">
                        {item.verified && <ShieldCheck className="w-3 h-3" />}
                        {item.years} • {item.country}
                      </span>
                      <span className="flex items-center gap-0.5 font-bold text-amber-600">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        {item.rating}/5.0 ({item.reviews})
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <BusinessFooter />
    </div>
  );
}

