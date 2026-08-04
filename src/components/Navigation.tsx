"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#050816]/72 backdrop-blur-xl border-b border-white/10 shadow-[0_12px_60px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 font-semibold tracking-tight text-white"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[0.7rem] uppercase tracking-[0.32em] text-white/90 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
            MPK
          </span>
          <span className="hidden sm:inline-flex items-center gap-2 text-sm text-white/70">
            <Sparkles className="h-4 w-4 text-[#5eead4]" />
            Crafted portfolio
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  pathname === link.href
                    ? "bg-white text-[#050816] shadow-[0_10px_30px_rgba(255,255,255,0.12)]"
                    : "text-white/70 hover:text-white hover:bg-white/8"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="lg:hidden p-2 rounded-xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#050816]/96 backdrop-blur-xl px-4 py-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                      "block px-4 py-3 rounded-2xl text-sm font-medium transition-colors",
                    pathname === link.href
                        ? "bg-white text-[#050816]"
                        : "text-white/80 hover:bg-white/8"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
