import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AnimeCard from "@/components/animecard";
import { getTopAnime, Anime } from "@/services/anime";

export default async function Home() {
  const trendingAnime = await getTopAnime();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-6">
        <Navbar />
        <Hero />

        <section className="py-20">
          <h2 className="text-3xl font-bold mb-8">
            Trending Anime
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingAnime.slice(0, 6).map((anime: Anime) => (
              <AnimeCard
                key={anime.mal_id}
                title={anime.title}
                image={anime.images.jpg.image_url}
                score={anime.score}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}