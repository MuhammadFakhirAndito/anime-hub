import AnimeCard from "./animecard";
import { Anime } from "@/services/anime";

type AnimeGridProps = {
  anime: Anime[];
};

export default function AnimeGrid({
  anime,
}: AnimeGridProps) {

  console.log(
    anime.map((item) => ({
      id: item.mal_id,
      title: item.title,
    }))
  );

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
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
  );
}