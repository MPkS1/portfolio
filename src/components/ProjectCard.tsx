"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  "AI/ML": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300",
  "Web Dev": "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300",
  Research: "bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300",
  "Open Source": "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300",
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
    >
      {/* Featured star */}
      {project.featured && (
        <div className="absolute top-4 right-4">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        </div>
      )}

      {/* Category badge */}
      <span
        className={cn(
          "inline-block self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-4",
          categoryColors[project.category]
        )}
      >
        {project.category}
      </span>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-400">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
        )}
        <span className="ml-auto text-xs text-gray-400">{project.year}</span>
      </div>
    </motion.div>
  );
}
