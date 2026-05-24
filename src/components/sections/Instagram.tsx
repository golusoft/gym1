"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import { site, galleryImages } from "@/lib/site";

export default function Instagram() {
  const posts = galleryImages.slice(0, 6);
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom relative">
        <SectionHeading
          eyebrow="@gymfitness.sheikhpura"
          title={
            <>
              Follow our <span className="text-gradient-red">grind</span> on Instagram.
            </>
          }
          description="Daily workouts, transformation reveals, member stories and motivation that hits."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {posts.map((p, i) => (
            <motion.a
              key={i}
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 50vw, 16vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition flex items-center justify-center">
                <FaInstagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FaInstagram className="w-4 h-4" /> Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
