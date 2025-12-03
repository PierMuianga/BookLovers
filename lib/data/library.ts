import type { LibraryData } from "@/types/library";

export const demoBooks: LibraryData = {
  purchased: [
    {
      id: "journey-of-light",
      title: "The Journey of Light",
      subtitle: "Amelia Dawes",
      progress: "Completed 45%",
      notes: "Chapter 5 unlocked premium quiz",
      cover: "https://images.unsplash.com/photo-1462206092226-f46025ffe607"
    },
    {
      id: "atlas-of-dreams",
      title: "Atlas of Dreams",
      subtitle: "Isabella Martínez",
      progress: "Completed",
      notes: "Export highlights available",
      cover: "https://images.unsplash.com/photo-1455885666463-1defae04019d"
    }
  ],
  borrowed: [
    {
      id: "public-garden",
      title: "The Public Garden",
      subtitle: "E. Wharton",
      due: "Jul 12",
      cover: "https://images.unsplash.com/photo-1507842217343-583bb7270b66"
    },
    {
      id: "eco-cities",
      title: "Designing Eco Cities",
      subtitle: "Tyler Shaw",
      due: "Aug 02",
      cover: "https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7"
    }
  ],
  inProgress: [
    {
      id: "moonlight-sonnet",
      title: "Moonlight Sonnet",
      subtitle: "Public Domain",
      progress: "Chapter 3 of 12",
      notes: "Offline mode active",
      cover: "https://images.unsplash.com/photo-1460472178825-e5240623afd5"
    }
  ],
  completed: [
    {
      id: "wayfarers",
      title: "Wayfarers of Dawn",
      subtitle: "Nia Okafor",
      progress: "Completed",
      notes: "Shared with 4 friends",
      cover: "https://images.unsplash.com/photo-1524578271613-d550eacf6090"
    }
  ],
  highlights: [
    {
      id: "highlight-1",
      title: "Atlas of Dreams",
      subtitle: "\"We only keep what we share.\"",
      notes: "Saved to premium notebook",
      cover: "https://images.unsplash.com/photo-1529307474719-3d0bbbe2a6da"
    }
  ]
};

export async function getDemoLibrary() {
  return demoBooks;
}
