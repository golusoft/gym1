"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={`${align === "center" ? "text-center mx-auto" : ""} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <div
          className={`eyebrow mb-4 ${align === "center" ? "justify-center" : ""}`}
        >
          <span className="inline-block w-8 h-px bg-primary" />
          {eyebrow}
        </div>
      )}
      <h2 className="section-title text-shadow-red">{title}</h2>
      {description && (
        <p className="mt-5 text-white/65 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
