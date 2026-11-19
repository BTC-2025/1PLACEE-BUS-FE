export interface SubCategoryItem {
  id: string;
  name: string;
  href: string;
}

export interface SectionCategoryCard {
  id: string;
  title: string;
  image: string;
  href: string;
  subcategories: SubCategoryItem[];
}

export interface PillarQuickLink {
  id: string;
  label: string;
  href: string;
}

// =========================================================================
// 1. APPAREL & FASHION ACCESSORIES SUPPLIERS (Image 2)
// =========================================================================
export const APPAREL_PILLAR_LINKS: PillarQuickLink[] = [
  { id: "sarees-lehenga", label: "Sarees & Lehenga", href: "/products?cat=sarees-lehenga" },
  { id: "badges-emblems", label: "Badges, Emblems & Lanyards", href: "/products?cat=badges-lanyards" },
  { id: "designer-bags", label: "Designer & Fashion Bags", href: "/products?cat=fashion-bags" },
  { id: "winter-clothing", label: "Winter Clothing & Accessories", href: "/products?cat=winter-clothing" },
];

export const APPAREL_CATEGORY_CARDS: SectionCategoryCard[] = [
  {
    id: "mens-clothing",
    title: "Men's Shirts, Jeans & Clothing",
    image: "/categories/apparel-fashion/mens-clothing.png",
    href: "/products?cat=mens-clothing",
    subcategories: [
      { id: "mens-lower", name: "Men's Lower", href: "/products?cat=mens-lower" },
      { id: "mens-kurta", name: "Mens Kurta", href: "/products?cat=mens-kurta" },
      { id: "mens-tshirt", name: "Men's T-Shirt", href: "/products?cat=mens-tshirt" },
      { id: "mens-trouser", name: "Men's Trouser", href: "/products?cat=mens-trouser" },
      { id: "mens-jeans", name: "Men's Jeans", href: "/products?cat=mens-jeans" },
    ],
  },
  {
    id: "ladies-dresses",
    title: "Ladies Dresses & Apparel",
    image: "/categories/apparel-fashion/ladies-dresses.png",
    href: "/products?cat=ladies-dresses",
    subcategories: [
      { id: "ladies-tops", name: "Ladies Tops", href: "/products?cat=ladies-tops" },
      { id: "kaftans", name: "Kaftans", href: "/products?cat=kaftans" },
      { id: "ladies-skirts", name: "Ladies Skirts", href: "/products?cat=ladies-skirts" },
      { id: "cotton-kurti", name: "Cotton Kurti", href: "/products?cat=cotton-kurti" },
      { id: "ladies-jeans", name: "Ladies Jeans", href: "/products?cat=ladies-jeans" },
    ],
  },
  {
    id: "unisex-clothing",
    title: "Unisex Clothing",
    image: "/categories/apparel-fashion/unisex-clothing.png",
    href: "/products?cat=unisex-clothing",
    subcategories: [
      { id: "trousers", name: "Trousers", href: "/products?cat=trousers" },
      { id: "t-shirts", name: "T Shirts", href: "/products?cat=t-shirts" },
      { id: "sleepwear", name: "Sleepwear", href: "/products?cat=sleepwear" },
      { id: "vests", name: "Vests", href: "/products?cat=vests" },
      { id: "shirts", name: "Shirts", href: "/products?cat=shirts" },
    ],
  },
  {
    id: "apparel-fabrics",
    title: "Apparel Fabrics & Dress Materials",
    image: "/categories/apparel-fashion/apparel-fabrics.png",
    href: "/products?cat=apparel-fabrics",
    subcategories: [
      { id: "knitted-fabrics", name: "Knitted Fabrics", href: "/products?cat=knitted-fabrics" },
      { id: "dress-materials", name: "Dress Materials", href: "/products?cat=dress-materials" },
      { id: "linen-fabric", name: "Linen Fabric", href: "/products?cat=linen-fabric" },
      { id: "synthetic-fabrics", name: "Synthetic Fabrics", href: "/products?cat=synthetic-fabrics" },
      { id: "shirting-fabric", name: "Shirting Fabric", href: "/products?cat=shirting-fabric" },
    ],
  },
  {
    id: "bags-pouches",
    title: "Bags, Pouches, Card Holder & Cases",
    image: "/categories/apparel-fashion/bags-pouches.png",
    href: "/products?cat=bags-pouches",
    subcategories: [
      { id: "bags", name: "Bags", href: "/products?cat=bags" },
      { id: "shopping-bags", name: "Shopping Bags", href: "/products?cat=shopping-bags" },
      { id: "pouches", name: "Pouches", href: "/products?cat=pouches" },
      { id: "school-bags", name: "School Bags", href: "/products?cat=school-bags" },
      { id: "handle-bag", name: "Handle Bag", href: "/products?cat=handle-bag" },
    ],
  },
  {
    id: "scarves-stoles",
    title: "Scarves, Stoles, Shawls & Bandanas",
    image: "/categories/apparel-fashion/scarves-stoles.png",
    href: "/products?cat=scarves-stoles",
    subcategories: [
      { id: "scarves", name: "Scarves", href: "/products?cat=scarves" },
      { id: "bandana", name: "Bandana", href: "/products?cat=bandana" },
      { id: "pashmina-stoles", name: "Pashmina Stoles", href: "/products?cat=pashmina-stoles" },
      { id: "stoles", name: "Stoles", href: "/products?cat=stoles" },
      { id: "wool-scarf", name: "Wool Scarf", href: "/products?cat=wool-scarf" },
    ],
  },
];

// =========================================================================
// 2. PREMIUM BRANDS (Image 3)
// =========================================================================
export interface BrandLogoItem {
  id: string;
  name: string;
  logo: string;
  href: string;
}

export const PREMIUM_BRANDS_LIST: BrandLogoItem[] = [
  { id: "bodycare", name: "Bodycare Creations", logo: "/categories/premium-brands/brand-bodycare.png", href: "/products?brand=bodycare" },
  { id: "miraj", name: "Miraj Pipes & Fittings", logo: "/categories/premium-brands/brand-miraj.png", href: "/products?brand=miraj" },
  { id: "tatasteel", name: "TATA Steel", logo: "/categories/premium-brands/brand-tatasteel.png", href: "/products?brand=tatasteel" },
  { id: "lacoppera", name: "La Coppera Tableware", logo: "/categories/premium-brands/brand-lacoppera.png", href: "/products?brand=lacoppera" },
  { id: "link", name: "Link Security Ensured", logo: "/categories/premium-brands/brand-link.png", href: "/products?brand=link" },
  { id: "patanjali", name: "Patanjali", logo: "/categories/premium-brands/brand-patanjali.png", href: "/products?brand=patanjali" },

  { id: "jwi", name: "JWI", logo: "/categories/premium-brands/brand-jwi.png", href: "/products?brand=jwi" },
  { id: "salzer", name: "Salzer", logo: "/categories/premium-brands/brand-salzer.png", href: "/products?brand=salzer" },
  { id: "victory", name: "Victory", logo: "/categories/premium-brands/brand-victory.png", href: "/products?brand=victory" },
  { id: "naulakha", name: "Naulakha Soap", logo: "/categories/premium-brands/brand-naulakha.png", href: "/products?brand=naulakha" },
  { id: "sega", name: "SEGA", logo: "/categories/premium-brands/brand-sega.png", href: "/products?brand=sega" },
];

// =========================================================================
// 3. CONSUMER ELECTRONICS & HOUSEHOLD APPLIANCES (Image 4)
// =========================================================================
export const CONSUMER_ELECTRONICS_PILLAR_LINKS: PillarQuickLink[] = [
  { id: "decorative-lights", label: "Decorative Lights, Lamps & Lamp Shades", href: "/products?cat=decorative-lights" },
  { id: "adaptors-plugs", label: "Adaptors, Plugs & Sockets", href: "/products?cat=adaptors-sockets" },
  { id: "indoor-lights", label: "Indoor Lights, Lighting Fittings & Accessories", href: "/products?cat=indoor-lights" },
  { id: "street-lights", label: "Street, Flood & Commercial Lights", href: "/products?cat=commercial-lights" },
];

export const CONSUMER_ELECTRONICS_CATEGORY_CARDS: SectionCategoryCard[] = [
  {
    id: "kitchen-cooking",
    title: "Kitchen & Cooking Appliances",
    image: "/categories/consumer-electronics/kitchen-appliances.png",
    href: "/products?cat=kitchen-appliances",
    subcategories: [
      { id: "fruit-juicer", name: "Fruit Juicer", href: "/products?cat=fruit-juicer" },
      { id: "mixer-grinder", name: "Electric Mixer Grinders", href: "/products?cat=mixer-grinders" },
      { id: "hand-blender", name: "Hand Blender", href: "/products?cat=hand-blender" },
      { id: "microwave-oven", name: "Microwave Oven", href: "/products?cat=microwave-oven" },
      { id: "domestic-juicer", name: "Domestic Juicer Mixer Grinder", href: "/products?cat=domestic-juicer" },
    ],
  },
  {
    id: "electric-home",
    title: "Electric & Home Appliances",
    image: "/categories/consumer-electronics/electric-appliances.png",
    href: "/products?cat=electric-appliances",
    subcategories: [
      { id: "air-purifiers", name: "Air Purifiers", href: "/products?cat=air-purifiers" },
      { id: "electric-irons", name: "Electric Irons", href: "/products?cat=electric-irons" },
      { id: "dishwasher", name: "Dishwasher", href: "/products?cat=dishwasher" },
      { id: "washing-machine", name: "Laundry Washing Machine", href: "/products?cat=washing-machine" },
      { id: "electronic-devices", name: "Electronic Devices", href: "/products?cat=electronic-devices" },
    ],
  },
  {
    id: "fans-coolers",
    title: "Fans, Air Conditioners & Coolers",
    image: "/categories/consumer-electronics/fans-coolers.png",
    href: "/products?cat=fans-coolers",
    subcategories: [
      { id: "air-coolers", name: "Air Coolers", href: "/products?cat=air-coolers" },
      { id: "pedestal-fan", name: "Pedestal Fan", href: "/products?cat=pedestal-fan" },
      { id: "ceiling-fans", name: "Ceiling Fans", href: "/products?cat=ceiling-fans" },
      { id: "air-fan", name: "Air Fan", href: "/products?cat=air-fan" },
      { id: "air-conditioners", name: "Air Conditioners", href: "/products?cat=air-conditioners" },
    ],
  },
  {
    id: "freezers-refrigerators",
    title: "Freezers, Refrigerators & Chillers",
    image: "/categories/consumer-electronics/freezers-refrigerators.png",
    href: "/products?cat=refrigerators",
    subcategories: [
      { id: "water-cooler", name: "Water Cooler", href: "/products?cat=water-cooler" },
      { id: "deep-freezer", name: "Deep Freezer", href: "/products?cat=deep-freezer" },
      { id: "ice-machine", name: "Ice Making Machine", href: "/products?cat=ice-machine" },
      { id: "two-door-fridge", name: "Two Door Refrigerator", href: "/products?cat=refrigerators" },
      { id: "commercial-fridge", name: "Commercial Refrigerator", href: "/products?cat=commercial-fridge" },
    ],
  },
  {
    id: "cleaning-machines",
    title: "Cleaning Machines & Equipment",
    image: "/categories/consumer-electronics/cleaning-machines.png",
    href: "/products?cat=cleaning-machines",
    subcategories: [
      { id: "laminar-air-flow", name: "Laminar Air Flow", href: "/products?cat=laminar-air-flow" },
      { id: "cleaning-machine", name: "Cleaning Machine", href: "/products?cat=cleaning-machine" },
      { id: "floor-sweeper", name: "Floor Sweeper", href: "/products?cat=floor-sweeper" },
      { id: "ultrasonic-machine", name: "Ultrasonic Machine", href: "/products?cat=ultrasonic-machine" },
      { id: "high-pressure-washer", name: "High Pressure Washer", href: "/products?cat=pressure-washer" },
    ],
  },
  {
    id: "audio-video-players",
    title: "CD, DVD, MP3 & Audio Video Players",
    image: "/categories/consumer-electronics/audio-video-players.png",
    href: "/products?cat=audio-video-players",
    subcategories: [
      { id: "radio", name: "Radio", href: "/products?cat=radio" },
      { id: "dvd-player", name: "DVD Player", href: "/products?cat=dvd-player" },
      { id: "media-player", name: "Media Player", href: "/products?cat=media-player" },
      { id: "cctv-recorders", name: "CCTV Digital Video Recorders", href: "/products?cat=cctv-recorders" },
    ],
  },
];

// =========================================================================
// 4. FOOD & BEVERAGE PRODUCTS SUPPLIERS (Image 5)
// =========================================================================
export const FOOD_BEVERAGE_PILLAR_LINKS: PillarQuickLink[] = [
  { id: "confectionery-bakery", label: "Confectionery & Bakery Products", href: "/products?cat=confectionery-bakery" },
  { id: "fresh-fruits", label: "Fresh, Dried & Preserved Fruits", href: "/products?cat=preserved-fruits" },
  { id: "edible-oil", label: "Edible Oil & Allied Products", href: "/products?cat=edible-oil" },
  { id: "sweets-desserts", label: "Sweets & Desserts", href: "/products?cat=sweets-desserts" },
];

export const FOOD_BEVERAGE_CATEGORY_CARDS: SectionCategoryCard[] = [
  {
    id: "preserved-vegetables",
    title: "Fresh, Dried & Preserved Vegetables",
    image: "/categories/food-beverage/fresh-vegetables.png",
    href: "/products?cat=preserved-vegetables",
    subcategories: [
      { id: "fresh-vegetables", name: "Fresh Vegetables", href: "/products?cat=fresh-vegetables" },
      { id: "garlic", name: "Garlic", href: "/products?cat=garlic" },
      { id: "potato", name: "Potato", href: "/products?cat=potato" },
      { id: "red-onion", name: "Red Onion", href: "/products?cat=red-onion" },
      { id: "green-peas", name: "Green Peas", href: "/products?cat=green-peas" },
    ],
  },
  {
    id: "juices-beverages",
    title: "Juices, Soft Drinks, Soups & Mineral Water",
    image: "/categories/food-beverage/juices-soft-drinks.png",
    href: "/products?cat=juices-beverages",
    subcategories: [
      { id: "coffee-premix", name: "Coffee Premix", href: "/products?cat=coffee-premix" },
      { id: "energy-drink", name: "Energy Drink", href: "/products?cat=energy-drink" },
      { id: "beverage-mixes", name: "Beverage Mixes", href: "/products?cat=beverage-mixes" },
      { id: "fruit-juice", name: "Fruit Juice", href: "/products?cat=fruit-juice" },
      { id: "hot-beverages", name: "Hot Beverages", href: "/products?cat=hot-beverages" },
    ],
  },
  {
    id: "grains-cereals",
    title: "Food Grains & Cereals",
    image: "/categories/food-beverage/food-grains-cereals.png",
    href: "/products?cat=grains-cereals",
    subcategories: [
      { id: "flours", name: "Flours", href: "/products?cat=flours" },
      { id: "agro-products", name: "Agro Products", href: "/products?cat=agro-products" },
      { id: "basmati-rice", name: "Basmati Rice", href: "/products?cat=basmati-rice" },
      { id: "pulses", name: "Pulses", href: "/products?cat=pulses" },
      { id: "non-basmati-rice", name: "Non Basmati Rice", href: "/products?cat=non-basmati-rice" },
    ],
  },
  {
    id: "cooking-spices",
    title: "Cooking Spices & Masala",
    image: "/categories/food-beverage/cooking-spices.png",
    href: "/products?cat=cooking-spices",
    subcategories: [
      { id: "turmeric-powder", name: "Turmeric Powder", href: "/products?cat=turmeric-powder" },
      { id: "curry-leaves", name: "Curry Leaves", href: "/products?cat=curry-leaves" },
      { id: "green-cardamom", name: "Green Cardamom", href: "/products?cat=green-cardamom" },
      { id: "coriander-seeds", name: "Coriander Seeds", href: "/products?cat=coriander-seeds" },
      { id: "fenugreek-seed", name: "Fenugreek Seed", href: "/products?cat=fenugreek-seed" },
    ],
  },
  {
    id: "dairy-milk",
    title: "Dairy & Milk Products",
    image: "/categories/food-beverage/dairy-milk.png",
    href: "/products?cat=dairy-products",
    subcategories: [
      { id: "cow-ghee", name: "Cow Ghee", href: "/products?cat=cow-ghee" },
      { id: "milk-powder", name: "Milk Powder", href: "/products?cat=milk-powder" },
      { id: "paneer", name: "Paneer", href: "/products?cat=paneer" },
      { id: "milk", name: "Milk", href: "/products?cat=milk" },
      { id: "skimmed-milk", name: "Skimmed Milk Powder", href: "/products?cat=skimmed-milk" },
    ],
  },
  {
    id: "food-flavours",
    title: "Food Flavours & Aromatics",
    image: "/categories/food-beverage/food-flavours.png",
    href: "/products?cat=food-flavours",
    subcategories: [
      { id: "acetic-acid", name: "Acetic Acid", href: "/products?cat=acetic-acid" },
      { id: "cocoa-powder", name: "Cocoa Powder", href: "/products?cat=cocoa-powder" },
      { id: "food-preservative", name: "Food Preservative", href: "/products?cat=food-preservative" },
      { id: "mint-powder", name: "Mint Powder", href: "/products?cat=mint-powder" },
      { id: "lemon-powder", name: "Lemon Powder", href: "/products?cat=lemon-powder" },
    ],
  },
];

