"use client";

import type { ReactNode, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export function Card({
  children,
  hover = false,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`bg-white border border-silver-light shadow-card ${
        hover
          ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-hover hover:border-primary"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
