import { useRef, type ReactNode, type MouseEvent } from "react";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "a" | "div" | "button";
  href?: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

/** Subtle cursor-follow magnet effect for premium CTAs. */
export function Magnetic({
  children,
  className = "",
  strength = 0.25,
  as: Tag = "a",
  ...rest
}: MagneticProps) {
  const ref = useRef<HTMLElement | null>(null);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0,0)";
  };

  return (
    <Tag
      ref={ref as never}
      className={`magnetic ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...rest}
    >
      {children}
    </Tag>
  );
}
