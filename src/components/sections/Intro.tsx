"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Zap } from "lucide-react";
import Counter from "@/components/ui/Counter";
import { achievements } from "@/lib/site";

export default function Intro() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] bg-red-glow opacity-50" />
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative h-[480px] md:h-[560px]"
          >
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-3">
              <div className="col-span-7 row-span-4 relative rounded-2xl overflow-hidden shadow-glass">
                <Image
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80&auto=format&fit=crop"
                  alt="Gym interior"
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />
              </div>
              <div className="col-span-5 row-span-3 col-start-8 relative rounded-2xl overflow-hidden shadow-glass">
                <Image
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80&auto=format&fit=crop"
                  alt="Free weights"
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />
              </div>
              <div className="col-span-5 row-span-3 row-start-4 col-start-8 relative rounded-2xl overflow-hidden shadow-glass">
                <Image
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80&auto=format&fit=crop"
                  alt="Trainer"
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />
              </div>
              <div className="col-span-7 row-span-2 row-start-5 relative rounded-2xl overflow-hidden shadow-glass">
                <Image
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=900&q=80&auto=format&fit=crop"
                  alt="Dumbbells"
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 glass-dark rounded-2xl px-5 py-4 shadow-neon-soft">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-display text-xl">9+ Years</div>
                  <div className="text-xs uppercase tracking-widest text-white/60">
                    Forging Champions
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow mb-4">
              <span className="inline-block w-8 h-px bg-primary" />
              About Gym Fitness
            </div>
            <h2 className="section-title">
              The most <span className="text-gradient-red">premium</span> gym
              in Sheikhpura.
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed">
              We didn&apos;t build just another gym. We built the kind of
              fitness experience Bihar deserves — international-grade equipment,
              certified coaches, climate-controlled spaces, and a community
              hungry for results. Whether you&apos;re chasing fat loss, muscle,
              strength, or just a healthier you — we have the system, the
              science, and the people to take you there.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                "International-grade machines",
                "Certified expert trainers",
                "Indian-style diet plans",
                "Premium hygiene standards",
                "Powerlifting & free weights zone",
                "Open 17 hours every day",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-2 text-sm text-white/80"
                >
                  <Zap className="w-4 h-4 text-primary shrink-0" />
                  {t}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/about" className="btn-primary">
                Discover Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {achievements.map((a, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 text-center hover:border-primary/40 transition group"
            >
              <div className="font-display text-4xl md:text-5xl text-gradient-red text-shadow-red">
                <Counter to={a.number} suffix={a.suffix} />
              </div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-widest text-white/60">
                {a.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
