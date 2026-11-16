export interface AgricultureCategoryItem {
  id: string;
  name: string;
  href: string;
}

export const AGRICULTURE_FOOD_CATEGORIES: AgricultureCategoryItem[] = [
  // Top Row (4 items)
  { id: "feed", name: "Feed", href: "/products?cat=feed" },
  { id: "canned-food", name: "Canned Food", href: "/products?cat=canned-food" },
  { id: "ginger", name: "Ginger", href: "/products?cat=ginger" },
  { id: "greenhouse", name: "Greenhouse", href: "/products?cat=greenhouse" },
  // Bottom Row (4 items)
  { id: "chicken-cage", name: "Chicken Cage", href: "/products?cat=chicken-cage" },
  { id: "frozen-seafood", name: "Frozen Seafood", href: "/products?cat=frozen-seafood" },
  { id: "beverage", name: "Beverage", href: "/products?cat=beverage" },
  { id: "confectionery", name: "Confectionery", href: "/products?cat=confectionery" }
];
