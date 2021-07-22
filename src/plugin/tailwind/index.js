const plugin = require("tailwindcss/plugin");

const myPlugin = plugin(function ({
  addUtilities,
  variants,
  addComponents,
  theme,
  e,
}) {
  //   console.log(theme("colors"));
  const colors = theme("colors");
  const baseSelectors = Object.keys(colors)
    .map((color) => {
      if (typeof colors[color] === "object") {
        return Object.keys(colors[color]).map((shade) => {
          return `.${e(`textshadow-neon-${color}-${shade}`)}`;
        });
      }
      return `.textshadow-neon-${color}`;
    })
    .flat();

  addUtilities([
    { ".w-fit": { width: "fit-content" } },
    {
      ".textshadow-neon": {
        textShadow: `0 0 .2rem #fff,
              0 0 .2rem #fff,
              0 0 2rem rgb(59, 130, 246),
              0 0 0.8rem rgb(59, 130, 246),
              0 0 2.8rem rgb(59, 130, 246)
              `,
      },
    },
    Object.keys(colors)
      .map((color) => {
        if (typeof colors[color] === "object") {
          return Object.keys(colors[color]).map((shade) => {
            console.log(shade);
            return {
              [`.${e(`textshadow-neon-${color}-${shade}`)}`]: {
                "--tw-textshadow-neon": theme(`colors.${color}.${shade}`),
                textShadow: `0 0 .2rem #fff,
              0 0 .2rem #fff,
              0 0 2rem var(--tw-textshadow-neon),
              0 0 0.8rem var(--tw-textshadow-neon),
              0 0 2.8rem var(--tw-textshadow-neon)
              `,
              },
            };
          });
        }
        return {
          [`.textshadow-neon-${color}`]: {
            textShadow: `0 0 .2rem #fff,
              0 0 .2rem #fff,
              0 0 2rem ${theme(`colors.${color}`)},
              0 0 0.8rem ${theme(`colors.${color}`)},
              0 0 2.8rem ${theme(`colors.${color}`)}
              `,
          },
        };
      })
      .flat(),
    // {
    //   [baseSelectors]: {
    //     textShadow: `0 0 .2rem #fff,
    //           0 0 .2rem #fff,
    //           0 0 2rem var(--tw-textshadow-neon),
    //           0 0 0.8rem var(--tw-textshadow-neon),
    //           0 0 2.8rem var(--tw-textshadow-neon)
    //           `,
    //   },
    // },
  ]);
});
module.exports = myPlugin;
