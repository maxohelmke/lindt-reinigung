import { MapPin } from "@phosphor-icons/react";
import { useInView } from "@/hooks/use-in-view";
import { useCookieConsent } from "@/hooks/use-cookie-consent";
import { Link } from "@tanstack/react-router";

const MAP_SRC =
  "https://www.google.com/maps?q=Stackenbergstra%C3%9Fe+36,+42329+Wuppertal&hl=de&z=14&output=embed";
const MAP_DIR =
  "https://www.google.com/maps/dir/?api=1&destination=Stackenbergstra%C3%9Fe+36,+42329+Wuppertal";

export function LazyMap() {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: "320px 0px" });
  const { externalAllowed, ready, acceptAll } = useCookieConsent();
  const showMap = ready && externalAllowed && inView;

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-md border border-border aspect-[16/9] sm:aspect-[21/9] bg-muted"
    >
      {showMap ? (
        <iframe
          title="Standort Lindt.Reinigungsfirma — Stackenbergstraße 36, 42329 Wuppertal"
          src={MAP_SRC}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full grayscale-[0.3] contrast-[1.05]"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center text-muted-foreground">
          <MapPin className="h-8 w-8 text-primary" weight="regular" aria-hidden="true" />
          {ready && !externalAllowed ? (
            <>
              <p className="text-sm max-w-sm">
                Die Karte wird erst nach Ihrer Einwilligung zu externen Inhalten geladen (Google Maps).
              </p>
              <button type="button" onClick={acceptAll} className="btn-primary text-sm py-2 min-h-0 mt-1">
                Karte anzeigen
              </button>
              <Link to="/datenschutz" className="text-xs text-primary hover:underline">
                Mehr in der Datenschutzerklärung
              </Link>
            </>
          ) : (
            <p className="text-sm">Karte wird geladen …</p>
          )}
        </div>
      )}
      <a
        href={MAP_DIR}
        target="_blank"
        rel="noopener noreferrer"
        className="sr-only focus:not-sr-only focus:absolute focus:bottom-4 focus:left-4 focus:z-10 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        Route in Google Maps öffnen
      </a>
    </div>
  );
}
