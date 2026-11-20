export interface B2BTopCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  href: string;
}

// ----------------------------------------------------------------------------
// Initial 15 Categories shown in 2 Rows (Image 2 based):
// Row 1: 8 cards
// Row 2: 7 cards + 1 "View More Categories" button
// ----------------------------------------------------------------------------
export const B2B_INITIAL_CATEGORIES: B2BTopCategory[] = [
  // ROW 1
  {
    id: "agricultural-products",
    name: "Agricultural Products & Equipment",
    icon: "leaf",
    color: "#16a34a", // emerald green
    href: "/products?cat=agriculture",
  },
  {
    id: "apparel-fashion",
    name: "Apparel & Fashion Accessories",
    icon: "shirt",
    color: "#e11d48", // rose / pink
    href: "/products?cat=apparel-fashion",
  },
  {
    id: "automobile-parts",
    name: "Automobile Parts & Accessories",
    icon: "car",
    color: "#2563eb", // blue
    href: "/products?cat=automobile",
  },
  {
    id: "ayurveda-herbal",
    name: "Ayurveda & Herbal Product",
    icon: "sprout",
    color: "#65a30d", // lime green
    href: "/products?cat=ayurveda-herbal",
  },
  {
    id: "business-services",
    name: "Business Services",
    icon: "briefcase",
    color: "#7c3aed", // purple
    href: "/products?cat=business-services",
  },
  {
    id: "chemical-products",
    name: "Chemical & Chemical Products",
    icon: "flask",
    color: "#0891b2", // teal / cyan
    href: "/products?cat=chemicals",
  },
  {
    id: "computers-internet",
    name: "Computers & Internet",
    icon: "monitor",
    color: "#2563eb", // blue
    href: "/products?cat=computers",
  },
  {
    id: "consumer-electronics",
    name: "Consumer Electronics & Home Appliances",
    icon: "smartphone",
    color: "#ea580c", // orange
    href: "/products?cat=consumer-electronics",
  },

  // ROW 2
  {
    id: "cosmetics-personal-care",
    name: "Cosmetics & Personal Care Products",
    icon: "bottle",
    color: "#db2777", // deep pink
    href: "/products?cat=cosmetics-personal-care",
  },
  {
    id: "education-training",
    name: "Education & Training Services",
    icon: "book",
    color: "#4f46e5", // indigo
    href: "/products?cat=education-training",
  },
  {
    id: "electronics-electrical",
    name: "Electronics & Electrical",
    icon: "zap",
    color: "#eab308", // amber / yellow
    href: "/products?cat=electronics-electrical",
  },
  {
    id: "engineering-service",
    name: "Engineering Service",
    icon: "compass",
    color: "#0284c7", // light blue
    href: "/products?cat=engineering-service",
  },
  {
    id: "event-photography",
    name: "Event Management & Photography",
    icon: "camera",
    color: "#ef4444", // red
    href: "/products?cat=event-management",
  },
  {
    id: "financial-legal",
    name: "Financial & Legal Services",
    icon: "landmark",
    color: "#0d9488", // teal
    href: "/products?cat=financial-legal",
  },
  {
    id: "food-beverage-suppliers",
    name: "Food & Beverage Products Suppliers",
    icon: "utensils",
    color: "#f97316", // warm orange
    href: "/products?cat=food-beverage",
  },
];

// ----------------------------------------------------------------------------
// Remaining 26 Categories unlocked when "View More Categories" is clicked
// ----------------------------------------------------------------------------
export const B2B_MORE_CATEGORIES: B2BTopCategory[] = [

  // ROW 1 of expanded
  {
    id: "furniture-carpentry",
    name: "Furniture & Carpentry Services",
    icon: "sofa",
    color: "#92400e", // amber brown
    href: "/products?cat=furniture",
  },
  {
    id: "gifts-crafts",
    name: "Gifts & Crafts",
    icon: "gift",
    color: "#16a34a", // green
    href: "/products?cat=gifts-crafts",
  },
  {
    id: "home-furnishing",
    name: "Home Furnishing Products & Suppliers",
    icon: "home-pink",
    color: "#e11d48", // rose
    href: "/products?cat=home-furnishing",
  },
  {
    id: "home-supplies",
    name: "Home Supplies & Household Products",
    icon: "home-blue",
    color: "#2563eb", // blue
    href: "/products?cat=home-supplies",
  },
  {
    id: "hospitals-diagnosis",
    name: "Hospitals & Diagnosis Supplies",
    icon: "hospital",
    color: "#16a34a", // medical green
    href: "/products?cat=hospitals-diagnosis",
  },
  {
    id: "hr-planning",
    name: "HR Planning & Recruitment",
    icon: "user-plus",
    color: "#7c3aed", // purple
    href: "/products?cat=hr-recruitment",
  },
  {
    id: "industrial-machinery-plant",
    name: "Industrial Machinery & Plant Equipment",
    icon: "factory",
    color: "#0d9488", // teal
    href: "/products?cat=industrial-machinery",
  },
  {
    id: "industrial-supplies",
    name: "Industrial Supplies",
    icon: "gear",
    color: "#2563eb", // blue
    href: "/products?cat=industrial-supplies",
  },

  // ROW 2 of expanded
  {
    id: "industrial-tools",
    name: "Industrial Tools & Equipment Suppliers",
    icon: "wrench-diagonal",
    color: "#ea580c", // orange
    href: "/products?cat=industrial-tools",
  },
  {
    id: "jewelry-designers",
    name: "Jewelry & Jewelry Designers",
    icon: "diamond-pink",
    color: "#db2777", // pink diamond
    href: "/products?cat=jewelry",
  },
  {
    id: "kitchen-utensils",
    name: "Kitchen Utensils & Appliances",
    icon: "utensils-blue",
    color: "#4f46e5", // indigo
    href: "/products?cat=kitchen-utensils",
  },
  {
    id: "media-production",
    name: "Media Production & Advertising",
    icon: "video-camera",
    color: "#eab308", // golden yellow
    href: "/products?cat=media-advertising",
  },
  {
    id: "minerals-metals",
    name: "Minerals & Metals",
    icon: "diamond-teal",
    color: "#0891b2", // teal diamond
    href: "/products?cat=minerals-metals",
  },
  {
    id: "office-supplies",
    name: "Office Supplies",
    icon: "briefcase-red",
    color: "#ef4444", // coral red
    href: "/products?cat=office-supplies",
  },
  {
    id: "packaging-paper",
    name: "Packaging & Paper",
    icon: "box-green",
    color: "#0d9488", // green box
    href: "/products?cat=packaging-paper",
  },
  {
    id: "pharmaceutical-healthcare-expanded",
    name: "Pharmaceutical & Healthcare Products",
    icon: "med-cross",
    color: "#d97706", // warm amber
    href: "/products?cat=pharmaceutical-healthcare",
  },

  // ROW 3 of expanded
  {
    id: "real-estate-building",
    name: "Real Estate, Building, Construction Material & Services",
    icon: "buildings",
    color: "#92400e", // brown
    href: "/products?cat=real-estate-building",
  },
  {
    id: "scientific-lab-instruments",
    name: "Scientific & Laboratory Instruments",
    icon: "microscope",
    color: "#16a34a", // scientific green
    href: "/products?cat=scientific-instruments",
  },
  {
    id: "security-products",
    name: "Security Products & Services",
    icon: "shield-check",
    color: "#e11d48", // rose red
    href: "/products?cat=security-products",
  },
  {
    id: "small-business-houses",
    name: "Small Business Houses",
    icon: "storefront",
    color: "#2563eb", // blue shop
    href: "/products?cat=small-business",
  },
  {
    id: "sports-goods",
    name: "Sports Goods & Entertainment",
    icon: "steering-wheel",
    color: "#65a30d", // green
    href: "/products?cat=sports-goods",
  },
  {
    id: "telecommunication",
    name: "Telecommunication",
    icon: "mobile-purple",
    color: "#7c3aed", // purple phone
    href: "/products?cat=telecommunication",
  },
  {
    id: "textiles-yarn",
    name: "Textiles, Yarn & Fabrics",
    icon: "scroll-fabric",
    color: "#0891b2", // teal fabric
    href: "/products?cat=textiles-fabrics",
  },
  {
    id: "tours-travels",
    name: "Tours, Travels & Hotels",
    icon: "airplane",
    color: "#2563eb", // travel blue
    href: "/products?cat=tours-travels",
  },

  // ROW 4 of expanded (Image 4)
  {
    id: "toys-games",
    name: "Toys & Games",
    icon: "gamepad",
    color: "#d97706", // golden game
    href: "/products?cat=toys-games",
  },
  {
    id: "transportation-logistics",
    name: "Transportation & Logistics",
    icon: "truck-pink",
    color: "#db2777", // pink delivery truck
    href: "/products?cat=transportation-logistics",
  },
];

// ----------------------------------------------------------------------------
// Full 41 B2B Directories (Initial 15 + Additional 26 = 41 total categories)
// ----------------------------------------------------------------------------
export const B2B_ALL_41_CATEGORIES: B2BTopCategory[] = [
  ...B2B_INITIAL_CATEGORIES,
  ...B2B_MORE_CATEGORIES,
];

