"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { blogPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import SectionHeader from "@/components/SectionHeader";

export default function BlogPage() {
  const [query, setQuery] = useState("");

  const filtered = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6">
      <SectionHeader
        label="Writing"
        title="Notes and technical writing"
        description="Short posts about implementation decisions, architecture, and what I learned while building."
      />

      <div className="mx-auto mb-10 max-w-xl">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 theme-text-muted" />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search posts by topic or tag"
            className="premium-focus w-full rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface-soft)_78%,transparent)] py-3 pl-11 pr-4 text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
          />
        </label>
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      ) : (
        <div className="premium-glass rounded-[2rem] p-8 text-center theme-text-secondary">
          No posts matching "{query}"
        </div>
      )}
    </div>
  );
}
