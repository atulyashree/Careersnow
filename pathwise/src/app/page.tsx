'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const suggestions = ["B.Tech ECE", "B.Sc Bio", "MBA Marketing"];

  const handleExplore = () => {
    if (query.trim()) {
      router.push(`/results?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Find your path after your degree</h1>
        <p className="mb-6 text-lg text-gray-600 text-center">Discover the best careers for your background and interests.</p>
        <input
          className="border p-2 rounded w-full max-w-md mb-2"
          placeholder="Enter your degree or interest"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <div className="flex gap-2 mb-4">
          {suggestions.map(s => (
            <button
              key={s}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded"
              onClick={() => setQuery(s)}
            >
              {s}
            </button>
          ))}
        </div>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded font-semibold disabled:opacity-50"
          onClick={handleExplore}
          disabled={!query.trim()}
        >
          Explore Careers
        </button>
        <a href="#how-it-works" className="mt-8 text-blue-500 underline">Learn how it works ↓</a>
      </main>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white w-full flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8">How Pathwise Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl">
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">1️⃣</span>
            <p className="text-center">Enter your degree or interest</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">2️⃣</span>
            <p className="text-center">Get personalized career recommendations</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">3️⃣</span>
            <p className="text-center">Explore detailed roadmaps and resources</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">4️⃣</span>
            <p className="text-center">Save your path and track your progress</p>
          </div>
        </div>
      </section>
    </>
  );
}