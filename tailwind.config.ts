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
        midGray: '#333333',
        successGreen: '#00B797',
        lightGreen: '#F2FBFA',
        greyScale: '#DDDDDD'
      }
    },
  },
  plugins: [],
};
export default config;
