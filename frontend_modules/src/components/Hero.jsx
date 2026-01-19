import waves from "@/assets/waves.svg";
import { Play } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function Hero() {
    const { theme, toggleTheme } = useTheme();

  return (
    <main className="flex flex-col items-center justify-center text-center py-4 px-4 gap-8">
      <div className="space-y-4 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          MoM is an AI-Powered Meeting Summariser
        </h1>
      </div>
      <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-600/30 cursor-pointer">
        Get Started
      </button>

      {/* Audio Visualizer Section */}
      <section className="mt-20 w-full max-w-3xl flex flex-col items-center gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="flex items-center justify-center gap-1 h-16">
          <img src={waves} alt="waves" />
        </div>

        {/* Audio Player Bar */}
        <div className="flex items-center gap-4 w-4/5">
          <div className="h-[2px] bg-gray-400 dark:bg-gray-600 flex-1" />
          <button className="text-xl cursor-pointer hover:scale-110 transition-transform">
            <Play size={20} fill="currentColor" />
          </button>
          <div className="h-[2px] bg-gray-400 dark:bg-gray-600 flex-1" />
        </div>
      </section>
    </main>
  );
}