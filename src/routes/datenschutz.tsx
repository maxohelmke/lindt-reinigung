import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { LegalProse, LegalSection } from "@/components/LegalProse";
import { CookieSettings } from "@/components/CookieSettings";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung | Lindt.Reinigungsfirma" },
      {
        name: "description",
        content: "Datenschutzerklärung der Lindt.Reinigungsfirma — Informationen zur Verarbeitung personenbezogener Daten.",
      },
    ],
    links: [{ rel: "canonical", href: "https://lindt-reinigungsfirma.de/datenschutz" }],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <LegalPageLayout
      title="Datenschutzerklärung"
      lead="Informationen zur Verarbeitung personenbezogener Daten gemäß Art. 13 und 14 DSGVO."
    >
      <LegalProse>
        <LegalSection title="1. Verantwortlicher">
          <p className="font-medium text-foreground">{BUSINESS.name}</p>
          <p>
            {BUSINESS.street}, {BUSINESS.zip} {BUSINESS.city}
          </p>
          <p>
            Telefon:{" "}
            <a href={BUSINESS.phoneHref} className="text-primary hover:underline">
              {BUSINESS.phone}
            </a>
            <br />
            E-Mail:{" "}
            <a href={`mailto:${BUSINESS.email}`} className="text-primary hover:underline">
              {BUSINESS.email}
            </a>
          </p>
        </LegalSection>

        <LegalSection title="2. Hosting">
          <p>
            Diese Website wird bei einem externen Dienstleister gehostet (z.&nbsp;B. Vercel Inc.).
            Dabei werden personenbezogene Daten (z.&nbsp;B. IP-Adresse, Zeitpunkt des Zugriffs,
            Browsertyp) in Server-Logfiles verarbeitet, um die Website bereitzustellen und
            abzusichern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
            einem sicheren und stabilen Betrieb).
          </p>
        </LegalSection>

        <LegalSection title="3. Server-Logfiles">
          <p>
            Beim Aufruf unserer Website erfasst der Hosting-Anbieter automatisch Informationen, die
            Ihr Browser übermittelt. Dies können sein: IP-Adresse, Datum und Uhrzeit der Anfrage,
            aufgerufene URL, Referrer-URL, Browsertyp und -version, Betriebssystem.
          </p>
          <p>Speicherdauer: in der Regel wenige Tage bis maximal mehrere Wochen, je nach Provider.</p>
        </LegalSection>

        <LegalSection title="4. Cookies und lokale Speicherung">
          <p>
            Wir verwenden technisch notwendige Speicherung im Local Storage Ihres Browsers, um Ihre
            Cookie-Einstellungen zu merken. Diese Verarbeitung ist für den Betrieb der Website
            erforderlich (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
          <p>
            Optionale externe Inhalte (insbesondere die eingebettete Google Maps-Karte) werden erst
            nach Ihrer Einwilligung geladen (Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Wahl
            jederzeit ändern:
          </p>
          <CookieSettings />
        </LegalSection>

        <LegalSection title="5. Google Fonts">
          <p>
            Zur einheitlichen Darstellung von Schriftarten nutzen wir Google Fonts. Beim Aufruf der
            Seite kann eine Verbindung zu Servern von Google LLC (USA) hergestellt werden; dabei kann
            Ihre IP-Adresse übermittelt werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
            (ansprechende Darstellung) bzw. ggf. Art. 6 Abs. 1 lit. a DSGVO, sofern eine Einwilligung
            erforderlich ist.
          </p>
          <p>
            Weitere Informationen:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline break-all"
            >
              https://policies.google.com/privacy
            </a>
          </p>
        </LegalSection>

        <LegalSection title="6. Google Maps (optional)">
          <p>
            Sofern Sie externe Inhalte akzeptieren, binden wir eine Karte von Google Maps ein.
            Anbieter: Google Ireland Limited / Google LLC. Dabei können personenbezogene Daten
            (insbesondere IP-Adresse, Standortdaten) an Google übermittelt werden.
          </p>
          <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).</p>
        </LegalSection>

        <LegalSection title="7. Externe Bilder und Videos">
          <p>
            Bilder können von externen Diensten (z.&nbsp;B. Unsplash) geladen werden; im Hero-Bereich
            kann ein Video von Mixkit eingebunden sein. Dabei können technische Daten (IP-Adresse)
            an die jeweiligen Anbieter übermittelt werden. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </LegalSection>

        <LegalSection title="8. Kontaktaufnahme">
          <p>
            Wenn Sie uns per Telefon, WhatsApp oder E-Mail kontaktieren, verarbeiten wir die von Ihnen
            mitgeteilten Daten (z.&nbsp;B. Name, Telefonnummer, Inhalt der Anfrage) zur Bearbeitung
            Ihres Anliegens. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)
            bzw. Art. 6 Abs. 1 lit. f DSGVO.
          </p>
          <p>
            WhatsApp ist ein Dienst der Meta Platforms Ireland Ltd. Bei Nutzung gelten zusätzlich die
            Datenschutzbestimmungen von WhatsApp/Meta.
          </p>
        </LegalSection>

        <LegalSection title="9. Empfänger und Drittlandübermittlung">
          <p>
            Im Rahmen des Websitebetriebs können Daten an eingesetzte technische Dienstleister
            übermittelt werden, insbesondere Hosting- und CDN-Anbieter sowie Anbieter externer Inhalte.
            Soweit Daten in Drittländer übermittelt werden, erfolgt dies auf Grundlage geeigneter
            Garantien, insbesondere Standardvertragsklauseln gemäß Art. 46 DSGVO, sofern erforderlich.
          </p>
        </LegalSection>

        <LegalSection title="10. Speicherdauer">
          <p>
            Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Zweck
            erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Anschließend werden die
            Daten gelöscht oder gesperrt.
          </p>
        </LegalSection>

        <LegalSection title="11. Ihre Rechte">
          <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Auskunft (Art. 15 DSGVO)</li>
            <li>Berichtigung (Art. 16 DSGVO)</li>
            <li>Löschung (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch (Art. 21 DSGVO)</li>
            <li>Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
          </ul>
          <p>
            Beschwerderecht bei einer Aufsichtsbehörde, z.&nbsp;B. beim Landesbeauftragten für
            Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW).
          </p>
        </LegalSection>

        <LegalSection title="12. Widerspruch gegen Werbe E-Mails">
          <p>
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
            Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterial wird
            hiermit widersprochen.
          </p>
        </LegalSection>

        <LegalSection title="13. Aktualität">
          <p>Stand: Juni 2026. Wir passen diese Erklärung an, wenn sich Rechtslage oder Website ändern.</p>
        </LegalSection>

        <p className="text-sm text-muted-foreground pt-4 border-t border-border">
          <Link to="/impressum" className="text-primary hover:underline">
            Impressum
          </Link>
          <span className="mx-2">·</span>
          <Link to="/" className="text-primary hover:underline">
            Zurück zur Startseite
          </Link>
        </p>
      </LegalProse>
    </LegalPageLayout>
  );
}
