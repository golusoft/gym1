"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Dumbbell } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark-900/85 backdrop-blur-xl border-b border-white/5 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="relative">
              <span className="absolute inset-0 blur-md bg-primary/50 rounded-full" />
              <Dumbbell className="relative w-7 h-7 text-primary group-hover:rotate-12 transition-transform" />
            </span>
            <span className="font-display text-2xl md:text-3xl tracking-widest">
              <span className="text-white">GYM</span>
              <span className="text-gradient-red ml-1">FITNESS</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => {
              const active =
                pathname === l.href ||
                (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-colors ${
                    active
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-primary/15 border border-primary/30"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${site.phoneDigits}`}
              className="btn-ghost text-sm"
              aria-label="Call now"
            >
              <Phone className="w-4 h-4" />
              <span>{site.phone}</span>
            </a>
            <Link href="/membership" className="btn-primary !py-2.5 !px-5">
              Join Now
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/5"
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-dark-800 border-l border-white/10 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-display text-2xl tracking-widest">
                  <span className="text-white">GYM</span>
                  <span className="text-gradient-red ml-1">FITNESS</span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/5"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {navLinks.map((l, i) => {
                  const active =
                    pathname === l.href ||
                    (l.href !== "/" && pathname.startsWith(l.href));
                  return (
                    <motion.div
                      key={l.href}
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      <Link
                        href={l.href}
                        className={`block px-4 py-3 rounded-lg font-medium uppercase tracking-wider text-lg transition-colors ${
                          active
                            ? "text-white bg-primary/15 border border-primary/30"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {l.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-auto space-y-3">
                <a
                  href={`tel:${site.phoneDigits}`}
                  className="btn-outline w-full"
                >
                  <Phone className="w-4 h-4" /> {site.phone}
                </a>
                <Link href="/membership" className="btn-primary w-full">
                  Join Now
                </Link>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
