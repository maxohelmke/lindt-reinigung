import { useCallback, useEffect, useState } from "react";
import {
  readCookieConsent,
  writeCookieConsent,
  type CookieConsent,
} from "@/lib/cookie-consent";

export function useCookieConsent() {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setConsent(readCookieConsent());
    setReady(true);
    const onChange = (e: Event) => {
      setConsent((e as CustomEvent<CookieConsent>).detail ?? readCookieConsent());
    };
    window.addEventListener("cookie-consent-change", onChange);
    return () => window.removeEventListener("cookie-consent-change", onChange);
  }, []);

  const acceptAll = useCallback(() => setConsent(writeCookieConsent(true)), []);
  const acceptEssential = useCallback(() => setConsent(writeCookieConsent(false)), []);

  return {
    consent,
    ready,
    needsBanner: ready && consent === null,
    externalAllowed: consent?.external === true,
    acceptAll,
    acceptEssential,
  };
}
