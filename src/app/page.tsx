import Link from "next/link";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import SectionHeader from "@/components/SectionHeader";
import AiJourneySection from "@/components/AiJourneySection";
import { blogPosts } from "@/lib/blog";
import { projects } from "@/lib/projects";

const stats = [
  { value: "6+", label: "shipped builds" },
  { value: "4", label: "primary domains" },
  { value: "1", label: "guided learning MERN case study" },
  { value: "95+", label: "target Lighthouse score" },
];

const featuredNotes = [
  "Premium motion system with Framer Motion and GSAP",
  "Cinematic lighting, glass surfaces, and strong contrast",
  "Honest storytelling around guided learning and experimentation",
];

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const recentPosts = blogPosts.slice(0, 2);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
        <div className="premium-glass rounded-[2rem] p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-display text-3xl font-bold text-white sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.28em] text-white/45">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="featured-case-study" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <SectionHeader
          label="Selected Work"
          title="Featured case study"
          description="The MERN chat app is presented honestly as a guided learning project. I studied the open-source architecture, then customized, debugged, and learned from the full-stack workflow in depth."
        />
        <div className="mb-8 grid gap-4 lg:grid-cols-3">
          {featuredNotes.map((note) => (
            <div key={note} className="premium-glass rounded-[1.75rem] p-5 text-sm leading-7 text-white/72">
              <Sparkles className="mb-3 h-5 w-5 text-[#5eead4]" />
              {note}
            </div>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white px-6 py-3.5 text-sm font-semibold text-[#050816] transition hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(255,255,255,0.16)]"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <SectionHeader
          label="About"
          title="A portfolio designed like a product"
          description="The goal here is not to look generic or over-animated. It is to present your work with clarity, restraint, and premium motion that supports the content."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="premium-glass rounded-[2rem] p-6 sm:p-8">
            <p className="text-balance text-lg leading-8 text-white/76">
              I build interfaces that feel intentional. This redesign leans into strong typography, spacious layout rhythm, glass surfaces only where they help, and motion that reveals structure rather than distracting from it.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Accessible contrast and visible focus states",
                "Motion reduced automatically for sensitive users",
                "SEO-friendly semantic structure and clean hierarchy",
                "Performance-conscious, componentized implementation",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/68">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="premium-glass rounded-[2rem] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">Current focus</p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/70">
              <p>
                Product-minded frontend systems with clean interaction design.
              </p>
              <p>
                Premium case-study layouts that make it easy for interviewers to understand what was built, why it matters, and what was learned.
              </p>
              <p>
                A truthful developer narrative that values craft as much as technical breadth.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#5eead4]"
            >
              Read more about the journey
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <AiJourneySection />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <SectionHeader
          label="Writing"
          title="Recent notes"
          description="Short technical writeups that show how I think about systems, implementation details, and product decisions."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {recentPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white/82 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            Read all posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <SectionHeader
          label="Contact"
          title="Let’s build something memorable"
          description="Open to frontend, full-stack, and motion-led product work. If you want a portfolio that feels handcrafted, start here."
        />
        <div className="mx-auto max-w-3xl premium-glass rounded-[2rem] p-6 text-center sm:p-8">
          <p className="text-lg leading-8 text-white/72">
            Have a project, interview, or collaboration in mind? I&apos;d love to talk.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#050816] transition hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Contact me
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white/82 transition hover:bg-white/10"
            >
              See the work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
