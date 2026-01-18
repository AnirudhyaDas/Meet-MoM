import { Github, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Anirudhya Das",
    role: "Developer",
    bio: "Loves coffee and code.",
    socials: {
      github: "#",
      linkedin: "#",
    },
    // Profile Placeholder
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anirudhya", 
  },
  {
    name: "Archishmaan Das",
    role: "Developer",
    bio: "Loves Coffee and Code",
    socials: {
      github: "#",
      linkedin: "#",
    },
    // Profile Placeholder
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "Soumyadeep Paul",
    role: "Developer",
    bio: "Loves Coffee and Code",
    socials: {
      github: "#",
      linkedin: "#",
    },
    // Profile Placeholder
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
];

export default function Team() {
  return (
    <section className="w-full py-20 px-4 bg-gray-50 dark:bg-black/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Meet the Team
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            The passionate individuals behind MoM working to make your meetings more productive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-xl shadow-gray-200/50 dark:shadow-none hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 ring-4 ring-blue-50 dark:ring-blue-900/20 group-hover:ring-blue-100 dark:group-hover:ring-blue-900/40 transition-all">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-2 border-white dark:border-[#1a1a1a] rounded-full" title="Online" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {member.role}
                  </p>
                </div>

                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex items-center gap-4 pt-4">
                  <a
                    href={member.socials.github}
                    className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    className="p-2 text-slate-400 hover:text-[#0077b5] hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}