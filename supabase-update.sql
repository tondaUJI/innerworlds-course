-- Run once in the Supabase SQL editor (after supabase.sql). Adds the final quiz (module 10) and "delete my account".
alter table public.quiz_results drop constraint quiz_results_module_check;
alter table public.quiz_results add constraint quiz_results_module_check check (module between 0 and 10);

create or replace function public.delete_my_account() returns void
language plpgsql security definer set search_path = '' as $$
begin
  delete from auth.users where id = auth.uid();
end;
$$;
revoke all on function public.delete_my_account() from public, anon;
grant execute on function public.delete_my_account() to authenticated;
