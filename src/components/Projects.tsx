"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";

type Category = "All" | "Mobile (Flutter)" | "Backend" | "AI/ML";

type Project = {
  title: string;
  description: string;
  category: Category;
  tech: string[];
  github: string;
  live: string;
  caseStudy: {
    businessImpact: string;
    technicalChallenges: string;
  };
};

const projects: Project[] = [
  {
    title: "SFA Mobile Application",
    description: "A comprehensive Sales Force Automation app built for eVision microsystems. Features offline-first architecture via Drift, GPS background services, QR scanning, and Shorebird OTA updates.",
    category: "Mobile (Flutter)",
    tech: ["Flutter", "Riverpod", "Drift", "Shorebird", "Firebase"],
    github: "",
    live: "",
    caseStudy: {
      businessImpact: "Increased field sales productivity by 40% through real-time sync and streamlined order processing.",
      technicalChallenges: "Implementing a robust offline-first sync mechanism using Drift and resolving complex merge conflicts when reconnecting to poor network areas."
    }
  },
  {
    title: "Enterprise ERP & POS Dashboard",
    description: "A robust backend system and web dashboard powering point-of-sale and HRIS solutions. Utilized Vue.js for the frontend and ASP.NET for secure, highly scalable APIs.",
    category: "Backend",
    tech: ["ASP.NET", "C#", "SQL", "Vue.js", "Hibernate ORM"],
    github: "",
    live: "",
    caseStudy: {
      businessImpact: "Centralized operational data across 50+ retail branches, reducing inventory discrepancies to near-zero.",
      technicalChallenges: "Designing a high-throughput, low-latency API capable of handling thousands of concurrent POS transactions while maintaining strict ACID compliance."
    }
  },
  {
    title: "Predictive Analytics Microservice",
    description: "An AI-driven API service designed to provide data insights. Leveraged Python and Scikit-learn for model training, served via a highly concurrent FastAPI backend.",
    category: "AI/ML",
    tech: ["Python", "FastAPI", "Scikit-learn"],
    github: "",
    live: "",
    caseStudy: {
      businessImpact: "Empowered business leaders with actionable forecasting, leading to a 15% reduction in stockouts.",
      technicalChallenges: "Optimizing the machine learning inference pipeline within FastAPI to respond within 50ms and containerizing the deployment for Kubernetes."
    }
  },
  {
    title: "HRIS Mobile Portal",
    description: "A specialized human resource information system mobile app for employees to track attendance, leave, and payroll. Implemented secure JWT and cookie-based authentication.",
    category: "Mobile (Flutter)",
    tech: ["Flutter", "Provider", "App Store Connect", "TestFlight"],
    github: "",
    live: "",
    caseStudy: {
      businessImpact: "Streamlined HR processes for over 10,000 employees, entirely eliminating manual paper-based leave requests.",
      technicalChallenges: "Securing sensitive biometric and payroll data on-device and implementing seamless, token-based session management across background states."
    }
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
                layoutId={`project-${project.title}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 flex flex-col hover:border-zinc-600 transition-colors group cursor-pointer"
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

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            >
              <motion.div
                layoutId={`project-${selectedProject.title}`}
                onClick={(e) => e.stopPropagation()}
                className="bg-zinc-900 border border-zinc-700 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors bg-zinc-800 p-2 rounded-full"
                >
                  <X size={20} />
                </button>
                
                <h3 className="text-3xl font-bold text-zinc-100 mb-2 pr-12">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                
                <p className="text-zinc-300 mb-8 leading-relaxed text-lg">
                  {selectedProject.description}
                </p>
                
                <div className="space-y-6">
                  <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
                    <h4 className="text-xl font-semibold text-zinc-100 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                      Business Impact
                    </h4>
                    <p className="text-zinc-400 leading-relaxed">
                      {selectedProject.caseStudy.businessImpact}
                    </p>
                  </div>
                  
                  <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
                    <h4 className="text-xl font-semibold text-zinc-100 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-purple-500 rounded-full"></span>
                      Technical Challenges
                    </h4>
                    <p className="text-zinc-400 leading-relaxed">
                      {selectedProject.caseStudy.technicalChallenges}
                    </p>
                  </div>
                </div>
                
                {(selectedProject.github || selectedProject.live) && (
                  <div className="flex gap-4 mt-8 pt-8 border-t border-zinc-800">
                    {selectedProject.github && (
                      <a href={selectedProject.github} className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full font-medium transition-colors">
                        <Github size={20} /> Source Code
                      </a>
                    )}
                    {selectedProject.live && (
                      <a href={selectedProject.live} className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-colors">
                        <ExternalLink size={20} /> Live Demo
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
