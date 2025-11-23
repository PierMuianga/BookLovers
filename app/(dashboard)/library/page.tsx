import { LibraryTabs } from "@/components/layout/library-tabs";
import { getDemoLibrary } from "@/lib/data/library";

export default async function LibraryPage() {
  const data = await getDemoLibrary();
  return (
    <div className="space-y-8">
      <header className="glass-panel p-6">
        <h1 className="text-3xl font-semibold">My Library</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Pick up where you left off, manage due dates, and revisit your highlights even when you are offline.
        </p>
      </header>
      <LibraryTabs data={data} />
    </div>
  );
}
