export interface B2BTopCategoryItem {
  id: string;
  name: string;
  iconName: string;
  href: string;
}

export interface B2BBannerSlide {
  id: string;
  brand: string;
  title: string;
  subtitle: string;
  ctaText: string;
  tagline: string;
  bgColor: string;
  bgGradient: string;
  image?: string;
  href: string;
}

export interface B2BValueAddCard {
  id: string;
  subtitle: string;
  title: string;
  ctaText: string;
  href: string;
  badge?: string;
}

export const B2B_TOP_CATEGORIES: B2BTopCategoryItem[] = [
  { id: "health-beauty", name: "Health & Beauty", iconName: "Sparkles", href: "/products?cat=health-beauty" },
  { id: "apparel-fashion", name: "Apparel & Fashion", iconName: "Shirt", href: "/products?cat=apparel-fashion" },
  { id: "chemicals", name: "Chemicals", iconName: "FlaskConical", href: "/products?cat=chemicals" },
  { id: "machinery", name: "Machinery", iconName: "Cog", href: "/products?cat=machinery" },
  { id: "construction", name: "Construction & Real Estate", iconName: "Building2", href: "/products?cat=construction" },
  { id: "electronics", name: "Electronics & Electrical", iconName: "Laptop", href: "/products?cat=electronics" },
  { id: "medical", name: "Hospital & Medical Supplies", iconName: "Cross", href: "/products?cat=medical" },
  { id: "gifts-crafts", name: "Gifts & Crafts", iconName: "Gift", href: "/products?cat=gifts" },
  { id: "packaging-paper", name: "Packaging & Paper", iconName: "Box", href: "/products?cat=packaging" },
  { id: "agriculture", name: "Agriculture", iconName: "Wheat", href: "/products?cat=agriculture" },
  { id: "home-supplies", name: "Home Supplies", iconName: "Home", href: "/products?cat=home" },
  { id: "mineral-metals", name: "Mineral & Metals", iconName: "Layers", href: "/products?cat=metals" },
  { id: "industrial", name: "Industrial Supplies", iconName: "Factory", href: "/products?cat=industrial" },
  { id: "pipes-fittings", name: "Pipes, Tubes & Fittings", iconName: "Wrench", href: "/products?cat=pipes" }
];

export const B2B_HERO_SLIDES: B2BBannerSlide[] = [
  {
    id: "global-business",
    brand: "Global Trade",
    title: "GROW YOUR BUSINESS IN ALL COUNTRIES",
    subtitle: "Connect with verified global buyers, scale seamlessly across international markets with full export assistance.",
    ctaText: "Start Exporting",
    tagline: "Global Market Access",
    bgColor: "#ffffff",
    bgGradient: "from-[#1d4ed8] via-[#2563eb] to-[#1e40af]",
    image: "/banners/b2b-carousel-slide1.jpg",
    href: "/sell"
  },
  {
    id: "list-products",
    brand: "Dial Export Mart",
    title: "LIST YOUR PRODUCTS ON EXPORT MART",
    subtitle: "Sell directly to verified business buyers. Increase visibility across multiple business categories from one dashboard.",
    ctaText: "Start Selling Today",
    tagline: "Verified Business Buyers",
    bgColor: "#1a1f2c",
    bgGradient: "from-[#0f172a] via-[#1e293b] to-[#0f172a]",
    image: "/banners/b2b-carousel-slide2.jpg",
    href: "/sell"
  },
  {
    id: "top-categories",
    brand: "Quality Guaranteed",
    title: "EXPLORE OUR TOP CATEGORY PRODUCTS",
    subtitle: "Source directly from premier manufacturers with competitive wholesale pricing and verified quality.",
    ctaText: "Explore Categories",
    tagline: "Quality Guaranteed",
    bgColor: "#f5ece3",
    bgGradient: "from-[#f5ece3] via-[#faefe6] to-[#f5ece3]",
    image: "/banners/b2b-carousel-slide3.png",
    href: "/products?cat=all"
  }
];

export const B2B_VALUE_ADDS: B2BValueAddCard[] = [
  {
    id: "tradeshows",
    subtitle: "1PLACEE B2B",
    title: "Tradeshows and Exhibitions",
    ctaText: "Learn more",
    href: "/tradeshows"
  },
  {
    id: "trade-leads",
    subtitle: "1PLACEE B2B",
    title: "Buy Trade Leads",
    ctaText: "Learn more",
    href: "/trade-leads"
  },
  {
    id: "book-domain",
    subtitle: "1PLACEE B2B",
    title: "Book Domain & Webstore",
    ctaText: "Learn more",
    href: "/domain-service"
  },
  {
    id: "membership-plans",
    subtitle: "1PLACEE B2B",
    title: "Verified Membership Plans",
    ctaText: "Learn more",
    href: "/membership"
  },
  {
    id: "distributors",
    subtitle: "Find Distributors",
    title: "For Your Wholesale Business",
    ctaText: "Learn more",
    href: "/distributors"
  }
];
