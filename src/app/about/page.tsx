import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Award, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Counter from "@/components/ui/Counter";
import CTASection from "@/components/sections/CTASection";
import { achievements, facilities } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us – Best Gym in Sheikhpura, Bihar",
  description:
    "The story of Gym Fitness — Sheikhpura's most premium fitness center. Our mission, vision, world-class facilities and 9+ years of forging champions.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our story is"
        highlight="written in sweat."
        description="Born in Sheikhpura. Built for Bihar. Gym Fitness is more than four walls and a few machines — it's a movement of people who refused to be average."
        image="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1920&q=80&auto=format&fit=crop"
        breadcrumb="About"
      />

      {/* Story */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-glass">
            <Image
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80&auto=format&fit=crop"
              alt="Gym story"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute -bottom-1 inset-x-0 h-1/3 bg-gradient-to-t from-dark-900 to-transparent" />
            <div className="absolute bottom-5 left-5 glass-dark rounded-2xl px-5 py-4">
              <div className="font-display text-2xl">Est. 2017</div>
              <div className="text-xs uppercase tracking-widest text-white/60">
                Sheikhpura, Bihar
              </div>
            </div>
          </div>

          <div>
            <div className="eyebrow mb-3">
              <span className="inline-block w-8 h-px bg-primary" />
              Our Story
            </div>
            <h2 className="section-title">
              From a small <span className="text-gradient-red">dream</span> to
              Bihar&apos;s favorite gym.
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed">
              Gym Fitness was started by local fitness enthusiasts who were
              tired of low-quality gyms with rusted equipment, overcrowded
              floors, and zero accountability. We promised ourselves: if we
              ever opened a gym, it would feel like the international
              chains — but priced for Sheikhpura.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              Nine years later, we&apos;ve transformed thousands of lives.
              Members lose 20+ kgs. Athletes break personal records. Mothers
              reclaim their bodies. Students gain confidence. And every single
              day, our community grows.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              We aren&apos;t the cheapest. We aren&apos;t the trendiest. But
              we are the most committed to your transformation. That&apos;s
              the Gym Fitness promise.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding relative overflow-hidden bg-dark-800">
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="container-custom relative">
          <SectionHeading
            eyebrow="Mission · Vision"
            title={
              <>
                What we <span className="text-gradient-red">stand for.</span>
              </>
            }
          />

          <div className="mt-14 grid md:grid-cols-2 gap-5">
            <div className="glass-dark rounded-3xl p-8 hover:border-primary/40 transition">
              <Target className="w-10 h-10 text-primary mb-5" />
              <h3 className="font-display text-3xl uppercase tracking-wider mb-3">
                Mission
              </h3>
              <p className="text-white/70 leading-relaxed">
                To make world-class fitness accessible, hygienic and
                results-driven for every person in Sheikhpura — from a
                first-time learner to a competitive athlete. We coach with
                science, train with passion, and refuse to let anyone leave
                without progress.
              </p>
            </div>

            <div className="glass-dark rounded-3xl p-8 hover:border-primary/40 transition">
              <Eye className="w-10 h-10 text-primary mb-5" />
              <h3 className="font-display text-3xl uppercase tracking-wider mb-3">
                Vision
              </h3>
              <p className="text-white/70 leading-relaxed">
                To be Bihar&apos;s most loved fitness brand by 2030 —
                synonymous with quality, integrity and unmatched member
                experience. To build a generation of strong, healthy, confident
                Indians, one rep at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative">
          <SectionHeading
            eyebrow="Achievements"
            title={
              <>
                Numbers that <span className="text-gradient-red">speak.</span>
              </>
            }
          />

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {achievements.map((a) => (
              <div
                key={a.label}
                className="glass-dark rounded-2xl p-7 text-center hover:border-primary/40 transition"
              >
                <Award className="w-7 h-7 text-primary mx-auto mb-3" />
                <div className="font-display text-4xl md:text-5xl text-gradient-red text-shadow-red">
                  <Counter to={a.number} suffix={a.suffix} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-white/60">
                  {a.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding relative overflow-hidden bg-dark-800">
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="container-custom relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow mb-3">
              <span className="inline-block w-8 h-px bg-primary" />
              Facilities
            </div>
            <h2 className="section-title">
              Everything you need.{" "}
              <span className="text-gradient-red">Nothing you don&apos;t.</span>
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed">
              Twelve thousand square feet of focused fitness — designed by
              athletes, for athletes. From cardio to powerlifting, recovery to
              group classes, we have a dedicated zone for every goal.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {facilities.map((f) => (
                <div key={f} className="flex items-start gap-2 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
                alt="Equipment"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-8">
              <Image
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80"
                alt="Workout"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80"
                alt="Free weights"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-8">
              <Image
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80"
                alt="Dumbbells"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
