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
      boxShadow: {
        'outline': '0 0 0 3px rgba(66, 153, 225, 0.5)', // Example custom shadow
      }
    },
  },
  daisyui: {
    themes: [
      {
        sesaTheme: {
          primary: "#00112b", // sesa navy
          "primary-content": "#ffffff", // white
          secondary: "#49bfaa", // sesa teal dark
          accent: "#70c7b0", // sesa teal light
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
