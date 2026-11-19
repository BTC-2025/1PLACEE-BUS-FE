export interface ScientificSubcategory {
  id: string;
  name: string;
  href: string;
}

export interface ScientificCategoryCard {
  id: string;
  title: string;
  image: string;
  href: string;
  subcategories: ScientificSubcategory[];
}

export interface ScientificPillarQuickLink {
  id: string;
  label: string;
  href: string;
}

export const SCIENTIFIC_PILLAR_LINKS: ScientificPillarQuickLink[] = [
  {
    id: "weighing-scales",
    label: "Weighing Scales & Measuring Tapes",
    href: "/products?cat=weighing-scales",
  },
  {
    id: "measuring-instruments",
    label: "Measuring Instruments & Equipment",
    href: "/products?cat=measuring-instruments",
  },
  {
    id: "lab-plasticware",
    label: "Laboratory Plasticware & Glassware",
    href: "/products?cat=laboratory-glassware",
  },
  {
    id: "testing-equipment",
    label: "Testing Equipment & Machines",
    href: "/products?cat=testing-equipment",
  },
];

export const SCIENTIFIC_CATEGORY_CARDS: ScientificCategoryCard[] = [
  // CARD 1: Measuring Instruments & Equipment
  {
    id: "measuring-instruments",
    title: "Measuring Instruments & Equipment",
    image: "/categories/scientific/measuring-instruments.png",
    href: "/products?cat=measuring-instruments",
    subcategories: [
      { id: "measuring-inst", name: "Measuring Instruments", href: "/products?cat=measuring-instruments" },
      { id: "digital-meters", name: "Digital Meters", href: "/products?cat=digital-meters" },
      { id: "moisture-meter", name: "Moisture Meter", href: "/products?cat=moisture-meter" },
      { id: "liquid-indicator", name: "Liquid Level Indicator", href: "/products?cat=liquid-level-indicator" },
      { id: "water-meters", name: "Water Meters", href: "/products?cat=water-meters" },
    ],
  },

  // CARD 2: Laboratory Plasticware & Glassware
  {
    id: "lab-plasticware-glassware",
    title: "Laboratory Plasticware & Glassware",
    image: "/categories/scientific/lab-glassware.png",
    href: "/products?cat=laboratory-glassware",
    subcategories: [
      { id: "lab-glassware", name: "Laboratory Glassware", href: "/products?cat=laboratory-glassware" },
      { id: "lab-plasticware", name: "Laboratory Plasticware", href: "/products?cat=laboratory-plasticware" },
      { id: "test-tube", name: "Test Tube", href: "/products?cat=test-tube" },
      { id: "volumetric-pipette", name: "Volumetric Pipette", href: "/products?cat=volumetric-pipette" },
      { id: "lab-plates", name: "Laboratory Plates", href: "/products?cat=laboratory-plates" },
    ],
  },

  // CARD 3: Testing Equipment & Machines
  {
    id: "testing-equipment-machines",
    title: "Testing Equipment & Machines",
    image: "/categories/scientific/testing-equipment.png",
    href: "/products?cat=testing-equipment",
    subcategories: [
      { id: "testing-equip", name: "Testing Equipment", href: "/products?cat=testing-equipment" },
      { id: "hardness-tester", name: "Hardness Tester", href: "/products?cat=hardness-tester" },
      { id: "water-testing", name: "Water Testing Equipment", href: "/products?cat=water-testing" },
      { id: "soil-testing", name: "Soil Testing Equipment", href: "/products?cat=soil-testing" },
      { id: "testing-apparatus", name: "Testing Apparatus", href: "/products?cat=testing-apparatus" },
    ],
  },

  // CARD 4: Laboratory Equipment & Instruments
  {
    id: "lab-equipment-instruments",
    title: "Laboratory Equipment & Instruments",
    image: "/categories/scientific/lab-equipment.png",
    href: "/products?cat=lab-equipment",
    subcategories: [
      { id: "lab-apparatus", name: "Laboratory Apparatus", href: "/products?cat=laboratory-apparatus" },
      { id: "hot-air-oven", name: "Hot Air Oven", href: "/products?cat=hot-air-oven" },
      { id: "clean-room", name: "Clean Room Equipment", href: "/products?cat=clean-room" },
      { id: "lab-bath", name: "Laboratory Bath", href: "/products?cat=laboratory-bath" },
      { id: "lab-chamber", name: "Laboratory Chamber", href: "/products?cat=laboratory-chamber" },
    ],
  },

  // CARD 5: Flowmeters & Thermometers
  {
    id: "flowmeters-thermometers",
    title: "Flowmeters & Thermometers",
    image: "/categories/scientific/flowmeters-thermometers.png",
    href: "/products?cat=flowmeters",
    subcategories: [
      { id: "flow-meters", name: "Flow Meters", href: "/products?cat=flow-meters" },
      { id: "thermometers", name: "Thermometers", href: "/products?cat=thermometers" },
      { id: "thermocouple", name: "Thermocouple", href: "/products?cat=thermocouple" },
      { id: "electromag-flow", name: "Electromagnetic Flow Meter", href: "/products?cat=electromagnetic-flow-meter" },
    ],
  },

  // CARD 6: Measurement Gauges & Fittings
  {
    id: "measurement-gauges-fittings",
    title: "Measurement Gauges & Fittings",
    image: "/categories/scientific/measurement-gauges.png",
    href: "/products?cat=measurement-gauges",
    subcategories: [
      { id: "measurement-gauge", name: "Measurement Gauge", href: "/products?cat=measurement-gauge" },
      { id: "pressure-gauges", name: "Pressure Gauges", href: "/products?cat=pressure-gauges" },
      { id: "temp-gauges", name: "Temperature Gauges", href: "/products?cat=temperature-gauges" },
      { id: "thickness-gauge", name: "Thickness Gauge", href: "/products?cat=thickness-gauge" },
      { id: "precision-gauges", name: "Precision Gauges", href: "/products?cat=precision-gauges" },
    ],
  },
];

