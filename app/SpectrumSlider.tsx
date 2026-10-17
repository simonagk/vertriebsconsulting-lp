"use client";

import { useState } from "react";

type Zone = { title: string; items: readonly string[]; sentence: string };

const START = 50; // Startposition in der Mitte (0 bis 100)
const KEY_STEP = 5; // Schrittweite für Pfeiltasten

export default function SpectrumSlider({ zones, marker }: { zones: readonly Zone[]; marker: string }) {
  const [value, setValue] = useState(START);

  // Welche Zone liegt unter dem Griff?
  const active = Math.min(zones.length - 1, Math.floor((value / 100) * zones.length));
  const zone = zones[active];

  const clamp = (v: number) => Math.min(100, Math.max(0, v));

  return (
    <div className="select-none">
      <div className="mt-6">
        {/* Spur mit Zonenfarben; das native Range-Element liegt darüber und übernimmt Maus, Touch und Tastatur */}
        <div className="relative h-11">
          <div className="absolute inset-x-0 top-1/2 flex h-2 -translate-y-1/2 overflow-hidden rounded-full" aria-hidden>
            {zones.map((z, i) => (
              <span
                key={z.title}
                className={`flex-1 transition-colors duration-200 ${i === active ? "bg-accent" : "bg-accent/20"} ${
                  i > 0 ? "border-l-2 border-white" : ""
                }`}
              />
            ))}
          </div>
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            onKeyDown={(e) => {
              const delta =
                e.key === "ArrowRight" || e.key === "ArrowUp" ? KEY_STEP : e.key === "ArrowLeft" || e.key === "ArrowDown" ? -KEY_STEP : 0;
              if (delta) {
                e.preventDefault();
                setValue((v) => clamp(v + delta));
              }
            }}
            aria-label="Wo liegt Ihr Vertrieb heute?"
            aria-valuetext={`${zone.title}: ${zone.sentence}`}
            aria-describedby="spektrum-satz"
            className="spectrum-range absolute inset-0 h-11 w-full cursor-pointer touch-none appearance-none bg-transparent"
          />
        </div>

        {/* Satz zur aktuellen Zone, ändert sich live mit der Position */}
        <p id="spektrum-satz" className="mt-3 min-h-[3rem] text-center text-[15px] leading-relaxed text-ink sm:min-h-0" aria-live="polite">
          <strong className="font-semibold text-accent">{zone.title}:</strong> {zone.sentence}
        </p>
      </div>

      <div className="mt-6 grid gap-4 border-t border-line pt-6 sm:grid-cols-3 sm:gap-6">
        {zones.map((z, i) => (
          <div
            key={z.title}
            className={`rounded-md border p-4 transition-all duration-200 ${
              i === active ? "border-accent/40 bg-accent/[0.06]" : "border-transparent opacity-60"
            }`}
          >
            <h4 className={`font-semibold ${i === active ? "text-accent" : ""}`}>{z.title}</h4>
            <ul className="mt-2 space-y-1 text-sm text-muted">
              {z.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-sm font-medium text-ink">{marker}</p>
    </div>
  );
}
