import { caseStudy } from "@/content";

function Row({ n, heading, highlight, children }: { n: string; heading: string; highlight?: boolean; children: React.ReactNode }) {
  return (
    <div className="grid gap-3 border-t border-[#333333] py-6 md:grid-cols-[220px_1fr] md:gap-8">
      <div className="flex items-baseline gap-3">
        <span className="text-sm font-semibold text-[#0052FF]" aria-hidden>
          {n}
        </span>
        <h4 className="font-semibold">{heading}</h4>
      </div>
      <div className={highlight ? "border-l-2 border-[#0052FF] pl-4" : ""}>{children}</div>
    </div>
  );
}

export default function CaseStudy() {
  const { situation, measures, result } = caseStudy;
  return (
    <section id="praxisbeispiel" className="bg-[#191919] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <hgroup>
          <p className="text-sm font-medium uppercase tracking-wide text-[#0052FF]">{caseStudy.eyebrow}</p>
          <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">{caseStudy.headline}</h2>
        </hgroup>

        <article className="mt-10 rounded-lg border border-[#333333] border-t-[#0052FF] bg-[#222222] px-6 pt-6 sm:px-8 sm:pt-8">
          <h3 className="max-w-3xl pb-6 text-xl font-semibold tracking-tight sm:text-2xl">{caseStudy.title}</h3>

          <Row n="01" heading={situation.heading}>
            <p className="text-sm leading-relaxed text-white/70">{situation.text}</p>
          </Row>

          <Row n="02" heading={measures.heading}>
            <ul className="space-y-4">
              {measures.items.map((m) => (
                <li key={m.label} className="flex gap-3 text-sm leading-relaxed text-white/70">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0052FF]" aria-hidden />
                  <p>
                    <strong className="font-semibold text-white">{m.label}</strong> {m.text}
                  </p>
                </li>
              ))}
            </ul>
          </Row>

          <Row n="03" heading={result.heading} highlight>
            <p className="text-sm leading-relaxed text-white">{result.text}</p>
          </Row>
        </article>
      </div>
    </section>
  );
}
