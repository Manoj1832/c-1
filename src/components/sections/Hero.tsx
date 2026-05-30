import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gray-200 pt-24 pb-12 lg:pt-32 lg:pb-0 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-0 mt-8 lg:mt-0">
          {/* Left content */}
          <div className="w-full lg:w-1/2 lg:pr-12 space-y-4 lg:space-y-6 pb-12 lg:pb-24 animate-fade-in relative z-10">
            <p className="text-brand font-bold tracking-widest text-[10px] sm:text-xs uppercase">
              Welcome to H Dentistry
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Best Dental Care In <br /> Erode
            </h1>

            <div className="space-y-3">
              <p className="text-gray-600 font-medium text-sm md:text-base max-w-xl">
                At H Dentistry, we combine advanced technology, digital treatment planning, and evidence-based dentistry to provide you with the highest-quality results.
              </p>
              <p className="text-gray-500 font-medium text-xs sm:text-sm max-w-xl">
                We seek to instill confidence, happiness, and optimism in our
                patients. Better teeth, better health!
              </p>
            </div>



            {/* Rating & Reviews */}
            <div className="pt-3 space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">650+</div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500 font-medium text-[10px] sm:text-xs">
                5-stars reviews from our satisfied customers
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 text-brand font-bold text-xs tracking-wide hover:gap-3 transition-all"
              >
                VIEW MORE
                <div className="w-5 h-5 rounded-full bg-brand flex items-center justify-center text-white">
                  <ArrowRight className="w-3 h-3" strokeWidth={3} />
                </div>
              </Link>
            </div>
          </div>

          {/* Right — hero visual */}
          <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-[90vh] relative lg:absolute lg:top-0 lg:right-0 lg:bottom-0 rounded-3xl lg:rounded-none lg:rounded-bl-[200px] overflow-hidden shadow-2xl z-0">
            <Image
              src="/hero-img.jpg"
              alt="H Dentistry Erode"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />

          </div>
        </div>
      </div>
    </section>
  );
}
