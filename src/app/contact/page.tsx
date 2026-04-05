import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Maddula Purushottama Kumar for collaborations, projects, or just to say hi.",
};

const socials = [
  {
    href: "https://github.com/MPkS1",
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/MPkS1",
  },
  {
    href: "https://linkedin.com/in/maddula-purushottama-kumar",
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/maddula-purushottama-kumar",
  },
  {
    href: "https://twitter.com/MPkS1",
    icon: TwitterIcon,
    label: "Twitter / X",
    value: "@MPkS1",
  },
  {
    href: "mailto:contact@mpks1.dev",
    icon: Mail,
    label: "Email",
    value: "contact@mpks1.dev",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Say Hello"
          title="Get in Touch"
          description="Have a project in mind? Want to collaborate on research? Or just want to chat about AI? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Left: info */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Let&apos;s connect
            </h2>
            <div className="space-y-5">
              {socials.map(({ href, icon: Icon, label, value }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:border-indigo-400 dark:group-hover:border-indigo-600 transition-colors">
                    <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <div className="w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Location</p>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Remote — available worldwide
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800">
              <p className="text-sm text-indigo-700 dark:text-indigo-300 leading-relaxed">
                I typically respond within 24 hours. For urgent matters, reach out directly via email.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
