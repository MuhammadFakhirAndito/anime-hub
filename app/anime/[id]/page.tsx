import Image from "next/image";
import { getAnimeById } from "@/services/anime";

export default async function AnimeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const anime = await getAnimeById(id);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Poster */}
          <div>
            <div className="relative h-[550px] rounded-2xl overflow-hidden border border-slate-800">
              <Image
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Detail */}
          <div className="md:col-span-2">

            <div className="flex items-center gap-3 mb-4">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold">
                ⭐ {anime.score}
              </span>

              <span className="bg-violet-600 px-3 py-1 rounded-full text-sm">
                {anime.status}
              </span>
            </div>

            <h1 className="text-5xl font-bold mb-4">
              {anime.title}
            </h1>

            <p className="text-slate-400 mb-8">
              {anime.title_japanese}
            </p>

            {/* Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">

              <div className="bg-slate-900 p-4 rounded-xl">
                <p className="text-slate-400 text-sm">Episodes</p>
                <p className="font-semibold">
                  {anime.episodes ?? "?"}
                </p>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl">
                <p className="text-slate-400 text-sm">Rank</p>
                <p className="font-semibold">
                  #{anime.rank}
                </p>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl">
                <p className="text-slate-400 text-sm">Popularity</p>
                <p className="font-semibold">
                  #{anime.popularity}
                </p>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl">
                <p className="text-slate-400 text-sm">Year</p>
                <p className="font-semibold">
                  {anime.year ?? "-"}
                </p>
              </div>

            </div>

            {/* Genre */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-3">
                Genres
              </h2>

              <div className="flex flex-wrap gap-3">
                {anime.genres.map(
                  (genre: {
                    mal_id: number;
                    name: string;
                  }) => (
                    <span
                      key={genre.mal_id}
                      className="bg-slate-800 px-4 py-2 rounded-full"
                    >
                      {genre.name}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Synopsis */}
            <div>
              <h2 className="text-2xl font-bold mb-3">
                Synopsis
              </h2>

              <p className="text-slate-300 leading-8">
                {anime.synopsis}
              </p>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}