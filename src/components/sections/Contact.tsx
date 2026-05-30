"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const services = [
  "Braces - Orthodontics",
  "Dentures",
  "Clear Aligner",
  "Kids Dentistry",
  "Dental Jewellery",
  "Root Canal Therapy",
  "Dental Implants",
  "Infection Control",
  "Gum Therapy",
  "Teeth Whitening",
  "Extraction & Wisdom Teeth Removal",
  "Laser Dentistry",
];


export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        message: form.message,
      };

      await emailjs.send(
        'service_gjwew1v',
        'template_wwpis9c',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY_HERE' // Replace with your actual public key or set in .env.local
      );

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-100" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Book An Appointment
            </h2>

            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="text-5xl">✅</div>
                <p className="text-xl font-semibold text-green-600">
                  Thank you!
                </p>
                <p className="text-gray-600">
                  We&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline mt-4"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-brand transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-brand transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    minLength={10}
                    maxLength={12}
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-brand transition-colors"
                    placeholder="10-digit mobile number"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Service *
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-brand transition-colors appearance-none bg-white"
                  >
                    <option value="">— Please choose a service —</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>



                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Message
                  </label>
                  <input
                    type="text"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-brand transition-colors"
                    placeholder="Any additional info..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand text-white py-3 rounded-full font-semibold text-sm hover:bg-brand-dark transition-colors disabled:opacity-50 flex justify-center items-center gap-2"
                >
                  {isSubmitting ? "Sending..." : "Submit Appointment"}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <p className="section-label">Our Contact</p>
              <h2 className="section-title">Get in touch</h2>
              <p className="text-gray-600">
                We thank you for allowing us to take care of your dental needs
                and look forward to serving you. Make an appointment today.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Quick Contact</h4>
                  <p className="text-gray-500 text-sm mb-1">Feel free to contact us</p>
                  <a
                    href="tel:+919363629361"
                    className="text-brand font-medium hover:underline"
                  >
                    +91 93636 29361
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email Us</h4>
                  <a
                    href="mailto:contact@hdentistry.in"
                    className="text-brand font-medium hover:underline text-sm"
                  >
                    contact@hdentistry.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Our Address</h4>
                  <p className="text-gray-600 text-sm">
                    <strong>H Dentistry</strong>
                    <br />
                    GRDI Complex, No. 64/5-9, Perundurai Road, Above Domino&apos;s Pizza, Paari Nagar, Kumalan Kuttai, Palayapalayam, Erode, Tamil Nadu – 638011
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
