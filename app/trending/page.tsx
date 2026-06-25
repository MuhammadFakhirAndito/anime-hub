import { getTrendingAnime } from "@/services/anime";
import AnimeGrid from "@/components/animegrid";

export default async function TrendingPage() {
  const anime = await getTrendingAnime();

  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="mb-8 text-4xl font-bold text-white">
        Trending Anime
      </h1>

      <AnimeGrid anime={anime} />
    </main>
  );
}