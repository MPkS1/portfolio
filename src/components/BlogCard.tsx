"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Tag } from "lucide-react";
import { BlogPost } from "@/lib/blog";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  "AI/ML": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300",
  "Web Dev": "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300",
  Research: "bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300",
  Career: "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300",
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
      className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <span
          className={cn(
            "inline-block text-xs font-semibold px-2.5 py-1 rounded-full",
            categoryColors[post.category]
          )}
        >
          {post.category}
        </span>
        {post.featured && (
          <span className="text-xs text-yellow-600 dark:text-yellow-400 font-semibold">
            ✦ Featured
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
        {post.title}
      </h3>

      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
        {post.excerpt}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400"
          >
            <Tag className="w-3 h-3" />
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-gray-400">
        <span>{formattedDate}</span>
        <span className="inline-flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {post.readTime} min read
        </span>
      </div>
    </motion.article>
  );
}
