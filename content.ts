// Alle Texte der Seite an einer Stelle. Platzhalter in [eckigen Klammern] ersetzen.

// Text aller primären Buttons
export const primaryCta = "Vertriebskonzept anfragen";
// Hinweis direkt unter jedem primären Button
export const primaryCtaNote = "30 Minuten Kennenlernen via Telefon/Videotelefonie · Pragmatisch · Unverbindlich";

export const brand = {
  name: "steigrate",
  email: "[kontakt@domain.de]",
  claim: "Vertrieb neu geordnet.",
  mission:
    "Die Spezialisten für Vertriebskonzepte. Mit der Präzision moderner Datenanalyse, der Praxiserfahrung aus Startups und Mittelstand und der Umsetzungsgeschwindigkeit moderner KI-Systeme.",
};

export const hero = {
  // Kleine blaue Zeile über der Headline, semantisch die H1 der Seite
  eyebrow: "Vertriebskonzept in 14 Tagen für den Mittelstand",
  headline: "Gute Produkte gibt es viele. Planbaren Umsatz haben wenige.",
  sub: "In 14 Tagen wissen Sie, welche ein bis zwei Vertriebswege für Ihr Unternehmen funktionieren und welche Sie streichen können. Wir liefern Ihr Vertriebskonzept zum Festpreis. Die Umsetzung übernimmt Ihr eigenes Team.",
  cta: primaryCta,
};

// Beispielkarte im Hero, als Ausschnitt aus einem Vertriebskonzept
export const channelCard = {
  title: "Kanalbewertung",
  rows: [
    { channel: "Partner und Tippgeber", status: "expand", reason: "Höchste Abschlussquote, bisher nicht systematisch genutzt." },
    { channel: "Google Ads", status: "reduce", reason: "Budget auf wenige kaufnahe Suchbegriffe begrenzen." },
    { channel: "Messen", status: "drop", reason: "Hohe Kosten, kaum Abschlüsse in den letzten zwei Jahren." },
    { channel: "Nachfassen nach Angebot", status: "new", reason: "Fester Ablauf nach 3, 7 und 14 Tagen." },
  ],
  statusLabels: {
    expand: "Ausbauen",
    reduce: "Reduzieren",
    drop: "Streichen",
    new: "Neu einführen",
  },
  note: "Beispiel aus einem Vertriebskonzept, anonymisiert.",
} as const;

// Problem-Section: Spektrum der Vertriebskanäle (direkt nach dem Hero)
export const spectrum = {
  eyebrow: "Das Problem",
  headline: "Kommt Ihnen das bekannt vor?",
  // Drei typische Situationen in Kundensprache, jeweils mit unserer Antwort
  situations: [
    {
      quote: "Neue Kunden kommen fast nur über mich.",
      answer: "Wir dokumentieren erprobte Argumente und Gesprächsabläufe, damit Ihr Team verkaufen kann.",
    },
    {
      quote: "Wir probieren Messe, Ads und LinkedIn, aber nichts trägt richtig.",
      answer: "Wir bewerten Ihre Kanäle und sagen klar, welche Sie ausbauen und welche Sie streichen.",
    },
    {
      quote: "Angebote gehen raus, dann passiert wochenlang nichts.",
      answer: "Wir schärfen Ihre Angebote und bauen einen festen Nachfassablauf auf.",
    },
  ],
  answerLabel: "Was wir tun:",
  sliderHeading: "Wo liegt Ihr Vertrieb heute?",
  sub: "Jeder Vertriebsweg hat Stärken und Grenzen. Schieben Sie den Regler dorthin, wo Ihre Kunden heute herkommen.",
  poles: {
    left: { label: "Skalierbar, aber austauschbar", hint: "Hohe Reichweite, wenig Vertrauen" },
    right: { label: "Persönlich, aber zeitintensiv", hint: "Hohes Vertrauen, geringe Reichweite" },
  },
  zones: [
    {
      title: "Automatisierte Ansprache",
      items: ["Automatische E-Mail-Systeme", "Kontaktanfragen", "Digitale Werbung"],
      sentence: "Große Reichweite mit wenig Aufwand pro Kontakt, aber wenig Vertrauen und leicht austauschbar.",
    },
    {
      title: "Partnerschaftlicher Vertrieb",
      items: ["Kooperationen & Tippgeber", "Empfehlungsnetzwerke", "Branchenkontakte"],
      sentence: "Vertrauen über Dritte, planbar, wenn Partner systematisch geführt werden.",
    },
    {
      title: "Persönlicher Vertrieb",
      items: ["Messen & Veranstaltungen", "Direktansprache vor Ort", "Persönliches Netzwerk"],
      sentence: "Hohes Vertrauen und gute Abschlüsse, aber zeitintensiv und schwer zu vervielfachen.",
    },
  ],
  marker: "Die meisten Unternehmen brauchen ein bis zwei Wege, nicht alle gleichzeitig.",
};

// Leistungsumfang: ersetzt die frühere Prozess-Sektion.
// \u00a0 = geschütztes Leerzeichen, damit Zahl und Einheit nicht getrennt werden.
export const scope = {
  eyebrow: "Leistungsumfang",
  headline: "Das liegt nach 14\u00a0Tagen auf Ihrem Tisch.",
  sub: "Sie bekommen kein Strategiepapier für die Schublade, sondern eine klare Entscheidung je Vertriebsweg und einen Plan, den Ihr Team umsetzen kann.",
  deliverables: {
    heading: "Das erhalten Sie",
    items: [
      {
        title: "Kanalbewertung",
        text: "Alle aktuellen und möglichen Vertriebswege bewertet, mit klarer Empfehlung je Kanal: ausbauen, reduzieren, streichen oder neu einführen.",
      },
      {
        title: "Maßnahmenplan für 90\u00a0Tage",
        text: "Priorisierte Schritte mit Reihenfolge und Zuständigkeit in Ihrem Team.",
      },
      {
        title: "Gesprächsleitfaden",
        text: "Argumente und Gesprächsablauf, damit nicht nur die Geschäftsführung verkaufen kann.",
      },
      {
        title: "Nachfassablauf",
        text: "Fester Ablauf, wie und wann Angebote nachgefasst werden.",
      },
    ],
  },
  timeline: {
    heading: "So läuft es ab",
    steps: [
      { label: "Woche\u00a01", text: "Bestandsaufnahme Ihrer Vertriebswege, Zahlen und Abschlüsse.", optional: false },
      { label: "Woche\u00a02", text: "Konzept, Maßnahmenplan und Übergabe an Ihr Team.", optional: false },
      { label: "Danach optional", text: "Wöchentlicher Austausch zur Umsetzung. Keine operative Akquise durch uns.", optional: true },
    ],
  },
  effort: {
    label: "Ihr Aufwand",
    text: "Zwei Termine à\u00a090\u00a0Minuten und die Bereitstellung vorhandener Zahlen.",
  },
};

// Praxisbeispiel: dunkle Section im Stil der Anwendungsfälle
export const caseStudy = {
  eyebrow: "Erfolge & Praxis",
  headline: "Ergebnisse aus der Praxis.",
  title: "Von unklaren Vertriebskanälen zum skalierbaren Partnerschaftssystem",
  situation: {
    heading: "Ausgangslage",
    text: "Ein kleines mittelständisches Unternehmen kämpfte mit fehlenden Anfragen von Kunden; trotz hoher Marketingausgaben in Google Werbung. Auch organische Anfragen blieben weit hinter den Erwartungen zurück. Der Umsatz stagnierte auf niedrigem Niveau.",
  },
  measures: {
    heading: "Analyse & Maßnahmen im Sprint",
    items: [
      {
        label: "Definition und Erweiterung der Zielgruppe.",
        text: "Nach tieferer Analyse stellte sich heraus, dass die falsche Zielgruppe adressiert wurde. Drei unerkannte Zielgruppen wurden ausgearbeitet. Diese neuen Zielgruppen waren schneller abschlussfähig.",
      },
      {
        label: "Webseiten-Anpassung:",
        text: "Texte, Titel, und die Beschreibung des Kundennutzen wurden geschärft. Ebenso wurde erarbeitet, wie die Suchbegriffe (SEO & SEA) gewählt werden müssen.",
      },
      {
        label: "Partnervermittlung-Systematik:",
        text: "Erkennung, dass der geeignetste Akquisekanal Partner sind, die unseren Mandanten und dessen Produkte an ihre Kunden empfehlen. Die Akquise dieser Partner wurde durch Aufbau einer klaren Ansprachestrategie inklusive vertraglichem Provisionsmodell mitgedacht.",
      },
    ],
  },
  result: {
    heading: "Ergebnis",
    text: "Unser Vertriebskonzept lieferte klare Zielgruppendefinition, Webseitenanpassungsempfehlungen und Kanaldefinition. Der Mandant hat die Änderungen durchgeführt. Der Mandant war durch die Anpassungen effizient über Suchmaschinen auffindbar und erzielte endlich hohe Anfragenvolumina. Zudem erwies sich das Partner-Netzwerk als bestes Kundenanfragevehikel, welches planbar Neukunden vermittelte. Der Umsatz stieg merklich, obwohl die Marketingausgaben sanken. Grund: Das Partnernetzwerk war rein erfolgsabhängig aufgesetzt und die Google Werbeausgaben sanken dank Optimierung der bespielten Suchbegriffe.",
  },
};

// Über uns: Gründerprofile
export const about = {
  eyebrow: "Über uns",
  headline: "Wer hinter steigrate steht.",
  sub: "Einer von uns hat Vertrieb in wachsenden Unternehmen aufgebaut, der andere kennt die Strukturen großer Organisationen. Gemeinsam haben wir ein Startup aus einem Konzern heraus gegründet und an den Markt gebracht.",
  sprintLabel: "Im Sprint:",
  founders: [
    {
      name: "tbd 1",
      role: "Vertriebsstrategie und Kanäle",
      points: [
        "Ehemals Vice President und COO in Wachstumsunternehmen",
        "Siebenstelliger wiederkehrender Umsatz über Partnervertrieb, Markteintritt in drei Ländern",
        "Neue B2B Einheit aufgebaut: ein Drittel des Jahresumsatzes nach sechs Monaten",
      ],
      sprint: "Bewertet Ihre Vertriebswege und entwickelt die Kanalstrategie.",
    },
    {
      name: "tbd 2",
      role: "Analyse, Prozesse und Geschäftsmodelle",
      points: [
        "Über sieben Jahre Geschäftsmodellentwicklung in einem großen, regulierten Unternehmen",
        "Startup mitgegründet, von der Validierung bis zum Marktstart",
      ],
      sprint: "Führt die Bestandsaufnahme, wertet Ihre Daten aus und übersetzt die Strategie in Abläufe für Ihr Team.",
    },
  ],
};

export const pricing = {
  headline: "Der 14-Tage-Sprint zum transparenten Festpreis.",
  label: "Festpreis",
  price: "ab 2.900 € netto",
  priceNote: "Fester Umfang, fester Preis. Keine offenen Beraterstunden.",
  terms: "Einmalig · Keine laufenden Verbindlichkeiten · 14 Tage Durchführung",
  result: "Ergebnis: Fertiges Vertriebskonzept & priorisierte Maßnahmenliste für Ihr Team.",
  cta: primaryCta,
  disclaimer:
    "Das auf Ihre Bedürfnisse abgestimmte Festpreisangebot erhalten Sie direkt nach der Anfrage und unserem kurzen Kennenlerngespräch.",
};
