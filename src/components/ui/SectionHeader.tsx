interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  light?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  light = false,
}: SectionHeaderProps) {
  const textColor = light ? "text-white" : "text-dark-text";
  const labelColor = light ? "text-silver" : "text-teal";

  return (
    <div className="max-w-2xl mx-auto text-center mb-16">
      <span
        className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase ${labelColor} mb-4`}
      >
        {label}
      </span>
      <h2
        className={`font-heading text-h2-mobile md:text-4xl lg:text-h2 ${textColor} mb-6`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed ${light ? "text-silver/80" : "text-dark-text/70"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
