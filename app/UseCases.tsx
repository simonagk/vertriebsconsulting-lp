import { useCases } from "@/content";

type IconName = (typeof useCases.cases)[number]["icon"];

// Schlichte Linien-Icons (24er Raster), Farbe über currentColor
const icons: Record<IconName, React.ReactNode> = {
  offer: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5a6.5 6.5 0 0 1 3.5 5.5" />
    </>
  ),
  channel: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
};

export default function UseCases() {
  return (
    <section id="anwendungsfaelle" className="bg-[#191919] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <hgroup>
          <p className="text-sm font-medium uppercase tracking-wide text-[#1C60E2]">{useCases.eyebrow}</p>
          <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">{useCases.headline}</h2>
          <p className="mt-3 max-w-2xl text-white/70">{useCases.sub}</p>
        </hgroup>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {useCases.cases.map((c) => (
            <article
              key={c.title}
              className="flex flex-col rounded-lg border border-[#333333] border-t-[#1C60E2] bg-[#222222] p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-[#1C60E2]/40 bg-[#1C60E2]/10 text-[#1C60E2]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  {icons[c.icon]}
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>

              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-white/50">{useCases.problemLabel}</p>
              <p className="mt-1 text-sm leading-relaxed text-white/70">{c.problem}</p>

              <div className="mt-5 border-t border-[#333333] pt-5">
                <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1C60E2]" aria-hidden />
                  {useCases.solutionLabel}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-white">{c.solution}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
