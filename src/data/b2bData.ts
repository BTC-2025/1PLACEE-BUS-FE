export interface TierPrice {
  minQty: number;
  maxQty?: number;
  price: number;
}

export interface SupplierInfo {
  id: string;
  name: string;
  country: string;
  countryFlag: string;
  isVerified: boolean;
  yearsInBusiness: number;
  rating: number;
  reviewCount: number;
  responseRate: string;
  customizable: boolean;
}

export interface B2BProduct {
  id: string;
  title: string;
  category: string;
  images: string[];
  moq: number;
  unit: string;
  tierPrices: TierPrice[];
  supplier: SupplierInfo;
  leadTime: string;
  shippingTerms: string[];
  isTradeAssurance: boolean;
  tags: string[];
}

export const CATEGORIES = [
  { id: "industrial", name: "Industrial Machinery & Tools", icon: "Cog", count: "120k+ Products" },
  { id: "electronics", name: "Consumer Electronics & Components", icon: "Cpu", count: "250k+ Products" },
  { id: "apparel", name: "Apparel, Fabrics & Textiles", icon: "Shirt", count: "180k+ Products" },
  { id: "packaging", name: "Packaging & Printing Materials", icon: "Package", count: "90k+ Products" },
  { id: "hardware", name: "Hardware, Fasteners & Metalwork", icon: "Wrench", count: "75k+ Products" },
  { id: "chemicals", name: "Chemicals & Raw Materials", icon: "FlaskConical", count: "45k+ Products" },
  { id: "vehicles", name: "Vehicles, E-Bikes & Auto Parts", icon: "Car", count: "60k+ Products" },
  { id: "medical", name: "Medical Devices & Health Supplies", icon: "ShieldAlert", count: "85k+ Products" }
];

export const FEATURED_PRODUCTS: B2BProduct[] = [
  {
    id: "prod-1",
    title: "High Precision CNC Machining Aluminum Parts for Robotics & Automotive",
    category: "industrial",
    images: ["https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"],
    moq: 50,
    unit: "Pieces",
    tierPrices: [
      { minQty: 50, maxQty: 199, price: 14.50 },
      { minQty: 200, maxQty: 999, price: 11.20 },
      { minQty: 1000, price: 8.90 }
    ],
    supplier: {
      id: "sup-1",
      name: "Apex Precision Tech Industrial Co., Ltd.",
      country: "Germany / Global",
      countryFlag: "🇩🇪",
      isVerified: true,
      yearsInBusiness: 12,
      rating: 4.9,
      reviewCount: 342,
      responseRate: "≤ 2h",
      customizable: true
    },
    leadTime: "7 - 12 Days",
    shippingTerms: ["FOB", "CIF", "DDP"],
    isTradeAssurance: true,
    tags: ["Custom CNC", "ISO9001 Certified", "OEM Support"]
  },
  {
    id: "prod-2",
    title: "Smart Commercial IoT Gateway & Sensor Hub (Industrial Grade IP67)",
    category: "electronics",
    images: ["https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"],
    moq: 20,
    unit: "Units",
    tierPrices: [
      { minQty: 20, maxQty: 99, price: 65.00 },
      { minQty: 100, maxQty: 499, price: 54.00 },
      { minQty: 500, price: 42.50 }
    ],
    supplier: {
      id: "sup-2",
      name: "Shenzhen MicroGrid Electronics Corp",
      country: "Global Hub",
      countryFlag: "🌏",
      isVerified: true,
      yearsInBusiness: 8,
      rating: 4.8,
      reviewCount: 189,
      responseRate: "≤ 1h",
      customizable: true
    },
    leadTime: "5 - 9 Days",
    shippingTerms: ["Express", "FOB", "Air Cargo"],
    isTradeAssurance: true,
    tags: ["CE/FCC/RoHS", "Ready to Ship", "Free SDK"]
  },
  {
    id: "prod-3",
    title: "Eco-Friendly Biodegradable Corrugated Shipping Boxes Wholesale (Custom Logo)",
    category: "packaging",
    images: ["https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80"],
    moq: 500,
    unit: "Pieces",
    tierPrices: [
      { minQty: 500, maxQty: 1999, price: 0.65 },
      { minQty: 2000, maxQty: 9999, price: 0.42 },
      { minQty: 10000, price: 0.28 }
    ],
    supplier: {
      id: "sup-3",
      name: "GreenPack Sustainable Logistics Ltd",
      country: "India / Export Hub",
      countryFlag: "🇮🇳",
      isVerified: true,
      yearsInBusiness: 15,
      rating: 5.0,
      reviewCount: 512,
      responseRate: "≤ 30min",
      customizable: true
    },
    leadTime: "10 - 15 Days",
    shippingTerms: ["FOB", "EXW", "Sea Freight"],
    isTradeAssurance: true,
    tags: ["100% Recyclable", "Custom CMYK Print", "Sample Available"]
  },
  {
    id: "prod-4",
    title: "Commercial Grade Heavy-Duty Brushless Solar Water Pump 1500W",
    category: "hardware",
    images: ["https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80"],
    moq: 5,
    unit: "Sets",
    tierPrices: [
      { minQty: 5, maxQty: 19, price: 210.00 },
      { minQty: 20, maxQty: 49, price: 185.00 },
      { minQty: 50, price: 155.00 }
    ],
    supplier: {
      id: "sup-4",
      name: "SolarFlow Tech Manufacturing Ltd",
      country: "Global Direct",
      countryFlag: "🏭",
      isVerified: true,
      yearsInBusiness: 6,
      rating: 4.7,
      reviewCount: 94,
      responseRate: "≤ 3h",
      customizable: false
    },
    leadTime: "12 - 18 Days",
    shippingTerms: ["FOB", "CIF"],
    isTradeAssurance: true,
    tags: ["3 Year Warranty", "High Flow", "Solar Hybrid"]
  }
];
