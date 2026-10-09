import { brand, hero, usps, steps, experience, pricing } from "@/content";
import ContactForm from "./ContactForm";

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-line py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
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
        <span className="font-semibold">{brand.name}</span>
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
      <Section title="So arbeiten wir">
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
        <div className="rounded-lg border border-line bg-white p-6 sm:max-w-md">
          <p className="text-2xl font-semibold">{pricing.price}</p>
          <p className="mt-2 text-sm text-muted">{pricing.text}</p>
        </div>
      </Section>

      {/* Kontakt */}
      <Section id="kontakt" title="Bestandsaufnahme anfragen">
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
