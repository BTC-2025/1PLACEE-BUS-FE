"use client";

import React from "react";
import Link from "next/link";
import { REGIONS_DATA } from "../data/regionsData";

// Custom SVG Icons crafted to match each city's monument outline in Image 1:
// Navy slate architectural linework (#334155) with warm orange accents (#f97316)
const CityMonumentIcon: React.FC<{ icon: string }> = ({ icon }) => {
  switch (icon) {
    case "delhi":
      // India Gate / Arch style
      return (
        <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
          {/* Top cornice */}
          <path d="M26 14h12v3H26z" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 17h24v3H20z" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
          <path d="M31 10v4" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
          {/* Main pillars and arch */}
          <path d="M20 20v28h8V34a4 4 0 0 1 8 0v14h8V20" stroke="#334155" strokeWidth="2" strokeLinejoin="round" />
          {/* Accent vertical indicators */}
          <line x1="16" y1="40" x2="16" y2="48" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="48" y1="40" x2="48" y2="48" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
          {/* Base */}
          <line x1="14" y1="48" x2="50" y2="48" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case "mumbai":
      // Gateway of India style with twin turrets
      return (
        <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
          {/* Twin minarets */}
          <path d="M20 16v8M24 16v8M40 16v8M44 16v8" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 24h28v4H18z" stroke="#334155" strokeWidth="2" />
          {/* Center arch */}
          <path d="M20 28v20h7V38a5 5 0 0 1 10 0v10h7V28" stroke="#334155" strokeWidth="2" />
          <line x1="32" y1="36" x2="32" y2="48" stroke="#f97316" strokeWidth="2.5" />
          <line x1="14" y1="48" x2="50" y2="48" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case "gurgaon":
      // Modern cyber city towers with antenna & angled roofs
      return (
        <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
          <path d="M34 16l8-4v36H34V16z" stroke="#334155" strokeWidth="2" strokeLinejoin="round" />
          <line x1="38" y1="20" x2="38" y2="40" stroke="#334155" strokeWidth="1.5" strokeDasharray="2 3" />
          <path d="M22 28h12v20H22z" stroke="#334155" strokeWidth="2" />
          <line x1="28" y1="32" x2="28" y2="44" stroke="#334155" strokeWidth="1.5" strokeDasharray="2 3" />
          <path d="M42 24h10v24H42z" stroke="#334155" strokeWidth="2" />
          {/* Orange Accent antennae / highlights */}
          <line x1="30" y1="20" x2="30" y2="28" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
          <line x1="18" y1="48" x2="54" y2="48" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case "noida":
      // Sector tech corporate park towers
      return (
        <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
          <path d="M26 18l6-3v33h-6V18z" stroke="#334155" strokeWidth="2" strokeLinejoin="round" />
          <path d="M34 22l6-3v29h-6V22z" stroke="#334155" strokeWidth="2" strokeLinejoin="round" />
          <path d="M42 28h6v20h-6z" stroke="#334155" strokeWidth="2" />
          {/* Accent beacon */}
          <line x1="22" y1="26" x2="22" y2="34" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="20" y1="48" x2="50" y2="48" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case "bangalore":
      // Vidhana Soudha dome & classical legislature facade
      return (
        <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
          {/* Finial / Spire */}
          <line x1="32" y1="12" x2="32" y2="16" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
          {/* Central Dome */}
          <path d="M26 24a6 6 0 0 1 12 0H26z" stroke="#334155" strokeWidth="2" />
          <path d="M22 24h20v6H22z" stroke="#334155" strokeWidth="2" />
          {/* Pillars and Base */}
          <path d="M18 30h28v18H18z" stroke="#334155" strokeWidth="2" />
          <path d="M24 36v12M32 36v12M40 36v12" stroke="#334155" strokeWidth="1.5" />
          <line x1="14" y1="48" x2="50" y2="48" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case "ahmedabad":
      // Sidi Saiyyed / Historic Fort gates
      return (
        <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
          {/* Turrets */}
          <path d="M22 18v6M26 18v6M38 18v6M42 18v6" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 24h28v6H18z" stroke="#334155" strokeWidth="2" />
          {/* Arched gateway */}
          <path d="M20 30v18h24V30" stroke="#334155" strokeWidth="2" />
          <path d="M26 48V37a6 6 0 0 1 12 0v11" stroke="#334155" strokeWidth="2" />
          {/* Center accent */}
          <line x1="32" y1="36" x2="32" y2="48" stroke="#f97316" strokeWidth="2.5" />
          <line x1="14" y1="48" x2="50" y2="48" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case "kolkata":
      // Victoria Memorial Grand Dome
      return (
        <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
          {/* Spire */}
          <line x1="32" y1="12" x2="32" y2="18" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
          {/* Main Dome */}
          <path d="M24 28a8 8 0 0 1 16 0H24z" stroke="#334155" strokeWidth="2" />
          <path d="M20 28h24v4H20z" stroke="#334155" strokeWidth="2" />
          {/* Classical Colonnade base */}
          <path d="M16 32h32v16H16z" stroke="#334155" strokeWidth="2" />
          <path d="M22 36v12M28 36v12M36 36v12M42 36v12" stroke="#334155" strokeWidth="1.5" />
          <line x1="12" y1="48" x2="52" y2="48" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case "chennai":
      // Ripon Building / Central Station clock tower
      return (
        <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
          <line x1="32" y1="12" x2="32" y2="17" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
          <path d="M28 17h8v5h-8z" stroke="#334155" strokeWidth="2" />
          {/* Stepped central tower */}
          <path d="M26 22l-3 26h18l-3-26z" stroke="#334155" strokeWidth="2" strokeLinejoin="round" />
          {/* Horizontal floor lines */}
          <line x1="26" y1="30" x2="38" y2="30" stroke="#334155" strokeWidth="1.5" />
          <line x1="25" y1="38" x2="39" y2="38" stroke="#334155" strokeWidth="1.5" />
          {/* Orange base highlight */}
          <line x1="24" y1="44" x2="40" y2="44" stroke="#f97316" strokeWidth="2.5" />
          <line x1="18" y1="48" x2="46" y2="48" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case "more":
    default:
      // More cities skyline with orange sun
      return (
        <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
          {/* Orange sun */}
          <circle cx="24" cy="22" r="3.5" stroke="#f97316" strokeWidth="2" />
          {/* Skyline buildings */}
          <path d="M20 34h8v14h-8z" stroke="#334155" strokeWidth="2" />
          <path d="M30 26h8v22h-8z" stroke="#334155" strokeWidth="2" />
          <path d="M40 30h8v18h-8z" stroke="#334155" strokeWidth="2" />
          {/* Windows */}
          <line x1="34" y1="30" x2="34" y2="42" stroke="#334155" strokeWidth="1.5" strokeDasharray="1.5 2" />
          <line x1="44" y1="34" x2="44" y2="44" stroke="#334155" strokeWidth="1.5" strokeDasharray="1.5 2" />
          <line x1="16" y1="48" x2="52" y2="48" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
  }
};

export const FindSuppliersByRegionSection: React.FC = () => {
  return (
    <section className="w-full mt-7 select-none">
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs">
        
        {/* Header Title with Orange Indicator Line matching Reference Image */}
        <div className="mb-6">
          <h3 className="font-black text-slate-900 text-lg sm:text-xl tracking-tight">
            Find Suppliers by Region
          </h3>
          <div className="w-12 h-1 bg-[#ea580c] rounded-full mt-2" />
        </div>

        {/* 9 Region City Cards in a Responsive Row (Scrollable or 9-grid) */}
        <div className="regions-grid-9 gap-3 sm:gap-3.5">
          {REGIONS_DATA.map((region) => {
            const isMore = region.type === "more";

            return (
              <Link
                key={region.id}
                href={region.href}
                className={`group flex flex-col items-center justify-between py-5 px-3 rounded-2xl border transition-all duration-300 min-h-[148px] text-center cursor-pointer relative ${
                  isMore
                    ? "bg-[#eff6ff]/70 border-dashed border-[#60a5fa] hover:bg-[#dbeafe] hover:border-[#2563eb] shadow-xs"
                    : "bg-white border-slate-200/90 hover:border-[#2563eb] hover:shadow-md"
                }`}
              >
                {/* City Monument Icon */}
                <div className="flex-1 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CityMonumentIcon icon={region.iconName} />
                </div>

                {/* City Name */}
                <div className="mt-3">
                  <span
                    className={`text-[13px] font-bold tracking-tight block ${
                      isMore
                        ? "text-[#1d4ed8] group-hover:text-[#1e40af]"
                        : "text-slate-800 group-hover:text-[#2563eb]"
                    }`}
                  >
                    {region.name}
                  </span>
                  {region.count && !isMore && (
                    <span className="text-[10px] text-slate-600 block mt-0.5">
                      {region.count}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
