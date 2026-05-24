import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Gallery from "@/components/sections/Gallery";
import Transformations from "@/components/sections/Transformations";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Gallery – Inside Gym Fitness Sheikhpura",
  description:
    "Take a virtual tour of Gym Fitness Sheikhpura. Premium equipment, spacious workout floors, group class studio, and real member transformations.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A glimpse of"
        highlight="the grind."
        description="Premium equipment. Spacious zones. Real members. Real transformations. Welcome inside Gym Fitness."
        image="https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=1920&q=80&auto=format&fit=crop"
        breadcrumb="Gallery"
      />
      <Gallery full />
      <Transformations />
      <CTASection />
    </>
  );
}
