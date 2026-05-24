import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-red-glow opacity-50" />

      <div className="container-custom relative text-center">
        <Dumbbell className="w-14 h-14 text-primary mx-auto mb-6" />
        <div className="font-display text-[10rem] md:text-[16rem] leading-none text-gradient-red text-shadow-red">
          404
        </div>
        <h1 className="font-display text-3xl md:text-5xl tracking-widest uppercase mt-2">
          Rep counted wrong.
        </h1>
        <p className="text-white/60 mt-4 max-w-lg mx-auto">
          The page you&apos;re looking for took a rest day. Let&apos;s get you
          back to training.
        </p>
        <Link href="/" className="btn-primary mt-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </section>
  );
}
