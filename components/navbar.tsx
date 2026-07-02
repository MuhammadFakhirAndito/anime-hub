import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <Link
        href="/"
        className="text-2xl font-bold text-violet-500"
      >
        Anime Hub
      </Link>

      <div className="flex items-center gap-4">
        <form action="/search">
          <input
            type="text"
            name="q"
            placeholder="Cari anime..."
            className="rounded-lg bg-slate-800 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-violet-500"
          />
        </form>

        <ul className="hidden md:flex items-center gap-8 text-slate-300">
          <li>
            <Link
              href="/"
              className="hover:text-white"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/trending"
              className="hover:text-white"
            >
              Trending
            </Link>
          </li>

          <li>
            <Link
              href="/top-rated"
              className="hover:text-white"
            >
              Top Rated
            </Link>
          </li>

          <li>
            <Link
              href="/favorites"
              className="hover:text-white"
            >
              Favorites
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}