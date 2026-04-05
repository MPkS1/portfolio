export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "AI/ML" | "Web Dev" | "Research" | "Career";
  tags: string[];
  date: string;
  readTime: number;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "rag-systems-langchain",
    title: "Building Production RAG Systems with LangChain",
    excerpt: "A deep dive into Retrieval-Augmented Generation: architecture decisions, chunking strategies, vector store selection, and pitfalls to avoid when going to production.",
    content: "",
    category: "AI/ML",
    tags: ["RAG", "LangChain", "LLM", "Python", "Production"],
    date: "2025-03-12",
    readTime: 12,
    featured: true,
  },
  {
    id: "nextjs-14-app-router",
    title: "Next.js 14 App Router: Complete Guide",
    excerpt: "Everything you need to know about the Next.js 14 App Router — server components, streaming, parallel routes, intercepting routes, and migration tips from Pages Router.",
    content: "",
    category: "Web Dev",
    tags: ["Next.js", "React", "TypeScript", "App Router"],
    date: "2025-02-20",
    readTime: 15,
    featured: true,
  },
  {
    id: "fine-tuning-llms",
    title: "Fine-tuning LLMs: Practical Guide",
    excerpt: "From LoRA to full fine-tuning — a practical, cost-conscious guide to adapting open-source large language models for domain-specific tasks.",
    content: "",
    category: "AI/ML",
    tags: ["LLM", "Fine-tuning", "LoRA", "HuggingFace", "PyTorch"],
    date: "2025-01-08",
    readTime: 18,
    featured: false,
  },
  {
    id: "typescript-best-practices-2026",
    title: "TypeScript Best Practices in 2026",
    excerpt: "Updated best practices for TypeScript in 2026: strict mode, utility types, discriminated unions, satisfies operator, and patterns that scale in large codebases.",
    content: "",
    category: "Web Dev",
    tags: ["TypeScript", "JavaScript", "Best Practices", "Architecture"],
    date: "2024-12-05",
    readTime: 10,
    featured: false,
  },
];
