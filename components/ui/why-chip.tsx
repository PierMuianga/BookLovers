import { cn } from "@/lib/utils";

interface WhyChipProps {
  reason: string;
  className?: string;
}

export function WhyChip({ reason, className }: WhyChipProps) {
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase text-slate-700", className)}>
      Why this: {reason}
    </span>
  );
}
