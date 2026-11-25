"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { BusinessFooter } from "@/components/BusinessFooter";
import { B2B_ALL_41_CATEGORIES } from "@/data/b2bMegaMenuCategoriesData";
import {
  ChevronRight,
  X,
  Footprints,
  HardHat,
  Shield,
  Shirt,
  Briefcase,
  Umbrella,
  Layers,
  Baby,
  Snowflake,
  Tag,
  ShoppingBag,
  Glasses,
  Sparkles,
  Crown,
  Scissors,
  Heart,
  GraduationCap,
  Award,
  Package,
} from "lucide-react";

interface SubCategoryItem {
  name: string;
  image: string;
  href: string;
}

interface CategoryGroup {
  id: string;
  name: string;
  items: SubCategoryItem[];
}

const APPAREL_CATEGORY_GROUPS: CategoryGroup[] = [
  {
    id: "footwear",
    name: "Men, Women & Kids Footwear",
    items: [
      { name: "Shoes", image: "/categories/b2b-products/shoes-casual.png", href: "/products?q=shoes" },
      { name: "Gents Shoes", image: "/categories/b2b-products/gents-shoes.png", href: "/products?q=gents-shoes" },
      { name: "Mens Footwear", image: "/categories/b2b-products/mens-footwear.png", href: "/products?q=mens-footwear" },
      { name: "Leather Shoes", image: "/categories/b2b-products/leather-shoes.png", href: "/products?q=leather-shoes" },
      { name: "Leather Footwear", image: "/categories/b2b-products/leather-footwear.png", href: "/products?q=leather-footwear" },
    ],
  },
  {
    id: "industrial-safety",
    name: "Industrial Clothing & Safety Wear",
    items: [
      { name: "Industrial Gloves", image: "/categories/b2b-products/safety-gloves.png", href: "/products?q=industrial-gloves" },
      { name: "Industrial Safety Masks", image: "/categories/b2b-products/safety-masks.png", href: "/products?q=safety-masks" },
      { name: "Industrial Safety Helmets", image: "/categories/b2b-products/safety-helmets.png", href: "/products?q=safety-helmets" },
      { name: "Safety Hats", image: "/categories/b2b-products/safety-hats.png", href: "/products?q=safety-hats" },
    ],
  },
  {
    id: "undergarments",
    name: "Undergarments & Inner Wear",
    items: [
      { name: "Undergarments", image: "/categories/b2b-products/undergarments.png", href: "/products?q=undergarments" },
      { name: "Nightgowns", image: "/categories/b2b-products/nightgowns.png", href: "/products?q=nightgowns" },
      { name: "Women Underwear", image: "/categories/b2b-products/women-underwear.png", href: "/products?q=women-underwear" },
      { name: "Ladies Bra", image: "/categories/b2b-products/ladies-bra.png", href: "/products?q=ladies-bra" },
    ],
  },
  {
    id: "uniforms",
    name: "Academic & Commercial Uniforms",
    items: [
      { name: "School Uniforms", image: "/categories/b2b-products/school-uniforms.png", href: "/products?q=school-uniforms" },
      { name: "Corporate Uniforms", image: "/categories/b2b-products/corporate-uniforms.png", href: "/products?q=corporate-uniforms" },
      { name: "Hotel Uniforms", image: "/categories/b2b-products/hotel-uniforms.png", href: "/products?q=hotel-uniforms" },
      { name: "Lab Coat", image: "/categories/b2b-products/lab-coat.png", href: "/products?q=lab-coat" },
      { name: "School T-Shirts", image: "/categories/b2b-products/school-tshirts.png", href: "/products?q=school-tshirts" },
    ],
  },
  {
    id: "ladies-dresses",
    name: "Ladies Dresses & Apparel",
    items: [
      { name: "Ladies Wear", image: "/categories/b2b-products/ladies-wear.png", href: "/products?q=ladies-wear" },
      { name: "Ladies Kurtis", image: "/categories/b2b-products/ladies-kurtis.png", href: "/products?q=ladies-kurtis" },
      { name: "Ladies Tops", image: "/categories/b2b-products/ladies-tops.png", href: "/products?q=ladies-tops" },
      { name: "Ladies Dresses", image: "/categories/b2b-products/ladies-dresses.png", href: "/products?q=ladies-dresses" },
    ],
  },
  {
    id: "bags",
    name: "Briefcases, Portfolio & Laptop Bags",
    items: [
      { name: "Laptop Bags", image: "/categories/b2b-products/laptop-bags.png", href: "/products?q=laptop-bags" },
      { name: "Backpacks", image: "/categories/b2b-products/backpacks.png", href: "/products?q=backpacks" },
      { name: "Leather Laptop Bags", image: "/categories/b2b-products/leather-laptop-bags.png", href: "/products?q=leather-laptop-bags" },
      { name: "Travel Bags", image: "/categories/b2b-products/travel-bags.png", href: "/products?q=travel-bags" },
    ],
  },
  {
    id: "umbrella",
    name: "Umbrella & Raincoats",
    items: [
      { name: "Umbrella", image: "/categories/b2b-products/umbrella.png", href: "/products?q=umbrella" },
      { name: "Rain Coat", image: "/categories/b2b-products/raincoat.png", href: "/products?q=raincoat" },
      { name: "Rainwear", image: "/categories/b2b-products/rainwear.png", href: "/products?q=rainwear" },
      { name: "Promotional Umbrellas", image: "/categories/b2b-products/promo-umbrellas.png", href: "/products?q=promotional-umbrellas" },
    ],
  },
  {
    id: "fabrics",
    name: "Apparel Fabrics & Dress Materials",
    items: [
      { name: "Fabric", image: "/categories/b2b-products/fabric.png", href: "/products?q=fabric" },
      { name: "Printed Fabric", image: "/categories/b2b-products/printed-fabric.png", href: "/products?q=printed-fabric" },
      { name: "Textile Fabric", image: "/categories/b2b-products/textile-fabric.png", href: "/products?q=textile-fabric" },
      { name: "Natural Fabrics", image: "/categories/b2b-products/natural-fabrics.png", href: "/products?q=natural-fabrics" },
    ],
  },
  {
    id: "kids-wear",
    name: "Kids Casual, Ethnic & Western Wear",
    items: [
      { name: "Kids Clothing", image: "/categories/b2b-products/kids-clothing.png", href: "/products?q=kids-clothing" },
      { name: "Kids Wear", image: "/categories/b2b-products/kids-wear.png", href: "/products?q=kids-wear" },
      { name: "Kids T-shirt", image: "/categories/b2b-products/kids-tshirt.png", href: "/products?q=kids-tshirt" },
      { name: "Kids Frocks", image: "/categories/b2b-products/kids-frocks.png", href: "/products?q=kids-frocks" },
    ],
  },
  {
    id: "winter-wear",
    name: "Winter Clothing & Accessories",
    items: [
      { name: "Sweatshirt", image: "/categories/b2b-products/sweatshirt.png", href: "/products?q=sweatshirt" },
      { name: "Sweater", image: "/categories/b2b-products/sweater.png", href: "/products?q=sweater" },
      { name: "Winter Wear", image: "/categories/b2b-products/winter-wear.png", href: "/products?q=winter-wear" },
      { name: "Fashion Hoodies", image: "/categories/b2b-products/hoodies.png", href: "/products?q=fashion-hoodies" },
    ],
  },
  {
    id: "mens-clothing",
    name: "Men's Shirts, Jeans & Clothing",
    items: [
      { name: "Men's Wear", image: "/categories/b2b-products/mens-wear.png", href: "/products?q=mens-wear" },
      { name: "Men's T-Shirt", image: "/categories/b2b-products/mens-tshirt.png", href: "/products?q=mens-tshirt" },
      { name: "Mens Cotton T-Shirt", image: "/categories/b2b-products/mens-cotton-tshirt.png", href: "/products?q=mens-cotton-tshirt" },
      { name: "Men's Jeans", image: "/categories/b2b-products/mens-jeans.png", href: "/products?q=mens-jeans" },
    ],
  },
  {
    id: "leather-goods",
    name: "Leather Goods & Accessories",
    items: [
      { name: "Leather Goods", image: "/categories/b2b-products/leather-goods.png", href: "/products?q=leather-goods" },
      { name: "Leather Articles", image: "/categories/b2b-products/leather-articles.png", href: "/products?q=leather-articles" },
      { name: "Leather Covers", image: "/categories/b2b-products/leather-covers.png", href: "/products?q=leather-covers" },
      { name: "Leather Accessories", image: "/categories/b2b-products/leather-accessories.png", href: "/products?q=leather-accessories" },
    ],
  },
  {
    id: "mannequins",
    name: "Mannequins & Apparel Display",
    items: [
      { name: "Jewelry Display Stand", image: "/categories/b2b-products/jewelry-display.png", href: "/products?q=jewelry-display" },
      { name: "Mannequins", image: "/categories/b2b-products/mannequins.png", href: "/products?q=mannequins" },
      { name: "Garment Display Rack", image: "/categories/b2b-products/garment-rack.png", href: "/products?q=garment-rack" },
      { name: "Male Mannequins", image: "/categories/b2b-products/male-mannequins.png", href: "/products?q=male-mannequins" },
    ],
  },
  {
    id: "designer-bags",
    name: "Designer & Fashion Bags",
    items: [
      { name: "Ladies Bags", image: "/categories/b2b-products/ladies-bags.png", href: "/products?q=ladies-bags" },
      { name: "Fashion Handbags", image: "/categories/b2b-products/fashion-handbags.png", href: "/products?q=fashion-handbags" },
      { name: "Handbags", image: "/categories/b2b-products/handbags.png", href: "/products?q=handbags" },
      { name: "Designer Bag", image: "/categories/b2b-products/designer-bag.png", href: "/products?q=designer-bag" },
    ],
  },
  {
    id: "eyewear",
    name: "Eyewear, Sunglasses & Accessories",
    items: [
      { name: "Goggles", image: "/categories/b2b-products/goggles.png", href: "/products?q=goggles" },
      { name: "Sunglasses", image: "/categories/b2b-products/sunglasses.png", href: "/products?q=sunglasses" },
      { name: "Eyewear", image: "/categories/b2b-products/eyewear.png", href: "/products?q=eyewear" },
      { name: "Lenses", image: "/categories/b2b-products/lenses.png", href: "/products?q=lenses" },
    ],
  },
  {
    id: "sarees",
    name: "Sarees & Lehenga",
    items: [
      { name: "Ladies Sarees", image: "/categories/b2b-products/ladies-sarees.png", href: "/products?q=ladies-sarees" },
      { name: "Silk Saree", image: "/categories/b2b-products/silk-saree.png", href: "/products?q=silk-saree" },
      { name: "Designer Sarees", image: "/categories/b2b-products/designer-sarees.png", href: "/products?q=designer-sarees" },
      { name: "Lehenga", image: "/categories/b2b-products/lehenga.png", href: "/products?q=lehenga" },
    ],
  },
  {
    id: "caps-hats",
    name: "Caps, Hats & Headwear",
    items: [
      { name: "Hats", image: "/categories/b2b-products/hats.png", href: "/products?q=hats" },
      { name: "Apparel Cap", image: "/categories/b2b-products/apparel-cap.png", href: "/products?q=apparel-cap" },
      { name: "Fashion Caps", image: "/categories/b2b-products/fashion-caps.png", href: "/products?q=fashion-caps" },
      { name: "Winter Caps", image: "/categories/b2b-products/winter-caps.png", href: "/products?q=winter-caps" },
    ],
  },
  {
    id: "buttons-zippers",
    name: "Buttons, Cufflink, Zippers & Buckles",
    items: [
      { name: "Buttons", image: "/categories/b2b-products/buttons.png", href: "/products?q=buttons" },
      { name: "Buckles", image: "/categories/b2b-products/buckles.png", href: "/products?q=buckles" },
      { name: "Zippers", image: "/categories/b2b-products/zippers.png", href: "/products?q=zippers" },
      { name: "Natural Buttons", image: "/categories/b2b-products/natural-buttons.png", href: "/products?q=natural-buttons" },
    ],
  },
];

function getCategoryItemVisual(groupId: string, idx: number) {
  const palettes = [
    { bg: "#eff6ff", color: "#0e0f89" },
    { bg: "#fef3c7", color: "#b45309" },
    { bg: "#ecfdf5", color: "#047857" },
    { bg: "#fdf2f8", color: "#be185d" },
    { bg: "#f5f3ff", color: "#6d28d9" },
  ];
  const palette = palettes[idx % palettes.length];

  const iconMap: Record<string, React.ElementType[]> = {
    footwear: [Footprints, Award, Footprints, Shield, Briefcase],
    "industrial-safety": [Shield, HardHat, HardHat, Award],
    undergarments: [Heart, Sparkles, Heart, Shirt],
    uniforms: [GraduationCap, Briefcase, BuildingIcon(), Shield, Shirt],
    "ladies-dresses": [Sparkles, Shirt, Heart, Crown],
    bags: [Briefcase, ShoppingBag, Briefcase, Package],
    umbrella: [Umbrella, Shield, Umbrella, Sparkles],
    fabrics: [Layers, Sparkles, Layers, Tag],
    "kids-wear": [Baby, Shirt, Baby, Sparkles],
    "winter-wear": [Snowflake, Shirt, Snowflake, Shield],
    "mens-clothing": [Shirt, Tag, Shirt, Briefcase],
    "leather-goods": [Briefcase, Package, Shield, Award],
    mannequins: [Sparkles, Shirt, Layers, Award],
    "designer-bags": [ShoppingBag, Heart, ShoppingBag, Crown],
    eyewear: [Glasses, Sparkles, Glasses, Shield],
    sarees: [Crown, Sparkles, Heart, Crown],
    "caps-hats": [Crown, Tag, Sparkles, Snowflake],
    "buttons-zippers": [Scissors, Tag, Layers, Sparkles],
  };

  const icons = iconMap[groupId] || [Package, Tag, Layers, Sparkles];
  const Icon = icons[idx % icons.length];
  return { Icon, ...palette };
}

function BuildingIcon() {
  return Briefcase;
}

function getCategoryGroupsForSlug(slug: string, categoryName: string): CategoryGroup[] {
  if (slug === "apparel-fashion" || slug === "apparel-fashion-accessories") {
    return APPAREL_CATEGORY_GROUPS;
  }

  if (slug === "consumer-electronics") {
    return [
      {
        id: "home-appliances",
        name: "Home & Kitchen Appliances",
        items: [
          { name: "Air Conditioners", image: "", href: "/products?q=air-conditioners" },
          { name: "Refrigerators", image: "", href: "/products?q=refrigerators" },
          { name: "Washing Machines", image: "", href: "/products?q=washing-machines" },
          { name: "Microwave Ovens", image: "", href: "/products?q=microwave-ovens" },
          { name: "Mixer Grinders", image: "", href: "/products?q=mixer-grinders" },
        ],
      },
      {
        id: "audio-video",
        name: "Audio, Video & Entertainment",
        items: [
          { name: "Smart LED TVs", image: "", href: "/products?q=smart-led-tv" },
          { name: "Bluetooth Speakers", image: "", href: "/products?q=bluetooth-speakers" },
          { name: "Home Theater Systems", image: "", href: "/products?q=home-theater" },
          { name: "Wireless Earbuds", image: "", href: "/products?q=wireless-earbuds" },
        ],
      },
      {
        id: "smart-gadgets",
        name: "Smart Gadgets & Wearables",
        items: [
          { name: "Smart Watches", image: "", href: "/products?q=smart-watches" },
          { name: "Power Banks", image: "", href: "/products?q=power-banks" },
          { name: "Fast Chargers", image: "", href: "/products?q=fast-chargers" },
          { name: "Smart Home Plugs", image: "", href: "/products?q=smart-plugs" },
        ],
      },
      {
        id: "computer-mobile",
        name: "Computer & Mobile Accessories",
        items: [
          { name: "Laptop Stands", image: "", href: "/products?q=laptop-stands" },
          { name: "USB-C Hubs", image: "", href: "/products?q=usb-c-hubs" },
          { name: "Mechanical Keyboards", image: "", href: "/products?q=keyboards" },
          { name: "Gaming Mice", image: "", href: "/products?q=gaming-mice" },
        ],
      },
    ];
  }

  if (slug === "agricultural-products") {
    return [
      {
        id: "farm-machinery",
        name: "Farm Machinery & Tractors",
        items: [
          { name: "Power Tillers", image: "", href: "/products?q=power-tillers" },
          { name: "Brush Cutters", image: "", href: "/products?q=brush-cutters" },
          { name: "Chaff Cutters", image: "", href: "/products?q=chaff-cutters" },
          { name: "Sprayers", image: "", href: "/products?q=sprayers" },
        ],
      },
      {
        id: "irrigation",
        name: "Irrigation & Water Pumps",
        items: [
          { name: "Drip Irrigation Kits", image: "", href: "/products?q=drip-irrigation" },
          { name: "Solar Water Pumps", image: "", href: "/products?q=solar-pumps" },
          { name: "HDPE Pipes", image: "", href: "/products?q=hdpe-pipes" },
          { name: "Sprinkler Systems", image: "", href: "/products?q=sprinklers" },
        ],
      },
      {
        id: "seeds-fertilizers",
        name: "Seeds, Fertilizers & Bio-Care",
        items: [
          { name: "Hybrid Seeds", image: "", href: "/products?q=hybrid-seeds" },
          { name: "Organic Manure", image: "", href: "/products?q=organic-manure" },
          { name: "Bio Fertilizers", image: "", href: "/products?q=bio-fertilizers" },
          { name: "Cocopeat Blocks", image: "", href: "/products?q=cocopeat" },
        ],
      },
    ];
  }

  // Dynamic fallback for all other 41 B2B categories
  return [
    {
      id: `${slug}-core`,
      name: `${categoryName} - Core Products`,
      items: [
        { name: `Standard ${categoryName}`, image: "", href: `/products?q=${slug}-standard` },
        { name: `Industrial ${categoryName}`, image: "", href: `/products?q=${slug}-industrial` },
        { name: `Commercial Grade`, image: "", href: `/products?q=${slug}-commercial` },
        { name: `Export Quality`, image: "", href: `/products?q=${slug}-export` },
      ],
    },
    {
      id: `${slug}-bulk`,
      name: `Bulk & Wholesale ${categoryName}`,
      items: [
        { name: `MOQ Wholesale Packs`, image: "", href: `/products?q=${slug}-wholesale` },
        { name: `OEM / Custom Branding`, image: "", href: `/products?q=${slug}-oem` },
        { name: `Factory Direct Lots`, image: "", href: `/products?q=${slug}-factory` },
        { name: `Sample Kits`, image: "", href: `/products?q=${slug}-sample` },
      ],
    },
    {
      id: `${slug}-accessories`,
      name: `Spares, Parts & Accessories`,
      items: [
        { name: `Replacement Parts`, image: "", href: `/products?q=${slug}-parts` },
        { name: `Packaging & Cartons`, image: "", href: `/products?q=${slug}-packaging` },
        { name: `Testing & QC Kits`, image: "", href: `/products?q=${slug}-qc` },
        { name: `Maintenance Tools`, image: "", href: `/products?q=${slug}-tools` },
      ],
    },
  ];
}

export default function B2BCategoryExplorerPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "apparel-fashion";

  const matchedCategory = B2B_ALL_41_CATEGORIES.find((c) => c.id === slug);
  const pageTitle =
    matchedCategory?.name ||
    slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  const categoryGroups = getCategoryGroupsForSlug(slug, pageTitle);
  const [activeGroupId, setActiveGroupId] = useState<string>(categoryGroups[0].id);

  useEffect(() => {
    setActiveGroupId(categoryGroups[0].id);
  }, [slug]);

  const activeGroup =
    categoryGroups.find((g) => g.id === activeGroupId) || categoryGroups[0];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans text-slate-800">
      <BusinessNavbar />

      <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-6 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-4">
          <Link href="/b2b" className="hover:text-[#0e0f89] transition">
            1PLACEE B2B Hub
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span>All Categories</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-bold">{pageTitle}</span>
        </nav>

        {/* Split-Pane Category Explorer (Matching Reference Image 2) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Top Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white">
            <h1 className="text-lg sm:text-xl font-black text-slate-900">
              {pageTitle}
            </h1>
            <Link
              href="/b2b"
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition"
              title="Back to B2B Hub"
            >
              <X className="w-5 h-5" />
            </Link>
          </div>

          {/* Left Sidebar + Right Circular Grid */}
          <div
            style={{ display: "flex", flexDirection: "row", minHeight: "600px" }}
            className="w-full"
          >
            {/* Left Sidebar */}
            <aside
              style={{
                width: "290px",
                minWidth: "290px",
                backgroundColor: "#f5f6f8",
                borderRight: "1px solid #e2e8f0",
                maxHeight: "640px",
                overflowY: "auto",
              }}
              className="shrink-0"
            >
              {categoryGroups.map((group) => {
                const isActive = group.id === activeGroup.id;
                return (
                  <button
                    key={group.id}
                    type="button"
                    onClick={() => setActiveGroupId(group.id)}
                    style={{
                      borderLeft: isActive ? "4px solid #0e0f89" : "4px solid transparent",
                      backgroundColor: isActive ? "#ffffff" : "transparent",
                      color: isActive ? "#0e0f89" : "#334155",
                    }}
                    className={`w-full text-left px-5 py-3.5 text-xs sm:text-[13px] transition cursor-pointer ${
                      isActive ? "font-black" : "font-semibold hover:bg-white/70"
                    }`}
                  >
                    {group.name}
                  </button>
                );
              })}
            </aside>

            {/* Right Content Area: Circular Round Image + Label Below */}
            <div style={{ flex: 1, backgroundColor: "#ffffff" }} className="p-6 sm:p-8 min-w-0">
              <h2 className="text-base sm:text-lg font-black text-slate-900 mb-6">
                {activeGroup.name}
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                  gap: "24px",
                }}
              >
                {activeGroup.items.map((item, idx) => {
                  const { Icon, bg, color } = getCategoryItemVisual(activeGroup.id, idx);
                  const subcatSlug = encodeURIComponent(
                    item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")
                  );
                  return (
                    <Link
                      key={item.name}
                      href={`/b2b/listing/${subcatSlug}?title=${encodeURIComponent(item.name)}`}
                      className="flex flex-col items-center text-center group cursor-pointer"
                    >
                      <div
                        style={{
                          width: "104px",
                          height: "104px",
                          backgroundColor: bg,
                        }}
                        className="rounded-full border border-slate-200 flex items-center justify-center p-3 overflow-hidden group-hover:border-[#0e0f89] group-hover:shadow-md transition-all duration-200"
                      >
                        <Icon
                          className="w-10 h-10 group-hover:scale-110 transition-transform duration-200"
                          style={{ color }}
                        />
                      </div>
                      <span className="mt-2.5 text-xs sm:text-[13px] font-bold text-slate-700 group-hover:text-[#0e0f89] leading-snug">
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      <BusinessFooter />
    </div>
  );
}

