-- Demo schema outline for ShareRead
create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  name text,
  age int,
  role text default 'reader',
  preferences jsonb default '{}'::jsonb,
  languages text[] default array['en'],
  premium_until timestamptz,
  created_at timestamptz default now()
);

create table if not exists books (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  author text,
  description text,
  price numeric,
  inventory int default 0,
  is_public_domain boolean default false,
  submitted_by uuid references profiles(id)
);

create table if not exists borrows (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  book_id uuid references books(id),
  borrowed_at timestamptz default now(),
  due_at timestamptz,
  returned_at timestamptz,
  status text default 'borrowed'
);

create table if not exists purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  book_id uuid references books(id),
  price_paid numeric,
  purchased_at timestamptz default now(),
  license text
);

create table if not exists highlights (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  book_id uuid references books(id),
  chapter_id text,
  text text,
  note text,
  created_at timestamptz default now()
);

create table if not exists quizzes (
  id uuid primary key default gen_random_uuid(),
  book_id uuid references books(id),
  chapter_id text,
  generated_by_ai boolean default false,
  payload jsonb,
  created_at timestamptz default now()
);

-- Basic RLS placeholders
alter table profiles enable row level security;
alter table books enable row level security;
alter table borrows enable row level security;
alter table purchases enable row level security;

create policy "profile owners" on profiles for select using (auth.uid() = id);
create policy "admin manage profiles" on profiles for all using (auth.role() = 'authenticated');
