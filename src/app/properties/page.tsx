import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PropertiesMarketplace } from "@/components/sections/properties-marketplace";

export const metadata: Metadata = {
  title: "Available Private Portfolio & Curated Residences",
  description:
    "Explore our vetted collection of modernist pavilions, Tuscan stone villas, Manhattan atelier lofts, and waterfront sanctuaries.",
};

export default function PropertiesPage() {
  return (
    <div className="w-full">
      {/* 1. Header & Breadcrumb */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-label-caps font-label-caps text-on-surface-variant uppercase mb-4"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="text-outline-variant">/</span>
          <span className="text-primary font-semibold">Properties</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-outline-variant/40">
          <div>
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">
              Curated Residences
            </span>
            <h1 className="text-display-hero-mobile sm:text-headline-xl font-headline-xl text-primary tracking-tight">
              Available Private Portfolio
            </h1>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg leading-relaxed">
            Browse architectural masterpieces, historic villas, and luxury residences represented by our advisory with complete discretion.
          </p>
        </div>
      </section>

      {/* 2. Marketplace Layout */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <Suspense
          fallback={
            <div className="py-24 text-center text-outline font-body-md">
              Loading architectural portfolio...
            </div>
          }
        >
          <PropertiesMarketplace />
        </Suspense>
      </section>
    </div>
  );
}
