import { Pizza, Sandwich, Salad, IceCream2, Coffee, UtensilsCrossed } from "lucide-react";

const categories = [
  { name: "Pizza", icon: Pizza, color: "from-orange-400 to-red-500" },
  { name: "Burgers", icon: Sandwich, color: "from-yellow-400 to-amber-500" },
  { name: "Healthy", icon: Salad, color: "from-emerald-400 to-teal-500" },
  { name: "Desserts", icon: IceCream2, color: "from-pink-400 to-fuchsia-500" },
  { name: "Coffee", icon: Coffee, color: "from-brown-400 to-stone-500" },
  { name: "All", icon: UtensilsCrossed, color: "from-zinc-400 to-zinc-600" },
];

export default function CategoryScroller({ onSelect }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">Popular categories</h2>
        <button className="text-sm text-pink-600 hover:text-pink-700">See all</button>
      </div>
      <div className="flex gap-4 overflow-x-auto no-scrollbar py-1">
        {categories.map((c) => {
          const Icon = c.icon;
          return (
            <button
              key={c.name}
              onClick={() => onSelect?.(c.name)}
              className="group shrink-0 w-40 sm:w-44 rounded-2xl border border-zinc-200 bg-white hover:shadow-md transition-all"
            >
              <div className={`h-24 rounded-t-2xl bg-gradient-to-br ${c.color} grid place-items-center text-white`}>
                <Icon className="h-7 w-7 drop-shadow" />
              </div>
              <div className="p-3 text-left">
                <p className="font-medium">{c.name}</p>
                <p className="text-xs text-zinc-500">Tap to explore</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
