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
        sans: ["monospace", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        localhostTheme: {
          primary: "#000000",
          secondary: "#e5e7eb",
          accent: "#3EFBCB",
          neutral: "#1e8f8a",
          "base-100": "#044C4C",
          info: "#0e7490",
          success: "#00FFFF",
          warning: "#eab308",
          error: "#881337",
        },
      },
      "dark",
      "bumblebee",
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
