"use client";

import { useState } from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { FloatingElements } from "@/components/layout/FloatingElements";
import { CTABanner } from "@/components/sections/CTABanner";
import {
  ChevronDown,
  Search,
  Clock,
  CreditCard,
  Stethoscope,
  ShieldCheck,
  Baby,
} from "lucide-react";

const categories = [
  { id: "all", label: "All Questions", icon: Search },
  { id: "general", label: "General", icon: Stethoscope },
  { id: "treatments", label: "Treatments", icon: ShieldCheck },
  { id: "scheduling", label: "Scheduling", icon: Clock },
  { id: "pricing", label: "Pricing & Insurance", icon: CreditCard },
  { id: "children", label: "Children", icon: Baby },
];

const faqItems = [
  {
    category: "general",
    question: "What makes H Dentistry different from other clinics in Erode?",
    answer:
      "H Dentistry is led by Dr. Harini Sri K, one of the very few dentists in the region holding both a FICOI certification from the USA and a BPS certification from Switzerland. Combined with 24/7 availability, patients receive world-class care without travelling to a metro city.",
  },
  {
    category: "scheduling",
    question: "Is the clinic really open 24 hours?",
    answer:
      "Yes. H Dentistry is open every day of the week, around the clock — including weekends and public holidays. Whether it's a 2am toothache or a pre-dawn appointment, we're here.",
  },
  {
    category: "treatments",
    question: "What is laser dentistry and is it safe?",
    answer:
      "Laser dentistry uses focused light energy to treat gum disease, perform minor surgeries, and assist in cavity removal — with minimal bleeding, faster healing, and less discomfort than traditional methods. It is internationally approved and routinely practiced at H Dentistry.",
  },
  {
    category: "general",
    question: "How often should I visit a dentist?",
    answer:
      "For most adults, a check-up every 6 months is ideal. However, patients undergoing active treatment (braces, implants) may need more frequent visits. Our team will build a schedule suited to your specific needs.",
  },
  {
    category: "general",
    question: "Where exactly is H Dentistry located?",
    answer:
      "We are located above Domino's Pizza, Paari Nagar, Kumalankutti, Erode, Tamil Nadu. Easily accessible by road with parking nearby.",
  },
  {
    category: "treatments",
    question: "What treatments are available at H Dentistry?",
    answer:
      "We offer Root Canal Therapy (RCT), Dental Braces & Orthodontics, Laser Dentistry, Ceramic Crowns & Bridges, Oral Surgery, Dental Implants, and full Oral Rehabilitation. All under one roof in Erode.",
  },
  {
    category: "scheduling",
    question: "Can I book an appointment via WhatsApp?",
    answer:
      "Absolutely. You can reach us directly on WhatsApp at +91 93636 29361. Send us your name, contact number, and preferred time and we'll confirm your slot promptly.",
  },
  {
    category: "children",
    question: "Does H Dentistry treat children?",
    answer:
      "Yes, we welcome patients of all ages. Our team is trained to make younger patients comfortable, and we offer paediatric-friendly treatment options.",
  },
  {
    category: "treatments",
    question: "Is root canal treatment painful?",
    answer:
      "Modern root canal treatment at H Dentistry is virtually painless. With advanced anaesthesia techniques and rotary instruments, the procedure is no more uncomfortable than getting a simple filling.",
  },
  {
    category: "pricing",
    question: "Do you offer payment plans or EMI options?",
    answer:
      "Yes, we understand dental treatments can be a significant investment. We offer flexible payment options for major treatments. Discuss your requirements during your consultation.",
  },
  {
    category: "general",
    question: "What should I do in a dental emergency?",
    answer:
      "Call us immediately at 9363629361 — we're available 24/7. For knocked-out teeth, keep the tooth moist (in milk or saliva) and reach us within 30 minutes for the best chance of reimplantation.",
  },
  {
    category: "treatments",
    question: "How long do dental implants last?",
    answer:
      "With proper care and maintenance, dental implants can last 20+ years or even a lifetime. Dr. Harini Sri K's FICOI certification ensures precise implant placement for maximum longevity.",
  },
  {
    category: "children",
    question: "At what age should my child first visit the dentist?",
    answer:
      "The American Academy of Pediatric Dentistry recommends the first dental visit by age 1 or within 6 months of the first tooth appearing. Early visits help establish good oral health habits.",
  },
  {
    category: "scheduling",
    question: "How do I prepare for my first visit?",
    answer:
      "Bring any previous dental records or X-rays if available, a list of current medications, and your insurance details if applicable. Arrive 10 minutes early to complete the registration form.",
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="border border-[#E8E8E8] bg-white mb-3 transition-all duration-300"
      style={{
        boxShadow: isOpen ? "0 4px 20px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <button
        className="w-full flex items-center justify-between py-5 px-6 text-left focus:outline-none group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span
          className="font-medium text-[15px] pr-4 transition-colors"
          style={{
            fontFamily: "'Outfit', sans-serif",
            color: isOpen ? "#111111" : "#333333",
          }}
        >
          {question}
        </span>
        <span
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-300"
          style={{
            backgroundColor: isOpen ? "#111111" : "#F4F4F4",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <ChevronDown
            size={16}
            style={{ color: isOpen ? "#FFFFFF" : "#666666" }}
          />
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? "300px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p
          className="px-6 pb-5 leading-relaxed"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "14px",
            color: "#666666",
            lineHeight: 1.8,
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqItems.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Banner */}
        <section
          className="relative overflow-hidden"
          style={{
            backgroundColor: "#111111",
            paddingTop: "100px",
            paddingBottom: "80px",
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, #ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative max-w-4xl mx-auto px-8 text-center">
            <p
              className="uppercase tracking-[0.2em] mb-4"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "11px",
                color: "#888888",
              }}
            >
              Help Center
            </p>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "clamp(36px, 5vw, 56px)",
                color: "#FFFFFF",
                lineHeight: 1.15,
                marginBottom: "20px",
              }}
            >
              Frequently Asked Questions
            </h1>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "16px",
                color: "#999999",
                maxWidth: "480px",
                margin: "0 auto 32px",
                lineHeight: 1.6,
              }}
            >
              Everything you need to know about H Dentistry. Can&apos;t find
              what you&apos;re looking for? Call us anytime.
            </p>

            {/* Search */}
            <div
              className="relative max-w-md mx-auto"
              style={{ marginBottom: "0" }}
            >
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2"
                style={{ color: "#666666" }}
              />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setOpenIndex(null);
                }}
                className="w-full pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/20"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#FFFFFF",
                }}
              />
            </div>
          </div>
        </section>

        {/* Category Tabs + FAQ List */}
        <section
          style={{
            backgroundColor: "#FAFAFA",
            padding: "60px 0 80px",
          }}
        >
          <div className="max-w-5xl mx-auto px-8">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setOpenIndex(null);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm transition-all duration-200"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "13px",
                      fontWeight: 500,
                      backgroundColor: isActive ? "#111111" : "#FFFFFF",
                      color: isActive ? "#FFFFFF" : "#555555",
                      border: isActive
                        ? "1px solid #111111"
                        : "1px solid #DCDCDC",
                    }}
                  >
                    <Icon size={14} />
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-3xl mx-auto">
              {filteredFaqs.length === 0 ? (
                <div className="text-center py-16">
                  <Search size={40} className="mx-auto mb-4 text-[#CCCCCC]" />
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "16px",
                      color: "#888888",
                    }}
                  >
                    No questions found matching your search.
                  </p>
                </div>
              ) : (
                filteredFaqs.map((faq, i) => (
                  <AccordionItem
                    key={`${activeCategory}-${i}`}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === i}
                    onToggle={() =>
                      setOpenIndex(openIndex === i ? null : i)
                    }
                  />
                ))
              )}
            </div>

            {/* Still have questions? */}
            <div
              className="max-w-3xl mx-auto mt-12 p-8 text-center"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E8E8E8",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: "28px",
                  color: "#111111",
                  marginBottom: "8px",
                }}
              >
                Still have questions?
              </h3>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "14px",
                  color: "#666666",
                  marginBottom: "20px",
                }}
              >
                Our team is available 24/7 to answer your questions.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="tel:+919363629361"
                  className="inline-flex items-center gap-2 px-6 py-3 transition-opacity hover:opacity-85"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    backgroundColor: "#111111",
                    color: "#FFFFFF",
                  }}
                >
                  Call Us Now
                </a>
                <a
                  href="https://wa.me/919363629361"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 transition-all hover:bg-[#111111] hover:text-white"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    backgroundColor: "transparent",
                    color: "#111111",
                    border: "1px solid #111111",
                  }}
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
