import { useCookieConsent } from "@/hooks/use-cookie-consent";

export function CookieSettings() {
  const { consent, externalAllowed, acceptAll, acceptEssential } = useCookieConsent();

  return (
    <div className="mt-4 rounded-md border border-border bg-muted/40 p-4 text-sm">
      <p className="font-medium text-foreground mb-2">Ihre aktuelle Auswahl</p>
      {consent ? (
        <p className="text-foreground/75 mb-3">
          {externalAllowed
            ? "Notwendige Speicherung und externe Inhalte (Google Maps) sind aktiv."
            : "Nur notwendige Speicherung ist aktiv. Google Maps ist deaktiviert."}
        </p>
      ) : (
        <p className="text-foreground/75 mb-3">Sie haben noch keine Auswahl getroffen.</p>
      )}
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={acceptEssential} className="btn-outline text-sm py-2 min-h-0 px-4">
          Nur notwendige
        </button>
        <button type="button" onClick={acceptAll} className="btn-primary text-sm py-2 min-h-0 px-4">
          Externe Inhalte erlauben
        </button>
      </div>
    </div>
  );
}
