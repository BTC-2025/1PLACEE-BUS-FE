export interface TrendingCategoryItem {
  id: string;
  cardImage: string;
  thumbImage: string;
  name: string;
  href: string;
}

export const TRENDING_CATEGORIES_DATA: TrendingCategoryItem[] = [
  {
    id: "human-hair",
    cardImage: "/categories/trending/trending-1.png",
    thumbImage: "/categories/trending/thumb-1.png",
    name: "Human Hair & Accessories",
    href: "/products?cat=human-hair"
  },
  {
    id: "cooling-tower",
    cardImage: "/categories/trending/trending-2.png",
    thumbImage: "/categories/trending/thumb-2.png",
    name: "Cooling Tower & Chilling Plants",
    href: "/products?cat=cooling-tower"
  },
  {
    id: "t-shirts",
    cardImage: "/categories/trending/trending-3.png",
    thumbImage: "/categories/trending/thumb-3.png",
    name: "T-Shirts",
    href: "/products?cat=t-shirts"
  },
  {
    id: "air-cooler",
    cardImage: "/categories/trending/trending-4.png",
    thumbImage: "/categories/trending/thumb-4.png",
    name: "Air Cooler",
    href: "/products?cat=air-cooler"
  },
  {
    id: "solar-panels",
    cardImage: "/categories/trending/trending-5.png",
    thumbImage: "/categories/trending/thumb-5.png",
    name: "Solar Panels",
    href: "/products?cat=solar-panels"
  },
  // Additional trending items for continuous smooth carousel
  {
    id: "diesel-generators",
    cardImage: "/categories/trending/trending-2.png",
    thumbImage: "/categories/trending/thumb-2.png",
    name: "Silent Diesel Generators",
    href: "/products?cat=generators"
  },
  {
    id: "industrial-valves",
    cardImage: "/categories/trending/trending-2.png",
    thumbImage: "/categories/trending/thumb-2.png",
    name: "Cast Iron Flanged Valves",
    href: "/products?cat=valves"
  }
];
