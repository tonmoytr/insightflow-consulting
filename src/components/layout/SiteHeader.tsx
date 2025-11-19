"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md"
          : "border-b border-slate-200/50 bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 transition-transform hover:scale-[1.02]"
          >
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 shadow-md shadow-blue-500/25 transition-shadow group-hover:shadow-lg group-hover:shadow-blue-500/30">
              <svg
                className="h-5 w-5 text-white transition-transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold leading-none text-slate-900">
                InsightFlow
              </span>
              <span className="text-[10px] leading-none text-slate-500">
                AI Consulting
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-blue-600" />
                  )}
                </Link>
              );
            })}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition-all hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-50 active:bg-slate-100 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <div className="flex h-4 w-5 flex-col items-center justify-center gap-1">
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "translate-y-[0.375rem] rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "-translate-y-[0.375rem] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-300`}
      >
        <nav className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`group relative overflow-hidden rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                      active
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md shadow-blue-500/25"
                        : "text-slate-700 hover:bg-slate-50 active:bg-slate-100"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {!active && (
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-50 to-blue-100 transition-transform duration-300 group-hover:translate-x-0" />
                    )}
                  </Link>
                );
              })}

              {/* Mobile CTA */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 rounded-lg border-2 border-blue-600 bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 hover:border-blue-700 active:scale-95"
              >
                Get Started →
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 -z-10 bg-slate-900/20 backdrop-blur-sm transition-opacity md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
