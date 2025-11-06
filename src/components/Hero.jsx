import { Sparkles } from "lucide-react";

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-sm text-zinc-700 shadow-sm">
              <Sparkles className="h-4 w-4 text-pink-600" />
              <span>Faster than delivery. Better than takeout.</span>
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-tight">
              Crave. Tap. Eat.
            </h1>
            <p className="mt-4 text-lg text-zinc-600 max-w-xl">
              Discover trending restaurants near you and get meals delivered in minutes with real‑time tracking, personalized picks, and exclusive deals.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button onClick={onCTAClick} className="px-5 py-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800">
                Find food near me
              </button>
              <button className="px-5 py-3 rounded-xl border border-zinc-300 hover:bg-white/60">
                Browse cuisines
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white">
              <img
                src="https://images.unsplash.com/photo-1604908554007-11a5044d1d35?q=80&w=1600&auto=format&fit=crop"
                alt="Delicious food"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
