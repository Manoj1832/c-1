"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";

const faqItems = [
  {
    question: "What makes H Dentistry different from other clinics in Erode?",
    answer:
      "H Dentistry is led by Dr. Harini Sri K, one of the very few dentists in the region holding both a FICOI certification from the USA and a BPS certification from Switzerland. Combined with 24/7 availability, patients receive world-class care without travelling to a metro city.",
  },
  {
    question: "Is the clinic really open 24 hours?",
    answer:
      "Yes. H Dentistry is open every day of the week, around the clock — including weekends and public holidays. Whether it's a 2am toothache or a pre-dawn appointment, we're here.",
  },
  {
    question: "What is laser dentistry and is it safe?",
    answer:
      "Laser dentistry uses focused light energy to treat gum disease, perform minor surgeries, and assist in cavity removal — with minimal bleeding, faster healing, and less discomfort than traditional methods. It is internationally approved and routinely practiced at H Dentistry.",
  },
  {
    question: "How often should I visit a dentist?",
    answer:
      "For most adults, a check-up every 6 months is ideal. However, patients undergoing active treatment (braces, implants) may need more frequent visits. Our team will build a schedule suited to your specific needs.",
  },
  {
    question: "Where exactly is H Dentistry located?",
    answer:
      "We are located above Domino's Pizza, Paari Nagar, Kumalankutti, Erode, Tamil Nadu. Easily accessible by road with parking nearby.",
  },
  {
    question: "What treatments are available at H Dentistry?",
    answer:
      "We offer Root Canal Therapy (RCT), Dental Braces & Orthodontics, Laser Dentistry, Ceramic Crowns & Bridges, Oral Surgery, Dental Implants, and full Oral Rehabilitation. All under one roof in Erode.",
  },
  {
    question: "Can I book an appointment via WhatsApp?",
    answer:
      "Absolutely. You can reach us directly on WhatsApp at +91 84605 62924. Send us your name, contact number, and preferred time and we'll confirm your slot promptly.",
  },
  {
    question: "Does H Dentistry treat children?",
    answer:
      "Yes, we welcome patients of all ages. Our team is trained to make younger patients comfortable, and we offer paediatric-friendly treatment options.",
  },
];

export function FAQ() {
  return (
    <section className="bg-white py-24 md:py-32" id="faq">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about H Dentistry."
        />
        <div className="max-w-3xl mx-auto">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
