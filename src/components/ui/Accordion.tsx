"use client";

import { useState, useRef } from "react";
import { IconChevronDown } from "@/components/icons/DentalIcons";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-border-light last:border-b-0">
      <button
        className="w-full flex items-center justify-between py-5 px-2 text-left hover:bg-surface/50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-body font-semibold text-dark-text text-base pr-4">
          {question}
        </span>
        <span
          className={`flex-shrink-0 text-dark-text/40 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <IconChevronDown size={20} />
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight ?? 200 : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="px-2 pb-5 text-dark-text/70 font-body text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-border-light">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
