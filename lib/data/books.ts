import type { BookDetail } from "@/types/book";

const books: Record<string, BookDetail> = {
  "journey-of-light": {
    id: "journey-of-light",
    title: "The Journey of Light",
    author: "Amelia Dawes",
    description:
      "Eco-fiction adventure following a coastal community using luminous reefs and AI assistants to restore the ocean.",
    cover: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6",
    tags: ["Eco", "Adventure", "Community"],
    isPublicDomain: false,
    price: 14.99,
    availability: {
      inventory: 42,
      canBorrow: true,
      canBuy: true
    },
    sections: [
      {
        title: "Part I — Tidecallers",
        chapters: [
          { id: "chapter-1", title: "Glow of the Estuary", length: "12 pages" },
          { id: "chapter-2", title: "Signals from the Deep", length: "14 pages" }
        ]
      }
    ],
    why: "You love eco adventures and community-led stories.",
    submittedBy: "kai-njeri"
  }
};

export async function getBookDetail(id: string) {
  return books[id];
}
