/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

"primary": "#667703",

"secondary": "#b8a0ef",

"accent": "#47cc39",

"neutral": "#1d151e",

"base-100": "#f7f5fa",

"info": "#3c74cd",

"success": "#46dd94",

"warning": "#f6b81e",

"error": "#ef6c75",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

