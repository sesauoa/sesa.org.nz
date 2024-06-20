import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Overpass", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        sesaTheme: {
          primary: "#00112b", // navy
          "primary-content": "#FFFFFF", // white
          secondary: "#e5e7eb",
          accent: "#70c7b0", // light teal
          neutral: "#1e8f8a",
          "base-100": "#044C4C",
          info: "#0e7490",
          success: "#00FFFF",
          warning: "#eab308",
          error: "#881337",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
