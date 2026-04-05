import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import { ExternalLink, BookOpen, Award, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Research",
  description: "MK's research publications, AI tools, and academic contributions.",
};

const papers = [
  {
    title: "Efficient RAG: Reducing Latency in Retrieval-Augmented Generation Systems",
    venue: "ACL 2024 Workshop on Efficient NLP",
    year: 2024,
    abstract:
      "We propose a two-stage retrieval approach that reduces RAG latency by 40% while maintaining answer quality, through adaptive chunking and semantic caching.",
    tags: ["RAG", "LLM", "Efficiency", "NLP"],
    href: "#",
  },
  {
    title: "LoRA-Bench: A Benchmark for Parameter-Efficient Fine-Tuning of LLMs",
    venue: "NeurIPS 2023 Workshop on PEFT",
    year: 2023,
    abstract:
      "A comprehensive benchmark covering 12 NLP tasks to evaluate and compare LoRA, QLoRA, and adapter-based fine-tuning methods across model scales.",
    tags: ["LoRA", "Fine-tuning", "Benchmark", "LLM"],
    href: "#",
  },
  {
    title: "Real-Time Multi-Object Tracking with Sparse Transformers",
    venue: "CVPR 2023",
    year: 2023,
    abstract:
      "A sparse attention mechanism for multi-object tracking that achieves state-of-the-art accuracy on MOT17 and MOT20 at 30 FPS on a single GPU.",
    tags: ["Computer Vision", "Transformer", "Object Tracking", "Real-Time"],
    href: "#",
  },
];

const tools = [
  {
    name: "RAG Evaluator",
    description:
      "A Python library for evaluating RAG pipeline quality using faithfulness, relevance, and context precision metrics.",
    tech: ["Python", "LangChain", "RAGAS"],
    stars: "420",
    href: "#",
  },
  {
    name: "LLM Fine-tune Toolkit",
    description:
      "Scripts and utilities for fine-tuning open-source LLMs with LoRA on consumer hardware.",
    tech: ["Python", "HuggingFace", "LoRA", "PEFT"],
    stars: "780",
    href: "#",
  },
  {
    name: "VisionBench",
    description: "Benchmark suite for computer vision models — detection, segmentation, and tracking.",
    tech: ["Python", "PyTorch", "OpenCV"],
    stars: "215",
    href: "#",
  },
];

export default function ResearchPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Academic Work"
          title="Research & Publications"
          description="Selected publications and open-source tools from my AI research work."
        />

        {/* Papers */}
        <div className="mb-20">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white mb-8">
            <BookOpen className="w-6 h-6 text-indigo-500" />
            Publications
          </h2>
          <div className="space-y-6">
            {papers.map((paper) => (
              <div
                key={paper.title}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-snug max-w-2xl">
                    {paper.title}
                  </h3>
                  <a
                    href={paper.href}
                    className="inline-flex items-center gap-1 text-sm text-indigo-600 dark:text-indigo-400 hover:underline shrink-0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="w-4 h-4" />
                    PDF
                  </a>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {paper.venue}
                  </span>
                  <span className="text-sm text-gray-400">· {paper.year}</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {paper.abstract}
                </p>
                <div className="flex flex-wrap gap-2">
                  {paper.tags.map((tag) => (
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

        {/* AI Tools */}
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white mb-8">
            <ExternalLink className="w-6 h-6 text-indigo-500" />
            Open-Source AI Tools
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
                <div className="flex items-center justify-between">
                  <span className="text-sm text-yellow-600 dark:text-yellow-400 font-semibold">
                    ⭐ {tool.stars}
                  </span>
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
