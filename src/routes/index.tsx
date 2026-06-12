import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import {
  Phone,
  ChatCircle,
  Check,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Clock,
  Star,
} from "@phosphor-icons/react";
import { Reveal } from "@/components/Reveal";
import { Spotlight } from "@/components/Spotlight";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter, MobileCTABar } from "@/components/SiteFooter";
import { BUSINESS } from "@/lib/business";
import { LazyMap } from "@/components/LazyMap";
import { SectionFallback } from "@/components/SectionFallback";
import { useIsMobile } from "@/hooks/use-mobile";
import { useInView } from "@/hooks/use-in-view";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { HERO_POSTER, HERO_VIDEO, unsplash } from "@/lib/assets";
import { TrustBar } from "@/components/TrustBar";
import { LOGO_URLS } from "@/components/Logo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const WorkAreas = lazy(() =>
  import("@/components/Sections").then((m) => ({ default: m.WorkAreas })),
);
const Gallery = lazy(() =>
  import("@/components/Sections").then((m) => ({ default: m.Gallery })),
);
const FAQ = lazy(() => import("@/components/Sections").then((m) => ({ default: m.FAQ })));
const CtaStrip = lazy(() =>
  import("@/components/Sections").then((m) => ({ default: m.CtaStrip })),
);
const References = lazy(() =>
  import("@/components/Sections").then((m) => ({ default: m.References })),
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gebäudereinigung Wuppertal | Lindt.Reinigungsfirma für Privat und Gewerbe" },
      {
        name: "description",
        content:
          "Professionelle Gebäudereinigung in Wuppertal & Bergisches Land ✓ Unterhalts-, Grund- & Fensterreinigung ✓ Privat & Gewerbe ✓ 5,0 ★ Google ✓ Kostenlos anfragen: 01520 8215042.",
      },
      { name: "keywords", content: "Gebäudereinigung Wuppertal, Reinigungsfirma Wuppertal, Unterhaltsreinigung Wuppertal, Grundreinigung Wuppertal, Fensterreinigung Wuppertal, Büroreinigung Wuppertal, Treppenhaus reinigen Wuppertal, Bergisches Land" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_DE" },
      { property: "og:title", content: "Gebäudereinigung Wuppertal | Lindt.Reinigungsfirma für Privat und Gewerbe" },
      {
        property: "og:description",
        content:
          "Professionelle Gebäudereinigung in Wuppertal & Bergisches Land ✓ Unterhalts-, Grund- & Fensterreinigung ✓ 5,0 ★ Google ✓ Kostenlos anfragen: 01520 8215042.",
      },
      { property: "og:url", content: "https://lindt-reinigungsfirma.de/" },
      { property: "og:image", content: HERO_POSTER },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO_POSTER },
      { name: "twitter:title", content: "Gebäudereinigung Wuppertal | Lindt.Reinigungsfirma" },
      {
        name: "twitter:description",
        content:
          "Professionelle Gebäudereinigung in Wuppertal & Bergisches Land. 5,0 ★ auf Google. Jetzt kostenlos anfragen: 01520 8215042.",
      },
    ],
    links: [{ rel: "canonical", href: "https://lindt-reinigungsfirma.de/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CleaningService",
          name: BUSINESS.name,
          description: "Professionelle Gebäudereinigung in Wuppertal und dem Bergischen Land. Unterhaltsreinigung, Grundreinigung, Fensterreinigung und Büroreinigung für Privat und Gewerbe.",
          image: LOGO_URLS.complete,
          logo: LOGO_URLS.complete,
          url: "https://lindt-reinigungsfirma.de",
          telephone: "+4915208215042",
          email: BUSINESS.email,
          priceRange: "€€",
          address: {
            "@type": "PostalAddress",
            streetAddress: BUSINESS.street,
            postalCode: BUSINESS.zip,
            addressLocality: BUSINESS.city,
            addressCountry: "DE",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "51.2562",
            longitude: "7.1507",
          },
          areaServed: [
            { "@type": "City", name: "Wuppertal" },
            { "@type": "City", name: "Solingen" },
            { "@type": "City", name: "Remscheid" },
            { "@type": "City", name: "Velbert" },
            { "@type": "AdministrativeArea", name: "Bergisches Land" },
          ],
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "11:30", closes: "19:30" },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Reinigungsleistungen",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Unterhaltsreinigung Wuppertal" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Grundreinigung Wuppertal" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Büroreinigung Wuppertal" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fensterreinigung Wuppertal" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Treppenhaus Reinigung Wuppertal" } },
            ],
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "6",
            bestRating: "5",
            worstRating: "1",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Was kostet eine Gebäudereinigung in Wuppertal?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Die Kosten hängen von Objekt, Umfang und Häufigkeit ab. Wir erstellen Ihnen nach einer kurzen Beschreibung oder einem kostenlosen Vor Ort Termin ein transparentes Festpreisangebot ohne versteckte Kosten.",
              },
            },
            {
              "@type": "Question",
              name: "Wie schnell bekomme ich ein Angebot?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Innerhalb von 24 Stunden, meist deutlich schneller. Ein kurzer Anruf oder eine WhatsApp Nachricht mit einer Beschreibung des Objekts reicht aus.",
              },
            },
            {
              "@type": "Question",
              name: "In welchen Orten sind Sie tätig?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Wir reinigen in Wuppertal einschließlich Vohwinkel, Barmen, Elberfeld und Cronenberg. Zusätzlich sind wir in Solingen, Remscheid, Velbert und im Bergischen Land tätig.",
              },
            },
            {
              "@type": "Question",
              name: "Gibt es eine Vertragsbindung?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Nein. Sie können einmalig oder regelmäßig buchen und jederzeit ohne Kündigungsfrist beenden.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const PHONE = BUSINESS.phone;
const PHONE_HREF = BUSINESS.phoneHref;
const WHATSAPP_HREF = BUSINESS.whatsappHrefWithText;
const WHATSAPP_SIMPLE = BUSINESS.whatsappHref;

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#hauptinhalt"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Zum Hauptinhalt springen
      </a>
      <SiteHeader />
      <main id="hauptinhalt">
        <Hero />
        <ServiceStrip />
        <TrustBar />
        <Stats />
        <Services />
        <Suspense fallback={<SectionFallback minHeight="28rem" />}>
          <WorkAreas />
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight="32rem" />}>
          <Gallery />
        </Suspense>
        <WhyUs />
        <Process />
        <Reviews />
        <Suspense fallback={<SectionFallback minHeight="28rem" />}>
          <References />
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight="24rem" />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight="16rem" />}>
          <CtaStrip phone={PHONE} phoneHref={PHONE_HREF} waHref={WHATSAPP_SIMPLE} />
        </Suspense>
        <Contact />
      </main>
      <SiteFooter />
      <MobileCTABar />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── HERO */

function GoogleReviewCard({ size }: { size: "sm" | "lg" }) {
  const isLg = size === "lg";
  return (
    <div className={`rounded-xl bg-white/[0.97] backdrop-blur border border-white/80 text-foreground ${isLg ? "p-7 shadow-[0_24px_60px_-16px_rgb(0_0_0/0.5)]" : "p-5 shadow-[var(--shadow-card)]"}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`flex items-center justify-center rounded-full bg-[oklch(0.31_0.055_252)] text-white font-serif shrink-0 ${isLg ? "h-10 w-10 text-sm" : "h-9 w-9 text-xs"}`}>G</div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className={`font-serif leading-none ${isLg ? "text-xl" : "text-lg"}`}>5,0</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`fill-[oklch(0.78_0.14_85)] text-[oklch(0.78_0.14_85)] ${isLg ? "h-3.5 w-3.5" : "h-3 w-3"}`} />
              ))}
            </div>
          </div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
            6 Bewertungen Google
          </div>
        </div>
      </div>
      <blockquote className={`leading-relaxed text-foreground/90 ${isLg ? "text-lg" : "text-base"}`}>
        „Zuverlässig und professionell. Gerne wieder!"
      </blockquote>
      {isLg && (
        <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Wuppertal · Privatkunde
        </figcaption>
      )}
    </div>
  );
}

function HeroBackground() {
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: "0px", once: true });
  const [videoVisible, setVideoVisible] = useState(false);
  const useVideo = !isMobile && !reducedMotion && inView;

  useEffect(() => {
    if (!useVideo) return;
    setVideoVisible(true);
  }, [useVideo]);

  return (
    <div ref={ref} className="absolute inset-0">
      <img
        src={HERO_POSTER}
        alt=""
        width={1280}
        height={720}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      {videoVisible && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          poster={HERO_POSTER}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[82svh] sm:min-h-[88svh] flex items-center justify-center px-4 sm:px-10 pt-20 sm:pt-28 pb-12 sm:pb-20 overflow-hidden"
    >
      <HeroBackground />
      <div className="absolute inset-0 bg-[var(--color-deep-navy)]/72" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-navy)] via-transparent to-black/25" />

      <div className="relative mx-auto max-w-[1400px] w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div>
              <h1 className="font-serif text-[clamp(1.8rem,7.2vw,3.75rem)] leading-[1.14] tracking-[-0.02em] text-white max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                Gebäudereinigung in Wuppertal, zuverlässig, gründlich und persönlich.
              </h1>
            </div>

            <div>
              <p className="mt-4 sm:mt-6 text-[0.98rem] sm:text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                Professionelle Unterhaltsreinigung, Grundreinigung und Fensterreinigung für Privathaushalte und Gewerbebetriebe in Wuppertal und dem Bergischen Land. Pünktlich, ohne Vertragsbindung und direkt vom Inhaber.
              </p>
            </div>

            <div>
              <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center lg:justify-start w-full max-w-md lg:max-w-none mx-auto lg:mx-0">
                <a href={PHONE_HREF} className="btn-primary w-full sm:w-auto shadow-[0_8px_28px_-10px_oklch(0.31_0.055_252/0.65)]">
                  Jetzt kostenlos anfragen
                  <ArrowUpRight className="h-4 w-4" weight="regular" />
                </a>
                <a
                  href={WHATSAPP_SIMPLE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-white/30 px-5 sm:px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/50 transition-all min-h-[3rem]"
                >
                  <ChatCircle className="h-4 w-4" weight="light" />
                  WhatsApp schreiben
                </a>
              </div>
            </div>

            <div>
              <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 sm:gap-x-5 gap-y-2 text-[13px] sm:text-sm text-white/75">
                {["Kostenlose Anfrage", "Antwort in 24h", "Wuppertal & Region"].map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                      <Check className="h-2.5 w-2.5 text-white" weight="bold" />
                    </span>
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:hidden w-full max-w-sm mx-auto mt-6">
              <GoogleReviewCard size="sm" />
            </div>
          </div>

          <Reveal delay={280} className="lg:col-span-5 hidden lg:flex flex-col gap-5">
            <GoogleReviewCard size="lg" />
            <div className="grid grid-cols-3 gap-3">
              {[["5,0 ★", "Google"], ["24h", "Antwort"], ["0 €", "Anfrage"]].map(([val, lbl]) => (
                <div key={lbl} className="rounded-lg bg-white/12 border border-white/20 px-4 py-3 text-center backdrop-blur-sm">
                  <div className="font-serif text-xl text-white">{val}</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-white/55 mt-0.5">{lbl}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

    </section>
  );
}

/* ─────────────────────────────────────────────────────────── MARQUEE */

function ServiceStrip() {
  const items = [
    "Unterhaltsreinigung",
    "Büro & Gewerbe",
    "Fensterreinigung",
    "Grundreinigung",
    "Treppenhaus",
    "Bauendreinigung",
    "Hotelreinigung",
    "Sonderaufträge",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="border-y border-border bg-[#EFEBE4]/60 py-3.5 overflow-hidden marquee-fade" aria-hidden="true">
      <ul className="flex w-max animate-marquee gap-x-10">
        {doubled.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/60 whitespace-nowrap">
            <span className="h-1 w-1 rounded-full bg-primary/70 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
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
      <span className="text-2xl sm:text-3xl ml-1">{suffix}</span>
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
    <section className="dark-panel text-white border-y border-white/10">
      <div className="aurora-blob -top-32 left-[20%] h-[360px] w-[360px] bg-[oklch(0.5_0.1_252/0.32)] animate-drift" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-10 py-12 sm:py-16">
        <p className="section-eyebrow text-white/55 text-center mb-8">Vertrauen in Zahlen</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          {items.map((i, idx) => (
            <Reveal
              key={i.l}
              delay={idx * 120}
              className={`group text-center md:text-left py-2 md:py-0 md:px-8 ${idx > 0 ? "md:border-l border-white/10" : ""}`}
            >
              <div className="metric-gradient font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
                {"static" in i ? (
                  <span className="tabular-nums">{i.static}</span>
                ) : (
                  <StatNumber value={i.v} suffix={i.s} />
                )}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 group-hover:text-white/75">
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
    { n: "01", title: "Unterhaltsreinigung", desc: "Regelmäßige Gebäudereinigung in Wuppertal für Büros, Praxen und Wohngebäude. Wöchentlich, zweiwöchentlich oder nach Absprache.", img: unsplash("photo-1581578017093-cd30fce4eeb7", 600) },
    { n: "02", title: "Büro & Gewerbereinigung", desc: "Professionelle Büroreinigung in Wuppertal für Unternehmen, Kanzleien und Praxen. Täglich, wöchentlich oder flexibel nach Bedarf.", img: unsplash("photo-1497366216548-37526070297c", 600) },
    { n: "03", title: "Grundreinigung", desc: "Tiefenreinigung in Wuppertal bei Umzügen, Wohnungsübergaben oder besonderen Anlässen. Wir kommen komplett ausgestattet, Sie müssen nichts vorbereiten.", img: unsplash("photo-1600585154340-be6161a56a0c", 600) },
    { n: "04", title: "Fensterreinigung", desc: "Streifenfreie Fensterreinigung in Wuppertal innen und außen, mit Abzieher und Profitechnik, pünktlich und termingerecht.", img: unsplash("photo-1604014237800-1c9102c219da", 600) },
    { n: "05", title: "Treppenhaus und Gemeinschaftsflächen", desc: "Professionelle Treppenhausreinigung für Mehrfamilienhäuser in Wuppertal und dem Bergischen Land. Zuverlässig, regelmäßig und gründlich.", img: unsplash("photo-1556909114-f6e7ad7d3136", 600) },
    { n: "06", title: "Sonderreinigung und Bauendreinigung", desc: "Bauendreinigung, Veranstaltungsreinigung und individuelle Sonderaufträge in Wuppertal. Einfach anfragen, wir finden eine Lösung.", img: unsplash("photo-1581578731548-c64695cc6952", 600) },
  ];
  return (
    <section id="leistungen" className="py-16 sm:py-24 px-4 sm:px-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          title="Reinigungsservice in Wuppertal & Bergisches Land"
          lead="Von der regelmäßigen Unterhaltsreinigung bis zur einmaligen Grundreinigung. Wir erstellen Ihnen ein individuelles Angebot, transparent, fair und ohne Vertragsbindung."
        />

        <div className="border-t border-border space-y-2.5 sm:space-y-0">
          {services.map((s, idx) => (
            <Reveal key={s.n} delay={idx * 80}>
              <a
                href="#kontakt"
                className="group block border-b border-border py-4 sm:py-7 hover:bg-foreground/[0.03] mx-0 sm:-mx-6 px-0 sm:px-6 transition-colors duration-300 relative overflow-hidden active:scale-[0.995]"
              >
                <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                <div className="sm:hidden space-y-3.5 rounded-xl border border-border/80 bg-background p-4">
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono text-xs text-muted-foreground tabular-nums group-hover:text-primary transition-colors pt-1">
                      {s.n}
                    </span>
                    <h3 className="font-serif text-[1.05rem] leading-snug tracking-tight flex-1">{s.title}</h3>
                  </div>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-muted">
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
                  <p className="text-[0.94rem] text-foreground/72 leading-relaxed">{s.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Anfragen
                    <ArrowUpRight className="h-4 w-4" weight="regular" />
                  </span>
                </div>
                <div className="hidden sm:grid grid-cols-12 gap-4 sm:gap-6 items-center">
                  <div className="col-span-1 font-mono text-xs sm:text-sm text-muted-foreground tabular-nums group-hover:text-primary transition-colors">
                    {s.n}
                  </div>
                  <div className="col-span-2">
                    <div className="relative aspect-square overflow-hidden rounded-md bg-muted">
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
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" weight="regular" />
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
    { n: "01", t: "Zuverlässig", d: "Pünktlich, gründlich und termingetreu. Ihre Gebäudereinigung in Wuppertal ohne Ausreden und ohne Nacharbeiten." },
    { n: "02", t: "Faire Preise", d: "Transparente Preise ohne versteckte Kosten. Individuelle Angebote für jeden Reinigungsauftrag in Wuppertal und Umgebung." },
    { n: "03", t: "Persönlich", d: "Direkter Kontakt zum Inhaber, kein Callcenter, kein Outsourcing. Schnelle Reaktionszeiten und persönliche Beratung." },
    { n: "04", t: "Flexibel", d: "Erreichbar auch mittwochs bis 19:30 Uhr. Reinigungstermine nach Ihren Wünschen im gesamten Stadtgebiet Wuppertal." },
  ];
  return (
    <section id="ueber" className="dark-panel py-16 sm:py-28 px-4 sm:px-10 text-white border-t border-white/10">
      <div className="aurora-blob -top-40 -left-32 h-[440px] w-[440px] bg-[oklch(0.5_0.1_252/0.35)] animate-aurora" aria-hidden="true" />
      <div className="aurora-blob -bottom-48 right-[8%] h-[460px] w-[460px] bg-[oklch(0.45_0.1_220/0.3)] animate-aurora" style={{ animationDelay: "-11s" }} aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px]">
        <SectionHeading
          title="Verlässliche Gebäudereinigung ohne leere Versprechen"
          onDark
        />
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start space-y-8">
            <Reveal>
              <div className="group overflow-hidden rounded-lg aspect-[4/3] ring-1 ring-white/15 shadow-[0_30px_60px_-25px_rgb(0_0_0/0.6)]">
                <img
                  src={unsplash("photo-1584820927498-cfe5211fd8bf", 800)}
                  alt="Gepflegtes Zuhause nach der Reinigung"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                  className="img-hover h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <figure className="border-l-2 border-[oklch(0.6_0.1_252)] pl-6 sm:pl-8">
                <blockquote className="text-xl sm:text-2xl leading-snug text-white/95">
                  „Gebäudereinigung, bei der man sich keine Gedanken machen muss."
                </blockquote>
                <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wider text-white/50">
                  Unser Anspruch bei jedem Auftrag
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-4">
              {points.map((p, idx) => (
                <Reveal key={p.n} delay={idx * 120}>
                  <Spotlight className="card-dark group flex gap-6 sm:gap-8 p-6 sm:p-7">
                    <span className="font-mono text-xs tabular-nums text-white/40 pt-2 shrink-0 transition-colors duration-300 group-hover:text-white/70">
                      {p.n}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl sm:text-2xl mb-2.5 flex items-center gap-3">
                        {p.t}
                        <span className="icon-tile !h-8 !w-8 !rounded-full">
                          <Check className="h-4 w-4" weight="bold" />
                        </span>
                      </h3>
                      <p className="text-base text-white/70 leading-relaxed max-w-md">{p.d}</p>
                    </div>
                  </Spotlight>
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
    { n: "01", t: "Anfrage stellen", d: "Ein kurzer Anruf oder eine WhatsApp Nachricht reicht. Wir melden uns innerhalb von 24 Stunden, oft sogar schneller." },
    { n: "02", t: "Kostenloses Angebot", d: "Kostenloser Vor Ort Termin in Wuppertal oder ein individuelles Angebot nach Ihren Angaben. Völlig unverbindlich." },
    { n: "03", t: "Reinigung starten", d: "Wir kommen pünktlich zum vereinbarten Termin mit eigenem Equipment. Für Sie entsteht kein zusätzlicher Aufwand." },
  ];
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-10 bg-[#EFEBE4]/40">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          title="In drei Schritten zur sauberen Immobilie in Wuppertal"
        />

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((s, idx) => (
            <Reveal key={s.n} delay={idx * 100} className="h-full">
              <div className="group relative h-full border border-border bg-background rounded-md p-6 sm:p-8 flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_24px_48px_-20px_oklch(0.31_0.055_252/0.22)]">
                <span className="absolute -bottom-2 -right-1 font-serif font-bold text-[8rem] leading-none text-foreground/[0.04] select-none pointer-events-none transition-all duration-700 group-hover:text-foreground/[0.07] group-hover:-translate-y-1">
                  {s.n}
                </span>
                <div className="text-sm font-semibold text-primary mb-4 transition-transform duration-500 group-hover:translate-x-1">Schritt {s.n}</div>
                <h3 className="font-serif text-xl sm:text-2xl mb-3 tracking-tight">{s.t}</h3>
                <p className="text-base text-foreground/65 leading-relaxed flex-1">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 pt-10 border-t border-border">
          <p className="text-sm text-muted-foreground max-w-md text-center sm:text-left">
            Bereit anzufangen? Eine kurze Nachricht reicht, wir kümmern uns um den Rest.
          </p>
          <a href={PHONE_HREF} className="btn-primary w-full sm:w-auto">
            Jetzt Schritt 1 starten
            <ArrowUpRight className="h-4 w-4" weight="regular" />
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
      role: "Kunde Wuppertal",
      initials: "G",
      text: "Zuverlässig und professionell. Gerne wieder!",
    },
    {
      name: "Google Bewertung",
      role: "Kunde Bergisches Land",
      initials: "G",
      text: "Pünktlich, gründlich und freundlich. Klare Weiterempfehlung für Gebäudereinigung in Wuppertal.",
    },
    {
      name: "Google Bewertung",
      role: "Kundin Elberfeld",
      initials: "G",
      text: "Sehr schnelle Rückmeldung und saubere Arbeit. Die Fenster waren wirklich streifenfrei.",
    },
    {
      name: "Google Bewertung",
      role: "Kunde Vohwinkel",
      initials: "G",
      text: "Treppenhausreinigung läuft zuverlässig jede Woche. Kommunikation ist unkompliziert und freundlich.",
    },
    {
      name: "Google Bewertung",
      role: "Kundin Barmen",
      initials: "G",
      text: "Pünktlich vor Ort, gründlich gereinigt und alles ordentlich hinterlassen. Genau so soll es sein.",
    },
    {
      name: "Google Bewertung",
      role: "Kunde Solingen",
      initials: "G",
      text: "Auch bei kurzfristigem Termin flexibel gewesen. Ergebnis top, Preis fair.",
    },
  ];

  return (
    <section id="bewertungen" className="dark-panel text-white py-16 sm:py-28 px-4 sm:px-10 border-t border-white/10">
      <div className="aurora-blob -top-36 right-[10%] h-[420px] w-[420px] bg-[oklch(0.5_0.11_252/0.34)] animate-aurora" style={{ animationDelay: "-6s" }} aria-hidden="true" />
      <div className="aurora-blob -bottom-44 -left-28 h-[400px] w-[400px] bg-[oklch(0.44_0.1_225/0.3)] animate-aurora" style={{ animationDelay: "-15s" }} aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px]">
        <SectionHeading title="Was Kunden in Wuppertal über uns sagen" onDark />
        <Reveal className="flex items-center justify-center gap-4 shrink-0 -mt-6 mb-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-foreground font-serif text-base shadow-[0_0_30px_-6px_rgb(255_255_255/0.45)]">G</div>
            <div>
              <div className="font-serif text-2xl leading-none">5,0 / 5,0</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/50">6 Bewertungen auf Google</div>
            </div>
          </Reveal>

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
              <Spotlight className="card-dark h-full flex flex-col justify-between p-6 sm:p-7">
                <div>
                  <div className="flex items-center gap-1.5 mb-5">
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-[oklch(0.78_0.14_85)] text-[oklch(0.78_0.14_85)] drop-shadow-[0_0_6px_oklch(0.78_0.14_85/0.5)]" />
                    ))}
                  </div>
                  <blockquote className="text-lg sm:text-xl leading-relaxed text-white/95">
                    „{r.text}"
                  </blockquote>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="icon-tile !rounded-full font-serif text-sm">
                    {r.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{r.name}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-0.5">{r.role}</div>
                  </div>
                </div>
              </Spotlight>
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
            <ArrowRight className="h-4 w-4 rotate-180" weight="regular" />
          </button>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            aria-label="Nächste Bewertung"
            className="h-11 w-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-foreground transition-colors"
          >
            <ArrowRight className="h-4 w-4" weight="regular" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── CONTACT */

function Contact() {
  return (
    <section id="kontakt" className="py-16 sm:py-24 px-4 sm:px-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          title="Gebäudereinigung in Wuppertal anfragen"
          lead="Rufen Sie uns an oder schreiben Sie per WhatsApp. Wir melden uns innerhalb von 24 Stunden persönlich zurück und erstellen Ihnen ein kostenloses Angebot."
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-14 sm:mb-16">
          {/* Kontakt-Info-Panel */}
          <Reveal className="lg:col-span-5">
            <div className="h-full rounded-xl border border-border bg-[#EFEBE4]/50 p-7 sm:p-8 flex flex-col justify-between gap-8">
              <div className="space-y-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-1.5">Telefon</p>
                  <a href={PHONE_HREF} className="font-serif text-2xl sm:text-3xl tracking-tight hover:text-primary transition-colors">
                    {PHONE}
                  </a>
                </div>
                <div className="h-px bg-border" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-1.5 flex items-center gap-1.5">
                      <MapPin className="h-3 w-3" weight="light" />Adresse
                    </p>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      Stackenbergstraße 36<br />42329 Wuppertal
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-1.5 flex items-center gap-1.5">
                      <Clock className="h-3 w-3" weight="light" />Erreichbar
                    </p>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      Montag bis Dienstag und Donnerstag bis Freitag: 8 bis 18 Uhr<br />Mittwoch: 11:30 bis 19:30 Uhr
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <a href={PHONE_HREF} className="btn-primary w-full justify-between">
                  <span className="flex items-center gap-2"><Phone className="h-4 w-4" weight="light" />{PHONE} anrufen</span>
                  <ArrowUpRight className="h-4 w-4 opacity-70" weight="regular" />
                </a>
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="btn-outline w-full justify-between">
                  <span className="flex items-center gap-2"><ChatCircle className="h-4 w-4" weight="light" />WhatsApp schreiben</span>
                  <ArrowUpRight className="h-4 w-4 opacity-50" weight="regular" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Google Maps */}
          <Reveal delay={120} className="lg:col-span-7">
            <div className="flex flex-col h-full gap-4">
              <div className="flex items-end justify-between">
                <h3 className="font-serif text-xl tracking-tight">Unser Standort</h3>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Stackenbergstra%C3%9Fe+36,+42329+Wuppertal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  Route planen <ArrowUpRight className="h-4 w-4" weight="regular" />
                </a>
              </div>
              <div className="flex-1 rounded-xl overflow-hidden border border-border min-h-[320px] sm:min-h-[380px]">
                <LazyMap />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

