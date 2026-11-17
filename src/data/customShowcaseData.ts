export interface ProductCardItem {
  id: string;
  image: string;
  title: string;
  price: string;
  moq: string;
  reorderRate?: string;
  supplierYears?: string;
  isVerified?: boolean;
  href: string;
}

export const CUSTOM_SHOWCASE_PRODUCTS: ProductCardItem[] = [
  {
    id: "cust-1",
    image: "/products/custom-row/card-1.png",
    title: "Dropshipping Fulfillment Hoodie Embroidery Custom Print on Demand Women Clothing...",
    price: "₹66.36-95.21",
    moq: "MOQ: 100 pieces",
    supplierYears: "6 yrs · CN",
    href: "/products?item=dropshipping-hoodie-embroidery",
  },
  {
    id: "cust-2",
    image: "/products/custom-row/card-2.png",
    title: "In Ear Wired Earbuds Cheap... 10% off ₹96,000",
    price: "₹13.47-16.35",
    moq: "MOQ: 1000 pieces",
    isVerified: true,
    supplierYears: "11 yrs · CN",
    href: "/products?item=in-ear-wired-earbuds-cheap",
  },
  {
    id: "cust-3",
    image: "/products/custom-row/card-3.png",
    title: "MID Wholesale Dual Sided Body... Reorder rate 16%",
    price: "₹6.74-9.62",
    moq: "MOQ: 1000 pieces 300 sold",
    isVerified: true,
    supplierYears: "6 yrs · CN",
    href: "/products?item=dual-sided-body-tape",
  },
  {
    id: "cust-4",
    image: "/products/custom-row/card-4.png",
    title: "Direct Drive Single Needle Lockstitch Sewing Machine Price",
    price: "₹19,233.10-76,932.40",
    moq: "MOQ: 1 set",
    reorderRate: "Reorder rate 34%",
    isVerified: true,
    supplierYears: "12 yrs · CN",
    href: "/products?item=direct-drive-single-needle",
  },
  {
    id: "cust-5",
    image: "/products/custom-row/card-5.png",
    title: "New Style Men's Summer T-Shirt Student Plus Size Short Sleeve...",
    price: "₹182.72-278.88",
    moq: "MOQ: 5 pieces 82 sold",
    reorderRate: "Reorder rate 16%",
    supplierYears: "1 yr · CN",
    href: "/products?item=mens-summer-tshirt-plus",
  },
  {
    id: "cust-6",
    image: "/products/custom-row/card-6.png",
    title: "300cm Quality Inches and Centimeters Soft Tape Measure for Body Measuring Ruler",
    price: "₹15.39-28.85",
    moq: "MOQ: 100 pieces",
    isVerified: true,
    supplierYears: "4 yrs · CN",
    href: "/products?item=300cm-soft-tape-measure",
  },
];
