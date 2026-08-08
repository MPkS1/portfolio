"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Tag, ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/lib/blog";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  "AI/ML": "border-[#7c5cff]/30 bg-[#7c5cff]/10 text-[#c6bbff]",
  "Web Dev": "border-[#5eead4]/30 bg-[#5eead4]/10 text-[#b9fff1]",
  Systems: "border-[#ffb86c]/30 bg-[#ffb86c]/10 text-[#ffe1bf]",
  Mobile: "border-[#4ade80]/30 bg-[#4ade80]/10 text-[#cbffd8]",
};

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="theme-card group relative overflow-hidden rounded-[2rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,92,255,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(94,234,212,0.08),transparent_30%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4 mb-4">
        <span
          className={cn(
            "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]",
            categoryColors[post.category]
          )}
        >
          {post.category}
        </span>
        {post.featured && (
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ffb86c]">
            Featured
          </span>
        )}
      </div>

      <h3 className="font-display text-xl font-bold tracking-[-0.03em] theme-text-main transition-colors duration-300 group-hover:opacity-90">
        {post.title}
      </h3>

      <p className="mt-3 text-sm leading-7 theme-text-secondary">
        {post.excerpt}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="theme-pill inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs"
          >
            <Tag className="w-3 h-3" />
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between text-xs theme-text-muted">
        <span>{formattedDate}</span>
        <span className="inline-flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {post.readTime} min read
        </span>
      </div>

      <Link href={`/blog#${post.id}`} className="theme-link-accent mt-6 inline-flex items-center gap-2 text-sm font-medium transition hover:opacity-85">
        Read case notes
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </motion.article>
  );
}
