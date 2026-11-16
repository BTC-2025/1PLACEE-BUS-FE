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
    id: "schneider-electric",
    brand: "Schneider Electric",
    title: "TeSys Tera\nMotor Management",
    subtitle: "The all-in-one motor protection and monitoring, with PLC functionality.",
    ctaText: "Explore the full range",
    tagline: "Advancing Energy Tech",
    bgColor: "#0d6832",
    bgGradient: "from-[#0d6832] via-[#107c3e] to-[#0d6832]",
    image: "/b2b-banner-schneider.jpg",
    href: "/products?brand=schneider"
  },
  {
    id: "siemens-industrial",
    brand: "Siemens Automation",
    title: "Next-Gen Smart\nIndustrial Drives",
    subtitle: "High efficiency digitalized frequency converters and servo motor drives.",
    ctaText: "Explore Industrial Drives",
    tagline: "Ingenuity for Life",
    bgColor: "#00646e",
    bgGradient: "from-[#005f6b] via-[#007e8e] to-[#005f6b]",
    href: "/products?brand=siemens"
  },
  {
    id: "havells-commercial",
    brand: "Havells Commercial",
    title: "Heavy Duty Commercial\nSwitchgear & Cables",
    subtitle: "Engineered for maximum reliability in high-capacity manufacturing plants.",
    ctaText: "View Wholesale Catalog",
    tagline: "Building Future India",
    bgColor: "#a31d1d",
    bgGradient: "from-[#8b1414] via-[#b82222] to-[#8b1414]",
    href: "/products?brand=havells"
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
