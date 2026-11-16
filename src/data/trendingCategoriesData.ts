export interface TrendingCategoryItem {
  id: string;
  name: string;
  href: string;
}

export const TRENDING_CATEGORIES_DATA: TrendingCategoryItem[] = [
  { id: "human-hair", name: "Human Hair & Accessories", href: "/products?cat=human-hair" },
  { id: "cooling-tower", name: "Cooling Tower & Chilling Plants", href: "/products?cat=cooling-tower" },
  { id: "t-shirts", name: "T-Shirts", href: "/products?cat=t-shirts" },
  { id: "air-cooler", name: "Air Cooler", href: "/products?cat=air-cooler" },
  { id: "solar-panels", name: "Solar Panels", href: "/products?cat=solar-panels" },
  { id: "diesel-generators", name: "Silent Diesel Generators", href: "/products?cat=generators" },
  { id: "cast-iron-valves", name: "Cast Iron Flanged Valves", href: "/products?cat=valves" }
];
