"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-[80vh] px-6 text-center pt-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="z-10 mb-8 relative"
      >
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl relative mx-auto">
          <Image 
            src="/profile.png" 
            alt="Chamod Anjana" 
            fill 
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="z-10"
      >
        <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-4">
          Software Engineer
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-zinc-100">
          Chamod Anjana
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          <span className="text-zinc-200">Flutter Developer</span> &{" "}
          <span className="text-zinc-200">Full-Stack Engineer</span> at eVision microsystems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/chamodanjana"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 active:scale-95"
          >
            <Linkedin size={18} />
            Let's Connect
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-full font-medium transition-all border border-zinc-700 hover:border-zinc-600 hover:scale-105 active:scale-95"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
