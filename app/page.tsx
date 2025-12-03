import { getDemoHomeData } from "@/lib/data/home";
import { SectionCard } from "@/components/layout/section-card";
import { SpotlightHero } from "@/components/layout/spotlight-hero";
import { BookShelf } from "@/components/layout/book-shelf";
import { QuizHighlights } from "@/components/layout/quiz-highlights";
import { DonateBanner } from "@/components/layout/donate-banner";
import { Suspense } from "react";

export default async function HomePage() {
  const data = await getDemoHomeData();

  return (
    <main className="flex flex-col gap-8 pb-24">
      <SpotlightHero featured={data.featured} />
      <DonateBanner />
      <div className="grid gap-6 lg:grid-cols-3">
        <SectionCard title="For You" description="Curated by our AI concierge">
          <BookShelf books={data.forYou} layout="row" />
        </SectionCard>
        <SectionCard title="Borrowable Gems" description="Available now from the ShareRead library">
          <BookShelf books={data.borrowable} layout="column" />
        </SectionCard>
        <SectionCard title="Writer Spotlights" description="Fresh submissions awaiting your support">
          <BookShelf books={data.writerSpotlight} layout="column" />
        </SectionCard>
      </div>
      <Suspense fallback={null}>
        <QuizHighlights quizzes={data.quizHighlights} />
      </Suspense>
    </main>
  );
}
