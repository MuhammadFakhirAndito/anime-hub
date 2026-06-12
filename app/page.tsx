import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AnimeCard from "@/components/animecard";

const dummyAnime = [
  {
    title: "Frieren",
    image: "/featured/frieren.jpg",
    score: 9.3,
  },
  {
    title: "Solo Leveling",
    image: "/featured/solo-leveling.jpg",
    score: 8.8,
  },
  {
    title: "Attack on Titan",
    image: "/featured/aot.jpg",
    score: 9.1,
  },
];

export default function Home() {
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
            {dummyAnime.map((anime) => (
              <AnimeCard
                key={anime.title}
                title={anime.title}
                image={anime.image}
                score={anime.score}
              />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}