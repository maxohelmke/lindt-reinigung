import { Link } from "@tanstack/react-router";
import { useCookieConsent } from "@/hooks/use-cookie-consent";

export function CookieBanner() {
  const { needsBanner, acceptAll, acceptEssential } = useCookieConsent();

  if (!needsBanner) return null;

  return (
    <div
      className="fixed inset-x-0 z-[70] p-3 sm:p-4 bottom-[5.25rem] md:bottom-4 md:left-4 md:right-auto md:max-w-md"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      <div className="rounded-md border border-border bg-background shadow-[var(--shadow-card)] p-4 sm:p-5">
        <p id="cookie-banner-title" className="text-sm font-semibold text-foreground">
          Cookies &amp; Datenschutz
        </p>
        <p id="cookie-banner-desc" className="mt-2 text-sm text-foreground/75 leading-relaxed">
          Wir verwenden technisch notwendige Speicherung für Ihre Auswahl. Externe Inhalte
          (z.&nbsp;B. Google Maps) laden wir nur mit Ihrer Einwilligung. Details in der{" "}
          <Link to="/datenschutz" className="text-primary underline underline-offset-2">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <button type="button" onClick={acceptEssential} className="btn-outline flex-1 text-sm py-2.5 min-h-0">
            Nur notwendige
          </button>
          <button type="button" onClick={acceptAll} className="btn-primary flex-1 text-sm py-2.5 min-h-0">
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
