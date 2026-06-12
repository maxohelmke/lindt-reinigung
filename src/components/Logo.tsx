import logoSrc from "@/assets/logo_complete.svg?url";

export const LOGO_URLS = {
  complete: logoSrc,
  favicon: "/logos/icon-32.png",
  appleTouchIcon: "/logos/icon-180.png",
} as const;

const ALT = "Lindt.Reinigungsfirma — Gebäudereinigung Wuppertal";

type LogoProps = {
  className?: string;
  /** Logo auf dunklem Hintergrund (default) oder auf hellem */
  tone?: "on-dark" | "on-light";
};

export function Logo({ className = "", tone = "on-dark" }: LogoProps) {
  return (
    <img
      src={logoSrc}
      alt={ALT}
      decoding="async"
      loading="eager"
      className={`object-contain h-8 sm:h-9 md:h-10 max-w-[min(100%,14rem)] ${
        tone === "on-light" ? "invert" : ""
      } ${className}`}
    />
  );
}
