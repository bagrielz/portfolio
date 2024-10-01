import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#F0F0F0",
          100: "#E8E8E8",
          200: "#C0C0C0",
          300: "#909090",
          400: "#787878",
          500: "#646464",
        },
        dark: {
          50: "#121212",
          100: "#0D0D0D",
        },
      },
      animation: {
        shine: "shine 2s linear infinite",
      },
      keyframes: {
        shine: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
