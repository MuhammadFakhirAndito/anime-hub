import Image from "next/image";

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
    <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500">
      
      <div className="relative h-[320px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute top-3 right-3 rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-yellow-400 backdrop-blur">
          ⭐ {score}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      <div className="p-4">
        <h3 className="line-clamp-2 font-semibold text-lg">
          {title}
        </h3>
      </div>

    </div>
  );
}