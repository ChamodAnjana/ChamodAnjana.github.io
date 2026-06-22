"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 p-10 md:p-16 rounded-3xl text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-100 relative z-10">
          Let&apos;s Build Something Great
        </h2>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10 relative z-10">
          Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I&apos;ll try my best to get back to you!
        </p>

        <div className="flex flex-wrap justify-center gap-6 relative z-10">
          <a
            href="mailto:chamodanjana9651@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-900 rounded-full font-semibold hover:bg-white hover:scale-105 transition-all"
          >
            <Mail size={20} />
            Email Me
          </a>
          <a
            href="https://github.com/ChamodAnjana"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-zinc-800 text-zinc-100 rounded-full font-semibold hover:bg-zinc-700 hover:scale-105 transition-all"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ChamodAnjana"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-full font-semibold hover:bg-[#004182] hover:scale-105 transition-all"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://x.com/Chamod_Anjana_"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-black hover:scale-105 transition-all border border-zinc-800"
          >
            <span className="font-bold text-lg">𝕏</span>
          </a>
          <a
            href="https://web.facebook.com/EKChamodAnjana"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white rounded-full font-semibold hover:bg-[#166FE5] hover:scale-105 transition-all"
          >
            <span className="font-bold">f</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
