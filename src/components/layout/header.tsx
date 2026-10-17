"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        <div className="flex items-center gap-4">
          <Link
            href="/contact/"
            className="hidden sm:inline-flex items-center justify-center font-label-lg text-label-lg px-5 py-2.5 rounded-lg border border-primary-container text-primary-container hover:bg-primary-container hover:text-surface transition-colors duration-200"
          >
            Contact Us
          </Link>
          <Link
            href="/contact/?type=divestment"
            className="inline-flex items-center justify-center font-label-lg text-label-lg px-5 sm:px-6 py-2.5 rounded-lg bg-primary-container text-surface hover:bg-[#323A35] transition-colors duration-200"
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
          </nav>
          <div className="pt-4 border-t border-outline-variant/40 flex flex-col gap-3">
            <Link
              href="/contact/"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 font-label-lg text-label-lg rounded-lg border border-primary-container text-primary-container hover:bg-primary-container hover:text-surface transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/contact/?type=divestment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 font-label-lg text-label-lg rounded-lg bg-primary-container text-surface hover:bg-[#323A35] transition-colors"
            >
              List Your Property
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
