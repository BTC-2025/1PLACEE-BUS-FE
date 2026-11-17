export interface B2CValueCardItem {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  actionText: string;
  href: string;
}

export const B2C_VALUE_CARDS: B2CValueCardItem[] = [
  {
    id: "card-1",
    title: "Top discounts for you",
    subtitle: "Up to 70% off on refurbished & new desktop PCs",
    image: "/b2c/value-cards/card-1.png",
    actionText: "See more",
    href: "/products?deals=top-discounts",
  },
  {
    id: "card-3",
    title: "Get GST* benefits",
    subtitle: "Save up to 18% with GST* invoice on Groceries + Guaranteed cashback*",
    image: "/b2c/value-cards/card-3.png",
    actionText: "Shop Now",
    href: "/products?deals=gst-benefits",
  },
  {
    id: "card-4",
    title: "Business Essentials",
    subtitle: "Get everything you need for your business!",
    image: "/b2c/value-cards/card-4.png",
    actionText: "Shop Now",
    href: "/products?cat=business-essentials",
  },
  {
    id: "card-5",
    title: "Computers & Accessories",
    subtitle: "Get never before offers on Laptops, Tablets, Monitors & more.",
    image: "/b2c/value-cards/card-5.png",
    actionText: "See all deals",
    href: "/products?cat=computers-accessories",
  },
];
