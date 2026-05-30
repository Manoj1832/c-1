"use client";

import { useEffect, useRef, useState } from "react";
import { IconClock, IconStar, IconTooth, IconCertificate } from "@/components/icons/DentalIcons";

interface StatProps {
  icon: React.ReactNode;
  value: number | string;
  suffix?: string;
  label: string;
  sublabel: string;
}

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-heading font-bold text-white">
      {count}{suffix}
    </span>
  );
}

function StatItem({ icon, value, suffix, label, sublabel }: StatProps) {
  return (
    <div className="flex flex-col items-center text-center py-8 px-4 border-r border-white/10 last:border-r-0">
      <div className="mb-3 text-white/80">{icon}</div>
      <CountUp value={Number(value)} suffix={suffix} />
      <p className="text-white font-semibold font-body mt-1">{label}</p>
      <p className="text-white/60 text-sm font-body">{sublabel}</p>
    </div>
  );
}

export function TrustBar() {
  const stats: StatProps[] = [
    {
      icon: <IconClock size={28} className="text-white/80" />,
      value: 24,
      suffix: "/7",
      label: "24/7",
      sublabel: "Emergency Care",
    },
    {
      icon: <IconStar size={28} className="text-white/80" />,
      value: "4.6",
      suffix: "★",
      label: "4.6★",
      sublabel: "JustDial Rating",
    },
    {
      icon: <IconTooth size={28} className="text-white/80" />,
      value: 500,
      suffix: "+",
      label: "500+",
      sublabel: "Patients Treated",
    },
    {
      icon: <IconCertificate size={28} className="text-white/80" />,
      value: 2,
      suffix: " Certs",
      label: "MDS + FICOI",
      sublabel: "Dual International",
    },
  ];

  return (
    <section className="bg-primary border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
