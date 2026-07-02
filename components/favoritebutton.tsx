"use client";

import { useEffect, useState } from "react";
import {
  isFavorite,
  toggleFavorite,
} from "@/lib/favorites";
import { FavoriteAnime } from "@/types/favorite";

type Props = {
  anime: FavoriteAnime;
};

export default function FavoriteButton({
  anime,
}: Props) {
  const [favorite, setFavorite] =
    useState(false);

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setFavorite(isFavorite(anime.mal_id));
    setMounted(true);
  }, [anime.mal_id]);

  const handleClick = (
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    e.stopPropagation();

    toggleFavorite(anime);
    setFavorite((prev) => !prev);
  };

  if (!mounted) {
    return (
      <button className="rounded-full bg-black/70 p-2 text-xl backdrop-blur">
        🤍
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="rounded-full bg-black/70 p-2 text-xl backdrop-blur transition hover:scale-110"
    >
      {favorite ? "❤️" : "🤍"}
    </button>
  );
}