"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },

{
  label: "About Us",
  href: "/about-us",
},

  {
    label: "Membership Plans",
    href: "/membership-plans",
    children: [
      { label: "Individual Membership Plan", href: "/individual-membership-plan" },
      { label: "Students Membership Plan", href: "/students-membership-plan" },
      { label: "Family Membership Plan", href: "/family-membership-plan" },
      { label: "Senior Citizen Membership Plan", href: "/senior-citizen-membership-plan" },
    ],
  },

  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Braces – Orthodontics", href: "/services/braces-orthodontics" },
      { label: "Dentures", href: "/services/dentures" },
      { label: "Clear Aligner", href: "/services/clear-aligner" },
      { label: "Kids Dentistry", href: "/services/kids-dentistry" },
      { label: "Dental Jewellery", href: "/services/dental-jewellery" },
      { label: "Root Canal Therapy", href: "/services/root-canal-therapy" },
      { label: "Dental Implants", href: "/services/dental-implants" },
      { label: "Infection Control", href: "/services/infection-control" },
      { label: "Gum Therapy", href: "/services/gum-therapy" },
      { label: "Teeth Whitening", href: "/services/teeth-whitening" },
      { label: "Extraction & Wisdom Teeth Removal", href: "/services/extraction-wisdom-teeth-removal" },
      { label: "Laser Dentistry", href: "/services/laser-dentistry" },
    ],
  },

  { label: "Career", href: "/career" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative w-36 sm:w-48 h-12 sm:h-16">
            <Image
              src="/h-dentistry-logo.png"
              alt="H Dentistry"
              fill
              priority
              className="object-contain object-left"
            />
          </Link>

          {/* Desktop Navigation */}
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
                    text-gray-700
                    hover:text-black
                    transition-all
                    rounded-lg
                    hover:bg-gray-50
                  "
                >
                  {link.label}

                  {link.children && (
                    <ChevronDown
                      className="
                        w-3.5
                        h-3.5
                        transition-transform
                        group-hover:rotate-180
                      "
                    />
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
                    rounded-2xl
                    shadow-xl
                    border
                    border-gray-100
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
                          hover:text-black
                          hover:bg-gray-50
                          transition-colors
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
                bg-gray-900
                text-white
                rounded-full
                text-sm
                font-semibold
                hover:bg-black
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
                border-gray-900
                text-gray-900
                rounded-full
                text-sm
                font-semibold
                hover:bg-gray-900
                hover:text-white
                transition-all
              "
            >
              Talk to Dentist
            </a>

          </div>

          {/* Mobile Button */}
          <button
            className="
              lg:hidden
              p-2
              rounded-lg
              text-gray-700
              hover:bg-gray-50
            "
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="
            lg:hidden
            bg-white
            border-t
            border-gray-100
            shadow-xl
            max-h-[80vh]
            overflow-y-auto
          "
        >
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
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
                      px-3
                      py-2.5
                      text-sm
                      font-medium
                      text-gray-700
                      hover:bg-gray-50
                      rounded-lg
                    "
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === link.label
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      px-3
                      py-2.5
                      text-sm
                      font-medium
                      text-gray-700
                      hover:bg-gray-50
                      rounded-lg
                    "
                  >
                    <span>{link.label}</span>
                  </Link>
                )}

                {link.children &&
                  openDropdown === link.label && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="
                            block
                            px-3
                            py-2
                            text-sm
                            text-gray-600
                            hover:bg-gray-50
                            rounded-lg
                          "
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            ))}

            <div className="pt-4 mt-4 border-t border-gray-100 flex flex-col gap-2">

              <a
                href="tel:+919363629361"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  px-4
                  py-3
                  bg-gray-900
                  text-white
                  rounded-full
                  text-sm
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
                  items-center
                  justify-center
                  gap-2
                  px-4
                  py-3
                  border-2
                  border-gray-900
                  text-gray-900
                  rounded-full
                  text-sm
                  font-semibold
                "
              >
                Talk to Dentist
              </a>

            </div>
          </nav>
        </div>
      )}
    </header>
  );
}