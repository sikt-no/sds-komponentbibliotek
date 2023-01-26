module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  plugins: ["react", "jsx-a11y"],
  rules: {
    /*"jsx-a11y/anchor-ambiguous-text": [
      "error",
      {
        words: [
          "lenke",
          "klikk",
          "klikk her",
          "les",
          "les mer",
          "les her",
          "les mer her",
          "se",
          "se mer",
          "se mer her",
          "her",
          "mer",
        ],
      },
    ],*/
    "jsx-a11y/control-has-associated-label": "error",
  },
};
