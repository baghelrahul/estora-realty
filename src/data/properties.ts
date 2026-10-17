export interface PropertyHighlight {
  icon: string;
  title: string;
  desc: string;
}

export interface PropertySpec {
  label: string;
  value: string;
}

export interface PropertyProximity {
  time: string;
  place: string;
}

export interface PropertyAdvisor {
  name: string;
  title: string;
  phone: string;
  email: string;
  image: string;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  price: number;
  priceFormatted: string;
  location: string;
  address: string;
  beds: number;
  baths: number;
  area: string;
  areaSqFt: number;
  lotSize?: string;
  builtYear?: string;
  typology: "Modern Villa" | "Urban Penthouse" | "Architectural Estate" | "Restored Stone Villa" | "Apartment" | "Independent House" | "Plot / Land" | "Commercial";
  purpose: "Buy" | "Rent";
  furnishing: "Fully Furnished" | "Semi-Furnished" | "Unfurnished";
  status: "Ready to Move" | "Under Construction" | "New Listing" | "Under Offer";
  amenities: string[];
  tag: "Featured" | "Just Listed" | "Exclusive" | "Under Offer" | "New Listing";
  image: string;
  subImages?: { title: string; url: string }[];
  description: string;
  highlights?: PropertyHighlight[];
  specs?: PropertySpec[];
  proximities?: PropertyProximity[];
  advisor?: PropertyAdvisor;
}

export const defaultAdvisor: PropertyAdvisor = {
  name: "Alexandra Sterling",
  title: "Senior Architectural Partner · Lic. #01928491",
  phone: "+1 (310) 849-2041",
  email: "alexandra@estorarealty.com",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB83K4_GfeMGOyz2vT79GqRKxMMsmXOkV4SrHZ8SWcsJchpKQDSk3qgOpXXJAa18NEvTWw2Kwtl_Q0oPGVEi7ZJkoRwxxQlPFqFRmZ3Z5lK0IozsL51fPDRSatCHGHErGU9wOOlD3ZiI9EhD78IWcpMDK-KsSI67CW7VEW3a38Pxu9cuBy_oyrBLUDCYGDoiUxXH3jWl0lB6YXylydvoYjlOsKf46eX3DONWkhUsjcYEJmEp-tFSKyr",
};

export const properties: Property[] = [
  {
    id: "EST-94021",
    slug: "bel-air-glass-pavilion",
    title: "The Bel-Air Glass Pavilion",
    price: 8750000,
    priceFormatted: "$8,750,000",
    location: "Bel-Air, Los Angeles",
    address: "1048 Stradella Road, Bel-Air, Los Angeles, CA 90077",
    beds: 5,
    baths: 7,
    area: "8,420 Sq Ft",
    areaSqFt: 8420,
    lotSize: "0.85 Acres",
    builtYear: "2023",
    typology: "Modern Villa",
    purpose: "Buy",
    furnishing: "Fully Furnished",
    status: "Ready to Move",
    amenities: ["Parking", "Balcony / Terrace", "Private Garden", "Swimming Pool", "Private Gym", "24/7 Security"],
    tag: "Featured",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQdjGst_e_JMNZOvbO33Yf1HXZQZ2ZxkXxHdd6S2Hg9GLJOlefAA_HjIEjg0ZpomPUyUe4SsNC-AZfNvybo2VFCQ4v-fzcf3vnocsafgg__RC7FLJ6_KJc8E7d9zINidGyX45UGVfYg2NHk0Q0xPK6BOQgLqkWd6e4N0ABY8sf4IHxw-mRK-jDDJKD2c7deEVW95q0t05exQLaMgy0hdlZ8hE71wLZ9TvFryU9mBEeHEKqB5OcMu_L",
    subImages: [
      {
        title: "Living Pavilion",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmDMeM1ZcL1YPTmj4gZi9sg8U0RkvHSeE5BodglKL4CEJs_WEqX7Cu-I8X-sFXAMQrYV50rHdayGRdiTrRP-O3_3-BrUSwaa18xl0LGK7X1DukmEtxtEc1AB8ctrm_KQ6HFbSEec7Vb9QLHmnLUOnnwqCsewPoPbTZey2a08p0wvn7ANKUNga-p1zhErVL6ZYeN42yEbFl6asQuS7bNQYbueVLxm2TsT8HAdqTGHQwci313T15fn-L",
      },
      {
        title: "Master Suite",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjdCf7LHvzD_j5azlZ7xrp3Kebv-twAnWfk7xFkx3D0KY6b6WslJeRoe9Szgz-0aslAK7K-6i0uwfcL2RVoAs2ssCPhdZHemRX07KtysQ4Sgc_llN-sJF5-zHLu_q8Mozw8OOQGCQC_UFOPyEMOpAAitTy84ZOIK1Ggd5Wzc62HuFJYHysHB16W-trmfTn5CDXThaYiTJVUTNolVO6QSSwqon_25OBCP3rbnSNk3QEHpYHalhav3HE",
      },
      {
        title: "Wine Cellar",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuIJfnIO9esmilhzjocou7ozFOmwWUYkdHiz6M8MNBtyykUwX7UivkS2wTgKzyIX03DS0KCTvsg9xXe4OaGeFHjbv8IaTCpE2T_RTNdqUVH1MeaaVCrLtYU10s1rtQa44fT6XYRsWYjvUaL_TxnVEYk1ODcuCsXmMHSPlvAsrM5LwUTDQiNYVufCojrCGM7VVqn0qXuYyNRpgLheiulOOU7mwCSIkr_Pi81-Pqk3oqxzX_9dEEypJC",
      },
      {
        title: "Sunset Terrace",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCacYucgsaNBKiRZlcc-7wzWkvoBdhxigNi0raB5bnyK5NghrzJlcJ3MUlvJEO5ujEFgpWKHBLHGhrEX0fMtlekdAylO0nKB8rYRXQQ-LCv5cpEeXC3xruR4M7pPfWzpQMWhQ4Za7pHtRnlzKY-NgURfehSK4GMG3v7YV2XdbO_muk3V-mEag_LnrVLw2aa8vvqPoCvFGc1Ylel87PARe1HHKC6X37swZ9g_wj6gzEY6yoGF0Mdq1-S",
      },
    ],
    description:
      "Poised majestically on a private promontory along coveted Stradella Road, The Bel-Air Glass Pavilion represents a pinnacle achievement in contemporary California architecture. Conceived by award-winning architectural atelier Studio Vesper, the residence dissolves the boundary between serene canyon sanctuaries and sophisticated entertainment pavilions.",
    highlights: [
      { icon: "pool", title: "Infinity Pool & Spa", desc: "75-foot cantilevered black-quartz infinity basin with integrated 12-person sunken hydrotherapy spa." },
      { icon: "theaters", title: "Private Screening Room", desc: "Acoustically tuned tier-seated private theater with 4K laser projection and Dolby Atmos sound." },
      { icon: "wine_bar", title: "Architectural Wine Room", desc: "800-bottle dual-zone climate-controlled glass vitrine with custom steel cradle displays." },
      { icon: "settings_remote", title: "Smart Home Automation", desc: "Full Crestron Home ecosystem controlling climate, circadian lighting arrays, and audio." },
      { icon: "countertops", title: "Miele & Gaggenau Kitchen", desc: "Dual induction ranges, integrated steam ovens, custom wine refrigeration, and scullery." },
      { icon: "garage", title: "Motor Court & 4-Car Garage", desc: "Private gated arrival court parking 6 vehicles plus high-ceilinged 4-car climate gallery." },
      { icon: "bathtub", title: "Primary Spa Retreat", desc: "Dual walk-in rain showers, monolithic soaking tub with skyline views, and dressing chambers." },
      { icon: "security", title: "Gated Security Enclave", desc: "Comprehensive perimeter infrared boundary detection and biometric security access." },
    ],
    specs: [
      { label: "Furnishing", value: "Designer Staged, Available Furnished with Curated Collector Pieces" },
      { label: "Elevation / Floors", value: "2 Discrete Architectural Levels with Custom Glass Elevator" },
      { label: "Parking Capacity", value: "4 Covered Gallery Spaces + 6 Private Motor Court Stalls" },
      { label: "Listing Reference", value: "EST-94021" },
      { label: "Possession Status", value: "Immediate Close of Escrow" },
      { label: "Zoning & Jurisdiction", value: "Single Family Estate (LA-RE20)" },
    ],
    proximities: [
      { time: "4 mins", place: "Bel-Air Country Club" },
      { time: "12 mins", place: "Rodeo Drive, Beverly Hills" },
      { time: "10 mins", place: "UCLA Medical Center" },
      { time: "22 mins", place: "LAX Private Aviation Terminal" },
    ],
    advisor: defaultAdvisor,
  },
  {
    id: "EST-58204",
    slug: "villa-serena-cortona",
    title: "Villa Serena Cortona",
    price: 5400000,
    priceFormatted: "$5,400,000",
    location: "Tuscany, Italy",
    address: "Località San Pietro a Cegliolo, Cortona, Italy",
    beds: 6,
    baths: 6,
    area: "6,150 Sq Ft",
    areaSqFt: 6150,
    lotSize: "4.2 Acres",
    builtYear: "1892 (Restored 2022)",
    typology: "Restored Stone Villa",
    purpose: "Buy",
    furnishing: "Fully Furnished",
    status: "Ready to Move",
    amenities: ["Parking", "Balcony / Terrace", "Private Garden", "Swimming Pool", "24/7 Security"],
    tag: "Just Listed",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVMj7SWkJ8n4XJ0h-UrK8Oq2XjyDEdh9OOLTnP_b_AnQCQO0XwxRBfb01pGmghfBQHarvIAzY6nc8NtfviriabBrTq2CCl6UPggB-BUuYjOwLXEEBgh1VGpWHKMtQ7-0u4YbVnY-pLI0Rv-RyzieZe8ieQQDqZDvhKkuqld8dhJb76E-sZ-7NuixC5ekTU8la_crNrPVWO_O4E_WtyuZLdUnZDwtBPUX8At6ZM7OKRDc9uhAM3dLJh",
    description:
      "An immaculate 19th-century Tuscan stone villa meticulously restored under architectural superintendence. Surrounded by century-old olive groves, cypress allees, and lavender gardens, Villa Serena combines timeless Roman travertine architecture with state-of-the-art geothermal climate control.",
    highlights: [
      { icon: "pool", title: "Limestone Horizon Pool", desc: "Hand-carved Tuscan limestone infinity pool overlooking the Val di Chiana valley." },
      { icon: "wine_bar", title: "Underground Cantina", desc: "Vaulted stone barrel room for aging Brunello and Chianti vintages." },
      { icon: "fireplace", title: "Historic Fireplaces", desc: "Four authentic 19th-century hand-carved pietra serena hearths." },
      { icon: "park", title: "Private Olive Grove", desc: "Producing organic extra virgin olive oil with 300 registered trees." },
    ],
    specs: [
      { label: "Furnishing", value: "Antique Italian Walnut & Linen Finishes Included" },
      { label: "Elevation / Floors", value: "3 Levels with Restored Chestnut Beams" },
      { label: "Heating & Cooling", value: "Geothermal Radiant Flooring Throughout" },
      { label: "Listing Reference", value: "EST-58204" },
      { label: "Possession Status", value: "Immediate" },
      { label: "Zoning", value: "Agricultural Heritage Preservation" },
    ],
    proximities: [
      { time: "10 mins", place: "Historic Cortona Centro" },
      { time: "35 mins", place: "Lake Trasimeno" },
      { time: "55 mins", place: "Florence Peretola Airport" },
      { time: "70 mins", place: "Siena Piazza del Campo" },
    ],
    advisor: defaultAdvisor,
  },
  {
    id: "EST-77142",
    slug: "the-tribeca-loft-atelier",
    title: "The Tribeca Loft Atelier",
    price: 11200000,
    priceFormatted: "$11,200,000",
    location: "New York, NY",
    address: "68 Franklin Street, Penthouse 4, Tribeca, New York, NY 10013",
    beds: 4,
    baths: 4.5,
    area: "5,200 Sq Ft",
    areaSqFt: 5200,
    lotSize: "Private Rooftop 1,400 Sq Ft",
    builtYear: "1910 (Renovated 2024)",
    typology: "Urban Penthouse",
    purpose: "Buy",
    furnishing: "Semi-Furnished",
    status: "Ready to Move",
    amenities: ["Parking", "Balcony / Terrace", "Private Gym", "24/7 Security"],
    tag: "Exclusive",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWduPXQSrF82lT3PEWNETKYaB6Y96E2s2Q1BSeKiQiR44BxsMGfcgi1Oq9nB75BQtLLdHKcgBAMGTbF9YcrJzkjffI4jKjzlC_DTdZPzV1-hKdAX-3joPJ1ZoNsRaHGIXjNP3d6tQp0ndFrslF-9u3QU8GP_GheyShpkx-IXwZ74ETGExYj5m9lPKATmGzp8T3kzGSYQftz6MqiGluybxGioBM4PwJ-aRxTur64mS9eE5JUUIxwCjw",
    description:
      "An extraordinary duplex cast-iron penthouse in prime Tribeca. Boasting 14-foot timber beamed ceilings, historic brick masonry, museum-quality lighting tracks, and a private landscaped rooftop terrace with full Manhattan skyline panoramas.",
    highlights: [
      { icon: "deck", title: "Private Landscaped Roof", desc: "1,400 sq ft bluestone terrace with outdoor kitchen and gas hearth." },
      { icon: "elevator", title: "Direct Keyed Elevator", desc: "Opens directly into a private gallery foyer with blackened bronze finishes." },
      { icon: "fitness_center", title: "In-Residence Gym", desc: "Dedicated wellness studio with cedar infrared sauna." },
      { icon: "wb_sunny", title: "Northern & Southern Exposures", desc: "Full floor-through light with authentic industrial arched sash windows." },
    ],
    specs: [
      { label: "Furnishing", value: "Designer Staged" },
      { label: "Building Class", value: "Historic Cast-Iron Loft Landmark" },
      { label: "Monthly Common Charges", value: "$3,850 / month" },
      { label: "Listing Reference", value: "EST-77142" },
      { label: "Possession Status", value: "Immediate" },
      { label: "School District", value: "NYC District 2" },
    ],
    proximities: [
      { time: "2 mins", place: "Franklin Street Subway (1/2)" },
      { time: "5 mins", place: "Hudson River Park Marina" },
      { time: "15 mins", place: "Wall Street Financial Hub" },
      { time: "25 mins", place: "JFK Helicopter Heliport" },
    ],
    advisor: defaultAdvisor,
  },
  {
    id: "EST-83910",
    slug: "the-highland-ridge-estate",
    title: "The Highland Ridge Estate",
    price: 14500000,
    priceFormatted: "$14,500,000",
    location: "Aspen, CO",
    address: "410 Red Mountain Road, Aspen, CO 81611",
    beds: 6,
    baths: 8,
    area: "9,800 Sq Ft",
    areaSqFt: 9800,
    lotSize: "1.75 Acres",
    builtYear: "2021",
    typology: "Architectural Estate",
    purpose: "Buy",
    furnishing: "Fully Furnished",
    status: "New Listing",
    amenities: ["Parking", "Balcony / Terrace", "Private Garden", "Private Gym", "24/7 Security"],
    tag: "New Listing",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdXmQxV2pJzl24_eAQtGWKHGwCrJyW--YSmUBoRVPq5x9fzHauDi8S5yG6zh24vQCw7pljO5NzHO-QFnbBBeAEjRy6IBIoQF24100PlcYvl4_4IhfeNHwsCsltBqGDVyplNqfjnqW9rcffLbkQ-nrOYS3Yra4R8r2_AGvkaNx1LhPKCDzlEvyQgM8rVXY6ax2i267X-zV3DrPGqGoWVwPvv59Y9FQFY7sY-sn9xi6p7GLyWJMKcV3d",
    description:
      "Perched upon legendary Red Mountain, known locally as Billionaire's Mountain, this alpine masterwork features floor-to-ceiling triple-glazed acoustic glass framing direct vistas of Aspen Mountain and the Roaring Fork Valley. Constructed with charred cedar siding and basalt masonry.",
    highlights: [
      { icon: "downhill_skiing", title: "Heated Ski Locker & Lounge", desc: "Custom boot warmers and direct trailhead access for alpine skiing." },
      { icon: "spa", title: "Outdoor Heated Plunge & Spa", desc: "Year-round hot spring style stone pool overlooking Aspen peaks." },
      { icon: "local_fire_department", title: "Monumental Granite Fireplace", desc: "Central dual-sided hearth crafted from local Colorado granite." },
      { icon: "ev_station", title: "Heated Driveway & Courtyard", desc: "Fully automated hydronic snow-melt system across all outdoor surfaces." },
    ],
    specs: [
      { label: "Furnishing", value: "Turnkey Furnished by Studio Liaigre" },
      { label: "Elevation / Floors", value: "3 Levels with Integrated Glass Funicular" },
      { label: "HVAC", value: "Oxygen-Enriched Climate System in Bedrooms" },
      { label: "Listing Reference", value: "EST-83910" },
      { label: "Possession Status", value: "30 Days Escrow" },
      { label: "Zoning", value: "Pitkin County Residential" },
    ],
    proximities: [
      { time: "6 mins", place: "Aspen Downtown & Wagner Park" },
      { time: "8 mins", place: "Aspen Mountain Gondola" },
      { time: "12 mins", place: "Aspen/Pitkin County Airport (ASE)" },
      { time: "15 mins", place: "Snowmass Ski Resort" },
    ],
    advisor: defaultAdvisor,
  },
  {
    id: "EST-39148",
    slug: "casa-luminosa-modern",
    title: "Casa Luminosa Modern",
    price: 9800000,
    priceFormatted: "$9,800,000",
    location: "Miami Beach, FL",
    address: "1420 North Bay Road, Miami Beach, FL 33140",
    beds: 5,
    baths: 6,
    area: "7,100 Sq Ft",
    areaSqFt: 7100,
    lotSize: "0.62 Acres (100 ft Water Frontage)",
    builtYear: "2024",
    typology: "Modern Villa",
    purpose: "Buy",
    furnishing: "Fully Furnished",
    status: "Ready to Move",
    amenities: ["Parking", "Balcony / Terrace", "Private Garden", "Swimming Pool", "24/7 Security"],
    tag: "Featured",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhdb1r2qyBjA8rP6KyT83sNZCZudbGCkMwt9SNoAXKkTdIO6OkVU-MTvW2id3sc_sH67BhD9gB-hUhnGg5ryXUOLsHqiZfIncIvPjuoRAhJ8ADpWyBvE3B3sVyRphAEM7LQ9dFmbeavOoKyRVWMR8sIvhzp3_TA2IYE3gNhyul6hXCzLKol_AuUGz2-oeLvhsOtpuoasCPiUP7DRf3gEOjnN0LhY8hcobjXKz4yww8PMpf-THwJXX4",
    description:
      "A tropical modernist sanctuary on prestigious North Bay Road. Features 100 feet of prime Biscayne Bay frontage, a private deep-water yacht slip, cantilevered travertine sun decks, and serene turquoise reflection lap pools.",
    highlights: [
      { icon: "directions_boat", title: "Private Yacht Dockage", desc: "Accommodates up to 90ft vessel with electrical shore power." },
      { icon: "pool", title: "70-foot Saltwater Lap Pool", desc: "Integrated baja shelf and architectural water walls." },
      { icon: "wb_twilight", title: "Direct Sunset Views", desc: "Unobstructed western water exposure over the Miami downtown skyline." },
      { icon: "shield", title: "Storm Shield Technology", desc: "High-impact category 5 missile-resistant thermal glass." },
    ],
    specs: [
      { label: "Furnishing", value: "Poliform & Minotti Custom Staging Included" },
      { label: "Dock Specifications", value: "Ipe Wood Deck with Twin Boat Lifts" },
      { label: "Elevation", value: "Exceeds FEMA +12ft Base Flood Elevation" },
      { label: "Listing Reference", value: "EST-39148" },
      { label: "Possession Status", value: "Immediate" },
      { label: "Zoning", value: "Miami Beach Single Family Estate" },
    ],
    proximities: [
      { time: "5 mins", place: "Sunset Harbour Dining & Boutiques" },
      { time: "8 mins", place: "Lincoln Road Cultural District" },
      { time: "18 mins", place: "Miami Design District" },
      { time: "20 mins", place: "Miami International Airport (MIA)" },
    ],
    advisor: defaultAdvisor,
  },
  {
    id: "EST-62095",
    slug: "skyline-terrace-penthouse",
    title: "Skyline Terrace Penthouse",
    price: 13600000,
    priceFormatted: "$13,600,000",
    location: "Mayfair, London",
    address: "12 Grosvenor Square, Penthouse, London W1K 2HL",
    beds: 3,
    baths: 4,
    area: "4,450 Sq Ft",
    areaSqFt: 4450,
    lotSize: "Private Terrace 850 Sq Ft",
    builtYear: "2020",
    typology: "Apartment",
    purpose: "Buy",
    furnishing: "Fully Furnished",
    status: "Under Offer",
    amenities: ["Parking", "Balcony / Terrace", "Private Gym", "24/7 Security"],
    tag: "Under Offer",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANa8CgoQ7IYKHk0MVflzu9sOjKQKakhNGl2vGRboUhWF665C1iNkohnr1DGr5Zcr-c5ioTOYIW0NbAB4yiqvS82BylABOqHPYHdaIzQjjSvX7h46bNbbitnWxWqLXrViTatXFp2w73W9WRL0R-w_bFZdSaS5m6e7NPJ8krMbg_ccGQUTAqlamzM1HnmmBCzDyRkth3EQ__GSZ_YI-x0FDA_LuP_YtEaCtc4I2XVo8zkiAA5wp3MXDo",
    description:
      "A peerless duplex penthouse on iconic Grosvenor Square in Mayfair. Designed in collaboration with Foster + Partners, featuring a private landscaped rooftop terrace, private subterranean car lift, and 24-hour Harrods white-glove concierge services.",
    highlights: [
      { icon: "deck", title: "Grosvenor Square Vistas", desc: "Direct panoramic views overlooking London's most historic garden square." },
      { icon: "room_service", title: "24-Hour Uniformed Concierge", desc: "Private sommelier, valet parking, and housekeeping coordination." },
      { icon: "pool", title: "Residents' 25m Pool & Spa", desc: "Subterranean wellness sanctuary with vitality pool and thermal suites." },
      { icon: "local_parking", title: "Automated Robotic Parking", desc: "Secure subterranean vehicle vault with direct elevator access." },
    ],
    specs: [
      { label: "Tenure", value: "999-Year Leasehold" },
      { label: "Service Charge", value: "£28,000 / year" },
      { label: "Parking", value: "2 Secure Underground Vault Spaces" },
      { label: "Listing Reference", value: "EST-62095" },
      { label: "Possession Status", value: "Under Conditional Contract" },
      { label: "Council Tax", value: "Westminster Band H" },
    ],
    proximities: [
      { time: "2 mins", place: "Bond Street Luxury Boutiques" },
      { time: "4 mins", place: "Hyde Park Mount Street Gate" },
      { time: "10 mins", place: "The Connaught & Claridge's" },
      { time: "30 mins", place: "London City Airport" },
    ],
    advisor: defaultAdvisor,
  },
  {
    id: "EST-11049",
    slug: "the-kyoto-zen-enclave",
    title: "The Kyoto Zen Enclave",
    price: 6200000,
    priceFormatted: "$6,200,000",
    location: "Kyoto, Japan",
    address: "Higashiyama-ku, Kyoto, Japan",
    beds: 4,
    baths: 4,
    area: "4,100 Sq Ft",
    areaSqFt: 4100,
    lotSize: "0.55 Acres",
    builtYear: "2024",
    typology: "Independent House",
    purpose: "Buy",
    furnishing: "Fully Furnished",
    status: "New Listing",
    amenities: ["Parking", "Private Garden", "24/7 Security"],
    tag: "Just Listed",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKFT4tuve2_vYiAJevCBgwx60lt0JOEJzYn4NbqUuSwXHzE1xx8cNA4igpEMKJhFS1dOPYjeBC5949L8-GFETDjkMW2-FrBlvcTKjV5oRHOBIoiMapTyA84klwLelZTj3rC6oMM2neH48u-5zeUehnqfo1L5cRMcp35EUw9AmVPKBuNqQNm4VvygdgpbEtgZUycZ1jodayJ6zbPewHwlVU28j6chYonl17Flwz4nHVDEL5g2tKvn8z",
    description:
      "A serene masterwork by Atelier Hiroshi situated in historic Higashiyama. Pairing centuries-old Sukiya-zukuri carpentry with minimalist cast concrete, internal dry pebble gardens, and natural Hinoki wood cedar onsen baths.",
    highlights: [
      { icon: "spa", title: "Natural Hinoki Onsen Bath", desc: "Deep soaking tub carved from aromatic Japanese cypress wood." },
      { icon: "yard", title: "Karesansui Rock Garden", desc: "Authentic dry landscape meditative courtyard designed by Zen masters." },
      { icon: "cottage", title: "Chashitsu Tea Pavilion", desc: "Traditional 4.5 tatami mat tea ceremony chamber." },
    ],
    specs: [
      { label: "Wood Lineage", value: "Yoshino Cedar & Hinoki" },
      { label: "Listing Reference", value: "EST-11049" },
      { label: "Possession Status", value: "Ready to Move" },
      { label: "Jurisdiction", value: "Kyoto Scenic Preservation Zone" },
    ],
    proximities: [
      { time: "5 mins", place: "Kiyomizu-dera Temple" },
      { time: "15 mins", place: "Kyoto Shinkansen Station" },
      { time: "60 mins", place: "Osaka Kansai International Airport" },
    ],
    advisor: defaultAdvisor,
  },
  {
    id: "EST-22910",
    slug: "paris-quai-voltaire-atelier",
    title: "The Quai Voltaire Atelier",
    price: 7800000,
    priceFormatted: "$7,800,000",
    location: "Paris, France",
    address: "24 Quai Voltaire, 7th Arrondissement, Paris, France",
    beds: 3,
    baths: 3,
    area: "3,850 Sq Ft",
    areaSqFt: 3850,
    builtYear: "1850 (Restored 2023)",
    typology: "Apartment",
    purpose: "Buy",
    furnishing: "Semi-Furnished",
    status: "Ready to Move",
    amenities: ["Balcony / Terrace", "24/7 Security"],
    tag: "Exclusive",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuArX7-SAE2iW0eSCq_NOJKi0mZ20AbvkczuirbBb-NqA70vnXzEiYb1pftva65nEZp-l2wHjhFpj05T1zQnGWbY7pgWuUmS1yYyJJZDlvgzHUCGguYZ8G2k8KM9mfz6rLEPZOQUpDu7YznkV-0hxyvFqgLrRLRJyTATf7JnYessh1ra3sioV2HOG3KgOxNPdlOl7D5sqZB2nnV7BZDL6Vr2SRmxdv4aO7EdZDy4dOReY6pvPzfnAhZ2",
    description:
      "Commanding front-row Seine views looking straight into the Louvre Museum, this Haussmannian masterpiece features 4-meter ceilings, restored gilt moldings, Versailles parquet floors, and discreet contemporary air purification systems.",
    highlights: [
      { icon: "visibility", title: "Direct Louvre & Seine Views", desc: "Panoramic river views with iron balcony spanning the entire reception salon." },
      { icon: "auto_stories", title: "Private Salon Library", desc: "Floor-to-ceiling ebony joinery with rolling brass book ladder." },
      { icon: "wine_bar", title: "Curated French Cellar", desc: "Custom temperature-controlled vitrine in the grand dining salon." },
    ],
    specs: [
      { label: "Floor", value: "3ème étage noble avec ascenseur" },
      { label: "Heating", value: "Independent Hydronic Gas" },
      { label: "Listing Reference", value: "EST-22910" },
      { label: "Possession Status", value: "Immediate" },
    ],
    proximities: [
      { time: "2 mins", place: "Pont des Arts & Louvre" },
      { time: "6 mins", place: "Saint-Germain-des-Prés" },
      { time: "25 mins", place: "Paris Orly Airport" },
    ],
    advisor: defaultAdvisor,
  },
  {
    id: "EST-44018",
    slug: "malibu-canyon-coastal-villa",
    title: "Malibu Canyon Sanctuary",
    price: 38000,
    priceFormatted: "$38,000 / mo",
    location: "Malibu, CA",
    address: "28400 Pacific Coast Highway, Malibu, CA 90265",
    beds: 4,
    baths: 5,
    area: "5,400 Sq Ft",
    areaSqFt: 5400,
    lotSize: "1.2 Acres",
    builtYear: "2023",
    typology: "Modern Villa",
    purpose: "Rent",
    furnishing: "Fully Furnished",
    status: "Ready to Move",
    amenities: ["Parking", "Balcony / Terrace", "Private Garden", "Swimming Pool", "24/7 Security"],
    tag: "Featured",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaC1nZcEAPHvs5xJmMq-Wu8SjSfsz9vSs2DHjtZOeNR4vH2AdGKSU52-yjrb9uB0NASSwr4795n60u6jawZkRbZr7LBN5p9y2B64zhIFsoVjSwvM8HTUziYqmIpbWNzd6vRQ_FC3PZNqjXi7y3BsGCKNbnorAm6wAu03bZ989qloKXRruou9r8vkBqjZJ73F11hciGAfSd5zKZPI68c_jjvDR44WY5hWijcfQwEfNihMxw_v2psYjK",
    description:
      "Offered for long-term residential lease, this private blufftop architectural villa overlooks Point Dume and the Pacific. Gated entrance, organic board-formed concrete volumes, private trail to Zuma Beach, and solar geothermal independence.",
    highlights: [
      { icon: "beach_access", title: "Private Coastal Trail", desc: "Gated pathway directly accessing white sand cove." },
      { icon: "pool", title: "Oceanfront Heated Infinity Pool", desc: "Seamless glass railing overlooking Pacific surf." },
      { icon: "nature", title: "Organic Citrus Grove", desc: "Private Meyer lemon and blood orange orchard." },
    ],
    specs: [
      { label: "Lease Term", value: "12 - 36 Months" },
      { label: "Deposit", value: "2 Months Required" },
      { label: "Listing Reference", value: "EST-44018" },
      { label: "Possession Status", value: "Ready to Move" },
    ],
    proximities: [
      { time: "3 mins", place: "Zuma Beach" },
      { time: "7 mins", place: "Nobu Malibu & Country Mart" },
      { time: "30 mins", place: "Santa Monica Airport" },
    ],
    advisor: defaultAdvisor,
  },
  {
    id: "EST-33019",
    slug: "chelsea-gallery-commercial-atelier",
    title: "The Chelsea Gallery Atelier",
    price: 6800000,
    priceFormatted: "$6,800,000",
    location: "New York, NY",
    address: "522 West 22nd Street, Ground Floor, New York, NY 10011",
    beds: 1,
    baths: 2,
    area: "4,200 Sq Ft",
    areaSqFt: 4200,
    builtYear: "2019",
    typology: "Commercial",
    purpose: "Buy",
    furnishing: "Unfurnished",
    status: "Ready to Move",
    amenities: ["24/7 Security"],
    tag: "Exclusive",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWdXJEmLfjU4buC0Ac03fkJdgTSfCCqFkL8tXdz_qf6RNjDk_yzybrpb-wrv7O1OB6TybmKWEh3dxy4LvtsnxTAByPWN8ou_iDgqJYJZ6ORh1pblkZ4OqXjDdIqIX_fOK3rpYBqmMqkTFDPsg7CIvvPOm_cNG0EanXyaQYlBqjfdTpZ3fE8P08R4ms9qWgd9skCCcvsMCWqCfZ82-iSd-mczbKp_Qq-SinDnyAlZUYIVGDex2dVIvd",
    description:
      "Monumental street-level gallery and architectural studio space in the heart of the Chelsea Arts District. Features 18-foot ceilings, polished white terrazzo floors, climate-humidity museum controls, and industrial drive-in loading bay.",
    highlights: [
      { icon: "store", title: "18-Foot Exhibition Ceilings", desc: "Supports monumental sculptures and grand canvas installations." },
      { icon: "local_shipping", title: "Private Freight Loading Dock", desc: "Roll-up motorized overhead steel door." },
      { icon: "thermostat", title: "Museum Class A Climate Control", desc: "Precision humidity and UV filtration system." },
    ],
    specs: [
      { label: "Zoning", value: "Commercial Arts / C6-3A" },
      { label: "Frontage", value: "38 Feet of Frameless Glass" },
      { label: "Listing Reference", value: "EST-33019" },
      { label: "Possession Status", value: "Immediate" },
    ],
    proximities: [
      { time: "1 min", place: "The High Line Park" },
      { time: "5 mins", place: "Hudson Yards" },
      { time: "8 mins", place: "Chelsea Market" },
    ],
    advisor: defaultAdvisor,
  },
  {
    id: "EST-55190",
    slug: "big-sur-horizon-crest-plot",
    title: "The Horizon Crest Parcel",
    price: 4200000,
    priceFormatted: "$4,200,000",
    location: "Big Sur, CA",
    address: "Highway 1, Mile Marker 42, Big Sur, CA 93920",
    beds: 0,
    baths: 0,
    area: "5.4 Acres",
    areaSqFt: 235224,
    lotSize: "5.4 Acres",
    builtYear: "N/A (Entitled Land)",
    typology: "Plot / Land",
    purpose: "Buy",
    furnishing: "Unfurnished",
    status: "Ready to Move",
    amenities: ["Private Garden", "24/7 Security"],
    tag: "Exclusive",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtLhmvwuEcrmhkOpLP2FvbP6KTwKmgXtV6Nvu1tw5rmEq_fzkCMzZNr6p-R9KVmYsprlbWXBRQkMTGBz_IkkjCeFCb9qfzsuwSYcALVB-iRgLW1OqSsxrrHN8n7_1bTXSgoWs5z1XU2ElLGp4vm3Xok8TokWhVx_k6UXBmt6AKuk_RnlrC1f4GaW44U9G0flosUG-IwuFzRC0fVrqtH5auDPprzGxomTemfYl6f6K4cdn6WZRRBl3_",
    description:
      "A once-in-a-generation oceanfront parcel perched 600 feet above the crashing Pacific surf in Big Sur. Fully permitted with approved California Coastal Commission blueprints by renowned modernist architect Olson Kundig.",
    highlights: [
      { icon: "landscape", title: "Approved Coastal Commission Permits", desc: "Rare 6,200 sq ft architectural residence entitlement in place." },
      { icon: "water_drop", title: "Private Natural Spring Water Rights", desc: "Deeded mountain spring producing clean potable mineral water." },
      { icon: "electric_bolt", title: "Underground Utilities Established", desc: "3-phase power and high-speed fiber conduits installed." },
    ],
    specs: [
      { label: "Parcel Size", value: "5.4 Deeded Acres" },
      { label: "Water Source", value: "Private Gravity-Fed Spring" },
      { label: "Listing Reference", value: "EST-55190" },
      { label: "Possession Status", value: "Immediate" },
    ],
    proximities: [
      { time: "5 mins", place: "Post Ranch Inn & Nepenthe" },
      { time: "35 mins", place: "Carmel-by-the-Sea" },
      { time: "45 mins", place: "Monterey Regional Airport" },
    ],
    advisor: defaultAdvisor,
  },
  {
    id: "EST-66281",
    slug: "mayfair-garden-suite",
    title: "The Mayfair Garden Residence",
    price: 2400000,
    priceFormatted: "$2,400,000",
    location: "Mayfair, London",
    address: "18 Mount Street, Mayfair, London W1K 2RN",
    beds: 1,
    baths: 1.5,
    area: "1,250 Sq Ft",
    areaSqFt: 1250,
    builtYear: "1895 (Renovated 2024)",
    typology: "Apartment",
    purpose: "Buy",
    furnishing: "Fully Furnished",
    status: "Ready to Move",
    amenities: ["Balcony / Terrace", "24/7 Security"],
    tag: "Just Listed",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuArX7-SAE2iW0eSCq_NOJKi0mZ20AbvkczuirbBb-NqA70vnXzEiYb1pftva65nEZp-l2wHjhFpj05T1zQnGWbY7pgWuUmS1yYyJJZDlvgzHUCGguYZ8G2k8KM9mfz6rLEPZOQUpDu7YznkV-0hxyvFqgLrRLRJyTATf7JnYessh1ra3sioV2HOG3KgOxNPdlOl7D5sqZB2nnV7BZDL6Vr2SRmxdv4aO7EdZDy4dOReY6pvPzfnAhZ2",
    description:
      "An immaculate 1-bedroom pied-à-terre on renowned Mount Street. Features high decorative cornicing, a bespoke English kitchen with Nero Marquina marble, and a secluded private walled garden courtyard.",
    highlights: [
      { icon: "yard", title: "Private Walled Garden", desc: "Rare Mayfair outdoor sanctuary with mature boxwood topiary." },
      { icon: "security", title: "Porter Service", desc: "Daytime concierge and video entry access." },
    ],
    specs: [
      { label: "Tenure", value: "Leasehold 120 Years Remaining" },
      { label: "Bedrooms", value: "1 Large Double Bedroom Suite" },
      { label: "Listing Reference", value: "EST-66281" },
    ],
    proximities: [
      { time: "1 min", place: "Mount Street Dining (Scott's, The Audley)" },
      { time: "5 mins", place: "Berkeley Square" },
    ],
    advisor: defaultAdvisor,
  },
  {
    id: "EST-77390",
    slug: "soho-cast-iron-loft",
    title: "SoHo Cast-Iron Loft",
    price: 4950000,
    priceFormatted: "$4,950,000",
    location: "New York, NY",
    address: "114 Prince Street, SoHo, New York, NY 10012",
    beds: 2,
    baths: 2,
    area: "2,400 Sq Ft",
    areaSqFt: 2400,
    builtYear: "1888 (Renovated 2023)",
    typology: "Apartment",
    purpose: "Buy",
    furnishing: "Semi-Furnished",
    status: "Ready to Move",
    amenities: ["Balcony / Terrace", "24/7 Security"],
    tag: "Featured",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2VE9ShYbEJnV63t40JJcnEWXlFGMIqFN0uVskiNYwXVog9VfHXel8GlbIK-qibYNm3mWam8YWfgfMm6uAB5iNJgKnW71MfFPkliMxNJ_NVr6FT-nHKtiHGYp9wbzspPsVaPJEyNxpbwYqI_Wng_lvSQt4oFORKIodimAKRf3zgfSFVfE80Mqlp0xmAvQg8kZb9Dzxrn1Q9SDe287xCQiREJ0oM5DzM7bsSayt43Ul6mkpd5eeIOvU",
    description:
      "Authentic SoHo artist's loft with original Corinthian fluted columns, 12-foot tin-pressed ceilings, bleached wide-plank Scandinavian pine floors, and oversized double-hung windows bathing the space in southern light.",
    highlights: [
      { icon: "architecture", title: "Historic Columns", desc: "Four load-bearing Corinthian cast-iron structural columns." },
      { icon: "wb_sunny", title: "Southern Exposure", desc: "Floods the master suite and living atelier with warm sunlight." },
    ],
    specs: [
      { label: "Maintenance", value: "$2,200 / month" },
      { label: "Building", value: "Co-op with Liberal Sublet Policy" },
      { label: "Listing Reference", value: "EST-77390" },
    ],
    proximities: [
      { time: "1 min", place: "Prince Street Boutiques" },
      { time: "4 mins", place: "Broadway-Lafayette Subway (B/D/F/M)" },
    ],
    advisor: defaultAdvisor,
  },
  {
    id: "EST-88401",
    slug: "zurich-goldcoast-villa",
    title: "Zurich Goldcoast Residence",
    price: 18500,
    priceFormatted: "$18,500 / mo",
    location: "Zurich, Switzerland",
    address: "Seestrasse 118, Küsnacht, Zurich, Switzerland",
    beds: 4,
    baths: 4.5,
    area: "4,600 Sq Ft",
    areaSqFt: 4600,
    lotSize: "0.45 Acres",
    builtYear: "2022",
    typology: "Modern Villa",
    purpose: "Rent",
    furnishing: "Fully Furnished",
    status: "Ready to Move",
    amenities: ["Parking", "Balcony / Terrace", "Private Garden", "Swimming Pool", "Private Gym", "24/7 Security"],
    tag: "Exclusive",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaC1nZcEAPHvs5xJmMq-Wu8SjSfsz9vSs2DHjtZOeNR4vH2AdGKSU52-yjrb9uB0NASSwr4795n60u6jawZkRbZr7LBN5p9y2B64zhIFsoVjSwvM8HTUziYqmIpbWNzd6vRQ_FC3PZNqjXi7y3BsGCKNbnorAm6wAu03bZ989qloKXRruou9r8vkBqjZJ73F11hciGAfSd5zKZPI68c_jjvDR44WY5hWijcfQwEfNihMxw_v2psYjK",
    description:
      "An elite contemporary villa situated on Zurich's famed Goldcoast in Küsnacht. Direct Lake Zurich views, private solar heated infinity pool, Swiss Minergie-P eco certification, and triple garage.",
    highlights: [
      { icon: "water", title: "Lake Zurich Panorama", desc: "Expansive terraces overlooking the Alps and lake waters." },
      { icon: "eco", title: "Swiss Minergie-P Certified", desc: "Zero-emission geothermal heating and high-efficiency solar battery array." },
    ],
    specs: [
      { label: "Lease", value: "Minimum 12 Months" },
      { label: "Listing Reference", value: "EST-88401" },
      { label: "Possession Status", value: "Available Now" },
    ],
    proximities: [
      { time: "10 mins", place: "Zurich Paradeplatz Banking Center" },
      { time: "20 mins", place: "Zurich Airport (ZRH)" },
    ],
    advisor: defaultAdvisor,
  },
  {
    id: "EST-99512",
    slug: "brentwood-park-estate",
    title: "Brentwood Park Architectural Manor",
    price: 16800000,
    priceFormatted: "$16,800,000",
    location: "Brentwood, Los Angeles",
    address: "480 Moreno Avenue, Brentwood, Los Angeles, CA 90049",
    beds: 6,
    baths: 8,
    area: "9,100 Sq Ft",
    areaSqFt: 9100,
    lotSize: "1.1 Acres",
    builtYear: "2023",
    typology: "Architectural Estate",
    purpose: "Buy",
    furnishing: "Fully Furnished",
    status: "Under Construction",
    amenities: ["Parking", "Balcony / Terrace", "Private Garden", "Swimming Pool", "Private Gym", "24/7 Security"],
    tag: "New Listing",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1lDgsVRbIREAyN1sSnujmCmBPiaMJj2oe7OKwn_y2_kSXj7QQoAhFeYftVnHbtOTNRhJ5HM8iRs_Mag-MoNsz0a_X7eermPo4D8qmpLgZFMz0-xtkiJs8tr14JtGVPtZgbzTgb73pAFS1uf2H6rNOGW6-89O7uf3Xqu8EmO7YFGEaFmhq_VqXTmvoxhLz2RsaxlsK4zj9e5phsOVMnOiSRooK4Bj_MFxIJ7bf4XEUhVVomcdWZSbX",
    description:
      "Situated in prestigious Brentwood Park, this modern Italianate architectural estate showcases honed limestone colonnades, courtyard water fountains, an Olympic-length swimming pool, and guest pavilion.",
    highlights: [
      { icon: "pool", title: "Olympic Length Pool", desc: "82-foot private swimming corridor framed by olive trees." },
      { icon: "sports_tennis", title: "Championship Tennis Court", desc: "Full regulation north-south oriented tennis court." },
    ],
    specs: [
      { label: "Status", value: "Finishing Details in Progress (Q4 2026)" },
      { label: "Listing Reference", value: "EST-99512" },
      { label: "Zoning", value: "LA-RE11" },
    ],
    proximities: [
      { time: "5 mins", place: "Brentwood Country Mart" },
      { time: "10 mins", place: "Santa Monica Pier" },
    ],
    advisor: defaultAdvisor,
  },
  {
    id: "EST-33180",
    slug: "the-aspen-mountain-chalet",
    title: "The Aspen Mountain Sanctuary",
    price: 19500000,
    priceFormatted: "$19,500,000",
    location: "Aspen, Colorado",
    address: "720 Red Mountain Road, Aspen, CO 81611",
    beds: 6,
    baths: 7,
    area: "8,200 Sq Ft",
    areaSqFt: 8200,
    lotSize: "2.4 Acres",
    builtYear: "2022",
    typology: "Architectural Estate",
    purpose: "Buy",
    furnishing: "Fully Furnished",
    status: "Ready to Move",
    amenities: ["Parking", "Balcony / Terrace", "Private Garden", "Swimming Pool", "Private Gym", "24/7 Security"],
    tag: "Exclusive",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaC1nZcEAPHvs5xJmMq-Wu8SjSfsz9vSs2DHjtZOeNR4vH2AdGKSU52-yjrb9uB0NASSwr4795n60u6jawZkRbZr7LBN5p9y2B64zhIFsoVjSwvM8HTUziYqmIpbWNzd6vRQ_FC3PZNqjXi7y3BsGCKNbnorAm6wAu03bZ989qloKXRruou9r8vkBqjZJ73F11hciGAfSd5zKZPI68c_jjvDR44WY5hWijcfQwEfNihMxw_v2psYjK",
    subImages: [
      {
        title: "Great Room",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuArX7-SAE2iW0eSCq_NOJKi0mZ20AbvkczuirbBb-NqA70vnXzEiYb1pftva65nEZp-l2wHjhFpj05T1zQnGWbY7pgWuUmS1yYyJJZDlvgzHUCGguYZ8G2k8KM9mfz6rLEPZOQUpDu7YznkV-0hxyvFqgLrRLRJyTATf7JnYessh1ra3sioV2HOG3KgOxNPdlOl7D5sqZB2nnV7BZDL6Vr2SRmxdv4aO7EdZDy4dOReY6pvPzfnAhZ2",
      },
      {
        title: "Heated Terrace & Fireplace",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDASj8F03nThB-DVQtL05R0CGYpdZL0sghlKgpE0-LwOpeFiwUMNv1nc95UCJTA09h-26Kzn7h8PC8mgEQjx_2McpLdwrIIalebRBRoCEd_sbCJDWa7Sh_E1_4AufKUn6u334dMusyBvXqgaqGadFFmZV7rd4c5UVeTUzgosBR8eWUuDoxbY2S1qdz_e6ML0CG_vBwHN-JLeYR79KevG5uOf3-d4k0CoNthL_-EKkTxIDlGfaHqqlrP",
      },
    ],
    description:
      "Perched atop prestigious Red Mountain, this alpine sanctuary features cedar trusses, floor-to-ceiling glass capturing panoramic views of Ajax Mountain, private ski locker room, and outdoor heated hydrotherapy pool.",
    highlights: [
      { icon: "downhill_skiing", title: "Direct Ski Access", desc: "Private heated ski locker room with boot warmers and direct mountain trail access." },
      { icon: "hot_tub", title: "Heated Alpine Spa", desc: "Custom stainless steel outdoor hot tub overlooking the Continental Divide." },
    ],
    specs: [
      { label: "Furnishing", value: "Fully Furnished with Custom Holly Hunt & B&B Italia Collections" },
      { label: "Listing Reference", value: "EST-33180" },
      { label: "Possession Status", value: "Immediate" },
    ],
    proximities: [
      { time: "4 mins", place: "Aspen Downtown Historic Core" },
      { time: "12 mins", place: "Aspen Pitkin County Airport (ASE)" },
    ],
    advisor: defaultAdvisor,
  },
  {
    id: "EST-44290",
    slug: "mayfair-georgian-townhouse",
    title: "Mayfair Grade II Georgian Townhouse",
    price: 12800000,
    priceFormatted: "$12,800,000",
    location: "Mayfair, London",
    address: "14 Chesterfield Hill, Mayfair, London W1J 5BQ",
    beds: 5,
    baths: 5,
    area: "6,100 Sq Ft",
    areaSqFt: 6100,
    lotSize: "0.15 Acres",
    builtYear: "1785 (Restored 2024)",
    typology: "Independent House",
    purpose: "Buy",
    furnishing: "Fully Furnished",
    status: "Ready to Move",
    amenities: ["Parking", "Balcony / Terrace", "Private Garden", "Swimming Pool", "Private Gym", "24/7 Security"],
    tag: "Featured",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDASj8F03nThB-DVQtL05R0CGYpdZL0sghlKgpE0-LwOpeFiwUMNv1nc95UCJTA09h-26Kzn7h8PC8mgEQjx_2McpLdwrIIalebRBRoCEd_sbCJDWa7Sh_E1_4AufKUn6u334dMusyBvXqgaqGadFFmZV7rd4c5UVeTUzgosBR8eWUuDoxbY2S1qdz_e6ML0CG_vBwHN-JLeYR79KevG5uOf3-d4k0CoNthL_-EKkTxIDlGfaHqqlrP",
    description:
      "A rare Grade II listed five-story Georgian townhouse in the heart of Mayfair, boasting restored plaster cornicing, a private passenger elevator, subterranean wellness spa with vitality pool, and private courtyard garden.",
    highlights: [
      { icon: "elevator", title: "Private Passenger Lift", desc: "Discreet elevator serving all five levels from basement spa to roof terrace." },
      { icon: "spa", title: "Subterranean Wellness Suite", desc: "Vitality plunge pool, sauna, steam shower, and dedicated fitness salon." },
    ],
    specs: [
      { label: "Heritage Status", value: "Grade II Listed Architectural Conservation" },
      { label: "Listing Reference", value: "EST-44290" },
      { label: "Tenure", value: "Freehold" },
    ],
    proximities: [
      { time: "3 mins", place: "Berkeley Square & Annabel's" },
      { time: "6 mins", place: "Hyde Park Corner" },
    ],
    advisor: defaultAdvisor,
  },
  {
    id: "EST-55301",
    slug: "beverly-hills-trousdale-pavilion",
    title: "Trousdale Mid-Century Modern Pavilion",
    price: 45000,
    priceFormatted: "$45,000 / mo",
    location: "Trousdale Estates, Beverly Hills",
    address: "1230 Loma Linda Drive, Beverly Hills, CA 90210",
    beds: 4,
    baths: 5,
    area: "5,600 Sq Ft",
    areaSqFt: 5600,
    lotSize: "0.65 Acres",
    builtYear: "1964 (Renovated 2024)",
    typology: "Modern Villa",
    purpose: "Rent",
    furnishing: "Fully Furnished",
    status: "Ready to Move",
    amenities: ["Parking", "Balcony / Terrace", "Private Garden", "Swimming Pool", "24/7 Security"],
    tag: "Just Listed",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQdjGst_e_JMNZOvbO33Yf1HXZQZ2ZxkXxHdd6S2Hg9GLJOlefAA_HjIEjg0ZpomPUyUe4SsNC-AZfNvybo2VFCQ4v-fzcf3vnocsafgg__RC7FLJ6_KJc8E7d9zINidGyX45UGVfYg2NHk0Q0xPK6BOQgLqkWd6e4N0ABY8sf4IHxw-mRK-jDDJKD2c7deEVW95q0t05exQLaMgy0hdlZ8hE71wLZ9TvFryU9mBEeHEKqB5OcMu_L",
    description:
      "Showcasing quintessential Trousdale architectural purity, this single-level post-and-beam pavilion features terrazzo floors, zero-edge pool overlooking the LA basin, and bespoke vintage furniture.",
    highlights: [
      { icon: "visibility", title: "Jetliner City Views", desc: "180-degree unobstructed panoramas from Downtown Los Angeles to the Pacific Ocean." },
      { icon: "pool", title: "Zero-Edge Terrazzo Pool", desc: "Architectural pool integrated seamlessly into the living room vista." },
    ],
    specs: [
      { label: "Lease Terms", value: "12-Month Minimum Confidential Lease" },
      { label: "Listing Reference", value: "EST-55301" },
    ],
    proximities: [
      { time: "5 mins", place: "The Beverly Hills Hotel" },
      { time: "15 mins", place: "Rodeo Drive Boutiques" },
    ],
    advisor: defaultAdvisor,
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}
