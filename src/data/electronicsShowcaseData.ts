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

export const ELECTRONICS_SHOWCASE_PRODUCTS: ProductCardItem[] = [
  {
    id: "elec-1",
    image: "/products/electronics-row/card-1.png",
    title: "Original Factory Wholesale 3.5mm Wired On-Ear Earbuds...",
    price: "₹28.85-30.78",
    moq: "MOQ: 100 pieces",
    reorderRate: "Reorder rate 22%",
    supplierYears: "2 yrs · CN",
    href: "/products?item=wired-on-ear-earbuds",
  },
  {
    id: "elec-2",
    image: "/products/electronics-row/card-2.png",
    title: "3.5mm Interface Cheap Earphones with jl Chipset Facto...",
    price: "₹21.16",
    moq: "MOQ: 500 pieces",
    supplierYears: "2 yrs · CN",
    href: "/products?item=cheap-earphones-jl-chipset",
  },
  {
    id: "elec-3",
    image: "/products/electronics-row/card-3.png",
    title: "Universal 3.5mm Wired Earphone Headphone Headset Customize",
    price: "₹60.59-62.51",
    moq: "MOQ: 5000 pieces",
    reorderRate: "Reorder rate 22%",
    supplierYears: "7 yrs · CN",
    href: "/products?item=universal-wired-earphone",
  },
  {
    id: "elec-4",
    image: "/products/electronics-row/card-4.png",
    title: "DBx1 HAx1 Organ Sewing Needles for the Sewing Machine Wholesale",
    price: "₹19.24-76.94",
    moq: "MOQ: 500 bags 1 sold",
    isVerified: true,
    supplierYears: "8 yrs · CN",
    href: "/products?item=organ-sewing-needles",
  },
  {
    id: "elec-5",
    image: "/products/electronics-row/card-5.png",
    title: "Wholesale Selling High Quality Home 150cm/60inch Clothes Soft Tape Retractable Mini Tape...",
    price: "₹52.90-62.51",
    moq: "MOQ: 200 pieces 900 sold",
    isVerified: true,
    supplierYears: "7 yrs · CN",
    href: "/products?item=clothes-soft-tape-measure",
  },
  {
    id: "elec-6",
    image: "/products/electronics-row/card-6.png",
    title: "Heat-resistant 500 Degree Magnet Preheating Cell Phone...",
    price: "₹269.27-432.75",
    moq: "MOQ: 5 pieces",
    reorderRate: "Reorder rate 28%",
    supplierYears: "15 yrs · CN",
    href: "/products?item=heat-resistant-magnet-preheating",
  },
];
