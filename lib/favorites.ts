import { FavoriteAnime } from "@/types/favorite";

const KEY = "favorite-anime";

export function getFavorites(): FavoriteAnime[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export function isFavorite(id: number) {
  return getFavorites().some(
    (anime) => anime.mal_id === id
  );
}

export function toggleFavorite(
  anime: FavoriteAnime
) {
  const favorites = getFavorites();

  const exists = favorites.some(
    (item) => item.mal_id === anime.mal_id
  );

  const updated = exists
    ? favorites.filter(
        (item) => item.mal_id !== anime.mal_id
      )
    : [...favorites, anime];

  localStorage.setItem(
    KEY,
    JSON.stringify(updated)
  );
}