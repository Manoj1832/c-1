import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Career", href: "/career" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-conditions" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <Image
              src="/h-dentistry-logo.png"
              alt="H Dentistry"
              width={160}
              height={46}
              className="object-contain brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-gray-400">
              H Dentistry combines expertise, technology, and compassionate care to provide comprehensive dental solutions for patients of all ages.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wide text-sm mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wide text-sm mb-4">
              Quick Contact
            </h3>
            <p className="text-gray-400 text-sm mb-3">Feel free to contact us</p>
            <a
              href="tel:+919363629361"
              className="block text-white font-medium hover:underline mb-2"
            >
              +91 93636 29361
            </a>
            <a
              href="mailto:contact@hdentistry.in"
              className="block text-gray-400 text-sm hover:text-white transition-colors"
            >
              contact@hdentistry.in
            </a>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wide text-sm mb-4">
              Our Address
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              <strong className="text-gray-300">H Dentistry</strong>
              <br />
              GRDI Complex, No. 64/5-9, Perundurai Road, Above Domino&apos;s Pizza, Paari Nagar, Kumalan Kuttai, Palayapalayam, Erode, Tamil Nadu – 638011
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
