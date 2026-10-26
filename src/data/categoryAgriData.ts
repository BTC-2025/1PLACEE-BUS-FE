export interface CategoryDetail {
  id: string;
  name: string;
  subSections: {
    title: string;
    description: string;
    items: string[];
  }[];
  featuredProducts: {
    id: string;
    name: string;
    img: string;
    searchQuery: string;
  }[];
}

export const CATEGORY_AGRI_DATA: CategoryDetail = {
  id: "agriculture-food",
  name: "Agriculture & Food",
  subSections: [
    {
      title: "Vegetables & Fruits",
      description: "Tea & Tea Leaf / Nut & Seed / Dried Fruit / Garlic / Fruit & Melon / Chilli & Pepper / Onion",
      items: ["Fresh Garlic", "Ginger", "Red Onion", "Chilli & Pepper", "Potato", "Carrot & Radish", "Tomato", "Apple & Citrus"]
    },
    {
      title: "Food & Beverage",
      description: "Frozen Food / Canned Food / Beverage / Sugar & Confection / Edible Oils",
      items: ["Canned Sweet Corn", "Mushroom in Brine", "Refined Sunflower Oil", "Instant Coffee", "Cocoa Powder", "Wheat Flour"]
    },
    {
      title: "Additives & Extracts",
      description: "Food Additive / Herbal Extract / Feed Additives / Agriculture Manure / Fruit Extract",
      items: ["Sodium Bicarbonate", "Herbal Extract Powder", "Bio Fertilizer", "Bulking Agents", "Natural Citric Acid", "Spirulina Powder"]
    }
  ],
  featuredProducts: [
    { id: "garlic", name: "Garlic", img: "https://images.unsplash.com/photo-1588615419957-4623a3399066?auto=format&fit=crop&w=300&q=80", searchQuery: "garlic" },
    { id: "ginger", name: "Ginger", img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=300&q=80", searchQuery: "ginger" },
    { id: "onion", name: "Onion", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80", searchQuery: "onion" },
    { id: "chilli", name: "Chilli & Pepper", img: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=300&q=80", searchQuery: "chilli" },
    { id: "potato", name: "Potato", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=300&q=80", searchQuery: "potato" },
    { id: "carrot", name: "Carrot & Radish", img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5c317?auto=format&fit=crop&w=300&q=80", searchQuery: "carrot" },
    { id: "extract", name: "Herbal Extract", img: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=300&q=80", searchQuery: "herbal extract" },
    { id: "fruit-extract", name: "Fruit Extract", img: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=300&q=80", searchQuery: "fruit extract" },
    { id: "fertilizer", name: "Bio Fertilizer", img: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=300&q=80", searchQuery: "fertilizer" },
    { id: "bulking", name: "Bulking Agents", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&q=80", searchQuery: "sodium bicarbonate" }
  ]
};

export interface B2BSearchProduct {
  id: string;
  title: string;
  category: string;
  subCategory: string;
  priceRange: string;
  unit: string;
  moq: string;
  description: string;
  images: string[];
  tags: string[];
  supplier: {
    name: string;
    location: string;
    isAudited: boolean;
    rating: number;
    responseTime: string;
    verifiedYears: number;
  };
}

export const PRODUCT_LIST_DATA: B2BSearchProduct[] = [
  {
    id: "carrot-pickled-takuan",
    title: "Brc Halal Certified High Quality Japanese Style Sushi Pickled Radish (takuan)",
    category: "Agriculture & Food",
    subCategory: "Carrot & Radish",
    priceRange: "US$5.00-20.00",
    unit: "Box",
    moq: "100 Boxes (MOQ)",
    description: "Introduction: Pickled radish, also known as takuan or takuan-zuke, is a kind of Japanese food serves with sushi dishes. Takuan is often served alongside other types of tsukemono in traditional cuisine. Vacuum packed, crisp texture, yellow color.",
    images: [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5c317?auto=format&fit=crop&w=500&q=80"
    ],
    tags: ["Fresh Carrot", "Red Carrot", "Pickled Radish", "Sushi Grade", "Halal BRC"],
    supplier: {
      name: "Laiwu Manhing Vegetables Fruits Corporation",
      location: "Shandong, China",
      isAudited: true,
      rating: 5.0,
      responseTime: "Fast Dispatch",
      verifiedYears: 18
    }
  },
  {
    id: "carrot-fresh-export",
    title: "High Quality Fresh S/M/L/2L Carrot from China Super Cleaned",
    category: "Agriculture & Food",
    subCategory: "Carrot & Radish",
    priceRange: "US$300.00-500.00",
    unit: "Ton",
    moq: "10 Tons (MOQ)",
    description: "Fresh Carrot Origin: Shandong, Fujian, Hebei, Inner Mongolia. Available: all year round. Payment: T/T (30% advance, 70% against B/L copy) or L/C. Grade: Grade A washed and polished, gapless, no pest damage.",
    images: [
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5c317?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=500&q=80"
    ],
    tags: ["Fresh Carrot", "Red Carrot", "Grade A Cleaned", "Cold Chain Logistics"],
    supplier: {
      name: "Qingdao Happy Farmer Fruit & Vegetable Co., Ltd.",
      location: "Shandong, China",
      isAudited: true,
      rating: 5.0,
      responseTime: "Excellent Service",
      verifiedYears: 12
    }
  },
  {
    id: "garlic-pure-white",
    title: "Fresh Pure White Garlic 4.5cm 5.0cm 5.5cm 6.0cm Regular Mesh Bag Packing",
    category: "Agriculture & Food",
    subCategory: "Garlic",
    priceRange: "US$650.00-850.00",
    unit: "Ton",
    moq: "20 Tons (MOQ)",
    description: "Jinxiang Normal White Garlic & Pure White Garlic. Tight skin, plump cloves, high pungency. Available in 10kg, 20kg mesh bags or 10kg cartons. Global GAP certified.",
    images: [
      "https://images.unsplash.com/photo-1588615419957-4623a3399066?auto=format&fit=crop&w=500&q=80"
    ],
    tags: ["White Garlic", "Jinxiang Garlic", "Mesh Bag 10kg", "Global GAP"],
    supplier: {
      name: "Jinxiang Hengtai Agro Export Co., Ltd.",
      location: "Shandong, China",
      isAudited: true,
      rating: 4.9,
      responseTime: "≤ 1h Fast Reply",
      verifiedYears: 15
    }
  },
  {
    id: "onion-fresh-red",
    title: "New Crop High Pungency Fresh Red Onion 5-7cm 7-9cm Yellow Onion Bulk",
    category: "Agriculture & Food",
    subCategory: "Onion",
    priceRange: "US$280.00-420.00",
    unit: "Ton",
    moq: "1 Container (28 Tons)",
    description: "Export standard fresh red onion with dry outer skin. Origin: Gansu / Shandong. Cold storage temperature 0°C to +2°C. Long shelf life up to 6 months.",
    images: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80"
    ],
    tags: ["Red Onion", "Yellow Onion", "Mesh Bag", "Direct Farm"],
    supplier: {
      name: "Gansu Sunfresh Agricultural Co., Ltd.",
      location: "Gansu, China",
      isAudited: true,
      rating: 4.8,
      responseTime: "≤ 2h Fast Reply",
      verifiedYears: 9
    }
  },
  {
    id: "ginger-air-dried",
    title: "Fat Clean Air-Dried Fresh Ginger Washed 100g 150g 200g 250g+",
    category: "Agriculture & Food",
    subCategory: "Ginger",
    priceRange: "US$900.00-1,400.00",
    unit: "Ton",
    moq: "10 Tons (MOQ)",
    description: "Anqiu Origin high quality plump washed fresh ginger and air-dried ginger. Rich aroma, yellow flesh, zero pesticide residue.",
    images: [
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80"
    ],
    tags: ["Fresh Ginger", "Air-Dried Ginger", "Anqiu Ginger", "Phytosanitary Cert"],
    supplier: {
      name: "Weifang Green River Import & Export Ltd.",
      location: "Shandong, China",
      isAudited: true,
      rating: 5.0,
      responseTime: "Fast Dispatch",
      verifiedYears: 14
    }
  },
  {
    id: "chemical-sodium-bicarbonate",
    title: "Food Grade Sodium Bicarbonate Powder 99% Min (Baking Soda)",
    category: "Agriculture & Food",
    subCategory: "Additives & Extracts",
    priceRange: "US$180.00-240.00",
    unit: "Ton",
    moq: "25 Tons (MOQ)",
    description: "White crystalline powder food grade sodium bicarbonate CAS 144-55-8. Used widely in food processing, animal nutrition, and water treatment.",
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500&q=80"
    ],
    tags: ["Sodium Bicarbonate", "Food Additive", "CAS 144-55-8", "25kg Bags"],
    supplier: {
      name: "Hebei Top Chemical Engineering Co., Ltd.",
      location: "Hebei, China",
      isAudited: true,
      rating: 4.9,
      responseTime: "Instant Quote",
      verifiedYears: 11
    }
  }
];
