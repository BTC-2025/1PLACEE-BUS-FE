"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

interface BusinessFooterProps {
  onOpenItem?: (item: { title: string; category?: string }) => void;
}

export const BusinessFooter: React.FC<BusinessFooterProps> = ({ onOpenItem }) => {
  const handleItem = (title: string, category: string) => {
    if (onOpenItem) {
      onOpenItem({ title, category });
    }
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs mt-8 pt-8 pb-8">
      <div className="max-w-[1380px] mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
        <div>
          <h5 className="text-slate-900 font-black mb-3 text-xs">Wholesale Sourcing</h5>
          <ul className="space-y-1.5 text-slate-500">
            <li onClick={() => handleItem("Industrial Machining", "Catalog")} className="hover:text-[#1862c6] cursor-pointer">Industrial Machining</li>
            <li onClick={() => handleItem("Solar Pump Systems", "Catalog")} className="hover:text-[#1862c6] cursor-pointer">Solar Pump Systems</li>
            <li onClick={() => handleItem("Apparel & Textiles", "Catalog")} className="hover:text-[#1862c6] cursor-pointer">Apparel & Textiles</li>
            <li onClick={() => handleItem("CNC Fiber Lasers", "Catalog")} className="hover:text-[#1862c6] cursor-pointer">CNC Fiber Lasers</li>
          </ul>
        </div>
        <div>
          <h5 className="text-slate-900 font-black mb-3 text-xs">For Business Buyers</h5>
          <ul className="space-y-1.5 text-slate-500">
            <li onClick={() => handleItem("Post Sourcing Request (RFQ)", "Buyer Flow")} className="hover:text-[#1862c6] cursor-pointer">RFQ Quotations</li>
            <li onClick={() => handleItem("Trade Assurance Policy", "Buyer Protection")} className="hover:text-[#1862c6] cursor-pointer">Verified GST Billing</li>
            <li onClick={() => handleItem("Inspection Service Active", "Quality")} className="hover:text-[#1862c6] cursor-pointer">ITC Tax Credit Support</li>
            <li onClick={() => handleItem("Air/Sea Shipping Rates Active", "Logistics")} className="hover:text-[#1862c6] cursor-pointer">Volume Slabs & Freight</li>
          </ul>
        </div>
        <div>
          <h5 className="text-slate-900 font-black mb-3 text-xs">Sell on 1PLACEE</h5>
          <ul className="space-y-1.5 text-slate-500">
            <li onClick={() => handleItem("Supplier Membership", "Seller")} className="hover:text-[#1862c6] cursor-pointer">Seller Onboarding (Instant GST)</li>
            <li onClick={() => handleItem("Audit Service", "Quality")} className="hover:text-[#1862c6] cursor-pointer">Multi-Tier Slabs Setup</li>
            <li onClick={() => handleItem("P4P Ad Manager", "Promotions")} className="hover:text-[#1862c6] cursor-pointer">Unified B2B/B2C Publishing</li>
            <li onClick={() => handleItem("Supplier Dashboard", "Seller Hub")} className="hover:text-[#1862c6] cursor-pointer">Seller Hub Dashboard</li>
          </ul>
        </div>
        <div>
          <h5 className="text-slate-900 font-black mb-3 text-xs">About 1PLACEE Business</h5>
          <ul className="space-y-1.5 text-slate-500">
            <li onClick={() => handleItem("1Place.Biz Global B2B Hub", "About")} className="hover:text-[#1862c6] cursor-pointer">About 1PLACEE</li>
            <li onClick={() => handleItem("Global Partners", "Network")} className="hover:text-[#1862c6] cursor-pointer">Global Trade Partners</li>
            <li onClick={() => handleItem("Careers", "Jobs")} className="hover:text-[#1862c6] cursor-pointer">Careers</li>
            <li onClick={() => handleItem("Support", "Help")} className="hover:text-[#1862c6] cursor-pointer">Help & Documentation</li>
          </ul>
        </div>
        <div>
          <h5 className="text-slate-900 font-black mb-3 text-xs">Secured Business Guarantee</h5>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-[11px] leading-relaxed text-slate-600">
            <ShieldCheck className="w-5 h-5 text-emerald-600 mb-1.5" />
            100% Verified GSTIN vendors with automated B2B Tax Invoicing and escrow trade protection.
          </div>
        </div>
      </div>

      <div className="max-w-[1380px] mx-auto px-4 pt-4 border-t border-slate-200 text-center text-slate-400 text-[11px] flex flex-wrap justify-between items-center gap-2">
        <span>© 2026 1PLACEE Business Marketplace. All rights reserved.</span>
        <div className="flex gap-4">
          <span className="hover:text-slate-600 cursor-pointer">Terms & Conditions</span>
          <span className="hover:text-slate-600 cursor-pointer">GST Policy</span>
          <span className="hover:text-slate-600 cursor-pointer">Trade Escrow</span>
        </div>
      </div>
    </footer>
  );
};
