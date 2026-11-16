export interface B2BBestSellerItem {
  id: string;
  image: string;
  title: string;
  price: string;
  supplier: string;
  badge?: string;
  href: string;
}

export const B2B_BEST_SELLERS: B2BBestSellerItem[] = [
  {
    id: "bestseller-1",
    image: "/products/bestsellers/seller-1.jpg",
    title: "SS Fasteners",
    price: "5 INR/Piece",
    supplier: "By: NIKO STEEL AND ENGINEERING LLP",
    badge: "Platinum Seller",
    href: "/products?item=ss-fasteners"
  },
  {
    id: "bestseller-2",
    image: "/products/bestsellers/seller-2.jpg",
    title: "AX 130 Backhoe Loaders",
    price: "2300000 INR/ Unit",
    supplier: "By: ACTION CONSTRUCTION EQUIPMENT LTD.",
    href: "/products?item=ax-130-backhoe-loaders"
  },
  {
    id: "bestseller-3",
    image: "/products/bestsellers/seller-3.jpg",
    title: "Lauryl Alcohol Ethoxylate",
    price: "240.0 INR/Kilograms",
    supplier: "By: SHIV SHAKTI INDIA",
    href: "/products?item=lauryl-alcohol-ethoxylate"
  },
  {
    id: "bestseller-4",
    image: "/products/bestsellers/seller-4.jpg",
    title: "Industrial Rubber Hand Gloves",
    price: "170 INR/Pair",
    supplier: "By: VICTOR IMPORTS",
    href: "/products?item=industrial-rubber-hand-gloves"
  },
  {
    id: "bestseller-5",
    image: "/products/bestsellers/seller-5.jpg",
    title: "Aluminum Ingots",
    price: "195.00 INR / Kilograms",
    supplier: "By: PHOOLCHAND BHAGATSINGH",
    href: "/products?item=aluminum-ingots"
  },
  {
    id: "bestseller-6",
    image: "/products/bestsellers/seller-6.jpg",
    title: "Tomato Puree-Double Concentration",
    price: "4.4 USD / Carton",
    supplier: "By: HEBEI TOMATO INDUSTRY CO LTD.",
    href: "/products?item=tomato-puree-double"
  }
];
