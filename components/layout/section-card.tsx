import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function SectionCard({ title, description, children, className }: SectionCardProps) {
  return (
    <section className={cn("glass-panel flex h-full flex-col gap-4 p-6", className)}>
      <header>
        <h2 className="text-lg font-semibold">{title}</h2>
        {description ? <p className="text-sm text-slate-600">{description}</p> : null}
      </header>
      <div className="flex-1">{children}</div>
    </section>
  );
}
