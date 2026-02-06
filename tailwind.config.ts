import { transform } from "framer-motion";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-sans)",
      },
      animation: {
        'ping-large': "ping-large 1s ease-in-out infinite",
        'move-left': "move-left 30s linear infinite",
        'move-right': "move-right 30s linear infinite",
        'fade-in-up': "fade-in-up 0.6s ease-out forwards",
        'fade-in-up-1': "fade-in-up 0.6s ease-out 0.1s forwards",
        'fade-in-up-2': "fade-in-up 0.6s ease-out 0.2s forwards",
        'fade-in-up-3': "fade-in-up 0.6s ease-out 0.3s forwards",
        'fade-in-up-4': "fade-in-up 0.6s ease-out 0.4s forwards",
        'fade-in-up-5': "fade-in-up 0.6s ease-out 0.5s forwards",
      },

      keyframes: {
        'ping-large': {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '75%, 100%': {
            transform: 'scale(4)',
            opacity: '0',
          },
        },
        'move-left': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
        'move-right': {
          '0%': {
            transform: 'translateX(-50%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      }
    },
  },
  plugins: [],
};
export default config;
