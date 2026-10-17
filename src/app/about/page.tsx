import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Architectural Stewardship & Advisory",
  description:
    "Learn about Estora Realty's private brokerage philosophy, architectural provenance research, confidential off-market mandates, and global advisory network.",
};

export default function AboutPage() {
  const pillars = [
    {
      num: "Pillar 01",
      icon: "architecture",
      title: "Architectural Provenance",
      description:
        "Every listing is authenticated with verified architectural history, original blueprints, structural evaluations, and materials audits.",
      footer: "Archival Research Included",
    },
    {
      num: "Pillar 02",
      icon: "lock",
      title: "Confidential Off-Market",
      description:
        "Over 90% of our acquisitions occur under absolute privacy, shielding seller equity and buyer identities from speculative public databases.",
      footer: "Strict Non-Disclosure",
    },
    {
      num: "Pillar 03",
      icon: "balance",
      title: "Discretion & Integrity",
      description:
        "Our partners are fiduciary counselors first. We reject volume quotas in favor of deep advisory alliances that endure across decades.",
      footer: "Fiduciary Independence",
    },
    {
      num: "Pillar 04",
      icon: "tune",
      title: "Tailored Matching",
      description:
        "Bespoke sourcing algorithms guided by personal lifestyle ergonomics, acoustic privacy criteria, and rare geological topography.",
      footer: "Custom Portfolio Curation",
    },
  ];

  const principles = [
    {
      icon: "museum",
      title: "Architectural Stewardship",
      description:
        "We celebrate enduring design, honoring the physical manifestations of spatial harmony over ephemeral interior trends. Every property we represent must contribute positively to the built environment.",
      principle: "Principle I",
      tagline: "Permanence over Novelty",
    },
    {
      icon: "shield",
      title: "Uncompromising Discretion",
      description:
        "Safeguarding confidentiality is our primary standard. All transactions, private viewing itineraries, and financial structures are fortified with military-grade operational security and strict NDAs.",
      principle: "Principle II",
      tagline: "Absolute Privacy",
    },
    {
      icon: "insights",
      title: "Transparent Valuation",
      description:
        "We reject speculative hyperbole. Our advisory models are grounded in empirical capital flows, spatial replacement cost appraisals, and macro-economic demographic forecasting.",
      principle: "Principle III",
      tagline: "Empirical Clarity",
    },
    {
      icon: "all_inclusive",
      title: "Lifelong Advisory",
      description:
        "The conclusion of a transaction is merely our inception point. We oversee estate management transitions, architectural preservation committees, and generational portfolio planning.",
      principle: "Principle IV",
      tagline: "Enduring Stewardship",
    },
  ];

  const metrics = [
    {
      value: "$2.4B+",
      label: "Curated Volume",
      detail: "Exceptional architectural transactions closed across 7 jurisdictions.",
    },
    {
      value: "18+",
      label: "Years of Advisory",
      detail: "Continuous dedication to masterwork estates and sovereign holdings.",
    },
    {
      value: "98%",
      label: "Off-Market Share",
      detail: "Discreet transactions settled entirely outside public index databases.",
    },
    {
      value: "14",
      label: "Capital Partnerships",
      detail: "Direct family office syndications in London, Geneva, Tokyo, and New York.",
    },
  ];

  return (
    <div className="w-full">
      {/* 1. Breadcrumb Bar */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-label-caps font-label-caps text-on-surface-variant uppercase">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="text-outline-variant">/</span>
          <span className="text-primary font-semibold">About Us</span>
        </nav>
      </section>

      {/* 2. Hero Section: Editorial Monograph */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container border border-outline-variant/60 text-secondary font-label-caps text-label-caps uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Architectural Stewardship &amp; Private Advisory
            </div>
            <h1 className="text-display-hero-mobile sm:text-display-hero font-display-hero text-primary tracking-tight leading-none">
              More Than Property. <br className="hidden sm:inline" />
              A Better Way to Find Home.
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-body-lg font-body-lg text-on-surface-variant font-light leading-relaxed">
              Connecting discerning individuals with architectural masterworks through rigorous design discernment, verified provenance, and uncompromising discretion.
            </p>
          </div>
        </div>

        {/* Hero Visual Asset */}
        <div className="relative w-full h-[360px] sm:h-[500px] lg:h-[640px] rounded-xl overflow-hidden border border-outline-variant/50 bg-surface-container">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKFT4tuve2_vYiAJevCBgwx60lt0JOEJzYn4NbqUuSwXHzE1xx8cNA4igpEMKJhFS1dOPYjeBC5949L8-GFETDjkMW2-FrBlvcTKjV5oRHOBIoiMapTyA84klwLelZTj3rC6oMM2neH48u-5zeUehnqfo1L5cRMcp35EUw9AmVPKBuNqQNm4VvygdgpbEtgZUycZ1jodayJ6zbPewHwlVU28j6chYonl17Flwz4nHVDEL5g2tKvn8z"
            alt="The Solstice Residence, Kyoto Enclave"
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.01]"
          />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-auto bg-surface-container-lowest/90 backdrop-blur-md px-6 py-4 rounded border border-outline-variant/50 max-w-md shadow-sm">
            <p className="text-label-caps font-label-caps text-on-surface-variant uppercase">
              Featured Monograph
            </p>
            <p className="text-body-md font-body-md text-primary font-medium mt-1">
              The Solstice Residence, Kyoto Enclave — Designed by Atelier Hiroshi, 2024
            </p>
          </div>
        </div>
      </section>

      {/* 3. Company Story, Mission & Vision */}
      <section className="border-t border-outline-variant/40 bg-surface-container-lowest py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <span className="text-label-caps font-label-caps text-secondary uppercase tracking-widest">
                Our Inception
              </span>
              <h2 className="text-headline-xl font-headline-xl text-primary leading-tight">
                Curated stewardship over transactional volume.
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Founded on the belief that extraordinary residences are not mere commercial assets, but physical manifestos of human thought and craftsmanship. We deliberately operate as a private atelier rather than an industrial brokerage.
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-outline-variant/60 flex items-center justify-center bg-surface">
                    <span className="material-symbols-outlined text-primary text-xl">
                      verified_user
                    </span>
                  </div>
                  <div>
                    <h4 className="text-body-md font-body-md font-semibold text-primary">
                      Private Representation
                    </h4>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">
                      Sole mandate advisory safeguarding long-term asset integrity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4 text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                <p>
                  In an era dominated by automated listing hubs and transactional noise,{" "}
                  <strong className="text-primary font-medium">Estora Realty</strong> was conceived as a deliberate counterbalance. We serve an international collective of architects, patrons, family offices, and design enthusiasts who understand that where you dwell shapes how you think.
                </p>
                <p>
                  Every estate admitted to our repertoire undergoes rigorous architectural vetting. We interrogate proportion, daylight orientation, structural materiality, and the lineage of the architects who brought each structure into existence.
                </p>
              </div>

              {/* Two-Tier Mission & Vision */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="p-8 rounded-lg bg-surface border border-outline-variant/60 space-y-3">
                  <div className="flex items-center gap-2 text-primary font-label-caps text-label-caps uppercase">
                    <span className="material-symbols-outlined text-secondary text-lg">flag</span>
                    Our Mission
                  </div>
                  <h3 className="text-headline-sm font-headline-sm text-primary">
                    Preserve &amp; Connect
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                    To safeguard irreplaceable architectural expressions by introducing them exclusively to custodial owners who revere their structural intent and historic weight.
                  </p>
                </div>
                <div className="p-8 rounded-lg bg-surface border border-outline-variant/60 space-y-3">
                  <div className="flex items-center gap-2 text-primary font-label-caps text-label-caps uppercase">
                    <span className="material-symbols-outlined text-secondary text-lg">visibility</span>
                    Our Vision
                  </div>
                  <h3 className="text-headline-sm font-headline-sm text-primary">
                    Global Benchmark
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                    To redefine prime real estate as an editorial discipline, establishing a worldwide standard for quiet luxury, off-market security, and design-led advisory.
                  </p>
                </div>
              </div>

              {/* Secondary Image */}
              <div className="pt-4">
                <div className="relative h-72 sm:h-80 w-full rounded-lg overflow-hidden border border-outline-variant/60">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKADGEw0r35VyC9lZDKNjhBAa9zwhYFhNKQh-GSb9aMq7Q0Exlzjp3Z61-1wqH_P4io_taPZdu6KVpDMNRlc6XyXWTI9TbNB77vuvYpoeltE-JNhaebBxFL78YeuEySr_2FRcz3dAoDvoLz_khjDcdyMAk2g-kqor09V40tc25S9Hw6wSw8nBeQksnHzf8zx0iXxI4vdbgg4XCD2qmrLslyqvYOuLp3DQAgoM6klWC5pOl5qeoeU1Y"
                    alt="The Estora Advisory Library, Zürich"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 italic">
                  The Estora Advisory Library, Zürich — Dedicated research archive for modernist architectural archives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Clients Choose Estora: Four Pillars */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-label-caps font-label-caps text-secondary uppercase tracking-widest">
            Our Foundation
          </span>
          <h2 className="text-headline-xl font-headline-xl text-primary">
            Why Discerning Clients Entrust Estora
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            We move beyond conventional brokerage mechanics, offering a four-fold framework designed specifically for institutional and private family holdings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="bg-surface-container-lowest border border-outline-variant/60 p-8 rounded-lg flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200 shadow-sm"
            >
              <div className="space-y-4">
                <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
                  {pillar.num}
                </span>
                <div className="w-10 h-10 rounded bg-surface border border-outline-variant/50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">{pillar.icon}</span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-primary">
                  {pillar.title}
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-outline-variant/30 flex items-center text-body-sm font-body-sm text-primary font-medium">
                {pillar.footer}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Company Values Grid: Minimalist 2x2 Bento Matrix */}
      <section className="bg-surface-container-low border-y border-outline-variant/40 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-label-caps font-label-caps text-secondary uppercase tracking-widest">
              Guiding Tenets
            </span>
            <h2 className="text-headline-xl font-headline-xl text-primary">
              Our Code of Conduct
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              The core convictions that direct every handshake, valuation, and architectural acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((pr) => (
              <div
                key={pr.principle}
                className="p-8 sm:p-10 rounded-xl bg-surface-container-lowest border border-outline-variant/60 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center text-primary mb-6">
                    <span className="material-symbols-outlined text-2xl">{pr.icon}</span>
                  </div>
                  <h3 className="text-headline-sm font-headline-sm text-primary mb-3">
                    {pr.title}
                  </h3>
                  <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                    {pr.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-outline-variant/30 flex items-center justify-between text-body-sm font-body-sm text-outline">
                  <span>{pr.principle}</span>
                  <span className="text-secondary font-medium">{pr.tagline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Illustrative Trust Metrics */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-8 lg:p-14 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-outline-variant/40">
            {metrics.map((m, i) => (
              <div key={m.label} className={`space-y-2 ${i !== 0 ? "pt-6 sm:pt-0 sm:px-6" : ""}`}>
                <span className="text-display-hero-mobile sm:text-display-hero font-display-hero text-primary tracking-tight block">
                  {m.value}
                </span>
                <p className="text-label-caps font-label-caps uppercase text-secondary font-semibold">
                  {m.label}
                </p>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Private Advisory Consultation CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="bg-surface border border-outline-variant/60 rounded-xl p-8 sm:p-10 lg:p-16 relative overflow-hidden shadow-sm">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none" />
          <div className="max-w-3xl relative z-10 space-y-6">
            <span className="text-label-caps font-label-caps text-secondary uppercase tracking-widest">
              Commence Dialogue
            </span>
            <h2 className="text-display-hero-mobile sm:text-display-hero font-display-hero text-primary leading-tight">
              Experience the Art of Finding Home.
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
              Whether seeking an off-market modernist sanctuary or contemplating the discreet transfer of a legacy architectural property, our senior advisory team is at your disposal for confidential consultation.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center bg-[#202522] text-[#FAF9F5] hover:bg-[#323A35] dark:bg-[#F2F1EC] dark:text-[#111412] dark:hover:bg-[#FFFFFF] font-semibold font-label-lg text-label-lg px-8 py-4 rounded-lg transition-all duration-200 active:scale-95 shadow"
              >
                Schedule Private Advisory
              </Link>
              <Link
                href="/properties/"
                className="inline-flex items-center justify-center border border-[#202522] text-[#202522] hover:bg-[#202522] hover:text-[#FAF9F5] dark:border-[#4A574E] dark:text-[#F2F1EC] dark:hover:bg-[#202622] font-semibold font-label-lg text-label-lg px-8 py-4 rounded-lg transition-colors duration-200"
              >
                Explore Our Collection
              </Link>
            </div>
            <div className="pt-6 flex flex-wrap items-center gap-6 text-body-sm font-body-sm text-outline">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-secondary">
                  check_circle
                </span>
                Non-disclosure agreement standard
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-secondary">
                  check_circle
                </span>
                Direct principal engagement
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
