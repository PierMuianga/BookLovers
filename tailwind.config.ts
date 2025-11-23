import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./node_modules/@headlessui/react/dist/components/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(222, 89%, 62%)",
          foreground: "hsl(0, 0%, 100%)"
        },
        glass: "hsla(0, 0%, 100%, 0.65)",
        eco: "hsl(145, 63%, 42%)",
        cute: "hsl(323, 81%, 72%)",
        professional: "hsl(210, 30%, 24%)"
      },
      backdropBlur: {
        xs: "2px"
      },
      fontFamily: {
        sans: ["'InterVariable'", "system-ui", "sans-serif"],
        dyslexic: ["'Atkinson Hyperlegible'", "Inter", "sans-serif"]
      },
      boxShadow: {
        glass: "0 10px 40px rgba(15, 23, 42, 0.25)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.08)"
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), plugin(({ addVariant }) => {
    addVariant("hocus", ["&:hover", "&:focus"]);
  })]
};

export default config;
