import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
      },
      fontFamily: {
        poppins: ['Ubuntu', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
