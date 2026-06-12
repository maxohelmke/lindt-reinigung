import { useRef, type ReactNode, type MouseEvent } from "react";

type SpotlightProps = {
  children: ReactNode;
  className?: string;
};

/** Karte mit Maus-Spotlight: radialer Lichtkegel folgt dem Cursor. */
export function Spotlight({ children, className = "" }: SpotlightProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div ref={ref} onMouseMove={onMove} className={`spotlight ${className}`}>
      {children}
    </div>
  );
}
