import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          black: "#0a0a0a",
          "black-secondary": "#1a1a1a",
        },
        accent: {
          gold: "#ffd700",
          purple: "#8a2be2",
          blue: "#00bfff",
        },
        text: {
          white: "#ffffff",
          gray: "#cccccc",
          dark: "#333333",
        },
      },
      fontFamily: {
        primary: ["var(--font-montserrat)", "sans-serif"],
        secondary: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

