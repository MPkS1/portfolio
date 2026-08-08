import type { Metadata } from "next";
import { skillCategories } from "@/lib/skills";
import SkillBar from "@/components/SkillBar";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills and tool categories presented in a premium interactive layout.",
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6">
      <SectionHeader
        label="Skills"
        title="Capabilities and tooling"
        description="A concise view of the areas I work in most often, with a stronger visual hierarchy than a progress-bar wall."
      />

      <div className="grid gap-6 xl:grid-cols-2">
        {skillCategories.map((category) => (
          <div key={category.name} className="premium-glass rounded-[2rem] p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-2xl">{category.icon}</span>
              <h2 className="text-lg font-semibold theme-text-main">{category.name}</h2>
            </div>
            {category.skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
