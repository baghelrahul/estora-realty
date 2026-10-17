"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { properties, Property } from "@/data/properties";

export function PropertiesMarketplace() {
  const searchParams = useSearchParams();
  const initialPurpose = searchParams.get("purpose") === "Rent" ? "Rent" : "Buy";
  const initialType = searchParams.get("type") || "all";

  const [purpose, setPurpose] = useState<"Buy" | "Rent">(initialPurpose);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(
    initialType !== "all" ? [initialType] : ["Apartment", "Villa", "Independent House"]
  );
  const [priceSort, setPriceSort] = useState("Recommended");
  const [bedsFilter, setBedsFilter] = useState("Any");
  const [bathsFilter, setBathsFilter] = useState("Any");
  const [minArea, setMinArea] = useState<string>("3500");
  const [maxArea, setMaxArea] = useState<string>("12000");
  const [isListView, setIsListView] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Property types list with counts
  const propertyTypes = [
    { label: "Apartment", count: 48 },
    { label: "Villa", count: 36 },
    { label: "Independent House", count: 22 },
    { label: "Plot / Land", count: 14 },
    { label: "Commercial", count: 8 },
  ];

  const handleTypeToggle = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleClearAll = () => {
    setSelectedTypes([]);
    setBedsFilter("Any");
    setBathsFilter("Any");
    setMinArea("");
    setMaxArea("");
    setPriceSort("Recommended");
  };

  // Filtered & Sorted Properties
  const filteredProperties = useMemo(() => {
    let result = [...properties];

    if (selectedTypes.length > 0) {
      result = result.filter((p) =>
        selectedTypes.some((t) => p.typology.toLowerCase().includes(t.toLowerCase()))
      );
    }

    if (bedsFilter !== "Any") {
      const minBeds = parseInt(bedsFilter.replace("+", ""), 10);
      result = result.filter((p) => p.beds >= minBeds);
    }

    if (bathsFilter !== "Any") {
      const minBaths = parseInt(bathsFilter.replace("+", ""), 10);
      result = result.filter((p) => p.baths >= minBaths);
    }

    if (priceSort === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (priceSort === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedTypes, bedsFilter, bathsFilter, priceSort]);

  return (
    <div className="w-full">
      {/* Mobile filter toggle bar */}
      <div className="lg:hidden mb-6 flex items-center justify-between bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/60 shadow-sm">
        <button
          type="button"
          onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          className="inline-flex items-center gap-2 text-label-lg font-label-lg text-primary font-medium"
        >
          <span className="material-symbols-outlined text-lg">filter_list</span>
          <span>{mobileFilterOpen ? "Hide Filters" : "Filter Properties"}</span>
        </button>
        <span className="text-body-sm font-body-sm text-outline">
          {filteredProperties.length} available
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ====================================== */}
        {/* LEFT FILTER SIDEBAR                    */}
        {/* ====================================== */}
        <aside
          className={`lg:col-span-4 xl:col-span-3 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/60 space-y-7 lg:sticky lg:top-28 shadow-sm ${
            mobileFilterOpen ? "block" : "hidden lg:block"
          }`}
        >
          <div className="flex items-center justify-between pb-4 border-b border-outline-variant/40">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">filter_list</span>
              <h2 className="text-headline-sm font-headline-sm text-primary">Filters</h2>
            </div>
            <button
              onClick={handleClearAll}
              className="text-label-caps font-label-caps uppercase text-secondary hover:text-primary transition-colors duration-150 underline underline-offset-4 cursor-pointer"
              type="button"
            >
              Clear All
            </button>
          </div>

          {/* Property Purpose */}
          <div>
            <label className="block text-label-caps font-label-caps uppercase text-outline mb-2.5">
              Property Purpose
            </label>
            <div className="grid grid-cols-2 p-1 bg-surface-container rounded-lg border border-outline-variant/40">
              <button
                type="button"
                onClick={() => setPurpose("Buy")}
                className={`py-1.5 text-center text-label-lg font-label-lg rounded transition-all cursor-pointer ${
                  purpose === "Buy"
                    ? "bg-primary-container text-surface shadow-xs font-semibold"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                Buy
              </button>
              <button
                type="button"
                onClick={() => setPurpose("Rent")}
                className={`py-1.5 text-center text-label-lg font-label-lg rounded transition-all cursor-pointer ${
                  purpose === "Rent"
                    ? "bg-primary-container text-surface shadow-xs font-semibold"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                Rent
              </button>
            </div>
          </div>

          {/* Property Type */}
          <div>
            <label className="block text-label-caps font-label-caps uppercase text-outline mb-3">
              Property Type
            </label>
            <div className="space-y-2">
              {propertyTypes.map((pt) => {
                const checked = selectedTypes.includes(pt.label);
                return (
                  <label
                    key={pt.label}
                    className="flex items-center justify-between text-body-sm font-body-sm text-on-surface cursor-pointer select-none"
                  >
                    <span className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => handleTypeToggle(pt.label)}
                        className="w-4 h-4 rounded text-primary-container border-outline-variant focus:ring-primary-container cursor-pointer"
                      />
                      {pt.label}
                    </span>
                    <span className="text-outline text-xs">{pt.count}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Price Range */}
          <div className="pt-1 border-t border-outline-variant/30">
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-label-caps font-label-caps uppercase text-outline">
                Price Range
              </label>
              <span className="text-xs font-medium text-secondary">$1.0M – $25.0M+</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div>
                <span className="text-[0.65rem] text-outline block mb-1">Min Price</span>
                <select className="w-full bg-surface border border-outline-variant rounded-lg text-body-sm font-body-sm px-2 py-1.5 text-on-surface focus:border-primary focus:ring-0">
                  <option>$1,000,000</option>
                  <option>$2,500,000</option>
                  <option>$5,000,000</option>
                  <option>$7,500,000</option>
                </select>
              </div>
              <div>
                <span className="text-[0.65rem] text-outline block mb-1">Max Price</span>
                <select className="w-full bg-surface border border-outline-variant rounded-lg text-body-sm font-body-sm px-2 py-1.5 text-on-surface focus:border-primary focus:ring-0">
                  <option>$10,000,000</option>
                  <option defaultValue="$25,000,000+">$25,000,000+</option>
                  <option>$50,000,000+</option>
                </select>
              </div>
            </div>
            {/* Visual indicator slider bar */}
            <div className="relative pt-2 pb-1">
              <div className="h-1 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-primary-container w-3/4 ml-4" />
              </div>
              <div className="flex justify-between items-center mt-2 text-[0.7rem] text-outline font-label-caps">
                <span>$1M</span>
                <span>$12M</span>
                <span>$25M+</span>
              </div>
            </div>
          </div>

          {/* Bedrooms */}
          <div className="pt-1 border-t border-outline-variant/30">
            <label className="block text-label-caps font-label-caps uppercase text-outline mb-2.5">
              Bedrooms
            </label>
            <div className="flex flex-wrap gap-1.5">
              {["Any", "1+", "2+", "3+", "4+"].map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setBedsFilter(b)}
                  className={`px-3 py-1.5 rounded-lg border text-body-sm font-body-sm transition-all cursor-pointer ${
                    bedsFilter === b
                      ? "bg-primary-container text-surface border-primary-container font-semibold"
                      : "border-outline-variant text-on-surface-variant hover:border-primary"
                  }`}
                >
                  {b === "Any" ? "Any" : `${b} Beds`}
                </button>
              ))}
            </div>
          </div>

          {/* Bathrooms */}
          <div className="pt-1 border-t border-outline-variant/30">
            <label className="block text-label-caps font-label-caps uppercase text-outline mb-2.5">
              Bathrooms
            </label>
            <div className="grid grid-cols-4 gap-1.5 text-center">
              {["1+", "2+", "3+", "4+"].map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setBathsFilter(bathsFilter === b ? "Any" : b)}
                  className={`py-1.5 rounded-lg border text-body-sm font-body-sm transition-all cursor-pointer ${
                    bathsFilter === b
                      ? "bg-primary-container text-surface border-primary-container font-semibold"
                      : "border-outline-variant hover:border-primary text-on-surface"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Property Area */}
          <div className="pt-1 border-t border-outline-variant/30">
            <div className="flex justify-between items-center mb-2.5">
              <label className="text-label-caps font-label-caps uppercase text-outline">
                Property Area
              </label>
              <span className="text-[0.7rem] uppercase tracking-wider font-semibold text-secondary">
                Sq Ft
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <input
                  type="number"
                  value={minArea}
                  onChange={(e) => setMinArea(e.target.value)}
                  placeholder="Min Area"
                  className="w-full bg-surface border border-outline-variant rounded-lg text-body-sm font-body-sm px-2.5 py-1.5 text-on-surface focus:border-primary focus:ring-0"
                />
                <span className="absolute right-2 top-2 text-[0.65rem] text-outline pointer-events-none">
                  SQ FT
                </span>
              </div>
              <div className="relative">
                <input
                  type="number"
                  value={maxArea}
                  onChange={(e) => setMaxArea(e.target.value)}
                  placeholder="Max Area"
                  className="w-full bg-surface border border-outline-variant rounded-lg text-body-sm font-body-sm px-2.5 py-1.5 text-on-surface focus:border-primary focus:ring-0"
                />
                <span className="absolute right-2 top-2 text-[0.65rem] text-outline pointer-events-none">
                  SQ FT
                </span>
              </div>
            </div>
          </div>

          {/* Furnishing */}
          <div className="pt-1 border-t border-outline-variant/30">
            <label className="block text-label-caps font-label-caps uppercase text-outline mb-2.5">
              Furnishing
            </label>
            <div className="space-y-2">
              {["Fully Furnished", "Semi-Furnished", "Unfurnished"].map((f, i) => (
                <label key={f} className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface cursor-pointer">
                  <input
                    type="radio"
                    name="furnishing"
                    defaultChecked={i === 0}
                    className="text-primary-container border-outline-variant focus:ring-primary-container cursor-pointer"
                  />
                  {f}
                </label>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="pt-1 border-t border-outline-variant/30">
            <label className="block text-label-caps font-label-caps uppercase text-outline mb-2.5">
              Amenities
            </label>
            <div className="space-y-2">
              {[
                "Parking",
                "Balcony / Terrace",
                "Private Garden",
                "Swimming Pool",
                "Private Gym",
                "24/7 Security",
              ].map((amenity, i) => (
                <label key={amenity} className="flex items-center gap-2.5 text-body-sm font-body-sm text-on-surface cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={i !== 4}
                    className="w-4 h-4 rounded text-primary-container border-outline-variant focus:ring-primary-container cursor-pointer"
                  />
                  {amenity}
                </label>
              ))}
            </div>
          </div>

          {/* Sidebar Footer Actions */}
          <div className="pt-4 border-t border-outline-variant/40 space-y-3">
            <button
              type="button"
              onClick={() => setMobileFilterOpen(false)}
              className="w-full bg-primary-container hover:bg-[#323A35] text-surface py-3 rounded-lg text-label-lg font-label-lg transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
            >
              Apply Filters
            </button>
            <button
              type="button"
              onClick={handleClearAll}
              className="w-full py-1 text-center text-body-sm font-body-sm text-outline hover:text-primary transition-colors cursor-pointer"
            >
              Reset All Preferences
            </button>
          </div>
        </aside>

        {/* ====================================== */}
        {/* RIGHT-SIDE LISTING RESULTS AREA        */}
        {/* ====================================== */}
        <div className="lg:col-span-8 xl:col-span-9 space-y-6">
          {/* Results Header & Controls Bar */}
          <div className="bg-surface-container-lowest p-4 lg:px-6 rounded-xl border border-outline-variant/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-headline-sm font-headline-sm text-primary tracking-tight">
                Properties for You
              </h2>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                {filteredProperties.length} curated {filteredProperties.length === 1 ? "residence" : "residences"} found
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-outline font-label-caps uppercase hidden md:inline">
                  Sort:
                </span>
                <select
                  value={priceSort}
                  onChange={(e) => setPriceSort(e.target.value)}
                  className="bg-surface border border-outline-variant/80 rounded-lg text-body-sm font-body-sm px-3 py-1.5 text-on-surface focus:border-primary focus:ring-0"
                >
                  <option value="Recommended">Recommended</option>
                  <option value="Newest">Newest</option>
                  <option value="Price: Low to High">Price: Low to High</option>
                  <option value="Price: High to Low">Price: High to Low</option>
                </select>
              </div>

              {/* View Layout Toggle */}
              <div className="flex items-center border border-outline-variant/80 rounded-lg p-0.5 bg-surface">
                <button
                  type="button"
                  onClick={() => setIsListView(false)}
                  className={`p-1 rounded transition-colors ${
                    !isListView
                      ? "bg-surface-container-lowest text-primary shadow-xs"
                      : "text-outline hover:text-primary"
                  }`}
                  title="Grid View"
                >
                  <span className="material-symbols-outlined text-lg">grid_view</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsListView(true)}
                  className={`p-1 rounded transition-colors ${
                    isListView
                      ? "bg-surface-container-lowest text-primary shadow-xs"
                      : "text-outline hover:text-primary"
                  }`}
                  title="List View"
                >
                  <span className="material-symbols-outlined text-lg">view_list</span>
                </button>
              </div>
            </div>
          </div>

          {/* Properties Display */}
          {filteredProperties.length === 0 ? (
            <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-12 text-center space-y-4">
              <span className="material-symbols-outlined text-4xl text-outline">search_off</span>
              <h3 className="text-headline-sm font-headline-sm text-primary">
                No matching residences found
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant max-w-md mx-auto">
                Try loosening your filter parameters or resetting preferences to view our entire collection.
              </p>
              <button
                type="button"
                onClick={handleClearAll}
                className="inline-flex items-center px-6 py-2.5 bg-primary-container text-surface rounded-lg font-label-lg text-label-lg hover:bg-[#323A35] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : isListView ? (
            <div className="space-y-4">
              {filteredProperties.map((prop) => (
                <article
                  key={prop.id}
                  className="bg-surface-container-lowest rounded-xl border border-outline-variant/60 overflow-hidden flex flex-col md:flex-row group hover:shadow-[0_8px_24px_-4px_rgba(32,37,34,0.08)] transition-all duration-300"
                >
                  <div className="relative md:w-72 lg:w-80 h-56 md:h-auto overflow-hidden bg-surface-container flex-shrink-0">
                    <img
                      src={prop.image}
                      alt={prop.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <span className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-label-caps font-label-caps uppercase tracking-wider text-primary border border-outline-variant/40">
                      {prop.tag}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-headline-sm font-headline-sm text-primary font-bold">
                          {prop.priceFormatted}
                        </span>
                        <span className="font-label-caps text-label-caps uppercase text-secondary">
                          {prop.location}
                        </span>
                      </div>
                      <h3 className="text-headline-sm font-headline-sm text-primary mb-1">
                        {prop.title}
                      </h3>
                      <p className="font-body-sm font-body-sm text-outline mb-4">
                        {prop.address}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-outline-variant/40">
                      <div className="flex items-center gap-6 text-on-surface-variant font-body-sm text-body-sm">
                        <span>{prop.beds} Beds</span>
                        <span>{prop.baths} Baths</span>
                        <span>{prop.area}</span>
                      </div>
                      <Link
                        href="/property-details/"
                        className="inline-flex items-center gap-1.5 px-6 py-2 bg-primary-container text-surface hover:bg-[#323A35] rounded-lg text-label-lg font-label-lg transition-colors"
                      >
                        <span>View Details</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProperties.map((prop) => (
                <article
                  key={prop.id}
                  className="bg-surface-container-lowest rounded-xl border border-outline-variant/60 overflow-hidden flex flex-col justify-between group hover:shadow-[0_8px_24px_-4px_rgba(32,37,34,0.08)] transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
                      <img
                        src={prop.image}
                        alt={prop.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <span className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-label-caps font-label-caps uppercase tracking-wider text-primary border border-outline-variant/40">
                        {prop.tag}
                      </span>
                      <div className="absolute bottom-3 left-3 bg-primary-container/90 backdrop-blur-md text-surface px-2.5 py-0.5 rounded text-[0.7rem] font-medium tracking-wide">
                        {prop.typology}
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex items-baseline justify-between mb-1.5">
                        <span className="text-headline-sm font-headline-sm text-primary tracking-tight font-bold">
                          {prop.priceFormatted}
                        </span>
                      </div>
                      <h3 className="text-body-lg font-semibold text-primary mb-1 group-hover:text-secondary transition-colors">
                        {prop.title}
                      </h3>
                      <p className="text-body-sm font-body-sm text-outline flex items-center gap-1 mb-4">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        {prop.location}
                      </p>

                      {/* Spec hairline row */}
                      <div className="grid grid-cols-3 py-2.5 border-y border-outline-variant/40 text-center mb-4">
                        <div>
                          <span className="text-[0.6875rem] font-label-caps uppercase text-outline block">
                            Beds
                          </span>
                          <span className="text-body-sm font-semibold text-primary">
                            {prop.beds}
                          </span>
                        </div>
                        <div className="border-x border-outline-variant/40">
                          <span className="text-[0.6875rem] font-label-caps uppercase text-outline block">
                            Baths
                          </span>
                          <span className="text-body-sm font-semibold text-primary">
                            {prop.baths}
                          </span>
                        </div>
                        <div>
                          <span className="text-[0.6875rem] font-label-caps uppercase text-outline block">
                            Area
                          </span>
                          <span className="text-body-sm font-semibold text-primary">
                            {prop.area}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      href="/property-details/"
                      className="block text-center w-full border border-primary-container text-primary-container hover:bg-primary-container hover:text-surface py-2 rounded-lg text-label-lg font-label-lg transition-colors duration-200"
                    >
                      View Details
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          <nav
            aria-label="Pagination"
            className="pt-8 flex items-center justify-between border-t border-outline-variant/40"
          >
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-1.5 px-4 py-2 text-body-sm font-body-sm text-on-surface hover:text-secondary transition-colors disabled:opacity-40"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              <span>Previous</span>
            </button>
            <div className="flex items-center gap-1">
              <span className="w-9 h-9 rounded flex items-center justify-center bg-primary-container text-surface text-body-sm font-semibold">
                1
              </span>
              <button
                type="button"
                className="w-9 h-9 rounded flex items-center justify-center text-on-surface-variant hover:bg-surface-container text-body-sm transition-colors cursor-pointer"
              >
                2
              </button>
              <button
                type="button"
                className="w-9 h-9 rounded flex items-center justify-center text-on-surface-variant hover:bg-surface-container text-body-sm transition-colors cursor-pointer"
              >
                3
              </button>
              <span className="w-8 text-center text-outline text-body-sm">…</span>
              <button
                type="button"
                className="w-9 h-9 rounded flex items-center justify-center text-on-surface-variant hover:bg-surface-container text-body-sm transition-colors cursor-pointer"
              >
                12
              </button>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-body-sm font-body-sm text-on-surface hover:text-secondary transition-colors cursor-pointer"
            >
              <span>Next</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
