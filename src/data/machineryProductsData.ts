export interface MachineryProductItem {
  id: string;
  image: string;
  title: string;
  price: string;
  moq: string;
  supplierYears: string;
  supplierCountry: string;
  isVerified?: boolean;
  reorderRate?: string;
  soldCount?: string;
  deliveryDate?: string;
  href: string;
}

export const MACHINERY_PRODUCTS: MachineryProductItem[] = [
  // Row 1
  {
    id: "machinery-1",
    image: "/products/machinery/product-1.jpg",
    title: "XL Industrial Steel Sewing Machine Stickers",
    price: "₹96.39",
    moq: "MOQ: 1 piece",
    supplierYears: "6 yrs",
    supplierCountry: "IN",
    reorderRate: "Reorder rate 15%",
    href: "/products/xl-industrial-stickers"
  },
  {
    id: "machinery-2",
    image: "/products/machinery/product-2.jpg",
    title: "8 PCS Universal Sewing Rolled Hemmer Presser Foot 3-10mm Pull Tube Spiral Edging Roller...",
    price: "₹33.74",
    moq: "MOQ: 1 piece",
    supplierYears: "3 yrs",
    supplierCountry: "IN",
    href: "/products/universal-hemmer-foot"
  },
  {
    id: "machinery-3",
    image: "/products/machinery/product-3.jpg",
    title: "1200m 100% Cotton Kite Flying Thread 20s/3 9ply 0.5mm High...",
    price: "₹202.40-231.32",
    moq: "MOQ: 399 pieces",
    soldCount: "28 sold",
    supplierYears: "4 yrs",
    supplierCountry: "IN",
    isVerified: true,
    href: "/products/cotton-kite-thread"
  },
  {
    id: "machinery-4",
    image: "/products/machinery/product-4.jpg",
    title: "Double Needle Sleeve Attachment 2 Machine use...",
    price: "₹86.75-96.39",
    moq: "MOQ: 1 piece",
    supplierYears: "10 yrs",
    supplierCountry: "IN",
    reorderRate: "Reorder rate 23%",
    href: "/products/double-needle-attachment"
  },
  {
    id: "machinery-5",
    image: "/products/machinery/product-5.jpg",
    title: "Hot Sale Spare Part Leather Belt Embossing Machine Mold Belt Roller Embossing Machine Die",
    price: "₹11,180.17-11,854.84",
    moq: "MOQ: 1 piece",
    supplierYears: "8 yrs",
    supplierCountry: "IN",
    href: "/products/leather-belt-embossing"
  },
  {
    id: "machinery-6",
    image: "/products/machinery/product-6.jpg",
    title: "Used 335 Tape Binding Walking Foot Sewing Machine Leather Industrial Secondhand Maquina...",
    price: "₹12,047.60",
    moq: "MOQ: 20 pieces",
    supplierYears: "4 yrs",
    supplierCountry: "IN",
    href: "/products/used-335-sewing-machine"
  },

  // Row 2
  {
    id: "machinery-7",
    image: "/products/machinery/product-7.jpg",
    title: "ANDUUK SL-850W Double-head Grinding Machine Polishing...",
    price: "₹9,541.70",
    moq: "MOQ: 1 piece",
    supplierYears: "2 yrs",
    supplierCountry: "IN",
    reorderRate: "Reorder rate 18%",
    href: "/products/anduuk-grinding-machine"
  },
  {
    id: "machinery-8",
    image: "/products/machinery/product-8.jpg",
    title: "New for Style 8700 Mechanical Flat-Bed Sewing Machine Iron...",
    price: "₹2,891.43-9,156.18",
    moq: "MOQ: 1 piece",
    soldCount: "22 sold",
    supplierYears: "1 yr",
    supplierCountry: "IN",
    reorderRate: "Reorder rate 16%",
    href: "/products/style-8700-flatbed"
  },
  {
    id: "machinery-9",
    image: "/products/machinery/product-9.jpg",
    title: "JINZEN Sewing Machine SPRING FOOT CLAMP Flatbed Sewing...",
    price: "₹24.10",
    moq: "MOQ: 10 pieces",
    soldCount: "55 sold",
    supplierYears: "5 yrs",
    supplierCountry: "IN",
    isVerified: true,
    reorderRate: "Reorder rate 23%",
    href: "/products/jinzen-spring-clamp"
  },
  {
    id: "machinery-10",
    image: "/products/machinery/product-10.jpg",
    title: "plastic Iron Shoe TV-3/TREVIL Ironing Shoe Iron Parts Sewing...",
    price: "₹86.75-96.39",
    moq: "MOQ: 1 piece",
    supplierYears: "10 yrs",
    supplierCountry: "IN",
    reorderRate: "Reorder rate 23%",
    href: "/products/plastic-iron-shoe"
  },
  {
    id: "machinery-11",
    image: "/products/machinery/product-11.jpg",
    title: "998 Factory Supply Small Automatic Computer Cold and...",
    price: "₹19,083.39",
    moq: "MOQ: 1 piece",
    soldCount: "11 sold",
    supplierYears: "4 yrs",
    supplierCountry: "IN",
    deliveryDate: "Delivery by 28 Dec",
    href: "/products/998-automatic-cutter"
  },
  {
    id: "machinery-12",
    image: "/products/machinery/product-12.jpg",
    title: "Competitive Price High Speed Lockstitch Sewing Machine",
    price: "₹8,867.03-9,252.56",
    moq: "MOQ: 30 sets",
    soldCount: "8 sold",
    supplierYears: "14 yrs",
    supplierCountry: "IN",
    isVerified: true,
    reorderRate: "Reorder rate 21%",
    href: "/products/high-speed-lockstitch"
  },

  // Row 3
  {
    id: "machinery-13",
    image: "/products/machinery/product-13.jpg",
    title: "ATOM Fortuna TECON FAV Ellegi NIPPY Round Knife Leather...",
    price: "₹819.24",
    moq: "MOQ: 1 piece",
    soldCount: "3 sold",
    supplierYears: "6 yrs",
    supplierCountry: "IN",
    deliveryDate: "Delivery by 01 Jan",
    href: "/products/atom-round-knife"
  },
  {
    id: "machinery-14",
    image: "/products/machinery/product-14.jpg",
    title: "CE 2006/42/EC DT400 Double-drive Platform Closed-loop Belt Type Electroni...",
    price: "₹18,312.35-21,203.77",
    moq: "MOQ: 1 set",
    soldCount: "2 sold",
    supplierYears: "7 yrs",
    supplierCountry: "IN",
    isVerified: true,
    href: "/products/dt400-double-drive"
  },
  {
    id: "machinery-15",
    image: "/products/machinery/product-15.jpg",
    title: "2026 Manual Leather Sewing Machine Hand Shoe Cobbler Stitching Repair Mending Shoe...",
    price: "₹6,158.73",
    moq: "MOQ: 1 set",
    supplierYears: "1 yr",
    supplierCountry: "IN",
    href: "/products/manual-leather-shoe-cobbler"
  },
  {
    id: "machinery-16",
    image: "/products/machinery/product-16.jpg",
    title: "HK 500 Hot Sale Household Blind Stitch Sewing Machine",
    price: "₹11,565.69",
    moq: "MOQ: 1 set",
    supplierYears: "11 yrs",
    supplierCountry: "IN",
    isVerified: true,
    reorderRate: "Reorder rate 17%",
    href: "/products/hk-500-blind-stitch"
  },
  {
    id: "machinery-17",
    image: "/products/machinery/product-17.jpg",
    title: "JS FZ-120/FZ-130 High-Speed Automatic Yarn Winding Machine PLC Controlled Gear-Driven...",
    price: "₹2,795.05",
    moq: "MOQ: 1 pair",
    supplierYears: "2 yrs",
    supplierCountry: "HK",
    href: "/products/yarn-winding-machine"
  },
  {
    id: "machinery-18",
    image: "/products/machinery/product-18.jpg",
    title: "2006/42/EC MC 0303 Head Only Cheap Price Heavy Duty Walking Foot Leath...",
    price: "₹13,975.21-14,939.02",
    moq: "MOQ: 1 piece",
    soldCount: "14 sold",
    supplierYears: "12 yrs",
    supplierCountry: "IN",
    isVerified: true,
    href: "/products/mc-0303-walking-foot"
  }
];
