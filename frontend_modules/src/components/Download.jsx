import { Chrome, Github } from "lucide-react";

export default function Download() {
  return (
    <section className="w-full py-20 px-4 flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Ready to enhance your meeting experience?
        </h2>
        <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
          Download the MoM extension today and start generating accurate summaries for all your Meet sessions automatically.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-600/30 cursor-pointer group">
            <Chrome size={24} className="group-hover:animate-spin-slow" />
            <span>Add to Chrome</span>
          </button>
        </div>

        <p className="text-sm text-slate-500 dark:text-gray-500 mt-4">
          Free for everyone
        </p>
      </div>
    </section>
  );
}