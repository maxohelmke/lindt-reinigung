import { useState } from "react";
import { Plus, Minus, Sparkles, Leaf, Award, Clock3, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";

/* ─────────────────────────────────────────────────────────── DECOR */

export function Asterisk({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <line x1="20" y1="4" x2="20" y2="36" />
        <line x1="4" y1="20" x2="36" y2="20" />
        <line x1="8.5" y1="8.5" x2="31.5" y2="31.5" />
        <line x1="31.5" y1="8.5" x2="8.5" y2="31.5" />
      </g>
    </svg>
  );
}

export function Scribble({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M2 14 C 30 2, 60 26, 90 14 S 150 2, 180 14 S 215 22, 218 12"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────── TRUST BAR */

export function TrustBar() {
  const items = [
    { icon: Award, label: "Inhabergeführt", sub: "Seit 2019" },
    { icon: Leaf, label: "Eco-Mittel", sub: "Pflanzenbasiert" },
    { icon: Clock3, label: "24h Antwort", sub: "Mo–Sa" },
    { icon: MapPin, label: "Eifel-Region", sub: "Monschau · Aachen" },
  ];
  return (
    <section className="px-5 sm:px-10 py-8 sm:py-10 border-b border-border">
      <div className="mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
        {items.map((it, i) => (
          <Reveal
            key={it.label}
            delay={i * 80}
            className="bg-background px-5 py-5 flex items-center gap-4"
          >
            <it.icon className="h-5 w-5 text-primary shrink-0" strokeWidth={1.6} />
            <div className="min-w-0">
              <div className="text-sm font-medium tracking-tight leading-tight">{it.label}</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
                {it.sub}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── GALLERY (Bento) */

type Tile = { src: string; alt: string; tag: string; span: string };

const TILES: Tile[] = [
  {
    src: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1200&q=80&auto=format&fit=crop",
    alt: "Helle, aufgeräumte Küche nach Reinigung",
    tag: "Privat · Küche",
    span: "md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80&auto=format&fit=crop",
    alt: "Modernes Badezimmer, streifenfrei gereinigt",
    tag: "Privat · Bad",
    span: "md:col-span-5 aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=900&q=80&auto=format&fit=crop",
    alt: "Fensterreinigung mit Abzieher",
    tag: "Service · Fenster",
    span: "md:col-span-5 aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop",
    alt: "Aufgeräumter, heller Büroraum",
    tag: "Gewerbe · Büro",
    span: "md:col-span-7 aspect-[16/9]",
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80&auto=format&fit=crop",
    alt: "Profi-Reinigungsmittel und Tücher",
    tag: "Material · Eco",
    span: "md:col-span-5 aspect-[4/3]",
  },
];

export function Gallery() {
  return (
    <section className="py-24 sm:py-36 px-5 sm:px-10 bg-background">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 sm:mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span>№ 04</span>
              <span>Arbeitsproben</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.02em]">
              Räume, die
              <br />
              <span className="relative inline-block italic text-primary">
                wieder atmen.
                <Scribble className="absolute -bottom-3 left-0 w-full h-3 text-primary/60" />
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
              Eine kleine Auswahl aus den letzten Aufträgen — Privat­wohnungen,
              Büros und Spezialeinsätze. Jede Reinigung übergeben wir persönlich.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
          {TILES.map((t, i) => (
            <Reveal
              key={t.src}
              delay={i * 90}
              className={`group relative overflow-hidden rounded-2xl bg-muted ${t.span}`}
            >
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/0 to-transparent" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/85 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {t.tag}
              </div>
              <div className="absolute bottom-4 left-4 right-4 font-serif text-white text-lg sm:text-xl leading-tight tracking-tight drop-shadow-sm">
                {t.alt}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── FAQ */

const FAQS = [
  {
    q: "Wie schnell bekomme ich ein Angebot?",
    a: "Innerhalb von 24 Stunden — meist deutlich schneller. Eine kurze Beschreibung per Anruf oder WhatsApp reicht.",
  },
  {
    q: "Gibt es eine Vertragsbindung?",
    a: "Nein. Sie buchen einmalig oder regelmäßig — kündbar jederzeit, ohne Frist. Kein Kleingedrucktes.",
  },
  {
    q: "Welche Reinigungsmittel werden eingesetzt?",
    a: "Wir verwenden pflanzenbasierte, biologisch abbaubare Produkte. Auf Wunsch komplett duftneutral oder allergikergeeignet.",
  },
  {
    q: "Sind Sie versichert?",
    a: "Ja — vollumfänglich haftpflichtversichert. Auf Anfrage senden wir Ihnen den Versicherungsnachweis.",
  },
  {
    q: "In welchen Orten sind Sie tätig?",
    a: "Monschau, Simmerath, Roetgen, Aachen, Stolberg, Eschweiler, Düren und das gesamte Eifel-Umland.",
  },
  {
    q: "Bringen Sie Material und Geräte mit?",
    a: "Selbstverständlich — wir kommen komplett ausgestattet. Sie müssen nichts bereitstellen.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 sm:py-36 px-5 sm:px-10 bg-[#EFEBE4]">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <span>№ 06</span>
            <span>Häufige Fragen</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.02em]">
            Antworten,
            <br />
            <span className="italic text-primary">bevor Sie fragen.</span>
          </h2>
          <div className="mt-10 inline-flex items-center gap-3 text-sm text-foreground/70">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Noch eine Frage offen? Einfach anrufen.</span>
          </div>
        </div>

        <ul className="lg:col-span-7 lg:col-start-6 border-t border-foreground/15">
          {FAQS.map((item, i) => {
            const active = open === i;
            return (
              <li key={item.q} className="border-b border-foreground/15">
                <button
                  type="button"
                  onClick={() => setOpen(active ? null : i)}
                  className="group w-full flex items-start justify-between gap-6 py-6 sm:py-7 text-left"
                  aria-expanded={active}
                >
                  <span className="flex items-baseline gap-5 sm:gap-7 flex-1">
                    <span className="font-mono text-xs tabular-nums text-muted-foreground pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-xl sm:text-2xl md:text-3xl tracking-tight leading-snug">
                      {item.q}
                    </span>
                  </span>
                  <span className="shrink-0 mt-1.5 h-9 w-9 rounded-full border border-foreground/25 flex items-center justify-center transition-all duration-300 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground">
                    {active ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-500 ease-out"
                  style={{ gridTemplateRows: active ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pl-[3.4rem] sm:pl-[4.4rem] pb-6 sm:pb-7 pr-12 text-base text-foreground/75 leading-relaxed max-w-xl">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── BIG CTA STRIP */

export function CtaStrip({ phone, phoneHref, waHref }: { phone: string; phoneHref: string; waHref: string }) {
  return (
    <section className="px-5 sm:px-10">
      <div className="mx-auto max-w-[1400px] relative overflow-hidden rounded-3xl bg-[var(--color-dark)] text-white px-8 sm:px-14 py-14 sm:py-20">
        <Asterisk className="absolute -top-10 -right-10 h-48 w-48 text-primary/25" />
        <Asterisk className="absolute -bottom-16 -left-8 h-56 w-56 text-white/5" />
        <div className="relative grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-4">
              Bereit für saubere Räume?
            </div>
            <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.02em] max-w-2xl">
              Ein Anruf — und der
              <br />
              <span className="italic text-primary">Rest ist erledigt.</span>
            </h3>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3">
            <a
              href={phoneHref}
              className="group inline-flex items-center justify-between gap-3 rounded-full bg-primary px-6 py-4 text-base font-medium text-white hover:bg-white hover:text-foreground transition-colors min-h-[56px]"
            >
              <span>{phone}</span>
              <span className="text-xs uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100">
                Anrufen →
              </span>
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3 rounded-full border border-white/25 px-6 py-4 text-base font-medium hover:border-white transition-colors min-h-[56px]"
            >
              <span>WhatsApp schreiben</span>
              <span className="text-xs uppercase tracking-[0.2em] opacity-70">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
