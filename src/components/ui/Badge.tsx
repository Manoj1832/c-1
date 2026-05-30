import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "silver" | "teal";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default:
      "bg-primary text-white border border-primary",
    silver:
      "bg-silver-light text-dark-text border border-silver",
    teal: "bg-teal/10 text-teal border border-teal/20",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-semibold font-body ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
