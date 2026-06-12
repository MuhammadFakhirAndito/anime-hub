export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <h1 className="text-2xl font-bold text-violet-500">
        Anime Hub
      </h1>

      <ul className="hidden md:flex items-center gap-8 text-slate-300">
        <li className="cursor-pointer hover:text-white">
          Home
        </li>

        <li className="cursor-pointer hover:text-white">
          Trending
        </li>

        <li className="cursor-pointer hover:text-white">
          Top Rated
        </li>

        <li className="cursor-pointer hover:text-white">
          Search
        </li>
      </ul>
    </nav>
  );
}