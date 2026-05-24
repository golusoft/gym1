"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export default function MapSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom relative">
        <SectionHeading
          eyebrow="Visit Us"
          title={
            <>
              Find us in <span className="text-gradient-red">Sheikhpura.</span>
            </>
          }
          description="Right at Chandani Chowk on VIP Road, near Lazeez Junglee Rasoi. Easy parking, easy access."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-14 grid lg:grid-cols-3 gap-5"
        >
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden glass border-white/10 h-[420px]">
            <iframe
              src={site.mapEmbed}
              className="w-full h-full grayscale-[0.4] contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gym Fitness location"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/20 rounded-3xl" />
          </div>

          <div className="space-y-4">
            <div className="glass-dark rounded-2xl p-6">
              <MapPin className="w-6 h-6 text-primary mb-3" />
              <div className="text-xs uppercase tracking-widest text-white/50 mb-1">
                Address
              </div>
              <p className="text-white leading-relaxed">{site.address}</p>
              <a
                href={site.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-primary hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>

            <div className="glass-dark rounded-2xl p-6">
              <Clock className="w-6 h-6 text-primary mb-3" />
              <div className="text-xs uppercase tracking-widest text-white/50 mb-1">
                Timing
              </div>
              <p className="text-white">{site.hours}</p>
              <div className="mt-2 inline-flex items-center gap-2 text-xs text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open Now
              </div>
            </div>

            <div className="glass-dark rounded-2xl p-6">
              <Phone className="w-6 h-6 text-primary mb-3" />
              <div className="text-xs uppercase tracking-widest text-white/50 mb-1">
                Call Us
              </div>
              <a
                href={`tel:${site.phoneDigits}`}
                className="text-white hover:text-primary"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
