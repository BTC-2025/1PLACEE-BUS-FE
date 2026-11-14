export interface HeroWideBanner {
  id: string;
  image: string;
  alt: string;
  href: string;
  bgFallback: string;
}

export interface OverlappingCard {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  href: string;
  cardType: "dual-workstation" | "business-essentials" | "gst-groceries" | "computers";
}

export const HERO_WIDE_BANNERS: HeroWideBanner[] = [
  {
    id: "black-friday-tech",
    image: "/banner-blackfriday-top.jpg",
    alt: "Black Friday Tecnologia No Modo Black - Até 45% OFF - Asus & Galaxy",
    href: "/products?deals=black-friday",
    bgFallback: "#ffdf00"
  },
  {
    id: "mercado-first-purchase",
    image: "/banner-mercado-top.jpg",
    alt: "Sua primeira compra com ofertas exclusivas - Até 60% OFF - Frete Grátis",
    href: "/products?deals=first-purchase",
    bgFallback: "#f3f8d6"
  }
];

// Exact 4 Cards from Image (Prime removed)
export const OVERLAPPING_CARDS: OverlappingCard[] = [
  // 1. Top discounts for you (2 Computer Workstations)
  {
    id: "top-discounts",
    title: "Top discounts for you",
    subtitle: "High-spec refurbished and wholesale workstations",
    ctaText: "See more",
    href: "/products?cat=workstations",
    cardType: "dual-workstation"
  },
  // 2. Business Essentials (Orange Emblem + "Get everything you need for your business!")
  {
    id: "business-essentials",
    title: "Business Essentials",
    subtitle: "Get everything you need for your business!",
    ctaText: "Shop Now",
    href: "/products?cat=essentials",
    cardType: "business-essentials"
  },
  // 3. Get GST* benefits (Groceries with 18% GST invoice & guaranteed cashback)
  {
    id: "gst-benefits",
    title: "Get GST* benefits",
    subtitle: "Save up to 18% with GST* invoice now on Groceries + Guaranteed cashback*",
    ctaText: "Shop Now",
    href: "/b2c-gst",
    cardType: "gst-groceries"
  },
  // 4. Computers & Accessories (Circle photo + "Get never before offers...")
  {
    id: "computers-accessories",
    title: "Computers & Accessories",
    subtitle: "Get never before offers on Laptops, Tablets, Monitors & more.",
    ctaText: "See all deals",
    href: "/products?cat=computers",
    cardType: "computers"
  }
];
