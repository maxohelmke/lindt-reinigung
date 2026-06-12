/** Minimal placeholder while below-the-fold sections hydrate. */
export function SectionFallback({ minHeight = "12rem" }: { minHeight?: string }) {
  return (
    <div
      className="section-defer"
      style={{ minHeight }}
      aria-hidden="true"
    />
  );
}
