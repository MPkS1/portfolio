import type { Metadata } from "next";
import { skillCategories } from "@/lib/skills";
import SkillBar from "@/components/SkillBar";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Skills",
  description: "MK's technical skills across AI/ML, frontend, backend, and tooling.",
};

export default function SkillsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Expertise"
          title="Skills & Technologies"
          description="A snapshot of the tools and technologies I work with every day."
        />

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6"
            >
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-6">
                <span>{cat.icon}</span>
                {cat.name}
              </h2>
              {cat.skills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
