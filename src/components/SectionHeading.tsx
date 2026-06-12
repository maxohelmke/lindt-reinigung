import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  align?: "center" | "left";
  className?: string;
  onDark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  className = "",
  onDark = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 mb-12 sm:mb-16 max-w-3xl ${alignClass} ${align === "center" ? "mx-auto" : ""} ${className}`}>
      {eyebrow ? (
        <p className={`section-eyebrow ${onDark ? "text-white/55" : ""}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`section-title ${onDark ? "text-white" : ""}`}>{title}</h2>
      {lead ? (
        <p className={`section-lead ${onDark ? "text-white/75" : ""}`}>{lead}</p>
      ) : null}
    </div>
  );
}
