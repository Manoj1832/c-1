"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, Users, Star, Stethoscope, HeartPulse, Syringe } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: 5,
    suffix: "+",
    label: "Years in Experience",
  },
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Happy Patients",
  },
  {
    icon: Star,
    value: 650,
    suffix: "+",
    label: "Reviews",
  },
  {
    icon: HeartPulse,
    value: 1,
    suffix: "",
    label: "Clinic",
  },
  {
    icon: Stethoscope,
    value: 5,
    suffix: "+",
    label: "Specialists",
  },
  {
    icon: Syringe,
    value: 10000,
    suffix: "+",
    label: "Procedures",
  },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
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
  }, [target]);

  return (
    <span ref={ref} className="text-3xl font-bold text-brand">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center gap-3 p-4"
              >
                <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-brand" />
                </div>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-gray-600 text-sm capitalize">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
