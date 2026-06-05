import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone,
  MessageCircle,
  Check,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Clock,
  Star,
  Menu,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { useScrollY } from "@/hooks/use-scroll-y";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { TrustBar, Gallery, FAQ, CtaStrip, Asterisk, Scribble, WorkAreas, References } from "@/components/Sections";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gebäudereinigung Wuppertal | Lindt.Reinigungsfirma" },
      {
        name: "description",
        content:
          "Zuverlässige Gebäudereinigung in Wuppertal — Privat & Gewerbe. 5,0 ★ auf Google. Jetzt kostenlos anfragen: 01520 8215042.",
      },
      { property: "og:title", content: "Gebäudereinigung Wuppertal | Lindt.Reinigungsfirma" },
      {
        property: "og:description",
        content:
          "Zuverlässige Gebäudereinigung in Wuppertal — Privat & Gewerbe. 5,0 ★ auf Google. Jetzt kostenlos anfragen: 01520 8215042.",
      },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Gebäudereinigung Wuppertal | Lindt.Reinigungsfirma" },
      {
        name: "twitter:description",
        content:
          "Zuverlässige Gebäudereinigung in Wuppertal — Privat & Gewerbe. 5,0 ★ auf Google. Jetzt kostenlos anfragen: 01520 8215042.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Lindt.Reinigungsfirma",
          image: "https://assets.mixkit.co/videos/13282/13282-thumb-720-0.jpg",
          telephone: "+4915208215042",
          email: "info.lindt.reinigungsfirma@web.de",
          priceRange: "€€",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Stackenbergstraße 36",
            postalCode: "42329",
            addressLocality: "Wuppertal",
            addressCountry: "DE",
          },
          areaServed: ["Wuppertal", "Wuppertal-Vohwinkel", "Bergisches Land", "Solingen", "Remscheid", "Velbert"],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "2",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const PHONE = "01520 8215042";
const PHONE_HREF = "tel:015208215042";
const WHATSAPP_HREF = "https://wa.me/4915208215042?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Reinigung.";
const WHATSAPP_SIMPLE = "https://wa.me/4915208215042";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#hauptinhalt"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Zum Hauptinhalt springen
      </a>
      <Nav />
      <main id="hauptinhalt">
        <Hero />
        <Marquee />
        <TrustBar />
        <Stats />
        <Services />
        <WorkAreas />
        <Gallery />
        <WhyUs />
        <Process />
        <Reviews />
        <References />
        <FAQ />
        <CtaStrip phone={PHONE} phoneHref={PHONE_HREF} waHref={WHATSAPP_SIMPLE} />
        <Contact />
      </main>
      <Footer />
      <MobileCTABar />
    </div>
  );
}

const NAV_LINKS = [
  ["Leistungen", "#leistungen"],
  ["Über uns", "#ueber"],
  ["Bewertungen", "#bewertungen"],
  ["Kontakt", "#kontakt"],
] as const;

/* ─────────────────────────────────────────────────────────── NAV */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-[var(--color-deep-navy)]/95 backdrop-blur-md border-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]"
          : "bg-[var(--color-deep-navy)]/70 backdrop-blur-sm border-white/10"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-10 py-3.5 sm:py-7 flex items-center justify-between gap-3">
        <a href="#top" className="flex items-baseline gap-2 shrink min-w-0 text-white">
          <span className="font-serif text-lg sm:text-2xl md:text-3xl tracking-tight leading-tight">
            Lindt.Reinigungsfirma
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-[13px] tracking-wide text-white/85">
          {NAV_LINKS.map(([label, href]) => (
            <a key={href} href={href} className="link-underline hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={PHONE_HREF}
            aria-label="Jetzt anrufen"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 sm:px-6 py-2.5 sm:py-3 text-[13px] font-medium text-primary-foreground hover:bg-[var(--color-primary-hover)] transition-colors min-h-[44px] min-w-[44px] justify-center"
          >
            <Phone className="h-4 w-4 md:hidden" />
            <span className="hidden md:inline">Anfrage stellen</span>
            <ArrowUpRight className="h-4 w-4 hidden md:inline-block" />
          </a>
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
              aria-label="Menü öffnen"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100vw,20rem)] bg-[var(--color-deep-navy)] border-white/10 text-white p-0">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="px-6 pt-8 pb-6 border-b border-white/10">
                  <span className="font-serif text-xl tracking-tight">Lindt.Reinigungsfirma</span>
                </div>
                <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
                  {NAV_LINKS.map(([label, href]) => (
                    <SheetClose key={href} asChild>
                      <a
                        href={href}
                        className="rounded-xl px-4 py-4 text-lg font-medium hover:bg-white/10 transition-colors"
                      >
                        {label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <div className="px-4 pb-8 pt-4 border-t border-white/10 space-y-3">
                  <SheetClose asChild>
                    <a
                      href={PHONE_HREF}
                      className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-medium text-primary-foreground min-h-[52px]"
                    >
                      <Phone className="h-5 w-5" />
                      {PHONE} anrufen
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href={WHATSAPP_SIMPLE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-4 text-base font-medium min-h-[52px]"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp schreiben
                    </a>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

/* ─────────────────────────────────────────────────────────── HERO */

function AnimatedHeadline() {
  const lines: { text: string; italic?: boolean }[] = [
    { text: "Sauberkeit, die" },
    { text: "überzeugt.", italic: true },
  ];
  let idx = 0;
  return (
    <h1 className="font-serif text-[clamp(2.25rem,10vw,9rem)] leading-[0.95] tracking-[-0.03em] letter-stage text-white">
      {lines.map((line, li) => (
        <span
          key={li}
          className={`block ${
            line.italic
              ? "italic text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] underline decoration-primary/80 underline-offset-[10px]"
              : ""
          }`}
        >
          {[...line.text].map((ch, ci) => {
            const delay = idx * 22 + 120;
            idx += 1;
            return (
              <span key={ci} style={{ animationDelay: `${delay}ms` }}>
                {ch === " " ? "\u00A0" : ch}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

function Hero() {
  const scrollY = useScrollY();
  const isMobile = useIsMobile();
  const videoY = isMobile ? 0 : Math.min(scrollY * 0.35, 240);
  const contentY = isMobile ? 0 : Math.min(scrollY * 0.18, 120);
  const contentOpacity = isMobile ? 1 : Math.max(1 - scrollY / 600, 0);
  const overlayOpacity = isMobile ? 0.65 : Math.min(0.55 + scrollY / 1400, 0.85);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-start sm:items-center justify-center px-4 sm:px-10 pt-28 sm:pt-48 pb-20 sm:pb-16 overflow-hidden"
    >
      {/* Background video with parallax + slow zoom */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${videoY}px, 0)` }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          poster="https://assets.mixkit.co/videos/13282/13282-thumb-720-0.jpg"
        >
          <source src="https://assets.mixkit.co/videos/13282/13282-720.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Dark overlay for legibility */}
      <div
        className="absolute inset-0 bg-black transition-opacity"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,transparent_0%,rgba(0,0,0,0.45)_75%)]" />

      <Asterisk className="hidden sm:block absolute top-32 right-10 h-16 w-16 text-primary/70 animate-[spin_18s_linear_infinite]" />
      <Asterisk className="hidden lg:block absolute bottom-32 right-24 h-10 w-10 text-white/40 animate-float-y" />
      <div className="hidden md:block absolute top-1/3 left-12 h-32 w-32 rounded-full bg-primary/30 blur-[60px] animate-glow-pulse" />
      <Scribble className="hidden md:block absolute bottom-24 left-10 w-40 text-primary/40 animate-float-x" />

      <div
        className="relative mx-auto max-w-[1400px] w-full will-change-transform"
        style={{
          transform: `translate3d(0, ${-contentY}px, 0)`,
          opacity: contentOpacity,
        }}
      >
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Reveal delay={400}>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.25em] text-white/70 mb-5 sm:mb-8 max-w-xs sm:max-w-none mx-auto lg:mx-0">
                Gebäudereinigung · Wuppertal & Bergisches Land
              </p>
            </Reveal>

            <AnimatedHeadline />

            <Reveal delay={800}>
              <p className="mt-8 sm:mt-10 text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
                Zuverlässige Gebäudereinigung für Privat und Gewerbe in Wuppertal
                und Umgebung, pünktlich, gründlich und zu fairen Konditionen.
              </p>
            </Reveal>

            <Reveal delay={1000}>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start w-full max-w-md lg:max-w-none mx-auto lg:mx-0">
                <Magnetic
                  href={PHONE_HREF}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-[14px] font-medium text-primary-foreground hover:bg-[var(--color-primary-hover)] transition-colors min-h-[52px] shadow-[0_18px_40px_-18px_var(--color-primary)]"
                >
                  Jetzt kostenlos anfragen
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Magnetic>
                <Magnetic
                  href={WHATSAPP_SIMPLE}
                  target="_blank"
                  rel="noopener noreferrer"
                  strength={0.18}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 backdrop-blur-sm px-7 py-4 text-[14px] font-medium text-white hover:bg-white/15 transition-colors min-h-[52px]"
                >
                  <MessageCircle className="h-4 w-4 transition-transform duration-500 group-hover:rotate-[-8deg]" />
                  WhatsApp schreiben
                </Magnetic>
              </div>
            </Reveal>

            <Reveal delay={1200}>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-white/80">
                {["Kostenlose Anfrage", "Antwort in 24h", "Wuppertal & Region"].map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" strokeWidth={2.5} />
                    {badge}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={1400} className="lg:hidden w-full max-w-md mx-auto mt-8">
              <div className="rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-foreground font-serif text-sm">G</div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-serif text-lg">5,0</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-0.5">
                      2 Bewertungen
                    </div>
                  </div>
                </div>
                <blockquote className="font-serif italic text-lg leading-snug text-white/95">
                  „Zuverlässig und professionell. Gerne wieder!"
                </blockquote>
                <figcaption className="mt-3 text-[11px] uppercase tracking-[0.2em] text-white/50">
                  Google Bewertung
                </figcaption>
              </div>
            </Reveal>
          </div>

          <Reveal delay={1000} className="lg:col-span-5 hidden lg:block">
            <div className="rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md p-8 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-foreground font-serif text-sm">G</div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif text-xl">5,0</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-0.5">
                    2 Bewertungen
                  </div>
                </div>
              </div>
              <blockquote className="font-serif italic text-xl leading-snug text-white/95">
                „Zuverlässig und professionell. Gerne wieder!"
              </blockquote>
              <figcaption className="mt-4 text-[11px] uppercase tracking-[0.2em] text-white/50">
                Google Bewertung
              </figcaption>
            </div>
          </Reveal>
        </div>
      </div>

    </section>
  );
}

/* ─────────────────────────────────────────────────────────── MARQUEE */

function Marquee() {
  const items = [
    "Unterhaltsreinigung", "Büro & Gewerbe", "Fensterreinigung", "Grundreinigung",
    "Treppenhaus", "Sonderreinigung", "Bauendreinigung", "Wuppertal & Region",
  ];
  const row = [...items, ...items];
  return (
    <div className="border-y border-border py-6 overflow-hidden bg-background marquee-fade group" aria-hidden="true">
      <div className="flex gap-8 sm:gap-12 animate-marquee whitespace-nowrap font-serif text-xl sm:text-3xl text-foreground/40 [animation-play-state:running] group-hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12 transition-colors duration-300 hover:text-primary">
            {t}
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}



/* ─────────────────────────────────────────────────────────── STATS */

function StatNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1400;
        const target = value;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setShown(target * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  const display = value < 10
    ? shown.toFixed(1).replace(".", ",")
    : Math.round(shown).toString();
  return (
    <span ref={ref} className="tabular-nums">
      {display}
      <span className="text-2xl sm:text-3xl text-primary ml-1">{suffix}</span>
    </span>
  );
}

function Stats() {
  const items: (
    | { v: number; s: string; l: string }
    | { static: string; l: string }
  )[] = [
    { v: 5.0, s: "★", l: "Google-Bewertung" },
    { v: 100, s: "%", l: "Zufriedenheit" },
    { v: 24, s: "h", l: "Reaktionszeit" },
    { static: "0 €", l: "Anfrage-Kosten" },
  ];
  return (
    <section className="relative bg-[var(--color-dark)] text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,var(--color-deep-navy-soft)_0%,transparent_55%)] opacity-60" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-primary/15 blur-[120px] animate-aurora" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-10 py-12 sm:py-20">
        <Reveal>
          <div className="flex flex-col items-center gap-3 mb-8 sm:mb-10 text-[10px] uppercase tracking-[0.25em] text-white/40">
            <span>Vertrauen in Zahlen</span>
            <span className="h-px w-20 bg-white/15 origin-center animate-draw-line" />
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          {items.map((i, idx) => (
            <Reveal
              key={i.l}
              delay={idx * 120}
              className={`text-center md:text-left py-2 md:py-0 md:px-8 ${idx > 0 ? "md:border-l border-white/10" : ""}`}
            >
              <div className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight">
                {"static" in i ? (
                  <span className="tabular-nums">{i.static}</span>
                ) : (
                  <StatNumber value={i.v} suffix={i.s} />
                )}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/50">
                {i.l}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── SERVICES */

function Services() {
  const services = [
    { n: "01", title: "Unterhaltsreinigung", desc: "Regelmäßige Reinigung von Büros, Praxen und Wohngebäuden.", img: "https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?w=600&q=80&auto=format&fit=crop" },
    { n: "02", title: "Büro & Gewerbereinigung", desc: "Professionelle Sauberkeit für Ihr Unternehmen, täglich, wöchentlich oder nach Bedarf.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop" },
    { n: "03", title: "Grundreinigung", desc: "Tiefenreinigung für Umzüge, Übergaben oder besondere Anlässe.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop" },
    { n: "04", title: "Fensterreinigung", desc: "Innen und außen. Streifenfrei und termingerecht.", img: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&q=80&auto=format&fit=crop" },
    { n: "05", title: "Treppenhaus & Gemeinschaftsflächen", desc: "Regelmäßige Pflege von Treppenhäusern in Mehrfamilienhäusern.", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&auto=format&fit=crop" },
    { n: "06", title: "Sonderreinigung auf Anfrage", desc: "Bauendreinigung, Veranstaltungsreinigung und individuelle Projekte. Sprechen Sie uns an.", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80&auto=format&fit=crop" },
  ];
  return (
    <section id="leistungen" className="py-16 sm:py-24 md:py-36 px-4 sm:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <div className="flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <span>Leistungen</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.02em] mb-6">
            Alles aus
            <br />
            <span className="italic text-primary">einer Hand.</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-2xl">
            Ob einmalige Grundreinigung oder regelmäßige Unterhaltsreinigung: wir
            erstellen Ihnen ein individuelles Angebot, transparent und ohne
            Vertragsbindung.
          </p>
        </div>

        <div className="border-t border-border">
          {services.map((s, idx) => (
            <Reveal key={s.n} delay={idx * 80}>
              <a
                href="#kontakt"
                className="group block border-b border-border py-5 sm:py-7 hover:bg-foreground/[0.03] -mx-2 sm:-mx-6 px-2 sm:px-6 transition-colors duration-300 relative overflow-hidden"
              >
                <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                <div className="sm:hidden space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs text-muted-foreground tabular-nums group-hover:text-primary transition-colors pt-1">
                      {s.n}
                    </span>
                    <h3 className="font-serif text-xl tracking-tight flex-1">{s.title}</h3>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={375}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-sm text-foreground/65 leading-relaxed">{s.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Anfragen
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="hidden sm:grid grid-cols-12 gap-4 sm:gap-6 items-center">
                  <div className="col-span-1 font-mono text-xs sm:text-sm text-muted-foreground tabular-nums group-hover:text-primary transition-colors">
                    {s.n}
                  </div>
                  <div className="col-span-2">
                    <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                      <img
                        src={s.img}
                        alt={s.title}
                        loading="lazy"
                        decoding="async"
                        width={600}
                        height={600}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <h3 className="col-span-3 font-serif text-2xl md:text-3xl tracking-tight transition-transform duration-500 group-hover:translate-x-1">
                    {s.title}
                  </h3>
                  <p className="col-span-4 text-sm sm:text-base text-foreground/65 leading-relaxed">
                    {s.desc}
                  </p>
                  <div className="col-span-2 flex justify-end">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 group-hover:gap-3">
                      Anfragen
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── WHY US */

function WhyUs() {
  const points = [
    { n: "01", t: "Zuverlässig", d: "Pünktlich, gründlich und termingetreu, ohne Ausreden, ohne Nacharbeiten." },
    { n: "02", t: "Faire Preise", d: "Transparente Konditionen ohne versteckte Kosten. Individuelle Angebote je nach Objekt." },
    { n: "03", t: "Persönlich", d: "Direkt mit dem Inhaber, kein Callcenter, schnelle Reaktionszeiten." },
    { n: "04", t: "Flexibel", d: "Auch mittwochs bis 19:30 Uhr erreichbar. Wir passen uns Ihrem Alltag an." },
  ];
  return (
    <section id="ueber" className="relative py-16 sm:py-24 md:py-36 px-4 sm:px-10 bg-[var(--color-deep-navy)] text-white overflow-hidden">
      {/* Aurora ambient blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/25 blur-[120px] animate-aurora" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-[520px] w-[520px] rounded-full bg-[var(--color-deep-navy-soft)] blur-[140px] animate-aurora" style={{ animationDelay: "-8s" }} />
      <Asterisk className="hidden md:block absolute top-16 right-10 h-14 w-14 text-primary/40 animate-[spin_24s_linear_infinite]" />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.25em] text-white/40">
            <span>Warum Lindt</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.02em] mb-6">
            Vertrauen,
            <br />
            das man <span className="italic text-white">spürt.</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start space-y-8">
            <div className="overflow-hidden rounded-2xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80&auto=format&fit=crop"
                alt="Gepflegtes Zuhause nach der Reinigung"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <figure className="border-l-2 border-primary pl-6 sm:pl-8">
              <blockquote className="font-serif italic text-2xl sm:text-3xl leading-snug text-white/95">
                „Gebäudereinigung, bei der man sich keine Gedanken machen muss."
              </blockquote>
              <figcaption className="mt-4 text-[11px] uppercase tracking-[0.2em] text-white/50">
                Unser Anspruch bei jedem Auftrag
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-10 sm:space-y-12">
              {points.map((p, idx) => (
                <Reveal
                  key={p.n}
                  delay={idx * 120}
                  className="flex gap-6 sm:gap-8 pb-10 sm:pb-12 border-b border-white/10 last:border-0 last:pb-0"
                >
                  <span className="font-mono text-xs tabular-nums text-white/40 pt-2 shrink-0">
                    {p.n}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl sm:text-3xl mb-3 flex items-center gap-3 group">
                      {p.t}
                      <Check className="h-5 w-5 text-primary transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" strokeWidth={2.5} />
                    </h3>
                    <p className="text-base text-white/70 leading-relaxed max-w-md">{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── PROCESS */

function Process() {
  const steps = [
    { n: "01", t: "Anfrage stellen", d: "Kurzer Anruf oder WhatsApp. Wir melden uns innerhalb von 24 Stunden." },
    { n: "02", t: "Angebot erhalten", d: "Kostenloser Vor-Ort-Termin oder Angebot nach Ihren Angaben." },
    { n: "03", t: "Reinigung starten", d: "Wir legen zum vereinbarten Termin los, zuverlässig und ohne großen Aufwand für Sie." },
  ];
  return (
    <section className="py-16 sm:py-24 md:py-36 px-4 sm:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <div className="flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <span>Der Ablauf</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.02em] max-w-3xl">
            In drei Schritten zu Ihrer
            {" "}
            <span className="italic text-primary">sauberen Immobilie.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {steps.map((s, idx) => (
            <Reveal key={s.n} delay={idx * 180} className="bg-background">
              <div className="group p-6 sm:p-10 md:p-12 min-h-0 sm:min-h-[320px] flex flex-col h-full transition-colors duration-500 hover:bg-[#EFEBE4]">
                <div className="font-serif text-5xl sm:text-8xl text-primary/90 leading-none mb-5 sm:mb-8 transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-primary">
                  {s.n}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl mb-4 tracking-tight">{s.t}</h3>
                <p className="text-base text-foreground/65 leading-relaxed flex-1">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 pt-10 border-t border-border">
          <p className="text-sm text-muted-foreground max-w-md text-center sm:text-left">
            Bereit anzufangen? Eine kurze Nachricht reicht, wir kümmern uns um den Rest.
          </p>
          <a
            href={PHONE_HREF}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-[14px] font-medium text-background hover:bg-[var(--color-primary-hover)] transition-colors min-h-[52px] w-full sm:w-auto"
          >
            Jetzt Schritt 1 starten
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── REVIEWS */

function Reviews() {
  const reviews = [
    {
      name: "Google Bewertung",
      role: "Kunde · Wuppertal",
      initials: "G",
      text: "Zuverlässig und professionell. Gerne wieder!",
    },
    {
      name: "Google Bewertung",
      role: "Kunde · Bergisches Land",
      initials: "G",
      text: "Pünktlich, gründlich und freundlich. Klare Weiterempfehlung für Gebäudereinigung in Wuppertal.",
    },
  ];

  return (
    <section id="bewertungen" className="relative bg-[var(--color-deep-navy)] text-white py-16 sm:py-24 md:py-36 px-4 sm:px-10 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 right-0 h-[460px] w-[460px] rounded-full bg-primary/20 blur-[140px] animate-aurora" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-[var(--color-deep-navy-soft)] blur-[120px] animate-aurora" style={{ animationDelay: "-10s" }} />
      <div className="relative mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.25em] text-white/40">
            <span>Kundenstimmen</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.02em] mb-8">
            Was unsere Kunden{" "}
            <span className="italic text-primary">sagen.</span>
          </h2>
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-foreground font-serif text-base">G</div>
            <div>
              <div className="font-serif text-2xl leading-none">5,0 / 5,0</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/50">2 Bewertungen auf Google</div>
            </div>
          </div>
        </div>

        <ReviewsCarousel reviews={reviews} />
      </div>
    </section>
  );
}

function ReviewsCarousel({ reviews }: { reviews: { name: string; role: string; initials: string; text: string }[] }) {
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
        <CarouselContent className="-ml-4 sm:-ml-6">
          {reviews.map((r, i) => (
            <CarouselItem
              key={i}
              className="pl-4 sm:pl-6 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <article className="h-full flex flex-col justify-between border border-white/10 bg-white/[0.03] backdrop-blur-sm rounded-2xl p-7 sm:p-8 transition-colors duration-300 hover:bg-white/[0.06] hover:border-white/20">
                <div>
                  <div className="flex items-center gap-1.5 mb-5">
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="font-serif text-xl sm:text-2xl leading-snug tracking-tight text-white/95">
                    „{r.text}"
                  </blockquote>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-serif text-sm">
                    {r.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{r.name}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-0.5">{r.role}</div>
                  </div>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Controls */}
      <div className="mt-10 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => api?.scrollTo(i)}
              aria-label={`Zur Bewertung ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                selected === i ? "w-8 bg-primary" : "w-4 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            aria-label="Vorherige Bewertung"
            className="h-11 w-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-foreground transition-colors"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            aria-label="Nächste Bewertung"
            className="h-11 w-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-foreground transition-colors"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── CONTACT */

function Contact() {
  return (
    <section id="kontakt" className="py-16 sm:py-24 md:py-36 px-4 sm:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <span>Kontakt</span>
          </div>
          <h2 className="font-serif text-[clamp(2rem,8vw,4.5rem)] leading-[1.05] tracking-[-0.03em] mb-6">
            Jetzt unverbindlich anfragen.
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-xl mb-10">
            Einfach anrufen oder WhatsApp — wir antworten schnell.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl w-full">
            <a
              href={PHONE_HREF}
              className="group flex-1 inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-5 text-base font-medium text-primary-foreground hover:bg-[var(--color-primary-hover)] transition-colors min-h-[60px]"
            >
              <Phone className="h-5 w-5" />
              {PHONE} anrufen
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-foreground/20 px-7 py-5 text-base font-medium hover:border-primary hover:text-primary transition-colors min-h-[60px]"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp schreiben
            </a>
          </div>
        </div>

        <Reveal>
          <div className="flex flex-col items-center justify-center gap-5 sm:gap-12 text-sm text-foreground/80 mb-12 sm:mb-16 text-center">
            <p className="inline-flex items-start sm:items-center gap-2 max-w-xs sm:max-w-none">
              <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5 sm:mt-0" />
              Stackenbergstraße 36, 42329 Wuppertal
            </p>
            <div className="inline-flex items-start sm:items-center gap-2">
              <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5 sm:mt-0" />
              <div className="text-left sm:text-center">
                <p>Mo–Di & Do–Fr: 8–18 Uhr</p>
                <p>Mi: 11:30–19:30 Uhr</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Google Maps Karte */}
        <div className="mt-8 sm:mt-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                Standort
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl tracking-tight">
                Stackenbergstraße 36, 42329 Wuppertal
              </h3>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Stackenbergstra%C3%9Fe+36,+42329+Wuppertal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              Route planen <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-border aspect-[16/9] sm:aspect-[21/9] bg-muted">
            <iframe
              title="Standort Lindt.Reinigungsfirma — Stackenbergstraße 36, 42329 Wuppertal"
              src="https://www.google.com/maps?q=Stackenbergstra%C3%9Fe+36,+42329+Wuppertal&hl=de&z=14&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale-[0.3] contrast-[1.05]"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── FOOTER */

function MobileCTABar() {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[var(--color-deep-navy)]/95 backdrop-blur-md px-3 pt-3 pb-safe">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={PHONE_HREF}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3.5 text-sm font-medium text-primary-foreground min-h-[48px]"
        >
          <Phone className="h-4 w-4 shrink-0" />
          Anrufen
        </a>
        <a
          href={WHATSAPP_SIMPLE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-4 py-3.5 text-sm font-medium text-white min-h-[48px]"
        >
          <MessageCircle className="h-4 w-4 shrink-0" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-white px-4 sm:px-10 pt-12 sm:pt-16 pb-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-12 pb-12 border-b border-white/10">
          <p className="font-serif text-xl sm:text-2xl mb-3">
            Lindt.Reinigungsfirma — Gebäudereinigung in Wuppertal.
          </p>
          <p className="text-sm text-white/60">
            Stackenbergstraße 36 · 42329 Wuppertal · {PHONE}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-white/40">
          <span>© 2026 Lindt.Reinigungsfirma</span>
          <div className="flex items-center gap-4">
            <a href="#impressum" className="hover:text-primary transition-colors">Impressum</a>
            <span>·</span>
            <a href="#datenschutz" className="hover:text-primary transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
