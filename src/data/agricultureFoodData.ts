export interface AgricultureProductCard {
  id: string;
  name: string;
  image: string;
  href: string;
}

export const AGRICULTURE_CATEGORY_CARDS: AgricultureProductCard[] = [
  // Row 1
  {
    id: "feed",
    name: "Feed",
    image: "/categories/agriculture/feed.png",
    href: "/products?cat=feed"
  },
  {
    id: "canned-food",
    name: "Canned Food",
    image: "/categories/agriculture/canned-food.png",
    href: "/products?cat=canned-food"
  },
  {
    id: "ginger",
    name: "Ginger",
    image: "/categories/agriculture/ginger.png",
    href: "/products?cat=ginger"
  },
  {
    id: "greenhouse",
    name: "Greenhouse",
    image: "/categories/agriculture/greenhouse.png",
    href: "/products?cat=greenhouse"
  },

  // Row 2
  {
    id: "chicken-cage",
    name: "Chicken Cage",
    image: "/categories/agriculture/chicken-cage.png",
    href: "/products?cat=chicken-cage"
  },
  {
    id: "frozen-seafood",
    name: "Frozen Seafood",
    image: "/categories/agriculture/frozen-seafood.png",
    href: "/products?cat=frozen-seafood"
  },
  {
    id: "beverage",
    name: "Beverage",
    image: "/categories/agriculture/beverage.png",
    href: "/products?cat=beverage"
  },
  {
    id: "confectionery",
    name: "Confectionery",
    image: "/categories/agriculture/confectionery.png",
    href: "/products?cat=confectionery"
  }
];
