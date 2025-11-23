import type { WriterHubData } from "@/types/writers";

const data: WriterHubData = {
  requests: [
    { id: "req-1", name: "Lola Amina", reason: "Poetry chapbook for teens" },
    { id: "req-2", name: "Mateo Ruiz", reason: "Graphic novel pilot" }
  ],
  drafts: [
    { id: "draft-1", title: "Salt Air Chronicles", genre: "Travel memoir", status: "Synced 2 hours ago" },
    { id: "draft-2", title: "Metaverse Memoirs", genre: "Sci-Fi", status: "Awaiting cover art" }
  ],
  aiFeedback: [
    {
      id: "mod-1",
      title: "Missing accessibility descriptions",
      message: "Chapters 3-5 contain images without alt text. Add descriptions for screen-reader compatibility.",
      severity: "High"
    },
    {
      id: "mod-2",
      title: "Pace adjustment",
      message: "Chapter 2 opening paragraph exceeds recommended reading length. Consider splitting into two scenes.",
      severity: "Medium"
    }
  ],
  submissions: [
    {
      id: "sub-1",
      title: "Salt Air Chronicles",
      summary: "A Kenyan marine biologist documents coastal resilience.",
      status: "Pending review",
      submitted: "3 days ago"
    },
    {
      id: "sub-2",
      title: "Metaverse Memoirs",
      summary: "Interviews with avatars navigating multi-world citizenship.",
      status: "Needs changes",
      submitted: "1 day ago"
    },
    {
      id: "sub-3",
      title: "Quantum Gardeners",
      summary: "A collaborative anthology from our community writers program.",
      status: "Approved",
      submitted: "6 hours ago"
    }
  ]
};

export async function getWriterHubData() {
  return data;
}
