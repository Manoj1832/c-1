"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },

  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "Management Team", href: "/management-team" },
      { label: "Professional Team", href: "/about-us#professional-team" },
    ],
  },

  {
    label: "Membership Plans",
    href: "/membership-plans",
    children: [
      {
        label: "Individual Membership",
        href: "/individual-membership-plan",
      },
      {
        label: "Student Membership",
        href: "/students-membership-plan",
      },
      {
        label: "Family Membership",
        href: "/family-membership-plan",
      },
      {
        label: "Senior Citizen Membership",
        href: "/senior-citizen-membership-plan",
      },
    ],
  },

  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Braces – Orthodontics",
        href: "/services/braces-orthodontics",
      },
      {
        label: "Dentures",
        href: "/services/dentures",
      },
      {
        label: "Clear Aligner",
        href: "/services/clear-aligner",
      },
      {
        label: "Kids Dentistry",
        href: "/services/kids-dentistry",
      },
      {
        label: "Dental Jewellery",
        href: "/services/dental-jewellery",
      },
      {
        label: "Root Canal Therapy",
        href: "/services/root-canal-therapy",
      },
      {
        label: "Dental Implants",
        href: "/services/dental-implants",
      },
      {
        label: "Infection Control",
        href: "/services/infection-control",
      },
      {
        label: "Gum Therapy",
        href: "/services/gum-therapy",
      },
      {
        label: "Teeth Whitening",
        href: "/services/teeth-whitening",
      },
      {
        label: "Extraction & Wisdom Teeth Removal",
        href: "/services/extraction-wisdom-teeth-removal",
      },
      {
        label: "Laser Dentistry",
        href: "/services/laser-dentistry",
      },
    ],
  },

  { label: "Career", href: "/career" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] =
    useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/h-dentistry-logo.png"
              alt="H Dentistry"
              width={170}
              height={60}
              priority
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
              >
                <Link
                  href={link.href}
                  className="
                    flex
                    items-center
                    gap-1
                    px-3
                    py-2
                    text-sm
                    font-medium
                    text-white
                    hover:text-gray-300
                    transition-colors
                  "
                >
                  {link.label}

                  {link.children && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>

                {link.children && (
                  <div
                    className="
                    invisible
                    opacity-0
                    group-hover:visible
                    group-hover:opacity-100
                    transition-all
                    duration-200
                    absolute
                    top-full
                    left-0
                    mt-2
                    w-72
                    bg-white
                    rounded-xl
                    shadow-xl
                    py-2
                    z-50
                  "
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="
                          block
                          px-4
                          py-2.5
                          text-sm
                          text-gray-700
                          hover:bg-gray-100
                        "
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919363629361"
              className="
                flex
                items-center
                gap-2
                px-5
                py-2.5
                bg-white
                text-gray-900
                rounded-full
                font-semibold
                text-sm
                hover:bg-gray-200
                transition-all
              "
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>

            <a
              href="tel:+919363629361"
              className="
                flex
                items-center
                gap-2
                px-5
                py-2.5
                border-2
                border-white
                text-white
                rounded-full
                font-semibold
                text-sm
                hover:bg-white
                hover:text-gray-900
                transition-all
              "
            >
              Talk To Dentist
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            className="lg:hidden text-white"
          >
            {mobileOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800">
          <nav className="px-4 py-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.label
                        ? null
                        : link.label
                    )
                  }
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    text-white
                    py-3
                    text-left
                  "
                >
                  <span>{link.label}</span>

                  {link.children && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === link.label
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  )}
                </button>

                {link.children &&
                  openDropdown === link.label && (
                    <div className="pl-4 pb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() =>
                            setMobileOpen(false)
                          }
                          className="
                            block
                            py-2
                            text-sm
                            text-gray-300
                          "
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            ))}

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="tel:+919363629361"
                className="
                  flex
                  justify-center
                  items-center
                  gap-2
                  py-3
                  rounded-full
                  bg-white
                  text-gray-900
                  font-semibold
                "
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>

              <a
                href="tel:+919363629361"
                className="
                  flex
                  justify-center
                  items-center
                  py-3
                  rounded-full
                  border
                  border-white
                  text-white
                  font-semibold
                "
              >
                Talk To Dentist
              </a>
            </div>
          </nav>
          
        </div>
        
      )}
      <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>Copyright © H Dentistry 2024. All rights reserved.</p>
          <p>
            Designed and Developed by{"Manoj"}
            <a
              href="https://omniadigital.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Omnia Digital LLP
            </a>
          </p>
        </div>
    </header>
    
  );
}