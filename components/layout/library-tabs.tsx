"use client";

import { useState } from "react";
import type { LibraryData } from "@/types/library";
import { cn } from "@/lib/utils";

const tabs = [
  { key: "purchased", label: "Purchased" },
  { key: "borrowed", label: "Borrowed" },
  { key: "inProgress", label: "In-progress" },
  { key: "completed", label: "Completed" },
  { key: "highlights", label: "Highlights" }
] as const;

type TabKey = (typeof tabs)[number]["key"];

export function LibraryTabs({ data }: { data: LibraryData }) {
  const [activeTab, setActiveTab] = useState<TabKey>("purchased");

  return (
    <div className="glass-panel flex flex-col gap-6 p-6">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeTab === tab.key ? "bg-slate-900 text-white shadow" : "bg-white/70 text-slate-600 hover:bg-white"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data[activeTab].map((item) => (
          <article key={item.id} className="rounded-2xl border border-white/50 bg-white/70 p-4 shadow-sm">
            <h3 className="font-semibold text-slate-900">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.subtitle}</p>
            {"due" in item && item.due ? (
              <p className="mt-2 text-xs font-semibold text-amber-600">Due {item.due}</p>
            ) : null}
            {"progress" in item && item.progress ? (
              <p className="mt-2 text-xs text-emerald-600">Progress: {item.progress}</p>
            ) : null}
            {"notes" in item && item.notes ? <p className="mt-2 text-xs text-slate-500">{item.notes}</p> : null}
          </article>
        ))}
      </div>
    </div>
  );
}
