import AnimeCard from "@/components/animecard";
import { Anime, searchAnime } from "@/services/anime";

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({
  searchParams,
}: Props) {
  const { q } = await searchParams;

  // Empty state: belum mengetik pencarian
  if (!q) {
    return (
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold">
          Cari anime favoritmu
        </h1>

        <p className="mt-2 text-slate-400">
          Masukkan judul anime pada kolom pencarian.
        </p>
      </main>
    );
  }

  const anime: Anime[] = await searchAnime(q);

  // Empty state: hasil tidak ditemukan
  if (anime.length === 0) {
    return (
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold">
          Hasil pencarian: {q}
        </h1>

        <p className="mt-4 text-slate-400">
          Anime tidak ditemukan.
        </p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">
        Hasil pencarian: {q}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {anime.map((item) => (
          <AnimeCard
            key={item.mal_id}
            id={item.mal_id}
            title={item.title}
            image={item.images.jpg.image_url}
            score={item.score}
          />
        ))}
      </div>
    </main>
  );
}