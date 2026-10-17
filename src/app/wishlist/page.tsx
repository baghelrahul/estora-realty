import type { Metadata } from "next";
import { WishlistContent } from "@/components/sections/wishlist-content";

export const metadata: Metadata = {
  title: "Your Saved Private Collection & Curated Residences",
  description:
    "Review your saved shortlist of modernist pavilions, historic estates, and luxury penthouses for confidential inquiries and private walkthroughs.",
};

export default function WishlistPage() {
  return <WishlistContent />;
}
