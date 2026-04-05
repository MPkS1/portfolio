import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "MK — AI Researcher & Developer",
    template: "%s | MK",
  },
  description:
    "MK is an AI researcher and developer specialising in large language models, computer vision, and full-stack web applications.",
  keywords: ["AI", "Machine Learning", "Next.js", "TypeScript", "LLM", "Python", "React"],
  authors: [{ name: "MK" }],
  openGraph: {
    title: "MK — AI Researcher & Developer",
    description:
      "AI researcher and developer specialising in LLMs, computer vision, and full-stack web apps.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MK — AI Researcher & Developer",
    description: "AI researcher and developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
