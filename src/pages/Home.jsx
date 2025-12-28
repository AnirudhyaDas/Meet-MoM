import { useTheme } from "../context/ThemeContext";
import logo from "../assets/logo.svg";
import waves from "../assets/waves.svg";
import { Moon, Sun, Play, FileText } from "lucide-react";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    // Added 'min-h-screen' and base colors to ensure full coverage
    <div className="min-h-screen w-full bg-white text-slate-900 dark:bg-[#0f0f0f] dark:text-white transition-colors duration-300">
      {/* Navbar */}
      <nav
        className="flex items-center justify-between px-6 py-5 md:px-12 border-b dark:border-gray-800"
        style={{ borderColor: theme === "dark" ? "#1f2937" : "#e5e7eb" }}
      >
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <span>MoM</span>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity hidden sm:block">
            Log In
          </button>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
            Sign Up
          </button>

          {/* Theme Toggler */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon size={20} className="text-slate-700" />
            ) : (
              <Sun size={20} className="text-yellow-400" />
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center mt-20 px-4 gap-8">
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            MoM is an AI-Powered Meeting Summariser
          </h1>
        </div>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-600/30">
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
            <button className="text-xl">
              <Play size={20} fill="currentColor" />
            </button>
            <div className="h-[2px] bg-gray-400 dark:bg-gray-600 flex-1" />
          </div>
        </section>
      </main>
    </div>
  );
}
