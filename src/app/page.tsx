import Hero from "@/components/Hero";
import { projects } from "@/lib/projects";
import { blogPosts } from "@/lib/blog";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);
  const recentPosts = blogPosts.slice(0, 2);

  return (
    <>
      <Hero />

      {/* Stats */}
      <section className="border-y border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { label: "Projects Built", value: "20+" },
            { label: "Years of Experience", value: "5+" },
            { label: "Research Papers", value: "8" },
            { label: "Open Source Stars", value: "1.2k" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <SectionHeader
          label="Work"
          title="Featured Projects"
          description="A selection of projects I'm most proud of — from production AI systems to open-source libraries."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
          >
            View all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <SectionHeader
            label="Writing"
            title="Latest Posts"
            description="Thoughts on AI research, engineering best practices, and the tools I use."
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {recentPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
            >
              Read all posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Let&apos;s build something together
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-8">
          Whether it&apos;s an AI system, a web app, or a research collaboration — I&apos;d love to chat.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25"
        >
          Get in Touch <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </>
  );
}
