import Hero from "@/components/sections/Hero";
import MarqueeBar from "@/components/sections/MarqueeBar";
import Intro from "@/components/sections/Intro";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Programs from "@/components/sections/Programs";
import Plans from "@/components/sections/Plans";
import Transformations from "@/components/sections/Transformations";
import Testimonials from "@/components/sections/Testimonials";
import BMICalculator from "@/components/sections/BMICalculator";
import Gallery from "@/components/sections/Gallery";
import Trainers from "@/components/sections/Trainers";
import DietTips from "@/components/sections/DietTips";
import Instagram from "@/components/sections/Instagram";
import MapSection from "@/components/sections/MapSection";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBar />
      <Intro />
      <WhyChooseUs />
      <Programs />
      <Plans />
      <Transformations />
      <Testimonials />
      <BMICalculator />
      <Gallery />
      <Trainers />
      <DietTips />
      <CTASection />
      <Instagram />
      <MapSection />
      <FAQ />
      <ContactForm />
    </>
  );
}
