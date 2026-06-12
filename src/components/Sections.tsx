import { useEffect, useState } from "react";
import {
  House, Buildings, Briefcase, Bed, Storefront, GraduationCap, Wrench, Sparkle,
  Quotes, Plus, Minus, ArrowRight, ArrowUpRight as PhArrowUpRight,
} from "@phosphor-icons/react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Spotlight } from "@/components/Spotlight";
import { unsplash } from "@/lib/assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

/* ─────────────────────────────────────────────────────────── GALLERY (Bento) */

type Tile = { src: string; alt: string; span: string };

const TILES: Tile[] = [
  {
    src: unsplash("photo-1581578017093-cd30fce4eeb7", 640),
    alt: "Reinigungskraft bei der Küchenreinigung",
    span: "md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto",
  },
  {
    src: unsplash("photo-1604014237800-1c9102c219da", 640),
    alt: "Fensterreinigung im Einsatz",
    span: "md:col-span-5 aspect-[4/3]",
  },
  {
    src: unsplash("photo-1581578731548-c64695cc6952", 720),
    alt: "Reinigungsprofi mit professionellen Arbeitsmitteln",
    span: "md:col-span-5 aspect-[4/3]",
  },
  {
    src: unsplash("photo-1527515637462-cff94eecc1ac", 800),
    alt: "Reinigungskraft bei der Arbeit im Wohnbereich",
    span: "md:col-span-7 aspect-[16/9]",
  },
  {
    src: unsplash("photo-1563453392212-326f5e854473", 640),
    alt: "Badreinigung mit professioneller Ausrüstung",
    span: "md:col-span-4 aspect-[4/5]",
  },
  {
    src: unsplash("photo-1584473457409-ce43d0b01cab", 640),
    alt: "Bodenreinigung mit Wischsystem",
    span: "md:col-span-4 aspect-[4/5]",
  },
  {
    src: unsplash("photo-1584473457493-17c5f6c79b7b", 640),
    alt: "Treppenhausreinigung im Mehrfamilienhaus",
    span: "md:col-span-4 aspect-[4/5]",
  },
  {
    src: unsplash("photo-1581578017420-1f3f4f4aa5e9", 960),
    alt: "Reinigungsteam im Arbeitseinsatz",
    span: "md:col-span-12 aspect-[21/9]",
  },
];

export function Gallery() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-10 bg-background">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          title="Ergebnisse unserer Reinigungsarbeiten in Wuppertal"
          lead="Eine Auswahl aus Privatwohnungen, Büros und Spezialeinsätzen im Bergischen Land. Jedes Objekt übergeben wir persönlich nach der Abnahme."
        />

        <GalleryCarousel />
      </div>
    </section>
  );
}

function GalleryCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setSelected(api.selectedScrollSnap());
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-4 sm:-ml-5">
          {TILES.map((t) => (
            <CarouselItem
              key={t.src}
              className="pl-4 sm:pl-5 basis-[85%] sm:basis-1/2 lg:basis-1/3"
            >
              <figure className="group relative overflow-hidden rounded-md bg-muted aspect-[4/5]">
                <img
                  src={t.src}
                  alt={t.alt}
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={800}
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/0 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 font-serif text-white text-base sm:text-xl leading-tight tracking-tight drop-shadow-sm">
                  {t.alt}
                </div>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-8 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => api?.scrollTo(i)}
              aria-label={`Zum Bild ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                selected === i ? "w-8 bg-primary" : "w-4 bg-foreground/15 hover:bg-foreground/30"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            aria-label="Vorheriges Bild"
            className="h-11 w-11 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
          >
            <ArrowRight className="h-4 w-4 rotate-180" weight="regular" />
          </button>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            aria-label="Nächstes Bild"
            className="h-11 w-11 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
          >
            <ArrowRight className="h-4 w-4" weight="regular" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── FAQ */

const FAQS = [
  {
    q: "Was kostet eine Gebäudereinigung in Wuppertal?",
    a: "Die Kosten hängen von Objekt, Umfang und Häufigkeit ab. Wir erstellen Ihnen nach einer kurzen Beschreibung oder einem kostenlosen Vor Ort Termin ein transparentes Festpreisangebot ohne versteckte Kosten.",
  },
  {
    q: "Wie schnell bekomme ich ein Angebot?",
    a: "Innerhalb von 24 Stunden, meist deutlich schneller. Ein kurzer Anruf oder eine WhatsApp-Nachricht mit einer Beschreibung des Objekts reicht vollkommen aus.",
  },
  {
    q: "In welchen Orten in Wuppertal und Umgebung sind Sie tätig?",
    a: "Wir reinigen im gesamten Stadtgebiet Wuppertal einschließlich Vohwinkel, Barmen, Elberfeld und Cronenberg. Zusätzlich sind wir in Solingen, Remscheid, Velbert und im gesamten Bergischen Land tätig.",
  },
  {
    q: "Gibt es eine Vertragsbindung?",
    a: "Nein. Sie können einmalig oder regelmäßig buchen und jederzeit kündigen, ohne Kündigungsfrist. Kein Kleingedrucktes und keine versteckten Klauseln.",
  },
  {
    q: "Welche Reinigungsmittel werden eingesetzt?",
    a: "Wir verwenden pflanzenbasierte, biologisch abbaubare Reinigungsprodukte. Auf Wunsch arbeiten wir komplett duftneutral oder mit allergikergeeigneten Mitteln.",
  },
  {
    q: "Sind Sie versichert?",
    a: "Ja, wir sind vollumfänglich haftpflichtversichert. Den Versicherungsnachweis senden wir Ihnen auf Anfrage gerne zu.",
  },
  {
    q: "Bringen Sie Material und Geräte mit?",
    a: "Selbstverständlich. Wir kommen komplett ausgestattet mit professionellem Equipment und Reinigungsmitteln. Sie müssen nichts vorbereiten oder bereitstellen.",
  },
  {
    q: "Bieten Sie auch Grundreinigung und Bauendreinigung an?",
    a: "Ja. Neben der regelmäßigen Unterhaltsreinigung führen wir Grundreinigungen bei Umzügen und Übergaben sowie Bauendreinigungen nach Renovierungen in Wuppertal und Umgebung durch.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-14 sm:py-24 px-4 sm:px-10 bg-[#EFEBE4]/80">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          title="Fragen zur Gebäudereinigung in Wuppertal"
          lead="Noch Fragen offen? Rufen Sie uns an. Wir beraten Sie kostenlos und persönlich."
        />

        <div className="max-w-3xl mx-auto">
          <ul className="space-y-2.5 sm:space-y-0 sm:border-t sm:border-foreground/15">
          {FAQS.map((item, i) => {
            const active = open === i;
            return (
              <li key={item.q} className="rounded-xl border border-foreground/12 bg-background/75 sm:rounded-none sm:border-x-0 sm:border-t-0 sm:bg-transparent sm:border-b sm:border-foreground/15">
                <button
                  type="button"
                  onClick={() => setOpen(active ? null : i)}
                  className="group w-full flex items-start justify-between gap-3.5 sm:gap-6 px-4 sm:px-0 py-4 sm:py-7 text-left"
                  aria-expanded={active}
                >
                  <span className="flex items-baseline gap-3.5 sm:gap-7 flex-1">
                    <span className="font-mono text-xs tabular-nums text-muted-foreground pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-[1.02rem] sm:text-xl tracking-tight leading-snug">
                      {item.q}
                    </span>
                  </span>
                  <span className="shrink-0 mt-1 h-8.5 w-8.5 sm:h-9 sm:w-9 rounded-full border border-foreground/25 flex items-center justify-center transition-all duration-300 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground">
                    {active ? <Minus className="h-4 w-4" weight="bold" /> : <Plus className="h-4 w-4" weight="bold" />}
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-500 ease-out"
                  style={{ gridTemplateRows: active ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pl-4 sm:pl-[4.4rem] pb-4 sm:pb-7 pr-4 sm:pr-12 text-[0.95rem] sm:text-base text-foreground/75 leading-relaxed max-w-xl">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── BIG CTA STRIP */

export function CtaStrip({ phone, phoneHref, waHref }: { phone: string; phoneHref: string; waHref: string }) {
  return (
    <section className="px-4 sm:px-10 py-8 sm:py-12">
      <div className="cta-panel relative overflow-hidden mx-auto max-w-[1400px] rounded-xl border border-white/15 text-white px-5 sm:px-10 py-10 sm:py-14 shadow-[0_30px_70px_-30px_rgb(0_0_0/0.55)]">
        <div className="aurora-blob -top-24 -right-20 h-[320px] w-[320px] bg-[oklch(0.55_0.11_252/0.4)] animate-drift" aria-hidden="true" />
        <div className="relative grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <p className="section-eyebrow text-white/55 mb-3">Kostenlose Anfrage</p>
            <h3 className="section-title text-white max-w-xl">
              Gebäudereinigung in Wuppertal anfragen. Ein kurzer Anruf genügt.
            </h3>
          </div>
          <div className="md:col-span-5 flex flex-col gap-3">
            <a href={phoneHref} className="btn-primary w-full justify-between">
              <span>{phone}</span>
              <PhArrowUpRight className="h-4 w-4 opacity-80" weight="regular" />
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-between gap-3 rounded-md border border-white/30 px-6 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors min-h-[3rem]"
            >
              <span>WhatsApp schreiben</span>
              <span className="text-xs uppercase tracking-wide opacity-80">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── ARBEITSBEREICHE */

const AREAS = [
  { icon: House, title: "Privathaushalte", desc: "Wohnungen, Einfamilien­häuser, Ferienwohnungen." },
  { icon: Buildings, title: "Wohnanlagen", desc: "Treppenhäuser, Eingänge, Tief­garagen, Aufzüge." },
  { icon: Briefcase, title: "Büros & Kanzleien", desc: "Tägliche oder wöchentliche Unterhaltsreinigung." },
  { icon: Storefront, title: "Einzelhandel", desc: "Verkaufs­flächen, Schaufenster, Lager­bereiche." },
  { icon: Bed, title: "Hotel & Gastronomie", desc: "Zimmer, Sanitär, Küchen­bereiche nach HACCP." },
  { icon: GraduationCap, title: "Schulen & Praxen", desc: "Hygiene­sensible Räume mit zertifizierten Mitteln." },
  { icon: Wrench, title: "Bau & Handwerk", desc: "Bauend- und Bauzwischen­reinigung schlüsselfertig." },
  { icon: Sparkle, title: "Sonderaufträge", desc: "Veranstaltungen, Brand- & Wasserschäden, Spezial­fälle." },
];

export function WorkAreas() {
  return (
    <section className="dark-panel py-16 sm:py-28 px-4 sm:px-10 text-white">
      <div className="aurora-blob -top-40 right-[12%] h-[460px] w-[460px] bg-[oklch(0.5_0.11_252/0.35)] animate-aurora" aria-hidden="true" />
      <div className="aurora-blob -bottom-48 -left-32 h-[420px] w-[420px] bg-[oklch(0.45_0.1_215/0.3)] animate-aurora" style={{ animationDelay: "-9s" }} aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px]">
        <SectionHeading
          title="Gebäudereinigung für jeden Bedarf in Wuppertal"
          lead="Von der Privatwohnung bis zum Gewerbeobjekt im Bergischen Land reinigen wir zuverlässig mit eigenem Equipment und langjähriger Erfahrung."
          onDark
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {AREAS.map((a, idx) => (
            <Reveal key={a.title} delay={idx * 70} className="h-full">
              <Spotlight className="card-dark group relative h-full p-4 sm:p-6 min-h-[165px] sm:min-h-[180px] flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <span className="icon-tile">
                    <a.icon className="h-5 w-5" weight="light" />
                  </span>
                  <span className="font-mono text-[10px] tabular-nums text-white/35 transition-colors duration-300 group-hover:text-white/60">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-serif text-lg sm:text-2xl mb-2 tracking-tight">{a.title}</h3>
                <p className="text-sm text-white/65 leading-relaxed">{a.desc}</p>
                <ArrowRight className="absolute bottom-5 right-5 h-4 w-4 text-primary/0 -translate-x-2 transition-all duration-500 group-hover:text-white/80 group-hover:translate-x-0" weight="regular" />
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── REFERENZEN */

const REFERENCES = [
  "Hausverwaltung Vohwinkel",
  "Praxis Wuppertal",
  "Büro Solingen",
  "Wohnanlage Elberfeld",
  "Kanzlei Remscheid",
  "Treppenhaus Barmen",
  "Gewerbe Velbert",
  "Mehrfamilienhaus Cronenberg",
];

const HIGHLIGHTS = [
  {
    metric: "5,0",
    label: "Google-Bewertung",
    desc: "2 Rezensionen, zuverlässig und professionell bewertet.",
  },
  {
    metric: "24h",
    label: "Reaktionszeit",
    desc: "Schnelle Antwort auf jede Anfrage, persönlich und direkt.",
  },
  {
    metric: "100%",
    label: "Zufriedenheit",
    desc: "Gründliche Arbeit ohne Vertragsbindung, fair und transparent.",
  },
];

export function References() {
  return (
    <section className="dark-panel py-16 sm:py-28 px-4 sm:px-10 text-white border-t border-white/10">
      <div className="aurora-blob -top-48 -left-36 h-[480px] w-[480px] bg-[oklch(0.48_0.1_252/0.32)] animate-aurora" style={{ animationDelay: "-5s" }} aria-hidden="true" />
      <div className="aurora-blob -bottom-40 right-[18%] h-[420px] w-[420px] bg-[oklch(0.44_0.1_230/0.3)] animate-aurora" style={{ animationDelay: "-13s" }} aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px]">
        <SectionHeading
          title="Kunden und Betriebe, die uns weiterempfehlen"
          lead="Eine Auswahl unserer Auftraggeber aus Wuppertal, Solingen und dem Bergischen Land. Auf Wunsch nennen wir Ihnen gerne weitere Referenzen."
          onDark
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 mb-12 sm:mb-16">
          {REFERENCES.map((r, idx) => (
            <Reveal key={r} delay={idx * 60} className="h-full">
              <Spotlight className="card-dark h-full min-h-[108px] sm:min-h-0 px-3.5 sm:px-5 py-5 sm:py-9 flex items-center justify-center text-center">
                <span className="text-[0.82rem] sm:text-base text-white/80 leading-snug font-medium">
                  {r}
                </span>
              </Spotlight>
            </Reveal>
          ))}
        </div>

        {/* Highlight stats + Pull-quote */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-6 sm:gap-10">
            {HIGHLIGHTS.map((h, idx) => (
              <Reveal key={h.label} delay={idx * 120} className="group border-t border-white/15 pt-5 transition-colors duration-500 hover:border-white/40">
                <div className="metric-gradient font-serif text-5xl sm:text-6xl tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
                  {h.metric}
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/50">
                  {h.label}
                </div>
                <p className="mt-3 text-sm text-white/65 leading-relaxed max-w-none sm:max-w-[18ch]">
                  {h.desc}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} className="lg:col-span-5">
            <Spotlight className="card-dark relative p-6 sm:p-8">
              <Quotes className="h-9 w-9 text-primary mb-4 drop-shadow-[0_0_12px_oklch(0.55_0.11_252/0.7)]" weight="fill" />
              <blockquote className="text-lg sm:text-xl leading-relaxed text-white/95">
                „Zuverlässig und professionell. Gerne wieder! Pünktlich,
                gründlich und immer erreichbar."
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-white/55">
                <span className="h-px w-8 bg-white/30" />
                Google Bewertung · Wuppertal
              </figcaption>
            </Spotlight>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

