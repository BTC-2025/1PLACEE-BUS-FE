export interface SewingShowcaseItem {
  id: string;
  photo: string;
  title: string;
  price: string;
  moq: string;
  soldCount?: string;
  supplierYears: string;
  supplierCountry: string;
  isVerified?: boolean;
  reorderRate?: string;
  badgeCe?: boolean;
  href: string;
}

export const SEWING_SHOWCASE_PRODUCTS: SewingShowcaseItem[] = [
  {
    id: "hk8700-lockstitch",
    photo: "/products/sewing-showcase/photo-1.png",
    title: "Good Quality HK8700 High...",
    price: "₹9,272.24-11,397.12",
    moq: "MOQ: 1 unit",
    soldCount: "7 sold",
    supplierYears: "11 yrs",
    supplierCountry: "CN",
    isVerified: true,
    reorderRate: "Reorder rate 17%",
    badgeCe: true,
    href: "/products?item=hk8700-lockstitch"
  },
  {
    id: "mc-c1-direct-drive",
    photo: "/products/sewing-showcase/photo-2.png",
    title: "2006/42/EC MC C1 Direct Drive Single Needle Lockstitch Sewing Machine wit...",
    price: "₹14,970.80-15,453.72",
    moq: "MOQ: 1 piece",
    soldCount: "106 sold",
    supplierYears: "12 yrs",
    supplierCountry: "CN",
    isVerified: true,
    badgeCe: true,
    href: "/products?item=mc-c1-direct-drive"
  },
  {
    id: "universal-presser-foot",
    photo: "/products/sewing-showcase/photo-3.png",
    title: "8 PCS Universal Sewing Rolled Hemmer Presser Foot 3-10mm Pull Tube Spiral Edging Roller...",
    price: "₹33.81",
    moq: "MOQ: 1 piece",
    supplierYears: "3 yrs",
    supplierCountry: "CN",
    href: "/products?item=universal-presser-foot"
  },
  {
    id: "elastic-frame-support",
    photo: "/products/sewing-showcase/photo-4.png",
    title: "Industrial Sewing Machine Elastic Frame Support Steel...",
    price: "₹676.11",
    moq: "MOQ: 1 set",
    soldCount: "1,003 sold",
    supplierYears: "7 yrs",
    supplierCountry: "CN",
    reorderRate: "Reorder rate 22%",
    href: "/products?item=elastic-frame-support"
  },
  {
    id: "jukky-industrial-sewing",
    photo: "/products/sewing-showcase/photo-5.png",
    title: "JUKKY Industrial Sewing Machine 8700/8500/5550 High Speed Lockstitch Sewing...",
    price: "₹13,290.20-22,292",
    moq: "MOQ: 1 set",
    soldCount: "4 sold",
    supplierYears: "3 yrs",
    supplierCountry: "CN",
    href: "/products?item=jukky-industrial-sewing"
  },
  {
    id: "kite-flying-thread",
    photo: "/products/sewing-showcase/photo-6.png",
    title: "1200m 100% Cotton Kite Flying Thread 20s/3 9ply 0.5mm High...",
    price: "₹202.84-231.81",
    moq: "MOQ: 399 pieces",
    soldCount: "28 sold",
    supplierYears: "4 yrs",
    supplierCountry: "CN",
    isVerified: true,
    href: "/products?item=kite-flying-thread"
  }
];
