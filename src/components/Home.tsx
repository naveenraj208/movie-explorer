'use client'

import { useEffect, useState } from "react";
import tmdb from "../api/tmdb";  
import MovieSection from "./MovieSection";  

export default function Home() {
  const [movies, setMovies] = useState<Record<string, any[]>>({});

  const categories = [
    { key: "now_playing", label: "Now Playing" },
    { key: "popular", label: "Popular" },
    { key: "top_rated", label: "Top Rated" },
    { key: "upcoming", label: "Upcoming" },
  ];

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
       
        <header className="text-center mb-16 bg-gradient-to-r from-pink-600 via-red-600 to-yellow-600 p-20 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105">
          <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-red-700 to-yellow-700 tracking-tight leading-tight mb-6">
            Movie Showcase
          </h1>
          <p className="text-2xl text-gray-300 mt-4 max-w-4xl mx-auto">
            Explore the latest movies across various categories. Find your next movie to watch and dive into the world of entertainment!
          </p>
        </header>

       
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
