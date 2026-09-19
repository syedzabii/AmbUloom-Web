import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#FAFAF7", // warm off-white
          dark: "#0D2B1A", // deep forest green
        },
        primary: {
          50: "#F2F7F4", // soft green tint background
          100: "#E2ECE5",
          200: "#C5D9CB",
          DEFAULT: "#0D2B1A", // deep forest green - Islamic
          dark: "#081B10", // deeper emerald
          light: "#164529",
        },
        secondary: {
          DEFAULT: "#164529", // deep emerald green for high contrast & elegance
          dark: "#0D2B1A",
          light: "#225C37",
        },
        gold: {
          DEFAULT: "#C8972A", // warm gold
          light: "#D4A946",
          dark: "#B38520",
        },
        accent: {
          blue: "#2563EB",
          "blue-light": "#EFF6FF",
          green: "#10B981",
          "green-light": "#ECFDF5",
        },
        text: {
          primary: "#1A1A1A",
          secondary: "#4A5568", // slate grey secondary text
          muted: "#6B7280",
          inverse: "#FFFFFF",
        },
        border: {
          gold: "rgba(200, 151, 42, 0.2)",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        accent: ["var(--font-amiri)", "serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(200, 151, 42, 0.15)",
        "glow-sm": "0 0 20px rgba(200, 151, 42, 0.15)",
        card: "0 8px 30px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 20px 40px rgba(0, 0, 0, 0.08)",
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(to right, #b38520, #C8972A, #d4a946)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
