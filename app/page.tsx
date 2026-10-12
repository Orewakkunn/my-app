import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-100 via-purple-50 to-pink-100 font-sans">
      <div className="text-center pt-24 pb-12 px-4">
        <h1 className="text-black text-5xl font-bold tracking-tight">Welcome!</h1>
        <p className="text-gray-500 mt-3 text-lg">Choose your path</p>

        <div className="flex items-center justify-center gap-6 mt-10">
          <Link
            href="/him"
            className="bg-slate-900 text-white w-48 h-36 rounded-2xl text-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
          >
            Him
          </Link>
          <Link
            href="/her"
            className="bg-slate-900 text-white w-48 h-36 rounded-2xl text-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
          >
            Her
          </Link>
        </div>
      </div>
    </div>
  );
}