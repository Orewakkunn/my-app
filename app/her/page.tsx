import Link from "next/link";

export default function HimPage() {
  return (
    <main className="min-h-screen bg-gray-900 px-6 py-20 text-slate-800">
      <div className="mx-auto max-w-2xl rounded-3xl border bg-[#9DB5C9] p-8 shadow-xl backdrop-blur-sm sm:p-12">
        
        <h1 className="mt-4 text-4xl font-bold text-center tracking-tight text-slate-900 sm:text-5xl">
          She likes paper:)
        </h1>
        

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
