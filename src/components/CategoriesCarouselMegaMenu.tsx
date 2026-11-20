"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronUp, X } from "lucide-react";
import {
  B2B_INITIAL_CATEGORIES,
  B2B_ALL_41_CATEGORIES,
} from "../data/b2bMegaMenuCategoriesData";

// Custom SVG Icons reproducing the clean outline icon aesthetic from Images 2, 3, & 4
const B2BCategoryIcon: React.FC<{ icon: string; color: string }> = ({ icon, color }) => {
  const strokeColor = color;

  switch (icon) {
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      );

    case "shirt":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
        </svg>
      );

    case "car":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H7c-.6 0-1.1.2-1.4.6L3 11v5c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      );

    case "sprout":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M7 20h10" />
          <path d="M10 20c5.5-2.5.8-6.4 3-10" />
          <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4.1 5.5.8z" />
          <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4.1.9-4.9 2z" />
        </svg>
      );

    case "briefcase":
    case "office-supplies":
    case "briefcase-red":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <rect width="20" height="14" x="2" y="7" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );

    case "flask":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M9 3h6" />
          <path d="M10 9V3" />
          <path d="M14 9V3" />
          <path d="M10 9 4.5 19.5A2 2 0 0 0 6.2 22h11.6a2 2 0 0 0 1.7-2.5L14 9z" />
        </svg>
      );

    case "monitor":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      );

    case "smartphone":
    case "mobile-purple":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      );

    case "bottle":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M9 2h6v3H9z" />
          <path d="M10 5v3l-3 4v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8l-3-4V5" />
          <line x1="7" y1="15" x2="17" y2="15" />
        </svg>
      );

    case "book":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      );

    case "zap":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );

    case "compass":
    case "wrench-diagonal":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );

    case "camera":
    case "video-camera":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      );

    case "landmark":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <line x1="3" x2="21" y1="22" y2="22" />
          <line x1="6" x2="6" y1="18" y2="11" />
          <line x1="10" x2="10" y1="18" y2="11" />
          <line x1="14" x2="14" y1="18" y2="11" />
          <line x1="18" x2="18" y1="18" y2="11" />
          <polygon points="12 2 20 7 4 7" />
        </svg>
      );

    case "utensils":
    case "utensils-blue":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" />
          <line x1="15" x2="15" y1="11" y2="22" />
          <path d="M6 2v20" />
          <path d="M6 2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3" />
        </svg>
      );

    case "sofa":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
          <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z" />
          <line x1="4" x2="4" y1="18" y2="20" />
          <line x1="20" x2="20" y1="18" y2="20" />
        </svg>
      );

    case "gift":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <rect x="3" y="8" width="18" height="4" rx="1" />
          <path d="M12 8v13" />
          <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
          <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
        </svg>
      );

    case "home-pink":
    case "home-blue":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );

    case "hospital":
    case "med-cross":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      );

    case "user-plus":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" x2="19" y1="8" y2="14" />
          <line x1="22" x2="16" y1="11" y2="11" />
        </svg>
      );

    case "factory":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4H2z" />
          <path d="M17 18h1" />
          <path d="M12 18h1" />
          <path d="M7 18h1" />
        </svg>
      );

    case "gear":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );

    case "diamond-pink":
    case "diamond-teal":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M6 3h12l4 6-10 12L2 9z" />
          <path d="M11 3 8 9l4 12 4-12-3-6" />
          <path d="M2 9h20" />
        </svg>
      );

    case "box-green":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      );

    case "buildings":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M12 6h.01" />
          <path d="M12 10h.01" />
          <path d="M12 14h.01" />
          <path d="M16 10h.01" />
          <path d="M16 14h.01" />
          <path d="M8 10h.01" />
          <path d="M8 14h.01" />
        </svg>
      );

    case "microscope":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M6 18h8" />
          <path d="M3 22h18" />
          <path d="M14 22a7 7 0 1 0 0-14h-1" />
          <path d="M9 14h2" />
          <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
          <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
        </svg>
      );

    case "shield-check":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );

    case "storefront":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
          <path d="M2 7h20" />
          <path d="M22 7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2" />
        </svg>
      );

    case "steering-wheel":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
          <line x1="12" x2="12" y1="2" y2="9" />
          <line x1="4.93" x2="9.88" y1="16.07" y2="13.2" />
          <line x1="19.07" x2="14.12" y1="16.07" y2="13.2" />
        </svg>
      );

    case "scroll-fabric":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      );

    case "airplane":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
        </svg>
      );

    case "gamepad":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <line x1="6" x2="10" y1="12" y2="12" />
          <line x1="8" x2="8" y1="10" y2="14" />
          <line x1="15" x2="15.01" y1="13" y2="13" />
          <line x1="18" x2="18.01" y1="11" y2="11" />
          <rect width="20" height="12" x="2" y="6" rx="6" />
        </svg>
      );

    case "truck-pink":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
          <path d="M15 18H9" />
          <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14v10" />
          <circle cx="17" cy="18" r="2" />
          <circle cx="7" cy="18" r="2" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" x2="12" y1="8" y2="12" />
          <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
      );
  }
};

interface CategoriesCarouselMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CategoriesCarouselMegaMenu: React.FC<CategoriesCarouselMegaMenuProps> = ({
  isOpen,
  onClose,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // When menu closes, reset isExpanded so it opens fresh with initial 16 cards next time
  useEffect(() => {
    if (!isOpen) {
      setIsExpanded(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-full w-full max-w-[1400px] px-3 sm:px-6 z-50 animate-in fade-in duration-200"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="w-full bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden"
      >
        <div
          className={`w-full h-auto px-4 sm:px-6 lg:px-8 py-5 relative select-none ${isExpanded
            ? "overflow-y-scroll max-h-[72vh] categories-megamenu-scroll"
            : "overflow-hidden"
            }`}
          style={isExpanded ? { maxHeight: "72vh" } : undefined}
        >
          <div className={`w-full relative ${isExpanded ? "pb-12 pr-2" : "pb-2"}`}>

            {/* Header Row: Title and Close button */}
            <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur-xs z-10 py-1">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-5 bg-[#1d72fe] rounded-full" />
                <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                  Top Categories &amp; Industry Directories
                </h3>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition cursor-pointer"
                title="Close Mega Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* ========================================================================= */}
            {/* CATEGORIES DIRECTORY GRID (8-COLUMNS)                                     */}
            {/* Default (!isExpanded): 15 Initial Categories + 1 "View More Categories"   */}
            {/* Expanded (isExpanded): All 41 Categories continuously (No Collapse Card) */}
            {/* ========================================================================= */}
            {!isExpanded ? (
              <div className="categories-megamenu-grid-8">
                {B2B_INITIAL_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={cat.href}
                    onClick={onClose}
                    className="bg-white hover:bg-blue-50/30 rounded-2xl p-2.5 flex flex-col items-center justify-center text-center border border-slate-200/90 hover:border-[#1d72fe] hover:shadow-md transition-all duration-200 group category-square-card cursor-pointer"
                  >
                    {/* Clean Color-coded Vector Icon */}
                    <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-200 mb-1.5">
                      <B2BCategoryIcon icon={cat.icon} color={cat.color} />
                    </div>

                    {/* Category Name */}
                    <span className="text-[11px] sm:text-[11.5px] font-bold text-slate-800 group-hover:text-[#1d72fe] leading-tight line-clamp-2 px-1">
                      {cat.name}
                    </span>
                  </Link>
                ))}

                {/* 16th Card: "View More Categories" Button matching Image 2 */}
                <button
                  type="button"
                  onClick={() => setIsExpanded(true)}
                  className="bg-[#eff6ff]/70 hover:bg-[#dbeafe] rounded-2xl p-2.5 flex flex-col items-center justify-center text-center border-2 border-dashed border-[#60a5fa] hover:border-[#2563eb] hover:shadow-md transition-all duration-200 group category-square-card cursor-pointer"
                >
                  <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-200 mb-1.5">
                    <ArrowRight className="w-6 h-6 stroke-[2.8] text-red-500 group-hover:translate-x-0.5 transition-transform" />
                  </div>

                  <span className="text-[11.5px] sm:text-[12px] font-extrabold text-slate-800 leading-tight px-1">
                    View More Categories
                  </span>
                </button>
              </div>
            ) : (
              /* ALL 41 CATEGORIES CONTINUOUSLY IN 8-COLUMN GRID (WITHOUT COLLAPSE CARD) */
              <div className="space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="categories-megamenu-grid-8">
                  {B2B_ALL_41_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      href={cat.href}
                      onClick={onClose}
                      className="bg-white hover:bg-blue-50/30 rounded-2xl p-2.5 flex flex-col items-center justify-center text-center border border-slate-200/90 hover:border-[#1d72fe] hover:shadow-md transition-all duration-200 group category-square-card cursor-pointer"
                    >
                      <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-200 mb-1.5">
                        <B2BCategoryIcon icon={cat.icon} color={cat.color} />
                      </div>

                      <span className="text-[11px] sm:text-[11.5px] font-bold text-slate-800 group-hover:text-[#1d72fe] leading-tight line-clamp-2 px-1">
                        {cat.name}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Bottom Horizontal Line with Center Small Up-Arrow Icon Button */}
                <div className="relative flex items-center justify-center pt-8 pb-3">
                  {/* Dashed Horizontal Line */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dashed border-slate-300/80" />

                  {/* Centered Small Up Arrow Circular Button */}
                  <button
                    type="button"
                    onClick={() => setIsExpanded(false)}
                    title="Collapse to Initial 15"
                    className="relative z-10 w-8 h-8 rounded-full bg-white hover:bg-blue-50 border border-slate-200 hover:border-[#1d72fe] text-slate-500 hover:text-[#1d72fe] shadow-xs flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95"
                  >
                    <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};
