/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,scss}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
        title: "Epilogue, sans-serif",
      },
      colors: {
        primary: "#82B397",
        "rich-black": "#001A23",
      },
    },
  },
  plugins: [],
};
