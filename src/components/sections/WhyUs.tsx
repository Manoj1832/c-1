"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  IconShield,
  IconLaser,
  IconClock,
  IconCertificate,
} from "@/components/icons/DentalIcons";

interface WhyRowProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const reasons: WhyRowProps[] = [
  {
    icon: <IconShield size={28} />,
    title: "Pain-Free Technology",
    description:
      "Advanced laser dentistry and sedation options ensure comfortable, anxiety-free treatments for every patient.",
  },
  {
    icon: <IconLaser size={28} />,
    title: "Same-Day Emergency Care",
    description:
      "Walk-in anytime for urgent dental issues — we're open 24/7 to relieve pain and provide immediate treatment when you need it most.",
  },
  {
    icon: <IconClock size={28} />,
    title: "Internationally Trained",
    description:
      "Dr. Harini Sri K holds both FICOI certification from the USA and BPS certification from Switzerland, bringing world-class expertise to Erode.",
  },
  {
    icon: <IconCertificate size={28} />,
    title: "Personalised Treatment Plans",
    description:
      "Every smile is unique. We craft customized treatment plans based on your specific needs, goals, and oral health — no one-size-fits-all solutions.",
  },
];

function WhyRow({ icon, title, description }: WhyRowProps) {
  return (
    <div className="flex gap-6 py-8 border-l-2 border-white/20 pl-6 hover:border-white transition-colors duration-300">
      <div className="flex-shrink-0 mt-1 text-white">{icon}</div>
      <div>
        <h3 className="font-body font-semibold text-xl text-white mb-2">
          {title}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed font-body">
          {description}
        </p>
      </div>
    </div>
  );
}

export function WhyUs() {
  return (
    <section className="bg-primary py-24 md:py-32" id="why-us">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          label="Why Choose Us"
          title="Why Patients Trust H Dentistry"
          light
        />
        <div className="max-w-3xl mx-auto space-y-2">
          {reasons.map((reason, i) => (
            <WhyRow key={i} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
}
