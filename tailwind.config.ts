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
        successGreen: "#00B797",
        lightGreen: "#F2FBFA",
        customGrey: {
          100: "#DDDDDD",
          200: "#999999",
          300: "#333333",
        },
      },
    },
  },
  plugins: [],
};
export default config;
