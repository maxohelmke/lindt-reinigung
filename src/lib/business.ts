/** Zentrale Unternehmensdaten — für Impressum, Footer, Schema.org. */
export const BUSINESS = {
  name: "Lindt.Reinigungsfirma",
  legalForm: "Inhabergeführtes Einzelunternehmen",
  street: "Stackenbergstraße 36",
  zip: "42329",
  city: "Wuppertal",
  country: "Deutschland",
  phone: "01520 8215042",
  phoneHref: "tel:015208215042",
  email: "info.lindt.reinigungsfirma@web.de",
  whatsappHref: "https://wa.me/4915208215042",
  whatsappHrefWithText:
    "https://wa.me/4915208215042?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Reinigung.",
  /** Bei Bedarf durch vollständigen Namen des Inhabers ersetzen (Pflichtangabe § 5 DDG). */
  ownerLine: "Inhaber/in (Einzelunternehmen), erreichbar über die oben genannten Kontaktdaten",
  vatId: null as string | null,
} as const;

export const ADDRESS_LINE = `${BUSINESS.street}, ${BUSINESS.zip} ${BUSINESS.city}`;

export const NAV_LINKS = [
  ["Leistungen", "/#leistungen"],
  ["Über uns", "/#ueber"],
  ["Bewertungen", "/#bewertungen"],
  ["Kontakt", "/#kontakt"],
] as const;
