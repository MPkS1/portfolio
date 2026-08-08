"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button className="h-10 w-10 rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface-soft)_80%,transparent)]" aria-label="Toggle theme" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="premium-focus flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface-soft)_80%,transparent)] text-[var(--text-secondary)] transition hover:border-[var(--border-strong)]"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-[#ffb86c]" />
      ) : (
        <Moon className="w-5 h-5 text-[#7c5cff]" />
      )}
    </button>
  );
}
