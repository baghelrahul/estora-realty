import type { Metadata } from "next";
import Link from "next/link";
import { WalkthroughForm } from "@/components/sections/walkthrough-form";
import { PropertyDetailActions } from "@/components/sections/property-detail-actions";

export const metadata: Metadata = {
  title: "The Bel-Air Glass Pavilion — 1048 Stradella Road",
  description:
    "Explore The Bel-Air Glass Pavilion in Los Angeles: an 8,420 sq ft modernist architectural marvel featuring infinity pool, screening room, and wine cellar.",
};

export default function PropertyDetailsPage() {
  const specs = [
    { label: "Furnishing", value: "Designer Staged, Available Furnished with Curated Collector Pieces" },
    { label: "Elevation / Floors", value: "2 Discrete Architectural Levels with Custom Glass Elevator" },
    { label: "Parking Capacity", value: "4 Covered Gallery Spaces + 6 Private Motor Court Stalls" },
    { label: "Listing Reference", value: "EST-94021" },
    { label: "Possession Status", value: "Immediate Close of Escrow" },
    { label: "Zoning & Jurisdiction", value: "Single Family Estate (LA-RE20)" },
  ];

  const highlights = [
    {
      icon: "pool",
      title: "Infinity Pool & Spa",
      desc: "75-foot cantilevered black-quartz infinity basin with integrated 12-person sunken hydrotherapy spa.",
    },
    {
      icon: "theaters",
      title: "Private Screening Room",
      desc: "Acoustically tuned tier-seated private theater with 4K laser projection and Dolby Atmos architectural sound.",
    },
    {
      icon: "wine_bar",
      title: "Architectural Wine Room",
      desc: "800-bottle dual-zone climate-controlled glass vitrine with custom steel cradle displays and tasting ledge.",
    },
    {
      icon: "settings_remote",
      title: "Smart Home Automation",
      desc: "Full Crestron Home ecosystem controlling climate, circadian lighting arrays, audio zones, and motorized shades.",
    },
    {
      icon: "countertops",
      title: "Miele & Gaggenau Kitchen",
      desc: "Dual induction ranges, integrated steam ovens, custom wine refrigeration, and concealed back prep galley.",
    },
    {
      icon: "garage",
      title: "Motor Court & 4-Car Garage",
      desc: "Private gated decomposed granite arrival court parking 6 vehicles plus high-ceilinged 4-car climate gallery.",
    },
    {
      icon: "bathtub",
      title: "Primary Spa Retreat",
      desc: "Dual walk-in rain showers, monolithic soaking tub with skyline views, and bespoke Poliform dressing chambers.",
    },
    {
      icon: "security",
      title: "Gated Security Enclave",
      desc: "Comprehensive perimeter infrared boundary detection, biometric security access, and private guard liaison.",
    },
  ];

  const proximities = [
    { time: "4 mins", place: "Bel-Air Country Club" },
    { time: "12 mins", place: "Rodeo Drive, Beverly Hills" },
    { time: "10 mins", place: "UCLA Medical Center" },
    { time: "22 mins", place: "LAX Private Aviation Terminal" },
  ];

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
          <span className="text-primary font-semibold truncate">
            The Bel-Air Glass Pavilion
          </span>
        </nav>
      </section>

      {/* 2. Header Bar */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-outline-variant/40">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-label-caps font-label-caps uppercase bg-primary-container text-surface">
                Available
              </span>
              <span className="px-2.5 py-0.5 rounded text-label-caps font-label-caps uppercase bg-secondary-container text-on-secondary-container">
                Featured Residence
              </span>
            </div>
            <h1 className="text-display-hero-mobile sm:text-headline-xl font-headline-xl text-primary tracking-tight mb-2">
              The Bel-Air Glass Pavilion
            </h1>
            <p className="text-body-md font-body-md text-on-surface-variant flex items-center gap-1.5">
              <span className="material-symbols-outlined text-outline text-[18px]">location_on</span>
              <span>1048 Stradella Road, Bel-Air, Los Angeles, CA 90077</span>
            </p>
          </div>

          <div className="flex flex-col items-start sm:items-end justify-between sm:justify-center gap-3">
            <div className="text-left sm:text-right">
              <span className="text-display-hero-mobile sm:text-headline-xl font-headline-xl font-bold text-primary block">
                $8,750,000
              </span>
              <span className="text-label-caps font-label-caps text-outline uppercase tracking-wider block mt-0.5">
                EST-94021 · Sole Agency
              </span>
            </div>
            <PropertyDetailActions propertyId="EST-94021" propertyTitle="The Bel-Air Glass Pavilion" />
          </div>
        </div>
      </section>

      {/* 3. Multi-Image Gallery */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 rounded-xl overflow-hidden">
          {/* Large Primary Hero Image (7 Cols) */}
          <div className="lg:col-span-7 relative h-[360px] sm:h-[480px] lg:h-[560px] overflow-hidden group bg-surface-container">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxHgTsOqKcLKan1tnvPvei7JlxGTjgXdHWjJ5-dNSv2Ktm7yHe_fb6e41kWN4ydweh4hYjypjKv3RT0tEN83AZ_Ufr6SKXfy2gyGDe7JxXQI7fcn8eAt7J9h0u1NsKLCVV3DKb6SP8Xm0_VPRZiUbFlCHWTqZzALGTD3ftKin4V02SJgcbsLYLkJfY7opnvI86_cYoT_knkHwlxSCm7DuLZJVM6JSVlqUMgZWEwDYLNgXW1bHAbS05"
              alt="The Bel-Air Glass Pavilion Primary Residence & Pool Terrace"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-primary-container/80 backdrop-blur-md px-3.5 py-1.5 rounded text-surface text-label-caps font-label-caps uppercase tracking-wider">
              Primary Residence &amp; Pool Terrace
            </div>
          </div>

          {/* 2x2 Sub-gallery Grid (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 h-[360px] sm:h-[480px] lg:h-[560px]">
            {/* Detail 1: Living Pavilion */}
            <div className="relative overflow-hidden group bg-surface-container">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmDMeM1ZcL1YPTmj4gZi9sg8U0RkvHSeE5BodglKL4CEJs_WEqX7Cu-I8X-sFXAMQrYV50rHdayGRdiTrRP-O3_3-BrUSwaa18xl0LGK7X1DukmEtxtEc1AB8ctrm_KQ6HFbSEec7Vb9QLHmnLUOnnwqCsewPoPbTZey2a08p0wvn7ANKUNga-p1zhErVL6ZYeN42yEbFl6asQuS7bNQYbueVLxm2TsT8HAdqTGHQwci313T15fn-L"
                alt="Living Pavilion"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute bottom-2.5 left-2.5 bg-primary/70 backdrop-blur-sm text-surface text-[0.625rem] font-label-caps px-2 py-0.5 rounded uppercase">
                Living Pavilion
              </span>
            </div>

            {/* Detail 2: Master Suite */}
            <div className="relative overflow-hidden group bg-surface-container">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjdCf7LHvzD_j5azlZ7xrp3Kebv-twAnWfk7xFkx3D0KY6b6WslJeRoe9Szgz-0aslAK7K-6i0uwfcL2RVoAs2ssCPhdZHemRX07KtysQ4Sgc_llN-sJF5-zHLu_q8Mozw8OOQGCQC_UFOPyEMOpAAitTy84ZOIK1Ggd5Wzc62HuFJYHysHB16W-trmfTn5CDXThaYiTJVUTNolVO6QSSwqon_25OBCP3rbnSNk3QEHpYHalhav3HE"
                alt="Master Suite"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute bottom-2.5 left-2.5 bg-primary/70 backdrop-blur-sm text-surface text-[0.625rem] font-label-caps px-2 py-0.5 rounded uppercase">
                Master Suite
              </span>
            </div>

            {/* Detail 3: Wine Cellar */}
            <div className="relative overflow-hidden group bg-surface-container">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuIJfnIO9esmilhzjocou7ozFOmwWUYkdHiz6M8MNBtyykUwX7UivkS2wTgKzyIX03DS0KCTvsg9xXe4OaGeFHjbv8IaTCpE2T_RTNdqUVH1MeaaVCrLtYU10s1rtQa44fT6XYRsWYjvUaL_TxnVEYk1ODcuCsXmMHSPlvAsrM5LwUTDQiNYVufCojrCGM7VVqn0qXuYyNRpgLheiulOOU7mwCSIkr_Pi81-Pqk3oqxzX_9dEEypJC"
                alt="Wine Cellar"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute bottom-2.5 left-2.5 bg-primary/70 backdrop-blur-sm text-surface text-[0.625rem] font-label-caps px-2 py-0.5 rounded uppercase">
                Wine Cellar
              </span>
            </div>

            {/* Detail 4: Sunset Terrace */}
            <div className="relative overflow-hidden group bg-surface-container">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCacYucgsaNBKiRZlcc-7wzWkvoBdhxigNi0raB5bnyK5NghrzJlcJ3MUlvJEO5ujEFgpWKHBLHGhrEX0fMtlekdAylO0nKB8rYRXQQ-LCv5cpEeXC3xruR4M7pPfWzpQMWhQ4Za7pHtRnlzKY-NgURfehSK4GMG3v7YV2XdbO_muk3V-mEag_LnrVLw2aa8vvqPoCvFGc1Ylel87PARe1HHKC6X37swZ9g_wj6gzEY6yoGF0Mdq1-S"
                alt="Sunset Terrace"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute bottom-2.5 left-2.5 bg-primary/70 backdrop-blur-sm text-surface text-[0.625rem] font-label-caps px-2 py-0.5 rounded uppercase">
                Sunset Terrace
              </span>
              <div className="absolute inset-0 bg-primary/40 hover:bg-primary/60 backdrop-blur-[2px] transition-all flex flex-col items-center justify-center text-surface p-2 text-center pointer-events-none">
                <span className="material-symbols-outlined text-3xl mb-1">photo_camera</span>
                <span className="text-label-caps font-label-caps tracking-widest uppercase text-[0.75rem]">
                  Curated Monograph
                </span>
              </div>
            </div>
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
                    5 Beds
                  </span>
                </div>
                <div className="pt-2 sm:pt-0 sm:pl-4">
                  <span className="block text-label-caps font-label-caps text-outline uppercase tracking-wider mb-1">
                    Bathrooms
                  </span>
                  <span className="text-headline-sm font-headline-sm text-primary font-semibold">
                    7 Baths
                  </span>
                </div>
                <div className="pt-2 sm:pt-0 sm:pl-4">
                  <span className="block text-label-caps font-label-caps text-outline uppercase tracking-wider mb-1">
                    Interior
                  </span>
                  <span className="text-headline-sm font-headline-sm text-primary font-semibold">
                    8,420 <span className="text-body-sm font-body-sm font-normal">sq ft</span>
                  </span>
                </div>
                <div className="pt-2 sm:pt-0 sm:pl-4">
                  <span className="block text-label-caps font-label-caps text-outline uppercase tracking-wider mb-1">
                    Lot Size
                  </span>
                  <span className="text-headline-sm font-headline-sm text-primary font-semibold">
                    0.85 <span className="text-body-sm font-body-sm font-normal">Acres</span>
                  </span>
                </div>
                <div className="pt-2 sm:pt-0 sm:pl-4">
                  <span className="block text-label-caps font-label-caps text-outline uppercase tracking-wider mb-1">
                    Built
                  </span>
                  <span className="text-headline-sm font-headline-sm text-primary font-semibold">
                    2023
                  </span>
                </div>
                <div className="pt-2 sm:pt-0 sm:pl-4">
                  <span className="block text-label-caps font-label-caps text-outline uppercase tracking-wider mb-1">
                    Typology
                  </span>
                  <span className="text-headline-sm font-headline-sm text-primary font-semibold">
                    Pavilion
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
                <p>
                  Poised majestically on a private promontory along coveted Stradella Road, The Bel-Air Glass Pavilion represents a pinnacle achievement in contemporary California architecture. Conceived by award-winning architectural atelier Studio Vesper, the residence dissolves the boundary between serene canyon sanctuaries and sophisticated entertainment pavilions.
                </p>
                <p>
                  Floor-to-ceiling motorized Fleetwood glass pocket doors disappear silently into board-formed concrete reveals, creating unobstructed 120-foot spans that bridge the central Great Room directly to the cantilevered travertine terrace and zero-edge infinity pool. The interior palette is anchored by custom European white-oak millwork, honed Roman travertine floors, and blackened architectural steel articulation.
                </p>
                <p>
                  Elevated culinary craft is facilitated by a showpiece kitchen outfitted with book-matched honed Calacatta marble slab islands and integrated Miele and Gaggenau appliances, subtly complemented by a fully equipped rear catering scullery. Upstairs, the master sanctuary commands unhindered panoramic canyon-to-ocean vistas, complete with dual bespoke dressing suites and spa-inspired baths wrapped in radiant-heated limestone.
                </p>
              </div>
            </div>

            {/* Key Features & Amenities */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-outline-variant/50 pb-3">
                <h2 className="text-headline-lg font-headline-lg text-primary tracking-tight">
                  Curated Features &amp; Amenities
                </h2>
                <span className="text-label-caps font-label-caps uppercase tracking-wider text-outline">
                  8 Architectural Highlights
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

            {/* Property Specifications Table */}
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
                    Architectural Floor Plans
                  </h2>
                  <p className="text-body-sm font-body-sm text-outline">
                    Measured layout documentation and spatial flow.
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-label-lg font-label-lg text-primary cursor-pointer hover:text-secondary underline underline-offset-4 transition-colors">
                  <span className="material-symbols-outlined text-lg">download</span>
                  Download Architectural Blueprint (PDF)
                </span>
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-6 shadow-sm">
                <div className="flex border-b border-outline-variant/40 mb-6 space-x-6">
                  <div className="pb-3 border-b-2 border-primary text-primary font-medium text-label-lg font-label-lg flex items-center gap-2">
                    <span>Ground Level</span>
                    <span className="text-xs bg-surface-container px-2 py-0.5 rounded text-on-surface-variant font-normal">
                      4,820 sq ft
                    </span>
                  </div>
                  <div className="pb-3 text-outline text-label-lg font-label-lg flex items-center gap-2">
                    <span>Upper Level</span>
                    <span className="text-xs bg-surface-container px-2 py-0.5 rounded text-on-surface-variant font-normal">
                      3,600 sq ft
                    </span>
                  </div>
                </div>

                <div className="relative bg-surface border border-dashed border-outline-variant rounded-lg p-8 flex flex-col items-center justify-center min-h-[260px]">
                  <div className="w-full max-w-md p-6 bg-surface-container-lowest border border-outline-variant/50 rounded shadow-sm text-center">
                    <span className="material-symbols-outlined text-4xl text-outline mb-3">
                      architecture
                    </span>
                    <h4 className="font-headline-sm text-primary mb-1">
                      Level 01: Grand Living &amp; Exterior Terrace
                    </h4>
                    <p className="text-body-sm font-body-sm text-on-surface-variant mb-4">
                      Featuring open-plan salon, catering kitchen, temperature-controlled cellar, wellness wing, and pool court access.
                    </p>
                    <div className="inline-flex items-center gap-2 text-label-caps font-label-caps uppercase text-secondary tracking-wider font-semibold">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      Verified CAD Vector Schematic Attached
                    </div>
                  </div>
                  <span className="text-[0.75rem] font-label-caps text-outline mt-4 uppercase tracking-widest">
                    Architectural Scale: 1/4&quot; = 1&apos;-0&quot; · Studio Vesper File #SV-23
                  </span>
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
                    <div className="bg-primary text-surface px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
                      <span className="text-label-caps font-label-caps font-semibold uppercase tracking-wider text-surface">
                        1048 Stradella Road
                      </span>
                    </div>
                    <div className="w-4 h-4 bg-primary rotate-45 -mt-2" />
                  </div>
                  <div className="absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded border border-outline-variant/40 text-label-caps font-label-caps uppercase text-primary">
                    Bel-Air Crest Estates · Enclave Area
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
                <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl overflow-hidden group hover:border-primary transition-all duration-300">
                  <div className="relative h-60 overflow-hidden bg-surface-container">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnU34AimIrbSOyD3RDM2Mzzas6sqt5FP-DOA_22GAyfCCTM3NjR6ZNsjj2Hz9JwnvgXjC36dEJa97UlkhlIOQwAdUy3dyM8gA9Z7LxevWIZgRuq-YQ2GEfZQLp2L-Nb1wjr2VmELP4-F4LsCEHYxNowyfdb_SfxQTCKaZUD8_NDa1p7KYQd6oDA_6iam432o3M4dx5acqoBox9EGOT6Y2MouI0C8rqjv_z6wXHeccR-_bnhw6zvYW6"
                      alt="The Highland Ridge Estate"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-primary-container/80 backdrop-blur-md px-2.5 py-1 rounded text-surface text-label-caps font-label-caps uppercase">
                      Hollywood Hills
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-headline-sm font-headline-sm text-primary font-semibold mb-1">
                      $7,450,000
                    </div>
                    <h3 className="font-headline-sm text-[1.125rem] text-primary mb-1">
                      The Hollywood View Pavilion
                    </h3>
                    <p className="text-body-sm font-body-sm text-on-surface-variant mb-4">
                      2190 Sunset Plaza Dr, Los Angeles, CA
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-outline-variant/40 text-body-sm font-body-sm text-outline">
                      <span>4 Beds · 5 Baths</span>
                      <span>6,850 sq ft</span>
                      <Link
                        href="/properties/"
                        className="text-primary font-semibold hover:text-secondary transition-colors"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl overflow-hidden group hover:border-primary transition-all duration-300">
                  <div className="relative h-60 overflow-hidden bg-surface-container">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1lDgsVRbIREAyN1sSnujmCmBPiaMJj2oe7OKwn_y2_kSXj7QQoAhFeYftVnHbtOTNRhJ5HM8iRs_Mag-MoNsz0a_X7eermPo4D8qmpLgZFMz0-xtkiJs8tr14JtGVPtZgbzTgb73pAFS1uf2H6rNOGW6-89O7uf3Xqu8EmO7YFGEaFmhq_VqXTmvoxhLz2RsaxlsK4zj9e5phsOVMnOiSRooK4Bj_MFxIJ7bf4XEUhVVomcdWZSbX"
                      alt="Brentwood Park Villa"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-primary-container/80 backdrop-blur-md px-2.5 py-1 rounded text-surface text-label-caps font-label-caps uppercase">
                      Brentwood Park
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-headline-sm font-headline-sm text-primary font-semibold mb-1">
                      $9,920,000
                    </div>
                    <h3 className="font-headline-sm text-[1.125rem] text-primary mb-1">
                      Villa Serena Brentwood
                    </h3>
                    <p className="text-body-sm font-body-sm text-on-surface-variant mb-4">
                      480 Moreno Ave, Los Angeles, CA
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-outline-variant/40 text-body-sm font-body-sm text-outline">
                      <span>6 Beds · 8 Baths</span>
                      <span>9,100 sq ft</span>
                      <Link
                        href="/properties/"
                        className="text-primary font-semibold hover:text-secondary transition-colors"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
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
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB83K4_GfeMGOyz2vT79GqRKxMMsmXOkV4SrHZ8SWcsJchpKQDSk3qgOpXXJAa18NEvTWw2Kwtl_Q0oPGVEi7ZJkoRwxxQlPFqFRmZ3Z5lK0IozsL51fPDRSatCHGHErGU9wOOlD3ZiI9EhD78IWcpMDK-KsSI67CW7VEW3a38Pxu9cuBy_oyrBLUDCYGDoiUxXH3jWl0lB6YXylydvoYjlOsKf46eX3DONWkhUsjcYEJmEp-tFSKyr"
                      alt="Alexandra Sterling"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="font-headline-sm text-[0.9375rem] text-primary font-semibold truncate">
                      Alexandra Sterling
                    </h4>
                    <p className="text-body-sm font-body-sm text-outline text-xs truncate">
                      Senior Architectural Partner · Lic. #01928491
                    </p>
                    <div className="flex items-center gap-2 mt-0.5 text-xs text-primary font-medium">
                      <a href="mailto:alexandra@estorarealty.com" className="hover:text-secondary transition-colors">
                        alexandra@estorarealty.com
                      </a>
                      <span>·</span>
                      <a href="tel:+13108492041" className="hover:text-secondary transition-colors">
                        +1 (310) 849-2041
                      </a>
                    </div>
                  </div>
                </div>

                {/* Walkthrough Form */}
                <WalkthroughForm propertyTitle="The Bel-Air Glass Pavilion" />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
