"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import Link from "next/link";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <Header />
      {/* Page Header */}
      <section 
        className="pt-32 pb-16 relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-brand/80" />
        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm font-semibold tracking-wide uppercase">
            <span>Home</span>
            <span>›</span>
            <span>Services</span>
          </div>
        </div>
      </section>
      <main className="pt-24 pb-20 bg-[#f7f7f7] min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
              Turning Your Smile Into <span className="text-brand font-semibold">An Experience</span>
            </h1>
            <p className="mt-6 text-gray-600 text-lg">
              Explore our comprehensive range of specialized dental treatments designed to give you the perfect, healthy smile you deserve.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-16 h-16 relative mb-8 rounded-full bg-brand/5 p-3 flex items-center justify-center group-hover:bg-brand/10 transition-colors">
                  {/* Since we don't have the exact SVGs in the project yet, we will map icon paths to emojis or placeholder images for now, or use the path if it exists. Note that next/image might fail if the local file isn't there, so we use a fallback or standard <img> */}
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed text-sm h-20">
                  {service.description}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-brand font-semibold text-sm hover:gap-3 transition-all"
                >
                  READ MORE <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <CTABanner />
      <Footer />
    </>
  );
}
