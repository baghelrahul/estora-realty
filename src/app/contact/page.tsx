import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { ContactIntakeForm } from "@/components/sections/contact-intake-form";
import { FAQAccordion } from "@/components/sections/faq-accordion";

export const metadata: Metadata = {
  title: "Contact Our Private Advisory Atelier",
  description:
    "Connect confidentially with Estora Realty's senior architectural partners in Beverly Hills for private acquisitions and off-market representation.",
};

export default function ContactPage() {
  const faqs = [
    {
      question: "How does Estora safeguard confidentiality during high-value acquisitions?",
      answer:
        "Every inquiry, client profile, and acquisition mandate is shielded under strict fiduciary non-disclosure agreements. We utilize private holding trusts, anonymous walkthrough protocols, and encrypted communications to keep transactions completely off public brokerage feeds.",
    },
    {
      question: "Can I schedule private viewings for off-market residences?",
      answer:
        "Yes. Over 90% of our portfolio consists of quiet, off-market estates. Prior to scheduling an in-person walkthrough, our partners conduct a confidential principal verification to safeguard owner privacy.",
    },
    {
      question: "What architectural vetting takes place before listing representation?",
      answer:
        "Our curators examine architectural blueprints, historical documentation, structural integrity reports, and daylight orientation studies. We only represent residences that showcase authentic design provenance and superior materiality.",
    },
    {
      question: "Does Estora represent international buyers in cross-border acquisitions?",
      answer:
        "Yes. Our partners routinely collaborate with international family offices, legal counsel, and tax advisors across Switzerland, the United Kingdom, Italy, Japan, and the United States to structure compliant cross-border real estate acquisitions.",
    },
  ];

  return (
    <div className="w-full">
      {/* 1. Hero & Breadcrumb */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-12">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-label-caps font-label-caps text-on-surface-variant uppercase mb-4"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="text-outline-variant">/</span>
          <span className="text-primary font-semibold">Contact Us</span>
        </nav>

        <div className="max-w-3xl space-y-4">
          <span className="text-label-caps font-label-caps uppercase tracking-widest text-secondary block">
            Private Client Representation
          </span>
          <h1 className="text-display-hero-mobile sm:text-headline-xl font-headline-xl text-primary tracking-tight leading-none">
            Connect with Our Advisory.
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
            Whether acquiring an iconic residence or discreetly divesting a private estate, our senior partners provide confidential counsel across global markets.
          </p>
        </div>
      </section>

      {/* 2. Contact Information Cards Grid (4 Column Bento) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Flagship Atelier */}
          <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-4px_rgba(32,37,34,0.06)] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-5">
                <span className="material-symbols-outlined text-xl">location_city</span>
              </div>
              <p className="text-label-caps font-label-caps uppercase tracking-wider text-outline mb-1">
                Flagship Atelier
              </p>
              <h3 className="text-headline-sm font-headline-sm text-primary mb-2">
                Beverly Hills, CA
              </h3>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant pt-4 border-t border-outline-variant/40 mt-4">
              9454 Wilshire Blvd, Suite PH-B<br />Private Viewings by Appointment
            </p>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-4px_rgba(32,37,34,0.06)] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-5">
                <span className="material-symbols-outlined text-xl">phone_in_talk</span>
              </div>
              <p className="text-label-caps font-label-caps uppercase tracking-wider text-outline mb-1">
                Private Concierge
              </p>
              <h3 className="text-headline-sm font-headline-sm text-primary mb-2">
                {site.phone}
              </h3>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant pt-4 border-t border-outline-variant/40 mt-4">
              Direct Private Advisory Line<br />Encrypted Lines Available
            </p>
          </div>

          {/* Card 3: Email */}
          <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-4px_rgba(32,37,34,0.06)] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-5">
                <span className="material-symbols-outlined text-xl">mail</span>
              </div>
              <p className="text-label-caps font-label-caps uppercase tracking-wider text-outline mb-1">
                Editorial &amp; Listings
              </p>
              <h3 className="text-headline-sm font-headline-sm text-primary mb-2 truncate">
                {site.email}
              </h3>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant pt-4 border-t border-outline-variant/40 mt-4">
              Confidential Portfolio Inquiries<br />Typical response: &lt; 4 hours
            </p>
          </div>

          {/* Card 4: Hours */}
          <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-4px_rgba(32,37,34,0.06)] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-5">
                <span className="material-symbols-outlined text-xl">schedule</span>
              </div>
              <p className="text-label-caps font-label-caps uppercase tracking-wider text-outline mb-1">
                Private Consultations
              </p>
              <h3 className="text-headline-sm font-headline-sm text-primary mb-2">
                Dedicated Hours
              </h3>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant pt-4 border-t border-outline-variant/40 mt-4">
              Mon–Sat: 8am – 7pm<br />Sun: By Appointment
            </p>
          </div>
        </div>
      </section>

      {/* 3. Main Two-Column Contact Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form (~58% / 7 cols) */}
          <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-8 sm:p-10 shadow-[0_4px_20px_-2px_rgba(32,37,34,0.04)]">
            <div className="mb-8">
              <span className="text-label-caps font-label-caps uppercase tracking-widest text-secondary block mb-2">
                Advisory Intake
              </span>
              <h2 className="text-headline-xl font-headline-xl text-primary tracking-tight mb-2">
                Initiate a Confidential Inquiry
              </h2>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Complete the form below to connect with a senior architectural advisor.
              </p>
            </div>

            <ContactIntakeForm />
          </div>

          {/* Right Column: Map, WhatsApp & Guarantee (~42% / 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Location Card & Map */}
            <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(32,37,34,0.04)]">
              <div className="relative h-60 w-full bg-surface-container-high overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgwQ9kIgdwmIVjoYGk7JYDvqutcYf26kRBPRCvceoilKp2x1c1H5iVhlGOvmwWmTsu1DwaZuPrtZONk0TCYC00jt15IGT3qFb-HgLLNmHmaPfs3UCvx5_7h5OHnKWsOp4EeBXiTuFlie1pO3-dBwBN67nhY_ry-SJeuz5oQapNPS2PUWKIvyJqgIgxjRy1IfqTb3rTd_pXYiuh4n9QzhfwlDx5SOeChN-KOBeY7pjCQIZZD6-NfmBW"
                  alt="Beverly Hills Map"
                  className="w-full h-full object-cover grayscale opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary-container text-surface px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 border border-surface/20">
                    <span className="material-symbols-outlined text-sm text-secondary-fixed">
                      pin_drop
                    </span>
                    <span className="text-label-caps font-label-caps uppercase tracking-wider text-surface">
                      Estora Flagship
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-headline-sm font-headline-sm text-primary mb-1">
                  Beverly Hills Flagship
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant mb-4">
                  9454 Wilshire Boulevard, Suite PH-B<br />
                  Beverly Hills, CA 90212
                </p>
                <div className="pt-3 border-t border-outline-variant/40 flex items-center justify-between">
                  <a
                    href="https://maps.google.com/?q=9454+Wilshire+Blvd+Beverly+Hills+CA+90212"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-label-lg font-label-lg text-primary hover:text-secondary underline underline-offset-4 transition-colors"
                  >
                    <span>Get Driving Directions</span>
                    <span className="material-symbols-outlined ml-1 text-sm">north_east</span>
                  </a>
                  <span className="text-label-caps font-label-caps text-outline uppercase">
                    Valet Available
                  </span>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Advisory Banner */}
            <div className="bg-primary-container text-surface rounded-xl p-6 relative overflow-hidden">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-surface/10 flex items-center justify-center flex-shrink-0 text-secondary-fixed">
                  <span className="material-symbols-outlined text-2xl">chat</span>
                </div>
                <div className="space-y-2">
                  <span className="text-label-caps font-label-caps uppercase tracking-wider text-secondary-fixed block">
                    Direct Channel
                  </span>
                  <h4 className="text-headline-sm font-headline-sm text-surface">
                    Instant WhatsApp Advisory
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-primary-container leading-relaxed">
                    Connect directly with an available partner for rapid off-market inquiries and real-time portfolio updates.
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://wa.me/13108924410"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center bg-surface text-primary hover:bg-surface-bright text-label-lg font-label-lg px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      <span>Chat on WhatsApp</span>
                      <span className="material-symbols-outlined ml-2 text-sm">arrow_outward</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Custodial Discretion Guarantee */}
            <div className="bg-surface-container-low border border-outline-variant/40 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-secondary text-xl flex-shrink-0 mt-0.5">
                  verified_user
                </span>
                <div>
                  <h5 className="text-label-lg font-label-lg text-primary mb-1">
                    Custodial Discretion Protocol
                  </h5>
                  <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                    Estora operates under strict Non-Disclosure Agreements for all high-value transactions. We guarantee uncompromising data anonymity and private verification standards before sharing off-market documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions Section */}
      <section className="border-t border-outline-variant/40 bg-surface-container-low/50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <p className="text-label-caps font-label-caps uppercase tracking-widest text-secondary mb-2">
              Clarity &amp; Assurance
            </p>
            <h2 className="text-headline-xl font-headline-xl text-primary tracking-tight mb-3">
              Inquiries &amp; Advisory FAQ
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Common questions regarding private viewings, acquisitions, and representation.
            </p>
          </div>

          <div className="max-w-4xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </div>
  );
}
