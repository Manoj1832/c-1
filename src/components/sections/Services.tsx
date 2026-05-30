"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Smile,
  Crown,
  AlignCenter,
  Baby,
  Gem,
  CircleDot,
  Pin,
  ShieldCheck,
  HeartPulse,
  Sparkles,
  Scissors,
  Zap,
} from "lucide-react";

const services = [
  { name: "Braces", href: "/services/braces-orthodontics", icon: Smile },
  { name: "Dentures", href: "/services/dentures", icon: Crown },
  { name: "Clear Aligner", href: "/services/clear-aligner", icon: AlignCenter },
  { name: "Kids Dentistry", href: "/services/kids-dentistry", icon: Baby },
  { name: "Dental Jewellery", href: "/services/dental-jewellery", icon: Gem },
  { name: "Root Canal", href: "/services/root-canal-therapy", icon: CircleDot },
  { name: "Dental Implants", href: "/services/dental-implants", icon: Pin },
  { name: "Infection Control", href: "/services/infection-control", icon: ShieldCheck },
  { name: "Gum Therapy", href: "/services/gum-therapy", icon: HeartPulse },
  { name: "Teeth Whitening", href: "/services/teeth-whitening", icon: Sparkles },
  { name: "Teeth Removal", href: "/services/wisdom-removal", icon: Scissors },
  { name: "Laser Dentistry", href: "/services/laser-dentistry", icon: Zap },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="section-label">Our Services</p>
            <h2 className="section-title mb-0">
              Turning your smile into an experience
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/h-dentistry-logo.png"
              alt="H Dentistry"
              width={80}
              height={80}
              className="object-contain hidden md:block"
            />
          </div>
        </motion.div>

        {/* Scrollable carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.name}
                  href={service.href}
                  className="flex-none snap-start w-36 md:w-44 flex flex-col items-center gap-3 bg-white rounded-2xl p-5 shadow hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-20 h-20 rounded-full bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                    <Icon className="w-10 h-10 text-brand group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 text-center group-hover:text-brand transition-colors">
                    {service.name}
                  </span>
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* View all button */}
        <div className="text-center mt-10">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
