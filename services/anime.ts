export type Anime = {
  mal_id: number;
  title: string;
  score: number;
  rating?: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
};

export async function getTopAnime(): Promise<Anime[]> {
  const response = await fetch(
    "https://api.jikan.moe/v4/top/anime"
  );

  const data = await response.json();

  return filterSafeAnime(data.data);
}

export async function getAnimeById(id: string) {
  const response = await fetch(
    `https://api.jikan.moe/v4/anime/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch anime");
  }

  const data = await response.json();

  return data.data;
}

export async function searchAnime(
  query: string
): Promise<Anime[]> {
  const res = await fetch(
    `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=12`
  );

  const data = await res.json();

  return filterSafeAnime(data.data);
}

export async function getTrendingAnime(): Promise<Anime[]> {
  const response = await fetch(
    "https://api.jikan.moe/v4/seasons/now"
  );

  const data = await response.json();

  return filterSafeAnime(data.data);
}

function filterSafeAnime(anime: Anime[]): Anime[] {
  return anime.filter(
    (item) =>
      item.rating !== "Rx - Hentai" &&
      item.rating !== "R+ - Mild Nudity"
  );
}