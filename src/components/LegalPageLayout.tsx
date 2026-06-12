import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

type LegalPageLayoutProps = {
  title: string;
  lead?: string;
  children: ReactNode;
};

export function LegalPageLayout({ title, lead, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <a
        href="#hauptinhalt"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Zum Hauptinhalt springen
      </a>
      <SiteHeader />
      <main id="hauptinhalt" className="flex-1 pt-24 sm:pt-28 pb-16 px-4 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <nav className="text-sm text-muted-foreground mb-8" aria-label="Brotkrumen">
            <Link to="/" className="hover:text-primary transition-colors">
              Startseite
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{title}</span>
          </nav>
          <header className="mb-10 pb-8 border-b border-border">
            <h1 className="font-serif text-3xl sm:text-4xl tracking-tight text-foreground">{title}</h1>
            {lead ? <p className="mt-3 text-base text-foreground/70 leading-relaxed">{lead}</p> : null}
          </header>
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
