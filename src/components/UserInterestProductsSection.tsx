"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Search, ArrowRight, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { USER_INTEREST_PRODUCTS } from "../data/userInterestAndPopularData";

export const UserInterestProductsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "interest" | "trending">("all");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProducts = USER_INTEREST_PRODUCTS.filter((item) => {
    if (activeTab === "interest") {
      // Products matching sewing/craft recent search interest
      return ["sewing-needles-hand", "pro-sewing-needles-box", "presser-foot-set", "tailors-chalks-heat", "measuring-tape-ruler", "machine-needles-top"].includes(item.id);
    }
    if (activeTab === "trending") {
      // Products matching popular/trending B2B wholesale demand
      return ["steel-wheel-rim", "elephant-jars-basket", "styrene-paint-binder", "woolen-carpets-nz", "handtufted-carpets"].includes(item.id);
    }
    return true;
  });

  return (
    <section className="w-full mt-7 select-none">
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs">
        
        {/* Section Header with dual badge and clean category filter tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-[#1d72fe] border border-blue-200/60">
                <Sparkles className="w-3 h-3 text-[#1d72fe]" /> Personalized For You
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                Verified B2B Wholesale
              </span>
            </div>

            <h3 className="font-black text-slate-900 text-lg sm:text-xl tracking-tight">
              Based on Your Recent Interest &amp; Search
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-500 mt-0.5">
              Curated wholesale products, high-demand equipment, and trending materials tailored to your sourcing history.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-1.5 bg-slate-100/80 p-1 rounded-xl self-start md:self-auto shrink-0">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Matches ({USER_INTEREST_PRODUCTS.length})
            </button>
            <button
              onClick={() => setActiveTab("interest")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === "interest"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Recent Search (6)
            </button>
            <button
              onClick={() => setActiveTab("trending")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === "trending"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Trending B2B (5)
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HYBRID B2B PRODUCT CARD GRID (5 Cards per row desktop, 11 total items)   */}
        {/* ========================================================================= */}
        <div className="recommendations-b2b-grid">
          {filteredProducts.map((product) => {
            const isFav = !!favorites[product.id];

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#1d72fe] p-3.5 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group cursor-pointer relative"
              >
                {/* Top Badge & Favorite Button */}
                <div className="flex items-center justify-between w-full absolute top-5 left-0 px-5 z-10 pointer-events-none">
                  {product.badge ? (
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-slate-900/80 text-white backdrop-blur-xs shadow-2xs pointer-events-auto">
                      {product.badge}
                    </span>
                  ) : (
                    <span />
                  )}

                  <button
                    onClick={(e) => toggleFavorite(e, product.id)}
                    className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs border border-slate-200 flex items-center justify-center text-slate-400 hover:text-red-500 hover:scale-110 shadow-xs transition-all pointer-events-auto cursor-pointer"
                    title="Save to favorites"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${
                        isFav ? "fill-red-500 text-red-500" : ""
                      }`}
                    />
                  </button>
                </div>

                <div>
                  {/* Product Image Area with Hover Zoom & "Find Similar" trigger */}
                  <Link href={`/b2b/product/${product.id}`} className="block relative">
                    <div className="w-full h-[180px] sm:h-[190px] rounded-xl bg-[#fdfdfd] border border-slate-100 p-2 flex items-center justify-center overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />

                      {/* Floating 'Find Similar' icon badge matching Image 1 */}
                      <div className="absolute bottom-2 left-2 z-10">
                        <span className="w-7 h-7 rounded-lg bg-white/95 border border-slate-200/90 shadow-2xs flex items-center justify-center text-slate-600 hover:text-[#1d72fe] transition-colors" title="Find similar items">
                          <Search className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Title */}
                  <div className="mt-3">
                    <Link href={`/b2b/product/${product.id}`}>
                      <h4 className="text-[13px] font-bold text-slate-800 group-hover:text-[#1d72fe] transition-colors line-clamp-2 leading-snug min-h-[38px]">
                        {product.title}
                      </h4>
                    </Link>
                  </div>

                  {/* Reorder Rate or Sold Count Tag */}
                  <div className="mt-1.5 flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                    {product.reorderRate && (
                      <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-sm font-semibold">
                        Reorder {product.reorderRate}
                      </span>
                    )}
                    {product.soldCount && (
                      <span className="text-slate-600">{product.soldCount}</span>
                    )}
                  </div>

                  {/* Price Block */}
                  <div className="mt-2.5">
                    <div className="flex items-baseline gap-1.5 flex-wrap">
                      <span className="text-base sm:text-[17px] font-black text-slate-900 tracking-tight">
                        {product.price}
                      </span>
                      {product.priceUnit && (
                        <span className="text-[11px] font-bold text-slate-600">
                          {product.priceUnit}
                        </span>
                      )}
                      {product.originalPrice && (
                        <span className="text-[11px] line-through text-slate-500">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="text-[11.5px] font-semibold text-slate-600 mt-0.5">
                      MOQ: {product.moq}
                    </div>
                  </div>

                  {/* Supplier & Verification Badge matching Image 1 */}
                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-1 text-[#1d72fe] font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 fill-[#1d72fe] text-white shrink-0" />
                      <span>Verified</span>
                    </div>

                    <div className="text-slate-600 font-medium truncate max-w-[110px]">
                      {product.supplierYears && <span>{product.supplierYears} • </span>}
                      <span>{product.supplierCountry || "IN"}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action: "Ask for Price / Send Inquiry" CTA Button */}
                <div className="mt-3 pt-2">
                  <Link
                    href={`/b2b/product/${product.id}`}
                    className="w-full py-2 px-3 rounded-xl border border-blue-200/90 bg-blue-50/70 hover:bg-[#1d72fe] text-[#1d72fe] hover:text-white text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-2xs group/btn cursor-pointer"
                  >
                    <span>Ask for Price</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

