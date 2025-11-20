"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Lab", href: "/lab" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" 
        : "bg-white/90 backdrop-blur-sm shadow-sm"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">IF</span>
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                InsightFlow
              </div>
              <div className="text-xs text-gray-600 -mt-1">AI Consulting</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                    isActive
                      ? "text-green-600 bg-green-50"
                      : "text-gray-800 hover:text-green-600 hover:bg-green-50"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-green-500 rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <Link
              href="/lab"
              className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              Try AI Tools
            </Link> */}
            <Link
              href="/contact"
              className="btn-primary px-6 py-2.5 text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <div className="w-6 h-6 relative">
              <span className={`block absolute h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${
                isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
              }`} />
              <span className={`block absolute h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`block absolute h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${
                isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <nav className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-green-600 bg-green-50"
                      : "text-gray-800 hover:text-green-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-4 space-y-3">
              <Link
                href="/lab"
                className="block px-4 py-3 text-center bg-gray-100 text-gray-800 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Try AI Tools
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 text-center btn-primary"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
