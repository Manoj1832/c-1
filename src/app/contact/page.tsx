import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Contact Us | H Dentistry",
  description: "Get in touch with H Dentistry for appointments and queries. We are available 24/7.",
};

export default function ContactPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Contact</h1>
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm font-semibold tracking-wide uppercase">
            <span>Home</span>
            <span>›</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      <main className="py-20 bg-[#f7f7f7] min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form placeholder (mimicking the Book An Appointment section) */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-light text-gray-900 mb-8">Book An Appointment</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Name*</label>
                  <input type="text" className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand transition-colors" placeholder="Your full name" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Email*</label>
                  <input type="email" className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand transition-colors" placeholder="Your email address" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Phone*</label>
                  <input type="tel" className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand transition-colors" placeholder="Your phone number" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Message</label>
                  <textarea rows={4} className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand transition-colors resize-none" placeholder="Tell us how we can help..." />
                </div>
                <button type="submit" className="bg-brand text-white px-8 py-4 rounded-full font-semibold hover:bg-brand/90 transition-colors w-full sm:w-auto">
                  Submit Request
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <p className="text-brand font-bold tracking-widest uppercase text-sm mb-4">Our Contact</p>
                <h2 className="text-4xl font-light text-gray-900 mb-8">Get In Touch</h2>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Contact</h3>
                  <p className="text-gray-600 mb-1">Feel free to contact us</p>
                  <a href="tel:+919363629361" className="text-brand font-semibold hover:underline">+91 93636 29361</a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Address</h3>
                  <p className="text-gray-600 font-semibold mb-1">H Dentistry</p>
                  <p className="text-gray-600 leading-relaxed">
                    Above Domino&apos;s Pizza, Paari Nagar, Kumalankutti, Erode, Tamil Nadu
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-1">Send us an email anytime</p>
                  <a href="mailto:contact@hdentistry.in" className="text-brand font-semibold hover:underline">contact@hdentistry.in</a>
                </div>
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
