import Link from "next/link";

export default function HimPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-sky-100 via-white to-indigo-100 px-6 py-20 text-slate-800">
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-sm sm:p-12">
        <p className="text-sm font-mediumuppercase tracking-[0.3em] text-indigo-600">
          For Him
        </p>
        <h1 className="mt-4 text-4xl font-bold text-center tracking-tight text-slate-900 sm:text-5xl">
          Title..
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          A little reminder that your presence brings comfort, joy, and steady strength.
          Keep shining, and remember that you are loved more than you know.
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
