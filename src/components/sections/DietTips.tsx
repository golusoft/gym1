"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { dietTips } from "@/lib/site";

export default function DietTips() {
  return (
    <section className="section-padding relative overflow-hidden bg-dark-800">
      <div className="absolute inset-0 grid-pattern opacity-15" />

      <div className="container-custom relative">
        <SectionHeading
          eyebrow="Nutrition · Diet Tips"
          title={
            <>
              Train hard. <span className="text-gradient-red">Eat smart.</span>
            </>
          }
          description="Six science-backed nutrition principles our coaches preach to every member. No fads, no nonsense."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dietTips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative glass rounded-2xl p-7 hover:border-primary/40 transition overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-glow opacity-30 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-display text-5xl text-gradient-red opacity-30">
                    0{i + 1}
                  </div>
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl uppercase tracking-wider mb-2">
                  {tip.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  {tip.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
