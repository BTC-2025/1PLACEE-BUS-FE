export interface ProductCardItem {
  id: string;
  photo: string;
  title: string;
  price: string;
  moq: string;
  soldCount?: string;
  reorderRate?: string;
  discountBadge?: string;
  supplierYears: string;
  isVerified?: boolean;
  badgeTag?: string;
  href: string;
}

export const CUSTOM_SHOWCASE_PRODUCTS: ProductCardItem[] = [
  {
    id: "cust-1",
    photo: "/products/custom-row/photo-1.png",
    title: "Dropshipping Fulfillment Hoodie Embroidery Custom Print on Demand Women Clothing...",
    price: "₹66.36-95.21",
    moq: "MOQ: 100 pieces",
    badgeTag: "Dropshipping",
    supplierYears: "6 yrs · IN",
    href: "/products?item=dropshipping-hoodie-embroidery",
  },
  {
    id: "cust-2",
    photo: "/products/custom-row/photo-2.png",
    title: "In Ear Wired Earbuds Cheap...",
    price: "₹13.47-16.35",
    discountBadge: "10% off ₹96,000",
    moq: "MOQ: 1000 pieces",
    isVerified: true,
    supplierYears: "11 yrs · IN",
    href: "/products?item=in-ear-wired-earbuds-cheap",
  },
  {
    id: "cust-3",
    photo: "/products/custom-row/photo-3.png",
    title: "Wholesale Dual Sided Body Measuring Tape...",
    price: "₹6.74-9.62",
    moq: "MOQ: 1000 pieces",
    soldCount: "300 sold",
    badgeTag: "MID",
    reorderRate: "Reorder rate 16%",
    isVerified: true,
    supplierYears: "6 yrs · IN",
    href: "/products?item=dual-sided-body-tape",
  },
  {
    id: "cust-4",
    photo: "/products/custom-row/photo-4.png",
    title: "Direct Drive Single Needle Lockstitch Sewing Machine Price",
    price: "₹19,233.10-76,932.40",
    moq: "MOQ: 1 set",
    reorderRate: "Reorder rate 34%",
    isVerified: true,
    supplierYears: "12 yrs · IN",
    href: "/products?item=direct-drive-single-needle",
  },
  {
    id: "cust-5",
    photo: "/products/custom-row/photo-5.png",
    title: "New Style Men's Summer T-Shirt Student Plus Size Short Sleeve...",
    price: "₹182.72-278.88",
    moq: "MOQ: 5 pieces",
    soldCount: "82 sold",
    reorderRate: "Reorder rate 16%",
    supplierYears: "1 yr · IN",
    href: "/products?item=mens-summer-tshirt-plus",
  },
  {
    id: "cust-6",
    photo: "/products/custom-row/photo-6.png",
    title: "300cm Quality Inches and Centimeters Soft Tape Measure for Body Measuring Ruler",
    price: "₹15.39-28.85",
    moq: "MOQ: 100 pieces",
    isVerified: true,
    supplierYears: "4 yrs · IN",
    href: "/products?item=300cm-soft-tape-measure",
  },
];
