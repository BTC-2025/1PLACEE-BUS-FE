export interface B2CValueCardItem {
  id: string;
  title: string;
  subtitle?: string;
  graphic: string;
  graphicType: "double-img" | "circle-feature";
  actionText: string;
  href: string;
}

export const B2C_VALUE_CARDS: B2CValueCardItem[] = [
  {
    id: "card-discounts",
    title: "Top discounts for you",
    graphic: "/b2c/value-cards/graphic-computers.png",
    graphicType: "double-img",
    actionText: "See more",
    href: "/products?deals=top-discounts",
  },
  {
    id: "card-gst",
    title: "Get GST* benefits",
    subtitle: "Save up to 18% with GST* invoice now on Groceries + Guaranteed cashback*",
    graphic: "/b2c/value-cards/graphic-gst.png",
    graphicType: "circle-feature",
    actionText: "Shop Now",
    href: "/products?deals=gst-benefits",
  },
  {
    id: "card-essentials",
    title: "Business Essentials",
    subtitle: "Get everything you need for your business!",
    graphic: "/b2c/value-cards/graphic-business.png",
    graphicType: "circle-feature",
    actionText: "Shop Now",
    href: "/products?cat=business-essentials",
  },
  {
    id: "card-accessories",
    title: "Computers & Accessories",
    subtitle: "Get never before offers on Laptops, Tablets, Monitors & more.",
    graphic: "/b2c/value-cards/graphic-accessories.png",
    graphicType: "circle-feature",
    actionText: "See all deals",
    href: "/products?cat=computers-accessories",
  },
];
