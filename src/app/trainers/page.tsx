import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Trainers from "@/components/sections/Trainers";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Trainers – Certified Fitness Coaches in Sheikhpura",
  description:
    "Meet the certified expert trainers at Gym Fitness Sheikhpura. Personal training, strength coaching, yoga, HIIT, bodybuilding and nutrition specialists.",
};

export default function TrainersPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Trainers"
        title="The team that"
        highlight="rewrites your physique."
        description="Internationally certified coaches with combined 30+ years of experience. Each trainer specializes in a domain — and obsesses over your results."
        image="https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=1920&q=80&auto=format&fit=crop"
        breadcrumb="Trainers"
      />
      <Trainers full />
      <CTASection />
    </>
  );
}
