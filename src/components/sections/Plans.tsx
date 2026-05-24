"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { plans, site } from "@/lib/site";

export default function Plans() {
  return (
    <section className="section-padding relative overflow-hidden bg-dark-800">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-glow opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-glow opacity-30" />

      <div className="container-custom relative">
        <SectionHeading
          eyebrow="Membership Plans"
          title={
            <>
              Pricing built for <span className="text-gradient-red">every</span>{" "}
              champion.
            </>
          }
          description="Transparent pricing. No hidden fees. Cancel anytime. Pick the plan that fits your goal — upgrade whenever you're ready."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => {
            const featured = plan.badge === "Most Popular";
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative rounded-3xl p-7 flex flex-col ${
                  featured
                    ? "bg-gradient-to-b from-primary/20 via-dark-700 to-dark-700 border-2 border-primary shadow-neon-red lg:-translate-y-3 lg:scale-[1.03]"
                    : "glass hover:border-primary/40 transition"
                }`}
              >
                {plan.badge && (
                  <div
                    className={`absolute -top-3 right-5 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      featured
                        ? "bg-primary text-white animate-pulse-glow"
                        : "bg-white/10 text-white border border-white/20"
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                <h3 className="font-display text-2xl uppercase tracking-widest text-white">
                  {plan.name}
                </h3>
                <p className="text-white/60 text-sm mt-1 mb-6 min-h-[40px]">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1.5 mb-6">
                  <span className="text-3xl text-white/60">₹</span>
                  <span className="font-display text-5xl text-white text-shadow-red">
                    {plan.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-white/50 text-sm">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-white/80"
                    >
                      <span
                        className={`mt-0.5 w-5 h-5 shrink-0 rounded-full flex items-center justify-center ${
                          featured ? "bg-primary" : "bg-white/10"
                        }`}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`https://wa.me/${site.whatsapp}?text=Hi! I'd like to join the ${plan.name} plan at Gym Fitness.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    featured
                      ? "btn-primary w-full justify-center"
                      : "btn-outline w-full justify-center"
                  }
                >
                  <Zap className="w-4 h-4" /> {plan.cta}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-white/50 text-sm mt-10">
          All plans include access to all equipment, locker, drinking water,
          AC, and free Wi-Fi. GST included.
        </p>
      </div>
    </section>
  );
}
