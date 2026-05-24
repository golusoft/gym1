import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import MapSection from "@/components/sections/MapSection";

export const metadata: Metadata = {
  title: "Contact Us – Gym Fitness Sheikhpura",
  description:
    "Visit, call or WhatsApp Gym Fitness — Chandani Chowk, VIP Rd, Sheikhpura, Bihar. Open daily 5 AM – 10 PM. Book your free trial today.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk"
        highlight="fitness."
        description="Walk in, call, WhatsApp, or fill out the form below. Our team responds within an hour during gym hours."
        image="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=1920&q=80&auto=format&fit=crop"
        breadcrumb="Contact"
      />
      <ContactForm variant="page" />
      <MapSection />
    </>
  );
}
