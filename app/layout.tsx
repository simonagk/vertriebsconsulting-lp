import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "[Firmenname] – Vertriebsberatung für Makler & Finanzierungsvermittler",
  description: "Platzhalter-Beschreibung.",
  // Solange Inhalte Platzhalter sind: nicht indexieren.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
