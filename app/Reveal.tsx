"use client";

import { useEffect } from "react";

// Blendet Elemente mit [data-reveal] dezent ein, sobald sie ins Bild scrollen.
// Ohne JavaScript oder bei "Bewegung reduzieren" bleibt alles sofort sichtbar.
export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          // Sichtbar oder schon überscrollt (z. B. nach Sprung über einen Anker-Link)
          if (e.isIntersecting || e.boundingClientRect.top < 0) {
            e.target.setAttribute("data-visible", "");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );

    // Bereits sichtbare Elemente nicht erst ausblenden
    const vh = window.innerHeight;
    for (const el of els) {
      if (el.getBoundingClientRect().top < vh * 0.88) el.setAttribute("data-visible", "");
      else io.observe(el);
    }
    document.documentElement.setAttribute("data-reveal-ready", "");

    return () => io.disconnect();
  }, []);

  return null;
}
