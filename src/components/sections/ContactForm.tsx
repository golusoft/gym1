"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { Send, CheckCircle2, Mail, MapPin, Phone, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

interface Props {
  variant?: "section" | "page";
  title?: ReactNode;
  description?: string;
}

export default function ContactForm({
  variant = "section",
  title,
  description,
}: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    plan: "Monthly",
    message: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `New enquiry from Gym Fitness website%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Email:* ${form.email}%0A*Plan:* ${form.plan}%0A*Message:* ${form.message}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", email: "", plan: "Monthly", message: "" });
  };

  return (
    <section
      className={`section-padding relative overflow-hidden ${
        variant === "page" ? "" : "bg-dark-800"
      }`}
    >
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-red-glow opacity-50" />

      <div className="container-custom relative">
        <SectionHeading
          eyebrow="Get In Touch"
          title={
            title ?? (
              <>
                Start your <span className="text-gradient-red">free trial.</span>
              </>
            )
          }
          description={
            description ??
            "Drop your details below and our team will reach out within an hour. Or just walk in — coffee and a tour on us."
          }
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-dark rounded-3xl p-7 md:p-9"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-widest text-white/60">
                  Full Name
                </label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                  className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary transition"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-white/60">
                  Phone
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="+91 9XXXXXXXXX"
                  className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary transition"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-white/60">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@email.com"
                  className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary transition"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-white/60">
                  Interested In
                </label>
                <select
                  name="plan"
                  value={form.plan}
                  onChange={onChange}
                  className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary transition"
                >
                  <option className="bg-dark-800">Free Trial Day</option>
                  <option className="bg-dark-800">Monthly</option>
                  <option className="bg-dark-800">Quarterly</option>
                  <option className="bg-dark-800">Yearly</option>
                  <option className="bg-dark-800">Personal Training</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="text-xs uppercase tracking-widest text-white/60">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={onChange}
                placeholder="Tell us about your fitness goals..."
                className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="btn-primary w-full mt-6"
            >
              {submitted ? (
                <>
                  <CheckCircle2 className="w-4 h-4" /> Sent! We&apos;ll be in touch.
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Enquiry
                </>
              )}
            </button>

            <p className="mt-3 text-center text-xs text-white/40">
              Submitting this form will open WhatsApp pre-filled with your enquiry.
            </p>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass-dark rounded-2xl p-5 hover:border-primary/40 transition"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center">
                <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/50">
                  WhatsApp Now
                </div>
                <div className="text-white font-medium">{site.phone}</div>
              </div>
            </a>

            <a
              href={`tel:${site.phoneDigits}`}
              className="flex items-center gap-4 glass-dark rounded-2xl p-5 hover:border-primary/40 transition"
            >
              <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/50">
                  Call Us
                </div>
                <div className="text-white font-medium">{site.phone}</div>
              </div>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 glass-dark rounded-2xl p-5 hover:border-primary/40 transition"
            >
              <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/50">
                  Email
                </div>
                <div className="text-white font-medium">{site.email}</div>
              </div>
            </a>

            <div className="flex items-center gap-4 glass-dark rounded-2xl p-5">
              <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/50">
                  Address
                </div>
                <div className="text-white text-sm leading-snug">
                  {site.address}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 glass-dark rounded-2xl p-5">
              <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/50">
                  Hours
                </div>
                <div className="text-white text-sm">{site.hours}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
