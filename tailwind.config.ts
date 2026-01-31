import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: "#0f0c15", // মেইন ব্যাকগ্রাউন্ড
          red: "#ff0055",  // নিয়ন রেড
          accent: "#2a2a3e", // কার্ড ব্যাকগ্রাউন্ড
        }
      },
      fontFamily: {
        // গুগলের 'Orbitron' বা 'Montserrat' ফন্ট হলে ভালো হতো, আপাতত ডিফল্ট থাকুক
        sans: ['var(--font-geist-sans)'],
      }
    },
  },
  plugins: [],
};
export default config;