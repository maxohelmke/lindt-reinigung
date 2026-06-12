import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone } from "@phosphor-icons/react";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";
import { BUSINESS, NAV_LINKS } from "@/lib/business";

export function SiteHeader() {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-foreground/10 shadow-[0_2px_16px_-4px_rgb(0_0_0/0.12)]">
      <div className="mx-auto max-w-[1400px] px-3 sm:px-10 py-2.5 sm:py-4 flex items-center justify-between gap-2 sm:gap-3">
        <Link to="/" className="flex items-center shrink min-w-0" aria-label="Lindt.Reinigungsfirma — Zur Startseite">
          <Logo className="h-10 sm:h-14 md:h-[4rem]" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/85" aria-label="Hauptnavigation">
          {NAV_LINKS.map(([label, href]) => (
            <a key={href} href={href} className="link-underline hover:text-foreground transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={BUSINESS.phoneHref}
            aria-label="Jetzt anrufen"
            className="btn-primary px-3.5 sm:px-5 py-2.5 min-h-[42px] min-w-[42px] text-sm"
          >
            <Phone className="h-4 w-4 md:hidden" weight="light" />
            <span className="hidden md:inline">Anfrage stellen</span>
            <ArrowUpRight className="h-4 w-4 hidden md:inline-block" weight="regular" />
          </a>
          <MobileNav
            links={NAV_LINKS}
            phone={BUSINESS.phone}
            phoneHref={BUSINESS.phoneHref}
            waHref={BUSINESS.whatsappHref}
          />
        </div>
      </div>
    </header>
  );
}
