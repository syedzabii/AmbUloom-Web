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
        // Brand colors inspired by Ambaa Ul Uloom
        primary: {
          DEFAULT: "#1A572A", // Deep green from logo
          light: "#236B37", // Lighter shade
          dark: "#124019", // Darker shade
          50: "#E8F5EB",
          100: "#D1EBD7",
          200: "#A3D7AF",
          300: "#75C387",
          400: "#47AF5F",
          500: "#1A572A",
          600: "#154623",
          700: "#10341B",
          800: "#0B2312",
          900: "#051109",
        },
        // Secondary colors inspired by Duolingo's vibrant palette
        secondary: {
          DEFAULT: "#58CC02", // Duolingo's signature green
          light: "#7DD644",
          dark: "#45A001",
        },
        // Accent colors for highlights and CTAs
        accent: {
          blue: "#1CB0F6", // Duolingo's blue
          orange: "#FF9600", // Warm accent
          yellow: "#FFD900", // Highlight color
        },
        // Background colors
        background: {
          primary: "#FFFFFF",
          secondary: "#F7F7F7",
          tertiary: "#E5E5E5",
        },
        // Text colors
        text: {
          primary: "#333333",
          secondary: "#666666",
          tertiary: "#999999",
          inverse: "#FFFFFF",
        },
        // Status colors
        status: {
          success: "#58CC02",
          error: "#FF4B4B",
          warning: "#FFC800",
          info: "#1CB0F6",
        },
      },
      // Add border radius for that modern 3D look
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      // Box shadow for 3D effect
      boxShadow: {
        button: "0 4px 0 0 rgba(0, 0, 0, 0.2)",
        "button-hover": "0 6px 0 0 rgba(0, 0, 0, 0.2)",
        card: "0 8px 16px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        jakarta: ["var(--font-plus-jakarta)"],
        inter: ["var(--font-inter)"],
      },
      // Add font size utilities inspired by Duolingo
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-lg": ["3rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", fontWeight: "700" }],
        "display-sm": ["1.875rem", { lineHeight: "1.2", fontWeight: "700" }],
        "display-xs": ["1.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        "body-xl": ["1.25rem", { lineHeight: "1.5" }],
        "body-lg": ["1.125rem", { lineHeight: "1.5" }],
        "body-md": ["1rem", { lineHeight: "1.5" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "body-xs": ["0.75rem", { lineHeight: "1.5" }],
      },
    },
  },
  plugins: [],
};

export default config;
