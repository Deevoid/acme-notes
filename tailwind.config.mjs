/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        body: "rgb(0, 2, 18)",
        accent: "rgb(136, 58, 234)",
      },
    },
  },
  plugins: [],
};
