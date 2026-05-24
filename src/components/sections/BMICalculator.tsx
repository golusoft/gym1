"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Activity } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BMICalculator() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);

  const bmi = useMemo(() => {
    const h = height / 100;
    if (!h || !weight) return 0;
    return +(weight / (h * h)).toFixed(1);
  }, [height, weight]);

  const status = useMemo(() => {
    if (!bmi) return { label: "—", color: "text-white/40", tip: "" };
    if (bmi < 18.5)
      return {
        label: "Underweight",
        color: "text-blue-400",
        tip: "Focus on calorie surplus, strength training, and high-protein meals.",
      };
    if (bmi < 25)
      return {
        label: "Normal",
        color: "text-green-400",
        tip: "Excellent! Maintain with consistent training and balanced nutrition.",
      };
    if (bmi < 30)
      return {
        label: "Overweight",
        color: "text-yellow-400",
        tip: "Combine HIIT, strength training, and a slight calorie deficit for best results.",
      };
    return {
      label: "Obese",
      color: "text-red-400",
      tip: "Start with low-impact cardio, progressive strength, and structured nutrition coaching.",
    };
  }, [bmi]);

  const percent = Math.min(100, Math.max(0, ((bmi - 10) / 30) * 100));

  return (
    <section className="section-padding relative overflow-hidden bg-dark-800">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="container-custom relative">
        <SectionHeading
          eyebrow="BMI Calculator"
          title={
            <>
              Know your <span className="text-gradient-red">numbers.</span>
            </>
          }
          description="Your Body Mass Index is a quick first read on your fitness — but the real plan begins with our trainers."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 max-w-5xl mx-auto glass-dark rounded-3xl p-7 md:p-10 grid md:grid-cols-2 gap-10"
        >
          <div>
            <div className="space-y-7">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm uppercase tracking-widest text-white/70">
                    Height
                  </label>
                  <span className="font-display text-xl text-primary">
                    {height} cm
                  </span>
                </div>
                <input
                  type="range"
                  min={120}
                  max={220}
                  value={height}
                  onChange={(e) => setHeight(+e.target.value)}
                  className="w-full accent-primary"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm uppercase tracking-widest text-white/70">
                    Weight
                  </label>
                  <span className="font-display text-xl text-primary">
                    {weight} kg
                  </span>
                </div>
                <input
                  type="range"
                  min={30}
                  max={180}
                  value={weight}
                  onChange={(e) => setWeight(+e.target.value)}
                  className="w-full accent-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="glass rounded-xl p-3 text-center">
                  <div className="text-xs uppercase tracking-widest text-white/50">
                    Height
                  </div>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(+e.target.value || 0)}
                    className="w-full bg-transparent text-center font-display text-2xl mt-1 focus:outline-none"
                  />
                </div>
                <div className="glass rounded-xl p-3 text-center">
                  <div className="text-xs uppercase tracking-widest text-white/50">
                    Weight
                  </div>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(+e.target.value || 0)}
                    className="w-full bg-transparent text-center font-display text-2xl mt-1 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative w-40 h-40 mb-5">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-xl" />
              <div className="relative w-full h-full rounded-full glass flex items-center justify-center border-2 border-primary/40">
                <div>
                  <Activity className="w-5 h-5 text-primary mx-auto mb-1" />
                  <div className="font-display text-5xl text-shadow-red">
                    {bmi || "0"}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-white/50">
                    Your BMI
                  </div>
                </div>
              </div>
            </div>

            <div className={`font-display text-2xl tracking-widest ${status.color}`}>
              {status.label}
            </div>

            <div className="w-full mt-5 h-2 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-400 via-green-400 via-yellow-400 to-red-400" />
            </div>
            <div
              className="relative w-full h-1"
              style={{ marginTop: -6 }}
            >
              <motion.div
                animate={{ left: `${percent}%` }}
                transition={{ type: "spring", stiffness: 120 }}
                className="absolute -top-1 w-4 h-4 rounded-full bg-white border-2 border-primary shadow-neon-soft"
                style={{ transform: "translateX(-50%)" }}
              />
            </div>
            <div className="grid grid-cols-4 gap-1 w-full mt-4 text-[10px] uppercase tracking-widest text-white/40">
              <span>Under</span>
              <span>Normal</span>
              <span>Over</span>
              <span>Obese</span>
            </div>

            {status.tip && (
              <p className="text-sm text-white/70 mt-5 leading-relaxed max-w-sm">
                {status.tip}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
