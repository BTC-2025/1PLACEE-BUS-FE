export interface B2BBestSellerItem {
  id: string;
  cardImage: string;
  title: string;
  price: string;
  supplier: string;
  badge?: string;
  href: string;
}

export const B2B_BEST_SELLERS: B2BBestSellerItem[] = [
  {
    id: "ss-fasteners",
    cardImage: "/products/bestsellers/perfect-card-1.png",
    title: "SS Fasteners",
    price: "5 INR/Piece",
    supplier: "By: NIKO STEEL AND ENGINEERING LLP",
    badge: "Platinum Seller",
    href: "/products?item=ss-fasteners"
  },
  {
    id: "backhoe-loaders",
    cardImage: "/products/bestsellers/perfect-card-2.png",
    title: "AX 130 Backhoe Loaders",
    price: "2300000 INR/ Unit",
    supplier: "By: ACTION CONSTRUCTION EQUIPMENT LTD.",
    href: "/products?item=backhoe-loaders"
  },
  {
    id: "lauryl-alcohol",
    cardImage: "/products/bestsellers/perfect-card-3.png",
    title: "Lauryl Alcohol Ethoxylate",
    price: "240.0 INR/Kilograms",
    supplier: "By: SHIV SHAKTI INDIA",
    href: "/products?item=lauryl-alcohol"
  },
  {
    id: "rubber-gloves",
    cardImage: "/products/bestsellers/perfect-card-4.png",
    title: "Industrial Rubber Hand Gloves",
    price: "170 INR/Pair",
    supplier: "By: VICTOR IMPORTS",
    href: "/products?item=rubber-gloves"
  },
  {
    id: "aluminum-ingots",
    cardImage: "/products/bestsellers/perfect-card-5.png",
    title: "Aluminum Ingots",
    price: "195.00 INR / Kilograms",
    supplier: "By: PHOOLCHAND BHAGATSINGH",
    href: "/products?item=aluminum-ingots"
  },
  {
    id: "tomato-puree",
    cardImage: "/products/bestsellers/perfect-card-6.png",
    title: "Tomato Puree-Double Concentration",
    price: "4.4 USD / Carton",
    supplier: "By: HEBEI TOMATO INDUSTRY CO LTD.",
    href: "/products?item=tomato-puree"
  }
];
