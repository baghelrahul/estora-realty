"use client";

import Link from "next/link";
import { Property } from "@/data/properties";
import { useWishlist } from "@/context/wishlist-context";

interface PropertyCardProps {
  property: Property;
  compact?: boolean;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(property.id);

  return (
    <article className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl overflow-hidden hover:shadow-[0_8px_24px_-4px_rgba(32,37,34,0.08)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
          <Link href={`/properties/${property.slug}/`} className="block w-full h-full">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </Link>

          {/* Status Badge */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
            <span
              className={`px-2.5 sm:px-3 py-1 rounded text-label-caps font-label-caps uppercase border backdrop-blur-sm ${
                property.tag === "Just Listed"
                  ? "bg-secondary-container/90 text-on-secondary-container border-secondary/30"
                  : property.tag === "Under Offer"
                  ? "bg-tertiary-fixed text-on-tertiary-fixed-variant border-outline-variant/60"
                  : "bg-surface/90 text-primary border-outline-variant/40"
              }`}
            >
              {property.tag}
            </span>
          </div>

          {/* Favorite Wishlist button */}
          <button
            type="button"
            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(property.id);
            }}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-surface transition-colors cursor-pointer shadow-sm z-10"
          >
            <span
              className={`material-symbols-outlined text-[20px] transition-colors ${
                wishlisted ? "text-error" : "text-primary"
              }`}
              style={{
                fontVariationSettings: wishlisted ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              favorite
            </span>
          </button>

          {/* Typology label pill */}
          <div className="absolute bottom-3 left-3 bg-primary-container/90 backdrop-blur-md text-surface px-2.5 py-0.5 rounded text-[0.7rem] font-medium tracking-wide">
            {property.typology}
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-baseline justify-between mb-2">
            <span className="font-headline-sm text-headline-sm text-primary font-bold">
              {property.priceFormatted}
            </span>
            <span className="font-label-caps text-label-caps uppercase text-secondary">
              {property.location}
            </span>
          </div>

          <Link href={`/properties/${property.slug}/`}>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-secondary transition-colors">
              {property.title}
            </h3>
          </Link>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
            {property.address}
          </p>

          <div className="flex items-center justify-between border-t border-outline-variant/40 pt-4 text-on-surface-variant font-body-sm text-body-sm">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-outline">bed</span>
              <span>{property.beds > 0 ? `${property.beds} Beds` : "Land"}</span>
            </div>
            <div className="flex items-center gap-1.5 border-x border-outline-variant/40 px-3">
              <span className="material-symbols-outlined text-[18px] text-outline">bathtub</span>
              <span>{property.baths > 0 ? `${property.baths} Baths` : "Enclave"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-outline">square_foot</span>
              <span>{property.area}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
        <Link
          href={`/properties/${property.slug}/`}
          className="w-full text-center block border border-primary-container text-primary-container hover:bg-primary-container hover:text-surface dark:border-outline-variant/80 dark:text-primary dark:hover:bg-primary dark:hover:text-on-primary py-2.5 rounded-lg text-label-lg font-label-lg transition-colors duration-200 font-medium"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
