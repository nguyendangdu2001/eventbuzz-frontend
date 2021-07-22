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
          return `.${e(`shadow-neon-${color}-${shade}`)}`;
        });
      }
      return `.shadow-neon-${color}`;
    })
    .flat()
    .join(",\n");

  addUtilities([
    {
      [baseSelectors]: {
        textShadow: `0 0 .2rem #fff,
              0 0 .2rem #fff,
              0 0 2rem var(--tw-shadow-neon),
              0 0 0.8rem var(--tw-shadow-neon),
              0 0 2.8rem var(--tw-shadow-neon)
              inset 0 0 1.3rem var(--tw-shadow-neon)
              `,
      },
    },
    { ".w-fit": { width: "fit-content" } },
    {
      ".shadow-neon": {
        textShadow: `0 0 .2rem #fff,
              0 0 .2rem #fff,
              0 0 2rem #3b82f6,
              0 0 0.8rem #3b82f6,
              0 0 2.8rem #3b82f6
              `,
      },
    },
    Object.keys(colors)
      .map((color) => {
        if (typeof colors[color] === "object") {
          return Object.keys(colors[color]).map((shade) => {
            console.log(shade);
            return {
              [`.${e(`shadow-neon-${color}-${shade}`)}`]: {
                "--tw-shadow-neon": colors[color][shade],
              },
            };
          });
        }
        return {
          [`.shadow-neon-${color}`]: {
            boxShadow: `0 0 .2rem #fff,
              0 0 .2rem #fff,
              0 0 2rem ${colors[color]},
              0 0 0.8rem ${colors[color]},
              0 0 2.8rem ${colors[color]},
              inset 0 0 1.3rem ${colors[color]}
              `,
          },
        };
      })
      .flat(),
  ]);
});
module.exports = myPlugin;
