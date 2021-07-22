// const ar = require("@tailwindcss/aspect-ratio");s
module.exports = {
  mode: "jit",
  purge: {
    enable: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,css}", "./index.html"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        neon: `0 0 .2rem #fff,
              0 0 .2rem #fff,
              0 0 2rem #3b82f6,
              0 0 0.8rem #3b82f6,
              0 0 2.8rem #3b82f6,
              inset 0 0 1.3rem #3b82f6`,
      },
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(10px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        flicker: {
          "0%, 18%, 22%, 25%, 53%, 57%, 100%": {
            boxShadow: `0 0 .2rem #fff,
              0 0 .2rem #fff,
              0 0 2rem #3b82f6,
              0 0 0.8rem #3b82f6,
              0 0 2.8rem #3b82f6,
              inset 0 0 1.3rem #3b82f6`,
          },
          "20%, 24%, 55%": { boxShadow: "none" },
        },
      },
      animation: {
        floating: "floating 2s ease-in-out infinite",
        flicker: "flicker 1.5s forwards",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  variants: {
    extend: { contrast: ["dark"], backdropBrightness: ["dark"] },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("./src/plugin/tailwind"),
  ],
};
