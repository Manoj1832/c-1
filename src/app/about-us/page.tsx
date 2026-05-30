import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "About Us | H Dentistry",
  description: "A personalized approach to creating the perfect smile. Learn about our mission and vision.",
};

export default function AboutUsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm font-semibold tracking-wide uppercase">
            <span>Home</span>
            <span>›</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      <main className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Content Left */}
            <div className="space-y-6">
              <p className="text-gray-500 font-medium tracking-wider uppercase text-sm">H Dentistry</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
                A personalized approach to creating the perfect smile
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                <span className="text-brand font-semibold">H Dentistry</span> is a modern multi-speciality dental clinic dedicated to providing comprehensive oral healthcare for patients of all ages.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                <span className="text-brand font-semibold">H Dentistry</span> offers advanced dental treatments including dental implants, clear aligners, root canal therapy, smile designing, cosmetic dentistry, pediatric dentistry, gum care, and preventive dental services.
              </p>
            </div>
            
            {/* Image Right */}
            <div className="relative w-full h-[400px] bg-brand/5 rounded-3xl overflow-hidden flex items-center justify-center p-8">
              <Image
                src="/h-dentistry-logo.png"
                alt="H Dentistry Logo"
                width={300}
                height={300}
                className="object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             {/* Image Left */}
             <div className="relative w-full h-[400px] bg-brand/5 rounded-3xl overflow-hidden flex items-center justify-center p-8 order-2 lg:order-1">
              <Image
                src="/h-dentistry-logo.png"
                alt="H Dentistry Mission"
                width={300}
                height={300}
                className="object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content Right */}
            <div className="space-y-12 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-light text-gray-900">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  <span className="text-brand font-semibold">H Dentistry&apos;s</span> mission is to provide ethical, advanced, and patient-centered dental care that improves oral health, confidence, and quality of life.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-light text-gray-900">Our Vision</h2>
                <ul className="space-y-4">
                  {[
                    "Propagation value of maintaining proper dental hygiene",
                    "Incorporating oral health awareness in the local population.",
                    "Free treatment camps at orphanages and for the underprivileged in order to maintain basic oral hygiene."
                  ].map((vision, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-brand shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg leading-relaxed">{vision}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <CTABanner />
      <Footer />
    </>
  );
}
