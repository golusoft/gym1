"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { programs } from "@/lib/site";

export default function Programs() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom relative">
        <SectionHeading
          eyebrow="Our Programs"
          title={
            <>
              Choose your <span className="text-gradient-red">battle.</span>
            </>
          }
          description="From dramatic fat loss to powerlifting glory — every program is coach-led, science-backed, and built to deliver."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden h-[400px] cursor-pointer"
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
              <div className="absolute inset-0 border border-white/0 group-hover:border-primary/40 rounded-2xl transition" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center gap-1.5 text-xs text-primary uppercase tracking-widest mb-2">
                  <Clock className="w-3 h-3" />
                  {p.duration}
                </div>
                <h3 className="font-display text-2xl uppercase tracking-wider mb-2">
                  {p.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
