import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Plans from "@/components/sections/Plans";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Membership Plans – Affordable Premium Gym in Sheikhpura",
  description:
    "Transparent pricing for monthly, quarterly, yearly and personal training memberships at Gym Fitness Sheikhpura. Save up to 35% on yearly plans.",
};

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Pricing built for"
        highlight="every champion."
        description="Pick the plan that fits today. Upgrade anytime. Every plan includes full equipment access, AC, locker, and our world-class training environment."
        image="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1920&q=80&auto=format&fit=crop"
        breadcrumb="Membership"
      />
      <Plans />
      <CTASection />
      <FAQ />
      <ContactForm
        title={
          <>
            Ready to <span className="text-gradient-red">commit?</span>
          </>
        }
        description="Drop your details — our membership team will help you pick the perfect plan."
      />
    </>
  );
}
