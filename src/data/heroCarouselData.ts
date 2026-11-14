export interface HeroWideBanner {
  id: string;
  image: string;
  alt: string;
  href: string;
  bgFallback: string;
}

export const HERO_WIDE_BANNERS: HeroWideBanner[] = [
  {
    id: "mercado-first-purchase",
    image: "/banner-mercado.jpg",
    alt: "Sua primeira compra com ofertas exclusivas - Até 60% OFF - Frete Grátis",
    href: "/products?deals=first-purchase",
    bgFallback: "#f3f8d6"
  },
  {
    id: "black-friday-tech",
    image: "/banner-blackfriday.jpg",
    alt: "Black Friday Tecnologia No Modo Black - Até 45% OFF - Asus & Galaxy",
    href: "/products?deals=black-friday",
    bgFallback: "#ffdf00"
  }
];
