// Alle Texte der Seite an einer Stelle. Platzhalter in [eckigen Klammern] ersetzen.

// Text aller primären Buttons
export const primaryCta = "Vertriebskonzept anfragen";
// Hinweis direkt unter jedem primären Button
export const primaryCtaNote = "30 Minuten Kennenlernen via Telefon/Videotelefonie · Pragmatisch · Unverbindlich";

export const brand = {
  name: "steigrate",
  email: "[kontakt@domain.de]",
};

export const hero = {
  eyebrow: "Vertriebsstrategie für den Mittelstand",
  headline: "In 14 Tagen zum passenden Vertriebsansatz: Mehr Anfragen & höhere Abschlussraten.",
  sub: "Wir analysieren Ihr Geschäftsmodell und identifizieren passende Vertriebshebel datenbasiert. In zwei Wochen entsteht Ihr glasklares Vertriebskonzept. Individuell abgestimmt auf Ihr Unternehmen und sofort umsetzbar für Ihr Team.",
  cta: primaryCta,
};

// Problem-Section: Spektrum der Vertriebskanäle (direkt nach dem Hero)
export const spectrum = {
  eyebrow: "Das Problem",
  headline: "Die meisten Vertriebsaktivitäten passen nicht zu Ihrem Geschäft.",
  sub: "Massenhafte E-Mails, automatisierte Nachrichten, Messen oder Empfehlungsprogramme: Die Auswahl an Wegen war nie größer. Die Folge sind oft viele halbherzige Versuche statt eines einzigen Vertriebskanals, der verlässlich Kunden bringt.",
  poles: {
    left: { label: "Skalierbar, aber austauschbar", hint: "Hohe Reichweite, wenig Vertrauen" },
    right: { label: "Persönlich, aber zeitintensiv", hint: "Hohes Vertrauen, geringe Reichweite" },
  },
  zones: [
    {
      title: "Automatisierte Ansprache",
      items: ["Automatische E-Mail-Systeme", "Kontaktanfragen", "Digitale Werbung"],
    },
    {
      title: "Partnerschaftlicher Vertrieb",
      items: ["Kooperationen & Tippgeber", "Empfehlungsnetzwerke", "Branchenkontakte"],
    },
    {
      title: "Persönlicher Vertrieb",
      items: ["Messen & Veranstaltungen", "Direktansprache vor Ort", "Persönliches Netzwerk"],
    },
  ],
  dragHint: "↔ Verschieben Sie den Rahmen: Wo liegt Ihr Vertriebs-Fit?",
  marker: "Die passende Lösung für Ihr Unternehmen liegt exakt auf diesem Spektrum. Selten an allen Enden gleichzeitig.",
  closing: {
    headline: "Fokus auf die richtigen Kanäle.",
    text: "Wir ermitteln für Sie, welche ein bis zwei Vertriebswege für Ihr Angebot wirklich funktionieren. Und von welchen Maßnahmen Sie Abstand nehmen sollten – selbst wenn sie aktuell im Trend liegen.",
  },
};

export const usps = [
  {
    title: "Ganzheitlicher Blick auf Ihr Vertriebssystem",
    text: "[Wir bewerten Verkaufsabläufe, Angebot und Kennzahlen als Gesamtsystem. Wir betrachten den Vertrieb als Ganzes statt nur einen einzelnen Kanal.]",
  },
  {
    title: "Praxiserprobte Strategiekompetenz",
    text: "[Unsere Verkaufskonzepte stammen direkt aus der Praxis. Wir haben Vertriebsstrukturen in wachstumsstarken Unternehmen und etablierten Firmengruppen erfolgreich mitgestaltet.]",
  },
  {
    title: "Festpreis statt offener Beraterstunden",
    text: "[Sie erhalten einen klar abgegrenzten Sprint zum transparenten Festpreis. Wir arbeiten KI-gestützt für maximale Geschwindigkeit und klare Ergebnisse.]",
  },
];

export const stepsIntro =
  "Schritt 01 und 02 erfolgen als fester 14-Tage-Prozess. Nach zwei Wochen liegt Ihr fertig ausgearbeitetes Konzept für den Vertrieb vor.";

export const steps = [
  { title: "Bestandsaufnahme", text: "[Analyse bestehender Vertriebskanäle, Kennzahlen und Verkaufsabschlüsse. Ergebnis: Schwachstellen-Matrix & Daten-Status-Quo.]" },
  { title: "Vertriebskonzept & Systemaufbau", text: "[Priorisierung der besten Vertriebskanäle, Gesprächsleitfäden & Ablaufstruktur. Ergebnis: Fertiges Vertriebskonzept inklusive priorisierter Maßnahmenliste für Ihr internes Team.]" },
  { title: "Begleitende Nachbereitung (optional)", text: "[Wöchentlicher Austausch zu Daten und Verkaufsabläufen zur Begleitung der internen Umsetzung. Keine operative Akquise durch uns.]" },
];

export const experience = {
  intro: "[Kurzer Absatz zu Hintergrund und Erfahrung des Teams.]",
  cases: [
    {
      title: "[Case 1: z. B. B2B-Dienstleister, Berlin]",
      result: "[Ergebnis in einer Zahl, z. B. +X % Anfragen in Y Monaten]",
      text: "[Was war das Problem, was wurde getan?]",
    },
    {
      title: "[Case 2]",
      result: "[Ergebnis]",
      text: "[Beschreibung]",
    },
  ],
  team: [
    { name: "[Name 1]", role: "[Rolle / Hintergrund]" },
    { name: "[Name 2]", role: "[Rolle / Hintergrund]" },
  ],
};

export const pricing = {
  headline: "Der 14-Tage-Sprint",
  label: "Festpreis",
  price: "ab 2.900 € netto",
  terms: "Einmalig · Keine laufenden Verbindlichkeiten · 14 Tage Durchführung",
  result: "Ergebnis: Fertiges Vertriebskonzept & priorisierte Maßnahmenliste für Ihr Team.",
  cta: primaryCta,
  disclaimer:
    "Das auf Ihre Bedürfnisse abgestimmte Festpreisangebot erhalten Sie direkt nach der Anfrage und unserem kurzen Kennenlerngespräch.",
};
