import type { BookSection } from "@/types/book";

interface BookDetailSectionsProps {
  sections: BookSection[];
}

export function BookDetailSections({ sections }: BookDetailSectionsProps) {
  return (
    <div className="space-y-4 rounded-3xl border border-white/40 bg-white/70 p-6 text-sm shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Contents</h2>
      <ol className="space-y-3">
        {sections.map((section) => (
          <li key={section.title} className="rounded-2xl border border-white/40 bg-white/70 p-4">
            <p className="text-sm font-semibold text-slate-800">{section.title}</p>
            <ul className="mt-2 space-y-1 text-xs text-slate-600">
              {section.chapters.map((chapter) => (
                <li key={chapter.id} className="flex items-center justify-between">
                  <span>{chapter.title}</span>
                  <span>{chapter.length}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
