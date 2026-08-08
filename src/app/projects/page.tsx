"use client";

import { useState } from "react";
import { categories, projects, type Category } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6">
      <SectionHeader
        label="Projects"
        title="Case studies and experiments"
        description="A curated set of projects that show range, curiosity, and how I approach learning through building."
      />

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition",
              active === category
                ? "theme-button-primary"
                : "theme-button-secondary"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
