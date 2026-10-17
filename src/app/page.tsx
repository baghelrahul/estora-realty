import type { Metadata } from "next";
import Link from "next/link";
import { properties } from "@/data/properties";
import { HomeSearchForm } from "@/components/sections/home-search-form";
import { PropertyCard } from "@/components/sections/property-card";

export const metadata: Metadata = {
  title: "Curated Residences & Architectural Advisory",
  description:
    "Curating exceptional residences, timeless mid-century estates, and modern waterfront sanctuaries for discerning collectors and individuals worldwide.",
};

export default function HomePage() {
  const featuredProperties = properties.slice(0, 4);

  const propertyTypes = [
    {
      title: "Apartments",
      count: "42 Available",
      href: "/properties/?type=Apartment",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuArX7-SAE2iW0eSCq_NOJKi0mZ20AbvkczuirbBb-NqA70vnXzEiYb1pftva65nEZp-l2wHjhFpj05T1zQnGWbY7pgWuUmS1yYyJJZDlvgzHUCGguYZ8G2k8KM9mfz6rLEPZOQUpDu7YznkV-0hxyvFqgLrRLRJyTATf7JnYessh1ra3sioV2HOG3KgOxNPdlOl7D5sqZB2nnV7BZDL6Vr2SRmxdv4aO7EdZDy4dOReY6pvPzfnAhZ2",
    },
    {
      title: "Villas",
      count: "28 Available",
      href: "/properties/?type=Villa",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDaC1nZcEAPHvs5xJmMq-Wu8SjSfsz9vSs2DHjtZOeNR4vH2AdGKSU52-yjrb9uB0NASSwr4795n60u6jawZkRbZr7LBN5p9y2B64zhIFsoVjSwvM8HTUziYqmIpbWNzd6vRQ_FC3PZNqjXi7y3BsGCKNbnorAm6wAu03bZ989qloKXRruou9r8vkBqjZJ73F11hciGAfSd5zKZPI68c_jjvDR44WY5hWijcfQwEfNihMxw_v2psYjK",
    },
    {
      title: "Independent Houses",
      count: "19 Available",
      href: "/properties/?type=Independent+House",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDASj8F03nThB-DVQtL05R0CGYpdZL0sghlKgpE0-LwOpeFiwUMNv1nc95UCJTA09h-26Kzn7h8PC8mgEQjx_2McpLdwrIIalebRBRoCEd_sbCJDWa7Sh_E1_4AufKUn6u334dMusyBvXqgaqGadFFmZV7rd4c5UVeTUzgosBR8eWUuDoxbY2S1qdz_e6ML0CG_vBwHN-JLeYR79KevG5uOf3-d4k0CoNthL_-EKkTxIDlGfaHqqlrP",
    },
    {
      title: "Plots & Land",
      count: "14 Available",
      href: "/properties/?type=Plot",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAtLhmvwuEcrmhkOpLP2FvbP6KTwKmgXtV6Nvu1tw5rmEq_fzkCMzZNr6p-R9KVmYsprlbWXBRQkMTGBz_IkkjCeFCb9qfzsuwSYcALVB-iRgLW1OqSsxrrHN8n7_1bTXSgoWs5z1XU2ElLGp4vm3Xok8TokWhVx_k6UXBmt6AKuk_RnlrC1f4GaW44U9G0flosUG-IwuFzRC0fVrqtH5auDPprzGxomTemfYl6f6K4cdn6WZRRBl3_",
    },
    {
      title: "Commercial",
      count: "11 Available",
      href: "/properties/?type=Commercial",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAWdXJEmLfjU4buC0Ac03fkJdgTSfCCqFkL8tXdz_qf6RNjDk_yzybrpb-wrv7O1OB6TybmKWEh3dxy4LvtsnxTAByPWN8ou_iDgqJYJZ6ORh1pblkZ4OqXjDdIqIX_fOK3rpYBqmMqkTFDPsg7CIvvPOm_cNG0EanXyaQYlBqjfdTpZ3fE8P08R4ms9qWgd9skCCcvsMCWqCfZ82-iSd-mczbKp_Qq-SinDnyAlZUYIVGDex2dVIvd",
    },
  ];

  const testimonials = [
    {
      quote:
        "Estora handled the acquisition of our mid-century pavilion with the precision of an art gallery. Their architectural literacy is unmatched.",
      author: "Julian & Elena Vance",
      role: "Buyers · Bel-Air, California",
    },
    {
      quote:
        "The off-market divestment of our Cortona estate was conducted completely outside the public eye. An exceptional advisory team.",
      author: "Contessa Beatrice Moretti",
      role: "Seller · Florence & Tuscany",
    },
    {
      quote:
        "Finding a Tribeca loft with authentic historic proportions required months of patient curation. Estora made the process seamless and pleasant.",
      author: "Marcus Thorne",
      role: "Buyer · New York City",
    },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative pt-6 pb-20 lg:pt-12 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="relative rounded-xl overflow-hidden min-h-[560px] lg:min-h-[640px] flex items-end p-8 lg:p-16 border border-outline-variant/40 shadow-sm">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=85')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/25" />
            <div className="relative z-10 max-w-3xl text-white">
              <span className="inline-block text-label-caps font-label-caps tracking-widest uppercase text-white/90 mb-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded border border-white/20">
                Curated Architectural Living
              </span>
              <h1 className="text-display-hero-mobile lg:text-display-hero font-display-hero mb-6 text-white tracking-tight leading-none drop-shadow-sm">
                Find a Place That Feels Like Home.
              </h1>
              <p className="text-body-md lg:text-body-lg font-body-lg text-white/85 max-w-xl mb-8 leading-relaxed">
                Curating exceptional residences, timeless mid-century estates, and modern waterfront sanctuaries for discerning collectors and individuals worldwide.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/properties/"
                  className="font-label-lg text-label-lg px-7 py-3.5 rounded-lg bg-white text-[#111412] hover:bg-white/90 transition-colors duration-200 inline-flex items-center gap-2 font-semibold shadow-sm"
                >
                  <span>Explore Properties</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <Link
                  href="/contact/"
                  className="font-label-lg text-label-lg px-7 py-3.5 rounded-lg bg-black/30 backdrop-blur-sm border border-white/60 text-white hover:bg-white hover:text-[#111412] transition-colors duration-200 font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERLAPPING SEARCH BAR */}
      <HomeSearchForm />

      {/* FEATURED PROPERTIES SECTION */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12" id="properties">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">
              Curated Portfolio
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
              Exceptional Properties, Selected for You
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            A rigorously vetted collection of modern masterworks, coastal sanctums, and heritage residences currently available through our private brokerage.
          </p>
        </div>

        {/* Properties Grid (2 columns on Home page per Stitch design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProperties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/properties/"
            className="inline-flex items-center gap-2 font-label-lg text-label-lg px-8 py-3.5 rounded-lg border border-primary-container text-primary-container hover:bg-primary-container hover:text-surface dark:border-outline-variant/80 dark:text-primary dark:hover:bg-surface-container transition-colors duration-200"
          >
            <span>Browse All Curated Listings</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* EXPLORE PROPERTY TYPES SECTION */}
      <section className="py-16 lg:py-24 bg-surface-container-low border-y border-outline-variant/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">
              Typologies &amp; Disciplines
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
              Explore Property Types
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-3">
              From high-altitude sanctuaries to downtown penthouses, browse by architectural form.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {propertyTypes.map((type) => (
              <Link
                key={type.title}
                href={type.href}
                className="group relative rounded-xl overflow-hidden aspect-[4/5] bg-surface-container flex flex-col justify-end p-6 border border-outline-variant/50 hover:shadow-md transition-shadow"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  style={{ backgroundImage: `url('${type.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                <div className="relative z-10 text-surface">
                  <span className="font-label-caps text-label-caps uppercase text-secondary-fixed block mb-1">
                    {type.count}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-semibold">
                    {type.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT ESTORA REALTY SECTION */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden border border-outline-variant/60 relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqfCXXaUK7utqf_x-iO355goZW5wR3gIOes3W-dybEOUOcAasFvM1ar98NSN-GOJnPxtC5hDiDxpchqxXReX8Tz65n4MakeZLVjSv_5cCCW2fE1aE7UohqBtOl72Ui14aRXIn2ypVzR_IJ0D8EIyb4mKVyYnxWBjCyXQg6PZZ6pliom-IneMGawLW2WEvyuUXg0sSecf0LlZ2OKGws9gT3_CQAySddf1tvycXX4xuuxe_HwWZzbS7j"
                alt="Refined contemporary interior of an architectural design salon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/60 shadow-[0_8px_24px_-4px_rgba(32,37,34,0.06)] max-w-xs">
              <span className="font-headline-xl text-headline-xl font-bold text-primary block mb-1">
                $2.4B+
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                In private architectural real estate transactions closed globally over the past decade.
              </p>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">
              Our Philosophy
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight mb-6">
              Real Estate, Made More Personal.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
              Founded on the belief that extraordinary living spaces demand an advisory approach rooted in architectural appreciation rather than high-volume sales. We operate at the intersection of architectural critique, confidential capital advisory, and bespoke residency placement.
            </p>

            {/* Trust points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">
                  check_circle
                </span>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-primary text-[1rem]">
                    Architectural Provenance
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Every residence undergoes rigorous historical, material, and structural vetting prior to representation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">
                  check_circle
                </span>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-primary text-[1rem]">
                    Confidential Advisory
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Strict non-disclosure standards safeguard buyer identities and off-market estate portfolios.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">
                  check_circle
                </span>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-primary text-[1rem]">
                    Global Network
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Direct liaison across premier capital cities: London, New York, Zurich, Milan, and Los Angeles.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/about/"
              className="inline-flex items-center justify-center font-label-lg text-label-lg px-7 py-3.5 rounded-lg bg-[#202522] text-[#FAF9F5] hover:bg-[#323A35] dark:bg-[#F2F1EC] dark:text-[#111412] dark:hover:bg-[#FFFFFF] font-semibold transition-colors duration-200"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-16 lg:py-24 bg-surface-container-low border-t border-outline-variant/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">
              The Estora Standard
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
              Why Discerning Clients Choose Us
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-3">
              An uncompromising commitment to precision, transparency, and architectural stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/60 hover:shadow-[0_8px_24px_-4px_rgba(32,37,34,0.06)] transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-primary-container mb-6 border border-outline-variant/60">
                <span className="material-symbols-outlined text-[24px]">verified</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                Verified Property Listings
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Every home in our catalog undergoes rigorous multi-point physical inspections and verified land title audits before presentation.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/60 hover:shadow-[0_8px_24px_-4px_rgba(32,37,34,0.06)] transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-primary-container mb-6 border border-outline-variant/60">
                <span className="material-symbols-outlined text-[24px]">architecture</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                Personalized Property Guidance
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Tailored search parameters matched against your architectural lifestyle preferences, light exposure requirements, and structural tastes.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/60 hover:shadow-[0_8px_24px_-4px_rgba(32,37,34,0.06)] transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-primary-container mb-6 border border-outline-variant/60">
                <span className="material-symbols-outlined text-[24px]">visibility</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                Transparent Process
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Clear reporting on market valuation comp reports, municipal zoning conditions, and renovation feasibility prior to negotiations.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/60 hover:shadow-[0_8px_24px_-4px_rgba(32,37,34,0.06)] transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-primary-container mb-6 border border-outline-variant/60">
                <span className="material-symbols-outlined text-[24px]">support_agent</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                Dedicated Advisory Support
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Direct access to a designated senior partner from initial discovery tours through to escrow closing and post-purchase interior integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS SECTION */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">
              Client Perspectives
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
              Endorsements from Our Clients
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Discretion and results define our relationships with art collectors, executives, and international families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/60 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-secondary mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-headline-sm text-headline-sm text-primary font-normal leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="border-t border-outline-variant/40 pt-4">
                <span className="font-headline-sm text-headline-sm text-[0.95rem] text-primary block font-semibold">
                  {t.author}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CLOSING CTA SECTION */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12" id="contact">
        <div className="relative rounded-xl overflow-hidden bg-surface-container p-8 lg:p-16 border border-outline-variant/60 text-center flex flex-col items-center">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-multiply"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAipCBAt7qHhoBm_BA61GFJCeUjqoUm7nARwfIpuuDGJ-J4D_sjR3I92MRwjlygdPsw_0N7Dg1ry4asQrPMGDkYvnJiiCh_UU9PRZ2KW-3HKU_veqlL9qoHKAEgNmZLagfGspjLKolu8OUfHSKOriOZRx6LyXdxuUk2rORj8eFR-T-APpcCSU_E66YbRALaP9kNSnjBI0Tr9N6O7IlQTY3d5vVkc_Iul9ILCZbgd0gxVnrE2zVh5hzN')`,
            }}
          />
          <div className="relative z-10 max-w-2xl">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-3">
              Begin Your Search
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight mb-4">
              Your Next Chapter Starts Here.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
              Whether you are seeking an iconic modern retreat or looking to discreetly represent your private estate to qualified collectors, our senior partners are ready to assist.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/properties/"
                className="font-label-lg text-label-lg px-8 py-3.5 rounded-lg bg-[#202522] text-[#FAF9F5] hover:bg-[#323A35] dark:bg-[#F2F1EC] dark:text-[#111412] dark:hover:bg-[#FFFFFF] transition-colors duration-200 font-semibold shadow-sm"
              >
                Let’s Find Your Property
              </Link>
              <Link
                href="/contact/"
                className="font-label-lg text-label-lg px-8 py-3.5 rounded-lg border border-[#202522] text-[#202522] hover:bg-[#202522] hover:text-[#FAF9F5] dark:border-[#4A574E] dark:text-[#F2F1EC] dark:hover:bg-[#202622] dark:hover:text-[#FFFFFF] transition-colors duration-200 font-medium"
              >
                Schedule Private Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
