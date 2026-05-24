"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  ShieldCheck,
  Target,
  Sparkles,
  Apple,
  Clock,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { features } from "@/lib/site";

const iconMap = {
  Dumbbell,
  ShieldCheck,
  Target,
  Sparkles,
  Apple,
  Clock,
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding relative overflow-hidden bg-dark-800">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-red-glow opacity-50" />

      <div className="container-custom relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              Built for <span className="text-gradient-red">winners.</span>
              <br />
              Not just for showing up.
            </>
          }
          description="Every detail at Gym Fitness — from the equipment we import to the trainers we hire — is designed to give you results, faster."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative glass rounded-2xl p-7 hover:border-primary/40 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all">
                    {Icon && <Icon className="w-6 h-6 text-primary group-hover:text-white" />}
                  </div>
                  <h3 className="font-display text-2xl tracking-wider uppercase mb-2">
                    {f.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {f.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
