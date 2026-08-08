import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for collaborations, interviews, or project conversations.",
};

const socials = [
  { href: "https://github.com/MPkS1", icon: GithubIcon, label: "GitHub", value: "github.com/MPkS1" },
  { href: "https://linkedin.com/in/maddula-purushottama-kumar", icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/maddula-purushottama-kumar" },
  { href: "https://twitter.com/MPkS1", icon: TwitterIcon, label: "X / Twitter", value: "@MPkS1" },
  { href: "mailto:maddulapurushottama@gmail.com", icon: Mail, label: "Email", value: "maddulapurushottama@gmail.com" },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6">
      <SectionHeader
        label="Contact"
        title="Start the conversation"
        description="For frontend roles, collaborations, or a portfolio project that needs stronger product thinking and motion design."
      />

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <div className="premium-glass rounded-[2rem] p-6 sm:p-8">
            <h2 className="text-xl font-semibold theme-text-main">Connect</h2>
            <div className="mt-6 space-y-4">
              {socials.map(({ href, icon: Icon, label, value }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="theme-card flex items-center gap-4 rounded-2xl p-4 transition hover:border-[var(--border-strong)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface-soft)_70%,transparent)]">
                    <Icon className="h-5 w-5 theme-text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] theme-text-muted">{label}</p>
                    <p className="mt-1 text-sm theme-text-secondary">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="premium-glass rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-center gap-3 text-[#5eead4]">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.28em] theme-text-muted">Location</span>
            </div>
            <p className="mt-4 text-sm leading-7 theme-text-secondary">Remote-friendly and available for worldwide opportunities.</p>
            <p className="mt-4 text-sm leading-7 theme-text-muted">I typically respond within 24 hours.</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
