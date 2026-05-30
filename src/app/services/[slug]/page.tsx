import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';
import { ChevronRight, Phone, MapPin } from 'lucide-react';
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

import { Metadata } from 'next';

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) {
    return { title: 'Service Not Found | H Dentistry' };
  }
  
  return {
    title: `${service.title} in Erode | H Dentistry`,
    description: service.description,
    openGraph: {
      title: `${service.title} | H Dentistry Erode`,
      description: service.description,
      images: [service.image],
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const sharedFaqs = [
    { question: "Is treatment painful?", answer: "Modern procedures ensure maximum comfort." },
    { question: "How long does treatment take?", answer: "Treatment duration depends on case complexity." },
    { question: "Do you provide consultation?", answer: "Yes. Consultation is available for all services." },
    { question: "Are treatments safe?", answer: "Yes. We follow strict sterilization protocols." }
  ];
  
  const allFaqs = [...service.faqs, ...sharedFaqs];
  const halfLength = Math.ceil(allFaqs.length / 2);
  const leftFaqs = allFaqs.slice(0, halfLength);
  const rightFaqs = allFaqs.slice(halfLength);

  return (
    <>
    <Header />
    <main className="min-h-screen bg-white">
      {/* Top Banner Section */}
      <section className="bg-[#f2f2f2] pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="text-[28px] md:text-[35px] font-bold text-gray-900 leading-tight">
            {service.description}
          </h1>
          <h2 className="text-[22px] md:text-[28px] font-semibold text-gray-800">
            {service.title}
          </h2>
          <div className="flex items-center justify-center gap-2 text-[15px] font-medium text-gray-700 pt-2">
            <Link href="/" className="hover:text-brand transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-brand" />
            <Link href="/services" className="hover:text-brand transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4 text-brand" />
            <span className="text-gray-500">{service.shortTitle}</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-[32px] md:text-[40px] font-bold text-gray-900">
              About {service.shortTitle}
            </h2>
            <p className="text-[16px] text-gray-600 leading-relaxed font-normal">
              {service.longDescription}
            </p>
            <div className="space-y-3 pt-2">
               {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                     <span className="w-2 h-2 rounded-full bg-brand"></span>
                     <span className="text-[16px] text-gray-700">{benefit}</span>
                  </div>
               ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[450px] aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-bold text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-4">
              {leftFaqs.map((faq, index) => (
                <details key={index} className="group border border-gray-200 rounded-lg bg-white overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-5 bg-white text-gray-900 font-semibold text-[16px]">
                    {faq.question}
                    <span className="transition group-open:rotate-180">
                      <ChevronRight className="w-5 h-5 text-brand" />
                    </span>
                  </summary>
                  <div className="p-5 pt-0 text-[15px] text-gray-600 leading-relaxed bg-white border-t border-gray-100">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
            <div className="space-y-4">
              {rightFaqs.map((faq, index) => (
                <details key={index} className="group border border-gray-200 rounded-lg bg-white overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-5 bg-white text-gray-900 font-semibold text-[16px]">
                    {faq.question}
                    <span className="transition group-open:rotate-180">
                      <ChevronRight className="w-5 h-5 text-brand" />
                    </span>
                  </summary>
                  <div className="p-5 pt-0 text-[15px] text-gray-600 leading-relaxed bg-white border-t border-gray-100">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
          {/* Form */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
            <h2 className="text-[26px] font-bold text-center text-gray-900 mb-8">
              Book An Appointment
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 uppercase mb-1">Name*</label>
                <input type="text" className="w-full border border-gray-300 rounded-[30px] px-5 py-3 text-[15px] focus:outline-none focus:border-brand" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 uppercase mb-1">Email*</label>
                <input type="email" className="w-full border border-gray-300 rounded-[30px] px-5 py-3 text-[15px] focus:outline-none focus:border-brand" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 uppercase mb-1">Phone Number*</label>
                <input type="tel" className="w-full border border-gray-300 rounded-[30px] px-5 py-3 text-[15px] focus:outline-none focus:border-brand" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 uppercase mb-1">Services*</label>
                <select className="w-full border border-gray-300 rounded-[30px] px-5 py-3 text-[15px] focus:outline-none focus:border-brand bg-white">
                  <option value="">—Please choose an option—</option>
                  <option value={service.title}>{service.title}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 uppercase mb-1">Message</label>
                <textarea rows={4} className="w-full border border-gray-300 rounded-[30px] px-5 py-3 text-[15px] focus:outline-none focus:border-brand resize-y min-h-[100px]"></textarea>
              </div>
              <div className="pt-2">
                <button type="submit" className="bg-brand text-white font-semibold text-[15px] px-8 py-3 rounded-[30px] hover:bg-brand-dark transition-colors">
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="w-full md:w-1/2 space-y-8 pt-4">
            <div>
              <p className="text-gray-500 font-medium text-[16px] mb-2">Our Contact</p>
              <h2 className="text-[32px] md:text-[40px] font-bold text-gray-900 mb-4">
                Get in touch
              </h2>
              <p className="text-[16px] text-gray-600 leading-relaxed font-normal">
                We thank you for allowing us to take care of your dental needs and look forward to serving you. Make an appointment today.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 pt-6">
              <div className="flex gap-4">
                <div className="w-14 h-14 shrink-0 bg-brand/10 flex items-center justify-center rounded-xl text-brand">
                   <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[20px] text-gray-900 mb-1">Quick Contact</h3>
                  <p className="text-[15px] text-gray-600 mb-2">Feel free to contact us</p>
                  <a href="tel:08460562924" className="text-[15px] text-gray-900 font-medium hover:text-brand">+91 8460562924</a>
                  <br />
                  <a href="mailto:contact@hdentistryerode.com" className="text-[15px] text-gray-900 font-medium hover:text-brand break-all">contact@hdentistryerode.com</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 shrink-0 bg-brand/10 flex items-center justify-center rounded-xl text-brand">
                   <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[20px] text-gray-900 mb-1">Our Address</h3>
                  <p className="text-[15px] text-gray-900 font-semibold mb-1">H Dentistry</p>
                  <p className="text-[15px] text-gray-600 leading-relaxed">
                    Above Domino&apos;s Pizza, Paari Nagar, Kumalankutti, Erode, Tamil Nadu 638011
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
