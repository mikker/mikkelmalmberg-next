const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        stripest: `0 0 0 1px rgba(45, 65, 135, 0.2),
        0 2px 5px 0 rgba(50, 50, 105, 0.05),
        0 1px 1px 0 rgba(0, 0, 0, 0.05)`,
        stripestFocus: `0 0 0 1px rgba(45, 83, 212, 0.3),
        0 1px 1px 0 rgba(0, 0, 0, 0.07),
        0 0 0 4px rgba(45, 83, 212, 0.3)`,
      },
      colors: {
        gray: colors.trueGray,
        gold: {
          50: "#FFFDF9",
          100: "#FFFBF3",
          200: "#FEF6E1",
          300: "#FDF0CF",
          400: "#FCE5AA",
          500: "#FADA86",
          600: "#E1C479",
          700: "#968350",
          800: "#71623C",
          900: "#4B4128",
        },
      },
      typography: (theme) => ({
        light: {
          css: [
            {
              color: theme("colors.gray.200"),
              '[class~="lead"]': {
                color: theme("colors.gray.300"),
              },
              a: {
                color: theme("colors.white"),
              },
              strong: {
                color: theme("colors.white"),
              },
              "ol > li::before": {
                color: theme("colors.gray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600"),
              },
              hr: {
                borderColor: theme("colors.gray.200"),
              },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600"),
              },
              h1: {
                color: theme("colors.white"),
              },
              h2: {
                color: theme("colors.white"),
              },
              h3: {
                color: theme("colors.white"),
              },
              h4: {
                color: theme("colors.white"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: theme("colors.white"),
              },
              "a code": {
                color: theme("colors.white"),
              },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
            },
          ],
        },
        DEFAULT: {
          css: {
            h5: {
              fontWeight: 600,
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark']
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
