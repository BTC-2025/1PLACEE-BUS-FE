"use client";

import React, { useState } from "react";
import { Check, ChevronRight } from "lucide-react";

interface EasySourcingRfqProps {
  onSuccessToast?: (msg: string) => void;
}

export const EasySourcingRfq: React.FC<EasySourcingRfqProps> = ({ onSuccessToast }) => {
  const [rfqProd, setRfqProd] = useState("");
  const [rfqQty, setRfqQty] = useState("");
  const [rfqSubmitted, setRfqSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRfqSubmitted(true);
    if (onSuccessToast) {
      onSuccessToast(`RFQ for "${rfqProd}" (${rfqQty} Pcs) submitted to verified manufacturers.`);
    }
    setTimeout(() => {
      setRfqSubmitted(false);
      setRfqProd("");
      setRfqQty("");
    }, 4000);
  };

  return (
    <section className="max-w-[1380px] mx-auto px-4 py-4">
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] font-black uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded">
              EASY SOURCING SERVICE
            </span>
            <h3 className="text-3xl font-black tracking-tight text-white">
              One Request, Multiple Verified Quotes
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>200,000+ audited manufacturers ready to quote</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Trade Assurance payment security with verified GST invoices</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct real-time negotiations and volume slab pricing</span>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-6 bg-white text-slate-800 p-5 rounded-xl shadow-lg space-y-3">
            <div className="font-black text-sm text-slate-900 flex items-center justify-between">
              <span>Tell suppliers what you need</span>
              <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                Free Service
              </span>
            </div>
            <input
              type="text"
              required
              value={rfqProd}
              onChange={(e) => setRfqProd(e.target.value)}
              placeholder="Product name or keywords e.g. CNC Aluminum Flange"
              className="w-full text-xs border border-slate-300 rounded-lg px-3 py-2.5 focus:border-[#1862c6] focus:outline-none"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="number"
                required
                value={rfqQty}
                onChange={(e) => setRfqQty(e.target.value)}
                placeholder="Purchase Quantity"
                className="w-full text-xs border border-slate-300 rounded-lg px-3 py-2.5 focus:border-[#1862c6] focus:outline-none"
              />
              <select className="w-full text-xs border border-slate-300 rounded-lg px-2.5 py-2.5 focus:border-[#1862c6] focus:outline-none bg-white text-slate-700">
                <option>Pieces (Pcs)</option>
                <option>Sets</option>
                <option>Kilograms (Kg)</option>
                <option>Meters</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1862c6] hover:bg-blue-700 text-white font-black py-2.5 rounded-lg text-xs transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <span>{rfqSubmitted ? "✓ Request Distributed to 5 Factories!" : "Post Sourcing Request"}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
