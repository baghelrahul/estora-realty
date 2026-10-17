"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWishlist } from "@/context/wishlist-context";
import { useTheme } from "@/context/theme-context";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { count } = useWishlist();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/" },
    { label: "Properties", href: "/properties/" },
    { label: "Contact", href: "/contact/" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "";
    }
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header className="bg-surface/90 backdrop-blur-md w-full top-0 sticky z-50 border-b border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link
            href="/"
            className="text-headline-sm font-headline-sm tracking-widest uppercase text-primary focus:outline-none"
          >
            ESTORA REALTY
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`pb-1 font-label-lg text-label-lg transition-all duration-200 ease-out active:scale-95 ${
                    active
                      ? "border-b-2 border-primary text-primary font-medium"
                      : "text-on-surface-variant hover:text-primary transition-colors"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Wishlist Link with Live Counter Badge */}
          <Link
            href="/wishlist/"
            className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors duration-200 border ${
              pathname.startsWith("/wishlist")
                ? "bg-surface-container border-primary text-primary"
                : "border-transparent text-primary hover:bg-surface-container"
            }`}
            title="Saved Wishlist"
          >
            <span
              className="material-symbols-outlined text-[20px]"
              style={{
                fontVariationSettings: count > 0 ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              favorite
            </span>
            <span className="hidden sm:inline font-label-lg text-label-lg">
              Wishlist
            </span>
            {count > 0 && (
              <span className="min-w-[20px] h-5 px-1.5 rounded-full bg-secondary text-surface text-[11px] font-bold flex items-center justify-center animate-in zoom-in duration-150">
                {count}
              </span>
            )}
          </Link>

          {/* Dark / Light Mode Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-primary hover:bg-surface-container transition-colors duration-200 border border-outline-variant/60 cursor-pointer shadow-xs active:scale-95"
            title={theme === "dark" ? "Light Mode" : "Dark Mode"}
          >
            <span className="material-symbols-outlined text-[19px]">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>

          <Link
            href="/contact/"
            className="hidden sm:inline-flex items-center justify-center font-label-lg text-label-lg px-4 lg:px-5 py-2.5 rounded-lg border border-primary-container text-primary-container hover:bg-primary-container hover:text-surface dark:border-outline-variant/80 dark:text-primary dark:hover:bg-surface-container transition-colors duration-200"
          >
            Contact Us
          </Link>

          <Link
            href="/contact/?type=divestment"
            className="inline-flex items-center justify-center font-label-lg text-label-lg px-4 sm:px-6 py-2.5 rounded-lg bg-primary-container text-surface hover:bg-[#323A35] dark:bg-primary dark:text-on-primary dark:hover:bg-primary/90 transition-colors duration-200 font-semibold shadow-xs"
          >
            List Your Property
          </Link>

          {/* Mobile hamburger trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-primary hover:bg-surface-container transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-b border-outline-variant/60 px-6 py-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-body-lg font-medium py-2 px-3 rounded-lg transition-colors ${
                    active
                      ? "bg-surface-container text-primary font-semibold"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/wishlist/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-body-lg font-medium py-2 px-3 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container/50"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">favorite</span>
                <span>Saved Wishlist</span>
              </div>
              {count > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-secondary text-surface text-xs font-bold">
                  {count}
                </span>
              )}
            </Link>
          </nav>
          <div className="pt-4 border-t border-outline-variant/40 flex flex-col gap-3">
            <div className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-surface-container/50 border border-outline-variant/40">
              <span className="text-body-sm font-body-sm text-on-surface-variant font-medium">Appearance</span>
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-outline-variant/60 text-label-lg font-label-lg text-primary hover:bg-surface-container transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {theme === "dark" ? "light_mode" : "dark_mode"}
                </span>
                <span>{theme === "dark" ? "Light" : "Dark"}</span>
              </button>
            </div>
            <Link
              href="/contact/"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 font-label-lg text-label-lg rounded-lg border border-primary-container text-primary-container hover:bg-primary-container hover:text-surface dark:border-outline-variant/80 dark:text-primary dark:hover:bg-surface-container transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/contact/?type=divestment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 font-label-lg text-label-lg rounded-lg bg-primary-container text-surface hover:bg-[#323A35] dark:bg-primary dark:text-on-primary dark:hover:bg-primary/90 transition-colors font-semibold shadow-xs"
            >
              List Your Property
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
