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
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,19,37,0.9),rgba(14,19,37,0.68))] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
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

      <h3 className="font-display text-xl font-bold tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-[#e9e3ff]">
        {post.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-white/64">
        {post.excerpt}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/58"
          >
            <Tag className="w-3 h-3" />
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between text-xs text-white/38">
        <span>{formattedDate}</span>
        <span className="inline-flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {post.readTime} min read
        </span>
      </div>

      <Link href={`/blog#${post.id}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/78 transition hover:text-white">
        Read case notes
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </motion.article>
  );
}
