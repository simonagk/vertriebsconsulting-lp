import Image from "next/image";
import Link from "next/link";
import { brand, primaryCtaNote, hero, spectrum, pricing } from "@/content";
import ContactForm from "./ContactForm";
import SpectrumSlider from "./SpectrumSlider";
import About from "./About";
import ChannelCard from "./ChannelCard";
import Scope from "./Scope";

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <hgroup>
          {eyebrow && <p className="mb-3 text-sm font-medium uppercase tracking-wide text-accent">{eyebrow}</p>}
          <h2 className="max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
          {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
        </hgroup>
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
        <section className="mx-auto grid max-w-5xl gap-8 px-4 pb-20 pt-12 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center lg:gap-10">
          <div className="min-w-0">
            <h1 className="text-sm font-medium uppercase tracking-wide text-accent">{hero.eyebrow}</h1>
            <p className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
              {hero.headline}
            </p>
            {/* Dunkleres Grau als text-muted: AA auch auf den bläulichen Stellen des Hintergrundverlaufs */}
            <p className="mt-6 max-w-2xl text-lg text-[#3d4350]">{hero.sub}</p>
            <div className="mt-8">
              <a
                href="#kontakt"
                className="inline-block rounded-md bg-accent px-6 py-3 font-medium text-white hover:opacity-90"
              >
                {hero.cta}
              </a>
              <p className="mt-2 text-[0.85rem] text-[#787774]">{primaryCtaNote}</p>
            </div>
          </div>
          <ChannelCard />
        </section>

        {/* Problem: Spektrum der Vertriebskanäle */}
        <section id="spektrum" className="border-t border-line py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4">
            <hgroup>
              <p className="text-sm font-medium uppercase tracking-wide text-accent">{spectrum.eyebrow}</p>
              <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">{spectrum.headline}</h2>
            </hgroup>

            {/* Drei typische Situationen in Kundensprache */}
            <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
              {spectrum.situations.map((s) => (
                <figure key={s.quote} className="flex flex-col rounded-lg border border-line bg-white p-6">
                  <blockquote className="text-lg font-semibold leading-snug tracking-tight">
                    <p>„{s.quote}“</p>
                  </blockquote>
                  <figcaption className="mt-4 border-t border-line pt-4 text-[15px] leading-relaxed text-[#3d4350]">
                    <strong className="font-semibold text-accent">{spectrum.answerLabel}</strong> {s.answer}
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* Schieberegler: Spektrum der Vertriebswege */}
            <div className="mt-12 rounded-lg border border-line bg-white p-6 sm:p-8">
              <h3 className="text-xl font-semibold tracking-tight">{spectrum.sliderHeading}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{spectrum.sub}</p>

              {/* Pole */}
              <div className="mt-6 flex justify-between gap-6 text-sm">
                <div>
                  <p className="font-semibold">← {spectrum.poles.left.label}</p>
                  <p className="text-muted">{spectrum.poles.left.hint}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{spectrum.poles.right.label} →</p>
                  <p className="text-muted">{spectrum.poles.right.hint}</p>
                </div>
              </div>

              <SpectrumSlider zones={spectrum.zones} marker={spectrum.marker} />
            </div>
          </div>
        </section>

        {/* Leistungsumfang */}
        <Scope />

        {/* Über uns */}
        <About />

        {/* Preis */}
        <Section title={pricing.headline}>
          <div className="rounded-lg border border-line bg-white p-6 text-[#37352F] sm:max-w-md sm:p-8">
            <p className="text-sm font-medium uppercase tracking-wide text-[#787774]">{pricing.label}</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight">{pricing.price}</p>
            <p className="mt-2 text-[15px] font-medium leading-relaxed">{pricing.priceNote}</p>
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
          <p className="mt-5 text-sm font-bold uppercase tracking-wide text-[#1C60E2]">{brand.claim}</p>
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
