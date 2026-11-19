export interface TrendingProductCategory {
  id: string;
  name: string;
  thumbImage: string;
  href: string;
}

export const TRENDING_PRODUCT_CATEGORIES: TrendingProductCategory[] = [
  // ROW 1 (7 Categories)
  {
    id: "fresh-flowers",
    name: "Fresh Flowers",
    thumbImage: "/categories/trending-products/thumb-fresh-flowers.png",
    href: "/products?cat=fresh-flowers",
  },
  {
    id: "marigold-flowers",
    name: "Marigold Flowers",
    thumbImage: "/categories/trending-products/thumb-marigold-flowers.png",
    href: "/products?cat=marigold-flowers",
  },
  {
    id: "disposable-leaf-plates",
    name: "Disposable Leaf Plates",
    thumbImage: "/categories/trending-products/thumb-leaf-plates.png",
    href: "/products?cat=leaf-plates",
  },
  {
    id: "flower-garland",
    name: "Flower Garland",
    thumbImage: "/categories/trending-products/thumb-flower-garland.png",
    href: "/products?cat=flower-garland",
  },
  {
    id: "palm-leaf-bowls",
    name: "Palm Leaf Bowls",
    thumbImage: "/categories/trending-products/thumb-palm-leaf-bowls.png",
    href: "/products?cat=palm-leaf-bowls",
  },
  {
    id: "bamboo-baskets",
    name: "Bamboo Baskets",
    thumbImage: "/categories/trending-products/thumb-bamboo-baskets.png",
    href: "/products?cat=bamboo-baskets",
  },
  {
    id: "colored-diyas",
    name: "Colored Diyas",
    thumbImage: "/categories/trending-products/thumb-colored-diyas.png",
    href: "/products?cat=colored-diyas",
  },

  // ROW 2 (7 Categories)
  {
    id: "brass-pooja-thalis",
    name: "Brass Pooja Thalis",
    thumbImage: "/categories/trending-products/thumb-brass-pooja-thalis.png",
    href: "/products?cat=pooja-thalis",
  },
  {
    id: "areca-nut",
    name: "Areca Nut",
    thumbImage: "/categories/trending-products/thumb-areca-nut.png",
    href: "/products?cat=areca-nut",
  },
  {
    id: "sugarcane",
    name: "Sugarcane",
    thumbImage: "/categories/trending-products/thumb-sugarcane.png",
    href: "/products?cat=sugarcane",
  },
  {
    id: "clay-diya",
    name: "Clay Diya",
    thumbImage: "/categories/trending-products/thumb-clay-diya.png",
    href: "/products?cat=clay-diya",
  },
  {
    id: "bananas",
    name: "Bananas",
    thumbImage: "/categories/trending-products/thumb-bananas.png",
    href: "/products?cat=bananas",
  },
  {
    id: "bamboo-tray",
    name: "Bamboo Tray",
    thumbImage: "/categories/trending-products/thumb-bamboo-tray.png",
    href: "/products?cat=bamboo-tray",
  },
  {
    id: "torans",
    name: "Torans",
    thumbImage: "/categories/trending-products/thumb-torans.png",
    href: "/products?cat=torans",
  },
];
