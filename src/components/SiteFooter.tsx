import { Link } from "@tanstack/react-router";
import { ChatCircle, Phone, MapPin, Clock, ArrowUpRight } from "@phosphor-icons/react";
import { Logo } from "@/components/Logo";
import { BUSINESS, ADDRESS_LINE, NAV_LINKS } from "@/lib/business";

export function MobileCTABar() {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-white/15 bg-[var(--color-brand-bar)] px-2.5 pt-2.5 pb-safe">
      <div className="grid grid-cols-2 gap-2">
        <a href={BUSINESS.phoneHref} className="btn-primary py-3 text-sm min-h-[46px]">
          <Phone className="h-4 w-4 shrink-0" weight="light" />
          Anrufen
        </a>
        <a
          href={BUSINESS.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-white/35 px-4 py-3 text-sm font-semibold text-white min-h-[46px] hover:bg-white/10 transition-colors"
        >
          <ChatCircle className="h-4 w-4 shrink-0" weight="light" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-brand-bar)] text-white px-4 sm:px-10 pt-14 sm:pt-16 pb-10 border-t border-white/10">
      <div className="mx-auto max-w-[1400px]">

        {/* Main grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">

          {/* Brand column */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <Link to="/" className="inline-flex self-start" aria-label="Zur Startseite">
              <Logo className="h-12 sm:h-14 max-w-[min(100%,18rem)]" />
            </Link>
            <p className="text-sm text-white/75 leading-relaxed max-w-xs">
              Zuverlässige Gebäudereinigung in Wuppertal und im Bergischen Land für Privatkunden, Gewerbe und Sonderaufträge.
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-3.5 w-3.5 shrink-0" weight="light" />
                {BUSINESS.phone}
              </a>
              <p className="inline-flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" weight="light" />
                {ADDRESS_LINE}
              </p>
              <p className="inline-flex items-start gap-2">
                <Clock className="h-3.5 w-3.5 shrink-0 mt-0.5" weight="light" />
                Montag bis Dienstag und Donnerstag bis Freitag 8 bis 18 Uhr, Mittwoch 11:30 bis 19:30 Uhr
              </p>
            </div>
          </div>

          {/* Nav column */}
          <div className="lg:col-span-3 lg:col-start-7">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/40 mb-4">Navigation</p>
            <nav className="flex flex-col gap-3" aria-label="Footer-Navigation">
              {NAV_LINKS.map(([label, href]) => (
                <a key={href} href={href} className="text-sm text-white/75 hover:text-white transition-colors">
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* CTA column */}
          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/40 mb-4">Kostenlose Anfrage</p>
            <p className="text-sm text-white/70 leading-relaxed mb-5 max-w-xs">
              Eine kurze Nachricht reicht. Wir antworten persönlich innerhalb von 24 Stunden.
            </p>
            <div className="flex flex-col gap-2.5">
              <a href={BUSINESS.phoneHref} className="btn-primary text-sm py-3 w-full sm:w-auto justify-center sm:justify-start">
                <Phone className="h-4 w-4" weight="light" />
                Jetzt anrufen
              </a>
              <a
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center sm:justify-start gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                <ChatCircle className="h-4 w-4" weight="light" />
                WhatsApp schreiben
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] uppercase tracking-[0.14em] text-white/45">
          <span>© {new Date().getFullYear()} {BUSINESS.name}</span>
          <nav className="flex items-center gap-4" aria-label="Rechtliches">
            <Link to="/impressum" className="hover:text-white/80 transition-colors">Impressum</Link>
            <span aria-hidden="true" className="text-white/20">|</span>
            <Link to="/datenschutz" className="hover:text-white/80 transition-colors">Datenschutz</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
