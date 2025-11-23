import type { AdminData } from "@/types/admin";

const data: AdminData = {
  metrics: [
    { title: "Active Readers", value: "12,481", trend: "+8% vs last week" },
    { title: "Borrowed Today", value: "142", trend: "On track" },
    { title: "Pending Submissions", value: "7", trend: "2 new" },
    { title: "ShareKind Donations", value: "$18,420", trend: "+12%" }
  ],
  books: [
    { id: "journey-of-light", title: "The Journey of Light", inventory: 42 },
    { id: "atlas-of-dreams", title: "Atlas of Dreams", inventory: 16 },
    { id: "quantum-gardeners", title: "Quantum Gardeners", inventory: 80 }
  ],
  roles: [
    { id: "reader-1", name: "Nia Okafor", role: "reader", actions: ["Promote to writer", "Promote to admin"] },
    { id: "writer-2", name: "Kai Njeri", role: "writer", actions: ["Promote to admin", "Revoke writer"] }
  ],
  moderation: [
    {
      id: "issue-1",
      category: "Accessibility",
      title: "Low contrast in chapter artwork",
      message: "Replace Chapter 4 illustration with high-contrast version for readability.",
      action: "Request new artwork",
      severity: "high"
    },
    {
      id: "issue-2",
      category: "Metadata",
      title: "Broken content link",
      message: "Chapter 7 references missing audio asset. Reupload before publish.",
      action: "Notify writer",
      severity: "medium"
    }
  ],
  leaderboard: {
    readers: [
      { id: "reader-1", name: "Amira Chen", score: 980 },
      { id: "reader-2", name: "Liam Patel", score: 940 },
      { id: "reader-3", name: "Sara Bello", score: 930 }
    ],
    donators: [
      { id: "donator-1", name: "ShareKind Circle", total: "$5,200" },
      { id: "donator-2", name: "Library Roots", total: "$3,400" },
      { id: "donator-3", name: "Global Readers", total: "$2,700" }
    ]
  }
};

export async function getAdminDashboard() {
  return data;
}
