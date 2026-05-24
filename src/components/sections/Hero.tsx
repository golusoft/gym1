"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Star } from "lucide-react";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85&auto=format&fit=crop"
        alt="Gym Fitness premium gym in Sheikhpura"
        fill
        priority
        sizes="100vw"
        className="object-cover scale-105"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-dark-900/80" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-red-glow opacity-70" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-red-glow opacity-50" />

      <div className="container-custom relative z-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-6"
          >
            <span className="inline-block w-8 h-px bg-primary" />
            #1 Premium Gym in Sheikhpura, Bihar
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.95] tracking-wider uppercase text-shadow-red"
          >
            Forge Your <span className="text-gradient-red">Body.</span>
            <br />
            Forge Your <span className="text-gradient-red">Mind.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-base md:text-lg text-white/75 max-w-2xl leading-relaxed"
          >
            World-class equipment. Internationally certified coaches. A
            community that pushes you forward. Your transformation starts the
            moment you walk through our doors at{" "}
            <span className="text-white">Chandani Chowk, Sheikhpura</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="/membership" className="btn-primary">
              Join Now <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${site.phoneDigits}`}
              className="btn-outline group"
            >
              <Phone className="w-4 h-4 group-hover:rotate-12 transition" />
              Call Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-6 md:gap-10"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&q=80",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-dark-900 overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt="Member"
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="text-white font-semibold">5,000+ members</div>
                <div className="text-white/50">have transformed here</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="text-sm">
                <span className="text-white font-semibold">
                  {site.rating}/5
                </span>{" "}
                <span className="text-white/50">
                  · {site.reviews} Google reviews
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating glass card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:col-span-4 hidden lg:block"
        >
          <div className="glass-dark rounded-3xl p-6 shadow-glass">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-green-400">
                Open Now · {site.hours}
              </span>
            </div>
            <h3 className="font-display text-2xl tracking-wider mb-1">
              Free Trial Day
            </h3>
            <p className="text-white/60 text-sm mb-5">
              Walk in. Train free. Decide later.
            </p>

            <ul className="space-y-3 text-sm">
              {[
                "1 free workout session",
                "Body composition analysis",
                "Trainer consultation",
                "Tour of the entire facility",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-white/80">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" /> {t}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="btn-primary w-full mt-6 !py-3 text-xs"
            >
              Book Free Trial <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40 text-xs uppercase tracking-widest"
      >
        Scroll
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
