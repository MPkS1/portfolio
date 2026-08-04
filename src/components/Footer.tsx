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
    <footer className="mt-24 border-t border-white/10 bg-[#050816]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="premium-glass rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.35em] text-white/45">
                Maddula Purushottama Kumar
              </p>
              <p className="max-w-xl text-balance text-lg font-medium text-white sm:text-xl">
                Senior frontend-style portfolio built with premium motion, thoughtful UX, and a truthful project story.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
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
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Maddula Purushottama Kumar</p>
            <p>Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and GSAP.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
