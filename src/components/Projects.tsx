"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

type Category = "All" | "Mobile (Flutter)" | "Backend" | "AI/ML";

const projects = [
  {
    title: "SFA Mobile Application",
    description: "A comprehensive Sales Force Automation app built for eVision microsystems. Features offline-first architecture via Drift, GPS background services, QR scanning, and Shorebird OTA updates.",
    category: "Mobile (Flutter)",
    tech: ["Flutter", "Riverpod", "Drift", "Shorebird", "Firebase"],
    github: "",
    live: ""
  },
  {
    title: "Enterprise ERP & POS Dashboard",
    description: "A robust backend system and web dashboard powering point-of-sale and HRIS solutions. Utilized Vue.js for the frontend and ASP.NET for secure, highly scalable APIs.",
    category: "Backend",
    tech: ["ASP.NET", "C#", "SQL", "Vue.js", "Hibernate ORM"],
    github: "",
    live: ""
  },
  {
    title: "Predictive Analytics Microservice",
    description: "An AI-driven API service designed to provide data insights. Leveraged Python and Scikit-learn for model training, served via a highly concurrent FastAPI backend.",
    category: "AI/ML",
    tech: ["Python", "FastAPI", "Scikit-learn"],
    github: "",
    live: ""
  },
  {
    title: "HRIS Mobile Portal",
    description: "A specialized human resource information system mobile app for employees to track attendance, leave, and payroll. Implemented secure JWT and cookie-based authentication.",
    category: "Mobile (Flutter)",
    tech: ["Flutter", "Provider", "App Store Connect", "TestFlight"],
    github: "",
    live: ""
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const categories: Category[] = ["All", "Mobile (Flutter)", "Backend", "AI/ML"];

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-zinc-100 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-blue-500"></span>
          Featured Work
        </h2>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 flex flex-col hover:border-zinc-600 transition-colors group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-zinc-400">
                    {project.github && (
                      <a href={project.github} className="hover:text-zinc-100 transition-colors"><Github size={20} /></a>
                    )}
                    {project.live && (
                      <a href={project.live} className="hover:text-zinc-100 transition-colors"><ExternalLink size={20} /></a>
                    )}
                  </div>
                </div>
                <p className="text-zinc-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-zinc-500">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
