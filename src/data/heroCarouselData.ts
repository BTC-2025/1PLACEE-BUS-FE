export interface RealBannerSlide {
  id: string;
  badgeOffer: string;
  categoryTitle: string;
  highlight1: string;
  highlight2: string;
  bankOffer: string;
  supportPhone: string;
  bgGradient: string;
  bannerImg: string;
  href: string;
}

export interface RealAttachedCard {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  href: string;
  cardType: "dual-workstation" | "business-essentials" | "computers" | "gst-groceries" | "prime";
}

export const REAL_BANNER_SLIDES: RealBannerSlide[] = [
  // SLIDE 1 (Industrial Supplies - Warm Rust Orange)
  {
    id: "industrial-supplies",
    badgeOffer: "Up to 70% off",
    categoryTitle: "Industrial Supplies",
    highlight1: "BEST DEALS",
    highlight2: "WIDE SELECTION",
    bankOffer: "10% Instant Discount* | Axis • IndusInd • SBI • YES BANK",
    supportPhone: "For bulk orders, give a Missed Call/WhatsApp us on +91-8197674716",
    bgGradient: "from-[#a83204] via-[#c2410c] to-[#9a3412]",
    bannerImg: "/banner-industrial.jpg",
    href: "/products?cat=industrial"
  },
  // SLIDE 2 (Televisions - Warm Earthy Clay Ochre)
  {
    id: "televisions",
    badgeOffer: "Starting ₹15,990",
    categoryTitle: "Televisions & Commercial Panels",
    highlight1: "TOP BRANDS",
    highlight2: "GREAT PRICES",
    bankOffer: "10% Instant Discount* | Axis • IndusInd • SBI • YES BANK",
    supportPhone: "For bulk orders, give a Missed Call/WhatsApp us on +91-8197674716",
    bgGradient: "from-[#8c5737] via-[#a26844] to-[#784424]",
    bannerImg: "/banner-televisions.jpg",
    href: "/products?cat=electronics"
  }
];

export const REAL_ATTACHED_CARDS: RealAttachedCard[] = [
  {
    id: "top-discounts",
    title: "Top discounts for you",
    subtitle: "High-spec refurbished and wholesale workstations",
    ctaText: "See more",
    href: "/products?cat=workstations",
    cardType: "dual-workstation"
  },
  {
    id: "business-essentials",
    title: "Business Essentials",
    subtitle: "Get everything you need for your business!",
    ctaText: "Shop Now",
    href: "/products?cat=essentials",
    cardType: "business-essentials"
  },
  {
    id: "computers-accessories",
    title: "Computers & Accessories",
    subtitle: "Get never before offers on Laptops, Tablets, Monitors & more.",
    ctaText: "See all deals",
    href: "/products?cat=computers",
    cardType: "computers"
  },
  {
    id: "gst-benefits",
    title: "Get GST* benefits",
    subtitle: "Save up to 18% with GST* invoice now on Groceries + Guaranteed cashback*",
    ctaText: "Shop Now",
    href: "/b2c-gst",
    cardType: "gst-groceries"
  },
  {
    id: "prime-membership",
    title: "Join Prime at ₹99",
    subtitle: "Prime Exclusive Offers and more at just ₹99 for 3 months!",
    ctaText: "Join Prime Now",
    href: "/contracts",
    cardType: "prime"
  }
];
