"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TrendingDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { transformations } from "@/lib/site";

export default function Transformations() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-red-glow opacity-50" />

      <div className="container-custom relative">
        <SectionHeading
          eyebrow="Real Transformations"
          title={
            <>
              Bodies built. <span className="text-gradient-red">Lives changed.</span>
            </>
          }
          description="These aren't stock photos. These are members from Sheikhpura who decided enough was enough."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {transformations.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass hover:border-primary/40 transition"
            >
              <div className="grid grid-cols-2">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={t.before}
                    alt={`${t.name} before`}
                    fill
                    sizes="(max-width: 768px) 50vw, 17vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition duration-500"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] uppercase tracking-widest bg-black/70 backdrop-blur">
                    Before
                  </div>
                </div>
                <div className="relative aspect-[3/4]">
                  <Image
                    src={t.after}
                    alt={`${t.name} after`}
                    fill
                    sizes="(max-width: 768px) 50vw, 17vw"
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] uppercase tracking-widest bg-primary">
                    After
                  </div>
                </div>
              </div>

              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="font-display text-xl tracking-wider">
                    {t.name}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-white/50">
                    {t.duration}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-primary text-sm font-semibold">
                  <TrendingDown className="w-4 h-4" />
                  {t.weightLost}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
