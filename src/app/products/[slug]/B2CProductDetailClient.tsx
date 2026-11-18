"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Star,
  Share2,
  Heart,
  CheckCircle,
  MapPin,
  Lock,
  Sparkles,
  ShieldCheck,
  Truck,
  RotateCcw,
  Plus,
  Minus,
  Check,
  ChevronRight,
  Info,
  Building2,
  CreditCard,
  FileText,
  BadgeCheck,
} from "lucide-react";
import { ALL_PRODUCTS, UniversalProduct } from "@/data/allProductsData";
import { RelatedProductsCarousel } from "@/components/RelatedProductsCarousel";
import { CustomerReviewsSection } from "@/components/CustomerReviewsSection";

export function B2CProductDetailClient({ slug }: { slug: string }) {
  // Retrieve product from Universal Catalog, fallback to iPhone 18 Pro
  const product: UniversalProduct =
    ALL_PRODUCTS[slug] ||
    ALL_PRODUCTS["apple-iphone-18-pro"] || {
      id: slug,
      slug,
      title: "Apple iPhone 18 Pro (256GB, Desert Titanium) - 5G Dual SIM",
      brand: "Apple",
      category: "Smartphones",
      department: "Electronics & Mobiles",
      price: 84690,
      originalPrice: 102500,
      discount: "17% off",
      rating: 4.9,
      ratingCount: 3492,
      imageUrl: "/banners/noon-iphone-main.png",
      galleryImages: [
        "/banners/noon-iphone-main.png",
        "/banners/iphone-noon-1.jpg",
        "/banners/iphone-noon-2.jpg",
      ],
      description: "Apple iPhone 18 Pro flagship smartphone with advanced A18 Pro Bionic chip, 5G capabilities, titanium frame.",
      bulletPoints: ["A18 Pro Bionic Processor", "Super Retina XDR Display", "Pro Camera System"],
      inStock: true,
      isPrimeEligible: true,
      deliveryDate: "Tomorrow by 11 AM",
      specs: [
        { label: "Brand", value: "Apple" },
        { label: "Model", value: "iPhone 18 Pro" },
      ],
    };

  // Determine category mode for tailored UI
  const isMobile =
    product.category.toLowerCase().includes("mobile") ||
    product.category.toLowerCase().includes("smartphone") ||
    product.brand.toLowerCase() === "apple" ||
    product.brand.toLowerCase() === "samsung" ||
    slug.includes("iphone");

  const isWatch =
    product.category.toLowerCase().includes("watch") ||
    product.department.toLowerCase().includes("watch") ||
    slug.includes("watch") ||
    slug.includes("casio") ||
    slug.includes("citizen") ||
    slug.includes("tissot") ||
    slug.includes("seiko");

  const isCookware =
    product.category.toLowerCase().includes("cookware") ||
    product.department.toLowerCase().includes("kitchen") ||
    slug.includes("fissman") ||
    slug.includes("oms") ||
    slug.includes("pan") ||
    slug.includes("pot");

  const isPerfume =
    product.category.toLowerCase().includes("perfume") ||
    product.department.toLowerCase().includes("fragrance") ||
    slug.includes("eros") ||
    slug.includes("parfum") ||
    slug.includes("armani");

  const isEyewear =
    product.category.toLowerCase().includes("eyewear") ||
    product.category.toLowerCase().includes("sunglass") ||
    slug.includes("sunglass") ||
    slug.includes("prada") ||
    slug.includes("tommy");

  // Gallery
  const gallery =
    product.galleryImages && product.galleryImages.length > 0
      ? product.galleryImages
      : [product.imageUrl];

  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    isWatch
      ? "Stainless Silver"
      : isCookware
      ? "Deep Granite Black"
      : isPerfume
      ? "Standard Flacon"
      : "Desert Titanium"
  );
  const [selectedStorage, setSelectedStorage] = useState("256 GB");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [selectedWarranty, setSelectedWarranty] = useState<string | null>(null);

  // Price calculation
  const exclGstPrice = Math.round(product.price / 1.18);
  const inclGstPrice = product.price;

  // Options variants tailored per category
  const colorOptions = isMobile
    ? [
        { name: "Desert Titanium", hex: "#c5b6a3", bg: "bg-[#c5b6a3]" },
        { name: "Natural Titanium", hex: "#9f9f98", bg: "bg-[#9f9f98]" },
        { name: "White Titanium", hex: "#eaeaea", bg: "bg-[#eaeaea]" },
        { name: "Black Titanium", hex: "#3c3b37", bg: "bg-[#3c3b37]" },
      ]
    : isWatch
    ? [
        { name: "Silver Steel", hex: "#d1d5db", bg: "bg-gray-300" },
        { name: "Rose Gold", hex: "#fb7185", bg: "bg-rose-400" },
        { name: "Matte Black", hex: "#1f2937", bg: "bg-gray-800" },
      ]
    : isCookware
    ? [
        { name: "Seagreen Series", hex: "#0d9488", bg: "bg-teal-600" },
        { name: "Granite Black", hex: "#111827", bg: "bg-gray-900" },
        { name: "Copper Brown", hex: "#b45309", bg: "bg-amber-700" },
      ]
    : [
        { name: "Standard Edition", hex: "#3b82f6", bg: "bg-blue-500" },
        { name: "Collector's Pack", hex: "#a855f7", bg: "bg-purple-500" },
      ];

  const sizeOrStorageLabel = isMobile
    ? "Storage"
    : isCookware
    ? "Capacity"
    : isWatch
    ? "Dial Case Size"
    : isPerfume
    ? "Volume"
    : isEyewear
    ? "Frame Size"
    : "Size / Variant";

  const sizeOrStorageOptions = isMobile
    ? ["128 GB", "256 GB", "512 GB", "1 TB"]
    : isCookware
    ? ["2.5 L", "4.5 L", "8.0 L", "Family Set"]
    : isWatch
    ? ["38 mm", "40 mm", "42 mm", "45 mm"]
    : isPerfume
    ? ["50 ml", "100 ml", "200 ml"]
    : ["Standard Fit", "Wide Fit"];

  return (
    <div className="w-full max-w-[1500px] mx-auto px-3 sm:px-5 py-4 space-y-6 select-none">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 font-medium overflow-x-auto whitespace-nowrap pb-1">
        <Link href="/b2c-gst" className="hover:text-blue-600">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <Link href="/b2c-gst" className="hover:text-blue-600">{product.department || "B2C Store"}</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <Link href="/b2c-gst" className="hover:text-blue-600">{product.category}</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="text-slate-800 font-semibold truncate max-w-[280px] sm:max-w-md">
          {product.title}
        </span>
      </nav>

      {/* Main Top Product Showcase (Gallery + Main Details + BuyBox) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs">
        {/* Left Thumbnails & Hero Image (5 cols) */}
        <div className="lg:col-span-5 flex flex-col-reverse sm:flex-row gap-4">
          {/* Thumbnails */}
          {gallery.length > 1 && (
            <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-y-auto max-h-[460px] scrollbar-none">
              {gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(idx)}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl border-2 p-1 bg-slate-50 flex items-center justify-center shrink-0 transition-all cursor-pointer ${
                    selectedImg === idx ? "border-[#1559ac] shadow-xs" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <img src={img} alt="Thumb" className="max-h-full max-w-full object-contain" />
                </button>
              ))}
            </div>
          )}

          {/* Main Selected Image */}
          <div className="flex-1 bg-slate-50/70 rounded-2xl p-6 flex items-center justify-center relative min-h-[360px] sm:min-h-[460px] border border-slate-100 group">
            <img
              src={gallery[selectedImg] || product.imageUrl}
              alt={product.title}
              className="max-h-[360px] sm:max-h-[420px] max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
            {/* Wishlist & Share buttons */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button
                aria-label="Wishlist"
                className="w-9 h-9 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center text-slate-600 hover:text-red-500 hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <Heart className="w-4 h-4" />
              </button>
              <button
                aria-label="Share"
                className="w-9 h-9 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Center Product Options & Details (4 cols) */}
        <div className="lg:col-span-4 flex flex-col space-y-4">
          <div>
            <span className="text-xs font-bold text-[#1559ac] uppercase tracking-wider">
              {product.brand} · {product.category}
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mt-1">
              {product.title}
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              SKU: {product.id.toUpperCase()} | Category: {product.department}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md text-xs font-bold gap-1 border border-emerald-200">
              <span>{product.rating || 4.7}</span>
              <Star className="w-3 h-3 fill-emerald-600 stroke-none" />
            </div>
            <span className="text-xs text-slate-500 font-medium">
              {(product.ratingCount || 1200).toLocaleString()} Ratings &amp; Verified Reviews
            </span>
          </div>

          {/* Pricing Highlight with GST details */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/90 space-y-1.5">
            <div className="text-xs text-slate-500 line-through">
              M.R.P.: <span className="font-semibold">₹{product.originalPrice.toLocaleString("en-IN")}.00</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#b12704] flex items-baseline gap-2">
              <span>Price: ₹{exclGstPrice.toLocaleString("en-IN")}</span>
              <span className="text-xs font-bold text-slate-600">excl. GST</span>
            </div>
            <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <span>₹{inclGstPrice.toLocaleString("en-IN")}.00</span>
              <span className="text-xs font-semibold text-emerald-700">incl. 18% GST</span>
            </div>

            {/* Fulfilled Badge */}
            <div className="pt-1 flex items-center gap-2">
              <span className="bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                <span>1P</span>
                <span>Fulfilled</span>
              </span>
              <span className="text-xs font-bold text-emerald-600">
                You Save: ₹{(product.originalPrice - product.price).toLocaleString("en-IN")} ({product.discount})
              </span>
            </div>

            <div className="text-[11px] text-slate-500 pt-1">
              Inclusive of all taxes · <span className="text-blue-700 font-medium">GST Invoice Available for Input Tax Credit</span>
            </div>
            <div className="text-xs font-semibold text-slate-700 pt-1">
              EMI available on select credit cards <span className="text-blue-600 cursor-pointer hover:underline">Options ▾</span>
            </div>
          </div>

          {/* Color / Variant Selection */}
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-slate-700">
              Colour / Finish: <strong className="text-slate-900">{selectedColor}</strong>
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {colorOptions.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium cursor-pointer transition-all ${
                    selectedColor === c.name
                      ? "border-[#1559ac] bg-blue-50/50 text-[#1559ac] ring-1 ring-[#1559ac]"
                      : "border-slate-200 hover:border-slate-300 text-slate-700"
                  }`}
                >
                  <span className={`w-3.5 h-3.5 rounded-full ${c.bg} border border-slate-300`} />
                  <span>{c.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Storage / Size Selection */}
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-slate-700">
              {sizeOrStorageLabel}: <strong className="text-slate-900">{selectedStorage}</strong>
            </span>
            <div className="grid grid-cols-4 gap-2">
              {sizeOrStorageOptions.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedStorage(s)}
                  className={`py-1.5 text-center rounded-lg border text-xs font-semibold cursor-pointer transition-all ${
                    selectedStorage === s
                      ? "border-[#1559ac] bg-blue-50/50 text-[#1559ac] ring-1 ring-[#1559ac]"
                      : "border-slate-200 hover:border-slate-300 text-slate-700"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Bullet Points Highlights */}
          {product.bulletPoints && product.bulletPoints.length > 0 && (
            <div className="pt-2 border-t border-slate-100 space-y-1">
              <span className="text-xs font-bold text-slate-900 block">Key Highlights:</span>
              <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                {product.bulletPoints.slice(0, 4).map((pt, idx) => (
                  <li key={idx} className="leading-snug">{pt}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right BuyBox & Seller Info (3 cols) */}
        <div className="lg:col-span-3 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-200 lg:pl-6 pt-4 lg:pt-0 space-y-4">
          <div className="space-y-3">
            {/* Price in BuyBox */}
            <div>
              <div className="text-2xl font-black text-slate-950">₹{inclGstPrice.toLocaleString("en-IN")}.00</div>
              <div className="text-xs font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
                <Check className="w-3.5 h-3.5" />
                <span>In stock</span>
              </div>
            </div>

            {/* Delivery address */}
            <div className="text-xs text-slate-600 space-y-1">
              <div className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Deliver to <strong>Chennai 600001</strong></span>
              </div>
              <p className="text-[11px] text-emerald-700 font-semibold pl-5">
                {product.deliveryDate || "Tomorrow by 11 AM"}
              </p>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs font-semibold text-slate-700">Quantity:</span>
              <div className="flex items-center border border-slate-300 rounded-lg">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-2.5 py-1 text-slate-600 hover:bg-slate-100 cursor-pointer font-bold"
                >
                  -
                </button>
                <span className="px-3 py-1 text-xs font-bold text-slate-900">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-2.5 py-1 text-slate-600 hover:bg-slate-100 cursor-pointer font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={() => {
                  setAdded(true);
                  setTimeout(() => setAdded(false), 2500);
                }}
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-[#ffd814] hover:bg-[#f7ca00] text-slate-950 transition-colors cursor-pointer shadow-xs"
              >
                {added ? "✓ Added to Cart!" : "Add to Cart"}
              </button>
              <button className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-[#ffa41c] hover:bg-[#fa8900] text-slate-950 transition-colors cursor-pointer shadow-xs">
                Buy Now
              </button>
            </div>

            {/* Assurance & Trust Badges */}
            <div className="pt-3 border-t border-slate-100 space-y-2 text-[11px] text-slate-600">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Secure Transaction &amp; 100% Buyer Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Ships from: <strong>1Placee Business Hub</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-600 shrink-0" />
                <span>GST Invoicing: <strong>Verified Seller with ITC</strong></span>
              </div>
            </div>
          </div>

          {/* Privilege Callout */}
          <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200/80 text-xs text-blue-900 space-y-1">
            <span className="font-bold flex items-center gap-1">
              <BadgeCheck className="w-3.5 h-3.5 text-blue-700" />
              1Placee Privilege Protection
            </span>
            <p className="text-[11px] text-blue-700 leading-snug">
              Every purchase includes verified genuine manufacturer warranty and instant input tax credit invoice.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Protection Warranty Cards Section */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <h3 className="text-sm sm:text-base font-black tracking-wide text-slate-900 uppercase">
              GET ADDITIONAL PROTECTION
            </h3>
            <span className="bg-[#e11d48] text-white text-[10px] font-black px-1.5 py-0.5 rounded shadow-2xs">
              NEW
            </span>
          </div>
          <span className="text-xs text-slate-500 font-semibold cursor-pointer hover:text-slate-700">
            Quick claim support
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Extended Warranty 1 */}
          <div
            onClick={() => setSelectedWarranty(selectedWarranty === "1yr" ? null : "1yr")}
            className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
              selectedWarranty === "1yr"
                ? "border-[#1559ac] bg-blue-50/30 ring-1 ring-[#1559ac] shadow-xs"
                : "border-slate-200 hover:border-slate-300 bg-white"
            }`}
          >
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <span className="text-[10px] font-black text-[#1559ac] uppercase block tracking-wider">
                    1 YEAR
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 flex items-center gap-1">
                    {isWatch
                      ? "1 Year Watch Movement & Dial Protection Plan >"
                      : isCookware
                      ? "1 Year Surface Coating & Handle Protection Plan >"
                      : "1 Year Extended Protection Plan >"}
                  </span>
                </div>
              </div>

              <div className="space-y-1 text-[11px] text-slate-600 pl-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Active after standard brand warranty</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>
                    {isWatch
                      ? "Covers glass crack, gear movement & water ingress"
                      : isCookware
                      ? "Covers coating peel, loose rivets & thermal warping"
                      : "Covers damage, electrical & mechanical faults"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500 font-bold">∞</span >
                  <span>Get unlimited verified claims</span>
                </div>
              </div>

              <div className="text-sm font-black text-slate-950 pt-1">
                ₹227.00
              </div>
            </div>

            <button
              type="button"
              className={`px-4 py-1.5 text-xs font-black rounded-xl border transition-all cursor-pointer ${
                selectedWarranty === "1yr"
                  ? "bg-[#1559ac] text-white border-[#1559ac] shadow-2xs"
                  : "border-[#1559ac] text-[#1559ac] hover:bg-blue-50 bg-white"
              }`}
            >
              {selectedWarranty === "1yr" ? "SELECTED" : "SELECT"}
            </button>
          </div>

          {/* Extended Warranty 2 */}
          <div
            onClick={() => setSelectedWarranty(selectedWarranty === "2yr" ? null : "2yr")}
            className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
              selectedWarranty === "2yr"
                ? "border-[#1559ac] bg-blue-50/30 ring-1 ring-[#1559ac] shadow-xs"
                : "border-slate-200 hover:border-slate-300 bg-white"
            }`}
          >
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <span className="text-[10px] font-black text-[#1559ac] uppercase block tracking-wider">
                    2 YEARS
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 flex items-center gap-1">
                    {isWatch
                      ? "2 Years Comprehensive Watch Care & Servicing >"
                      : isCookware
                      ? "2 Years Total Cookware Replacement Guarantee >"
                      : "2 Years Extended Protection Plan >"}
                  </span>
                </div>
              </div>

              <div className="space-y-1 text-[11px] text-slate-600 pl-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Active after standard brand warranty</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>
                    {isWatch
                      ? "Original sapphire crystal & Swiss/Japanese caliber repair"
                      : isCookware
                      ? "Doorstep exchange with genuine manufacturer replacement"
                      : "Complete breakdown & component replacement"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500 font-bold">∞</span >
                  <span>Get unlimited verified claims</span>
                </div>
              </div>

              <div className="text-sm font-black text-slate-950 pt-1">
                ₹374.00
              </div>
            </div>

            <button
              type="button"
              className={`px-4 py-1.5 text-xs font-black rounded-xl border transition-all cursor-pointer ${
                selectedWarranty === "2yr"
                  ? "bg-[#1559ac] text-white border-[#1559ac] shadow-2xs"
                  : "border-[#1559ac] text-[#1559ac] hover:bg-blue-50 bg-white"
              }`}
            >
              {selectedWarranty === "2yr" ? "SELECTED" : "SELECT"}
            </button>
          </div>
        </div>
      </div>

      {/* Specifications Table matching exact product specs */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-3">
        <h3 className="text-base font-bold text-slate-900">
          SPECIFICATIONS ({product.category.toUpperCase()})
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-xs">
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500">Brand</span>
            <span className="font-semibold text-slate-800">{product.brand}</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500">Category</span>
            <span className="font-semibold text-slate-800">{product.category}</span>
          </div>
          {product.specs &&
            product.specs.map((item, idx) => (
              <div key={idx} className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">{item.label}</span>
                <span className="font-semibold text-slate-800">{item.value}</span>
              </div>
            ))}
        </div>
      </div>

      {/* Related Products Carousel */}
      <div>
        <RelatedProductsCarousel
          category={product.category}
          title={`Similar ${product.category} Recommendations`}
        />
      </div>

      {/* Customer Reviews */}
      <div>
        <CustomerReviewsSection
          category={product.category}
          productImage={product.imageUrl}
          productImages={product.galleryImages}
        />
      </div>
    </div>
  );
}
