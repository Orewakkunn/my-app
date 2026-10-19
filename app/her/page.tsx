import Link from "next/link";

export default function HimPage() {
  return (
    <main className="min-h-screen bg-gray-900 px-6 py-20 text-slate-800">
      <div className="mx-auto max-w-2xl rounded-3xl border bg-[#9DB5C9] p-8 shadow-xl backdrop-blur-sm sm:p-12">
        <h1 className="mt-4 text-4xl font-bold text-center tracking-tight text-slate-900 sm:text-5xl">
          Title..
        </h1>

        {/* intro */}
        <div
          className="mt-10 rounded-2xl border border-slate-300/70 bg-white/40 p-5 
          shadow-sm"
        >
          <p className="text-lg leading-8 text-slate-900">
            I never imagined that one ordinary morning would change my life
            forever.
            <br />
            So I & Tarun studied together in high school. We had different plans
            for our future. I was inclined more towards academics and he had his
            interests in music, but we promised each other that we'll be
            together no matter where life takes us.
            <br />
            <br />
            Gradually we got busy in our lives, not always everything (end up in
            our favour) happens according to our plans. I shifted to Bangalore
            for my further studies. It felt like everything has changed, new
            place, new faces etc. I started studying psychology. I made friends
            there, enjoyed the life in a way which I always wanted to.
            <br />
            <br />
            One day me and my friends planned to go to a cafe. I got ready in a
            yellow mini dress, everyone looked pretty. Everything was soothing
            there, dark theme, good food, live music and so on. What I noticed
            was TARUN.
            <br />
            He was same, dedicated towards his passion, singing so nicely, I
            thought he'll not recognize me but when he was wrapping up he ended
            his last song with "apa fer milange" and I immediately gave him a
            look.
            <br />
            <br />
            That day we reunited. We dated for about 4 years straight, he worked
            at that same cafe, I completed my studies and then we came back to
            our places together.
            <br />
            On a very random day we decided to get married. Families met, got
            married and started a happy married life.
          </p>
        </div>

        {/* day1 */}
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
            So one day I was at my workplace and was wrapping up. We've planned
            a dinner date at a cafe where he started his passion from.
            <br />
            I went there and he was late as always but this time he was buying
            flowers, so It was worth waiting. He came, we hugged each other, he
            gave me flowers and then we ordered our favourite food there. We
            talked about our current lives and what we will be doing after a few
            years. We ate ice-creams too from a roadside vendor. Called it a
            day.
            <br />
            <br />

            Next morning we were getting ready to go to our offices. I was late
            a bit so he booked a car and went as he had a very important meeting
            that day. <br />
            After a few minutes, my phone rang, I couldn't receive the call at
            the first go but then I picked it up and for a moment I was still. I
            couldn't process what was going on, there was hustle bustle
            everywhere. My life turned upside-down in that 1 second. He met with
            an accident. At first I was in denial, I saw him, I couldn't believe
            my eyes, I couldn't accept the fact that he was no more.
            <br />
            <br />
            
            He was everything to me and after him nothing left. I had never
            imagined a life without him, I didn't know what to do further. I
            started questioning myself that what am I doing, what's the purpose
            of my life now, who am I..,
            <br />
            Gradually everyone started going back to their homes.
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
