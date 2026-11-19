export interface B2BSubcategory {
  id: string;
  name: string;
  href: string;
}

export interface B2BCategoryCard {
  id: string;
  title: string;
  image: string;
  href: string;
  subcategories: B2BSubcategory[];
}

export interface B2BPillarQuickLink {
  id: string;
  label: string;
  href: string;
}

// ============================================================================
// 1. COSMETICS & PERSONAL CARE PRODUCTS (Image 1)
// ============================================================================
export const COSMETICS_PILLAR_LINKS: B2BPillarQuickLink[] = [
  {
    id: "herbal-oils",
    label: "Herbal, Ayurvedic Oils & Cosmetics",
    href: "/products?cat=herbal-oils",
  },
  {
    id: "salon-equipment",
    label: "Salon & Beauty Equipment",
    href: "/products?cat=salon-equipment",
  },
  {
    id: "fragrances-perfumes",
    label: "Fragrances & Perfumes",
    href: "/products?cat=fragrances-perfumes",
  },
  {
    id: "hand-sanitizers-hygiene",
    label: "Hand Sanitizers & Personal Hygiene",
    href: "/products?cat=hand-sanitizers",
  },
];

export const COSMETICS_CATEGORY_CARDS: B2BCategoryCard[] = [
  {
    id: "sanitizers-hygiene",
    title: "Hand Sanitizers & Personal Hygiene",
    image: "/categories/cosmetics/hand-sanitizers.jpg",
    href: "/products?cat=hand-sanitizers",
    subcategories: [
      { id: "body-lotion", name: "Body Lotion", href: "/products?q=body-lotion" },
      { id: "hand-sanitizer", name: "Hand Sanitizer", href: "/products?q=hand-sanitizer" },
      { id: "hand-wash", name: "Hand Wash", href: "/products?q=hand-wash" },
      { id: "face-wash", name: "Face Wash", href: "/products?q=face-wash" },
      { id: "sanitary-napkins", name: "Sanitary Napkins", href: "/products?q=sanitary-napkins" },
    ],
  },
  {
    id: "child-baby-care",
    title: "Child & Baby Care Products",
    image: "/categories/cosmetics/baby-care.jpg",
    href: "/products?cat=baby-care",
    subcategories: [
      { id: "baby-diapers", name: "Baby Diapers", href: "/products?q=baby-diapers" },
      { id: "baby-care-products", name: "Baby Care Products", href: "/products?q=baby-care" },
      { id: "baby-powder", name: "Baby Powder", href: "/products?q=baby-powder" },
      { id: "baby-bag", name: "Baby Bag", href: "/products?q=baby-bag" },
      { id: "baby-bibs", name: "Baby Bibs", href: "/products?q=baby-bibs" },
    ],
  },
  {
    id: "massage-spa-devices",
    title: "Massage Products, Equipment & Spa Devices",
    image: "/categories/cosmetics/massage-spa.jpg",
    href: "/products?cat=massage-spa",
    subcategories: [
      { id: "massage-roller", name: "Massage Roller", href: "/products?q=massage-roller" },
      { id: "massager", name: "Massager", href: "/products?q=massager" },
      { id: "stone-massage-wands", name: "Stone Massage Wands", href: "/products?q=stone-massage-wands" },
      { id: "massage-table", name: "Massage Table", href: "/products?q=massage-table" },
    ],
  },
  {
    id: "cosmetics-hair-care",
    title: "Cosmetics, Hair Care & Beauty Products",
    image: "/categories/cosmetics/cosmetics-hair.jpg",
    href: "/products?cat=cosmetics-hair",
    subcategories: [
      { id: "indigo-powder", name: "Indigo Powder", href: "/products?q=indigo-powder" },
      { id: "hair-oil", name: "Hair Oil", href: "/products?q=hair-oil" },
      { id: "hair-shampoo", name: "Hair Shampoo", href: "/products?q=hair-shampoo" },
      { id: "skin-care-cosmetics", name: "Skin Care Cosmetics", href: "/products?q=skin-care-cosmetics" },
      { id: "cosmetics", name: "Cosmetics", href: "/products?q=cosmetics" },
    ],
  },
  {
    id: "soaps-detergents",
    title: "Soaps & Detergents",
    image: "/categories/cosmetics/soaps-detergents.jpg",
    href: "/products?cat=soaps-detergents",
    subcategories: [
      { id: "sodium-sulphate", name: "Sodium Sulphate", href: "/products?q=sodium-sulphate" },
      { id: "dishwash-liquid", name: "Dishwash Liquid", href: "/products?q=dishwash-liquid" },
      { id: "liquid-detergent", name: "Liquid Detergent", href: "/products?q=liquid-detergent" },
    ],
  },
  {
    id: "bindi-body-beautification",
    title: "Bindi & Body Beautification Products",
    image: "/categories/cosmetics/bindi-body.jpg",
    href: "/products?cat=bindi-body",
    subcategories: [
      { id: "hair-accessories", name: "Hair Accessories", href: "/products?q=hair-accessories" },
      { id: "sindoor", name: "Sindoor", href: "/products?q=sindoor" },
      { id: "beaded-hair-accessories", name: "Beaded Hair Accessories", href: "/products?q=beaded-hair-accessories" },
      { id: "liquid-sindoor", name: "Liquid Sindoor", href: "/products?q=liquid-sindoor" },
      { id: "kumkum", name: "Kumkum", href: "/products?q=kumkum" },
    ],
  },
];

// ============================================================================
// 2. PHARMACEUTICAL & HEALTHCARE PRODUCTS (Image 2)
// ============================================================================
export const PHARMA_PILLAR_LINKS: B2BPillarQuickLink[] = [
  {
    id: "pharma-ingredients",
    label: "Pharma Ingredients & Raw Materials",
    href: "/products?cat=pharma-ingredients",
  },
  {
    id: "cardiovascular-meds",
    label: "Cardiovascular Medication & Drugs",
    href: "/products?cat=cardiovascular-drugs",
  },
  {
    id: "anti-infective-drugs",
    label: "Anti Infective Medicines & Drugs",
    href: "/products?cat=anti-infective-drugs",
  },
  {
    id: "nervous-brain-drugs",
    label: "Nervous & Brain System Drugs",
    href: "/products?cat=nervous-system-drugs",
  },
];

export const PHARMA_CATEGORY_CARDS: B2BCategoryCard[] = [
  {
    id: "medicines-tonics-drugs",
    title: "Medicines Tonics & Drugs",
    image: "/categories/pharma/medicines-drugs.jpg",
    href: "/products?cat=medicines-drugs",
    subcategories: [
      { id: "allopathic-medicine", name: "Allopathic Medicine", href: "/products?q=allopathic-medicine" },
      { id: "ointment", name: "Ointment", href: "/products?q=ointment" },
      { id: "pharmaceutical-syrups", name: "Pharmaceutical Syrups", href: "/products?q=pharmaceutical-syrups" },
      { id: "pharmaceutical-medicine", name: "Pharmaceutical Medicine", href: "/products?q=pharmaceutical-medicine" },
      { id: "pharmaceutical-injection", name: "Pharmaceutical Injection", href: "/products?q=pharmaceutical-injection" },
    ],
  },
  {
    id: "medical-surgery-centres",
    title: "Medical Surgery & Treatment Centres",
    image: "/categories/pharma/medical-surgery.jpg",
    href: "/products?cat=medical-surgery",
    subcategories: [
      { id: "dental-treatment", name: "Dental Treatment Service", href: "/products?q=dental-treatment" },
      { id: "pcd-pharma", name: "PCD Pharma Franchise", href: "/products?q=pcd-pharma" },
    ],
  },
  {
    id: "healthcare-devices-wellness",
    title: "Healthcare Devices & General Wellness Products",
    image: "/categories/pharma/healthcare-wellness.jpg",
    href: "/products?cat=healthcare-wellness",
    subcategories: [
      { id: "steam-vaporizer", name: "Steam Vaporizer", href: "/products?q=steam-vaporizer" },
    ],
  },
  {
    id: "dietary-supplements-nutra",
    title: "Dietary Supplements & Nutraceuticals",
    image: "/categories/pharma/dietary-supplements.jpg",
    href: "/products?cat=dietary-supplements",
    subcategories: [
      { id: "whey-protein", name: "Whey Protein Powder", href: "/products?q=whey-protein" },
      { id: "multivitamin", name: "Multivitamin Supplements", href: "/products?q=multivitamin" },
      { id: "tulsi-drops", name: "Tulsi Drops", href: "/products?q=tulsi-drops" },
      { id: "ferrous-ascorbate", name: "Ferrous Ascorbate", href: "/products?q=ferrous-ascorbate" },
      { id: "calcium-tablet", name: "Calcium Tablet", href: "/products?q=calcium-tablet" },
    ],
  },
  {
    id: "digestive-system-medicines",
    title: "Digestive System Medicines & Drugs",
    image: "/categories/pharma/digestive-medicines.jpg",
    href: "/products?cat=digestive-medicines",
    subcategories: [
      { id: "gastrointestinal-drug", name: "Gastrointestinal drug", href: "/products?q=gastrointestinal-drug" },
      { id: "allopathic-liver-tonic", name: "Allopathic Liver Tonic", href: "/products?q=liver-tonic" },
      { id: "antacid-drugs", name: "Antacid Drugs", href: "/products?q=antacid-drugs" },
      { id: "antacid-syrup", name: "Antacid Syrup", href: "/products?q=antacid-syrup" },
    ],
  },
  {
    id: "pain-relief-drugs",
    title: "Pain Relief Drugs & Medicines",
    image: "/categories/pharma/pain-relief.jpg",
    href: "/products?cat=pain-relief",
    subcategories: [
      { id: "anti-inflammatory", name: "Anti Inflammatory Drugs", href: "/products?q=anti-inflammatory" },
      { id: "pain-relief-tablet", name: "Pain Relief Tablet", href: "/products?q=pain-relief-tablet" },
      { id: "arthritic-drugs", name: "Arthritic Drugs", href: "/products?q=arthritic-drugs" },
      { id: "ayurvedic-joint-relief", name: "Ayurvedic And Herbal Joint Relief", href: "/products?q=ayurvedic-joint-relief" },
      { id: "analgesics", name: "Analgesics", href: "/products?q=analgesics" },
    ],
  },
];

// ============================================================================
// 3. INDUSTRIAL MACHINERY & PLANT EQUIPMENT (Image 3)
// ============================================================================
export const INDUSTRIAL_MACHINERY_PILLAR_LINKS: B2BPillarQuickLink[] = [
  {
    id: "machines-equipment",
    label: "Machines & Equipment",
    href: "/products?cat=machines-equipment",
  },
  {
    id: "conveyors-system",
    label: "Conveyors System & Components",
    href: "/products?cat=conveyors-system",
  },
  {
    id: "pollution-control",
    label: "Pollution Control Machines & Devices",
    href: "/products?cat=pollution-control",
  },
  {
    id: "industrial-ovens",
    label: "Industrial Ovens & Furnaces",
    href: "/products?cat=industrial-ovens",
  },
];

export const INDUSTRIAL_MACHINERY_CATEGORY_CARDS: B2BCategoryCard[] = [
  {
    id: "food-processing-machines",
    title: "Food Processing Machines & Plants",
    image: "/categories/industrial-machinery/food-processing.jpg",
    href: "/products?cat=food-processing-machines",
    subcategories: [
      { id: "chapati-making", name: "Chapati Making Machine", href: "/products?q=chapati-making" },
      { id: "gravy-machine", name: "Gravy Machine", href: "/products?q=gravy-machine" },
      { id: "appalam-machine", name: "Appalam Machine", href: "/products?q=appalam-machine" },
    ],
  },
  {
    id: "grinding-milling-tools",
    title: "Grinding & Milling Tools & Machinery",
    image: "/categories/industrial-machinery/grinding-milling.jpg",
    href: "/products?cat=grinding-milling",
    subcategories: [
      { id: "pulverizers", name: "Pulverizers", href: "/products?q=pulverizers" },
      { id: "ball-mill", name: "Ball Mill", href: "/products?q=ball-mill" },
      { id: "disintegrator", name: "Disintegrator", href: "/products?q=disintegrator" },
      { id: "hammer-mill", name: "Hammer Mill", href: "/products?q=hammer-mill" },
    ],
  },
  {
    id: "oil-mill-extraction",
    title: "Oil Mill & Oil Extraction Machinery",
    image: "/categories/industrial-machinery/oil-extraction.jpg",
    href: "/products?cat=oil-mill-machinery",
    subcategories: [
      { id: "oil-production-plant", name: "Oil Production Plant", href: "/products?q=oil-production-plant" },
      { id: "oil-extraction-machine", name: "Oil Extraction Machine", href: "/products?q=oil-extraction-machine" },
      { id: "oil-mill-machinery", name: "Oil Mill Machinery", href: "/products?q=oil-mill-machinery" },
    ],
  },
  {
    id: "material-handling-machines",
    title: "Material Handling Machines & Systems",
    image: "/categories/industrial-machinery/material-handling.jpg",
    href: "/products?cat=material-handling",
    subcategories: [
      { id: "material-handling-equipment", name: "Material Handling Equipment", href: "/products?q=material-handling-equipment" },
      { id: "hydraulic-truck-unloader", name: "Hydraulic Truck Unloader", href: "/products?q=truck-unloader" },
      { id: "work-tables", name: "Work Tables", href: "/products?q=work-tables" },
      { id: "hand-pallet-truck", name: "Hand Pallet Truck", href: "/products?q=hand-pallet-truck" },
      { id: "manual-stacker", name: "Manual Stacker", href: "/products?q=manual-stacker" },
    ],
  },
  {
    id: "cutting-machines-equipment",
    title: "Cutting Machines & Equipment",
    image: "/categories/industrial-machinery/cutting-machines.jpg",
    href: "/products?cat=cutting-machines",
    subcategories: [
      { id: "cutting-machine", name: "Cutting Machine", href: "/products?q=cutting-machine" },
      { id: "die-cut-machine", name: "Die Cut Machine", href: "/products?q=die-cut-machine" },
      { id: "bar-cutting-machine", name: "Bar Cutting Machine", href: "/products?q=bar-cutting-machine" },
      { id: "plasma-cutting-machine", name: "Plasma Cutting Machine", href: "/products?q=plasma-cutting-machine" },
      { id: "cut-off-machine", name: "Cut Off Machine", href: "/products?q=cut-off-machine" },
    ],
  },
  {
    id: "water-treatment-purification",
    title: "Water Treatment & Purification Plant",
    image: "/categories/industrial-machinery/water-treatment.jpg",
    href: "/products?cat=water-treatment",
    subcategories: [
      { id: "water-treatment-plant", name: "Water Treatment Plant", href: "/products?q=water-treatment-plant" },
      { id: "water-softener", name: "Water Softener", href: "/products?q=water-softener" },
      { id: "industrial-ro-plant", name: "Industrial RO Plant", href: "/products?q=industrial-ro-plant" },
    ],
  },
];

