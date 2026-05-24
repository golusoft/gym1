"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Props {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  image: string;
  breadcrumb: string;
}

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  image,
  breadcrumb,
}: Props) {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/95 via-dark-900/80 to-dark-900" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute -bottom-32 left-0 w-[600px] h-[600px] bg-red-glow opacity-50" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 mb-5"
        >
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary">{breadcrumb}</span>
        </motion.div>

        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow mb-4"
          >
            <span className="inline-block w-8 h-px bg-primary" />
            {eyebrow}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider uppercase leading-[0.95] text-shadow-red max-w-4xl"
        >
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-gradient-red">{highlight}</span>
            </>
          )}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-white/70 text-base md:text-lg max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
