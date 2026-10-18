import type React from "react";
import { scope } from "@/content";

// Linien-Icons je Deliverable (gleiche Reihenfolge wie in content.ts)
const icons = [
  // Kanalbewertung: Balken
  <path key="a" d="M5 20V10M12 20V4M19 20v-7" />,
  // Maßnahmenplan: Kalender mit Haken
  <g key="b"><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4M16 3v4M4 10h16M9 15l2 2 4-4" /></g>,
  // Gesprächsleitfaden: Sprechblase
  <path key="c" d="M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-8l-4 3v-3H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM8 9h8M8 12h5" />,
  // Nachfassablauf: Kreislauf-Pfeil
  <g key="d"><path d="M20 12a8 8 0 1 1-2.34-5.66" /><path d="M20 4v4h-4" /></g>,
];


export default function Scope() {
  const { deliverables, timeline, effort } = scope;
  return (
    <section id="leistungsumfang" className="border-t border-line py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <hgroup data-reveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-accent">{scope.eyebrow}</p>
          <h2 className="max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">{scope.headline}</h2>
          <p className="mt-3 max-w-2xl text-muted">{scope.sub}</p>
        </hgroup>

        {/* Das erhalten Sie */}
        <h3 className="mt-10 text-xl font-semibold tracking-tight">{deliverables.heading}</h3>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2">
          {deliverables.items.map((d, i) => (
            <li key={d.title} data-reveal className="flex gap-4 rounded-lg border border-line bg-white p-5 sm:p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#EEF3FD] text-accent" aria-hidden>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  {icons[i]}
                </svg>
              </span>
              <div className="min-w-0">
                <h4 className="font-semibold">{d.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{d.text}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* So läuft es ab: mobil vertikal, ab md horizontal */}
        <h3 className="mt-14 text-xl font-semibold tracking-tight">{timeline.heading}</h3>
        <ol data-reveal className="mt-6 grid md:grid-cols-3 md:gap-8">
          {timeline.steps.map((s, i) => {
            const last = i === timeline.steps.length - 1;
            return (
              <li key={s.label} className="relative flex gap-4 pb-8 md:block md:pb-0" style={{ "--i": i } as React.CSSProperties}>
                {/* Verbindungslinie zum nächsten Schritt */}
                {!last && (
                  <span
                    className="absolute left-[7px] top-5 h-[calc(100%-1.25rem)] w-px bg-[#CBD2DC] md:left-5 md:top-[7px] md:h-px md:w-[calc(100%+2rem-1.25rem)]"
                    aria-hidden
                  >
                    {/* Füllt sich beim Einscrollen */}
                    <span className={`tl-fill absolute inset-0 ${timeline.steps[i + 1].optional ? "bg-accent/40" : "bg-accent"}`} />
                  </span>
                )}
                <span
                  className={`tl-dot relative z-10 mt-1 block h-[15px] w-[15px] shrink-0 rounded-full border-2 md:mt-0 ${
                    s.optional ? "border-dashed border-accent bg-white" : "border-accent bg-accent"
                  }`}
                  aria-hidden
                />
                <div className="min-w-0 md:mt-4">
                  <h4 className={`font-semibold ${s.optional ? "text-muted" : ""}`}>{s.label}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.text}</p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Ihr Aufwand */}
        <p data-reveal className="mt-6 rounded-lg border border-line border-l-4 border-l-accent bg-white px-5 py-4 text-[15px] leading-relaxed sm:mt-10">
          <strong className="font-semibold">{effort.label}:</strong> {effort.text}
        </p>
      </div>
    </section>
  );
}
