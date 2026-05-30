"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Clock, ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#111111" }}>
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(17,17,17,0.95) 0%, rgba(17,17,17,0.85) 50%, rgba(17,17,17,0.95) 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-8 py-20 md:py-24">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span
                className="relative flex h-2.5 w-2.5"
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span
                className="uppercase tracking-[0.15em]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "11px",
                  color: "#25D366",
                }}
              >
                We&apos;re Available Right Now
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "clamp(32px, 4vw, 48px)",
                color: "#FFFFFF",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                marginBottom: "16px",
              }}
            >
              Ready to Transform
              <br />
              Your Smile?
            </h2>

            <div
              style={{
                width: "48px",
                height: "2px",
                backgroundColor: "rgba(255,255,255,0.2)",
                marginBottom: "16px",
              }}
            />

            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "15px",
                color: "#AAAAAA",
                lineHeight: 1.7,
                maxWidth: "420px",
                marginBottom: "32px",
              }}
            >
              Book your consultation with Dr. Harini Sri K today. Open
              24&nbsp;hours, 7&nbsp;days a week — including holidays and
              emergencies.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 transition-opacity hover:opacity-90"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  backgroundColor: "#FFFFFF",
                  color: "#111111",
                }}
              >
                Book Appointment
                <ArrowRight size={14} />
              </a>
              <a
                href="tel:08460562924"
                className="inline-flex items-center gap-2 px-6 py-3.5 transition-all hover:bg-white/10"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#FFFFFF",
                }}
              >
                <Phone size={14} />
                Call Now
              </a>
              <a
                href="https://wa.me/918460562924"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 transition-all hover:opacity-90"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  backgroundColor: "#25D366",
                  color: "#FFFFFF",
                }}
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right — 3D info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {[
              {
                icon: Clock,
                title: "Open 24 / 7",
                subtitle: "Emergency care available around the clock",
              },
              {
                icon: Phone,
                title: "08460562924",
                subtitle: "Direct line to the clinic — no waiting",
              },
              {
                icon: MessageCircle,
                title: "Quick Response",
                subtitle: "WhatsApp replies within 15 minutes",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                className="flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(8px)",
                  transform: `perspective(800px) rotateY(-2deg)`,
                }}
              >
                <div
                  className="flex-shrink-0 w-11 h-11 flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  <card.icon size={18} style={{ color: "#FFFFFF" }} />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "12px",
                      color: "#888888",
                      margin: 0,
                    }}
                  >
                    {card.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
