export interface GalleryMediaItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  category: 'furnace' | 'artisan' | 'lehr' | 'packaging' | 'video';
  categoryLabel: string;
  thumbnail: string;
  duration?: string;
  description: string;
  specs: string;
}

export interface ClientItem {
  id: string;
  name: string;
  category: 'Hospitality & Hotels' | 'Retail Crockery Brands' | 'Corporate & Gifting' | 'Global Export Partners';
  suppliedProducts: string;
  volume: string;
  badge: string;
  description: string;
}

export const FACTORY_MEDIA: GalleryMediaItem[] = [
  {
    id: "vid-furnace-tour",
    type: "video",
    title: "1500°C Continuous Regenerative Glass Furnace",
    category: "video",
    categoryLabel: "Factory Video Tour",
    thumbnail: "/images/factory_furnace_tank_1792664486512.jpg",
    duration: "1:45 Min",
    description: "Experience the heart of Firozabad glassmaking. Molten quartz silica and soda ash liquify under high-pressure gas jets before feeder distribution.",
    specs: "Operating Temp: 1520°C · Daily Throughput: 28 Metric Tonnes"
  },
  {
    id: "img-lehr-conveyor",
    type: "image",
    title: "40-Metre Continuous Annealing Lehr Conveyor",
    category: "lehr",
    categoryLabel: "Annealing & Lehr",
    thumbnail: "/images/factory_lehr_conveyor_1792664487765.jpg",
    description: "Hundreds of freshly molded crystal tumblers traverse a gradual temperature de-escalation tunnel to eliminate internal molecular stresses.",
    specs: "Cooling Curve: 620°C down to 40°C · Zero Residual Stress"
  },
  {
    id: "img-gold-rimming",
    type: "image",
    title: "Master Artisan 24k Gold Luster Application",
    category: "artisan",
    categoryLabel: "Artisan Finishing",
    thumbnail: "/images/factory_gold_rimming_print_1792664488214.jpg",
    description: "Finishing technician applying hand-drawn gold liquid luster to the fire-polished rim of a diamond-cut whiskey tumbler before secondary kiln firing.",
    specs: "24k German Liquid Gold · Dishwasher-Resistant Firing"
  },
  {
    id: "img-artisan-blowpipe",
    type: "image",
    title: "Traditional Firozabad Hand-Blowing Artistry",
    category: "artisan",
    categoryLabel: "Artisan Finishing",
    thumbnail: "/images/artisan_glass_furnace_1792663601781.jpg",
    description: "Master craftsman shaping an amber glass votive using traditional blowpipe and wooden blocks, preserving 50 years of generational technique.",
    specs: "Handcrafted Custom Profiles · Generational Artisans"
  },
  {
    id: "img-export-logistics",
    type: "image",
    title: "Seaworthy Export Corrugation & Palletizing",
    category: "packaging",
    categoryLabel: "Packaging & Logistics",
    thumbnail: "/images/factory_packing_warehouse_1792664487892.jpg",
    description: "Drop-tested 5-ply cartons strapped and shrink-wrapped onto standard Euro-pallets inside our Firozabad export bay for container stuffing.",
    specs: "ISTA Drop-Tested Cartons · Container Staging Bay"
  },
  {
    id: "vid-shaping-line",
    type: "video",
    title: "Semi-Automated Moulding & Fire-Polishing Line",
    category: "video",
    categoryLabel: "Factory Video Tour",
    thumbnail: "/images/factory_lehr_conveyor_1792664487765.jpg",
    description: "High-speed rotary press machines delivering wall thickness consistency with high-temperature oxy-fuel flame rim polishing.",
    specs: "Press Speed: 32 pcs/min · Laser Dimensional Audit"
  }
];

export const CLIENT_PARTNERS: ClientItem[] = [
  {
    id: "client-taj",
    name: "Taj Gateway & Heritage Hotels",
    category: "Hospitality & Hotels",
    suppliedProducts: "Whiskey Tumblers & Water Goblets",
    volume: "120,000+ Units / Year",
    badge: "5-Star Luxury Dining",
    description: "Supplying crystal-clear barware and restaurant dining tumblers across 18 hotel properties in North & West India."
  },
  {
    id: "client-radisson",
    name: "Radisson Blu Hospitality Group",
    category: "Hospitality & Hotels",
    suppliedProducts: "Highball Glasses & Fluted Dessert Bowls",
    volume: "85,000+ Units",
    badge: "Banqueting & Lounges",
    description: "Standardized table glassware and buffet serving bowls engineered for durability in high-turnover hotel banqueting."
  },
  {
    id: "client-itc",
    name: "Fortune Select by ITC Hotels",
    category: "Hospitality & Hotels",
    suppliedProducts: "Heavy-Base Rock Glasses & Water Carafes",
    volume: "60,000+ Units",
    badge: "Corporate Hospitality",
    description: "Custom engraved rock glasses for executive bar lounges with heat-strengthened chip-resistant rolled rims."
  },
  {
    id: "client-homecentre",
    name: "Home Centre Retail India",
    category: "Retail Crockery Brands",
    suppliedProducts: "6-Piece Color Box Tumbler Sets",
    volume: "350,000+ Units / Year",
    badge: "Pan-India Retail",
    description: "Direct OEM manufacturing of retail packaged drinking tumbler sets distributed across 90+ retail hypermarkets."
  },
  {
    id: "client-westside",
    name: "Westside Home (Tata Trent)",
    category: "Retail Crockery Brands",
    suppliedProducts: "Artisan Ribbed Candle Votives & Jars",
    volume: "150,000+ Units",
    badge: "Lifestyle & Home Décor",
    description: "Exclusive production partner for seasonal scented candle glass jars and textured dining table candle holders."
  },
  {
    id: "client-tata",
    name: "Tata Consultancy Services (TCS)",
    category: "Corporate & Gifting",
    suppliedProducts: "Presidential 4-Tumbler Gold Rim Gift Box",
    volume: "24,000 Gift Sets",
    badge: "Annual Festive Gifting",
    description: "Bespoke corporate gift hampers with laser-engraved corporate monograms and custom velvet-lined rigid presentation boxes."
  },
  {
    id: "client-diageo",
    name: "Alcobev Brands & Barware Distributors",
    category: "Corporate & Gifting",
    suppliedProducts: "Branded Promo Whiskey Tumblers & Beer Mugs",
    volume: "200,000+ Units",
    badge: "Decal Brand Firing",
    description: "High-precision dishwasher-safe multi-color ceramic decal logo firing for promotional consumer merchandise."
  },
  {
    id: "client-gulf",
    name: "Gulf Hospitality Supplies LLC (Dubai)",
    category: "Global Export Partners",
    suppliedProducts: "40ft High-Cube Containers Glassware",
    volume: "14 Containers Exported",
    badge: "Middle East Export",
    description: "Supplying bulk drinking glasses, dinnerware plates, and heavy glass ashtrays to UAE and Saudi Arabian commercial caterers."
  }
];
