import type { ReactNode } from "react";

export function LegalProse({ children }: { children: ReactNode }) {
  return <div className="legal-prose">{children}</div>;
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10 last:mb-0">
      <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-4">{title}</h2>
      <div className="space-y-3 text-sm sm:text-base text-foreground/80 leading-relaxed">{children}</div>
    </section>
  );
}
