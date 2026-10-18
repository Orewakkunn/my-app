import Link from "next/link";

export default function HimPage() {
  return (
    <main className="min-h-screen bg-gray-900 px-6 py-20 text-slate-800">
      <div className="mx-auto max-w-2xl rounded-3xl border bg-[#9DB5C9] p-8 shadow-xl backdrop-blur-sm sm:p-12">
        <h1 className="mt-4 text-4xl font-bold text-center tracking-tight text-slate-900 sm:text-5xl">
          Title..
        </h1>

        <div
          className="mt-10 rounded-2xl border border-slate-300/70 bg-white/40 p-5 
          shadow-sm"
        >
          <div className="mb-6 flex justify-end ">
            <span
              aria-hidden="true"
              className="inline-flex items-center rounded-full bg-rose-600 px-3 py-1 text-xs font-bold tracking-wider text-white shadow-sm ring-4 ring-rose-600/15"
            >
              NEW
            </span>
          </div>

          <p className="text-lg leading-8 text-slate-900">
            I never imagined that one ordinary morning would change my life
          forever.
          <br />
          So I & Tarun studied together in high school. We had different plans
          for our future. I was inclined more towards academics and he had his
          interests in music, but we promised each other that we'll be together
          no matter where life takes us.
          <br />
          <br />
          Gradually we got busy in our lives, not always everything (end up in
          our favour) happens according to our plans. I shifted to Bangalore for
          my further studies. It felt like everything has changed, new place,
          new faces etc. I started studying psychology. I made friends there,
          enjoyed the life in a way which I always wanted to.
          <br />
          <br />
          One day me and my friends planned to go to a cafe. I got ready in a
          yellow mini dress, everyone looked pretty. Everything was soothing
          there, dark theme, good food, live music and so on. What I noticed was
          TARUN.
          <br />
          He was same, dedicated towards his passion, singing so nicely, I
          thought he'll not recognize me but when he was wrapping up he ended
          his last song with "apa fer milange" and I immediately gave him a
          look.
          <br />
          <br />
          That day we reunited. We dated for about 4 years straight, he worked
          at that same cafe, I completed my studies and then we came back to our
          places together.
          <br />
          On a very random day we decided to get married. Families met, got
          married and started a happy married life.
          </p>
        </div>

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
