import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Overpass", "sans-serif"],
      },
      colors: {
        sesa: {
          navy: {
            dark: "#00112b",
            light: "#2f455c",
          },
          teal: {
            dark: "#49bfaa",
            light: "#70c7b0",
          },
        },
      },
      boxShadow: {
        outline: "0 0 0 3px rgba(66, 153, 225, 0.5)", // Example custom shadow
      },
    },
  },
};
export default config;
