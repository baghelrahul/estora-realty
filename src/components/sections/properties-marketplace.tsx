"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { properties, Property } from "@/data/properties";
import { PropertyCard } from "@/components/sections/property-card";
import { useWishlist } from "@/context/wishlist-context";

const PAGE_SIZE = 6;

export function PropertiesMarketplace() {
  const searchParams = useSearchParams();
  const { isWishlisted, toggleWishlist } = useWishlist();

  // Read URL params
  const paramPurpose = searchParams.get("purpose");
  const paramLocation = searchParams.get("location") || "";
  const paramType = searchParams.get("type") || "all";
  const paramPrice = searchParams.get("price") || "all";
  const paramBeds = searchParams.get("beds");

  // State
  const [purpose, setPurpose] = useState<"All" | "Buy" | "Rent">(
    paramPurpose === "Rent" ? "Rent" : paramPurpose === "Buy" ? "Buy" : "All"
  );
  const [searchLocation, setSearchLocation] = useState<string>(paramLocation);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(
    paramType !== "all" ? [paramType] : []
  );
  const [minPrice, setMinPrice] = useState<string>(
    paramPrice === "1.5-3" ? "1500000" : paramPrice === "3-7.5" ? "3000000" : paramPrice === "7.5-15" ? "7500000" : paramPrice === "15+" ? "15000000" : "0"
  );
  const [maxPrice, setMaxPrice] = useState<string>(
    paramPrice === "1.5-3" ? "3000000" : paramPrice === "3-7.5" ? "7500000" : paramPrice === "7.5-15" ? "15000000" : "50000000"
  );
  const [bedsFilter, setBedsFilter] = useState<string>(
    paramBeds ? `${paramBeds}+` : "Any"
  );
  const [bathsFilter, setBathsFilter] = useState<string>("Any");
  const [minArea, setMinArea] = useState<string>("");
  const [maxArea, setMaxArea] = useState<string>("");
  const [furnishing, setFurnishing] = useState<string>("All");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [priceSort, setPriceSort] = useState("Recommended");
  const [isListView, setIsListView] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Synchronize when URL search params change
  useEffect(() => {
    if (paramPurpose === "Rent" || paramPurpose === "Buy") {
      setPurpose(paramPurpose);
    }
    if (paramLocation) {
      setSearchLocation(paramLocation);
    }
    if (paramType && paramType !== "all") {
      setSelectedTypes([paramType]);
    }
    if (paramBeds) {
      setBedsFilter(`${paramBeds}+`);
    }
    if (paramPrice && paramPrice !== "all") {
      if (paramPrice === "1.5-3") {
        setMinPrice("1500000");
        setMaxPrice("3000000");
      } else if (paramPrice === "3-7.5") {
        setMinPrice("3000000");
        setMaxPrice("7500000");
      } else if (paramPrice === "7.5-15") {
        setMinPrice("7500000");
        setMaxPrice("15000000");
      } else if (paramPrice === "15+") {
        setMinPrice("15000000");
        setMaxPrice("50000000");
      } else if (paramPrice === "under-25k") {
        setMinPrice("0");
        setMaxPrice("25000");
      } else if (paramPrice === "25k-50k") {
        setMinPrice("25000");
        setMaxPrice("50000");
      } else if (paramPrice === "50k+") {
        setMinPrice("50000");
        setMaxPrice("200000");
      }
    }
    setCurrentPage(1);
  }, [paramPurpose, paramLocation, paramType, paramPrice, paramBeds]);

  // Defined typologies with live counts from data
  const typologyDefinitions = useMemo(() => [
    { label: "Apartment", match: ["Apartment", "Urban Penthouse"] },
    { label: "Villa", match: ["Modern Villa", "Restored Stone Villa"] },
    { label: "Architectural Estate", match: ["Architectural Estate"] },
    { label: "Independent House", match: ["Independent House"] },
    { label: "Plot / Land", match: ["Plot / Land"] },
    { label: "Commercial", match: ["Commercial"] },
  ], []);

  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    typologyDefinitions.forEach((def) => {
      counts[def.label] = properties.filter((p) =>
        def.match.some((m) => p.typology.toLowerCase().includes(m.toLowerCase()))
      ).length;
    });
    return counts;
  }, [typologyDefinitions]);

  const handleTypeToggle = (label: string) => {
    setSelectedTypes((prev) =>
      prev.includes(label) ? prev.filter((t) => t !== label) : [...prev, label]
    );
    setCurrentPage(1);
  };

  const handleAmenityToggle = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
    setCurrentPage(1);
  };

  const handleClearAll = () => {
    setPurpose("All");
    setSearchLocation("");
    setSelectedTypes([]);
    setMinPrice("0");
    setMaxPrice("50000000");
    setBedsFilter("Any");
    setBathsFilter("Any");
    setMinArea("");
    setMaxArea("");
    setFurnishing("All");
    setSelectedAmenities([]);
    setPriceSort("Recommended");
    setCurrentPage(1);
  };

  // Filter & Sort
  const filteredProperties = useMemo(() => {
    let result = [...properties];

    // Purpose filter
    if (purpose !== "All") {
      result = result.filter((p) => p.purpose === purpose);
    }

    // Search query (location, title, address)
    if (searchLocation.trim()) {
      const q = searchLocation.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.location.toLowerCase().includes(q) ||
          p.title.toLowerCase().includes(q) ||
          p.address.toLowerCase().includes(q) ||
          p.typology.toLowerCase().includes(q)
      );
    }

    // Typology filter
    if (selectedTypes.length > 0) {
      result = result.filter((p) => {
        return selectedTypes.some((selected) => {
          const def = typologyDefinitions.find((d) => d.label === selected);
          if (def) {
            return def.match.some((m) =>
              p.typology.toLowerCase().includes(m.toLowerCase())
            );
          }
          return p.typology.toLowerCase().includes(selected.toLowerCase());
        });
      });
    }

    // Price range
    const minP = parseFloat(minPrice) || 0;
    const maxP = parseFloat(maxPrice) || 999999999;
    result = result.filter((p) => p.price >= minP && p.price <= maxP);

    // Beds filter
    if (bedsFilter !== "Any") {
      const minBeds = parseInt(bedsFilter.replace("+", ""), 10);
      result = result.filter((p) => p.beds >= minBeds);
    }

    // Baths filter
    if (bathsFilter !== "Any") {
      const minBaths = parseInt(bathsFilter.replace("+", ""), 10);
      result = result.filter((p) => p.baths >= minBaths);
    }

    // Area filters
    if (minArea.trim()) {
      const minA = parseInt(minArea, 10);
      if (!isNaN(minA)) {
        result = result.filter((p) => p.areaSqFt >= minA);
      }
    }
    if (maxArea.trim()) {
      const maxA = parseInt(maxArea, 10);
      if (!isNaN(maxA)) {
        result = result.filter((p) => p.areaSqFt <= maxA);
      }
    }

    // Furnishing
    if (furnishing !== "All") {
      result = result.filter((p) => p.furnishing === furnishing);
    }

    // Amenities
    if (selectedAmenities.length > 0) {
      result = result.filter((p) =>
        selectedAmenities.every((amenity) => p.amenities?.includes(amenity))
      );
    }

    // Sorting
    if (priceSort === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (priceSort === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else if (priceSort === "Newest") {
      result.sort((a, b) => (b.builtYear || "").localeCompare(a.builtYear || ""));
    }

    return result;
  }, [
    purpose,
    searchLocation,
    selectedTypes,
    minPrice,
    maxPrice,
    bedsFilter,
    bathsFilter,
    minArea,
    maxArea,
    furnishing,
    selectedAmenities,
    priceSort,
    typologyDefinitions,
  ]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredProperties.length / PAGE_SIZE));
  const activePage = Math.min(currentPage, totalPages);
  const startIndex = (activePage - 1) * PAGE_SIZE;
  const paginatedProperties = filteredProperties.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 380, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* Mobile filter toggle bar */}
      <div className="lg:hidden mb-6 flex items-center justify-between bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/60 shadow-sm">
        <button
          type="button"
          onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          className="inline-flex items-center gap-2 text-label-lg font-label-lg text-primary font-medium cursor-pointer"
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

          {/* Search By Location / Keyword */}
          <div>
            <label className="block text-label-caps font-label-caps uppercase text-outline mb-2">
              Search Location / Keyword
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">
                search
              </span>
              <input
                type="text"
                value={searchLocation}
                onChange={(e) => {
                  setSearchLocation(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="City, neighborhood, title..."
                className="w-full bg-surface border border-outline-variant rounded-lg text-body-sm font-body-sm pl-9 pr-8 py-2 text-on-surface focus:border-primary focus:ring-0"
              />
              {searchLocation && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchLocation("");
                    setCurrentPage(1);
                  }}
                  className="absolute right-2.5 text-outline hover:text-primary"
                >
                  <span className="material-symbols-outlined text-base">close</span>
                </button>
              )}
            </div>
          </div>

          {/* Property Purpose */}
          <div>
            <label className="block text-label-caps font-label-caps uppercase text-outline mb-2.5">
              Property Purpose
            </label>
            <div className="grid grid-cols-3 p-1 bg-surface-container rounded-lg border border-outline-variant/40">
              <button
                type="button"
                onClick={() => {
                  setPurpose("All");
                  setCurrentPage(1);
                }}
                className={`py-1.5 text-center text-xs font-label-lg rounded transition-all cursor-pointer ${
                  purpose === "All"
                    ? "bg-primary-container text-surface shadow-xs font-semibold"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => {
                  setPurpose("Buy");
                  setCurrentPage(1);
                }}
                className={`py-1.5 text-center text-xs font-label-lg rounded transition-all cursor-pointer ${
                  purpose === "Buy"
                    ? "bg-primary-container text-surface shadow-xs font-semibold"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                Buy
              </button>
              <button
                type="button"
                onClick={() => {
                  setPurpose("Rent");
                  setCurrentPage(1);
                }}
                className={`py-1.5 text-center text-xs font-label-lg rounded transition-all cursor-pointer ${
                  purpose === "Rent"
                    ? "bg-primary-container text-surface shadow-xs font-semibold"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                Rent
              </button>
            </div>
          </div>

          {/* Property Typology */}
          <div>
            <label className="block text-label-caps font-label-caps uppercase text-outline mb-3">
              Property Typology
            </label>
            <div className="space-y-2">
              {typologyDefinitions.map((pt) => {
                const checked = selectedTypes.includes(pt.label);
                const count = typeCounts[pt.label] || 0;
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
                    <span className="text-outline text-xs">{count}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Price Range */}
          <div className="pt-1 border-t border-outline-variant/30">
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-label-caps font-label-caps uppercase text-outline">
                Price Filter
              </label>
              <span className="text-xs font-medium text-secondary">
                {minPrice === "0" && maxPrice === "50000000"
                  ? "All Prices"
                  : `$${(parseInt(minPrice, 10) / 1000000).toFixed(1)}M – $${(parseInt(maxPrice, 10) / 1000000).toFixed(1)}M`}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div>
                <span className="text-[0.65rem] text-outline block mb-1">Min Price</span>
                <select
                  value={minPrice}
                  onChange={(e) => {
                    setMinPrice(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-surface border border-outline-variant rounded-lg text-body-sm font-body-sm px-2 py-1.5 text-on-surface focus:border-primary focus:ring-0"
                >
                  <option value="0">Min (Any)</option>
                  <option value="1000000">$1,000,000</option>
                  <option value="2500000">$2,500,000</option>
                  <option value="5000000">$5,000,000</option>
                  <option value="7500000">$7,500,000</option>
                  <option value="10000000">$10,000,000</option>
                  <option value="15000000">$15,000,000</option>
                </select>
              </div>
              <div>
                <span className="text-[0.65rem] text-outline block mb-1">Max Price</span>
                <select
                  value={maxPrice}
                  onChange={(e) => {
                    setMaxPrice(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-surface border border-outline-variant rounded-lg text-body-sm font-body-sm px-2 py-1.5 text-on-surface focus:border-primary focus:ring-0"
                >
                  <option value="5000000">$5,000,000</option>
                  <option value="10000000">$10,000,000</option>
                  <option value="15000000">$15,000,000</option>
                  <option value="25000000">$25,000,000</option>
                  <option value="50000000">$50,000,000+</option>
                </select>
              </div>
            </div>
          </div>

          {/* Bedrooms */}
          <div className="pt-1 border-t border-outline-variant/30">
            <label className="block text-label-caps font-label-caps uppercase text-outline mb-2.5">
              Bedrooms
            </label>
            <div className="flex flex-wrap gap-1.5">
              {["Any", "1+", "2+", "3+", "4+", "5+"].map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => {
                    setBedsFilter(b);
                    setCurrentPage(1);
                  }}
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
              {["Any", "2+", "4+", "6+"].map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => {
                    setBathsFilter(b);
                    setCurrentPage(1);
                  }}
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
                  onChange={(e) => {
                    setMinArea(e.target.value);
                    setCurrentPage(1);
                  }}
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
                  onChange={(e) => {
                    setMaxArea(e.target.value);
                    setCurrentPage(1);
                  }}
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
              {["All", "Fully Furnished", "Semi-Furnished", "Unfurnished"].map((f) => (
                <label key={f} className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface cursor-pointer">
                  <input
                    type="radio"
                    name="furnishing"
                    checked={furnishing === f}
                    onChange={() => {
                      setFurnishing(f);
                      setCurrentPage(1);
                    }}
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
              ].map((amenity) => {
                const checked = selectedAmenities.includes(amenity);
                return (
                  <label key={amenity} className="flex items-center gap-2.5 text-body-sm font-body-sm text-on-surface cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => handleAmenityToggle(amenity)}
                      className="w-4 h-4 rounded text-primary-container border-outline-variant focus:ring-primary-container cursor-pointer"
                    />
                    {amenity}
                  </label>
                );
              })}
            </div>
          </div>

          {/* Sidebar Footer Actions */}
          <div className="pt-4 border-t border-outline-variant/40 space-y-3">
            <button
              type="button"
              onClick={() => setMobileFilterOpen(false)}
              className="w-full bg-primary-container hover:bg-[#323A35] text-surface py-3 rounded-lg text-label-lg font-label-lg transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
            >
              Apply Filters ({filteredProperties.length})
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
                Showing {filteredProperties.length === 0 ? 0 : startIndex + 1}–
                {Math.min(startIndex + PAGE_SIZE, filteredProperties.length)} of{" "}
                {filteredProperties.length} curated{" "}
                {filteredProperties.length === 1 ? "residence" : "residences"}
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
                  className={`p-1 rounded transition-colors cursor-pointer ${
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
                  className={`p-1 rounded transition-colors cursor-pointer ${
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
                className="inline-flex items-center px-6 py-2.5 bg-primary-container text-surface rounded-lg font-label-lg text-label-lg hover:bg-[#323A35] transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : isListView ? (
            <div className="space-y-4">
              {paginatedProperties.map((prop) => {
                const wishlisted = isWishlisted(prop.id);
                return (
                  <article
                    key={prop.id}
                    className="bg-surface-container-lowest rounded-xl border border-outline-variant/60 overflow-hidden flex flex-col md:flex-row group hover:shadow-[0_8px_24px_-4px_rgba(32,37,34,0.08)] transition-all duration-300"
                  >
                    <div className="relative md:w-72 lg:w-80 h-56 md:h-auto overflow-hidden bg-surface-container flex-shrink-0">
                      <Link href={`/properties/${prop.slug}/`} className="block w-full h-full">
                        <img
                          src={prop.image}
                          alt={prop.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      </Link>
                      <span className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-label-caps font-label-caps uppercase tracking-wider text-primary border border-outline-variant/40">
                        {prop.tag}
                      </span>
                      {/* Wishlist toggle button */}
                      <button
                        type="button"
                        aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleWishlist(prop.id);
                        }}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-surface transition-colors cursor-pointer shadow-sm z-10"
                      >
                        <span
                          className={`material-symbols-outlined text-[18px] ${
                            wishlisted ? "text-error" : "text-primary"
                          }`}
                          style={{
                            fontVariationSettings: wishlisted ? "'FILL' 1" : "'FILL' 0",
                          }}
                        >
                          favorite
                        </span>
                      </button>
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
                        <Link href={`/properties/${prop.slug}/`}>
                          <h3 className="text-headline-sm font-headline-sm text-primary mb-1 hover:text-secondary transition-colors">
                            {prop.title}
                          </h3>
                        </Link>
                        <p className="font-body-sm font-body-sm text-outline mb-4">
                          {prop.address}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-outline-variant/40">
                        <div className="flex items-center gap-6 text-on-surface-variant font-body-sm text-body-sm">
                          <span>{prop.beds > 0 ? `${prop.beds} Beds` : "Land"}</span>
                          <span>{prop.baths > 0 ? `${prop.baths} Baths` : "Enclave"}</span>
                          <span>{prop.area}</span>
                        </div>
                        <Link
                          href={`/properties/${prop.slug}/`}
                          className="inline-flex items-center gap-1.5 px-6 py-2 bg-primary-container text-surface hover:bg-[#323A35] rounded-lg text-label-lg font-label-lg transition-colors"
                        >
                          <span>View Details</span>
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {paginatedProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          )}

          {/* Functional Pagination Controls */}
          {totalPages > 1 && (
            <nav
              aria-label="Pagination Navigation"
              className="pt-8 flex items-center justify-between border-t border-outline-variant/40"
            >
              <button
                type="button"
                onClick={() => handlePageChange(activePage - 1)}
                disabled={activePage <= 1}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-body-sm font-body-sm text-on-surface hover:text-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                <span>Previous</span>
              </button>

              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  const isActive = pageNum === activePage;
                  return (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-9 h-9 rounded-lg flex items-center justify-center text-body-sm font-semibold transition-all cursor-pointer ${
                        isActive
                          ? "bg-primary-container text-surface shadow-xs"
                          : "text-on-surface-variant hover:bg-surface-container"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => handlePageChange(activePage + 1)}
                disabled={activePage >= totalPages}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-body-sm font-body-sm text-on-surface hover:text-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                <span>Next</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}
