"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Sparkles, Star } from "lucide-react";
import { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  "AI/ML": "border-[#7c5cff]/30 bg-[#7c5cff]/10 text-[#c6bbff]",
  "Web Dev": "border-[#5eead4]/30 bg-[#5eead4]/10 text-[#b9fff1]",
  Mobile: "border-[#4ade80]/30 bg-[#4ade80]/10 text-[#cbffd8]",
  Systems: "border-[#ffb86c]/30 bg-[#ffb86c]/10 text-[#ffe1bf]",
  Cybersecurity: "border-[#ff7c7c]/30 bg-[#ff7c7c]/10 text-[#ffd0d0]",
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isHeroCaseStudy = project.id === "mern-chat-app";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={cn(
        "theme-card group relative overflow-hidden rounded-[2rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)]",
        isHeroCaseStudy && "md:col-span-2 xl:col-span-2"
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,92,255,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(94,234,212,0.1),transparent_30%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-5 flex items-center justify-between gap-3">
          <span
            className={cn(
              "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]",
              categoryColors[project.category]
            )}
          >
            {project.category}
          </span>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] theme-text-muted">
            {project.featured && <Star className="h-4 w-4 fill-[#ffb86c] text-[#ffb86c]" />}
            {project.year}
          </div>
        </div>

        {isHeroCaseStudy && (
          <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#5eead4]">
            <Sparkles className="h-4 w-4" />
            Featured guided learning build
          </div>
        )}

        <h3 className="font-display text-2xl font-bold tracking-[-0.03em] theme-text-main transition-colors duration-300 group-hover:opacity-90">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 theme-text-secondary">
          {project.description}
        </p>

        <div className="theme-card mt-5 rounded-2xl p-4">
          <p className="text-xs uppercase tracking-[0.24em] theme-text-muted">Case study</p>
          <p className="mt-2 text-sm leading-7 theme-text-secondary">{project.longDescription}</p>
        </div>

        {isHeroCaseStudy && (
          <div className="mt-4 rounded-2xl border border-[#5eead4]/20 bg-[#5eead4]/10 p-4 text-sm leading-7 text-white/76">
            Built as a guided learning project by studying an open-source implementation. I explored the architecture, understood the authentication flow, real-time Socket.io messaging, Zustand state management, MongoDB integration, and deployment process, then customized and debugged the project as a hands-on learning experience.
          </div>
        )}

        {project.aiTools && project.aiTools.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.aiTools.map((tool) => (
              <span key={tool} className="theme-pill rounded-full px-3 py-1 text-xs">
                {tool}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 5).map((tech) => (
            <span key={tech} className="theme-pill rounded-full px-3 py-1 text-xs">
              {tech}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="theme-pill rounded-full px-3 py-1 text-xs theme-text-muted">
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center gap-3 pt-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-button-secondary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition"
            >
              Source
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-button-secondary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition"
            >
              <Globe className="h-4 w-4" />
              Live
            </a>
          )}
          <span className="ml-auto text-xs uppercase tracking-[0.22em] theme-text-muted">Case study</span>
        </div>
      </div>
    </motion.article>
  );
}
