export interface AdminMetric {
  title: string;
  value: string;
  trend: string;
}

export interface AdminBook {
  id: string;
  title: string;
  inventory: number;
}

export interface AdminRole {
  id: string;
  name: string;
  role: string;
  actions: string[];
}

export interface AdminModerationIssue {
  id: string;
  category: string;
  title: string;
  message: string;
  action: string;
  severity: "low" | "medium" | "high";
}

export interface AdminLeaderboardEntry {
  id: string;
  name: string;
  score?: number;
  total?: string;
}

export interface AdminData {
  metrics: AdminMetric[];
  books: AdminBook[];
  roles: AdminRole[];
  moderation: AdminModerationIssue[];
  leaderboard: {
    readers: AdminLeaderboardEntry[];
    donators: AdminLeaderboardEntry[];
  };
}
