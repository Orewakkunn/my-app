import Link from "next/link";

export default function HimPage() {
  return (
    <main className="min-h-screen bg-gray-900 px-6 py-20 text-slate-800">
      <div className="mx-auto max-w-2xl rounded-3xl border bg-[#9DB5C9] p-8 shadow-xl backdrop-blur-sm sm:p-12">
        <h1 className="mt-4 text-4xl font-bold text-center tracking-tight text-slate-900 sm:text-5xl">
          Title nhi soche..
        </h1>

        <p className="mt-6 text-lg leading-8 text-black">
          Varnan kijiye ek kahani jahan ek vekti ki patni ki maut ke baad uska
          sansaar ujad jaaye. Yeh kahani hai hamare paatr Chandar aur uski
          swargiya patni Sudha ki.<br/>
          Chandar university-pass student hai, jiski
          shaadi ko 4 saal hue the. Umar mein Sudha se bada hone ke bawajood,
          Chandar dil se kaccha tha. Rozmarra ki zindagi mein woh Sudha par
          nirbhar sa tha, chahe woh appointment ho ya uski favourite bina cheeni
          ki coffee. <br/><br/>
          Sudha chanchal, hoshiyaar aur modern soch wali istri thi.
          Use society ke vichaaron ko challenge karne mein kuch maza sa aata
          tha. Shayad yahi usko akarshit banata tha. Sudha sirf uski patni hi
          nahi thi, balki uski saathi aur life ka ek important part bhi thi.
          Uske jaane ke baad Chandar ko akele jeevan ka saamna karna padta hai
          aur uski life mein kai changes aate hain.<br/><br/>
          Kya waqt ke saath Chandar ko
          kisi doosri istri ke prati aakarshan hoga? Kya use Sudha ko bhool
          jaane ka darr sataayega? Kya uska kisi aur ke saath pyaar karna uchit
          hoga? <br/>
          Yeh kahani Chandar ki life ke 4 phases cover karti hai: the
          first day, after a month, after 5 year, and after 10 years.
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
