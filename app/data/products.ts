export type Product = {
  id: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  category: string;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
  sizes: string[];
  colors: string[];
  tag: "New Arrival" | "Bestseller" | "Limited" | "Sponsored";
  isSponsored?: boolean;
  sponsors?: Sponsor[];
  consumerPrice?: number;
  impressions?: number;
  qrCode?: string;
  description?: string;
};

export type Sponsor = {
  id: string;
  name: string;
  logo: string;
  placement: "front" | "back" | "sleeve" | "chest";
  tier: "title" | "co-sponsor" | "category-exclusive";
};

export const products: Product[] = [
  {
    id: "sponsored-tee-campus",
    name: "Campus Connect Tee",
    price: 0,
    compareAtPrice: 499,
    category: "sponsored",
    image: "/images/products/sample.png",
    badge: "Free with Sponsor",
    rating: 4.8,
    reviews: 342,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Heather Grey"],
    tag: "Sponsored",
    isSponsored: true,
    consumerPrice: 0,
    impressions: 25000,
    qrCode: "https://shaheenstore.in/track/tee-campus-001",
    description: "Our flagship campus drop. 180 GSM combed cotton, screen-printed with eco-friendly inks. Designed for daily wear — soft, breathable, and durable. Three brand partners share the canvas: FoodEase (front), LearnLoop (back), PaySmart (sleeve). Distributed at 12+ college orientations this season.",
    sponsors: [
      {
        id: "startup-food-app",
        name: "FoodEase",
        logo: "/images/sponsors/foodease-logo.png",
        placement: "front",
        tier: "title",
      },
      {
        id: "edtech-platform",
        name: "LearnLoop",
        logo: "/images/sponsors/learnloop-logo.png",
        placement: "back",
        tier: "co-sponsor",
      },
      {
        id: "fintech-app",
        name: "PaySmart",
        logo: "/images/sponsors/paysmart-logo.png",
        placement: "sleeve",
        tier: "category-exclusive",
      },
    ],
  },
  {
    id: "sponsored-tee-hackathon",
    name: "Hackathon 2025 Tee",
    price: 99,
    compareAtPrice: 599,
    category: "sponsored",
    image: "/images/products/sample.png",
    badge: "Limited Sponsor Run",
    rating: 4.7,
    reviews: 189,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Charcoal"],
    tag: "Sponsored",
    isSponsored: true,
    consumerPrice: 99,
    impressions: 18000,
    qrCode: "https://shaheenstore.in/track/tee-hack-002",
    description: "Built for builders. Darker palette, minimal aesthetics — clean front logo (CodeSync), back placement for CloudNine. 180 GSM cotton-poly blend for late-night coding comfort. Token price ₹99 covers partial logistics. Distributed at 8 major hackathons across IITs, NITs, and private tech fests.",
    sponsors: [
      {
        id: "dev-tools",
        name: "CodeSync",
        logo: "/images/sponsors/codesync-logo.png",
        placement: "front",
        tier: "title",
      },
      {
        id: "cloud-platform",
        name: "CloudNine",
        logo: "/images/sponsors/cloudnine-logo.png",
        placement: "back",
        tier: "co-sponsor",
      },
    ],
  },
  {
    id: "sponsored-tee-marathon",
    name: "City Marathon Tee",
    price: 0,
    compareAtPrice: 449,
    category: "sponsored",
    image: "/images/products/sample.png",
    badge: "Event Sponsored",
    rating: 4.9,
    reviews: 567,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Neon Green", "Orange"],
    tag: "Sponsored",
    isSponsored: true,
    consumerPrice: 0,
    impressions: 42000,
    qrCode: "https://shaheenstore.in/track/tee-marathon-003",
    description: "High-visibility performance tee for race day and training. Moisture-wicking 160 GSM polyester blend, DTF printed for durability through sweat cycles. HydroBoost owns front chest, FitTrack on back, MediCare Plus on sleeve. Distributed at 5 city marathons (Delhi, Mumbai, Bangalore, Hyderabad, Pune) — 5,000 runners total.",
    sponsors: [
      {
        id: "sports-drink",
        name: "HydroBoost",
        logo: "/images/sponsors/hydroboost-logo.png",
        placement: "front",
        tier: "title",
      },
      {
        id: "fitness-app",
        name: "FitTrack",
        logo: "/images/sponsors/fittrack-logo.png",
        placement: "back",
        tier: "co-sponsor",
      },
      {
        id: "healthcare",
        name: "MediCare Plus",
        logo: "/images/sponsors/d2c-brand-logo.png",
        placement: "sleeve",
        tier: "category-exclusive",
      },
    ],
  },
  {
    id: "sponsored-tee-college-fest",
    name: "College Fest 2025 Tee",
    price: 0,
    compareAtPrice: 399,
    category: "sponsored",
    image: "/images/products/sample.png",
    badge: "Free - Campus Drop",
    rating: 4.6,
    reviews: 423,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Maroon", "Gold", "White"],
    tag: "Sponsored",
    isSponsored: true,
    consumerPrice: 0,
    impressions: 35000,
    qrCode: "https://shaheenstore.in/track/tee-fest-004",
    description: "Fest season essential. College colors (maroon/gold) with ChillSip front, BeatFlow back. 180 GSM cotton, screen printed. Distributed at 15+ college cultural fests — Mumbai, Delhi, Bangalore clusters. Students wear these year-round as fest memorabilia. QR code links to ChillSip flavor quiz + BeatFlow playlist.",
    sponsors: [
      {
        id: "beverage-brand",
        name: "ChillSip",
        logo: "/images/sponsors/chillsip-logo.png",
        placement: "front",
        tier: "title",
      },
      {
        id: "music-app",
        name: "BeatFlow",
        logo: "/images/sponsors/beatflow-logo.png",
        placement: "back",
        tier: "co-sponsor",
      },
    ],
  },
  {
    id: "sponsored-tee-tech-meetup",
    name: "Dev Community Tee",
    price: 149,
    compareAtPrice: 549,
    category: "sponsored",
    image: "/images/products/sample.png",
    badge: "Community Price",
    rating: 4.8,
    reviews: 234,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Dark Grey", "Navy"],
    tag: "Sponsored",
    isSponsored: true,
    consumerPrice: 149,
    impressions: 15000,
    qrCode: "https://shaheenstore.in/track/tee-dev-005",
    description: "For the dev community, by the dev community. Triple sponsor stack: Deploy.io (front), HireHub (back), SkillStack (sleeve). 180 GSM ring-spun cotton, soft hand feel. Community price ₹149 sustains smaller meetup batches (200–500 tees). Distributed at ReactJS, Python, and DevOps meetups across 6 cities.",
    sponsors: [
      {
        id: "saas-tool",
        name: "Deploy.io",
        logo: "/images/sponsors/deploy-logo.png",
        placement: "front",
        tier: "title",
      },
      {
        id: "job-platform",
        name: "HireHub",
        logo: "/images/sponsors/hirehub-logo.png",
        placement: "back",
        tier: "co-sponsor",
      },
      {
        id: "learning-platform",
        name: "SkillStack",
        logo: "/images/sponsors/skillstack-logo.png",
        placement: "sleeve",
        tier: "category-exclusive",
      },
    ],
  },
  {
    id: "sponsored-tee-gaming",
    name: "GameNight Tee",
    price: 0,
    compareAtPrice: 499,
    category: "sponsored",
    image: "/images/products/sample.png",
    badge: "Sponsored Drop",
    rating: 4.7,
    reviews: 178,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Purple", "Dark Blue"],
    tag: "Sponsored",
    isSponsored: true,
    consumerPrice: 0,
    impressions: 22000,
    qrCode: "https://shaheenstore.in/track/tee-gaming-006",
    description: "Late-night grind aesthetic. Dark palette with neon accents. PixelPulse (gaming gear) front, Volt Energy (performance drink) back. 180 GSM cotton, discharge print for zero hand feel. Distributed at college gaming tournaments, LAN parties, and espresso bars near campuses. QR unlocks Volt sample pack + PixelPulse discount.",
    sponsors: [
      {
        id: "gaming-brand",
        name: "PixelPulse",
        logo: "/images/sponsors/pixelpulse-logo.png",
        placement: "front",
        tier: "title",
      },
      {
        id: "energy-drink",
        name: "Volt Energy",
        logo: "/images/sponsors/volt-logo.png",
        placement: "back",
        tier: "co-sponsor",
      },
    ],
  },
];
