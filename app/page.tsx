import Image from "next/image";
import Link from "next/link";
import { brand, primaryCtaNote, hero, spectrum, usps, steps, stepsIntro, pricing } from "@/content";
import ContactForm from "./ContactForm";
import SpectrumSlider from "./SpectrumSlider";
import UseCases from "./UseCases";
import CaseStudy from "./CaseStudy";
import About from "./About";

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
    <>
      {/* Header */}
      <header className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
        <Link href="/" aria-label={`${brand.name} Startseite`}>
          <Image src="/logo.png" alt={brand.name} width={857} height={194} priority className="h-8 w-auto sm:h-10" />
        </Link>
        <a href="#kontakt" className="text-sm font-medium text-accent hover:underline">
          Kontakt
        </a>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-4 pb-20 pt-12 sm:pt-20">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">{hero.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">{hero.sub}</p>
          <div className="mt-8">
            <a
              href="#kontakt"
              className="inline-block rounded-md bg-accent px-6 py-3 font-medium text-white hover:opacity-90"
            >
              {hero.cta}
            </a>
            <p className="mt-2 text-[0.85rem] text-[#787774]">{primaryCtaNote}</p>
          </div>
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
              <SpectrumSlider zones={spectrum.zones} marker={spectrum.marker} hint={spectrum.dragHint} />
            </div>

            <div className="mt-10 max-w-2xl">
              <h3 className="text-xl font-semibold tracking-tight">{spectrum.closing.headline}</h3>
              <p className="mt-2 text-muted">{spectrum.closing.text}</p>
            </div>
          </div>
        </section>

        {/* USPs */}
        <Section title="Warum Unternehmen ihr Vertriebssystem mit uns optimieren.">
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
        <Section title="Ihr Vertriebskonzept als strukturierter 14-Tage-Prozess." subtitle={stepsIntro}>
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

        {/* Praxisbeispiel */}
        <CaseStudy />

        {/* Über uns */}
        <About />

        {/* Anwendungsfälle */}
        <UseCases />

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
            <p className="mt-2 text-center text-[0.85rem] text-[#787774]">{primaryCtaNote}</p>
            <p className="mt-3 text-xs leading-relaxed text-[#787774]">{pricing.disclaimer}</p>
          </div>
        </Section>

        {/* Kontakt */}
        <Section id="kontakt" title="Vertriebskonzept anfragen">
          <ContactForm />
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line">
        <div className="mx-auto max-w-5xl px-4 pt-12">
          <Link href="/" aria-label={`${brand.name} Startseite`} className="inline-block">
            <Image src="/logo.png" alt={brand.name} width={857} height={194} className="h-8 w-auto" />
          </Link>
          <p className="mt-5 text-sm font-bold uppercase tracking-wide text-[#0052FF]">{brand.claim}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{brand.mission}</p>
        </div>
        <div className="mx-auto mt-10 max-w-5xl px-4">
          <div className="flex flex-wrap justify-between gap-4 border-t border-line py-8 text-sm text-muted">
            <span>© {new Date().getFullYear()} {brand.name}</span>
            <nav className="flex gap-6">
              <a href="#" className="hover:underline">Impressum</a>
              <a href="#" className="hover:underline">Datenschutz</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
