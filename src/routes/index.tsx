import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Process />
      <Reviews />
      <Contact />
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

function Hero() {
  return (
    <section id="top" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        {/* Top meta row */}
        <div className="flex items-center justify-between mb-12 sm:mb-20 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>Est. Monschau · Eifel</span>
          <span className="hidden sm:inline">№ 01 — Reinigungsdienst</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Verfügbar
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[clamp(2.75rem,9vw,9rem)] leading-[0.95] tracking-[-0.03em] reveal">
          Sauberkeit,
          <br />
          <span className="italic text-primary">die für sich</span>
          <br />
          spricht.
        </h1>

        {/* Bottom row: lede + CTAs + social proof */}
        <div className="mt-12 sm:mt-20 grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed max-w-md">
              Privat oder Gewerbe — wir übernehmen die Reinigung
              zuverlässig, diskret und zu fairen Preisen. Seit Jahren vertrauen
              uns Kunden in Monschau und der gesamten Eifelregion.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={PHONE_HREF}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-[14px] font-medium text-background hover:bg-primary transition-colors min-h-[52px]"
              >
                Kostenlos anfragen
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 px-7 py-4 text-[14px] font-medium hover:border-foreground/40 transition-colors min-h-[52px]"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            {/* Social proof — no card, just composition */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="font-serif text-2xl">5,0</span>
                <span className="text-xs text-muted-foreground tracking-wide">
                  Google · 3 Bewertungen
                </span>
              </div>
              <blockquote className="font-serif italic text-xl sm:text-2xl leading-snug text-foreground/90">
                „Zuverlässig, preiswert und seriös!
                <br className="hidden sm:block" /> Nur zu empfehlen."
              </blockquote>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                — P. Sieberg, Local Guide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── STATS */

function Stats() {
  const items = [
    { k: "5,0", s: "★★★★★", l: "Google-Bewertung" },
    { k: "100", s: "%", l: "Zufriedenheit" },
    { k: "24", s: "h", l: "Reaktionszeit" },
    { k: "0", s: "€", l: "Anfrage-Kosten" },
  ];
  return (
    <section className="bg-[var(--color-dark)] text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 py-14 sm:py-20">
        <div className="flex items-center gap-3 mb-10 text-[10px] uppercase tracking-[0.25em] text-white/40">
          <span>№ 02</span>
          <span className="h-px flex-1 bg-white/15" />
          <span>Vertrauen in Zahlen</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {items.map((i, idx) => (
            <div
              key={i.l}
              className={`py-4 md:py-0 md:px-8 ${idx > 0 ? "md:border-l border-white/10" : ""}`}
            >
              <div className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-tight flex items-baseline gap-1">
                {i.k}
                <span className="text-2xl sm:text-3xl text-primary">{i.s}</span>
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/50">
                {i.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── SERVICES */

function Services() {
  const services = [
    { n: "01", title: "Privatreinigung", desc: "Regelmäßige Reinigung Ihres Zuhauses — wöchentlich, zweiwöchentlich oder nach Bedarf." },
    { n: "02", title: "Büro & Gewerbe", desc: "Professionelle Reinigung für Büros, Praxen, Kanzleien und Geschäftsräume." },
    { n: "03", title: "Fensterreinigung", desc: "Innen und außen — streifenfrei und gründlich, bis in die letzte Ecke." },
    { n: "04", title: "Grundreinigung", desc: "Tiefenreinigung für Umzüge, Übergaben oder besondere Anlässe." },
    { n: "05", title: "Treppenhaus & Gemeinschaft", desc: "Regelmäßige Pflege von Treppenhäusern und Gemeinschaftsbereichen." },
    { n: "06", title: "Sonderreinigung", desc: "Bauendreinigung, Veranstaltungsreinigung und individuelle Sonderprojekte." },
  ];
  return (
    <section id="leistungen" className="py-24 sm:py-36 px-5 sm:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 sm:mb-24">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span>№ 03</span>
              <span>Leistungen</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.02em]">
              Alles aus
              <br />
              <span className="italic text-primary">einer Hand.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
              Ob einmalige Grundreinigung oder regelmäßige Unterhaltsreinigung — wir
              erstellen Ihnen ein individuelles Angebot, transparent und ohne
              Vertragsbindung.
            </p>
          </div>
        </div>

        {/* Index-style list, hairline rules, hover-row treatment */}
        <div className="border-t border-border">
          {services.map((s) => (
            <a
              key={s.n}
              href="#kontakt"
              className="group block border-b border-border py-7 sm:py-9 hover:bg-foreground/[0.02] -mx-3 sm:-mx-6 px-3 sm:px-6 transition-colors"
            >
              <div className="grid grid-cols-12 gap-4 sm:gap-8 items-baseline">
                <div className="col-span-2 sm:col-span-1 font-mono text-xs sm:text-sm text-muted-foreground tabular-nums pt-1">
                  {s.n}
                </div>
                <h3 className="col-span-10 sm:col-span-4 font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight">
                  {s.title}
                </h3>
                <p className="col-span-12 sm:col-span-5 text-sm sm:text-base text-foreground/65 leading-relaxed">
                  {s.desc}
                </p>
                <div className="col-span-12 sm:col-span-2 sm:text-right">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    Anfragen
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </a>
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
    <section id="ueber" className="py-24 sm:py-36 px-5 sm:px-10 bg-[#EFEBE4]">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span>№ 04</span>
              <span>Warum wir</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.02em] mb-10 sm:mb-14">
              Vertrauen,
              <br />
              das man <span className="italic text-primary">spürt.</span>
            </h2>
            <figure className="border-l-2 border-primary pl-6 sm:pl-8">
              <blockquote className="font-serif italic text-2xl sm:text-3xl leading-snug text-foreground/90">
                „Ein Reinigungsdienst, bei dem man sich keine Gedanken machen muss."
              </blockquote>
              <figcaption className="mt-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Unser Anspruch bei jedem Auftrag
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-10 sm:space-y-12">
              {points.map((p) => (
                <div key={p.n} className="flex gap-6 sm:gap-8 pb-10 sm:pb-12 border-b border-foreground/10 last:border-0 last:pb-0">
                  <span className="font-mono text-xs tabular-nums text-muted-foreground pt-2 shrink-0">
                    {p.n}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl sm:text-3xl mb-3 flex items-center gap-3">
                      {p.t}
                      <Check className="h-5 w-5 text-primary" strokeWidth={2.5} />
                    </h3>
                    <p className="text-base text-foreground/70 leading-relaxed max-w-md">{p.d}</p>
                  </div>
                </div>
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-24">
          <div>
            <div className="flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span>№ 05</span>
              <span>Der Ablauf</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.02em] max-w-3xl">
              In drei Schritten zu Ihrer
              {" "}
              <span className="italic text-primary">sauberen Immobilie.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-8 sm:p-10 md:p-12 min-h-[320px] flex flex-col">
              <div className="font-serif text-7xl sm:text-8xl text-primary/90 leading-none mb-8">
                {s.n}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl mb-4 tracking-tight">{s.t}</h3>
              <p className="text-base text-foreground/65 leading-relaxed flex-1">{s.d}</p>
            </div>
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
  return (
    <section id="bewertungen" className="bg-[var(--color-dark)] text-white py-24 sm:py-36 px-5 sm:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.25em] text-white/40">
          <span>№ 06</span>
          <span>Kundenstimmen</span>
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.02em] mb-16 sm:mb-20 max-w-3xl">
          Was unsere Kunden{" "}
          <span className="italic text-primary">sagen.</span>
        </h2>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Featured review */}
          <article className="lg:col-span-7 border-t border-white/15 pt-10">
            <div className="flex items-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
              <span className="ml-2 text-xs uppercase tracking-[0.2em] text-white/50">Google-Rezension</span>
            </div>
            <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.15] tracking-[-0.01em] mb-10">
              „Zuverlässig, preiswert und seriös!{" "}
              <span className="italic text-white/60">Nur zu empfehlen.</span>"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 font-serif text-lg">
                PS
              </div>
              <div>
                <div className="text-sm font-medium">P. Sieberg</div>
                <div className="text-xs text-white/50 uppercase tracking-[0.15em]">Local Guide</div>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-4 lg:col-start-9 space-y-6">
            {[1, 2].map((i) => (
              <div key={i} className="border-t border-white/15 pt-6 text-white/40">
                <div className="text-[10px] uppercase tracking-[0.25em] mb-3">Kommt bald</div>
                <p className="font-serif text-lg italic text-white/60 mb-4">Ihre Meinung zählt.</p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.2em] text-white hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  Bewertung schreiben <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            ))}
          </aside>
        </div>

        <div className="mt-16 sm:mt-24 pt-10 border-t border-white/15 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-foreground font-serif text-sm">G</div>
            <div>
              <div className="font-serif text-2xl">5,0 / 5,0</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">auf Google bewertet</div>
            </div>
          </div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── CONTACT */

function Contact() {
  return (
    <section id="kontakt" className="py-24 sm:py-36 px-5 sm:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>№ 07</span>
          <span>Kontakt</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.03em] mb-8">
              Jetzt
              <br />
              <span className="italic text-primary">unverbindlich</span>
              <br />
              anfragen.
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-lg mb-10">
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

          <aside className="lg:col-span-4 lg:col-start-9 space-y-8 lg:pt-12">
            {[
              { icon: MapPin, label: "Adresse", lines: ["Messeweg 113", "52156 Monschau"] },
              { icon: Clock, label: "Reaktion", lines: ["Antwort innerhalb", "von 24 Stunden"] },
              { icon: ShieldCheck, label: "Garantie", lines: ["100 % Zufriedenheit", "ohne Vertragsbindung"] },
              { icon: MapPin, label: "Einsatzgebiet", lines: ["Monschau, Eifel,", "Aachen, Düren"] },
            ].map((c) => (
              <div key={c.label} className="flex gap-4 pb-6 border-b border-border last:border-0">
                <c.icon className="h-5 w-5 text-primary shrink-0 mt-1" />
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
            ))}
          </aside>
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
