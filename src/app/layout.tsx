import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Maddula Purushottama Kumar — AI Researcher & Developer",
    template: "%s | Maddula Purushottama Kumar",
  },
  description:
    "Maddula Purushottama Kumar is an AI researcher and developer specialising in computer vision, full-stack web development, Android apps, OS development, and cybersecurity.",
  keywords: ["AI", "Machine Learning", "Computer Vision", "TensorFlow", "React", "Kotlin", "Rust", "Next.js", "TypeScript", "Python", "Android", "Firebase"],
  authors: [{ name: "Maddula Purushottama Kumar" }],
  openGraph: {
    title: "Maddula Purushottama Kumar — AI Researcher & Developer",
    description:
      "AI researcher and developer specialising in computer vision, full-stack web apps, Android development, OS development in Rust, and cybersecurity.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maddula Purushottama Kumar — AI Researcher & Developer",
    description: "AI researcher and developer building computer vision, web, mobile, and systems software.",
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
