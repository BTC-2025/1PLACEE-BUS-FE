"use client";

import React from "react";
import { ChevronRight, Award, Flame, Eye, Building2 } from "lucide-react";

interface CatalogShowcasesProps {
  onOpenItem: (item: { title: string; category?: string; img?: string; price?: string; moq?: string }) => void;
}

export const CatalogShowcases: React.FC<CatalogShowcasesProps> = ({ onOpenItem }) => {
  return (
    <>
      {/* 4. HOT SOURCING CATEGORIES */}
      <section className="max-w-[1380px] mx-auto px-4 py-3">
        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-2xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <div>
              <h3 className="font-black text-sm text-slate-900">Hot Sourcing Categories</h3>
              <p className="text-xs text-slate-500">Popular industrial and commercial product lines</p>
            </div>
            <button onClick={() => alert("Viewing all 45+ B2B Categories")} className="text-xs text-[#1862c6] font-bold hover:underline flex items-center gap-1">
              View All <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { name: "Metal Processing", count: "12,000+ Items", img: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=150&q=80" },
              { name: "Packaging Machines", count: "8,500+ Items", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=150&q=80" },
              { name: "Solar Inverters", count: "4,200+ Items", img: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=150&q=80" },
              { name: "Industrial Valves", count: "19,000+ Items", img: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=150&q=80" },
              { name: "Electric Forklifts", count: "3,100+ Items", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=150&q=80" },
              { name: "Safety Gear & PPE", count: "9,800+ Items", img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=150&q=80" }
            ].map((cat, idx) => (
              <div
                key={idx}
                onClick={() => onOpenItem({ title: cat.name, category: "Hot Category" })}
                className="group p-2.5 rounded-lg border border-slate-100 hover:border-blue-300 hover:shadow-xs transition-all cursor-pointer text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2 bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
                </div>
                <h5 className="font-bold text-xs text-slate-800 group-hover:text-[#1862c6] line-clamp-1">{cat.name}</h5>
                <span className="text-[10px] text-slate-400 mt-0.5">{cat.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SELECTED PREMIUM SUPPLIERS */}
      <section className="max-w-[1380px] mx-auto px-4 py-3">
        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-2xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              <h3 className="font-black text-sm text-slate-900">Verified OEM/ODM Manufacturers</h3>
              <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-1.5 py-0.5 rounded">SGS Audited</span>
            </div>
            <button onClick={() => alert("Loading verified supplier directory")} className="text-xs text-[#1862c6] font-bold hover:underline flex items-center gap-1">
              Explore Factories <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { name: "Jiangsu Smart Automation Tech Co., Ltd.", country: "China • 12 Yrs Verified", products: "Laser Cutters, CNC Flanges, Robotic Welders", revenue: "$25M+ Annual Output", badge: "Gold Supplier" },
              { name: "Apex Global Heavy Machinery Group", country: "India • 9 Yrs Verified", products: "Hydraulic Presses, Stone Crushers, Mining Sifters", revenue: "$18M+ Annual Output", badge: "Direct Factory" },
              { name: "SolarCore Renewable Power Ltd.", country: "Vietnam • 6 Yrs Verified", products: "Bifacial Monocrystalline Solar Panels, Inverters", revenue: "$30M+ Annual Output", badge: "Tier 1 Factory" }
            ].map((sup, idx) => (
              <div
                key={idx}
                onClick={() => onOpenItem({ title: sup.name, category: "Verified Manufacturer" })}
                className="border border-slate-200 rounded-lg p-3 hover:border-blue-400 hover:shadow-xs transition-all cursor-pointer bg-slate-50/40"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-black text-emerald-700 bg-emerald-100/70 px-1.5 py-0.5 rounded flex items-center gap-1">
                    <Building2 className="w-3 h-3" /> {sup.badge}
                  </span>
                  <span className="text-[10px] text-slate-400">{sup.country}</span>
                </div>
                <h5 className="font-black text-xs text-slate-900 line-clamp-1">{sup.name}</h5>
                <p className="text-[11px] text-slate-600 mt-1 line-clamp-1">Main: {sup.products}</p>
                <div className="mt-2 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-500">
                  <span>Capacity: <strong className="text-slate-800">{sup.revenue}</strong></span>
                  <span className="text-[#1862c6] font-bold group-hover:underline">Contact Supplier →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VIRTUAL FACTORY LIVE & SMART EXPO */}
      <section className="max-w-[1380px] mx-auto px-4 py-3">
        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-2xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
              <h3 className="font-black text-sm text-slate-900">Virtual Factory Live Streams</h3>
              <span className="bg-red-50 text-red-600 text-[10px] font-black px-1.5 py-0.5 rounded">Live Now</span>
            </div>
            <button onClick={() => alert("Opening 2026 Virtual Expo Live Channel")} className="text-xs text-[#1862c6] font-bold hover:underline flex items-center gap-1">
              All Channels <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { title: "Precision Fiber Laser Test Cutting", factory: "Han's Laser Industry Line", viewers: "1,420 watching", img: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=300&q=80" },
              { title: "Automatic Beverage Bottling Line", factory: "Tech-Long Packaging Co.", viewers: "890 watching", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=300&q=80" },
              { title: "Solar Inverter Assembly Demo", factory: "Solis Smart Energy Corp.", viewers: "2,150 watching", img: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=300&q=80" },
              { title: "Heavy Duty Excavator Assembly", factory: "Sany Industrial Hub", viewers: "760 watching", img: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=300&q=80" }
            ].map((live, idx) => (
              <div
                key={idx}
                onClick={() => onOpenItem({ title: live.title, category: `Live: ${live.factory}` })}
                className="group rounded-lg border border-slate-200 overflow-hidden hover:shadow-sm transition-all cursor-pointer bg-slate-50"
              >
                <div className="aspect-16/10 relative overflow-hidden bg-slate-800">
                  <img src={live.img} alt={live.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span> LIVE
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[10px] px-1.5 py-0.5 rounded flex items-center gap-1">
                    <Eye className="w-3 h-3" /> {live.viewers}
                  </div>
                </div>
                <div className="p-2.5">
                  <h5 className="font-black text-xs text-slate-900 line-clamp-1 group-hover:text-[#1862c6]">{live.title}</h5>
                  <p className="text-[11px] text-slate-500 mt-0.5 truncate">{live.factory}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TRENDING PRODUCTS */}
      <section className="max-w-[1380px] mx-auto px-4 py-3">
        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-2xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-500" />
              <h3 className="font-black text-sm text-slate-900">Trending Factory Products</h3>
              <span className="bg-orange-50 text-orange-600 text-[10px] font-black px-1.5 py-0.5 rounded">High Demand</span>
            </div>
            <button onClick={() => alert("Viewing complete trending wholesale catalog")} className="text-xs text-[#1862c6] font-bold hover:underline flex items-center gap-1">
              View All <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { name: "CNC Aluminum Spindle 3.5KW", price: "$120 - $185", moq: "2 Sets", img: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=200&q=80" },
              { name: "500W Monocrystalline Panel", price: "$65 - $82", moq: "50 Pieces", img: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=200&q=80" },
              { name: "Automatic Strapping Machine", price: "$450 - $680", moq: "1 Set", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=200&q=80" },
              { name: "Stainless Steel Ball Valve 2\"", price: "$12 - $18", moq: "100 Pcs", img: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=200&q=80" },
              { name: "Industrial Air Compressor 7.5KW", price: "$850 - $1,100", moq: "1 Unit", img: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=200&q=80" },
              { name: "Safety Helmet With Headlamp", price: "$3.50 - $5.20", moq: "200 Pcs", img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=200&q=80" }
            ].map((prod, idx) => (
              <div
                key={idx}
                onClick={() => onOpenItem({ title: prod.name, price: prod.price, moq: prod.moq, img: prod.img, category: "Trending Wholesale" })}
                className="group rounded-lg border border-slate-100 hover:border-blue-300 hover:shadow-xs transition-all cursor-pointer p-2 flex flex-col justify-between"
              >
                <div className="aspect-square rounded-md overflow-hidden bg-slate-50 mb-2">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div>
                  <h5 className="font-bold text-xs text-slate-800 line-clamp-2 leading-tight group-hover:text-[#1862c6]">{prod.name}</h5>
                  <div className="mt-1.5 flex items-baseline justify-between">
                    <span className="font-black text-xs text-[#e60012]">{prod.price}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-0.5">MOQ: {prod.moq}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
