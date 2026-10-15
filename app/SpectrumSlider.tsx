"use client";

import { useCallback, useRef, useState } from "react";

type Zone = { title: string; items: string[] };

const WIDTH = 22; // Breite des Fit-Rahmens in %
const START = 39; // Startposition (linke Kante) in %

export default function SpectrumSlider({
  zones,
  marker,
  hint,
}: {
  zones: Zone[];
  marker: string;
  hint: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState(START);
  const [dragging, setDragging] = useState(false);
  const [touched, setTouched] = useState(false);

  const clamp = (v: number) => Math.min(100 - WIDTH, Math.max(0, v));

  const moveTo = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const pct = ((clientX - r.left) / r.width) * 100;
    setLeft(clamp(pct - WIDTH / 2));
  }, []);

  // Welche Zone liegt unter der Mitte des Rahmens?
  const center = left + WIDTH / 2;
  const active = Math.min(zones.length - 1, Math.floor((center / 100) * zones.length));

  return (
    <>
      <div className="mt-6 pb-6">
        <div
          ref={trackRef}
          className="relative cursor-pointer touch-none select-none py-3"
          onPointerDown={(e) => {
            (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
            setDragging(true);
            setTouched(true);
            moveTo(e.clientX);
          }}
          onPointerMove={(e) => dragging && moveTo(e.clientX)}
          onPointerUp={() => setDragging(false)}
          onPointerCancel={() => setDragging(false)}
        >
          <div
            className="h-2 rounded-full bg-gradient-to-r from-[#7c5cdc]/40 via-accent/40 to-[#38bdbe]/40"
            aria-hidden
          />
          <div
            role="slider"
            tabIndex={0}
            aria-label="Position Ihres Vertriebs-Fits auf dem Spektrum"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(center)}
            aria-valuetext={zones[active]?.title}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                e.preventDefault();
                setTouched(true);
                setLeft((l) => clamp(l + (e.key === "ArrowRight" ? 5 : -5)));
              }
            }}
            style={{ left: `${left}%`, width: `${WIDTH}%` }}
            className={`absolute top-[6px] h-5 rounded-full border-2 border-accent bg-accent/15 outline-none transition-shadow focus-visible:ring-4 focus-visible:ring-accent/30 ${
              dragging ? "cursor-grabbing shadow-lg" : "cursor-grab hover:shadow-md"
            } ${touched ? "" : "animate-[nudge_2.4s_ease-in-out_1s_2]"}`}
          >
            <span className="flex h-full items-center justify-center gap-0.5" aria-hidden>
              <span className="h-2 w-px bg-accent/60" />
              <span className="h-2 w-px bg-accent/60" />
              <span className="h-2 w-px bg-accent/60" />
            </span>
          </div>
        </div>
        <p className="mt-1 text-center text-xs font-medium text-accent">
          {touched ? marker : hint}
        </p>
      </div>

      <div className="grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
        {zones.map((z, i) => (
          <div
            key={z.title}
            className={`-m-3 rounded-md p-3 transition-colors duration-300 ${
              i === active ? "bg-accent/[0.06]" : "opacity-60"
            }`}
          >
            <h3 className={`font-semibold ${i === active ? "text-accent" : ""}`}>{z.title}</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted">
              {z.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
