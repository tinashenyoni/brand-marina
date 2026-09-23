"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "Our Story" },
  { href: "/locations", label: "Locations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement Bar */}
      <div className="bg-emerald-deep text-white text-[11px] py-1.5 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-16">
          <span>Free Personal Styling Consultations</span>
          <span>•</span>
          <span>5 Branches Across Zimbabwe & Zambia</span>
          <span>•</span>
          <span>WhatsApp: +263 772 800 883</span>
          <span>•</span>
          <span>Free Personal Styling Consultations</span>
          <span>•</span>
          <span>5 Branches Across Zimbabwe & Zambia</span>
          <span>•</span>
          <span>WhatsApp: +263 772 800 883</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-warm-white/98 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
            : "bg-black/20 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 group">
              <span className={`font-display text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-charcoal" : "text-white"
              }`}>
                BRAND
              </span>
              <span className={`font-display text-lg sm:text-xl font-light italic transition-colors duration-300 ${
                scrolled ? "text-terracotta" : "text-brass-light"
              }`}>
                MARINA
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-[13px] font-medium tracking-wide transition-all duration-200 rounded ${
                    pathname === link.href
                      ? "text-white bg-white/15"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/263772800883?text=Hi%20Brand%20Marina!%20I'd%20like%20to%20enquire."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium rounded bg-whatsapp text-white hover:bg-whatsapp/90 transition-all"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px] pb-4" : "max-h-0"
          }`}
        >
          <div className="bg-warm-white rounded-b-lg shadow-lg px-4 pt-2 pb-4 space-y-1 border-t border-sand/50">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded text-sm font-medium transition-all ${
                  pathname === link.href
                    ? "bg-emerald-deep text-white"
                    : "text-charcoal hover:bg-sand/50 hover:text-terracotta"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/263772800883?text=Hi%20Brand%20Marina!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 bg-whatsapp text-white rounded text-sm font-medium mt-2"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
