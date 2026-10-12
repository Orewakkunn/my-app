import Link from "next/link";

export default function HerPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-pink-100 via-white to-rose-100 px-6 py-20 text-slate-800">
      <div className="mx-auto max-w-2xl rounded-3xl border border-pink-200 bg-white/80 p-8 shadow-xl backdrop-blur-sm sm:p-12">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-pink-600">
          For Her
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          You are treasured beyond words.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Your kindness, grace, and warmth make every moment brighter. Keep being the beautiful,
          thoughtful soul you are, and never forget how deeply you are cherished.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
}
