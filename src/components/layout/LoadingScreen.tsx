"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-900"
        >
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute inset-0 bg-red-glow" />

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 blur-2xl bg-primary/40 rounded-full" />
              <div className="relative font-display text-6xl md:text-7xl tracking-widest">
                <span className="text-white">GYM</span>{" "}
                <span className="text-gradient-red">FITNESS</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="mt-6 h-[2px] w-48 md:w-64 bg-gradient-to-r from-transparent via-primary to-transparent"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-xs uppercase tracking-[0.4em] text-white/50"
            >
              Forging Strength...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
