import { useEffect, useState } from "react";
import tmdb from "../api/tmdb";
import MovieSection from "./MovieSection";

// Categories for fetching movies
const categories = [
  { key: "now_playing", label: "Now Playing" },
  { key: "popular", label: "Popular" },
  { key: "top_rated", label: "Top Rated" },
  { key: "upcoming", label: "Upcoming" },
];

export default function Home() {
  const [movies, setMovies] = useState<Record<string, any[]>>({});

  useEffect(() => {
    const fetchData = async () => {
      const data: Record<string, any[]> = {};
      for (let category of categories) {
        const response = await tmdb.get(`/movie/${category.key}`);
        data[category.key] = response.data.results;
      }
      setMovies(data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-10 rounded-xl shadow-lg">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-red-600 to-yellow-500 tracking-tight leading-tight">
            Movie Showcase
          </h1>
          <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            Explore the latest movies across various categories. Find your next movie to watch!
          </p>
        </header>

        {/* Movie Categories */}
        {categories.map(({ key, label }) => (
          <div key={key} className="mb-16">
            <h2 className="text-4xl font-semibold text-white mb-6">{label}</h2>
            <MovieSection
              title={label}
              movies={movies[key] || []}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
