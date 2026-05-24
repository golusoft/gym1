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
        primary: {
          DEFAULT: "#ef2b2b",
          50: "#fff1f1",
          100: "#ffdfdf",
          200: "#ffc5c5",
          300: "#ff9d9d",
          400: "#ff6464",
          500: "#ef2b2b",
          600: "#dc1414",
          700: "#b90d0d",
          800: "#990f0f",
          900: "#7e1414",
          950: "#450505",
        },
        neon: {
          red: "#ff0033",
          pink: "#ff2d6d",
          cyan: "#00f0ff",
        },
        dark: {
          900: "#0a0a0a",
          800: "#111111",
          700: "#181818",
          600: "#1f1f1f",
          500: "#262626",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(20,0,0,0.7) 50%, rgba(0,0,0,0.95) 100%)",
        "red-glow":
          "radial-gradient(circle at center, rgba(239,43,43,0.35) 0%, rgba(239,43,43,0) 70%)",
      },
      boxShadow: {
        "neon-red": "0 0 20px rgba(239,43,43,0.45), 0 0 40px rgba(239,43,43,0.25)",
        "neon-soft": "0 0 12px rgba(239,43,43,0.35)",
        glass: "0 8px 32px 0 rgba(0,0,0,0.45)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 12px rgba(239,43,43,0.35)" },
          "50%": { boxShadow: "0 0 28px rgba(239,43,43,0.7)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shine: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        shine: "shine 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
