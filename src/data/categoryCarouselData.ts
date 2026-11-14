export interface CategoryCardItem {
  id: string;
  name: string;
  img: string;
  href: string;
}

// 3 Slides x 15 Cards = 45 Verified Wholesale Category Cards
export const CATEGORY_CAROUSEL_SLIDES: CategoryCardItem[][] = [
  // SLIDE 1 (Matches the user's uploaded Image 1: 3 rows x 5 columns = 15 cards)
  [
    {
      id: "electric-scooter",
      name: "Electric Scooter",
      img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=electric+scooter"
    },
    {
      id: "incense-sticks",
      name: "Aromatic Incense Sticks",
      img: "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=incense+sticks"
    },
    {
      id: "cow-calf-statue",
      name: "Kamadhenu Cow and Calf Statue",
      img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=statues"
    },
    {
      id: "dupion-silk",
      name: "Dupion Silk",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=dupion+silk"
    },
    {
      id: "income-tax-consultant",
      name: "Income Tax Consultant",
      img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=150&q=80",
      href: "/services?q=tax+consultant"
    },
    {
      id: "air-hose-pipe",
      name: "Air Hose Pipe",
      img: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=hose+pipe"
    },
    {
      id: "printed-labels",
      name: "Printed Labels",
      img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=printed+labels"
    },
    {
      id: "ammonium-bromide",
      name: "Ammonium Bromide",
      img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=chemicals"
    },
    {
      id: "tmt-bars",
      name: "TMT Bars",
      img: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=tmt+bars"
    },
    {
      id: "disposable-toothbrushes",
      name: "Disposable Toothbrushes",
      img: "https://images.unsplash.com/photo-1559671089-d8e7f7d63fa5?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=toothbrushes"
    },
    {
      id: "acrylic-crockery",
      name: "Acrylic Crockery",
      img: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=crockery"
    },
    {
      id: "aluminium-false-ceilings",
      name: "Aluminium False Ceilings",
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=false+ceiling"
    },
    {
      id: "air-regulators",
      name: "Air Regulators",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=regulators"
    },
    {
      id: "ac-power-supply",
      name: "AC Power Supply",
      img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=power+supply"
    },
    {
      id: "stainless-steel-wire",
      name: "Stainless Steel Wire",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=steel+wire"
    }
  ],

  // SLIDE 2 (15 cards)
  [
    {
      id: "cnc-machine",
      name: "Smart CNC Milling Machinery",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=cnc+machinery"
    },
    {
      id: "solar-panels",
      name: "Solar Panels & Inverters",
      img: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=solar+panels"
    },
    {
      id: "custom-flag",
      name: "Custom Corporate Flags",
      img: "https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=flags"
    },
    {
      id: "wicker-chair",
      name: "Wicker Chair & Furniture",
      img: "https://images.unsplash.com/photo-1580481077111-c918ec3b2ec6?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=furniture"
    },
    {
      id: "coconut-climber",
      name: "Coconut Tree Climber",
      img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=climber"
    },
    {
      id: "corrugated-boxes",
      name: "Corrugated Packaging Boxes",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=boxes"
    },
    {
      id: "led-lighting",
      name: "Commercial LED Flood Lights",
      img: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=led+lights"
    },
    {
      id: "safety-shoes",
      name: "Industrial Steel Toe Safety Shoes",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=safety+shoes"
    },
    {
      id: "water-purifier",
      name: "Industrial RO Water Plant",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=water+purifier"
    },
    {
      id: "cctv-cameras",
      name: "HD CCTV Security Systems",
      img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=cctv"
    },
    {
      id: "cotton-yarn",
      name: "Combed Cotton Yarn Bulk",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=cotton+yarn"
    },
    {
      id: "bearing-units",
      name: "Precision Ball Bearings",
      img: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=bearings"
    },
    {
      id: "safety-gloves",
      name: "Heavy Duty Nitrile Gloves",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=gloves"
    },
    {
      id: "hydraulic-cylinders",
      name: "Hydraulic Jack & Cylinders",
      img: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=hydraulic"
    },
    {
      id: "conveyor-belts",
      name: "Rubber Conveyor Belts",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=conveyor"
    }
  ],

  // SLIDE 3 (15 cards)
  [
    {
      id: "garlic-bulk",
      name: "Fresh Garlic Wholesale",
      img: "https://images.unsplash.com/photo-1588615419957-4623a3399066?auto=format&fit=crop&w=150&q=80",
      href: "/category/agriculture-food"
    },
    {
      id: "ginger-bulk",
      name: "Fresh Organic Ginger",
      img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=150&q=80",
      href: "/category/agriculture-food"
    },
    {
      id: "sunflower-oil",
      name: "Refined Sunflower Edible Oil",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=edible+oil"
    },
    {
      id: "cardamom-spices",
      name: "Green Cardamom & Spices",
      img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=spices"
    },
    {
      id: "plastic-granules",
      name: "HDPE / PP Plastic Granules",
      img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=polymers"
    },
    {
      id: "fire-extinguisher",
      name: "ABC Dry Powder Extinguishers",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=fire+safety"
    },
    {
      id: "diesel-generator",
      name: "Silent Diesel Power Generators",
      img: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=generators"
    },
    {
      id: "paper-cups",
      name: "Biodegradable Paper Cups",
      img: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=paper+cups"
    },
    {
      id: "industrial-valves",
      name: "Cast Iron Flanged Valves",
      img: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=valves"
    },
    {
      id: "laboratory-glassware",
      name: "Borosilicate Lab Glassware",
      img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=laboratory"
    },
    {
      id: "stretch-film",
      name: "Pallet Stretch Wrap Film",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=stretch+film"
    },
    {
      id: "weighing-scales",
      name: "Digital Industrial Weighing Scales",
      img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=weighing+scale"
    },
    {
      id: "water-tanks",
      name: "Commercial Triple Layer Water Tanks",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=water+tanks"
    },
    {
      id: "epoxy-flooring",
      name: "Industrial Epoxy Floor Coating",
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=epoxy"
    },
    {
      id: "pneumatic-fittings",
      name: "Brass Pneumatic Quick Fittings",
      img: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=150&q=80",
      href: "/products?q=fittings"
    }
  ]
];
