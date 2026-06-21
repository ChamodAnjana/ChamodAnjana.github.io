"use client";

import { motion } from "framer-motion";
import { Smartphone, Monitor, Cloud, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Mobile (Flutter)",
    icon: <Smartphone className="text-cyan-500" size={24} />,
    skills: ["Flutter", "Dart", "Riverpod", "Provider", "Drift", "Shorebird", "Firebase", "App Store & TestFlight"],
  },
  {
    title: "Backend & Web",
    icon: <Monitor className="text-green-500" size={24} />,
    skills: ["ASP.NET", "C#", "SQL", "Vue.js", "JQuery", "DevExpress", "Hibernate ORM", "CSS"],
  },
  {
    title: "DevOps & Infrastructure",
    icon: <Cloud className="text-purple-500" size={24} />,
    skills: ["Linux Servers", "GitHub Actions", "Docker", "Kubernetes", "Firebase Distribution", "Web Hosting"],
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="text-blue-500" size={24} />,
    skills: ["Python", "FastAPI", "Scikit-Learn", "HTTP Packages", "Data Processing"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 text-zinc-100 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-blue-500"></span>
          Technical Pillars
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-zinc-800/50 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-zinc-200">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
