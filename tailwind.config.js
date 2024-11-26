const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "index.html", flowbite.content()],
  theme: {
    extend: {
      // Add 16:10 aspect ratio container
      aspectRatio: {
        "16/10": "16 / 10",
      },
      // Screen breakpoints maintaining 16:10
      screens: {
        "16/10-sm": "640px", // 640x400
        "16/10-md": "1024px", // 1024x640
        "16/10-lg": "1280px", // 1280x800
        "16/10-xl": "1600px", // 1600x1000
        "16/10-2xl": "1920px", // 1920x1200
      },
      // Container sizes for 16:10
      width: {
        "16/10-sm": "640px",
        "16/10-md": "1024px",
        "16/10-lg": "1280px",
        "16/10-xl": "1600px",
        "16/10-2xl": "1920px",
      },
      height: {
        "16/10-sm": "400px",
        "16/10-md": "640px",
        "16/10-lg": "800px",
        "16/10-xl": "1000px",
        "16/10-2xl": "1200px",
      },
      // Scale factors for responsive sizing
      scale: {
        "16/10": "1.6", // 16:10 ratio
      },
      // Custom spacing for 16:10 layouts
      spacing: {
        "16/10": "160%",
        "10/16": "62.5%",
      },
      // Grid template for 16:10
      gridTemplateColumns: {
        "16/10": "repeat(16, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        "16/10": "repeat(10, minmax(0, 1fr))",
      },
    },
  },
  plugins: [flowbite.plugin()],
  mode: "jit",
};
