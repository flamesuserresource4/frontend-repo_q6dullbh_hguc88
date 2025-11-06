import { Star, Bike, Clock3 } from "lucide-react";

const restaurants = [
  {
    id: 1,
    name: "Sakura Sushi",
    cuisine: "Japanese • Sushi",
    rating: 4.8,
    delivery: "Free delivery",
    eta: "20-30 min",
    img: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Napoli Pizza Co.",
    cuisine: "Italian • Pizza",
    rating: 4.7,
    delivery: "$1.99",
    eta: "25-35 min",
    img: "https://images.unsplash.com/photo-1541745537413-b804c5a5aca9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Spice Route",
    cuisine: "Indian • Curry",
    rating: 4.6,
    delivery: "Free delivery",
    eta: "30-40 min",
    img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Green Bowl",
    cuisine: "Healthy • Bowls",
    rating: 4.5,
    delivery: "$0.99",
    eta: "15-25 min",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop",
  },
];

function RestaurantCard({ r }) {
  return (
    <button className="group rounded-2xl overflow-hidden bg-white border border-zinc-200 hover:shadow-lg transition-all text-left">
      <div className="relative aspect-video">
        <img src={r.img} alt={r.name} className="h-full w-full object-cover" />
        <div className="absolute bottom-2 left-2 flex items-center gap-1 px-2 py-1 rounded-full bg-black/70 text-white text-xs">
          <Bike className="h-3.5 w-3.5" />
          <span>{r.delivery}</span>
        </div>
        <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 text-zinc-900 text-xs">
          <Clock3 className="h-3.5 w-3.5" />
          <span>{r.eta}</span>
        </div>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <p className="font-semibold truncate">{r.name}</p>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4 fill-amber-400" />
            <span className="text-sm text-zinc-700">{r.rating}</span>
          </div>
        </div>
        <p className="text-sm text-zinc-500 mt-1">{r.cuisine}</p>
      </div>
    </button>
  );
}

export default function RestaurantGrid({ query }) {
  const filtered = restaurants.filter(
    (r) =>
      r.name.toLowerCase().includes(query.toLowerCase()) ||
      r.cuisine.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Near you</h2>
        <p className="text-sm text-zinc-500">{filtered.length} options</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((r) => (
          <RestaurantCard key={r.id} r={r} />
        ))}
      </div>
    </section>
  );
}
