"use client";

// PLATZHALTER: Formular sendet noch nichts.
// TODO: an Formspree / Make-Webhook / Next.js Route Handler anbinden + Datenschutz-Checkbox ergänzen.

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return <p className="text-muted">[Platzhalter] Danke – Formular ist noch nicht angebunden.</p>;
  }

  const input = "w-full rounded-md border border-line bg-white px-3 py-2 outline-none focus:border-accent";

  return (
    <form
      className="grid max-w-xl gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <input className={input} name="name" placeholder="Name" required />
      <input className={input} name="company" placeholder="Unternehmen" />
      <input className={input} name="email" type="email" placeholder="E-Mail" required />
      <textarea className={input} name="message" rows={4} placeholder="Worum geht es?" />
      <button
        type="submit"
        className="justify-self-start rounded-md bg-accent px-6 py-3 font-medium text-white hover:opacity-90"
      >
        Anfrage senden
      </button>
    </form>
  );
}
