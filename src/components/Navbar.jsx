import { Search, MapPin, Heart } from "lucide-react";
import { useState } from "react";

export default function Navbar({ onSearch }) {
  const [localQuery, setLocalQuery] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSearch?.(localQuery);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-rose-500 grid place-items-center text-white font-black shadow-sm">
            fp+
          </div>
          <span className="text-xl font-semibold tracking-tight">
            <span className="text-pink-600">foodpanda</span>
            <span className="text-zinc-900">+</span>
          </span>
        </div>

        <form onSubmit={submit} className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-6">
          <div className="flex items-center gap-2 flex-1 pl-3 pr-2 py-2 bg-white border border-zinc-200 rounded-xl shadow-sm">
            <Search className="h-4 w-4 text-zinc-400" />
            <input
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
              placeholder="Search for restaurants, cuisine or dishes"
            />
            <button
              type="submit"
              className="px-3 py-1.5 text-sm rounded-lg bg-zinc-900 text-white hover:bg-zinc-800"
            >
              Search
            </button>
          </div>
        </form>

        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-zinc-200 hover:bg-zinc-50">
            <MapPin className="h-4 w-4 text-pink-600" />
            <span>Set location</span>
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-pink-600 text-white hover:bg-pink-700">
            <Heart className="h-4 w-4" />
            <span>Favorites</span>
          </button>
        </div>
      </div>
    </header>
  );
}
