"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1920&q=80&auto=format&fit=crop"
        alt="Train at Gym Fitness"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/85 to-dark-900/30" />
      <div className="absolute inset-0 bg-red-glow opacity-50" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="eyebrow mb-5">
            <span className="inline-block w-8 h-px bg-primary" />
            Stop waiting. Start training.
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-wider uppercase leading-[0.95] text-shadow-red">
            Your strongest <span className="text-gradient-red">self</span> is one decision away.
          </h2>
          <p className="mt-5 text-white/75 text-lg leading-relaxed max-w-xl">
            Walk in for a free trial today. Tour the facility. Meet the team.
            No pressure — just possibilities.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Book Free Trial <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={`tel:${site.phoneDigits}`} className="btn-outline">
              <Phone className="w-4 h-4" /> {site.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
