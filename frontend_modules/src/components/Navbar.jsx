import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import logo from "@/assets/logo.svg";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300 ${
        theme === "dark"
          ? "bg-[#0f0f0f]/80 border-gray-800"
          : "bg-white/80 border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <img src={logo} alt="MoM Logo" className="h-8 w-8" />
            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              MoM
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Add to Browser
            </button>
            <button className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Team
            </button>
            <button className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Contacts
            </button>
            <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-700 mx-2" />
            <button className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity">
              Log In
            </button>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all transform hover:-translate-y-0.5 cursor-pointer">
              Sign Up
            </button>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon size={20} className="text-slate-700" />
              ) : (
                <Sun size={20} className="text-yellow-400" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === "light" ? (
                <Moon size={20} className="text-slate-700" />
              ) : (
                <Sun size={20} className="text-yellow-400" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t dark:border-gray-800 animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 py-6 space-y-4 bg-white dark:bg-[#0f0f0f] shadow-xl">
            <button className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
              Add to Browser
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
              Team
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
              Contacts
            </button>
            <div className="border-t dark:border-gray-800 my-2" />
            <button className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
              Log In
            </button>
            <button className="block w-full text-center bg-blue-600 text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}