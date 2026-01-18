import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Download from "@/components/Download";
import Team from "../components/Team";
import Contact from "../components/Contact";

export default function Home() {
  return (
    // Added 'min-h-screen' and base colors to ensure full coverage
    <div className="min-h-screen w-full bg-white text-slate-900 dark:bg-[#0f0f0f] dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <Download />
      <Team />
      <Contact />
    </div>
  );
}