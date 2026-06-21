"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-zinc-100 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-blue-500"></span>
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 text-zinc-400 text-lg leading-relaxed">
          <div>
            <p className="mb-6">
              I am a dedicated software engineer currently working at <strong>eVision microsystems</strong>, where I've specialized in building complex, production-ready applications. My expertise spans across mobile development, backend services, and cloud infrastructure.
            </p>
            <p className="mb-6">
              To date, I have successfully developed <strong>5 major Flutter projects</strong> for eVision, including comprehensive SFA, ERP, POS, and HRIS systems. I love diving deep into mobile architectures, utilizing state management like Riverpod, offline-first databases like Drift, and implementing OTA updates via Shorebird.
            </p>
            <p>
              Beyond mobile, I have substantial experience building robust backend systems with ASP.NET and Vue.js dashboards, as well as developing Python-based AI microservices using FastAPI and Scikit-learn.
            </p>
          </div>
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800/50 relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <h3 className="text-xl font-semibold text-zinc-200 mb-4">My Philosophy</h3>
             <ul className="space-y-4">
               <li className="flex items-start gap-3">
                 <span className="text-blue-500 mt-1">▹</span>
                 <span><strong>Rigorous Engineering:</strong> Whether it's managing complex widget trees in Flutter or writing efficient SQL queries, clean code is non-negotiable.</span>
               </li>
               <li className="flex items-start gap-3">
                 <span className="text-blue-500 mt-1">▹</span>
                 <span><strong>Continuous Delivery:</strong> I leverage GitHub Actions, Firebase App Distribution, and Docker to ensure seamless deployments.</span>
               </li>
               <li className="flex items-start gap-3">
                 <span className="text-blue-500 mt-1">▹</span>
                 <span><strong>Impact Driven:</strong> I focus on solutions that solve real business problems, from HR efficiency to sales automation.</span>
               </li>
             </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
