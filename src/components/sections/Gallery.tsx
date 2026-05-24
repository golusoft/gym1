"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { galleryImages } from "@/lib/site";

interface Props {
  full?: boolean;
}

export default function Gallery({ full = false }: Props) {
  const [active, setActive] = useState<number | null>(null);
  const items = full ? galleryImages : galleryImages.slice(0, 8);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom relative">
        {!full && (
          <SectionHeading
            eyebrow="Gallery"
            title={
              <>
                Inside <span className="text-gradient-red">Gym Fitness.</span>
              </>
            }
            description="Premium equipment, spacious floors, and a community of champions in motion."
          />
        )}

        <div
          className={`${full ? "" : "mt-14"} grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4`}
        >
          {items.map((img, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative rounded-xl overflow-hidden ${
                i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition">
                <div className="text-xs text-primary uppercase tracking-widest">
                  {img.category}
                </div>
                <div className="text-sm text-white">{img.alt}</div>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-primary/40 rounded-xl transition" />
            </motion.button>
          ))}
        </div>

        {!full && (
          <div className="mt-10 text-center">
            <Link href="/gallery" className="btn-outline">
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {active !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-5 right-5 w-12 h-12 rounded-full glass flex items-center justify-center hover:border-primary"
              >
                <X className="w-5 h-5" />
              </button>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden"
              >
                <Image
                  src={items[active].src}
                  alt={items[active].alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
