import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen  bg-slate-900">
      <div className="text-center pt-24 pb-12 px-4">
        <h1 className="text-white text-5xl font-bold tracking-tight">Welcome!</h1>
        <p className="text-gray-500 mt-3 text-lg">A Web Dedicated to U </p>

        <div className="flex items-center justify-center gap-6 mt-10">
          
          

          <Link
            href="/him"
            className="bg-linear-to-r from-cyan-500 to-blue-500 hover:bg-linear-to-bl text-white focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 w-48 h-36 rounded-2xl text-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
          >
            Him
          </Link>
          <Link
            href="/her"
            className="bg-linear-to-r from-purple-500 to-pink-500 hover:bg-linear-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-white w-48 h-36 rounded-2xl text-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
          >
            Her
          </Link>
        </div>
      </div>
    </div>
  );
}