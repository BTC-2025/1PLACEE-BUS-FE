export interface RegionSupplier {
  id: string;
  name: string;
  count?: string;
  href: string;
  type: "city" | "more";
  iconName: "delhi" | "mumbai" | "gurgaon" | "noida" | "bangalore" | "ahmedabad" | "kolkata" | "chennai" | "more";
}

export const REGIONS_DATA: RegionSupplier[] = [
  {
    id: "delhi",
    name: "New Delhi",
    count: "45,000+ Suppliers",
    href: "/products?region=delhi",
    type: "city",
    iconName: "delhi",
  },
  {
    id: "mumbai",
    name: "Mumbai",
    count: "52,000+ Suppliers",
    href: "/products?region=mumbai",
    type: "city",
    iconName: "mumbai",
  },
  {
    id: "gurgaon",
    name: "Gurgaon",
    count: "28,000+ Suppliers",
    href: "/products?region=gurgaon",
    type: "city",
    iconName: "gurgaon",
  },
  {
    id: "noida",
    name: "Noida",
    count: "24,000+ Suppliers",
    href: "/products?region=noida",
    type: "city",
    iconName: "noida",
  },
  {
    id: "bangalore",
    name: "Bangalore",
    count: "38,000+ Suppliers",
    href: "/products?region=bangalore",
    type: "city",
    iconName: "bangalore",
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    count: "32,000+ Suppliers",
    href: "/products?region=ahmedabad",
    type: "city",
    iconName: "ahmedabad",
  },
  {
    id: "kolkata",
    name: "Kolkata",
    count: "26,000+ Suppliers",
    href: "/products?region=kolkata",
    type: "city",
    iconName: "kolkata",
  },
  {
    id: "chennai",
    name: "Chennai",
    count: "35,000+ Suppliers",
    href: "/products?region=chennai",
    type: "city",
    iconName: "chennai",
  },
  {
    id: "more-cities",
    name: "More Cities",
    count: "100+ Hubs",
    href: "/regions",
    type: "more",
    iconName: "more",
  },
];

