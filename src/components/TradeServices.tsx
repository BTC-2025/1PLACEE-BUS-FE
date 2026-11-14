"use client";

import React from "react";
import { ShieldCheck, Calendar, ChevronRight } from "lucide-react";

interface TradeServicesProps {
  onOpenItem: (item: { title: string; category?: string; img?: string; price?: string; moq?: string }) => void;
}

export const TradeServices: React.FC<TradeServicesProps> = ({ onOpenItem }) => {
  return (
    <>
      {/* 9. SECURED TRADING SERVICE BANNER STRIP */}
      <section className="max-w-[1380px] mx-auto px-4 py-2">
        <div
          onClick={() => onOpenItem({ title: "1PLACEE Trade Assurance & Escrow Guarantee", category: "Payment Protection" })}
          className="bg-gradient-to-r from-[#1862c6] to-[#2563eb] text-white rounded-lg p-3.5 flex items-center justify-between cursor-pointer shadow-sm hover:opacity-95 transition-opacity"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-black text-sm">Secured Trading & GST Input Tax Credit (ITC) Protection</h4>
              <p className="text-[11px] text-white/90">Verified GSTIN Tax Invoices • Real-time ITC reconciliation • Escrow dispatch release</p>
            </div>
          </div>
          <button className="bg-white text-[#1862c6] font-black text-xs px-4 py-1.5 rounded-full shadow-xs">
            Learn More
          </button>
        </div>
      </section>

      {/* 10. SOURCING SOLUTIONS & TAILORED SERVICES */}
      <section className="max-w-[1380px] mx-auto px-4 py-4">
        <div className="text-center max-w-xl mx-auto mb-4">
          <h3 className="font-black text-base text-slate-900">Sourcing Solutions & Tailored Services</h3>
          <p className="text-xs text-slate-500">Specialized procurement channels designed for business and enterprise buyers</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { title: "Source from Industry Hubs", desc: "Connect directly with verified manufacturing clusters", badge: "Cluster Sourcing", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&q=80", items: ["CCTV Security", "Hydraulic Jacks", "Solar Inverters"] },
            { title: "Award-Winning Quality Products", desc: "Innovative industrial designs with rigorous quality certs", badge: "Quality Selected", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&q=80", items: ["Precision Bearings", "Inspection Robots", "Acoustic Sensors"] },
            { title: "Custom OEM/ODM Manufacturing", desc: "Custom logo, packaging, molds and engineering tolerances", badge: "Customization", img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=300&q=80", items: ["CNC Milling", "Bespoke Valves", "Lithium Packs"] },
            { title: "Smart RFQ Matching", desc: "AI distributes your specs to top 5 matched factories", badge: "AI Procurement", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80", items: ["Rapid Quotes", "Verified Rates", "Full Audit Report"] }
          ].map((sol, idx) => (
            <div
              key={idx}
              onClick={() => onOpenItem({ title: sol.title, category: sol.badge, img: sol.img })}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-blue-400 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="p-3.5">
                <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  {sol.badge}
                </span>
                <h4 className="font-black text-sm text-slate-900 mt-2">{sol.title}</h4>
                <p className="text-[11px] text-slate-500 mt-1">{sol.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {sol.items.map((it, i) => (
                    <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
              <div className="h-28 overflow-hidden bg-slate-100">
                <img src={sol.img} alt={sol.title} className="w-full h-full object-cover hover:scale-105 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. GLOBAL TRADE SHOWS & EXPOS */}
      <section className="max-w-[1380px] mx-auto px-4 py-3">
        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-2xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <div>
              <h3 className="font-black text-sm text-slate-900">Trade Shows & Global Expos</h3>
              <p className="text-xs text-slate-500">Meet verified suppliers live at virtual & offline expos</p>
            </div>
            <button onClick={() => alert("Viewing complete 2026 B2B Expo schedule")} className="text-xs text-[#1862c6] font-bold hover:underline flex items-center gap-1">
              View Calendar <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { name: "Green Factory Construction Conference 2026", date: "Dec 9-11, 2026 • Shanghai", desc: "Over 800+ robotics, energy storage and smart sensor factories.", color: "border-emerald-200 bg-emerald-50/40" },
              { name: "ProPak ASIA / Food & Agro Packaging Expo", date: "Nov 15-18, 2026 • Bangkok", desc: "Automated processing, sorting lines, sustainable packaging.", color: "border-blue-200 bg-blue-50/40" },
              { name: "Asia Thermal Insulation Material Expo 2026", date: "Oct 28-31, 2026 • Guangzhou", desc: "Acoustic panels, fireproof membranes and structural insulation.", color: "border-amber-200 bg-amber-50/40" }
            ].map((expo, idx) => (
              <div
                key={idx}
                onClick={() => onOpenItem({ title: expo.name, category: expo.date })}
                className={`border rounded-lg p-3 cursor-pointer hover:shadow-xs transition-shadow ${expo.color}`}
              >
                <div className="flex items-center gap-1.5 text-slate-700 font-bold text-xs mb-1">
                  <Calendar className="w-3.5 h-3.5 text-[#1862c6]" />
                  <span>{expo.date}</span>
                </div>
                <h5 className="font-black text-xs text-slate-900">{expo.name}</h5>
                <p className="text-[11px] text-slate-500 mt-1">{expo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
