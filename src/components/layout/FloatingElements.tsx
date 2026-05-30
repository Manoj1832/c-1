"use client";

import { useState, useEffect } from "react";
import { IconWhatsApp, IconArrowUp, IconPhone } from "@/components/icons/DentalIcons";

export function FloatingElements() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-primary text-white/80 border border-white/20 flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all duration-300 focus:outline-none focus:ring-2 focus-ring-white/20"
          aria-label="Back to top"
        >
          <IconArrowUp size={20} />
        </button>
      )}

      <a
        href="https://wa.me/918460562924"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:bg-[#20BD5A] transition-all duration-300 focus:outline-none focus:ring-2 focus-ring-[#25D366]"
        aria-label="Contact us on WhatsApp"
      >
        <div className="absolute inset-0 rounded-none animate-ping bg-[#25D366]/30" />
        <IconWhatsApp size={28} className="relative" />
      </a>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border flex">
        <a
          href="tel:08460562924"
          className="flex-1 flex items-center justify-center gap-2 py-3 text-dark-text font-body font-semibold text-sm hover:bg-[#F4F4F4] transition-colors"
          aria-label="Call us at 08460562924"
        >
          <IconPhone size={18} />
          Call Now
        </a>
        <div className="w-px bg-border" />
        <a
          href="https://wa.me/918460562924"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 text-white font-body font-semibold text-sm bg-[#25D366] hover:bg-[#20BD5A] transition-colors"
          aria-label="Contact us on WhatsApp"
        >
          <IconWhatsApp size={18} />
          WhatsApp
        </a>
      </div>
    </>
  );
}
