import { AdminData } from "@/types/admin";
import { SectionCard } from "@/components/layout/section-card";
import { cn } from "@/lib/utils";

export function AdminDashboard({ data }: { data: AdminData }) {
  return (
    <div className="space-y-6">
      <header className="glass-panel flex flex-col gap-3 p-6">
        <h1 className="text-3xl font-semibold text-slate-900">Admin Control Center</h1>
        <p className="text-sm text-slate-600">
          Manage catalog, monitor AI moderation reports, elevate community members, and celebrate top donors.
        </p>
        <div className="grid gap-3 text-sm md:grid-cols-4">
          {data.metrics.map((metric) => (
            <div key={metric.title} className="rounded-2xl border border-white/40 bg-white/60 p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-slate-500">{metric.title}</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{metric.value}</p>
              <p className="text-xs text-emerald-600">{metric.trend}</p>
            </div>
          ))}
        </div>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Book Inventory" description="Quick actions for managing availability">
          <ul className="space-y-3 text-sm">
            {data.books.map((book) => (
              <li key={book.id} className="flex items-center justify-between rounded-2xl border border-white/40 bg-white/60 p-4">
                <div>
                  <p className="font-semibold text-slate-900">{book.title}</p>
                  <p className="text-xs text-slate-600">Inventory: {book.inventory}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="rounded-full bg-white px-3 py-1 text-xs text-slate-600">Edit</button>
                  <button className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">Publish</button>
                </div>
              </li>
            ))}
          </ul>
        </SectionCard>
        <SectionCard title="Role Management" description="Elevate readers into writers or admins">
          <ul className="space-y-3 text-sm">
            {data.roles.map((role) => (
              <li key={role.id} className="flex items-center justify-between rounded-2xl border border-white/40 bg-white/60 p-4">
                <div>
                  <p className="font-semibold text-slate-900">{role.name}</p>
                  <p className="text-xs text-slate-600">Current role: {role.role}</p>
                </div>
                <div className="flex items-center gap-2">
                  {role.actions.map((action) => (
                    <button key={action} className="rounded-full bg-white px-3 py-1 text-xs text-slate-600">
                      {action}
                    </button>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>
      <SectionCard title="AI Moderator Issues" description="Flagged content requiring attention">
        <div className="grid gap-3 text-sm md:grid-cols-2">
          {data.moderation.map((issue) => (
            <div key={issue.id} className={cn("rounded-2xl border p-4", issue.severity === "high" ? "border-red-300 bg-red-50/80" : "border-white/40 bg-white/70")}
            >
              <p className="text-xs uppercase tracking-wide text-slate-500">{issue.category}</p>
              <p className="mt-1 font-semibold text-slate-900">{issue.title}</p>
              <p className="mt-2 text-slate-600">{issue.message}</p>
              <p className="mt-2 text-xs text-emerald-600">Suggested action: {issue.action}</p>
            </div>
          ))}
        </div>
      </SectionCard>
      <SectionCard title="Leaderboard" description="Top Readers & Donators">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase text-slate-500">Top Readers</h3>
            <ul className="mt-3 space-y-3 text-sm">
              {data.leaderboard.readers.map((reader, index) => (
                <li key={reader.id} className="flex items-center justify-between rounded-2xl bg-white/60 px-4 py-3">
                  <span>
                    <span className="mr-2 text-xs text-slate-500">#{index + 1}</span>
                    {reader.name}
                  </span>
                  <span className="font-semibold text-slate-900">{reader.score} pts</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase text-slate-500">Top Donators</h3>
            <ul className="mt-3 space-y-3 text-sm">
              {data.leaderboard.donators.map((donator, index) => (
                <li key={donator.id} className="flex items-center justify-between rounded-2xl bg-white/60 px-4 py-3">
                  <span>
                    <span className="mr-2 text-xs text-slate-500">#{index + 1}</span>
                    {donator.name}
                  </span>
                  <span className="font-semibold text-emerald-600">{donator.total}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
