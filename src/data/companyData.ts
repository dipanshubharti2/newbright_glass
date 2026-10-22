export interface ProductItem {
  id: string;
  name: string;
  category: string;
  capacity?: string;
  dimensions?: string;
  weight?: string;
  wallThickness?: string;
  material?: string;
  thermalShock?: string;
  moq: string;
  packaging: string;
  description: string;
  highlight: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  orderType: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const COMPANY_INFO = {
  name: "New Bright Glass Works (India) Private Limited",
  shortName: "New Bright Glass Works",
  tagline: "Crafted in Firozabad. Trusted for 50+ Years.",
  heroHeadline: "Premium Glassware, Made in Firozabad",
  heroSubtext:
    "Direct manufacturer of crystal-clear commercial tableware, bespoke drinking glasses, and luxury corporate gifting sets. Engineered with five decades of master craftsmanship and modern regenerative furnaces.",
  address: "Sector 2, Suhag Nagar, Near Suhag Nagar Post Office, Firozabad, Uttar Pradesh – 283203, India",
  phone: "+91 98970 12345", // Standard Indian mobile format
  phoneRaw: "919897012345",
  whatsappNumber: "919897012345",
  email: "sales@newbrightglass.com",
  secondaryEmail: "aayush@newbrightglass.com",
  contactPerson: "Aayush Gupta",
  contactTitle: "Chief Executive Officer (CEO)",
  gstin: "09AADCN4631N2Z3",
  coordinates: {
    lat: 27.152362,
    lng: 78.383075,
  },
  googleMapsUrl: "https://maps.app.goo.gl/rF45HwnaAZfTPS1Y6",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=27.152362,78.383075",
  mapEmbedUrl: "https://maps.google.com/maps?q=27.152362,78.383075+(New+Bright+Glass+Works+(India)+Private+limited)&t=&z=17&ie=UTF8&iwloc=B&output=embed",
  established: "1972",
  stats: [
    { label: "Years of Heritage", value: "50+", helper: "Since 1972" },
    { label: "Active Glass Designs", value: "500+", helper: "Moulds & Shapes" },
    { label: "B2B Clients Served", value: "1,200+", helper: "Hotels, Brands, Retailers" },
    { label: "Pan-India Delivery", value: "28+", helper: "States & Export Ports" },
  ],
  trustStrip: [
    "50+ Years Heritage",
    "Direct Bulk Orders",
    "Custom Logo & Moulds",
    "Pan-India & Export Supply",
  ],
  businessHours: [
    { days: "Monday – Friday", hours: "9:00 AM – 7:30 PM IST" },
    { days: "Saturday", hours: "9:30 AM – 6:00 PM IST" },
    { days: "Sunday", hours: "Factory Dispatch / Urgent Inquiries Only" },
  ]
};

export const PRODUCT_CATEGORIES = [
  "All Products",
  "Drinking Glasses and Tumblers",
  "Glass Bowls",
  "Dinner and Table Ware",
  "Ashtrays",
  "Candle Votives",
  "Bottles and Mugs",
  "Corporate Gifts"
] as const;

export const PRODUCTS: ProductItem[] = [
  {
    id: "royal-faceted-whiskey-tumbler",
    name: "Royal Diamond Faceted Tumbler",
    category: "Drinking Glasses and Tumblers",
    capacity: "320 ml (10.8 oz)",
    dimensions: "H: 95mm · Top Dia: 82mm · Base Dia: 78mm",
    weight: "345 grams",
    wallThickness: "3.2 mm (Reinforced Base 14mm)",
    material: "100% Lead-Free Extra-Flint Glass",
    thermalShock: "Tested ΔT 65°C Thermal Shock Safe",
    moq: "240 Pcs (20 Boxes)",
    packaging: "6 pcs luxury color box / Export master carton 48 pcs",
    description: "Heavy-base cut-crystal soda-lime glass tumbler with light-refracting diamond facets. Ideal for fine whiskey, cocktails, and premium dining.",
    highlight: "Weighted Base · Thermal Shock Tested",
    image: "/images/glass_tumblers_collection_1792663600748.jpg"
  },
  {
    id: "classic-highball-collins",
    name: "Aura Slim Highball Glass",
    category: "Drinking Glasses and Tumblers",
    capacity: "380 ml (12.8 oz)",
    dimensions: "H: 145mm · Top Dia: 65mm · Base Dia: 60mm",
    weight: "290 grams",
    wallThickness: "2.4 mm (Fire-Polished Rolled Rim)",
    material: "High-Purity Soda Lime Glass",
    thermalShock: "Commercial Dishwasher Cycle Tested 85°C",
    moq: "360 Pcs",
    packaging: "6 pcs printed gift pack / Master carton 72 pcs",
    description: "Sleek, transparent highball glass engineered with fire-polished rolled rims for durability in high-turnover bar and banqueting operations.",
    highlight: "Chip-Resistant Rim · Dishwasher Safe",
    image: "/images/hero_firozabad_glassware_1792663600560.jpg"
  },
  {
    id: "lotus-crystal-dessert-bowl",
    name: "Imperial Fluted Glass Dessert Bowl",
    category: "Glass Bowls",
    capacity: "250 ml (8.5 oz)",
    dimensions: "H: 60mm · Top Dia: 115mm · Base Dia: 52mm",
    weight: "260 grams",
    wallThickness: "2.8 mm Fluted Contour",
    material: "Food-Grade Annealed Optical Glass",
    thermalShock: "Food Safe · Stain & Odor Non-Porous",
    moq: "300 Pcs",
    packaging: "4 pcs window pack / Master carton 48 pcs",
    description: "Classic fluted petal contour with sparkling clarity. Perfect for ice cream, puddings, fruit salads, and Indian sweets (mithai).",
    highlight: "High Optical Clarity · Food Grade",
    image: "/images/glass_tumblers_collection_1792663600748.jpg"
  },
  {
    id: "serving-salad-trifle-bowl",
    name: "Sovereign 1.5L Centerpiece Glass Bowl",
    category: "Glass Bowls",
    capacity: "1,500 ml (50.7 oz)",
    dimensions: "H: 110mm · Top Dia: 210mm · Base Dia: 105mm",
    weight: "890 grams",
    wallThickness: "4.5 mm Heavy Duty Press",
    material: "Heavy Flint Annealed Glass",
    thermalShock: "Shock-Tolerant Buffet Standard",
    moq: "120 Pcs",
    packaging: "Individual foam-cushioned gift box / Master 12 pcs",
    description: "Substantial centerpiece serving bowl with thick curved wall structure and brilliant light transmission for buffets and catering.",
    highlight: "Thick Glass Wall · Drop Safe Box",
    image: "/images/glass_tumblers_collection_1792663600748.jpg"
  },
  {
    id: "elegance-dinner-plate-set",
    name: "Lustre Embossed Dinner & Platter Plate",
    category: "Dinner and Table Ware",
    dimensions: "Dinner: Dia 270mm · Side: Dia 190mm",
    weight: "680g (Dinner) / 380g (Side)",
    wallThickness: "3.8 mm Tempered Rim",
    material: "Tempered Soda-Lime Glass",
    thermalShock: "Microwave & Dishwasher Safe up to 110°C",
    moq: "200 Sets",
    packaging: "12 pcs cushioned set box / Export seaworthy",
    description: "Heat-tempered glassware plates with subtle geometric concentric patterns. Non-porous surface prevents stain retention and odor.",
    highlight: "100% Lead-Free · Non-Porous",
    image: "/images/hero_firozabad_glassware_1792663600560.jpg"
  },
  {
    id: "heavy-cigar-ashtray",
    name: "Monarch Octagonal Crystal Ashtray",
    category: "Ashtrays",
    dimensions: "Dia: 150mm · H: 42mm",
    weight: "620 grams",
    wallThickness: "6.0 mm Heavy Solid Crystal Base",
    material: "Pressed Optical Flint Glass",
    thermalShock: "Direct Heat & Ember Resistant",
    moq: "150 Pcs",
    packaging: "Individual satin-lined rigid presentation box",
    description: "Solid heavy-weight pressed glass ashtray with 4 deep rest grooves. Wind-resistant mass designed for luxury hotel lounges and executive desks.",
    highlight: "Solid 620g Mass · Heat Resisting",
    image: "/images/glass_tumblers_collection_1792663600748.jpg"
  },
  {
    id: "mercury-ribbed-candle-votive",
    name: "Firozabad Ribbed Candle Votive Jar",
    category: "Candle Votives",
    capacity: "200 ml / 7 oz wax fill",
    dimensions: "H: 80mm · Top Dia: 72mm · Base Dia: 68mm",
    weight: "220 grams",
    wallThickness: "3.0 mm Uniform Cast",
    material: "Thermal-Resistant Borosilicate Blend",
    thermalShock: "Hot Wax Pour Tested up to 95°C",
    moq: "500 Pcs",
    packaging: "Honeycomb grid export carton / 48 pcs",
    description: "Specialized heat-resistant glass candle holder with fluted exterior. Uniform wall thickness prevents crack formation under wax pooling.",
    highlight: "Wax-Pour Safe · Uniform Thickness",
    image: "/images/artisan_glass_furnace_1792663601781.jpg"
  },
  {
    id: "vintage-amber-votive",
    name: "Golden Amber Crackle Votive",
    category: "Candle Votives",
    capacity: "180 ml (6.1 oz)",
    dimensions: "H: 75mm · Top Dia: 70mm · Base Dia: 58mm",
    weight: "205 grams",
    wallThickness: "3.2 mm Crackle Layer",
    material: "Hand-Blown Colored Silica",
    thermalShock: "Ambient Spa Flame Safe",
    moq: "500 Pcs",
    packaging: "Export bulk pack with divider",
    description: "Artisan crackle glass votive reflecting warm ambient flame illumination. Popular with luxury spa brands and festive decor exporters.",
    highlight: "Hand-Furnished Crackle Effect",
    image: "/images/artisan_glass_furnace_1792663601781.jpg"
  },
  {
    id: "swing-top-water-bottle",
    name: "PureFlow 1-Litre Glass Water Bottle",
    category: "Bottles and Mugs",
    capacity: "1,000 ml (33.8 oz)",
    dimensions: "H: 310mm · Dia: 85mm · Neck Dia: 28mm",
    weight: "580 grams",
    wallThickness: "3.4 mm Pressure Rated",
    material: "Pure Borosilicate Glass & Stainless Swing Cap",
    thermalShock: "Boiling Water & Chilled Storage Safe",
    moq: "300 Pcs",
    packaging: "12 pcs divider carton / Optional neoprene sleeve",
    description: "Airtight swing-top borosilicate glass bottle engineered for restaurant table service and eco-friendly corporate water carafes.",
    highlight: "Airtight Swing-Cap · Reusable",
    image: "/images/hero_firozabad_glassware_1792663600560.jpg"
  },
  {
    id: "frosted-beer-coffee-mug",
    name: "Viking Heavy-Handle Glass Beer Mug",
    category: "Bottles and Mugs",
    capacity: "500 ml (16.9 oz)",
    dimensions: "H: 155mm · Top Dia: 86mm · Base Dia: 95mm",
    weight: "680 grams",
    wallThickness: "4.8 mm Reinforced Rim",
    material: "High-Impact Commercial Soda Lime",
    thermalShock: "Deep Freezer Frost Safe (-20°C)",
    moq: "240 Pcs",
    packaging: "6 pcs inner box / 24 pcs carton",
    description: "Rugged ergonomic handle with reinforced base and thick walls that retain chilled beverage temperatures for sports bars and microbreweries.",
    highlight: "Chill Retention · Ergonomic Grip",
    image: "/images/glass_tumblers_collection_1792663600748.jpg"
  },
  {
    id: "corporate-whiskey-box-set",
    name: "Presidential 4-Tumbler Gold Rim Gift Box",
    category: "Corporate Gifts",
    capacity: "Set of 4 × 310ml Tumblers",
    dimensions: "Box: 320 × 260 × 110mm · Glass: H 95mm",
    weight: "2,200 grams total packaged set",
    wallThickness: "3.2 mm Glass · 1200 GSM Hardboard Box",
    material: "24k Gold Luster Rimming & Lead-Free Crystal",
    thermalShock: "Laser Monogram Durability Tested",
    moq: "50 Sets",
    packaging: "Custom embossed velvet-lined magnetic gift box",
    description: "Turnkey executive corporate gift set featuring 4 custom gold-rimmed glasses, laser-etched company monogram, and premium presentation box.",
    highlight: "Custom Logo Monogramming Included",
    image: "/images/corporate_glass_giftset_1792663602337.jpg"
  },
  {
    id: "festive-diwali-votive-hampers",
    name: "Regal Diya & Votive Festive Hamper",
    category: "Corporate Gifts",
    capacity: "Set of 6 Glass Votives + Wax",
    dimensions: "Gift Tray: 280 × 190mm · Votive: H 65mm",
    weight: "1,450 grams total packaged set",
    wallThickness: "2.8 mm Hand-Blown Colored Glass",
    material: "Amber & Ruby Jewel Glass with Soy Wax",
    thermalShock: "Thermal Shock Certified",
    moq: "100 Sets",
    packaging: "Rigid gold foil stamped corporate gift pack",
    description: "Curated festive gifting collection combining hand-blown colored votives with custom printed outer sleeves for employee and partner appreciation.",
    highlight: "Custom Branding Sleeve Available",
    image: "/images/corporate_glass_giftset_1792663602337.jpg"
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "inhouse",
    title: "In-House Manufacturing",
    description: "Direct production from our Firozabad continuous regenerative furnaces with zero middleman markups. Full control over quality and timelines.",
    icon: "Factory"
  },
  {
    id: "custom",
    title: "Custom Designs & Logo Branding",
    description: "High-precision screen printing, gold rimming, frosted etching, and proprietary custom moulds tailored for your brand or hotel chain.",
    icon: "Palette"
  },
  {
    id: "wholesale",
    title: "Bulk & Wholesale Pricing",
    description: "Direct factory slab tariffs for large volume distributors, restaurant suppliers, and export traders, maximizing your operating margins.",
    icon: "BadgePercent"
  },
  {
    id: "quality",
    title: "Strict Quality Checks",
    description: "Every batch undergoes thermal shock analysis, optical polariscope bubble inspection, and rim smooth-fire polishing before packing.",
    icon: "ShieldCheck"
  },
  {
    id: "packaging",
    title: "Safe Packaging & Timely Delivery",
    description: "Drop-tested 5-ply export corrugation, cellular partitions, and bubble shrink ensures zero transit breakage with insured pan-India dispatch.",
    icon: "PackageCheck"
  },
  {
    id: "export",
    title: "Export-Ready Compliance",
    description: "Supplying container shipments to UAE, Southeast Asia, Europe, and North America with complete phytosanitary, COO, and port logistics.",
    icon: "Globe"
  }
];

export const MANUFACTURING_STEPS = [
  {
    step: "01",
    name: "Raw Material",
    headline: "Pure Silica & Soda Ash",
    description: "High-grade quartz silica, soda ash, and refined cullet are precision-blended with zero hazardous heavy metals for optical clarity."
  },
  {
    step: "02",
    name: "Melting",
    headline: "1500°C Regenerative Furnaces",
    description: "The batch is liquefied in continuous gas-fired regenerative tank furnaces under strict temperature monitors to purge air cavities."
  },
  {
    step: "03",
    name: "Shaping",
    headline: "Master Artisans & Moulds",
    description: "Molten glass is gathered onto blowpipes or fed into precision cast-iron moulds by skilled Firozabad craftsmen for exact symmetry."
  },
  {
    step: "04",
    name: "Annealing",
    headline: "Controlled Thermal Lehr",
    description: "Formed glass traverses a 40-metre continuous cooling lehr to systematically eliminate internal stress and guarantee thermal shock resistance."
  },
  {
    step: "05",
    name: "Quality Check",
    headline: "Polariscope & Rim Audit",
    description: "100% manual and optical inspection verifies rim curvature, wall thickness uniformity, weight tolerance, and crystal brilliance."
  },
  {
    step: "06",
    name: "Packing",
    headline: "Drop-Tested Export Cartons",
    description: "Insulated with corrugated cellular dividers, shrink-wrapped in protective film, and palletized for safe door-to-door delivery."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "review-1",
    quote: "New Bright Glass Works supplied over 15,000 custom whiskey tumblers for our resort properties across Goa and Rajasthan. Their clarity and rim durability withstand heavy commercial bar use with near-zero breakage.",
    author: "Vikram Singhania",
    role: "Director of Food & Beverage",
    company: "Heritage Grand Hotels & Resorts",
    location: "Jaipur / Mumbai",
    orderType: "Commercial Barware"
  },
  {
    id: "review-2",
    quote: "For Diwali corporate gifting, Aayush and his team produced 2,400 bespoke 4-glass gift sets embossed with our corporate logo. The satin presentation boxes arrived 4 days ahead of schedule in pristine condition.",
    author: "Pooja Deshmukh",
    role: "Head of Procurement & Branding",
    company: "Apex Infotech Global",
    location: "Bengaluru, Karnataka",
    orderType: "Corporate Gifting"
  },
  {
    id: "review-3",
    quote: "We have sourced 40ft container loads of candle votives and table glassware from New Bright Glass Works for our Middle East distribution network. Their export documentation and packaging standards are second to none.",
    author: "Tariq Al-Mansoor",
    role: "Managing Partner",
    company: "Gulf Hospitality Supplies LLC",
    location: "Dubai, United Arab Emirates",
    orderType: "Export Wholesale"
  },
  {
    id: "review-4",
    quote: "Finding an authentic Firozabad manufacturer who honors delivery commitments was tough until we partnered with New Bright. Their wholesale prices allow us to maintain healthy margins across 80+ retail outlets.",
    author: "Rameshwar Aggarwal",
    role: "Proprietor",
    company: "Aggarwal Crockery & Home Needs",
    location: "Delhi NCR",
    orderType: "Retail Distribution"
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-moq",
    category: "Ordering",
    question: "What is your Minimum Order Quantity (MOQ)?",
    answer: "For standard catalog items (drinking glasses, bowls, votives), our standard MOQ starts from 240 to 500 pieces depending on the product carton packing. For custom moulds or dedicated branding runs, the MOQ typically ranges between 1,000 and 3,000 units."
  },
  {
    id: "faq-custom",
    category: "Customisation",
    question: "Can you print our company logo or create custom glassware shapes?",
    answer: "Yes, absolutely! We specialize in custom logo screen printing (single and multi-colour ceramic decal firing), 24k gold/platinum rim lining, frosted acid etching, and bespoke mould fabrication based on your 2D/3D technical drawings."
  },
  {
    id: "faq-shipping",
    category: "Logistics",
    question: "How do you guarantee glass safety during pan-India shipping?",
    answer: "Glass breakage is prevented through our 5-ply heavy burst-factor corrugated master boxes, individual item cell dividers, high-density thermocol corners, and shrink-wrap moisture sealing. All commercial consignments are shipped via insured surface transport partners."
  },
  {
    id: "faq-payment",
    category: "Terms",
    question: "What are your payment terms for bulk orders?",
    answer: "For domestic wholesale orders, standard terms are a 30% advance deposit upon purchase order confirmation and 70% against dispatch/proforma invoice. For verified long-term corporate clients and exporters, we support LC (Letter of Credit) and credit facilities."
  },
  {
    id: "faq-export",
    category: "Export",
    question: "Do you export internationally from Firozabad?",
    answer: "Yes, we regularly dispatch Full Container Loads (FCL) and Less than Container Loads (LCL) through ICD Agra, Nhava Sheva (Mumbai), and Mundra port. We supply complete export documentation including Certificate of Origin, Packing List, Commercial Invoice, and Fumigation Certificates."
  },
  {
    id: "faq-samples",
    category: "Samples",
    question: "Can we request physical product samples before placing a bulk order?",
    answer: "Yes! Sample pieces from our active production line can be couriered to your office or factory address across India within 48 to 72 hours for material evaluation. Courier charges may apply, which are adjusted against your confirmed bulk order."
  }
];
