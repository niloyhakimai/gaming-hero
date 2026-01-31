"use client";
import React from "react";
import { motion } from "framer-motion";
import { Crosshair, Shield, Zap } from "lucide-react";

const agents = [
  {
    name: "SHADOW",
    role: "Stealth",
    desc: "Master of shadows. Can turn invisible and strike from behind.",
    icon: <Zap />,
    color: "from-purple-600 to-fuchsia-600", // Purple Theme
    img: "https://images.unsplash.com/photo-1616499370260-485b3e5ed653?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "SPECTRE",
    role: "Sniper",
    desc: "Long-range specialist. One shot, one kill technology.",
    icon: <Crosshair />,
    color: "from-fuchsia-600 to-pink-600", // Pink Theme
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "VANGUARD",
    role: "Tank",
    desc: "Heavy armor unit equipped with energy shields.",
    icon: <Shield />,
    color: "from-violet-600 to-purple-800", // Dark Violet Theme
    img: "https://images.unsplash.com/photo-1592478411213-61535fdd280c?q=80&w=1983&auto=format&fit=crop"
  }
];

export function Characters() {
  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-purple-900/20">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.15),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">
                Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">Legend</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {agents.map((agent, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="group relative h-[500px] bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden cursor-pointer hover:border-fuchsia-500/50 transition-colors duration-500"
                >
                    {/* Image */}
                    <img src={agent.img} alt={agent.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                    
                    {/* Gradient Overlay (Purple/Pink) */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${agent.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 w-full p-6">
                        <div className="flex items-center gap-2 text-white mb-2">
                            <span className="p-2 bg-purple-500/20 text-fuchsia-400 rounded-lg backdrop-blur-md">{agent.icon}</span>
                            <span className="text-sm font-mono text-fuchsia-200 uppercase tracking-widest">{agent.role}</span>
                        </div>
                        <h3 className="text-4xl font-black text-white italic mb-2 glitch-effect">{agent.name}</h3>
                        <p className="text-gray-400 text-sm border-l-2 border-fuchsia-500 pl-3">
                            {agent.desc}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}