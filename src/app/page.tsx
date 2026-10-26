"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  Menu,
  ChevronRight,
  Megaphone,
  ShieldCheck,
  Building2,
  Award,
  Camera,
  MessageSquare,
  ShoppingBag,
  User,
  ChevronDown,
  Smartphone,
  HelpCircle,
  Scan,
  Flame,
  Check,
  Calendar,
  Sparkles,
  X,
  Send,
  Eye,
  CheckCircle2
} from "lucide-react";

export default function BuyerHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchCategory, setSearchCategory] = useState("Products");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [activeModalItem, setActiveModalItem] = useState<{ title: string; category?: string; img?: string; price?: string; moq?: string } | null>(null);
  const [rfqSubmitted, setRfqSubmitted] = useState(false);
  const [rfqProd, setRfqProd] = useState("");
  const [rfqQty, setRfqQty] = useState("");

  // Mega Menu Hover States (Matching Made-in-China exact flyout)
  const [isMoreHovered, setIsMoreHovered] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState("Toys");

  const heroSlides = [
    {
      title: "Discover Band Saw & Cutters",
      subtitle: "High Precision Metal Cutting & Industrial Automation",
      badge: "Industry Focus",
      bgGradient: "from-[#f0f4f9] via-[#e2eaf5] to-[#d0e0f3]",
      img: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Prime CNC Collection",
      subtitle: "Smart Industrial Machine Tools & Robotics",
      badge: "Global Verified",
      bgGradient: "from-[#1b3a5b] via-[#244b75] to-[#305f94]",
      textColor: "text-white",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Custom OEM Garment & Textiles",
      subtitle: "High Quality Fabrics, Uniforms & Low MOQ Sourcing",
      badge: "Audited Supplier",
      bgGradient: "from-[#20364d] via-[#2c4966] to-[#3a5e82]",
      textColor: "text-white",
      img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=500&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const leftCategories = [
    "Manufacturing & Processing Machinery",
    "Consumer Electronics",
    "Industrial Equipment & Components",
    "Electrical & Electronics",
    "Construction & Decoration",
    "Light Industry & Daily Use",
    "Auto, Motorcycle Parts & Accessories",
    "Apparel & Accessories",
    "Lights & Lighting",
    "Sporting Goods & Recreation",
    "Transportation",
    "Arts & Crafts",
    "Health & Medicine",
    "Packaging & Printing",
    "Computer Products"
  ];

  const youMayLike = [
    { name: "Vegetable & Agro", count: "138,000+ Products", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=120&q=80" },
    { name: "Fresh Garlic & Spices", count: "28,000+ Products", img: "https://images.unsplash.com/photo-1588615419957-4623a3399066?auto=format&fit=crop&w=120&q=80" },
    { name: "Promotion Gift & Pens", count: "206,000+ Products", img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=120&q=80" },
    { name: "Dolls & Soft Toys", count: "38,000+ Products", img: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=120&q=80" },
    { name: "Normal Garlic Bulk", count: "20,000+ Products", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=120&q=80" }
  ];

  const seasonalTrends = [
    { title: "Grain and Oil Machinery", img: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=150&q=80" },
    { title: "Pet Food & Snacks", img: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=150&q=80" },
    { title: "Electric Commuter Scooter", img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=150&q=80" },
    { title: "Office School Stationery", img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=150&q=80" },
    { title: "Festive Candies & Confection", img: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=150&q=80" },
    { title: "Gifts & Packaging Boxes", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=150&q=80" },
    { title: "Immersion Heater Rods", img: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=150&q=80" },
    { title: "Excavator Earth Moving", img: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=150&q=80" },
    { title: "Prefabricated Modular Villas", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=150&q=80" },
    { title: "Sunflower Seed Oil Raw", img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=150&q=80" },
    { title: "Fine Jewelry & Gold Chains", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=150&q=80" },
    { title: "Metal Laser Processing Unit", img: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=150&q=80" }
  ];

  const handleOpenItem = (item: { title: string; category?: string; img?: string; price?: string; moq?: string }) => {
    setActiveModalItem(item);
  };

  const handlePostRfq = (e: React.FormEvent) => {
    e.preventDefault();
    setRfqSubmitted(true);
    setTimeout(() => {
      setRfqSubmitted(false);
      setRfqProd("");
      setRfqQty("");
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#f5f6f9] text-slate-800 font-sans text-xs sm:text-sm relative pb-16">

      {/* FIXED RIGHT FLOATING TOOLBAR */}
      <aside className="fixed right-2 top-1/2 -translate-y-1/2 z-50 bg-white border border-slate-200 rounded-lg shadow-xl p-1 flex flex-col items-center gap-3 text-[10px] text-slate-600">
        <button onClick={() => handleOpenItem({ title: "Custom Sourcing RFQ Form", category: "Global Inquiry" })} className="flex flex-col items-center gap-0.5 p-1.5 hover:text-[#e60012] group">
          <Megaphone className="w-4 h-4 text-slate-700 group-hover:text-[#e60012]" />
          <span>RFQ</span>
        </button>
        <button onClick={() => alert("Customer Support: 24/7 Live Assistance is active")} className="flex flex-col items-center gap-0.5 p-1.5 hover:text-[#e60012] group">
          <HelpCircle className="w-4 h-4 text-slate-700 group-hover:text-[#e60012]" />
          <span>Help</span>
        </button>
        <button onClick={() => alert("1Place Mobile APP: Scan QR on footer to install")} className="flex flex-col items-center gap-0.5 p-1.5 hover:text-[#e60012] group">
          <Smartphone className="w-4 h-4 text-slate-700 group-hover:text-[#e60012]" />
          <span>APP</span>
        </button>
        <button onClick={() => alert("Sourcing Lens: AI camera recognition active")} className="flex flex-col items-center gap-0.5 p-1.5 hover:text-[#e60012] group">
          <Scan className="w-4 h-4 text-slate-700 group-hover:text-[#e60012]" />
          <span className="text-center leading-tight">Sourcing<br />Lens</span>
        </button>
      </aside>

      {/* 1. TOP HEADER (SOLID BLUE BACKGROUND AS REQUESTED) */}
      <header className="bg-[#1862c6] border-b border-blue-700 px-4 py-3 sticky top-0 z-40 shadow-md">
        <div className="max-w-[1380px] mx-auto flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">

            <div>
              <span className="text-xl font-black text-white tracking-tight">
                1PLACEE<span className="text-amber-300">.BIZ</span>
              </span>
            </div>
          </Link>

          {/* Search Box */}
          <div className="flex-1 max-w-2xl flex items-center">
            <div className="w-full flex rounded-full border-2 border-white overflow-hidden shadow-xs bg-white text-slate-800">
              <div className="relative">
                <button
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  className="h-full px-3 text-xs font-semibold text-slate-700 flex items-center gap-1 hover:bg-slate-50 border-r border-slate-200 bg-slate-50/50"
                >
                  <span>{searchCategory}</span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>
                {showCategoryDropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-md shadow-lg py-1 z-50 text-xs w-32">
                    {["Products", "Suppliers", "Product Videos"].map((cat) => (
                      <div
                        key={cat}
                        onClick={() => { setSearchCategory(cat); setShowCategoryDropdown(false); }}
                        className="px-3 py-1.5 hover:bg-slate-50 cursor-pointer"
                      >
                        {cat}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter a keyword to search products, suppliers, or machinery..."
                className="w-full px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
              />

              <button className="px-3 text-slate-400 hover:text-slate-600 hidden sm:flex items-center justify-center">
                <Camera className="w-4 h-4" />
              </button>

              <Link
                href={`/products?q=${encodeURIComponent(searchQuery || "all")}`}
                className="bg-[#1862c6] hover:bg-blue-700 text-white px-5 transition-colors flex items-center justify-center shrink-0"
              >
                <Search className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-5 shrink-0 text-xs text-white font-medium">
            <Link href="/rfq" className="flex flex-col items-center gap-0.5 hover:text-amber-300">
              <Megaphone className="w-4 h-4 text-amber-300" />
              <span className="font-semibold text-amber-300">Post My RFQ</span>
            </Link>
            <button onClick={() => alert("Trade Negotiation Chat: 0 Unread Messages")} className="flex flex-col items-center gap-0.5 hover:text-blue-100">
              <MessageSquare className="w-4 h-4" />
              <span>Messages</span>
            </button>
            <Link href="/products" className="flex flex-col items-center gap-0.5 hover:text-blue-100">
              <ShoppingBag className="w-4 h-4" />
              <span>Inquiry Basket</span>
            </Link>
            <button onClick={() => alert("Buyer Account Portal: Signed in as Global Buyer")} className="flex flex-col items-center gap-0.5 hover:text-blue-100">
              <User className="w-4 h-4" />
              <span>Account</span>
            </button>
          </div>

        </div>
      </header>

      {/* 2. SUB-NAV STRIP */}
      <nav className="bg-white border-b border-slate-200 px-4 py-2 shadow-2xs">
        <div className="max-w-[1380px] mx-auto flex items-center justify-between gap-4 text-xs font-semibold text-slate-700">
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
            <button className="flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#e60012]">
              <Menu className="w-4 h-4" />
              <span>All Categories</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>
            <span onClick={() => handleOpenItem({ title: "SourcingAI 3.0 Procurement Engine", category: "AI Technology" })} className="cursor-pointer hover:text-[#e60012] flex items-center gap-1">
              SourcingAI 3.0 <span className="bg-[#e60012] text-white text-[9px] px-1 rounded-xs font-black">New</span>
            </span>
            <span onClick={() => handleOpenItem({ title: "Secured Trading Escrow Protection", category: "Buyer Safety" })} className="cursor-pointer hover:text-[#e60012]">Secured Trading Service</span>
            <span onClick={() => handleOpenItem({ title: "Video Channel & Factory Virtual Live", category: "Factory Tours" })} className="cursor-pointer hover:text-[#e60012]">Video Channel</span>
            <span onClick={() => handleOpenItem({ title: "Top-Ranking Audited Products 2026", category: "Best Sellers" })} className="cursor-pointer hover:text-[#e60012]">Top-ranking Products</span>
          </div>

          <div className="flex items-center gap-5 shrink-0 text-slate-600 font-normal">
            <span className="hover:text-slate-900 cursor-pointer flex items-center gap-1">Buyer <ChevronDown className="w-3 h-3" /></span>
            <span className="hover:text-slate-900 cursor-pointer flex items-center gap-1">Help <ChevronDown className="w-3 h-3" /></span>
            <span className="hover:text-slate-900 cursor-pointer flex items-center gap-1">App & extension <ChevronDown className="w-3 h-3" /></span>
            <span className="hover:text-slate-900 cursor-pointer flex items-center gap-1">English <ChevronDown className="w-3 h-3" /></span>
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION (15 Categories + Center Interactive Slider + You May Like) */}
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
                    onClick={() => handleOpenItem({ title: cat, category: "Industrial Category" })}
                    className="flex items-center justify-between py-1 px-1.5 rounded hover:bg-slate-50 hover:text-[#e60012] cursor-pointer transition-colors group"
                  >
                    <span className="truncate pr-1 text-[11.5px] leading-snug">{cat}</span>
                    <ChevronRight className="w-3 h-3 text-slate-300 group-hover:text-[#e60012] shrink-0" />
                  </li>
                ))}
              </ul>
            </div>

            {/* MORE CATEGORIES WITH HOVER FLYOUT (EXACT MADE-IN-CHINA BEHAVIOR) */}
            <div
              className="pt-2 border-t border-slate-100 relative"
              onMouseEnter={() => setIsMoreHovered(true)}
              onMouseLeave={() => setIsMoreHovered(false)}
            >
              <button
                onClick={() => setIsMoreHovered(!isMoreHovered)}
                className="text-[#1a56db] hover:text-[#e60012] text-xs font-bold flex items-center justify-between w-full py-1 px-1 rounded hover:bg-slate-50 transition-colors"
              >
                <span className="flex items-center gap-1">More Categories</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              {/* FLYOUT OVERLAY PANEL (MATCHING SCREENSHOT) */}
              {isMoreHovered && (
                <div
                  className="absolute left-full bottom-[-10px] ml-1 z-50 flex shadow-2xl rounded-lg overflow-hidden border border-slate-300 bg-white animate-in fade-in duration-150"
                  style={{ width: "780px", height: "460px" }}
                >
                  {/* Tier 1 Dark Grey Column (Chemicals, Tools, Furniture, Toys...) */}
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
                          onClick={() => { handleOpenItem({ title: item, category: "Industrial Sector" }); setIsMoreHovered(false); }}
                          className={`px-3 py-1.5 rounded cursor-pointer flex items-center justify-between text-xs transition-colors ${selectedSubCategory === item ? "bg-white text-slate-900 font-bold shadow-xs" : "hover:bg-[#4d535c] text-slate-200"}`}
                        >
                          <span>{item}</span>
                          {selectedSubCategory === item && <ChevronRight className="w-3 h-3 text-[#e60012]" />}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tier 2 White Column with Subcategories Grid & Hot Products (Matching Screenshot) */}
                  <div className="flex-1 p-6 bg-white flex flex-col justify-between overflow-y-auto">
                    <div>
                      {selectedSubCategory === "Toys" ? (
                        <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-xs">
                          {/* Block 1 */}
                          <div>
                            <h4 className="font-black text-slate-900 pb-1 mb-2 border-b border-slate-100 flex items-center justify-between">
                              <span>Inflatable</span>
                            </h4>
                            <ul className="space-y-1.5 text-slate-600">
                              {["Inflatable Toys", "Inflatable Bouncer", "Inflatable Castle", "Inflatable Slide", "Inflatable Cartoon"].map((sub) => (
                                <li key={sub} onClick={() => { handleOpenItem({ title: sub, category: "Toys" }); setIsMoreHovered(false); }} className="hover:text-[#e60012] cursor-pointer">
                                  {sub}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Block 2 */}
                          <div>
                            <h4 className="font-black text-slate-900 pb-1 mb-2 border-b border-slate-100 flex items-center justify-between">
                              <span>Toys of Material</span>
                            </h4>
                            <ul className="space-y-1.5 text-slate-600">
                              {["Plush & Stuffed Toy", "Plastic Toys", "Remote Control Toys", "Wooden Toys", "Electrical Toys"].map((sub) => (
                                <li key={sub} onClick={() => { handleOpenItem({ title: sub, category: "Toys" }); setIsMoreHovered(false); }} className="hover:text-[#e60012] cursor-pointer">
                                  {sub}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Block 3 */}
                          <div>
                            <h4 className="font-black text-slate-900 pb-1 mb-2 border-b border-slate-100 flex items-center justify-between">
                              <span>Toys for Sports & Recreation</span>
                            </h4>
                            <ul className="space-y-1.5 text-slate-600">
                              {["Kids Driving Toys", "Vehicle Toys", "Novelty Toys", "Sports & Fitness", "Sword & Gun Toys"].map((sub) => (
                                <li key={sub} onClick={() => { handleOpenItem({ title: sub, category: "Toys" }); setIsMoreHovered(false); }} className="hover:text-[#e60012] cursor-pointer">
                                  {sub}
                                </li>
                              ))}
                            </ul>
                            <div className="pt-2">
                              <span onClick={() => alert("Viewing all Sports & Recreation Toys")} className="text-blue-600 hover:text-[#e60012] font-semibold cursor-pointer text-[11px]">
                                More Categories
                              </span>
                            </div>
                          </div>

                          {/* Block 4 */}
                          <div>
                            <h4 className="font-black text-slate-900 pb-1 mb-2 border-b border-slate-100 flex items-center justify-between">
                              <span>Toys of Special Use</span>
                            </h4>
                            <ul className="space-y-1.5 text-slate-600">
                              {["Intellectual & Educational Toys", "Pet Toys", "Baby Toys", "Model & Miniature Toys", "Doll & Puppet"].map((sub) => (
                                <li key={sub} onClick={() => { handleOpenItem({ title: sub, category: "Toys" }); setIsMoreHovered(false); }} className="hover:text-[#e60012] cursor-pointer">
                                  {sub}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-xs">
                          <div>
                            <h4 className="font-black text-slate-900 pb-1 mb-2 border-b border-slate-100">
                              Industrial Grade {selectedSubCategory}
                            </h4>
                            <ul className="space-y-1.5 text-slate-600">
                              {[`Standard ${selectedSubCategory} Raw`, `High Purity ${selectedSubCategory}`, `Custom ${selectedSubCategory} Spec`, `Export Ready ${selectedSubCategory}`].map((s) => (
                                <li key={s} onClick={() => { handleOpenItem({ title: s, category: selectedSubCategory }); setIsMoreHovered(false); }} className="hover:text-[#e60012] cursor-pointer">
                                  {s}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-black text-slate-900 pb-1 mb-2 border-b border-slate-100">
                              Equipment & Processing
                            </h4>
                            <ul className="space-y-1.5 text-slate-600">
                              {[`Automated ${selectedSubCategory} Unit`, `Packaging for ${selectedSubCategory}`, `Laboratory Testing`, `OEM Formulation`].map((s) => (
                                <li key={s} onClick={() => { handleOpenItem({ title: s, category: selectedSubCategory }); setIsMoreHovered(false); }} className="hover:text-[#e60012] cursor-pointer">
                                  {s}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Hot Products Image Row with Labels (Matching Screenshot) */}
                    <div className="pt-4 border-t border-slate-100 mt-4">
                      <div className="flex items-center justify-around gap-4 mb-3">
                        <div onClick={() => { handleOpenItem({ title: "Joyful Playtime, Festive Delight Toys", category: "Toy Showcase" }); setIsMoreHovered(false); }} className="flex flex-col items-center text-center cursor-pointer group">
                          <div className="w-16 h-14 rounded-md bg-slate-50 border border-slate-200 overflow-hidden flex items-center justify-center p-1 group-hover:border-[#e60012]">
                            <img src="https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=120&q=80" alt="Dog Toy" className="w-full h-full object-cover" />
                          </div>
                          <span className="text-[10px] text-slate-700 font-medium mt-1 leading-tight max-w-[90px] group-hover:text-[#e60012]">
                            Joyful Playtime, Festive Delight
                          </span>
                        </div>

                        <div onClick={() => { handleOpenItem({ title: "Children's STEM Wooden Gifts", category: "Toy Showcase" }); setIsMoreHovered(false); }} className="flex flex-col items-center text-center cursor-pointer group">
                          <div className="w-16 h-14 rounded-md bg-slate-50 border border-slate-200 overflow-hidden flex items-center justify-center p-1 group-hover:border-[#e60012]">
                            <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=120&q=80" alt="Block Toy" className="w-full h-full object-cover" />
                          </div>
                          <span className="text-[10px] text-slate-700 font-medium mt-1 leading-tight max-w-[90px] group-hover:text-[#e60012]">
                            Children's Gifts
                          </span>
                        </div>

                        <div onClick={() => { handleOpenItem({ title: "Robotics & Action Figures", category: "Toy Showcase" }); setIsMoreHovered(false); }} className="flex flex-col items-center text-center cursor-pointer group">
                          <div className="w-16 h-14 rounded-md bg-slate-50 border border-slate-200 overflow-hidden flex items-center justify-center p-1 group-hover:border-[#e60012]">
                            <img src="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=120&q=80" alt="Action Toy" className="w-full h-full object-cover" />
                          </div>
                          <span className="text-[10px] text-slate-700 font-medium mt-1 leading-tight max-w-[90px] group-hover:text-[#e60012]">
                            Toys & RC
                          </span>
                        </div>
                      </div>

                      <div className="text-[10px] text-slate-400 truncate">
                        <strong className="text-slate-600 font-semibold">Hot Products:</strong> Inflatable , Children Bicycle , RC Car , RC Helicopter , Teddy Bear , STEM Puzzle
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center Slider */}
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-3">
            <div
              onClick={() => handleOpenItem({ title: heroSlides[currentSlide].title, category: heroSlides[currentSlide].badge, img: heroSlides[currentSlide].img })}
              className={`relative h-[375px] rounded-lg overflow-hidden bg-gradient-to-br ${heroSlides[currentSlide].bgGradient} ${heroSlides[currentSlide].textColor || "text-slate-900"} p-8 flex flex-col justify-between shadow-xs transition-all duration-700 cursor-pointer group`}
            >
              <div className="space-y-3 max-w-sm z-10">
                <span className="text-[10px] font-black uppercase tracking-wider bg-black/10 dark:bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-xs">
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
                    className={`h-2 rounded-full transition-all ${currentSlide === idx ? "w-5 bg-[#e60012]" : "w-2 bg-slate-400"}`}
                  />
                ))}
              </div>
            </div>

            {/* Sub Value Props */}
            <div className="grid grid-cols-4 gap-2 bg-white rounded-lg border border-slate-200 p-3 shadow-2xs">
              <div onClick={() => handleOpenItem({ title: "Secured Trading Service", category: "100% Escrow & On-Time Guarantee" })} className="flex items-center gap-2.5 p-1.5 hover:bg-slate-50 rounded cursor-pointer transition-colors">
                <div className="w-9 h-9 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900 leading-tight">Secured Trading</div>
                  <div className="text-[10px] text-slate-400">Service</div>
                </div>
              </div>

              <div onClick={() => handleOpenItem({ title: "SMART EXPO 2026 Virtual Booth", category: "3D Virtual Factory Tours" })} className="flex items-center gap-2.5 p-1.5 hover:bg-slate-50 rounded cursor-pointer transition-colors border-l border-slate-100">
                <div className="w-9 h-9 rounded bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900 leading-tight">SMART EXPO</div>
                  <div className="text-[10px] text-slate-400">Virtual 3D</div>
                </div>
              </div>

              <div onClick={() => handleOpenItem({ title: "Leading Factory Network", category: "On-Site Audited Manufacturers" })} className="flex items-center gap-2.5 p-1.5 hover:bg-slate-50 rounded cursor-pointer transition-colors border-l border-slate-100">
                <div className="w-9 h-9 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900 leading-tight">Leading Factory</div>
                  <div className="text-[10px] text-slate-400">Audited Plants</div>
                </div>
              </div>

              <div onClick={() => handleOpenItem({ title: "Selected Supplier Program", category: "Top Tier Verified Sellers" })} className="flex items-center gap-2.5 p-1.5 hover:bg-slate-50 rounded cursor-pointer transition-colors border-l border-slate-100">
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
                    onClick={() => handleOpenItem({ title: item.name, category: "Recommended Bulk", img: item.img, price: "$2.50 - $4.80 / kg", moq: "500 kg" })}
                    className="flex items-center gap-2.5 p-1.5 rounded hover:bg-slate-50 cursor-pointer group transition-colors"
                  >
                    <div className="w-11 h-11 rounded-md bg-slate-100 overflow-hidden shrink-0 border border-slate-200">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-xs text-slate-800 truncate group-hover:text-[#e60012]">
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
                onClick={() => handleOpenItem({ title: "Custom Sourcing Request (RFQ)", category: "Direct Sourcing" })}
                className="w-full bg-[#1e293b] hover:bg-[#e60012] text-white font-bold py-2 rounded-full text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Megaphone className="w-3.5 h-3.5" />
                <span>Post Your Request Now</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SELECTED TRENDING PRODUCTS (12 CIRCLE ITEMS) */}
      <section className="max-w-[1380px] mx-auto px-4 py-3">
        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-2xs">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#e60012]" />
              <h3 className="font-black text-sm text-slate-900 uppercase tracking-tight">
                Selected Trending Products
              </h3>
            </div>
            <span className="text-xs text-slate-400">Updated Hourly • Direct Factory Stocks</span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {seasonalTrends.map((trend, idx) => (
              <div
                key={idx}
                onClick={() => handleOpenItem({ title: trend.title, category: "Trending Wholesale", img: trend.img, price: "$12.00 - $18.50 / unit", moq: "50 Units" })}
                className="flex flex-col items-center text-center group cursor-pointer p-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-100 overflow-hidden border border-slate-200 mb-2 group-hover:border-[#e60012] group-hover:scale-105 transition-all shadow-xs">
                  <img src={trend.img} alt={trend.title} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-semibold text-slate-700 line-clamp-2 leading-tight group-hover:text-[#e60012]">
                  {trend.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CATEGORY SHOWCASE 1: AGRICULTURE & FOOD */}
      <section className="max-w-[1380px] mx-auto px-4 py-3">
        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-2xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <Link href="/category/agriculture-food" className="flex items-center gap-2 group">
              <span className="w-2 h-4 bg-emerald-600 rounded-xs" />
              <h3 className="font-black text-sm text-slate-900 group-hover:text-[#1862c6] transition-colors">
                Agriculture & Food (Click to Open In-Depth Category)
              </h3>
            </Link>
            <Link href="/category/agriculture-food" className="text-xs text-emerald-700 hover:text-[#1862c6] font-bold flex items-center gap-1">
              View In-Depth Tree <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <Link
              href="/category/agriculture-food"
              className="md:col-span-3 bg-emerald-50/50 rounded-lg p-4 border border-emerald-100 flex flex-col justify-between h-56 cursor-pointer hover:shadow-md transition-all group"
            >
              <div>
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide">Bulk Produce</span>
                <h4 className="font-black text-base text-slate-900 mt-1 group-hover:text-[#1862c6] transition-colors">
                  Farm Direct Agro Supplies
                </h4>
                <p className="text-[11px] text-slate-500 mt-1">Explore all Vegetables, Fruits, Grains & Food Additives</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80"
                alt="Agro"
                className="w-full h-28 object-cover rounded shadow-xs group-hover:scale-102 transition-transform"
              />
            </Link>

            <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: "Organic Refined Sunflower Seed Oil", price: "$850 - $920 / Ton", moq: "20 Tons", query: "oil", img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=200&q=80" },
                { name: "Fresh Garlic White Bulk Export", price: "$620 - $780 / Ton", moq: "1 Container", query: "garlic", img: "https://images.unsplash.com/photo-1588615419957-4623a3399066?auto=format&fit=crop&w=200&q=80" },
                { name: "Non-GMO Feed Grade Soybean Corn", price: "$320 - $410 / Ton", moq: "50 Tons", query: "corn", img: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=200&q=80" },
                { name: "Dehydrated Onion Flakes 25kg", price: "$1.40 - $2.10 / kg", moq: "1000 kg", query: "onion", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=200&q=80" }
              ].map((prod, idx) => (
                <Link
                  key={idx}
                  href={`/products?q=${encodeURIComponent(prod.query)}`}
                  className="border border-slate-100 hover:border-[#1862c6] p-2.5 rounded-lg group cursor-pointer transition-all bg-white hover:shadow-xs"
                >
                  <div className="aspect-square bg-slate-50 rounded overflow-hidden mb-2">
                    <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="font-bold text-xs text-slate-800 line-clamp-1 group-hover:text-[#1862c6]">{prod.name}</div>
                  <div className="font-black text-xs text-emerald-700 mt-1">{prod.price}</div>
                  <div className="text-[10px] text-slate-400">MOQ: {prod.moq} • View Price List</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CATEGORY SHOWCASE 2: TOYS & KIDS PRODUCTS */}
      <section className="max-w-[1380px] mx-auto px-4 py-3">
        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-2xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2 h-4 bg-amber-500 rounded-xs" />
              <h3 className="font-black text-sm text-slate-900">Toys & Hobbies</h3>
            </div>
            <button onClick={() => alert("Loading Toys & Hobbies Catalog...")} className="text-xs text-amber-700 hover:underline font-bold flex items-center gap-1">
              View More <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div
              onClick={() => handleOpenItem({ title: "Educational Toys & Plush", category: "Toys & Hobbies", img: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=400&q=80" })}
              className="md:col-span-3 bg-amber-50/50 rounded-lg p-4 border border-amber-100 flex flex-col justify-between h-56 cursor-pointer hover:shadow-xs transition-shadow"
            >
              <div>
                <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wide">Child Safe Sourcing</span>
                <h4 className="font-black text-base text-slate-900 mt-1">Plush, RC & STEM Toys</h4>
                <p className="text-[11px] text-slate-500 mt-1">EN71, ASTM & CE Certified Factories</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=300&q=80"
                alt="Toys"
                className="w-full h-28 object-cover rounded shadow-xs"
              />
            </div>

            <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: "RC High Speed 4WD Rock Crawler", price: "$14.50 - $22.00", moq: "20 Pcs", img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=200&q=80" },
                { name: "Kids Balance Bike Lightweight Steel", price: "$8.90 - $14.20", moq: "50 Sets", img: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=200&q=80" },
                { name: "Custom Plush Teddy Bear with Logo", price: "$1.80 - $3.40", moq: "200 Pcs", img: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=200&q=80" },
                { name: "Magnetic Building Block STEM Set", price: "$4.50 - $7.80", moq: "100 Boxes", img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=200&q=80" }
              ].map((prod, idx) => (
                <div
                  key={idx}
                  onClick={() => handleOpenItem({ title: prod.name, category: "Toys & Hobbies", img: prod.img, price: prod.price, moq: prod.moq })}
                  className="border border-slate-100 hover:border-amber-500 p-2.5 rounded-lg group cursor-pointer transition-all bg-white"
                >
                  <div className="aspect-square bg-slate-50 rounded overflow-hidden mb-2">
                    <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="font-bold text-xs text-slate-800 line-clamp-1 group-hover:text-amber-700">{prod.name}</div>
                  <div className="font-black text-xs text-amber-700 mt-1">{prod.price}</div>
                  <div className="text-[10px] text-slate-400">MOQ: {prod.moq}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CATEGORY SHOWCASE 3: MANUFACTURING & MACHINERY */}
      <section className="max-w-[1380px] mx-auto px-4 py-3">
        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-2xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2 h-4 bg-[#e60012] rounded-xs" />
              <h3 className="font-black text-sm text-slate-900">Manufacturing & Processing Machinery</h3>
            </div>
            <button onClick={() => alert("Loading Machinery Catalog...")} className="text-xs text-[#e60012] hover:underline font-bold flex items-center gap-1">
              View More <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div
              onClick={() => handleOpenItem({ title: "Industrial Machining & CNC Cutters", category: "Industrial Machinery", img: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80" })}
              className="md:col-span-3 bg-red-50/50 rounded-lg p-4 border border-red-100 flex flex-col justify-between h-56 cursor-pointer hover:shadow-xs transition-shadow"
            >
              <div>
                <span className="text-[10px] font-bold text-[#e60012] uppercase tracking-wide">Heavy Machinery</span>
                <h4 className="font-black text-base text-slate-900 mt-1">CNC Lasers & Tractors</h4>
                <p className="text-[11px] text-slate-500 mt-1">Direct from Top Certified Machinery Clusters</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=300&q=80"
                alt="CNC"
                className="w-full h-28 object-cover rounded shadow-xs"
              />
            </div>

            <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: "Agricultural Farm Tractor 50HP", price: "$4,200 - $6,500", moq: "1 Set", img: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=200&q=80" },
                { name: "Hydraulic Crawler Excavator 2T", price: "$6,800 - $9,200", moq: "1 Set", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=200&q=80" },
                { name: "Fiber Laser Metal Cutting 3000W", price: "$12,000 - $18,000", moq: "1 Set", img: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=200&q=80" },
                { name: "Automatic Concrete Block Machine", price: "$8,500 - $14,000", moq: "1 Set", img: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=200&q=80" }
              ].map((prod, idx) => (
                <div
                  key={idx}
                  onClick={() => handleOpenItem({ title: prod.name, category: "Machinery", img: prod.img, price: prod.price, moq: prod.moq })}
                  className="border border-slate-100 hover:border-[#e60012] p-2.5 rounded-lg group cursor-pointer transition-all bg-white"
                >
                  <div className="aspect-square bg-slate-50 rounded overflow-hidden mb-2">
                    <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="font-bold text-xs text-slate-800 line-clamp-1 group-hover:text-[#e60012]">{prod.name}</div>
                  <div className="font-black text-xs text-[#e60012] mt-1">{prod.price}</div>
                  <div className="text-[10px] text-slate-400">MOQ: {prod.moq}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. EASY SOURCING & RFQ FORM BANNER */}
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
                  <span>Trade Assurance payment security with third-party inspection</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free quotes comparison matrix with live response time</span>
                </li>
              </ul>
            </div>

            {/* Live Responsive Form */}
            <form onSubmit={handlePostRfq} className="lg:col-span-6 bg-white text-slate-800 p-5 rounded-xl shadow-lg space-y-3">
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
                className="w-full text-xs border border-slate-300 rounded-lg px-3 py-2.5 focus:border-[#e60012] focus:outline-none"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="number"
                  required
                  value={rfqQty}
                  onChange={(e) => setRfqQty(e.target.value)}
                  placeholder="Purchase Quantity"
                  className="w-full text-xs border border-slate-300 rounded-lg px-3 py-2.5 focus:border-[#e60012] focus:outline-none"
                />
                <select className="w-full text-xs border border-slate-300 rounded-lg px-2.5 py-2.5 focus:border-[#e60012] focus:outline-none bg-white text-slate-700">
                  <option>Pieces (Pcs)</option>
                  <option>Sets</option>
                  <option>Kilograms (Kg)</option>
                  <option>Meters</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#e60012] hover:bg-[#c80010] text-white font-black py-2.5 rounded-lg text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>{rfqSubmitted ? "✓ Request Distributed to 5 Factories!" : "Post Sourcing Request"}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </form>

          </div>
        </div>
      </section>

      {/* 9. SECURED TRADING SERVICE BANNER STRIP */}
      <section className="max-w-[1380px] mx-auto px-4 py-2">
        <div
          onClick={() => handleOpenItem({ title: "1Place Trade Assurance & Escrow Guarantee", category: "Payment Protection" })}
          className="bg-gradient-to-r from-[#e60012] to-[#ff4d4f] text-white rounded-lg p-3.5 flex items-center justify-between cursor-pointer shadow-sm hover:opacity-95 transition-opacity"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-black text-sm">Secured Trading Service</h4>
              <p className="text-[11px] text-white/90">Safe payment • Quality inspection • On-time dispatch guarantee</p>
            </div>
          </div>
          <button className="bg-white text-[#e60012] font-black text-xs px-4 py-1.5 rounded-full shadow-xs">
            Learn More
          </button>
        </div>
      </section>

      {/* 10. SOURCING SOLUTIONS & TAILORED SERVICES */}
      <section className="max-w-[1380px] mx-auto px-4 py-4">
        <div className="text-center max-w-xl mx-auto mb-4">
          <h3 className="font-black text-base text-slate-900">Sourcing Solutions & Tailored Services</h3>
          <p className="text-xs text-slate-500">Specialized procurement channels designed for international buyers</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { title: "Source from Industry Hubs", desc: "Connect directly with verified manufacturing clusters", badge: "Cluster Sourcing", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&q=80", items: ["CCTV Security", "Hydraulic Jacks", "Solar Inverters"] },
            { title: "MEI Award-Winning Products", desc: "Innovative designs from MEI & RedDot winners", badge: "Quality Selected", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&q=80", items: ["Precision Bearings", "Inspection Robots", "Acoustic Sensors"] },
            { title: "Customize Your Products", desc: "OEM/ODM services with custom logo, print & packaging", badge: "Customization", img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=300&q=80", items: ["CNC Milling", "Bespoke Valves", "Lithium Packs"] },
            { title: "Smart RFQ Matching", desc: "AI distributes your specs to top 5 matched factories", badge: "AI Procurement", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80", items: ["Rapid Quotes", "Verified Rates", "Full Audit Report"] }
          ].map((sol, idx) => (
            <div
              key={idx}
              onClick={() => handleOpenItem({ title: sol.title, category: sol.badge, img: sol.img })}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer"
            >
              <div className="p-3.5">
                <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  {sol.badge}
                </span>
                <h4 className="font-bold text-xs text-slate-900 mt-2">{sol.title}</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{sol.desc}</p>
                <div className="mt-2.5 aspect-16/9 rounded overflow-hidden">
                  <img src={sol.img} alt={sol.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="bg-slate-50 px-3.5 py-2 border-t border-slate-100 flex flex-wrap gap-1 text-[10px] text-slate-600 font-semibold">
                {sol.items.map((it, i) => (
                  <span key={i} className="hover:text-[#e60012]">• {it} </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. PIONEER IN AGRICULTURE & FOOD INDUSTRY SPOTLIGHT */}
      <section className="max-w-[1380px] mx-auto px-4 py-3">
        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-2xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="text-base">🏢</span>
              <h3 className="font-black text-sm text-slate-900">Pioneer in Agricultural & Food Industry</h3>
            </div>
            <button onClick={() => alert("Visiting Verified Supplier Factory Store...")} className="text-xs text-[#e60012] font-bold hover:underline">
              View Store
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div
              onClick={() => handleOpenItem({ title: "Zhangzhou Canned & Agro Processors Co., Ltd.", category: "Diamond Member 9 Yrs • Audited Supplier", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80" })}
              className="md:col-span-8 bg-slate-900 text-white rounded-lg p-5 flex flex-col justify-between relative overflow-hidden cursor-pointer"
            >
              <div className="z-10">
                <span className="text-[10px] font-bold text-amber-400 bg-amber-400/20 px-2 py-0.5 rounded">
                  Diamond Member 9 Yrs • Audited Supplier
                </span>
                <h4 className="text-lg font-black mt-2">Zhangzhou Green Food Production Co., Ltd.</h4>
                <p className="text-xs text-slate-300 mt-1 max-w-md">
                  Major exporter of sweet corn, canned mushrooms, organic vegetables to over 85 countries worldwide.
                </p>
              </div>
              <div className="z-10 mt-6 flex items-center gap-3">
                <button className="bg-[#e60012] hover:bg-[#c80010] text-white font-bold text-xs px-4 py-2 rounded-md">
                  Contact Supplier
                </button>
                <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs px-4 py-2 rounded-md">
                  VR Factory Tour
                </button>
              </div>
              <div className="absolute right-0 bottom-0 w-72 h-full opacity-30">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80" alt="Plant" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="md:col-span-4 grid grid-cols-2 gap-3">
              <div
                onClick={() => handleOpenItem({ title: "Canned Sweet Corn 425g Bulk", category: "Agro Food", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=200&q=80", price: "$0.45 - $0.62 / can", moq: "2000 Cans" })}
                className="border border-slate-200 rounded-lg p-2.5 text-center cursor-pointer hover:border-[#e60012] transition-colors"
              >
                <div className="aspect-square bg-slate-50 rounded mb-2 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=200&q=80" alt="Corn" className="w-full h-full object-cover" />
                </div>
                <div className="font-bold text-xs truncate">Canned Sweet Corn</div>
                <div className="text-[#e60012] font-black text-xs mt-0.5">$0.45 - $0.62</div>
              </div>

              <div
                onClick={() => handleOpenItem({ title: "Canned Mushroom Slices in Brine", category: "Agro Food", img: "https://images.unsplash.com/photo-1588615419957-4623a3399066?auto=format&fit=crop&w=200&q=80", price: "$0.52 - $0.78 / can", moq: "1500 Cans" })}
                className="border border-slate-200 rounded-lg p-2.5 text-center cursor-pointer hover:border-[#e60012] transition-colors"
              >
                <div className="aspect-square bg-slate-50 rounded mb-2 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1588615419957-4623a3399066?auto=format&fit=crop&w=200&q=80" alt="Mushroom" className="w-full h-full object-cover" />
                </div>
                <div className="font-bold text-xs truncate">Canned Mushroom Slices</div>
                <div className="text-[#e60012] font-black text-xs mt-0.5">$0.52 - $0.78</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. TRADE SHOWS & EXPOS */}
      <section className="max-w-[1380px] mx-auto px-4 py-3">
        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-2xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <div>
              <h3 className="font-black text-sm text-slate-900">Trade Shows & Global Expos</h3>
              <p className="text-xs text-slate-500">Meet verified suppliers live at virtual & offline expos</p>
            </div>
            <button onClick={() => alert("Viewing complete 2026 B2B Expo schedule")} className="text-xs text-[#e60012] font-bold hover:underline flex items-center gap-1">
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
                onClick={() => handleOpenItem({ title: expo.name, category: expo.date })}
                className={`border rounded-lg p-3 cursor-pointer hover:shadow-xs transition-shadow ${expo.color}`}
              >
                <div className="flex items-center gap-1.5 text-slate-700 font-bold text-xs mb-1">
                  <Calendar className="w-3.5 h-3.5 text-[#e60012]" />
                  <span>{expo.date}</span>
                </div>
                <h5 className="font-black text-xs text-slate-900">{expo.name}</h5>
                <p className="text-[11px] text-slate-500 mt-1">{expo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FULL FOOTER */}
      <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs mt-8 pt-8 pb-8">
        <div className="max-w-[1380px] mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
          <div>
            <h5 className="text-slate-900 font-black mb-3 text-xs">Hot Products</h5>
            <ul className="space-y-1.5 text-slate-500">
              <li onClick={() => handleOpenItem({ title: "Industrial Machining", category: "Catalog" })} className="hover:text-[#e60012] cursor-pointer">Industrial Machining</li>
              <li onClick={() => handleOpenItem({ title: "Solar Pump Systems", category: "Catalog" })} className="hover:text-[#e60012] cursor-pointer">Solar Pump Systems</li>
              <li onClick={() => handleOpenItem({ title: "Apparel & Textiles", category: "Catalog" })} className="hover:text-[#e60012] cursor-pointer">Apparel & Textiles</li>
              <li onClick={() => handleOpenItem({ title: "CNC Fiber Lasers", category: "Catalog" })} className="hover:text-[#e60012] cursor-pointer">CNC Fiber Lasers</li>
            </ul>
          </div>
          <div>
            <h5 className="text-slate-900 font-black mb-3 text-xs">For Buyers</h5>
            <ul className="space-y-1.5 text-slate-500">
              <li onClick={() => handleOpenItem({ title: "Post Sourcing Request (RFQ)", category: "Buyer Flow" })} className="hover:text-[#e60012] cursor-pointer">Post RFQ</li>
              <li onClick={() => handleOpenItem({ title: "Trade Assurance Policy", category: "Buyer Protection" })} className="hover:text-[#e60012] cursor-pointer">Secured Trading</li>
              <li onClick={() => alert("Inspection Service Active")} className="hover:text-[#e60012] cursor-pointer">Third-Party Inspection</li>
              <li onClick={() => alert("Air/Sea Shipping Rates Active")} className="hover:text-[#e60012] cursor-pointer">Logistics & Shipping</li>
            </ul>
          </div>
          <div>
            <h5 className="text-slate-900 font-black mb-3 text-xs">For Suppliers</h5>
            <ul className="space-y-1.5 text-slate-500">
              <li onClick={() => alert("Supplier Registration Open")} className="hover:text-[#e60012] cursor-pointer">Supplier Membership</li>
              <li onClick={() => alert("Factory Auditing by SGS")} className="hover:text-[#e60012] cursor-pointer">Audit Service (SGS/TÜV)</li>
              <li onClick={() => alert("P4P Ad Manager")} className="hover:text-[#e60012] cursor-pointer">Product Ranking</li>
              <li onClick={() => alert("Redirecting to 1PLACE-SELLER-FE...")} className="hover:text-[#e60012] cursor-pointer">Supplier Dashboard</li>
            </ul>
          </div>
          <div>
            <h5 className="text-slate-900 font-black mb-3 text-xs">About 1Place.Biz</h5>
            <ul className="space-y-1.5 text-slate-500">
              <li onClick={() => alert("1Place.Biz Global B2B Hub")} className="hover:text-[#e60012] cursor-pointer">About Us</li>
              <li onClick={() => alert("Partners: Global Logistics Alliance")} className="hover:text-[#e60012] cursor-pointer">Global Partners</li>
              <li onClick={() => alert("Careers: Hiring Global Trade Specialists")} className="hover:text-[#e60012] cursor-pointer">Careers</li>
              <li onClick={() => alert("Support: support@1place.biz")} className="hover:text-[#e60012] cursor-pointer">Contact Us</li>
            </ul>
          </div>
          <div>
            <h5 className="text-slate-900 font-black mb-3 text-xs">Secured Sourcing Guarantee</h5>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-[11px] leading-relaxed text-slate-600">
              <ShieldCheck className="w-5 h-5 text-emerald-600 mb-1.5" />
              100% On-site audited manufacturers with Trade Assurance escrow settlement protection.
            </div>
          </div>
        </div>

        <div className="max-w-[1380px] mx-auto px-4 pt-4 border-t border-slate-200 text-center text-slate-400 text-[11px] flex flex-wrap justify-between items-center gap-2">
          <span>© 2026 1Place.Biz B2B Global Marketplace. All rights reserved.</span>
          <div className="flex gap-4">
            <span className="hover:text-slate-600 cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-slate-600 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-600 cursor-pointer">Intellectual Property</span>
          </div>
        </div>
      </footer>

      {/* 14. INTERACTIVE DETAIL & INQUIRY POPUP (ALL ITEMS CLICKABLE & WORKING) */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-black uppercase tracking-wider text-[#e60012] bg-red-50 px-2 py-0.5 rounded">
              {activeModalItem.category || "Verified B2B Listing"}
            </span>

            <h3 className="text-lg font-black text-slate-900 mt-2 pr-6">
              {activeModalItem.title}
            </h3>

            {activeModalItem.img && (
              <div className="aspect-16/9 rounded-xl overflow-hidden my-4 bg-slate-100 border border-slate-200">
                <img src={activeModalItem.img} alt={activeModalItem.title} className="w-full h-full object-cover" />
              </div>
            )}

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1.5 text-xs text-slate-700 my-4">
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Wholesale Pricing:</span>
                <span className="font-black text-[#e60012]">{activeModalItem.price || "$8.50 - $14.20 / piece"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Minimum Order (MOQ):</span>
                <span className="font-bold text-slate-800">{activeModalItem.moq || "50 Pieces"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Trade Assurance:</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Covered by 1Place Escrow
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Type your inquiry message or request custom specs..."
                className="w-full text-xs border border-slate-300 rounded-lg px-3 py-2.5 focus:border-[#e60012] focus:outline-none"
              />
              <div className="flex gap-2">
                <button
                  onClick={() => { alert(`Inquiry sent to Audited Manufacturer for: ${activeModalItem.title}`); setActiveModalItem(null); }}
                  className="flex-1 bg-[#e60012] hover:bg-[#c80010] text-white font-bold py-2.5 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Inquiry</span>
                </button>
                <button
                  onClick={() => { alert(`Sample Request Logged for: ${activeModalItem.title}`); setActiveModalItem(null); }}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-4 py-2.5 rounded-lg text-xs"
                >
                  Request Sample
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
