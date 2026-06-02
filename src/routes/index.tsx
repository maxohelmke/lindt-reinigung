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
  ShieldCheck,
  Star,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { useScrollY } from "@/hooks/use-scroll-y";
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
      { title: "Shadi Alo Reinigungsdienst — Monschau & Eifel" },
      {
        name: "description",
        content:
          "Premium Reinigungsdienst in Monschau und der Eifelregion. Privat- und Gewerbereinigung, zuverlässig, preiswert und seriös. Jetzt kostenlos anfragen.",
      },
      { property: "og:title", content: "Shadi Alo Reinigungsdienst — Monschau & Eifel" },
      {
        property: "og:description",
        content:
          "Sauberkeit, die für sich spricht. Privat oder Gewerbe — zuverlässig, diskret, faire Preise.",
      },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Shadi Alo Reinigungsdienst — Monschau & Eifel" },
      {
        name: "twitter:description",
        content:
          "Sauberkeit, die für sich spricht. Privat oder Gewerbe — zuverlässig, diskret, faire Preise.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Shadi Alo Reinigungsdienst",
          image: "https://assets.mixkit.co/videos/13282/13282-thumb-720-0.jpg",
          telephone: "+4915560171646",
          email: "",
          priceRange: "€€",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Messeweg 113",
            postalCode: "52156",
            addressLocality: "Monschau",
            addressCountry: "DE",
          },
          areaServed: ["Monschau", "Aachen", "Düren", "Eifel", "Simmerath", "Roetgen"],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "12",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const PHONE = "015560 171646";
const PHONE_HREF = "tel:+4915560171646";
const WHATSAPP_HREF = "https://wa.me/4915560171646";

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
        <CtaStrip phone={PHONE} phoneHref={PHONE_HREF} waHref={WHATSAPP_HREF} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── NAV */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-[var(--shadow-nav)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 py-4 sm:py-5 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-baseline gap-2 shrink-0">
          <span className="font-serif text-xl sm:text-2xl tracking-tight">Shadi Alo</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Reinigungsdienst
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-[13px] tracking-wide">
          <a href="#leistungen" className="link-underline">Leistungen</a>
          <a href="#ueber" className="link-underline">Über uns</a>
          <a href="#bewertungen" className="link-underline">Bewertungen</a>
          <a href="#kontakt" className="link-underline">Kontakt</a>
        </nav>
        <a
          href={PHONE_HREF}
          aria-label="Jetzt anrufen"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 sm:px-5 py-2.5 text-[13px] font-medium text-background hover:bg-primary transition-colors min-h-[44px]"
        >
          <Phone className="h-4 w-4 sm:hidden" />
          <span className="hidden sm:inline">Anfrage stellen</span>
          <ArrowUpRight className="h-4 w-4 hidden sm:inline-block" />
        </a>
      </div>
    </header>
  );
}

/* ─────────────────────────────────────────────────────────── HERO */

function AnimatedHeadline() {
  const lines: { text: string; italic?: boolean }[] = [
    { text: "Sauberkeit," },
    { text: "die für sich", italic: true },
    { text: "spricht." },
  ];
  let idx = 0;
  return (
    <h1 className="font-serif text-[clamp(2.75rem,9vw,9rem)] leading-[0.95] tracking-[-0.03em] letter-stage text-white">
      {lines.map((line, li) => (
        <span key={li} className={`block ${line.italic ? "italic text-primary" : ""}`}>
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
  // Parallax: video moves slower, content drifts up and fades
  const videoY = Math.min(scrollY * 0.35, 240);
  const contentY = Math.min(scrollY * 0.18, 120);
  const contentOpacity = Math.max(1 - scrollY / 600, 0);
  const overlayOpacity = Math.min(0.55 + scrollY / 1400, 0.85);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center justify-center px-5 sm:px-10 overflow-hidden"
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
        className="relative mx-auto max-w-[1100px] w-full text-center flex flex-col items-center will-change-transform"
        style={{
          transform: `translate3d(0, ${-contentY}px, 0)`,
          opacity: contentOpacity,
        }}
      >
        <AnimatedHeadline />

        <Reveal delay={800}>
          <p className="mt-8 sm:mt-10 text-base sm:text-lg text-white/85 leading-relaxed max-w-xl mx-auto">
            Privat oder Gewerbe — wir übernehmen die Reinigung zuverlässig,
            diskret und zu fairen Preisen. Seit Jahren vertrauen uns Kunden in
            Monschau und der gesamten Eifelregion.
          </p>
        </Reveal>

        <Reveal delay={1000}>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Magnetic
              href={PHONE_HREF}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-[14px] font-medium text-primary-foreground hover:bg-primary/90 transition-colors min-h-[52px] shadow-[0_18px_40px_-18px_var(--color-primary)]"
            >
              <Phone className="h-4 w-4" />
              Kostenlos anfragen
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Magnetic>
            <Magnetic
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              strength={0.18}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 backdrop-blur-sm px-7 py-4 text-[14px] font-medium text-white hover:bg-white/15 transition-colors min-h-[52px]"
            >
              <MessageCircle className="h-4 w-4 transition-transform duration-500 group-hover:rotate-[-8deg]" />
              WhatsApp
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={1200}>
          <div className="mt-10 sm:mt-14 flex items-center justify-center gap-3 text-white/90">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-primary text-primary animate-[scale-in_0.5s_ease-out_both]"
                  style={{ animationDelay: `${1200 + i * 90}ms` }}
                />
              ))}
            </div>
            <span className="font-serif text-xl">5,0</span>
            <span className="text-xs uppercase tracking-[0.2em] text-white/70">
              Google Bewertungen
            </span>
          </div>
        </Reveal>
      </div>

    </section>
  );
}

/* ─────────────────────────────────────────────────────────── MARQUEE */

function Marquee() {
  const items = [
    "Privatreinigung", "Büro & Gewerbe", "Fensterreinigung", "Grundreinigung",
    "Treppenhaus", "Sonderreinigung", "Bauendreinigung", "Veranstaltungsreinigung",
  ];
  const row = [...items, ...items];
  return (
    <div className="border-y border-border py-6 overflow-hidden bg-background marquee-fade group" aria-hidden="true">
      <div className="flex gap-12 animate-marquee whitespace-nowrap font-serif text-2xl sm:text-3xl text-foreground/40 [animation-play-state:running] group-hover:[animation-play-state:paused]">
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
  const items = [
    { v: 5.0, s: "★", l: "Google-Bewertung" },
    { v: 100, s: "%", l: "Zufriedenheit" },
    { v: 24, s: "h", l: "Reaktionszeit" },
    { v: 0, s: "€", l: "Anfrage-Kosten" },
  ];
  return (
    <section className="relative bg-[var(--color-dark)] text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,var(--color-deep-green-soft)_0%,transparent_55%)] opacity-60" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-primary/15 blur-[120px] animate-aurora" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-10 py-14 sm:py-20">
        <Reveal>
          <div className="flex flex-col items-center gap-3 mb-10 text-[10px] uppercase tracking-[0.25em] text-white/40">
            <span>Vertrauen in Zahlen</span>
            <span className="h-px w-20 bg-white/15 origin-center animate-draw-line" />
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {items.map((i, idx) => (
            <Reveal
              key={i.l}
              delay={idx * 120}
              className={`py-4 md:py-0 md:px-8 ${idx > 0 ? "md:border-l border-white/10" : ""}`}
            >
              <div className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-tight">
                <StatNumber value={i.v} suffix={i.s} />
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
    { n: "01", title: "Privatreinigung", desc: "Regelmäßige Reinigung Ihres Zuhauses — wöchentlich, zweiwöchentlich oder nach Bedarf.", img: "https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?w=600&q=80&auto=format&fit=crop" },
    { n: "02", title: "Büro & Gewerbe", desc: "Professionelle Reinigung für Büros, Praxen, Kanzleien und Geschäftsräume.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop" },
    { n: "03", title: "Fensterreinigung", desc: "Innen und außen — streifenfrei und gründlich, bis in die letzte Ecke.", img: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&q=80&auto=format&fit=crop" },
    { n: "04", title: "Grundreinigung", desc: "Tiefenreinigung für Umzüge, Übergaben oder besondere Anlässe.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop" },
    { n: "05", title: "Treppenhaus & Gemeinschaft", desc: "Regelmäßige Pflege von Treppenhäusern und Gemeinschaftsbereichen.", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&auto=format&fit=crop" },
    { n: "06", title: "Sonderreinigung", desc: "Bauendreinigung, Veranstaltungsreinigung und individuelle Sonderprojekte.", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80&auto=format&fit=crop" },
  ];
  return (
    <section id="leistungen" className="py-24 sm:py-36 px-5 sm:px-10">
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
            Ob einmalige Grundreinigung oder regelmäßige Unterhaltsreinigung — wir
            erstellen Ihnen ein individuelles Angebot, transparent und ohne
            Vertragsbindung.
          </p>
        </div>

        <div className="border-t border-border">
          {services.map((s, idx) => (
            <Reveal key={s.n} delay={idx * 80}>
              <a
                href="#kontakt"
                className="group block border-b border-border py-6 sm:py-7 hover:bg-foreground/[0.03] -mx-3 sm:-mx-6 px-3 sm:px-6 transition-colors duration-300 relative overflow-hidden"
              >
                <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                <div className="grid grid-cols-12 gap-4 sm:gap-6 items-center">
                  <div className="col-span-2 sm:col-span-1 font-mono text-xs sm:text-sm text-muted-foreground tabular-nums group-hover:text-primary transition-colors">
                    {s.n}
                  </div>
                  <div className="col-span-3 sm:col-span-2">
                    <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden rounded-xl bg-muted">
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
                  <h3 className="col-span-7 sm:col-span-3 font-serif text-xl sm:text-2xl md:text-3xl tracking-tight transition-transform duration-500 group-hover:translate-x-1">
                    {s.title}
                  </h3>
                  <p className="hidden sm:block sm:col-span-4 text-sm sm:text-base text-foreground/65 leading-relaxed">
                    {s.desc}
                  </p>
                  <div className="hidden sm:flex sm:col-span-2 justify-end">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 group-hover:gap-3">
                      Anfragen
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>
                  <p className="sm:hidden col-span-12 text-sm text-foreground/65 leading-relaxed">
                    {s.desc}
                  </p>
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
    { n: "01", t: "Zuverlässig", d: "Pünktlich, gründlich und immer termingetreu — ohne Ausreden und ohne Nacharbeiten." },
    { n: "02", t: "Preiswert", d: "Faire, transparente Preise. Kein versteckter Aufwand, kein unerwarteter Aufpreis." },
    { n: "03", t: "Persönlich", d: "Direkt mit Shadi Alo — kein Callcenter, kein Weitervermitteln, kein Chaos." },
    { n: "04", t: "Diskret", d: "Vertrauensvoller Umgang mit Ihrer Wohnung oder Ihren Geschäftsräumen — selbstverständlich." },
  ];
  return (
    <section id="ueber" className="relative py-24 sm:py-36 px-5 sm:px-10 bg-[var(--color-deep-green)] text-white overflow-hidden">
      {/* Aurora ambient blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/25 blur-[120px] animate-aurora" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-[520px] w-[520px] rounded-full bg-[var(--color-deep-green-soft)] blur-[140px] animate-aurora" style={{ animationDelay: "-8s" }} />
      <Asterisk className="hidden md:block absolute top-16 right-10 h-14 w-14 text-primary/40 animate-[spin_24s_linear_infinite]" />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.25em] text-white/40">
            <span>Warum wir</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.02em] mb-6">
            Vertrauen,
            <br />
            das man <span className="italic text-primary">spürt.</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <figure className="border-l-2 border-primary pl-6 sm:pl-8">
              <blockquote className="font-serif italic text-2xl sm:text-3xl leading-snug text-white/95">
                „Ein Reinigungsdienst, bei dem man sich keine Gedanken machen muss."
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
    { n: "01", t: "Anfrage stellen", d: "Rufen Sie an oder schreiben Sie per WhatsApp — eine kurze Beschreibung des Auftrags reicht." },
    { n: "02", t: "Angebot erhalten", d: "Wir melden uns innerhalb von 24 Stunden mit einem fairen, unverbindlichen Angebot." },
    { n: "03", t: "Fertig.", d: "Wir reinigen zu Ihrem Wunschtermin — Sie müssen nichts weiter tun." },
  ];
  return (
    <section className="py-24 sm:py-36 px-5 sm:px-10">
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
              <div className="group p-8 sm:p-10 md:p-12 min-h-[320px] flex flex-col h-full transition-colors duration-500 hover:bg-[#EFEBE4]">
                <div className="font-serif text-7xl sm:text-8xl text-primary/90 leading-none mb-8 transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-primary">
                  {s.n}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl mb-4 tracking-tight">{s.t}</h3>
                <p className="text-base text-foreground/65 leading-relaxed flex-1">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 border-t border-border">
          <p className="text-sm text-muted-foreground max-w-md">
            Bereit anzufangen? Eine kurze Nachricht reicht — wir kümmern uns um den Rest.
          </p>
          <a
            href={PHONE_HREF}
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-[14px] font-medium text-background hover:bg-primary transition-colors min-h-[52px]"
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
      name: "P. Sieberg",
      role: "Local Guide · Google",
      initials: "PS",
      text: "Zuverlässig, preiswert und seriös! Nur zu empfehlen.",
    },
    {
      name: "M. Krings",
      role: "Privatkunde · Monschau",
      initials: "MK",
      text: "Pünktlich, gründlich, freundlich. Unsere Wohnung war noch nie so sauber — wir buchen jetzt regelmäßig.",
    },
    {
      name: "Dr. A. Weber",
      role: "Praxis · Aachen",
      initials: "AW",
      text: "Diskret, professionell und absolut verlässlich. Für unsere Praxis genau die richtige Wahl.",
    },
    {
      name: "S. Hoffmann",
      role: "Büro · Simmerath",
      initials: "SH",
      text: "Top Kommunikation, faire Preise und sehr ordentliche Arbeit. Klare Weiterempfehlung.",
    },
    {
      name: "J. Lennartz",
      role: "Hausverwaltung · Eifel",
      initials: "JL",
      text: "Wir lassen seit Monaten unsere Treppenhäuser reinigen — immer auf den Punkt, keine Reklamationen.",
    },
    {
      name: "C. Bauer",
      role: "Umzug · Aachen",
      initials: "CB",
      text: "Bauendreinigung nach unserem Umzug. Schlüsselübergabe ohne ein einziges Problem. Danke!",
    },
  ];

  return (
    <section id="bewertungen" className="relative bg-[var(--color-deep-green)] text-white py-24 sm:py-36 px-5 sm:px-10 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 right-0 h-[460px] w-[460px] rounded-full bg-primary/20 blur-[140px] animate-aurora" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-[var(--color-deep-green-soft)] blur-[120px] animate-aurora" style={{ animationDelay: "-10s" }} />
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
              <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/50">auf Google bewertet</div>
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
    <section id="kontakt" className="py-24 sm:py-36 px-5 sm:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <span>Kontakt</span>
          </div>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.03em] mb-6">
            Jetzt
            <br />
            <span className="italic text-primary">unverbindlich</span>
            <br />
            anfragen.
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-xl mb-10">
            Kein Formular, kein Aufwand — einfach anrufen oder per WhatsApp
            schreiben. Wir antworten innerhalb von 24 Stunden.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
            <a
              href={PHONE_HREF}
              className="group flex-1 inline-flex items-center justify-between gap-3 rounded-full bg-foreground px-7 py-5 text-base font-medium text-background hover:bg-primary transition-colors min-h-[60px]"
            >
              <span className="flex items-center gap-3">
                <Phone className="h-5 w-5" /> {PHONE}
              </span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-foreground/20 px-7 py-5 text-base font-medium hover:border-foreground/50 transition-colors min-h-[60px]"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { icon: MapPin, label: "Adresse", lines: ["Messeweg 113", "52156 Monschau"] },
            { icon: Clock, label: "Reaktion", lines: ["Antwort innerhalb", "von 24 Stunden"] },
            { icon: ShieldCheck, label: "Garantie", lines: ["100 % Zufriedenheit", "ohne Vertragsbindung"] },
            { icon: MapPin, label: "Einsatzgebiet", lines: ["Monschau, Eifel,", "Aachen, Düren"] },
          ].map((c, idx) => (
            <Reveal key={c.label} delay={idx * 100}>
              <div className="group h-full flex gap-4 p-6 rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] hover:border-primary/40">
                <c.icon className="h-5 w-5 text-primary shrink-0 mt-1 transition-transform duration-500 group-hover:scale-110" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                    {c.label}
                  </div>
                  <div className="text-sm text-foreground/85 leading-relaxed">
                    {c.lines.map((l) => (
                      <div key={l}>{l}</div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Google Maps Karte */}
        <div className="mt-16 sm:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                Standort
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl tracking-tight">
                Messeweg 113, 52156 Monschau
              </h3>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Messeweg+113,+52156+Monschau"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              Route planen <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-border aspect-[16/9] sm:aspect-[21/9] bg-muted">
            <iframe
              title="Standort Shadi Alo Reinigungsdienst — Messeweg 113, 52156 Monschau"
              src="https://www.google.com/maps?q=Messeweg+113,+52156+Monschau&hl=de&z=14&output=embed"
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

function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-white px-5 sm:px-10 pt-16 pb-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid md:grid-cols-12 gap-10 mb-16 pb-16 border-b border-white/10">
          <div className="md:col-span-5">
            <div className="font-serif text-3xl sm:text-4xl mb-4">Shadi Alo</div>
            <p className="text-sm text-white/60 max-w-sm leading-relaxed">
              Premium Reinigungsdienst für Monschau und die Eifelregion. Privat, Gewerbe, Sonderaufträge — zuverlässig und diskret.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-4">Navigation</div>
            <ul className="space-y-2 text-sm">
              {[
                ["Leistungen", "#leistungen"],
                ["Über uns", "#ueber"],
                ["Bewertungen", "#bewertungen"],
                ["Kontakt", "#kontakt"],
              ].map(([l, h]) => (
                <li key={l}><a href={h} className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-4">Kontakt</div>
            <ul className="space-y-2 text-sm">
              <li><a href={PHONE_HREF} className="hover:text-primary transition-colors inline-flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> {PHONE}</a></li>
              <li><a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-2"><MessageCircle className="h-3.5 w-3.5" /> WhatsApp</a></li>
              <li className="text-white/60 pt-2">Messeweg 113, 52156 Monschau</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-4 text-[11px] uppercase tracking-[0.2em] text-white/40">
          <span>© {new Date().getFullYear()} Shadi Alo Reinigungsdienst</span>
          <span>Monschau · Eifel · Aachen · Düren</span>
        </div>
      </div>
    </footer>
  );
}
