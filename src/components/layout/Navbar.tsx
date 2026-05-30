"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const treatmentColumns = [
  {
    title: "Restorative",
    items: ["Root Canal Therapy", "Ceramic Crowns & Bridges", "Oral Rehabilitation"],
  },
  {
    title: "Cosmetic & Orthodontic",
    items: ["Dental Braces & Orthodontics", "Teeth Whitening", "Smile Makeover"],
  },
  {
    title: "Surgical & Advanced",
    items: ["Laser Dentistry", "Oral Surgery", "Dental Implants"],
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services", isDropdown: true },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
             <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true" className="text-brand">
              <path d="M18 5C13 5 9 8 8 14c-1 6-1 14 0 18 0 2 2 3 4 3s4-1 5-4l1-4c0-2 2-3 4-3s4 1 4 3l1 4c1 3 3 4 5 4s4-1 4-3c1-4 1-12 0-18-1-6-5-9-10-9z" fill="currentColor" opacity="0.9"/>
            </svg>
            <div>
              <span className="text-xl font-bold text-gray-900 leading-none block">H Dentistry</span>
              <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase leading-none block mt-0.5">Erode&apos;s Best</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="nav-item relative group">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand transition-colors rounded-lg hover:bg-gray-100"
                >
                  {link.label}
                  {link.isDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                {link.isDropdown && (
                  <div className="nav-dropdown w-auto min-w-[600px] left-1/2 -translate-x-1/2">
                    <div className="grid grid-cols-3 gap-6 p-6">
                      {treatmentColumns.map((col) => (
                        <div key={col.title}>
                           <h4 className="font-semibold text-xs uppercase tracking-wider text-gray-500 mb-3">{col.title}</h4>
                           <ul className="space-y-2">
                             {col.items.map((item) => (
                               <li key={item}>
                                 <Link href="/#services" className="block text-sm text-gray-700 hover:text-brand transition-colors underline-offset-2 hover:underline">
                                   {item}
                                 </Link>
                               </li>
                             ))}
                           </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919363629361"
              className="flex items-center gap-2 px-4 py-2 bg-brand text-white rounded-full text-sm font-semibold hover:bg-brand-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="https://wa.me/919363629361"
              className="flex items-center gap-2 px-4 py-2 border-2 border-brand text-brand rounded-full text-sm font-semibold hover:bg-brand hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === link.label ? null : link.label)
                  }
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-brand hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Link href={link.href} onClick={() => !link.isDropdown && setMobileOpen(false)}>
                     {link.label}
                  </Link>
                  {link.isDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {link.isDropdown && openDropdown === link.label && (
                  <div className="pl-4 mt-1 space-y-1">
                    {treatmentColumns.map(col => col.items.map((child) => (
                      <Link
                        key={child}
                        href="/#services"
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-brand hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        {child}
                      </Link>
                    )))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 flex flex-col gap-2 border-t border-gray-100">
              <a
                href="tel:+919363629361"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-brand text-white rounded-full text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/919363629361"
                className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-brand text-brand rounded-full text-sm font-semibold"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
