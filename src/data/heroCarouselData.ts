export interface HeroBannerSlide {
  id: string;
  title: string;
  highlight: string;
  category: string;
  discountBadge: string;
  image: string;
  productImg: string;
  bgGradient: string;
  href: string;
}

export interface AttachedCarouselCard {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  iconBg?: string;
  ctaText: string;
  href: string;
  // Visual image / multi-images
  images: {
    src: string;
    alt: string;
    label?: string;
  }[];
}

export const HERO_BANNER_SLIDES: HeroBannerSlide[] = [
  {
    id: "industrial-supplies",
    title: "Up to 70% off",
    highlight: "BEST DEALS | WIDE SELECTION",
    category: "Industrial Supplies",
    discountBadge: "10% Instant Discount on SBI, Axis, IndusInd, Yes Bank",
    image: "/banner-industrial.jpg",
    productImg: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    bgGradient: "from-[#b83808] via-[#c94a15] to-[#8f2802]",
    href: "/products?cat=industrial"
  },
  {
    id: "smart-televisions",
    title: "Starting ₹15,990",
    highlight: "TOP BRANDS | GREAT PRICES",
    category: "Televisions & Commercial Displays",
    discountBadge: "10% Instant Discount on SBI, Axis, IndusInd, Yes Bank",
    image: "/banner-televisions.jpg",
    productImg: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80",
    bgGradient: "from-[#8a573b] via-[#a0684a] to-[#6e4129]",
    href: "/products?cat=electronics"
  },
  {
    id: "cnc-machinery",
    title: "Up to 50% Bulk Margin",
    highlight: "FACTORY VERIFIED | SGS INSPECTED",
    category: "CNC Milling & Laser Cutters",
    discountBadge: "GST Tax Invoice with Input Tax Credit (ITC)",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
    productImg: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
    bgGradient: "from-[#104085] via-[#1559ac] to-[#0a2855]",
    href: "/products?cat=machinery"
  }
];

// Carousel Cards attached below the Hero Banner
export const ATTACHED_CAROUSEL_CARDS: AttachedCarouselCard[] = [
  // Card 1: Top discounts for you (2 Computer Towers)
  {
    id: "top-discounts",
    title: "Top discounts for you",
    subtitle: "High-spec refurbished and wholesale workstations",
    ctaText: "See more",
    href: "/products?cat=workstations",
    images: [
      {
        src: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=200&q=80",
        alt: "Workstation Tower"
      },
      {
        src: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=200&q=80",
        alt: "Gaming & AI Server"
      }
    ]
  },

  // Card 2: Business Essentials (Orange Emblem)
  {
    id: "business-essentials",
    title: "Business Essentials",
    subtitle: "Get everything you need for your business!",
    ctaText: "Shop Now",
    href: "/products?cat=essentials",
    images: [
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300&q=80",
        alt: "Office Setup"
      }
    ],
    badge: "Business Essentials"
  },

  // Card 3: Computers & Accessories
  {
    id: "computers-accessories",
    title: "Computers & Accessories",
    subtitle: "Get never before offers on Laptops, Tablets, Monitors & more.",
    ctaText: "See all deals",
    href: "/products?cat=computers",
    images: [
      {
        src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80",
        alt: "Laptops and Displays"
      }
    ]
  },

  // Card 4: Get GST* benefits
  {
    id: "gst-benefits",
    title: "Get GST* benefits",
    subtitle: "Save up to 18% with GST* invoice now on Groceries + Guaranteed cashback*",
    ctaText: "Shop Now",
    href: "/b2c-gst",
    images: [
      {
        src: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=300&q=80",
        alt: "Fresh Wholesale Groceries & GST invoice"
      }
    ]
  },

  // Card 5: Join Prime at ₹99
  {
    id: "prime-membership",
    title: "Join Prime at ₹99",
    subtitle: "Prime Exclusive Offers and more at just ₹99 for 3 months!",
    ctaText: "Join Prime Now",
    href: "/contracts",
    images: [
      {
        src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=300&q=80",
        alt: "Prime Exclusive"
      }
    ]
  },

  // Card 6: Bulk Wholesale Supplies
  {
    id: "bulk-wholesale",
    title: "Bulk Volume Slabs",
    subtitle: "Tiered pricing with minimum order quantity (MOQ) direct from factories.",
    ctaText: "Explore Bulk",
    href: "/b2b",
    images: [
      {
        src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=300&q=80",
        alt: "Logistics Warehouse"
      }
    ]
  }
];
