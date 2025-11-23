import Image from "next/image";
import Link from "next/link";
import type { BookSummary } from "@/types/home";
import { cn } from "@/lib/utils";

interface BookShelfProps {
  books: BookSummary[];
  layout?: "row" | "column";
}

export function BookShelf({ books, layout = "column" }: BookShelfProps) {
  return (
    <div className={cn("flex gap-4", layout === "row" ? "overflow-x-auto pb-2" : "flex-col")}
      aria-label="Book shelf"
    >
      {books.map((book) => (
        <Link
          key={book.id}
          href={`/book/${book.id}`}
          className="group relative flex min-w-[180px] flex-col gap-3 rounded-2xl border border-white/30 bg-white/60 p-4 text-sm shadow-md backdrop-blur"
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
            <Image src={book.cover} alt={book.title} fill className="object-cover transition-transform group-hover:scale-105" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">{book.genre}</p>
            <h3 className="font-semibold text-slate-900">{book.title}</h3>
            <p className="text-xs text-slate-600">{book.author}</p>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-600">
            <span>{book.length}</span>
            <span>•</span>
            <span>{book.access}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
