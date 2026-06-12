type AnimeCardProps = {
  title: string;
  image: string;
  score: number;
};

export default function AnimeCard({
  title,
  image,
  score,
}: AnimeCardProps) {
  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:scale-105 transition-all duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-[280px] object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold line-clamp-2">
          {title}
        </h3>

        <p className="text-yellow-400 mt-2">
          ⭐ {score}
        </p>
      </div>
    </div>
  );
}