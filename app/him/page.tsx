import Link from "next/link";

export default function HimPage() {
  return (
    <main className="min-h-screen bg-gray-900 px-6 py-20 text-slate-800">
      <div className="mx-auto max-w-2xl rounded-3xl border bg-[#9DB5C9] p-8 shadow-xl backdrop-blur-sm sm:p-12">
        <h1 className="mt-4 text-4xl font-bold text-center tracking-tight text-slate-900 sm:text-5xl">
          Sudha aur Chandar
        </h1>
        
        {/* intro */}
        <div
          className="mt-10 rounded-2xl border border-slate-300/70 bg-white/40
         p-5 shadow-sm"
        >      
          <p className="mt-6 text-lg leading-8 text-slate-900">
            Varnan kijiye ek kahani jahan ek vekti ki patni ki maut ke baad uska
            sansaar ujad jaaye. Yeh kahani hai hamare paatr Chandar aur uski
            swargiya patni Sudha ki.
            <br />
            <br />
            Chandar university-pass student hai, jiski shaadi ko 4 saal hue the.
            Umar mein Sudha se bada hone ke bawajood, Chandar dil se kaccha tha.
            Rozmarra ki zindagi mein woh Sudha par nirbhar sa tha, chahe woh
            appointment ho ya uski favourite bina cheeni ki coffee. <br />
            <br />
            Sudha chanchal, hoshiyaar aur modern soch wali istri thi. Use
            society ke vichaaron ko challenge karne mein kuch maza sa aata tha.
            Shayad yahi usko akarshit banata tha. Sudha sirf uski patni hi nahi
            thi, balki uski saathi aur life ka ek important part bhi thi. Uske
            jaane ke baad Chandar ko akele jeevan ka saamna karna padta hai aur
            uski life mein kai changes aate hain.
            <br />
            <br />
            Kya waqt ke saath Chandar ko kisi doosri istri ke prati aakarshan
            hoga? Kya use Sudha ko bhool jaane ka darr sataayega? Kya uska kisi
            aur ke saath pyaar karna uchit hoga? <br />
            <br />
            Yeh kahani Chandar ki life ke 4 phases cover karti hai: the first
            day, after a month, after 5 year, and after 10 years.
          </p>
        </div>
         
         {/* 1st day */}
        <div className="mt-10 rounded-2xl border border-slate-300/70 bg-white/40 
        p-5 shadow-sm">
          <div className="mb-6 flex justify-end ">
            <span
              aria-hidden="true"
              className="inline-flex items-center rounded-full bg-rose-600 px-3 py-1 text-xs font-bold tracking-wider text-white shadow-sm ring-4 ring-rose-600/15"
            >
              NEW
            </span>
          </div>

          <p className=" leading-8 text-lg text-slate-900">
            Aaj mera pehla savera hai Sudha ke bina. Mujhe abhi bhi vishwas nahi
            hota ki woh ab nahi rahi. Shayad main avi v iss reality ko face
            nahi karna chahta<br/><br/> Hamari nok-jhok me  Mera use chup
            rehne aur Tum kitne irritate karte ho keh dena yaad atta h.
            Gusse mein hum dono ek-doosre ko ulta-seedha bol dete the. Us waqt
            kahan pata tha ki ek din uski awaaz sunne ke liye bhi taras jaayenge.<br/><br/>

            Kehte hain ki mrityu ke baad terah din tak aatma apno ke aas-paas
            rehti hai. Sudha, meri saari galtiyan maaf kar dena. <br/>
            Main kitchen ki aur jaata hoon. Ghar mein logon ka aana-jaana laga hua hai.
            Koi abhi bhi ro raha hai, toh koi dilasa de raha hai. Coffee banane ka
            socha, lekin mujhe yaad hi nahi aaya ki Sudha usmein kitni coffee
            aur kitna doodh daalti thi. Aaj toh mujhe apni favourite coffee bhi
            pasand nahi aayi.<br/><br/>

            Aadhi coffee hi pi thi ki peeche se ek aunty aayin. Shayad mummy ki
            friend hain sudha ko bhali bhati janti thi Unhone mujhe mazboot rehne ko
            kaha. Main bas unki baatein sunta raha. Dilaase aur himmat ki lain-dein me
            din beet gaya.<br/>
            Kamre me sudha ka phone table pr rkha tha, Aaj bhi wahi wallpaper tha. Hamari Purani photos dekhte hue raat ho gyi.<br/><br/>
            Sabke liye Dinner padosi ke ghar se aaya tha, jo table par rakha hi reh gaya. Sudha ki mummy ke rone ki awaaz dheere-dheere kam hone lagi.<br/>
            Ghadi mein raat ke 2 baj rahe the. Akela pan ab satane laga h. Sudha ke bedside ki khaali jagah dekhkar aankhein nam ho gayin.<br/><br/> Kaash, yeh sab ek sapna hota.
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
