export interface B2BBestSellerItem {
  id: string;
  image: string;
  fullCardImage: string;
  title: string;
  price: string;
  supplier: string;
  badge?: string;
  href: string;
}

export const B2B_BEST_SELLERS: B2BBestSellerItem[] = [
  {
    id: "ss-fasteners",
    image: "/products/bestsellers/thumb-1.jpg",
    fullCardImage: "/products/bestsellers/fullcard-1.jpg",
    title: "SS Fasteners",
    price: "5 INR/Piece",
    supplier: "By: NIKO STEEL AND ENGINEERING LLP",
    badge: "Platinum Seller",
    href: "/products?item=ss-fasteners"
  },
  {
    id: "backhoe-loaders",
    image: "/products/bestsellers/thumb-2.jpg",
    fullCardImage: "/products/bestsellers/fullcard-2.jpg",
    title: "AX 130 Backhoe Loaders",
    price: "2300000 INR/ Unit",
    supplier: "By: ACTION CONSTRUCTION EQUIPMENT LTD.",
    href: "/products?item=backhoe-loaders"
  },
  {
    id: "lauryl-alcohol",
    image: "/products/bestsellers/thumb-3.jpg",
    fullCardImage: "/products/bestsellers/fullcard-3.jpg",
    title: "Lauryl Alcohol Ethoxylate",
    price: "240.0 INR/Kilograms",
    supplier: "By: SHIV SHAKTI INDIA",
    href: "/products?item=lauryl-alcohol"
  },
  {
    id: "rubber-gloves",
    image: "/products/bestsellers/thumb-4.jpg",
    fullCardImage: "/products/bestsellers/fullcard-4.jpg",
    title: "Industrial Rubber Hand Gloves",
    price: "170 INR/Pair",
    supplier: "By: VICTOR IMPORTS",
    href: "/products?item=rubber-gloves"
  },
  {
    id: "aluminum-ingots",
    image: "/products/bestsellers/thumb-5.jpg",
    fullCardImage: "/products/bestsellers/fullcard-5.jpg",
    title: "Aluminum Ingots",
    price: "195.00 INR / Kilograms",
    supplier: "By: PHOOLCHAND BHAGATSINGH",
    href: "/products?item=aluminum-ingots"
  },
  {
    id: "tomato-puree",
    image: "/products/bestsellers/thumb-6.jpg",
    fullCardImage: "/products/bestsellers/fullcard-6.jpg",
    title: "Tomato Puree-Double Concentration",
    price: "4.4 USD / Carton",
    supplier: "By: HEBEI TOMATO INDUSTRY CO LTD.",
    href: "/products?item=tomato-puree"
  }
];
