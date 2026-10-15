import Image from "next/image";
import Link from "next/link";
import { brand, hero, spectrum, usps, steps, stepsIntro, experience, pricing } from "@/content";
import ContactForm from "./ContactForm";

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
        <Link href="/" aria-label={`${brand.name} Startseite`}>
          <Image src="/logo.png" alt={brand.name} width={857} height={194} priority className="h-8 w-auto sm:h-10" />
        </Link>
        <a href="#kontakt" className="text-sm font-medium text-accent hover:underline">
          Kontakt
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pb-20 pt-12 sm:pt-20">
        <p className="text-sm font-medium uppercase tracking-wide text-accent">{hero.eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{hero.sub}</p>
        <a
          href="#kontakt"
          className="mt-8 inline-block rounded-md bg-accent px-6 py-3 font-medium text-white hover:opacity-90"
        >
          {hero.cta}
        </a>
      </section>

      {/* Problem: Spektrum der Vertriebskanäle */}
      <section id="spektrum" className="border-t border-line py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">{spectrum.eyebrow}</p>
          <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">{spectrum.headline}</h2>
          <p className="mt-3 max-w-2xl text-muted">{spectrum.sub}</p>

          <div className="mt-10 rounded-lg border border-line bg-white p-6 sm:p-8">
            {/* Pole */}
            <div className="flex justify-between gap-6 text-sm">
              <div>
                <p className="font-semibold">← {spectrum.poles.left.label}</p>
                <p className="text-muted">{spectrum.poles.left.hint}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{spectrum.poles.right.label} →</p>
                <p className="text-muted">{spectrum.poles.right.hint}</p>
              </div>
            </div>

            {/* Skala mit markiertem Fit-Bereich */}
            <div className="mt-6 pb-6">
              <div className="relative">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-[#7c5cdc]/40 via-accent/40 to-[#38bdbe]/40"
                  aria-hidden
                />
                <div
                  className="absolute top-[-6px] left-[38%] h-5 w-[22%] rounded-full border-2 border-accent bg-accent/15"
                  aria-hidden
                />
              </div>
              <p className="mt-3 text-center text-xs font-medium text-accent sm:pl-[38%] sm:text-left">
                ↑ {spectrum.marker}
              </p>
            </div>

            {/* Zonen */}
            <div className="grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
              {spectrum.zones.map((z) => (
                <div key={z.title}>
                  <h3 className="font-semibold">{z.title}</h3>
                  <ul className="mt-2 space-y-1 text-sm text-muted">
                    {z.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 max-w-2xl">
            <p className="text-xl font-semibold tracking-tight">{spectrum.closing.headline}</p>
            <p className="mt-2 text-muted">{spectrum.closing.text}</p>
          </div>
        </div>
      </section>

      {/* USPs */}
      <Section title="Warum wir">
        <div className="grid gap-6 sm:grid-cols-3">
          {usps.map((u) => (
            <div key={u.title} className="rounded-lg border border-line bg-white p-6">
              <h3 className="font-semibold">{u.title}</h3>
              <p className="mt-2 text-sm text-muted">{u.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Vorgehen */}
      <Section title="So arbeiten wir" subtitle={stepsIntro}>
        <ol className="grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="text-sm font-semibold text-accent">0{i + 1}</span>
              <h3 className="mt-1 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Erfahrungen */}
      <Section title="Erfahrungen">
        <p className="max-w-2xl text-muted">{experience.intro}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {experience.cases.map((c) => (
            <div key={c.title} className="rounded-lg border border-line bg-white p-6">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-2 text-xl font-semibold text-accent">{c.result}</p>
              <p className="mt-2 text-sm text-muted">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {experience.team.map((t) => (
            <div key={t.name} className="flex items-center gap-4">
              <div className="h-14 w-14 shrink-0 rounded-full bg-line" aria-hidden />
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Preis */}
      <Section title={pricing.headline}>
        <div className="rounded-lg border border-line bg-white p-6 text-[#37352F] sm:max-w-md sm:p-8">
          <p className="text-sm font-medium uppercase tracking-wide text-[#787774]">{pricing.label}</p>
          <p className="mt-2 text-3xl font-semibold tracking-tight">{pricing.price}</p>
          <p className="mt-2 text-sm leading-relaxed text-[#787774]">{pricing.terms}</p>
          <p className="mt-6 border-t border-line pt-6 leading-relaxed">{pricing.result}</p>
          <a
            href="#kontakt"
            className="mt-6 block w-full rounded-md bg-accent px-6 py-3 text-center font-medium text-white hover:opacity-90"
          >
            {pricing.cta}
          </a>
          <p className="mt-3 text-xs leading-relaxed text-[#787774]">{pricing.disclaimer}</p>
        </div>
      </Section>

      {/* Kontakt */}
      <Section id="kontakt" title="Vertriebskonzept anfragen">
        <ContactForm />
      </Section>

      {/* Footer */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-4 px-4 py-8 text-sm text-muted">
          <span>© {new Date().getFullYear()} {brand.name}</span>
          <nav className="flex gap-6">
            <a href="#" className="hover:underline">Impressum</a>
            <a href="#" className="hover:underline">Datenschutz</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
