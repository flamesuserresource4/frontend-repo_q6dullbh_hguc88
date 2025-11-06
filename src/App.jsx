import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryScroller from "./components/CategoryScroller";
import RestaurantGrid from "./components/RestaurantGrid";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <Navbar onSearch={setQuery} />
      <Hero onCTAClick={() => {
        const input = document.querySelector("header input");
        input?.focus();
      }} />
      <CategoryScroller onSelect={(name) => setQuery(name)} />
      <RestaurantGrid query={query} />
      <Footer />
    </div>
  );
}

export default App;
