/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  endOfLine: "lf",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
