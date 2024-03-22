/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },

  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],

  overrides: [
    {
      env: { node: true },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: { sourceType: "script" },
    },
  ],

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  plugins: ["@typescript-eslint"],

  rules: {
    "linebreak-style": ["error", "unix"],
    "max-len": [
      "error",
      {
        code: 79,
      },
    ],
  },
};
