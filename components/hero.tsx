"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const featuredAnime = [
  {
    title: "Frieren",
    image: "/featured/frieren.jpg",
    description:
      "An immortal mage reflecting on friendship, adventure, and the passage of time.",
  },
  {
    title: "Solo Leveling",
    image: "/featured/solo-leveling.jpg",
    description:
      "The weakest hunter rises to become humanity's strongest warrior.",
  },
  {
    title: "Attack on Titan",
    image: "/featured/aot.jpg",
    description:
      "Humanity fights for survival against terrifying giant titans.",
  },
  {
    title: "Demon Slayer",
    image: "/featured/demon-slayer.jpg",
    description:
      "A young swordsman battles demons to save his sister.",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % featuredAnime.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentAnime = featuredAnime[currentIndex];

  return (
    <section className="grid lg:grid-cols-2 gap-10 items-center py-20">
      <div>
        <p className="text-violet-400 font-medium mb-4">
          Featured Anime
        </p>

        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
          {currentAnime.title}
        </h1>

        <p className="text-slate-400 mt-6 text-lg max-w-xl">
          {currentAnime.description}
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-violet-600 px-6 py-3 rounded-xl font-semibold hover:bg-violet-700 transition">
            Explore Now
          </button>

          <button className="border border-slate-700 px-6 py-3 rounded-xl hover:bg-slate-900 transition">
            More Info
          </button>
        </div>

        <div className="flex gap-2 mt-8">
          {featuredAnime.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "w-8 bg-violet-500"
                  : "w-2 bg-slate-600"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative w-[300px] h-[380px]">
          <div className="absolute inset-0 bg-violet-500/20 blur-3xl" />

          <Image
  src={currentAnime.image}
  alt={currentAnime.title}
  fill
  className="object-cover rounded-3xl border border-slate-800 shadow-2xl transition-all duration-500"
/>
        </div>
      </div>
    </section>
  );
}