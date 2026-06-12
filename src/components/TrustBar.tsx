import { Medal, Star, Clock, MapPin } from "@phosphor-icons/react";
import { Reveal } from "@/components/Reveal";

export function TrustBar() {
  const items = [
    { icon: Medal, label: "Inhabergeführt", sub: "Persönlich" },
    { icon: Star, label: "5,0 ★ Google", sub: "2 Bewertungen" },
    { icon: Clock, label: "24h Antwort", sub: "Mo–Fr" },
    { icon: MapPin, label: "Wuppertal", sub: "Bergisches Land" },
  ];
  return (
    <section className="px-4 sm:px-10 py-6 sm:py-10 border-b border-border">
      <div className="mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
        {items.map((it, i) => (
          <Reveal
            key={it.label}
            delay={i * 80}
            className="bg-background px-3 sm:px-5 py-4 sm:py-5 flex items-center gap-3 sm:gap-4"
          >
            <it.icon className="h-5 w-5 text-primary shrink-0" weight="light" />
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-medium tracking-tight leading-tight">{it.label}</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.18em] text-muted-foreground mt-0.5">
                {it.sub}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
