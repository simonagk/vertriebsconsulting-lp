import { about } from "@/content";

export default function About() {
  return (
    <section id="ueber-uns" className="border-t border-[#E5E7EB] bg-[#FAFAFA] py-16 text-[#191919] sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <hgroup data-reveal>
          <p className="text-sm font-medium uppercase tracking-wide text-accent">{about.eyebrow}</p>
          <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">{about.headline}</h2>
          <p className="mt-3 max-w-2xl text-muted">{about.sub}</p>
        </hgroup>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {about.founders.map((f) => (
            <article key={f.name} data-reveal className="flex flex-col rounded-lg border border-[#E5E7EB] bg-white p-5 sm:p-6">
              {/* Unter 1024 px steht die Rolle unter Foto und Name, damit sie in eine Zeile passt */}
              <div className="grid grid-cols-[2.75rem_minmax(0,1fr)] items-center gap-x-3 lg:grid-cols-[3.5rem_minmax(0,1fr)] lg:gap-x-4">
                {/* Platzhalter für rundes Porträtfoto */}
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E7EB] bg-[#F3F4F6] text-[#9CA3AF] lg:row-span-2 lg:h-14 lg:w-14"
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 lg:h-7 lg:w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="9" r="4" />
                    <path d="M4 21a8 8 0 0 1 16 0" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold leading-snug lg:self-end">{f.name}</h3>
                <p className="col-span-2 mt-2 text-[15px] font-medium text-accent lg:col-span-1 lg:col-start-2 lg:mt-0 lg:self-start">
                  {f.role}
                </p>
              </div>

              <ul className="mb-3 mt-3 space-y-1">
                {f.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-[15px] leading-normal text-[#37352F] lg:leading-relaxed">
                    <span className="mt-[0.5rem] h-1.5 lg:mt-[0.6rem] w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-auto border-t border-[#E5E7EB] pt-3 text-[15px] leading-normal text-[#37352F] lg:leading-relaxed">
                <strong className="font-semibold text-[#191919]">{about.sprintLabel}</strong> {f.sprint}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
