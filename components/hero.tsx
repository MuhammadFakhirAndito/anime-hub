export default function Hero() {
  return (
    <section className="grid lg:grid-cols-2 gap-10 items-center py-20">
      <div>
        <p className="text-violet-400 font-medium mb-4">
          Explore Anime Universe
        </p>

        <h1 className="text-5xl lg:text-6xl max-w-3xl font-bold leading-tight">
          Discover Your Next Favorite Anime
        </h1>

        <p className="text-slate-400 mt-6 text-lg">
          Explore top-rated anime, seasonal releases,
          and timeless classics from around the world.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-violet-600 px-6 py-3 rounded-xl font-semibold hover:bg-violet-700 transition">
            Explore Now
          </button>

          <button className="border border-slate-700 px-6 py-3 rounded-xl hover:bg-slate-900 transition">
            Top Anime
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-[320px] h-[380px] rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
        </div>
      </div>
    </section>
  );
}