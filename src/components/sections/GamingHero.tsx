"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Play, Zap, Shield, Crosshair, Users } from "lucide-react";

// --- 1. HYDRATION SAFE PARTICLES ---
const CyberParticles = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const items = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 5,
      xOffset: Math.random() * 100 - 50
    }));
    setParticles(items);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 bg-cyber-red/50 rounded-full"
          initial={{ opacity: 0, y: "100vh" }}
          animate={{ 
            opacity: [0, 1, 0],
            y: "-10vh",
            x: p.xOffset
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
          style={{ left: `${p.left}%` }}
        />
      ))}
    </div>
  );
};

// --- 2. TILT CARD ---
const TiltCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      className="relative p-5 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-cyber-red/60 transition-all group cursor-pointer w-full hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,85,0.2)]"
    >
       <div className="relative z-10">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyber-red to-purple-600 flex items-center justify-center mb-3 text-white shadow-lg group-hover:scale-110 transition-transform">
             <Icon size={20} />
          </div>
          <h4 className="font-bold text-white mb-1 group-hover:text-cyber-red transition-colors text-sm md:text-base">{title}</h4>
          <p className="text-xs text-neutral-400 leading-relaxed">{desc}</p>
       </div>
       <div className="absolute inset-0 bg-gradient-to-br from-cyber-red/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

// --- MAIN HERO COMPONENT ---
export function GamingHero() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, -50]);
  
  // --- 3D MOVEMENT LOGIC (Improved) ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Physics: Stiffness কম এবং Damping এডজাস্ট করা হয়েছে বাটারি স্মুথনেসের জন্য
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  
  // Rotation Range Increased for better visibility (10deg instead of 5deg)
  const rotateX = useTransform(springY, [-0.5, 0.5], ["8deg", "-8deg"]); 
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Desktop Check
    if (typeof window !== 'undefined') {
        const { clientX, clientY } = e;
        const width = window.innerWidth;
        const height = window.innerHeight;
        const xPct = (clientX / width) - 0.5;
        const yPct = (clientY / height) - 0.5;
        mouseX.set(xPct);
        mouseY.set(yPct);
    }
  };

  const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
  }

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen bg-[#050505] overflow-x-hidden font-sans text-white perspective-1000 flex flex-col"
      style={{ perspective: "1000px" }} // Stronger 3D Depth
    >
      
      {/* 3D WRAPPER */}
      <motion.div 
         style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
         className="w-full h-full flex flex-col flex-1 relative will-change-transform"
      >

          {/* 1. 3D GRID FLOOR */}
          <div className="absolute bottom-[-10%] w-full h-[60vh] bg-[linear-gradient(to_bottom,transparent_0%,#ff0055_100%)] opacity-20 [transform:perspective(500px)_rotateX(60deg)] origin-bottom z-0 pointer-events-none">
             <div className="absolute inset-0 bg-[size:50px_50px] bg-grid-white/[0.2] animate-[grid-move_20s_linear_infinite]" />
          </div>

          {/* 2. BACKGROUND ATMOSPHERE */}
          <motion.div style={{ x: springX, y: springY }} className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] bg-cyber-red/10 blur-[120px] rounded-full pointer-events-none z-0" />
          <motion.div style={{ x: useTransform(springX, v => -v), y: useTransform(springY, v => -v) }} className="absolute bottom-[-20%] right-[-20%] w-[80vw] h-[80vw] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none z-0" />
          
          {/* 3. NAVBAR */}
          <nav className="relative w-full p-4 md:p-6 flex justify-between items-center z-50 transform-style-3d translate-z-10">
            <div className="text-xl md:text-2xl font-black tracking-tighter italic drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                CYBER<span className="text-cyber-red">NINJA</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
                {['Home', 'About', 'Characters', 'BattlePass'].map((item) => (
                    <span key={item} className="hover:text-white cursor-pointer hover:shadow-[0_0_10px_white] transition-all">{item}</span>
                ))}
            </div>
            <button className="px-4 py-1.5 md:px-6 md:py-2 text-sm border border-cyber-red/50 text-cyber-red rounded hover:bg-cyber-red hover:text-white transition shadow-[0_0_15px_rgba(255,0,85,0.3)] font-bold">
                LOGIN
            </button>
          </nav>

          {/* 4. CONTENT WRAPPER */}
          <div className="flex-1 max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row items-center relative z-10 pt-4 md:pt-0 pb-32 md:pb-0 transform-style-3d">
            
            {/* LEFT CONTENT */}
            <motion.div 
                style={{ y: yText, transform: "translateZ(40px)" }}
                className="w-full md:w-1/2 z-20 text-center md:text-left order-1 md:order-1 relative"
            >
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-center md:justify-start gap-3 mb-2"
                >
                    <span className="w-10 h-[3px] bg-cyber-red shadow-[0_0_10px_#ff0055]"></span>
                    <h3 className="text-cyber-red font-bold tracking-[0.3em] text-xs md:text-sm shadow-black drop-shadow-md">THE NEW ERA</h3>
                </motion.div>
                
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] mb-4 italic"
                >
                    CYBER <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                        NINJA
                    </span>
                </motion.h1>

                <p className="text-gray-300 text-sm md:text-lg max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed font-medium">
                    Step into the shadows. Master the art of stealth. 
                    <span className="text-white font-bold block mt-2">Join 2.5M Players Online.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start transform-style-3d translate-z-10">
                    <button className="group relative px-8 py-3 bg-cyber-red font-bold text-white skew-x-[-10deg] hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,0,85,0.5)]">
                        <span className="inline-block skew-x-[10deg]">PLAY NOW</span>
                    </button>
                    <button className="px-8 py-3 border border-white/20 bg-black/30 backdrop-blur-md font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition skew-x-[-10deg]">
                        <span className="inline-block skew-x-[10deg] flex items-center gap-2">
                            <Play size={18} fill="currentColor" /> TRAILER
                        </span>
                    </button>
                </div>
            </motion.div>

            {/* RIGHT CONTENT (CHARACTER) - Fixed Lighting & Visibility */}
            <motion.div 
                style={{ transform: "translateZ(80px)" }} // Pops out more
                className="w-full md:w-1/2 h-[45vh] md:h-full relative z-10 flex items-center justify-center order-2 md:order-2 mt-6 md:mt-0 pointer-events-none transform-style-3d"
            >
                <motion.div
                   animate={{ y: [-15, 15, -15] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   className="relative w-full h-full flex items-center justify-center"
                >
                    {/* 1. STRONG BACKGROUND GLOW (For Silhouette) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-cyber-red/40 blur-[80px] md:blur-[120px] rounded-full animate-pulse" />
                    
                    {/* 2. SPOTLIGHT (For Front Lighting) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-white/10 blur-[60px] rounded-full mix-blend-overlay" />

                    <img 
                        src="https://pngimg.com/d/ninja_PNG25.png" 
                        alt="Cyber Ninja"
                        // UPDATED: brightness-125 & drop-shadow to separate from black background
                        className="h-full w-auto object-contain z-20 brightness-125 contrast-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        style={{ maxHeight: "100%" }}
                    />
                    
                    {/* STATUS BADGE */}
                    <div className="absolute top-[20%] left-[0%] md:left-[10%] bg-black/80 backdrop-blur-md border border-cyber-red/50 px-4 py-1 rounded text-xs font-mono text-cyber-red z-30 shadow-[0_0_20px_rgba(255,0,85,0.3)]">
                        ● ONLINE
                    </div>
                </motion.div>
            </motion.div>

          </div>

          {/* 5. CARDS (Responsive Grid with 3D Float) */}
          <motion.div 
             className="w-full px-4 pb-10 md:absolute md:bottom-10 md:pb-0 z-30 transform-style-3d translate-z-20"
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.5 }}
          >
             <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <TiltCard delay={0.4} icon={Zap} title="Ray Tracing" desc="Real-time lighting & reflections." />
                <TiltCard delay={0.5} icon={Crosshair} title="Precision Aim" desc="Zero latency input response." />
                <TiltCard delay={0.6} icon={Shield} title="Anti-Cheat" desc="Kernel level protection system." />
                <TiltCard delay={0.7} icon={Users} title="Clan System" desc="Build your legacy with friends." />
             </div>
          </motion.div>

          <CyberParticles />
          
      </motion.div>
    </section>
  );
}