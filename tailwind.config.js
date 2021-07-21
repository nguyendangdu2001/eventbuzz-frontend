const plugin = require("tailwindcss/plugin");

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
      },
      animation: {
        floating: "floating 2s ease-in-out infinite",
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
    plugin(function ({ addUtilities }) {
      addUtilities({
        "w-fit": { width: "fit-content" },
      });
    }),
  ],
};
