import Link from "next/link";
import { Dumbbell, Mail, MapPin, Phone, Clock } from "lucide-react";
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { navLinks, site } from "@/lib/site";
import NewsletterForm from "@/components/layout/NewsletterForm";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-glow opacity-60 pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="container-custom relative py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-5">
              <Dumbbell className="w-7 h-7 text-primary" />
              <span className="font-display text-2xl tracking-widest">
                <span className="text-white">GYM</span>
                <span className="text-gradient-red ml-1">FITNESS</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              The most premium fitness center in Sheikhpura, Bihar. World-class
              equipment, certified trainers, and a community that pushes you
              forward.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:border-primary transition"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:border-primary transition"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href={site.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:border-primary transition"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:border-primary transition"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-widest text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/60 hover:text-primary text-sm transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-widest text-white mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a
                  href={`tel:${site.phoneDigits}`}
                  className="hover:text-primary"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-primary"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-widest text-white mb-5">
              Newsletter
            </h4>
            <p className="text-white/60 text-sm mb-4">
              Get fitness tips, member discounts, and event invites in your
              inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Crafted for champions in <span className="text-primary">Sheikhpura, Bihar</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
