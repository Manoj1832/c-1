import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";

export default function About() {
  return (
    <>
      {/* About Section */}
      <section id="about-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <div className="flex justify-center">
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <Image
                  src="/h-dentistry-logo.png"
                  alt="H Dentistry"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Content side */}
            <div className="space-y-5">
              <p className="section-label">About H Dentistry</p>
              <h2 className="section-title">
                Transforming Smiles With Precision Dentistry
              </h2>
              <p className="text-gray-600 leading-relaxed">
                <span className="text-brand font-semibold">H Dentistry</span> is a modern multi-speciality dental clinic dedicated to providing comprehensive oral healthcare for patients of all ages. We offer advanced dental treatments including dental implants, clear aligners, root canal therapy, smile designing, cosmetic dentistry, pediatric dentistry, gum care, and preventive dental services.
              </p>
              <Link href="/about-us" className="btn-primary inline-block">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Quote Banner */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <Quote className="w-10 h-10 text-brand mx-auto" />
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
            <span className="text-brand font-bold">H Dentistry&apos;s</span>{" "}
            mission is to provide ethical, advanced, and patient-centered dental care that improves oral health, confidence, and quality of life.
          </h3>
          <Link href="/about-us" className="btn-primary inline-block">
            More About Us
          </Link>
        </div>
      </section>
    </>
  );
}
