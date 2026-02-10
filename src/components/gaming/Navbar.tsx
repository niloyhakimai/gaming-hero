"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "#" },
    { title: "About", href: "#" },
    { title: "Characters", href: "#" },
    { title: "BattlePass", href: "#" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/5"
      >
        {/* --- LOGO --- */}
        <div className="text-xl md:text-2xl font-black tracking-tighter italic drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] text-white cursor-pointer">
          CYBER<span className="text-cyber-red">NINJA</span>
        </div>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
          {navLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="hover:text-white transition-all hover:shadow-[0_0_10px_white] hover:scale-105"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* --- RIGHT SIDE (LOGIN & MOBILE TOGGLE) --- */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-6 py-2 text-sm border border-cyber-red/50 text-cyber-red rounded hover:bg-cyber-red hover:text-white transition shadow-[0_0_15px_rgba(255,0,85,0.3)] font-bold skew-x-[-10deg]">
            <span className="inline-block skew-x-[10deg]">LOGIN</span>
          </button>

          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden text-white hover:text-cyber-red transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[70px] left-0 w-full bg-black/90 backdrop-blur-xl border-b border-cyber-red/30 z-40 overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-6 gap-4 items-center">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-neutral-300 hover:text-cyber-red hover:tracking-widest transition-all"
                >
                  {item.title}
                </motion.a>
              ))}
              <motion.button 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 px-8 py-2 w-full bg-cyber-red text-white font-bold rounded skew-x-[-10deg]"
              >
                LOGIN
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};