"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function HomeSearchForm() {
  const router = useRouter();
  const [purpose, setPurpose] = useState<"Buy" | "Rent">("Buy");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [bedrooms, setBedrooms] = useState("all");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set("purpose", purpose);
    if (location) params.set("location", location);
    if (propertyType !== "all") params.set("type", propertyType);
    if (priceRange !== "all") params.set("price", priceRange);
    if (bedrooms !== "all") params.set("beds", bedrooms);

    router.push(`/properties/?${params.toString()}`);
  };

  return (
    <section className="relative -mt-20 lg:-mt-28 z-20 max-w-7xl mx-auto px-6 lg:px-12 mb-24">
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/60 shadow-[0_8px_24px_-4px_rgba(32,37,34,0.06)] p-6 lg:p-8">
        {/* Tab Switcher */}
        <div className="flex items-center gap-2 mb-6 border-b border-outline-variant/40 pb-4">
          <button
            type="button"
            onClick={() => setPurpose("Buy")}
            className={`px-5 py-2 font-label-lg text-label-lg rounded-lg transition-colors ${
              purpose === "Buy"
                ? "bg-[#202522] text-[#FAF9F5] dark:bg-[#F2F1EC] dark:text-[#111412] shadow-xs font-semibold"
                : "text-on-surface-variant hover:text-primary hover:bg-surface-container font-medium"
            }`}
          >
            Buy
          </button>
          <button
            type="button"
            onClick={() => setPurpose("Rent")}
            className={`px-5 py-2 font-label-lg text-label-lg rounded-lg transition-colors cursor-pointer ${
              purpose === "Rent"
                ? "bg-[#202522] text-[#FAF9F5] dark:bg-[#F2F1EC] dark:text-[#111412] shadow-xs font-semibold"
                : "text-on-surface-variant hover:text-primary hover:bg-surface-container font-medium"
            }`}
          >
            Rent
          </button>
        </div>

        {/* Form Elements Grid */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          {/* Location */}
          <div className="flex flex-col gap-1.5">
            <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
              Location
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">
                location_on
              </span>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., Beverly Hills, Aspen"
                className="w-full h-12 pl-10 pr-4 bg-surface-container-lowest border border-outline-variant/80 rounded-lg font-body-md text-body-md text-primary placeholder:text-outline focus:outline-none focus:border-primary-container"
              />
            </div>
          </div>

          {/* Property Type */}
          <div className="flex flex-col gap-1.5">
            <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
              Property Type
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">
                home_work
              </span>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full h-12 pl-10 pr-8 bg-surface-container-lowest border border-outline-variant/80 rounded-lg font-body-md text-body-md text-primary focus:outline-none focus:border-primary-container appearance-none cursor-pointer"
              >
                <option value="all">All Typologies</option>
                <option value="Villa">Modern & Stone Villa</option>
                <option value="Apartment">Apartment & Penthouse</option>
                <option value="Architectural Estate">Architectural Estate</option>
                <option value="Independent House">Independent House</option>
                <option value="Plot / Land">Plot / Land</option>
                <option value="Commercial">Commercial Atelier</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 pointer-events-none text-outline text-[18px]">
                expand_more
              </span>
            </div>
          </div>

          {/* Price Range */}
          <div className="flex flex-col gap-1.5">
            <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
              Price Range
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">
                payments
              </span>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full h-12 pl-10 pr-8 bg-surface-container-lowest border border-outline-variant/80 rounded-lg font-body-md text-body-md text-primary focus:outline-none focus:border-primary-container appearance-none cursor-pointer"
              >
                {purpose === "Buy" ? (
                  <>
                    <option value="all">Any Price</option>
                    <option value="1.5-3">$1.5M - $3M</option>
                    <option value="3-7.5">$3M - $7.5M</option>
                    <option value="7.5-15">$7.5M - $15M</option>
                    <option value="15+">$15M+</option>
                  </>
                ) : (
                  <>
                    <option value="all">Any Monthly Rent</option>
                    <option value="under-25k">Under $25,000 / mo</option>
                    <option value="25k-50k">$25,000 – $50,000 / mo</option>
                    <option value="50k+">$50,000+ / mo</option>
                  </>
                )}
              </select>
              <span className="material-symbols-outlined absolute right-3 pointer-events-none text-outline text-[18px]">
                expand_more
              </span>
            </div>
          </div>

          {/* Bedrooms */}
          <div className="flex flex-col gap-1.5">
            <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
              Bedrooms
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">
                bed
              </span>
              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="w-full h-12 pl-10 pr-8 bg-surface-container-lowest border border-outline-variant/80 rounded-lg font-body-md text-body-md text-primary focus:outline-none focus:border-primary-container appearance-none cursor-pointer"
              >
                <option value="all">Any Beds</option>
                <option value="1">1+ Beds</option>
                <option value="2">2+ Beds</option>
                <option value="3">3+ Beds</option>
                <option value="4">4+ Beds</option>
                <option value="5">5+ Beds</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 pointer-events-none text-outline text-[18px]">
                expand_more
              </span>
            </div>
          </div>

          {/* Search Button */}
          <div>
            <button
              type="submit"
              className="w-full h-12 bg-secondary text-white hover:bg-secondary/90 transition-colors duration-200 rounded-lg font-label-lg text-label-lg flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95 font-semibold"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
              <span>Search Properties</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
