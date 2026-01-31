"use client";
import React from "react";
import { Twitch, Youtube, Twitter } from "lucide-react";

export function GamingFooter() {
  return (
    <footer className="bg-neutral-950 border-t border-purple-500/10 pt-20 pb-10 relative overflow-hidden">
      
      {/* Footer Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-fuchsia-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        
        <h2 className="text-3xl font-black text-white uppercase italic mb-8">
            Join the <span className="text-fuchsia-500">Resistance</span>
        </h2>

        <div className="flex justify-center gap-6 mb-12">
            <SocialBtn icon={<Twitch />} />
            <SocialBtn icon={<Youtube />} />
            <SocialBtn icon={<Twitter />} />
        </div>

        <div className="border-t border-white/5 pt-8 text-gray-500 font-mono text-sm">
            <p>&copy; 2026 CYBER NINJA. ALL SYSTEMS OPERATIONAL.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialBtn({ icon }: { icon: any }) {
    return (
        <button className="p-4 bg-black border border-white/10 text-white hover:border-fuchsia-500 hover:text-fuchsia-500 hover:shadow-[0_0_20px_rgba(192,38,211,0.5)] transition-all transform hover:-translate-y-1">
            {icon}
        </button>
    )
}