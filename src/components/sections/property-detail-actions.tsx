"use client";

import { useState } from "react";
import { useWishlist } from "@/context/wishlist-context";

interface PropertyDetailActionsProps {
  propertyId: string;
  propertyTitle: string;
}

export function PropertyDetailActions({ propertyId, propertyTitle }: PropertyDetailActionsProps) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const [copied, setCopied] = useState(false);
  const wishlisted = isWishlisted(propertyId);

  const handleShare = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // ignore
    }
  };

  return (
    <div className="flex items-center gap-2.5">
      <button
        type="button"
        onClick={() => toggleWishlist(propertyId)}
        aria-label={wishlisted ? "Remove from saved wishlist" : "Save to wishlist"}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-label-lg font-label-lg transition-all duration-200 cursor-pointer ${
          wishlisted
            ? "bg-secondary-container border-secondary/40 text-primary font-semibold"
            : "border-outline-variant bg-surface hover:bg-surface-container text-on-surface-variant hover:text-primary"
        }`}
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
        <span>{wishlisted ? "Saved in Wishlist" : "Save to Wishlist"}</span>
      </button>

      <button
        type="button"
        onClick={handleShare}
        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-outline-variant bg-surface hover:bg-surface-container text-on-surface-variant hover:text-primary text-label-lg font-label-lg transition-colors cursor-pointer"
        title="Share Residence Link"
      >
        <span className="material-symbols-outlined text-[18px]">
          {copied ? "check" : "share"}
        </span>
        <span className="hidden sm:inline">{copied ? "Link Copied" : "Share"}</span>
      </button>
    </div>
  );
}
