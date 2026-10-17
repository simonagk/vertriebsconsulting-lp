import { scope } from "@/content";

export default function Scope() {
  const { deliverables, timeline, effort } = scope;
  return (
    <section id="leistungsumfang" className="border-t border-line py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <hgroup>
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-accent">{scope.eyebrow}</p>
          <h2 className="max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">{scope.headline}</h2>
        </hgroup>

        {/* Das erhalten Sie */}
        <h3 className="mt-10 text-xl font-semibold tracking-tight">{deliverables.heading}</h3>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2">
          {deliverables.items.map((d, i) => (
            <li key={d.title} className="flex gap-4 rounded-lg border border-line bg-white p-5 sm:p-6">
              <span className="text-sm font-semibold tabular-nums text-accent" aria-hidden>
                {String(i + 1).padStart(2, "0")}
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
        <ol className="mt-6 grid md:grid-cols-3 md:gap-8">
          {timeline.steps.map((s, i) => {
            const last = i === timeline.steps.length - 1;
            return (
              <li key={s.label} className="relative flex gap-4 pb-8 md:block md:pb-0">
                {/* Verbindungslinie zum nächsten Schritt */}
                {!last && (
                  <span
                    className="absolute left-[7px] top-5 h-[calc(100%-1.25rem)] w-px bg-[#CBD2DC] md:left-5 md:top-[7px] md:h-px md:w-[calc(100%+2rem-1.25rem)]"
                    aria-hidden
                  />
                )}
                <span
                  className={`relative z-10 mt-1 block h-[15px] w-[15px] shrink-0 rounded-full border-2 md:mt-0 ${
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
        <p className="mt-6 rounded-lg border border-line border-l-4 border-l-accent bg-white px-5 py-4 text-[15px] leading-relaxed sm:mt-10">
          <strong className="font-semibold">{effort.label}:</strong> {effort.text}
        </p>
      </div>
    </section>
  );
}
