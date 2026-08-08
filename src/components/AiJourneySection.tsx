"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code2, Hammer, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    label: "Idea",
    description: "A problem or opportunity sparks an idea",
    color: "bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-300",
    iconColor: "text-yellow-500",
  },
  {
    icon: Code2,
    label: "AI-Assisted Coding",
    description: "GitHub Copilot, ChatGPT, Claude & Gemini accelerate development",
    color: "bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300",
    iconColor: "text-indigo-500",
  },
  {
    icon: Hammer,
    label: "Testing & Refinement",
    description: "Iterating with AI feedback to sharpen quality",
    color: "bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300",
    iconColor: "text-purple-500",
  },
  {
    icon: Rocket,
    label: "Ship",
    description: "A real, working project — faster than ever before",
    color: "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300",
    iconColor: "text-green-500",
  },
];

const aiTools = [
  { name: "GitHub Copilot", role: "Code generation & completion", emoji: "🤖" },
  { name: "ChatGPT", role: "Architecture & algorithm design", emoji: "🧠" },
  { name: "Claude", role: "Complex problem solving", emoji: "💡" },
  { name: "Google Gemini", role: "Research & documentation", emoji: "🔮" },
];

export default function AiJourneySection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(94,234,212,0.08),transparent_30%),radial-gradient(circle_at_bottom,rgba(124,92,255,0.09),transparent_28%)]" />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="theme-pill mb-3 inline-flex rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.34em] text-[#5eead4]">
            Development Approach
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-[-0.04em] theme-text-main sm:text-4xl lg:text-5xl">
            AI-Powered Development Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-lg leading-8 theme-text-secondary">
            Every project starts as an idea. AI tools turn those ideas into reality —
            faster prototyping, smarter architecture, and deeper learning along the way.
          </p>
          <p className="mt-3 font-medium italic text-[#c6bbff]">
            &ldquo;Ideas meet code through AI collaboration&rdquo;
          </p>
        </motion.div>

        {/* Process flow */}
        <div className="mb-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-[1.75rem] border p-5 text-center ${step.color}`}
            >
              {/* Arrow connector (hidden on mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-gray-400 dark:text-gray-600 text-lg font-bold">
                  →
                </div>
              )}
              <div className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--surface-strong)_80%,transparent)] ${step.iconColor}`}>
                <step.icon className="w-6 h-6" />
              </div>
              <p className="mb-1 text-sm font-bold theme-text-main">{step.label}</p>
              <p className="text-xs leading-snug theme-text-secondary">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* AI tools grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <h3 className="mb-6 text-center text-lg font-bold theme-text-main">
            AI Tools in My Toolkit
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aiTools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="theme-card flex items-start gap-3 rounded-[1.5rem] p-4 transition-colors hover:border-[var(--border-strong)]"
              >
                <span className="text-2xl">{tool.emoji}</span>
                <div>
                  <p className="text-sm font-semibold theme-text-main">{tool.name}</p>
                  <p className="mt-0.5 text-xs theme-text-secondary">{tool.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="rounded-[1.75rem] border border-[#7c5cff]/20 bg-[#7c5cff]/10 p-6 text-center"
        >
          <p className="mb-1 text-lg font-semibold theme-text-main">
            All 6 featured projects were built with AI pair programming
          </p>
          <p className="text-sm theme-text-secondary">
            AI is my coding partner — not a replacement. The ideas are mine; AI helps me build them faster and learn more along the way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
