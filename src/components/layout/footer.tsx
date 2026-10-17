import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#202522] dark:bg-[#141815] w-full border-t border-[#343e37] dark:border-[#2a332c] mt-auto text-[#FAF9F5] dark:text-[#F2F1EC] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col gap-12">
        {/* Upper Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-headline-sm font-headline-sm tracking-widest uppercase text-[#FAF9F5] dark:text-[#F2F1EC] inline-block mb-4 hover:opacity-90 transition-opacity"
            >
              ESTORA REALTY
            </Link>
            <p className="text-body-sm font-body-sm text-[#D1D7D0] dark:text-[#A9B3AB] max-w-sm mb-6 leading-relaxed">
              Specialized architectural curation, residential acquisition, and off-market advisory for distinctive private estates globally.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 text-[#FAF9F5] dark:text-[#F2F1EC]">
              <a
                aria-label="Instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#445046] dark:border-[#38423B] flex items-center justify-center text-[#FAF9F5] dark:text-[#F2F1EC] hover:text-[#FFFFFF] hover:border-[#FFFFFF] transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-[16px]">photo_camera</span>
              </a>
              <a
                aria-label="LinkedIn"
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#445046] dark:border-[#38423B] flex items-center justify-center text-[#FAF9F5] dark:text-[#F2F1EC] hover:text-[#FFFFFF] hover:border-[#FFFFFF] transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-[16px]">share</span>
              </a>
              <a
                aria-label="Email"
                href={`mailto:${site.email}`}
                className="w-8 h-8 rounded-full border border-[#445046] dark:border-[#38423B] flex items-center justify-center text-[#FAF9F5] dark:text-[#F2F1EC] hover:text-[#FFFFFF] hover:border-[#FFFFFF] transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-[16px]">mail</span>
              </a>
            </div>
          </div>

          {/* Curated Links Column 1 */}
          <div>
            <h4 className="text-label-caps font-label-caps uppercase tracking-wider text-[#FAF9F5] dark:text-[#F2F1EC] mb-4 font-semibold">
              Portfolios
            </h4>
            <ul className="space-y-2.5 text-body-sm font-body-sm">
              <li>
                <Link
                  href="/properties/"
                  className="text-[#B8C0B7] dark:text-[#A9B3AB] hover:text-[#FFFFFF] dark:hover:text-[#FFFFFF] transition-colors duration-200"
                >
                  Curated Residences
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/"
                  className="text-[#B8C0B7] dark:text-[#A9B3AB] hover:text-[#FFFFFF] dark:hover:text-[#FFFFFF] transition-colors duration-200"
                >
                  Architectural Estates
                </Link>
              </li>
              <li>
                <Link
                  href="/about/"
                  className="text-[#B8C0B7] dark:text-[#A9B3AB] hover:text-[#FFFFFF] dark:hover:text-[#FFFFFF] transition-colors duration-200"
                >
                  Private Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="/about/"
                  className="text-[#B8C0B7] dark:text-[#A9B3AB] hover:text-[#FFFFFF] dark:hover:text-[#FFFFFF] transition-colors duration-200"
                >
                  Editorial Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Categories Column 2 */}
          <div>
            <h4 className="text-label-caps font-label-caps uppercase tracking-wider text-[#FAF9F5] dark:text-[#F2F1EC] mb-4 font-semibold">
              Categories
            </h4>
            <ul className="space-y-2.5 text-body-sm font-body-sm">
              <li>
                <Link
                  href="/properties/"
                  className="text-[#B8C0B7] dark:text-[#A9B3AB] hover:text-[#FFFFFF] dark:hover:text-[#FFFFFF] transition-colors duration-200"
                >
                  Modern Villas
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/"
                  className="text-[#B8C0B7] dark:text-[#A9B3AB] hover:text-[#FFFFFF] dark:hover:text-[#FFFFFF] transition-colors duration-200"
                >
                  Atelier Penthouses
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/"
                  className="text-[#B8C0B7] dark:text-[#A9B3AB] hover:text-[#FFFFFF] dark:hover:text-[#FFFFFF] transition-colors duration-200"
                >
                  Historic Townhouses
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/"
                  className="text-[#B8C0B7] dark:text-[#A9B3AB] hover:text-[#FFFFFF] dark:hover:text-[#FFFFFF] transition-colors duration-200"
                >
                  Waterfront Sanctuaries
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-label-caps font-label-caps uppercase tracking-wider text-[#FAF9F5] dark:text-[#F2F1EC] mb-4 font-semibold">
              Offices
            </h4>
            <p className="text-body-sm font-body-sm text-[#D1D7D0] dark:text-[#A9B3AB] mb-2 leading-relaxed">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
            </p>
            <p className="text-body-sm font-body-sm text-[#D1D7D0] dark:text-[#A9B3AB] mb-2">
              <a href={`mailto:${site.email}`} className="text-[#B8C0B7] dark:text-[#A9B3AB] hover:text-[#FFFFFF] dark:hover:text-[#FFFFFF] transition-colors">
                {site.email}
              </a>
            </p>
            <p className="text-body-sm font-body-sm text-[#D1D7D0] dark:text-[#A9B3AB]">
              <a href={`tel:${site.phone}`} className="text-[#B8C0B7] dark:text-[#A9B3AB] hover:text-[#FFFFFF] dark:hover:text-[#FFFFFF] transition-colors">
                +1 (310) 844-9200
              </a>
            </p>
          </div>
        </div>

        {/* Lower Footer & Legal */}
        <div className="border-t border-[#343e37] dark:border-[#2a332c] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-body-sm font-body-sm text-[#8F988E] dark:text-[#7A8379]">
            © 2026 ESTORA REALTY. All rights reserved. Architectural Curation & Advisory.
          </p>
          <div className="flex items-center gap-6 text-body-sm font-body-sm">
            <Link
              href="/privacy/"
              className="text-[#B8C0B7] dark:text-[#A9B3AB] hover:text-[#FFFFFF] dark:hover:text-[#FFFFFF] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact/"
              className="text-[#B8C0B7] dark:text-[#A9B3AB] hover:text-[#FFFFFF] dark:hover:text-[#FFFFFF] transition-colors duration-200"
            >
              Terms of Advisory
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
