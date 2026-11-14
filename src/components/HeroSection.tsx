"use client";

import React, { useState } from "react";
import { Menu, ChevronRight, ShieldCheck, Award, Megaphone } from "lucide-react";
import { heroSlides, leftCategories, youMayLike } from "@/data/homeData";

interface HeroSectionProps {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  onOpenItem: (item: { title: string; category?: string; img?: string; price?: string; moq?: string }) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentSlide,
  setCurrentSlide,
  onOpenItem,
}) => {
  const [isMoreHovered, setIsMoreHovered] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState("Toys");

  return (
    <section className="max-w-[1380px] mx-auto px-4 py-3">
      <div className="grid grid-cols-12 gap-3">
        {/* Left Categories Menu */}
        <div className="col-span-12 lg:col-span-3 bg-white rounded-lg border border-slate-200 p-2.5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="font-bold text-xs text-slate-900 pb-2 mb-1.5 border-b border-slate-100 flex items-center gap-1.5">
              <Menu className="w-3.5 h-3.5 text-slate-700" />
              <span>Categories</span>
            </div>
            <ul className="space-y-0.5 text-xs text-slate-700">
              {leftCategories.map((cat, idx) => (
                <li
                  key={idx}
                  onClick={() => onOpenItem({ title: cat, category: "Industrial Category" })}
                  className="flex items-center justify-between py-1 px-1.5 rounded hover:bg-slate-50 hover:text-[#1862c6] cursor-pointer transition-colors group"
                >
                  <span className="truncate pr-1 text-[11.5px] leading-snug">{cat}</span>
                  <ChevronRight className="w-3 h-3 text-slate-300 group-hover:text-[#1862c6] shrink-0" />
                </li>
              ))}
            </ul>
          </div>

          {/* MORE CATEGORIES WITH HOVER FLYOUT */}
          <div
            className="pt-2 border-t border-slate-100 relative"
            onMouseEnter={() => setIsMoreHovered(true)}
            onMouseLeave={() => setIsMoreHovered(false)}
          >
            <button
              onClick={() => setIsMoreHovered(!isMoreHovered)}
              className="text-[#1862c6] hover:text-blue-800 text-xs font-bold flex items-center justify-between w-full py-1 px-1 rounded hover:bg-slate-50 transition-colors"
            >
              <span className="flex items-center gap-1">More Categories</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {isMoreHovered && (
              <div
                className="absolute left-full bottom-[-10px] ml-1 z-50 flex shadow-2xl rounded-lg overflow-hidden border border-slate-300 bg-white animate-in fade-in duration-150"
                style={{ width: "780px", height: "460px" }}
              >
                <div className="w-56 bg-[#3d424a] text-slate-200 p-2 text-xs flex flex-col justify-between shrink-0">
                  <ul className="space-y-0.5">
                    {[
                      "Chemicals",
                      "Tools & Hardware",
                      "Bags, Cases & Boxes",
                      "Furniture",
                      "Metallurgy, Mineral & Energy",
                      "Security & Protection",
                      "Textile",
                      "Instruments & Meters",
                      "Office Supplies",
                      "Agriculture & Food",
                      "Toys",
                      "Service"
                    ].map((item) => (
                      <li
                        key={item}
                        onMouseEnter={() => setSelectedSubCategory(item)}
                        className={`flex items-center justify-between py-1.5 px-2 rounded cursor-pointer transition-colors ${
                          selectedSubCategory === item
                            ? "bg-[#2563eb] text-white font-bold"
                            : "hover:bg-slate-700"
                        }`}
                      >
                        <span className="truncate text-[11px]">{item}</span>
                        <ChevronRight className="w-3 h-3 opacity-60" />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1 bg-white p-4 flex flex-col justify-between overflow-y-auto">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <h3 className="font-black text-sm text-slate-900">{selectedSubCategory}</h3>
                      <button
                        onClick={() => {
                          onOpenItem({ title: selectedSubCategory, category: "Full Catalog" });
                          setIsMoreHovered(false);
                        }}
                        className="text-xs text-[#1862c6] font-bold hover:underline"
                      >
                        View All Subcategories →
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-xs">
                      <div>
                        <h4 className="font-black text-slate-900 pb-1 mb-2 border-b border-slate-100 flex items-center justify-between">
                          <span>Baby & Toddler Toys</span>
                        </h4>
                        <ul className="space-y-1 text-slate-600 text-[11px]">
                          {["Baby Rattle & Teether", "Play Mats & Gyms", "Bath Toys Waterproof", "Plush Soft Musical", "Stroller Hanging Toys"].map((s) => (
                            <li key={s} onClick={() => { onOpenItem({ title: s, category: "Toy Subcategory" }); setIsMoreHovered(false); }} className="hover:text-[#1862c6] cursor-pointer">
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 pb-1 mb-2 border-b border-slate-100 flex items-center justify-between">
                          <span>Electronic & RC Toys</span>
                        </h4>
                        <ul className="space-y-1 text-slate-600 text-[11px]">
                          {["RC Quadcopter Drone", "Remote Control Cars", "Robotic STEM Kits", "Walkie Talkies Kids", "Interactive Pets"].map((s) => (
                            <li key={s} onClick={() => { onOpenItem({ title: s, category: "Toy Subcategory" }); setIsMoreHovered(false); }} className="hover:text-[#1862c6] cursor-pointer">
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-400 truncate pt-2 border-t border-slate-100">
                    <strong className="text-slate-600 font-semibold">Hot Products:</strong> Inflatable, Children Bicycle, RC Car, RC Helicopter, Teddy Bear, STEM Puzzle
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Center Slider */}
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-3">
          <div
            onClick={() => onOpenItem({ title: heroSlides[currentSlide].title, category: heroSlides[currentSlide].badge, img: heroSlides[currentSlide].img })}
            className={`relative h-[375px] rounded-lg overflow-hidden bg-gradient-to-br ${heroSlides[currentSlide].bgGradient} text-slate-900 p-8 flex flex-col justify-between shadow-xs transition-all duration-700 cursor-pointer group`}
          >
            <div className="space-y-3 max-w-sm z-10">
              <span className="text-[10px] font-black uppercase tracking-wider bg-black/10 px-2 py-0.5 rounded-full backdrop-blur-xs">
                {heroSlides[currentSlide].badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                {heroSlides[currentSlide].title}
              </h2>
              <p className="text-xs opacity-90 leading-relaxed font-normal">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="pt-2">
                <button className="bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs px-5 py-2 rounded-full shadow-md group-hover:scale-105 transition-transform">
                  Explore Details
                </button>
              </div>
            </div>

            <div className="absolute right-4 bottom-4 w-60 h-60 opacity-95 hidden sm:block">
              <img
                src={heroSlides[currentSlide].img}
                alt={heroSlides[currentSlide].title}
                className="w-full h-full object-cover rounded-xl shadow-xl border-2 border-white/40"
              />
            </div>

            <div className="flex items-center gap-1.5 z-10">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }}
                  className={`h-2 rounded-full transition-all ${currentSlide === idx ? "w-5 bg-[#1862c6]" : "w-2 bg-slate-400"}`}
                />
              ))}
            </div>
          </div>

          {/* Sub Value Props */}
          <div className="grid grid-cols-4 gap-2 bg-white rounded-lg border border-slate-200 p-3 shadow-2xs">
            <div onClick={() => onOpenItem({ title: "Secured Trading Service", category: "100% Escrow & On-Time Guarantee" })} className="flex items-center gap-2.5 p-1.5 hover:bg-slate-50 rounded cursor-pointer transition-colors">
              <div className="w-9 h-9 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-xs text-slate-900 leading-tight">Secured Trading</div>
                <div className="text-[10px] text-slate-400">Escrow Protected</div>
              </div>
            </div>

            <div onClick={() => onOpenItem({ title: "SMART EXPO 2026 Virtual Booth", category: "3D Virtual Factory Tours" })} className="flex items-center gap-2.5 p-1.5 hover:bg-slate-50 rounded cursor-pointer transition-colors border-l border-slate-100">
              <div className="w-9 h-9 rounded bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <span className="font-black text-xs">3D</span>
              </div>
              <div>
                <div className="font-bold text-xs text-slate-900 leading-tight">SMART EXPO</div>
                <div className="text-[10px] text-slate-400">Virtual 3D</div>
              </div>
            </div>

            <div onClick={() => onOpenItem({ title: "Leading Factory Network", category: "On-Site Audited Manufacturers" })} className="flex items-center gap-2.5 p-1.5 hover:bg-slate-50 rounded cursor-pointer transition-colors border-l border-slate-100">
              <div className="w-9 h-9 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-xs text-slate-900 leading-tight">Leading Factory</div>
                <div className="text-[10px] text-slate-400">Audited Plants</div>
              </div>
            </div>

            <div onClick={() => onOpenItem({ title: "Selected Supplier Program", category: "Top Tier Verified Sellers" })} className="flex items-center gap-2.5 p-1.5 hover:bg-slate-50 rounded cursor-pointer transition-colors border-l border-slate-100">
              <div className="w-9 h-9 rounded bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-xs text-slate-900 leading-tight">Selected Supplier</div>
                <div className="text-[10px] text-slate-400">Top Verified</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: You May Like */}
        <div className="col-span-12 lg:col-span-3 bg-white rounded-lg border border-slate-200 p-3 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="font-bold text-xs text-slate-900 pb-2 mb-2 border-b border-slate-100 flex items-center justify-between">
              <span>You May Like</span>
              <span className="text-[10px] text-slate-400">Recommendations</span>
            </div>

            <div className="space-y-2">
              {youMayLike.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => onOpenItem({ title: item.name, category: "Recommended Bulk", img: item.img, price: "$2.50 - $4.80 / kg", moq: "500 kg" })}
                  className="flex items-center gap-2.5 p-1.5 rounded hover:bg-slate-50 cursor-pointer group transition-colors"
                >
                  <div className="w-11 h-11 rounded-md bg-slate-100 overflow-hidden shrink-0 border border-slate-200">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-xs text-slate-800 truncate group-hover:text-[#1862c6]">
                      {item.name}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      {item.count}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-100 text-center">
            <span className="text-[11px] text-slate-500 block mb-1.5">No desirable products?</span>
            <button
              onClick={() => onOpenItem({ title: "Custom Sourcing Request (RFQ)", category: "Direct Sourcing" })}
              className="w-full bg-[#1862c6] hover:bg-blue-700 text-white font-bold py-2 rounded-full text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Megaphone className="w-3.5 h-3.5" />
              <span>Post Your Request Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
