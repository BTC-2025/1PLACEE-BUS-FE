"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Paperclip, 
  HelpCircle, 
  Smartphone, 
  Scan, 
  ChevronDown, 
  CheckCircle2, 
  AlertCircle,
  ArrowLeft
} from "lucide-react";

export default function PostRFQPage() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("Piece(s)");
  const [tradeTerms, setTradeTerms] = useState("FOB");
  const [targetPrice, setTargetPrice] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [maxBudget, setMaxBudget] = useState("");
  const [details, setDetails] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  
  // Shipping & Payment
  const [shippingMethod, setShippingMethod] = useState("Sea freight");
  const [destinationPort, setDestinationPort] = useState("");
  const [leadTimeDays, setLeadTimeDays] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("T/T");

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calculate completeness score based on required fields
  const hasProductName = productName.trim().length > 0;
  const hasQuantity = quantity.trim().length > 0;
  const hasMaxBudget = maxBudget.length > 0;
  const hasDetails = details.trim().length >= 10;

  const requiredFields = [
    { label: "Product Name", met: hasProductName },
    { label: "Purchase Quantity", met: hasQuantity },
    { label: "Max Budget", met: hasMaxBudget },
    { label: "Details", met: hasDetails }
  ];

  const metCount = requiredFields.filter(f => f.met).length;
  const percentage = Math.round((metCount / requiredFields.length) * 100);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map(f => f.name);
      setUploadedFiles(prev => [...prev, ...newFiles].slice(0, 3));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasProductName || !hasQuantity || !hasMaxBudget || !hasDetails) {
      alert("Please fill in all required fields indicated by *");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f5f6f9] text-slate-800 font-sans text-xs sm:text-sm relative pb-16">
      
      {/* Right Floating Help Bar */}
      <aside className="fixed right-2 top-1/2 -translate-y-1/2 z-50 bg-white border border-slate-200 rounded-lg shadow-xl p-1 flex flex-col items-center gap-3 text-[10px] text-slate-600">
        <button onClick={() => alert("RFQ Assistance Available")} className="flex flex-col items-center gap-0.5 p-1.5 hover:text-[#e60012] group">
          <HelpCircle className="w-4 h-4 text-slate-700 group-hover:text-[#e60012]" />
          <span>Help</span>
        </button>
        <button className="flex flex-col items-center gap-0.5 p-1.5 hover:text-[#e60012] group">
          <Smartphone className="w-4 h-4 text-slate-700 group-hover:text-[#e60012]" />
          <span>APP</span>
        </button>
        <button className="flex flex-col items-center gap-0.5 p-1.5 hover:text-[#e60012] group">
          <Scan className="w-4 h-4 text-slate-700 group-hover:text-[#e60012]" />
          <span className="text-center leading-tight">Sourcing<br />Lens</span>
        </button>
      </aside>

      {/* Floating TradeMessenger Status */}
      <div className="fixed right-6 bottom-4 z-40 bg-white border border-slate-300 rounded-full px-4 py-2 shadow-lg flex items-center gap-2 cursor-pointer hover:border-[#e60012]">
        <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
        <span className="text-xs font-semibold text-slate-700">TradeMessenger (Online)</span>
      </div>

      {/* Header with Made-in-China style Brand */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 shadow-2xs">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-md bg-[#e60012] flex items-center justify-center text-white font-black text-xl shadow-xs">
              1P
            </div>
            <div>
              <span className="text-xl font-black text-slate-900 tracking-tight">
                1PLACE<span className="text-[#e60012]">.BIZ</span>
              </span>
              <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                Connecting Buyers with Global Suppliers
              </span>
            </div>
          </Link>

          <Link href="/" className="text-xs font-semibold text-slate-600 hover:text-[#e60012] flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Marketplace
          </Link>
        </div>
      </header>

      {/* Page Title Strip */}
      <div className="max-w-[1200px] mx-auto px-6 pt-6 pb-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Tell suppliers what you need
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              The more specific your information, the faster response you will get.
            </p>
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-600 cursor-pointer hover:text-slate-900">
            <span>English</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>
      </div>

      {/* Main Content Form & Completeness Card */}
      <main className="max-w-[1200px] mx-auto px-6 py-4">
        <div className="grid grid-cols-12 gap-8 items-start">
          
          {/* LEFT: RFQ FORM (COL 12 / LG 8) */}
          <form onSubmit={handleSubmit} className="col-span-12 lg:col-span-8 bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs space-y-8">
            
            {/* SECTION 1: BASIC PRODUCT INFORMATION */}
            <div>
              <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
                Basic Product Information
              </h2>

              <div className="space-y-4 pt-4 text-xs">
                
                {/* Product Name */}
                <div className="grid grid-cols-12 gap-4 items-center">
                  <label className="col-span-12 sm:col-span-3 font-semibold text-slate-700 text-right sm:pr-2">
                    <span className="text-[#e60012] mr-1">*</span>Product Name:
                  </label>
                  <div className="col-span-12 sm:col-span-9">
                    <input 
                      type="text" 
                      required
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      placeholder="Enter a specific product name (e.g. CNC Aluminum Flange 50mm)"
                      className="w-full border border-slate-300 rounded px-3 py-2 text-xs focus:border-[#e60012] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="grid grid-cols-12 gap-4 items-center">
                  <label className="col-span-12 sm:col-span-3 font-semibold text-slate-700 text-right sm:pr-2">
                    Category:
                  </label>
                  <div className="col-span-12 sm:col-span-9">
                    <select 
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full sm:w-1/2 border border-slate-300 rounded px-3 py-2 text-xs focus:border-[#e60012] focus:outline-none bg-white text-slate-700"
                    >
                      <option value="">Please select</option>
                      <option value="Machinery">Manufacturing & Processing Machinery</option>
                      <option value="Electronics">Consumer Electronics</option>
                      <option value="Apparel">Apparel & Textiles</option>
                      <option value="Hardware">Hardware & Tools</option>
                      <option value="Agro">Agriculture & Food</option>
                    </select>
                  </div>
                </div>

                {/* Purchase Quantity */}
                <div className="grid grid-cols-12 gap-4 items-center">
                  <label className="col-span-12 sm:col-span-3 font-semibold text-slate-700 text-right sm:pr-2">
                    <span className="text-[#e60012] mr-1">*</span>Purchase Quantity:
                  </label>
                  <div className="col-span-12 sm:col-span-9 flex gap-3">
                    <input 
                      type="number" 
                      required
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="e.g. 500"
                      className="w-1/2 border border-slate-300 rounded px-3 py-2 text-xs focus:border-[#e60012] focus:outline-none"
                    />
                    <select 
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                      className="w-1/2 border border-slate-300 rounded px-3 py-2 text-xs focus:border-[#e60012] focus:outline-none bg-white text-slate-700"
                    >
                      <option value="Piece(s)">Piece(s)</option>
                      <option value="Set(s)">Set(s)</option>
                      <option value="Kilogram(s)">Kilogram(s)</option>
                      <option value="Ton(s)">Ton(s)</option>
                      <option value="Meter(s)">Meter(s)</option>
                    </select>
                  </div>
                </div>

                {/* Trade Terms */}
                <div className="grid grid-cols-12 gap-4 items-center">
                  <label className="col-span-12 sm:col-span-3 font-semibold text-slate-700 text-right sm:pr-2">
                    <span className="text-[#e60012] mr-1">*</span>Trade Terms:
                  </label>
                  <div className="col-span-12 sm:col-span-9">
                    <select 
                      value={tradeTerms}
                      onChange={(e) => setTradeTerms(e.target.value)}
                      className="w-full sm:w-1/3 border border-slate-300 rounded px-3 py-2 text-xs focus:border-[#e60012] focus:outline-none bg-white text-slate-700"
                    >
                      <option value="FOB">FOB (Free on Board)</option>
                      <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                      <option value="DDP">DDP (Delivered Duty Paid)</option>
                      <option value="EXW">EXW (Ex Works)</option>
                    </select>
                  </div>
                </div>

                {/* Target Unit Price */}
                <div className="grid grid-cols-12 gap-4 items-center">
                  <label className="col-span-12 sm:col-span-3 font-semibold text-slate-700 text-right sm:pr-2">
                    Target Unit Price:
                  </label>
                  <div className="col-span-12 sm:col-span-9 flex gap-3">
                    <input 
                      type="number" 
                      step="0.01"
                      value={targetPrice}
                      onChange={(e) => setTargetPrice(e.target.value)}
                      placeholder="e.g. 12.50"
                      className="w-1/2 border border-slate-300 rounded px-3 py-2 text-xs focus:border-[#e60012] focus:outline-none"
                    />
                    <select 
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="w-1/2 border border-slate-300 rounded px-3 py-2 text-xs focus:border-[#e60012] focus:outline-none bg-white text-slate-700"
                    >
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="INR">INR (₹)</option>
                      <option value="GBP">GBP (£)</option>
                    </select>
                  </div>
                </div>

                {/* Max Budget */}
                <div className="grid grid-cols-12 gap-4 items-center">
                  <label className="col-span-12 sm:col-span-3 font-semibold text-slate-700 text-right sm:pr-2">
                    <span className="text-[#e60012] mr-1">*</span>Max Budget:
                  </label>
                  <div className="col-span-12 sm:col-span-9 flex items-center gap-2">
                    <select 
                      required
                      value={maxBudget}
                      onChange={(e) => setMaxBudget(e.target.value)}
                      className="w-full sm:w-1/3 border border-slate-300 rounded px-3 py-2 text-xs focus:border-[#e60012] focus:outline-none bg-white text-slate-700"
                    >
                      <option value="">Please select</option>
                      <option value="< 1,000">&lt; 1,000</option>
                      <option value="1,000 - 5,000">1,000 - 5,000</option>
                      <option value="5,000 - 20,000">5,000 - 20,000</option>
                      <option value="20,000 - 50,000">20,000 - 50,000</option>
                      <option value="> 50,000">&gt; 50,000</option>
                    </select>
                    <span className="text-slate-500 font-semibold">{currency}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-12 gap-4 items-start">
                  <label className="col-span-12 sm:col-span-3 font-semibold text-slate-700 text-right sm:pr-2 pt-2">
                    <span className="text-[#e60012] mr-1">*</span>Details:
                  </label>
                  <div className="col-span-12 sm:col-span-9 space-y-2">
                    <textarea 
                      required
                      rows={5}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Describe the product you want to source. You may include: Color, Material, Size, Weight, Packaging and certificate requirements and/or others."
                      className="w-full border border-slate-300 rounded p-3 text-xs focus:border-[#e60012] focus:outline-none leading-relaxed"
                    />

                    {/* File Upload Box */}
                    <div className="bg-[#f8f9fb] border border-dashed border-slate-300 rounded p-3 flex flex-wrap items-center justify-between gap-2">
                      <label className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                        <Paperclip className="w-3.5 h-3.5" />
                        <span>Upload product images or files ({uploadedFiles.length}/3)</span>
                        <input type="file" multiple onChange={handleFileUpload} className="hidden" />
                      </label>
                      <span className="text-[10px] text-slate-400">JPG, PNG, PDF up to 10MB</span>
                    </div>

                    {uploadedFiles.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {uploadedFiles.map((file, idx) => (
                          <span key={idx} className="bg-slate-100 border border-slate-200 text-slate-700 text-[10px] px-2 py-0.5 rounded">
                            {file}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>

            {/* SECTION 2: SHIPPING AND PAYMENT */}
            <div>
              <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
                Shipping and Payment
              </h2>

              <div className="space-y-4 pt-4 text-xs">
                
                {/* Shipping Method */}
                <div className="grid grid-cols-12 gap-4 items-center">
                  <label className="col-span-12 sm:col-span-3 font-semibold text-slate-700 text-right sm:pr-2">
                    <span className="text-[#e60012] mr-1">*</span>Shipping Method:
                  </label>
                  <div className="col-span-12 sm:col-span-9">
                    <select 
                      value={shippingMethod}
                      onChange={(e) => setShippingMethod(e.target.value)}
                      className="w-full sm:w-1/3 border border-slate-300 rounded px-3 py-2 text-xs focus:border-[#e60012] focus:outline-none bg-white text-slate-700"
                    >
                      <option value="Sea freight">Sea freight</option>
                      <option value="Air freight">Air freight</option>
                      <option value="Express">Express (DHL/FedEx)</option>
                      <option value="Land freight">Land transportation</option>
                    </select>
                  </div>
                </div>

                {/* Destination Port */}
                <div className="grid grid-cols-12 gap-4 items-center">
                  <label className="col-span-12 sm:col-span-3 font-semibold text-slate-700 text-right sm:pr-2">
                    Destination Port:
                  </label>
                  <div className="col-span-12 sm:col-span-9">
                    <input 
                      type="text" 
                      value={destinationPort}
                      onChange={(e) => setDestinationPort(e.target.value)}
                      placeholder="e.g. Mumbai Port, Rotterdam, or Los Angeles"
                      className="w-full sm:w-2/3 border border-slate-300 rounded px-3 py-2 text-xs focus:border-[#e60012] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Lead Time */}
                <div className="grid grid-cols-12 gap-4 items-center">
                  <label className="col-span-12 sm:col-span-3 font-semibold text-slate-700 text-right sm:pr-2">
                    Lead Time:
                  </label>
                  <div className="col-span-12 sm:col-span-9 flex items-center gap-2">
                    <span className="text-slate-500">Ship in</span>
                    <input 
                      type="number" 
                      value={leadTimeDays}
                      onChange={(e) => setLeadTimeDays(e.target.value)}
                      placeholder="30"
                      className="w-20 border border-slate-300 rounded px-2.5 py-1.5 text-xs focus:border-[#e60012] focus:outline-none text-center"
                    />
                    <span className="text-slate-500">day(s) after supplier receives the initial payment.</span>
                  </div>
                </div>

                {/* Payment Terms */}
                <div className="grid grid-cols-12 gap-4 items-center">
                  <label className="col-span-12 sm:col-span-3 font-semibold text-slate-700 text-right sm:pr-2">
                    <span className="text-[#e60012] mr-1">*</span>Payment Terms:
                  </label>
                  <div className="col-span-12 sm:col-span-9">
                    <select 
                      value={paymentTerms}
                      onChange={(e) => setPaymentTerms(e.target.value)}
                      className="w-full sm:w-1/3 border border-slate-300 rounded px-3 py-2 text-xs focus:border-[#e60012] focus:outline-none bg-white text-slate-700"
                    >
                      <option value="T/T">T/T (Telegraphic Transfer)</option>
                      <option value="L/C">L/C (Letter of Credit)</option>
                      <option value="D/P">D/P (Documents Against Payment)</option>
                      <option value="Western Union">Western Union / Escrow</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="grid grid-cols-12 gap-4 pt-4">
                  <div className="hidden sm:block sm:col-span-3" />
                  <div className="col-span-12 sm:col-span-9">
                    <button 
                      type="submit"
                      className="bg-[#e60012] hover:bg-[#c80010] text-white font-bold px-8 py-2.5 rounded text-sm transition-colors shadow-sm"
                    >
                      Submit
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </form>

          {/* RIGHT: COMPLETENESS PROGRESS CARD (COL 12 / LG 4) */}
          <div className="col-span-12 lg:col-span-4 bg-white border border-slate-200 rounded-lg p-6 shadow-xs text-center space-y-6">
            
            <h3 className="text-base font-bold text-slate-900">
              Completeness
            </h3>

            {/* Circular Progress Gauge */}
            <div className="flex justify-center">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    className="text-slate-100" 
                    strokeWidth="8" 
                    stroke="currentColor" 
                    fill="transparent" 
                  />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    className={percentage === 100 ? "text-emerald-500" : "text-[#3b82f6]"} 
                    strokeWidth="8" 
                    strokeDasharray={251.2}
                    strokeDashoffset={251.2 - (251.2 * percentage) / 100}
                    strokeLinecap="round"
                    stroke="currentColor" 
                    fill="transparent" 
                    style={{ transition: "stroke-dashoffset 0.5s ease" }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className={`text-base font-black ${percentage === 100 ? "text-emerald-600" : "text-slate-700"}`}>
                    {percentage === 100 ? "Complete" : "Incomplete"}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{percentage}%</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed px-4">
              The more precise information you write, the better response you will get.
            </p>

            {/* Checklist */}
            <div className="text-left bg-slate-50 p-4 rounded-lg border border-slate-100 space-y-2 text-xs">
              <span className="text-[11px] text-slate-400 block font-semibold mb-2">
                Please fill in the required fields before submitting:
              </span>
              {requiredFields.map((field, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  {field.met ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e60012] shrink-0" />
                  )}
                  <span className={field.met ? "text-slate-800 font-semibold line-through opacity-70" : "text-slate-600"}>
                    {field.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </main>

      {/* SUCCESS MODAL ON SUBMIT */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl border border-slate-200 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-black text-slate-900">RFQ Successfully Submitted!</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your sourcing request for <strong>{productName}</strong> ({quantity} {unit}) has been broadcast to <strong>5 verified manufacturers</strong>. You will receive quotes in your Inquiry Basket within 24 hours.
            </p>
            <div className="pt-2">
              <Link 
                href="/" 
                className="inline-block bg-[#e60012] hover:bg-[#c80010] text-white font-bold px-6 py-2.5 rounded-lg text-xs"
              >
                Return to Marketplace
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Made-in-China Footer Links */}
      <footer className="max-w-[1200px] mx-auto px-6 pt-12 text-center text-xs text-slate-400 space-y-2">
        <div className="flex flex-wrap justify-center gap-4 text-slate-500">
          <span className="hover:text-slate-800 cursor-pointer">About Us</span>
          <span>|</span>
          <span className="hover:text-slate-800 cursor-pointer">FAQ</span>
          <span>|</span>
          <span className="hover:text-slate-800 cursor-pointer">Help</span>
          <span>|</span>
          <span className="hover:text-slate-800 cursor-pointer">Site Map</span>
          <span>|</span>
          <span className="hover:text-slate-800 cursor-pointer">Contact Us</span>
          <span>|</span>
          <span className="hover:text-slate-800 cursor-pointer">Mobile Site</span>
        </div>
        <div className="text-[11px] text-slate-400">
          User Agreement • Declaration • Privacy Policy
        </div>
        <div className="text-[11px] text-slate-400">
          Copyright © 1998-2026 Focus Technology Co., Ltd. / 1Place.Biz All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}
