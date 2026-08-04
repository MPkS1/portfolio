import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import { ExternalLink, BookOpen, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Research",
  description: "Maddula Purushottama Kumar's technical projects, AI tools, and open-source work.",
};

const highlights = [
  {
    title: "Pose-Based Vertical Jump Analysis with MoveNet",
    project: "Vertical Jump Analyzer",
    year: 2024,
    abstract:
      "Applied Google's MoveNet SinglePose Lightning model to automatically detect take-off and landing frames in video footage, computing jump height, peak velocity, and explosive strength metrics. Real-time skeleton overlay and analytics graphs generated with Matplotlib and SciPy.",
    tags: ["Computer Vision", "TensorFlow", "MoveNet", "OpenCV", "Sports Analytics"],
    href: "https://github.com/MPkS1/vertical-jump-analyzer",
  },
  {
    title: "Multi-Engine Phishing Detection with Quantum Risk Assessment",
    project: "QShield AI",
    year: 2024,
    abstract:
      "Designed a FastAPI backend integrating Google Safe Browsing API, WHOIS domain-age analysis, and a novel quantum risk-scoring module to detect phishing URLs. The system produces a composite threat score with per-engine breakdowns and supports demo mode for evaluation.",
    tags: ["Cybersecurity", "FastAPI", "Gemini API", "WHOIS", "Risk Scoring"],
    href: "https://github.com/MPkS1/squid_game_73",
  },
  {
    title: "AI Runtime & Multi-Agent Orchestration in a Rust OS",
    project: "AIOS",
    year: 2024,
    abstract:
      "Explored embedding an AI runtime directly into a bare-metal Rust operating system. AIOS includes a UEFI bootloader, virtual memory management, IPC primitives, and a security capability model, with a multi-agent orchestration layer designed to run inference workloads at kernel level.",
    tags: ["OS Development", "Rust", "UEFI", "AI Runtime", "Systems Programming"],
    href: "https://github.com/MPkS1/AIOS",
  },
];

const tools = [
  {
    name: "Vertical Jump Analyzer",
    description:
      "Python tool using TensorFlow MoveNet and OpenCV for automated sports jump analysis — keypoint extraction, height calculation, and analytics graphs.",
    tech: ["Python", "TensorFlow", "OpenCV", "NumPy", "Matplotlib"],
    href: "https://github.com/MPkS1/vertical-jump-analyzer",
  },
  {
    name: "QShield AI Backend",
    description:
      "FastAPI phishing detection service with multi-engine threat analysis, quantum risk scoring, and Google Gemini AI integration.",
    tech: ["Python", "FastAPI", "Gemini API", "Safe Browsing API"],
    href: "https://github.com/MPkS1/squid_game_73",
  },
  {
    name: "AIOS — Rust OS",
    description:
      "Experimental x86_64 operating system in Rust with a UEFI bootloader, virtual memory, IPC, security modules, and an AI multi-agent runtime.",
    tech: ["Rust", "x86_64", "UEFI", "QEMU"],
    href: "https://github.com/MPkS1/AIOS",
  },
];

export default function ResearchPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Technical Work"
          title="Research & Technical Highlights"
          description="Deep technical write-ups on key projects — computer vision, cybersecurity, and systems programming."
        />

        {/* Technical highlights */}
        <div className="mb-20">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white mb-8">
            <BookOpen className="w-6 h-6 text-indigo-500" />
            Technical Highlights
          </h2>
          <div className="space-y-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-snug max-w-2xl">
                    {item.title}
                  </h3>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1 text-sm text-indigo-600 dark:text-indigo-400 hover:underline shrink-0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code2 className="w-4 h-4" />
                    Repo
                  </a>
                </div>
                <p className="text-sm font-semibold text-indigo-500 dark:text-indigo-400 mb-2">
                  {item.project} · {item.year}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {item.abstract}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open-Source Tools */}
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white mb-8">
            <ExternalLink className="w-6 h-6 text-indigo-500" />
            Open-Source Projects
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-5"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{tool.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                  {tool.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tool.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  GitHub →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
