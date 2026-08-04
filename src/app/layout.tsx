import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Maddula Purushottama Kumar — Senior Frontend Engineer Portfolio",
    template: "%s | Maddula Purushottama Kumar",
  },
  description:
    "A cinematic, premium portfolio showcasing product-minded frontend work, full-stack projects, motion design, and guided learning through real builds.",
  keywords: ["Frontend", "React", "TypeScript", "Next.js", "Framer Motion", "GSAP", "Portfolio", "UI Design", "Motion Design", "Full-Stack"],
  authors: [{ name: "Maddula Purushottama Kumar" }],
  openGraph: {
    title: "Maddula Purushottama Kumar — Senior Frontend Engineer Portfolio",
    description:
      "Premium portfolio with cinematic motion, handcrafted sections, and a truthful project narrative.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maddula Purushottama Kumar — Senior Frontend Engineer Portfolio",
    description: "Premium portfolio with cinematic motion, premium typography, and thoughtful UX.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground" suppressHydrationWarning>
        <Providers>
          <Navigation />
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
