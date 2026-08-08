import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";

const socials = [
  { href: "https://github.com/MPkS1", icon: GithubIcon, label: "GitHub" },
  { href: "https://linkedin.com/in/maddula-purushottama-kumar", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://twitter.com/MPkS1", icon: TwitterIcon, label: "Twitter" },
  { href: "mailto:maddulapurushottama@gmail.com", icon: Mail, label: "Email" },
];

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border)] bg-[color-mix(in_srgb,var(--surface-soft)_50%,transparent)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="premium-glass rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.35em] theme-text-muted">
                Maddula Purushottama Kumar
              </p>
              <p className="max-w-xl text-balance text-lg font-medium theme-text-main sm:text-xl">
                Senior frontend-style portfolio built with premium motion, thoughtful UX, and a truthful project story.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="theme-button-secondary rounded-full px-4 py-2 text-sm transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="theme-button-secondary flex h-11 w-11 items-center justify-center rounded-full transition hover:-translate-y-0.5"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-sm theme-text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Maddula Purushottama Kumar</p>
            <p>Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and GSAP.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
