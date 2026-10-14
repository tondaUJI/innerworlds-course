-- Run once in the Supabase SQL editor. Each user can only see and write their own results.
create table public.quiz_results (
  user_id    uuid not null default auth.uid() references auth.users on delete cascade,
  module     int  not null check (module between 0 and 10),
  audience   text not null check (audience in ('t','a1','a2')),
  score      int  not null check (score >= 0),
  total      int  not null check (total > 0),
  updated_at timestamptz not null default now(),
  primary key (user_id, module, audience)
);
alter table public.quiz_results enable row level security;
create policy "read own"   on public.quiz_results for select using (auth.uid() = user_id);
create policy "insert own" on public.quiz_results for insert with check (auth.uid() = user_id);
create policy "update own" on public.quiz_results for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "delete own" on public.quiz_results for delete using (auth.uid() = user_id);

-- Account deletion (also in supabase-update.sql for existing projects)
create or replace function public.delete_my_account() returns void
language plpgsql security definer set search_path = '' as $$
begin
  delete from auth.users where id = auth.uid();
end;
$$;
revoke all on function public.delete_my_account() from public, anon;
grant execute on function public.delete_my_account() to authenticated;
