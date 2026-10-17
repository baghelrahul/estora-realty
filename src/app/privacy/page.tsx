import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy & Client Data Standards",
  description:
    "Review Estora Realty's data handling, privacy commitments, and non-disclosure standards for private real estate transactions.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full">
      <section className="max-w-4xl mx-auto px-6 lg:px-8 pt-12 pb-24">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-label-caps font-label-caps text-on-surface-variant uppercase mb-8"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="text-outline-variant">/</span>
          <span className="text-primary font-semibold">Privacy Policy</span>
        </nav>

        <h1 className="text-headline-xl font-headline-xl text-primary tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-body-sm font-body-sm text-outline mb-10">
          Effective date: October 17, 2026
        </p>

        <div className="space-y-8 text-body-md font-body-md text-on-surface-variant leading-relaxed">
          <p>
            This privacy policy describes how {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles information
            collected through {site.domain} (the &ldquo;Site&rdquo;).
          </p>

          <div>
            <h2 className="text-headline-sm font-headline-sm text-primary mb-3">
              Information We Collect
            </h2>
            <p className="mb-4">
              <strong>Information you give us.</strong> When you submit a form on the Site (for example, the contact intake or private walkthrough scheduling form), we receive the details you enter — typically your name, email address, phone number, preferred visit date, and message. Form submissions are transmitted and processed on our behalf by our website service provider, Pixelotech (https://pixelotech.com), and delivered directly to our senior advisory team so we can respond to your enquiry under strict confidentiality.
            </p>
            <p>
              <strong>Information collected automatically.</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <em>Analytics:</em> We use Google Analytics 4, a service of Google LLC, to understand how visitors use the Site (pages viewed, approximate location, device type, how you found us). Google Analytics sets cookies for this purpose. This data is aggregated and does not directly identify you. You can learn how Google processes this data at https://policies.google.com/technologies/partner-sites and opt out via https://tools.google.com/dlpage/gaoptout.
              </li>
              <li>
                <em>Hosting logs:</em> The Site is served by Cloudflare, which processes technical data such as IP addresses in server logs for security, caching, and network delivery purposes.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-headline-sm font-headline-sm text-primary mb-3">
              How We Use Information
            </h2>
            <p>
              We use the information above to respond to your enquiries, arrange confidential walkthroughs, provide our architectural advisory services, understand how the Site is used, and keep the Site secure. We do <strong>not</strong> sell your personal information, and we do not use it for third-party advertising.
            </p>
          </div>

          <div>
            <h2 className="text-headline-sm font-headline-sm text-primary mb-3">
              Sharing &amp; Non-Disclosure
            </h2>
            <p>
              We share information only with the service providers named above (Pixelotech for form handling, Google for analytics, Cloudflare for hosting), each acting on our behalf, or where required by law. High-value property listings and acquisition negotiations are conducted under strict separate Non-Disclosure Agreements.
            </p>
          </div>

          <div>
            <h2 className="text-headline-sm font-headline-sm text-primary mb-3">
              Data Retention
            </h2>
            <p>
              Form submissions are retained for as long as needed to handle your enquiry and maintain our fiduciary records. Analytics data is retained per Google Analytics&apos; standard retention settings.
            </p>
          </div>

          <div>
            <h2 className="text-headline-sm font-headline-sm text-primary mb-3">
              Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of the personal information we hold about you by contacting us using the details below. Depending on where you live, you may have additional rights under local privacy law.
            </p>
          </div>

          <div>
            <h2 className="text-headline-sm font-headline-sm text-primary mb-3">
              Children
            </h2>
            <p>
              The Site is not directed at children under 13, and we do not knowingly collect their personal information.
            </p>
          </div>

          <div>
            <h2 className="text-headline-sm font-headline-sm text-primary mb-3">
              Changes
            </h2>
            <p>
              If we change this policy, we will post the updated version on this page with a new effective date.
            </p>
          </div>

          <div className="pt-6 border-t border-outline-variant/40">
            <h2 className="text-headline-sm font-headline-sm text-primary mb-3">
              Contact
            </h2>
            <p className="font-medium text-primary">{site.name}</p>
            <p>
              {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}
            </p>
            <p>
              Email:{" "}
              <a href={`mailto:${site.email}`} className="text-secondary hover:underline">
                {site.email}
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href={`tel:${site.phone}`} className="text-secondary hover:underline">
                {site.phone}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
