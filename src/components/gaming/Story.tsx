"use client";
import React from "react";
import { motion } from "framer-motion";

export function Story() {
  return (
    <section className="py-32 bg-black relative border-y border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text */}
        <div>
            <span className="text-fuchsia-500 font-mono text-sm tracking-widest">/// MISSION_START_V.2.0</span>
            <h2 className="text-5xl md:text-7xl font-black text-white mt-4 mb-6 uppercase leading-none">
                Survive The <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">Night City</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-4 border-purple-900 pl-6">
                The neon lights hide the darkness within. Join the resistance and fight against the mega-corporations controlling the future.
            </p>
            
            {/* Button - Pink Glow */}
            <button className="relative px-8 py-3 bg-fuchsia-600 text-white font-black uppercase tracking-wider hover:bg-fuchsia-700 transition-all shadow-[0_0_20px_rgba(192,38,211,0.4)] hover:shadow-[0_0_40px_rgba(192,38,211,0.6)] skew-x-[-10deg]">
                <span className="skew-x-[10deg] inline-block">Enter Story Mode</span>
            </button>
        </div>

        {/* Right: Visual */}
        <div className="relative">
            <motion.div 
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="relative z-10 border-2 border-fuchsia-500/30 p-2 rounded-lg bg-black"
            >
                <img 
                    src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop" 
                    alt="Cyber City" 
                    className="rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
                />
            </motion.div>
            
            {/* Background Glow (Purple) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-600/30 blur-[100px] rounded-full" />
        </div>

      </div>
    </section>
  );
}