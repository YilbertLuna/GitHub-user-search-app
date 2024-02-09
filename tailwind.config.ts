import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        'lightBg': "#f6f8ff",
        'lightInfoUser': '#f6f8ff',
        'darkBg': "#141d2f",
        'darkUser': '#1e2a47',
        'darkUserInfo': '#141d2f',
        'button': '#0079ff'
      },
      boxShadow: {
        'inputShadow': '0 35px 60px -15px rgba(70, 69, 187, 0.2)'
      },
      screens:{
        'desktop': '1360px',
      }
    },
  },
  plugins: [],
};
export default config;
