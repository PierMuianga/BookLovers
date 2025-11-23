import type { ReaderData } from "@/types/reader";

const readerData: Record<string, ReaderData> = {
  "journey-of-light": {
    id: "journey-of-light",
    title: "The Journey of Light",
    author: "Amelia Dawes",
    chapters: [
      {
        id: "chapter-1",
        title: "Glow of the Estuary",
        content:
          "The estuary hummed with bioluminescent whispers as the community gathered to map the reef. A soft breeze carried the scent of mangroves, and the tide synchronised with the steady rhythm of their collective hope.",
        progress: "4 of 12 sections",
        estimate: "8 min"
      },
      {
        id: "chapter-2",
        title: "Signals from the Deep",
        content:
          "A sudden bloom of light erupted beneath the surface. The kelp readers tuned their devices, translating the pattern into a plea for restoration.",
        progress: "1 of 12 sections",
        estimate: "12 min"
      }
    ]
  }
};

export async function getReaderExperience(id: string) {
  return readerData[id];
}
