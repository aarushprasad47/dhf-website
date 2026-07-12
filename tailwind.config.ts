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
        navy: {
          50: "#eef1f8",
          100: "#d5ddf0",
          200: "#aabae1",
          300: "#7e97d2",
          400: "#5374c3",
          500: "#2751b4",
          600: "#1f3e8a",
          700: "#172e65",
          800: "#0f1f43",
          900: "#0a1429",
          950: "#060c1a",
        },
        gold: {
          50: "#fdf8ec",
          100: "#faefd0",
          200: "#f4da99",
          300: "#eec462",
          400: "#e8ae3b",
          500: "#c9972a",
          600: "#a47520",
          700: "#7d5518",
          800: "#573b12",
          900: "#3a270c",
        },
        stone: {
          warm: "#f5f0e8",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        display: ["Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
