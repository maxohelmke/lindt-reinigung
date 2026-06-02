import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone,
  MessageCircle,
  Check,
  Home,
  Building2,
  Sparkles,
  Wind,
  Building,
  Wrench,
  Star,
  MapPin,
  Mail,
  ArrowRight,
  Clock,
  ShieldCheck,
} from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-[var(--shadow-nav)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
        <a href="#top" className="font-serif text-xl sm:text-2xl tracking-tight shrink-0">
          Shadi Alo
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#leistungen" className="hover:text-primary transition-colors">Leistungen</a>
          <a href="#ueber" className="hover:text-primary transition-colors">Über uns</a>
          <a href="#bewertungen" className="hover:text-primary transition-colors">Bewertungen</a>
          <a href="#kontakt" className="hover:text-primary transition-colors">Kontakt</a>
        </nav>
        <a
          href={PHONE_HREF}
          aria-label="Jetzt anrufen"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 sm:px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:translate-y-[-1px] min-h-[44px]"
        >
          <Phone className="h-4 w-4 sm:hidden" />
          <span className="hidden sm:inline">Kostenlos anfragen</span>
          <ArrowRight className="h-4 w-4 hidden sm:inline-block" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <p className="overline mb-4 sm:mb-6">Reinigungsdienst · Monschau & Eifel</p>
          <h1 className="font-serif text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.05] mb-6 sm:mb-8">
            Sauberkeit, die für sich spricht.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-8 sm:mb-10 leading-relaxed">
            Privat oder Gewerbe — wir übernehmen die Reinigung zuverlässig, diskret und
            zu fairen Preisen. Seit Jahren vertrauen uns Kunden in Monschau und der
            gesamten Eifelregion.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 sm:px-7 py-4 text-base font-medium text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-primary/90 transition-all hover:translate-y-[-2px] min-h-[52px]"
            >
              Jetzt kostenlos anfragen <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-foreground/20 px-6 sm:px-7 py-4 text-base font-medium hover:bg-foreground/5 transition-all min-h-[52px]"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp schreiben
            </a>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-2 sm:gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Kostenlose Anfrage</span>
            <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Antwort in 24h</span>
            <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Keine Vertragsbindung</span>
          </div>
        </div>

        <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-6 sm:p-8 lg:p-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted font-serif text-xl">G</div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-serif">5,0</span>
                <span className="text-amber-500 text-lg tracking-tight">★★★★★</span>
              </div>
              <p className="text-sm text-muted-foreground">Basierend auf 3 Google-Bewertungen</p>
            </div>
          </div>
          <div className="h-px bg-border my-6" />
          <blockquote className="font-serif text-xl leading-snug">
            „Zuverlässig, preiswert und seriös! Nur zu empfehlen."
          </blockquote>
          <p className="text-sm text-muted-foreground mt-3">— P. Sieberg, Local Guide</p>
          <div className="h-px bg-border my-6" />
          <div className="space-y-3">
            {[
              { icon: Home, label: "Privatreinigung" },
              { icon: Building2, label: "Gewerbereinigung" },
              { icon: Sparkles, label: "Grundreinigung" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { k: "5,0 ★", l: "Google-Bewertung" },
    { k: "100 %", l: "Zufriedenheitsgarantie" },
    { k: "24h", l: "Reaktionszeit" },
    { k: "0 €", l: "Anfrage-Kosten" },
  ];
  return (
    <section className="bg-[var(--color-dark)] text-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
        {items.map((i) => (
          <div key={i.l} className="text-center md:text-left">
            <div className="font-serif text-3xl sm:text-4xl md:text-5xl mb-1 sm:mb-2">{i.k}</div>
            <div className="text-xs sm:text-sm text-white/60">{i.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Home, title: "Privatreinigung", desc: "Regelmäßige Reinigung Ihres Zuhauses — wöchentlich, zweiwöchentlich oder nach Bedarf.", big: true },
    { icon: Building2, title: "Büro & Gewerbe", desc: "Professionelle Reinigung für Büros, Praxen, Kanzleien und Geschäftsräume.", big: true },
    { icon: Wind, title: "Fensterreinigung", desc: "Innen und außen — streifenfrei und gründlich." },
    { icon: Sparkles, title: "Grundreinigung", desc: "Tiefenreinigung für Umzüge, Übergaben oder besondere Anlässe." },
    { icon: Building, title: "Treppenhaus & Gemeinschaft", desc: "Regelmäßige Pflege von Treppenhäusern und Gemeinschaftsbereichen." },
    { icon: Wrench, title: "Sonderreinigung", desc: "Bauendreinigung, Veranstaltungsreinigung und individuelle Sonderprojekte." },
  ];
  return (
    <section id="leistungen" className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <p className="overline mb-4">Leistungen</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-4 max-w-3xl">
          Alles aus einer Hand — für jeden Bedarf.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-14">
          Ob einmalige Grundreinigung oder regelmäßige Unterhaltsreinigung — wir
          erstellen Ihnen ein individuelles Angebot.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className={`group bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all hover:translate-y-[-2px] ${
                s.big ? "lg:col-span-1 md:row-span-1" : ""
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted mb-6 group-hover:bg-primary/10 transition-colors">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{s.desc}</p>
              <a href="#kontakt" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all">
                Anfragen <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    { t: "Zuverlässig", d: "Pünktlich, gründlich und immer termingetreu — ohne Ausreden und ohne Nacharbeiten." },
    { t: "Preiswert", d: "Faire, transparente Preise. Kein versteckter Aufwand, kein unerwarteter Aufpreis." },
    { t: "Persönlich", d: "Direkt mit Shadi Alo — kein Callcenter, kein Weitervermitteln, kein Chaos." },
    { t: "Diskret", d: "Vertrauensvoller Umgang mit Ihrer Wohnung oder Ihren Geschäftsräumen — selbstverständlich." },
  ];
  return (
    <section id="ueber" className="py-28 px-6 bg-card/50">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16">
        <div>
          <p className="overline mb-4">Warum wir</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-12">Vertrauen, das man spürt.</h2>
          <blockquote className="font-serif italic text-2xl md:text-3xl text-primary leading-snug border-l-2 border-primary pl-6">
            „Ein Reinigungsdienst, bei dem man sich keine Gedanken machen muss."
          </blockquote>
          <p className="text-sm text-muted-foreground mt-4 pl-6">
            Das ist unser Anspruch bei jedem Auftrag.
          </p>
        </div>
        <div className="space-y-8">
          {points.map((p) => (
            <div key={p.t} className="flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">{p.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Anfrage stellen", d: "Rufen Sie an oder schreiben Sie per WhatsApp — kurze Beschreibung des Auftrags reicht." },
    { n: "02", t: "Angebot erhalten", d: "Wir melden uns innerhalb von 24 Stunden mit einem fairen, unverbindlichen Angebot." },
    { n: "03", t: "Fertig ✓", d: "Wir reinigen zu Ihrem Wunschtermin — Sie müssen nichts weiter tun." },
  ];
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <p className="overline mb-4">Der Ablauf</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-16 max-w-3xl">
          In 3 Schritten zu Ihrer sauberen Immobilie.
        </h2>
        <div className="grid md:grid-cols-3 gap-10 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[5rem] right-[-2rem] border-t-2 border-dashed border-border" />
              )}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif text-2xl mb-6 relative z-10">
                {s.n}
              </div>
              <h3 className="font-serif text-2xl mb-3">{s.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-primary/90 transition-all hover:translate-y-[-2px]"
          >
            Jetzt Schritt 1 starten <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="bewertungen" className="py-28 px-6 bg-[var(--color-dark)] text-white">
      <div className="mx-auto max-w-7xl">
        <p className="overline mb-4 text-white/60">Kundenstimmen</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-14 text-white">Was unsere Kunden sagen.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <article className="bg-white text-foreground rounded-2xl p-8 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-amber-500">★★★★★</span>
              <span className="text-sm font-medium">5,0</span>
            </div>
            <blockquote className="font-serif text-xl leading-snug mb-6">
              „Zuverlässig, preiswert und seriös! Nur zu empfehlen."
            </blockquote>
            <p className="text-sm text-muted-foreground">— P. Sieberg, Local Guide · Google-Rezension</p>
          </article>
          {[1, 2].map((i) => (
            <article key={i} className="border border-white/15 rounded-2xl p-8 text-white/50">
              <div className="text-sm mb-4 uppercase tracking-widest">Kommt bald…</div>
              <p className="font-serif text-xl mb-6 text-white/70">Ihre Meinung zählt.</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:gap-2.5 transition-all"
              >
                Jetzt Bewertung schreiben <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
        <div className="mt-12 flex items-center justify-center gap-4 text-white/80">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-foreground font-serif">G</div>
          <span className="font-serif text-2xl">5,0</span>
          <span className="text-amber-400">★★★★★</span>
          <span className="text-sm text-white/60">auf Google</span>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="py-28 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="overline mb-4">Kontakt</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-6">Jetzt unverbindlich anfragen.</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Kein Formular, kein Aufwand — einfach anrufen oder WhatsApp schreiben.
          Wir antworten schnell.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-8 py-5 text-base font-medium text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-primary/90 transition-all hover:translate-y-[-2px]"
          >
            <Phone className="h-5 w-5" /> {PHONE} anrufen
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-foreground/20 px-8 py-5 text-base font-medium hover:bg-foreground/5 transition-all"
          >
            <MessageCircle className="h-5 w-5" /> WhatsApp schreiben
          </a>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 text-left bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)]">
          <div className="flex gap-3">
            <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Adresse</div>
              <div className="text-sm">Messeweg 113<br />52156 Monschau</div>
            </div>
          </div>
          <div className="flex gap-3">
            <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Reaktion</div>
              <div className="text-sm">Antwort innerhalb<br />von 24 Stunden</div>
            </div>
          </div>
          <div className="flex gap-3">
            <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Garantie</div>
              <div className="text-sm">100 % Zufriedenheit<br />ohne Vertragsbindung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between gap-6 text-sm text-muted-foreground">
        <div>
          <div className="font-serif text-xl text-foreground mb-1">Shadi Alo Reinigungsdienst</div>
          <div>Messeweg 113, 52156 Monschau · Monschau, Eifel, Aachen, Düren</div>
        </div>
        <div className="flex flex-col md:items-end gap-1">
          <a href={PHONE_HREF} className="hover:text-primary transition-colors inline-flex items-center gap-2">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-2">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl text-xs text-muted-foreground/70 mt-8">
        © {new Date().getFullYear()} Shadi Alo Reinigungsdienst. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
