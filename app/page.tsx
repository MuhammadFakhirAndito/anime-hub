import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-6">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}