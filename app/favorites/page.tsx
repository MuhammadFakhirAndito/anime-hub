"use client";

import { useEffect, useState } from "react";
import { getFavorites } from "@/lib/favorites";
import { FavoriteAnime } from "@/types/favorite";
import AnimeCard from "@/components/animecard";

export default function FavoritesPage() {
  const [anime, setAnime] = useState<
    FavoriteAnime[]
  >([]);

  useEffect(() => {
    setAnime(getFavorites());
  }, []);

  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="mb-8 text-4xl font-bold">
        Favorite Anime ❤️
      </h1>

      {anime.length === 0 ? (
        <p className="text-slate-400">
          Belum ada anime favorit.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {anime.map((item) => (
            <AnimeCard
              key={item.mal_id}
              id={item.mal_id}
              title={item.title}
              image={item.image}
              score={item.score}
            />
          ))}
        </div>
      )}
    </main>
  );
}