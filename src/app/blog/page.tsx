"use client";

import { useState } from "react";
import { blogPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import SectionHeader from "@/components/SectionHeader";
import { Search } from "lucide-react";

export default function BlogPage() {
  const [query, setQuery] = useState("");

  const filtered = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Writing"
          title="Blog"
          description="Thoughts on AI research, web development, and the craft of building software."
        />

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-10">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search posts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-6">
            {filtered.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            No posts matching &quot;{query}&quot;
          </div>
        )}
      </div>
    </div>
  );
}
