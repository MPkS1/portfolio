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
    <section className="bg-gray-50 dark:bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-indigo-500 mb-3">
            Development Approach
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            AI-Powered Development Journey
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Every project starts as an idea. AI tools turn those ideas into reality —
            faster prototyping, smarter architecture, and deeper learning along the way.
          </p>
          <p className="mt-3 text-indigo-600 dark:text-indigo-400 font-semibold italic">
            &ldquo;Ideas meet code through AI collaboration&rdquo;
          </p>
        </motion.div>

        {/* Process flow */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-5 text-center ${step.color}`}
            >
              {/* Arrow connector (hidden on mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-gray-400 dark:text-gray-600 text-lg font-bold">
                  →
                </div>
              )}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/60 dark:bg-black/20 mb-3 ${step.iconColor}`}>
                <step.icon className="w-6 h-6" />
              </div>
              <p className="font-bold text-sm mb-1">{step.label}</p>
              <p className="text-xs opacity-80 leading-snug">{step.description}</p>
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
          <h3 className="text-center text-lg font-bold text-gray-900 dark:text-white mb-6">
            AI Tools in My Toolkit
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiTools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
              >
                <span className="text-2xl">{tool.emoji}</span>
                <div>
                  <p className="font-semibold text-sm text-gray-900 dark:text-white">{tool.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{tool.role}</p>
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
          className="rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/30 p-6 text-center"
        >
          <p className="text-indigo-800 dark:text-indigo-200 font-semibold text-lg mb-1">
            All 6 featured projects were built with AI pair programming
          </p>
          <p className="text-indigo-600 dark:text-indigo-400 text-sm">
            AI is my coding partner — not a replacement. The ideas are mine; AI helps me build them faster and learn more along the way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
