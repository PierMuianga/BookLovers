# ShareRead

ShareRead is a concept MVP for a library + donations super-app that blends a liquid-glass interface, multi-role workflows, ShareKind donations, and AI-assisted reading utilities. The project uses Next.js App Router, TypeScript, Tailwind CSS, shadcn-inspired components, Supabase, and runtime i18n support.

## Getting started

```bash
pnpm install
pnpm dev
```

### Environment

Copy `.env.example` to `.env.local` and fill in your Supabase credentials. For the admin demo mode the `NEXT_PUBLIC_ADMIN_CODE` defaults to `0000`.

### Binary asset policy

This repository blocks binary assets (for example PNG, JPG, GIF, ICO, font, and media files) to keep PRs text-only. Before opening a pull request, run the guard script to ensure no binary files are tracked:

```bash
pnpm check:binaries
```

### Seed data

A placeholder script lives at `scripts/seed.ts`. You can run it after configuring Supabase RPC `seed_demo_data`:

```bash
pnpm tsx scripts/seed.ts
```

## Demo walkthrough

1. Launch the onboarding experience at `/ (root)` and choose Guest, Login, or Admin code. The AI preference concierge captures quick taste inputs.
2. Discover books from the curated homepage featuring the ShareKind donations banner, AI explainability chip, and cross-device wallpaper-aware theming.
3. Navigate to **Library** to review purchased, borrowed, and highlighted content with offline-ready cards.
4. Explore the **Writers Hub** to review access requests, drafts, AI moderator feedback, and submissions awaiting approval.
5. Visit the **Admin dashboard** for inventory controls, role elevation actions, AI moderation issues, and top donors/readers leaderboards.
6. Open a reader session at `/reader/journey-of-light` to test responsive reading, text-to-speech controls, and highlight/quiz prompts.

## What’s next

- Wire up Supabase tables, migrations, and RLS policies for production data.
- Replace demo datasets with server actions and persistent storage (including IndexedDB offline cache).
- Integrate real AI providers for quiz generation, moderation reports, and public-domain imports.
- Add automated smoke tests and accessibility snapshots.
