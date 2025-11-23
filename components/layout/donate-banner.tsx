import Link from "next/link";
import { HeartHandshake } from "lucide-react";

export function DonateBanner() {
  return (
    <div className="glass-panel flex flex-col items-center justify-between gap-4 p-6 text-center md:flex-row md:text-left">
      <div>
        <p className="flex items-center justify-center gap-2 text-sm uppercase tracking-wide text-emerald-600 md:justify-start">
          <HeartHandshake className="h-4 w-4" />
          ShareKind Integration
        </p>
        <h2 className="text-2xl font-semibold text-slate-900">Support community libraries across the globe</h2>
        <p className="text-sm text-slate-600">
          Every donation funnels through ShareKind and unlocks new books, inclusive translations, and audio accessibility features.
        </p>
      </div>
      <Link
        href="https://sharekind-lyart.vercel.app/"
        target="_blank"
        className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hocus:scale-[1.03]"
      >
        Donate on ShareKind
      </Link>
    </div>
  );
}
