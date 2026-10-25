import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "./actions";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-[#080812] px-5 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="flex items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold">
            SkillForge <span className="text-violet-400">AI</span>
          </Link>
          <form action={signOut}>
            <button
              type="submit"
              className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10"
            >
              Sign out
            </button>
          </form>
        </header>

        <section className="mt-16 rounded-2xl border border-white/10 bg-white/[0.04] p-8">
          <p className="text-sm text-violet-300">Signed in</p>
          <h1 className="mt-3 text-3xl font-bold">Your learning dashboard</h1>
          <p className="mt-3 text-gray-400">
            You are signed in as {user.email}.
          </p>
          <Link
            href="/roadmap"
            className="mt-7 inline-flex rounded-lg bg-violet-600 px-5 py-3 font-semibold transition hover:bg-violet-500"
          >
            Build a roadmap
          </Link>
        </section>
      </div>
    </main>
  );
}
