export interface B2BBestSellerItem {
  id: string;
  image: string;
  title: string;
  price: string;
  supplier: string;
  badge?: {
    image: string;
    text: string;
  };
  href: string;
}

export const B2B_BEST_SELLERS: B2BBestSellerItem[] = [
  {
    id: "ss-fasteners",
    image: "/products/bestsellers/item-fasteners.png",
    title: "SS Fasteners",
    price: "5 INR/Piece",
    supplier: "By: NIKO STEEL AND ENGINEERING LLP",
    badge: {
      image: "/products/bestsellers/badge-platinum.png",
      text: "Platinum SELLER",
    },
    href: "/products?item=ss-fasteners",
  },
  {
    id: "backhoe-loaders",
    image: "/products/bestsellers/item-backhoe.png",
    title: "AX 130 Backhoe Loaders",
    price: "2300000 INR/ Unit",
    supplier: "By: ACTION CONSTRUCTION EQUIPMENT LTD.",
    href: "/products?item=backhoe-loaders",
  },
  {
    id: "lauryl-alcohol",
    image: "/products/bestsellers/item-lauryl.png",
    title: "Lauryl Alcohol Ethoxylate",
    price: "240.0 INR/Kilograms",
    supplier: "By: SHIV SHAKTI INDIA",
    href: "/products?item=lauryl-alcohol",
  },
  {
    id: "rubber-gloves",
    image: "/products/bestsellers/item-gloves.png",
    title: "Industrial Rubber Hand Gloves",
    price: "170 INR/Pair",
    supplier: "By: VICTOR IMPORTS",
    href: "/products?item=rubber-gloves",
  },
  {
    id: "aluminum-ingots",
    image: "/products/bestsellers/item-aluminum.png",
    title: "Aluminum Ingots",
    price: "195.00 INR / Kilograms",
    supplier: "By: PHOOLCHAND BHAGATSINGH",
    href: "/products?item=aluminum-ingots",
  },
  {
    id: "tomato-puree",
    image: "/products/bestsellers/item-tomato.png",
    title: "Tomato Puree-Double Concentration",
    price: "4.4 USD / Carton",
    supplier: "By: HEBEI TOMATO INDUSTRY CO LTD.",
    href: "/products?item=tomato-puree",
  },
];
