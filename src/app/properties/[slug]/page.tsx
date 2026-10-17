import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { properties, getPropertyBySlug, defaultAdvisor } from "@/data/properties";
import { WalkthroughForm } from "@/components/sections/walkthrough-form";
import { PropertyDetailActions } from "@/components/sections/property-detail-actions";

interface PropertyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return properties.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return {
      title: "Residence Not Found",
    };
  }

  const city = property.location.split(",")[0].trim();
  const rawWithCity = `${property.title} — ${city}`;
  const pageTitle = rawWithCity.length <= 50 ? rawWithCity : (property.title.length <= 52 ? property.title : `${property.title.slice(0, 49)}...`);

  return {
    title: pageTitle,
    description: property.description.slice(0, 155),
    openGraph: {
      title: `${property.title} | ${property.priceFormatted}`,
      description: property.description.slice(0, 155),
      images: [property.image],
    },
  };
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const otherProperties = properties.filter((p) => p.slug !== property.slug).slice(0, 2);

  const defaultHighlights = [
    { icon: "architecture", title: "Architectural Integrity", desc: "Rigorous historical, material, and structural provenance verified." },
    { icon: "wb_sunny", title: "Optimized Light Exposures", desc: "Designed to capture natural circadian daylight orientation." },
    { icon: "security", title: "Secure Private Access", desc: "Gated entry with advanced biometric perimeter monitoring." },
    { icon: "spa", title: "Wellness & Spa Wing", desc: "Private steam room, soaking tub, and outdoor meditation terrace." },
  ];

  const highlights = property.highlights || defaultHighlights;

  const defaultSpecs = [
    { label: "Furnishing", value: property.furnishing },
    { label: "Possession Status", value: property.status },
    { label: "Interior Area", value: property.area },
    { label: "Bedrooms & Baths", value: `${property.beds} Bedrooms · ${property.baths} Bathrooms` },
    { label: "Listing Reference", value: property.id },
  ];

  const specs = property.specs || defaultSpecs;

  const defaultProximities = [
    { time: "5 mins", place: "Local Cultural Arts District" },
    { time: "12 mins", place: "Private Aviation Terminal" },
    { time: "15 mins", place: "Michelin Dining Corridor" },
    { time: "25 mins", place: "International Airport" },
  ];

  const proximities = property.proximities || defaultProximities;

  return (
    <div className="w-full">
      {/* 1. Breadcrumbs */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-4">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-label-caps font-label-caps text-on-surface-variant uppercase"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="text-outline-variant">/</span>
          <Link href="/properties/" className="hover:text-primary transition-colors">
            Properties
          </Link>
          <span className="text-outline-variant">/</span>
          <span className="text-primary font-semibold truncate">{property.title}</span>
        </nav>
      </section>

      {/* 2. Header Bar */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-outline-variant/40">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-label-caps font-label-caps uppercase bg-[#202522] text-[#FAF9F5] dark:bg-[#F2F1EC] dark:text-[#111412]">
                {property.status}
              </span>
              <span className="px-2.5 py-0.5 rounded text-label-caps font-label-caps uppercase bg-secondary-container text-on-secondary-container">
                {property.tag}
              </span>
              <span className="px-2.5 py-0.5 rounded text-label-caps font-label-caps uppercase bg-surface-container text-primary border border-outline-variant/50">
                {property.typology}
              </span>
            </div>
            <h1 className="text-display-hero-mobile sm:text-headline-xl font-headline-xl text-primary tracking-tight mb-2">
              {property.title}
            </h1>
            <p className="text-body-md font-body-md text-on-surface-variant flex items-center gap-1.5">
              <span className="material-symbols-outlined text-outline text-[18px]">location_on</span>
              <span>{property.address}</span>
            </p>
          </div>

          <div className="flex flex-col items-start sm:items-end justify-between sm:justify-center gap-3">
            <div className="text-left sm:text-right">
              <span className="text-display-hero-mobile sm:text-headline-xl font-headline-xl font-bold text-primary block">
                {property.priceFormatted}
              </span>
              <span className="text-label-caps font-label-caps text-outline uppercase tracking-wider block mt-0.5">
                {property.id} · Sole Agency
              </span>
            </div>
            <PropertyDetailActions propertyId={property.id} propertyTitle={property.title} />
          </div>
        </div>
      </section>

      {/* 3. Multi-Image Gallery */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 rounded-xl overflow-hidden">
          {/* Large Primary Hero Image (7 Cols) */}
          <div className="lg:col-span-7 relative h-[360px] sm:h-[480px] lg:h-[560px] overflow-hidden group bg-surface-container">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-primary-container/80 backdrop-blur-md px-3.5 py-1.5 rounded text-surface text-label-caps font-label-caps uppercase tracking-wider">
              Primary Facade &amp; Grounds
            </div>
          </div>

          {/* 2x2 Sub-gallery Grid (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 h-[360px] sm:h-[480px] lg:h-[560px]">
            {property.subImages && property.subImages.length > 0 ? (
              property.subImages.slice(0, 4).map((sub, i) => (
                <div key={i} className="relative overflow-hidden group bg-surface-container">
                  <img
                    src={sub.url}
                    alt={sub.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute bottom-2.5 left-2.5 bg-primary/70 backdrop-blur-sm text-surface text-[0.625rem] font-label-caps px-2 py-0.5 rounded uppercase">
                    {sub.title}
                  </span>
                </div>
              ))
            ) : (
              <>
                <div className="relative overflow-hidden group bg-surface-container">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmDMeM1ZcL1YPTmj4gZi9sg8U0RkvHSeE5BodglKL4CEJs_WEqX7Cu-I8X-sFXAMQrYV50rHdayGRdiTrRP-O3_3-BrUSwaa18xl0LGK7X1DukmEtxtEc1AB8ctrm_KQ6HFbSEec7Vb9QLHmnLUOnnwqCsewPoPbTZey2a08p0wvn7ANKUNga-p1zhErVL6ZYeN42yEbFl6asQuS7bNQYbueVLxm2TsT8HAdqTGHQwci313T15fn-L"
                    alt="Interior Salon"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2.5 left-2.5 bg-primary/70 backdrop-blur-sm text-surface text-[0.625rem] font-label-caps px-2 py-0.5 rounded uppercase">
                    Interior Salon
                  </span>
                </div>
                <div className="relative overflow-hidden group bg-surface-container">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjdCf7LHvzD_j5azlZ7xrp3Kebv-twAnWfk7xFkx3D0KY6b6WslJeRoe9Szgz-0aslAK7K-6i0uwfcL2RVoAs2ssCPhdZHemRX07KtysQ4Sgc_llN-sJF5-zHLu_q8Mozw8OOQGCQC_UFOPyEMOpAAitTy84ZOIK1Ggd5Wzc62HuFJYHysHB16W-trmfTn5CDXThaYiTJVUTNolVO6QSSwqon_25OBCP3rbnSNk3QEHpYHalhav3HE"
                    alt="Master Suite"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2.5 left-2.5 bg-primary/70 backdrop-blur-sm text-surface text-[0.625rem] font-label-caps px-2 py-0.5 rounded uppercase">
                    Master Suite
                  </span>
                </div>
                <div className="relative overflow-hidden group bg-surface-container">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuIJfnIO9esmilhzjocou7ozFOmwWUYkdHiz6M8MNBtyykUwX7UivkS2wTgKzyIX03DS0KCTvsg9xXe4OaGeFHjbv8IaTCpE2T_RTNdqUVH1MeaaVCrLtYU10s1rtQa44fT6XYRsWYjvUaL_TxnVEYk1ODcuCsXmMHSPlvAsrM5LwUTDQiNYVufCojrCGM7VVqn0qXuYyNRpgLheiulOOU7mwCSIkr_Pi81-Pqk3oqxzX_9dEEypJC"
                    alt="Private Cellar"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2.5 left-2.5 bg-primary/70 backdrop-blur-sm text-surface text-[0.625rem] font-label-caps px-2 py-0.5 rounded uppercase">
                    Private Cellar
                  </span>
                </div>
                <div className="relative overflow-hidden group bg-surface-container">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCacYucgsaNBKiRZlcc-7wzWkvoBdhxigNi0raB5bnyK5NghrzJlcJ3MUlvJEO5ujEFgpWKHBLHGhrEX0fMtlekdAylO0nKB8rYRXQQ-LCv5cpEeXC3xruR4M7pPfWzpQMWhQ4Za7pHtRnlzKY-NgURfehSK4GMG3v7YV2XdbO_muk3V-mEag_LnrVLw2aa8vvqPoCvFGc1Ylel87PARe1HHKC6X37swZ9g_wj6gzEY6yoGF0Mdq1-S"
                    alt="Sunset Pavilion"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2.5 left-2.5 bg-primary/70 backdrop-blur-sm text-surface text-[0.625rem] font-label-caps px-2 py-0.5 rounded uppercase">
                    Sunset Pavilion
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 4. Two-Column Main Layout */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT / MAIN CONTENT (~68% width) */}
          <div className="lg:col-span-8 flex flex-col space-y-12">
            {/* Overview Specs Bar */}
            <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-6 shadow-sm">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-outline-variant/40">
                <div className="pt-2 sm:pt-0">
                  <span className="block text-label-caps font-label-caps text-outline uppercase tracking-wider mb-1">
                    Bedrooms
                  </span>
                  <span className="text-headline-sm font-headline-sm text-primary font-semibold">
                    {property.beds > 0 ? `${property.beds} Beds` : "Land"}
                  </span>
                </div>
                <div className="pt-2 sm:pt-0 sm:pl-4">
                  <span className="block text-label-caps font-label-caps text-outline uppercase tracking-wider mb-1">
                    Bathrooms
                  </span>
                  <span className="text-headline-sm font-headline-sm text-primary font-semibold">
                    {property.baths > 0 ? `${property.baths} Baths` : "Enclave"}
                  </span>
                </div>
                <div className="pt-2 sm:pt-0 sm:pl-4">
                  <span className="block text-label-caps font-label-caps text-outline uppercase tracking-wider mb-1">
                    Interior
                  </span>
                  <span className="text-headline-sm font-headline-sm text-primary font-semibold">
                    {property.area}
                  </span>
                </div>
                <div className="pt-2 sm:pt-0 sm:pl-4">
                  <span className="block text-label-caps font-label-caps text-outline uppercase tracking-wider mb-1">
                    Lot Size
                  </span>
                  <span className="text-headline-sm font-headline-sm text-primary font-semibold">
                    {property.lotSize || "N/A"}
                  </span>
                </div>
                <div className="pt-2 sm:pt-0 sm:pl-4">
                  <span className="block text-label-caps font-label-caps text-outline uppercase tracking-wider mb-1">
                    Built
                  </span>
                  <span className="text-headline-sm font-headline-sm text-primary font-semibold">
                    {property.builtYear || "2023"}
                  </span>
                </div>
                <div className="pt-2 sm:pt-0 sm:pl-4">
                  <span className="block text-label-caps font-label-caps text-outline uppercase tracking-wider mb-1">
                    Typology
                  </span>
                  <span className="text-headline-sm font-headline-sm text-primary font-semibold">
                    {property.typology}
                  </span>
                </div>
              </div>
            </div>

            {/* About This Residence */}
            <div className="space-y-4">
              <h2 className="text-headline-lg font-headline-lg text-primary tracking-tight">
                About This Residence
              </h2>
              <div className="space-y-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                <p>{property.description}</p>
                <p>
                  Every dimension of this residence has been tailored for seamless living and entertaining. The materials palette honors authentic architectural textures: hand-poured concrete reveals, natural stone pavers, floor-to-ceiling insulated glass enclosures, and bespoke cabinetry integrated with precision European appliances.
                </p>
                <p>
                  The orientation celebrates natural daylight rhythms, creating effortless transitions between calm interior galleries and outdoor landscaped terraces with panoramic vistas.
                </p>
              </div>
            </div>

            {/* Curated Features & Amenities */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-outline-variant/50 pb-3">
                <h2 className="text-headline-lg font-headline-lg text-primary tracking-tight">
                  Curated Features &amp; Amenities
                </h2>
                <span className="text-label-caps font-label-caps uppercase tracking-wider text-outline">
                  {highlights.length} Architectural Highlights
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((h) => (
                  <div
                    key={h.title}
                    className="flex items-start gap-4 p-4 rounded-xl border border-outline-variant/60 bg-surface-container-lowest hover:border-primary transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary flex-shrink-0">
                      <span className="material-symbols-outlined">{h.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-[1.05rem] text-primary mb-1">
                        {h.title}
                      </h3>
                      <p className="text-body-sm font-body-sm text-on-surface-variant">
                        {h.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Specifications Table */}
            <div className="space-y-4">
              <h2 className="text-headline-lg font-headline-lg text-primary tracking-tight">
                Architectural Specifications
              </h2>
              <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl overflow-hidden shadow-sm">
                <div className="divide-y divide-outline-variant/40">
                  {specs.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 px-6 hover:bg-surface-container-low transition-colors"
                    >
                      <span className="text-label-caps font-label-caps text-outline uppercase tracking-wider sm:w-1/3">
                        {item.label}
                      </span>
                      <span className="font-body-md text-body-md text-primary font-medium sm:w-2/3">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Architectural Floor Plan Preview */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-headline-lg font-headline-lg text-primary tracking-tight">
                    Architectural Measured Documentation
                  </h2>
                  <p className="text-body-sm font-body-sm text-outline">
                    Measured layout documentation, CAD files, and spatial flow.
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-label-lg font-label-lg text-primary cursor-pointer hover:text-secondary underline underline-offset-4 transition-colors">
                  <span className="material-symbols-outlined text-lg">download</span>
                  Download Blueprint Documentation (PDF)
                </span>
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-6 shadow-sm">
                <div className="relative bg-surface border border-dashed border-outline-variant rounded-lg p-8 flex flex-col items-center justify-center min-h-[260px]">
                  <div className="w-full max-w-md p-6 bg-surface-container-lowest border border-outline-variant/50 rounded shadow-sm text-center">
                    <span className="material-symbols-outlined text-4xl text-outline mb-3">
                      architecture
                    </span>
                    <h4 className="font-headline-sm text-primary mb-1">
                      {property.title} Schematic Layout
                    </h4>
                    <p className="text-body-sm font-body-sm text-on-surface-variant mb-4">
                      Complete architectural blueprint, elevations, structural spans, and landscape orientation schematics.
                    </p>
                    <div className="inline-flex items-center gap-2 text-label-caps font-label-caps uppercase text-secondary tracking-wider font-semibold">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      Deeded Architectural Archive #{property.id}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Neighborhood */}
            <div className="space-y-4">
              <h2 className="text-headline-lg font-headline-lg text-primary tracking-tight">
                Location &amp; Neighborhood
              </h2>
              <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-64 bg-surface-container flex items-center justify-center border-b border-outline-variant/40 overflow-hidden">
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#747874_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-[#202522] text-[#FAF9F5] dark:bg-[#F2F1EC] dark:text-[#111412] px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#E4C896]" />
                      <span className="text-label-caps font-label-caps font-semibold uppercase tracking-wider text-[#FAF9F5] dark:text-[#111412]">
                        {property.address}
                      </span>
                    </div>
                    <div className="w-4 h-4 bg-[#202522] dark:bg-[#F2F1EC] rotate-45 -mt-2" />
                  </div>
                  <div className="absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded border border-outline-variant/40 text-label-caps font-label-caps uppercase text-primary">
                    {property.location} · Private Enclave
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-label-caps font-label-caps uppercase tracking-wider text-outline mb-4">
                    Curated Travel Proximities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {proximities.map((item) => (
                      <div key={item.place} className="p-3 bg-surface rounded border border-outline-variant/40">
                        <span className="block text-headline-sm font-headline-sm text-primary font-semibold">
                          {item.time}
                        </span>
                        <span className="text-body-sm font-body-sm text-on-surface-variant">
                          {item.place}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Similar Curated Properties */}
            <div className="space-y-6 pt-4 border-t border-outline-variant/50">
              <div className="flex items-center justify-between">
                <h2 className="text-headline-lg font-headline-lg text-primary tracking-tight">
                  Similar Curated Residences
                </h2>
                <Link
                  href="/properties/"
                  className="text-label-lg font-label-lg text-primary hover:text-secondary underline underline-offset-4 transition-colors"
                >
                  View All Listings
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {otherProperties.map((other) => (
                  <div
                    key={other.id}
                    className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl overflow-hidden group hover:border-primary transition-all duration-300"
                  >
                    <div className="relative h-60 overflow-hidden bg-surface-container">
                      <Link href={`/properties/${other.slug}/`}>
                        <img
                          src={other.image}
                          alt={other.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </Link>
                      <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded text-white text-label-caps font-label-caps uppercase">
                        {other.location}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-headline-sm font-headline-sm text-primary font-semibold mb-1">
                        {other.priceFormatted}
                      </div>
                      <Link href={`/properties/${other.slug}/`}>
                        <h3 className="font-headline-sm text-[1.125rem] text-primary mb-1 hover:text-secondary transition-colors">
                          {other.title}
                        </h3>
                      </Link>
                      <p className="text-body-sm font-body-sm text-on-surface-variant mb-4">
                        {other.address}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-outline-variant/40 text-body-sm font-body-sm text-outline">
                        <span>{other.beds > 0 ? `${other.beds} Beds` : "Land"}</span>
                        <span>{other.area}</span>
                        <Link
                          href={`/properties/${other.slug}/`}
                          className="text-primary font-semibold hover:text-secondary transition-colors"
                        >
                          View Details →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR COLUMN (~32% width) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="bg-surface-container-lowest border border-outline-variant/80 rounded-xl p-6 sm:p-7 shadow-[0_8px_24px_-4px_rgba(32,37,34,0.06)]">
                <div className="border-b border-outline-variant/40 pb-5 mb-5">
                  <span className="text-label-caps font-label-caps uppercase tracking-wider text-secondary font-semibold block mb-1">
                    Private Advisory
                  </span>
                  <h2 className="text-headline-sm font-headline-sm text-primary font-semibold">
                    Interested in This Residence?
                  </h2>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                    Inquire confidentially or arrange a private walkthrough with our architectural partner.
                  </p>
                </div>

                {/* Lead Advisor Block */}
                <div className="flex items-center gap-3.5 p-3.5 bg-surface rounded-lg border border-outline-variant/50 mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-surface-container">
                    <img
                      src={property.advisor?.image || defaultAdvisor.image}
                      alt={property.advisor?.name || defaultAdvisor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="font-headline-sm text-[0.9375rem] text-primary font-semibold truncate">
                      {property.advisor?.name || defaultAdvisor.name}
                    </h4>
                    <p className="text-body-sm font-body-sm text-outline text-xs truncate">
                      {property.advisor?.title || defaultAdvisor.title}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5 text-xs text-primary font-medium">
                      <a
                        href={`mailto:${property.advisor?.email || defaultAdvisor.email}`}
                        className="hover:text-secondary transition-colors truncate"
                      >
                        {property.advisor?.email || defaultAdvisor.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Walkthrough Form for this specific property */}
                <WalkthroughForm propertyTitle={property.title} />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
