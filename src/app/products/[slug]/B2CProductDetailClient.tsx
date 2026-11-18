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
import { RelatedProductsCarousel } from "@/components/RelatedProductsCarousel";
import { CustomerReviewsSection } from "@/components/CustomerReviewsSection";

export function B2CProductDetailClient({ slug }: { slug: string }) {
  // Gallery images matching user screenshots
  const gallery = [
    "/banners/noon-iphone-main.png",
    "/banners/iphone-noon-1.jpg",
    "/banners/iphone-noon-2.jpg",
    "/banners/iphone-noon-3.jpg",
    "/banners/iphone-noon-4.jpg",
    "/banners/iphone-noon-5.jpg",
  ];

  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Desert Titanium");
  const [selectedStorage, setSelectedStorage] = useState("256 GB");
  const [selectedVersion, setSelectedVersion] = useState("Middle East Version");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [selectedWarranty, setSelectedWarranty] = useState<string | null>(null);

  // Bundle Items Checkboxes
  const [bundle, setBundle] = useState({
    phone: true,
    adapter: true,
    protector: true,
    case: true,
  });

  const bundleTotal =
    (bundle.phone ? 71771.19 : 0) +
    (bundle.adapter ? 1900 : 0) +
    (bundle.protector ? 750 : 0) +
    (bundle.case ? 1450 : 0);

  const colors = [
    { name: "Desert Titanium", hex: "#c5b6a3", bg: "bg-[#c5b6a3]" },
    { name: "Natural Titanium", hex: "#9f9f98", bg: "bg-[#9f9f98]" },
    { name: "White Titanium", hex: "#eaeaea", bg: "bg-[#eaeaea]" },
    { name: "Black Titanium", hex: "#3c3b37", bg: "bg-[#3c3b37]" },
  ];

  const storages = ["128 GB", "256 GB", "512 GB", "1 TB"];
  const versions = ["Middle East Version", "International Version", "Physical Dual SIM"];

  return (
    <div className="w-full max-w-[1500px] mx-auto px-3 sm:px-5 py-4 space-y-6 select-none">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
        <Link href="/b2c-gst" className="hover:text-blue-600">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link href="/b2c-gst" className="hover:text-blue-600">Electronics & Mobiles</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link href="/b2c-gst" className="hover:text-blue-600">Smartphones</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-800 font-semibold truncate">Apple iPhone 18 Pro (256GB)</span>
      </nav>

      {/* Main Top Product Showcase (Gallery + Main Details + BuyBox) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs">
        {/* Left Thumbnails & Hero Image (5 cols) */}
        <div className="lg:col-span-5 flex flex-col-reverse sm:flex-row gap-4">
          {/* Thumbnails */}
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

          {/* Main Selected Image */}
          <div className="flex-1 bg-slate-50/70 rounded-2xl p-6 flex items-center justify-center relative min-h-[360px] sm:min-h-[460px] border border-slate-100 group">
            <img
              src={gallery[selectedImg] || gallery[0]}
              alt="Apple iPhone 18 Pro"
              className="max-h-[380px] sm:max-h-[420px] max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
            {/* Wishlist & Share buttons */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button className="w-9 h-9 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center text-slate-600 hover:text-red-500 hover:bg-slate-50 cursor-pointer transition-colors">
                <Heart className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-slate-50 cursor-pointer transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Center Product Options & Details (4 cols) */}
        <div className="lg:col-span-4 flex flex-col space-y-4">
          <div>
            <span className="text-xs font-bold text-[#1559ac] uppercase tracking-wider">Apple Flagship</span>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mt-1">
              Apple iPhone 18 Pro (256GB, Desert Titanium) - 5G Dual SIM
            </h1>
            <p className="text-xs text-slate-500 mt-1">Model: A3294 | Release: 2026 Series</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md text-xs font-bold gap-1 border border-emerald-200">
              <span>4.9</span>
              <Star className="w-3 h-3 fill-emerald-600 stroke-none" />
            </div>
            <span className="text-xs text-slate-500 font-medium">3,492 Ratings & 840 Verified Reviews</span>
          </div>

          {/* Pricing Highlight with GST details exactly matching user uploaded screenshot 2 */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/90 space-y-1.5">
            <div className="text-xs text-slate-500 line-through">
              M.R.P.: <span className="font-semibold">₹1,02,500</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#b12704] flex items-baseline gap-2">
              <span>Price: ₹71,771.19</span>
              <span className="text-xs font-bold text-slate-600">excl. GST</span>
            </div>
            <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <span>₹84,690.00</span>
              <span className="text-xs font-semibold text-emerald-700">incl. 18% GST</span>
            </div>

            {/* Fulfilled Badge */}
            <div className="pt-1 flex items-center gap-2">
              <span className="bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                <span>1P</span>
                <span>Fulfilled</span>
              </span>
              <span className="text-xs font-bold text-emerald-600">You Save: ₹17,810 (17%)</span>
            </div>

            <div className="text-[11px] text-slate-500 pt-1">
              Inclusive of all taxes · <span className="text-blue-700 font-medium">GST Invoice Available for Input Tax Credit</span>
            </div>
            <div className="text-xs font-semibold text-slate-700 pt-1">
              EMI starts at ₹2,977. No Cost EMI available <span className="text-blue-600 cursor-pointer hover:underline">EMI options ▾</span>
            </div>
          </div>

          {/* Color Selection */}
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-slate-700">
              Colour: <strong className="text-slate-900">{selectedColor}</strong>
            </span>
            <div className="flex items-center gap-2">
              {colors.map((c) => (
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

          {/* Storage Selection */}
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-slate-700">
              Storage: <strong className="text-slate-900">{selectedStorage}</strong>
            </span>
            <div className="grid grid-cols-4 gap-2">
              {storages.map((s) => (
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

          {/* Version Selection */}
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-slate-700">
              Version: <strong className="text-slate-900">{selectedVersion}</strong>
            </span>
            <div className="flex flex-wrap gap-2">
              {versions.map((v) => (
                <button
                  key={v}
                  onClick={() => setSelectedVersion(v)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-medium cursor-pointer transition-all ${
                    selectedVersion === v
                      ? "border-[#1559ac] bg-blue-50/50 text-[#1559ac] ring-1 ring-[#1559ac]"
                      : "border-slate-200 hover:border-slate-300 text-slate-700"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right BuyBox & Seller Info (3 cols) */}
        <div className="lg:col-span-3 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-200 lg:pl-6 pt-4 lg:pt-0 space-y-4">
          <div className="space-y-3">
            {/* Price in BuyBox */}
            <div>
              <div className="text-2xl font-black text-slate-950">₹84,690.00</div>
              <div className="text-xs font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
                <Check className="w-3.5 h-3.5" />
                <span>In stock</span>
              </div>
            </div>

            {/* Delivery address */}
            <div className="text-xs text-slate-600 flex items-start gap-1.5">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>
                Deliver to <strong>Chennai 600001</strong> - <strong>Tomorrow by 11 AM</strong>
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-700">Quantity:</span>
              <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-2.5 py-1 text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-3 py-1 text-xs font-bold text-slate-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2.5 py-1 text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={() => {
                  setAdded(true);
                  setTimeout(() => setAdded(false), 2000);
                }}
                className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer shadow-xs ${
                  added ? "bg-emerald-600 text-white" : "bg-[#ffd814] hover:bg-[#f7ca00] text-slate-950"
                }`}
              >
                {added ? "✓ Added to Cart" : "Add to Cart"}
              </button>
              <button className="w-full py-2.5 rounded-xl font-bold text-sm bg-[#ffa41c] hover:bg-[#fa8900] text-slate-950 transition-colors cursor-pointer shadow-xs">
                Buy Now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Secure Transaction & 100% Buyer Protection</span>
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

          {/* Need Assistance */}
          <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200/80 text-xs text-blue-900 space-y-1">
            <span className="font-bold flex items-center gap-1">
              <BadgeCheck className="w-3.5 h-3.5 text-blue-700" />
              1Placee Corporate & B2C Privilege
            </span>
            <p className="text-[11px] text-blue-700 leading-snug">
              Order individual quantities with instant B2C checkout or enter corporate GSTIN for automatic 18% tax credit deduction!
            </p>
          </div>
        </div>
      </div>

      {/* Additional Protection Warranty Cards Section matching user screenshot */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-900">GET ADDITIONAL PROTECTION</h3>
            <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">NEW</span>
          </div>
          <span className="text-xs text-blue-600 font-semibold cursor-pointer hover:underline">Quick click to expand</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Extended Warranty 1 */}
          <div
            onClick={() => setSelectedWarranty(selectedWarranty === "1yr" ? null : "1yr")}
            className={`p-4 rounded-xl border-2 flex items-start justify-between cursor-pointer transition-all ${
              selectedWarranty === "1yr" ? "border-amber-500 bg-amber-50/20" : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="space-y-1">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold text-slate-900">1 Year Extended Warranty Plan</span>
              </div>
              <p className="text-[11px] text-slate-500">Accidental and liquid damage</p>
              <p className="text-[11px] text-slate-500">Free door-to-door pick and return</p>
              <div className="text-xs font-black text-slate-900 pt-1">₹3,897.00</div>
            </div>
            <button
              className={`px-3 py-1 text-xs font-bold rounded-lg border cursor-pointer ${
                selectedWarranty === "1yr" ? "bg-amber-500 text-white border-amber-500" : "border-slate-300 text-slate-700 hover:bg-slate-50"
              }`}
            >
              {selectedWarranty === "1yr" ? "SELECTED" : "SELECT"}
            </button>
          </div>

          {/* Extended Warranty 2 */}
          <div
            onClick={() => setSelectedWarranty(selectedWarranty === "2yr" ? null : "2yr")}
            className={`p-4 rounded-xl border-2 flex items-start justify-between cursor-pointer transition-all ${
              selectedWarranty === "2yr" ? "border-emerald-500 bg-emerald-50/20" : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="space-y-1">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-bold text-slate-900">2 Years Extended Warranty Plan</span>
              </div>
              <p className="text-[11px] text-slate-500">Complete hardware breakdown protection</p>
              <p className="text-[11px] text-slate-500">Original Apple certified replacement parts</p>
              <div className="text-xs font-black text-slate-900 pt-1">₹6,149.00</div>
            </div>
            <button
              className={`px-3 py-1 text-xs font-bold rounded-lg border cursor-pointer ${
                selectedWarranty === "2yr" ? "bg-emerald-500 text-white border-emerald-500" : "border-slate-300 text-slate-700 hover:bg-slate-50"
              }`}
            >
              {selectedWarranty === "2yr" ? "SELECTED" : "SELECT"}
            </button>
          </div>
        </div>
      </div>

      {/* Frequently Bought Together Bundle Row matching user screenshot */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-4">
        <h3 className="text-base font-bold text-slate-900">FREQUENTLY BOUGHT TOGETHER</h3>

        <div className="flex flex-col lg:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-3 overflow-x-auto w-full lg:w-auto pb-2">
            {/* Phone */}
            <div className="flex flex-col items-center border border-slate-200 rounded-xl p-3 bg-slate-50 w-36 text-center">
              <input
                type="checkbox"
                checked={bundle.phone}
                onChange={(e) => setBundle({ ...bundle, phone: e.target.checked })}
                className="self-start accent-[#1559ac] cursor-pointer"
              />
              <img src="/banners/noon-thumb-1.png" alt="iPhone" className="w-16 h-16 object-contain my-1" />
              <div className="text-xs font-bold text-slate-900">₹71,771.19</div>
              <p className="text-[10px] text-slate-500 line-clamp-1">Apple iPhone 18 Pro</p>
            </div>

            <span className="text-slate-400 font-bold text-lg">+</span>

            {/* Adapter */}
            <div className="flex flex-col items-center border border-slate-200 rounded-xl p-3 bg-slate-50 w-36 text-center">
              <input
                type="checkbox"
                checked={bundle.adapter}
                onChange={(e) => setBundle({ ...bundle, adapter: e.target.checked })}
                className="self-start accent-[#1559ac] cursor-pointer"
              />
              <div className="w-16 h-16 flex items-center justify-center my-1 text-2xl">🔌</div>
              <div className="text-xs font-bold text-slate-900">₹1,900.00</div>
              <p className="text-[10px] text-slate-500 line-clamp-1">Apple 20W USB-C Adapter</p>
            </div>

            <span className="text-slate-400 font-bold text-lg">+</span>

            {/* Screen Protector */}
            <div className="flex flex-col items-center border border-slate-200 rounded-xl p-3 bg-slate-50 w-36 text-center">
              <input
                type="checkbox"
                checked={bundle.protector}
                onChange={(e) => setBundle({ ...bundle, protector: e.target.checked })}
                className="self-start accent-[#1559ac] cursor-pointer"
              />
              <div className="w-16 h-16 flex items-center justify-center my-1 text-2xl">🛡️</div>
              <div className="text-xs font-bold text-slate-900">₹750.00</div>
              <p className="text-[10px] text-slate-500 line-clamp-1">9H Glass Screen Protector</p>
            </div>

            <span className="text-slate-400 font-bold text-lg">+</span>

            {/* Case */}
            <div className="flex flex-col items-center border border-slate-200 rounded-xl p-3 bg-slate-50 w-36 text-center">
              <input
                type="checkbox"
                checked={bundle.case}
                onChange={(e) => setBundle({ ...bundle, case: e.target.checked })}
                className="self-start accent-[#1559ac] cursor-pointer"
              />
              <div className="w-16 h-16 flex items-center justify-center my-1 text-2xl">📱</div>
              <div className="text-xs font-bold text-slate-900">₹1,450.00</div>
              <p className="text-[10px] text-slate-500 line-clamp-1">MagSafe Clear Case</p>
            </div>
          </div>

          {/* Bundle Total and Add Button */}
          <div className="flex flex-col items-end gap-2 w-full lg:w-auto shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 pt-3 lg:pt-0 lg:pl-6">
            <div className="text-right">
              <span className="text-xs text-slate-500">Total Bundle Price:</span>
              <div className="text-xl font-black text-slate-950">₹{bundleTotal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</div>
            </div>
            <button className="px-6 py-2.5 rounded-xl font-bold text-xs bg-[#1559ac] hover:bg-[#0d4182] text-white transition-colors cursor-pointer shadow-xs">
              BUY ALL SELECTED FROM BUNDLE
            </button>
          </div>
        </div>
      </div>

      {/* Specifications Table matching user screenshot */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-3">
        <h3 className="text-base font-bold text-slate-900">SPECIFICATIONS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-xs">
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500">Brand</span>
            <span className="font-semibold text-slate-800">Apple</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500">Model Name</span>
            <span className="font-semibold text-slate-800">iPhone 18 Pro</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500">Processor</span>
            <span className="font-semibold text-slate-800">Apple A18 Pro Bionic</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500">Display</span>
            <span className="font-semibold text-slate-800">6.3-inch Super Retina XDR OLED (120Hz)</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500">Internal Storage</span>
            <span className="font-semibold text-slate-800">256 GB NVMe</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500">Camera Resolution</span>
            <span className="font-semibold text-slate-800">48 MP + 48 MP + 12 MP Triple Camera</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500">Battery Capacity</span>
            <span className="font-semibold text-slate-800">4676 mAh Lithium-Ion</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500">Charging</span>
            <span className="font-semibold text-slate-800">USB Type-C (Up to 30W Fast Charging)</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500">SIM Type</span>
            <span className="font-semibold text-slate-800">Nano-SIM + eSIM (5G Ready)</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500">Operating System</span>
            <span className="font-semibold text-slate-800">iOS 18 (Apple Intelligence Enabled)</span>
          </div>
        </div>
      </div>

      {/* Similar Flagship Smartphones Carousel */}
      <div>
        <RelatedProductsCarousel title="Similar Flagship Smartphones" />
      </div>

      {/* Flagship Mobile Customer Reviews */}
      <div>
        <CustomerReviewsSection />
      </div>
    </div>
  );
}

