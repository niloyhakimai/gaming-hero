# 🕹️ 3D Gaming / Cyberpunk Hero Section

A high-performance, interactive, and fully responsive 3D Hero Section built for **Next.js 14**. It features mouse-parallax effects, 3D tilt animations, and a futuristic "Cyber Ninja" theme.

## ✨ Features

- **🌌 Full Section 3D Float:** The entire website (background, text, character) tilts and rotates in 3D space based on mouse movement.
- **🥷 Interactive 3D Character:** The Ninja character floats, glows, and has a depth effect (Parallax) that pops out of the screen.
- **📱 Fully Responsive:** Optimized for Mobile, Tablet, and Desktop.
    - *Mobile Fix:* Enhanced lighting and glow effects ensure the character is visible even on dark mobile screens.
    - *Performance:* Heavy calculations are disabled on mobile to save battery.
- **⚡ Buttery Smooth Animations:** Uses `Framer Motion` physics (springs) for fluid, non-jittery movement.
- **🃏 3D Tilt Cards:** Feature cards that respond to mouse hover with a realistic tilt effect.
- **🛠️ Hydration Safe:** Particle effects are generated client-side to prevent Next.js server mismatches.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 🚀 Installation Guide

### 1. Install Dependencies
Make sure you have the required packages installed:

```bash
npm install framer-motion lucide-react clsx tailwind-merge