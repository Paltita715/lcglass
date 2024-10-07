/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0754A4",
          50: "#E3F2FD",
          100: "#BBE0F3",
          200: "#90C6E0",
          300: "#65A8CE",
          400: "#3A8EB8",
          500: "#0754A4",
          600: "#064E8D",
          700: "#054570",
          800: "#043556",
          900: "#021E3B",
        },
        secondary: {
          DEFAULT: "#00A7FF",
          50: "#E0F7FF",
          100: "#B3E3FF",
          200: "#80CFFF",
          300: "#4DBBFF",
          400: "#26A6E4",
          500: "#00A7FF",
          600: "#0091D0",
          700: "#0081B3",
          800: "#0071A6",
          900: "#005D8C",
        },
        accent: {
          DEFAULT: "#D93033",
          50: "#FEE6E7",
          100: "#FCD4D7",
          200: "#F9A8AB",
          300: "#F57C81",
          400: "#F0555A",
          500: "#D93033",
          600: "#C52829",
          700: "#B71C1F",
          800: "#A41015",
          900: "#8E0D12",
        },
      },
      fontFamily: {
        oswald: ["Oswald", "system-ui"],
        quicksand: ["Quicksand", "system-ui"],
      },
    },
  },
  plugins: [],
}
