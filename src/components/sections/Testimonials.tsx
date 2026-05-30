"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Prasad",
    text: "The price was really reasonable, but the greatest part was the experience. Extremely clean and tidy. As soon as I walked in, I was greeted by a cheerful receptionist. The dentist was fantastic!!! I used to be frightened of going to the dentist, but now I go every six months for routine checkups!!! I had the nicest treatment experience ever! Strongly recommended!!!!",
  },
  {
    name: "Ajitha P",
    text: "I went to H Dentistry for a lengthy surgery that included multiple root canals and fillings. I was really pleased with the service and care provided by both the personnel and the doctor. Before the operation, the charges were properly stated to us. H Dentistry and the personnel are highly recommended....they are professional, hygienic, and gracious.",
  },
  {
    name: "Niresh Gunasekaran",
    text: "Doctors that are highly qualified... treatments that are clearly explained... Excellent value... highly recommended",
  },
  {
    name: "Andréanne n",
    text: "Very happy with the service provided. From the first consultation till the end of the treatment the doctors were attentive, professional and caring. They managed to provide the necessary treatment under the time constraint given from our side. Still it was very professionally done. After every intervention they cared to follow up with the patient, by calling or sending a message to unsure that everything was well.",
  },
  {
    name: "Alan Abraham",
    text: "I had gone to H Dentistry to get my root canal done. The doctor explained the entire procedure with utmost clarity. The staff and doctor are friendly and courteous. I had a pain-free experience.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">Changing lives one smile at a time</h2>
          <div className="flex justify-center gap-1.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-2xl font-bold text-brand">4.9 / 5.0</p>
        </div>

        {/* Desktop grid — 3 cards */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-8">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        {/* Mobile/Tablet — slider */}
        <div className="lg:hidden relative">
          <TestimonialCard {...testimonials[current]} />

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-brand text-brand flex items-center justify-center hover:bg-brand hover:text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-brand" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-brand text-brand flex items-center justify-center hover:bg-brand hover:text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Remaining 2 cards on desktop */}
        <div className="hidden lg:grid grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
          {testimonials.slice(3, 5).map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, text }: { name: string; text: string }) {
  return (
    <div className="card group">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <Quote className="w-8 h-8 text-brand/30 mb-2" />
      <p className="text-gray-600 text-sm leading-relaxed italic mb-4">
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-sm">
          {name.charAt(0)}
        </div>
        <span className="font-semibold text-gray-800 text-sm">{name}</span>
      </div>
    </div>
  );
}
