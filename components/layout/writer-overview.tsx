import { PenSquare, ShieldCheck, Upload } from "lucide-react";
import type { WriterHubData } from "@/types/writers";
import { SectionCard } from "@/components/layout/section-card";

export function WriterOverview({ data }: { data: WriterHubData }) {
  return (
    <div className="space-y-6">
      <section className="glass-panel grid gap-6 p-6 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Writers Hub</h1>
          <p className="mt-2 text-slate-600">
            Submit manuscripts, track editorial feedback, and collaborate with ShareRead's AI assistant to polish every chapter.
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex items-center gap-2"><PenSquare className="h-4 w-4" /> Draft with offline-safe autosave</li>
            <li className="flex items-center gap-2"><Upload className="h-4 w-4" /> Upload chapters & supporting media</li>
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Get AI moderation before admin review</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-white/40 bg-white/70 p-4 text-sm shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Access Requests</h2>
          <p className="mt-2 text-slate-600">Guests can request writing privileges. Admin approval required.</p>
          <div className="mt-4 space-y-3">
            {data.requests.map((request) => (
              <div key={request.id} className="flex items-center justify-between rounded-2xl bg-white/60 px-4 py-3">
                <div>
                  <p className="font-medium text-slate-900">{request.name}</p>
                  <p className="text-xs text-slate-600">{request.reason}</p>
                </div>
                <button className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold text-white shadow">Approve</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Drafts" description="Autosaved locally with sync on connect">
          <div className="space-y-4">
            {data.drafts.map((draft) => (
              <article key={draft.id} className="rounded-2xl border border-white/40 bg-white/60 p-4 text-sm shadow-sm">
                <h3 className="font-semibold text-slate-900">{draft.title}</h3>
                <p className="text-xs uppercase text-slate-500">{draft.genre}</p>
                <p className="mt-2 text-slate-600">{draft.status}</p>
              </article>
            ))}
          </div>
        </SectionCard>
        <SectionCard title="AI Feedback" description="Moderator notes & recommended fixes">
          <ul className="space-y-3 text-sm text-slate-600">
            {data.aiFeedback.map((item) => (
              <li key={item.id} className="rounded-2xl border border-white/40 bg-white/60 p-4">
                <p className="font-medium text-slate-900">{item.title}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-amber-600">{item.severity}</p>
                <p className="mt-2">{item.message}</p>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>
      <SectionCard title="Recent Submissions" description="Pending editorial approval">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.submissions.map((submission) => (
            <article key={submission.id} className="rounded-2xl border border-white/40 bg-white/60 p-4 text-sm shadow">
              <h3 className="font-semibold text-slate-900">{submission.title}</h3>
              <p className="text-xs text-slate-600">Submitted {submission.submitted}</p>
              <p className="mt-2 text-slate-600">{submission.summary}</p>
              <p className="mt-3 text-xs uppercase tracking-wide text-primary">{submission.status}</p>
            </article>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
