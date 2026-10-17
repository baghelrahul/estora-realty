"use client";

import Link from "next/link";
import { useWishlist } from "@/context/wishlist-context";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/sections/property-card";

export function WishlistContent() {
  const { wishlist } = useWishlist();

  const wishlistedProperties = properties.filter((p) => wishlist.includes(p.id));

  return (
    <div className="w-full">
      {/* 1. Header & Breadcrumbs */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-label-caps font-label-caps text-on-surface-variant uppercase mb-4"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="text-outline-variant">/</span>
          <span className="text-primary font-semibold">Wishlist</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-outline-variant/40">
          <div>
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">
              Private Collection
            </span>
            <h1 className="text-display-hero-mobile sm:text-headline-xl font-headline-xl text-primary tracking-tight">
              Your Saved Residences
            </h1>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg leading-relaxed">
            Review the architectural residences you have shortlisted for confidential inquiries or private walkthrough tours.
          </p>
        </div>
      </section>

      {/* 2. Wishlist Items Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        {wishlistedProperties.length === 0 ? (
          <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-12 sm:p-16 text-center space-y-6 max-w-2xl mx-auto shadow-sm my-8">
            <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-outline mx-auto">
              <span className="material-symbols-outlined text-3xl">favorite_border</span>
            </div>
            <h2 className="text-headline-sm font-headline-sm text-primary">
              Your wishlist is currently empty
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
              As you explore our portfolio of modernist pavilions, historic stone estates, and waterfront sanctums, click the heart icon on any residence to save it to your private collection.
            </p>
            <div className="pt-2">
              <Link
                href="/properties/"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-container text-surface hover:bg-[#323A35] rounded-lg font-label-lg text-label-lg transition-colors shadow-sm"
              >
                <span>Browse Curated Portfolio</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-8">
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Showing <strong>{wishlistedProperties.length}</strong> saved {wishlistedProperties.length === 1 ? "residence" : "residences"}
              </p>
              <Link
                href="/contact/?type=walkthrough"
                className="inline-flex items-center gap-2 text-label-lg font-label-lg text-secondary hover:text-primary transition-colors underline underline-offset-4"
              >
                <span>Request Itinerary for Saved Residences</span>
                <span className="material-symbols-outlined text-sm">north_east</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wishlistedProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
