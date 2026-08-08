"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const highlights = [
  "Product-minded frontend engineer",
  "Motion-first interfaces",
  "Truthful project storytelling",
];

const stats = [
  { value: "6+", label: "shipped projects" },
  { value: "4", label: "core domains" },
  { value: "100%", label: "honest case studies" },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-orb",
        { opacity: 0, y: 32, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.6,
          ease: "power3.out",
          stagger: 0.14,
        }
      );

      const splitTargets = headlineRef.current?.querySelectorAll("[data-split]");
      if (splitTargets) {
        gsap.fromTo(
          splitTargets,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power4.out",
            stagger: 0.06,
            delay: 0.1,
          }
        );
      }

      gsap.fromTo(
        cardRef.current,
        { rotateX: 8, rotateY: -8, y: 28, opacity: 0 },
        { rotateX: 0, rotateY: 0, y: 0, opacity: 1, duration: 1.1, ease: "power3.out", delay: 0.25 }
      );
    });

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="hero-orb absolute left-[-8%] top-14 h-72 w-72 rounded-full bg-[#7c5cff]/20 blur-3xl" />
        <div className="hero-orb absolute right-[-6%] top-24 h-80 w-80 rounded-full bg-[#5eead4]/14 blur-3xl" />
        <div className="hero-orb absolute bottom-[-8%] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#ffb86c]/12 blur-3xl" />
        <div className="absolute inset-0 premium-grid opacity-[0.14]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_36%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.25fr_0.9fr] lg:gap-12">
        <div className="relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="theme-pill mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-[#5eead4]" />
            Available for frontend, product, and motion-heavy interfaces
          </motion.div>

          <h1
            ref={headlineRef}
            className="max-w-4xl font-display text-5xl font-bold leading-[0.92] tracking-[-0.05em] theme-text-main sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="block overflow-hidden">
              <span data-split className="block">Maddula Purushottama</span>
            </span>
            <span className="block overflow-hidden text-[var(--text-secondary)]">
              <span data-split className="block">Kumar builds premium</span>
            </span>
            <span className="block overflow-hidden text-[#5eead4]">
              <span data-split className="block">digital experiences.</span>
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 theme-text-secondary sm:text-xl">
            I design and build polished web experiences with strong UX, cinematic motion, and
            clean technical execution. This portfolio is intentionally crafted to feel premium,
            honest, and memorable.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="theme-pill rounded-full px-4 py-2 text-sm backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/projects"
              className={cn(
                "theme-button-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5",
                "premium-focus"
              )}
            >
              View selected work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="theme-button-secondary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition premium-focus"
            >
              Start a conversation
            </Link>
            <a
              href="#featured-case-study"
              className="theme-button-secondary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition premium-focus"
            >
              Jump to case study
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5 text-sm theme-text-muted">
            <a href="https://github.com/MPkS1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-[var(--text-primary)]">
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            <a href="https://linkedin.com/in/maddula-purushottama-kumar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-[var(--text-primary)]">
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 transition hover:text-[var(--text-primary)]">
              <Download className="h-4 w-4" /> Resume on request
            </Link>
          </div>
        </div>

        <motion.div
          ref={cardRef}
          initial={false}
          className="relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 rounded-[2.25rem] bg-[radial-gradient(circle_at_30%_20%,rgba(124,92,255,0.28),transparent_32%),radial-gradient(circle_at_70%_70%,rgba(94,234,212,0.16),transparent_28%)] blur-2xl" />
          <div className="premium-glass relative overflow-hidden rounded-[2.25rem] p-5 sm:p-6">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),transparent_28%,rgba(255,255,255,0.02))]" />
            <div className="relative space-y-5">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] theme-text-muted">
                <span>Profile</span>
                <span>Motion-ready</span>
              </div>

              <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center rounded-[2rem] border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface-strong)_84%,transparent)]">
                <div className="absolute inset-6 rounded-full border border-[var(--border)]" />
                <div className="absolute inset-10 rounded-full border border-[var(--border)]" />
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.22),transparent_45%),radial-gradient(circle_at_35%_35%,rgba(94,234,212,0.16),transparent_22%)]" />
                <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/14 to-white/5 shadow-[0_0_90px_rgba(124,92,255,0.24)]">
                  <div className="flex h-36 w-36 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-center">
                    <div>
                      <p className="text-xs uppercase tracking-[0.45em] theme-text-muted">MPK</p>
                      <p className="mt-2 font-display text-3xl font-bold theme-text-main">Frontend</p>
                      <p className="mt-1 text-sm theme-text-secondary">Product-minded builder</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="theme-card rounded-2xl p-4 text-center">
                    <div className="font-display text-2xl font-bold theme-text-main">{stat.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.22em] theme-text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl items-center justify-between px-4 pb-10 text-xs uppercase tracking-[0.32em] theme-text-muted sm:px-6">
        <span>Scroll for case studies</span>
        <span>Premium portfolio system</span>
      </div>
    </section>
  );
}
