export interface ManufacturingMachineryCard {
  id: string;
  name: string;
  image: string;
  href: string;
}

export const MANUFACTURING_MACHINERY_CARDS: ManufacturingMachineryCard[] = [
  // Row 1
  {
    id: "excavators",
    name: "Excavators",
    image: "/categories/machinery/excavator.png",
    href: "/products?cat=excavators"
  },
  {
    id: "farm-tractor",
    name: "Farm Tractor",
    image: "/categories/machinery/farm-tractor.png",
    href: "/products?cat=farm-tractor"
  },
  {
    id: "cutting-machine",
    name: "Cutting Machine",
    image: "/categories/machinery/cutting-machine.png",
    href: "/products?cat=cutting-machine"
  },
  {
    id: "egg-incubator",
    name: "Egg Incubator",
    image: "/categories/machinery/egg-incubator.png",
    href: "/products?cat=egg-incubator"
  },

  // Row 2
  {
    id: "cnc-machine",
    name: "Cnc Machine",
    image: "/categories/machinery/cnc-machine.png",
    href: "/products?cat=cnc-machine"
  },
  {
    id: "laser-machine",
    name: "Laser Machine",
    image: "/categories/machinery/laser-machine.png",
    href: "/products?cat=laser-machine"
  },
  {
    id: "china-machinery",
    name: "China Machinery",
    image: "/categories/machinery/china-machinery.png",
    href: "/products?cat=china-machinery"
  },
  {
    id: "machine-part",
    name: "Machine Part",
    image: "/categories/machinery/machine-part.png",
    href: "/products?cat=machine-part"
  }
];
