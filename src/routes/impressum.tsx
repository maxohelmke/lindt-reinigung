import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { LegalProse, LegalSection } from "@/components/LegalProse";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | Lindt.Reinigungsfirma" },
      {
        name: "description",
        content: "Impressum und Anbieterkennzeichnung der Lindt.Reinigungsfirma, Gebäudereinigung Wuppertal.",
      },
    ],
    links: [{ rel: "canonical", href: "https://lindt-reinigungsfirma.de/impressum" }],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <LegalPageLayout
      title="Impressum"
      lead="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Abs. 2 Medienstaatsvertrag (MStV)."
    >
      <LegalProse>
        <LegalSection title="Anbieter">
          <p className="font-medium text-foreground">{BUSINESS.name}</p>
          <p>{BUSINESS.legalForm}</p>
          <p>{BUSINESS.street}</p>
          <p>
            {BUSINESS.zip} {BUSINESS.city}
          </p>
          <p>{BUSINESS.country}</p>
        </LegalSection>

        <LegalSection title="Kontakt">
          <p>
            Telefon:{" "}
            <a href={BUSINESS.phoneHref} className="text-primary hover:underline">
              {BUSINESS.phone}
            </a>
          </p>
          <p>
            E-Mail:{" "}
            <a href={`mailto:${BUSINESS.email}`} className="text-primary hover:underline">
              {BUSINESS.email}
            </a>
          </p>
        </LegalSection>

        <LegalSection title="Vertretungsberechtigt">
          <p>{BUSINESS.ownerLine}</p>
        </LegalSection>

        {BUSINESS.vatId ? (
          <LegalSection title="Umsatzsteuer-ID">
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: {BUSINESS.vatId}</p>
          </LegalSection>
        ) : (
          <LegalSection title="Umsatzsteuer">
            <p>
              Es wird keine Umsatzsteuer-Identifikationsnummer geführt. Sofern Kleinunternehmerregelung
              nach § 19 UStG zur Anwendung kommt, wird keine Umsatzsteuer ausgewiesen.
            </p>
          </LegalSection>
        )}

        <LegalSection title="Verantwortlich für den Inhalt (MStV)">
          <p>
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: {BUSINESS.ownerLine},{" "}
            {BUSINESS.street}, {BUSINESS.zip} {BUSINESS.city}.
          </p>
        </LegalSection>

        <LegalSection title="EU-Streitschlichtung">
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline break-all"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p>
            Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </LegalSection>

        <LegalSection title="Haftung für Inhalte">
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>
        </LegalSection>

        <LegalSection title="Haftung für Links">
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
            oder Betreiber verantwortlich.
          </p>
        </LegalSection>

        <LegalSection title="Urheberrecht">
          <p>
            Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
            außerhalb der Grenzen des Urheberrechts bedürfen der vorherigen schriftlichen Zustimmung
            des jeweiligen Rechteinhabers.
          </p>
        </LegalSection>

        <LegalSection title="Bild und Mediennachweise">
          <p>
            Verwendete Bilder und Videos stammen teilweise von externen Plattformen und deren
            Lizenzmodellen, insbesondere Unsplash und Mixkit. Die jeweiligen Rechte verbleiben bei den
            Urhebern oder den Plattformbetreibern.
          </p>
        </LegalSection>

        <LegalSection title="Stand">
          <p>Stand dieses Impressums: Juni 2026.</p>
        </LegalSection>

        <p className="text-sm text-muted-foreground pt-4 border-t border-border">
          <Link to="/" className="text-primary hover:underline">
            ← Zurück zur Startseite
          </Link>
        </p>
      </LegalProse>
    </LegalPageLayout>
  );
}
