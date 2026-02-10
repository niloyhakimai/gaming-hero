// import { Navbar } from "@/components/sections"; // আপনার যদি থাকে
import { GamingHero } from "@/components/sections/GamingHero"; // আগের হিরো সেকশন
import { Characters } from "@/components/gaming/Characters"; // নতুন
import { Story } from "@/components/gaming/Story"; // নতুন
import { GamingFooter } from "@/components/gaming/GamingFooter"; // নতুন
import { Navbar } from "@/components/gaming/Navbar";

export default function GamingPage() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <GamingHero />
      <Story />
      <Characters />
      <GamingFooter />
    </main>
  );
}