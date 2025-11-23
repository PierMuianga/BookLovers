import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBookDetail } from "@/lib/data/books";
import { WhyChip } from "@/components/ui/why-chip";
import { BookDetailSections } from "@/components/layout/book-sections";

interface BookPageProps {
  params: { id: string };
}

export default async function BookPage({ params }: BookPageProps) {
  const book = await getBookDetail(params.id);
  if (!book) {
    notFound();
  }

  return (
    <article className="glass-panel grid gap-8 p-6 lg:grid-cols-[320px,1fr]">
      <div className="space-y-4">
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/30 bg-white/50">
          <Image src={book.cover} alt={book.title} fill className="object-cover" />
        </div>
        <div className="rounded-2xl border border-white/40 bg-white/70 p-4 text-sm">
          <WhyChip reason={book.why} />
          <p className="mt-2 text-slate-600">Submitted by {book.submittedBy}</p>
          <p className="mt-3 text-slate-700">Inventory: {book.availability.inventory}</p>
        </div>
      </div>
      <div className="space-y-6">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold text-slate-900">{book.title}</h1>
          <p className="text-sm uppercase tracking-wide text-slate-500">{book.author}</p>
          <p className="text-slate-600">{book.description}</p>
          <div className="flex flex-wrap gap-2 text-xs">
            {book.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/70 px-3 py-1 text-slate-600">
                {tag}
              </span>
            ))}
          </div>
        </header>
        <div className="flex flex-wrap gap-3 text-sm">
          {book.availability.canBorrow ? (
            <Link href={`/reader/${book.id}`} className="rounded-full bg-slate-900 px-4 py-2 font-semibold text-white shadow">
              Borrow & read
            </Link>
          ) : null}
          {book.availability.canBuy ? (
            <button className="rounded-full bg-white px-4 py-2 font-semibold text-slate-900 shadow">
              Buy for ${book.price.toFixed(2)}
            </button>
          ) : null}
          <Link href={`/reader/${book.id}`} className="rounded-full border border-white/40 px-4 py-2 font-semibold text-slate-900 backdrop-blur">
            Read sample
          </Link>
        </div>
        <BookDetailSections sections={book.sections} />
      </div>
    </article>
  );
}
