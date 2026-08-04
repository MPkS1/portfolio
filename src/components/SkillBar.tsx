"use client";

import { motion } from "framer-motion";
import { Skill } from "@/lib/skills";

interface SkillBarProps {
  skill: Skill;
  index: number;
}

export default function SkillBar({ skill, index }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-white/82">{skill.name}</span>
        <span className="text-xs font-semibold text-[#5eead4]">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/8">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-[#7c5cff] via-[#5eead4] to-[#ffb86c]"
        />
      </div>
    </motion.div>
  );
}
