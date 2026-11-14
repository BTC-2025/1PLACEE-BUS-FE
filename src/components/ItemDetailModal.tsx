"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Send } from "lucide-react";

interface ItemDetailModalProps {
  item: { title: string; category?: string; img?: string; price?: string; moq?: string } | null;
  onClose: () => void;
  onSendInquiry?: (title: string) => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({ item, onClose, onSendInquiry }) => {
  const [inquiryText, setInquiryText] = useState("");
  const [sent, setSent] = useState(false);

  if (!item) return null;

  const handleSend = () => {
    setSent(true);
    if (onSendInquiry) onSendInquiry(item.title);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-[10px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
          {item.category || "Verified B2B Listing"}
        </span>

        <h3 className="text-lg font-black text-slate-900 mt-2 pr-6">
          {item.title}
        </h3>

        {item.img && (
          <div className="aspect-16/9 rounded-xl overflow-hidden my-4 bg-slate-100 border border-slate-200">
            <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1.5 text-xs text-slate-700 my-4">
          <div className="flex justify-between">
            <span className="text-slate-500 font-medium">Wholesale Pricing:</span>
            <span className="font-black text-[#1862c6]">{item.price || "$8.50 - $14.20 / piece"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500 font-medium">Minimum Order (MOQ):</span>
            <span className="font-bold text-slate-800">{item.moq || "50 Pieces"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500 font-medium">Trade Assurance:</span>
            <span className="font-bold text-emerald-600 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Covered by 1PLACEE Escrow & GST
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <input
            type="text"
            value={inquiryText}
            onChange={(e) => setInquiryText(e.target.value)}
            placeholder="Type your inquiry message or request custom volume slabs..."
            className="w-full text-xs border border-slate-300 rounded-lg px-3 py-2.5 focus:border-[#1862c6] focus:outline-none"
          />
          <div className="flex gap-2">
            <button
              onClick={handleSend}
              className="flex-1 bg-[#1862c6] hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{sent ? "Inquiry Sent Successfully!" : "Send Direct Inquiry"}</span>
            </button>
            <button
              onClick={() => {
                alert(`Sample Request Logged for: ${item.title}`);
                onClose();
              }}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-4 py-2.5 rounded-lg text-xs cursor-pointer"
            >
              Request Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
