import { about } from "@/content";

export default function About() {
  return (
    <section id="ueber-uns" className="border-t border-[#E5E7EB] bg-[#FAFAFA] py-16 text-[#191919] sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <hgroup>
          <p className="text-sm font-medium uppercase tracking-wide text-accent">{about.eyebrow}</p>
          <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">{about.headline}</h2>
          <p className="mt-3 max-w-2xl text-muted">{about.sub}</p>
        </hgroup>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {about.founders.map((f) => (
            <article key={f.name} className="flex flex-col rounded-lg border border-[#E5E7EB] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-4">
                {/* Platzhalter für Porträtfoto (1:1) */}
                <div
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md border border-[#E5E7EB] bg-[#F3F4F6] text-[#9CA3AF]"
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="9" r="4" />
                    <path d="M4 21a8 8 0 0 1 16 0" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold">{f.name}</h3>
                  <p className="mt-1 inline-block rounded border border-[#E5E7EB] bg-[#FAFAFA] px-2 py-0.5 text-xs font-medium text-[#37352F]">
                    {f.role}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-[#37352F]">{f.text}</p>

              <ul className="mt-5 space-y-2 border-t border-[#E5E7EB] pt-5">
                {f.facts.map((x) => (
                  <li key={x.label} className="flex gap-3 text-sm leading-relaxed text-[#37352F]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <p>
                      <strong className="font-semibold text-[#191919]">{x.label}</strong> {x.text}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
