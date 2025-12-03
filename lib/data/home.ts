import type { FeaturedSpotlight, BookSummary, QuizHighlight } from "@/types/home";
import { demoBooks } from "@/lib/data/library";

const featured: FeaturedSpotlight = {
  id: "journey-of-light",
  title: "The Journey of Light",
  description: "An uplifting eco-fiction adventure remastered for immersive reading with ambient soundscapes and TTS.",
  cover: "https://images.unsplash.com/photo-1455885666463-1defae04019d",
  reason: "Matches your eco-adventure preference and is trending among top readers",
  glassEffect: true
};

const forYou: BookSummary[] = [
  {
    id: "journey-of-light",
    title: "The Journey of Light",
    author: "Amelia Dawes",
    cover: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6",
    length: "12 chapters",
    access: "Borrow",
    genre: "Eco-Fiction"
  },
  {
    id: "sonnets-of-moonlight",
    title: "Sonnets of Moonlight",
    author: "Various",
    cover: "https://images.unsplash.com/photo-1460472178825-e5240623afd5",
    length: "245 pages",
    access: "Public domain",
    genre: "Poetry"
  },
  {
    id: "timekeepers",
    title: "The Timekeepers",
    author: "N. A. Johnson",
    cover: "https://images.unsplash.com/photo-1462206092226-f46025ffe607",
    length: "420 pages",
    access: "Premium",
    genre: "Sci-Fi"
  }
];

const borrowable: BookSummary[] = demoBooks.borrowed.map((item) => ({
  id: item.id,
  title: item.title,
  author: item.subtitle,
  cover: item.cover,
  length: item.progress ?? "Due soon",
  access: item.due ?? "Borrowed",
  genre: "Borrow"
}));

const writerSpotlight: BookSummary[] = [
  {
    id: "salt-air",
    title: "Salt Air Chronicles",
    author: "Kai Njeri",
    cover: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
    length: "10 chapters",
    access: "Submission",
    genre: "Travel"
  },
  {
    id: "metaverse-memoirs",
    title: "Metaverse Memoirs",
    author: "Liu Wen",
    cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    length: "85 pages",
    access: "Beta",
    genre: "Tech"
  }
];

const quizHighlights: QuizHighlight[] = [
  {
    id: "quiz-journey",
    bookTitle: "The Journey of Light",
    chapter: 4,
    prompt: "Explore the ecological puzzle introduced by the river spirits.",
    tags: ["Ecology", "Mythos", "Comprehension"]
  },
  {
    id: "quiz-sonnet",
    bookTitle: "Sonnets of Moonlight",
    chapter: 2,
    prompt: "Match the stanza to its thematic symbolism.",
    tags: ["Poetry", "Symbolism"]
  }
];

export async function getDemoHomeData() {
  return {
    featured,
    forYou,
    borrowable,
    writerSpotlight,
    quizHighlights
  };
}
