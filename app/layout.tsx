import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import ParticlesBackground from "@/components/ParticlesBackground";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Beatur Viaggi — Agenzia di Viaggi a Desio (MB)",
  description:
    "Beatur Viaggi: agenzia di viaggi a Desio, specializzata in viaggi leisure, corporate travel, lista nozze e organizzazione di congressi scientifici.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${figtree.variable} h-full antialiased`}>
      <body className={`min-h-full flex flex-col font-[family-name:var(--font-figtree)] bg-[#F7F4EE]`}>
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}
