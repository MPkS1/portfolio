import type { Metadata } from "next";
import { Brain, Code, Cpu, Globe, Smartphone, ShieldCheck, Sparkles } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Maddula Purushottama Kumar and the design and engineering approach behind the portfolio.",
};

const expertise = [
  {
    icon: Brain,
    title: "Product-minded thinking",
    description:
      "I care about how interfaces feel, how information is prioritized, and whether a user immediately understands what matters.",
  },
  {
    icon: Code,
    title: "Frontend engineering",
    description:
      "React, TypeScript, motion systems, and reusable components with a focus on maintainability and clarity.",
  },
  {
    icon: Smartphone,
    title: "Full-stack collaboration",
    description:
      "I can work across APIs, state management, authentication, and integration details when a product needs more than static screens.",
  },
  {
    icon: ShieldCheck,
    title: "Truthful case studies",
    description:
      "The portfolio is explicit about guided learning, open-source study, and where AI assistance helped accelerate the work.",
  },
  {
    icon: Cpu,
    title: "Motion and interaction",
    description:
      "The UI uses subtle motion and layered depth to feel premium while staying fast and readable.",
  },
  {
    icon: Globe,
    title: "Cross-domain curiosity",
    description:
      "I like building across web, mobile, systems, and AI-adjacent tooling because it sharpens taste and technical range.",
  },
];

const timeline = [
  {
    year: "Now",
    title: "Premium portfolio rebuild",
    org: "This project",
    description:
      "Reframing the site around strong typography, cinematic motion, and a more memorable content story.",
  },
  {
    year: "2024",
    title: "Guided MERN learning project",
    org: "Open-source study",
    description:
      "Studied a real-time chat architecture, understood the auth and messaging flow, then customized and debugged it hands-on.",
  },
  {
    year: "2024",
    title: "Multiple project experiments",
    org: "AI, web, mobile, and systems",
    description:
      "Explored pose analysis, phishing detection, Android UX, and Rust system design as varied learning exercises.",
  },
  {
    year: "2023",
    title: "React foundations and learning content",
    org: "Learning platform work",
    description:
      "Built smaller educational and technical projects to strengthen component architecture and state management skills.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6">
      <SectionHeader
        label="About"
        title="Designing interfaces with intent"
        description="This portfolio is built to feel handcrafted, polished, and honest. It aims to communicate taste, technical range, and the way I think about product quality."
      />

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="premium-glass rounded-[2rem] p-6 sm:p-8">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/45">
            <Sparkles className="h-4 w-4 text-[#5eead4]" />
            Philosophy
          </div>
          <div className="mt-5 space-y-4 text-base leading-8 text-white/74">
            <p>
              I value interfaces that feel precise. Good design should reduce friction, surface structure, and help people understand a system quickly.
            </p>
            <p>
              The best work here is not about flashy effects. It is about balancing atmosphere with readability, and motion with restraint.
            </p>
            <p>
              I also care about honesty. The MERN chat app in particular is presented as a guided learning project so the viewer understands exactly how it was made.
            </p>
          </div>
        </div>

        <div className="premium-glass rounded-[2rem] p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-white/45">What I bring</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {expertise.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Icon className="h-5 w-5 text-[#5eead4]" />
                <h3 className="mt-3 text-sm font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/60">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <SectionHeader
          label="Journey"
          title="Where the work comes from"
          description="The timeline is intentionally short and clear so the narrative stays believable and easy to scan."
        />
        <div className="mx-auto max-w-3xl space-y-4">
          {timeline.map((item) => (
            <div key={`${item.year}-${item.title}`} className="premium-glass relative rounded-[1.75rem] p-5 pl-16">
              <div className="absolute left-5 top-6 h-6 w-6 rounded-full border border-white/15 bg-white/10" />
              <p className="text-xs uppercase tracking-[0.3em] text-[#5eead4]">{item.year}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.24em] text-white/40">{item.org}</p>
              <p className="mt-3 text-sm leading-7 text-white/62">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
