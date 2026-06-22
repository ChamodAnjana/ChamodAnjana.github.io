"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 bg-[#050505]">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Animated Error Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative inline-block mb-4">
            <h1 className="text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-purple-600 drop-shadow-lg">
              404
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 blur-2xl -z-10 rounded-full" />
          </div>
          
          <h2 className="text-3xl font-semibold text-zinc-100 mb-6">
            Page Not Found
          </h2>
          <p className="text-zinc-400 text-lg max-w-md mx-auto leading-relaxed">
            Oops! The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
          </p>
        </motion.div>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center pt-6"
        >
          <Link
            href="/"
            className="group flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-800/80 text-zinc-200 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] active:scale-95"
          >
            <Home size={20} className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />
            <span>Return to Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
