"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      {label && (
        <span className="theme-pill mb-3 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.34em] text-[#5eead4]">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-[-0.04em] theme-text-main sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-balance text-base leading-7 theme-text-secondary sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
