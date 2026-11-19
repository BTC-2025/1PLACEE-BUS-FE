export interface B2BRecommendationProduct {
  id: string;
  title: string;
  image: string;
  price: string;
  originalPrice?: string;
  priceUnit?: string;
  moq: string;
  reorderRate?: string;
  soldCount?: string;
  supplierName?: string;
  supplierYears?: string;
  supplierCountry?: string;
  isVerified: boolean;
  href: string;
  badge?: string;
}

export const USER_INTEREST_PRODUCTS: B2BRecommendationProduct[] = [
  // 1. Sewing Needles Set
  {
    id: "sewing-needles-hand",
    title: "Wholesale 3-1/2\" Household Hand Needles & Sewing Craft Needles",
    image: "/categories/b2b-products/hand-needles.png",
    price: "₹7.67",
    originalPrice: "₹12.00",
    moq: "20,000 bags",
    reorderRate: "20%",
    soldCount: "4,500 sold",
    supplierName: "Apex Craft Tools",
    supplierYears: "23 yrs",
    supplierCountry: "IN",
    isVerified: true,
    badge: "Trending",
    href: "/products?q=household-hand-needles",
  },
  // 2. Professional Sewing Machine Needles Box
  {
    id: "pro-sewing-needles-box",
    title: "Professional Sewing Needle Manufacturer Sewing Machine Needle Set",
    image: "/categories/b2b-products/sewing-needles-set.png",
    price: "₹0.95 - 1.92",
    priceUnit: "/ piece",
    moq: "500 pieces",
    soldCount: "12,400 sold",
    supplierName: "TSSM Needle Tech Co.",
    supplierYears: "18 yrs",
    supplierCountry: "IN",
    isVerified: true,
    badge: "Hot Choice",
    href: "/products?q=sewing-machine-needle",
  },
  // 3. Multifunctional Sewing Presser Foot Set
  {
    id: "presser-foot-set",
    title: "Multifunctional Sewing Machine Presser Foot Set Home Accessories",
    image: "/categories/b2b-products/presser-foot-set.png",
    price: "₹182.00",
    originalPrice: "₹250.00",
    priceUnit: "/ set",
    moq: "50 sets",
    soldCount: "200 sold",
    supplierName: "StitchMaster Tools",
    supplierYears: "7 yrs",
    supplierCountry: "IN",
    isVerified: true,
    badge: "Top Seller",
    href: "/products?q=presser-foot-set",
  },
  // 4. Tailor's Vanishing Chalks
  {
    id: "tailors-chalks-heat",
    title: "Tailor's Vanishing Chalks Sewing Tailoring Garment Heat Chalk Box",
    image: "/categories/b2b-products/tailors-chalk.png",
    price: "₹76.63 - 143.68",
    priceUnit: "/ box",
    moq: "50 boxes",
    reorderRate: "17%",
    soldCount: "1,850 sold",
    supplierName: "Panda Chalk Longteng",
    supplierYears: "7 yrs",
    supplierCountry: "IN",
    isVerified: true,
    href: "/products?q=tailors-chalk",
  },
  // 5. Measuring Tape Small Special Ruler
  {
    id: "measuring-tape-ruler",
    title: "JZ-71017 Measuring Tape Small, Special Soft Ruler for Body Measure",
    image: "/categories/b2b-products/measuring-tape.png",
    price: "₹4.79 - 5.75",
    priceUnit: "/ piece",
    moq: "12 pieces",
    reorderRate: "23%",
    soldCount: "1,236 sold",
    supplierName: "AccuMeasure Precision",
    supplierYears: "5 yrs",
    supplierCountry: "IN",
    isVerified: true,
    href: "/products?q=measuring-tape",
  },
  // 6. Top Quality Needles for Sewing Machines
  {
    id: "machine-needles-top",
    title: "Factory Price Top Quality Groz Precision Needles for Sewing Machines",
    image: "/categories/b2b-products/machine-needles.png",
    price: "₹17.25 - 28.74",
    priceUnit: "/ bag",
    moq: "5,000 bags",
    soldCount: "1,000 sold",
    supplierName: "Orient Sewing Solutions",
    supplierYears: "8 yrs",
    supplierCountry: "IN",
    isVerified: true,
    badge: "Factory Direct",
    href: "/products?q=sewing-machine-needles",
  },
  // 7. Mild Steel Silver Wheel Rim
  {
    id: "steel-wheel-rim",
    title: "Heavy Duty Mild Steel Silver Steel Wheel Rim in Round Shape 12\"",
    image: "/categories/b2b-products/steel-wheel-rim.png",
    price: "₹165.00",
    priceUnit: "/ piece",
    moq: "20 pieces",
    soldCount: "850 sold",
    supplierName: "D P Metals Industrial Corp",
    supplierYears: "14 yrs",
    supplierCountry: "IN",
    isVerified: true,
    badge: "Verified OEM",
    href: "/products?q=steel-wheel-rim",
  },
  // 8. Iron Elephant Print Jars Basket Set
  {
    id: "elephant-jars-basket",
    title: "Handcrafted Iron Elephant Print Jars Basket Set for Household Luxury",
    image: "/categories/b2b-products/elephant-jars-basket.png",
    price: "₹350.00",
    originalPrice: "₹480.00",
    priceUnit: "/ set",
    moq: "15 sets",
    soldCount: "420 sold",
    supplierName: "My Signature Store",
    supplierYears: "6 yrs",
    supplierCountry: "IN",
    isVerified: true,
    badge: "Artisan",
    href: "/products?q=elephant-print-jars",
  },
  // 9. Styrene Acrylate Paint Binder in Drums
  {
    id: "styrene-paint-binder",
    title: "Industrial Styrene Acrylate Binder in 235 Kg Drums for Packing Use",
    image: "/categories/b2b-products/styrene-paint-binder.png",
    price: "₹84.00",
    priceUnit: "/ kg",
    moq: "235 kg (1 Drum)",
    soldCount: "3,200 kg sold",
    supplierName: "Shree Shyam Ji Minerals",
    supplierYears: "11 yrs",
    supplierCountry: "IN",
    isVerified: true,
    badge: "Bulk Value",
    href: "/products?q=styrene-acrylate-binder",
  },
  // 10. New Zealand Woolen Carpets for Bedroom
  {
    id: "woolen-carpets-nz",
    title: "Premium New Zealand Pure Woolen Carpets for Bedroom & Living Room",
    image: "/categories/b2b-products/woolen-carpets-nz.png",
    price: "₹3,646.50",
    priceUnit: "/ sq.mtr",
    moq: "10 sq.mtr",
    soldCount: "160 sold",
    supplierName: "Masnuaat-E-Hind Rugs",
    supplierYears: "9 yrs",
    supplierCountry: "IN",
    isVerified: true,
    badge: "Luxury Wool",
    href: "/products?q=woolen-carpets",
  },
  // 11. Handtufted Woolen Carpets
  {
    id: "handtufted-carpets",
    title: "Designer Handtufted Woolen Carpets in Rectangular Floral Shape",
    image: "/categories/b2b-products/handtufted-carpets.png",
    price: "₹2,057.00",
    originalPrice: "₹2,600.00",
    priceUnit: "/ sq.mtr",
    moq: "15 sq.mtr",
    soldCount: "280 sold",
    supplierName: "Masnuaat-E-Hind Rugs",
    supplierYears: "9 yrs",
    supplierCountry: "IN",
    isVerified: true,
    badge: "Handcrafted",
    href: "/products?q=handtufted-carpets",
  },
];

