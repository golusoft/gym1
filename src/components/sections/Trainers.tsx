"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import { trainers } from "@/lib/site";

interface Props {
  full?: boolean;
}

export default function Trainers({ full = false }: Props) {
  return (
    <section className="section-padding relative overflow-hidden bg-dark-800">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-glow opacity-50" />

      <div className="container-custom relative">
        <SectionHeading
          eyebrow="Our Trainers"
          title={
            <>
              Coached by <span className="text-gradient-red">champions.</span>
            </>
          }
          description="Internationally certified, deeply experienced, and obsessed with your results. Meet the team that will rewrite your physique."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass hover:border-primary/40 transition"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent" />

                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold">
                  {t.experience}
                </div>

                <div className="absolute top-3 right-3 w-9 h-9 rounded-full glass-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <FaInstagram className="w-4 h-4" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display text-xl uppercase tracking-wider">
                  {t.name}
                </h3>
                <p className="text-primary text-xs uppercase tracking-widest mt-1">
                  {t.role}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {t.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {full && (
                  <div className="mt-4 pt-4 border-t border-white/10 space-y-1.5">
                    {t.certifications.map((c) => (
                      <div
                        key={c}
                        className="flex items-center gap-2 text-xs text-white/60"
                      >
                        <BadgeCheck className="w-3.5 h-3.5 text-primary" />
                        {c}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {!full && (
          <div className="mt-10 text-center">
            <Link href="/trainers" className="btn-outline">
              Meet All Trainers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
