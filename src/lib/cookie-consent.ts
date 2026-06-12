export const CONSENT_STORAGE_KEY = "lindt-cookie-consent-v1";

export type CookieConsent = {
  version: 1;
  essential: true;
  /** Google Maps und vergleichbare externe Inhalte */
  external: boolean;
  timestamp: string;
};

export function readCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsent;
    if (parsed?.version !== 1 || parsed.essential !== true) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeCookieConsent(external: boolean): CookieConsent {
  const value: CookieConsent = {
    version: 1,
    essential: true,
    external,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: value }));
  return value;
}

export function hasExternalConsent(): boolean {
  return readCookieConsent()?.external === true;
}
