import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { FeaturedSpotlight } from "@/types/home";
import { WhyChip } from "@/components/ui/why-chip";

interface SpotlightHeroProps {
  featured: FeaturedSpotlight;
}

export function SpotlightHero({ featured }: SpotlightHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 shadow-glass backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-emerald-400/30" />
      <div className="relative flex flex-col gap-6 p-8 lg:flex-row lg:items-center">
        <div className="lg:w-2/5">
          <WhyChip reason={featured.reason} className="mb-4" />
          <h1 className="text-4xl font-semibold tracking-tight lg:text-5xl">{featured.title}</h1>
          <p className="mt-4 text-lg text-slate-700">{featured.description}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href={`/book/${featured.id}`} className="rounded-full bg-slate-900 px-4 py-2 font-semibold text-white shadow-lg">
              Read sample
            </Link>
            <Link href={`/reader/${featured.id}`} className="rounded-full bg-white/80 px-4 py-2 font-semibold text-slate-900 shadow-md">
              Continue reading
            </Link>
            <Link
              href="https://sharekind-lyart.vercel.app/"
              target="_blank"
              className="rounded-full border border-white/40 px-4 py-2 font-semibold text-slate-900 backdrop-blur"
            >
              Donate via ShareKind
            </Link>
          </div>
        </div>
        <div className="lg:flex-1">
          <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-3xl">
            <Image
              src={featured.cover}
              alt={featured.title}
              fill
              className={cn("object-cover", featured.glassEffect ? "mix-blend-multiply" : undefined)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
