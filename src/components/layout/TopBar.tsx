"use client";

import { IconLocation, IconPhone, IconWhatsApp } from "@/components/icons/DentalIcons";

export function TopBar() {
  return (
    <div className="bg-primary text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-10 md:h-11">
          <div className="hidden md:flex items-center gap-2">
            <IconLocation size={16} className="text-silver" />
            <span className="text-silver/80">Kumalankutti, Erode</span>
          </div>

          <div className="hidden md:flex items-center gap-2 flex-1 justify-center">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-silver/80">Open 24 Hours &middot; 7 Days a Week</span>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <a
              href="tel:+919363629361"
              className="flex items-center gap-2 text-silver hover:text-white transition-colors"
              aria-label="Call us at 9363629361"
            >
              <IconPhone size={16} />
              <span className="hidden sm:inline">9363629361</span>
            </a>
            <a
              href="https://wa.me/919363629361"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-silver hover:text-green-400 transition-colors"
              aria-label="Contact us on WhatsApp"
            >
              <IconWhatsApp size={16} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
